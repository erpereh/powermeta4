import { Suspense } from "react";

import { Accordion, Skeleton } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getPortalSectionHref, getPortalSections } from "@/lib/portal/registry";
import type { PortalProfile } from "@/lib/portal/types";

import { PortalDataTable } from "../portal-data";
import { DependencyState } from "../portal-states";
import { TasksView } from "./tasks-view";

function DomainGrid({ profile, context }: { profile: PortalProfile; context: PortalContext }) {
  const variant = context.mode === "meta4" ? context.variant : undefined;
  const domains = getPortalSections(profile);
  return (
    <PortalDataTable
      title="Apartados"
      rows={domains.map((domain) => ({
        id: domain.id,
        href: getPortalSectionHref(domain, variant),
        fields: [
          { label: "Apartado", value: domain.title },
          { label: "Contenido", value: domain.groups.map((group) => group.title).join(" · ") },
        ],
      }))}
    />
  );
}

/** Inicio del portal del empleado: apartados, tareas y estado de conexión. */
export function HomeView({ context }: { context: PortalContext }) {
  return (
    <div className="flex min-w-0 flex-col gap-8">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Portal del empleado
        </h1>
        <p className="text-sm text-muted-foreground">Consulta tu información y tus tareas.</p>
      </header>
      {context.mode !== "meta4" ? (
        <DependencyState
          title="Portal sin sesión Meta4"
          message={context.message}
          pending={["P03"]}
        />
      ) : null}
      <section aria-labelledby="portal-apartados" className="flex min-w-0 flex-col gap-3">
        <h2 id="portal-apartados" className="text-sm font-semibold text-foreground">
          Apartados
        </h2>
        <DomainGrid profile="empleado" context={context} />
      </section>
      {context.mode === "meta4" ? (
        <section aria-labelledby="portal-tareas" className="flex min-w-0 flex-col gap-3">
          <h2 id="portal-tareas" className="text-sm font-semibold text-foreground">
            Mis tareas
          </h2>
          <Suspense fallback={<Skeleton className="h-28 w-full rounded-xl" />}>
            <TasksView context={context} compact />
          </Suspense>
        </section>
      ) : null}
      <Accordion
        items={[
          {
            id: "help",
            title: "Cómo funciona este portal",
            description: (
              <p className="text-sm text-muted-foreground">
                Cada pantalla reproduce el portal Meta4 de tu sociedad. Los datos que ya tienen una
                conexión real se muestran directamente; el resto indica qué lectura o servicio
                falta. Las solicitudes preparan el formulario completo, pero su envío queda
                bloqueado hasta que exista un servicio de escritura aprobado: nada se envía ni se
                simula.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}

export { DomainGrid };
