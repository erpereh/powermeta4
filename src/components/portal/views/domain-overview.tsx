import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getDomainFeatures } from "@/lib/portal/registry";
import type { PortalDomain, PortalFeature, PortalVariant } from "@/lib/portal/types";

import { PORTAL_ICONS } from "../portal-icons";

const STATUS: Record<PortalFeature["read"]["kind"], { label: string; dot: string }> = {
  sql: { label: "Datos de PeopleNet", dot: "bg-primary" },
  soap: { label: "Servicio Meta4", dot: "bg-primary" },
  pending: { label: "Pendiente de conexión", dot: "bg-muted-foreground/50" },
};

export function FeatureCard({ feature }: { feature: PortalFeature }) {
  const Icon = PORTAL_ICONS[feature.icon];
  const status = STATUS[feature.read.kind];
  return (
    <Link
      href={feature.route}
      className="group flex min-h-24 min-w-0 items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors outline-none hover:border-foreground/20 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-sm font-medium text-foreground">{feature.title}</span>
        <span className="line-clamp-2 text-xs text-muted-foreground">{feature.summary}</span>
        <span className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className={`size-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
          {status.label}
        </span>
      </span>
      <ChevronRight
        className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

/** Índice de un dominio: todas sus pantallas, con el estado real de su contrato. */
export function DomainOverview({
  domain,
  variant,
}: {
  domain: PortalDomain;
  variant: PortalVariant | null;
}) {
  const Icon = PORTAL_ICONS[domain.icon];
  const features = getDomainFeatures(domain.id, variant ?? undefined);
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <header className="flex min-w-0 items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-selected text-selected-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 space-y-1">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">{domain.title}</h1>
          <p className="text-sm text-muted-foreground">{domain.summary}</p>
        </div>
      </header>
      {features.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Este apartado no tiene pantallas para tu sociedad.
        </p>
      ) : (
        <ul className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.id} className="min-w-0">
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
