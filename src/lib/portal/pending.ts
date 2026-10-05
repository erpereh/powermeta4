import type { PendingId, PortalVariant } from "./types";

/** Textos de `docs/portal/implementacion/pendientes.md`. */
export const PENDING_LABELS: Record<PendingId, { title: string; detail: string }> = {
  P01: {
    title: "Publicación por sociedad y perfil",
    detail: "Falta el menú efectivo del servidor que confirme qué pantalla usa cada sociedad.",
  },
  P02: {
    title: "Metadatos y reglas del objeto Meta4",
    detail: "Faltan la definición de nodos, ítems, catálogos y reglas internas del objeto.",
  },
  P03: {
    title: "Identidad y autorización",
    detail: "Falta verificar el vínculo con el empleado o el alcance del responsable.",
  },
  P04: {
    title: "Contrato de escritura",
    detail:
      "No hay un servicio publicado ni autorización para ejecutar esta operación desde powermeta4.",
  },
  P05: {
    title: "Comprobación en ejecución",
    detail: "Falta contrastar la pantalla con el portal real y una sesión de cada perfil.",
  },
  P06: {
    title: "Dependencia dinámica",
    detail: "El original carga un recurso que solo resuelve el servidor.",
  },
  P07: {
    title: "Módulo de otra generación",
    detail: "La función pertenece a otra interfaz o módulo cuyo uso real no está confirmado.",
  },
  P08: {
    title: "Distribución de documentos",
    detail: "Falta el servicio real del documento, su formato y sus permisos.",
  },
  P09: {
    title: "Variante por sociedad",
    detail: "Falta confirmar la variante que aplica a la sociedad.",
  },
};

/** Variante de personalización confirmada por el usuario: carpeta homónima. */
export const resolvePortalVariant = (society: string | null): PortalVariant =>
  society === "CYC" || society === "IBER" || society === "COLL" ? society : "BASE";
