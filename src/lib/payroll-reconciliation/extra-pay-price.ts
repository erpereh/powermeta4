import { excessRulesFingerprint, type AutomaticRow } from "./automatic";
import { decimal, textDecimal } from "./decimal";
import type {
  AutomaticExtraPay,
  AutomaticExtraPrice,
  AutomaticExtraPriceCapture,
  AutomaticSemesterPrice,
} from "./types";

export type ExtraPriceData = {
  rules: AutomaticRow[];
  accrual: AutomaticRow[];
  /** One row per employee, HR period and closed month (PRICES1..3, MONTHS, ALLOC). */
  history: AutomaticRow[];
  assignments: AutomaticRow[];
  /** CSP_IPE_* indicators; absent in older captures, which keep the CYC formula. */
  computing?: AutomaticRow[];
  /** The C04 payroll rows (with PRICE_TOTAL and CALCULATED). */
  payroll: AutomaticRow[];
};

/**
 * SSP_PAGA_EXTRA_3 rules active from 2026-10-01 (RULE1, RULE111 with projection, RULE2),
 * read from M4PRENOMINA on 2026-11-17. Any other code keeps the base formula.
 */
export const THIRD_EXTRA_RULES_FINGERPRINT =
  "1669044009eb5248abefef83403311319c96467188754ad91f41c3f05a10b490";
/**
 * SSP_PAGA_EXTRA_1/2 rules (RULE1, RULE111 of CSP_HRPERIOD_CALC from 2018 with the average
 * price and no projection, RULE111 standard, RULE2, _REV), unchanged in 2025 and 2026; read
 * from M4PRENOMINA on 2026-11-18.
 */
export const SEMESTER_EXTRA_RULES_FINGERPRINTS: Record<number, string> = {
  1: "d811906115c1ce9f9857699ac658afdb931dcd4f13ac6cb974eed9bf89687341",
  2: "b9a27f2d941200b519d7780a77cb569cfd13e4d38ef41446824eb9adb491ff1a",
};

/** Accrual windows the rules were verified with: start month and end day/month, same year. */
const WINDOWS: Record<number, { start: number; endDay: number; endMonth: number }> = {
  1: { start: 1, endDay: 30, endMonth: 6 },
  2: { start: 7, endDay: 31, endMonth: 12 },
  3: { start: 1, endDay: 31, endMonth: 12 },
};

/**
 * Concepts with CSP_IPE_* = 1 at the single work center of each society (M4SCO_WC_VALUES,
 * unchanged since 2014) and the report columns that add up to SSP_TOTAL_P_PAGAS in every full
 * month checked (CYC 06/2026, 10/2026, 12/2025; IBER and COLL 06/2026, 12/2025, 09–10/2026).
 * The report's "Plus Convenio" never computes; the standard seniority ("Antigüedad") does.
 */
export const COMPUTING_CONCEPTS: Record<string, { flags: string[]; formula: string[] }> = {
  CYC: {
    flags: [
      "CSP_IPE_COMP_ADAP_INDIV",
      "CSP_IPE_COMP_EXPERIENCIA",
      "CSP_IPE_COMP_PER_ACT_ABO",
      "CSP_IPE_COMP_PER_PROG1",
      "CSP_IPE_PLUS_RESIDENCIA",
    ],
    formula: [
      "Salario Base",
      "Complemento Experiencia Importe",
      "Complemento Adaptación Individualizado",
    ],
  },
  IBER: {
    flags: [
      "CSP_IPE_COMP_ADAP_INDIV",
      "CSP_IPE_COMP_EXPERIENCIA",
      "CSP_IPE_COMP_PER_ACT_ABO",
      "CSP_IPE_COMP_PER_PROG1",
      "CSP_IPE_PERCEPCION_EXTRASALAR",
      "CSP_IPE_PLUS_RESIDENCIA",
    ],
    formula: ["Salario Base", "Antigüedad"],
  },
  COLL: { flags: [], formula: ["Salario Base", "Antigüedad"] },
};

