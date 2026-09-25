"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import {
  getCurrentPayrollReceiptRange,
  PayrollReceiptError,
} from "@/lib/peoplenet/payroll-receipt";
import {
  PAYROLL_PAYMENT_TYPES,
  type PayrollProcessCurrency,
  type PayrollReceiptParameters,
  type PayrollReceiptResult,
} from "@/types/payroll-receipt";

const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9]{1,20}$/;
const PAYMENT_DATE_PATTERN = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const CURRENCY_ID_PATTERN = /^[A-Z0-9]{1,10}$/;

const failure = (message: string): PayrollReceiptResult => ({ ok: false, message });

const parseCurrency = (currency: PayrollProcessCurrency): PayrollProcessCurrency | null => {
  if (currency.mode === "calculation") return { mode: "calculation" };
  const currencyId = currency.currencyId.trim().toUpperCase();
  return CURRENCY_ID_PATTERN.test(currencyId) ? { mode: "other", currencyId } : null;
};

/** Lee los recibos en PeopleNet con la sociedad del contexto operativo, nunca la del navegador. */
export async function getPayrollReceiptAction(
  parameters: PayrollReceiptParameters,
): Promise<PayrollReceiptResult> {
  const authSession = await requireAuthContext();

  const employeeId = parameters.employeeId.trim();
  const currency = parseCurrency(parameters.currency);
  if (!EMPLOYEE_ID_PATTERN.test(employeeId)) return failure("La matrícula no es válida.");
  if (
    !PAYMENT_DATE_PATTERN.test(parameters.fromPaymentDate) ||
    !PAYMENT_DATE_PATTERN.test(parameters.toPaymentDate)
  ) {
    return failure("El periodo de liquidación no es válido.");
  }
  if (parameters.fromPaymentDate > parameters.toPaymentDate) {
    return failure("La paga inicial debe ser anterior o igual a la final.");
  }
  if (!currency) return failure("El ID de moneda no es válido.");
  if (!PAYROLL_PAYMENT_TYPES.some((option) => option.value === parameters.paymentType)) {
    return failure("El tipo de pagas no es válido.");
  }
  if (parameters.paymentType !== "current") {
    return failure("La consulta de pagas retroactivas todavía no está disponible.");
  }

  try {
    const context = await getMeta4OperationalContext(authSession);
    const { receipts, missing } = await getCurrentPayrollReceiptRange({
      organization: context.society,
      employeeId,
      fromPaymentDate: parameters.fromPaymentDate,
      toPaymentDate: parameters.toPaymentDate,
      currency,
    });
    return { ok: true, receipts, missing };
  } catch (error) {
    if (error instanceof PayrollReceiptError) return failure(error.message);
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return failure(error.message);
    }
    console.error("[peoplenet] payroll receipt query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return failure("No se ha podido cargar el recibo de nómina desde PeopleNet.");
  }
}
