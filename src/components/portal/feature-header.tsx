import { FileSearch } from "lucide-react";

import type { PortalFeature, PortalVariant } from "@/lib/portal/types";

import { PORTAL_ICONS } from "./portal-icons";

const READ_LABEL: Record<PortalFeature["read"]["kind"], string> = {
  soap: "Servicio Meta4",
  sql: "PeopleNet",
  pending: "Pendiente de conexión",
};

/** Título, resumen y origen de la pantalla original. */
export function FeatureHeader({
  feature,
  variant,
}: {
  feature: PortalFeature;
  variant: PortalVariant | null;
}) {
  const Icon = PORTAL_ICONS[feature.icon];
  const variantNote = variant ? feature.variants?.[variant] : undefined;
  return (
    <header className="flex min-w-0 flex-col gap-3">
      <div className="flex min-w-0 items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-selected text-selected-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 space-y-1">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">{feature.title}</h1>
          <p className="text-sm text-muted-foreground">{feature.summary}</p>
        </div>
      </div>
      <dl className="flex min-w-0 flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
        <div className="flex gap-1.5">
          <dt>Datos:</dt>
          <dd className="font-medium text-foreground">
            {READ_LABEL[feature.read.kind]}
            {feature.read.kind !== "pending" && !feature.read.verified ? " (por verificar)" : ""}
          </dd>
        </div>
        <div className="flex min-w-0 gap-1.5">
          <dt className="flex items-center gap-1">
            <FileSearch className="size-3" aria-hidden="true" />
            Original:
          </dt>
          <dd className="min-w-0 truncate font-mono" title={feature.sources.join(", ")}>
            {feature.sources[0] ?? "Menú dinámico del original"}
            {feature.sources.length > 1 ? ` +${feature.sources.length - 1}` : ""}
          </dd>
        </div>
        {variant ? (
          <div className="flex gap-1.5">
            <dt>Variante:</dt>
            <dd className="font-medium text-foreground">{variant}</dd>
          </div>
        ) : null}
      </dl>
      {variantNote ? <p className="text-xs text-muted-foreground">{variantNote}</p> : null}
    </header>
  );
}
