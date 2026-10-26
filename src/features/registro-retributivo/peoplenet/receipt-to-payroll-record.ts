import { classifyConcept } from "@/features/registro-retributivo/parsers/payrollPdfParser";
import type { PayrollConcept, PayrollRecord } from "@/features/registro-retributivo/types";
import { parsePayrollPeriod } from "@/features/registro-retributivo/utils/spanishDates";
import type { PayrollReceipt } from "@/types/payroll-receipt";

/** Nombre de «fichero» con el que el análisis identifica cada recibo leído de PeopleNet. */
export const peopleNetReceiptSource = (payName: string, paymentDate: string): string =>
  `PeopleNet · ${payName} (${paymentDate})`;

/**
 * Convierte un recibo de la plantilla `RECIBO` en el registro que produce el
 * parser de PDF: mismos textos de concepto, así que el mapa de conceptos y la
 * clasificación conservadora se aplican igual que con los PDF subidos.
 */
export function receiptToPayrollRecord(input: {
  readonly employeeId: string;
  readonly paymentDate: string;
  readonly payName: string;
  readonly receipt: PayrollReceipt;
}): PayrollRecord {
  const { receipt } = input;
  const period = parsePayrollPeriod(receipt.periodLabel || input.payName);
  const concepts = receipt.lines.flatMap((line): PayrollConcept[] => {
    const amount = line.earning ?? line.deduction;
    if (amount === null || amount === 0) return [];
    const type = classifyConcept(line.concept, line.section === "informative");
    // Una línea que solo descuenta nunca es un devengo, aunque su texto lo parezca.
    const deductionOnly = line.earning === null && line.deduction !== null;
    return [
      {
        name: line.concept,
        amount,
        type: deductionOnly && type === "devengo" ? "deduccion" : type,
      },
    ];
  });

  return {
    sourceFile: peopleNetReceiptSource(input.payName, input.paymentDate),
    periodLabel: period.label || input.payName,
    periodStart: period.start,
    periodEnd: period.end,
    companyName: receipt.company.name || undefined,
    cif: receipt.company.taxId || undefined,
    workerNif: receipt.worker.nationalId || undefined,
    workerName: receipt.worker.fullName,
    socialSecurityNumber: receipt.worker.socialSecurityNumber || undefined,
    employeeNumber: input.employeeId,
    workplace: receipt.workCenter || undefined,
    professionalGroup: receipt.professionalGroup || undefined,
    gt: receipt.worker.contributionGroup || undefined,
    seniorityDate: receipt.seniorityDate ?? undefined,
    concepts,
    totalDevengado: receipt.totals.accrued,
    totalDeducir: receipt.totals.deducted,
    netPay: receipt.totals.netPay,
    irpfBaseAccumulated: receipt.accumulated.irpfBase,
    irpfFeeAccumulated: receipt.accumulated.irpfQuota,
    ssFeeAccumulated: receipt.accumulated.socialSecurityQuota,
  };
}
