import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";

import type { PrimaveraReport } from "@/types/primavera";

import { exportPrimaveraToXlsx, primaveraFileName } from "./export-xlsx";

const report: PrimaveraReport = {
  society: "CYC",
  legalEntity: "ACYC_PT",
  database: "M4PRENOMINA",
  year: 2026,
  fromMonth: 9,
  toMonth: 10,
  wholeYear: false,
  months: [
    { month: 9, rows: [], mismatches: 0, status: "empty" },
    {
      month: 10,
      mismatches: 1,
      status: "mismatch",
      rows: [
        {
          employeeId: "0398",
          earnings: 100,
          earningsConcepts: 100,
          deductions: 20,
          deductionsConcepts: 20,
          net: 80,
          ok: true,
        },
        {
          employeeId: "1454",
          earnings: 2445.89,
          earningsConcepts: 2401.04,
          deductions: 571.58,
          deductionsConcepts: 571.58,
          net: 1874.31,
          ok: false,
        },
      ],
    },
  ],
};

describe("exportPrimaveraToXlsx", () => {
  it("writes the summary and one sheet per month like the original script", async () => {
    const workbook = new ExcelJS.Workbook();
    const file = await exportPrimaveraToXlsx(report, new Date(2026, 10, 18, 9, 5));
    await workbook.xlsx.load(new Uint8Array(file).buffer);

    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual([
      "Resumen",
      "Septiembre",
      "Octubre",
    ]);
    const summary = workbook.getWorksheet("Resumen");
    expect(summary?.getRow(5).values).toEqual([undefined, "Septiembre", 0, 0, "SIN NÓMINA"]);
    expect(summary?.getRow(6).values).toEqual([undefined, "Octubre", 2, 1, "MAL"]);

    const october = workbook.getWorksheet("Octubre");
    expect(october?.getCell(3, 1).value).toBe(
      "CYC Portugal (ACYC_PT) — 2 empleados — 1 DESCUADRE(S)",
    );
    expect(october?.getRow(6).values).toEqual([
      undefined,
      "1454",
      2445.89,
      2401.04,
      44.85,
      571.58,
      571.58,
      0,
      1874.31,
      "MAL",
    ]);
    expect(october?.getRow(7).getCell(1).value).toBe("TOTAL");
    expect(october?.getRow(7).getCell(2).value).toBe(2545.89);
  });

  it("names the file with society, period, database and timestamp", () => {
    expect(primaveraFileName(report, new Date(2026, 10, 18, 9, 5))).toBe(
      "Primavera_CYC_2026-09_a_10_M4PRENOMINA_20261118_0905.xlsx",
    );
    expect(primaveraFileName({ ...report, wholeYear: true }, new Date(2026, 0, 2, 3, 4))).toBe(
      "Primavera_CYC_2026_M4PRENOMINA_20260102_0304.xlsx",
    );
  });
});
