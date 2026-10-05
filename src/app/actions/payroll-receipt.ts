"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { parsePayrollReceiptParameters } from "@/lib/payroll/receipt-parameters";
import { getPayrollReceiptRange, PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";
import type { PayrollReceiptParameters, PayrollReceiptResult } from "@/types/payroll-receipt";

/** Lee los recibos en PeopleNet con la sociedad del contexto operativo, nunca la del navegador. */
export async function getPayrollReceiptAction(
  parameters: PayrollReceiptParameters,
): Promise<PayrollReceiptResult> {
  const authSession = await requireAuthContext();

  const parsed = parsePayrollReceiptParameters(parameters);
  if (!parsed.ok) return { ok: false, message: parsed.message };
  const { employeeId, fromPaymentDate, toPaymentDate, payFilter, paymentType, currency } =
    parsed.value;

  try {
    const context = await getMeta4OperationalContext(authSession);
    const { receipts, missing } = await getPayrollReceiptRange({
      organization: context.society,
      employeeId,
      fromPaymentDate,
      toPaymentDate,
      payFilter,
      paymentType,
      currency,
    });
    return { ok: true, receipts, missing };
  } catch (error) {
    if (error instanceof PayrollReceiptError) return { ok: false, message: error.message };
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return { ok: false, message: error.message };
    }
    console.error("[peoplenet] payroll receipt query failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return { ok: false, message: "No se ha podido cargar el recibo de nómina desde PeopleNet." };
  }
}
