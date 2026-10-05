import type { PortalReaderId, ReadContract } from "../types";

/** Contratos reutilizables por apartado. La integración viva requiere portal:verify. */
export const PORTAL_READERS = {
  dependency: {
    kind: "pending",
    meta4: [],
    pending: ["P02", "P05"],
    detail:
      "Falta el contrato de tablas, filtros y reglas del objeto original o un servicio de lectura publicado.",
  },
  "own-emails": { kind: "sql", tables: ["STD_EMAIL"], verified: false },
  "own-payment-accounts": {
    kind: "sql",
    tables: ["M4SCO_PAYMENT_DATA", "M4SCO_PERSON_BANK"],
    verified: false,
  },
  "own-oro-status": { kind: "sql", tables: ["M4ORO_EMPLEADOS"], verified: false },
} as const satisfies Record<PortalReaderId, ReadContract>;

export const PORTAL_READER_FIELDS = {
  dependency: [],
  "own-emails": ["STD_EMAIL", "STD_OR_MAIL", "STD_DT_START", "STD_DT_END", "STD_ID_LOCAT_TYPE"],
  "own-payment-accounts": ["SCO_GB_IBAN", "SCO_DT_START", "SCO_DT_END", "SCO_OR_HR_PERIOD"],
  "own-oro-status": ["ID_ESTADO_CIVIL"],
} as const satisfies Record<PortalReaderId, readonly string[]>;
