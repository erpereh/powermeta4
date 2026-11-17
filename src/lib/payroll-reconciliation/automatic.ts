import { decimal, textDecimal } from "./decimal";
import { extraMonth } from "./extra-pay-resolution";
import { extraRuleTokens } from "./extra-pay-rule";
import { hash } from "./hash";
import { teleworkVariant } from "./telework-rule";
import type { AutomaticExcess, AutomaticPersonResult, AutomaticTelework, Snapshot } from "./types";

export type AutomaticRow = Readonly<Record<string, string | null>>;
export type TeleworkData = {
  rules: AutomaticRow[];
  payroll: AutomaticRow[];
  previous: AutomaticRow[];
  defaults: AutomaticRow[];
  values: AutomaticRow[];
  unsupported: AutomaticRow[];
};
export type ExcessData = {
  rules: AutomaticRow[];
  payroll: AutomaticRow[];
  net: AutomaticRow[];
  movements: AutomaticRow[];
  adjustments: AutomaticRow[];
};

const zero = BigInt(0);
const text = (row: AutomaticRow, field: string) => row[field]?.trim() ?? "";
const validDate = (value: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
const sum = (rows: AutomaticRow[], field: string): bigint | null => {
  const values = rows.map((row) => decimal(row[field]));
  return values.some((value) => value === null)
    ? null
    : values.reduce<bigint>((total, value) => total + (value ?? zero), zero);
};
/** Round half away from zero to cents, like LN4 Round(x, SSP_NUM_DEC = 2). */
const cents = (value: bigint): bigint => {
  const unit = BigInt("10000000000000000000000"); // 10^22 = one cent at scale 24
  const negative = value < zero;
  const absolute = negative ? -value : value;
  const rounded = ((absolute + unit / BigInt(2)) / unit) * unit;
  return negative ? -rounded : rounded;
};
/** Same evidence digest as C04: SQL row order never changes a fingerprint. */
const evidenceRows = (rows: AutomaticRow[]): string[] =>
  rows
    .map((row) =>
      hash(
        Object.keys(row)
          .sort()
          .map((key) => [key, row[key]]),
      ),
    )
    .sort();
const groupBy = (rows: AutomaticRow[], key: (row: AutomaticRow) => string) => {
  const groups = new Map<string, AutomaticRow[]>();
  for (const row of rows) groups.set(key(row), [...(groups.get(key(row)) ?? []), row]);
  return groups;
};
const personKey = (row: AutomaticRow) =>
  JSON.stringify([text(row, "EMPLOYEE"), String(decimal(row.HR_PERIOD) ?? text(row, "HR_PERIOD"))]);
/** Previous ordinary payment: same day of the previous month. */
export function previousPayment(paymentDate: string): string {
  const date = new Date(`${paymentDate}T00:00:00Z`);
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() - 1);
  return `${date.toISOString().slice(0, 8)}${paymentDate.slice(8, 10)}`;
}
const daysOfMonth = (date: string) => extraMonth(date.slice(0, 7)).days.length;
const base = (current: Snapshot) => ({
  version: 1 as const,
  society: current.society ?? "",
  period: current.run.accruedOn.slice(0, 7),
  runHash: hash(current.run),
});
const person = (
  rows: AutomaticRow[],
  paid: bigint | null,
  outcome: { due: bigint | null; reason: string },
  evidence: AutomaticRow[],
): AutomaticPersonResult => ({
  employeeId: text(rows[0], "EMPLOYEE"),
  entity: text(rows[0], "ENTITY"),
  hrPeriod: text(rows[0], "HR_PERIOD"),
  paid: paid === null ? null : textDecimal(paid),
  due: outcome.due === null ? null : textDecimal(outcome.due),
  reason: outcome.reason,
  evidence: evidenceRows(evidence),
});

