/** Tipo de pagas del recibo, como en «Ejecución del recibo de nómina» de Meta4. */
export const PAYROLL_PAYMENT_TYPES = [
  { value: "current", label: "Paga actual" },
  { value: "retroactive", label: "Pagas retroactivas" },
  { value: "current-and-retroactive", label: "Paga normal + retroactivas" },
] as const;

export type PayrollPaymentType = (typeof PAYROLL_PAYMENT_TYPES)[number]["value"];

/** Moneda de proceso: la de cálculo de la nómina u otra indicada por ID. */
export type PayrollProcessCurrency =
  | { mode: "calculation" }
  | { mode: "other"; currencyId: string };

/** Grupos del calendario de pagas para filtrar mensuales, revisiones, variable y otras. */
export const PAYROLL_PAY_CATEGORIES = [
  { value: "ordinary", label: "Mensuales" },
  { value: "revision", label: "Revisiones e incrementos" },
  { value: "variable", label: "Retribución variable" },
  { value: "other", label: "Otras" },
] as const;

export type PayrollPayCategory = (typeof PAYROLL_PAY_CATEGORIES)[number]["value"];

/** Filtro del calendario: todas las pagas o un grupo. */
export type PayrollPayFilter = "all" | PayrollPayCategory;

/** Paga del calendario de nómina (`M4SCO_HT_PAYS`) de la sociedad activa. */
export type PayrollPayOption = {
  /** Fecha de pago ISO `YYYY-MM-DD` (`SCO_DT_ACCRUED`). */
  paymentDate: string;
  name: string;
  /** Fechas ISO `YYYY-MM-DD` del periodo de liquidación. */
  startDate: string;
  endDate: string;
  category: PayrollPayCategory;
};

/** Máximo de pagas por consulta de rango. */
export const PAYROLL_RANGE_MAX_PAYS = 24;

export type PayrollReceiptParameters = {
  employeeId: string;
  /** Fechas de pago ISO `YYYY-MM-DD` de la primera y la última paga del rango. */
  fromPaymentDate: string;
  toPaymentDate: string;
  /** Solo las pagas de este grupo dentro del rango. */
  payFilter: PayrollPayFilter;
  paymentType: PayrollPaymentType;
  currency: PayrollProcessCurrency;
};

/**
 * Línea del cuerpo del recibo. `concept` son los devengos y retenciones;
 * `informative` agrupa los conceptos marcados con *** en Meta4 y `level` 1
 * es su desglose (p. ej. las cotizaciones dentro de «Coste Empresa»).
 */
export type PayrollReceiptLine = {
  id: string;
  section: "concept" | "informative";
  level: 0 | 1;
  concept: string;
  /** El recibo Meta4 escribe los tipos de IRPF y cotización en Unidades. */
  units: number | null;
  unitsFormat: "decimal" | "percentage";
  price: number | null;
  /** Porcentaje de jornada ya expresado en tanto por cien (34,16 → 34.16). */
  percentage: number | null;
  earning: number | null;
  deduction: number | null;
};

export type PayrollReceipt = {
  /** Qué filas de la paga suma: la actual, los retroactivos o ambos. */
  paymentType: PayrollPaymentType;
  currencyId: string;
  company: { name: string; taxId: string; socialSecurityRegistration: string };
  periodLabel: string;
  worker: {
    employeeId: string;
    fullName: string;
    nationalId: string;
    socialSecurityNumber: string;
    contributionGroup: string;
  };
  workCenter: string;
  professionalGroup: string;
  /** Fecha ISO `YYYY-MM-DD`. */
  seniorityDate: string | null;
  lines: readonly PayrollReceiptLine[];
  bases: {
    totalRemuneration: number;
    extraPayProration: number;
    totalBase: number;
    generalRegimeBase: number;
    unemploymentBase: number;
  };
  totals: { accrued: number; deducted: number; netPay: number };
  accumulated: { irpfBase: number; irpfQuota: number; socialSecurityQuota: number };
  bankPayments: readonly { account: string; amount: number }[];
  beneficiaryPayments: readonly { account: string; amount: number }[];
  /**
   * Diferencia entre los totales de Meta4 y la suma de las líneas mostradas.
   * Distinta de cero cuando el recibo tiene conceptos aún no mapeados.
   */
  unmapped: { accrued: number; deducted: number };
};

/** Recibo de una paga del rango; una paga con baja y nueva alta tiene uno por alta. */
export type PayrollReceiptEntry = {
  /** Único en el rango: la fecha de pago, más el número de alta si hay varias. */
  id: string;
  paymentDate: string;
  payName: string;
  receipt: PayrollReceipt;
};

/** Paga del rango sin recibo para el empleado (p. ej. una paga extra que no le aplica). */
export type PayrollMissingReceipt = {
  paymentDate: string;
  payName: string;
  reason: string;
};

export type PayrollReceiptResult =
  | {
      ok: true;
      /** En orden cronológico de pago. */
      receipts: readonly PayrollReceiptEntry[];
      missing: readonly PayrollMissingReceipt[];
    }
  | { ok: false; message: string };
