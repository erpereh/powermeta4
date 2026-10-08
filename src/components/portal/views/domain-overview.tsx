import { getDomainFeatures } from "@/lib/portal/registry";
import type { PortalDomain, PortalVariant } from "@/lib/portal/types";

import { PORTAL_ICONS } from "../portal-icons";
import { PortalDataTable } from "../portal-data";

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
        <PortalDataTable
          title={domain.title}
          rows={features.map((feature) => ({
            id: feature.id,
            href: feature.route,
            fields: [
              { label: "Pantalla", value: feature.title },
              { label: "Descripción", value: feature.summary },
              {
                label: "Estado",
                value:
                  feature.read.kind === "pending"
                    ? "Pendiente de conexión"
                    : feature.read.verified
                      ? "Consulta preparada"
                      : "Por verificar",
              },
            ],
          }))}
        />
      )}
    </div>
  );
}
