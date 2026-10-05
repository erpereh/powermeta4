import "server-only";

import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage } from "pdf-lib";

import type { PayrollReceiptEntry } from "@/types/payroll-receipt";

import {
  formatDate,
  formatDecimal,
  formatLineUnits,
  formatPercentage,
  lineConcept,
  paymentTypeLabel,
} from "./receipt-format";

// El PDF no usa los tokens del tema: grises neutros equivalentes al recibo en pantalla.
const INK = rgb(0.1, 0.1, 0.1);
const MUTED = rgb(0.42, 0.42, 0.42);
const RULE = rgb(0.74, 0.74, 0.74);
const LABEL_BG = rgb(0.95, 0.95, 0.95);
const NET_BG = rgb(0.89, 0.93, 0.98);

const PAGE = { width: 595.28, height: 841.89 };
const MARGIN = 36;
const CONTENT = PAGE.width - MARGIN * 2;
const LABEL_H = 11;
const BOX_H = 26;
const ROW_H = 11;
const FOOTER_H = 3 * BOX_H + 40;

type Fonts = { regular: PDFFont; bold: PDFFont };

/** Helvetica estándar codifica WinAnsi: los caracteres fuera se sustituyen por «?». */
const makeSafe = (font: PDFFont) => {
  const cache = new Map<string, boolean>();
  return (text: string): string =>
    [...text]
      .map((char) => {
        if (!cache.has(char)) {
          try {
            font.widthOfTextAtSize(char, 8);
            cache.set(char, true);
          } catch {
            cache.set(char, false);
          }
        }
        return cache.get(char) ? char : "?";
      })
      .join("");
};

const fit = (font: PDFFont, text: string, size: number, width: number): string => {
  if (font.widthOfTextAtSize(text, size) <= width) return text;
  let out = text;
  while (out.length > 1 && font.widthOfTextAtSize(`${out}…`, size) > width) out = out.slice(0, -1);
  return `${out}…`;
};

class ReceiptPage {
  constructor(
    private readonly page: PDFPage,
    private readonly fonts: Fonts,
    private readonly safe: (text: string) => string,
  ) {}

  text(
    content: string,
    x: number,
    y: number,
    options: {
      size?: number;
      bold?: boolean;
      color?: typeof INK;
      width?: number;
      align?: "left" | "right";
    } = {},
  ) {
    const size = options.size ?? 8;
    const font = options.bold ? this.fonts.bold : this.fonts.regular;
    let value = this.safe(content);
    if (options.width) value = fit(font, value, size, options.width);
    const textWidth = font.widthOfTextAtSize(value, size);
    const drawX = options.align === "right" && options.width ? x + options.width - textWidth : x;
    this.page.drawText(value, { x: drawX, y, size, font, color: options.color ?? INK });
  }

  rect(x: number, y: number, width: number, height: number, fill?: typeof INK) {
    this.page.drawRectangle({
      x,
      y,
      width,
      height,
      color: fill,
      borderColor: RULE,
      borderWidth: 0.6,
    });
  }

  line(x1: number, y1: number, x2: number, y2: number) {
    this.page.drawLine({
      start: { x: x1, y: y1 },
      end: { x: x2, y: y2 },
      thickness: 0.6,
      color: RULE,
    });
  }

  /** Casilla con etiqueta en versalitas sobre el valor; `top` es el borde superior. */
  box(
    x: number,
    top: number,
    width: number,
    title: string,
    content: string,
    options: { numeric?: boolean; fill?: typeof INK; bold?: boolean; size?: number } = {},
  ) {
    this.rect(x, top - BOX_H, width, BOX_H, options.fill);
    this.rect(x, top - LABEL_H, width, LABEL_H, options.fill ?? LABEL_BG);
    this.text(title.toUpperCase(), x + 4, top - 8, {
      size: 6,
      bold: true,
      color: MUTED,
      width: width - 8,
    });
    this.text(content || "—", x + 4, top - BOX_H + 5, {
      size: options.size ?? 8.5,
      bold: options.bold,
      width: width - 8,
      align: options.numeric ? "right" : "left",
      color: content ? INK : MUTED,
    });
  }
}

