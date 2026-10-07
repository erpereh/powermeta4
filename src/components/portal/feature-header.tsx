import { FileSearch } from "lucide-react";

import { IconChip, SectionNav } from "@/components/system";
import { PORTAL_ICON_TONES } from "@/lib/theme/icon-tones";
import { getPortalMenuLocation, getPortalMenuPages } from "@/lib/portal/registry";
import type { PortalFeature, PortalVariant } from "@/lib/portal/types";

import { PORTAL_ICONS } from "./portal-icons";

const READ_LABEL: Record<PortalFeature["read"]["kind"], string> = {
  soap: "Servicio Meta4",
  sql: "PeopleNet",
  pending: "Pendiente de conexión",
};

/** Título, resumen, subpáginas y origen de la pantalla original. */
export function FeatureHeader({
  feature,
  variant,
}: {
  feature: PortalFeature;
  variant: PortalVariant | null;
}) {
  const Icon = PORTAL_ICONS[feature.icon];
  const variantNote = variant ? feature.variants?.[variant] : undefined;
  const location = getPortalMenuLocation(feature.route);
  const pages = location?.group ? getPortalMenuPages(location.group, variant ?? undefined) : [];
  return (
    <header className="flex min-w-0 flex-col gap-4">
      <div className="flex min-w-0 items-start gap-3.5">
        <IconChip icon={Icon} tone={PORTAL_ICON_TONES[feature.icon]} size="lg" />
        <div className="min-w-0 space-y-1 pt-0.5">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">{feature.title}</h1>
          <p className="text-sm text-muted-foreground">{feature.summary}</p>
        </div>
      </div>
      {pages.length > 1 ? (
        <SectionNav
          aria-label={`Páginas de ${location?.group?.title}`}
          variant="pill"
          items={pages.map((page) => ({
            href: page.route,
            label: page.title,
            badge: page.modeLabel,
          }))}
          activeHref={location?.page?.route ?? null}
        />
      ) : null}
      <dl className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-0.5">
          <span
            aria-hidden="true"
            className={
              feature.read.kind === "pending"
                ? "size-1.5 rounded-full bg-muted-foreground/60"
                : "size-1.5 rounded-full bg-primary"
            }
          />
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
