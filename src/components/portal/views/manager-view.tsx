import { Suspense } from "react";
import { Users } from "lucide-react";

import { EmptyState, Skeleton, Section } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getDirectoryEntries } from "@/lib/portal/data/organization";
import { loadManagerScope } from "@/lib/portal/data/scope";
import { readPortal } from "@/lib/portal/server";

import { DependencyState, PortalError, SensitiveLocked } from "../portal-states";
import { PortalDataTable } from "../portal-data";
import { DomainGrid } from "./home-view";
import { TasksView } from "./tasks-view";

const SCOPE_MESSAGE =
  "La población procede de los servicios publicados SNTC_AD_POPULATION y SNTC_AD_MANAGERS. Hasta contrastarla con el SSM real solo se muestran datos de directorio; salarios, datos personales, currículos y evaluaciones permanecen bloqueados.";

/** Población del responsable según Meta4, con datos de directorio de ORO. */
export async function PopulationPanel({ context }: { context: PortalContext }) {
  const result = await readPortal(context, () => loadManagerScope(), "tu población");
  if (result.status === "unavailable") {
    return (
      <DependencyState
        message={result.message}
        pending={result.pending}
        meta4={["SNTC_AD_POPULATION", "SNTC_AD_MANAGERS"]}
      />
    );
  }
  if (result.status === "error") return <PortalError message={result.message} />;
  const scope = result.data;
  const peopleResult = await readPortal(
    context,
    (meta4) => getDirectoryEntries(meta4.society, scope.employeeIds),
    "las personas de tu población",
  );
  const people = peopleResult.status === "ok" ? peopleResult.data : [];
  return (
    <div className="flex min-w-0 flex-col gap-4">
      {!scope.verified ? <SensitiveLocked message={SCOPE_MESSAGE} /> : null}
      <Section
        title="Unidades de responsabilidad"
        description="Unidades organizativas de las que eres responsable según Meta4."
      >
        {scope.units.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Meta4 no devuelve unidades de responsabilidad para tu usuario.
          </p>
        ) : (
          <PortalDataTable
            title="Unidades de responsabilidad"
            rows={scope.units.map((unit) => ({
              id: unit.unitId,
              fields: [
                { label: "Unidad", value: unit.unitName ?? unit.unitId },
                { label: "Tipo", value: unit.responsibilityType ?? "No informado" },
              ],
            }))}
          />
        )}
      </Section>
      <Section
        title="Tu equipo"
        description={
          peopleResult.status === "ok"
            ? `${people.length} ${people.length === 1 ? "persona" : "personas"} en tu población.`
            : "Las unidades se han cargado; los datos de directorio se consultan por separado."
        }
      >
        {peopleResult.status === "error" ? (
          <div className="p-4">
            <PortalError message={peopleResult.message} />
          </div>
        ) : peopleResult.status === "unavailable" ? (
          <div className="p-4">
            <DependencyState
              message={peopleResult.message}
              pending={peopleResult.pending}
              meta4={["M4ORO_EMPLEADOS"]}
            />
          </div>
        ) : people.length === 0 ? (
          <div className="p-4">
            <EmptyState
              icon={<Users />}
              title="Sin personas en tu población"
              description="Meta4 no devuelve personas a tu cargo."
            />
          </div>
        ) : (
          <PortalDataTable
            title="Tu equipo"
            rows={people.map((person) => ({
              id: person.key,
              href: `/portal/organizacion/personas/${encodeURIComponent(person.employeeId)}`,
              fields: [
                { label: "Persona", value: person.fullName },
                { label: "Puesto", value: person.job ?? "No informado" },
                { label: "Unidad", value: person.unit ?? "No informado" },
                { label: "Centro", value: person.workCenter ?? "No informado" },
                { label: "Correo", value: person.email ?? "No informado" },
              ],
            }))}
          />
        )}
      </Section>
    </div>
  );
}

/** Inicio del responsable: tareas, población y apartados del SSM. */
export function ManagerHomeView({ context }: { context: PortalContext }) {
  return (
    <div className="flex min-w-0 flex-col gap-8">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Portal del responsable
        </h1>
        <p className="text-sm text-muted-foreground">
          Tu equipo, las peticiones que esperan tu validación y la gestión del SSM.
        </p>
      </header>
      {context.mode !== "meta4" ? (
        <DependencyState
          title="Portal sin sesión Meta4"
          message={context.message}
          pending={["P03"]}
        />
      ) : (
        <>
          <section aria-labelledby="responsable-tareas" className="flex min-w-0 flex-col gap-3">
            <h2 id="responsable-tareas" className="text-sm font-semibold text-foreground">
              Validaciones y tareas
            </h2>
            <Suspense fallback={<Skeleton className="h-28 w-full rounded-xl" />}>
              <TasksView context={context} compact />
            </Suspense>
          </section>
          <section aria-labelledby="responsable-equipo" className="flex min-w-0 flex-col gap-3">
            <h2 id="responsable-equipo" className="text-sm font-semibold text-foreground">
              Población
            </h2>
            <Suspense fallback={<Skeleton className="h-40 w-full rounded-xl" />}>
              <PopulationPanel context={context} />
            </Suspense>
          </section>
        </>
      )}
      <section aria-labelledby="responsable-apartados" className="flex min-w-0 flex-col gap-3">
        <h2 id="responsable-apartados" className="text-sm font-semibold text-foreground">
          Apartados
        </h2>
        <DomainGrid profile="responsable" context={context} />
      </section>
    </div>
  );
}
