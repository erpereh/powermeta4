import type { PeopleNetSqlValue } from "@/lib/peoplenet/employees";
import {
  evaluateReceiptTemplate,
  round2,
  type PeopleNetRow,
  type ReceiptTemplate,
} from "@/lib/peoplenet/payroll-receipt-template";
import type { PayrollPayOption, PayrollReceipt, PayrollReceiptLine } from "@/types/payroll-receipt";

export type { PeopleNetRow } from "@/lib/peoplenet/payroll-receipt-template";

/** Columnas de la paga que usan la cabecera, el pie y los enlaces a otras tablas. */
export const PERIOD_EXTRA_COLUMNS = [
  "SCO_OR_HR_PERIOD",
  "ID_CURRENCY",
  "SCO_DT_PAY_START",
  "SCO_DT_PAY_END",
  "SSP_ID_CABEC_TC1",
  "STD_ID_LEG_ENT",
  "SSP_BASE_TOT_RG_RE",
  "SSP_PRORRATA",
  "SSP_TOTAL_REG_GEN",
  "SSP_BASE_RG_RECIBO",
  "SSP_BASE_ACC_RECIB",
  "SSP_TOTAL_DEVENGOS",
  "SSP_TOTAL_RETENIDO",
  "SSP_LIQUIDO",
  "CSP_REC_BASE_IRPF",
  "CSP_REC_RET_IRPF",
  "CSP_REC_CUOTA_SS",
] as const;

export const ROLE_EXTRA_COLUMNS = [
  "SCO_OR_HR_ROLE",
  "SCO_DT_START_SLICE",
  "SCO_ID_WORK_LOCATION",
] as const;

const toNumber = (value: PeopleNetSqlValue | undefined): number | null => {
  if (value === null || value === undefined || value instanceof Date) return null;
  if (typeof value === "boolean") return value ? 1 : 0;
  const parsed = typeof value === "number" ? value : Number(String(value).trim());
  return Number.isFinite(parsed) ? parsed : null;
};

const amount = (row: PeopleNetRow, column: string): number | null => {
  const value = toNumber(row[column]);
  return value === null ? null : round2(value);
};

export const toText = (value: PeopleNetSqlValue | undefined): string => {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).trim();
};

/** Meta4 usa 4000-01-01 como «sin fecha de fin». */
export const toIsoDate = (value: PeopleNetSqlValue | undefined): string | null => {
  const text = toText(value);
  const match = /^(\d{4}-\d{2}-\d{2})/.exec(text);
  if (!match?.[1] || match[1].startsWith("4000-")) return null;
  return match[1];
};

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const formatDayMonthYear = (iso: string): string => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

/** «Del 1 al 30 Abril 2026», como la cabecera del recibo Meta4. */
export const buildPeriodLabel = (start: string | null, end: string | null): string => {
  if (!start || !end) return "";
  const [startYear, startMonth, startDay] = start.split("-").map(Number);
  const [endYear, endMonth, endDay] = end.split("-").map(Number);
  if (startYear === endYear && startMonth === endMonth && startMonth) {
    return `Del ${startDay} al ${endDay} ${MONTHS[startMonth - 1]} ${startYear}`;
  }
  return `Del ${formatDayMonthYear(start)} al ${formatDayMonthYear(end)}`;
};

/** `STD_N_FAM_NAME_1` ya puede incluir el segundo apellido (`STD_N_MAIDEN_NAME`). */
export const buildWorkerName = (
  firstName: string,
  familyName: string,
  maidenName: string,
): string => {
  const surnames =
    maidenName && !familyName.toLowerCase().endsWith(maidenName.toLowerCase())
      ? `${familyName} ${maidenName}`
      : familyName;
  return [firstName, surnames].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
};

export const buildSocialSecurityNumber = (person: PeopleNetRow): string => {
  const parts = [person.SSP_PROV_NUM_SS, person.SSP_NUM_SS, person.SSP_DIG_NUM_SS].map(toText);
  return parts.every(Boolean) ? parts.join("") : toText(person.STD_SS_NUMBER);
};

