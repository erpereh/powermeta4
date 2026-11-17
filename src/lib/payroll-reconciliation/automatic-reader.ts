import "server-only";
import {
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
} from "@/lib/portal/peoplenet/query";
import {
  previousPayment,
  resolveAutomaticExcess,
  resolveAutomaticTelework,
  type AutomaticRow,
} from "./automatic";
import { EXCESS_SQL, TELEWORK_SQL, TELEWORK_UNSUPPORTED_SQL } from "./automatic-sql";
import { extraMonth } from "./extra-pay-resolution";
import { hash } from "./hash";
import { LIMITS } from "./import";
import type { Snapshot } from "./types";

const nextDay = (value: string): string => {
  const day = new Date(`${value}T00:00:00Z`);
  day.setUTCDate(day.getUTCDate() + 1);
  return day.toISOString().slice(0, 10);
};
const date = (value: string): PortalSqlParam => ({
  type: "date",
  value: new Date(`${value}T00:00:00Z`),
});

/** Bound parameters shared by C05/C11; null when the capture cannot be dated. */
function parameters(current: Snapshot): Record<string, PortalSqlParam> | null {
  const runAt = new Date(current.run.runAt);
  if (!current.society || !Number.isFinite(runAt.getTime())) return null;
  const month = extraMonth(current.run.accruedOn.slice(0, 7));
  return {
    organization: organizationParam(current.society),
    firstDay: date(month.first),
    lastDay: date(month.last),
    nextDay: date(nextDay(month.last)),
    paymentDate: date(current.run.accruedOn),
    previousDate: date(previousPayment(current.run.accruedOn)),
    adjustmentDate: date(`${current.run.accruedOn.slice(0, 8)}05`),
    correctionDate: { type: "datetime", value: runAt },
    frequency: { type: "varchar", length: 3, value: current.run.payFrequency },
  };
}

function reader(params: Record<string, PortalSqlParam>) {
  return async (statement: string): Promise<AutomaticRow[]> => {
    const rows = await runPortalSelect(statement, params);
    if (rows.length > LIMITS.rows) throw new Error("AutomaticReadLimit");
    return rows.map((row) =>
      Object.fromEntries(Object.entries(row).map(([key, value]) => [key, sqlText(value)])),
    );
  };
}

const base = (current: Snapshot) => ({
  version: 1 as const,
  society: current.society ?? "",
  period: current.run.accruedOn.slice(0, 7),
  runHash: hash(current.run),
  people: [],
});
const logFailure = (control: string, error: unknown) =>
  console.error(`[cuadre] ${control} read failed`, {
    name: error instanceof Error ? error.name : "UnknownError",
  });

/** C05: only on a new capture; a failure leaves C05 pending and never blocks the dossier. */
export async function captureAutomaticTelework(current: Snapshot): Promise<Snapshot> {
  const params = parameters(current);
  const finish = (teleworkAutomatic: Snapshot["teleworkAutomatic"]): Snapshot => ({
    ...current,
    teleworkAutomatic,
    hash: hash([current.hash, teleworkAutomatic]),
  });
  if (!params)
    return finish({
      ...base(current),
      issue: "Sociedad o ejecución sin acreditar.",
    });
  const read = reader(params);
  try {
    const [rules, payroll] = await Promise.all([
      read(TELEWORK_SQL.rules),
      read(TELEWORK_SQL.payroll),
    ]);
    const [previous, defaults] = await Promise.all([
      read(TELEWORK_SQL.previous),
      read(TELEWORK_SQL.defaults),
    ]);
    const [values, unsupported] = await Promise.all([
      read(TELEWORK_SQL.values),
      read(TELEWORK_UNSUPPORTED_SQL),
    ]);
    return finish(
      resolveAutomaticTelework(current, {
        rules,
        payroll,
        previous,
        defaults,
        values,
        unsupported,
      }),
    );
  } catch (error) {
    logFailure("telework", error);
    return finish({
      ...base(current),
      issue:
        "No se ha podido leer la configuración de teletrabajo en PeopleNet. Actualiza las instantáneas cuando la lectura esté disponible.",
    });
  }
}

/** C11: previous net and payments/orders behind SCO_EXC_PREV_PAYMENT. */
export async function captureAutomaticExcess(current: Snapshot): Promise<Snapshot> {
  const params = parameters(current);
  const finish = (excessAutomatic: Snapshot["excessAutomatic"]): Snapshot => ({
    ...current,
    excessAutomatic,
    hash: hash([current.hash, excessAutomatic]),
  });
  if (!params)
    return finish({
      ...base(current),
      issue: "Sociedad o ejecución sin acreditar.",
    });
  const read = reader(params);
  try {
    const [rules, payroll] = await Promise.all([read(EXCESS_SQL.rules), read(EXCESS_SQL.payroll)]);
    const [net, movements] = await Promise.all([read(EXCESS_SQL.net), read(EXCESS_SQL.movements)]);
    const adjustments = await read(EXCESS_SQL.adjustments);
    return finish(
      resolveAutomaticExcess(current, {
        rules,
        payroll,
        net,
        movements,
        adjustments,
      }),
    );
  } catch (error) {
    logFailure("excess", error);
    return finish({
      ...base(current),
      issue:
        "No se han podido leer los pagos de la paga anterior en PeopleNet. Actualiza las instantáneas cuando la lectura esté disponible.",
    });
  }
}
