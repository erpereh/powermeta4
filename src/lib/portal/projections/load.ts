import "server-only";

import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { ResolvedAuthSession } from "@/lib/auth/service";

import type { PortalContext } from "../context";
import { getProjections } from "../data/projections";
import type { PendingId } from "../types";
import {
  projectionEmployeeSelection,
  projectionYearSelection,
  type ProjectionPageData,
  type ProjectionSearchParams,
} from "./types";

export type ProjectionLoad =
  | { status: "ok"; data: ProjectionPageData; debug: boolean }
  | { status: "unavailable"; message: string; pending: readonly PendingId[] }
  | { status: "error"; message: string };

/**
 * Carga común de la pantalla y de la exportación: valida ejercicio y matrícula
 * y, solo con sesión debug en desarrollo, usa la muestra ficticia.
 */
export async function loadProjectionPage(
  auth: ResolvedAuthSession,
  context: PortalContext,
  params: ProjectionSearchParams,
): Promise<ProjectionLoad> {
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
    const { projectionDebugData } = await import("./debug.fixture");
    const data = projectionDebugData(
      selection,
      typeof params.scenario === "string" ? params.scenario : undefined,
      employee.status === "team" ? employee.employeeId : undefined,
    );
    if (selection.status === "selected" && !data.years.includes(selection.year))
      return { status: "error", message: "Ese ejercicio no existe en la muestra de desarrollo." };
    return { status: "ok", data, debug: true };
  }
  const result = await getProjections(context, selection, employee);
  if (result.status === "ok") return { status: "ok", data: result.data, debug: false };
  return result.status === "unavailable"
    ? { status: "unavailable", message: result.message, pending: result.pending }
    : { status: "error", message: result.message };
}
