import ExcelJS from "exceljs";
import type { AnalysisResult, ConceptComparisonRow, GroupingComparisonRow, InternalExcelNormalizedVariablesCheckRow, NormalizedConcept, UnmappedConceptRow } from "@/features/registro-retributivo/types";
import {
  COLORS,
  EURO_FORMAT,
  INTEGER_FORMAT,
  PERCENT_FORMAT,
  applyStatusRowStyle,
  applyStatusStyle,
  styleBodyRows,
  styleEmptyRow,
  styleHeaderRow,
  styleNoteRow,
  styleSectionTitle,
  styleTitle,
} from "@/features/registro-retributivo/export/styles";
import { describeConceptCause, describePersonCause } from "@/features/registro-retributivo/ui/probableCause";

export interface ExportWorkbookMetadata {
  readonly registroFileName?: string;
  readonly pdfFileCount?: number;
  readonly exportedAt?: string;
  readonly aiEnabled?: boolean;
  readonly aiModel?: string;
  readonly schemaVersion?: number;
  readonly normalizedConcepts?: readonly NormalizedConcept[];
  readonly exportOrigin?: "active" | "history";
}

const NOTE_MATCHED = "La diferencia matched no incluye Recibo sin Reg. Retrib. ni conceptos pendientes de decision.";
const NOTE_PDF_WITHOUT_REGISTRO = "Recibo sin Reg. Retrib. se muestra separado porque no existe matricula equivalente en el Reg. Retrib.";
const NOTE_GROUPED_SHEETS = "Datos originales leidos de las hojas agrupadas del Excel Reg. Retrib.";

function configureColumns(sheet: ExcelJS.Worksheet, widths: readonly number[]): void {
  widths.forEach((width, index) => {
    sheet.getColumn(index + 1).width = width;
  });
}

function zeroMoney(value?: number): number | undefined {
  if (value === undefined || !Number.isFinite(value)) {
    return undefined;
  }
  return Math.abs(value) < 0.005 ? 0 : value;
}

function zeroGroupingValue(item: GroupingComparisonRow, value?: number): number | undefined {
  if (value === undefined || !Number.isFinite(value)) {
    return undefined;
  }
  const threshold = isPercentageGrouping(item) ? 0.00005 : 0.005;
  return Math.abs(value) < threshold ? 0 : value;
}

function groupingPdfExportValue(item: GroupingComparisonRow, value?: number): number | string | undefined {
  if (item.pdfStatus === "No aplica") {
    return "No aplica";
  }
  return zeroGroupingValue(item, value);
}

function setNumberFormat(sheet: ExcelJS.Worksheet, columns: readonly number[], format: string): void {
  columns.forEach((col) => {
    sheet.getColumn(col).numFmt = format;
  });
}

function rightAlignColumns(sheet: ExcelJS.Worksheet, columns: readonly number[]): void {
  columns.forEach((col) => {
    sheet.getColumn(col).alignment = { horizontal: "right", vertical: "top" };
  });
}

function centerColumns(sheet: ExcelJS.Worksheet, columns: readonly number[]): void {
  columns.forEach((col) => {
    sheet.getColumn(col).alignment = { horizontal: "center", vertical: "top", wrapText: true };
  });
}

function finalizeTableSheet(
  sheet: ExcelJS.Worksheet,
  options: {
    readonly headerRow: number;
    readonly widths: readonly number[];
    readonly moneyColumns?: readonly number[];
    readonly integerColumns?: readonly number[];
    readonly centerColumns?: readonly number[];
    readonly rightColumns?: readonly number[];
    readonly headerRows?: readonly number[];
    readonly autoFilterToColumn?: number;
  },
): void {
  const maxColumn = options.autoFilterToColumn ?? options.widths.length;
  configureColumns(sheet, options.widths);
  sheet.views = [{ state: "frozen", ySplit: options.headerRow }];
  sheet.autoFilter = {
    from: { row: options.headerRow, column: 1 },
    to: { row: Math.max(options.headerRow, sheet.rowCount), column: maxColumn },
  };
  setNumberFormat(sheet, options.moneyColumns ?? [], EURO_FORMAT);
  setNumberFormat(sheet, options.integerColumns ?? [], INTEGER_FORMAT);
  rightAlignColumns(sheet, options.rightColumns ?? options.moneyColumns ?? []);
  centerColumns(sheet, options.centerColumns ?? []);
  styleBodyRows(sheet, options.headerRows ?? [options.headerRow]);
}

function addSectionHeader(sheet: ExcelJS.Worksheet, rowNumber: number, title: string, fromColumn: number, toColumn: number): void {
  sheet.mergeCells(rowNumber, fromColumn, rowNumber, toColumn);
  const cell = sheet.getCell(rowNumber, fromColumn);
  cell.value = title;
  styleSectionTitle(cell);
  sheet.getRow(rowNumber).height = 24;
}

function addEmptyState(sheet: ExcelJS.Worksheet, message: string, maxColumn: number): void {
  const row = sheet.addRow([message]);
  if (maxColumn > 1) {
    sheet.mergeCells(row.number, 1, row.number, maxColumn);
  }
  styleEmptyRow(row, maxColumn);
}

