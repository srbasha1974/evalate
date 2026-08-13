-- Kedil Evaluation Portal — exam integrity signals (soft heuristics).
--
-- Tracks two free, client-observable signals during a live attempt:
--   - how many times the candidate's browser tab/window lost focus, and for
--     how long in total (a proxy for "left to look something up elsewhere")
--   - how many times something was pasted into the coding editor, and how
--     many of those pastes were large (a proxy for "pasted in a ready-made
--     answer rather than writing it")
-- Neither proves AI/web-search use on its own — they're heuristics for an
-- evaluator to weigh alongside the actual answers, not a verdict. Nothing
-- here blocks or warns the candidate; it only informs the evaluator.
--
-- Idempotent — safe to re-run.

ALTER TABLE public.assessments
  ADD COLUMN IF NOT EXISTS integrity jsonb;

-- log_integrity: candidate's own client periodically reports its local
-- counters (tabSwitchCount, tabAwayMs, pasteCount, pasteCharsTotal,
-- largePasteCount) for its own in-progress attempt. Silently a no-op once
-- the attempt is no longer in_progress, so a stray late call can't corrupt
-- a submitted/reviewed record.
CREATE OR REPLACE FUNCTION public.log_integrity(p_id uuid, p_flags jsonb)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  row_ public.assessments;
begin
  select * into row_ from public.assessments where id = p_id;
  if not found or row_.user_id <> auth.uid() then
    raise exception 'not found';
  end if;
  if row_.status <> 'in_progress' then
    return;
  end if;
  update public.assessments set integrity = p_flags where id = p_id;
end;
$function$;

GRANT EXECUTE ON FUNCTION public.log_integrity(uuid, jsonb) TO authenticated;
