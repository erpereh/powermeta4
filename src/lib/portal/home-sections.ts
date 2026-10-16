import "server-only";

import type { IconTone } from "@/lib/theme/icon-tones";

import { getPortalFeature, getPortalMenuPages, getPortalSections } from "./registry";
import type { PortalIconName, PortalProfile, PortalVariant } from "./types";

export type PortalHomeSection = {
  id: string;
  title: string;
  icon: PortalIconName;
  tone: IconTone;
  items: { id: string; title: string; href: string; icon: PortalIconName }[];
};

const SECTION_TONES: Readonly<Record<string, IconTone>> = {
  "empleado.aplicaciones": "violet",
  "empleado.herramientas": "orange",
  "empleado.datos": "teal",
  "empleado.retribucion": "amber",
  "empleado.talento": "green",
  "empleado.tiempo": "rose",
  "responsable.herramientas": "orange",
  "responsable.equipo": "teal",
  "responsable.retribucion": "amber",
  "responsable.revision": "violet",
  "responsable.talento": "green",
  "responsable.tiempo": "rose",
};

/** Solo navegación serializable; la variante y sus destinos se resuelven en servidor. */
export function getPortalHomeSections(
  profile: PortalProfile,
  variant?: PortalVariant,
): PortalHomeSection[] {
  return getPortalSections(profile).flatMap((section) => {
    const items = section.groups.flatMap((group) => {
      const page = getPortalMenuPages(group, variant)[0];
      return page
        ? [
            {
              id: group.id,
              title: group.title,
              href: page.route,
              icon: getPortalFeature(page.featureId)?.icon ?? section.icon,
            },
          ]
        : [];
    });
    return items.length
      ? [
          {
            id: section.id,
            title: section.title,
            icon: section.id === "empleado.aplicaciones" ? "org" : section.icon,
            tone: SECTION_TONES[section.id] ?? "slate",
            items,
          },
        ]
      : [];
  });
}
