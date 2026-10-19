import { requireAuthContext } from "@/lib/auth/session";
import type { PortalContext } from "@/lib/portal/context";
import { loadProjectionPage } from "@/lib/portal/projections/load";
import type { ProjectionSearchParams } from "@/lib/portal/projections/types";
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
  const result = await loadProjectionPage(auth, context, params);
  if (result.status === "unavailable")
    return (
      <DependencyState
        title="Proyecciones pendientes de conexión"
        message={result.message}
        pending={result.pending}
      />
    );
  if (result.status === "error") return <PortalError message={result.message} />;
  return <ProjectionReportView data={result.data} debug={result.debug} />;
}
