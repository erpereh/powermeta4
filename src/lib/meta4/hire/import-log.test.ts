import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import * as XLSX from "xlsx";
import { afterEach, describe, expect, it } from "vitest";

import { hireImportLogPrefix, parseHireImportLog, readHireImportLog } from "./import-log";

/** Synthetic PeopleNet log: rows 1–5 are headers, persons start at row 6. */
const logWorkbook = (rows: ReadonlyArray<readonly [number, string]>): Buffer => {
  const sheet = XLSX.utils.aoa_to_sheet([
    [],
    ["", "", "Nº ref. excel"],
    [],
    ["", "", "", "FECHA ALTA"],
    ["", "", "", "", "SRCO_PA_HIRE.SRCO_DT_HIRE"],
    ...rows.map(([status, message]) => [status, message]),
  ]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([["otra"]]), "BaseTemplate");
  XLSX.utils.book_append_sheet(workbook, sheet, "AltaNueva");
  const bytes: Buffer = XLSX.write(workbook, { type: "buffer", bookType: "biff8" });
  return bytes;
};

let directory: string | undefined;

afterEach(async () => {
  if (directory) await rm(directory, { recursive: true, force: true });
  directory = undefined;
});

describe("hire import log", () => {
  it("names the log after the hire file", () => {
    expect(hireImportLogPrefix("AltaPersonas_U_2026-09-30_15-34-42.xls")).toBe(
      "AltaPersonas_U_2026-09-30_15-34-42_log_",
    );
  });

  it("reads status and message of every person row", () => {
    expect(
      parseHireImportLog(
        logWorkbook([
          [0, ""],
          [1, "Datos obligatorios requeridos. «Proyecto» está vacía."],
        ]),
      ),
    ).toEqual([
      { person: 1, failed: false, message: "" },
      { person: 2, failed: true, message: "Datos obligatorios requeridos. «Proyecto» está vacía." },
    ]);
  });

  it("finds the log next to the hire file and returns null when it never appears", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "hire-log-"));
    const filePath = path.join(directory, "AltaPersonas_U_2026-09-30_15-34-42.xls");
    expect(await readHireImportLog(filePath, { attempts: 2, delayMs: 1 })).toBeNull();

    await writeFile(
      path.join(directory, "AltaPersonas_U_2026-09-30_15-34-41_log_2026-09-30.xls"),
      logWorkbook([[1, "otra alta"]]),
    );
    await writeFile(
      path.join(directory, "AltaPersonas_U_2026-09-30_15-34-42_log_2026-09-30.xls"),
      logWorkbook([[1, "rechazo"]]),
    );
    expect(await readHireImportLog(filePath, { attempts: 1, delayMs: 1 })).toEqual([
      { person: 1, failed: true, message: "rechazo" },
    ]);
  });
});
