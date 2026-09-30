import { execFile, execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { copyFile, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import * as XLSX from "xlsx";
import { describe, expect, it } from "vitest";

import { editHireWorkbook, encodeUtf8Bom, findInstalledExcel, powershellForExcel } from "./excel";
import { hireExtraFixture } from "./test-fixtures";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_TEMPLATE_SHEET_NAMES,
  WRITTEN_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const templatePath = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const canEdit = existsSync(templatePath) && findInstalledExcel() !== null;
const writtenColumns = new Set(WRITTEN_COLUMNS);
const optionalCurrencyColumns = ["GV", "GW", "IJ", "IK"] as const;
const runFile = promisify(execFile);

const person = (suffix: string, hireDate: string): HirePerson => ({
  ...hireExtraFixture,
  positionChoice: suffix === "B" ? "position" : "job",
  occupationType: suffix === "B" ? "hours" : "",
  occupationHours: suffix === "B" ? "35.5" : "",
  legalRepresentativeNif: "00001234X",
  birthDate: "1990-01-03",
  atradiusId: "000044",
  phonePrefix: "0034",
  phoneNumber: "001234567",
  mobilePrefix: "0034",
  mobileNumber: "00600111222",
  addressLine1: "Calle Mayor",
  addressLine2: suffix === "B" ? "Bloque anexo" : "",
  streetNumber: "0005",
  buildingBlock: "B",
  staircase: "2",
  floor: "3",
  door: "A",
  postalCode: "08001",
  keyEmployee: true,
  strategicEmployee: false,
  ssNumberChoice: suffix === "B" ? "assigned" : "unassigned",
  ssNumberPrefix: suffix === "B" ? "08" : "",
  ssNumberBody: suffix === "B" ? "0012345678" : "",
  ssNumberSuffix: suffix === "B" ? "09" : "",
  contractEnd: "2027-05-01T14:30",
  scheduleChoice: suffix === "B" ? "partial" : "full",
  partialSchedulePercent: suffix === "B" ? "50" : "",
  hourType: suffix === "B" ? "1" : "",
  numberOfHours: suffix === "B" ? "20" : "",
  partialScheduleType: suffix === "B" ? "R" : "",
  weeklyWorkDays: suffix === "B" ? "5" : "",
  legalReductionPercent: "25",
  replacedSsPrefix: "08",
  replacedSsBody: "0000123456",
  replacedSsSuffix: "03",
  disabilityChoice: suffix === "B" ? "with" : "without",
  disabilityPercent: suffix === "B" ? "33" : "",
  contractSeniorityStart: "2024-02-29",
  womanMaternity24: true,
  underrepresentedWoman: false,
  activeInsertionIncome: true,
  reliefContract: false,
  readmittedDisabled: true,
  firstSelfEmployedWorker: false,
  probationDays: "15",
  probationEnd: "2026-11-01",
  additionalClause: "Cláusula revisada",
  annualGross: "32000.25",
  seniorityDate: "2020-03-01",
  birthCommunity: suffix === "B" ? "" : "09",
  department: suffix === "B" ? "0002" : "0010",
  extrasDate: suffix === "B" ? "" : "2024-02-29",
  referenceModelWeek: suffix === "B" ? "" : "001/02",
  timeManagementPay: true,
  bankFormatChoice: suffix === "B" ? "other" : "iban",
  iban: suffix === "B" ? "" : "ES5200491500061234567890",
  bankBranch: suffix === "B" ? "00491500" : "",
  accountNumber: suffix === "B" ? "001234567890" : "",
  firstName: `Nombre${suffix}`,
  lastName1: `Apellido${suffix}`,
  lastName2: suffix === "B" ? "" : `Segundo${suffix}`,
  documentType: "2",
  documentNumber: `DOC${suffix}`,
  email: `user${suffix.toLowerCase()}@example.test`,
  hireDate,
  issuingCountry: "050",
  nationality: suffix === "B" ? "" : "724",
  birthProvince: "724/08/08",
  birthCountry: "724",
  gender: "2",
  maritalStatus: "02",
  atradiusJobCode: "AD00T3",
  atradiusCategory: "B1",
  locationType: "2",
  roadType: "AV",
  city: "724/08/08/08019",
  province: "724/08/08",
  community: "724/09",
  country: "724",
  legalEntity: "ACYC_PT",
  job: suffix === "B" ? "" : "GR_ACAN",
  position: suffix === "B" ? "POS01" : "",
  workUnit: "1_GRCFO",
  workLocation: "076",
  category: "012",
  project: "000000",
  startReason: "002",
  structure: "2",
  functionalWorkCenter: "O_CEN",
  tc1Header: "0003",
  tariffGroup: "2",
  ssOccupation: "a",
  ssAgreement: suffix === "B" ? "" : "0801485",
  legalContract: "100",
  internalContract: "100A",
  laborRelation: "0100",
  reductionReason: "001",
  substitutionCause: "1",
  unemploymentCondition: "1",
  specialLaborRelation: "100",
  socialExclusion: "2",
  payrollAgreement: "0003",
  adjustmentType: "1",
  salaryType: "1",
  payrollCurrency: suffix === "B" ? "" : "USD",
  union: suffix === "B" ? "" : "UGT",
  irpfType: "NAV",
  perceptionKey: "B",
  variableCompensationMode: "3",
  paymentCurrency: "USD",
  paymentType: "2",
  companyBank: suffix === "B" ? "0003" : "0002",
  accountCurrency: suffix === "B" ? "" : "EUR",
});

type CellSnapshot = { value: unknown; formula?: string };

const rowCells = (sheet: XLSX.WorkSheet, row: number): Map<string, CellSnapshot> => {
  const cells = new Map<string, CellSnapshot>();
  for (const address of Object.keys(sheet)) {
    if (address.startsWith("!")) continue;
    const decoded = XLSX.utils.decode_cell(address);
    if (decoded.r !== row - 1) continue;
    const cell = sheet[address];
    cells.set(XLSX.utils.encode_col(decoded.c), {
      value: cell?.v,
      formula: typeof cell?.f === "string" ? cell.f : undefined,
    });
  }
  return cells;
};

const shiftFormula = (formula: string, fromRow: number, toRow: number): string =>
  formula.replace(/(\$?)([A-Z]{1,3})(\$?)(\d+)/g, (match, colAbs, col, rowAbs, row) => {
    if (rowAbs === "$") return match;
    return `${colAbs}${col}${rowAbs}${Number(row) + (toRow - fromRow)}`;
  });

const definedNames = (workbook: XLSX.WorkBook): string[] =>
  (workbook.Workbook?.Names ?? [])
    .map((entry) => entry.Name)
    .filter((name): name is string => typeof name === "string")
    .sort();

const excelProcessIds = (): number[] => {
  const output = execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      "(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | ForEach-Object { $_.Id }) -join ','",
    ],
    { encoding: "utf8" },
  );
  return output
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((value) => Number.isFinite(value) && value > 0);
};