/** Resolve a DMD component like Meta4: lowest priority value active on every slice day. */
function component(
  data: TeleworkData,
  name: string,
  employeeId: string,
  hrPeriod: string,
  entity: string,
  from: string,
  to: string,
  threshold: string,
): { value: bigint | null; issue?: string; rows: AutomaticRow[] } {
  const defaults = data.defaults.filter((row) => text(row, "COMPONENT") === name);
  if (defaults.length !== 1 || decimal(defaults[0].VALUE) === null)
    return {
      value: null,
      issue: `Valor por defecto de ${name} ausente o inválido.`,
      rows: [],
    };
  const candidates = data.values.filter(
    (row) =>
      text(row, "COMPONENT") === name &&
      ((text(row, "LEVEL") === "individual" &&
        text(row, "KEY1") === employeeId &&
        decimal(row.KEY2) === decimal(hrPeriod)) ||
        (text(row, "LEVEL") === "entity" && text(row, "KEY1") === entity)),
  );
  if (
    candidates.some((row) => !validDate(text(row, "DATE_FROM")) || !validDate(text(row, "DATE_TO")))
  )
    return {
      value: null,
      issue: `Vigencia inválida de ${name}.`,
      rows: candidates,
    };
  const resolved = new Set<string>();
  let defaultUsed = false;
  const used: AutomaticRow[] = [];
  for (let day = from; day <= to;) {
    const active = candidates.filter(
      (row) => text(row, "DATE_FROM") <= day && text(row, "DATE_TO") >= day,
    );
    const priorities = active.map((row) => Number(text(row, "PRIORITY")));
    if (priorities.some((value) => !Number.isInteger(value) || value < 0 || value > 3))
      return {
        value: null,
        issue: `Prioridad de ${name} sin acreditar.`,
        rows: candidates,
      };
    const best = Math.min(...priorities);
    const chosen = active.filter((_, index) => priorities[index] === best);
    const values = chosen.length
      ? chosen.map((row) => decimal(row.VALUE))
      : [decimal(defaults[0].VALUE)];
    if (!chosen.length) defaultUsed = true;
    used.push(...chosen);
    if (values.some((value) => value === null) || new Set(values.map(String)).size !== 1)
      return {
        value: null,
        issue: `Valores inválidos o contradictorios de ${name}.`,
        rows: candidates,
      };
    resolved.add(String(values[0]));
    const next = new Date(`${day}T00:00:00Z`);
    next.setUTCDate(next.getUTCDate() + 1);
    day = next.toISOString().slice(0, 10);
  }
  if (resolved.size !== 1)
    return {
      value: null,
      issue: `${name} cambia dentro del tramo.`,
      rows: candidates,
    };
  // Any row of this person written after the calculation or the report run (even one
  // starting the next day) means the configuration that produced the payment is unknown.
  // Entity prices are one row per month: next month's price is not a rewrite of this one.
  const late = [
    ...candidates.filter(
      (row) => text(row, "LEVEL") === "individual" || text(row, "DATE_FROM") <= to,
    ),
    ...(defaultUsed ? defaults : []),
  ].find((row) => !text(row, "UPDATED") || text(row, "UPDATED") > threshold);
  if (late)
    return {
      value: null,
      issue: `${name} modificado en PeopleNet (${text(late, "UPDATED") || "sin fecha"}) después del cálculo o de la ejecución (${threshold}); configuración histórica sin acreditar.`,
      rows: candidates,
    };
  return {
    value: BigInt([...resolved][0]),
    rows: [...used, ...(defaultUsed ? defaults : [])],
  };
}

