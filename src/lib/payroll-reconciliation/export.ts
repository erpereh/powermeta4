import "server-only";
import ExcelJS from "exceljs";
import {
  categoryLabel,
  exportDiagnostic,
  exportParameters,
  exportReason,
  metricLabel,
  reconciliationDate,
  sourceFieldLabel,
  sourceFieldValue,
} from "./presentation";
import type { CalculationStatus, Dossier } from "./types";

/** Static, typed export palette follows the existing payroll workbook convention. */
const PALETTE = {
  heading: "FF1F3A5F",
  text: "FFFFFFFF",
  difference: "FFFFE9D6",
  pending: "FFF1F3F5",
} as const;
const STATUS_ORDER: Record<CalculationStatus, number> = {
  "Con diferencia": 0,
  "Falta fuente": 1,
  "No comparable": 2,
  Coincide: 3,
};
const minimumWidth = (header: string): number =>
  /persona|apellidos|nombres/i.test(header)
    ? 44
    : /concepto|descripción/i.test(header)
      ? 36
      : /motivo|comentario|observaciones|incidencia|^valor$/i.test(header)
        ? 44
        : 16;

export async function exportDossier(dossier: Dossier): Promise<Uint8Array> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  const table = (
    name: string,
    headers: string[],
    rows: (string | number | null)[][],
    statuses: readonly CalculationStatus[] = [],
  ) => {
    const sheet = workbook.addWorksheet(name.replace(/[\\/*?:[\]]/g, "-").slice(0, 31), {
      views: [{ state: "frozen", ySplit: 1 }],
    });
    sheet.addRow(headers);
    for (const row of rows) sheet.addRow(row.map((value) => value ?? "Pendiente"));
    sheet.getRow(1).font = { bold: true, color: { argb: PALETTE.text } };
    sheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: PALETTE.heading },
    };
    sheet.columns.forEach((column, index) => {
      let longest = headers[index].length;
      sheet.getColumn(index + 1).eachCell((cell) => {
        for (const line of String(cell.value ?? "").split(/\r?\n/))
          longest = Math.max(longest, line.length);
      });
      column.width = Math.min(80, Math.max(minimumWidth(headers[index]), longest + 4));
    });
    sheet.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: Math.max(1, sheet.rowCount), column: headers.length },
    };
    sheet.eachRow((row, index) => {
      row.alignment = { vertical: "top", wrapText: false };
      let wrapped = false;
      row.eachCell((cell, column) => {
        const text = String(cell.value ?? "");
        const wrapText =
          index > 1 &&
          /motivo|comentario|observaciones|incidencia|referencia|^valor$/i.test(
            headers[column - 1],
          ) &&
          (text.length > (sheet.getColumn(column).width ?? 80) - 4 || /[\r\n]/.test(text));
        cell.alignment = { vertical: "top", wrapText };
        wrapped ||= wrapText;
      });
      // Excel calculates the natural height for exceptional multi-line comments.
      if (!wrapped) row.height = 20;
      const status = statuses[index - 2];
      const color =
        status === "Con diferencia"
          ? PALETTE.difference
          : status === "Falta fuente" || status === "No comparable"
            ? PALETTE.pending
            : undefined;
      if (index > 1 && color)
        row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: color } };
    });
    return sheet;
  };
  table(
    "Resumen",
    ["Control", "Descripción", "Filas", "Coinciden", "Diferencias", "Pendientes"],
    dossier.result.controls.map((control) => [
      control.id,
      control.name,
      control.total,
      control.matches,
      control.differences,
      control.pending,
    ]),
  );
  table(
    "Expediente",
    ["Dato", "Valor"],
    [
      ["Nombre", dossier.title],
      ["Periodo", dossier.period],
      ["Revisión", dossier.revision],
      ["Muestra ficticia", dossier.demo ? "Sí" : "No"],
      [
        "Actual: informe",
        [dossier.current.run.reportId, dossier.current.run.reportName].filter(Boolean).join(" · "),
      ],
      ["Actual: ejecución", reconciliationDate(dossier.current.run.runAt)],
      ["Actual: fecha de paga", reconciliationDate(dossier.current.run.accruedOn)],
      ["Actual: frecuencia", dossier.current.run.payFrequency],
      ["Actual: captura", reconciliationDate(dossier.current.capturedAt)],
      [
        "Anterior: informe",
        dossier.previous
          ? [dossier.previous.run.reportId, dossier.previous.run.reportName]
              .filter(Boolean)
              .join(" · ")
          : "Pendiente",
      ],
      ["Anterior: ejecución", reconciliationDate(dossier.previous?.run.runAt)],
      ["Anterior: fecha de paga", reconciliationDate(dossier.previous?.run.accruedOn)],
      ["Anterior: frecuencia", dossier.previous?.run.payFrequency ?? "Pendiente"],
      ["Anterior: captura", reconciliationDate(dossier.previous?.capturedAt)],
      ...exportParameters(dossier.parameters),
      ...dossier.result.diagnostics.map((message): [string, string] => [
        "Aviso",
        exportDiagnostic(message),
      ]),
    ],
  );
  table(
    "Fuentes",
    [
      "Categoría",
      "Periodo de nómina",
      "Devengo declarado",
      "Ventana desde",
      "Ventana hasta",
      "Cobertura declarada",
      "Registros",
      "Observaciones",
    ],
    dossier.sources.map((source) => [
      categoryLabel(source.category),
      source.period,
      source.accrualPeriod ?? "No declarado",
      source.windowStart ? reconciliationDate(source.windowStart) : "No declarada",
      source.windowEnd ? reconciliationDate(source.windowEnd) : "No declarada",
      source.complete ? "Completa" : "Parcial",
      source.facts.length,
      source.diagnostics.map(exportDiagnostic).join(" · "),
    ]),
  );
  table(
    "Entradas externas",
    [
      "Categoría",
      "Referencia",
      "Matrícula fuente",
      "Entidad",
      "Concepto",
      "Valor",
      "Incidencia",
      "Referencia de origen",
      "Referencia documental",
      "Motivo declarado",
    ],
    dossier.sources.flatMap((source) =>
      source.facts.flatMap((fact) =>
        Object.entries(fact.values).map(([field, value]) => [
          categoryLabel(source.category),
          fact.reference,
          fact.employeeId,
          fact.entity ?? "",
          sourceFieldLabel(field),
          sourceFieldValue(field, value),
          exportReason(fact.issue ?? ""),
          fact.recordId ?? "",
          fact.documentReference ?? "",
          fact.reason ?? "",
        ]),
      ),
    ),
  );
  for (const [label, snapshot] of [
    ["Datos actual", dossier.current],
    ["Datos anterior", dossier.previous],
  ] as const) {
    if (snapshot && snapshot.headers.length) table(label, snapshot.headers, snapshot.rows);
    else table(label, ["Estado"], [["Sin ejecución o sin columnas aplicables"]]);
  }
  for (const control of dossier.result.controls) {
    const rows = dossier.result.findings
      .filter((finding) => finding.control === control.id)
      .sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
    const auto = dossier.current.extraPayAutomatic;
    const noExtraDue =
      control.id === "C04" &&
      !rows.length &&
      auto &&
      !auto.issue &&
      auto.people.length > 0 &&
      auto.people.every((person) => !person.issue);
    table(
      `${control.id} ${control.name}`,
      [
        "Matrícula",
        "Persona",
        "Concepto",
        control.id === "C02" ? "Actual (%)" : "Actual",
        control.id === "C02" ? "Anterior / esperado (%)" : "Anterior / esperado",
        control.id === "C02" ? "Diferencia (pp)" : "Diferencia",
        "Motivo / pendiente",
      ],
      rows.length
        ? rows.map((finding) => [
            finding.employeeId,
            finding.name,
            metricLabel(finding.metric),
            finding.actual,
            finding.expected,
            finding.delta,
            exportReason(finding.reason),
          ])
        : noExtraDue
          ? [
              [
                "Sin pagos de extras que contrastar en esta ejecución",
                "",
                "",
                "",
                "",
                "",
                "Configuración acreditada en PeopleNet",
              ],
            ]
          : [
              [
                "Sin filas comparables",
                "",
                "",
                null,
                null,
                null,
                "Revisar identidad y estructura del informe",
              ],
            ],
      rows.length ? rows.map((finding) => finding.status) : noExtraDue ? [] : ["No comparable"],
    );
  }
  const findingsById = new Map(dossier.result.findings.map((finding) => [finding.id, finding]));
  table(
    "Revisión",
    [
      "Matrícula",
      "Persona",
      "Control",
      "Concepto",
      "Estado",
      "Comentario",
      "Revisado por",
      "Fecha",
      "Vigencia",
    ],
    dossier.annotations.map((annotation) => {
      const finding = findingsById.get(annotation.findingId);
      return [
        finding?.employeeId ?? "Hallazgo anterior",
        finding?.name ?? "",
        finding?.control ?? "",
        finding ? metricLabel(finding.metric) : "",
        annotation.state,
        annotation.comment,
        annotation.actor,
        reconciliationDate(annotation.at),
        !finding
          ? "Hallazgo anterior"
          : annotation.invalidated
            ? "Invalidada: evidencia modificada"
            : "Vigente",
      ];
    }),
  );
  return new Uint8Array(await workbook.xlsx.writeBuffer());
}