const zero = BigInt(0);
const text = (row: AutomaticRow, field: string) => row[field]?.trim() ?? "";
const alias = (value: string) =>
  value
    .trim()
    .replace(/^'/, "")
    .replace(/^0+(?=\d)/, "");
const sum = (rows: AutomaticRow[], field: string): bigint | null => {
  const values = rows.map((row) => decimal(row[field]));
  return values.some((value) => value === null)
    ? null
    : values.reduce<bigint>((total, value) => total + (value ?? zero), zero);
};
const months = (rows: AutomaticRow[]) =>
  rows.reduce((total, row) => total + Number(text(row, "MONTHS") || "NaN"), 0);
const closed = (rows: AutomaticRow[], field: string) => {
  const prices = sum(rows, field),
    count = months(rows);
  return prices === null || !Number.isInteger(count)
    ? null
    : { prices: textDecimal(prices), months: count };
};
const pad = (value: number) => String(value).padStart(2, "0");

/** Days of a 360-day commercial year from the first day of `startMonth` to `date`. */
const days360 = (startMonth: number, date: string) =>
  (Number(date.slice(5, 7)) - startMonth) * 30 + Math.min(Number(date.slice(8, 10)), 30) - 1;

/** Days of a 360-day commercial year before `date` (Meta4 accrual units). */
function unitsBefore(date: string): string {
  // Integer days, rounded to the four decimals Meta4 stores in SSP_U_PAGA_EX_n.
  const tenThousandths = Math.round((days360(1, date) * 10000) / 360);
  return (tenThousandths / 10000).toFixed(4);
}

/** The verified accrual window of `order` for every agreement of the society. */
function windowMatches(accrual: AutomaticRow[], order: number): boolean {
  const window = WINDOWS[order],
    rows = accrual.filter((row) => decimal(row.ORDINAL) === decimal(String(order)));
  return (
    rows.length > 0 &&
    rows.every(
      (row) =>
        decimal(row.START_DAY) === decimal("1") &&
        decimal(row.START_MONTH) === decimal(String(window.start)) &&
        decimal(row.START_BACK) === zero &&
        decimal(row.END_DAY) === decimal(String(window.endDay)) &&
        decimal(row.END_MONTH) === decimal(String(window.endMonth)) &&
        decimal(row.END_BACK) === zero,
    )
  );
}

/** Formula columns when the CSP_IPE_* configuration is the verified one; [] when it is not. */
function computingFormula(
  society: string,
  rows: AutomaticRow[] | undefined,
  calculated: string,
): string[] | undefined {
  if (!rows) return undefined;
  const verified = COMPUTING_CONCEPTS[society];
  if (!verified) return [];
  const active = rows.filter((row) => decimal(row.VALUE) !== zero);
  const centers = new Set(
    active.filter((row) => text(row, "LEVEL") === "workCenter").map((row) => text(row, "KEY1")),
  );
  const flags = [
    ...new Set(
      active
        .filter((row) => text(row, "LEVEL") === "workCenter")
        .map((row) => text(row, "COMPONENT")),
    ),
  ].sort();
  const consistent =
    active.every((row) => text(row, "LEVEL") === "workCenter") &&
    centers.size <= 1 &&
    rows.every(
      (row) => !calculated || !text(row, "UPDATED") || text(row, "UPDATED") <= calculated,
    ) &&
    JSON.stringify(flags) === JSON.stringify([...verified.flags].sort());
  return consistent ? verified.formula : [];
}

export function resolveExtraPrices(
  capture: AutomaticExtraPay,
  data: ExtraPriceData,
  verifiedRules = THIRD_EXTRA_RULES_FINGERPRINT,
  verifiedSemester = SEMESTER_EXTRA_RULES_FINGERPRINTS,
): AutomaticExtraPay {
  const year = capture.period.slice(0, 4),
    month = Number(capture.period.slice(5, 7));
  const first = `${capture.period}-01`;
  const yearStart = `${year}-01-01`;
  const lastDay = `${capture.period}-${pad(new Date(Date.UTC(Number(year), month, 0)).getUTCDate())}`;
  const itemRules = (order: number) =>
    data.rules.filter((row) => text(row, "ITEM") === `SSP_PAGA_EXTRA_${order}`);
  const ruleMatches = excessRulesFingerprint(itemRules(3)) === verifiedRules;
  const sameYearAccrual = windowMatches(data.accrual, 3);
  const averageThird = ruleMatches && sameYearAccrual;
  const averageSemester = [1, 2].filter(
    (order) =>
      verifiedSemester[order] !== undefined &&
      excessRulesFingerprint(itemRules(order)) === verifiedSemester[order] &&
      windowMatches(data.accrual, order),
  );
  const issue = !ruleMatches
    ? "Las reglas LN4 de SSP_PAGA_EXTRA_3 no coinciden con la versión verificada (precio medio con proyección)."
    : !sameYearAccrual
      ? "El devengo de la 3.ª extra no es enero–diciembre del año en todos los convenios."
      : undefined;
  const calculatedAll = data.payroll.map((row) => text(row, "CALCULATED")).sort()[0] ?? "";
  const formula = computingFormula(capture.society, data.computing, calculatedAll);
  const closing = [1, 2, 3].filter(
    (order) => WINDOWS[order].endMonth === month && windowMatches(data.accrual, order),
  );
  const people = capture.people.map((person) => {
    if (person.issue) return person;
    const mine = (row: AutomaticRow) =>
      alias(text(row, "EMPLOYEE")) === alias(person.employeeId) &&
      decimal(row.HR_PERIOD) === decimal(person.hrPeriod);
    const pay = data.payroll.filter((row) => mine(row) && text(row, "ENTITY") === person.entity);
    const calculated = pay.map((row) => text(row, "CALCULATED")).sort()[0] ?? "";
    const assignments = data.assignments.filter(mine);
    const total = sum(pay, "PRICE_TOTAL");
    const price: AutomaticExtraPrice = {
      zero: [],
      total: pay.length && total !== null ? textDecimal(total) : null,
      history: null,
      projected: 12 - month,
      switchUnits: null,
      leaving: pay.some((row) => text(row, "HR_END") !== "" && text(row, "HR_END") <= lastDay),
    };
    const late = assignments.find(
      (row) => !calculated || !text(row, "UPDATED") || text(row, "UPDATED") > calculated,
    );
    if (late)
      price.issue = `Precio o modalidad de la extra modificado en PeopleNet (${text(late, "UPDATED") || "sin fecha"}) después del cálculo (${calculated || "sin fecha"}).`;
    // A price or an amount assigned to an extra overrides its rule; only a whole-month 0 is used.
    for (let order = 1; order <= 4; order++) {
      const rows = assignments.filter(
        (row) =>
          [`SSP_P_PAGA_EX_${order}`, `SSP_PAGA_EXTRA_${order}`].includes(text(row, "COMPONENT")) &&
          text(row, "DATE_FROM") <= lastDay &&
          text(row, "DATE_TO") >= first,
      );
      if (!rows.length) continue;
      const whole = rows.every(
        (row) => text(row, "DATE_FROM") <= first && text(row, "DATE_TO") >= lastDay,
      );
      if (whole && rows.every((row) => decimal(row.VALUE) === zero)) price.zero.push(order);
      else
        price.issue ??= `Precio o importe individual de la extra ${order} distinto de 0 o parcial en el mes; regla no reproducida.`;
    }
    const history = data.history.filter(mine);
    price.history = closed(history, "PRICES3");
    // An extra prorated from a date inside its accrual window: the earlier part is paid apart.
    const switchDate = (order: number, start: string) => {
      const prorated = assignments.filter(
        (row) =>
          text(row, "COMPONENT") === `CSP_PRORRATEADA_PE${order}` &&
          decimal(row.VALUE) === decimal("1"),
      );
      const current = prorated.filter(
        (row) => text(row, "DATE_FROM") <= first && text(row, "DATE_TO") >= lastDay,
      );
      // A row starting at the hire date is no change of modality: nothing is paid apart.
      const date = current.length === 1 ? text(current[0], "DATE_FROM") : "";
      const firstMonth = history
        .map((row) => text(row, "ALLOC"))
        .filter((alloc) => alloc >= start)
        .sort()[0];
      return date > start &&
        !prorated.some((row) => text(row, "DATE_FROM") <= start) &&
        firstMonth !== undefined &&
        firstMonth.slice(0, 7) < date.slice(0, 7)
        ? date
        : "";
    };
    const third = switchDate(3, yearStart);
    if (third) price.switchUnits = unitsBefore(third);
    price.semester = [1, 2].map((order): AutomaticSemesterPrice => {
      const start = `${year}-${pad(WINDOWS[order].start)}-01`;
      const rows = history.filter((row) => text(row, "ALLOC") >= start);
      const date = WINDOWS[order].endMonth >= month ? switchDate(order, start) : "";
      return {
        order,
        history: closed(rows, `PRICES${order}`),
        switchDays: date ? days360(WINDOWS[order].start, date) : null,
        beforeSwitch: date
          ? closed(
              rows.filter((row) => text(row, "ALLOC") < date),
              `PRICES${order}`,
            )
          : null,
      };
    });
    return { ...person, price };
  });
  const captured: AutomaticExtraPriceCapture = {
    averageThird,
    averageSemester,
    closing,
    ...(formula ? { formula } : {}),
    ...(issue ? { issue } : {}),
  };
  return { ...capture, price: captured, people };
}
