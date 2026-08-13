import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import ExcelJS from "exceljs";
import * as XLSX from "xlsx";
import { describe, expect, test } from "vitest";
import { compareAnalysis } from "@/features/registro-retributivo/compare/comparePeople";
import { buildDefaultConceptMap } from "@/features/registro-retributivo/compare/conceptMapping";
import { exportAnalysisToWorkbook } from "@/features/registro-retributivo/export/exportExcel";
import { extractGroupedExcelSheets } from "@/features/registro-retributivo/groupings/groupedExcelSheets";
import { buildRegistroGroupingComparisons, enrichRegistroGroupingsWithPdf, median, REGISTRO_GROUPING_BASES } from "@/features/registro-retributivo/groupings/registroGroupings";
import { parsePayrollPdf } from "@/features/registro-retributivo/parsers/payrollPdfParser";
import { parseRegistroRetributivo } from "@/features/registro-retributivo/parsers/registroRetributivoParser";
import type { ConceptMappingRule, GroupingComparisonRow, PersonComparisonRow, PayrollRecord, RegistroEmployee } from "@/features/registro-retributivo/types";
import { formatEuro, parseSpanishMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText, normalizeEmployeeId, normalizeProfessionalGroup } from "@/features/registro-retributivo/utils/normalize";
import { parsePayrollPeriod, toIsoDate } from "@/features/registro-retributivo/utils/spanishDates";

const fuentes = path.resolve(process.cwd(), "..", "reg_retrib_cyc", "fuentes");
const hasSourceFixtures = existsSync(fuentes);
const registroFile = path.join(fuentes, "IBER_Registro_Retributivo_(heredado)_20260630100936.xlsx");

function emptyRegistroEmployee(overrides: Partial<RegistroEmployee>): RegistroEmployee {
  return {
    sourceRow: 1,
    employeeNumber: "10048",
    normalizedPlusVariables: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
    normalized: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
    periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
    lastSituation: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
    nonNormalized: {
      salaryComplementVariable: 0,
      extraSalaryVariable: 0,
      salaryPpe: 0,
      salaryComplementPpe: 0,
      salaryIt: 0,
      salaryComplementIt: 0,
    },
    excelBreakdownDiffs: { salary: 0, salaryComplement: 0, extraSalary: 0 },
    concepts: [],
    raw: {},
    ...overrides,
  };
}

function personRow(overrides: Partial<PersonComparisonRow> & Pick<PersonComparisonRow, "employeeNumber">): PersonComparisonRow {
  return {
    salaryRegistro: 0,
    salaryPdf: 0,
    salaryDifference: 0,
    salaryComplementRegistro: 0,
    salaryComplementPdf: 0,
    salaryComplementDifference: 0,
    extraSalaryRegistro: 0,
    extraSalaryPdf: 0,
    extraSalaryDifference: 0,
    registroTotal: 0,
    pdfTotal: 0,
    totalDifference: 0,
    pdfControlTotalDevengado: 0,
    payrollCount: 1,
    unmappedConceptsCount: 0,
    status: "OK",
    detail: "",
    periods: [],
    files: [],
    ...overrides,
  };
}

function testRule(rule: Partial<ConceptMappingRule> & Pick<ConceptMappingRule, "pdfConcept" | "block" | "blockKey" | "status">) {
  return {
    normalizedPdfConcept: normalizeComparableText(rule.pdfConcept),
    ...rule,
  } as ConceptMappingRule;
}

describe.skipIf(!hasSourceFixtures)("source parity: money utilities", () => {
  test("parses Spanish money formats", () => {
    expect(parseSpanishMoney("1.234,56")).toBe(1234.56);
    expect(parseSpanishMoney("-135,06")).toBe(-135.06);
    expect(parseSpanishMoney("")).toBeUndefined();
  });

  test("formats euro values in Spanish style", () => {
    expect(formatEuro(1234.5)).toContain("1.234,50");
  });
});

describe.skipIf(!hasSourceFixtures)("normalization utilities", () => {
  test("normalizes accents, casing and duplicated whitespace", () => {
    expect(normalizeComparableText("  MARÍA   José  ")).toBe("maria jose");
  });

  test("normalizes employee ids without numeric conversion", () => {
    expect(normalizeEmployeeId(" 10074 ")).toBe("10074");
    expect(normalizeEmployeeId("bc6")).toBe("BC6");
    expect(normalizeEmployeeId(" 10 074 ")).toBe("10074");
    expect(normalizeEmployeeId(" 00123 ")).toBe("00123");
  });

  test("normalizes professional group ordinal variants", () => {
    expect(normalizeProfessionalGroup("Grupo IV - Nivel V - Oficial de 1ª")).toBe(
      normalizeProfessionalGroup("grupo iv nivel v oficial de primera"),
    );
  });
});

describe.skipIf(!hasSourceFixtures)("Spanish date utilities", () => {
  test("parses payroll period labels", () => {
    const period = parsePayrollPeriod("Del 1 al 31 Enero 2025");
    expect(period).toEqual({
      label: "Del 1 al 31 Enero 2025",
      start: "2025-01-01",
      end: "2025-01-31",
    });
  });

  test("normalizes dd/mm/yyyy and ISO dates", () => {
    expect(toIsoDate("01/02/1987")).toBe("1987-02-01");
    expect(toIsoDate("1987-02-01")).toBe("1987-02-01");
  });
});

describe.skipIf(!hasSourceFixtures)("Registro Retributivo parser", () => {
  test("detects Empleados headers by real labels and extracts concept codes dynamically", async () => {
    const result = await parseRegistroRetributivo(readFileSync(registroFile));

    expect(result.sheetName).toBe("Empleados");
    expect(result.headerRows).toEqual({ group: 11, subheader: 12, firstData: 13 });
    expect(result.columnMap.employeeNumber).toBe("A");
    expect(result.columnMap.sex).toBe("E");
    expect(result.columnMap.periodSalary).toBe("R");
    expect(result.columnMap.periodSalaryBreakdownDiff).toBe("S");
    expect(result.conceptCodes.salary).toContain("SSP_SAL_BASE");
    expect(result.conceptCodes.salaryComplement).toContain("SSP_ANTIGUEDAD");
    expect(result.conceptCodes.extraSalary).toContain("CYC_SEG_SALUD");
    expect(result.records.length).toBeGreaterThan(0);
    expect(result.records.every((row) => Boolean(row.employeeNumber))).toBe(true);
    expect(result.records.some((row) => row.concepts.some((concept) => concept.block === "Salario" && concept.code === "SSP_SAL_BASE"))).toBe(true);
    expect(result.internalChecks.length).toBeGreaterThan(0);
    expect(result.internalChecks.every((row) => Boolean(row.employeeNumber))).toBe(true);
  });
});

