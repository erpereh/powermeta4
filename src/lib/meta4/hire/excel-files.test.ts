import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { buildExcelDiagnostic, POWERSHELL_64, writeHireEditFiles } from "./excel";
import { WRITTEN_COLUMNS, toExcelSerialDate, toExcelSerialDateTime } from "./mapping";
import { hireExtraFixture } from "./test-fixtures";
import type { HirePerson } from "./types";

const person: HirePerson = {
  ...hireExtraFixture,
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
  position: "",
  workUnit: "00",
  workLocation: "724",
  category: "I1",
  project: "000000",
  job: "RDCI",
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

  it("writes all mapped columns with correct types, branches and no ambiguous bank fields", async () => {
    directory = await mkdtemp(path.join(tmpdir(), "hire-cells-"));
    const people: HirePerson[] = [
      {
        ...person,
        phonePrefix: "0034",
        phoneNumber: "000123456",
        birthDate: "1995-06-02",
        keyEmployee: true,
        womanMaternity24: true,
        annualGross: "37500.25",
        contractEnd: "2027-10-01T08:30",
      },
      {
        ...person,
        firstName: "Luis",
        positionChoice: "position",
        job: "",
        position: "POS01",
        occupationType: "ejc",
        occupationEjc: "0.75",
        ssNumberChoice: "assigned",
        ssNumberPrefix: "08",
        ssNumberBody: "0000123456",
        ssNumberSuffix: "02",
        scheduleChoice: "partial",
        partialSchedulePercent: "50",
        hourType: "2",
        numberOfHours: "80",
        partialScheduleType: "I",
        weeklyWorkDays: "4",
        disabilityChoice: "with",
        disabilityPercent: "33",
        bankFormatChoice: "other",
        iban: "",
        bankBranch: "00491500",
        accountNumber: "001234567890",
      },
    ];
    const files = await writeHireEditFiles(directory, people);
    const payload = JSON.parse((await readFile(files.instructionsPath)).subarray(3).toString("utf8")) as {
      rows: Array<{ row: number; copyFromTemplate: boolean; cells: Array<{ column: string; kind: string; value?: string | number }> }>;
    };
    expect(payload.rows.map((row) => [row.row, row.copyFromTemplate])).toEqual([[6, false], [7, true]]);
    const [first, second] = payload.rows.map((row) => new Map(row.cells.map((cell) => [cell.column, cell])));
    for (const cells of [first, second]) {
      expect(new Set(cells.keys())).toEqual(new Set(WRITTEN_COLUMNS));
      expect(cells.size).toBe(WRITTEN_COLUMNS.length);
      for (const column of ["ER", "GP", "HO", "HP", "GY", "HA", "IB", "IC", "IE", "IF", "IG", "IH", "II"]) {
        expect(cells.has(column), column).toBe(false);
      }
    }
    expect(first.get("AU")).toEqual({ column: "AU", kind: "literal", value: "0034" });
    expect(first.get("AV")).toEqual({ column: "AV", kind: "literal", value: "000123456" });
    expect(first.get("IO")).toEqual(first.get("AV") && { ...first.get("AV"), column: "IO" });
    expect(first.get("AC")?.value).toBe(toExcelSerialDate("1995-06-02"));
    expect(first.get("AD")?.value).toBe(toExcelSerialDate("1995-06-02"));
    expect(first.get("EM")?.value).toBe(toExcelSerialDateTime("2027-10-01T08:30"));
    expect(first.get("EN")?.value).toBe(toExcelSerialDateTime("2027-10-01T08:30"));
    expect(first.get("DG")).toEqual({ column: "DG", kind: "number", value: 1 });
    expect(first.get("FS")).toEqual({ column: "FS", kind: "text", value: "S" });
    expect(first.get("GJ")).toEqual({ column: "GJ", kind: "number", value: 37500.25 });
    expect(first.get("GQ")?.value).toBe("ES5200491500061234567890");
    expect(first.get("HZ")?.kind).toBe("clear");
    expect(first.get("IA")?.kind).toBe("clear");
    expect(first.get("ID")?.kind).toBe("clear");
    expect(second.get("CL")?.kind).toBe("clear");
    expect(second.get("CN")?.value).toBe("POS01");
    expect(second.get("CP")?.kind).toBe("clear");
    expect(second.get("CQ")).toEqual({ column: "CQ", kind: "number", value: 0.75 });
    expect(second.get("CR")?.kind).toBe("clear");
    expect(second.get("DW")?.value).toBe("08");
    expect(second.get("DX")?.value).toBe("0000123456");
    expect(second.get("EQ")?.value).toBe(50);
    expect(second.get("ES")?.value).toBe("Mensuales");
    expect(second.get("ET")?.value).toBe(2);
    expect(second.get("EW")?.value).toBe("I");
    expect(second.get("FO")?.value).toBe(33);
    expect(second.get("GQ")?.kind).toBe("clear");
    expect(second.get("HZ")?.value).toBe("00491500");
    expect(second.get("IA")?.value).toBe("00491500");
    expect(second.get("ID")?.value).toBe("001234567890");
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