export function resolveAutomaticTelework(current: Snapshot, data: TeleworkData): AutomaticTelework {
  const head = base(current);
  const month = extraMonth(head.period);
  const fail = (issue: string): AutomaticTelework => ({
    ...head,
    issue,
    people: [],
  });
  if (current.run.accruedOn.slice(8, 10) !== "25")
    return fail("La paga no es del día 25: la regla de teletrabajo no abona en ella.");
  const active = data.rules.filter((row) => decimal(row.CONDITION) === zero);
  if (
    active.length !== 1 ||
    text(active[0], "DATE_FROM") > month.first ||
    text(active[0], "DATE_TO") < month.last
  )
    return fail("Regla de teletrabajo ausente, duplicada o con cambio dentro del mes.");
  const variant = teleworkVariant(active[0].SOURCE);
  if (!variant)
    return fail("La regla LN4 de CSP_I_ABONO_TELETRABAJO no coincide con una versión verificada.");
  if (data.unsupported.length)
    return {
      ...fail(
        `Herencia del teletrabajo en ${[...new Set(data.unsupported.map((row) => text(row, "LEVEL")))].join(", ")}; aplicabilidad sin acreditar.`,
      ),
      variant,
    };
  const previousDate = previousPayment(current.run.accruedOn);
  // CSP_DT_RUN is local wall-clock time stored without zone, like CALCULATED.
  const runAt = current.run.runAt.slice(0, 19).replace("T", " ");
  const previous = groupBy(data.previous, (row) => text(row, "EMPLOYEE"));
  const people = [...groupBy(data.payroll, personKey).values()].map((rows) => {
    const [first] = rows;
    const employeeId = text(first, "EMPLOYEE"),
      hrPeriod = text(first, "HR_PERIOD"),
      entity = text(first, "ENTITY");
    const calculated = rows.map((row) => text(row, "CALCULATED")).sort()[0] ?? "";
    const paid = sum(rows, "PAID");
    const pending = (reason: string, evidence: AutomaticRow[] = rows) => ({
      ...person(rows, paid, { due: null, reason }, evidence),
      indicator: null,
    });
    if (rows.length !== 1) return pending("Varios tramos en el mes; la regla se evalúa por tramo.");
    const from = text(first, "DATE_FROM"),
      to = text(first, "DATE_TO");
    if (!validDate(from) || !validDate(to) || !calculated)
      return pending("Tramo o fecha de cálculo inválidos.");
    const values = ["CSP_IND_ABONO_TELETRABAJO", "CSP_P_ABONO_TELETRABAJO"].map((name) =>
      component(data, name, employeeId, hrPeriod, entity, from, to, [calculated, runAt].sort()[0]),
    );
    const evidence = [...rows, ...values.flatMap((item) => item.rows)];
    const issue = values.find((item) => item.issue)?.issue;
    if (issue) return pending(issue, evidence);
    const [indicator, price] = values.map((item) => item.value as bigint);
    const result = (due: bigint | null, reason: string) => ({
      ...person(rows, paid, { due, reason }, evidence),
      indicator: textDecimal(indicator),
    });
    const priceText = textDecimal(price);
    const one = decimal("1"),
      two = decimal("2");
    if (indicator === one) return result(zero, "Indicador de teletrabajo 1: excluido del abono.");
    if (decimal(first.NEW_HIRE) === one)
      return result(zero, "Alta en el mes (SSP_ES_ALTA): sin abono.");
    const before = previous.get(employeeId) ?? [];
    if (before.length) {
      const leave = new Set(before.map((row) => String(decimal(row.LEAVE_DAYS))));
      if (leave.size !== 1 || leave.has("null"))
        return pending(
          "Registros del mes anterior con días de baja distintos; la regla toma el primero.",
          [...evidence, ...before],
        );
      if (decimal(before[0].LEAVE_DAYS) === decimal(String(daysOfMonth(previousDate))))
        return result(zero, `Baja todo el mes anterior (${previousDate.slice(0, 7)}): sin abono.`);
    }
    if (indicator === two)
      return variant === "telework-2026-09"
        ? result(
            cents(price * BigInt(2)),
            `Colectivo 80/20 (indicador 2): precio ${priceText} × 2.`,
          )
        : pending(
            "Indicador 2 antes de la regla 80/20 de 09/2026; sin importe definido.",
            evidence,
          );
    if (indicator === zero)
      return result(cents(price), `Precio mensual de la entidad: ${priceText}.`);
    return pending(
      `Indicador de teletrabajo ${textDecimal(indicator)} sin tratamiento en la regla.`,
      evidence,
    );
  });
  return { ...head, variant, people };
}

/**
 * Executable SCO_EXC_PREV_PAYMENT rules (SCO_HRPERIOD_CALC2) read on 2026-11-17:
 * standard net + payments − orders, and CYC's adjustment payroll override (2018).
 * Any change in ids, validity or code leaves C11 pending.
 */
export const EXCESS_RULES_FINGERPRINT =
  "faeb5930c175b0243561f2464909f568dd355d8230f52dcebae556d26fbff885";
