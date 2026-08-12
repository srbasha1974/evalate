# Kedil Evaluation Portal — evaluate.kediltech.com

Timed candidate-evaluation portal, structured like training.kediltech.com
(no-build vanilla JS, static files, Bluehost upload) but with its **own
separate Supabase project** for authentication and data.

## Layout

```
evaluate/
  index.html                    Hub — domain tiles (Embedded open, Service Engineer coming soon)
  shared/
    config.js                   Supabase URL + anon key (fill in after setup)
    styles.css                  Shared stylesheet
  embedded/                     Embedded Engineer domain
    index.html                  Candidate app (auth → level → timed assessment)
    app.js
    data.js                     416 questions (auto-generated from the PDF — NO answers in here)
  admin/                        Evaluator dashboard
    index.html
    admin.js
  supabase-evaluate-setup.sql   One-time database setup incl. answer key
```

## One-time setup

1. **Create a new Supabase project** at supabase.com (separate from the
   training portal's project).
2. In the project's **SQL editor**, paste and run all of
   `supabase-evaluate-setup.sql`. It is idempotent — safe to re-run.
   It creates profiles/admins/assessments tables, the server-side answer
   key, and all scoring functions. Seeded evaluators:
   `srbasha@gmail.com`, `riyazsadiq135@gmail.com` (edit the seed block to change).
3. Email confirmation: Supabase's built-in email service only delivers to
   the project's own team members, so candidate signups fail with
   "Error sending confirmation email". Either **turn OFF "Confirm email"**
   (Authentication → Sign In / Up → Email) — safe here because evaluator
   approval already gates every account — or configure real SMTP
   (Project Settings → Authentication → SMTP) and keep confirmation on.
4. In **Settings → API**, copy the Project URL and `anon public` key into
   `shared/config.js`.

## How it works

- **Candidates** sign up with name + email, then wait for evaluator
  approval. They pick a level, then **choose which topics to be tested
  on** (all pre-selected; unticking topics shrinks the question count and
  time limit accordingly — 1 min per MCQ + 15 min per coding question,
  computed and enforced server-side). The topic selection is final once
  the attempt starts and is stored on the assessment
  (`assessments.modules`; NULL = all topics). Requires
  `supabase-topic-selection.sql` to have been run once. Answers autosave; at 0:00 the
  saved answers are submitted automatically. Candidates see only
  "submitted, under review" — never scores or correct answers.
- **Scoring**: MCQs are scored inside the database by
  `submit_assessment()` against the `answer_key` table, which has no read
  policy — the key is never sent to the browser. Coding answers (plain
  editor, no compilation) are scored 0–10 by an evaluator in the dashboard.
- **Evaluators** (`admin/`) approve candidates, see per-module MCQ scores,
  review and score coding answers, finalize results, reset attempts to
  allow a retake, and manage the evaluator list. An evaluator account is a
  normal account whose email is in the `admins` table.
- An attempt whose time expired without the candidate pressing submit shows
  as "Expired" in the dashboard with a **Score now** button.

## Deploy (Bluehost)

Same as the training portal: upload the `evaluate/` contents to the
`evaluate.kediltech.com` document root. Remember the training-portal
gotchas: files 644 / dirs 755 when zipping, and use a no-cache `.htaccess`
for html/js/css if browsers hold stale versions.

## Domains

- **Embedded Engineer** (`embedded/`): 416 questions (412 MCQ + 4 coding)
  extracted from `Embedded_Interview_Question.pdf`, four levels
  (Fresher / 1–3 / 3–5 / 5–8 years).
- **Service Engineer** (`service/`): 185 MCQs (no coding), two levels —
  Fresher (85 questions incl. 12 image-based component identification)
  and Junior 3–5 years (100 questions). Authored from the Thulir
  Electronics Fundamentals course and the Electronic Components flashcard
  deck. Component photos live in `service/img/`. Answer key + level
  config: run `supabase-service-setup.sql` once (after the main setup).

Adding another domain follows the same pattern: new folder with its own
`data.js` (which self-registers in `window.EVAL_REGISTRY` for the admin
dashboard), answer-key/level-config inserts for the new domain string,
and a hub tile.