describe.skipIf(!hasSourceFixtures)("Registro grouped sheets", () => {
  test("calculates median robustly", () => {
    expect(median([3, 1, 2])).toBe(2);
    expect(median([10, 1, 5, 7])).toBe(6);
    expect(median([undefined, Number.NaN, "x"])).toBe(0);
  });

  test("extracts grouped Excel sheets as original visible table data", () => {
    const result = extractGroupedExcelSheets(readFileSync(registroFile));
    const puesto = result.find((sheet) => sheet.sheetName === "Análisis por puesto");

    expect(result.map((sheet) => sheet.sheetName)).toEqual([
      "Análisis por puesto",
      "Análisis por valoración puesto",
      "Análisis por categoría",
      "Análisis por familia de puesto",
      "Agrupación Categoría Personal",
    ]);
    expect(puesto?.status).toBe("ready");
    expect(puesto?.visibleRowCount).toBeGreaterThan(20);
    expect(puesto?.visibleColumnCount).toBeGreaterThan(50);
    expect(puesto?.columns.map((column) => column.label)).toContain("Puesto");
    expect(puesto?.columns.map((column) => column.label)).toContain("Total personas · Mujeres");
    expect(puesto?.columns.map((column) => column.label)).toContain("Total retribuciones normalizadas + variables · Salario · Media · Mujeres");
    const groupedHeaderCells = puesto?.groupedHeaders?.flat() ?? [];
    expect(groupedHeaderCells.find((cell) => cell.label === "TOTAL PERSONAS")?.colSpan).toBe(3);
    expect(groupedHeaderCells.find((cell) => cell.label === "TOTAL RETRIBUCIONES NORMALIZADAS + VARIABLES")?.colSpan).toBeGreaterThan(10);
    expect(groupedHeaderCells.find((cell) => cell.label === "RETRIBUCIONES NORMALIZADAS")?.colSpan).toBeGreaterThan(10);
    expect(groupedHeaderCells.find((cell) => cell.label === "RETRIBUCIONES PERIODO COMPLETO")?.colSpan).toBeGreaterThan(10);
    expect(groupedHeaderCells.some((cell) => cell.path === "TOTAL RETRIBUCIONES NORMALIZADAS + VARIABLES > Salario > MEDIA > MUJERES")).toBe(true);
    expect(JSON.stringify(puesto?.rows[0])).toContain("Administrativa/o Fuentes Públicas");
    expect(JSON.stringify(puesto?.rows[0])).not.toContain("REGISTRO RETRIBUTIVO");
  });

  test("extracts grouped Excel sheets with a generic fallback when standard headers vary", () => {
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([
      ["REGISTRO RETRIBUTIVO (HEREDADO)"],
      [],
      ["PERÍODO DE CÁLCULO", "2025"],
      [],
      ["Código", "Nombre", "Importe"],
      ["A1", "Grupo fallback", 123.45],
    ]);
    XLSX.utils.book_append_sheet(workbook, sheet, "Análisis por puesto");
    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }) as Buffer;

    const result = extractGroupedExcelSheets(buffer);
    const puesto = result[0];

    expect(puesto.status).toBe("ready");
    expect(puesto.columns.map((column) => column.label)).toEqual(["Código", "Nombre", "Importe"]);
    expect(puesto.rows[0]?.c1.display).toBe("Grupo fallback");
    expect(puesto.rows[0]?.c2.value).toBe(123.45);
  });

  test("detects the five grouped sheets and recalculates the real Excel from Empleados", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const result = buildRegistroGroupingComparisons(readFileSync(registroFile), registro.records, {
      tolerance: 1,
      reviewThreshold: 1,
      incidentThreshold: 50,
    });

    expect(result.detectedSheets.map((sheet) => sheet.sourceSheet)).toEqual([
      "Análisis por puesto",
      "Análisis por valoración puesto",
      "Análisis por categoría",
      "Análisis por familia de puesto",
      "Agrupación Categoría Personal",
    ]);
    expect(result.groupCount).toBe(79);
    expect(new Set(result.rows.map((row) => row.registroBase))).toEqual(new Set(REGISTRO_GROUPING_BASES.map((base) => base.label)));
    expect(result.rows.length).toBeGreaterThan(4000);
    expect(result.rows.filter((row) => row.status !== "OK")).toEqual([]);
    expect(result.warnings).toEqual([]);

    const undefinedValuation = result.rows.find(
      (row) =>
        row.sourceSheet === "Análisis por valoración puesto" &&
        row.groupName === "[SIN DEFINIR]" &&
        row.registroBase === "RETRIBUCIONES (PERIODO COMPLETO)" &&
        row.block === "Salario" &&
        row.metric === "Media" &&
        row.segment === "Mujeres",
    );
    expect(undefinedValuation?.peopleCount).toBe(70);
    expect(undefinedValuation?.womenCount).toBe(30);
    expect(undefinedValuation?.menCount).toBe(40);

    const zeroMenDifference = result.rows.find(
      (row) =>
        row.sourceSheet === "Análisis por puesto" &&
        row.groupId === "ATSACYC" &&
        row.registroBase === "TOTAL RETRIBUCIONES NORMALIZADAS + VARIABLES" &&
        row.block === "Salario" &&
        row.metric === "Media" &&
        row.segment === "Diferencia %",
    );
    expect(zeroMenDifference?.registroSheetValue).toBe(0);
    expect(zeroMenDifference?.registroRecalculatedValue).toBe(0);
  });

  test("enriches grouped rows with PDF matched-only period-complete comparisons", () => {
    const employees = [
      emptyRegistroEmployee({ employeeNumber: "E1", sex: "Mujer", raw: { "puesto id puesto": "G1", "puesto puesto": "Grupo 1" } }),
      emptyRegistroEmployee({ employeeNumber: "E2", sex: "Hombre", raw: { "puesto id puesto": "G1", "puesto puesto": "Grupo 1" } }),
      emptyRegistroEmployee({ employeeNumber: "E3", sex: "Mujer", raw: { "puesto id puesto": "G1", "puesto puesto": "Grupo 1" } }),
    ];
    const people = [
      personRow({ employeeNumber: "E1", salaryRegistro: 100, salaryPdf: 130, salaryDifference: 30 }),
      personRow({ employeeNumber: "E2", salaryRegistro: 200, salaryPdf: 200, salaryDifference: 0 }),
      personRow({ employeeNumber: "E3", salaryRegistro: 999, salaryPdf: 0, salaryDifference: -999, status: "Sin PDF" }),
      personRow({ employeeNumber: "E4", salaryRegistro: 0, salaryPdf: 700, salaryDifference: 700, status: "Sin Registro" }),
    ];
    const baseRow: GroupingComparisonRow = {
      sourceSheet: "Análisis por puesto",
      groupingType: "puesto",
      groupId: "G1",
      groupName: "Grupo 1",
      registroBase: "RETRIBUCIONES (PERIODO COMPLETO)",
      block: "Salario",
      metric: "Media",
      segment: "Mujeres",
      registroSheetValue: 100,
      registroRecalculatedValue: 399.5,
      excelDifference: 0,
      peopleCount: 3,
      womenCount: 2,
      menCount: 1,
      status: "OK",
      detail: "Excel OK.",
    };

    const enriched = enrichRegistroGroupingsWithPdf(
      [
        baseRow,
        { ...baseRow, segment: "Diferencia %", registroSheetValue: 0.5, registroRecalculatedValue: 0.5 },
        { ...baseRow, registroBase: "RETRIBUCIONES NORMALIZADAS" },
      ],
      employees,
      people,
      people.filter((row) => row.status === "Sin Registro"),
      { tolerance: 1, reviewThreshold: 1, incidentThreshold: 50 },
    );

    const women = enriched[0];
    expect(women.pdfRegistroRecalculatedValue).toBe(100);
    expect(women.pdfRecalculatedValue).toBe(130);
    expect(women.pdfDifference).toBe(30);
    expect(women.pdfStatus).toBe("Revisar");
    expect(women.matchedPeopleCount).toBe(2);
    expect(women.matchedWomenCount).toBe(1);
    expect(women.matchedMenCount).toBe(1);
    expect(women.excludedPdfWithoutRegistroCount).toBe(1);

    const percentage = enriched[1];
    expect(percentage.pdfRegistroRecalculatedValue).toBe(0.5);
    expect(percentage.pdfRecalculatedValue).toBe(0.35);
    expect(percentage.pdfDifference).toBeCloseTo(-0.15);

    const normalized = enriched[2];
    expect(normalized.pdfStatus).toBe("No aplica");
    expect(normalized.pdfRecalculatedValue).toBeUndefined();
    expect(normalized.pdfDifference).toBeUndefined();
  });
});

