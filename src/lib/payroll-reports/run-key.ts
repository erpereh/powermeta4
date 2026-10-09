import type { PayrollReportRunKey } from "@/types/payroll-report";

const REPORT_ID = /^[A-Za-z0-9_]{1,4}$/;
const RUN_AT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const ACCRUED_ON = /^\d{4}-\d{2}-\d{2}$/;
const PAY_FREQUENCY = /^[A-Za-z0-9]{1,3}$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/** Valida la clave de una ejecución que llega del navegador. */
export const parsePayrollReportRunKey = (
  input: unknown,
): { ok: true; value: PayrollReportRunKey } | { ok: false; message: string } => {
  const invalid = { ok: false, message: "La ejecución elegida no es válida." } as const;
  if (!isRecord(input)) return invalid;
  const { reportId, runAt, accruedOn, payFrequency } = input;
  if (
    typeof reportId !== "string" ||
    !REPORT_ID.test(reportId) ||
    typeof runAt !== "string" ||
    !RUN_AT.test(runAt) ||
    Number.isNaN(Date.parse(runAt)) ||
    typeof accruedOn !== "string" ||
    !ACCRUED_ON.test(accruedOn) ||
    Number.isNaN(Date.parse(`${accruedOn}T00:00:00.000Z`)) ||
    typeof payFrequency !== "string" ||
    !PAY_FREQUENCY.test(payFrequency)
  ) {
    return invalid;
  }
  return { ok: true, value: { reportId, runAt, accruedOn, payFrequency } };
};

export const payrollReportRunId = (key: PayrollReportRunKey): string =>
  [key.reportId, key.runAt, key.accruedOn, key.payFrequency].join("|");
