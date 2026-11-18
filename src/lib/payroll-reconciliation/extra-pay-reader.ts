import "server-only";
import {
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
} from "@/lib/portal/peoplenet/query";
import { hash } from "./hash";
import { LIMITS } from "./import";
import {
  extraMonth,
  resolveAutomaticExtras,
  resolveExtraRule,
  type ExtraPayData,
  type ExtraPayRow,
} from "./extra-pay-resolution";
import {
  EXTRA_PAY_SQL,
  EXTRA_PAY_UNSUPPORTED_SQL,
  EXTRA_PAY_APPLIED_SQL,
  EXTRA_PRICE_SQL,
} from "./extra-pay-sql";
import { resolveExtraPrices } from "./extra-pay-price";
import type { AutomaticExtraPayRule, Snapshot } from "./types";

/** Enrich only a newly captured snapshot. Failure is isolated to C04. */
export async function captureAutomaticExtras(current: Snapshot): Promise<Snapshot> {
  const period = current.run.accruedOn.slice(0, 7);
  const month = extraMonth(period);
  const automatic = {
    version: 1 as const,
    society: current.society ?? "",
    period,
    runHash: hash(current.run),
    people: [],
  };
  let resolvedRule: AutomaticExtraPayRule | undefined;
  const fail = (issue: string): Snapshot => ({
    ...current,
    extraPayAutomatic: { ...automatic, ...(resolvedRule ? { rule: resolvedRule } : {}), issue },
    hash: hash([current.hash, resolvedRule ?? null, issue]),
  });
  if (!current.society || !["CYC", "IBER", "COLL"].includes(current.society))
    return fail("Sociedad de la captura sin acreditar.");
  const runAt = new Date(current.run.runAt);
  if (!Number.isFinite(runAt.getTime()))
    return fail("Fecha de ejecución inválida para resolver las correcciones históricas.");
  const date = (value: string): PortalSqlParam => ({
    type: "date",
    value: new Date(`${value}T00:00:00Z`),
  });
  const params = {
    organization: organizationParam(current.society),
    firstDay: date(month.first),
    lastDay: date(month.last),
    paymentDate: date(current.run.accruedOn),
    correctionDate: { type: "datetime" as const, value: runAt },
    frequency: { type: "varchar" as const, length: 3, value: current.run.payFrequency },
    yearStart: date(`${period.slice(0, 4)}-01-01`),
  };
  const read = async (statement: string): Promise<ExtraPayRow[]> => {
    const rows = await runPortalSelect(statement, params);
    if (rows.length > LIMITS.rows) throw new Error("ExtraPayReadLimit");
    return rows.map((row) =>
      Object.fromEntries(Object.entries(row).map(([key, value]) => [key, sqlText(value)])),
    );
  };
  try {
    // Bounded concurrency: at most two grouped reads at a time, independent of employee count.
    const rules = await read(EXTRA_PAY_SQL.rules);
    const resolution = resolveExtraRule(rules, period);
    if (!resolution.rule) return fail(resolution.issue);
    resolvedRule = resolution.rule;
    const [payroll, histories] = await Promise.all([
      read(EXTRA_PAY_SQL.payroll),
      read(EXTRA_PAY_SQL.histories),
    ]);
    const data: ExtraPayData = {
      rules,
      payroll,
      histories,
      definitions: await read(EXTRA_PAY_SQL.definitions),
      defaults: [],
      values: [],
      unsupported: [],
      applied: [],
    };
    if (resolution.rule.mode === "R1") {
      [data.defaults, data.values] = await Promise.all([
        read(EXTRA_PAY_SQL.defaults),
        read(EXTRA_PAY_SQL.values),
      ]);
      [data.unsupported, data.applied] = await Promise.all([
        read(EXTRA_PAY_UNSUPPORTED_SQL),
        read(EXTRA_PAY_APPLIED_SQL),
      ]);
    }
    let evidence = resolveAutomaticExtras(current, data);
    try {
      // Price of the separate extras; a failed read keeps the base formula (pending price).
      const [rules, accrual] = await Promise.all([
        read(EXTRA_PRICE_SQL.rules),
        read(EXTRA_PRICE_SQL.accrual),
      ]);
      const [history, assignments] = await Promise.all([
        read(EXTRA_PRICE_SQL.history),
        read(EXTRA_PRICE_SQL.assignments),
      ]);
      const computing = await read(EXTRA_PRICE_SQL.computing);
      evidence = resolveExtraPrices(evidence, {
        rules,
        accrual,
        history,
        assignments,
        computing,
        payroll,
      });
    } catch (error) {
      console.error("[cuadre] extra price read failed", {
        name: error instanceof Error ? error.name : "UnknownError",
      });
    }
    return { ...current, extraPayAutomatic: evidence, hash: hash([current.hash, evidence]) };
  } catch (error) {
    console.error("[cuadre] extra pay read failed", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return fail(
      "No se ha podido acreditar la configuración PeopleNet de las extras. Actualiza las instantáneas cuando la lectura esté disponible.",
    );
  }
}
