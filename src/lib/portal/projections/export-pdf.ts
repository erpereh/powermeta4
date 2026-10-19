import "server-only";

import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage, type RGB } from "pdf-lib";

import {
  projectionExportSubtitle,
  projectionExportTitle,
  projectionHistoryTable,
  projectionSectionTable,
  type ExportCell,
  type ExportTable,
} from "./export-layout";
import type { ProjectionReport, ProjectionSegment } from "./types";

// El PDF no usa los tokens del tema: colores de printGrafDoughnut y grises neutros.
const PALETTE: readonly RGB[] = [
  [222, 0, 30],
  [54, 162, 235],
  [255, 205, 86],
  [255, 159, 64],
  [75, 192, 192],
  [153, 102, 255],
  [255, 99, 132],
  [82, 192, 75],
  [175, 94, 18],
  [18, 55, 175],
  [84, 32, 90],
  [156, 156, 156],
  [72, 72, 72],
  [155, 118, 0],
].map(([r, g, b]) => rgb(r / 255, g / 255, b / 255));
const INK = rgb(0.1, 0.1, 0.1);
const MUTED = rgb(0.42, 0.42, 0.42);
const RULE = rgb(0.8, 0.8, 0.8);
const HEADER_BG = rgb(0.93, 0.93, 0.93);
const SECTION_BG = rgb(0.96, 0.96, 0.96);
const TITLE = rgb(222 / 255, 0, 30 / 255);

const MARGIN = 28;
const ROW_H = 13;

const money = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: "always",
});
const formatCell = (value: ExportCell): string =>
  value === null ? "—" : typeof value === "number" ? `${money.format(value)} €` : value;

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

/** Parte un texto en líneas que caben en `width`; la última se recorta si sobra. */
const wrap = (font: PDFFont, text: string, size: number, width: number, max: number) => {
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= width || !current) current = next;
    else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.length > max
    ? [...lines.slice(0, max - 1), fit(font, lines.slice(max - 1).join(" "), size, width)]
    : lines.map((line) => fit(font, line, size, width));
};

class Writer {
  page!: PDFPage;
  y = 0;

  constructor(
    private readonly document: PDFDocument,
    private readonly size: [number, number],
    readonly fonts: Fonts,
    private readonly safe: (text: string) => string,
    private readonly heading: string,
  ) {
    this.addPage();
  }

  get width() {
    return this.size[0] - MARGIN * 2;
  }

  addPage() {
    this.page = this.document.addPage(this.size);
    this.y = this.size[1] - MARGIN;
    this.text(this.heading, MARGIN, this.y - 8, { size: 7, color: MUTED });
    this.y -= 18;
  }

  /** Salto de página si no caben `height` puntos más. */
  ensure(height: number) {
    if (this.y - height < MARGIN) this.addPage();
  }

  text(
    content: string,
    x: number,
    y: number,
    options: {
      size?: number;
      bold?: boolean;
      color?: RGB;
      width?: number;
      align?: "left" | "right";
    } = {},
  ) {
    const size = options.size ?? 7;
    const font = options.bold ? this.fonts.bold : this.fonts.regular;
    let value = this.safe(content);
    if (options.width) value = fit(font, value, size, options.width);
    const textWidth = font.widthOfTextAtSize(value, size);
    const drawX = options.align === "right" && options.width ? x + options.width - textWidth : x;
    this.page.drawText(value, { x: drawX, y, size, font, color: options.color ?? INK });
  }

  safeText(content: string) {
    return this.safe(content);
  }
}

/** Ancho de columnas: la primera para el concepto y el resto repartido. */
const columnWidths = (table: ExportTable, available: number): number[] => {
  const count = table.headers.length;
  if (count <= 4) {
    const width = Math.min(available, 120 + (count - 1) * 85);
    return [width - (count - 1) * 85, ...Array<number>(count - 1).fill(85)];
  }
  const concept = 130;
  const total = 62;
  const pay = (available - concept - total) / (count - 2);
  return [concept, ...Array<number>(count - 2).fill(pay), total];
};

