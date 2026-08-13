import * as XLSX from "xlsx";
import type { AnalysisStatus, GroupingComparisonRow, GroupingType, PersonComparisonRow, RegistroEmployee, RetributionBlock } from "@/features/registro-retributivo/types";
import { normalizeComparableText, normalizeEmployeeNumber } from "@/features/registro-retributivo/utils/normalize";

export const REGISTRO_GROUPING_BASES = [
  { key: "normalizedPlusVariables", label: "TOTAL RETRIBUCIONES NORMALIZADAS + VARIABLES" },
  { key: "normalized", label: "RETRIBUCIONES NORMALIZADAS" },
  { key: "periodComplete", label: "RETRIBUCIONES (PERIODO COMPLETO)" },
] as const;

type RegistroBaseKey = (typeof REGISTRO_GROUPING_BASES)[number]["key"];
type GroupingMetric = "Media" | "Mediana";
type GroupingSegment = "Mujeres" | "Varones" | "Diferencia %";

interface GroupingSheetDefinition {
  readonly sourceSheet: string;
  readonly groupingType: GroupingType;
  readonly rawGroupIdKey: string;
  readonly rawGroupNameKey: string;
}

interface ParsedMetricHeader {
  readonly column: number;
  readonly registroBase: string;
  readonly block: RetributionBlock;
  readonly metric: GroupingMetric;
  readonly segment: GroupingSegment;
}

interface ParsedGroupedSheetRow {
  readonly groupId: string;
  readonly groupName: string;
  readonly values: ReadonlyMap<string, number>;
}

interface ParsedGroupedSheet {
  readonly sourceSheet: string;
  readonly groupingType: GroupingType;
  readonly rows: readonly ParsedGroupedSheetRow[];
  readonly headers: readonly ParsedMetricHeader[];
}

export interface DetectedGroupingSheet {
  readonly sourceSheet: string;
  readonly groupingType: GroupingType;
  readonly groupCount: number;
}

export interface BuildRegistroGroupingComparisonsOptions {
  readonly tolerance: number;
  readonly reviewThreshold?: number;
  readonly incidentThreshold?: number;
}

export interface RegistroGroupingComparisonResult {
  readonly rows: readonly GroupingComparisonRow[];
  readonly detectedSheets: readonly DetectedGroupingSheet[];
  readonly groupCount: number;
  readonly warnings: readonly string[];
}

const GROUPING_SHEETS: readonly GroupingSheetDefinition[] = [
  {
    sourceSheet: "Análisis por puesto",
    groupingType: "puesto",
    rawGroupIdKey: "puesto id puesto",
    rawGroupNameKey: "puesto puesto",
  },
  {
    sourceSheet: "Análisis por valoración puesto",
    groupingType: "valoracionPuesto",
    rawGroupIdKey: "valoracion del puesto id valoracion retributiva",
    rawGroupNameKey: "valoracion del puesto valoracion retributiva",
  },
  {
    sourceSheet: "Análisis por categoría",
    groupingType: "categoria",
    rawGroupIdKey: "categoria id categoria",
    rawGroupNameKey: "categoria categoria",
  },
  {
    sourceSheet: "Análisis por familia de puesto",
    groupingType: "familiaPuesto",
    rawGroupIdKey: "familia puesto id familia puesto",
    rawGroupNameKey: "familia puesto familia puesto",
  },
  {
    sourceSheet: "Agrupación Categoría Personal",
    groupingType: "agrupacionCategoriaPersonal",
    rawGroupIdKey: "agrupacion categoria personal id agrup cat personal",
    rawGroupNameKey: "agrupacion categoria personal agrup cat personal",
  },
];