/** Casillas repartidas en 12 columnas, como la cabecera del recibo en pantalla. */
const boxRow = (
  page: ReceiptPage,
  top: number,
  boxes: readonly (readonly [string, string, number])[],
) => {
  let x = MARGIN;
  for (const [title, content, span] of boxes) {
    const width = (CONTENT * span) / 12;
    page.box(x, top, width, title, content);
    x += width;
  }
  return top - BOX_H;
};

const COLUMNS = [
  { title: "Unidades", width: 58, numeric: true },
  { title: "Precio", width: 62, numeric: true },
  { title: "% Jorn.", width: 44, numeric: true },
  { title: "Conceptos", width: 0, numeric: false },
  { title: "Devengos", width: 70, numeric: true },
  { title: "Retención", width: 70, numeric: true },
] as const;

const columnWidths = (): number[] => {
  const fixed = COLUMNS.reduce((sum, column) => sum + column.width, 0);
  return COLUMNS.map((column) => column.width || CONTENT - fixed);
};

const drawBodyFrame = (page: ReceiptPage, top: number, bottom: number) => {
  const widths = columnWidths();
  page.rect(MARGIN, bottom, CONTENT, top - bottom);
  page.rect(MARGIN, top - LABEL_H - 2, CONTENT, LABEL_H + 2, LABEL_BG);
  let x = MARGIN;
  COLUMNS.forEach((column, index) => {
    const width = widths[index] ?? 0;
    if (index > 0) page.line(x, top, x, bottom);
    page.text(column.title.toUpperCase(), x + 4, top - 9.5, {
      size: 6,
      bold: true,
      color: MUTED,
      width: width - 8,
      align: column.numeric ? "right" : "left",
    });
    x += width;
  });
  return top - LABEL_H - 2 - 10;
};

