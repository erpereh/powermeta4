import "server-only";

import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { normalizeUsersSearch } from "@/lib/meta4/users/list-filter";
import { getPortalContext } from "@/lib/portal/context";
import { round2 } from "@/lib/primavera/cuadre";
import { getTool } from "@/lib/tools/registry";
import type { PeopleNetAction, PeopleNetQuery } from "./peoplenet-query";
import { PEOPLENET_PAGE_SIZE, type PeopleNetResult } from "./peoplenet-result";
import {
  readCertificates,
  readDirectory,
  readPayroll,
  readPayrollResults,
  readPrimavera,
  readProjections,
  readQuinquenal,
  readUsers,
  type Column,
  type ReadContext,
  type Table,
} from "./peoplenet-readers";

const readers: Record<
  PeopleNetAction,
  (query: PeopleNetQuery, context: ReadContext) => Promise<Table>
> = {
  "users.consult": readUsers,
  "payroll.consult": readPayroll,
  "reports.quinquenal": readQuinquenal,
  "reports.payroll-results": readPayrollResults,
  "reports.projections": readProjections,
  "reports.certificate": readCertificates,
  "reports.primavera": readPrimavera,
};

const fold = normalizeUsersSearch;
const matches = (text: string, token: string) => {
  const escaped = fold(token).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(?:^|[^a-z0-9])" + escaped + "(?:$|[^a-z0-9])").test(text);
};
const columnNames = ({ aliases, label }: Column) => [label, ...aliases];
const mentionedColumns = (columns: Column[], text: string) =>
  columns.filter((column) => columnNames(column).some((name) => matches(text, name)));
const sum = (values: readonly (number | string | null | undefined)[]): number | null => {
  const valid = values.filter(
    (value): value is number => typeof value === "number" && Number.isFinite(value),
  );
  return valid.length ? round2(valid.reduce((total, value) => total + value, 0)) : null;
};
const sumTarget = (columns: Column[], text: string): Column | undefined => {
  const request =
    [
      ...text.matchAll(
        /\b(?:suma|sumame|sumar|totaliza)\s+(?:la columna\s+|(?:el|la|las|los)\s+)?([^\n?;]+)/g,
      ),
    ].at(-1)?.[1] ?? "";
  const candidates = columns
    .filter((column) => column.unit)
    .flatMap((column) =>
      columnNames(column)
        .filter((name) => matches(request, name))
        .map((name) => ({ column, length: name.length })),
    )
    .sort((a, b) => b.length - a.length);
  if (
    !candidates.length ||
    (candidates[0].length === candidates[1]?.length &&
      candidates[0].column !== candidates[1].column)
  )
    return undefined;
  return candidates[0].column;
};

function comparePeriods(
  table: Table,
  rows: Table["rows"],
  chosen: Column[],
): PeopleNetResult["calculations"] {
  const key = table.columns.find(({ key }) => key === "period" || key === "year")?.key;
  if (!key) return [];
  const groups = new Map<string, Table["rows"]>();
  for (const row of rows) {
    if (row[key] === null || row[key] === undefined) continue;
    const period = String(row[key]);
    const group = groups.get(period);
    if (group) group.push(row);
    else groups.set(period, [row]);
  }
  const periods = [...groups.keys()].sort();
  if (periods.length !== 2) return [];
  const [first, second] = periods;
  return chosen
    .filter(({ unit }) => Boolean(unit))
    .flatMap((column) => {
      // Coefficients describe a single situation. Summing several employees
      // or periods would not be a comparison of working time.
      const a = groups.get(first) ?? [];
      const b = groups.get(second) ?? [];
      if (column.unit === "coeficiente" && (a.length !== 1 || b.length !== 1)) return [];
      const earlier = sum(a.map((row) => row[column.key]));
      const later = sum(b.map((row) => row[column.key]));
      return earlier === null || later === null
        ? []
        : [
            {
              label: column.label + " · " + second + " menos " + first,
              value: round2(later - earlier),
            },
          ];
    });
}

export class PeopleNetScopeError extends Error {}

export type PeopleNetDataset = {
  action: PeopleNetAction;
  columns: Column[];
  rows: Table["rows"];
  employeeId?: string;
};
export type PeopleNetRead = {
  result: PeopleNetResult;
  dataset?: PeopleNetDataset;
  outcome: "ok" | "empty" | NonNullable<Table["outcome"]>;
};

export async function executePeopleNetQuery(
  query: PeopleNetQuery,
  auth: ResolvedAuthSession,
  companyId: string,
  page: number,
  signal: AbortSignal,
): Promise<PeopleNetResult> {
  return (await readPeopleNetQuery(query, auth, companyId, page, signal)).result;
}