const BLOCKS: readonly RetributionBlock[] = ["Salario", "C. Salarial", "Extrasalarial"];
const METRICS: readonly GroupingMetric[] = ["Media", "Mediana"];
const SEGMENTS: readonly GroupingSegment[] = ["Mujeres", "Varones", "Diferencia %"];
const NO_GROUP = "[SIN DEFINIR]";
const PERIOD_COMPLETE_BASE = "RETRIBUCIONES (PERIODO COMPLETO)";
const RAW_AMOUNT_KEYS: Record<RegistroBaseKey, Record<RetributionBlock, string>> = {
  normalizedPlusVariables: {
    Salario: "total retribuciones normalizadas + variables salario",
    "C. Salarial": "total retribuciones normalizadas + variables c salarial",
    Extrasalarial: "total retribuciones normalizadas + variables extrasalarial",
  },
  normalized: {
    Salario: "retribuciones normalizadas salario",
    "C. Salarial": "retribuciones normalizadas c salarial",
    Extrasalarial: "retribuciones normalizadas extrasalarial",
  },
  periodComplete: {
    Salario: "retribuciones periodo completo salario",
    "C. Salarial": "retribuciones periodo completo c salarial",
    Extrasalarial: "retribuciones periodo completo extrasalarial",
  },
};

function normalizeSheetName(value: string): string {
  return normalizeComparableText(value);
}

function cell(rows: readonly unknown[][], row: number, col: number): unknown {
  return rows[row]?.[col];
}

function resolveMergedValue(sheet: XLSX.WorkSheet, rows: readonly unknown[][], rowIndex: number, colIndex: number): unknown {
  const merges = sheet["!merges"] ?? [];
  for (const range of merges) {
    if (range.s.r <= rowIndex && rowIndex <= range.e.r && range.s.c <= colIndex && colIndex <= range.e.c) {
      return cell(rows, range.s.r, range.s.c);
    }
  }

  return undefined;
}

function headerValue(sheet: XLSX.WorkSheet, rows: readonly unknown[][], row: number, col: number): string {
  return String(cell(rows, row, col) ?? resolveMergedValue(sheet, rows, row, col) ?? "").trim();
}

function maxColumnCount(sheet: XLSX.WorkSheet, rows: readonly unknown[][]): number {
  if (sheet["!ref"]) {
    return XLSX.utils.decode_range(sheet["!ref"]).e.c + 1;
  }
  return Math.max(...rows.map((row) => row.length), 0);
}

function findSegmentRow(rows: readonly unknown[][]): number {
  return rows.findIndex((row) => {
    const normalized = row.map((value) => normalizeComparableText(value));
    const women = normalized.filter((value) => value === "mujeres").length;
    const men = normalized.filter((value) => value === "varones").length;
    const differences = normalized.filter((value) => value.includes("diferencia")).length;
    return women >= 4 && men >= 4 && differences >= 4;
  });
}

function normalizeBase(value: string): string | undefined {
  const normalized = normalizeComparableText(value);
  return REGISTRO_GROUPING_BASES.find((base) => normalizeComparableText(base.label) === normalized)?.label;
}

function normalizeBlock(value: string): RetributionBlock | undefined {
  const normalized = normalizeComparableText(value);
  return BLOCKS.find((block) => normalizeComparableText(block) === normalized);
}

function normalizeMetric(value: string): GroupingMetric | undefined {
  const normalized = normalizeComparableText(value);
  if (normalized === "media") return "Media";
  if (normalized === "mediana") return "Mediana";
  return undefined;
}

function normalizeSegment(value: string): GroupingSegment | undefined {
  const normalized = normalizeComparableText(value);
  if (normalized === "mujeres") return "Mujeres";
  if (normalized === "varones") return "Varones";
  if (normalized.includes("diferencia")) return "Diferencia %";
  return undefined;
}

