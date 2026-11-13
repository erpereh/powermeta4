import { columnIndex, identity } from "./catalogue";
import { decimal, textDecimal } from "./decimal";
import { hash } from "./hash";
import { resolveIdentity } from "./payroll-value";
import { extraProration, extraRuleTokens, VERIFIED_EXTRA_RULE } from "./extra-pay-rule";
import type { AutomaticExtraPay, AutomaticExtraPayPerson, Snapshot } from "./types";

export type ExtraPayRow = Readonly<Record<string, string | null>>;
export type ExtraPayData = {
  payroll: ExtraPayRow[];
  histories: ExtraPayRow[];
  definitions: ExtraPayRow[];
  defaults: ExtraPayRow[];
  rules: ExtraPayRow[];
  values: ExtraPayRow[];
  unsupported: ExtraPayRow[];
  applied: ExtraPayRow[];
};
const one = decimal("1");
const hundred = decimal("100");
const zero = BigInt(0);
const text = (row: ExtraPayRow, field: string) => row[field]?.trim() ?? "";
const sameNumber = (a: string | null | undefined, b: string) => decimal(a) === decimal(b);

export function extraMonth(period: string): { first: string; last: string; days: string[] } {
  const first = `${period}-01`;
  const next = new Date(`${first}T00:00:00Z`);
  next.setUTCMonth(next.getUTCMonth() + 1);
  next.setUTCDate(0);
  const last = next.toISOString().slice(0, 10);
  return {
    first,
    last,
    days: Array.from(
      { length: next.getUTCDate() },
      (_, i) => `${period}-${String(i + 1).padStart(2, "0")}`,
    ),
  };
}
function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
function covers(row: ExtraPayRow, first: string, last = first, prefix = "DATE"): boolean {
  const from = text(row, `${prefix}_FROM`),
    to = text(row, `${prefix}_TO`);
  return validDate(from) && validDate(to) && from <= first && to >= last;
}
function indicator(value: string | null | undefined): 0 | 1 | null | "invalid" {
  if (value === null) return null;
  const parsed = decimal(value);
  return parsed === one ? 1 : parsed === zero ? 0 : "invalid";
}

export function verifiedExtraRule(rows: ExtraPayRow[], period: string): boolean {
  const { first, last } = extraMonth(period);
  if (first < "2026-08-01" || last > "2026-10-31") return false;
  const r1 = rows.filter((row) => text(row, "RULE_ID") === "R1");
  if (r1.length !== 1) return false;
  return rows.every((row) => {
    if (
      !covers(row, first, last) ||
      !sameNumber(row.PRIORITY, "3") ||
      !sameNumber(row.CONDITION, "0") ||
      text(row, "RULE_TI") !== "CSP_HRPERIOD_CALC"
    )
      return false;
    const tokens = extraRuleTokens(text(row, "SOURCE"));
    return text(row, "RULE_ID") === "R1"
      ? row.DATE_FROM === "2026-08-01" &&
          row.DATE_TO === "2026-10-31" &&
          tokens === extraRuleTokens(VERIFIED_EXTRA_RULE)
      : text(row, "RULE_ID") === "CSP_PRORRATEADA_REV" &&
          tokens === extraRuleTokens("Return(CSP_HRPERIOD_CALC.CSP_PRORRATEADA)");
  });
}

