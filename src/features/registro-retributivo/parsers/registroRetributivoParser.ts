import * as XLSX from "xlsx";
import type {
  AnalysisStatus,
  AvailableConceptCodes,
  ConceptBlockKey,
  InternalExcelCheckRow,
  MoneyByBlock,
  RegistroColumnMap,
  RegistroConceptAmount,
  RegistroEmployee,
  RegistroParseResult,
  RetributionBlock,
} from "@/features/registro-retributivo/types";
import { parseSpanishMoney, roundMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText, normalizeEmployeeNumber, normalizeNif } from "@/features/registro-retributivo/utils/normalize";
import { toIsoDate } from "@/features/registro-retributivo/utils/spanishDates";

interface HeaderInfo {
  readonly col: number;
  readonly letter: string;
  readonly groupRaw: string;
  readonly subheaderRaw: string;
  readonly group: string;
  readonly subheader: string;
  readonly combined: string;
}

const BLOCKS: ReadonlyArray<{ block: RetributionBlock; blockKey: ConceptBlockKey; header: string }> = [
  { block: "Salario", blockKey: "salary", header: "conceptos salario" },
  { block: "C. Salarial", blockKey: "salaryComplement", header: "conceptos c salarial" },
  { block: "Extrasalarial", blockKey: "extraSalary", header: "conceptos extrasalarial" },
];

