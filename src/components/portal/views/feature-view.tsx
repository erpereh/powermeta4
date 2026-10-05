import { requireAuthContext } from "@/lib/auth/session";
import type { PortalContext } from "@/lib/portal/context";
import { featureCatalogs, loadPortalCatalogs } from "@/lib/portal/data/catalogs";
import { getOwnFile } from "@/lib/portal/data/organization";
import { isFeatureAvailable } from "@/lib/portal/registry";
import { readPortal } from "@/lib/portal/server";
import type { PortalFeature } from "@/lib/portal/types";

import { FeatureHeader } from "../feature-header";
import { FeatureSections } from "../feature-sections";
import { DependencyState, PortalError } from "../portal-states";
import { EmailList, FileSections } from "./person-file";

type Meta4Context = Extract<PortalContext, { mode: "meta4" }>;

const ownId = (context: Meta4Context): string | null =>
  context.identity.status === "resolved" ? context.identity.person.employeeId : null;

/** Datos reales de las pantallas genéricas que sí tienen contrato verificado. */
async function FeatureData({
  feature,
  context,
}: {
  feature: PortalFeature;
  context: PortalContext;
}) {
  if (feature.id !== "empleado.datos.correo" && feature.view !== "my-file") return null;
  if (context.mode !== "meta4") return null;
  const employeeId = ownId(context);
  if (!employeeId) {
    return (
      <DependencyState
        title="No se ha podido identificar tu ficha"
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
        message="No hay una ficha ORO única para tu matrícula en la sociedad activa."
        pending={["P03"]}
      />
    );
  }
  if (feature.id === "empleado.datos.correo") return <EmailList emails={result.data.emails} />;
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <FileSections sections={result.data.sections} />
      <EmailList emails={result.data.emails} />
    </div>
  );
}

/** Pantalla genérica: cabecera, datos reales si existen y apartados declarados. */
export async function FeatureView({
  feature,
  context,
}: {
  feature: PortalFeature;
  context: PortalContext;
}) {
  const variant = context.mode === "meta4" ? context.variant : null;
  if (variant && !isFeatureAvailable(feature, variant)) {
    return (
      <div className="flex min-w-0 flex-col gap-6">
        <FeatureHeader feature={feature} variant={variant} />
        <DependencyState
          title="No disponible en tu sociedad"
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
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <FeatureHeader feature={feature} variant={variant} />
      <FeatureData feature={feature} context={context} />
      {feature.read.kind === "pending" &&
      (feature.sections ?? []).every((section) => section.kind !== "consult") ? (
        <DependencyState
          message={feature.read.detail}
          pending={feature.read.pending}
          meta4={feature.read.meta4}
        />
      ) : null}
      <FeatureSections feature={feature} catalogs={catalogs} hireDate={hireDate} />
    </div>
  );
}
