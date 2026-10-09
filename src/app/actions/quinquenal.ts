"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { getQuinquenalReport } from "@/lib/peoplenet/quinquenal";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";
import { parseQuinquenalParameters, type QuinquenalParameters } from "@/lib/quinquenal/parameters";
import type { QuinquenalResult } from "@/types/quinquenal";

/** Consulta quinquenal en PeopleNet con la sociedad del contexto operativo, nunca la del navegador. */
export async function getQuinquenalAction(
  parameters: QuinquenalParameters,
): Promise<QuinquenalResult> {
  const authSession = await requireAuthContext();

  const parsed = parseQuinquenalParameters(parameters);
  if (!parsed.ok) return { ok: false, message: parsed.message };

  try {
    const context = await getMeta4OperationalContext(authSession);
    const report = await getQuinquenalReport({
      organization: context.society,
      today: new Date().toISOString().slice(0, 10),
      employeeId: parsed.value.employeeId,
    });
    return { ok: true, report };
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return { ok: false, message: error.message };
    }
    if (error instanceof PortalSqlContractError) {
      return { ok: false, message: "La consulta quinquenal no está disponible en esta sociedad." };
    }
    console.error("[peoplenet] quinquenal query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return { ok: false, message: "No se ha podido cargar la consulta quinquenal desde PeopleNet." };
  }
}