function colLetter(index: number): string {
  return XLSX.utils.encode_col(index);
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

function buildHeaders(sheet: XLSX.WorkSheet, rows: readonly unknown[][], groupRowIndex: number, subheaderRowIndex: number): HeaderInfo[] {
  const maxCols = Math.max(...rows.map((row) => row.length));
  return Array.from({ length: maxCols }, (_, col) => {
    const group = headerValue(sheet, rows, groupRowIndex, col);
    const subheader = headerValue(sheet, rows, subheaderRowIndex, col);
    return {
      col,
      letter: colLetter(col),
      groupRaw: group,
      subheaderRaw: subheader,
      group: normalizeComparableText(group),
      subheader: normalizeComparableText(subheader),
      combined: normalizeComparableText(`${group} ${subheader}`),
    };
  });
}

function findHeaderRows(rows: readonly unknown[][]): { groupRowIndex: number; subheaderRowIndex: number; firstDataRowIndex: number } {
  const groupRowIndex = rows.findIndex((row, index) => {
    const normalized = row.map((value) => normalizeComparableText(value));
    const next = rows[index + 1]?.map((value) => normalizeComparableText(value)) ?? [];
    return normalized.some((value) => value.includes("total retribuciones")) && next.some((value) => value === "id rh");
  });

  if (groupRowIndex < 0) {
    throw new Error("No se encontraron las cabeceras reales de Empleados (filas de bloque y campo).");
  }

  return {
    groupRowIndex,
    subheaderRowIndex: groupRowIndex + 1,
    firstDataRowIndex: groupRowIndex + 2,
  };
}

function findColumn(headers: readonly HeaderInfo[], predicate: (header: HeaderInfo) => boolean): HeaderInfo | undefined {
  return headers.find(predicate);
}

function byGroupAndSub(group: string, subheader: string): (header: HeaderInfo) => boolean {
  return (header) => header.group === group && header.subheader === subheader;
}

function moneyAt(row: readonly unknown[], col?: number): number {
  if (col === undefined) {
    return 0;
  }

  return parseSpanishMoney(row[col]) ?? 0;
}

function textAt(row: readonly unknown[], col?: number): string | undefined {
  if (col === undefined) {
    return undefined;
  }

  const value = row[col];
  const text = String(value ?? "").trim();
  return text || undefined;
}

function total(block: Pick<MoneyByBlock, "salary" | "salaryComplement" | "extraSalary">): number {
  return roundMoney(block.salary + block.salaryComplement + block.extraSalary);
}

function statusFromDifference(difference: number, tolerance = 1): AnalysisStatus {
  const abs = Math.abs(difference);
  if (abs <= tolerance) {
    return "OK";
  }
  return abs <= 50 ? "Revisar" : "Diferencia";
}

function blockConceptHeaders(headers: readonly HeaderInfo[], blockKey: ConceptBlockKey): HeaderInfo[] {
  const block = BLOCKS.find((item) => item.blockKey === blockKey);
  if (!block) {
    return [];
  }
  return headers.filter((header) => header.group === block.header && Boolean(header.subheader));
}

function createInternalCheck(input: {
  readonly employee: RegistroEmployee;
  readonly salaryBreakdown: number;
  readonly salaryComplementBreakdown: number;
  readonly extraSalaryBreakdown: number;
}): InternalExcelCheckRow {
  const salaryDifference = roundMoney(input.employee.periodComplete.salary - input.salaryBreakdown);
  const salaryComplementDifference = roundMoney(input.employee.periodComplete.salaryComplement - input.salaryComplementBreakdown);
  const extraSalaryDifference = roundMoney(input.employee.periodComplete.extraSalary - input.extraSalaryBreakdown);
  const worst = [salaryDifference, salaryComplementDifference, extraSalaryDifference].reduce(
    (max, value) => Math.max(max, Math.abs(value)),
    0,
  );

  return {
    employeeNumber: input.employee.employeeNumber,
    sex: input.employee.sex,
    position: input.employee.position,
    category: input.employee.category,
    workplace: input.employee.workplace,
    salaryPeriod: input.employee.periodComplete.salary,
    salaryBreakdown: input.salaryBreakdown,
    salaryDifference,
    salaryComplementPeriod: input.employee.periodComplete.salaryComplement,
    salaryComplementBreakdown: input.salaryComplementBreakdown,
    salaryComplementDifference,
    extraSalaryPeriod: input.employee.periodComplete.extraSalary,
    extraSalaryBreakdown: input.extraSalaryBreakdown,
    extraSalaryDifference,
    status: statusFromDifference(worst),
    detail: "Comparación interna entre columnas de periodo completo y suma de conceptos del Registro.",
  };
}

export async function parseRegistroRetributivo(input: Buffer | ArrayBuffer | Uint8Array): Promise<RegistroParseResult> {
  const workbook = XLSX.read(input, {
    type: "buffer",
    cellDates: true,
    raw: true,
  });
  const sheetName = workbook.SheetNames.find((name) => normalizeComparableText(name) === "empleados") ?? workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    throw new Error("No se encontro ninguna hoja legible en el Registro Retributivo.");
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: undefined, blankrows: true }) as unknown[][];
  const rangeStartRow = sheet["!ref"] ? XLSX.utils.decode_range(sheet["!ref"]).s.r : 0;
  const { groupRowIndex, subheaderRowIndex, firstDataRowIndex } = findHeaderRows(rows);
  const headers = buildHeaders(sheet, rows, groupRowIndex, subheaderRowIndex);
  const warnings: string[] = [];

  const employee = findColumn(headers, byGroupAndSub("empleado", "id rh"));
  const sex = findColumn(headers, byGroupAndSub("empleado", "sexo"));
  const nif = findColumn(headers, (header) => header.subheader.includes("nif") || header.subheader.includes("dni"));
  const workerName = findColumn(headers, (header) => /\b(nombre|trabajador|persona)\b/.test(header.subheader));
  const position = findColumn(headers, byGroupAndSub("puesto", "puesto"));
  const valuation = findColumn(headers, byGroupAndSub("valoracion del puesto", "valoracion retributiva"));
  const category = findColumn(headers, byGroupAndSub("categoria", "categoria"));
  const workplace = findColumn(headers, byGroupAndSub("centro de trabajo", "centro de trabajo"));
  const family = findColumn(headers, byGroupAndSub("familia puesto", "familia puesto"));
  const personalCategoryGroup = findColumn(headers, byGroupAndSub("agrupacion categoria personal", "agrup cat personal"));
  const gt = findColumn(headers, (header) => header.combined.includes("grupo de cotizacion") && !header.combined.endsWith("inicio"));
  const seniorityDate = findColumn(headers, (header) => header.combined.includes("antiguedad"));

  const normalizedPlusSalary = findColumn(headers, byGroupAndSub("total retribuciones normalizadas + variables", "salario"));
  const normalizedPlusComplement = findColumn(headers, byGroupAndSub("total retribuciones normalizadas + variables", "c salarial"));
  const normalizedPlusExtra = findColumn(headers, byGroupAndSub("total retribuciones normalizadas + variables", "extrasalarial"));
  const normalizedSalary = findColumn(headers, byGroupAndSub("retribuciones normalizadas", "salario"));
  const normalizedComplement = findColumn(headers, byGroupAndSub("retribuciones normalizadas", "c salarial"));
  const normalizedExtra = findColumn(headers, byGroupAndSub("retribuciones normalizadas", "extrasalarial"));
  const periodSalary = findColumn(headers, byGroupAndSub("retribuciones periodo completo", "salario"));
  const periodSalaryDiff = headers[headers.findIndex((header) => header === periodSalary) + 1];
  const periodComplement = findColumn(headers, byGroupAndSub("retribuciones periodo completo", "c salarial"));
  const periodComplementDiff = headers[headers.findIndex((header) => header === periodComplement) + 1];
  const periodExtra = findColumn(headers, byGroupAndSub("retribuciones periodo completo", "extrasalarial"));
  const periodExtraDiff = headers[headers.findIndex((header) => header === periodExtra) + 1];
  const lastSalary = findColumn(headers, byGroupAndSub("retribuciones ultima situacion puesto convenio categoria", "salario"));
  const lastComplement = findColumn(headers, byGroupAndSub("retribuciones ultima situacion puesto convenio categoria", "c salarial"));
  const lastExtra = findColumn(headers, byGroupAndSub("retribuciones ultima situacion puesto convenio categoria", "extrasalarial"));
  const complementVariable = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "c salarial variable"));
  const extraVariable = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "extrasalarial variable"));
  const salaryPpe = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "salario ppe"));
  const complementPpe = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "c salarial ppe"));
  const salaryIt = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "salario it"));
  const complementIt = findColumn(headers, byGroupAndSub("retribucion no normalizada del periodo", "c salarial it"));

  const required = [
    ["ID RH", employee],
    ["Sexo", sex],
    ["Periodo completo salario", periodSalary],
    ["Periodo completo C. Salarial", periodComplement],
    ["Periodo completo extrasalarial", periodExtra],
  ] as const;
  required.forEach(([label, found]) => {
    if (!found) {
      warnings.push(`No se detecto columna obligatoria: ${label}.`);
    }
  });
  if (!employee) {
    throw new Error("No se detecto la columna ID RH / matricula en la hoja Empleados.");
  }

  const conceptHeaders = {
    salary: blockConceptHeaders(headers, "salary"),
    salaryComplement: blockConceptHeaders(headers, "salaryComplement"),
    extraSalary: blockConceptHeaders(headers, "extraSalary"),
  } satisfies Record<ConceptBlockKey, readonly HeaderInfo[]>;
  const conceptCodes: AvailableConceptCodes = {
    salary: conceptHeaders.salary.map((header) => header.subheaderRaw),
    salaryComplement: conceptHeaders.salaryComplement.map((header) => header.subheaderRaw),
    extraSalary: conceptHeaders.extraSalary.map((header) => header.subheaderRaw),
  };
  BLOCKS.forEach((block) => {
    if (!conceptCodes[block.blockKey].length) {
      warnings.push(`No se detectaron codigos reales en ${block.header}.`);
    }
  });

  const columnMap: RegistroColumnMap = {
    employeeNumber: employee.letter,
    sex: sex?.letter,
    workerName: workerName?.letter,
    nif: nif?.letter,
    workplace: workplace?.letter,
    professionalGroup: category?.letter,
    position: position?.letter,
    valuation: valuation?.letter,
    category: category?.letter,
    family: family?.letter,
    personalCategoryGroup: personalCategoryGroup?.letter,
    gt: gt?.letter,
    seniorityDate: seniorityDate?.letter,
    periodSalary: periodSalary?.letter,
    periodSalaryBreakdownDiff: periodSalaryDiff?.subheader === "dif con desglose" ? periodSalaryDiff.letter : undefined,
    periodSalaryComplement: periodComplement?.letter,
    periodSalaryComplementBreakdownDiff: periodComplementDiff?.subheader === "dif con desglose" ? periodComplementDiff.letter : undefined,
    periodExtraSalary: periodExtra?.letter,
    periodExtraSalaryBreakdownDiff: periodExtraDiff?.subheader === "dif con desglose" ? periodExtraDiff.letter : undefined,
  };

  const records: RegistroEmployee[] = [];
  const internalChecks: InternalExcelCheckRow[] = [];
  for (let rowIndex = firstDataRowIndex; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex] ?? [];
    const employeeNumber = normalizeEmployeeNumber(row[employee.col]);
    if (!employeeNumber) {
      continue;
    }

    const concepts: RegistroConceptAmount[] = [];
    for (const block of BLOCKS) {
      for (const header of conceptHeaders[block.blockKey]) {
        concepts.push({
          block: block.block,
          blockKey: block.blockKey,
          code: header.subheaderRaw,
          amount: moneyAt(row, header.col),
        });
      }
    }

    const normalizedPlusVariablesBase = {
      salary: moneyAt(row, normalizedPlusSalary?.col),
      salaryComplement: moneyAt(row, normalizedPlusComplement?.col),
      extraSalary: moneyAt(row, normalizedPlusExtra?.col),
    };
    const normalizedBase = {
      salary: moneyAt(row, normalizedSalary?.col),
      salaryComplement: moneyAt(row, normalizedComplement?.col),
      extraSalary: moneyAt(row, normalizedExtra?.col),
    };
    const periodBase = {
      salary: moneyAt(row, periodSalary?.col),
      salaryComplement: moneyAt(row, periodComplement?.col),
      extraSalary: moneyAt(row, periodExtra?.col),
    };
    const lastBase = {
      salary: moneyAt(row, lastSalary?.col),
      salaryComplement: moneyAt(row, lastComplement?.col),
      extraSalary: moneyAt(row, lastExtra?.col),
    };

    const record: RegistroEmployee = {
      sourceRow: rowIndex + 1,
      workerNif: normalizeNif(row[nif?.col ?? -1]) || undefined,
      workerName: textAt(row, workerName?.col),
      employeeNumber,
      sex: textAt(row, sex?.col),
      workplace: textAt(row, workplace?.col),
      professionalGroup: textAt(row, category?.col),
      position: textAt(row, position?.col),
      valuation: textAt(row, valuation?.col),
      category: textAt(row, category?.col),
      family: textAt(row, family?.col),
      personalCategoryGroup: textAt(row, personalCategoryGroup?.col),
      gt: textAt(row, gt?.col),
      seniorityDate: toIsoDate(textAt(row, seniorityDate?.col)),
      normalizedPlusVariables: { ...normalizedPlusVariablesBase, total: total(normalizedPlusVariablesBase) },
      normalized: { ...normalizedBase, total: total(normalizedBase) },
      periodComplete: { ...periodBase, total: total(periodBase) },
      lastSituation: { ...lastBase, total: total(lastBase) },
      nonNormalized: {
        salaryComplementVariable: moneyAt(row, complementVariable?.col),
        extraSalaryVariable: moneyAt(row, extraVariable?.col),
        salaryPpe: moneyAt(row, salaryPpe?.col),
        salaryComplementPpe: moneyAt(row, complementPpe?.col),
        salaryIt: moneyAt(row, salaryIt?.col),
        salaryComplementIt: moneyAt(row, complementIt?.col),
      },
      excelBreakdownDiffs: {
        salary: moneyAt(row, periodSalaryDiff?.subheader === "dif con desglose" ? periodSalaryDiff.col : undefined),
        salaryComplement: moneyAt(row, periodComplementDiff?.subheader === "dif con desglose" ? periodComplementDiff.col : undefined),
        extraSalary: moneyAt(row, periodExtraDiff?.subheader === "dif con desglose" ? periodExtraDiff.col : undefined),
      },
      concepts,
      raw: Object.fromEntries(headers.map((header) => [header.combined || header.letter, row[header.col]]).filter(([, value]) => value !== undefined)),
    };

    records.push(record);
    internalChecks.push(
      createInternalCheck({
        employee: record,
        salaryBreakdown: roundMoney(
          concepts.filter((concept) => concept.blockKey === "salary").reduce((sum, concept) => sum + concept.amount, 0),
        ),
        salaryComplementBreakdown: roundMoney(
          concepts.filter((concept) => concept.blockKey === "salaryComplement").reduce((sum, concept) => sum + concept.amount, 0),
        ),
        extraSalaryBreakdown: roundMoney(
          concepts.filter((concept) => concept.blockKey === "extraSalary").reduce((sum, concept) => sum + concept.amount, 0),
        ),
      }),
    );
  }

  return {
    sheetName,
    headerRows: {
      group: rangeStartRow + groupRowIndex + 1,
      subheader: rangeStartRow + subheaderRowIndex + 1,
      firstData: rangeStartRow + firstDataRowIndex + 1,
    },
    columnMap,
    conceptCodes,
    records,
    internalChecks,
    warnings,
  };
}