function numberValue(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.replace(/\s/g, "").replace(/EUR/gi, "");
  if (!trimmed) {
    return undefined;
  }
  const parsed = Number(trimmed.replace(/\./g, "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : undefined;
}

function textValue(value: unknown): string {
  return String(value ?? "").trim();
}

function metricKey(base: string, block: RetributionBlock, metric: GroupingMetric, segment: GroupingSegment): string {
  return `${base}|${block}|${metric}|${segment}`;
}

function parseGroupedSheet(workbook: XLSX.WorkBook, definition: GroupingSheetDefinition): ParsedGroupedSheet | undefined {
  const sheetName = workbook.SheetNames.find((name) => normalizeSheetName(name) === normalizeSheetName(definition.sourceSheet));
  const sheet = sheetName ? workbook.Sheets[sheetName] : undefined;
  if (!sheetName || !sheet) {
    return undefined;
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: undefined, blankrows: true }) as unknown[][];
  const segmentRow = findSegmentRow(rows);
  if (segmentRow < 3) {
    return {
      sourceSheet: sheetName,
      groupingType: definition.groupingType,
      rows: [],
      headers: [],
    };
  }

  const baseRow = segmentRow - 3;
  const blockRow = segmentRow - 2;
  const metricRow = segmentRow - 1;
  const maxCols = maxColumnCount(sheet, rows);
  const headers: ParsedMetricHeader[] = [];

  for (let col = 0; col < maxCols; col += 1) {
    const registroBase = normalizeBase(headerValue(sheet, rows, baseRow, col));
    const block = normalizeBlock(headerValue(sheet, rows, blockRow, col));
    const metric = normalizeMetric(headerValue(sheet, rows, metricRow, col));
    const segment = normalizeSegment(headerValue(sheet, rows, segmentRow, col));
    if (registroBase && block && metric && segment) {
      headers.push({ column: col, registroBase, block, metric, segment });
    }
  }

  const parsedRows: ParsedGroupedSheetRow[] = [];
  for (let rowIndex = segmentRow + 1; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex] ?? [];
    const rawId = textValue(row[0]);
    const rawName = textValue(row[1]);
    if (!rawId && !rawName) {
      continue;
    }
    const values = new Map<string, number>();
    headers.forEach((header) => {
      const value = numberValue(row[header.column]);
      if (value !== undefined) {
        values.set(metricKey(header.registroBase, header.block, header.metric, header.segment), value);
      }
    });
    parsedRows.push({
      groupId: rawId || rawName || NO_GROUP,
      groupName: rawName || rawId || NO_GROUP,
      values,
    });
  }

  return {
    sourceSheet: sheetName,
    groupingType: definition.groupingType,
    rows: parsedRows,
    headers,
  };
}

function rawText(employee: RegistroEmployee, key: string): string {
  return textValue(employee.raw[key]);
}

function groupKey(value: string): string {
  return normalizeComparableText(value || NO_GROUP);
}

function normalizeSex(value: unknown): "women" | "men" | "unknown" {
  const normalized = normalizeComparableText(value);
  if (["mujer", "m", "femenino", "f"].includes(normalized)) {
    return "women";
  }
  if (["hombre", "varon", "h", "masculino", "v"].includes(normalized)) {
    return "men";
  }
  return "unknown";
}

function groupEmployees(definition: GroupingSheetDefinition, employees: readonly RegistroEmployee[]) {
  const grouped = new Map<string, { groupId: string; groupName: string; employees: RegistroEmployee[] }>();
  employees.forEach((employee) => {
    const rawId = rawText(employee, definition.rawGroupIdKey);
    const rawName = rawText(employee, definition.rawGroupNameKey);
    const groupId = rawId || rawName || NO_GROUP;
    const groupName = rawName || rawId || NO_GROUP;
    const key = groupKey(groupId);
    const current = grouped.get(key) ?? { groupId, groupName, employees: [] };
    current.employees.push(employee);
    grouped.set(key, current);
  });
  return grouped;
}

function groupingDefinitionForType(groupingType: GroupingType): GroupingSheetDefinition | undefined {
  return GROUPING_SHEETS.find((definition) => definition.groupingType === groupingType);
}

