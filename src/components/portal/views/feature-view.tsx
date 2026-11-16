import { requireAuthContext } from "@/lib/auth/session";
import type { PortalContext } from "@/lib/portal/context";
import { featureCatalogs, loadPortalCatalogs } from "@/lib/portal/data/catalogs";
import { getOwnFile } from "@/lib/portal/data/organization";
import { loadPortalReadPage } from "@/lib/portal/read-provider";
import { type PortalDebugSelection } from "@/lib/portal/read-model";
import type { PortalReadParams } from "@/lib/portal/read-model";
import { PortalReadQuery } from "../read-query";
import { isFeatureAvailable } from "@/lib/portal/registry";
import { readPortal } from "@/lib/portal/server";
import type { PortalFeature } from "@/lib/portal/types";

import { FeatureHeader } from "../feature-header";
import { FeatureSections } from "../feature-sections";
import { DependencyState, PortalError } from "../portal-states";
import { FileSections } from "./person-file";

type Meta4Context = Extract<PortalContext, { mode: "meta4" }>;

const ownId = (context: Meta4Context): string | null =>
  context.identity.status === "resolved" ? context.identity.person.employeeId : null;

/** Datos reales de las pantallas genéricas que sí tienen contrato verificado. */
async function FeatureData({
  feature,
  context,
  debug,
}: {
  feature: PortalFeature;
  context: PortalContext;
  debug?: PortalDebugSelection | null;
}) {
  if (feature.view !== "my-file") return null;
  if (debug) {
    if (debug.scenario === "error") return <PortalError message="Error simulado de la ficha propia." />;
    const { debugPersonFile } = await import("@/lib/portal/organization-debug.fixture");
    const file = debugPersonFile(debug, debug.actor, true);
    return file ? <FileSections sections={file.sections} /> : null;
  }
  if (context.mode !== "meta4") return null;
  const employeeId = ownId(context);
  if (!employeeId) {
    return (
      <DependencyState
        title="No se ha podido identificar tu ficha"
        essential
        message={context.identity.status === "unresolved" ? context.identity.message : ""}
        pending={["P03"]}
      />
    );
  }
  const result = await readPortal(
    context,
    (meta4) => getOwnFile(meta4.society, employeeId),
    "tu ficha",
  );
  if (result.status === "unavailable") {
    return (
      <DependencyState
        message={result.message}
        pending={result.pending}
        meta4={["M4ORO_EMPLEADOS", "STD_EMAIL"]}
      />
    );
  }
  if (result.status === "error") return <PortalError message={result.message} />;
  if (!result.data) {
    return (
      <DependencyState
        title="Sin ficha en PeopleNet"
        essential
        message="No hay una ficha ORO única para tu matrícula en la sociedad activa."
        pending={["P03"]}
      />
    );
  }
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <FileSections sections={result.data.sections} />
    </div>
  );
}

/** Pantalla genérica: cabecera, datos reales si existen y apartados declarados. */
export async function FeatureView({
  feature,
  context,
  params = {},
}: {
  feature: PortalFeature;
  context: PortalContext;
  params?: PortalReadParams;
}) {
  const variant = context.mode === "meta4" ? context.variant : null;
  if (variant && !isFeatureAvailable(feature, variant)) {
    return (
      <div className="flex min-w-0 flex-col gap-6">
        <FeatureHeader feature={feature} variant={variant} />
        <DependencyState
          title="No disponible en tu sociedad"
          essential
          message={`La copia del portal solo contiene esta pantalla para ${feature.availableIn?.join(", ")}.`}
          pending={["P01"]}
        />
      </div>
    );
  }
  const authSession = await requireAuthContext();
  const catalogs =
    context.mode === "meta4"
      ? await loadPortalCatalogs(authSession, featureCatalogs(feature))
      : ({ status: "unavailable", message: "Los catálogos necesitan una sesión Meta4." } as const);
  const hireDate =
    context.mode === "meta4" && context.identity.status === "resolved"
      ? context.identity.person.hireDate
      : null;
  const page = await loadPortalReadPage(feature, authSession, context, params);
  const results = page.results;
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <FeatureHeader feature={feature} variant={variant} />
      <FeatureData feature={feature} context={context} debug={page.debug} />
      {feature.sections?.some((section) => section.kind === "query" && !section.query.form) ? <PortalReadQuery key={JSON.stringify(params)} route={feature.route} featureId={feature.id} page={page} /> : null}
      {feature.read.kind === "pending" &&
      (feature.sections ?? []).every((section) => section.kind !== "consult") ? (
        <DependencyState
          message={feature.read.detail}
          pending={feature.read.pending}
          meta4={feature.read.meta4}
        />
      ) : null}
      <FeatureSections
        feature={feature}
        catalogs={catalogs}
        hireDate={hireDate}
        results={results}
      />
    </div>
  );
}
