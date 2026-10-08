import { IconChip, SectionNav } from "@/components/system";
import { PORTAL_ICON_TONES } from "@/lib/theme/icon-tones";
import { getPortalMenuLocation, getPortalMenuPages } from "@/lib/portal/registry";
import type { PortalFeature, PortalVariant } from "@/lib/portal/types";

import { PORTAL_ICONS } from "./portal-icons";

/** Título y navegación; los contratos no forman parte de la cabecera. */
export function FeatureHeader({
  feature,
  variant,
}: {
  feature: PortalFeature;
  variant: PortalVariant | null;
}) {
  const Icon = PORTAL_ICONS[feature.icon];
  const location = getPortalMenuLocation(feature.route);
  const pages = location?.group ? getPortalMenuPages(location.group, variant ?? undefined) : [];
  return (
    <header className="flex min-w-0 flex-col gap-4">
      <div className="flex min-w-0 items-start gap-3.5">
        <IconChip icon={Icon} tone={PORTAL_ICON_TONES[feature.icon]} size="md" appearance="plain" />
        <div className="min-w-0 space-y-1 pt-0.5">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">{feature.title}</h1>
          <p className="text-sm text-muted-foreground">{feature.summary}</p>
        </div>
      </div>
      {pages.length > 1 ? (
        <SectionNav
          aria-label={`Páginas de ${location?.group?.title}`}
          overflow="menu"
          variant="segment"
          menuWidth={320}
          items={pages.map((page) => ({
            href: page.route,
            label: page.title,
            badge: page.modeLabel,
          }))}
          activeHref={location?.page?.route ?? null}
        />
      ) : null}
    </header>
  );
}