export function median(values: readonly unknown[]): number {
  const numeric = values.filter((value): value is number => typeof value === "number" && Number.isFinite(value)).sort((left, right) => left - right);
  if (!numeric.length) {
    return 0;
  }
  const middle = Math.floor(numeric.length / 2);
  return numeric.length % 2 === 1 ? numeric[middle] : (numeric[middle - 1] + numeric[middle]) / 2;
}

function average(values: readonly number[]): number {
  if (!values.length) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function differencePercentage(women: number, men: number): number {
  if (men === 0) {
    return 0;
  }
  return (men - women) / men;
}

function employeeAmount(employee: RegistroEmployee, base: RegistroBaseKey, block: RetributionBlock): number {
  const raw = numberValue(employee.raw[RAW_AMOUNT_KEYS[base][block]]);
  if (raw !== undefined) {
    return raw;
  }
  const values = employee[base];
  if (block === "Salario") return values.salary;
  if (block === "C. Salarial") return values.salaryComplement;
  return values.extraSalary;
}

function statusFromDifference(difference: number | undefined, segment: GroupingSegment, options: BuildRegistroGroupingComparisonsOptions): AnalysisStatus {
  if (difference === undefined || !Number.isFinite(difference)) {
    return "Sin datos";
  }
  const abs = Math.abs(difference);
  const tolerance = segment === "Diferencia %" ? 0.01 : Math.max(0, options.tolerance);
  const incidentThreshold = segment === "Diferencia %" ? 0.05 : Math.max(options.reviewThreshold ?? tolerance, options.incidentThreshold ?? 50);
  if (abs <= tolerance) {
    return "OK";
  }
  return abs >= incidentThreshold ? "Diferencia" : "Revisar";
}

function roundedDifference(value: number | undefined): number | undefined {
  if (value === undefined || !Number.isFinite(value)) {
    return undefined;
  }
  return Math.round(value * 1_000_000) / 1_000_000;
}

function matchedBlockAmount(row: PersonComparisonRow, block: RetributionBlock, source: "registro" | "pdf"): number {
  if (block === "Salario") return source === "registro" ? row.salaryRegistro : row.salaryPdf;
  if (block === "C. Salarial") return source === "registro" ? row.salaryComplementRegistro : row.salaryComplementPdf;
  return source === "registro" ? row.extraSalaryRegistro : row.extraSalaryPdf;
}

function segmentValue(input: {
  readonly employees: readonly RegistroEmployee[];
  readonly baseKey: RegistroBaseKey;
  readonly block: RetributionBlock;
  readonly metric: GroupingMetric;
  readonly segment: GroupingSegment;
}): number {
  const womenValues: number[] = [];
  const menValues: number[] = [];
  input.employees.forEach((employee) => {
    const amount = employeeAmount(employee, input.baseKey, input.block);
    const sex = normalizeSex(employee.sex);
    if (sex === "women") {
      womenValues.push(amount);
    } else if (sex === "men") {
      menValues.push(amount);
    }
  });

  const women = input.metric === "Media" ? average(womenValues) : median(womenValues);
  const men = input.metric === "Media" ? average(menValues) : median(menValues);
  if (input.segment === "Mujeres") return women;
  if (input.segment === "Varones") return men;
  return differencePercentage(women, men);
}

function matchedSegmentValue(input: {
  readonly people: readonly { readonly employee: RegistroEmployee; readonly row: PersonComparisonRow }[];
  readonly block: RetributionBlock;
  readonly metric: GroupingMetric;
  readonly segment: GroupingSegment;
  readonly source: "registro" | "pdf";
}): number {
  const womenValues: number[] = [];
  const menValues: number[] = [];
  input.people.forEach((item) => {
    const amount = matchedBlockAmount(item.row, input.block, input.source);
    const sex = normalizeSex(item.employee.sex);
    if (sex === "women") {
      womenValues.push(amount);
    } else if (sex === "men") {
      menValues.push(amount);
    }
  });

  const women = input.metric === "Media" ? average(womenValues) : median(womenValues);
  const men = input.metric === "Media" ? average(menValues) : median(menValues);
  if (input.segment === "Mujeres") return women;
  if (input.segment === "Varones") return men;
  return differencePercentage(women, men);
}

function groupMatchedPeople(
  definition: GroupingSheetDefinition,
  employeesByNumber: ReadonlyMap<string, RegistroEmployee>,
  people: readonly PersonComparisonRow[],
) {
  const grouped = new Map<string, { matched: { employee: RegistroEmployee; row: PersonComparisonRow }[]; women: number; men: number }>();
  people
    .filter((row) => row.status !== "Sin Registro" && row.status !== "Sin PDF")
    .forEach((row) => {
      const employee = employeesByNumber.get(normalizeEmployeeNumber(row.employeeNumber));
      if (!employee) {
        return;
      }
      const rawId = rawText(employee, definition.rawGroupIdKey);
      const rawName = rawText(employee, definition.rawGroupNameKey);
      const key = groupKey(rawId || rawName || NO_GROUP);
      const current = grouped.get(key) ?? { matched: [], women: 0, men: 0 };
      current.matched.push({ employee, row });
      const sex = normalizeSex(employee.sex);
      if (sex === "women") current.women += 1;
      if (sex === "men") current.men += 1;
      grouped.set(key, current);
    });
  return grouped;
}

function detectedSheetSummary(sheet: ParsedGroupedSheet): DetectedGroupingSheet {
  return {
    sourceSheet: sheet.sourceSheet,
    groupingType: sheet.groupingType,
    groupCount: sheet.rows.length,
  };
}

export function buildRegistroGroupingComparisons(
  input: Buffer | ArrayBuffer | Uint8Array,
  employees: readonly RegistroEmployee[],
  options: BuildRegistroGroupingComparisonsOptions,
): RegistroGroupingComparisonResult {
  const workbook = XLSX.read(input, { type: "buffer", cellDates: true, raw: true });
  const warnings: string[] = [];
  const parsedSheets = GROUPING_SHEETS.map((definition) => {
    const parsed = parseGroupedSheet(workbook, definition);
    if (!parsed) {
      warnings.push(`No se detectó la hoja agrupada: ${definition.sourceSheet}.`);
    } else if (!parsed.headers.length) {
      warnings.push(`No se pudieron leer cabeceras agrupadas fiables en ${parsed.sourceSheet}.`);
    }
    return { definition, parsed };
  }).filter((item): item is { definition: GroupingSheetDefinition; parsed: ParsedGroupedSheet } => Boolean(item.parsed));

  const rows: GroupingComparisonRow[] = [];
  const distinctGroups = new Set<string>();

  parsedSheets.forEach(({ definition, parsed }) => {
    const employeesByGroup = groupEmployees(definition, employees);
    const sheetRowsByGroup = new Map(parsed.rows.map((row) => [groupKey(row.groupId), row]));
    const allGroupKeys = new Set([...sheetRowsByGroup.keys(), ...employeesByGroup.keys()]);
    allGroupKeys.forEach((key) => {
      const sheetRow = sheetRowsByGroup.get(key);
      const employeeGroup = employeesByGroup.get(key);
      const groupId = sheetRow?.groupId ?? employeeGroup?.groupId ?? NO_GROUP;
      const groupName = sheetRow?.groupName ?? employeeGroup?.groupName ?? groupId;
      const groupEmployeesList = employeeGroup?.employees ?? [];
      const womenCount = groupEmployeesList.filter((employee) => normalizeSex(employee.sex) === "women").length;
      const menCount = groupEmployeesList.filter((employee) => normalizeSex(employee.sex) === "men").length;
      distinctGroups.add(`${parsed.sourceSheet}|${key}`);

      REGISTRO_GROUPING_BASES.forEach((base) => {
        BLOCKS.forEach((block) => {
          METRICS.forEach((metric) => {
            SEGMENTS.forEach((segment) => {
              const keyForValue = metricKey(base.label, block, metric, segment);
              const sheetValue = sheetRow?.values.get(keyForValue);
              const recalculatedValue = segmentValue({
                employees: groupEmployeesList,
                baseKey: base.key,
                block,
                metric,
                segment,
              });
              const difference = sheetValue === undefined ? undefined : recalculatedValue - sheetValue;
              const status = statusFromDifference(difference, segment, options);
              rows.push({
                sourceSheet: parsed.sourceSheet,
                groupingType: definition.groupingType,
                groupId,
                groupName,
                registroBase: base.label,
                block,
                metric,
                segment,
                registroSheetValue: sheetValue,
                registroRecalculatedValue: recalculatedValue,
                excelDifference: roundedDifference(difference),
                peopleCount: groupEmployeesList.length,
                womenCount,
                menCount,
                status,
                detail:
                  status === "Sin datos"
                    ? "No se pudo leer el valor equivalente en la hoja agrupada."
                    : `Validación Excel: ${parsed.sourceSheet} frente a Empleados recalculado. Diferencia % = (varones - mujeres) / varones; si varones = 0, se usa 0.`,
              });
            });
          });
        });
      });
    });
  });

  return {
    rows,
    detectedSheets: parsedSheets.map((item) => detectedSheetSummary(item.parsed)),
    groupCount: distinctGroups.size,
    warnings,
  };
}

export function enrichRegistroGroupingsWithPdf(
  rows: readonly GroupingComparisonRow[],
  employees: readonly RegistroEmployee[],
  people: readonly PersonComparisonRow[],
  pdfWithoutRegistro: readonly PersonComparisonRow[] = [],
  options: BuildRegistroGroupingComparisonsOptions,
): readonly GroupingComparisonRow[] {
  const employeesByNumber = new Map(employees.map((employee) => [normalizeEmployeeNumber(employee.employeeNumber), employee]));
  const matchedByGroupingType = new Map<GroupingType, ReturnType<typeof groupMatchedPeople>>();

  GROUPING_SHEETS.forEach((definition) => {
    matchedByGroupingType.set(definition.groupingType, groupMatchedPeople(definition, employeesByNumber, people));
  });

  return rows.map((row) => {
    if (row.registroBase !== PERIOD_COMPLETE_BASE) {
      return {
        ...row,
        excelStatus: row.status,
        pdfStatus: "No aplica",
        excludedPdfWithoutRegistroCount: pdfWithoutRegistro.length,
      };
    }

    const definition = groupingDefinitionForType(row.groupingType);
    const matchedGroup = definition ? matchedByGroupingType.get(definition.groupingType)?.get(groupKey(row.groupId)) : undefined;
    const matched = matchedGroup?.matched ?? [];
    const metric = row.metric as GroupingMetric;
    const segment = row.segment as GroupingSegment;
    const registroMatchedValue = matchedSegmentValue({
      people: matched,
      block: row.block,
      metric,
      segment,
      source: "registro",
    });
    const pdfValue = matchedSegmentValue({
      people: matched,
      block: row.block,
      metric,
      segment,
      source: "pdf",
    });
    const pdfDifference = roundedDifference(pdfValue - registroMatchedValue);
    const pdfStatus = statusFromDifference(pdfDifference, segment, options);

    return {
      ...row,
      excelStatus: row.status,
      pdfRegistroRecalculatedValue: registroMatchedValue,
      pdfRecalculatedValue: pdfValue,
      pdfDifference,
      pdfStatus,
      matchedPeopleCount: matched.length,
      matchedWomenCount: matchedGroup?.women ?? 0,
      matchedMenCount: matchedGroup?.men ?? 0,
      excludedPdfWithoutRegistroCount: pdfWithoutRegistro.length,
      detail:
        row.detail +
        " Comparación PDF: Registro periodo completo matched frente a PDF agrupado; se excluyen PDF sin Registro y Registro sin PDF.",
    };
  });
}
