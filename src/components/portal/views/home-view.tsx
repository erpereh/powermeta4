import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";

import { Skeleton, Surface } from "@/components/system";
import type { PortalContext } from "@/lib/portal/context";
import { getDomainFeatures, getProfileDomains } from "@/lib/portal/registry";
import type { PortalProfile } from "@/lib/portal/types";

import { PORTAL_ICONS } from "../portal-icons";
import { DependencyState } from "../portal-states";
import { TasksView } from "./tasks-view";

function DomainGrid({ profile, context }: { profile: PortalProfile; context: PortalContext }) {
  const variant = context.mode === "meta4" ? context.variant : undefined;
  const domains = getProfileDomains(profile);
  return (
    <ul className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {domains.map((domain) => {
        const Icon = PORTAL_ICONS[domain.icon];
        const features = getDomainFeatures(domain.id, variant);
        const connected = features.filter((feature) => feature.read.kind !== "pending").length;
        return (
          <li key={domain.id} className="min-w-0">
            <Link
              href={domain.route}
              className="group flex h-full min-w-0 flex-col gap-3 rounded-xl border border-border bg-card p-4 outline-none transition-colors hover:border-foreground/20 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-selected text-selected-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold text-foreground">
                  {domain.title}
                </span>
                <ChevronRight
                  className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs text-muted-foreground">{domain.summary}</span>
              <span className="mt-auto text-[11px] text-muted-foreground">
                {features.length} {features.length === 1 ? "pantalla" : "pantallas"} · {connected}{" "}
                con datos conectados
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
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
        <p className="text-sm text-muted-foreground">
          Tus datos, tu retribución, tu tiempo y tu desarrollo, con la información de Meta4 de tu
          sociedad.
        </p>
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
      <Surface title="Cómo funciona este portal">
        <p className="text-sm text-muted-foreground">
          Cada pantalla reproduce el portal Meta4 de tu sociedad. Los datos que ya tienen una
          conexión real se muestran directamente; el resto indica qué lectura o servicio falta. Las
          solicitudes preparan el formulario completo, pero su envío queda bloqueado hasta que
          exista un servicio de escritura aprobado: nada se envía ni se simula.
        </p>
      </Surface>
    </div>
  );
}

export { DomainGrid };
