import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { buildExcelDiagnostic, POWERSHELL_64, writeHireEditFiles } from "./excel";
import type { HirePerson } from "./types";

const person: HirePerson = {
  firstName: "Ana",
  lastName1: "Lopez",
  lastName2: "",
  documentType: "1",
  documentNumber: "00000000T",
  email: "ana@example.test",
  hireDate: "2026-10-01",
  issuingCountry: "",
  nationality: "",
  birthProvince: "",
  birthCountry: "",
  gender: "",
  maritalStatus: "01",
  atradiusJobCode: "0000",
  atradiusCategory: "00",
  locationType: "1",
  roadType: "CL",
  city: "724/28/28/28079",
  province: "724/28/28",
  community: "724/28",
  country: "724",
  legalEntity: "ACYC_ES",
  job: "",
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
  startReason: "001",
  structure: "0",
  functionalWorkCenter: "O_CEN1",
  tc1Header: "0000",
  tariffGroup: "1",
  ssOccupation: "",
  ssAgreement: "",
  legalContract: "100",
  internalContract: "100A",
  laborRelation: "",
  reductionReason: "",
  substitutionCause: "",
  unemploymentCondition: "",
  specialLaborRelation: "",
  socialExclusion: "",
  payrollAgreement: "0001",
  adjustmentType: "0",
  salaryType: "1",
  payrollCurrency: "",
  union: "",
  irpfType: "NAC",
  perceptionKey: "A",
  variableCompensationMode: "1",
  paymentCurrency: "EUR",
  paymentType: "4",
  companyBank: "0001",
  accountCurrency: "",
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
    expect(scriptText).toContain("STAGE=excel-com-created");
    expect(scriptText).toContain("STAGE=workbook-opened");
    expect(scriptText).toContain("STAGE=sheet-ready");
    expect(scriptText).toContain("STAGE=saved");
    expect(scriptText).toContain("[System.IO.File]::ReadAllText");
    expect(scriptText).toContain("Unblock-File");
    expect(scriptText).not.toContain("Excel COM did not start a new process.");
    expect(script.includes(literalBomEscape)).toBe(false);
    expect(instructions.includes(literalBomEscape)).toBe(false);

    const payload = JSON.parse(instructions.subarray(3).toString("utf8")) as {
      sheetName: string;
      rows: Array<{ row: number; cells: unknown[] }>;
    };
    expect(payload.sheetName).toBe("AltaNueva");
    expect(payload.rows[0]?.row).toBe(6);
    expect(payload.rows[0]?.cells.length).toBeGreaterThan(0);
  });

  it("records COM, workbook, sheet and save without personal data", () => {
    const diagnostic = buildExcelDiagnostic(
      1,
      "STAGE=excel-com-created\nSTAGE=workbook-opened\nSTAGE=edited\n",
      "Save failed for ana@example.test 12345678Z",
    );
    expect(diagnostic).toEqual({
      exitCode: 1,
      stage: "edited",
      stderr: "Save failed for [redacted-email] [redacted-id]",
      excelComCreated: true,
      workbookOpened: true,
      sheetFound: false,
      saveFailed: true,
    });
    expect(JSON.stringify(diagnostic)).not.toContain("ana@example.test");
    expect(JSON.stringify(diagnostic)).not.toContain("12345678Z");
  });

  it("parses the generated script and instructions with Windows PowerShell", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "hire-ps-"));
    const files = await writeHireEditFiles(directory, [person]);
    const checkerPath = path.join(directory, "check.ps1");
    await writeFile(
      checkerPath,
      [
        "param(",
        "  [Parameter(Mandatory = $true)][string]$ScriptPath,",
        "  [Parameter(Mandatory = $true)][string]$InstructionsPath",
        ")",
        "$errors = $null",
        "$tokens = $null",
        "[void][System.Management.Automation.Language.Parser]::ParseFile($ScriptPath, [ref]$tokens, [ref]$errors)",
        "if ($null -ne $errors -and $errors.Count -gt 0) {",
        "  [Console]::Error.WriteLine($errors[0].ToString())",
        "  exit 1",
        "}",
        "$json = [System.IO.File]::ReadAllText($InstructionsPath)",
        "if ($json.Length -gt 0 -and [int][char]$json[0] -eq 0xFEFF) { exit 2 }",
        "if ($json.Contains([string][char]92 + 'uFEFF')) { exit 4 }",
        "$payload = $json | ConvertFrom-Json",
        "if ($payload.sheetName -ne 'AltaNueva') { exit 3 }",
        "exit 0",
        "",
      ].join("\r\n"),
      "utf8",
    );

    const result = await new Promise<{ code: number | null; stderr: string }>((resolve, reject) => {
      const child = execFile(
        POWERSHELL_64,
        [
          "-NoProfile",
          "-NonInteractive",
          "-ExecutionPolicy",
          "Bypass",
          "-File",
          checkerPath,
          "-ScriptPath",
          files.scriptPath,
          "-InstructionsPath",
          files.instructionsPath,
        ],
        { windowsHide: true },
        (error, _stdout, stderr) => {
          if (error && !("code" in error)) {
            reject(error);
            return;
          }
          const code = error && "code" in error && typeof error.code === "number" ? error.code : 0;
          resolve({ code, stderr });
        },
      );
      child.on("error", reject);
    });

    expect(result.stderr).not.toMatch(/ana@example\.test|00000000T/);
    expect(result.code).toBe(0);
  });
});
