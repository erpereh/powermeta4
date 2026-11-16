import "server-only";

import ExcelJS from "exceljs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { PortalReadPage } from "./read-provider";
import type { PortalFeature } from "./types";

/** Exporta exactamente los apartados autorizados y filtrados de la pantalla. */
export async function exportPortalReport(
  feature: PortalFeature,
  page: PortalReadPage,
  format: "xlsx" | "pdf",
): Promise<Uint8Array> {
  const sections = (feature.sections ?? []).flatMap((section) =>
    section.kind === "consult" ? [section.consult] : [],
  );
  const note = page.debug
    ? "DATOS FICTICIOS · DEBUG · Integración VM pendiente"
    : "Consulta de solo lectura";
  if (format === "xlsx") {
    const book = new ExcelJS.Workbook();
    const status = book.addWorksheet("Estado");
    status.addRow([feature.title, note]);
    status.addRow(["Apartado", "Estado", "Registros / motivo"]);
    for (const [index, consult] of sections.entries()) {
      const result = page.results[consult.id];
      status.addRow([
        consult.title,
        result?.status ?? "unavailable",
        result?.status === "ok" ? result.data.rows.length : (result?.message ?? "Pendiente"),
      ]);
      if (result?.status !== "ok") continue;
      const sheet = book.addWorksheet(
        `${index + 1} ${consult.title}`.replace(/[\\/*?:[\]]/g, " ").slice(0, 31),
      );
      sheet.addRow(consult.fields.map((field) => field.label));
      for (const row of result.data.rows) sheet.addRow(row.map((field) => field.value));
      sheet.getRow(1).font = { bold: true };
      sheet.views = [{ state: "frozen", ySplit: 1 }];
      sheet.columns.forEach((column) => {
        column.width = 28;
        column.alignment = { vertical: "top", wrapText: true };
      });
    }
    status.columns.forEach((column) => {
      column.width = 48;
      column.alignment = { wrapText: true };
    });
    return new Uint8Array(await book.xlsx.writeBuffer());
  }
  const document = await PDFDocument.create();
  const font = await document.embedFont(StandardFonts.Helvetica);
  const bold = await document.embedFont(StandardFonts.HelveticaBold);
  let paper = document.addPage([595.28, 841.89]);
  let y = 800;
  const safe = (value: string) => value.replace(/[^\u0020-\u007e\u00a0-\u00ff\u20ac]/g, " ");
  const line = (value: string, strong = false) => {
    const used = strong ? bold : font;
    const words = safe(value).split(/\s+/);
    let current = "";
    const flush = () => {
      if (y < 45) {
        paper = document.addPage([595.28, 841.89]);
        y = 800;
      }
      paper.drawText(current, { x: 36, y, font: used, size: 9, color: rgb(0.12, 0.12, 0.12) });
      y -= 14;
      current = "";
    };
    for (const word of words) {
      // Divide también tokens sin espacios para evitar recortes horizontales.
      for (const piece of word.match(/.{1,70}/g) ?? [""]) {
        if (used.widthOfTextAtSize(`${current} ${piece}`, 9) > 520 && current) flush();
        current = current ? `${current} ${piece}` : piece;
      }
    }
    flush();
  };
  line(feature.title, true);
  line(note);
  y -= 8;
  for (const consult of sections) {
    line(consult.title, true);
    const result = page.results[consult.id];
    if (result?.status !== "ok") {
      line(result?.message ?? "Pendiente de conexión");
      continue;
    }
    if (!result.data.rows.length) line("Sin registros para los filtros seleccionados.");
    for (const [index, row] of result.data.rows.entries()) {
      line(`Registro ${index + 1}`, true);
      for (const field of row) line(`${field.label}: ${field.value}`);
      y -= 6;
    }
    y -= 8;
  }
  return document.save();
}