const drawTable = (writer: Writer, table: ExportTable) => {
  const widths = columnWidths(table, writer.width);
  const tableWidth = widths.reduce((sum, width) => sum + width, 0);
  const many = table.headers.length > 12;
  const size = many ? 5.6 : 6.8;
  const { bold } = writer.fonts;
  const headerLines = table.headers.map((header, index) =>
    wrap(
      bold,
      writer.safeText(header || (index === 0 ? table.title : "")),
      size,
      (widths[index] ?? 0) - 4,
      3,
    ),
  );
  const headerHeight = Math.max(...headerLines.map((lines) => lines.length)) * (size + 1.5) + 6;

  const drawHeader = () => {
    writer.page.drawRectangle({
      x: MARGIN,
      y: writer.y - headerHeight,
      width: tableWidth,
      height: headerHeight,
      color: HEADER_BG,
    });
    let x = MARGIN;
    headerLines.forEach((lines, index) => {
      const width = widths[index] ?? 0;
      lines.forEach((line, lineIndex) =>
        writer.text(line, x + 2, writer.y - 4 - (lineIndex + 1) * (size + 1.5) + 1.5, {
          size,
          bold: true,
          color: MUTED,
          width: width - 4,
          align: table.numeric.includes(index) ? "right" : "left",
        }),
      );
      x += width;
    });
    writer.y -= headerHeight;
  };

  // Comparativa y tablas con cabecera propia: su título va encima.
  const titled = Boolean(table.headers[0]) && table.headers[0] !== table.title;
  writer.ensure(headerHeight + ROW_H * Math.min(3, table.rows.length) + (titled ? 14 : 0));
  if (titled) {
    writer.text(table.title, MARGIN, writer.y - 9, { size: 9, bold: true });
    writer.y -= 14;
  }
  drawHeader();
  for (const row of table.rows) {
    if (writer.y - ROW_H < MARGIN) {
      writer.addPage();
      drawHeader();
    }
    const top = writer.y;
    if (row.kind === "section") {
      writer.page.drawRectangle({
        x: MARGIN,
        y: top - ROW_H,
        width: tableWidth,
        height: ROW_H,
        color: SECTION_BG,
      });
      writer.text(String(row.cells[0] ?? ""), MARGIN + 3, top - ROW_H + 4, { size, bold: true });
    } else {
      let x = MARGIN;
      row.cells.forEach((value, index) => {
        const width = widths[index] ?? 0;
        writer.text(formatCell(value), x + 2, top - ROW_H + 4, {
          size,
          bold: row.kind === "total",
          width: width - 4,
          align: table.numeric.includes(index) ? "right" : "left",
          color: value === null ? MUTED : INK,
        });
        x += width;
      });
    }
    writer.page.drawLine({
      start: { x: MARGIN, y: top - ROW_H },
      end: { x: MARGIN + tableWidth, y: top - ROW_H },
      thickness: 0.4,
      color: RULE,
    });
    writer.y -= ROW_H;
  }
  writer.y -= 14;
};

/** Sector de corona circular como trayecto SVG (origen arriba, sentido horario). */
const ringPath = (r: number, inner: number, start: number, end: number): string => {
  const point = (radius: number, angle: number) =>
    `${(radius * Math.sin(angle)).toFixed(3)} ${(-radius * Math.cos(angle)).toFixed(3)}`;
  const large = end - start > Math.PI ? 1 : 0;
  return [
    `M ${point(r, start)}`,
    `A ${r} ${r} 0 ${large} 1 ${point(r, end)}`,
    `L ${point(inner, end)}`,
    `A ${inner} ${inner} 0 ${large} 0 ${point(inner, start)}`,
    "Z",
  ].join(" ");
};