describe.skipIf(!hasSourceFixtures)("Payroll PDF parser", () => {
  test("extracts payroll concepts by employee number and classifies non-comparable lines conservatively", async () => {
    const result = await parsePayrollPdf(
      readFileSync(path.join(fuentes, "RECIBOS_IBER_2025", "PDF_ENERO.pdf")),
      "PDF_ENERO.pdf",
    );
    const allConcepts = result.records.flatMap((record) => record.concepts);

    expect(result.records.length).toBeGreaterThan(60);
    expect(result.records.every((record) => Boolean(record.employeeNumber))).toBe(true);
    expect(allConcepts.find((concept) => concept.name === "Salario Base")?.type).toBe("devengo");
    expect(allConcepts.find((concept) => normalizeComparableText(concept.name).includes("retencion a cuenta"))?.type).toBe("retencion");
    expect(allConcepts.find((concept) => normalizeComparableText(concept.name).includes("cotizacion regimen"))?.type).toBe("cotizacion");
    expect(allConcepts.find((concept) => normalizeComparableText(concept.name).includes("coste empresa"))?.type).toBe("coste_empresa");
    expect(allConcepts.find((concept) => normalizeComparableText(concept.name).includes("especie seguro"))?.type).toBe("especie");
    expect(allConcepts.find((concept) => normalizeComparableText(concept.name) === "seguro medico mensual")?.type).toBe("informativo");
    expect(allConcepts.map((concept) => normalizeComparableText(concept.name))).not.toContain(
      "suministrados en periodo de liquidacion",
    );
    expect(JSON.stringify(result.records)).not.toMatch(/ES\d{2}\s?\d{4}|IBAN|0128\s?8700/i);
  });
});

describe.skipIf(!hasSourceFixtures)("concept mapping", () => {
  test("builds default mapping only with concept codes present in the loaded Excel", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const map = buildDefaultConceptMap(registro.conceptCodes);

    expect(map.find((rule) => rule.pdfConcept === "Salario Base")).toMatchObject({
      status: "Incluido",
      block: "Salario",
      registroCode: "SSP_SAL_BASE",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "retencion a cuenta del irpf")?.status).toBe("Ignorado");
    expect(map.every((rule) => rule.status !== "Incluido" || rule.registroCode)).toBe(true);
    expect(map.every((rule) => rule.status !== "Incluido" || Boolean(rule.registroCode && registro.conceptCodes[rule.blockKey].includes(rule.registroCode)))).toBe(true);
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "seguro medico mensual")).toMatchObject({
      status: "Ignorado",
      includedInComparison: false,
      sourceType: "informativo",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "complemento salario base organigrama")).toMatchObject({
      status: "Incluido",
      block: "C. Salarial",
      blockKey: "salaryComplement",
      registroCode: "CSP_I_COMP_SB_ORG",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "prestacion de enfermedad al 75")).toMatchObject({
      status: "Incluido",
      block: "Salario",
      blockKey: "salary",
      registroCode: "SSP_PREST_ENF_75",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "prestacion teorica maternidad")).toMatchObject({
      status: "Pendiente revisión",
      block: "C. Salarial",
      blockKey: "salaryComplement",
      registroCode: "CSP_I_AJUSTE_MATERNIDAD",
      includedInComparison: false,
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "kilometraje con retencion")).toMatchObject({
      status: "Incluido",
      registroCode: "SSP_KM_CON_RETEN",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "kilometraje sin retencion")).toMatchObject({
      status: "Incluido",
      registroCode: "SSP_KM_SIN_RETEN",
    });
    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "abono teletrabajo")).toMatchObject({
      status: "Incluido",
      includedInComparison: true,
      active: true,
    });
  });

  test("resolves rule block from the Excel concept code location instead of hardcoded defaults", () => {
    const map = buildDefaultConceptMap({
      salary: [],
      salaryComplement: ["CSP_I_PAGA_25_ANYOS"],
      extraSalary: [],
    });

    expect(map.find((rule) => normalizeComparableText(rule.pdfConcept) === "paga 25 anos")).toMatchObject({
      status: "Incluido",
      block: "C. Salarial",
      blockKey: "salaryComplement",
      registroCode: "CSP_I_PAGA_25_ANYOS",
    });
  });

  test("normalizes legacy rules with defaults and resolves aliases", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 208, total: 208 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 208 }],
    });
    const map = buildDefaultConceptMap({
      salary: [],
      salaryComplement: [],
      extraSalary: ["CSP_I_COMP_TELETR_COVID"],
    });
    const telework = map.find((rule) => normalizeComparableText(rule.pdfConcept) === "abono teletrabajo");

    expect(telework).toMatchObject({
      status: "Incluido",
      registroCode: "CSP_I_COMP_TELETR_COVID",
      block: "Extrasalarial",
      aliases: ["Teletrabajo", "Compensación teletrabajo"],
      active: true,
      includedInComparison: true,
      includedInAdjustedComparison: true,
    });

    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [{ name: "Teletrabajo", amount: 208, type: "devengo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: map,
      },
    );

    expect(result.concepts.find((row) => row.registroCode === "CSP_I_COMP_TELETR_COVID")).toMatchObject({
      pdfConcept: "Teletrabajo",
      pdfAmount: 208,
      status: "OK",
    });
  });

  test("does not let inactive rules affect the analysis", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 208, total: 208 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 208 }],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [{ name: "Abono teletrabajo", amount: 208, type: "devengo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Abono teletrabajo",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CSP_I_COMP_TELETR_COVID",
            status: "Incluido",
            active: false,
          } as Partial<ConceptMappingRule> & Pick<ConceptMappingRule, "pdfConcept" | "block" | "blockKey" | "status">),
        ],
      },
    );

    expect(result.concepts.find((row) => row.registroCode === "CSP_I_COMP_TELETR_COVID")).toBeUndefined();
    expect(result.people.find((row) => row.employeeNumber === "10048")?.totalDifference).toBe(0);
    expect(result.unmappedConcepts.find((row) => row.pdfConcept === "Abono teletrabajo")).toBeUndefined();
  });
});

