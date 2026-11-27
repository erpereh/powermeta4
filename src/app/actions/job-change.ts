"use server";

/**
 * Cambio de puesto o categoría: lee la situación actual y prepara el plan con
 * la sociedad del contexto operativo, nunca la del navegador. No graba nada en
 * PeopleNet.
 */
import { requireAuthContext } from "@/lib/auth/session";
import { parseJobChangeRequest } from "@/lib/meta4/job-change/request";
import { getJobChangePlan, getJobChangeSituation } from "@/lib/meta4/job-change/service";
import type { JobChangePlanResult, JobChangeSituationResult } from "@/lib/meta4/job-change/types";

export async function getJobChangeSituationAction(
  employeeId: string,
): Promise<JobChangeSituationResult> {
  const authSession = await requireAuthContext();
  return getJobChangeSituation(authSession, employeeId);
}

export async function getJobChangePlanAction(input: unknown): Promise<JobChangePlanResult> {
  const authSession = await requireAuthContext();
  const parsed = parseJobChangeRequest(input);
  if (!parsed.ok) return { ok: false, message: parsed.message };
  return getJobChangePlan(authSession, parsed.value);
}