/** A small resolver for the five confirmed indicators, not a generic SAV interpreter. */
function resolveIndicator(
  data: ExtraPayData,
  person: AutomaticExtraPayPerson,
  agreement: string,
  order: number,
  days: string[],
): { value: 0 | 1 | null; issue?: string } {
  const component = `CSP_PRORRATEADA_PE${order}`;
  const unsupported = data.unsupported.filter((row) => row.COMPONENT === component);
  if (unsupported.length)
    return {
      value: null,
      issue: `Herencia del indicador ${order} en ${[...new Set(unsupported.map((row) => row.LEVEL))].join(", ")}; aplicabilidad sin acreditar.`,
    };
  const defaults = data.defaults.filter((row) => row.COMPONENT === component);
  if (defaults.length !== 1)
    return { value: null, issue: `Valor por defecto del indicador ${order} ausente o duplicado.` };
  const candidates = data.values.filter(
    (row) =>
      row.COMPONENT === component &&
      ((row.LEVEL === "individual" &&
        row.KEY1 === person.employeeId &&
        sameNumber(row.KEY2, person.hrPeriod)) ||
        (row.LEVEL === "entity" && row.KEY1 === person.entity) ||
        (row.LEVEL === "agreement" && row.KEY1 === agreement)),
  );
  const resolved: (0 | 1 | null)[] = [];
  for (const day of days) {
    const active = candidates.filter((row) => covers(row, day));
    if (
      candidates.some(
        (row) => !validDate(text(row, "DATE_FROM")) || !validDate(text(row, "DATE_TO")),
      )
    )
      return { value: null, issue: `Vigencia inválida del indicador ${order}.` };
    const priorities = active.map((row) => Number(row.PRIORITY));
    if (
      active.some(
        (row, index) =>
          !text(row, "PRIORITY") ||
          !Number.isInteger(priorities[index]) ||
          priorities[index] < 0 ||
          priorities[index] > 3,
      )
    )
      return { value: null, issue: `Prioridad del indicador ${order} sin acreditar.` };
    const best = active.length ? Math.min(...priorities) : null;
    const values = active.length
      ? active.filter((_, index) => priorities[index] === best).map((row) => indicator(row.VALUE))
      : [indicator(defaults[0].VALUE)];
    if (values.includes("invalid") || new Set(values).size !== 1)
      return { value: null, issue: `Valores inválidos o contradictorios del indicador ${order}.` };
    const value = values[0];
    if (value === "invalid") return { value: null, issue: "Indicador inválido." };
    resolved.push(value);
  }
  if (new Set(resolved).size !== 1)
    return { value: null, issue: `Cambio de modalidad del indicador ${order} dentro del mes.` };
  return { value: resolved[0] };
}

function total(rows: ExtraPayRow[], field: string): string | null {
  const values = rows.map((row) => decimal(row[field]));
  return !values.length || values.some((value) => value === null)
    ? null
    : textDecimal(values.reduce<bigint>((sum, value) => sum + (value ?? zero), zero));
}

/** SQL row/column order is not a change of evidence and must not invalidate a review. */
function evidenceRows(rows: ExtraPayRow[]): string[] {
  return rows
    .map((row) =>
      hash(
        Object.keys(row)
          .sort()
          .map((key) => [key, row[key]]),
      ),
    )
    .sort();
}