describe.skipIf(!hasSourceFixtures)("comparison engine", () => {
  test("empty excludedEmployeeIds does not change comparison results", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "E1",
      workerName: "PERSONA TEST",
      periodComplete: { salary: 100, salaryComplement: 0, extraSalary: 0, total: 100 },
      concepts: [{ block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 100 }],
    });
    const payrollRecords: PayrollRecord[] = [
      {
        sourceFile: "PDF_TEST.pdf",
        periodLabel: "Enero 2025",
        workerName: "PERSONA TEST",
        employeeNumber: "E1",
        concepts: [{ name: "Salario Test", amount: 100, type: "devengo" }],
      },
    ];
    const options = {
      tolerance: 1,
      enableAI: false,
      conceptMap: [testRule({ pdfConcept: "Salario Test", block: "Salario", blockKey: "salary", registroCode: "SAL_TEST", status: "Incluido" })],
    };

    const baseline = await compareAnalysis(payrollRecords, [employee], options);
    const withEmptyExclusions = await compareAnalysis(payrollRecords, [employee], { ...options, excludedEmployeeIds: [] });

    expect(withEmptyExclusions.people).toEqual(baseline.people);
    expect(withEmptyExclusions.concepts).toEqual(baseline.concepts);
    expect(withEmptyExclusions.summary).toMatchObject({
      uniquePeople: baseline.summary.uniquePeople,
      matchedPeople: baseline.summary.matchedPeople,
      totalGlobalDifference: baseline.summary.totalGlobalDifference,
    });
    expect(withEmptyExclusions.excludedEmployeeIdsApplied).toEqual([]);
  });

  test("exclusions remove PDF-only, Registro-only and matched rows before metrics", async () => {
    const matched = emptyRegistroEmployee({
      employeeNumber: "MATCH1",
      workerName: "MATCHED PERSON",
      periodComplete: { salary: 100, salaryComplement: 0, extraSalary: 0, total: 100 },
      concepts: [{ block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 100 }],
    });
    const registroOnly = emptyRegistroEmployee({
      employeeNumber: "REG1",
      workerName: "REGISTRO ONLY",
      periodComplete: { salary: 300, salaryComplement: 0, extraSalary: 0, total: 300 },
      concepts: [{ block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 300 }],
    });
    const kept = emptyRegistroEmployee({
      employeeNumber: "KEEP1",
      workerName: "KEEP PERSON",
      periodComplete: { salary: 200, salaryComplement: 0, extraSalary: 0, total: 200 },
      concepts: [{ block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 200 }],
    });
    const payrollRecords: PayrollRecord[] = [
      {
        sourceFile: "PDF_TEST.pdf",
        periodLabel: "Enero 2025",
        workerName: "MATCHED PERSON",
        employeeNumber: " match 1 ",
        concepts: [{ name: "Salario Test", amount: 120, type: "devengo" }],
      },
      {
        sourceFile: "PDF_TEST.pdf",
        periodLabel: "Enero 2025",
        workerName: "PDF ONLY",
        employeeNumber: "bc6",
        concepts: [{ name: "Salario Test", amount: 500, type: "devengo" }],
      },
      {
        sourceFile: "PDF_TEST.pdf",
        periodLabel: "Enero 2025",
        workerName: "KEEP PERSON",
        employeeNumber: "KEEP1",
        concepts: [{ name: "Salario Test", amount: 210, type: "devengo" }],
      },
    ];
    const result = await compareAnalysis(payrollRecords, [matched, registroOnly, kept], {
      tolerance: 1,
      enableAI: false,
      excludedEmployeeIds: ["MATCH1", "BC6", " REG 1 "],
      conceptMap: [testRule({ pdfConcept: "Salario Test", block: "Salario", blockKey: "salary", registroCode: "SAL_TEST", status: "Incluido" })],
    });

    expect(result.excludedEmployeeIdsApplied).toEqual(["MATCH1", "BC6", "REG1"]);
    expect(result.people.map((row) => row.employeeNumber)).toEqual(["KEEP1"]);
    expect(result.concepts.map((row) => row.employeeNumber)).toEqual(["KEEP1"]);
    expect(result.pdfWithoutRegistro).toEqual([]);
    expect(result.registroWithoutPdf).toEqual([]);
    expect(result.unmappedConcepts).toEqual([]);
    expect(result.summary).toMatchObject({
      uniquePeople: 1,
      matchedPeople: 1,
      peopleInPdfWithoutRegistro: 0,
      peopleInRegistroWithoutPdf: 0,
      matchedGrossTotalDifference: 10,
      matchedAdjustedTotalDifference: 10,
      totalGlobalDifference: 10,
    });
  });

  test("uses employee number as key and calculates PDF totals from included mapped concepts", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerNif: "11111111H",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [
            { name: "Salario Base", amount: 1000, type: "devengo" },
            { name: "Antiguedad", amount: 200, type: "devengo" },
            { name: "Retención a Cuenta del IRPF", amount: 300, type: "retencion" },
            { name: "Concepto Raro", amount: 50, type: "unknown" },
          ],
          totalDevengado: 1550,
        },
      ],
      registro.records,
      {
        tolerance: 1,
        conceptMap: buildDefaultConceptMap(registro.conceptCodes),
        enableAI: false,
      },
    );

    const person = result.people.find((row) => row.employeeNumber === "10048");
    expect(person?.pdfTotal).toBe(1200);
    expect(person?.pdfControlTotalDevengado).toBe(1550);
    expect(person?.salaryPdf).toBe(1000);
    expect(person?.salaryComplementPdf).toBe(200);
    expect(person?.unmappedConceptsCount).toBe(1);
    expect(result.unmappedConcepts.find((row) => row.pdfConcept === "Concepto Raro")).toMatchObject({
      totalDetected: 50,
      peopleCount: 1,
      payrollCount: 1,
    });
    expect(result.normalizedVsReal.find((row) => row.employeeNumber === "10048")?.realPdf).toBe(1200);
  });

  test("builds internal Excel normalized variables checks from Registro employees", async () => {
    const result = await compareAnalysis(
      [],
      [
        emptyRegistroEmployee({
          employeeNumber: "OK1",
          workerName: "Persona OK",
          workplace: "Bilbao",
          position: "Analista",
          category: "Grupo A",
          normalizedPlusVariables: { salary: 1000, salaryComplement: 500, extraSalary: 120, total: 1620 },
          periodComplete: { salary: 1000, salaryComplement: 500, extraSalary: 120, total: 1620 },
        }),
        emptyRegistroEmployee({
          employeeNumber: "REV1",
          workerName: "Persona Revisar",
          workplace: "Madrid",
          position: "Consultor",
          category: "Grupo B",
          normalizedPlusVariables: { salary: 990, salaryComplement: 500, extraSalary: 120, total: 1610 },
          periodComplete: { salary: 1000, salaryComplement: 500, extraSalary: 120, total: 1620 },
        }),
        emptyRegistroEmployee({
          employeeNumber: "DIF1",
          workerName: "Persona Diferencia",
          workplace: "Sevilla",
          position: "Manager",
          category: "Grupo C",
          normalizedPlusVariables: { salary: 1000, salaryComplement: 500, extraSalary: 120, total: 1620 },
          periodComplete: { salary: 1200, salaryComplement: 500, extraSalary: 120, total: 1820 },
        }),
      ],
      {
        tolerance: 1,
        conceptMap: [],
        enableAI: false,
      },
    );

    const checks = result.internalExcelNormalizedVariablesChecks ?? [];
    expect(checks.map((row) => row.employeeNumber)).toEqual(["DIF1", "OK1", "REV1"]);
    expect(checks.find((row) => row.employeeNumber === "OK1")).toMatchObject({
      person: "Persona OK",
      totalPeriod: 1620,
      totalNormalizedPlusVariables: 1620,
      totalDifference: 0,
      status: "OK",
    });
    expect(checks.find((row) => row.employeeNumber === "REV1")).toMatchObject({
      salaryDifference: 10,
      totalDifference: 10,
      status: "Revisar",
    });
    expect(checks.find((row) => row.employeeNumber === "DIF1")).toMatchObject({
      salaryDifference: 200,
      totalDifference: 200,
      status: "Diferencia",
    });
  });

  test("deduplicates informative health insurance when a real devengo exists in the same receipt only", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 240, total: 240 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CYC_SEG_SALUD", amount: 240 }],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_ENERO.pdf",
          pageNumber: 1,
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [
            { name: "Seguro Médico", amount: 120, type: "devengo" },
            { name: "Seguro Médico mensual", amount: 120, type: "informativo" },
          ],
        },
        {
          sourceFile: "PDF_FEBRERO.pdf",
          pageNumber: 1,
          periodLabel: "Del 1 al 28 Febrero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [
            { name: "Seguro Médico", amount: 120, type: "devengo" },
            { name: "Seguro Médico mensual", amount: 120, type: "informativo" },
          ],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Seguro Médico",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CYC_SEG_SALUD",
            status: "Incluido",
            sourceType: "devengo",
            allowInformative: false,
            dedupePriority: "devengo",
            includedInComparison: true,
          } as Partial<ConceptMappingRule> & Pick<ConceptMappingRule, "pdfConcept" | "block" | "blockKey" | "status">),
          testRule({
            pdfConcept: "Seguro Médico mensual",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CYC_SEG_SALUD",
            status: "Incluido",
            sourceType: "informativo",
            allowInformative: true,
            dedupePriority: "informativo",
            includedInComparison: true,
          } as Partial<ConceptMappingRule> & Pick<ConceptMappingRule, "pdfConcept" | "block" | "blockKey" | "status">),
        ],
      },
    );

    const row = result.concepts.find((item) => item.registroCode === "CYC_SEG_SALUD");
    expect(row?.pdfAmount).toBe(240);
    expect(row?.pdfConcept).toContain("Seguro Médico");
    expect(result.ignoredConcepts.find((item) => item.pdfConcept === "Seguro Médico mensual")?.totalDetected).toBe(240);
  });

  test("allows explicitly mapped informative concepts when no real devengo exists", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 50, total: 50 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CYC_PLAN_PENSIONES_ORD", amount: 50 }],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_ENERO.pdf",
          pageNumber: 1,
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [{ name: "Plan de Pensiones Mensual", amount: 50, type: "informativo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Plan de Pensiones Mensual",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CYC_PLAN_PENSIONES_ORD",
            status: "Incluido",
            sourceType: "informativo",
            allowInformative: true,
            dedupePriority: "informativo",
            includedInComparison: true,
          } as Partial<ConceptMappingRule> & Pick<ConceptMappingRule, "pdfConcept" | "block" | "blockKey" | "status">),
        ],
      },
    );

    expect(result.concepts.find((item) => item.registroCode === "CYC_PLAN_PENSIONES_ORD")?.pdfAmount).toBe(50);
    expect(result.people.find((item) => item.employeeNumber === "10048")?.pdfTotal).toBe(50);
  });

  test("treats active legacy justified concepts as normal differences without adjusted discounts", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
      concepts: [
        { block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 0 },
        { block: "Extrasalarial", blockKey: "extraSalary", code: "ROUND_TEST", amount: 0 },
      ],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [
            { name: "Abono teletrabajo", amount: 208, type: "devengo" },
            { name: "Redondeo Test", amount: 0.05, type: "devengo" },
          ],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Abono teletrabajo",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CSP_I_COMP_TELETR_COVID",
            status: "Justificado",
            includedInComparison: true,
            includedInAdjustedComparison: false,
            active: true,
            reason: "Teletrabajo justificado por criterio configurable.",
          }),
          testRule({
            pdfConcept: "Redondeo Test",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "ROUND_TEST",
            status: "Incluido",
            includedInComparison: true,
          }),
        ],
      },
    );

    const person = result.people.find((row) => row.employeeNumber === "10048");
    const telework = result.concepts.find((row) => row.registroCode === "CSP_I_COMP_TELETR_COVID");

    expect(person?.totalDifference).toBeCloseTo(208.05, 2);
    expect(person?.grossTotalDifference).toBeCloseTo(208.05, 2);
    expect(person?.justifiedTotalAmount).toBe(0);
    expect(person?.adjustedTotalDifference).toBeCloseTo(208.05, 2);
    expect(person?.status).toBe("Diferencia");
    expect(person?.grossStatus).toBe("Diferencia");
    expect(person?.adjustedStatus).toBe("Diferencia");
    expect(person?.justifiedConceptsCount).toBe(0);
    expect(person?.justifiedConceptsSummary).toBe("");

    expect(telework).toMatchObject({
      difference: 208,
      grossDifference: 208,
      justifiedAmount: 0,
      adjustedDifference: 208,
      status: "Diferencia",
      grossStatus: "Diferencia",
      adjustedStatus: "Diferencia",
      isJustified: false,
    });
    expect(telework?.justificationReason).toBeUndefined();
  });

  test("treats negative legacy justified differences as normal differences", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "NEG01",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 100, total: 100 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 100 }],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "NEG01",
          concepts: [{ name: "Abono teletrabajo", amount: 50, type: "devengo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Abono teletrabajo",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CSP_I_COMP_TELETR_COVID",
            status: "Justificado",
            includedInComparison: true,
            includedInAdjustedComparison: false,
            active: true,
          }),
        ],
      },
    );

    const telework = result.concepts.find((row) => row.employeeNumber === "NEG01");
    expect(telework?.grossDifference).toBe(-50);
    expect(telework?.justifiedAmount).toBe(0);
    expect(telework?.adjustedDifference).toBe(-50);
    expect(result.people.find((row) => row.employeeNumber === "NEG01")?.adjustedTotalDifference).toBe(-50);
  });

  test("ignores disabled mapped concepts completely instead of reporting them as differences or pending", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "DIS01",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 },
      concepts: [{ block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 0 }],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "DIS01",
          concepts: [{ name: "Abono teletrabajo", amount: 208, type: "devengo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Abono teletrabajo",
            block: "Extrasalarial",
            blockKey: "extraSalary",
            registroCode: "CSP_I_COMP_TELETR_COVID",
            status: "Justificado",
            includedInComparison: false,
            active: false,
          }),
        ],
      },
    );

    const person = result.people.find((row) => row.employeeNumber === "DIS01");
    expect(person?.pdfTotal).toBe(0);
    expect(person?.totalDifference).toBe(0);
    expect(person?.status).toBe("OK");
    expect(result.concepts.find((row) => row.registroCode === "CSP_I_COMP_TELETR_COVID")).toBeUndefined();
    expect(result.unmappedConcepts.map((row) => row.pdfConcept)).not.toContain("Abono teletrabajo");
  });

  test("explains mostly compensated differences between retribution blocks", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "COMP01",
      periodComplete: { salary: 1000, salaryComplement: 1000, extraSalary: 0, total: 2000 },
      concepts: [
        { block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 1000 },
        { block: "C. Salarial", blockKey: "salaryComplement", code: "COMP_TEST", amount: 1000 },
      ],
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "COMP01",
          concepts: [
            { name: "Salario Test", amount: 1200, type: "devengo" },
            { name: "Complemento Test", amount: 800, type: "devengo" },
          ],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({
            pdfConcept: "Salario Test",
            block: "Salario",
            blockKey: "salary",
            registroCode: "SAL_TEST",
            status: "Incluido",
            includedInComparison: true,
          }),
          testRule({
            pdfConcept: "Complemento Test",
            block: "C. Salarial",
            blockKey: "salaryComplement",
            registroCode: "COMP_TEST",
            status: "Incluido",
            includedInComparison: true,
          }),
        ],
      },
    );

    expect(result.people.find((row) => row.employeeNumber === "COMP01")?.detail).toContain(
      "Diferencia principalmente compensada por reclasificacion entre bloques.",
    );
  });

  test("validates Registro vs PDF comparison on local receipts without identity assertions", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const payrollDir = path.join(fuentes, "RECIBOS_IBER_2025");
    const payrollRecords: PayrollRecord[] = [];
    for (const fileName of readdirSync(payrollDir).filter((file) => file.toLowerCase().endsWith(".pdf")).sort()) {
      const parsed = await parsePayrollPdf(readFileSync(path.join(payrollDir, fileName)), fileName);
      payrollRecords.push(...parsed.records);
    }
    const result = await compareAnalysis(payrollRecords, registro.records, {
      tolerance: 1,
      conceptMap: buildDefaultConceptMap(registro.conceptCodes),
      enableAI: false,
    });

    expect(result.people.length).toBeGreaterThan(0);
    expect(result.summary.uniquePeople).toBeGreaterThan(0);
    expect(result.summary.pdfsAnalyzed).toBeGreaterThan(0);
    expect(result.people.every((row) => Boolean(row.employeeNumber))).toBe(true);
    expect(result.people.every((row) => row.adjustedStatus === row.status)).toBe(true);
    expect(JSON.stringify(result)).not.toMatch(/ES\d{2}\s?\d{4}|IBAN/i);
    expect(result.unmappedConcepts.map((row) => normalizeComparableText(row.pdfConcept))).not.toContain("complemento salario base organigrama");
    expect(result.unmappedConcepts.map((row) => normalizeComparableText(row.pdfConcept))).not.toContain("prestacion de enfermedad al 75");
    expect(result.summary.totalGlobalDifference).toBe(result.summary.matchedTotalDifference);
    expect(result.summary.peopleInPdfWithoutRegistro).toBeGreaterThan(0);
    expect(result.summary.peopleInRegistroWithoutPdf).toBeGreaterThanOrEqual(0);
    expect(result.summary.conceptsPendingReview).toBeGreaterThanOrEqual(0);
    expect(result.summary.conceptsIgnored).toBeGreaterThan(0);
    expect(result.summary.conceptsNotIncluded).toBeGreaterThan(0);
    expect(result.summary.conceptsRealUnmapped).toBe(0);

    const maternity = result.unmappedConcepts.find((row) => normalizeComparableText(row.pdfConcept) === "prestacion teorica maternidad");
    expect(maternity).toBeUndefined();

    const fortyYears = result.unmappedConcepts.find((row) => normalizeComparableText(row.pdfConcept) === "paga 40 anos");
    expect(fortyYears).toMatchObject({
      decisionType: "Pendiente revision",
      includedInComparison: false,
      suggestedBlock: "C. Salarial",
    });
    expect(fortyYears?.suggestedRegistroCode).toBeUndefined();
    expect(fortyYears?.reason).toContain("No existe codigo exacto");

    const ignoredHealth = result.unmappedConcepts.find((row) => normalizeComparableText(row.pdfConcept) === "seguro medico mensual");
    expect(ignoredHealth).toBeUndefined();

    const pdfOnlyIds = [...new Set((result.pdfWithoutRegistro ?? []).map((row) => row.employeeNumber).filter(Boolean))];
    expect(pdfOnlyIds.length).toBe(result.summary.peopleInPdfWithoutRegistro);

    const filtered = await compareAnalysis(payrollRecords, registro.records, {
      tolerance: 1,
      conceptMap: buildDefaultConceptMap(registro.conceptCodes),
      enableAI: false,
      excludedEmployeeIds: pdfOnlyIds,
    });
    const filteredIds = new Set([
      ...filtered.people.map((row) => row.employeeNumber),
      ...filtered.concepts.map((row) => row.employeeNumber),
      ...(filtered.pdfWithoutRegistro ?? []).map((row) => row.employeeNumber),
      ...(filtered.registroWithoutPdf ?? []).map((row) => row.employeeNumber),
    ]);
    for (const employeeId of pdfOnlyIds) expect(filteredIds.has(employeeId)).toBe(false);
    expect(filtered.summary.peopleInPdfWithoutRegistro).toBe(0);
    expect(filtered.excludedEmployeeIdsApplied).toEqual(pdfOnlyIds);

    const workbook = await exportAnalysisToWorkbook(filtered);
    const serializedComparisons = JSON.stringify(
      ["Personas", "Conceptos", "PDF_sin_Registro", "Registro_sin_PDF", "Conceptos_no_incluidos", "Agrupaciones"].map(
        (sheetName) => workbook.getWorksheet(sheetName)?.model,
      ),
    );
    for (const employeeId of pdfOnlyIds) expect(serializedComparisons).not.toContain(employeeId);
    const criteriosModel = JSON.stringify(workbook.getWorksheet("Criterios")?.model);
    expect(criteriosModel).toContain("Exclusiones aplicadas");
    for (const employeeId of pdfOnlyIds) expect(criteriosModel).toContain(employeeId);
    expect(criteriosModel).toContain("Excluida manualmente desde Ajustes");
  }, 30_000);
});


