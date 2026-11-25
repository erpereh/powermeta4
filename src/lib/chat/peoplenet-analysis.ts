import "server-only";

import { round2 } from "@/lib/primavera/cuadre";
import type { PeopleAnalysis } from "./peoplenet-tools";
import type { PeopleNetDataset, PeopleNetRead } from "./peoplenet-service";
import type { PeopleNetResult } from "./peoplenet-result";

export const ANALYSIS_LABEL = "Análisis de PeopleNet";
const labels: Record<PeopleAnalysis["operation"], string> = {
  count: "Filas que coinciden",
  distinct: "Personas distintas",
  sum: "Suma",
  average: "Media",
  difference: "Diferencia (izquierda menos derecha)",
  percentChange: "Variación porcentual",
  intersection: "Coincidencias",
};

const selectedRows = (data: PeopleNetDataset, period?: string) =>
  period
    ? data.rows.filter((row) => String(row.period ?? row.year ?? "").startsWith(period))
    : data.rows;

const identity = (row: PeopleNetDataset["rows"][number], data: PeopleNetDataset) =>
  typeof row.id === "string" && row.id ? row.id : data.employeeId;

const periodLength = { year: 4, month: 7, day: 10 };

function keys(
  data: PeopleNetDataset,
  rows: PeopleNetDataset["rows"],
  byPeriod: boolean,
  granularity?: PeopleAnalysis["granularity"],
) {
  const values = rows.map((row) => {
    const id = identity(row, data);
    if (!id) return null;
    if (!byPeriod) return id;
    const period = String(row.period ?? row.year ?? "");
    const length = granularity ? periodLength[granularity] : period.length;
    return !period || length > period.length ? null : JSON.stringify([id, period.slice(0, length)]);
  });
  return values.every((value): value is string => value !== null) ? new Set(values) : undefined;
}

function measure(data: PeopleNetDataset, rows: PeopleNetDataset["rows"], key?: string) {
  const column = data.columns.find((item) => item.key === key);
  if (!column?.unit || !rows.length) return;
  const values = rows.map((row) => row[column.key]);
  if (
    !values.every((value): value is number => typeof value === "number" && Number.isFinite(value))
  )
    return;
  return { values, label: column.label, unit: column.unit };
}

export function analyzePeopleNet(
  input: PeopleAnalysis,
  left: PeopleNetRead,
  right?: PeopleNetRead,
): PeopleNetRead {
  const base: PeopleNetResult = {
    source: { label: ANALYSIS_LABEL, href: left.result.source.href },
    debug: left.result.debug,
    rows: [],
    columns: [],
    filters: [],
    calculations: [],
    page: 0,
    total: 0,
  };
  const missing = (message: string): PeopleNetRead => ({
    outcome: "missing",
    result: { ...base, message },
  });
  const a = left.outcome === "ok" ? left.dataset : undefined;
  const b = right?.outcome === "ok" ? right.dataset : undefined;
  if (!a || (input.right && !b))
    return missing("Para calcular, hacen falta resultados completos y disponibles.");
  const rows = selectedRows(a, input.left.period);
  const otherRows = b ? selectedRows(b, input.right?.period) : [];
  const operation = input.operation;
  const label = labels[operation];
  if (input.left.period) base.filters.push(`Izquierda · ${input.left.period}`);
  if (input.right?.period) base.filters.push(`Derecha · ${input.right.period}`);
  let value: number;
  let metricLabel = "";

  if (operation === "intersection" || operation === "distinct") {
    const byPeriod = input.match === "personPeriod";
    const first = keys(a, rows, byPeriod, input.granularity);
    const second = b ? keys(b, otherRows, byPeriod, input.granularity) : undefined;
    if (!first || (operation === "intersection" && !second))
      return missing(
        "El cruce requiere una matrícula y, si se ha pedido, un periodo identificable en ambas consultas.",
      );
    if (byPeriod && second && !input.granularity && periodGrains(rows) !== periodGrains(otherRows))
      return missing("Indica una granularidad común para cruzar los periodos.");
    value = second ? [...first].filter((key) => second.has(key)).length : first.size;
  } else if (operation === "count") {
    value = rows.length;
  } else {
    const first = measure(a, rows, input.left.metric);
    const second = b ? measure(b, otherRows, input.right?.metric) : undefined;
    if (!first || (input.right && !second))
      return missing(
        "Selecciona métricas numéricas con valores disponibles en todas las filas elegidas.",
      );
    metricLabel = first.label;
    const firstTotal = first.values.reduce((sum, item) => sum + item, 0);
    if (operation === "sum" || operation === "average") {
      if (operation === "sum" && first.unit === "coeficiente")
        return missing("El coeficiente de jornada no admite suma.");
      value = operation === "average" ? firstTotal / first.values.length : firstTotal;
    } else {
      const identifiable = (data: PeopleNetDataset, row: PeopleNetDataset["rows"][number]) =>
        identity(row, data);
      if (
        !b ||
        !second ||
        first.unit !== second.unit ||
        (["importe", "valor"].includes(first.unit) && a.action !== b.action) ||
        rows.length !== 1 ||
        otherRows.length !== 1 ||
        periodGrains(rows) !== periodGrains(otherRows)
      ) {
        return missing(
          "La comparación requiere un valor inequívoco por lado con la misma unidad, moneda y granularidad.",
        );
      }
      if (!identifiable(a, rows[0]) || !identifiable(b, otherRows[0]))
        return missing("No se ha podido verificar la persona de cada valor.");
      metricLabel += ` / ${second.label}`;
      const baseline = second.values[0];
      if (operation === "percentChange" && baseline === 0)
        return missing("El valor de referencia es cero. Puedes pedir la diferencia absoluta.");
      value =
        operation === "difference"
          ? firstTotal - baseline
          : ((firstTotal - baseline) / Math.abs(baseline)) * 100;
    }
  }
  if (!Number.isFinite(value)) return missing("No se pudo calcular un resultado finito.");
  return {
    outcome: "ok",
    result: {
      ...base,
      calculations: [
        { label: metricLabel ? `${label} · ${metricLabel}` : label, value: round2(value) },
      ],
    },
  };
}

function periodGrains(rows: PeopleNetDataset["rows"]): string {
  return [...new Set(rows.map((row) => String(row.period ?? row.year ?? "").length))]
    .sort()
    .join(",");
}
