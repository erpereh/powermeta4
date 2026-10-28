import "server-only";
import ExcelJS from "exceljs";
import { METRICS } from "./catalogue";
import type { CalculationStatus, Dossier } from "./types";

/** Static, typed export palette follows the existing payroll workbook convention. */
const PALETTE = {
  heading: "FF1F3A5F",
  text: "FFFFFFFF",
  difference: "FFFFE9D6",
  pending: "FFF1F3F5",
} as const;
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
      column.width = Math.min(55, Math.max(16, headers[index].length + 3));
    });
    sheet.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: Math.max(1, sheet.rowCount), column: headers.length },
    };
    sheet.eachRow((row, index) => {
      row.alignment = { vertical: "top", wrapText: true };
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
      ["Motor", dossier.result.engineVersion],
      ["Huella", dossier.result.fingerprint],
      ["Actual: informe", dossier.current.run.reportId],
      ["Actual: ejecución", dossier.current.run.runAt],
      ["Actual: fecha de paga", dossier.current.run.accruedOn],
      ["Actual: frecuencia", dossier.current.run.payFrequency],
      ["Actual: captura", dossier.current.capturedAt],
      ["Actual: hash", dossier.current.hash],
      ["Anterior: informe", dossier.previous?.run.reportId ?? "Pendiente"],
      ["Anterior: ejecución", dossier.previous?.run.runAt ?? "Pendiente"],
      ["Anterior: fecha de paga", dossier.previous?.run.accruedOn ?? "Pendiente"],
      ["Anterior: frecuencia", dossier.previous?.run.payFrequency ?? "Pendiente"],
      ["Anterior: captura", dossier.previous?.capturedAt ?? "Pendiente"],
      ["Anterior: hash", dossier.previous?.hash ?? "Pendiente"],
      ["Tolerancia EUR", dossier.parameters.tolerance],
      ["Tolerancia pp", dossier.parameters.percentageTolerance],
      ...Object.entries(dossier.parameters).map(
        ([key, value]) =>
          [key, Array.isArray(value) ? value.join(", ") : String(value ?? "Pendiente")] as [
            string,
            string,
          ],
      ),
      ...dossier.result.diagnostics.map((message): [string, string] => ["Aviso", message]),
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
      "Hash",
      "Perfil",
      "Cobertura declarada",
      "Registros",
      "Observaciones",
    ],
    dossier.sources.map((source) => [
      source.category,
      source.period,
      source.accrualPeriod ?? "No declarado",
      source.windowStart ?? "No declarada",
      source.windowEnd ?? "No declarada",
      source.hash,
      source.profile,
      source.complete ? "Completa" : "Parcial",
      source.facts.length,
      source.diagnostics.join(" · "),
    ]),
  );
  table(
    "Entradas externas",
    [
      "Categoría",
      "Hash",
      "Referencia",
      "Matrícula fuente",
      "Entidad",
      "Campo",
      "Valor",
      "Incidencia",
      "ID registro",
      "Referencia documental",
      "Motivo declarado",
    ],
    dossier.sources.flatMap((source) =>
      source.facts.flatMap((fact) =>
        Object.entries(fact.values).map(([field, value]) => [
          source.category,
          source.hash,
          fact.reference,
          fact.employeeId,
          fact.entity ?? "",
          field,
          value,
          fact.issue ?? "",
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
    const rows = dossier.result.findings.filter((finding) => finding.control === control.id);
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
            METRICS.find((metric) => metric.id === finding.metric)?.header ?? finding.metric,
            finding.actual,
            finding.expected,
            finding.delta,
            finding.reason,
          ])
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
      rows.length ? rows.map((finding) => finding.status) : ["No comparable"],
    );
  }
  table(
    "Revisión",
    ["Hallazgo", "Estado", "Comentario", "Actor", "Fecha", "Vigencia"],
    dossier.annotations.map((annotation) => [
      annotation.findingId,
      annotation.state,
      annotation.comment,
      annotation.actor,
      annotation.at,
      annotation.invalidated ? "Invalidada: evidencia modificada" : "Vigente",
    ]),
  );
  return new Uint8Array(await workbook.xlsx.writeBuffer());
}
