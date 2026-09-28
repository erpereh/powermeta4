import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { extractText } from "unpdf";
import { describe, expect, it } from "vitest";

import { sampleReceipt } from "@/components/tools/payroll/payroll-receipt.fixture";
import type { PayrollReceiptEntry } from "@/types/payroll-receipt";

import { exportReceiptsToPdf } from "./receipt-export-pdf";
import { exportReceiptsToXlsx } from "./receipt-export-xlsx";
import { receiptsFileName, sheetName } from "./receipt-format";

const april: PayrollReceiptEntry = {
  id: "2026-04-25",
  paymentDate: "2026-04-25",
  payName: "Abril 2026",
  receipt: sampleReceipt,
};
const march: PayrollReceiptEntry = {
  id: "2026-03-25",
  paymentDate: "2026-03-25",
  payName: "Marzo 2026",
  receipt: { ...sampleReceipt, periodLabel: "Del 1 al 31 Marzo 2026" },
};

const readWorkbook = async (buffer: Buffer) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(Uint8Array.from(buffer).buffer);
  return workbook;
};

const cellTexts = (sheet: ExcelJS.Worksheet): unknown[] => {
  const values: unknown[] = [];
  sheet.eachRow((row) => row.eachCell((cell) => values.push(cell.value)));
  return values;
};

describe("exportReceiptsToXlsx", () => {
  it("writes one sheet per receipt with numeric amounts", async () => {
    const workbook = await readWorkbook(await exportReceiptsToXlsx([april]));

    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual(["25-04-2026 Abril 2026"]);
    const values = cellTexts(workbook.worksheets[0] ?? workbook.addWorksheet("vacía"));
    expect(values).toContain("Ana Pérez Gómez");
    expect(values).toContain("Salario Base");
    expect(values).toContain("*** Coste Empresa ***");
    expect(values).toContain(4522.35);
    expect(values).toContain("ES00 0000 0000 0000 0000 0001");
  });

  it("adds a summary sheet with totals when there are several receipts", async () => {
    const workbook = await readWorkbook(await exportReceiptsToXlsx([march, april]));

    expect(workbook.worksheets.map((sheet) => sheet.name)).toEqual([
      "Resumen",
      "25-03-2026 Marzo 2026",
      "25-04-2026 Abril 2026",
    ]);
    const summary = workbook.getWorksheet("Resumen");
    expect(summary?.getCell("A2").value).toBe("Marzo 2026");
    expect(summary?.getCell("F4").value).toMatchObject({ formula: "SUM(F2:F3)", result: 9044.7 });
  });
});

describe("exportReceiptsToPdf", () => {
  it("draws one page per receipt with the Meta4 payslip content", async () => {
    const bytes = await exportReceiptsToPdf([march, april]);

    expect((await PDFDocument.load(bytes)).getPageCount()).toBe(2);
    const { text } = await extractText(new Uint8Array(bytes), { mergePages: true });
    expect(text).toContain("Ana Pérez Gómez");
    expect(text).toContain("Salario Base");
    expect(text).toContain("Retención a Cuenta del IRPF");
    expect(text).toContain("34,16 %");
    expect(text).toContain("4.522,35 EUR");
    expect(text).toContain("Del 1 al 31 Marzo 2026");
  });

  it("continues on a new page when the lines do not fit", async () => {
    const [line] = sampleReceipt.lines;
    if (!line) throw new Error("El recibo de ejemplo no tiene líneas.");
    const many = Array.from({ length: 90 }, (_, index) => ({ ...line, id: `r${index}` }));
    const bytes = await exportReceiptsToPdf([
      { ...april, receipt: { ...sampleReceipt, lines: many } },
    ]);

    expect((await PDFDocument.load(bytes)).getPageCount()).toBeGreaterThan(1);
  });
});

describe("receipt export names", () => {
  it("names files after the employee and the pays", () => {
    expect(receiptsFileName("1013", [april], "pdf")).toBe("nomina_1013_2026-04-25.pdf");
    expect(receiptsFileName("1013", [march, april], "xlsx")).toBe(
      "nominas_1013_2026-03-25_2026-04-25.xlsx",
    );
  });

  it("keeps sheet names short, valid and unique", () => {
    const used = new Set<string>();
    const long = { ...april, payName: "Unión pagas 24/03 y 25-03 retro: ajustes" };
    const first = sheetName(long, used);
    const second = sheetName(long, used);

    expect(first.length).toBeLessThanOrEqual(31);
    expect(first).not.toMatch(/[[\]:*?/\\]/);
    expect(second).not.toBe(first);
    expect(second.length).toBeLessThanOrEqual(31);
  });
});
