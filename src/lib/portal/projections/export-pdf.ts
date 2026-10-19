import "server-only";

import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage, type RGB } from "pdf-lib";

import {
  projectionExportSubtitle,
  projectionExportTitle,
  projectionHistoryTable,
  projectionPdfTables,
  projectionSectionTable,
  type ExportCell,
  type ExportTable,
} from "./export-layout";
import type { ProjectionReport, ProjectionSegment } from "./types";

// Colores de los documentos originales, independientes del tema del navegador.
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
const INK = rgb(0.14, 0.2, 0.28);
const MUTED = rgb(0.35, 0.4, 0.46);
const RULE = rgb(0.82, 0.86, 0.89);
const HEADER_BG = rgb(0.91, 0.93, 0.95);
const SECTION_BG = rgb(0.96, 0.97, 0.98);
const TOTAL_BG = rgb(0.86, 0.91, 0.95);
const TITLE = rgb(222 / 255, 0, 30 / 255);
const PAGE: [number, number] = [841.89, 595.28];
const MARGIN = 28;
const BOTTOM = 34;
const GAP = 14;
const SIZE = 8;
const LEADING = 10;
const PAD = 4;
const WIDTH = PAGE[0] - MARGIN * 2;
const HALF = (WIDTH - GAP) / 2;
const money = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: "always",
});
const formatCell = (value: ExportCell): string =>
  value === null ? "—" : typeof value === "number" ? `${money.format(value)} €` : value;
type Fonts = { regular: PDFFont; bold: PDFFont };

/** Las fuentes estándar codifican WinAnsi. Normaliza saltos antes de dibujar. */
const makeSafe = (font: PDFFont) => {
  const cache = new Map<string, boolean>();
  return (text: string): string =>
    [...text.replaceAll(/[\r\n\t]/g, " ")]
      .map((char) => {
        if (!cache.has(char)) {
          try {
            font.widthOfTextAtSize(char, SIZE);
            cache.set(char, true);
          } catch {
            cache.set(char, false);
          }
        }
        return cache.get(char) ? char : "?";
      })
      .join("");
};

