/** Estado del cuadre de un empleado, de una sociedad en un mes o de un bloque. */
export type PrimaveraStatus = "ok" | "mismatch" | "empty";

/** Nómina de un empleado en un mes: todos los pagos y allocs del mes sumados. */
export type PrimaveraRow = {
  employeeId: string;
  /** `SSP_TOTAL_DEVENGOS`. */
  earnings: number;
  /** Suma de las columnas de los códigos R de `M4CSP_CODIGOS_PRIMAVERA`. */
  earningsConcepts: number;
  /** `SSP_TOTAL_RETENIDO`. */
  deductions: number;
  /** Suma de las columnas de los códigos D. */
  deductionsConcepts: number;
  /** `SSP_LIQUIDO`. */
  net: number;
  ok: boolean;
};

export type PrimaveraMonth = {
  /** 1–12, por la fecha de pago. */
  month: number;
  rows: PrimaveraRow[];
  mismatches: number;
  status: PrimaveraStatus;
};

export type PrimaveraReport = {
  society: string;
  /** Entidad legal portuguesa de la sociedad (`M4SCO_H_HR_LEGENT`). */
  legalEntity: string;
  /** Base de PeopleNet leída (`DB_NAME()`): prenómina o producción. */
  database: string | null;
  year: number;
  /** Meses pedidos; `wholeYear` si no se indicó ninguno. */
  fromMonth: number;
  toMonth: number;
  wholeYear: boolean;
  months: PrimaveraMonth[];
};

export type PrimaveraResult =
  | { ok: true; report: PrimaveraReport }
  | { ok: false; message: string };
