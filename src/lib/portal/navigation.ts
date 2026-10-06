import { getPortalMenuLocation, getPortalSections } from "./registry";
import type { PortalProfile } from "./types";

/** Sidebar derivada de la misma jerarquía que pestañas, Inicio y búsqueda. */
export const getPortalSidebarItems = (profile: PortalProfile) => [
  {
    route: profile === "responsable" ? "/portal/responsable" : "/portal",
    name: "Inicio",
    icon: "home" as const,
    sectionId: null,
  },
  ...getPortalSections(profile).map((section) => ({
    // La raíz resuelve en servidor la primera página disponible para la variante.
    route: section.route,
    name: section.title,
    icon: section.icon,
    sectionId: section.id,
  })),
];

export const isPortalSidebarItemActive = (
  pathname: string,
  item: ReturnType<typeof getPortalSidebarItems>[number],
) =>
  item.sectionId
    ? getPortalMenuLocation(pathname)?.section.id === item.sectionId
    : pathname === item.route;
