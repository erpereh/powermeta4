import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getOrgTree, getPersonHierarchy } from "@/lib/portal/data/organization";
import { getOrgSelection, type OrgSearchParams } from "@/lib/portal/organization-navigation";
import { readPortal } from "@/lib/portal/server";
import type { PortalFeature } from "@/lib/portal/types";

import { FeatureHeader } from "../feature-header";
import { FeatureSections } from "../feature-sections";
import { DependencyState, PortalError } from "../portal-states";
import { DirectorySearch } from "./directory-search";
import { FeatureView } from "./feature-view";
import { HomeView } from "./home-view";
import { ManagerHomeView } from "./manager-view";
import { OrgTree } from "./org-tree";
import { OrgTreeLink, PersonOrgChart } from "./person-org-chart";
import { PayslipsView } from "./payslips-view";
import { TasksView } from "./tasks-view";
import { ProjectionsView } from "./projections-view";
import { CertificatesView } from "./certificates-view";
import { HolidaysView } from "./holidays-view";
import type { ProjectionSearchParams } from "@/lib/portal/projections/types";
import type { PortalReadParams } from "@/lib/portal/read-model";
import type { PortalDebugSelection } from "@/lib/portal/read-model";

async function OrgChart({
  context,
  route,
  params,
  debug,
}: {
  context: PortalContext;
  route: string;
  params: OrgSearchParams;
  debug?: PortalDebugSelection | null;
}) {
  const selected = getOrgSelection(params);
  if (debug) {
    if (debug.scenario === "error") return <PortalError message="Error simulado del organigrama." />;
    const { debugOrgTree, debugPersonHierarchy } = await import("@/lib/portal/organization-debug.fixture");
    return selected.status === "selected" ? <PersonOrgChart hierarchy={debugPersonHierarchy(debug, selected.employeeId)} route={route} />
      : <OrgTree roots={debugOrgTree(debug)} route={route} />;
  }
  if (selected.status === "invalid") return <PersonOrgChart hierarchy={null} route={route} />;
  if (selected.status === "selected") {
    const result = await readPortal(
      context,
      (meta4) => getPersonHierarchy(meta4.society, selected.employeeId),
      "la jerarquía",
    );
    if (result.status === "unavailable")
      return (
        <div className="flex min-w-0 flex-col items-start gap-4">
          <OrgTreeLink route={route} />
          <DependencyState
            message={result.message}
            pending={result.pending}
            meta4={["M4ORO_EMPLEADOS.ID_RESPONSABLE"]}
          />
        </div>
      );
    if (result.status === "error")
      return (
        <div className="flex min-w-0 flex-col items-start gap-4">
          <OrgTreeLink route={route} />
          <PortalError message={result.message} />
        </div>
      );
    return <PersonOrgChart hierarchy={result.data} route={route} />;
  }
  const result = await readPortal(context, (meta4) => getOrgTree(meta4.society), "el organigrama");
  if (result.status === "unavailable") {
    return (
      <DependencyState
        message={result.message}
        pending={result.pending}
        meta4={["M4ORO_EMPLEADOS"]}
      />
    );
  }
  if (result.status === "error") return <PortalError message={result.message} />;
  return <OrgTree roots={result.data} route={route} />;
}

const NO_CATALOGS = { status: "ready", options: {} } as const;

/** Elige la vista de una pantalla del registro. */
export function FeatureDispatch({
  feature,
  context,
  orgSearchParams = {},
  projectionSearchParams = {},
  readSearchParams = {},
  debug = null,
}: {
  feature: PortalFeature;
  context: PortalContext;
  orgSearchParams?: OrgSearchParams;
  projectionSearchParams?: ProjectionSearchParams;
  readSearchParams?: PortalReadParams;
  debug?: PortalDebugSelection | null;
}) {
  const variant = context.mode === "meta4" ? context.variant : debug?.variant ?? null;
  const header = <FeatureHeader feature={feature} variant={variant} />;
  const fallback = <Skeleton className="h-40 w-full rounded-xl" />;
  switch (feature.view) {
    case "home":
      return <HomeView context={context} debug={debug} />;
    case "manager-home":
      return <ManagerHomeView context={context} debug={debug} />;
    case "tasks":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense fallback={fallback}>
            <TasksView context={context} debug={debug} />
          </Suspense>
          <FeatureSections feature={feature} catalogs={NO_CATALOGS} />
        </div>
      );
    case "directory":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <DirectorySearch />
        </div>
      );
    case "orgchart":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense fallback={fallback}>
            <OrgChart context={context} route={feature.route} params={orgSearchParams} debug={debug} />
          </Suspense>
        </div>
      );
    case "population":
    case "team":
      return <FeatureView feature={feature} context={context} params={readSearchParams} />;
    case "payslips":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <PayslipsView context={context} params={readSearchParams} />
          <FeatureSections feature={feature} catalogs={NO_CATALOGS} />
        </div>
      );
    case "projections":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense
            fallback={
              <div role="status" className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Cargando el informe de proyecciones…
                </p>
                <div aria-hidden>{fallback}</div>
              </div>
            }
          >
            <ProjectionsView context={context} params={projectionSearchParams} />
          </Suspense>
        </div>
      );
    case "certificates":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense
            fallback={
              <div role="status" className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Cargando el certificado de retenciones…
                </p>
                <div aria-hidden>{fallback}</div>
              </div>
            }
          >
            <CertificatesView context={context} params={projectionSearchParams} />
          </Suspense>
        </div>
      );
    case "holidays":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense
            fallback={
              <div role="status" className="space-y-3">
                <p className="text-sm text-muted-foreground">Cargando el calendario de festivos…</p>
                <div aria-hidden>{fallback}</div>
              </div>
            }
          >
            <HolidaysView context={context} params={readSearchParams} />
          </Suspense>
        </div>
      );
    case "my-file":
    case "generic":
      return (
        <Suspense fallback={fallback}>
          <FeatureView feature={feature} context={context} params={readSearchParams} />
        </Suspense>
      );
  }
}
