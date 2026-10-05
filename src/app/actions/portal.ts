"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { DIRECTORY_MIN_QUERY, searchDirectory } from "@/lib/portal/data/organization";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import { portalUnavailable, type PortalResult } from "@/lib/portal/result";
import { readPortal } from "@/lib/portal/server";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import {
  getCurrentPayrollReceiptRange,
  PayrollReceiptError,
} from "@/lib/peoplenet/payroll-receipt";
import type { PayrollReceiptResult } from "@/types/payroll-receipt";

const MAX_QUERY = 120;
const PAYMENT_DATE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export type OwnPayslipsRequest = {
  fromPaymentDate: string;
  toPaymentDate: string;
};

/**
 * Recibos propios («Últimos recibos de salarios»). La matrícula sale de la
 * identidad resuelta en servidor; el navegador solo elige las pagas.
 */
export async function getOwnPayslipsAction(
  request: OwnPayslipsRequest,
): Promise<PayrollReceiptResult> {
  const authSession = await requireAuthContext();
  const from = typeof request?.fromPaymentDate === "string" ? request.fromPaymentDate : "";
  const to = typeof request?.toPaymentDate === "string" ? request.toPaymentDate : "";
  if (!PAYMENT_DATE.test(from) || !PAYMENT_DATE.test(to)) {
    return { ok: false, message: "El periodo de liquidación no es válido." };
  }
  if (from > to)
    return { ok: false, message: "La paga inicial debe ser anterior o igual a la final." };
  const context = await getPortalContext(authSession);
  if (context.mode !== "meta4") return { ok: false, message: context.message };
  if (context.identity.status !== "resolved")
    return { ok: false, message: context.identity.message };
  const employeeId = context.identity.person.employeeId;
  try {
    const { receipts, missing } = await getCurrentPayrollReceiptRange({
      organization: context.society,
      employeeId,
      fromPaymentDate: from,
      toPaymentDate: to,
      currency: { mode: "calculation" },
    });
    return { ok: true, receipts, missing };
  } catch (error) {
    if (error instanceof PayrollReceiptError) return { ok: false, message: error.message };
    if (error instanceof PeopleNetConfigError) {
      return {
        ok: false,
        message: "La conexión de solo lectura a PeopleNet no está configurada en este servidor.",
      };
    }
    console.error("[portal] own payslips failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return { ok: false, message: "No se han podido cargar tus recibos desde PeopleNet." };
  }
}

/**
 * Búsqueda de «Quién es quién» en la sociedad activa resuelta en servidor.
 * El navegador solo aporta el texto; nunca la sociedad.
 */
export async function searchPortalDirectoryAction(
  query: string,
): Promise<PortalResult<readonly DirectoryEntry[]>> {
  const authSession = await requireAuthContext();
  const text = typeof query === "string" ? query.trim().slice(0, MAX_QUERY) : "";
  if (text.length < DIRECTORY_MIN_QUERY) {
    return portalUnavailable([], "Introduzca por lo menos dos caracteres.");
  }
  const context = await getPortalContext(authSession);
  return readPortal(context, (meta4) => searchDirectory(meta4.society, text), "el directorio");
}
