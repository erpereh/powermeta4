import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { describe, expect, it } from "vitest";

import { extractChatAttachment } from "./attachment-extraction";

describe("lectura de adjuntos del chat", () => {
  it("extracts page-aware text from the Buffer returned by the file system", async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage().drawText("Concepto ficticio 25 euros");
    const result = await extractChatAttachment("ejemplo.pdf", Buffer.from(await pdf.save()));
    expect(result).toEqual({ text: "[Página 1]\nConcepto ficticio 25 euros", partial: false });
  });

  it("reports a PDF without text, and rejects a spoofed PDF extension", async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    await expect(extractChatAttachment("escaneo.pdf", await pdf.save())).rejects.toThrow(
      "no contiene texto",
    );
    await expect(
      extractChatAttachment("falso.pdf", Buffer.from("archivo de texto")),
    ).rejects.toThrow("PDF válido");
  });

  it("reads workbook values by sheet without using formulas as instructions", async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Totales");
    sheet.addRow(["Importe", { formula: "19+3", result: 22 }]);
    const result = await extractChatAttachment(
      "ejemplo.xlsx",
      new Uint8Array(await workbook.xlsx.writeBuffer()),
    );
    expect(result.text).toBe("[Hoja: Totales]\n1\tImporte\t22");
  });
});
