import type { ReadContract } from "../types";

/** La SELECT anterior basada en GTA no acredita la asignación del original. */
export const HOLIDAY_READ_CONTRACT = {
  kind: "pending",
  meta4: ["SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA", "SSE_CARGA_FESTIVOS!SSE_BUSCA_CALENDARIO"],
  pending: ["P02", "P05"],
  detail:
    "Falta confirmar en el diccionario la asignación del calendario y el filtro de festivos de SSE_FESTIVOS.CARGA. Ejecutar portal:holidays-discover en la VM; no se usa la consulta anterior basada en GTA.",
} as const satisfies ReadContract;