const readWorkbook = (bytes: Buffer): XLSX.WorkBook =>
  XLSX.read(bytes, { type: "buffer", raw: true, cellFormula: true });

/** A temporary COM-edited template exercises formulas absent from the shipped defaults. */
const addCurrencyFormulas = async (directory: string): Promise<string> => {
  const workbookPath = path.join(directory, "CurrencyFormulas.xls");
  const scriptPath = path.join(directory, "currency-formulas.ps1");
  await copyFile(templatePath, workbookPath);
  await writeFile(
    scriptPath,
    encodeUtf8Bom(String.raw`
param([Parameter(Mandatory = $true)][string]$WorkbookPath)
$ErrorActionPreference = "Stop"
function Com-Member($com, [string]$name, $flags, [object[]]$comArgs = @()) {
  $result = $com.GetType().InvokeMember($name, $flags, $null, $com, $comArgs)
  Write-Output -NoEnumerate $result
}
$get = [System.Reflection.BindingFlags]::GetProperty
$set = [System.Reflection.BindingFlags]::SetProperty
$invoke = [System.Reflection.BindingFlags]::InvokeMethod -bor $get
$excel = $null
$workbook = $null
try {
  $excel = New-Object -ComObject Excel.Application
  Com-Member $excel "Visible" $set @($false) | Out-Null
  Com-Member $excel "DisplayAlerts" $set @($false) | Out-Null
  Com-Member $excel "EnableEvents" $set @($false) | Out-Null
  Com-Member $excel "AskToUpdateLinks" $set @($false) | Out-Null
  Com-Member $excel "AutomationSecurity" $set @(3) | Out-Null
  Unblock-File -LiteralPath $WorkbookPath -ErrorAction SilentlyContinue
  $workbooks = Com-Member $excel "Workbooks" $get
  $workbook = Com-Member $workbooks "Open" $invoke @($WorkbookPath, 0, $false)
  $worksheets = Com-Member $workbook "Worksheets" $get
  $sheet = Com-Member $worksheets "Item" $invoke @("AltaNueva")
  foreach ($column in @("GV", "GW", "IJ", "IK")) {
    $currency = if ($column -in @("GV", "GW")) { "EUR" } else { "ESP" }
    $range = Com-Member $sheet "Range" $get @($column + "6")
    $formula = '=IF($A6=$A6,"{0}","{0}")' -f $currency
    Com-Member $range "NumberFormat" $set @("General") | Out-Null
    Com-Member $range "Formula" $set @($formula) | Out-Null
  }
  Com-Member $workbook "Save" $invoke | Out-Null
} finally {
  if ($null -ne $workbook) {
    Com-Member $workbook "Close" $invoke @($false) | Out-Null
    [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($workbook)
  }
  if ($null -ne $excel) {
    Com-Member $excel "Quit" $invoke | Out-Null
    [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel)
  }
  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
}
`),
  );
  await runFile(
    powershellForExcel(),
    [
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      scriptPath,
      "-WorkbookPath",
      workbookPath,
    ],
    { windowsHide: true, timeout: 180_000 },
  );
  return workbookPath;
};

