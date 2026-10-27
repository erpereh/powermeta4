import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";
import { importSource } from "../../src/lib/payroll-reconciliation/import";
import { reconcile } from "../../src/lib/payroll-reconciliation/engine";
import { snapshot } from "../../src/lib/payroll-reconciliation/snapshot";
import { demoReport } from "../../src/lib/payroll-reconciliation/demo";
import { DEFAULT_PARAMETERS, type Category } from "../../src/lib/payroll-reconciliation/types";

/** Private input filenames and personal cells are never printed. No database connection. */
async function main() {
  const directory = process.argv[2];
  if (!directory) throw new Error("Falta directorio de fuentes.");
  const categories: [RegExp, Category][] = [
    [/^25 40/i, "aniversarios"],
    [/^Altas Gimnasio/i, "gimnasio"],
    [/^CYC_COMISION/i, "comisiones"],
    [/^Cobro/i, "apartamentos"],
    [/^Colectivo/i, "teletrabajo"],
    [/^Descuento comida/i, "comida"],
    [/^Eurest/i, "eurest"],
    [/^FPS_/i, "mercer"],
    [/^Normal_/i, "ppse"],
    [/^Recarga/i, "recarga"],
  ];
  const sources = [];
  let current = snapshot(demoReport("2026-10"), true);
  const reports = [];
  for (const filename of readdirSync(directory).filter((name) => /\.(xlsx|xls|csv)$/i.test(name))) {
    const category = categories.find(([pattern]) => pattern.test(filename))?.[1];
    if (!category) throw new Error("Archivo sin perfil local identificado.");
    const bytes = readFileSync(path.join(directory, filename));
    const source = await importSource(bytes, filename, category, "2026-10", false);
    sources.push(source);
    reports.push({
      category,
      records: source.facts.length,
      invalidRecords: source.facts.filter((fact) => fact.issue).length,
      diagnostics: source.diagnostics,
    });
    if (category === "ppse") {
      const workbook = XLSX.read(bytes, { type: "buffer", cellFormula: false });
      const rows = XLSX.utils.sheet_to_json<string[]>(workbook.Sheets.Datos, {
        header: 1,
        raw: false,
        defval: "",
        blankrows: true,
      });
      const headers = rows[0],
        raw = [];
      for (const row of rows.slice(1)) {
        if (!row[0]) break;
        raw.push(row);
      }
      const detail = demoReport("2026-10");
      current = snapshot(
        {
          ...detail,
          run: { ...detail.run, reportId: "01_C", reportName: "Referencia local de octubre" },
          headers,
          rows: raw,
        },
        true,
      );
    }
  }
  const result = reconcile({
    period: "2026-10",
    current,
    previous: null,
    sources,
    parameters: { ...DEFAULT_PARAMETERS, cardRate: "12.1", cardBase: "11", rulesConfirmed: true },
  });
  const comparisons = ["C03", "C06", "C07", "C10", "C14", "C16"].map((control) => ({
    control,
    metrics: [
      ...new Set(
        result.findings
          .filter((finding) => finding.control === control)
          .map((finding) => finding.metric),
      ),
    ].map((metric) => {
      const rows = result.findings.filter((finding) => finding.metric === metric);
      return {
        metric,
        matches: rows.filter((finding) => finding.status === "Coincide").length,
        differences: rows.filter((finding) => finding.status === "Con diferencia").length,
        pending: rows.filter((finding) => finding.delta === null).length,
      };
    }),
  }));
  console.log(
    JSON.stringify(
      {
        files: sources.length,
        payrollRows: current.rows.length,
        hasPrevious: false,
        note: "Las copias Datos/2/3 no representan meses distintos. Los parámetros de tarjeta solo reproducen la referencia de octubre; no acreditan vigencia universal.",
        sources: reports,
        comparisons,
      },
      null,
      2,
    ),
  );
}
main().catch((error: unknown) => {
  console.error(
    JSON.stringify({
      ok: false,
      error: error instanceof Error ? error.name : "Unknown",
      message: error instanceof Error ? error.message : "Error local",
    }),
  );
  process.exitCode = 1;
});
