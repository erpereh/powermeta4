import type { ReadContract } from "../types";

/** La SELECT anterior basada en GTA no acredita la asignación del original. */
export const HOLIDAY_READ_CONTRACT = {
  kind: "pending",
  meta4: ["SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA", "SSE_CARGA_FESTIVOS!SSE_BUSCA_CALENDARIO"],
  pending: ["P02", "P05"],
  detail:
    "El descubrimiento confirma CARGA y GENERADIAS, pero falta completar la asignación delegada en SCO_APPLYVAL_CALEN (rol, centro, país y vigencias). Ejecutar portal:holidays-discover de formato 2 en la VM; no se usa la consulta anterior basada en GTA.",
} as const satisfies ReadContract;