export const formatIban = (iban: string): string =>
  iban
    .replace(/\s+/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

export type PayrollReceiptRows = {
  template: ReceiptTemplate;
  period: PeopleNetRow;
  roles: readonly PeopleNetRow[];
  hrPeriod: PeopleNetRow | null;
  person: PeopleNetRow | null;
  legalEntity: PeopleNetRow | null;
  contributionAccount: PeopleNetRow | null;
  contributionGroup: PeopleNetRow | null;
  category: PeopleNetRow | null;
  workLocation: PeopleNetRow | null;
  payments: readonly PeopleNetRow[];
  employeeId: string;
};

const sumBy = (
  lines: readonly PayrollReceiptLine[],
  pick: (line: PayrollReceiptLine) => number | null,
): number => lines.reduce((total, line) => total + (pick(line) ?? 0), 0);

/** Convierte las filas de PeopleNet en el recibo con la plantilla y estructura de Meta4. */
export const mapPayrollReceipt = (rows: PayrollReceiptRows): PayrollReceipt => {
  const { period } = rows;
  const orderedRoles = [...rows.roles].sort(
    (a, b) =>
      (toNumber(a.SCO_OR_HR_ROLE) ?? 0) - (toNumber(b.SCO_OR_HR_ROLE) ?? 0) ||
      toText(a.SCO_DT_START_SLICE).localeCompare(toText(b.SCO_DT_START_SLICE)),
  );
  const lines = evaluateReceiptTemplate(rows.template, period, orderedRoles);

  const concepts = lines.filter((line) => line.section === "concept");
  const accrued = amount(period, "SSP_TOTAL_DEVENGOS") ?? 0;
  const deducted = amount(period, "SSP_TOTAL_RETENIDO") ?? 0;

  const person = rows.person ?? {};
  const bankPayments = rows.payments.flatMap((payment) => {
    const iban = toText(payment.SCO_GB_IBAN);
    const value = amount(payment, "SCO_PAYORDPRIM");
    return value === null ? [] : [{ account: iban ? formatIban(iban) : "—", amount: value }];
  });

  return {
    currencyId: toText(period.ID_CURRENCY),
    company: {
      name: toText(rows.legalEntity?.STD_N_LEG_ENT),
      taxId: toText(rows.legalEntity?.SSP_ID_LEGAL),
      socialSecurityRegistration: toText(rows.contributionAccount?.SSP_NUM_CUENTA_COT),
    },
    periodLabel: buildPeriodLabel(
      toIsoDate(period.SCO_DT_PAY_START),
      toIsoDate(period.SCO_DT_PAY_END),
    ),
    worker: {
      employeeId: toText(rows.hrPeriod?.SSP_NUM_MATRICULA) || rows.employeeId,
      fullName: buildWorkerName(
        toText(person.STD_N_FIRST_NAME),
        toText(person.STD_N_FAM_NAME_1),
        toText(person.STD_N_MAIDEN_NAME),
      ),
      nationalId: toText(person.STD_SSN),
      socialSecurityNumber: buildSocialSecurityNumber(person),
      contributionGroup: toText(rows.contributionGroup?.SSP_ID_GRUP_TARIFA),
    },
    workCenter: toText(rows.workLocation?.STD_WORK_LOCESP),
    professionalGroup: toText(rows.category?.SSP_NM_CATEGORESP),
    seniorityDate: toIsoDate(rows.hrPeriod?.SSP_FEC_ANTIGUEDAD),
    lines,
    bases: {
      totalRemuneration: amount(period, "SSP_BASE_TOT_RG_RE") ?? 0,
      extraPayProration: amount(period, "SSP_PRORRATA") ?? 0,
      totalBase: amount(period, "SSP_TOTAL_REG_GEN") ?? 0,
      generalRegimeBase: amount(period, "SSP_BASE_RG_RECIBO") ?? 0,
      unemploymentBase: amount(period, "SSP_BASE_ACC_RECIB") ?? 0,
    },
    totals: { accrued, deducted, netPay: amount(period, "SSP_LIQUIDO") ?? 0 },
    accumulated: {
      irpfBase: amount(period, "CSP_REC_BASE_IRPF") ?? 0,
      irpfQuota: amount(period, "CSP_REC_RET_IRPF") ?? 0,
      socialSecurityQuota: amount(period, "CSP_REC_CUOTA_SS") ?? 0,
    },
    bankPayments,
    beneficiaryPayments: [],
    unmapped: {
      // `|| 0` evita mostrar -0 cuando el redondeo deja un cero negativo.
      accrued: round2(accrued - sumBy(concepts, (line) => line.earning)) || 0,
      deducted: round2(deducted - sumBy(concepts, (line) => line.deduction)) || 0,
    },
  };
};

export const mapPayrollPays = (rows: readonly PeopleNetRow[]): PayrollPayOption[] =>
  rows.flatMap((row) => {
    const paymentDate = toIsoDate(row.SCO_DT_ACCRUED);
    if (!paymentDate) return [];
    return [
      {
        paymentDate,
        name: toText(row.PAY_NAME) || paymentDate,
        startDate: toIsoDate(row.SCO_DT_START) ?? "",
        endDate: toIsoDate(row.SCO_DATE_END) ?? "",
      },
    ];
  });
