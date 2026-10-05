import {
  PAYROLL_PAY_CATEGORIES,
  PAYROLL_PAYMENT_TYPES,
  type PayrollPayFilter,
  type PayrollPaymentType,
  type PayrollProcessCurrency,
  type PayrollReceiptParameters,
} from "@/types/payroll-receipt";

const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9]{1,20}$/;
const PAYMENT_DATE_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const CURRENCY_ID_PATTERN = /^[A-Z0-9]{1,10}$/;

export type ParsedPayrollReceiptParameters =
  | { ok: true; value: PayrollReceiptParameters }
  | { ok: false; message: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isPaymentType = (value: unknown): value is PayrollPaymentType =>
  PAYROLL_PAYMENT_TYPES.some((option) => option.value === value);

const isPayFilter = (value: unknown): value is PayrollPayFilter =>
  value === "all" || PAYROLL_PAY_CATEGORIES.some((option) => option.value === value);

const parseCurrency = (value: unknown): PayrollProcessCurrency | null => {
  if (!isRecord(value)) return null;
  if (value.mode === "calculation") return { mode: "calculation" };
  if (value.mode !== "other" || typeof value.currencyId !== "string") return null;
  const currencyId = value.currencyId.trim().toUpperCase();
  return CURRENCY_ID_PATTERN.test(currencyId) ? { mode: "other", currencyId } : null;
};

/**
 * Valida en servidor los parámetros del recibo, vengan de la action o del JSON
 * de la descarga: nunca se confía en la validación del navegador.
 */
export const parsePayrollReceiptParameters = (input: unknown): ParsedPayrollReceiptParameters => {
  const failure = (message: string): ParsedPayrollReceiptParameters => ({ ok: false, message });
  if (!isRecord(input)) return failure("Los parámetros de la consulta no son válidos.");

  const employeeId = typeof input.employeeId === "string" ? input.employeeId.trim() : "";
  if (!EMPLOYEE_ID_PATTERN.test(employeeId)) return failure("La matrícula no es válida.");

  const { fromPaymentDate, toPaymentDate } = input;
  if (
    typeof fromPaymentDate !== "string" ||
    typeof toPaymentDate !== "string" ||
    !PAYMENT_DATE_PATTERN.test(fromPaymentDate) ||
    !PAYMENT_DATE_PATTERN.test(toPaymentDate)
  ) {
    return failure("El periodo de liquidación no es válido.");
  }
  if (fromPaymentDate > toPaymentDate) {
    return failure("La paga inicial debe ser anterior o igual a la final.");
  }

  const currency = parseCurrency(input.currency);
  if (!currency) return failure("El ID de moneda no es válido.");
  if (!isPaymentType(input.paymentType)) return failure("El tipo de pagas no es válido.");
  if (!isPayFilter(input.payFilter)) return failure("El grupo de pagas no es válido.");

  return {
    ok: true,
    value: {
      employeeId,
      fromPaymentDate,
      toPaymentDate,
      payFilter: input.payFilter,
      paymentType: input.paymentType,
      currency,
    },
  };
};
