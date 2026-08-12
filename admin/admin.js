/* Evaluator dashboard — Kedil Evaluation Portal */
(function () {
  "use strict";

  var sb = null;
  var currentUser = null;
  var profiles = [];      // all profiles (admin can read all)
  var assessments = [];
  var profileById = {};
  var openId = null;      // currently open assessment id

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
  function statusBadge(a) {
    if (a.status === "in_progress") {
      return new Date(a.deadline_at).getTime() > Date.now()
        ? '<span class="badge badge-warn">In progress</span>'
        : '<span class="badge badge-warn">Expired (not submitted)</span>';
    }
    if (a.status === "submitted") return '<span class="badge">Awaiting review</span>';
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
      return;
    }
    var html = '<table class="grid"><tr><th>Candidate</th><th>Domain</th><th>Level</th><th>Status</th>' +
      "<th>MCQ score</th><th>Coding</th><th>Started</th><th>Submitted</th></tr>";
    assessments.forEach(function (a) {
      var p = profileById[a.user_id];
      html += '<tr class="clickable" data-id="' + a.id + '">' +
        "<td>" + esc(name(p)) + "<br><small style='color:var(--muted)'>" + esc(p ? p.email : "") + "</small></td>" +
        "<td>" + esc(domainLabel(a.domain)) + "</td>" +
        "<td>" + esc(levelLabel(a)) + "</td>" +
        "<td>" + statusBadge(a) + "</td>" +
        "<td>" + (a.mcq_score != null ? a.mcq_score + " / " + a.mcq_total : "—") + "</td>" +
        "<td>" + codingState(a) + "</td>" +
        "<td>" + fmtDate(a.started_at) + "</td>" +
        "<td>" + fmtDate(a.submitted_at) + "</td></tr>";
    });
    html += "</table>";
    $("assess-list").innerHTML = html;
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