/** Envuelve sin puntos suspensivos; también divide palabras más anchas que la celda. */
const wrap = (font: PDFFont, text: string, size: number, width: number): string[] => {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (font.widthOfTextAtSize(line ? `${line} ${word}` : word, size) <= width) {
      line = line ? `${line} ${word}` : word;
      continue;
    }
    if (line) {
      lines.push(line);
      line = "";
    }
    for (const char of word) {
      if (line && font.widthOfTextAtSize(line + char, size) > width) {
        lines.push(line);
        line = "";
      }
      line += char;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
};

class Writer {
  page!: PDFPage;
  y = 0;
  pageTop = 0;
  beforePage?: () => void;
  constructor(
    readonly document: PDFDocument,
    readonly fonts: Fonts,
    readonly safe: (text: string) => string,
    private readonly heading: string,
  ) {
    this.addPage();
  }

  get capacity() {
    return this.pageTop - BOTTOM;
  }
  addPage() {
    this.beforePage?.();
    this.page = this.document.addPage(PAGE);
    const lines = wrap(this.fonts.regular, this.safe(this.heading), 7, WIDTH);
    let y = PAGE[1] - MARGIN;
    for (const line of lines) {
      this.text(line, MARGIN, y - 7, 7, false, MUTED);
      y -= 10;
    }
    this.page.drawLine({
      start: { x: MARGIN, y: y - 3 },
      end: { x: PAGE[0] - MARGIN, y: y - 3 },
      thickness: 0.5,
      color: RULE,
    });
    this.pageTop = this.y = y - 12;
  }
  ensure(height: number) {
    if (this.y - height < BOTTOM) this.addPage();
  }
  text(
    content: string,
    x: number,
    y: number,
    size = SIZE,
    bold = false,
    color = INK,
    right?: number,
  ) {
    const font = bold ? this.fonts.bold : this.fonts.regular;
    const value = this.safe(content);
    this.page.drawText(value, {
      x: right === undefined ? x : right - font.widthOfTextAtSize(value, size),
      y,
      size,
      font,
      color,
    });
  }
  paragraph(text: string, size = SIZE, bold = false, color = INK) {
    const font = bold ? this.fonts.bold : this.fonts.regular;
    for (const line of wrap(font, this.safe(text), size, WIDTH)) {
      this.ensure(size + 4);
      this.text(line, MARGIN, this.y - size, size, bold, color);
      this.y -= size + 4;
    }
  }
  finish() {
    const pages = this.document.getPages();
    pages.forEach((page, index) => {
      this.page = page;
      this.text("powermeta4", MARGIN, 17, 7, false, MUTED);
      this.text(`${index + 1} / ${pages.length}`, 0, 17, 7, false, MUTED, PAGE[0] - MARGIN);
    });
  }
}

type RowLayout = { cells: string[][]; height: number; kind: ExportTable["rows"][number]["kind"] };
type TableLayout = {
  table: ExportTable;
  widths: number[];
  title: string[];
  header: string[][];
  headerHeight: number;
  rows: RowLayout[];
  height: number;
};
const rowHeight = (cells: string[][]) =>
  Math.max(18, Math.max(...cells.map((cell) => cell.length)) * LEADING + PAD * 2);
const tableLayout = (writer: Writer, table: ExportTable, width: number): TableLayout => {
  const count = table.headers.length;
  const concept = count > 4 ? 190 : count === 2 ? width - 112 : width * 0.48;
  const widths =
    count > 4
      ? [concept, ...Array<number>(count - 2).fill((width - concept - 78) / (count - 2)), 78]
      : [concept, ...Array<number>(count - 1).fill((width - concept) / (count - 1))];
  const title = wrap(writer.fonts.bold, writer.safe(table.title), 10, width - PAD * 2);
  const header = table.headers.map((text, index) =>
    wrap(
      writer.fonts.bold,
      writer.safe(index === 0 && (!text || text === table.title || count > 4) ? "Concepto" : text),
      SIZE,
      widths[index] - PAD * 2,
    ),
  );
  const headerHeight = title.length * 12 + 6 + rowHeight(header);
  const rows = table.rows.map((row): RowLayout => {
    const font = row.kind === "concept" ? writer.fonts.regular : writer.fonts.bold;
    const cells = row.cells.map((value, index) =>
      wrap(
        font,
        writer.safe(formatCell(value)),
        SIZE,
        (row.kind === "section" ? width : widths[index]) - PAD * 2,
      ),
    );
    return { kind: row.kind, cells, height: rowHeight(cells) };
  });
  return {
    table,
    widths,
    title,
    header,
    headerHeight,
    rows,
    height: headerHeight + rows.reduce((sum, row) => sum + row.height, 0) + GAP,
  };
};

const drawCells = (writer: Writer, layout: TableLayout, row: RowLayout, x: number, top: number) => {
  const width = layout.widths.reduce((sum, value) => sum + value, 0);
  writer.page.drawRectangle({
    x,
    y: top - row.height,
    width,
    height: row.height,
    color: row.kind === "total" ? TOTAL_BG : row.kind === "section" ? HEADER_BG : SECTION_BG,
  });
  let left = x;
  row.cells.forEach((lines, index) => {
    const cellWidth = row.kind === "section" ? width : layout.widths[index];
    lines.forEach((line, lineIndex) =>
      writer.text(
        line,
        left + PAD,
        top - PAD - SIZE - lineIndex * LEADING,
        SIZE,
        row.kind !== "concept",
        line === "—" ? MUTED : INK,
        row.kind !== "section" && layout.table.numeric.includes(index)
          ? left + cellWidth - PAD
          : undefined,
      ),
    );
    left += cellWidth;
  });
  writer.page.drawLine({
    start: { x, y: top - row.height },
    end: { x: x + width, y: top - row.height },
    thickness: 0.35,
    color: RULE,
  });
};

const drawHeader = (
  writer: Writer,
  layout: TableLayout,
  x: number,
  top: number,
  continued = false,
) => {
  let y = top;
  for (const line of layout.title) {
    writer.text(line, x + PAD, y - 10, 10, true);
    y -= 12;
  }
  if (continued) {
    writer.text("Continuación", x + PAD, y - SIZE, SIZE, false, MUTED);
    y -= 12;
  }
  y -= 6;
  const header: RowLayout = {
    cells: layout.header,
    height: rowHeight(layout.header),
    kind: "section",
  };
  const width = layout.widths.reduce((sum, value) => sum + value, 0);
  writer.page.drawRectangle({
    x,
    y: y - header.height,
    width,
    height: header.height,
    color: HEADER_BG,
  });
  let left = x;
  header.cells.forEach((lines, index) => {
    lines.forEach((line, lineIndex) =>
      writer.text(
        line,
        left + PAD,
        y - PAD - SIZE - lineIndex * LEADING,
        SIZE,
        true,
        MUTED,
        layout.table.numeric.includes(index) ? left + layout.widths[index] - PAD : undefined,
      ),
    );
    left += layout.widths[index];
  });
  return y - header.height;
};

type Block = { height: number; draw: (x: number, top: number) => void };
const tableBlock = (writer: Writer, layout: TableLayout): Block => ({
  height: layout.height,
  draw(x, top) {
    let y = drawHeader(writer, layout, x, top);
    for (const row of layout.rows) {
      drawCells(writer, layout, row, x, y);
      y -= row.height;
    }
  },
});

/** Coloca bloques compactos en huecos existentes, sin abrir otra página. */
const fillColumns = (bottoms: number[], pending: Block[]) => {
  while (pending.length) {
    const column = bottoms[0] >= bottoms[1] ? 0 : 1;
    const index = pending.findIndex((block) => bottoms[column] - block.height >= BOTTOM);
    if (index < 0) break;
    const [block] = pending.splice(index, 1);
    block.draw(MARGIN + column * (HALF + GAP), bottoms[column]);
    bottoms[column] -= block.height;
  }
};

/** Aprovecha dos columnas con cursores independientes; no fuerza páginas por sección. */
const drawColumns = (writer: Writer, blocks: readonly Block[], fillers: Block[] = []) => {
  let bottoms = [writer.y, writer.y];
  const remaining = [...blocks];
  while (remaining.length) {
    let column = bottoms[0] >= bottoms[1] ? 0 : 1;
    let index = remaining.findIndex((block) => bottoms[column] - block.height >= BOTTOM);
    if (index < 0) {
      fillColumns(bottoms, fillers);
      writer.y = Math.min(...bottoms);
      writer.addPage();
      bottoms = [writer.y, writer.y];
      column = 0;
      index = 0;
    }
    const [block] = remaining.splice(index, 1);
    block.draw(MARGIN + column * (HALF + GAP), bottoms[column]);
    bottoms[column] -= block.height;
  }
  fillColumns(bottoms, fillers);
  writer.y = Math.min(...bottoms);
};

/** Tablas anchas: repite cabeceras, conserva subtítulos y permite filas multilínea. */
const drawTable = (writer: Writer, table: ExportTable) => {
  const layout = tableLayout(writer, table, WIDTH);
  const firstRows = layout.rows.slice(0, 2).reduce((sum, row) => sum + row.height, 0);
  writer.ensure(Math.min(writer.capacity, layout.headerHeight + firstRows));
  writer.y = drawHeader(writer, layout, MARGIN, writer.y);
  const nextPage = () => {
    writer.addPage();
    writer.y = drawHeader(writer, layout, MARGIN, writer.y, true);
  };
  layout.rows.forEach((row, index) => {
    const next = layout.rows[index + 1];
    const keep = row.kind === "section" || next?.kind === "total";
    const needed = row.height + (keep && next ? next.height : 0);
    const available = writer.capacity - layout.headerHeight - 12;
    if (needed <= available && writer.y - needed < BOTTOM) nextPage();
    if (row.height <= available) {
      if (writer.y - row.height < BOTTOM) nextPage();
      drawCells(writer, layout, row, MARGIN, writer.y);
      writer.y -= row.height;
      return;
    }
    // Una etiqueta excepcionalmente larga puede continuar sin perder texto.
    const count = Math.max(...row.cells.map((cell) => cell.length));
    let offset = 0;
    while (offset < count) {
      const lines = Math.floor((writer.y - BOTTOM - PAD * 2) / LEADING);
      if (lines < 1) {
        nextPage();
        continue;
      }
      const cells = row.cells.map((cell) => cell.slice(offset, offset + lines));
      const fragment = { ...row, cells, height: rowHeight(cells) };
      drawCells(writer, layout, fragment, MARGIN, writer.y);
      writer.y -= fragment.height;
      offset += lines;
      if (offset < count) nextPage();
    }
  });
  writer.y -= GAP;
};

/** Corona circular, origen arriba y sentido horario. */
const ringPath = (radius: number, inner: number, start: number, end: number) => {
  const point = (r: number, a: number) =>
    `${(r * Math.sin(a)).toFixed(3)} ${(-r * Math.cos(a)).toFixed(3)}`;
  const large = end - start > Math.PI ? 1 : 0;
  return [
    `M ${point(radius, start)}`,
    `A ${radius} ${radius} 0 ${large} 1 ${point(radius, end)}`,
    `L ${point(inner, end)}`,
    `A ${inner} ${inner} 0 ${large} 0 ${point(inner, start)}`,
    "Z",
  ].join(" ");
};

/** Leyenda completa, incluidos ceros y ausencias; porcentajes solo con importes positivos. */
const chartBlocks = (
  writer: Writer,
  title: string,
  segments: readonly ProjectionSegment[],
): Block[] => {
  const negative = segments.some((segment) => segment.value !== null && segment.value < 0);
  const positive = segments.filter((segment) => segment.value !== null && segment.value > 0);
  const total = positive.reduce((sum, segment) => sum + (segment.value ?? 0), 0);
  const legendLeft = 117;
  const legendWidth = HALF - legendLeft - 12;
  const titleLines = wrap(writer.fonts.bold, writer.safe(title), 10, HALF - 10);
  const titleHeight = titleLines.length * 12 + 10;
  const maxLines = Math.max(1, Math.floor((writer.capacity - GAP - titleHeight - 16) / LEADING));
  const rows = segments.flatMap((segment) => {
    const share =
      total > 0 && !negative && segment.value !== null
        ? `${segment.value > 0 && (segment.value * 100) / total < 1 ? "<1" : Math.round((segment.value * 100) / total)}% `
        : "";
    const lines = wrap(
      writer.fonts.regular,
      writer.safe(share + segment.label),
      SIZE,
      legendWidth - 12,
    );
    const parts: { segment: ProjectionSegment; lines: string[]; height: number }[] = [];
    for (let start = 0; start < lines.length; start += maxLines) {
      const part = lines.slice(start, start + maxLines);
      parts.push({ segment, lines: part, height: part.length * LEADING + 16 });
    }
    return parts;
  });
  const blocks: Block[] = [];
  let start = 0;
  do {
    const selected: typeof rows = [];
    let height = titleHeight;
    while (
      start < rows.length &&
      (height + rows[start].height <= writer.capacity - GAP || selected.length === 0)
    ) {
      selected.push(rows[start++]);
      height += selected.at(-1)?.height ?? 0;
    }
    const continued = blocks.length > 0;
    blocks.push({
      height: Math.max(105 + titleHeight, height) + GAP,
      draw(x, top) {
        let y = top;
        titleLines.forEach((line) => {
          writer.text(line, x + PAD, y - 10, 10, true);
          y -= 12;
        });
        y -= 10;
        if (continued) writer.text("Continuación", x + PAD, y - SIZE, SIZE, false, MUTED);
        const radius = 45;
        const cx = x + 51;
        const cy = y - 54;
        if (!continued && total > 0 && !negative) {
          let angle = 0;
          positive.forEach((segment, index) => {
            const sweep = ((segment.value ?? 0) / total) * Math.PI * 2;
            const end = angle + Math.min(sweep, Math.PI * 2 - 1e-4);
            writer.page.drawSvgPath(ringPath(radius, radius * 0.58, angle, end), {
              x: cx,
              y: cy,
              color: PALETTE[index % PALETTE.length],
              borderColor: rgb(1, 1, 1),
              borderWidth: 0.6,
            });
            angle = end;
          });
        } else if (!continued) {
          const lines = wrap(
            writer.fonts.regular,
            negative ? "Ajustes negativos. Ver importes." : "Sin importes para la gráfica",
            SIZE,
            100,
          );
          lines.forEach((line, index) =>
            writer.text(line, x + PAD, cy - index * LEADING, SIZE, false, MUTED),
          );
        }
        for (const row of selected) {
          const index = positive.indexOf(row.segment);
          if (index >= 0 && !negative)
            writer.page.drawRectangle({
              x: x + legendLeft,
              y: y - 8,
              width: 6,
              height: 6,
              color: PALETTE[index % PALETTE.length],
            });
          row.lines.forEach((line, lineIndex) =>
            writer.text(line, x + legendLeft + 12, y - SIZE - lineIndex * LEADING),
          );
          writer.text(
            formatCell(row.segment.value),
            x + legendLeft + 12,
            y - row.lines.length * LEADING - SIZE - 2,
            SIZE,
            false,
            MUTED,
          );
          y -= row.height;
        }
      },
    });
  } while (start < rows.length);
  return blocks;
};

export async function exportProjectionToPdf(report: ProjectionReport): Promise<Uint8Array> {
  const document = await PDFDocument.create();
  document.setTitle(projectionExportTitle(report));
  document.setCreator("powermeta4");
  const fonts: Fonts = {
    regular: await document.embedFont(StandardFonts.Helvetica),
    bold: await document.embedFont(StandardFonts.HelveticaBold),
  };
  const writer = new Writer(
    document,
    fonts,
    makeSafe(fonts.regular),
    `${projectionExportTitle(report)} · ${report.employee.id} - ${report.employee.name}`,
  );
  writer.paragraph(projectionExportTitle(report), 16, true, TITLE);
  projectionExportSubtitle(report).forEach((line, index) => writer.paragraph(line, 9, index === 0));
  writer.y -= GAP;

  const compact: Block[] = [];
  const oversized: ExportTable[] = [];
  for (const section of report.sections.filter((section) => section.layout !== "pays")) {
    const table = projectionSectionTable(section, report.pays);
    const layout = tableLayout(writer, table, HALF);
    if (layout.height <= writer.capacity) compact.push(tableBlock(writer, layout));
    else oversized.push(table);
  }
  writer.beforePage = () => {
    const bottoms = [writer.y, writer.y];
    fillColumns(bottoms, compact);
    writer.y = Math.min(...bottoms);
  };

  const overview = [
    ...chartBlocks(writer, `Retribución Directa ${report.year}`, report.direct),
    ...chartBlocks(writer, "Compensación Total", report.compensation),
    ...(report.flexible.length ? chartBlocks(writer, "Retribución Flexible", report.flexible) : []),
  ];
  const history = projectionHistoryTable(report);
  if (history) {
    const layout = tableLayout(writer, history, HALF);
    if (layout.height <= writer.capacity) overview.push(tableBlock(writer, layout));
    else {
      drawColumns(writer, overview, compact);
      overview.length = 0;
      drawTable(writer, history);
    }
  }
  drawColumns(writer, overview, compact);

  // Las matrices usan todo el ancho; las demás secciones comparten dos columnas.
  for (const section of report.sections.filter((section) => section.layout === "pays"))
    for (const table of projectionPdfTables(section, report.pays)) drawTable(writer, table);

  writer.beforePage = undefined;
  drawColumns(writer, compact);
  for (const table of oversized) drawTable(writer, table);
  if (report.notices.length) {
    writer.ensure(28);
    writer.paragraph("Avisos", 10, true);
    for (const notice of report.notices) writer.paragraph(notice, SIZE, false, MUTED);
  }
  writer.finish();
  return document.save();
}
