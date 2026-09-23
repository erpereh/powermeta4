import type { GroupedExcelCell, GroupedExcelSheet } from "@/features/registro-retributivo/types";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

/**
 * Lectura de las hojas agrupadas del Registro Retributivo como brecha entre
 * mujeres y hombres. Las columnas del Excel siguen el patrón
 * «Tipo de retribución · Bloque · Media|Mediana · Mujeres|Varones|Diferencia %».
 */

/** A partir de esta brecha la empresa debe justificarla (art. 28.3 ET). */
export const GAP_THRESHOLD = 0.25;

export type GapMeasure = "total" | "normalized" | "period";
export type GapStat = "media" | "mediana";

export const GAP_MEASURES: ReadonlyArray<{ id: GapMeasure; label: string; description: string }> = [
  { id: "total", label: "Normalizada + variables", description: "Retribución normalizada a jornada completa más los complementos variables." },
  { id: "normalized", label: "Normalizada", description: "Retribución normalizada a jornada completa, sin variables." },
  { id: "period", label: "Periodo completo", description: "Lo cobrado realmente en el periodo, sin normalizar." },
];

export const GAP_BLOCKS = ["Salario", "C. salarial", "Extrasalarial"] as const;

export type GapValues = {
  readonly women?: number;
  readonly men?: number;
  /** Brecha como fracción: (hombres − mujeres) / hombres. Positiva = las mujeres cobran menos. */
  readonly gap?: number;
};

export type GapRow = {
  readonly id: string;
  readonly name: string;
  readonly women: number;
  readonly men: number;
  /** Valores por tipo de retribución, estadístico y bloque (en el orden de GAP_BLOCKS). */
  readonly values: Readonly<Record<GapMeasure, Readonly<Record<GapStat, readonly GapValues[]>>>>;
};

type ColumnTarget =
  | { readonly kind: "count"; readonly sex: "women" | "men" }
  | { readonly kind: "value"; readonly measure: GapMeasure; readonly block: number; readonly stat: GapStat; readonly field: keyof GapValues };

function parts(label: string): string[] {
  return label
    .split("·")
    .map((part) => normalizeComparableText(part))
    .filter(Boolean);
}

function measureOf(label: string): GapMeasure | undefined {
  if (label.startsWith("total retribuciones")) return "total";
  if (label.includes("periodo completo")) return "period";
  if (label.includes("normalizadas")) return "normalized";
  return undefined;
}

function blockOf(label: string): number | undefined {
  if (label.startsWith("salario")) return 0;
  if (label.includes("salarial") && !label.startsWith("extra")) return 1;
  if (label.startsWith("extrasalarial")) return 2;
  return undefined;
}

function fieldOf(label: string): keyof GapValues | undefined {
  if (label === "mujeres") return "women";
  if (label === "varones" || label === "hombres") return "men";
  if (label.startsWith("diferencia")) return "gap";
  return undefined;
}

function targetOf(label: string): ColumnTarget | undefined {
  const [first = "", second = "", third = "", fourth = ""] = parts(label);
  if (first === "total personas") {
    if (second === "mujeres") return { kind: "count", sex: "women" };
    if (second === "varones" || second === "hombres") return { kind: "count", sex: "men" };
    return undefined;
  }
  const measure = measureOf(first);
  const block = blockOf(second);
  const stat = third === "media" || third === "mediana" ? third : undefined;
  const field = fieldOf(fourth);
  if (!measure || block === undefined || !stat || !field) return undefined;
  return { kind: "value", measure, block, stat, field };
}

function numberOf(cell: GroupedExcelCell | undefined): number | undefined {
  return typeof cell?.value === "number" && Number.isFinite(cell.value) ? cell.value : undefined;
}

function emptyValues(): Record<GapMeasure, Record<GapStat, GapValues[]>> {
  const perStat = () => ({ media: GAP_BLOCKS.map(() => ({})), mediana: GAP_BLOCKS.map(() => ({})) });
  return { total: perStat(), normalized: perStat(), period: perStat() };
}

/**
 * Convierte una hoja agrupada en filas de brecha. Devuelve `undefined` si la
 * hoja no tiene el formato esperado (en ese caso se muestra la hoja original).
 */
export function parseGapRows(sheet: GroupedExcelSheet): GapRow[] | undefined {
  if (sheet.status !== "ready" || sheet.columns.length < 3) return undefined;
  const targets = sheet.columns.map((column) => ({ key: column.key, target: targetOf(column.label) }));
  const hasCounts = targets.some((item) => item.target?.kind === "count");
  const hasGaps = targets.some((item) => item.target?.kind === "value" && item.target.field === "gap");
  if (!hasCounts || !hasGaps) return undefined;

  const [idColumn, nameColumn] = sheet.columns;
  const nameIsLabel = nameColumn ? targetOf(nameColumn.label) === undefined : false;

  return sheet.rows.map((row) => {
    const values = emptyValues();
    let women = 0;
    let men = 0;
    for (const { key, target } of targets) {
      if (!target) continue;
      const value = numberOf(row[key]);
      if (value === undefined) continue;
      if (target.kind === "count") {
        if (target.sex === "women") women = value;
        else men = value;
        continue;
      }
      const current = values[target.measure][target.stat][target.block] ?? {};
      values[target.measure][target.stat][target.block] = { ...current, [target.field]: value };
    }
    const id = row[idColumn.key]?.display?.trim() ?? "";
    const name = (nameIsLabel && nameColumn ? row[nameColumn.key]?.display?.trim() : "") || id;
    return { id, name, women, men, values };
  });
}

/** Solo hay brecha comparable si en el grupo hay mujeres y hombres. */
export function isComparableGroup(row: Pick<GapRow, "women" | "men">): boolean {
  return row.women > 0 && row.men > 0;
}

/** Brecha más alta (en valor absoluto) entre los bloques, o `undefined`. */
export function maxGap(row: GapRow, measure: GapMeasure, stat: GapStat): number | undefined {
  if (!isComparableGroup(row)) return undefined;
  const gaps = row.values[measure][stat].map((item) => item.gap).filter((gap): gap is number => gap !== undefined);
  if (!gaps.length) return undefined;
  return gaps.reduce((max, gap) => (Math.abs(gap) > Math.abs(max) ? gap : max), gaps[0]);
}

export function exceedsThreshold(gap: number | undefined): boolean {
  return gap !== undefined && Math.abs(gap) >= GAP_THRESHOLD;
}
