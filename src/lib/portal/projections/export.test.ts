import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { extractText } from "unpdf";
import { describe, expect, it } from "vitest";

import { projectionDebugData } from "./debug.fixture";
import { projectionChartTables, projectionFileName, projectionSectionTable } from "./export-layout";
import { exportProjectionToPdf } from "./export-pdf";
import { exportProjectionToXlsx } from "./export-xlsx";
import type { ProjectionReport } from "./types";

const reportOf = (scenario: string, employee?: string): ProjectionReport => {
  const report = projectionDebugData({ status: "latest" }, scenario, employee).report;
  if (!report) throw new Error("La muestra no tiene informe.");
  return report;
};

describe("exportación del informe de proyecciones", () => {
  it("reproduce las cabeceras y celdas de las tablas en pantalla", () => {
    const report = reportOf("full");
    const fixed = projectionSectionTable(report.sections[0], report.pays);
    expect(fixed.headers).toEqual([
      "Salario convenio",
      ...report.pays.map((pay) => pay.label),
      "Total",
    ]);
    expect(fixed.rows.find((row) => row.kind === "section")?.cells).toEqual([
      "Complementos compañía",
    ]);
    expect(fixed.rows.at(-1)?.cells.at(-1)).toBe(53730);
    const ppse = report.sections.find((section) => section.id === "ppse");
    expect(ppse && projectionSectionTable(ppse, report.pays).headers).toEqual([
      "PPSE",
      "Ord",
      "Ext",
      "Total",
    ]);
    const charts = projectionChartTables(report);
    expect(charts.map((table) => table.title)).toEqual([
      "Retribución Directa 2026",
      "Compensación Total",
      "Retribución Flexible",
    ]);
    expect(charts[1].rows.find((row) => row.cells[0] === "Ayuda Consumo")?.cells[1]).toBe(100);
    expect(projectionFileName(report, "pdf")).toBe("Proyeccion_DEMO-01_2026.pdf");
    expect(projectionFileName(reportOf("full", "00/42"), "xlsx")).toBe("Proyeccion_0042_2026.xlsx");
  });

  it("genera un Excel con desglose, gráficas y comparativa", async () => {
    const report = reportOf("full");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(new Uint8Array(await exportProjectionToXlsx(report)).buffer);
    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["Desglose", "Gráficas"]);
    const detail = workbook.getWorksheet("Desglose");
    expect(detail?.getCell(1, 1).value).toBe("Informe de compensación total 2026");
    const values = detail
      ?.getSheetValues()
      .flat()
      .filter((value) => value !== undefined);
    expect(values).toContain("Total Retribución fija");
    expect(values).toContain(53730);
    const charts = workbook.getWorksheet("Gráficas");
    const chartValues = charts?.getSheetValues().flat();
    expect(chartValues).toContain("Comparativa Retribución últimos 5 años");
    expect(chartValues).toContain("RBFA");
  });

  it("genera un PDF legible, en A3 apaisado cuando hay muchas pagas", async () => {
    const pdf = await exportProjectionToPdf(reportOf("full"));
    const document = await PDFDocument.load(pdf);
    const [first] = document.getPages();
    expect(first?.getWidth()).toBeGreaterThan(first?.getHeight() ?? Infinity);
    const { text } = await extractText(pdf, { mergePages: true });
    expect(text).toContain("Informe de compensación total 2026");
    expect(text).toContain("Total Retribución fija");
    expect(text).toContain("Retribución Flexible");

    const many = await PDFDocument.load(await exportProjectionToPdf(reportOf("many-pays")));
    expect(many.getPages()[0]?.getWidth()).toBeGreaterThan(1100);
  });
});
