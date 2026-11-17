import { excessRulesFingerprint, type AutomaticRow } from "./automatic";
import { decimal, textDecimal } from "./decimal";
import type { AutomaticExtraPay, AutomaticExtraPrice } from "./types";

export type ExtraPriceData = {
  rules: AutomaticRow[];
  accrual: AutomaticRow[];
  history: AutomaticRow[];
  assignments: AutomaticRow[];
  /** The C04 payroll rows (with PRICE_TOTAL and CALCULATED). */
  payroll: AutomaticRow[];
};

/**
 * SSP_PAGA_EXTRA_3 rules active from 2026-10-01 (RULE1, RULE111 with projection, RULE2),
 * read from M4PRENOMINA on 2026-11-17. Any other code keeps the base formula.
 */
export const THIRD_EXTRA_RULES_FINGERPRINT =
  "1669044009eb5248abefef83403311319c96467188754ad91f41c3f05a10b490";

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

/** Days of a 360-day commercial year before `date` (Meta4 accrual units). */
function unitsBefore(date: string): string {
  const month = Number(date.slice(5, 7)),
    day = Math.min(Number(date.slice(8, 10)), 30);
  // Integer days, rounded to the four decimals Meta4 stores in SSP_U_PAGA_EX_n.
  const tenThousandths = Math.round((((month - 1) * 30 + day - 1) * 10000) / 360);
  return (tenThousandths / 10000).toFixed(4);
}

export function resolveExtraPrices(
  capture: AutomaticExtraPay,
  data: ExtraPriceData,
  verifiedRules = THIRD_EXTRA_RULES_FINGERPRINT,
): AutomaticExtraPay {
  const year = capture.period.slice(0, 4),
    month = Number(capture.period.slice(5, 7));
  const first = `${capture.period}-01`;
  const yearStart = `${year}-01-01`;
  const sameYearAccrual =
    data.accrual.length > 0 &&
    data.accrual.every(
      (row) =>
        decimal(row.START_DAY) === decimal("1") &&
        decimal(row.START_MONTH) === decimal("1") &&
        decimal(row.START_BACK) === zero &&
        decimal(row.END_DAY) === decimal("31") &&
        decimal(row.END_MONTH) === decimal("12") &&
        decimal(row.END_BACK) === zero,
    );
  const ruleMatches = excessRulesFingerprint(data.rules) === verifiedRules;
  const averageThird = ruleMatches && sameYearAccrual;
  const issue = !ruleMatches
    ? "Las reglas LN4 de SSP_PAGA_EXTRA_3 no coinciden con la versión verificada (precio medio con proyección)."
    : !sameYearAccrual
      ? "El devengo de la 3.ª extra no es enero–diciembre del año en todos los convenios."
      : undefined;
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
    };
    const late = assignments.find(
      (row) => !calculated || !text(row, "UPDATED") || text(row, "UPDATED") > calculated,
    );
    if (late)
      price.issue = `Precio o modalidad de la extra modificado en PeopleNet (${text(late, "UPDATED") || "sin fecha"}) después del cálculo (${calculated || "sin fecha"}).`;
    const lastDay = `${capture.period}-${String(new Date(Date.UTC(Number(year), month, 0)).getUTCDate()).padStart(2, "0")}`;
    for (let order = 1; order <= 4; order++) {
      const rows = assignments.filter(
        (row) =>
          text(row, "COMPONENT") === `SSP_P_PAGA_EX_${order}` &&
          text(row, "DATE_FROM") <= lastDay &&
          text(row, "DATE_TO") >= first,
      );
      if (!rows.length) continue;
      const whole = rows.every(
        (row) => text(row, "DATE_FROM") <= first && text(row, "DATE_TO") >= lastDay,
      );
      if (whole && rows.every((row) => decimal(row.VALUE) === zero)) price.zero.push(order);
      else
        price.issue ??= `Precio individual de la extra ${order} distinto de 0 o parcial en el mes; regla no reproducida.`;
    }
    const history = data.history.filter(mine);
    const prices = sum(history, "PRICES"),
      months = history.reduce((total, row) => total + Number(text(row, "MONTHS") || "NaN"), 0);
    price.history =
      prices === null || !Number.isInteger(months) ? null : { prices: textDecimal(prices), months };
    // Third extra prorated from a date inside the year: the earlier part is paid apart.
    const prorated = assignments.filter(
      (row) =>
        text(row, "COMPONENT") === "CSP_PRORRATEADA_PE3" && decimal(row.VALUE) === decimal("1"),
    );
    const current = prorated.filter(
      (row) => text(row, "DATE_FROM") <= first && text(row, "DATE_TO") >= lastDay,
    );
    // A row starting at the hire date is no change of modality: nothing is paid apart.
    const switchDate = current.length === 1 ? text(current[0], "DATE_FROM") : "";
    const firstMonth = history
      .map((row) => text(row, "FIRST_ALLOC"))
      .filter(Boolean)
      .sort()[0];
    if (
      switchDate > yearStart &&
      !prorated.some((row) => text(row, "DATE_FROM") <= yearStart) &&
      firstMonth !== undefined &&
      firstMonth.slice(0, 7) < switchDate.slice(0, 7)
    )
      price.switchUnits = unitsBefore(switchDate);
    return { ...person, price };
  });
  return { ...capture, price: { averageThird, ...(issue ? { issue } : {}) }, people };
}
