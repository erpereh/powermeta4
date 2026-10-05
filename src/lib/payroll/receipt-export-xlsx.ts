import "server-only";

import ExcelJS from "exceljs";

import type { PayrollReceipt, PayrollReceiptEntry } from "@/types/payroll-receipt";

import { formatDate, lineConcept, paymentTypeLabel, sheetName } from "./receipt-format";

const MONEY = "#,##0.00";
const PERCENT = '#,##0.00" %"';
// Excel no usa los tokens del tema: grises neutros equivalentes al recibo en pantalla.
const LABEL_FILL: ExcelJS.Fill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "FFF1F1F1" },
};
const NET_FILL: ExcelJS.Fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE3ECFA" } };
const THIN: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: "FFBDBDBD" } },
  left: { style: "thin", color: { argb: "FFBDBDBD" } },
  bottom: { style: "thin", color: { argb: "FFBDBDBD" } },
  right: { style: "thin", color: { argb: "FFBDBDBD" } },
};
const MUTED = { argb: "FF6B6B6B" };

const label = (cell: ExcelJS.Cell, text: string) => {
  cell.value = text.toUpperCase();
  cell.font = { bold: true, size: 8, color: MUTED };
  cell.fill = LABEL_FILL;
  cell.border = THIN;
  cell.alignment = { vertical: "middle", wrapText: true };
};

const value = (cell: ExcelJS.Cell, content: string | number | null, format?: string) => {
  cell.value = content ?? null;
  cell.border = THIN;
  cell.alignment = {
    vertical: "middle",
    horizontal: typeof content === "number" ? "right" : "left",
  };
  if (typeof content === "number" && format) cell.numFmt = format;
};

/** Pares etiqueta/valor en dos bloques (A:B y D:F) como la cabecera del recibo. */
const headerRow = (
  sheet: ExcelJS.Worksheet,
  row: number,
  left: [string, string],
  right: [string, string],
) => {
  label(sheet.getCell(row, 1), left[0]);
  sheet.mergeCells(row, 2, row, 3);
  value(sheet.getCell(row, 2), left[1]);
  label(sheet.getCell(row, 4), right[0]);
  sheet.mergeCells(row, 5, row, 6);
  value(sheet.getCell(row, 5), right[1]);
};

/** Fila de casillas: etiquetas en una fila y valores en la siguiente. */
const boxesRow = (
  sheet: ExcelJS.Worksheet,
  row: number,
  boxes: readonly (readonly [string, number])[],
) => {
  boxes.forEach(([text, amount], index) => {
    label(sheet.getCell(row, index + 1), text);
    value(sheet.getCell(row + 1, index + 1), amount, MONEY);
  });
  return row + 2;
};