describe.skipIf(!hasSourceFixtures)("Excel export", () => {
  test("creates professional workbook sheets, dashboard first, and excludes sensitive data", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const analysis = await compareAnalysis([], [registro.records[0]], {
      tolerance: 1,
      conceptMap: buildDefaultConceptMap(registro.conceptCodes),
      enableAI: false,
    });
    const workbook = await exportAnalysisToWorkbook(analysis, {
      registroFileName: "registro.xlsx",
      pdfFileCount: 12,
      exportedAt: "2026-07-07T10:00:00.000Z",
      aiEnabled: false,
      schemaVersion: 2,
    });

    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual([
      "Dashboard",
      "Resumen",
      "Personas",
      "Conceptos",
      "Conceptos_no_incluidos",
      "Normalizado_vs_Real",
      "PDF_sin_Registro",
      "Registro_sin_PDF",
      "Cuadre_Interno_Excel",
      "Agrupaciones",
      "Criterios",
    ]);
    expect(workbook.getWorksheet("Conceptos_sin_mapear")).toBeUndefined();
    expect(workbook.getWorksheet("Dashboard")?.getCell("B2").value).toBe("Comparativa Recibos vs Registro Retributivo");
    expect(workbook.getWorksheet("Dashboard")?.getCell("E4").value).toBe("Reg. Retrib.: registro.xlsx");
    expect(workbook.getWorksheet("Agrupaciones")?.getCell("A3").value).toBe("Este analisis no contiene datos de hojas agrupadas. Vuelve a analizar el Excel para visualizarlas.");
    workbook.worksheets.forEach((sheet) => {
      expect(sheet.views[0]?.state).toBe("frozen");
      expect(sheet.autoFilter).toBeTruthy();
    });
    const resumenValues = new Set(workbook.getWorksheet("Resumen")?.getColumn(2).values.map(String));
    expect(resumenValues.has("Conceptos sin mapear")).toBe(false);
    expect(resumenValues.has("Conceptos pendientes revision")).toBe(true);
    expect(resumenValues.has("Conceptos ignorados")).toBe(true);
    expect(resumenValues.has("Conceptos sin mapear reales")).toBe(true);
    expect(resumenValues.has("Importe pendiente de decision")).toBe(true);
    expect(
      [...(workbook.getWorksheet("Resumen")?.getColumn(4).values ?? [])].some(
        (value) => typeof value === "string" && value.includes("No incluido en diferencia matched"),
      ),
    ).toBe(true);
    expect(
      [...(workbook.getWorksheet("Dashboard")?.getColumn(8).values ?? [])].some(
        (value) => typeof value === "string" && value.includes("Recibo sin Reg. Retrib. se muestra separado"),
      ),
    ).toBe(true);
    expect(
      [...(workbook.getWorksheet("Dashboard")?.getColumn(8).values ?? [])].some(
        (value) => typeof value === "string" && value.includes("diferencia matched"),
      ),
    ).toBe(true);
    expect(workbook.getWorksheet("Conceptos_no_incluidos")?.getRow(1).values).toEqual([
      undefined,
      "Tipo decision",
      "Incluido en calculo",
      "Concepto Recibo",
      "Total detectado",
      "N personas",
      "N recibos",
      "Ejemplos matriculas",
      "Sugerencia bloque",
      "Sugerencia codigo Reg. Retrib.",
      "Accion recomendada",
      "Motivo",
    ]);
    const personHeaders = workbook.getWorksheet("Personas")?.getRow(1).values;
    const conceptHeaders = workbook.getWorksheet("Conceptos")?.getRow(1).values;
    expect(personHeaders).toContain("Causa probable");
    expect(personHeaders).toContain("Observaciones / detalle breve");
    expect(personHeaders).toContain("Dif. Total");
    expect(personHeaders).toContain("Estado");
    expect(personHeaders).not.toContain("Dif. total bruta");
    expect(personHeaders).not.toContain("Importe justificado");
    expect(personHeaders).not.toContain("Dif. total ajustada");
    expect(personHeaders).not.toContain("Estado bruto");
    expect(personHeaders).not.toContain("Estado ajustado");
    expect(conceptHeaders).toContain("Regla / detalle");
    expect(conceptHeaders).toContain("Diferencia");
    expect(conceptHeaders).toContain("Estado");
    expect(conceptHeaders).not.toContain("Dif. bruta");
    expect(conceptHeaders).not.toContain("Importe justificado");
    expect(conceptHeaders).not.toContain("Dif. ajustada");
    expect(conceptHeaders).not.toContain("Estado bruto");
    expect(conceptHeaders).not.toContain("Estado ajustado");
    expect(workbook.getWorksheet("Dashboard")?.model).toEqual(expect.objectContaining({ name: "Dashboard" }));
    expect(JSON.stringify(workbook.getWorksheet("Dashboard")?.model)).toContain("Diferencia total matched");
    expect(JSON.stringify(workbook.getWorksheet("Dashboard")?.model)).not.toContain("Diferencia ajustada matched");
    expect(JSON.stringify(workbook.getWorksheet("Criterios")?.model)).toContain("Conceptos desactivados");
    expect(JSON.stringify(workbook.getWorksheet("Criterios")?.model)).not.toContain("Conceptos justificados");
    expect(JSON.stringify(workbook.getWorksheet("Criterios")?.model)).not.toContain("includedInAdjustedComparison");
    expect(workbook.getWorksheet("Personas")?.getColumn(6).numFmt).toContain("EUR");

    const buffer = await workbook.xlsx.writeBuffer();
    const reloaded = new ExcelJS.Workbook();
    await reloaded.xlsx.load(buffer);
    const serialized = JSON.stringify(reloaded.model);
    expect(serialized).not.toMatch(/ES\d{2}\s?\d{4}\s?\d{4}/);
    expect(serialized).not.toContain("00397416E");
    expect(serialized).not.toContain("0128 8700");
    expect(serialized).not.toContain("payload");
  });

  test("adds current normalized concepts only to Criterios with neutral and historical notes", async () => {
    const analysis = await compareAnalysis([], [], { tolerance: 1, conceptMap: [], enableAI: false });
    const exportedAt = "2026-07-10T12:00:00.000Z";
    const normalizedConcepts = [
      {
        id: "normalized-1",
        year: 2026,
        name: "Dietas",
        amount: 10.5,
        comments: "Configuración actual",
        active: true,
        createdAt: "2026-07-01T10:00:00.000Z",
        updatedAt: "2026-07-10T12:00:00.000Z",
      },
    ];
    const baseline = await exportAnalysisToWorkbook(analysis, { exportedAt });
    const neutral = await exportAnalysisToWorkbook(analysis, { exportedAt, normalizedConcepts, exportOrigin: "active" });
    const historical = await exportAnalysisToWorkbook(analysis, { exportedAt, normalizedConcepts, exportOrigin: "history" });
    const neutralCriteria = JSON.stringify(neutral.getWorksheet("Criterios")?.model);
    const historicalCriteria = JSON.stringify(historical.getWorksheet("Criterios")?.model);

    expect(neutralCriteria).toContain("Conceptos normalizados configurados");
    expect(neutralCriteria).toContain("Configuración informativa vigente al generar este Excel. No se ha aplicado a los cálculos del análisis.");
    expect(neutralCriteria).toContain("Valor (€)");
    expect(neutralCriteria).toContain("Dietas");
    expect(neutralCriteria).toContain("Configuración actual");
    expect(neutralCriteria).not.toContain("no necesariamente a los existentes cuando se creó el análisis histórico");
    expect(historicalCriteria).toContain("Esta configuración corresponde a los ajustes actuales, no necesariamente a los existentes cuando se creó el análisis histórico.");

    ["Personas", "Conceptos", "Normalizado_vs_Real", "Cuadre_Interno_Excel", "Agrupaciones"].forEach((sheetName) => {
      expect(neutral.getWorksheet(sheetName)?.model).toEqual(baseline.getWorksheet(sheetName)?.model);
    });
  });

  test("exports Personas and Conceptos values without changing analysis amounts", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "E1",
      workerName: "PERSONA TEST",
      workplace: "Bilbao",
      position: "Tecnico",
      category: "A",
      periodComplete: { salary: 1000, salaryComplement: 200, extraSalary: 50, total: 1250 },
      concepts: [
        { block: "Salario", blockKey: "salary", code: "SAL_TEST", amount: 1000 },
        { block: "C. Salarial", blockKey: "salaryComplement", code: "COMP_TEST", amount: 200 },
      ],
    });
    const analysis = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "E1",
          concepts: [
            { name: "Salario Test", amount: 1000, type: "devengo" },
            { name: "Complemento Test", amount: 205, type: "devengo" },
          ],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        conceptMap: [
          testRule({ pdfConcept: "Salario Test", block: "Salario", blockKey: "salary", registroCode: "SAL_TEST", status: "Incluido", includedInComparison: true }),
          testRule({ pdfConcept: "Complemento Test", block: "C. Salarial", blockKey: "salaryComplement", registroCode: "COMP_TEST", status: "Incluido", includedInComparison: true }),
        ],
      },
    );
    const workbook = await exportAnalysisToWorkbook(analysis);
    const peopleSheet = workbook.getWorksheet("Personas");
    const conceptsSheet = workbook.getWorksheet("Conceptos");
    const personHeader = peopleSheet?.getRow(1).values as unknown[];
    const conceptHeader = conceptsSheet?.getRow(1).values as unknown[];
    const exportedPerson = peopleSheet?.getRow(2);
    const exportedConcept = Array.from({ length: (conceptsSheet?.rowCount ?? 1) - 1 }, (_, index) => conceptsSheet?.getRow(index + 2)).find(
      (row) => row?.getCell(conceptHeader.indexOf("Codigo Reg. Retrib.")).value === "COMP_TEST",
    );
    const sourcePerson = analysis.people.find((row) => row.employeeNumber === "E1");
    const sourceConcept = analysis.concepts.find((row) => row.registroCode === "COMP_TEST");

    expect(exportedPerson?.getCell(personHeader.indexOf("Total Reg. Retrib.")).value).toBe(sourcePerson?.registroTotal);
    expect(exportedPerson?.getCell(personHeader.indexOf("Total Recibo")).value).toBe(sourcePerson?.pdfTotal);
    expect(exportedPerson?.getCell(personHeader.indexOf("Dif. Total")).value).toBe(sourcePerson?.totalDifference);
    expect(exportedPerson?.getCell(personHeader.indexOf("Estado")).value).toBe(sourcePerson?.status);
    expect(exportedConcept?.getCell(conceptHeader.indexOf("Reg. Retrib.")).value).toBe(sourceConcept?.registroAmount);
    expect(exportedConcept?.getCell(conceptHeader.indexOf("Recibo")).value).toBe(sourceConcept?.pdfAmount);
    expect(exportedConcept?.getCell(conceptHeader.indexOf("Diferencia")).value).toBe(sourceConcept?.difference);
    expect(exportedConcept?.getCell(conceptHeader.indexOf("Estado")).value).toBe(sourceConcept?.status);
    expect((exportedConcept?.getCell(1).fill as { fgColor?: { argb?: string } }).fgColor?.argb).toBeTruthy();
  });

  test("exports Agrupaciones with original grouped Excel sheet sections", async () => {
    const analysis = await compareAnalysis([], [], {
      tolerance: 1,
      conceptMap: [],
      enableAI: false,
    });
    const workbook = await exportAnalysisToWorkbook({
      ...analysis,
      groupedExcelSheets: [
        {
          sheetName: "Análisis por puesto",
          status: "ready",
          columns: [
            { key: "c0", label: "Puesto", sourceColumn: "A", kind: "text" },
            { key: "c1", label: "Total personas · Mujeres", sourceColumn: "B", kind: "number" },
          ],
          rows: [
            {
              c0: { value: "Administrativo/a Técnico SACYC", display: "Administrativo/a Técnico SACYC", kind: "text" },
              c1: { value: 1, display: "1", kind: "number" },
            },
          ],
          visibleRowCount: 1,
          visibleColumnCount: 2,
        },
      ],
    });
    const sheet = workbook.getWorksheet("Agrupaciones");
    const serialized = JSON.stringify(sheet?.model);

    expect(sheet?.getCell("A1").value).toBe("Agrupaciones");
    expect(serialized).toContain("Análisis por puesto");
    expect(serialized).toContain("Administrativo/a Técnico SACYC");
    expect(serialized).toContain("Total personas · Mujeres");
    expect(serialized).not.toContain("Dif. Excel");
    expect(serialized).not.toContain("Dif. Recibo");
    expect(serialized).not.toContain("Estado Excel");
    expect(serialized).not.toContain("Estado Recibo");
    expect(serialized).not.toContain("Recalculado Empleados");
    expect(serialized).not.toContain("Recibo recalculado");
  });

  test("exports Cuadre Reg. internal Excel sheet with both submenu sections", async () => {
    const analysis = await compareAnalysis([], [], {
      tolerance: 1,
      conceptMap: [],
      enableAI: false,
    });
    const workbook = await exportAnalysisToWorkbook({
      ...analysis,
      internalExcelChecks: [
        {
          employeeNumber: "10048",
          salaryPeriod: 1000,
          salaryBreakdown: 1000,
          salaryDifference: 0,
          salaryComplementPeriod: 500,
          salaryComplementBreakdown: 500,
          salaryComplementDifference: 0,
          extraSalaryPeriod: 120,
          extraSalaryBreakdown: 120,
          extraSalaryDifference: 0,
          status: "OK",
          detail: "Cuadre correcto",
        },
      ],
      internalExcelNormalizedVariablesChecks: [
        {
          employeeNumber: "10048",
          person: "Persona OK",
          workplace: "Bilbao",
          position: "Analista",
          category: "Grupo A",
          salaryPeriod: 1000,
          salaryNormalizedPlusVariables: 990,
          salaryDifference: 10,
          salaryComplementPeriod: 500,
          salaryComplementNormalizedPlusVariables: 500,
          salaryComplementDifference: 0,
          extraSalaryPeriod: 120,
          extraSalaryNormalizedPlusVariables: 120,
          extraSalaryDifference: 0,
          totalPeriod: 1620,
          totalNormalizedPlusVariables: 1610,
          totalDifference: 10,
          status: "Revisar",
          detail: "Diferencia menor o igual a 50 EUR.",
        },
      ],
    });
    const sheet = workbook.getWorksheet("Cuadre_Interno_Excel");
    const serialized = JSON.stringify(sheet?.model);

    expect(sheet?.name).toBe("Cuadre_Interno_Excel");
    expect(serialized).toContain("Cuadre Reg.");
    expect(serialized).toContain("No norm. / Desglose");
    expect(serialized).toContain("No norm. / Norm. + variables");
    expect(serialized).toContain("Norm. + variables");
    expect(serialized).toContain("Persona OK");
  });

  test.skip("legacy Agrupaciones export with calculated grouped differences is removed", async () => {
    const registro = await parseRegistroRetributivo(readFileSync(registroFile));
    const groupingResult = buildRegistroGroupingComparisons(readFileSync(registroFile), registro.records, {
      tolerance: 1,
      reviewThreshold: 1,
      incidentThreshold: 50,
    });
    const analysis = await compareAnalysis([], [registro.records[0]], {
      tolerance: 1,
      conceptMap: buildDefaultConceptMap(registro.conceptCodes),
      enableAI: false,
    });
    const groupings = enrichRegistroGroupingsWithPdf(groupingResult.rows, registro.records, analysis.people, analysis.pdfWithoutRegistro, {
      tolerance: 1,
      reviewThreshold: 1,
      incidentThreshold: 50,
    });
    const workbook = await exportAnalysisToWorkbook({
      ...analysis,
      groupings,
      summary: { ...analysis.summary, groupingDifferences: groupings.filter((row) => row.status !== "OK").length },
    });
    const sheet = workbook.getWorksheet("Agrupaciones");
    const header = sheet?.getRow(2).values as unknown[];

    expect(sheet?.getCell("A3").value).not.toBe("Pendiente de implementacion");
    expect(sheet?.rowCount).toBeGreaterThan(4000);
    expect(header).toContain("Base Reg. Retrib.");
    expect(header).toContain("Hoja agrupada");
    expect(header).toContain("Recalculado Empleados");
    expect(header).toContain("Reg. Retrib. periodo completo matched");
    expect(header).toContain("Recibo recalculado");
    expect(header).toContain("Dif. Recibo");
    expect(header).toContain("Estado Recibo");

    const baseColumn = header.indexOf("Base Reg. Retrib.");
    const pdfStatusColumn = header.indexOf("Estado Recibo");
    const normalizedRow = sheet
      ? Array.from({ length: sheet.rowCount - 2 }, (_, index) => sheet.getRow(index + 3)).find((row) => row.getCell(baseColumn).value === "RETRIBUCIONES NORMALIZADAS")
      : undefined;
    expect(normalizedRow?.getCell(pdfStatusColumn).value).toBe("No aplica");
  });

  test.skip("legacy Agrupaciones export negative-zero normalization is removed", async () => {
    const analysis = await compareAnalysis([], [], {
      tolerance: 1,
      conceptMap: [],
      enableAI: false,
    });
    const workbook = await exportAnalysisToWorkbook({
      ...analysis,
      groupings: [
        {
          sourceSheet: "Análisis por puesto",
          groupingType: "puesto",
          groupId: "ATSACYC",
          groupName: "Administrativo/a Técnico SACYC",
          registroBase: "RETRIBUCIONES (PERIODO COMPLETO)",
          block: "Salario",
          metric: "Media",
          segment: "Mujeres",
          registroSheetValue: 100,
          registroRecalculatedValue: 100,
          excelDifference: -0.004,
          pdfRegistroRecalculatedValue: 100,
          pdfRecalculatedValue: 99.996,
          pdfDifference: -0.004,
          peopleCount: 1,
          matchedPeopleCount: 1,
          womenCount: 1,
          menCount: 0,
          matchedWomenCount: 1,
          matchedMenCount: 0,
          excludedPdfWithoutRegistroCount: 0,
          status: "OK",
          pdfStatus: "OK",
          detail: "Hoja agrupada comparada contra Empleados.",
        },
      ],
    });
    const sheet = workbook.getWorksheet("Agrupaciones");
    const header = sheet?.getRow(2).values as unknown[];
    const excelDifferenceColumn = header.indexOf("Dif. Excel");
    const pdfDifferenceColumn = header.indexOf("Dif. Recibo");

    expect(sheet?.getRow(3).getCell(excelDifferenceColumn).value).toBe(0);
    expect(sheet?.getRow(3).getCell(pdfDifferenceColumn).value).toBe(0);
  });
});