export function resolveAutomaticExtras(current: Snapshot, data: ExtraPayData): AutomaticExtraPay {
  const period = current.run.accruedOn.slice(0, 7);
  const month = extraMonth(period);
  const result: AutomaticExtraPay = {
    version: 1,
    society: current.society ?? "",
    period,
    runHash: hash(current.run),
    people: [],
  };
  if (!verifiedExtraRule(data.rules, period)) {
    result.issue =
      "Versión o vigencia de la regla de prorrateo no acreditada; solo está confirmada R1 de agosto a octubre de 2026.";
    return result;
  }
  const idCol = columnIndex(current.headers, "Id Empleado"),
    entityCol = columnIndex(current.headers, "Id Empresa");
  const groups = new Map<string, number[]>();
  current.rows.forEach((row, index) => {
    const key = JSON.stringify([identity(row[entityCol] ?? ""), identity(row[idCol] ?? "")]);
    groups.set(key, [...(groups.get(key) ?? []), index]);
  });
  for (const rows of groups.values()) {
    const first = current.rows[rows[0]];
    const entity = identity(first[entityCol] ?? ""),
      employeeId = identity(first[idCol] ?? "");
    const periods = new Set(rows.map((index) => identity(current.hrPeriods?.[index] ?? "")));
    const hrPeriod = [...periods][0] ?? "";
    const person: AutomaticExtraPayPerson = {
      employeeId,
      entity,
      hrPeriod,
      monthlyFull: false,
      paid: {},
      extras: [],
      evidence: [],
    };
    result.people.push(person);
    const fail = (message: string) => {
      person.issue = message;
    };
    if (!entity || !employeeId || periods.size !== 1 || !hrPeriod || decimal(hrPeriod) === null) {
      fail("Empresa, matrícula o periodo de alta ausente o ambiguo.");
      continue;
    }
    const ids = new Set(
      current.rows
        .filter((row) => identity(row[entityCol] ?? "") === entity)
        .map((row) => identity(row[idCol] ?? "")),
    );
    const pay = data.payroll.filter(
      (row) =>
        row.ENTITY === entity &&
        sameNumber(row.HR_PERIOD, hrPeriod) &&
        resolveIdentity(text(row, "EMPLOYEE"), ids) === employeeId,
    );
    if (!pay.length) {
      fail("No hay acumulado coherente para esta empresa, matrícula y periodo de alta.");
      continue;
    }
    const nativeIds = new Set(pay.map((row) => row.EMPLOYEE));
    if (
      nativeIds.size !== 1 ||
      new Set(pay.map((row) => row.CURRENCY)).size !== 1 ||
      !pay[0].CURRENCY
    ) {
      fail("Identidad o moneda del acumulado ambigua.");
      continue;
    }
    if (pay[0].CURRENCY !== "EUR") {
      fail("Moneda EUR de los importes del cuadre sin acreditar.");
      continue;
    }
    const nativeId = pay[0].EMPLOYEE;
    const histories = data.histories.filter(
      (row) => row.EMPLOYEE === nativeId && sameNumber(row.HR_PERIOD, hrPeriod),
    );
    const history = (kind: string): string | null => {
      const matches = histories.filter((row) => row.KIND === kind);
      return matches.length === 1 && covers(matches[0], month.first, month.last)
        ? matches[0].VALUE
        : null;
    };
    const agreement = history("agreement"),
      salary = history("salary");
    if (!agreement || !salary || history("entity") !== entity) {
      fail(
        "Convenio, empresa o tipo de salario con datos incompletos, solapes o cambios durante el mes.",
      );
      continue;
    }
    const slices = [...pay].sort((a, b) =>
      text(a, "DATE_FROM").localeCompare(text(b, "DATE_FROM")),
    );
    let next = month.first;
    let coherent = true;
    for (const slice of slices) {
      const from = text(slice, "DATE_FROM"),
        to = text(slice, "DATE_TO");
      if (!validDate(from) || !validDate(to) || from !== next || to < from || to > month.last) {
        coherent = false;
        break;
      }
      const date = new Date(`${to}T00:00:00Z`);
      date.setUTCDate(date.getUTCDate() + 1);
      next = date.toISOString().slice(0, 10);
    }
    const after = new Date(`${month.last}T00:00:00Z`);
    after.setUTCDate(after.getUTCDate() + 1);
    if (!coherent || next !== after.toISOString().slice(0, 10)) {
      fail("Acumulados con tramos parciales, duplicados o sin cobertura completa del mes.");
      continue;
    }
    const fixed = decimal(total(pay, "FIXED_UNITS"));
    const absences = ["ABSENCE_DAYS", "STRIKE_DAYS", "SICK_DAYS", "ABSENCE_HOURS"].map((field) =>
      decimal(total(pay, field)),
    );
    person.accrualIssue = !sameNumber(salary, "1")
      ? "Tipo de salario distinto del mensual acreditado; regla de devengo pendiente."
      : fixed === null
        ? "Unidades fijas del mes incompletas."
        : fixed !== one
          ? "Las unidades fijas no acreditan un mes completo; regla proporcional pendiente."
          : absences.some((value) => value === null)
            ? "Indicadores de ausencias, huelga, IT u horas de ausencia incompletos."
            : absences.some((value) => value !== zero)
              ? "Hay ausencias, huelga o IT en el mes; confirmar la regla de devengo aplicable."
              : undefined;
    person.monthlyFull = !person.accrualIssue;
    for (let order = 1; order <= 4; order++)
      person.paid[`extra${order}`] = total(pay, `PAID${order}`);
    person.paid.extraProrated = total(pay, "PRORATED");
    const definitions = data.definitions.filter((row) => row.AGREEMENT === agreement);
    if (
      !definitions.length ||
      definitions.some((row) => !/^[1-5]$/.test(text(row, "ORDINAL"))) ||
      new Set(definitions.map((row) => row.ORDINAL)).size !== definitions.length
    ) {
      fail("Definición de extras ausente, duplicada o con órdenes no acreditados.");
      continue;
    }
    // Resolve aliases to the native employee key only within the authorized entity/period.
    const scoped: ExtraPayData = {
      ...data,
      values: data.values.map((row) =>
        row.LEVEL === "individual" && row.KEY1 === nativeId ? { ...row, KEY1: employeeId } : row,
      ),
    };
    for (const definition of definitions) {
      const order = Number(definition.ORDINAL);
      if (
        !covers(definition, month.first, month.last) ||
        !covers(definition, month.first, month.last, "DEFINITION")
      ) {
        fail("Cambio o falta de vigencia de la definición de extras durante el mes.");
        break;
      }
      const forced = current.society === "IBER" && (order === 3 || order === 4);
      const flag = forced
        ? { value: null }
        : resolveIndicator(scoped, person, agreement, order, month.days);
      if (flag.issue) {
        fail(flag.issue);
        break;
      }
      const original =
        definition.ORIGINAL === "S" ? true : definition.ORIGINAL === "N" ? false : null;
      const prorated = extraProration(result.society, agreement, order, flag.value, original);
      if (prorated === null) {
        fail(`Modalidad de la extra ${order} sin acreditar.`);
        break;
      }
      const day = Number(definition.PAY_DAY),
        payMonth = Number(definition.PAY_MONTH);
      if (
        !Number.isInteger(day) ||
        day < 1 ||
        day > 31 ||
        !Number.isInteger(payMonth) ||
        payMonth < 1 ||
        payMonth > 12
      ) {
        fail(`Calendario de la extra ${order} incompleto.`);
        break;
      }
      const date = `${period.slice(0, 4)}-${String(payMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (!validDate(date)) {
        fail(`Fecha de pago inválida para la extra ${order}.`);
        break;
      }
      person.extras.push({
        order,
        prorated,
        due: date === current.run.accruedOn,
        full: person.monthlyFull && decimal(total(pay, `UNITS${order}`)) === one,
        percentage: definition.PERCENTAGE ?? null,
      });
      const applied = data.applied.filter(
        (row) =>
          row.EMPLOYEE === nativeId &&
          sameNumber(row.HR_PERIOD, hrPeriod) &&
          row.COMPONENT === `CSP_PRORRATEADA_PE${order}`,
      );
      if (
        !forced &&
        applied.some(
          (row) =>
            row.CURRENCY !== pay[0].CURRENCY ||
            !row.SOURCE_NODE ||
            indicator(row.VALUE) !== flag.value ||
            !pay.some((p) => p.DATE_FROM === row.DATE_FROM && p.DATE_TO === row.DATE_TO),
        )
      ) {
        fail(`Los valores aplicados de la extra ${order} no concuerdan con esta captura.`);
        break;
      }
    }
    person.evidence = [
      `PeopleNet:${result.society}:${entity}:${employeeId}:${hrPeriod}:${period}:R1:2026-08-01/2026-10-31`,
      `Configuración:${hash({ histories: evidenceRows(histories), definitions: evidenceRows(definitions), values: evidenceRows(scoped.values.filter((row) => row.KEY1 === employeeId || row.KEY1 === entity || row.KEY1 === agreement)), defaults: evidenceRows(data.defaults), pay: evidenceRows(pay), applied: evidenceRows(data.applied.filter((row) => row.EMPLOYEE === nativeId)) })}`,
    ];
  }
  return result;
}

export function completeProratedRule(person: AutomaticExtraPayPerson): boolean {
  const extras = person.extras.filter((extra) => extra.prorated);
  return (
    person.monthlyFull &&
    person.extras.length === 3 &&
    extras.length === 3 &&
    extras.every(
      (extra) => [1, 2, 3].includes(extra.order) && decimal(extra.percentage) === hundred,
    )
  );
}
