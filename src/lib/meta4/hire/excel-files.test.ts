import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { writeHireEditFiles } from "./excel";
import type { HirePerson } from "./types";

const person: HirePerson = {
  firstName: "Ana",
  lastName1: "Lopez",
  lastName2: "",
  documentType: "DNI",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
};

const literalBomEscape = Buffer.from("\\uFEFF", "utf8");

describe("Hire Excel temp files", () => {
  let directory = "";

  afterEach(async () => {
    if (directory) await rm(directory, { recursive: true, force: true });
  });

  it("writes a real UTF-8 BOM and a JSON payload PowerShell can parse", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "hire-bom-"));
    const files = await writeHireEditFiles(directory, [person]);
    const script = await readFile(files.scriptPath);
    const instructions = await readFile(files.instructionsPath);

    expect(script.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf]))).toBe(true);
    expect(instructions.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf]))).toBe(true);
    expect(script.subarray(0, literalBomEscape.length).equals(literalBomEscape)).toBe(false);
    expect(instructions.subarray(0, literalBomEscape.length).equals(literalBomEscape)).toBe(false);

    const scriptText = script.subarray(3).toString("utf8").trim();
    expect(scriptText.startsWith("param(")).toBe(true);
    expect(scriptText).toContain("STAGE=workbook-opened");
    expect(scriptText).toContain("ConvertFrom-Json");

    const payload = JSON.parse(instructions.subarray(3).toString("utf8")) as {
      sheetName: string;
      rows: Array<{ row: number; cells: unknown[] }>;
    };
    expect(payload.sheetName).toBe("AltaNueva");
    expect(payload.rows[0]?.row).toBe(6);
    expect(payload.rows[0]?.cells.length).toBeGreaterThan(0);
  });
});
