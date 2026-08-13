-- Kedil Evaluation Portal — per-candidate topic (module) selection.
--
-- Recreated from the live database on 2026-08-13: this file was referenced
-- by README.md but had never actually been saved to the repo, so the
-- schema/function definitions only existed inside Supabase itself. This is
-- the source of truth going forward — re-run this whole file after any
-- future change to start_assessment/submit_assessment so the repo and the
-- database never drift apart again.
--
-- Idempotent — safe to re-run.

-- 1. Column to remember which topics a candidate chose (NULL = all topics).
alter table public.assessments
  add column if not exists modules text[];

-- 2. start_assessment: create (or resume) an attempt, optionally scoped to
--    a subset of modules. When p_modules is given, the time limit is
--    computed from just the selected modules (1 min/MCQ, 15 min/coding
--    question) instead of the level's full duration.
--
--    Fix (2026-08-13): `v_all := v_all || 'Coding'` failed with
--    "malformed array literal: \"Coding\"" whenever any module was
--    unchecked, because Postgres resolved `text[] || <untyped literal>` as
--    array-concat and tried to parse the bare word "Coding" as an array
--    literal. array_append() is the unambiguous way to append one element
--    to an array and has no such parsing step.
CREATE OR REPLACE FUNCTION public.start_assessment(p_domain text, p_level text, p_modules text[] DEFAULT NULL::text[])
 RETURNS assessments
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  cfg       public.level_config;
  row_      public.assessments;
  v_all     text[];
  v_mcq     int;
  v_minutes int;
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  if not exists (select 1 from public.profiles
                 where user_id = auth.uid() and approved) then
    raise exception 'account not approved yet';
  end if;
  select * into cfg from public.level_config
    where domain = p_domain and level = p_level;
  if not found then
    raise exception 'unknown domain/level';
  end if;

  select * into row_ from public.assessments
    where user_id = auth.uid() and domain = p_domain and level = p_level;
  if found then
    return row_;  -- resume keeps the originally chosen topics
  end if;

  if p_modules is not null then
    -- valid topic names = every scored module for this level, plus the
    -- free-coding module (named 'Coding' in the client data files), which
    -- has no rows in answer_key
    select coalesce(array_agg(distinct module), array[]::text[])
      into v_all
      from public.answer_key
      where domain = p_domain and level = p_level;
    if cardinality(cfg.coding_question_ids) > 0 then
      v_all := array_append(v_all, 'Coding');
    end if;
    if cardinality(p_modules) = 0 or not (p_modules <@ v_all) then
      raise exception 'invalid topic selection';
    end if;

    select count(*) into v_mcq from public.answer_key
      where domain = p_domain and level = p_level
        and module = any(p_modules);
    v_minutes := v_mcq;  -- 1 minute per MCQ
    if 'Coding' = any(p_modules) then
      v_minutes := v_minutes + 15 * cardinality(cfg.coding_question_ids);
    end if;
    if v_minutes = 0 then
      raise exception 'invalid topic selection';
    end if;
  else
    v_minutes := cfg.duration_minutes;
  end if;

  insert into public.assessments (user_id, domain, level, modules, deadline_at)
  values (auth.uid(), p_domain, p_level, p_modules,
          now() + make_interval(mins => v_minutes))
  returning * into row_;
  return row_;
end;
$function$;
