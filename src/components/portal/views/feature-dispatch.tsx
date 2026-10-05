import { Suspense } from "react";

import { Skeleton } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getOrgTree } from "@/lib/portal/data/organization";
import { readPortal } from "@/lib/portal/server";
import type { PortalFeature } from "@/lib/portal/types";

import { FeatureHeader } from "../feature-header";
import { FeatureSections } from "../feature-sections";
import { DependencyState, PortalError } from "../portal-states";
import { DirectorySearch } from "./directory-search";
import { FeatureView } from "./feature-view";
import { HomeView } from "./home-view";
import { ManagerHomeView, PopulationPanel } from "./manager-view";
import { OrgTree } from "./org-tree";
import { PayslipsView } from "./payslips-view";
import { TasksView } from "./tasks-view";

async function OrgChart({ context }: { context: PortalContext }) {
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
  return <OrgTree roots={result.data} />;
}

const NO_CATALOGS = { status: "ready", options: {} } as const;

/** Elige la vista de una pantalla del registro. */
export function FeatureDispatch({
  feature,
  context,
}: {
  feature: PortalFeature;
  context: PortalContext;
}) {
  const variant = context.mode === "meta4" ? context.variant : null;
  const header = <FeatureHeader feature={feature} variant={variant} />;
  const fallback = <Skeleton className="h-40 w-full rounded-xl" />;
  switch (feature.view) {
    case "home":
      return <HomeView context={context} />;
    case "manager-home":
      return <ManagerHomeView context={context} />;
    case "tasks":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense fallback={fallback}>
            <TasksView context={context} />
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
            <OrgChart context={context} />
          </Suspense>
        </div>
      );
    case "population":
    case "team":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <Suspense fallback={fallback}>
            <PopulationPanel context={context} />
          </Suspense>
          <FeatureSections feature={feature} catalogs={NO_CATALOGS} />
        </div>
      );
    case "payslips":
      return (
        <div className="flex min-w-0 flex-col gap-6">
          {header}
          <PayslipsView context={context} />
          <FeatureSections feature={feature} catalogs={NO_CATALOGS} />
        </div>
      );
    case "my-file":
    case "generic":
      return (
        <Suspense fallback={fallback}>
          <FeatureView feature={feature} context={context} />
        </Suspense>
      );
  }
}
