import "server-only";

import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { ResolvedAuthSession } from "@/lib/auth/service";

import type { PortalContext } from "../context";
import { getCertificates, type CertificateRead } from "../data/certificates";
import { projectionEmployeeSelection, projectionYearSelection } from "../projections/types";
import type { PendingId } from "../types";
import type { CertificateSearchParams } from "./types";

export type CertificateLoad =
  | ({ status: "ok"; debug: boolean } & CertificateRead)
  | { status: "unavailable"; message: string; pending: readonly PendingId[] }
  | { status: "error"; message: string };

/**
 * Carga común de la pantalla y del PDF: valida ejercicio y matrícula y, solo
 * con sesión debug en desarrollo, usa la muestra ficticia.
 */
export async function loadCertificatePage(
  auth: ResolvedAuthSession,
  context: PortalContext,
  params: CertificateSearchParams,
  today: Date = new Date(),
): Promise<CertificateLoad> {
  const selection = projectionYearSelection(params.year);
  if (selection.status === "invalid")
    return { status: "error", message: "El ejercicio indicado no es válido." };
  const employee = projectionEmployeeSelection(params.employee);
  if (employee.status === "invalid")
    return { status: "error", message: "La matrícula indicada no es válida." };
  const debug =
    isDebugAuthEnabled() &&
    auth.authContext.mode === "debug" &&
    context.mode === "unavailable" &&
    context.reason === "debug";
  if (debug) {
    const { certificateDebugData } = await import("./debug.fixture");
    const data = certificateDebugData(selection, employee, today);
    if (!data)
      return { status: "error", message: "Ese ejercicio no existe en la muestra de desarrollo." };
    return { status: "ok", debug: true, ...data };
  }
  const result = await getCertificates(context, selection, employee, today);
  if (result.status === "ok") return { status: "ok", debug: false, ...result.data };
  return result.status === "unavailable"
    ? { status: "unavailable", message: result.message, pending: result.pending }
    : { status: "error", message: result.message };
}