describe.skipIf(!canEdit)("Excel preserves Hire_1_PERSONA", () => {
  it("changes only manual cells for one person and keeps workbook structure", async () => {
    const templateBytes = readFileSync(templatePath);
    const templateSize = statSync(templatePath).size;
    const hireDate = "2026-10-02";
    const before = new Set(excelProcessIds());
    const bytes = await editHireWorkbook(templatePath, [person("A", hireDate)]);
    expect(excelProcessIds().filter((pid) => !before.has(pid))).toEqual([]);
    expect(statSync(templatePath).size).toBe(templateSize);
    expect(bytes.subarray(0, 8).equals(OLE_MAGIC)).toBe(true);
    expect(bytes.length).toBeGreaterThan(templateBytes.length * 0.8);

    const templateBook = readWorkbook(templateBytes);
    const generatedBook = readWorkbook(bytes);
    expect(generatedBook.SheetNames).toEqual([...HIRE_TEMPLATE_SHEET_NAMES]);
    expect(generatedBook.SheetNames).toEqual(templateBook.SheetNames);
    expect(definedNames(generatedBook)).toEqual(definedNames(templateBook));

    const templateSheet = templateBook.Sheets[HIRE_DATA_SHEET];
    const sheet = generatedBook.Sheets[HIRE_DATA_SHEET];
    const original = rowCells(templateSheet, FIRST_PERSON_ROW);
    const generated = rowCells(sheet, FIRST_PERSON_ROW);

    expect(generated.get("R")?.value).toBe("NombreA");
    expect(generated.get("O")?.value).toBe("ApellidoA");
    expect(generated.get("P")?.value).toBe("ApellidoA");
    expect(generated.get("Q")?.value).toBe("SegundoA");
    expect(generated.get("V")?.value).toBe("2");
    expect(generated.get("W")?.value).toBe("2");
    expect(generated.get("X")?.value).toBe("DOCA");
    expect(generated.get("Y")?.value).toBe("DOCA");
    expect(generated.get("AY")?.value).toBe("usera@example.test");
    expect(generated.get("IQ")?.value).toBe("usera@example.test");
    expect(generated.get("D")?.value).toBe(toExcelSerialDate(hireDate));
    expect(generated.get("E")?.value).toBe(toExcelSerialDate(hireDate));
    expect(generated.get("HT")?.value).toBe("USD");
    expect(generated.get("HU")?.value).toBe("USD");
    expect(generated.get("HV")?.value).toBe("2");
    expect(generated.get("HW")?.value).toBe("2");
    expect(generated.get("HX")?.value).toBe("0002");
    expect(generated.get("HY")?.value).toBe("0002");
    expect(generated.get("IJ")?.value).toBe("EUR");
    expect(generated.get("IK")?.value).toBe("EUR");
    for (const column of optionalCurrencyColumns) {
      expect(generated.get(column)?.formula, column).toBeUndefined();
    }
    expect(generated.get("GF")?.value).toBe(1);
    expect(generated.get("GG")?.value).toBe(1);
    expect(generated.get("GH")?.value).toBe("0003");
    expect(generated.get("GI")?.value).toBe("0003");
    expect(generated.get("GL")?.value).toBe("1");
    expect(generated.get("GM")?.value).toBe("1");
    expect(generated.get("GR")?.value).toBe("UGT");
    expect(generated.get("GS")?.value).toBe("UGT");
    expect(generated.get("GS")?.formula).toBeUndefined();
    expect(generated.get("GV")?.value).toBe("USD");
    expect(generated.get("GW")?.value).toBe("USD");
    expect(generated.get("HB")?.value).toBe("NAV");
    expect(generated.get("HC")?.value).toBe("NAV");
    expect(generated.get("HD")?.value).toBe("B");
    expect(generated.get("HE")?.value).toBe("B");
    expect(generated.get("IU")?.value).toBe(3);
    for (const [column, value] of [
      ["AA", "050"],
      ["AB", "050"],
      ["AE", "724"],
      ["AF", "724"],
      ["AG", "08"],
      ["AH", "08"],
      ["AO", "724"],
      ["AP", "724"],
      ["AQ", "2"],
      ["AR", "2"],
      ["AS", "02"],
      ["AT", "02"],
      ["AM", "AD00T3"],
      ["T", "B1"],
      ["BB", "2"],
      ["BC", "2"],
      ["BD", "AV"],
      ["BE", "AV"],
      ["BQ", "08019"],
      ["BR", "08019"],
      ["BW", "08"],
      ["BX", "08"],
      ["CB", "09"],
      ["CC", "09"],
      ["CE", "724"],
      ["CF", "724"],
      ["DZ", "0003"],
      ["EA", "0003"],
      ["EB", "2"],
      ["EC", "2"],
      ["ED", "a"],
      ["EE", "a"],
      ["EF", "0801485"],
      ["EG", "0801485"],
      ["EI", "100"],
      ["EJ", "100"],
      ["EK", "100A"],
      ["EL", "100A"],
      ["EO", "0100"],
      ["EP", "0100"],
      ["EZ", "001"],
      ["FA", "001"],
      ["FD", "1"],
      ["FE", "1"],
      ["FI", "1"],
      ["FJ", "1"],
      ["FK", "100"],
      ["FL", "100"],
      ["FM", "2"],
      ["FN", "2"],
    ] as const) {
      expect(generated.get(column)?.value, column).toBe(value);
    }
    for (const [column, value] of [
      ["CH", "ACYC_PT"],
      ["CI", "ACYC_PT"],
      ["CK", "GR_ACAN"],
      ["CL", "GR_ACAN"],
      ["CS", "1_GRCFO"],
      ["CT", "1_GRCFO"],
      ["CU", "076"],
      ["CV", "076"],
      ["CW", "012"],
      ["CX", "012"],
      ["DB", "002"],
      ["DC", "002"],
      ["AZ", "2"],
      ["BA", "O_CEN"],
    ] as const) {
      expect(generated.get(column)?.value, column).toBe(value);
    }
    expect(generated.get("CZ")?.value).toBe("000000");
    expect(generated.get("CY")?.value).toBe(original.get("CY")?.value);
    expect(generated.get("AU")?.value).toBe("0034");
    expect(generated.get("AV")?.value).toBe("001234567");
    expect(generated.get("IO")?.value).toBe("001234567");
    expect(generated.get("AC")?.value).toBe(toExcelSerialDate("1990-01-03"));
    expect(generated.get("AD")?.value).toBe(toExcelSerialDate("1990-01-03"));
    expect(generated.get("BH")?.value).toBe("Calle Mayor");
    expect(generated.get("CG")?.value).toBe("08001");
    expect(generated.get("DF")?.value).toBe("Si");
    expect(generated.get("DG")?.value).toBe(1);
    expect(generated.get("DH")?.value).toBe("No");
    expect(generated.get("DI")?.value).toBe(0);
    expect(generated.get("DU")?.value).toBe("Sin Núm. S.S.");
    expect(generated.get("DV")?.value).toBe(0);
    expect(generated.get("FO")?.value).toBeUndefined();
    expect(generated.get("GJ")?.value).toBe(32000.25);
    expect(generated.get("GQ")?.value).toBe("ES5200491500061234567890");
    expect(generated.get("AL")?.value).toBe("09");
    expect(generated.get("ER")?.value).toBe("0010");
    expect(generated.get("GP")?.value).toBe(toExcelSerialDate("2024-02-29"));
    expect(sheet.GP6?.t).toBe("n");
    expect(generated.get("HN")?.value).toBe("001");
    expect(generated.get("HP")?.value).toBe("02");
    for (const column of ["AL", "ER", "HN", "HP"]) {
      expect(sheet[`${column}6`]?.t, column).toBe("s");
      expect(generated.get(column)?.formula, column).toBeUndefined();
    }
    expect(generated.get("HO")).toEqual(original.get("HO"));
    expect(generated.get("HZ")?.value).toBeUndefined();
    expect(generated.get("IA")?.value).toBeUndefined();
    expect(generated.get("ID")?.value).toBeUndefined();
    for (const column of ["GY", "HA", "IB", "IC", "IE", "IF", "IG", "IH", "II"]) {
      expect(generated.get(column)?.value, column).toEqual(original.get(column)?.value);
      expect(generated.get(column)?.formula, column).toEqual(original.get(column)?.formula);
    }

    for (const [column, cell] of original) {
      if (writtenColumns.has(column)) continue;
      const next = generated.get(column);
      expect(next?.formula).toBe(cell.formula);
      if (!cell.formula) expect(next?.value).toEqual(cell.value);
    }

    const manualValues = [...generated.entries()]
      .filter(([column]) => writtenColumns.has(column))
      .map(([, cell]) => String(cell.value ?? ""));
    const joined = manualValues.join("\n");
    expect(joined).not.toContain("POWER6");
    expect(joined).not.toContain("12345678Z");
    expect(joined).not.toContain("p6@prueba.es");
    expect(joined).not.toContain("atradius.com");
  }, 180_000);

  it("copies the template row for three people and overlays only manual fields", async () => {
    const templateBytes = readFileSync(templatePath);
    const people = [
      person("A", "2026-10-02"),
      person("B", "2026-10-03"),
      person("C", "2026-10-04"),
    ];
    const before = new Set(excelProcessIds());
    const bytes = await editHireWorkbook(templatePath, people);
    expect(excelProcessIds().filter((pid) => !before.has(pid))).toEqual([]);
    expect(bytes.length).toBeGreaterThan(templateBytes.length * 0.8);
    expect(bytes.subarray(0, 8).equals(OLE_MAGIC)).toBe(true);

    const templateSheet = readWorkbook(templateBytes).Sheets[HIRE_DATA_SHEET];
    const sheet = readWorkbook(bytes).Sheets[HIRE_DATA_SHEET];
    const original = rowCells(templateSheet, FIRST_PERSON_ROW);
    const rows = [6, 7, 8].map((row) => rowCells(sheet, row));

    expect(rows[0]?.get("R")?.value).toBe("NombreA");
    expect(rows[1]?.get("R")?.value).toBe("NombreB");
    expect(rows[2]?.get("R")?.value).toBe("NombreC");
    expect(rows[1]?.get("Q")?.value).toBeUndefined();
    expect(rows[1]?.get("AY")?.value).toBe("userb@example.test");
    expect(rows[1]?.get("IQ")?.value).toBe("userb@example.test");
    expect(rows[1]?.get("HY")?.value).toBe("0003");
    expect(rows[2]?.get("HY")?.value).toBe("0002");
    for (const column of optionalCurrencyColumns) {
      const expected = original.get(column);
      expect(rows[1]?.get(column)?.value, column).toEqual(expected?.value);
      expect(rows[1]?.get(column)?.formula, column).toBe(
        expected?.formula ? shiftFormula(expected.formula, FIRST_PERSON_ROW, 7) : undefined,
      );
    }
    expect(rows[2]?.get("IK")?.value).toBe("EUR");
    expect(rows[1]?.get("GS")?.value).toBeUndefined();
    for (const column of ["GV", "GW"]) expect(rows[2]?.get(column)?.value).toBe("USD");
    for (const values of rows) {
      for (const column of ["HT", "HU"]) expect(values.get(column)?.value).toBe("USD");
    }
    expect(rows[2]?.get("GS")?.value).toBe("UGT");
    expect(rows[1]?.get("EG")?.value).toBeUndefined();
    expect(rows[1]?.get("AF")?.value).toBeUndefined();
    expect(rows[2]?.get("AF")?.value).toBe("724");
    expect(rows[2]?.get("EG")?.value).toBe("0801485");
    expect(rows[0]?.get("CH")?.value).toBe("ACYC_PT");
    expect(rows[1]?.get("CL")?.value).toBeUndefined();
    expect(rows[2]?.get("CL")?.value).toBe("GR_ACAN");
    expect(rows[1]?.get("CN")?.value).toBe("POS01");
    expect(rows[1]?.get("CN")?.formula).toBeUndefined();
    expect(rows[2]?.get("CN")?.value).toBeUndefined();
    expect(rows[1]?.get("CP")?.value).toBe(35.5);
    expect(rows[1]?.get("CQ")?.value).toBeUndefined();
    expect(rows[1]?.get("CR")?.value).toBeUndefined();
    expect(rows[1]?.get("DW")?.value).toBe("08");
    expect(rows[1]?.get("DX")?.value).toBe("0012345678");
    expect(rows[1]?.get("EQ")?.value).toBe(50);
    expect(rows[1]?.get("ES")?.value).toBe("Semanales");
    expect(rows[1]?.get("ET")?.value).toBe(1);
    expect(rows[1]?.get("EV")?.value).toBe("Regular");
    expect(rows[1]?.get("EW")?.value).toBe("R");
    expect(rows[1]?.get("FO")?.value).toBe(33);
    expect(rows[1]?.get("GQ")?.value).toBeUndefined();
    expect(rows[1]?.get("HZ")?.value).toBe("00491500");
    expect(rows[1]?.get("IA")?.value).toBe("00491500");
    expect(rows[1]?.get("ID")?.value).toBe("001234567890");

    rows.forEach((values, index) => {
      const populated = index !== 1;
      expect(values.get("AL")?.value).toBe(populated ? "09" : undefined);
      expect(values.get("ER")?.value).toBe(populated ? "0010" : "0002");
      expect(values.get("GP")?.value).toBe(populated ? toExcelSerialDate("2024-02-29") : undefined);
      expect(values.get("HN")?.value).toBe(populated ? "001" : undefined);
      expect(values.get("HP")?.value).toBe(populated ? "02" : undefined);
      expect(values.get("AM")?.value).toBe("AD00T3");
      expect(values.get("HO")).toEqual(original.get("HO"));
    });

    rows.forEach((values, index) => {
      const row = FIRST_PERSON_ROW + index;
      for (const [column, cell] of original) {
        if (writtenColumns.has(column)) continue;
        const next = values.get(column);
        if (cell.formula) {
          expect(next?.formula).toBe(shiftFormula(cell.formula, FIRST_PERSON_ROW, row));
        } else {
          expect(next?.value).toEqual(cell.value);
        }
      }
    });

    expect(rows[0]?.get("X")?.value).not.toEqual(rows[1]?.get("X")?.value);
    expect(rows[1]?.get("AY")?.value).not.toEqual(rows[2]?.get("AY")?.value);
  }, 180_000);

  it("keeps the original currency defaults for a single person with empty currencies", async () => {
    const templateBytes = readFileSync(templatePath);
    const templateSheet = readWorkbook(templateBytes).Sheets[HIRE_DATA_SHEET];
    const input = { ...person("A", "2026-10-02"), payrollCurrency: "", accountCurrency: "" };
    const before = new Set(excelProcessIds());
    const sheet = readWorkbook(await editHireWorkbook(templatePath, [input])).Sheets[
      HIRE_DATA_SHEET
    ];
    expect(excelProcessIds().filter((pid) => !before.has(pid))).toEqual([]);
    const original = rowCells(templateSheet, FIRST_PERSON_ROW);
    const generated = rowCells(sheet, FIRST_PERSON_ROW);
    for (const column of optionalCurrencyColumns) {
      expect(generated.get(column), column).toEqual(original.get(column));
    }
    for (const column of ["HT", "HU"]) expect(generated.get(column)?.value).toBe("USD");
    expect(readFileSync(templatePath).equals(templateBytes)).toBe(true);
  }, 180_000);

  it("preserves currency formulas for empty fields and overwrites them for populated fields", async () => {
    const templateBytes = readFileSync(templatePath);
    const before = new Set(excelProcessIds());
    const directory = await mkdtemp(path.join(tmpdir(), "hire-currency-formulas-"));
    try {
      const formulaTemplatePath = await addCurrencyFormulas(directory);
      const formulaBytes = await readFile(formulaTemplatePath);
      const original = rowCells(
        readWorkbook(formulaBytes).Sheets[HIRE_DATA_SHEET],
        FIRST_PERSON_ROW,
      );
      for (const column of optionalCurrencyColumns) {
        expect(original.get(column)?.formula, column).toBeTruthy();
      }
      const populated = {
        ...person("A", "2026-10-02"),
        payrollCurrency: "USD",
        accountCurrency: "CAD",
      };
      const empty = { ...populated, payrollCurrency: "", accountCurrency: "" };
      const single = readWorkbook(await editHireWorkbook(formulaTemplatePath, [empty])).Sheets[
        HIRE_DATA_SHEET
      ];
      for (const column of optionalCurrencyColumns) {
        expect(rowCells(single, FIRST_PERSON_ROW).get(column), column).toEqual(
          original.get(column),
        );
      }
      const people = [
        populated,
        empty,
        { ...empty, payrollCurrency: "GBP" },
        { ...empty, accountCurrency: "JPY" },
      ];
      const sheet = readWorkbook(await editHireWorkbook(formulaTemplatePath, people)).Sheets[
        HIRE_DATA_SHEET
      ];
      people.forEach((input, index) => {
        const row = FIRST_PERSON_ROW + index;
        const generated = rowCells(sheet, row);
        for (const [value, columns] of [
          [input.payrollCurrency, ["GV", "GW"]],
          [input.accountCurrency, ["IJ", "IK"]],
        ] as const) {
          for (const column of columns) {
            const cell = generated.get(column);
            if (value === "") {
              const expected = original.get(column);
              expect(cell?.value, `${column}${row}`).toEqual(expected?.value);
              expect(cell?.formula, `${column}${row}`).toBe(
                shiftFormula(expected?.formula ?? "", FIRST_PERSON_ROW, row),
              );
            } else {
              expect(cell?.value, `${column}${row}`).toBe(value);
              expect(cell?.formula, `${column}${row}`).toBeUndefined();
            }
          }
        }
        for (const column of ["HT", "HU"]) expect(generated.get(column)?.value).toBe("USD");
      });
      expect((await readFile(formulaTemplatePath)).equals(formulaBytes)).toBe(true);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
    expect(readFileSync(templatePath).equals(templateBytes)).toBe(true);
    expect(excelProcessIds().filter((pid) => !before.has(pid))).toEqual([]);
  }, 180_000);

  it("preserves Atradius AM, IBAN GQ and template HO when only the four fields differ", async () => {
    const changed = person("A", "2026-10-02");
    const base = {
      ...changed,
      birthCommunity: "",
      department: "0000",
      extrasDate: "",
      referenceModelWeek: "",
    };
    const baseSheet = readWorkbook(await editHireWorkbook(templatePath, [base])).Sheets[
      HIRE_DATA_SHEET
    ];
    const changedSheet = readWorkbook(await editHireWorkbook(templatePath, [changed])).Sheets[
      HIRE_DATA_SHEET
    ];
    const templateSheet = readWorkbook(readFileSync(templatePath)).Sheets[HIRE_DATA_SHEET];
    for (const [column, expected] of [
      ["AL", "09"],
      ["ER", "0010"],
      ["GP", toExcelSerialDate("2024-02-29")],
      ["HN", "001"],
      ["HP", "02"],
    ] as const) {
      expect(changedSheet[`${column}6`]?.v, column).toBe(expected);
    }
    for (const column of ["AL", "GP", "HN", "HP"]) {
      expect(baseSheet[`${column}6`]?.v, column).toBeUndefined();
    }
    expect(baseSheet.ER6?.v).toBe("0000");
    for (const sheet of [baseSheet, changedSheet]) {
      expect(sheet.AM6?.v).toBe(changed.atradiusJobCode);
      expect(sheet.GQ6?.v).toBe(changed.iban);
      expect(sheet.HO6?.v).toBe(templateSheet.HO6?.v);
      expect(sheet.HO6?.f).toBe(templateSheet.HO6?.f);
    }
  }, 180_000);
});
