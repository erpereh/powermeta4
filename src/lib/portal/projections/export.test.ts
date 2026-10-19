import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { extractText, getDocumentProxy } from "unpdf";
import { describe, expect, it } from "vitest";

import { projectionDebugData } from "./debug.fixture";
import {
  projectionChartTables,
  projectionFileName,
  projectionPdfTables,
  projectionSectionTable,
} from "./export-layout";
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
    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["Resumen", "Desglose"]);
    const detail = workbook.getWorksheet("Desglose");
    expect(detail?.getCell(1, 1).value).toBe("Informe de compensación total 2026");
    const values = detail
      ?.getSheetValues()
      .flat()
      .filter((value) => value !== undefined);
    expect(values).toContain("Total Retribución fija");
    expect(values).toContain(53730);
    const charts = workbook.getWorksheet("Resumen");
    const chartValues = charts?.getSheetValues().flat();
    expect(chartValues).toContain("Comparativa Retribución últimos 5 años");
    expect(chartValues).toContain("RBFA");
  });

  it("genera un PDF siempre A4 apaisado con todas sus secciones", async () => {
    const pdf = await exportProjectionToPdf(reportOf("full"));
    const document = await PDFDocument.load(pdf);
    const [first] = document.getPages();
    expect(first?.getWidth()).toBeGreaterThan(first?.getHeight() ?? Infinity);
    const { text } = await extractText(pdf.slice(), { mergePages: true });
    expect(text).toContain("Informe de compensación total 2026");
    expect(text).toContain("Total Retribución fija");
    expect(text).toContain("Retribución Flexible");
    const firstPage = await extractText(pdf);
    expect(firstPage.text[0]).toContain("Comparativa Retribución últimos 5 años");
    expect(firstPage.text[0]).toContain("Base de referencia de retribución variable");

    const many = await PDFDocument.load(await exportProjectionToPdf(reportOf("many-pays")));
    for (const page of many.getPages()) {
      expect(page.getWidth()).toBeCloseTo(841.89);
      expect(page.getHeight()).toBeCloseTo(595.28);
    }
  });

  it("reparte las pagas sin perder columnas ni modificar el total anual", () => {
    const report = reportOf("many-pays");
    const section = report.sections[0];
    const tables = projectionPdfTables(section, report.pays);
    expect(tables.map((table) => table.headers.length)).toEqual([10, 10, 6]);
    expect(tables.flatMap((table) => table.headers.slice(1, -1))).toEqual(
      report.pays.map((pay) => pay.label),
    );
    section.rows.forEach((row, index) => {
      if (row.kind === "section") return;
      expect(tables.flatMap((table) => table.rows[index].cells.slice(1, -1))).toEqual(row.amounts);
      for (const table of tables) expect(table.rows[index].cells.at(-1)).toBe(row.total);
    });
  });

  it("conserva valores numéricos, ceros, ausencias y porcentajes en Excel", async () => {
    const report = reportOf("partial");
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(new Uint8Array(await exportProjectionToXlsx(report)).buffer);
    const detail = workbook.getWorksheet("Desglose");
    const summary = workbook.getWorksheet("Resumen");
    if (!detail || !summary) throw new Error("Falta una hoja del informe.");
    expect(detail.views[0]).toMatchObject({
      state: "frozen",
      xSplit: 1,
      ySplit: 8,
      showGridLines: false,
    });
    const social = detail
      .getRows(1, detail.rowCount)
      ?.find((row) => row.getCell(1).value === "Coste S.S. empresa");
    expect(social?.getCell(report.pays.length + 2).value).toBe("—");
    expect(social?.getCell(4).value).toBe(0);
    const rbfa = summary
      .getRows(1, summary.rowCount)
      ?.find((row) => row.getCell(1).value === "RBFA");
    expect(typeof rbfa?.getCell(2).value).toBe("number");
    expect(rbfa?.getCell(3).numFmt).toBe("0.0%");
    expect(rbfa?.getCell(3).value).toBeGreaterThan(0);
    expect(rbfa?.getCell(3).value).toBeLessThanOrEqual(1);
  });

  it.each(["full", "partial", "many-pays"])(
    "no recorta texto ni sale de los márgenes en PDF: %s",
    async (scenario) => {
      const report = reportOf(scenario);
      const proxy = await getDocumentProxy(await exportProjectionToPdf(report));
      const all: string[] = [];
      for (let number = 1; number <= proxy.numPages; number += 1) {
        const page = await proxy.getPage(number);
        const content = await page.getTextContent();
        const text = content.items.filter((item) => "str" in item);
        expect(text.length).toBeGreaterThan(10);
        for (const item of text) {
          const x: number = item.transform[4];
          const y: number = item.transform[5];
          expect(x).toBeGreaterThanOrEqual(27);
          expect(x + item.width).toBeLessThanOrEqual(815);
          expect(y).toBeGreaterThanOrEqual(16);
          expect(y + item.height).toBeLessThanOrEqual(568);
        }
        all.push(text.map((item) => item.str).join(" "));
      }
      const normalized = all.join(" ").replaceAll(/\s+/g, " ");
      for (const section of report.sections) {
        expect(normalized).toContain(section.title);
        for (const row of section.rows) expect(normalized).toContain(row.label);
      }
      expect(normalized).not.toContain("…");
      await proxy.destroy();
    },
  );

  it("continúa tablas largas con cabeceras y mantiene los avisos completos", async () => {
    const report = reportOf("full");
    report.sections = [
      {
        ...report.sections[0],
        rows: Array.from({ length: 85 }, (_, index) => ({
          ...report.sections[0].rows[0],
          id: `concept-${index}`,
          label: `Concepto de prueba ${index}`,
        })),
      },
    ];
    report.notices = ["Aviso completo de prueba. ".repeat(35) + "Fin del aviso."];
    const pdf = await exportProjectionToPdf(report);
    const { text } = await extractText(pdf, { mergePages: true });
    expect(text).toContain("Continuación");
    expect(text).toContain("Concepto de prueba 84");
    expect(text).toContain("Fin del aviso.");
    expect(text).toContain("Total anual");
  });

  it("conserva la leyenda parcial y los ajustes, incluso con etiquetas muy largas", async () => {
    const report = reportOf("partial");
    report.sections = [];
    report.history = [];
    report.direct = [
      { id: "zero", label: "Concepto cero", value: 0 },
      { id: "missing", label: "Concepto no informado", value: null },
      { id: "negative", label: "Ajuste negativo", value: -123.45 },
    ];
    report.compensation = [
      { id: "long", label: "Leyenda extensa ".repeat(250) + "Fin de leyenda", value: 42 },
    ];
    const proxy = await getDocumentProxy(await exportProjectionToPdf(report));
    const result = await extractText(proxy, { mergePages: true });
    expect(result.text).toContain("Concepto cero");
    expect(result.text).toContain("Concepto no informado");
    expect(result.text).toContain("-123,45 €");
    expect(result.text).toContain("Fin de leyenda");
    for (let number = 1; number <= proxy.numPages; number += 1) {
      const page = await proxy.getPage(number);
      for (const item of (await page.getTextContent()).items) {
        if ("str" in item) expect(item.transform[5]).toBeGreaterThanOrEqual(16);
      }
    }
    await proxy.destroy();
  });
});
