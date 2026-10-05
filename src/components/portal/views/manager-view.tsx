import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight, Users } from "lucide-react";

import { EmptyState, Skeleton, Surface } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getDirectoryEntries } from "@/lib/portal/data/organization";
import { loadManagerScope } from "@/lib/portal/data/scope";
import { readPortal } from "@/lib/portal/server";

import { DependencyState, PortalError, SensitiveLocked } from "../portal-states";
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
      <Surface
        title="Unidades de responsabilidad"
        description="Unidades organizativas de las que eres responsable según Meta4."
      >
        {scope.units.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Meta4 no devuelve unidades de responsabilidad para tu usuario.
          </p>
        ) : (
          <ul className="flex min-w-0 flex-wrap gap-2">
            {scope.units.map((unit) => (
              <li
                key={unit.unitId}
                className="rounded-lg border border-border px-2.5 py-1 text-xs text-foreground"
              >
                {unit.unitName ?? unit.unitId}
                {unit.responsibilityType ? (
                  <span className="text-muted-foreground"> · tipo {unit.responsibilityType}</span>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </Surface>
      <Surface
        title="Tu equipo"
        description={
          peopleResult.status === "ok"
            ? `${people.length} ${people.length === 1 ? "persona" : "personas"} en tu población.`
            : "Las unidades se han cargado; los datos de directorio se consultan por separado."
        }
        flush
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
          <ul className="flex min-w-0 flex-col divide-y divide-border border-t border-border">
            {people.map((person) => (
              <li key={person.key} className="min-w-0">
                <Link
                  href={`/portal/organizacion/personas/${encodeURIComponent(person.employeeId)}`}
                  className="flex min-w-0 items-center gap-3 px-4 py-3 outline-none hover:bg-elevated focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/60"
                >
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {person.fullName}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {[person.job, person.unit].filter(Boolean).join(" · ")}
                    </span>
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Surface>
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
