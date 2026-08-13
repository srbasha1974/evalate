-- Kedil Evaluation Portal — per-question correctness for PDF/report rendering.
--
-- Returns ONLY question_id + is_correct (boolean) for a given assessment —
-- never the correct_option text itself. This is deliberate: the answer key
-- must never reach the browser (so it can't leak to future candidates), but
-- evaluators reviewing a *finished, already-scored* attempt need to know
-- which specific questions a candidate got right or wrong, not just the
-- module-level score. A boolean-only result satisfies both constraints.
--
-- Admin-only (same check as review_coding/finalize_review): candidates can
-- never call this for their own attempt, before or after submission.
--
-- Idempotent — safe to re-run.

CREATE OR REPLACE FUNCTION public.get_question_results(p_id uuid)
 RETURNS TABLE(question_id int, is_correct boolean)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  row_ public.assessments;
begin
  if not public.is_admin() then
    raise exception 'not authorized';
  end if;

  select * into row_ from public.assessments where id = p_id;
  if not found then
    raise exception 'not found';
  end if;

  return query
  select k.question_id,
         (row_.answers ->> k.question_id::text) = k.correct_option
  from public.answer_key k
  where k.domain = row_.domain and k.level = row_.level
    and (row_.modules is null or k.module = any(row_.modules));
end;
$function$;

GRANT EXECUTE ON FUNCTION public.get_question_results(uuid) TO authenticated;
