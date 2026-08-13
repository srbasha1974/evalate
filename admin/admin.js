/* Evaluator dashboard — Kedil Evaluation Portal */
(function () {
  "use strict";

  var sb = null;
  var currentUser = null;
  var profiles = [];      // all profiles (admin can read all)
  var assessments = [];
  var profileById = {};
  var openId = null;      // currently open assessment id
  var filters = { domain: "", level: "", status: "", before: "", search: "" };
  var selected = {};      // assessment id -> true, for bulk delete

  // all domains' data files register themselves here (embedded, service, ...)
  var REG = window.EVAL_REGISTRY || {};

  function domainData(domain) { return REG[domain] || null; }
  function domainLabel(domain) {
    var d = domainData(domain);
    return d ? d.domainLabel : domain;
  }
  function levelOf(a) {
    var d = domainData(a.domain);
    return d && d.levels[a.level] ? d.levels[a.level] : null;
  }
  function levelLabel(a) {
    var lv = levelOf(a);
    return lv ? lv.label : a.level;
  }

  function $(id) { return document.getElementById(id); }
  function show(id) {
    ["screen-config", "screen-auth", "screen-denied", "screen-dash"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== id);
    });
  }
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }
  function fmtDate(ts) {
    if (!ts) return "—";
    var d = new Date(ts);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  function name(p) {
    if (!p) return "(unknown)";
    var n = ((p.first_name || "") + " " + (p.last_name || "")).trim();
    return n || p.email || "(no name)";
  }

  // ---------- boot ----------
  if (!EVAL_CONFIG.SUPABASE_URL || !EVAL_CONFIG.SUPABASE_ANON_KEY) {
    show("screen-config");
    return;
  }
  sb = window.supabase.createClient(EVAL_CONFIG.SUPABASE_URL, EVAL_CONFIG.SUPABASE_ANON_KEY);

  sb.auth.getSession().then(function (res) {
    var session = res.data ? res.data.session : null;
    if (session) { currentUser = session.user; gate(); }
    else { show("screen-auth"); }
  });

  $("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var el = $("auth-msg");
    el.classList.add("hidden");
    $("auth-submit").disabled = true;
    sb.auth.signInWithPassword({
      email: $("auth-email").value.trim(),
      password: $("auth-password").value
    }).then(function (res) {
      $("auth-submit").disabled = false;
      if (res.error) {
        el.textContent = res.error.message;
        el.className = "msg msg-err";
        return;
      }
      currentUser = res.data.user;
      gate();
    });
  });

  $("btn-signout").addEventListener("click", function () {
    sb.auth.signOut().then(function () { location.reload(); });
  });

  function gate() {
    $("who-email").textContent = currentUser.email;
    $("btn-signout").classList.remove("hidden");
    sb.rpc("is_admin").then(function (res) {
      if (res.data === true) {
        show("screen-dash");
        loadAll();
      } else {
        show("screen-denied");
      }
    });
  }

  // ---------- tabs ----------
  var TABS = ["assessments", "candidates", "evaluators"];
  TABS.forEach(function (t) {
    $("tab-" + t).addEventListener("click", function () {
      TABS.forEach(function (x) {
        $("tab-" + x).classList.toggle("active", x === t);
        $("panel-" + x).classList.toggle("hidden", x !== t);
      });
    });
  });

  // ---------- filters ----------
  function populateDomainFilter() {
    var sel = $("f-domain");
    Object.keys(REG).forEach(function (d) {
      var opt = document.createElement("option");
      opt.value = d;
      opt.textContent = REG[d].domainLabel || d;
      sel.appendChild(opt);
    });
  }

  function populateLevelFilter() {
    var sel = $("f-level");
    var keep = filters.level;
    sel.innerHTML = '<option value="">All levels</option>';
    var domains = filters.domain ? [filters.domain] : Object.keys(REG);
    var seen = {};
    domains.forEach(function (d) {
      var dd = REG[d];
      if (!dd) return;
      Object.keys(dd.levels).forEach(function (k) {
        var label = dd.levels[k].label + (filters.domain ? "" : " (" + dd.domainLabel + ")");
        var optKey = filters.domain ? k : d + "::" + k;
        if (seen[optKey]) return;
        seen[optKey] = true;
        var opt = document.createElement("option");
        opt.value = optKey;
        opt.textContent = label;
        sel.appendChild(opt);
      });
    });
    if (keep && seen[keep]) sel.value = keep; else filters.level = "";
  }

  function matchesFilters(a) {
    if (filters.domain && a.domain !== filters.domain) return false;
    if (filters.level) {
      var levelKey = filters.level.indexOf("::") !== -1 ? filters.level.split("::") : [a.domain, filters.level];
      if (a.domain !== levelKey[0] || a.level !== levelKey[1]) return false;
    }
    if (filters.status && effectiveStatus(a) !== filters.status) return false;
    if (filters.before) {
      if (!a.started_at) return false;
      var cutoff = new Date(filters.before + "T23:59:59").getTime();
      if (new Date(a.started_at).getTime() > cutoff) return false;
    }
    if (filters.search) {
      var p = profileById[a.user_id];
      var hay = ((p ? name(p) : "") + " " + (p ? p.email || "" : "")).toLowerCase();
      if (hay.indexOf(filters.search.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function filteredAssessments() {
    return assessments.filter(matchesFilters);
  }

  populateDomainFilter();
  populateLevelFilter();

  $("f-domain").addEventListener("change", function () {
    filters.domain = $("f-domain").value;
    populateLevelFilter();
    selected = {};
    renderAssessments();
  });
  ["f-level", "f-status"].forEach(function (id) {
    $(id).addEventListener("change", function () {
      filters.level = $("f-level").value;
      filters.status = $("f-status").value;
      selected = {};
      renderAssessments();
    });
  });
  $("f-before").addEventListener("change", function () {
    filters.before = $("f-before").value;
    selected = {};
    renderAssessments();
  });
  $("f-search").addEventListener("input", function () {
    filters.search = $("f-search").value.trim();
    selected = {};
    renderAssessments();
  });
  $("btn-clear-filters").addEventListener("click", function () {
    filters = { domain: "", level: "", status: "", before: "", search: "" };
    $("f-domain").value = ""; $("f-status").value = ""; $("f-before").value = ""; $("f-search").value = "";
    populateLevelFilter();
    selected = {};
    renderAssessments();
  });

  // ---------- bulk delete ----------
  function updateBulkBar() {
    var ids = Object.keys(selected).filter(function (id) { return selected[id]; });
    $("bulk-count").textContent = ids.length + " selected";
    $("btn-bulk-delete").disabled = ids.length === 0;
  }

  $("btn-bulk-delete").addEventListener("click", function () {
    var ids = Object.keys(selected).filter(function (id) { return selected[id]; });
    if (!ids.length) return;
    if (!window.confirm("Permanently delete " + ids.length + " assessment attempt" +
        (ids.length > 1 ? "s" : "") + "? Candidates will be able to retake the deleted level(s). This cannot be undone.")) return;
    $("btn-bulk-delete").disabled = true;
    Promise.all(ids.map(function (id) { return sb.rpc("reset_attempt", { p_id: id }); }))
      .then(function () {
        $("btn-bulk-delete").disabled = false;
        selected = {};
        if (openId && ids.indexOf(openId) !== -1) {
          openId = null;
          $("assess-detail").classList.add("hidden");
        }
        loadAll();
      });
  });

  // ---------- data ----------
  function loadAll() {
    Promise.all([
      sb.from("profiles").select("*").order("created_at", { ascending: false }),
      sb.from("assessments").select("*").order("started_at", { ascending: false }),
      sb.from("admins").select("*").order("created_at")
    ]).then(function (rs) {
      profiles = rs[0].data || [];
      assessments = rs[1].data || [];
      profileById = {};
      profiles.forEach(function (p) { profileById[p.user_id] = p; });
      renderAssessments();
      renderCandidates();
      renderAdmins(rs[2].data || []);
      if (openId) {
        var row = assessments.find(function (a) { return a.id === openId; });
        if (row) renderDetail(row); else { openId = null; $("assess-detail").classList.add("hidden"); }
      }
    });
  }

  // ---------- assessments list ----------
  function effectiveStatus(a) {
    if (a.status === "in_progress") {
      return new Date(a.deadline_at).getTime() > Date.now() ? "in_progress" : "expired";
    }
    if (a.status === "submitted") return "submitted";
    return "reviewed";
  }

  function statusBadge(a) {
    var s = effectiveStatus(a);
    if (s === "in_progress") return '<span class="badge badge-warn">In progress</span>';
    if (s === "expired") return '<span class="badge badge-warn">Expired (not submitted)</span>';
    if (s === "submitted") return '<span class="badge">Awaiting review</span>';
    return '<span class="badge badge-good">Reviewed</span>';
  }

  function codingState(a) {
    var lv = levelOf(a);
    if (!lv || !lv.codingCount) return "—";
    if (a.modules && a.modules.indexOf("Coding") === -1) return "—";
    var scored = 0;
    lv.modules.forEach(function (m) {
      if (m.type !== "coding") return;
      m.questions.forEach(function (q) {
        if (a.coding_review && a.coding_review[String(q.id)]) scored++;
      });
    });
    return scored + " / " + lv.codingCount + " scored";
  }

  function renderAssessments() {
    if (!assessments.length) {
      $("assess-list").innerHTML = '<p class="lead">No assessments yet.</p>';
      updateBulkBar();
      return;
    }
    var rows = filteredAssessments();
    if (!rows.length) {
      $("assess-list").innerHTML = '<p class="lead">No assessments match the current filters.</p>';
      updateBulkBar();
      return;
    }
    var allChecked = rows.length > 0 && rows.every(function (a) { return selected[a.id]; });
    var html = '<table class="grid"><tr><th><input type="checkbox" id="chk-all"' +
      (allChecked ? " checked" : "") + '></th><th>Candidate</th><th>Domain</th><th>Level</th><th>Status</th>' +
      "<th>MCQ score</th><th>Coding</th><th>Started</th><th>Submitted</th></tr>";
    rows.forEach(function (a) {
      var p = profileById[a.user_id];
      var ig = integritySummary(a);
      html += '<tr class="clickable" data-id="' + a.id + '">' +
        '<td><input type="checkbox" class="chk-row" data-id="' + a.id + '"' +
        (selected[a.id] ? " checked" : "") + "></td>" +
        "<td>" + esc(name(p)) +
        (ig && ig.notable ? ' <span class="badge badge-warn" title="Left the tab ' + ig.tabSwitchCount +
          ' time(s), ' + ig.tabAwayMinutes + ' min away">Flagged</span>' : "") +
        "<br><small style='color:var(--muted)'>" + esc(p ? p.email : "") + "</small></td>" +
        "<td>" + esc(domainLabel(a.domain)) + "</td>" +
        "<td>" + esc(levelLabel(a)) + "</td>" +
        "<td>" + statusBadge(a) + "</td>" +
        "<td>" + (a.mcq_score != null ? a.mcq_score + " / " + a.mcq_total : "—") + "</td>" +
        "<td>" + codingState(a) + "</td>" +
        "<td>" + fmtDate(a.started_at) + "</td>" +
        "<td>" + fmtDate(a.submitted_at) + "</td></tr>";
    });
    html += "</table>";
    if (assessments.length !== rows.length) {
      html = '<p style="font-size:0.85rem;color:var(--muted);margin:0 0 10px">Showing ' +
        rows.length + " of " + assessments.length + " assessments.</p>" + html;
    }
    $("assess-list").innerHTML = html;

    $("chk-all").addEventListener("click", function (e) {
      e.stopPropagation();
      var check = $("chk-all").checked;
      rows.forEach(function (a) { selected[a.id] = check; });
      renderAssessments();
    });
    Array.prototype.forEach.call(
      $("assess-list").querySelectorAll("input.chk-row"),
      function (chk) {
        chk.addEventListener("click", function (e) { e.stopPropagation(); });
        chk.addEventListener("change", function () {
          selected[chk.getAttribute("data-id")] = chk.checked;
          updateBulkBar();
        });
      });
    Array.prototype.forEach.call(
      $("assess-list").querySelectorAll("tr[data-id]"),
      function (tr) {
        tr.addEventListener("click", function () {
          openId = tr.getAttribute("data-id");
          var row = assessments.find(function (a) { return a.id === openId; });
          renderDetail(row);
          $("assess-detail").scrollIntoView({ behavior: "smooth" });
        });
      });
    updateBulkBar();
  }

  // ---------- qualitative skill analysis ----------
  // ---------- integrity signals ----------
  function integritySummary(a) {
    var g = a.integrity;
    if (!g) return null;
    var tabSwitchCount = g.tabSwitchCount || 0;
    var tabAwayMs = g.tabAwayMs || 0;
    var pasteCount = g.pasteCount || 0;
    var largePasteCount = g.largePasteCount || 0;
    if (!tabSwitchCount && !pasteCount) return null;
    return {
      tabSwitchCount: tabSwitchCount,
      tabAwayMinutes: Math.round((tabAwayMs / 60000) * 10) / 10,
      pasteCount: pasteCount,
      largePasteCount: largePasteCount,
      notable: tabSwitchCount >= 3 || tabAwayMs >= 60000 || largePasteCount >= 1
    };
  }

  function qualitativeAnalysis(a) {
    if (!a.module_scores) return null;
    var strong = [], moderate = [], weak = [];
    Object.keys(a.module_scores).forEach(function (m) {
      var s = a.module_scores[m];
      if (!s.total) return;
      var pct = (s.score / s.total) * 100;
      if (pct >= 75) strong.push(m);
      else if (pct >= 50) moderate.push(m);
      else weak.push(m);
    });

    var combinedScore = a.mcq_score || 0, combinedMax = a.mcq_total || 0;
    var codingIncluded = a.coding_score != null && a.coding_total;
    if (codingIncluded) { combinedScore += a.coding_score; combinedMax += a.coding_total; }
    var combinedPct = combinedMax ? (combinedScore / combinedMax) * 100 : null;

    var verdict, verdictKind;
    if (combinedPct == null) {
      verdict = "Not enough scored data yet to assess.";
      verdictKind = "info";
    } else if (combinedPct >= 75) {
      verdict = "Strong overall performance for this level — consistent command across most topics tested.";
      verdictKind = "ok";
    } else if (combinedPct >= 50) {
      verdict = "Moderate performance — solid in some areas, with clear gaps in others worth probing further.";
      verdictKind = "warn";
    } else {
      verdict = "Below expectations for this level, with gaps across multiple areas tested.";
      verdictKind = "err";
    }

    return {
      strong: strong, moderate: moderate, weak: weak,
      combinedPct: combinedPct, verdict: verdict, verdictKind: verdictKind,
      codingIncluded: codingIncluded
    };
  }

  // ---------- PDF export ----------
  function writeWrapped(doc, text, x, y, maxWidth, lineHeight) {
    var lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + lines.length * (lineHeight || 13);
  }

  function fetchQuestionResults(a) {
    return sb.rpc("get_question_results", { p_id: a.id }).then(function (res) {
      if (res.error || !res.data) return null; // function not added yet, or not authorized — degrade gracefully
      var map = {};
      res.data.forEach(function (row) { map[String(row.question_id)] = row.is_correct; });
      return map;
    }).catch(function () { return null; });
  }

  function exportPdf(a) {
    if (!window.jspdf || !window.jspdf.jsPDF) throw new Error("PDF library did not load");
    return fetchQuestionResults(a).then(function (results) { buildPdf(a, results); });
  }

  function buildPdf(a, results) {
    var p = profileById[a.user_id];
    var lv = levelOf(a);
    var qa = qualitativeAnalysis(a);
    var brand = (window.EVAL_BRANDING && window.EVAL_BRANDING[a.domain]) || null;

    var doc = new window.jspdf.jsPDF({ unit: "pt", format: "a4" });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 40;
    var y;

    var footText = brand
      ? (brand.company + "  ·  " + brand.address + "  ·  " + brand.phone + "  ·  " + brand.email + "  ·  " + brand.website)
      : "Kedil Evaluation Portal";
    doc.setFontSize(8);
    var footLines = doc.splitTextToSize(footText, pageW - margin * 2);
    var footBlockH = footLines.length * 10 + 22;

    function ensureSpace(needed) {
      if (y + needed > pageH - footBlockH - 10) { doc.addPage(); y = 40; }
    }

    if (brand) {
      var headerH = 86;
      doc.setFillColor(brand.colorDark);
      doc.rect(0, 0, pageW, headerH, "F");
      var logoH = 44;
      var logoW = logoH * (brand.logoAspect || 1);
      try { doc.addImage(brand.logo, "PNG", margin, (headerH - logoH) / 2, logoW, logoH); } catch (e) { /* logo optional */ }
      doc.setTextColor("#ffffff");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(15);
      doc.text(brand.company, margin + logoW + 16, headerH / 2 - 3);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(brand.tagline, margin + logoW + 16, headerH / 2 + 13);
      y = headerH + 30;
    } else {
      y = 44;
    }

    doc.setTextColor("#1c2430");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Candidate Assessment Report", margin, y);
    y += 26;

    doc.setFontSize(10);
    var topicsText = a.modules
      ? (a.modules.length + " of " + (lv ? lv.modules.length : "?") + " — " + a.modules.join(", "))
      : "All topics";
    var rows = [
      ["Candidate", name(p)],
      ["Email", p ? p.email || "—" : "—"],
      ["Domain", domainLabel(a.domain)],
      ["Level", levelLabel(a)],
      ["Topics tested", topicsText],
      ["Started", fmtDate(a.started_at)],
      ["Submitted", fmtDate(a.submitted_at)],
      ["Reviewed", a.reviewed_at ? fmtDate(a.reviewed_at) + (a.reviewed_by ? " by " + a.reviewed_by : "") : "—"]
    ];
    rows.forEach(function (row) {
      doc.setFont("helvetica", "bold");
      doc.text(row[0] + ":", margin, y);
      doc.setFont("helvetica", "normal");
      y = writeWrapped(doc, String(row[1] || "—"), margin + 110, y, pageW - margin * 2 - 110, 13);
    });
    y += 8;

    var body = Object.keys(a.module_scores || {}).map(function (m) {
      var s = a.module_scores[m];
      var pct = s.total ? Math.round((s.score / s.total) * 100) : 0;
      return [m, s.score + " / " + s.total, pct + "%"];
    });
    if (a.coding_score != null) {
      var codingPct = a.coding_total ? Math.round((a.coding_score / a.coding_total) * 100) : null;
      body.push(["Coding (evaluator-scored)", a.coding_score + " / " + a.coding_total, codingPct != null ? codingPct + "%" : "—"]);
    }
    if (body.length) {
      doc.autoTable({
        startY: y,
        margin: { left: margin, right: margin },
        head: [["Module", "Score", "%"]],
        body: body,
        theme: "grid",
        styles: { fontSize: 10 },
        headStyles: brand ? { fillColor: brand.colorPrimary } : undefined
      });
      y = doc.lastAutoTable.finalY + 24;
    }

    ensureSpace(80);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Skill analysis", margin, y);
    y += 18;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    if (qa) {
      y = writeWrapped(doc, qa.verdict, margin, y, pageW - margin * 2) + 8;
      if (qa.strong.length) y = writeWrapped(doc, "Strengths: " + qa.strong.join(", "), margin, y, pageW - margin * 2) + 6;
      if (qa.moderate.length) y = writeWrapped(doc, "Moderate: " + qa.moderate.join(", "), margin, y, pageW - margin * 2) + 6;
      if (qa.weak.length) y = writeWrapped(doc, "Needs improvement: " + qa.weak.join(", "), margin, y, pageW - margin * 2) + 6;
    } else {
      doc.text("Not enough scored data yet.", margin, y);
      y += 16;
    }
    y += 10;

    var ig = integritySummary(a);
    if (ig) {
      ensureSpace(50);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor("#1c2430");
      doc.text("Integrity signals", margin, y);
      y += 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor.apply(doc, ig.notable ? [180, 45, 45] : [90, 100, 115]);
      var igLine = "Left the exam tab " + ig.tabSwitchCount + (ig.tabSwitchCount === 1 ? " time" : " times") +
        (ig.tabAwayMinutes > 0 ? " (" + ig.tabAwayMinutes + " min total away)" : "") + ". " +
        (ig.pasteCount > 0
          ? ig.pasteCount + " paste" + (ig.pasteCount === 1 ? "" : "s") + " into the coding editor" +
            (ig.largePasteCount > 0 ? ", " + ig.largePasteCount + " large (40+ characters in one go)" : "") + "."
          : "No pastes into the coding editor.");
      y = writeWrapped(doc, igLine, margin, y, pageW - margin * 2) + 4;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(120);
      y = writeWrapped(doc, "Not proof of anything on its own — a heuristic to weigh alongside the answers.", margin, y, pageW - margin * 2, 10) + 12;
      doc.setTextColor("#1c2430");
    }

    // full answer sheet — every question the candidate saw, with what they answered.
    // The literal correct answer text is never shown/available here (the answer key
    // is intentionally never sent to the browser at all) — but if get_question_results
    // resolved (results != null), we do know per-question right/wrong as a boolean,
    // which is safe to surface without ever exposing the correct option itself.
    var qModules = (lv ? lv.modules : []).filter(function (m) {
      return !a.modules || a.modules.indexOf(m.name) !== -1;
    });

    function questionOutcome(q, type) {
      var chosen = a.answers ? a.answers[String(q.id)] : null;
      if (type === "coding") {
        var rv = (a.coding_review || {})[String(q.id)] || {};
        if (!chosen) return { label: "Unanswered", color: [140, 140, 140] };
        if (rv.score == null) return { label: "Not yet scored", color: [140, 140, 140] };
        return { label: rv.score + " / 10", color: rv.score >= 6 ? [30, 130, 60] : [180, 45, 45] };
      }
      if (!chosen) return { label: "Unanswered", color: [140, 140, 140] };
      if (!results || results[String(q.id)] == null) return { label: "Answered", color: [90, 100, 115] };
      return results[String(q.id)]
        ? { label: "Correct", color: [30, 130, 60] }
        : { label: "Wrong", color: [180, 45, 45] };
    }

    if (qModules.length) {
      ensureSpace(50);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor("#1c2430");
      doc.text("Question Index", margin, y);
      y += 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(120);
      var indexNote = results
        ? "Quick-reference list of every question and its outcome, in the same order as the detailed Answer Sheet below."
        : "Quick-reference list of every question and whether it was answered. Correct/Wrong marking requires a one-time database update (get_question_results) that hasn't been applied yet — see supabase-question-results.sql.";
      y = writeWrapped(doc, indexNote, margin, y, pageW - margin * 2, 10) + 8;
      doc.setTextColor("#1c2430");

      var indexBody = [];
      qModules.forEach(function (m) {
        m.questions.forEach(function (q, qi) {
          var o = questionOutcome(q, m.type);
          indexBody.push([m.name, String(qi + 1), o.label, o.color]);
        });
      });
      doc.autoTable({
        startY: y,
        margin: { left: margin, right: margin },
        head: [["Module", "Q#", "Result"]],
        body: indexBody.map(function (r) { return [r[0], r[1], r[2]]; }),
        theme: "grid",
        styles: { fontSize: 9 },
        headStyles: brand ? { fillColor: brand.colorPrimary } : undefined,
        didParseCell: function (data) {
          if (data.section === "body" && data.column.index === 2) {
            var color = indexBody[data.row.index][3];
            data.cell.styles.textColor = color;
            data.cell.styles.fontStyle = "bold";
          }
        }
      });
      y = doc.lastAutoTable.finalY + 24;

      ensureSpace(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor("#1c2430");
      doc.text("Answer Sheet", margin, y);
      y += 16;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(120);
      y = writeWrapped(doc, "Full detail for each question above, in the same order — module, then question number.", margin, y, pageW - margin * 2, 10) + 10;
      doc.setTextColor("#1c2430");

      var letters = ["A", "B", "C", "D"];
      qModules.forEach(function (m) {
        ensureSpace(28);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(m.name, margin, y);
        y += 15;

        m.questions.forEach(function (q, qi) {
          if (m.type === "coding") {
            var code = (a.answers && a.answers[String(q.id)]) || "";
            var rv = (a.coding_review || {})[String(q.id)] || {};
            var codingOutcome = questionOutcome(q, "coding");
            ensureSpace(30);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor.apply(doc, codingOutcome.color);
            doc.text("[" + codingOutcome.label + "]", pageW - margin, y, { align: "right" });
            doc.setTextColor("#1c2430");
            y = writeWrapped(doc, (qi + 1) + ". " + q.text, margin, y, pageW - margin * 2 - 60, 12) + 3;
            doc.setFont("courier", "normal");
            doc.setFontSize(8);
            if (code) {
              doc.splitTextToSize(code, pageW - margin * 2 - 10).forEach(function (line) {
                ensureSpace(11);
                doc.text(line, margin + 8, y);
                y += 10;
              });
            } else {
              doc.setTextColor(150);
              ensureSpace(11);
              doc.text("No answer given.", margin + 8, y);
              y += 10;
              doc.setTextColor("#1c2430");
            }
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            if (rv.score != null) {
              y = writeWrapped(doc, "Evaluator score: " + rv.score + " / 10" + (rv.feedback ? "  —  " + rv.feedback : ""), margin, y, pageW - margin * 2, 11) + 2;
            }
            y += 8;
          } else {
            var chosen = a.answers ? a.answers[String(q.id)] : null;
            var mcqOutcome = questionOutcome(q, "mcq");
            ensureSpace(34);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor.apply(doc, mcqOutcome.color);
            doc.text("[" + mcqOutcome.label + "]", pageW - margin, y, { align: "right" });
            doc.setTextColor("#1c2430");
            y = writeWrapped(doc, (qi + 1) + ". " + q.text, margin, y, pageW - margin * 2 - 60, 12) + 2;
            doc.setFont("helvetica", "normal");
            (q.options || []).forEach(function (opt, oi) {
              var l = letters[oi];
              var isChosen = chosen === l;
              ensureSpace(12);
              if (isChosen) {
                doc.setFont("helvetica", "bold");
                doc.setTextColor.apply(doc, mcqOutcome.color);
              }
              y = writeWrapped(doc, (isChosen ? "-> " : "    ") + l + ") " + opt, margin + 6, y, pageW - margin * 2 - 6, 11);
              if (isChosen) {
                doc.setFont("helvetica", "normal");
                doc.setTextColor("#1c2430");
              }
            });
            if (!chosen) {
              doc.setTextColor(150);
              y = writeWrapped(doc, "(Not answered)", margin + 6, y, pageW - margin * 2 - 6, 11);
              doc.setTextColor("#1c2430");
            }
            y += 6;
          }
        });
        y += 6;
      });
    }

    var pageCount = doc.internal.getNumberOfPages();
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      var footTop = pageH - footBlockH;
      doc.setDrawColor(220);
      doc.line(margin, footTop, pageW - margin, footTop);
      doc.setFontSize(8);
      doc.setTextColor(120);
      doc.text(footLines, margin, footTop + 14);
      var bottomRowY = footTop + 14 + footLines.length * 10;
      doc.text("Confidential — internal evaluation use only", margin, bottomRowY);
      doc.text("Page " + i + " / " + pageCount, pageW - margin, bottomRowY, { align: "right" });
    }

    var fname = (name(p) || "candidate").replace(/[^a-z0-9]+/gi, "_") + "_" + a.domain + "_" + a.level + ".pdf";
    doc.save(fname);
  }

  // ---------- assessment detail ----------
  function renderDetail(a) {
    var p = profileById[a.user_id];
    var lv = levelOf(a);
    var html = '<div class="card">';
    html += "<h2>" + esc(name(p)) + " — " + esc(domainLabel(a.domain)) + " · " + esc(levelLabel(a)) + "</h2>";
    html += '<p class="lead" style="font-size:0.9rem">' + statusBadge(a) +
      " &nbsp; Started " + fmtDate(a.started_at) +
      (a.submitted_at ? " &middot; Submitted " + fmtDate(a.submitted_at) : "") +
      (a.reviewed_at ? " &middot; Reviewed " + fmtDate(a.reviewed_at) + " by " + esc(a.reviewed_by || "") : "") +
      "</p>";

    // topic selection
    if (a.modules && lv) {
      var skipped = lv.modules
        .filter(function (m) { return a.modules.indexOf(m.name) === -1; })
        .map(function (m) { return esc(m.name); });
      html += '<p style="font-size:0.9rem;margin:4px 0"><strong>Topics chosen (' +
        a.modules.length + " of " + lv.modules.length + "):</strong> " +
        a.modules.map(esc).join(", ") + "</p>";
      if (skipped.length) {
        html += '<p style="font-size:0.85rem;color:var(--muted);margin:4px 0">Not taken: ' +
          skipped.join(", ") + "</p>";
      }
    } else {
      html += '<p style="font-size:0.9rem;margin:4px 0"><strong>Topics:</strong> all</p>';
    }

    // integrity signals — soft heuristics, not proof of anything
    var ig = integritySummary(a);
    if (ig) {
      html += '<div class="msg msg-' + (ig.notable ? "warn" : "info") + '" style="max-width:640px">' +
        "<strong>Integrity signals:</strong> left the exam tab " + ig.tabSwitchCount +
        (ig.tabSwitchCount === 1 ? " time" : " times") +
        (ig.tabAwayMinutes > 0 ? " (" + ig.tabAwayMinutes + " min total away)" : "") + ". " +
        (ig.pasteCount > 0
          ? ig.pasteCount + " paste" + (ig.pasteCount === 1 ? "" : "s") + " into the coding editor" +
            (ig.largePasteCount > 0 ? ", " + ig.largePasteCount + " of them large (40+ characters in one go)" : "") + "."
          : "No pastes into the coding editor.") +
        '<br><span style="font-size:0.8rem;opacity:0.85">Not proof of anything on its own — a heuristic to weigh alongside the answers.</span>' +
        "</div>";
    }

    // force-score an expired attempt
    if (a.status === "in_progress") {
      if (new Date(a.deadline_at).getTime() <= Date.now()) {
        html += '<div class="msg msg-info">Time has elapsed but the candidate never pressed submit. ' +
          'Score the autosaved answers: <button class="btn btn-sm" id="btn-force-score">Score now</button></div>';
      } else {
        html += '<div class="msg msg-info">The candidate is still working — scores appear after submission.</div>';
      }
    }

    // MCQ breakdown
    if (a.module_scores) {
      html += "<h2 style='margin-top:18px'>Multiple choice — " + a.mcq_score + " / " + a.mcq_total + "</h2>";
      html += '<table class="grid" style="max-width:480px"><tr><th>Module</th><th>Score</th></tr>';
      Object.keys(a.module_scores).forEach(function (m) {
        var s = a.module_scores[m];
        html += "<tr><td>" + esc(m) + "</td><td>" + s.score + " / " + s.total + "</td></tr>";
      });
      html += "</table>";
    }

    // qualitative skill analysis
    var qa = qualitativeAnalysis(a);
    if (qa) {
      html += "<h2 style='margin-top:22px'>Skill analysis</h2>";
      html += '<div class="msg msg-' + qa.verdictKind + '" style="max-width:640px">' + esc(qa.verdict) + "</div>";
      html += '<div style="margin-top:10px;font-size:0.9rem;max-width:640px">';
      if (qa.strong.length) html += "<p style='margin:6px 0'><strong>Strengths:</strong> " + qa.strong.map(esc).join(", ") + "</p>";
      if (qa.moderate.length) html += "<p style='margin:6px 0'><strong>Moderate:</strong> " + qa.moderate.map(esc).join(", ") + "</p>";
      if (qa.weak.length) html += "<p style='margin:6px 0'><strong>Needs improvement:</strong> " + qa.weak.map(esc).join(", ") + "</p>";
      html += "</div>";
    }

    // coding review
    var codingQs = [];
    (lv ? lv.modules : []).forEach(function (m) {
      if (m.type === "coding" && (!a.modules || a.modules.indexOf(m.name) !== -1)) {
        codingQs = codingQs.concat(m.questions);
      }
    });
    if (codingQs.length && a.status !== "in_progress") {
      html += "<h2 style='margin-top:22px'>Coding review</h2>";
      codingQs.forEach(function (q) {
        var code = a.answers ? a.answers[String(q.id)] : null;
        var rv = (a.coding_review || {})[String(q.id)] || {};
        html += '<div style="margin-bottom:22px">';
        html += '<div class="q-text" style="font-size:0.95rem">' + esc(q.text) + "</div>";
        html += code
          ? '<pre class="code-view">' + esc(code) + "</pre>"
          : '<p class="lead">No answer given.</p>';
        html += '<div style="display:flex;gap:10px;align-items:flex-end;flex-wrap:wrap;margin-top:10px">' +
          '<div><label>Score (0–10)</label>' +
          '<input type="number" min="0" max="10" style="width:90px" data-score="' + q.id + '" value="' +
          (rv.score != null ? rv.score : "") + '"></div>' +
          '<div style="flex:1;min-width:220px"><label>Feedback (internal)</label>' +
          '<input type="text" data-feedback="' + q.id + '" value="' + esc(rv.feedback || "") + '"></div>' +
          '<button class="btn btn-sm" data-save-review="' + q.id + '">Save score</button>' +
          "</div></div>";
      });
      if (a.coding_score != null) {
        html += "<p><strong>Coding total: " + a.coding_score + " / " + a.coding_total + "</strong></p>";
      }
    }

    // actions
    html += '<div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">';
    if (a.status === "submitted") {
      html += '<button class="btn" id="btn-finalize">Finalize review</button>';
    }
    if (a.module_scores) {
      html += '<button class="btn btn-ghost" id="btn-export-pdf">Download PDF report</button>';
    }
    html += '<button class="btn btn-danger" id="btn-reset">Reset attempt (allow retake)</button>';
    html += '<button class="btn btn-ghost" id="btn-close-detail">Close</button>';
    html += "</div>";
    html += '<div id="detail-msg" class="hidden msg"></div>';
    html += "</div>";

    var box = $("assess-detail");
    box.innerHTML = html;
    box.classList.remove("hidden");

    function dmsg(text, kind) {
      var el = $("detail-msg");
      el.textContent = text;
      el.className = "msg msg-" + kind;
    }

    Array.prototype.forEach.call(
      box.querySelectorAll("button[data-save-review]"),
      function (btn) {
        btn.addEventListener("click", function () {
          var qid = btn.getAttribute("data-save-review");
          var scoreEl = box.querySelector('input[data-score="' + qid + '"]');
          var fbEl = box.querySelector('input[data-feedback="' + qid + '"]');
          var score = parseInt(scoreEl.value, 10);
          if (isNaN(score) || score < 0 || score > 10) {
            dmsg("Score must be a number from 0 to 10.", "err");
            return;
          }
          btn.disabled = true;
          sb.rpc("review_coding", {
            p_id: a.id, p_question_id: parseInt(qid, 10),
            p_score: score, p_feedback: fbEl.value
          }).then(function (res) {
            btn.disabled = false;
            if (res.error) dmsg(res.error.message, "err");
            else { dmsg("Score saved.", "ok"); loadAll(); }
          });
        });
      });

    var fin = $("btn-finalize");
    if (fin) fin.addEventListener("click", function () {
      fin.disabled = true;
      sb.rpc("finalize_review", { p_id: a.id }).then(function (res) {
        if (res.error) { fin.disabled = false; dmsg(res.error.message, "err"); }
        else loadAll();
      });
    });

    var exportBtn = $("btn-export-pdf");
    if (exportBtn) exportBtn.addEventListener("click", function () {
      exportBtn.disabled = true;
      var origLabel = exportBtn.textContent;
      exportBtn.textContent = "Generating…";
      Promise.resolve().then(function () { return exportPdf(a); })
        .catch(function (e) {
          if (window.console && console.error) console.error("PDF export failed:", e);
          dmsg("Could not generate the PDF: " + e.message, "err");
        })
        .then(function () {
          exportBtn.disabled = false;
          exportBtn.textContent = origLabel;
        });
    });

    var force = $("btn-force-score");
    if (force) force.addEventListener("click", function () {
      force.disabled = true;
      sb.rpc("submit_assessment", { p_id: a.id }).then(function (res) {
        if (res.error) { force.disabled = false; dmsg(res.error.message, "err"); }
        else loadAll();
      });
    });

    $("btn-reset").addEventListener("click", function () {
      if (!window.confirm("Delete this attempt entirely? The candidate will be able to take this level again. This cannot be undone.")) return;
      sb.rpc("reset_attempt", { p_id: a.id }).then(function (res) {
        if (res.error) dmsg(res.error.message, "err");
        else { openId = null; $("assess-detail").classList.add("hidden"); loadAll(); }
      });
    });

    $("btn-close-detail").addEventListener("click", function () {
      openId = null;
      box.classList.add("hidden");
    });
  }

  // ---------- candidates ----------
  function renderCandidates() {
    if (!profiles.length) {
      $("cand-list").innerHTML = '<p class="lead">No accounts yet.</p>';
      return;
    }
    var html = '<table class="grid"><tr><th>Name</th><th>Email</th><th>Signed up</th><th>Status</th><th></th></tr>';
    profiles.forEach(function (p) {
      html += "<tr><td>" + esc(name(p)) + "</td><td>" + esc(p.email || "") + "</td>" +
        "<td>" + fmtDate(p.created_at) + "</td>" +
        "<td>" + (p.approved
          ? '<span class="badge badge-good">Approved</span>'
          : '<span class="badge badge-warn">Pending</span>') + "</td>" +
        '<td><button class="btn btn-sm ' + (p.approved ? "btn-ghost" : "") + '" data-approve="' +
        p.user_id + '" data-to="' + (!p.approved) + '">' +
        (p.approved ? "Revoke" : "Approve") + "</button></td></tr>";
    });
    html += "</table>";
    $("cand-list").innerHTML = html;
    Array.prototype.forEach.call(
      $("cand-list").querySelectorAll("button[data-approve]"),
      function (btn) {
        btn.addEventListener("click", function () {
          btn.disabled = true;
          sb.rpc("set_user_approval", {
            target: btn.getAttribute("data-approve"),
            approve: btn.getAttribute("data-to") === "true"
          }).then(loadAll);
        });
      });
  }

  // ---------- evaluators ----------
  function renderAdmins(admins) {
    var html = '<table class="grid"><tr><th>Email</th><th>Added by</th><th>Since</th><th></th></tr>';
    admins.forEach(function (ad) {
      var self = ad.email.toLowerCase() === (currentUser.email || "").toLowerCase();
      html += "<tr><td>" + esc(ad.email) + (self ? " <em>(you)</em>" : "") + "</td>" +
        "<td>" + esc(ad.added_by || "") + "</td><td>" + fmtDate(ad.created_at) + "</td>" +
        "<td>" + (self ? "" :
          '<button class="btn btn-sm btn-ghost" data-rm-admin="' + esc(ad.email) + '">Remove</button>') +
        "</td></tr>";
    });
    html += "</table>";
    $("admin-list").innerHTML = html;
    Array.prototype.forEach.call(
      $("admin-list").querySelectorAll("button[data-rm-admin]"),
      function (btn) {
        btn.addEventListener("click", function () {
          if (!window.confirm("Remove " + btn.getAttribute("data-rm-admin") + " from evaluators?")) return;
          sb.from("admins").delete().eq("email", btn.getAttribute("data-rm-admin")).then(loadAll);
        });
      });
  }

  $("add-admin-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var email = $("new-admin-email").value.trim();
    var el = $("admin-msg");
    sb.from("admins").insert({ email: email, added_by: currentUser.email })
      .then(function (res) {
        if (res.error) {
          el.textContent = res.error.message;
          el.className = "msg msg-err";
        } else {
          el.textContent = email + " added. They sign in on this page with their existing account.";
          el.className = "msg msg-ok";
          $("new-admin-email").value = "";
          loadAll();
        }
      });
  });
})();