const writeReceipt = (sheet: ExcelJS.Worksheet, entry: PayrollReceiptEntry) => {
  const receipt: PayrollReceipt = entry.receipt;
  const { worker } = receipt;
  sheet.columns = [
    { width: 16 },
    { width: 16 },
    { width: 12 },
    { width: 46 },
    { width: 16 },
    { width: 16 },
  ];
  sheet.views = [{ showGridLines: false }];

  const title = sheet.getCell(1, 1);
  title.value = receipt.company.name || "Recibo de nómina";
  title.font = { bold: true, size: 14 };
  const kind = sheet.getCell(1, 6);
  kind.value = `${paymentTypeLabel(receipt.paymentType)} · ${receipt.currencyId}`;
  kind.font = { size: 9, color: MUTED };
  kind.alignment = { horizontal: "right" };
  sheet.getCell(2, 1).value = `${entry.payName} · pago ${formatDate(entry.paymentDate)}`;
  sheet.getCell(2, 1).font = { size: 9, color: MUTED };

  headerRow(sheet, 4, ["Empresa", receipt.company.name], ["C.I.F.", receipt.company.taxId]);
  headerRow(
    sheet,
    5,
    ["Nº inscripción S.S.", receipt.company.socialSecurityRegistration],
    ["Periodo liquidación", receipt.periodLabel],
  );
  headerRow(sheet, 6, ["Trabajador", worker.fullName], ["NIF", worker.nationalId]);
  headerRow(
    sheet,
    7,
    ["Nº afiliación S.S.", worker.socialSecurityNumber],
    ["GT · Nº matrícula", `${worker.contributionGroup || "—"} · ${worker.employeeId}`],
  );
  headerRow(
    sheet,
    8,
    ["Centro de trabajo", receipt.workCenter],
    ["Grupo profesional", receipt.professionalGroup],
  );
  headerRow(
    sheet,
    9,
    ["Antigüedad", formatDate(receipt.seniorityDate)],
    ["Moneda", receipt.currencyId],
  );

  let row = 11;
  ["Unidades", "Precio", "% Jorn.", "Conceptos", "Devengos", "Retención"].forEach((text, index) =>
    label(sheet.getCell(row, index + 1), text),
  );
  row++;
  for (const line of receipt.lines) {
    const informative = line.section === "informative";
    value(sheet.getCell(row, 1), line.units, line.unitsFormat === "percentage" ? PERCENT : MONEY);
    value(sheet.getCell(row, 2), line.price, MONEY);
    value(sheet.getCell(row, 3), line.percentage, PERCENT);
    value(sheet.getCell(row, 4), lineConcept(line));
    sheet.getCell(row, 4).alignment = { indent: line.level === 1 ? 2 : 0 };
    value(sheet.getCell(row, 5), line.earning, MONEY);
    value(sheet.getCell(row, 6), line.deduction, MONEY);
    if (informative) {
      for (let column = 1; column <= 6; column++)
        sheet.getCell(row, column).font = { color: MUTED };
    }
    row++;
  }

  row++;
  row = boxesRow(sheet, row, [
    ["Remunerac. total", receipt.bases.totalRemuneration],
    ["Prorrata p. extras", receipt.bases.extraPayProration],
    ["Base total", receipt.bases.totalBase],
    ["Régimen general", receipt.bases.generalRegimeBase],
    ["Base desempleo", receipt.bases.unemploymentBase],
  ]);
  row = boxesRow(sheet, row, [
    ["Base IRPF acumulada", receipt.accumulated.irpfBase],
    ["Cuota IRPF acumulada", receipt.accumulated.irpfQuota],
    ["Cuota S.S. acumulada", receipt.accumulated.socialSecurityQuota],
    ["Total devengado", receipt.totals.accrued],
    ["Total a deducir", receipt.totals.deducted],
    ["Líquido total a percibir", receipt.totals.netPay],
  ]);
  const net = sheet.getCell(row - 1, 6);
  net.fill = NET_FILL;
  net.font = { bold: true };

  row++;
  for (const [title, payments] of [
    ["Datos del banco", receipt.bankPayments],
    ["Datos del banco beneficiario", receipt.beneficiaryPayments],
  ] as const) {
    label(sheet.getCell(row, 1), title);
    sheet.mergeCells(row, 1, row, 4);
    label(sheet.getCell(row, 5), "Importe");
    row++;
    if (payments.length === 0) {
      sheet.mergeCells(row, 1, row, 4);
      value(sheet.getCell(row, 1), "—");
      value(sheet.getCell(row, 5), null);
      row++;
    }
    for (const payment of payments) {
      sheet.mergeCells(row, 1, row, 4);
      value(sheet.getCell(row, 1), payment.account);
      value(sheet.getCell(row, 5), payment.amount, MONEY);
      row++;
    }
    row++;
  }

  if (receipt.unmapped.accrued !== 0 || receipt.unmapped.deducted !== 0) {
    const warning = sheet.getCell(row, 1);
    warning.value = `Recibo incompleto: faltan ${receipt.unmapped.accrued} en devengos y ${receipt.unmapped.deducted} en retenciones respecto a los totales de Meta4.`;
    warning.font = { italic: true, size: 9, color: MUTED };
  }
  sheet.pageSetup = {
    paperSize: 9,
    orientation: "portrait",
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 0,
  };
};

const writeSummary = (sheet: ExcelJS.Worksheet, entries: readonly PayrollReceiptEntry[]) => {
  sheet.columns = [
    { width: 34 },
    { width: 14 },
    { width: 26 },
    { width: 18 },
    { width: 18 },
    { width: 18 },
  ];
  sheet.views = [{ state: "frozen", ySplit: 1, showGridLines: false }];
  ["Paga", "Fecha de pago", "Periodo", "Total devengado", "Total a deducir", "Líquido"].forEach(
    (text, index) => label(sheet.getCell(1, index + 1), text),
  );
  entries.forEach((entry, index) => {
    const row = index + 2;
    value(sheet.getCell(row, 1), entry.payName);
    value(sheet.getCell(row, 2), formatDate(entry.paymentDate));
    value(sheet.getCell(row, 3), entry.receipt.periodLabel);
    value(sheet.getCell(row, 4), entry.receipt.totals.accrued, MONEY);
    value(sheet.getCell(row, 5), entry.receipt.totals.deducted, MONEY);
    value(sheet.getCell(row, 6), entry.receipt.totals.netPay, MONEY);
  });
  const total = entries.length + 2;
  label(sheet.getCell(total, 1), "Total");
  for (const column of [4, 5, 6]) {
    const letter = String.fromCharCode(64 + column);
    const cell = sheet.getCell(total, column);
    cell.value = {
      formula: `SUM(${letter}2:${letter}${total - 1})`,
      result: entries.reduce(
        (sum, entry) =>
          sum +
          (column === 4
            ? entry.receipt.totals.accrued
            : column === 5
              ? entry.receipt.totals.deducted
              : entry.receipt.totals.netPay),
        0,
      ),
    };
    cell.numFmt = MONEY;
    cell.font = { bold: true };
    cell.border = THIN;
  }
};

/** Libro con una hoja por nómina y, si hay varias, una hoja «Resumen» al principio. */
export const exportReceiptsToXlsx = async (
  entries: readonly PayrollReceiptEntry[],
): Promise<Buffer> => {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  workbook.created = new Date();
  if (entries.length > 1) writeSummary(workbook.addWorksheet("Resumen"), entries);
  const used = new Set<string>(["resumen"]);
  for (const entry of entries) writeReceipt(workbook.addWorksheet(sheetName(entry, used)), entry);
  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
};
