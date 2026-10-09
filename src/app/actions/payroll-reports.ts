"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { PayrollReportDataError } from "@/lib/payroll-reports/result-data";
import { parsePayrollReportRunKey } from "@/lib/payroll-reports/run-key";
import { getPayrollReportRun } from "@/lib/peoplenet/payroll-reports";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";
import type { PayrollReportRunKey, PayrollReportRunResult } from "@/types/payroll-report";

/** Una ejecución de «Resultados para Informes» con la sociedad de la sesión, nunca la del navegador. */
export async function getPayrollReportRunAction(
  key: PayrollReportRunKey,
): Promise<PayrollReportRunResult> {
  const authSession = await requireAuthContext();

  const parsed = parsePayrollReportRunKey(key);
  if (!parsed.ok) return { ok: false, message: parsed.message };

  try {
    const context = await getMeta4OperationalContext(authSession);
    const detail = await getPayrollReportRun(context.society, parsed.value);
    if (!detail) return { ok: false, message: "La ejecución ya no existe en la sociedad activa." };
    return { ok: true, detail };
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return { ok: false, message: error.message };
    }
    if (error instanceof PayrollReportDataError) return { ok: false, message: error.message };
    if (error instanceof PortalSqlContractError) {
      return {
        ok: false,
        message: "Los resultados de informes no están disponibles en esta sociedad.",
      };
    }
    console.error("[peoplenet] payroll report run query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return {
      ok: false,
      message: "No se ha podido cargar el resultado del informe desde PeopleNet.",
    };
  }
}
