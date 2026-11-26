import ExcelJS from "exceljs";

import { GROUPINGS, type GroupingId } from "../contract";
import { BreakdownInputError, normalize } from "./workbook";

const sheetOrder = [
  "puesto",
  "valoracion-del-puesto",
  "categoria",
  "familia-de-puesto",
  "categoria-personal",
] as const satisfies readonly GroupingId[];

function copySheet(book: ExcelJS.Workbook, source: ExcelJS.Worksheet, name: string): void {
  const target = book.addWorksheet(name);
  const model = source.model;
  target.model = { ...structuredClone(model), id: target.id, name };
  // El getter del modelo publica merges, mientras el setter lee mergeCells.
  for (const range of model.merges) target.mergeCellsWithoutStyle(range);
  source.columns?.forEach((column, index) => {
    target.getColumn(index + 1).style = structuredClone(column.style ?? {});
  });
  source.eachRow({ includeEmpty: true }, (row) => {
    const targetRow = target.getRow(row.number);
    row.eachCell({ includeEmpty: true }, (cell, column) => {
      targetRow.getCell(column).style = structuredClone(cell.style);
    });
  });
}

export async function consolidateBreakdown(getBook: (id: GroupingId) => Uint8Array<ArrayBuffer>) {
  const combined = new ExcelJS.Workbook();
  for (const id of sheetOrder) {
    const source = new ExcelJS.Workbook();
    await source.xlsx.load(getBook(id).buffer);
    if (id === sheetOrder[0]) {
      const employees = source.worksheets.find(({ name }) => normalize(name) === "empleados");
      if (!employees) throw new BreakdownInputError("No se ha encontrado la hoja Empleados.");
      combined.model = { ...combined.model, themes: structuredClone(source.model.themes) };
      combined.properties.date1904 = source.properties.date1904;
      copySheet(combined, employees, "Empleados");
    }
    const name = GROUPINGS.find(({ file }) => file === id)?.sheet;
    const grouping = source.worksheets.find(
      ({ name: title }) => normalize(title) === normalize(name ?? null),
    );
    if (!name || !grouping) throw new BreakdownInputError("Falta una hoja de agrupación.");
    copySheet(combined, grouping, name);
  }
  return new Uint8Array(await combined.xlsx.writeBuffer());
}
