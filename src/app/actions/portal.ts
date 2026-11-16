"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { DIRECTORY_MIN_QUERY, searchDirectory } from "@/lib/portal/data/organization";
import type { DirectoryEntry } from "@/lib/portal/data/organization-core";
import { portalUnavailable } from "@/lib/portal/result";
import { readPortal } from "@/lib/portal/server";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import { getPayrollReceiptRange, PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";
import type { PayrollReceiptResult } from "@/types/payroll-receipt";
import { PAYROLL_PAYMENT_TYPES, type PayrollPaymentType } from "@/types/payroll-receipt";
import { canUsePortalDebug } from "@/lib/portal/read-provider";
import { debugSelection, type PortalReadParams, type PortalReadResult } from "@/lib/portal/read-model";

const MAX_QUERY = 120;
const PAYMENT_DATE = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

export type OwnPayslipsRequest = {
  fromPaymentDate: string;
  toPaymentDate: string;
  paymentType?: PayrollPaymentType;
  debug?: PortalReadParams;
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
  const paymentType = request?.paymentType ?? "current";
  if (!PAYROLL_PAYMENT_TYPES.some((option) => option.value === paymentType)) return { ok: false, message: "El tipo de pagas no es válido." };
  if (!PAYMENT_DATE.test(from) || !PAYMENT_DATE.test(to) || new Date(`${from}T00:00:00Z`).toISOString().slice(0, 10) !== from || new Date(`${to}T00:00:00Z`).toISOString().slice(0, 10) !== to) {
    return { ok: false, message: "El periodo de liquidación no es válido." };
  }
  if (from > to)
    return { ok: false, message: "La paga inicial debe ser anterior o igual a la final." };
  const context = await getPortalContext(authSession);
  if (canUsePortalDebug(authSession, context)) {
    const selection = debugSelection(request.debug ?? {});
    if (selection.scenario === "error") return { ok: false, message: "Error simulado de lectura de nómina." };
    const { debugPayslips } = await import("@/lib/portal/payroll-debug.fixture");
    return { ok: true, receipts: debugPayslips(selection, from, to, paymentType), missing: [] };
  }
  if (context.mode !== "meta4") return { ok: false, message: context.message };
  if (context.identity.status !== "resolved")
    return { ok: false, message: context.identity.message };
  const employeeId = context.identity.person.employeeId;
  try {
    // La identidad y sociedad propias proceden exclusivamente del contexto servidor.
    const { receipts, missing } = await getPayrollReceiptRange({
      organization: context.society,
      employeeId,
      fromPaymentDate: from,
      toPaymentDate: to,
      payFilter: "all",
      paymentType,
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
  debugParams: PortalReadParams = {},
): Promise<PortalReadResult<readonly DirectoryEntry[]>> {
  const authSession = await requireAuthContext();
  const text = typeof query === "string" ? query.trim().slice(0, MAX_QUERY) : "";
  if (text.length < DIRECTORY_MIN_QUERY) {
    return portalUnavailable([], "Introduzca por lo menos dos caracteres.");
  }
  const context = await getPortalContext(authSession);
  if (canUsePortalDebug(authSession, context)) {
    const selection = debugSelection(debugParams);
    if (selection.scenario === "error") return { status: "error", message: "Error simulado del directorio." };
    const { debugDirectory } = await import("@/lib/portal/organization-debug.fixture");
    return { status: "ok", source: "debug", data: debugDirectory(selection, text) };
  }
  return readPortal(context, (meta4) => searchDirectory(meta4.society, text), "el directorio");
}
