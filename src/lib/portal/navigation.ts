import type { PortalIconName } from "./types";

/** Entradas del grupo «Portal» de la sidebar (la fila del grupo no navega). */
export const PORTAL_SIDEBAR_ITEMS: readonly {
  route: string;
  name: string;
  icon: PortalIconName;
}[] = [
  { route: "/portal", name: "Inicio", icon: "home" },
  { route: "/portal/empleado/datos", name: "Mis datos", icon: "id-card" },
  { route: "/portal/empleado/retribucion", name: "Retribución", icon: "payslip" },
  { route: "/portal/empleado/tiempo", name: "Tiempo", icon: "calendar" },
  { route: "/portal/empleado/talento", name: "Talento", icon: "career" },
  { route: "/portal/organizacion", name: "Organización", icon: "org" },
  { route: "/portal/responsable", name: "Responsable", icon: "team" },
];