/** Gráfica de anillo con leyenda «%  concepto / importe», como printGrafDoughnut. */
const drawDonut = (
  writer: Writer,
  x: number,
  top: number,
  width: number,
  title: string,
  segments: readonly ProjectionSegment[],
) => {
  writer.text(title, x, top - 10, { size: 9, bold: true, width });
  const positive = segments.filter((segment) => segment.value !== null && segment.value > 0);
  const total = positive.reduce((sum, segment) => sum + (segment.value ?? 0), 0);
  const radius = Math.min(52, width / 4);
  const cx = x + radius + 2;
  const cy = top - 24 - radius;
  if (total > 0) {
    let angle = 0;
    positive.forEach((segment, index) => {
      const sweep = ((segment.value ?? 0) / total) * Math.PI * 2;
      const end = sweep >= Math.PI * 2 - 1e-6 ? angle + Math.PI * 2 - 1e-4 : angle + sweep;
      writer.page.drawSvgPath(ringPath(radius, radius * 0.55, angle, end), {
        x: cx,
        y: cy,
        color: PALETTE[index % PALETTE.length],
        borderColor: rgb(1, 1, 1),
        borderWidth: 0.6,
      });
      angle = end;
    });
  } else {
    writer.text("Sin importes para la gráfica", x, cy, { size: 7, color: MUTED, width });
  }
  const legendX = cx + radius + 10;
  const legendWidth = x + width - legendX;
  let legendY = top - 26;
  positive.forEach((segment, index) => {
    const share = Math.round(((segment.value ?? 0) * 100) / total);
    writer.page.drawRectangle({
      x: legendX,
      y: legendY - 5,
      width: 8,
      height: 6,
      color: PALETTE[index % PALETTE.length],
    });
    writer.text(`${share < 1 ? "<1" : share}% ${segment.label}`, legendX + 11, legendY - 5, {
      size: 6.5,
      width: legendWidth - 11,
    });
    writer.text(formatCell(segment.value), legendX + 11, legendY - 12.5, {
      size: 6.5,
      color: MUTED,
      width: legendWidth - 11,
    });
    legendY -= 17;
  });
  return Math.min(cy - radius, legendY) - 8;
};

/** Informe completo en PDF: cabecera, gráficas, comparativa y todas las tablas. */
export async function exportProjectionToPdf(report: ProjectionReport): Promise<Uint8Array> {
  const document = await PDFDocument.create();
  document.setTitle(projectionExportTitle(report));
  document.setCreator("powermeta4");
  const fonts: Fonts = {
    regular: await document.embedFont(StandardFonts.Helvetica),
    bold: await document.embedFont(StandardFonts.HelveticaBold),
  };
  // A3 apaisado cuando hay muchas pagas, para no comprimir los importes.
  const size: [number, number] = report.pays.length > 14 ? [1190.55, 841.89] : [841.89, 595.28];
  const writer = new Writer(
    document,
    size,
    fonts,
    makeSafe(fonts.regular),
    `${projectionExportTitle(report)} · ${report.employee.id} - ${report.employee.name}`,
  );

  writer.text(projectionExportTitle(report), MARGIN, writer.y - 14, {
    size: 15,
    bold: true,
    color: TITLE,
  });
  writer.y -= 22;
  projectionExportSubtitle(report).forEach((line, index) => {
    writer.text(line, MARGIN, writer.y - 10, { size: 9, bold: index === 0 });
    writer.y -= 13;
  });
  writer.y -= 8;

  const charts = [
    { title: `Retribución Directa ${report.year}`, segments: report.direct },
    { title: "Compensación Total", segments: report.compensation },
    ...(report.flexible.length
      ? [{ title: "Retribución Flexible", segments: report.flexible }]
      : []),
  ];
  const chartWidth = (writer.width - (charts.length - 1) * 16) / charts.length;
  const legendRows = Math.max(...charts.map((chart) => chart.segments.length));
  writer.ensure(Math.max(150, 40 + legendRows * 17));
  const chartTop = writer.y;
  const bottoms = charts.map((chart, index) =>
    drawDonut(
      writer,
      MARGIN + index * (chartWidth + 16),
      chartTop,
      chartWidth,
      chart.title,
      chart.segments,
    ),
  );
  writer.y = Math.min(...bottoms);

  const history = projectionHistoryTable(report);
  if (history) drawTable(writer, history);

  writer.addPage();
  for (const section of report.sections)
    drawTable(writer, projectionSectionTable(section, report.pays));

  if (report.notices.length) {
    writer.ensure(14 + report.notices.length * 11);
    writer.text("Avisos", MARGIN, writer.y - 9, { size: 8, bold: true });
    writer.y -= 14;
    for (const notice of report.notices) {
      writer.text(notice, MARGIN, writer.y - 8, { size: 7, color: MUTED, width: writer.width });
      writer.y -= 11;
    }
  }
  return document.save();
}
