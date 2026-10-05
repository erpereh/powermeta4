import type { PortalFeature } from "../types";

export const EMPLEADO_CONOCIMIENTO: readonly PortalFeature[] = [
  {
    id: "empleado.conocimiento",
    profile: "empleado",
    domain: "conocimiento",
    title: "Mi conocimiento",
    summary:
      "Foros, búsqueda de documentación, reglas de distribución del conocimiento y expertos.",
    icon: "knowledge",
    route: "/portal/empleado/conocimiento",
    sources: ["sse_g5/sse_g5_menu.jsp"],
    ficha: "empleado/conocimiento/sse_g5--sse_g5_menu.md",
    keywords: ["knownet", "foros", "expertos", "documentación"],
    sensitive: false,
    read: {
      kind: "pending",
      meta4: [],
      pending: ["P01", "P07"],
      detail:
        "El menú enlaza con Meta4 KnowNet (foros, búsqueda, reglas de distribución y expertos). Falta confirmar la publicación del sistema enlazado y su dirección; no se crea una biblioteca ni resultados locales.",
    },
    view: "generic",
  },
];
