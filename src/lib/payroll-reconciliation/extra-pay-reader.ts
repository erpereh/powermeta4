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
  type ExtraPayData,
  type ExtraPayRow,
} from "./extra-pay-resolution";
import { EXTRA_PAY_SQL, EXTRA_PAY_UNSUPPORTED_SQL, EXTRA_PAY_APPLIED_SQL } from "./extra-pay-sql";
import type { Snapshot } from "./types";

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
  const fail = (issue: string): Snapshot => ({
    ...current,
    extraPayAutomatic: { ...automatic, issue },
    hash: hash([current.hash, issue]),
  });
  if (!current.society || !["CYC", "IBER", "COLL"].includes(current.society))
    return fail("Sociedad de la captura sin acreditar.");
  if (month.first < "2026-08-01" || month.last > "2026-10-31")
    return fail(
      "Regla de prorrateo pendiente para este periodo; R1 está confirmada solo de agosto a octubre de 2026.",
    );
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
  };
  const read = async (statement: string): Promise<ExtraPayRow[]> => {
    const rows = await runPortalSelect(statement, params);
    if (rows.length > LIMITS.rows) throw new Error("ExtraPayReadLimit");
    return rows.map((row) =>
      Object.fromEntries(Object.entries(row).map(([key, value]) => [key, sqlText(value)])),
    );
  };
  try {
    // Bounded concurrency: two grouped reads at a time, independent of employee count.
    const [rules, defaults] = await Promise.all([
      read(EXTRA_PAY_SQL.rules),
      read(EXTRA_PAY_SQL.defaults),
    ]);
    const [payroll, histories] = await Promise.all([
      read(EXTRA_PAY_SQL.payroll),
      read(EXTRA_PAY_SQL.histories),
    ]);
    const [definitions, values] = await Promise.all([
      read(EXTRA_PAY_SQL.definitions),
      read(EXTRA_PAY_SQL.values),
    ]);
    const [unsupported, applied] = await Promise.all([
      read(EXTRA_PAY_UNSUPPORTED_SQL),
      read(EXTRA_PAY_APPLIED_SQL),
    ]);
    const data: ExtraPayData = {
      rules,
      defaults,
      payroll,
      histories,
      definitions,
      values,
      unsupported,
      applied,
    };
    const evidence = resolveAutomaticExtras(current, data);
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