const drawReceipt = (
  document: PDFDocument,
  fonts: Fonts,
  safe: (text: string) => string,
  entry: PayrollReceiptEntry,
) => {
  const { receipt } = entry;
  const { worker } = receipt;
  const widths = columnWidths();

  const newPage = (continuation: boolean) => {
    const page = new ReceiptPage(document.addPage([PAGE.width, PAGE.height]), fonts, safe);
    let top = PAGE.height - MARGIN;
    page.text(receipt.company.name || "Recibo de nómina", MARGIN, top - 12, {
      size: 13,
      bold: true,
      width: CONTENT * 0.6,
    });
    page.text(
      `${paymentTypeLabel(receipt.paymentType)} · ${receipt.currencyId}`,
      MARGIN,
      top - 12,
      { size: 7.5, color: MUTED, width: CONTENT, align: "right" },
    );
    page.text(
      `${entry.payName} · pago ${formatDate(entry.paymentDate)}${continuation ? " · continuación" : ""}`,
      MARGIN,
      top - 24,
      { size: 7.5, color: MUTED, width: CONTENT },
    );
    top -= 32;
    top = boxRow(page, top, [
      ["Empresa", receipt.company.name, 4],
      ["C.I.F.", receipt.company.taxId, 2],
      ["Nº inscripción S.S.", receipt.company.socialSecurityRegistration, 3],
      ["Periodo liquidación", receipt.periodLabel, 3],
    ]);
    top = boxRow(page, top, [
      ["Trabajador", worker.fullName, 4],
      ["NIF", worker.nationalId, 2],
      ["Nº afiliación S.S.", worker.socialSecurityNumber, 3],
      ["GT", worker.contributionGroup, 1],
      ["Nº matrícula", worker.employeeId, 2],
    ]);
    top = boxRow(page, top, [
      ["Centro de trabajo", receipt.workCenter, 4],
      ["Grupo profesional", receipt.professionalGroup, 5],
      ["Antigüedad en la empresa", formatDate(receipt.seniorityDate), 3],
    ]);
    const bodyTop = top - 6;
    return { page, bodyTop, firstRow: drawBodyFrame(page, bodyTop, MARGIN + FOOTER_H + 6) };
  };

  let { page, firstRow: y } = newPage(false);
  const lastRowY = MARGIN + FOOTER_H + 6 + 6;

  for (const line of receipt.lines) {
    if (y < lastRowY) ({ page, firstRow: y } = newPage(true));
    const informative = line.section === "informative";
    const color = informative ? MUTED : INK;
    const cells = [
      formatLineUnits(line),
      formatDecimal(line.price),
      formatPercentage(line.percentage),
      lineConcept(line),
      formatDecimal(line.earning),
      formatDecimal(line.deduction),
    ];
    let x = MARGIN;
    cells.forEach((content, index) => {
      const width = widths[index] ?? 0;
      const indent = index === 3 && line.level === 1 ? 12 : 0;
      page.text(content, x + 4 + indent, y, {
        size: 7.5,
        color,
        width: width - 8 - indent,
        align: COLUMNS[index]?.numeric ? "right" : "left",
      });
      x += width;
    });
    y -= ROW_H;
  }

  // Pie: bases y totales, acumulados y líquido, y datos bancarios.
  let top = MARGIN + FOOTER_H;
  const left = CONTENT * (2 / 3);
  const baseWidth = left / 5;
  const bases: [string, number][] = [
    ["Remunerac. total", receipt.bases.totalRemuneration],
    ["Prorrata extras", receipt.bases.extraPayProration],
    ["Base total", receipt.bases.totalBase],
    ["Régimen general", receipt.bases.generalRegimeBase],
    ["Base desempleo", receipt.bases.unemploymentBase],
  ];
  bases.forEach(([title, amount], index) =>
    page.box(MARGIN + baseWidth * index, top, baseWidth, title, formatDecimal(amount), {
      numeric: true,
    }),
  );
  const totalWidth = (CONTENT - left) / 2;
  page.box(
    MARGIN + left,
    top,
    totalWidth,
    "Total devengado",
    formatDecimal(receipt.totals.accrued),
    { numeric: true, bold: true },
  );
  page.box(
    MARGIN + left + totalWidth,
    top,
    totalWidth,
    "Total a deducir",
    formatDecimal(receipt.totals.deducted),
    { numeric: true, bold: true },
  );
  top -= BOX_H;

  const accWidth = left / 3;
  const accumulated: [string, number][] = [
    ["Base IRPF acumulada", receipt.accumulated.irpfBase],
    ["Cuota IRPF acumulada", receipt.accumulated.irpfQuota],
    ["Cuota S.S. acumulada", receipt.accumulated.socialSecurityQuota],
  ];
  accumulated.forEach(([title, amount], index) =>
    page.box(MARGIN + accWidth * index, top, accWidth, title, formatDecimal(amount), {
      numeric: true,
    }),
  );
  page.box(
    MARGIN + left,
    top,
    CONTENT - left,
    "Líquido total a percibir",
    `${formatDecimal(receipt.totals.netPay)} ${receipt.currencyId}`,
    { numeric: true, bold: true, fill: NET_BG, size: 11 },
  );
  top -= BOX_H;

  const bankWidth = CONTENT / 2;
  (
    [
      ["Datos del banco", receipt.bankPayments],
      ["Datos del banco beneficiario", receipt.beneficiaryPayments],
    ] as const
  ).forEach(([title, payments], index) => {
    const x = MARGIN + bankWidth * index;
    const content = payments
      .map((payment) => `${payment.account}  ${formatDecimal(payment.amount)}`)
      .join("   ");
    page.box(x, top, bankWidth, title, content);
  });
  top -= BOX_H;

  if (receipt.unmapped.accrued !== 0 || receipt.unmapped.deducted !== 0) {
    page.text(
      `Recibo incompleto: faltan ${formatDecimal(receipt.unmapped.accrued)} en devengos y ${formatDecimal(receipt.unmapped.deducted)} en retenciones respecto a los totales de Meta4.`,
      MARGIN,
      top - 12,
      { size: 7, color: MUTED, width: CONTENT },
    );
  }
};

/** Un PDF con una página (o más, si hay muchas líneas) por nómina. */
export const exportReceiptsToPdf = async (
  entries: readonly PayrollReceiptEntry[],
): Promise<Uint8Array> => {
  const document = await PDFDocument.create();
  document.setTitle(entries.length === 1 ? "Recibo de nómina" : "Recibos de nómina");
  document.setCreator("powermeta4");
  const fonts: Fonts = {
    regular: await document.embedFont(StandardFonts.Helvetica),
    bold: await document.embedFont(StandardFonts.HelveticaBold),
  };
  const safe = makeSafe(fonts.regular);
  for (const entry of entries) drawReceipt(document, fonts, safe, entry);
  return document.save();
};
