import { requireAuthContext } from "@/lib/auth/session";
import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { PortalContext } from "@/lib/portal/context";
import { getOwnProjections } from "@/lib/portal/data/projections";
import {
  projectionYearSelection,
  type ProjectionSearchParams,
} from "@/lib/portal/projections/types";
import { DependencyState, PortalError } from "../portal-states";
import { ProjectionReportView } from "./projections/report-view";

export async function ProjectionsView({
  context,
  params,
}: {
  context: PortalContext;
  params: ProjectionSearchParams;
}) {
  const auth = await requireAuthContext();
  const selection = projectionYearSelection(params.year);
  if (selection.status === "invalid")
    return <PortalError message="El ejercicio indicado no es válido." />;
  const debug =
    isDebugAuthEnabled() &&
    auth.authContext.mode === "debug" &&
    context.mode === "unavailable" &&
    context.reason === "debug";
  if (debug) {
    const { projectionDebugData } = await import("@/lib/portal/projections/debug.fixture");
    const data = projectionDebugData(
      selection,
      typeof params.scenario === "string" ? params.scenario : undefined,
    );
    if (selection.status === "selected" && !data.years.includes(selection.year))
      return <PortalError message="Ese ejercicio no existe en la muestra de desarrollo." />;
    return <ProjectionReportView data={data} debug />;
  }
  const result = await getOwnProjections(context, selection);
  if (result.status === "unavailable")
    return (
      <DependencyState
        title="Proyecciones pendientes de conexión"
        message={result.message}
        pending={result.pending}
      />
    );
  if (result.status === "error") return <PortalError message={result.message} />;
  return <ProjectionReportView data={result.data} />;
}
