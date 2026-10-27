import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";
import { importSource } from "./import";
import { reconcile } from "./engine";
import { DEFAULT_PARAMETERS, type Category } from "./types";
import { demoReport } from "./demo";
import { snapshot } from "./snapshot";

const directory = path.join(
  process.cwd(),
  "docs/automatizacion-reunion/fuentes_cuadres_cierre_de_nómina",
);
describe.skipIf(!existsSync(directory))("private local originals, no personal output", () => {
  it("reads all ten profiles intact and preserves independently known discrepancies", async () => {
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
    for (const filename of readdirSync(directory)) {
      const category = categories.find(([pattern]) => pattern.test(filename))?.[1];
      if (!category) continue;
      const file = path.join(directory, filename),
        bytes = readFileSync(file),
        before = createHash("sha256").update(bytes).digest("hex");
      const source = await importSource(bytes, filename, category, "2026-10", false);
      sources.push(source);
      expect(createHash("sha256").update(readFileSync(file)).digest("hex") === before).toBe(true);
      if (category === "ppse") {
        const wb = XLSX.read(bytes, { type: "buffer", cellFormula: false });
        const all = XLSX.utils.sheet_to_json<string[]>(wb.Sheets.Datos, {
          header: 1,
          raw: false,
          defval: "",
          blankrows: true,
        });
        const rows = [];
        for (const row of all.slice(1)) {
          if (!row[0]) break;
          rows.push(row);
        }
        current = snapshot({ ...demoReport("2026-10"), headers: all[0], rows }, true);
      }
    }
    expect(sources).toHaveLength(10);
    expect(current.rows).toHaveLength(579);
    expect(sources.find((source) => source.category === "teletrabajo")?.facts).toHaveLength(118);
    expect(sources.find((source) => source.category === "ppse")?.facts).toHaveLength(254);
    expect(
      sources.find((source) => source.category === "eurest")?.facts.filter((fact) => fact.issue),
    ).toHaveLength(1);
    const result = reconcile({
      period: "2026-10",
      current,
      previous: null,
      sources,
      parameters: { ...DEFAULT_PARAMETERS, cardRate: "12.1", cardBase: "11", rulesConfirmed: true },
    });
    const counts = (metric: string) => {
      const rows = result.findings.filter((finding) => finding.metric === metric);
      return [
        rows.filter((row) => row.status === "Coincide").length,
        rows.filter((row) => row.status === "Con diferencia").length,
      ];
    };
    for (const metric of [
      "healthCompany",
      "healthDeduction",
      "healthKind",
      "nursery",
      "transport",
      "transportKind",
      "renting",
      "rentingKind",
      "savings",
    ])
      expect(counts(metric), metric).toEqual([484, 0]);
    for (const metric of ["kmExempt", "kmSubject", "kmCancellation"])
      expect(counts(metric)).toEqual([24, 0]);
    expect(counts("apartments")).toEqual([57, 1]);
    expect(counts("cardExempt")).toEqual([335, 1]);
    expect(counts("cardSubject")).toEqual([335, 1]);
    expect(counts("ppse")).toEqual([239, 4]);
    expect(counts("gym")).toEqual([42, 0]);
    expect(
      result.findings
        .filter((finding) => finding.control === "C01")
        .every((finding) => finding.expected === null),
    ).toBe(true);
  }, 30_000);
});
