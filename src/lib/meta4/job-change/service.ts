import "server-only";

/**
 * Orquesta el cambio de puesto o categoría: contexto operativo, situación
 * actual en PeopleNet, valores derivados y plan. **No graba nada**: la única
 * escritura ERP aprobada sigue siendo el alta de personas, así que esta
 * operación solo prepara y muestra lo que Meta4 escribiría.
 */
import type { ResolvedAuthSession } from "@/lib/auth/service";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";

import { getMeta4OperationalContext } from "../operational-context";
import { JobChangeEmployeeNotFoundError, loadJobChangeSituation } from "./current";
import { loadJobChangeDerived } from "./lookups";
import { jobChangeAuditTables } from "./model";
import { planJobChange } from "./plan";
import { normalizeEmployeeId } from "./request";
import type { JobChangePlanResult, JobChangeRequest, JobChangeSituationResult } from "./types";

const failure = (error: unknown, fallback: string): string => {
  if (error instanceof JobChangeEmployeeNotFoundError) return error.message;
  if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
    return error.message;
  }
  if (error instanceof PortalSqlContractError) {
    return "El cambio de puesto no está disponible en esta sociedad.";
  }
  console.error("[peoplenet] job change failed", {
    name: error instanceof Error ? error.name : "unknown",
  });
  return fallback;
};

/** Situación actual del rol vigente de una matrícula de la sociedad activa. */
export const getJobChangeSituation = async (
  authSession: ResolvedAuthSession,
  employeeId: string,
): Promise<JobChangeSituationResult> => {
  const matricula = normalizeEmployeeId(employeeId);
  if (!matricula) return { ok: false, message: "La matrícula no es válida." };
  try {
    const context = await getMeta4OperationalContext(authSession);
    const situation = await loadJobChangeSituation(context.society, matricula);
    return { ok: true, situation };
  } catch (error) {
    return {
      ok: false,
      message: failure(error, "No se ha podido leer la situación actual en PeopleNet."),
    };
  }
};

/** Plan del cambio, con la situación actual recién leída en el servidor. */
export const getJobChangePlan = async (
  authSession: ResolvedAuthSession,
  request: JobChangeRequest,
): Promise<JobChangePlanResult> => {
  try {
    const context = await getMeta4OperationalContext(authSession);
    const situation = await loadJobChangeSituation(context.society, request.employeeId);
    const derived = await loadJobChangeDerived(context.society, request);
    const plan = planJobChange({
      situation,
      request,
      derived,
      auditTables: jobChangeAuditTables(),
    });
    return { ok: true, situation, plan };
  } catch (error) {
    return {
      ok: false,
      message: failure(error, "No se ha podido preparar el cambio con los datos de PeopleNet."),
    };
  }
};
