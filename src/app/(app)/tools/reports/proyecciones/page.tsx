import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import { ProjectionsView } from "@/components/portal/views/projections-view";
import { TeamProjectionLookup } from "@/components/portal/views/projections/team-lookup";
import { ToolsPageHeader } from "@/components/tools/tools-page-header";
import { getRequestPortalContext } from "@/lib/portal/server";
import type { ProjectionSearchParams } from "@/lib/portal/projections/types";

const ROUTE = "/tools/reports/proyecciones";

/**
 * Informe de proyecciones desde Acciones: el propio o, con `?employee=`, el de
 * una persona del equipo. La pertenencia la valida el servidor (`getProjections`).
 */
export default async function ProyeccionesPage({
  searchParams,
}: {
  searchParams: Promise<ProjectionSearchParams>;
}) {
  const params = await searchParams;
  const context = await getRequestPortalContext();
  const employee = typeof params.employee === "string" ? params.employee : "";
  return (
    <main className="flex min-h-svh flex-col">
      <ToolsPageHeader
        title="Consultar proyecciones"
        icon="report-projections"
        moduleId="reports"
        contentClassName="mx-auto w-full max-w-6xl xl:max-w-none"
      />
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-6 px-4 py-5 sm:px-6 xl:max-w-none xl:px-2">
        <TeamProjectionLookup key={employee} route={ROUTE} defaultValue={employee} />
        <Suspense
          key={`${employee}|${typeof params.year === "string" ? params.year : ""}`}
          fallback={
            <div role="status" className="space-y-3">
              <p className="text-sm text-muted-foreground">Cargando el informe de proyecciones…</p>
              <Skeleton aria-hidden className="h-40 w-full rounded-xl" />
            </div>
          }
        >
          <ProjectionsView context={context} params={params} />
        </Suspense>
      </div>
    </main>
  );
}
