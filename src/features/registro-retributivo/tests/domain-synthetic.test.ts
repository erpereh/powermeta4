import * as XLSX from "xlsx";
import { describe, expect, test } from "vitest";

import { compareAnalysis } from "@/features/registro-retributivo/compare/comparePeople";
import { buildDefaultConceptMap } from "@/features/registro-retributivo/compare/conceptMapping";
import { salaryStatus } from "@/features/registro-retributivo/compare/salaryDiff";
import { extractGroupedExcelSheets } from "@/features/registro-retributivo/groupings/groupedExcelSheets";
import { median } from "@/features/registro-retributivo/groupings/registroGroupings";
import { parseRegistroRetributivo } from "@/features/registro-retributivo/parsers/registroRetributivoParser";
import type { ConceptMappingRule, RegistroEmployee } from "@/features/registro-retributivo/types";
import { formatEuro, parseSpanishMoney } from "@/features/registro-retributivo/utils/money";
import {
  normalizeComparableText,
  normalizeEmployeeId,
  normalizeProfessionalGroup,
} from "@/features/registro-retributivo/utils/normalize";
import { parsePayrollPeriod, toIsoDate } from "@/features/registro-retributivo/utils/spanishDates";

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

function buildSyntheticRegistroWorkbook(): Buffer {
  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet([
    [
      "Empleado",
      "Empleado",
      "Puesto",
      "Puesto",
      "Total retribuciones normalizadas + variables",
      "Total retribuciones normalizadas + variables",
      "Total retribuciones normalizadas + variables",
      "Retribuciones periodo completo",
      "Retribuciones periodo completo",
      "Retribuciones periodo completo",
      "Conceptos salario",
    ],
    [
      "ID RH",
      "Sexo",
      "Puesto",
      "Puesto",
      "Salario",
      "C. Salarial",
      "Extrasalarial",
      "Salario",
      "C. Salarial",
      "Extrasalarial",
      "SAL_BASE",
    ],
    ["E001", "Mujer", "Analista", "Analista", 1000, 200, 50, 1000, 200, 50, 1000],
  ]);
  XLSX.utils.book_append_sheet(workbook, sheet, "Empleados");
  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

describe("money utilities", () => {
  test("parses Spanish money formats", () => {
    expect(parseSpanishMoney("1.234,56")).toBe(1234.56);
    expect(parseSpanishMoney("-135,06")).toBe(-135.06);
    expect(parseSpanishMoney("")).toBeUndefined();
  });

  test("formats euro values in Spanish style", () => {
    expect(formatEuro(1234.5)).toContain("1.234,50");
  });
});

describe("normalization utilities", () => {
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

describe("Spanish date utilities", () => {
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

describe("salary thresholds", () => {
  test("keeps OK, Revisar and Diferencia boundaries", () => {
    expect(salaryStatus(0.5, { tolerance: 1, reviewThreshold: 1, incidentThreshold: 50 })).toBe("OK");
    expect(salaryStatus(10, { tolerance: 1, reviewThreshold: 1, incidentThreshold: 50 })).toBe("Revisar");
    expect(salaryStatus(50, { tolerance: 1, reviewThreshold: 1, incidentThreshold: 50 })).toBe(
      "Diferencia",
    );
  });
});

describe("groupings helpers", () => {
  test("calculates median robustly", () => {
    expect(median([1, 3, 2])).toBe(2);
    expect(median([1, 2, 3, 4])).toBe(2.5);
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

    expect(puesto?.status).toBe("ready");
    expect(puesto?.columns.map((column) => column.label)).toEqual(["Código", "Nombre", "Importe"]);
    expect(puesto?.rows[0]?.c1.display).toBe("Grupo fallback");
    expect(puesto?.rows[0]?.c2.value).toBe(123.45);
  });
});

describe("synthetic registro parser", () => {
  test("detects Empleados headers and extracts concept codes from a generated workbook", async () => {
    const result = await parseRegistroRetributivo(buildSyntheticRegistroWorkbook());
    expect(result.records).toHaveLength(1);
    expect(result.records[0]?.employeeNumber).toBe("E001");
    expect(result.conceptCodes.salary).toContain("SAL_BASE");
    expect(result.records[0]?.periodComplete.salary).toBe(1000);
  });
});

describe("concept mapping and comparison", () => {
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

  test("maps telework aliases without changing amounts", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 0, salaryComplement: 0, extraSalary: 208, total: 208 },
      concepts: [
        { block: "Extrasalarial", blockKey: "extraSalary", code: "CSP_I_COMP_TELETR_COVID", amount: 208 },
      ],
    });
    const map = buildDefaultConceptMap({
      salary: [],
      salaryComplement: [],
      extraSalary: ["CSP_I_COMP_TELETR_COVID"],
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
        conceptMap: map as readonly ConceptMappingRule[],
      },
    );

    expect(result.concepts.find((row) => row.registroCode === "CSP_I_COMP_TELETR_COVID")).toMatchObject({
      pdfConcept: "Teletrabajo",
      pdfAmount: 208,
      status: "OK",
    });
  });

  test("exclusions remove matched rows before metrics", async () => {
    const employee = emptyRegistroEmployee({
      employeeNumber: "10048",
      periodComplete: { salary: 1000, salaryComplement: 0, extraSalary: 0, total: 1000 },
    });
    const result = await compareAnalysis(
      [
        {
          sourceFile: "PDF_TEST.pdf",
          periodLabel: "Del 1 al 31 Enero 2025",
          workerName: "PERSONA TEST",
          employeeNumber: "10048",
          concepts: [{ name: "Salario Base", amount: 1000, type: "devengo" }],
        },
      ],
      [employee],
      {
        tolerance: 1,
        enableAI: false,
        excludedEmployeeIds: ["10048"],
      },
    );

    expect(result.people).toEqual([]);
    expect(result.summary.uniquePeople).toBe(0);
  });
});
