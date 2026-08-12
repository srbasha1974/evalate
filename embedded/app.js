/* Embedded Engineer Evaluation — candidate app */
(function () {
  "use strict";

  var DOMAIN = EVAL_DATA.domain;
  var sb = null;
  var currentUser = null;
  var assessment = null;   // current assessments row
  var flatQs = [];         // [{id, module, type, text, options?}]
  var qIndex = 0;
  var answers = {};        // question id (string) -> "A".."D" or code text
  var dirty = false;
  var saveTimer = null;
  var tickTimer = null;
  var submitting = false;

  // ---------- helpers ----------
  function $(id) { return document.getElementById(id); }
  function show(id) {
    ["screen-config", "screen-auth", "screen-pending", "screen-levels",
     "screen-instructions", "screen-exam", "screen-done"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== id);
    });
    $("topbar").classList.toggle("hidden", id === "screen-exam");
    $("btn-signout").classList.toggle("hidden", id === "screen-auth" || id === "screen-config");
  }
  function msg(id, text, kind) {
    var el = $(id);
    if (!text) { el.classList.add("hidden"); return; }
    el.textContent = text;
    el.className = "msg msg-" + (kind || "err");
  }
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  // ---------- boot ----------
  if (!EVAL_CONFIG.SUPABASE_URL || !EVAL_CONFIG.SUPABASE_ANON_KEY) {
    show("screen-config");
    return;
  }
  sb = window.supabase.createClient(EVAL_CONFIG.SUPABASE_URL, EVAL_CONFIG.SUPABASE_ANON_KEY);

  sb.auth.getSession().then(function (res) {
    var session = res.data ? res.data.session : null;
    if (session) { currentUser = session.user; afterLogin(); }
    else { show("screen-auth"); }
  });

  // ---------- auth ----------
  var signupMode = false;
  function setMode(signup) {
    signupMode = signup;
    $("tab-login").classList.toggle("active", !signup);
    $("tab-signup").classList.toggle("active", signup);
    $("signup-fields").classList.toggle("hidden", !signup);
    $("auth-submit").textContent = signup ? "Create account" : "Sign in";
    msg("auth-msg", null);
  }
  $("tab-login").addEventListener("click", function () { setMode(false); });
  $("tab-signup").addEventListener("click", function () { setMode(true); });

  $("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
    msg("auth-msg", null);
    var email = $("auth-email").value.trim();
    var password = $("auth-password").value;
    $("auth-submit").disabled = true;

    var p;
    if (signupMode) {
      var first = $("auth-first").value.trim();
      var last = $("auth-last").value.trim();
      if (!first) {
        msg("auth-msg", "Please enter your first name.");
        $("auth-submit").disabled = false;
        return;
      }
      p = sb.auth.signUp({
        email: email, password: password,
        options: { data: { first_name: first, last_name: last } }
      }).then(function (res) {
        if (res.error) throw res.error;
        if (res.data && res.data.session) {
          currentUser = res.data.user; afterLogin();
        } else {
          msg("auth-msg", "Account created. Please confirm your email (check your inbox), then sign in.", "ok");
          setMode(false);
        }
      });
    } else {
      p = sb.auth.signInWithPassword({ email: email, password: password })
        .then(function (res) {
          if (res.error) throw res.error;
          currentUser = res.data.user;
          afterLogin();
        });
    }
    p.catch(function (err) {
      if (window.console && console.error) console.error("auth error:", err);
      var m = err && err.message;
      if (!m || m === "{}" || m === "[object Object]") {
        m = "Sign-up failed on the server (the confirmation email could not be sent). " +
            "Please inform the evaluation team.";
      } else if (/confirmation email/i.test(m)) {
        m = "Your account could not be created because the confirmation email failed to send. " +
            "Please inform the evaluation team — this needs a one-time email setup on their side.";
      }
      msg("auth-msg", m);
    })
     .then(function () { $("auth-submit").disabled = false; });
  });

  $("btn-signout").addEventListener("click", function () {
    stopTimers();
    sb.auth.signOut().then(function () { location.reload(); });
  });

  function afterLogin() {
    var meta = currentUser.user_metadata || {};
    $("who-name").textContent = meta.first_name
      ? meta.first_name + " " + (meta.last_name || "")
      : currentUser.email;
    checkApproval();
  }

  function checkApproval() {
    sb.from("profiles").select("approved,first_name")
      .eq("user_id", currentUser.id).maybeSingle()
      .then(function (res) {
        if (res.data && res.data.approved) {
          loadLevels();
        } else {
          $("pending-name").textContent = res.data && res.data.first_name
            ? " " + res.data.first_name : "";
          show("screen-pending");
        }
      });
  }
  $("btn-pending-refresh").addEventListener("click", checkApproval);

  // ---------- level selection ----------
  function loadLevels() {
    sb.from("assessments").select("*")
      .eq("user_id", currentUser.id).eq("domain", DOMAIN)
      .then(function (res) {
        renderLevels(res.data || []);
        show("screen-levels");
      });
  }

  function renderLevels(rows) {
    var byLevel = {};
    rows.forEach(function (r) { byLevel[r.level] = r; });
    var html = "";
    Object.keys(EVAL_DATA.levels).forEach(function (key) {
      var lv = EVAL_DATA.levels[key];
      var row = byLevel[key];
      var badge, action;
      if (!row) {
        badge = '<span class="badge">Available</span>';
        action = '<button class="btn btn-sm" data-level="' + key + '" data-act="open">Begin</button>';
      } else if (row.status === "in_progress") {
        if (new Date(row.deadline_at).getTime() > Date.now()) {
          badge = '<span class="badge badge-warn">In progress</span>';
          action = '<button class="btn btn-sm" data-level="' + key + '" data-act="resume">Resume</button>';
        } else {
          badge = '<span class="badge badge-warn">Time elapsed</span>';
          action = '<button class="btn btn-sm" data-level="' + key + '" data-act="resume">Finish</button>';
        }
      } else {
        badge = '<span class="badge badge-good">Submitted</span>';
        action = '<span class="sub">Under review by the evaluation team.</span>';
      }
      html += '<div class="tile">' + badge +
        "<h3>" + esc(lv.label) + "</h3>" +
        '<span class="sub">' + lv.mcqCount + " multiple-choice" +
        (lv.codingCount ? " + " + lv.codingCount + " coding" : "") +
        " questions &middot; " + lv.durationMinutes + " minutes</span>" +
        '<div style="margin-top:8px">' + action + "</div></div>";
    });
    $("level-tiles").innerHTML = html;
    Array.prototype.forEach.call(
      $("level-tiles").querySelectorAll("button[data-level]"),
      function (btn) {
        btn.addEventListener("click", function () {
          var key = btn.getAttribute("data-level");
          if (btn.getAttribute("data-act") === "resume") startOrResume(key);
          else showInstructions(key);
        });
      });
  }

  // ---------- instructions ----------
  var chosenLevel = null;
  function showInstructions(key) {
    chosenLevel = key;
    var lv = EVAL_DATA.levels[key];
    $("ins-title").textContent = lv.label + " assessment";
    $("ins-details").innerHTML =
      "<p class='lead'>The full assessment covers " + lv.mcqCount + " multiple-choice questions" +
      (lv.codingCount ? " and " + lv.codingCount + " coding questions" : "") +
      ". Pick your topics below — the time limit adjusts to your selection.</p>";
    $("ins-topics").innerHTML = lv.modules.map(function (m) {
      var mins = m.type === "coding" ? m.questions.length * 15 : m.questions.length;
      return '<label class="topic-row"><input type="checkbox" checked data-mod="' + esc(m.name) + '">' +
        '<span class="topic-name">' + esc(m.name) + "</span>" +
        '<span class="topic-count">' + m.questions.length +
        (m.type === "coding" ? " coding" : "") + " Q &middot; " + mins + " min</span></label>";
    }).join("");
    Array.prototype.forEach.call(
      $("ins-topics").querySelectorAll("input[type=checkbox]"),
      function (cb) { cb.addEventListener("change", updateTopicSummary); });
    updateTopicSummary();
    msg("ins-msg", null);
    show("screen-instructions");
  }

  function selectedTopics() {
    var mods = [];
    Array.prototype.forEach.call(
      $("ins-topics").querySelectorAll("input[type=checkbox]"),
      function (cb) { if (cb.checked) mods.push(cb.getAttribute("data-mod")); });
    return mods;
  }

  function updateTopicSummary() {
    var lv = EVAL_DATA.levels[chosenLevel];
    var chosen = {};
    Array.prototype.forEach.call(
      $("ins-topics").querySelectorAll("input[type=checkbox]"),
      function (cb) {
        cb.parentNode.classList.toggle("off", !cb.checked);
        if (cb.checked) chosen[cb.getAttribute("data-mod")] = true;
      });
    var qs = 0, mins = 0, count = 0;
    lv.modules.forEach(function (m) {
      if (!chosen[m.name]) return;
      count++;
      qs += m.questions.length;
      mins += m.type === "coding" ? m.questions.length * 15 : m.questions.length;
    });
    $("ins-summary").textContent = count === 0
      ? "Select at least one topic to start."
      : "Your assessment: " + count + " of " + lv.modules.length + " topics · " +
        qs + " questions · " + mins + " minutes.";
    $("btn-ins-start").disabled = count === 0;
  }

  $("btn-ins-back").addEventListener("click", loadLevels);
  $("btn-ins-start").addEventListener("click", function () {
    var lv = EVAL_DATA.levels[chosenLevel];
    var mods = selectedTopics();
    if (!mods.length) return;
    $("btn-ins-start").disabled = true;
    // all topics selected = null, same as the pre-selection behavior
    startOrResume(chosenLevel, mods.length === lv.modules.length ? null : mods);
  });

  // ---------- start / resume ----------
  function startOrResume(levelKey, mods) {
    sb.rpc("start_assessment", { p_domain: DOMAIN, p_level: levelKey, p_modules: mods || null })
      .then(function (res) {
        $("btn-ins-start").disabled = false;
        if (res.error) { msg("ins-msg", res.error.message); return; }
        assessment = res.data;
        answers = assessment.answers || {};
        if (assessment.status !== "in_progress") { showDone(); return; }
        if (new Date(assessment.deadline_at).getTime() <= Date.now()) {
          finalSubmit(true);
          return;
        }
        beginExam(levelKey);
      });
  }

  function beginExam(levelKey) {
    var lv = EVAL_DATA.levels[levelKey];
    var chosen = assessment.modules || null;  // null = all topics
    flatQs = [];
    lv.modules.forEach(function (m) {
      if (chosen && chosen.indexOf(m.name) === -1) return;
      m.questions.forEach(function (q) {
        flatQs.push({ id: q.id, module: m.name, type: m.type, text: q.text, options: q.options, img: q.img });
      });
    });
    qIndex = 0;
    // jump to first unanswered question on resume
    for (var i = 0; i < flatQs.length; i++) {
      if (answers[String(flatQs[i].id)] == null) { qIndex = i; break; }
    }
    $("exam-level").textContent = lv.label;
    show("screen-exam");
    buildPalette();
    renderQuestion();
    startTick();
    saveTimer = setInterval(function () { if (dirty) save(); }, 25000);
  }

  // ---------- exam UI ----------
  function buildPalette() {
    var html = "";
    var lastModule = null;
    flatQs.forEach(function (q, i) {
      if (q.module !== lastModule) {
        if (lastModule !== null) html += "</div>";
        html += "<h4>" + esc(q.module) + '</h4><div class="nums">';
        lastModule = q.module;
      }
      html += '<button data-i="' + i + '">' + (i + 1) + "</button>";
    });
    html += "</div>";
    $("palette").innerHTML = html;
    $("palette").onclick = (function (e) {
      var t = e.target;
      if (t.tagName === "BUTTON" && t.hasAttribute("data-i")) {
        commitCode();
        qIndex = parseInt(t.getAttribute("data-i"), 10);
        renderQuestion();
      }
    });
    refreshPalette();
  }

  function refreshPalette() {
    Array.prototype.forEach.call(
      $("palette").querySelectorAll("button[data-i]"),
      function (btn) {
        var i = parseInt(btn.getAttribute("data-i"), 10);
        var q = flatQs[i];
        var val = answers[String(q.id)];
        btn.classList.toggle("answered", val != null && val !== "");
        btn.classList.toggle("current", i === qIndex);
      });
  }

  function renderQuestion() {
    var q = flatQs[qIndex];
    $("q-module").textContent = q.module + " — Question " + (qIndex + 1) + " of " + flatQs.length;
    $("q-text").textContent = q.text;
    var imgBox = $("q-image");
    if (q.img) {
      imgBox.innerHTML = '<img src="' + q.img + '" alt="Component to identify">';
      imgBox.classList.remove("hidden");
    } else {
      imgBox.innerHTML = "";
      imgBox.classList.add("hidden");
    }
    if (q.type === "coding") {
      $("q-options").innerHTML = "";
      $("q-coding").classList.remove("hidden");
      $("code-input").value = answers[String(q.id)] || "";
    } else {
      $("q-coding").classList.add("hidden");
      var chosen = answers[String(q.id)];
      var letters = ["A", "B", "C", "D"];
      $("q-options").innerHTML = q.options.map(function (opt, i) {
        var l = letters[i];
        return '<label class="opt' + (chosen === l ? " selected" : "") + '">' +
          '<input type="radio" name="opt" value="' + l + '"' + (chosen === l ? " checked" : "") + ">" +
          '<span><span class="letter">' + l + ")</span> " + esc(opt) + "</span></label>";
      }).join("");
      Array.prototype.forEach.call(
        $("q-options").querySelectorAll("input[name=opt]"),
        function (input) {
          input.addEventListener("change", function () {
            answers[String(q.id)] = input.value;
            dirty = true;
            renderQuestion();
            scheduleSave();
          });
        });
    }
    $("btn-prev").disabled = qIndex === 0;
    $("btn-next").textContent = qIndex === flatQs.length - 1 ? "Review & submit" : "Next →";
    refreshPalette();
  }

  // coding editor: commit text into answers when leaving the question
  function commitCode() {
    var q = flatQs[qIndex];
    if (q && q.type === "coding") {
      var v = $("code-input").value;
      if ((answers[String(q.id)] || "") !== v) {
        if (v === "") delete answers[String(q.id)];
        else answers[String(q.id)] = v;
        dirty = true;
        scheduleSave();
      }
    }
  }
  $("code-input").addEventListener("input", function () { dirty = true; scheduleSave(); });
  $("code-input").addEventListener("blur", commitCode);
  $("code-input").addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      var el = e.target, s = el.selectionStart, epos = el.selectionEnd;
      el.value = el.value.slice(0, s) + "    " + el.value.slice(epos);
      el.selectionStart = el.selectionEnd = s + 4;
    }
  });

  $("btn-prev").addEventListener("click", function () {
    commitCode();
    if (qIndex > 0) { qIndex--; renderQuestion(); }
  });
  $("btn-next").addEventListener("click", function () {
    commitCode();
    if (qIndex < flatQs.length - 1) { qIndex++; renderQuestion(); }
    else confirmSubmit();
  });
  $("btn-submit").addEventListener("click", function () { commitCode(); confirmSubmit(); });

  // ---------- autosave ----------
  var debounce = null;
  function scheduleSave() {
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(save, 2500);
  }
  function save() {
    if (!assessment || submitting) return;
    dirty = false;
    $("save-state").textContent = "Saving…";
    // include any in-flight code text
    var q = flatQs[qIndex];
    if (q && q.type === "coding") {
      var v = $("code-input").value;
      if (v !== "") answers[String(q.id)] = v;
    }
    sb.rpc("save_answers", { p_id: assessment.id, p_answers: answers })
      .then(function (res) {
        if (res.error) {
          if (/time is up|already submitted/i.test(res.error.message)) {
            finalSubmit(true);
          } else {
            $("save-state").textContent = "Save failed — retrying";
            dirty = true;
          }
        } else {
          $("save-state").textContent = "All answers saved";
          refreshPalette();
        }
      });
  }

  // ---------- timer ----------
  function startTick() {
    stopTimers();
    tickTimer = setInterval(tick, 1000);
    tick();
  }
  function stopTimers() {
    if (tickTimer) clearInterval(tickTimer);
    if (saveTimer) clearInterval(saveTimer);
    tickTimer = saveTimer = null;
  }
  function tick() {
    var left = Math.floor((new Date(assessment.deadline_at).getTime() - Date.now()) / 1000);
    if (left <= 0) {
      $("timer").textContent = "00:00";
      finalSubmit(true);
      return;
    }
    var h = Math.floor(left / 3600),
        m = Math.floor((left % 3600) / 60),
        s = left % 60;
    $("timer").textContent =
      (h ? h + ":" + String(m).padStart(2, "0") : String(m)) + ":" + String(s).padStart(2, "0");
    $("timer").classList.toggle("low", left < 300);
  }

  // ---------- submit ----------
  function confirmSubmit() {
    var unanswered = flatQs.filter(function (q) {
      var v = answers[String(q.id)];
      return v == null || v === "";
    }).length;
    var text = unanswered > 0
      ? "You have " + unanswered + " unanswered question" + (unanswered > 1 ? "s" : "") +
        ". Submit anyway? This cannot be undone."
      : "Submit your assessment? This cannot be undone.";
    if (window.confirm(text)) finalSubmit(false);
  }

  function finalSubmit(auto) {
    if (submitting) return;
    submitting = true;
    stopTimers();
    sb.rpc("submit_assessment", { p_id: assessment.id, p_answers: answers })
      .then(function (res) {
        submitting = false;
        if (res.error && !auto) {
          window.alert("Submit failed: " + res.error.message + "\nPlease try again.");
          startTick();
          return;
        }
        showDone();
      });
  }

  function showDone() {
    stopTimers();
    show("screen-done");
  }
  $("btn-done-levels").addEventListener("click", loadLevels);

  // warn before leaving mid-exam (answers are autosaved, but still)
  window.addEventListener("beforeunload", function (e) {
    if (assessment && assessment.status === "in_progress" &&
        !$("screen-exam").classList.contains("hidden") && !submitting) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
})();