export const excessRulesFingerprint = (rules: AutomaticRow[]): string =>
  hash(
    rules
      .map((row) => [
        text(row, "RULE_ID"),
        text(row, "DATE_FROM"),
        text(row, "DATE_TO"),
        hash(extraRuleTokens(row.SOURCE ?? "")),
      ])
      .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))),
  );

export function resolveAutomaticExcess(
  current: Snapshot,
  data: ExcessData,
  verifiedRules = EXCESS_RULES_FINGERPRINT,
): AutomaticExcess {
  const head = base(current);
  const fail = (issue: string): AutomaticExcess => ({
    ...head,
    issue,
    people: [],
  });
  if (current.run.accruedOn.slice(8, 10) !== "25")
    return fail("La paga no es del día 25: el exceso de la paga anterior no se calcula en ella.");
  if (excessRulesFingerprint(data.rules) !== verifiedRules)
    return fail("Las reglas LN4 de SCO_EXC_PREV_PAYMENT no coinciden con las verificadas.");
  const net = groupBy(data.net, personKey),
    movements = groupBy(data.movements, personKey),
    adjusted = new Set(data.adjustments.map((row) => text(row, "EMPLOYEE")));
  const people = [...groupBy(data.payroll, personKey).entries()].map(([key, rows]) => {
    const paid = sum(rows, "PAID");
    const calculated = rows.map((row) => text(row, "CALCULATED")).sort()[0] ?? "";
    const before = net.get(key) ?? [],
      moved = movements.get(key) ?? [];
    const evidence = [...rows, ...before, ...moved];
    const outcome = (due: bigint | null, reason: string) =>
      person(rows, paid, { due: due === null ? null : cents(due), reason }, evidence);
    if (adjusted.has(text(rows[0], "EMPLOYEE")))
      return outcome(null, "Paga de ajustes del día 05: la regla CYC de ajustes no se reproduce.");
    if (before.length > 1)
      return outcome(null, "Varios registros de la paga anterior; la regla toma el primero.");
    const late = moved.find((row) => !text(row, "UPDATED") || text(row, "UPDATED") > calculated);
    if (late || !calculated)
      return outcome(
        null,
        `Pago u orden de pago modificado (${late ? text(late, "UPDATED") || "sin fecha" : "sin fecha"}) después del cálculo (${calculated || "sin fecha"}); sin acreditar.`,
      );
    const payments = moved.filter((row) => text(row, "KIND") === "payment"),
      orders = moved.filter((row) => text(row, "KIND") === "order");
    if (orders.length && !payments.length)
      return outcome(
        null,
        "Órdenes de pago de la paga anterior sin ningún pago registrado en PeopleNet; Meta4 no las compensa y la regla no lo acredita.",
      );
    const previousNet = before.length ? decimal(before[0].NET) : zero;
    const paidOut = sum(payments, "AMOUNT"),
      ordered = sum(orders, "AMOUNT");
    if (previousNet === null || paidOut === null || ordered === null)
      return outcome(null, "Importes de la paga anterior inválidos.");
    const excessNet = previousNet < zero ? -previousNet : zero;
    const balance = paidOut - ordered;
    const parts = [
      excessNet ? `líquido negativo anterior ${textDecimal(excessNet)}` : "",
      balance ? `pagos − órdenes ${textDecimal(balance)}` : "",
    ].filter(Boolean);
    const latest = (rows: AutomaticRow[]) =>
      rows
        .map((row) => text(row, "UPDATED"))
        .sort()
        .at(-1) ?? "";
    // Payments ≠ orders only arises when the previous payroll was recalculated after
    // being paid; say so instead of presenting a reviewable difference as an error.
    const recalculated =
      balance && latest(orders) > latest(payments)
        ? ` La paga anterior se recalculó después de pagarse (órdenes ${latest(orders)}, pago ${latest(payments)}); revisar si correspondía compensarlo.`
        : "";
    return outcome(
      excessNet + balance,
      parts.length
        ? `Exceso de la paga anterior: ${parts.join(" + ")}.${recalculated}`
        : "Sin líquido negativo ni diferencia entre pagos y órdenes en la paga anterior.",
    );
  });
  return { ...head, people };
}