function formatDateTime(value?: string): string {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function formatMoneyText(value?: number): string {
  return new Intl.NumberFormat("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(zeroMoney(value) ?? 0);
}

function isPdfGroupingDifference(row: GroupingComparisonRow): boolean {
  return row.pdfStatus === "Revisar" || row.pdfStatus === "Diferencia";
}

function isPercentageGrouping(row: GroupingComparisonRow): boolean {
  return row.segment.includes("%");
}

function isMonetaryPdfGrouping(row: GroupingComparisonRow): boolean {
  return !isPercentageGrouping(row) && row.pdfDifference !== undefined && row.pdfStatus !== "No aplica";
}

function groupingExcelDifferenceCount(analysis: AnalysisResult): number {
  return analysis.groupings.filter((row) => row.status !== "OK").length;
}

function groupingPdfDifferenceCount(analysis: AnalysisResult): number {
  return analysis.groupings.filter(isPdfGroupingDifference).length;
}

function groupingPdfAffectedCount(analysis: AnalysisResult): number {
  return new Set(analysis.groupings.filter(isPdfGroupingDifference).map((row) => `${row.sourceSheet}|${row.groupId}`)).size;
}

function maxGroupedPdfDifference(analysis: AnalysisResult): number {
  const values = analysis.groupings.filter(isMonetaryPdfGrouping).map((row) => Math.abs(row.pdfDifference ?? 0));
  return values.length ? Math.max(...values) : 0;
}

function groupedReadySheetCount(analysis: AnalysisResult): number {
  return analysis.groupedExcelSheets?.filter((sheet) => sheet.status === "ready").length ?? 0;
}

function groupedVisibleRowCount(analysis: AnalysisResult): number {
  return analysis.groupedExcelSheets?.reduce((sum, sheet) => sum + sheet.rows.length, 0) ?? 0;
}

function internalExcelStatus(analysis: AnalysisResult): string {
  const total = analysis.internalExcelChecks.length;
  const ok = analysis.internalExcelChecks.filter((row) => row.status === "OK").length;
  return total ? `${ok} / ${total} OK` : "Sin datos";
}

function addDashboardCard(
  sheet: ExcelJS.Worksheet,
  top: number,
  left: number,
  label: string,
  value: string | number,
  detail: string,
  tone: "blue" | "green" | "orange" | "red" | "violet" | "gray",
): void {
  const colors = {
    blue: { bg: COLORS.infoBg, text: COLORS.infoText },
    green: { bg: COLORS.successBg, text: COLORS.successText },
    orange: { bg: COLORS.warningBg, text: COLORS.warningText },
    red: { bg: COLORS.dangerBg, text: COLORS.dangerText },
    violet: { bg: COLORS.violetBg, text: COLORS.violetText },
    gray: { bg: COLORS.grayBg, text: COLORS.grayText },
  }[tone];

  sheet.mergeCells(top, left, top, left + 1);
  sheet.mergeCells(top + 1, left, top + 1, left + 1);
  sheet.mergeCells(top + 2, left, top + 2, left + 1);

  const labelCell = sheet.getCell(top, left);
  const valueCell = sheet.getCell(top + 1, left);
  const detailCell = sheet.getCell(top + 2, left);
  labelCell.value = label;
  valueCell.value = value;
  detailCell.value = detail;

  [labelCell, valueCell, detailCell].forEach((cell) => {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${colors.bg}` } };
    cell.border = {
      top: { style: "thin", color: { argb: `FFFFFFFF` } },
      left: { style: "thin", color: { argb: `FFFFFFFF` } },
      bottom: { style: "thin", color: { argb: `FFFFFFFF` } },
      right: { style: "thin", color: { argb: `FFFFFFFF` } },
    };
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
  });
  labelCell.font = { bold: true, color: { argb: `FF${colors.text}` }, size: 10 };
  valueCell.font = { bold: true, color: { argb: `FF${colors.text}` }, size: 18 };
  detailCell.font = { color: { argb: `FF${COLORS.mutedText}` }, size: 9 };
  sheet.getRow(top).height = 24;
  sheet.getRow(top + 1).height = 34;
  sheet.getRow(top + 2).height = 32;
}

function addDashboard(workbook: ExcelJS.Workbook, analysis: AnalysisResult, metadata: ExportWorkbookMetadata = {}): void {
  const sheet = workbook.addWorksheet("Dashboard", { properties: { defaultRowHeight: 22 } });
  sheet.views = [{ state: "frozen", ySplit: 8 }];
  configureColumns(sheet, [3, 22, 22, 3, 22, 22, 3, 22, 22, 3]);
  sheet.mergeCells("B2:I2");
  sheet.getCell("B2").value = "Comparativa Recibos vs Registro Retributivo";
  styleTitle(sheet.getCell("B2"));
  sheet.getRow(2).height = 34;

  sheet.mergeCells("B4:C4");
  sheet.mergeCells("E4:F4");
  sheet.mergeCells("H4:I4");
  sheet.getCell("B4").value = `Generado: ${formatDateTime(metadata.exportedAt ?? analysis.summary.generatedAt)}`;
  sheet.getCell("E4").value = `Reg. Retrib.: ${metadata.registroFileName ?? "No disponible"}`;
  sheet.getCell("H4").value = `IA: ${analysis.summary.aiEnabled || metadata.aiEnabled ? `Activa (${metadata.aiModel ?? analysis.summary.aiModel ?? "modelo configurado"})` : "No activa"}`;
  ["B4", "E4", "H4"].forEach((address) => {
    const cell = sheet.getCell(address);
    cell.font = { bold: true, color: { argb: `FF${COLORS.mutedText}` }, size: 10 };
    cell.alignment = { wrapText: true, vertical: "middle" };
  });

  sheet.mergeCells("B5:C5");
  sheet.mergeCells("E5:F5");
  sheet.mergeCells("H5:I5");
  sheet.getCell("B5").value = `Recibos procesados: ${analysis.summary.pdfsAnalyzed}`;
  sheet.getCell("E5").value = `Recibos cargados: ${metadata.pdfFileCount ?? "No disponible"}`;
  sheet.getCell("H5").value = `Tolerancia: ${formatMoneyText(analysis.summary.tolerance)} EUR`;
  ["B5", "E5", "H5"].forEach((address) => {
    const cell = sheet.getCell(address);
    cell.font = { color: { argb: `FF${COLORS.mutedText}` }, size: 10 };
    cell.alignment = { wrapText: true, vertical: "middle" };
  });

  if (analysis.excludedEmployeeIdsApplied?.length) {
    sheet.mergeCells("B6:I6");
    const exclusionsCell = sheet.getCell("B6");
    exclusionsCell.value = `Exclusiones aplicadas: ${analysis.excludedEmployeeIdsApplied.length} matriculas`;
    exclusionsCell.font = { bold: true, color: { argb: `FF${COLORS.mutedText}` }, size: 10 };
    exclusionsCell.alignment = { wrapText: true, vertical: "middle" };
  }

  addDashboardCard(sheet, 8, 2, "Personas analizadas", analysis.summary.uniquePeople, "Base total del analisis", "blue");
  addDashboardCard(sheet, 8, 5, "Personas matched", analysis.summary.matchedPeople ?? 0, "Reg. Retrib. y Recibo encontrados", "green");
  addDashboardCard(sheet, 8, 8, "Personas con diferencia", analysis.summary.peopleWithDifferences, "Requieren revision", "red");

  addDashboardCard(sheet, 12, 2, "Diferencia total matched", `${formatMoneyText(analysis.summary.matchedTotalDifference ?? analysis.summary.totalGlobalDifference)} EUR`, "Solo personas matched", "green");
  addDashboardCard(sheet, 12, 5, "Reg. Retrib. sin Recibo", analysis.summary.peopleInRegistroWithoutPdf ?? 0, "Personas del Excel sin recibo", "gray");
  addDashboardCard(sheet, 12, 8, "Conceptos desactivados", analysis.summary.conceptsIgnored ?? 0, "Fuera del analisis", "gray");

  addDashboardCard(sheet, 16, 2, "Recibo sin Reg. Retrib.", analysis.summary.peopleInPdfWithoutRegistro ?? 0, `${formatMoneyText(analysis.summary.totalPdfWithoutRegistro ?? 0)} EUR separado`, "violet");
  addDashboardCard(sheet, 16, 5, "Pendiente decision", `${formatMoneyText(analysis.summary.pendingDecisionPdfTotal ?? 0)} EUR`, `${analysis.summary.conceptsPendingReview ?? 0} conceptos`, "orange");
  addDashboardCard(sheet, 16, 8, "Conceptos sin configurar", analysis.summary.conceptsRealUnmapped ?? 0, "Sin codigo claro", "red");

  addDashboardCard(sheet, 20, 2, "Conceptos ignorados", analysis.summary.conceptsIgnored ?? 0, "Excluidos por criterio", "gray");
  addDashboardCard(sheet, 20, 5, "Cuadre Reg.", internalExcelStatus(analysis), `${analysis.summary.internalExcelDifferences} con diferencia`, analysis.summary.internalExcelDifferences ? "orange" : "green");
  addDashboardCard(sheet, 20, 8, "Hojas agrupadas", groupedReadySheetCount(analysis), `${groupedVisibleRowCount(analysis)} filas visibles`, groupedReadySheetCount(analysis) ? "blue" : "gray");

  addSectionHeader(sheet, 25, "Resumen separado de importes y estados", 2, 9);
  const header = sheet.getRow(26);
  sheet.mergeCells("B26:C26");
  sheet.mergeCells("E26:F26");
  sheet.mergeCells("H26:I26");
  sheet.getCell("B26").value = "Bloque";
  sheet.getCell("E26").value = "Valor";
  sheet.getCell("H26").value = "Nota / detalle";
  styleHeaderRow(header);
  [
    ["Diferencia total matched", analysis.summary.matchedTotalDifference ?? analysis.summary.totalGlobalDifference, "Solo Reg. Retrib./Recibo encontrados", NOTE_MATCHED],
    ["Recibo sin Reg. Retrib.", analysis.summary.totalPdfWithoutRegistro ?? 0, `${analysis.summary.peopleInPdfWithoutRegistro ?? 0} personas`, NOTE_PDF_WITHOUT_REGISTRO],
    ["Importe pendiente de decision", analysis.summary.pendingDecisionPdfTotal ?? 0, `${analysis.summary.conceptsPendingReview ?? 0} conceptos pendientes`, "No incluido en la diferencia matched hasta decision manual."],
    ["Hojas agrupadas", groupedReadySheetCount(analysis), `${groupedVisibleRowCount(analysis)} filas visibles`, NOTE_GROUPED_SHEETS],
  ].forEach(([name, value, detail, note]) => {
    const row = sheet.addRow([]);
    sheet.mergeCells(row.number, 2, row.number, 3);
    sheet.mergeCells(row.number, 5, row.number, 6);
    sheet.mergeCells(row.number, 8, row.number, 9);
    row.getCell(2).value = name;
    row.getCell(5).value = value;
    row.getCell(8).value = `${detail}. ${note}`;
    row.getCell(5).numFmt = EURO_FORMAT;
    [2, 3, 5, 6, 8, 9].forEach((column) => {
      const cell = row.getCell(column);
      cell.alignment = { vertical: "top", wrapText: true };
      cell.border = { bottom: { style: "hair", color: { argb: `FF${COLORS.line}` } } };
    });
  });
  sheet.autoFilter = { from: { row: 26, column: 2 }, to: { row: 32, column: 9 } };

  addSectionHeader(sheet, 35, "Notas de lectura", 2, 9);
  [NOTE_MATCHED, NOTE_PDF_WITHOUT_REGISTRO, NOTE_GROUPED_SHEETS].forEach((note) => {
    const row = sheet.addRow([undefined, note]);
    sheet.mergeCells(row.number, 2, row.number, 9);
    styleNoteRow(row, 2, 9);
  });
}

function addResumen(workbook: ExcelJS.Workbook, analysis: AnalysisResult, metadata: ExportWorkbookMetadata = {}): void {
  const sheet = workbook.addWorksheet("Resumen", { properties: { defaultRowHeight: 22 } });
  sheet.mergeCells("A1:D1");
  sheet.getCell("A1").value = "Resumen auditable del analisis";
  styleTitle(sheet.getCell("A1"));
  sheet.addRow([]);
  sheet.addRow(["Seccion", "Metrica", "Valor", "Detalle"]);
  styleHeaderRow(sheet.getRow(3));
  [
    ["Informacion del analisis", "Fecha de generacion", formatDateTime(analysis.summary.generatedAt), ""],
    ["Informacion del analisis", "Fecha de exportacion", formatDateTime(metadata.exportedAt), ""],
    ["Informacion del analisis", "Excel Reg. Retrib.", metadata.registroFileName ?? "No disponible", ""],
    ["Informacion del analisis", "Recibos procesados", analysis.summary.pdfsAnalyzed, `${analysis.summary.pdfsFailed} con error`],
    ["Informacion del analisis", "Tolerancia", analysis.summary.tolerance, "EUR"],
    ["Informacion del analisis", "Exclusiones aplicadas", analysis.excludedEmployeeIdsApplied?.length ?? 0, "Matriculas excluidas manualmente desde Ajustes"],
    ["Personas", "Personas analizadas", analysis.summary.uniquePeople, ""],
    ["Personas", "Personas matched Reg. Retrib./Recibo", analysis.summary.matchedPeople ?? 0, "Base de la diferencia matched"],
    ["Personas", "Personas con diferencia", analysis.summary.peopleWithDifferences, ""],
    ["Personas", "Diferencia total matched", zeroMoney(analysis.summary.matchedTotalDifference ?? analysis.summary.totalGlobalDifference) ?? 0, NOTE_MATCHED],
    ["Conceptos", "Conceptos pendientes revision", analysis.summary.conceptsPendingReview ?? 0, ""],
    ["Conceptos", "Conceptos ignorados", analysis.summary.conceptsIgnored ?? 0, ""],
    ["Conceptos", "Conceptos sin mapear reales", analysis.summary.conceptsRealUnmapped ?? 0, ""],
    ["Conceptos", "Importe pendiente de decision", zeroMoney(analysis.summary.pendingDecisionPdfTotal ?? 0) ?? 0, "No incluido en diferencia matched"],
    ["Recibo / Reg. Retrib. sin pareja", "Recibo sin Reg. Retrib.", analysis.summary.peopleInPdfWithoutRegistro ?? 0, `${formatMoneyText(analysis.summary.totalPdfWithoutRegistro ?? 0)} EUR separado`],
    ["Recibo / Reg. Retrib. sin pareja", "Reg. Retrib. sin Recibo", analysis.summary.peopleInRegistroWithoutPdf ?? 0, ""],
    ["Cuadre Reg.", "Cuadres internos con diferencias", analysis.summary.internalExcelDifferences, internalExcelStatus(analysis)],
    ["Agrupaciones", "Hojas agrupadas leidas", groupedReadySheetCount(analysis), NOTE_GROUPED_SHEETS],
    ["Agrupaciones", "Filas visibles en hojas agrupadas", groupedVisibleRowCount(analysis), "Datos originales del Excel Reg. Retrib."],
    ["Criterios principales", "IA", analysis.summary.aiEnabled || metadata.aiEnabled ? "Activa" : "No activa", "Sin API key ni solicitudes/respuestas IA"],
  ].forEach((row) => sheet.addRow(row));
  finalizeTableSheet(sheet, {
    headerRow: 3,
    headerRows: [1, 3],
    widths: [28, 34, 24, 82],
    moneyColumns: [3],
    autoFilterToColumn: 4,
  });
}

function addPersonas(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Personas");
  const headers = [
    "Matricula",
    "Persona",
    "Centro",
    "Puesto",
    "Categoria",
    "Salario Reg. Retrib.",
    "Salario Recibo",
    "Dif. Salario",
    "C. Salarial Reg. Retrib.",
    "C. Salarial Recibo",
    "Dif. C. Salarial",
    "Extrasalarial Reg. Retrib.",
    "Extrasalarial Recibo",
    "Dif. Extrasalarial",
    "Total Reg. Retrib.",
    "Total Recibo",
    "Dif. Total",
    "Estado",
    "Causa probable",
    "Observaciones / detalle breve",
  ];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(1));
  if (!analysis.people.length) {
    addEmptyState(sheet, "No hay personas para mostrar.", headers.length);
  } else {
    analysis.people.forEach((item) => {
      const cause = describePersonCause(item, analysis.summary.tolerance);
      const row = sheet.addRow([
        item.employeeNumber,
        item.person,
        item.workplace,
        item.position,
        item.category,
        zeroMoney(item.salaryRegistro),
        zeroMoney(item.salaryPdf),
        zeroMoney(item.salaryDifference),
        zeroMoney(item.salaryComplementRegistro),
        zeroMoney(item.salaryComplementPdf),
        zeroMoney(item.salaryComplementDifference),
        zeroMoney(item.extraSalaryRegistro),
        zeroMoney(item.extraSalaryPdf),
        zeroMoney(item.extraSalaryDifference),
        zeroMoney(item.registroTotal),
        zeroMoney(item.pdfTotal),
        zeroMoney(item.totalDifference),
        item.status,
        cause.label,
        item.detail || cause.review,
      ]);
      applyStatusRowStyle(row, item.status, headers.length, 18);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 1,
    widths: [14, 30, 22, 32, 28, 18, 18, 16, 20, 18, 18, 22, 20, 20, 18, 18, 18, 16, 24, 68],
    moneyColumns: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    centerColumns: [18],
  });
}

function sortConcepts(rows: readonly ConceptComparisonRow[]): ConceptComparisonRow[] {
  const priority = (row: ConceptComparisonRow): number => {
    if (row.status === "Diferencia") return 0;
    if (row.status === "Revisar") return 1;
    if (["Sin mapear", "Sin Registro", "Sin PDF"].includes(row.status)) return 3;
    if (row.status === "OK") return 4;
    return 4;
  };
  return [...rows].sort((left, right) => {
    const statusPriority = priority(left) - priority(right);
    if (statusPriority !== 0) return statusPriority;
    return Math.abs(right.difference) - Math.abs(left.difference);
  });
}

function addConceptos(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Conceptos");
  const peopleByEmployee = new Map(analysis.people.map((row) => [row.employeeNumber, row]));
  const headers = [
    "Matricula",
    "Persona",
    "Centro",
    "Bloque",
    "Codigo Reg. Retrib.",
    "Concepto Recibo",
    "Reg. Retrib.",
    "Recibo",
    "Diferencia",
    "Estado",
    "Causa probable",
    "Regla / detalle",
  ];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(1));
  if (!analysis.concepts.length) {
    addEmptyState(sheet, "No hay conceptos comparados.", headers.length);
  } else {
    sortConcepts(analysis.concepts).forEach((item) => {
      const person = peopleByEmployee.get(item.employeeNumber);
      const cause = describeConceptCause(item, analysis.summary.tolerance);
      const row = sheet.addRow([
        item.employeeNumber,
        item.person,
        person?.workplace,
        item.block,
        item.registroCode,
        item.pdfConcept,
        zeroMoney(item.registroAmount),
        zeroMoney(item.pdfAmount),
        zeroMoney(item.difference),
        item.status,
        cause.label,
        item.detail || cause.review,
      ]);
      applyStatusRowStyle(row, item.status, headers.length, 10);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 1,
    widths: [14, 30, 22, 18, 32, 42, 18, 18, 18, 16, 24, 68],
    moneyColumns: [7, 8, 9],
    centerColumns: [10],
  });
}

function decisionType(item: UnmappedConceptRow): string {
  return item.decisionType ?? (item.action === "Ignorado" ? "Ignorado" : "Sin mapear real");
}

function addConceptosNoIncluidos(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Conceptos_no_incluidos");
  const headers = [
    "Tipo decision",
    "Incluido en calculo",
    "Concepto Recibo",
    "Total detectado",
    "N personas",
    "N recibos",
    "Ejemplos matriculas",
    "Sugerencia bloque",
    "Sugerencia codigo Reg. Retrib.",
    "Accion recomendada",
    "Motivo",
  ];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(1));
  if (!analysis.unmappedConcepts.length) {
    addEmptyState(sheet, "No hay conceptos no incluidos.", headers.length);
  } else {
    analysis.unmappedConcepts.forEach((item) => {
      const type = decisionType(item);
      const row = sheet.addRow([
        type,
        item.includedInComparison ? "Si" : "No",
        item.pdfConcept,
        zeroMoney(item.totalDetected),
        item.peopleCount,
        item.payrollCount,
        item.exampleEmployeeNumbers.join("; "),
        item.suggestedBlock,
        item.suggestedRegistroCode,
        item.recommendedAction ?? item.action,
        item.reason,
      ]);
      applyStatusStyle(row.getCell(1), type);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 1,
    widths: [22, 18, 44, 18, 14, 14, 24, 22, 32, 44, 72],
    moneyColumns: [4],
    integerColumns: [5, 6],
    centerColumns: [1, 2],
  });
}

function addNormalizado(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Normalizado_vs_Real");
  const headers = [
    "Matricula",
    "Persona",
    "Centro",
    "Puesto / categoria",
    "Normalizado + variables",
    "Normalizado",
    "Periodo completo",
    "Real Recibo",
    "Diferencia",
    "Estado",
    "Observacion / causa probable",
  ];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(1));
  if (!analysis.normalizedVsReal.length) {
    addEmptyState(sheet, "No hay datos de normalizado vs real.", headers.length);
  } else {
    analysis.normalizedVsReal.forEach((item) => {
      const row = sheet.addRow([
        item.employeeNumber,
        item.person,
        item.workplace,
        [item.position, item.category].filter(Boolean).join(" / "),
        zeroMoney(item.normalizedPlusVariables),
        zeroMoney(item.normalized),
        zeroMoney(item.periodComplete),
        zeroMoney(item.realPdf),
        zeroMoney(item.diffPdfVsPeriodComplete),
        item.status,
        item.detail,
      ]);
      applyStatusStyle(row.getCell(10), item.status);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 1,
    widths: [14, 30, 22, 36, 24, 18, 18, 18, 18, 16, 68],
    moneyColumns: [5, 6, 7, 8, 9],
    centerColumns: [10],
  });
}

function addPersonasSinRegistro(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("PDF_sin_Registro");
  sheet.mergeCells("A1:K1");
  sheet.getCell("A1").value = "Estas matriculas se excluyen de la diferencia matched porque no tienen datos maestros en Reg. Retrib.";
  styleNoteRow(sheet.getRow(1), 1, 11);
  const headers = ["Matricula", "Persona", "Centro", "Salario Recibo", "C. Salarial Recibo", "Extrasalarial Recibo", "Total Recibo", "N recibos", "Periodos", "Estado", "Observacion"];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(2));
  const rows = analysis.pdfWithoutRegistro ?? analysis.people.filter((item) => item.status === "Sin Registro");
  if (!rows.length) {
    addEmptyState(sheet, "No hay matriculas de Recibo sin Reg. Retrib.", headers.length);
  } else {
    rows.forEach((item) => {
      const row = sheet.addRow([
        item.employeeNumber,
        item.person,
        item.workplace,
        zeroMoney(item.salaryPdf),
        zeroMoney(item.salaryComplementPdf),
        zeroMoney(item.extraSalaryPdf),
        zeroMoney(item.pdfTotal),
        item.payrollCount,
        item.periods.join("; "),
        item.status,
        item.detail,
      ]);
      applyStatusStyle(row.getCell(10), item.status);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 2,
    headerRows: [2],
    widths: [14, 30, 22, 18, 18, 20, 18, 14, 42, 16, 68],
    moneyColumns: [4, 5, 6, 7],
    integerColumns: [8],
    centerColumns: [10],
  });
}

function addRegistroSinPdf(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Registro_sin_PDF");
  const headers = ["Matricula", "Persona", "Centro", "Puesto", "Categoria", "Total Reg. Retrib.", "Estado", "Observacion"];
  sheet.addRow(headers);
  styleHeaderRow(sheet.getRow(1));
  const rows = analysis.registroWithoutPdf ?? analysis.people.filter((item) => item.status === "Sin PDF");
  if (!rows.length) {
    addEmptyState(sheet, "No hay empleados de Reg. Retrib. sin Recibo.", headers.length);
  } else {
    rows.forEach((item) => {
      const row = sheet.addRow([item.employeeNumber, item.person, item.workplace, item.position, item.category, zeroMoney(item.registroTotal), item.status, item.detail]);
      applyStatusStyle(row.getCell(7), item.status);
    });
  }
  finalizeTableSheet(sheet, {
    headerRow: 1,
    widths: [14, 30, 22, 32, 28, 18, 16, 68],
    moneyColumns: [6],
    centerColumns: [7],
  });
}

function addCuadreInterno(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Cuadre_Interno_Excel");
  const maxColumn = 19;
  sheet.mergeCells(1, 1, 1, maxColumn);
  sheet.getCell("A1").value = "Cuadre Reg. Valida cuadres internos del Excel Reg. Retrib. sin usar Recibos.";
  styleNoteRow(sheet.getRow(1), 1, maxColumn);

  const breakdownHeaders = [
    "Matricula",
    "Salario periodo completo",
    "Salario desglose",
    "Dif. Salario",
    "C. Salarial periodo completo",
    "C. Salarial desglose",
    "Dif. C. Salarial",
    "Extrasalarial periodo completo",
    "Extrasalarial desglose",
    "Dif. Extrasalarial",
    "Estado",
  ];
  addSectionHeader(sheet, 2, "No norm. / Desglose", 1, maxColumn);
  sheet.addRow(breakdownHeaders);
  styleHeaderRow(sheet.getRow(3));
  if (!analysis.internalExcelChecks.length) {
    addEmptyState(sheet, "No hay datos de Cuadre Reg. No norm. / Desglose.", breakdownHeaders.length);
  } else {
    analysis.internalExcelChecks.forEach((item) => {
      const row = sheet.addRow([
        item.employeeNumber,
        zeroMoney(item.salaryPeriod),
        zeroMoney(item.salaryBreakdown),
        zeroMoney(item.salaryDifference),
        zeroMoney(item.salaryComplementPeriod),
        zeroMoney(item.salaryComplementBreakdown),
        zeroMoney(item.salaryComplementDifference),
        zeroMoney(item.extraSalaryPeriod),
        zeroMoney(item.extraSalaryBreakdown),
        zeroMoney(item.extraSalaryDifference),
        item.status,
      ]);
      applyStatusRowStyle(row, item.status, breakdownHeaders.length, 11);
    });
  }

  sheet.addRow([]);
  const normalizedSectionRow = sheet.rowCount + 1;
  addSectionHeader(sheet, normalizedSectionRow, "No norm. / Norm. + variables", 1, maxColumn);
  const normalizedHeaderRow = sheet.rowCount + 1;
  const normalizedHeaders = [
    "Matricula",
    "Persona",
    "Centro",
    "Puesto",
    "Categoria",
    "Salario No norm.",
    "Salario Norm. + variables",
    "Dif. Salario",
    "C. Salarial No norm.",
    "C. Salarial Norm. + variables",
    "Dif. C. Salarial",
    "Extrasalarial No norm.",
    "Extrasalarial Norm. + variables",
    "Dif. Extrasalarial",
    "Total No norm.",
    "Total Norm. + variables",
    "Dif. Total",
    "Estado",
    "Observacion",
  ];
  sheet.addRow(normalizedHeaders);
  styleHeaderRow(sheet.getRow(normalizedHeaderRow));

  const normalizedRows: readonly InternalExcelNormalizedVariablesCheckRow[] = analysis.internalExcelNormalizedVariablesChecks ?? [];
  if (!normalizedRows.length) {
    addEmptyState(sheet, "Este analisis no contiene el cuadre No norm. / Norm. + variables. Vuelve a analizar el Excel para generarlo.", maxColumn);
  } else {
    normalizedRows.forEach((item) => {
      const row = sheet.addRow([
        item.employeeNumber,
        item.person,
        item.workplace,
        item.position,
        item.category,
        zeroMoney(item.salaryPeriod),
        zeroMoney(item.salaryNormalizedPlusVariables),
        zeroMoney(item.salaryDifference),
        zeroMoney(item.salaryComplementPeriod),
        zeroMoney(item.salaryComplementNormalizedPlusVariables),
        zeroMoney(item.salaryComplementDifference),
        zeroMoney(item.extraSalaryPeriod),
        zeroMoney(item.extraSalaryNormalizedPlusVariables),
        zeroMoney(item.extraSalaryDifference),
        zeroMoney(item.totalPeriod),
        zeroMoney(item.totalNormalizedPlusVariables),
        zeroMoney(item.totalDifference),
        item.status,
        item.detail,
      ]);
      applyStatusRowStyle(row, item.status, maxColumn, 18);
    });
  }

  finalizeTableSheet(sheet, {
    headerRow: 3,
    headerRows: [3, normalizedHeaderRow],
    widths: [14, 30, 22, 32, 28, 20, 24, 16, 22, 28, 18, 24, 30, 20, 20, 26, 16, 16, 68],
    moneyColumns: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    centerColumns: [11, 18],
    autoFilterToColumn: maxColumn,
  });
}

function addAgrupaciones(workbook: ExcelJS.Workbook, analysis: AnalysisResult): void {
  const sheet = workbook.addWorksheet("Agrupaciones");
  sheet.getCell("A1").value = "Agrupaciones";
  styleTitle(sheet.getCell("A1"));
  sheet.addRow(["Consulta las hojas agrupadas incluidas en el Excel Reg. Retrib."]);
  styleNoteRow(sheet.getRow(2), 1, 6);

  const groupedSheets = analysis.groupedExcelSheets;
  if (!groupedSheets?.length) {
    addEmptyState(sheet, "Este analisis no contiene datos de hojas agrupadas. Vuelve a analizar el Excel para visualizarlas.", 6);
    finalizeTableSheet(sheet, {
      headerRow: 3,
      headerRows: [1],
      widths: [32, 24, 24, 24, 24, 24],
      autoFilterToColumn: 6,
    });
    return;
  }

  let widestColumnCount = 6;
  const headerRows = [1];
  groupedSheets.forEach((groupedSheet) => {
    sheet.addRow([]);
    const sectionRow = sheet.addRow([groupedSheet.sheetName]);
    const maxColumn = Math.max(groupedSheet.columns.length, 1);
    widestColumnCount = Math.max(widestColumnCount, maxColumn);
    sheet.mergeCells(sectionRow.number, 1, sectionRow.number, maxColumn);
    styleSectionTitle(sectionRow.getCell(1));

    const summaryRow = sheet.addRow([`Filas visibles: ${groupedSheet.rows.length}`, `Columnas visibles: ${groupedSheet.visibleColumnCount}`]);
    styleNoteRow(summaryRow, 1, Math.min(maxColumn, 2));
    if (groupedSheet.truncated) {
      const warningRow = sheet.addRow(["Esta hoja se guardo parcialmente en Historial para mantener el rendimiento. Vuelve a analizar el Excel para ver todos los datos."]);
      sheet.mergeCells(warningRow.number, 1, warningRow.number, maxColumn);
      styleNoteRow(warningRow, 1, maxColumn);
    }

    if (groupedSheet.status === "missing") {
      addEmptyState(sheet, "No se ha encontrado esta hoja en el Excel Reg. Retrib.", maxColumn);
      return;
    }
    if (groupedSheet.status === "empty" || !groupedSheet.rows.length || !groupedSheet.columns.length) {
      addEmptyState(sheet, "No hay datos visibles en esta hoja.", maxColumn);
      return;
    }

    const header = sheet.addRow(groupedSheet.columns.map((column) => column.label));
    headerRows.push(header.number);
    styleHeaderRow(header);
    groupedSheet.rows.forEach((sourceRow) => {
      const row = sheet.addRow(groupedSheet.columns.map((column) => sourceRow[column.key]?.value ?? sourceRow[column.key]?.display ?? ""));
      groupedSheet.columns.forEach((column, index) => {
        const cell = row.getCell(index + 1);
        const sourceCell = sourceRow[column.key];
        if (sourceCell?.kind === "number") {
          cell.numFmt = INTEGER_FORMAT;
        }
        if (sourceCell?.kind === "percent") {
          cell.numFmt = PERCENT_FORMAT;
        }
      });
    });
  });

  configureColumns(sheet, Array.from({ length: widestColumnCount }, (_, index) => (index < 2 ? 34 : 18)));
  sheet.views = [{ state: "frozen", ySplit: 3 }];
  styleBodyRows(sheet, headerRows);
}

function addCriterios(workbook: ExcelJS.Workbook, analysis: AnalysisResult, metadata: ExportWorkbookMetadata = {}): void {
  const sheet = workbook.addWorksheet("Criterios");
  sheet.mergeCells("A1:C1");
  sheet.getCell("A1").value = "Criterios aplicados";
  styleTitle(sheet.getCell("A1"));
  sheet.addRow([]);
  sheet.addRow(["Tema", "Detalle", "Observacion"]);
  styleHeaderRow(sheet.getRow(3));
  const pendingConcepts = analysis.unmappedConcepts.filter((item) => decisionType(item).includes("Pendiente")).map((item) => item.pdfConcept);
  const ignoredConcepts = analysis.unmappedConcepts.filter((item) => decisionType(item) === "Ignorado").map((item) => item.pdfConcept);
  [
    ["Tolerancia EUR", analysis.summary.tolerance, "Aplicada a diferencias monetarias"],
    ["Umbral revision", analysis.summary.reviewThreshold ?? "", "Configuracion visible si existe"],
    ["Umbral diferencia", analysis.summary.incidentThreshold ?? "", "Configuracion visible si existe"],
    ["Fecha generacion", formatDateTime(analysis.summary.generatedAt), ""],
    ["Fecha exportacion", formatDateTime(metadata.exportedAt), ""],
    ["Version schema", metadata.schemaVersion ?? "", ""],
    ["Privacidad", "No se exportan NIF, IBAN, cuentas bancarias ni datos bancarios.", ""],
    ["Clave principal", "Matricula / ID RH.", ""],
    ["Recibo", "Importe comparativo calculado como suma de conceptos incluidos por mapa editable.", ""],
    ["Mapa de conceptos", "Las reglas por defecto solo incluyen codigos que existen en el Excel cargado.", ""],
    ["IA", analysis.summary.aiEnabled || metadata.aiEnabled ? `Activa (${metadata.aiModel ?? analysis.summary.aiModel ?? "modelo configurado"})` : "No activa", "No se exportan solicitudes/respuestas IA ni API keys"],
    ["Conceptos pendientes de decision", pendingConcepts.slice(0, 25).join("; ") || "Sin pendientes", pendingConcepts.length > 25 ? `${pendingConcepts.length - 25} adicionales no listados` : ""],
    ["Conceptos ignorados relevantes", ignoredConcepts.slice(0, 25).join("; ") || "Sin ignorados", ignoredConcepts.length > 25 ? `${ignoredConcepts.length - 25} adicionales no listados` : ""],
    ...analysis.criteria.map((criterion) => ["Criterio adicional", criterion, ""]),
  ].forEach((row) => sheet.addRow(row));
  sheet.addRow([]);
  const exclusionsTitle = sheet.addRow(["Exclusiones aplicadas"]);
  sheet.mergeCells(exclusionsTitle.number, 1, exclusionsTitle.number, 2);
  styleSectionTitle(exclusionsTitle.getCell(1));
  const exclusionsHeader = sheet.addRow(["Matricula", "Motivo"]);
  styleHeaderRow(exclusionsHeader);
  const excludedEmployeeIds = analysis.excludedEmployeeIdsApplied ?? [];
  if (excludedEmployeeIds.length) {
    excludedEmployeeIds.forEach((employeeId) => {
      sheet.addRow([employeeId, "Excluida manualmente desde Ajustes"]);
    });
  } else {
    sheet.addRow(["No hay matriculas excluidas."]);
  }
  sheet.addRow([]);
  const disabledTitle = sheet.addRow(["Conceptos desactivados"]);
  sheet.mergeCells(disabledTitle.number, 1, disabledTitle.number, 4);
  styleSectionTitle(disabledTitle.getCell(1));
  const disabledHeader = sheet.addRow(["Concepto Recibo", "Codigo Reg. Retrib.", "Bloque", "Motivo"]);
  styleHeaderRow(disabledHeader);
  const disabledRules = analysis.conceptMap.filter((rule) => rule.active === false || rule.includedInComparison === false);
  if (disabledRules.length) {
    disabledRules.forEach((rule) => {
      sheet.addRow([
        rule.pdfConcept,
        rule.registroCode,
        rule.block,
        "Desactivado manualmente desde Ajustes",
      ]);
    });
  } else {
    sheet.addRow(["Sin conceptos desactivados"]);
  }
  sheet.addRow([]);
  const normalizedTitle = sheet.addRow(["Conceptos normalizados configurados"]);
  sheet.mergeCells(normalizedTitle.number, 1, normalizedTitle.number, 5);
  styleSectionTitle(normalizedTitle.getCell(1));
  const normalizedNote = sheet.addRow(["Configuración informativa vigente al generar este Excel. No se ha aplicado a los cálculos del análisis."]);
  sheet.mergeCells(normalizedNote.number, 1, normalizedNote.number, 5);
  styleNoteRow(normalizedNote, 1, 5);
  if (metadata.exportOrigin === "history") {
    const historicalNote = sheet.addRow(["Esta configuración corresponde a los ajustes actuales, no necesariamente a los existentes cuando se creó el análisis histórico."]);
    sheet.mergeCells(historicalNote.number, 1, historicalNote.number, 5);
    styleNoteRow(historicalNote, 1, 5);
  }
  const normalizedHeader = sheet.addRow(["Año", "Concepto", "Valor (€)", "Comentarios", "Activo"]);
  styleHeaderRow(normalizedHeader);
  const normalizedConcepts = metadata.normalizedConcepts ?? [];
  if (normalizedConcepts.length) {
    normalizedConcepts.forEach((concept) => {
      const row = sheet.addRow([concept.year, concept.name, concept.amount, concept.comments, concept.active ? "Sí" : "No"]);
      row.getCell(3).numFmt = EURO_FORMAT;
    });
  } else {
    sheet.addRow(["Sin conceptos normalizados configurados"]);
  }
  finalizeTableSheet(sheet, {
    headerRow: 3,
    headerRows: [1, 3, exclusionsHeader.number, disabledHeader.number, normalizedHeader.number],
    widths: [32, 112, 42, 72, 18],
    autoFilterToColumn: 5,
  });
}

export async function exportAnalysisToWorkbook(analysis: AnalysisResult, metadata: ExportWorkbookMetadata = {}): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Comparativa Recibos Reg. Retrib.";
  workbook.created = new Date(analysis.summary.generatedAt);
  workbook.modified = new Date(metadata.exportedAt ?? Date.now());

  addDashboard(workbook, analysis, metadata);
  addResumen(workbook, analysis, metadata);
  addPersonas(workbook, analysis);
  addConceptos(workbook, analysis);
  addConceptosNoIncluidos(workbook, analysis);
  addNormalizado(workbook, analysis);
  addPersonasSinRegistro(workbook, analysis);
  addRegistroSinPdf(workbook, analysis);
  addCuadreInterno(workbook, analysis);
  addAgrupaciones(workbook, analysis);
  addCriterios(workbook, analysis, metadata);

  return workbook;
}

export async function exportAnalysisToBuffer(analysis: AnalysisResult, metadata: ExportWorkbookMetadata = {}): Promise<Buffer> {
  const workbook = await exportAnalysisToWorkbook(analysis, metadata);
  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}