export async function readPeopleNetQuery(
  query: PeopleNetQuery,
  auth: ResolvedAuthSession,
  companyId: string,
  page: number,
  signal: AbortSignal,
): Promise<PeopleNetRead> {
  const tool = getTool(query.action);
  if (!Object.hasOwn(readers, query.action) || !tool?.implemented || tool.permissions.length)
    throw new PeopleNetScopeError();
  signal.throwIfAborted();
  const debug = auth.authContext.mode === "debug" && isDebugAuthEnabled();
  const operational = debug ? undefined : await getMeta4OperationalContext(auth);
  if (operational && operational.companyId !== companyId) throw new PeopleNetScopeError();
  signal.throwIfAborted();

  const result: PeopleNetResult = {
    source: { label: tool.name, href: tool.route },
    debug,
    filters: [],
    columns: [],
    rows: [],
    page,
    total: 0,
    calculations: [],
  };
  const society = operational?.society ?? "CYC";
  let directoryRead: ReturnType<typeof readDirectory> | undefined;
  let portalRead: ReturnType<typeof getPortalContext> | undefined;
  const directory = () =>
    (directoryRead ??= readDirectory(debug, society, query.action === "users.consult"));
  const portal = () =>
    (portalRead ??= getPortalContext(
      auth,
      operational
        ? {
            getOperationalContext: async () => operational,
          }
        : undefined,
    ));
  const person = query.person;
  let employee: ReadContext["employee"];
  if (
    person &&
    !(
      person.type === "own" && ["reports.projections", "reports.certificate"].includes(query.action)
    )
  ) {
    let candidates: Awaited<ReturnType<typeof readDirectory>>;
    if (person.type === "own") {
      const identity = await portal();
      if (debug) candidates = (await directory()).slice(0, 1);
      else if (identity.mode === "meta4" && identity.identity.status === "resolved") {
        const id = identity.identity.person.employeeId;
        candidates = (await directory()).filter((user) => user.id === id);
      } else
        return {
          outcome: "missing",
          result: {
            ...result,
            message: "PeopleNet no ha podido confirmar tu identidad. Puedes indicar una matrícula.",
          },
        };
    } else {
      const people = await directory();
      const target = fold(person.value);
      const exact = people.filter(({ id, fullName, claveSelf }) =>
        person.type === "id"
          ? fold(id) === target
          : fold(fullName) === target || fold(claveSelf) === target,
      );
      candidates =
        exact.length || person.type === "id"
          ? exact
          : people.filter(({ fullName }) => fold(fullName).includes(target));
    }
    if (candidates.length === 0)
      return {
        outcome: "empty",
        result: {
          ...result,
          message: "No se ha encontrado a esa persona en el listado de la sociedad activa.",
        },
      };
    if (candidates.length > 1)
      return {
        outcome: "ambiguous",
        result: {
          ...result,
          columns: ["Matrícula", "Nombre"],
          total: candidates.length,
          rows: candidates
            .slice(page * PEOPLENET_PAGE_SIZE, (page + 1) * PEOPLENET_PAGE_SIZE)
            .map(({ id, fullName }) => [id, fullName]),
          message:
            "Hay varias personas que coinciden. Responde con la matrícula que quieres consultar.",
        },
      };
    [employee] = candidates;
  }
  signal.throwIfAborted();
  const table = await readers[query.action](query, {
    auth,
    debug,
    society,
    directory,
    employee,
    portal,
    signal,
  });
  signal.throwIfAborted();
  let rows = table.rows;
  let message = table.message;
  const displayFilters = query.filters.map(({ field, value }) => ({
    key: field,
    label: field === "unit" ? "Unidad" : field === "center" ? "Centro" : "Concepto",
    value,
  }));
  if (employee) result.filters.push("Matrícula · " + employee.id);
  if (query.report) result.filters.push("Informe · " + query.report);
  if (query.runDate) result.filters.push("Ejecución · " + query.runDate);
  for (const { year, month, day } of query.periods)
    result.filters.push(
      [year, month, day]
        .filter((part) => part !== undefined)
        .map((part) => String(part).padStart(2, "0"))
        .join("-"),
    );
  for (const { key, label, value } of displayFilters) {
    if (!table.columns.some((column) => column.key === key)) {
      if (!table.message && table.columns.length)
        message = "El resultado disponible no admite el filtro «" + label + "».";
      if (!table.message) rows = [];
      continue;
    }
    result.filters.push(label + " · " + value);
    rows = rows.filter((row) => row[key] != null && fold(String(row[key])).includes(fold(value)));
  }
  const primaveraComparison =
    query.action === "reports.primavera" && query.compare && /\bdescuadres\b/.test(query.text);
  const mismatchesByPeriod = new Map<string, number>();
  if (primaveraComparison) {
    for (const row of rows) {
      if (typeof row.period !== "string") continue;
      mismatchesByPeriod.set(
        row.period,
        (mismatchesByPeriod.get(row.period) ?? 0) + Number(row.status === "Descuadre"),
      );
    }
  }
  if (query.action === "reports.primavera" && query.mismatchesOnly) {
    rows = rows.filter((row) => row.status === "Descuadre");
    result.filters.push("Solo descuadres");
  }
  const countWithEmail =
    query.withEmail &&
    query.aggregation === "count" &&
    /\bcuantos? (?:usuarios )?(?:tienen|con) (?:un )?correo/.test(query.text);
  if (query.withEmail && query.action === "users.consult" && !countWithEmail) {
    rows = rows.filter((row) => Boolean(row.email));
    result.filters.push("Con correo principal informado");
  }

  const selected = query.structured
    ? table.columns.filter(
        ({ key }) =>
          query.structured?.metrics.includes(key) ||
          (key === "email" && query.structured?.showEmail),
      )
    : query.includeColumns || table.defaultKeys
      ? mentionedColumns(table.columns, query.text)
      : [];
  const metricColumns = selected.some(({ unit }) => unit) ? selected : table.columns;
  let columns = selected.length
    ? table.columns.filter(
        (col) =>
          selected.includes(col) ||
          ["id", "name", "year", "period", "pay", "currency", "concept", "status"].includes(
            col.key,
          ),
      )
    : table.defaultKeys
      ? table.columns.filter(({ key }) => table.defaultKeys?.includes(key))
      : table.columns;
  const calculations = [...(table.calculations ?? [])];
  const countEmployees =
    query.aggregation === "count" &&
    /\bcuant(?:os empleados|as personas)\b/.test(query.text) &&
    table.columns.some(({ key }) => key === "id") &&
    query.action !== "users.consult" &&
    query.action !== "reports.payroll-results";
  if (query.aggregation === "count")
    calculations.push({
      label: countWithEmail
        ? "Usuarios con correo principal"
        : countEmployees
          ? "Empleados distintos"
          : query.action === "users.consult"
            ? "Usuarios"
            : "Filas que coinciden",
      value: countWithEmail
        ? rows.filter((row) => Boolean(row.email)).length
        : countEmployees
          ? new Set(rows.map((row) => row.id).filter(Boolean)).size
          : rows.length,
    });
  if (query.aggregation === "sum") {
    const target = sumTarget(table.columns, query.text);
    if (!target || target.unit === "coeficiente") {
      message ??= "Indica una columna numérica que se pueda sumar.";
    } else {
      const value = sum(rows.map((row) => row[target.key]));
      if (value !== null) calculations.push({ label: "Suma · " + target.label, value });
      else message ??= "La columna solicitada no tiene valores numéricos para esos filtros.";
      if (!columns.includes(target)) columns = [...columns, target];
    }
  }
  if (primaveraComparison) {
    for (const [period, value] of [...mismatchesByPeriod].sort(([a], [b]) => a.localeCompare(b)))
      calculations.push({ label: "Descuadres · " + period, value });
  } else if (query.compare) {
    const comparison = comparePeriods(table, rows, metricColumns);
    calculations.push(...comparison);
    if (!comparison.length && rows.length)
      message ??=
        "Se muestran los valores disponibles. Para calcular la diferencia hacen falta dos periodos con valores comparables.";
  }
  const invalidFilter = query.filters.some(
    ({ field }) => !table.columns.some(({ key }) => key === field),
  );
  const invalidMetric = query.structured?.metrics.some(
    (metric) => !table.columns.some(({ key }) => key === metric),
  );
  if (invalidMetric)
    message ??= "La vista seleccionada no contiene todas las métricas solicitadas.";
  if (!rows.length && !table.document) message ??= "No hay datos para estos filtros.";
  return {
    outcome:
      table.outcome ??
      (invalidFilter || invalidMetric ? "missing" : rows.length || table.document ? "ok" : "empty"),
    result: {
      ...result,
      calculations,
      message,
      document: table.document,
      total: rows.length,
      columns: columns.map(({ label }) => label),
      rows: rows
        .slice(page * PEOPLENET_PAGE_SIZE, (page + 1) * PEOPLENET_PAGE_SIZE)
        .map((row) => columns.map(({ key }) => row[key] ?? null)),
    },
    dataset: {
      action: query.action,
      columns: table.columns,
      rows,
      employeeId: employee?.id ?? table.employeeId,
    },
  };
}
