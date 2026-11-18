"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { getPrimaveraReport } from "@/lib/peoplenet/primavera";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";
import { parsePrimaveraParameters, type PrimaveraParameters } from "@/lib/primavera/cuadre";
import type { PrimaveraResult } from "@/types/primavera";

/** Cuadre Primavera con la sociedad del contexto operativo, nunca la del navegador. */
export async function getPrimaveraAction(
  parameters: PrimaveraParameters,
): Promise<PrimaveraResult> {
  const authSession = await requireAuthContext();

  const parsed = parsePrimaveraParameters(parameters);
  if (!parsed.ok) return { ok: false, message: parsed.message };

  try {
    const context = await getMeta4OperationalContext(authSession);
    const report = await getPrimaveraReport(context.society, parsed.value);
    return { ok: true, report };
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return { ok: false, message: error.message };
    }
    if (error instanceof PortalSqlContractError) {
      return {
        ok: false,
        message: "El cuadre de Primavera no está disponible en esta sociedad.",
      };
    }
    console.error("[peoplenet] primavera query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return {
      ok: false,
      message: "No se ha podido cargar el cuadre de Primavera desde PeopleNet.",
    };
  }
}
