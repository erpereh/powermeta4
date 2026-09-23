import { describe, expect, it } from "vitest";

import { exceedsThreshold, isComparableGroup, maxGap, parseGapRows } from "@/features/registro-retributivo/groupings/genderGap";
import type { GroupedExcelCell, GroupedExcelColumn, GroupedExcelSheet } from "@/features/registro-retributivo/types";

function cell(value: string | number): GroupedExcelCell {
  return { value, display: String(value), kind: typeof value === "number" ? "number" : "text" };
}

const LABELS = [
  "Puesto",
  "Puesto",
  "Total personas · Mujeres",
  "Total personas · Varones",
  "Total personas · % mujeres",
  "Total retribuciones normalizadas + variables · Salario · Media · Mujeres",
  "Total retribuciones normalizadas + variables · Salario · Media · Varones",
  "Total retribuciones normalizadas + variables · Salario · Media · Diferencia %",
  "Total retribuciones normalizadas + variables · C. salarial · Media · Diferencia %",
  "Total retribuciones normalizadas + variables · Extrasalarial · Media · Diferencia %",
  "Retribuciones (periodo completo) · Salario · Mediana · Diferencia %",
];

function column(label: string, index: number): GroupedExcelColumn {
  return { key: `c${index}`, label, sourceColumn: String(index), kind: index < 2 ? "text" : "number" };
}

function sheet(rows: ReadonlyArray<ReadonlyArray<string | number>>): GroupedExcelSheet {
  const columns = LABELS.map(column);
  return {
    sheetName: "Análisis por puesto",
    status: "ready",
    columns,
    rows: rows.map((values) => Object.fromEntries(values.map((value, index) => [`c${index}`, cell(value)]))),
    visibleRowCount: rows.length,
    visibleColumnCount: columns.length,
  };
}

describe("parseGapRows", () => {
  it("reads people, values and gaps by measure, statistic and block", () => {
    const rows = parseGapRows(sheet([["AFUENPU", "Administrativa/o", 7, 2, 0.78, 20154.86, 20974.05, 0.039, 0.258, 0.178, 0.1]]));

    expect(rows).toHaveLength(1);
    const [row] = rows ?? [];
    expect(row.id).toBe("AFUENPU");
    expect(row.name).toBe("Administrativa/o");
    expect(row.women).toBe(7);
    expect(row.men).toBe(2);
    expect(row.values.total.media[0]).toEqual({ women: 20154.86, men: 20974.05, gap: 0.039 });
    expect(row.values.total.media[1].gap).toBe(0.258);
    expect(row.values.total.media[2].gap).toBe(0.178);
    expect(row.values.period.mediana[0].gap).toBe(0.1);
    expect(maxGap(row, "total", "media")).toBe(0.258);
    expect(exceedsThreshold(maxGap(row, "total", "media"))).toBe(true);
  });

  it("does not compare groups with only one sex", () => {
    const [row] = parseGapRows(sheet([["CCAL", "Control de Calidad", 1, 0, 1, 21993.2, 0, 0, 0, 0, 0]])) ?? [];

    expect(isComparableGroup(row)).toBe(false);
    expect(maxGap(row, "total", "media")).toBeUndefined();
  });

  it("returns undefined when the sheet does not follow the expected layout", () => {
    const unknown: GroupedExcelSheet = { ...sheet([]), columns: ["Otra cosa", "Importe", "Total"].map(column) };

    expect(parseGapRows(unknown)).toBeUndefined();
  });
});
