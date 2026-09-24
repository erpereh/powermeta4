import "server-only";

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { copyFile, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import {
  HIRE_CATALOG_FIELD_IDS,
  HIRE_CATALOG_FIELDS,
  HIRE_CONTRACT_FIELDS,
  lastGeoSegment,
  type HireCatalogFieldId,
} from "./catalogs";
import { Meta4HireError } from "./errors";
import { FIRST_PERSON_ROW, HIRE_DATA_SHEET, MANUAL_COLUMNS, toExcelSerialDate } from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const UTF8_BOM = Buffer.from([0xef, 0xbb, 0xbf]);
const EXCEL_TIMEOUT_MS = 180_000;
const CLASS_NOT_REGISTERED =
  /80040154|REGDB_E_CLASSNOTREG|Class not registered|Clase no registrada/i;

const systemRoot = process.env.SystemRoot ?? "C:\\Windows";
const programFiles = process.env.ProgramFiles ?? "C:\\Program Files";
const programFilesX86 = process.env["ProgramFiles(x86)"] ?? "C:\\Program Files (x86)";

export const POWERSHELL_64 = `${systemRoot}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
export const POWERSHELL_32 = `${systemRoot}\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe`;

const EXCEL_CANDIDATES = [
  `${programFiles}\\Microsoft Office\\root\\Office16\\EXCEL.EXE`,
  `${programFiles}\\Microsoft Office\\Office16\\EXCEL.EXE`,
  `${programFilesX86}\\Microsoft Office\\root\\Office16\\EXCEL.EXE`,
  `${programFilesX86}\\Microsoft Office\\Office16\\EXCEL.EXE`,
];

export type InstalledExcel = { path: string; bitness: 32 | 64 };

export const findInstalledExcel = (): InstalledExcel | null => {
  for (const candidate of EXCEL_CANDIDATES) {
    if (!existsSync(/* turbopackIgnore: true */ candidate)) continue;
    return { path: candidate, bitness: candidate.includes("(x86)") ? 32 : 64 };
  }
  return null;
};

export const powershellForExcel = (): string => {
  const excel = findInstalledExcel();
  if (excel?.bitness === 32 && existsSync(/* turbopackIgnore: true */ POWERSHELL_32))
    return POWERSHELL_32;
  if (existsSync(/* turbopackIgnore: true */ POWERSHELL_64)) return POWERSHELL_64;
  return "powershell.exe";
};

const alternatePowershell = (current: string): string | null => {
  if (
    current.toLowerCase() === POWERSHELL_64.toLowerCase() &&
    existsSync(/* turbopackIgnore: true */ POWERSHELL_32)
  )
    return POWERSHELL_32;
  if (
    current.toLowerCase() === POWERSHELL_32.toLowerCase() &&
    existsSync(/* turbopackIgnore: true */ POWERSHELL_64)
  )
    return POWERSHELL_64;
  return null;
};

export const encodeUtf8Bom = (text: string): Buffer =>
  Buffer.concat([UTF8_BOM, Buffer.from(text, "utf8")]);

export const redactHireDiagnostic = (text: string): string =>
  text
    .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, "[redacted-email]")
    .replace(/\b\d{7,}[A-Za-z]?\b/g, "[redacted-id]")
    .replace(/JSESSIONID=[^\s;]+/gi, "JSESSIONID=[redacted]")
    .replace(/password[=:]\s*\S+/gi, "password=[redacted]");

export type ExcelDiagnostic = {
  exitCode: number | null;
  stage: string;
  stderr: string;
  excelComCreated: boolean;
  workbookOpened: boolean;
  sheetFound: boolean;
  saveFailed: boolean;
};

const stageSeen = (stdout: string, stage: string): boolean => stdout.includes(`STAGE=${stage}`);

export const buildExcelDiagnostic = (
  exitCode: number | null,
  stdout: string,
  stderr: string,
): ExcelDiagnostic => {
  const edited = stageSeen(stdout, "edited");
  const saved = stageSeen(stdout, "saved");
  return {
    exitCode,
    stage: [...stdout.matchAll(/STAGE=([a-z-]+)/g)].at(-1)?.[1] ?? "unknown",
    stderr: redactHireDiagnostic(stderr)
      .replace(/<[\s\S]*soap[\s\S]*>/i, "[redacted-xml]")
      .trim(),
    excelComCreated: stageSeen(stdout, "excel-com-created"),
    workbookOpened: stageSeen(stdout, "workbook-opened"),
    sheetFound: stageSeen(stdout, "sheet-ready"),
    saveFailed: edited && !saved,
  };
};

const logExcelFailure = (diagnostic: ExcelDiagnostic): void => {
  if (process.env.NODE_ENV === "production") return;
  console.error("meta4-hire excel failed", diagnostic);
};

const editFailed = (
  message = "No se ha podido editar la copia de Hire_1_PERSONA.xls.",
): Meta4HireError => new Meta4HireError("META4_HIRE_EDIT_FAILED", message);

// Every Excel COM member access below goes through InvokeMember (pure
// IDispatch late binding) instead of dot-notation. Dot-notation lets
// PowerShell/.NET bind to a strongly-typed Primary Interop Assembly (PIA)
// registered for Excel's CLSID; on this machine a stale Office 2013 PIA
// (Microsoft.Office.Interop.Excel 15.0.0.0) is registered machine-wide in
// the GAC and shadows the installed Office 365 Excel 16.0, so casting the
// live COM object to "_Application" fails with QueryInterface
// TYPE_E_ELEMENTNOTFOUND (0x8002802B) - reproduced identically with both
// 32-bit and 64-bit powershell.exe, so it is not a bitness issue. Late
// binding via InvokeMember never performs that interface cast, so it
// sidesteps the mismatched PIA entirely without touching the GAC.
const EXCEL_SCRIPT = String.raw`
param(
  [Parameter(Mandatory = $true)][string]$WorkbookPath,
  [Parameter(Mandatory = $true)][string]$InstructionsPath
)
$ErrorActionPreference = "Stop"

function Set-ComProp($com, [string]$name, $value) {
  $com.GetType().InvokeMember($name, [System.Reflection.BindingFlags]::SetProperty, $null, $com, @($value)) | Out-Null
}
function Get-ComProp($com, [string]$name, [object[]]$comArgs = @()) {
  # -NoEnumerate: Excel collections (Workbooks, Worksheets, Rows...) implement
  # IEnumerable via COM. "return" alone lets PowerShell unroll them onto the
  # pipeline, and an empty collection (e.g. Workbooks before anything is
  # open) unrolls to nothing - the caller would see $null instead of the
  # collection object itself.
  $result = $com.GetType().InvokeMember($name, [System.Reflection.BindingFlags]::GetProperty, $null, $com, $comArgs)
  Write-Output -NoEnumerate $result
}
function Invoke-ComMethod($com, [string]$name, [object[]]$comArgs = @()) {
  # Excel exposes indexers like Worksheets.Item(name) / Rows.Item(n) as
  # parameterized properties, not plain methods - InvokeMethod alone throws
  # DISP_E_MEMBERNOTFOUND for them, so both flags are combined here.
  $flags = [System.Reflection.BindingFlags]::InvokeMethod -bor [System.Reflection.BindingFlags]::GetProperty
  $result = $com.GetType().InvokeMember($name, $flags, $null, $com, $comArgs)
  Write-Output -NoEnumerate $result
}

$excel = $null
$workbook = $null
$createdPid = $null
$created = @()
$before = @(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | ForEach-Object { $_.Id })
try {
  [Console]::Out.WriteLine("STAGE=start")
  $excel = New-Object -ComObject Excel.Application
  [Console]::Out.WriteLine("STAGE=excel-com-created")
  $deadline = (Get-Date).AddSeconds(15)
  do {
    $created = @(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | Where-Object { $before -notcontains $_.Id })
    if ($created.Count -ge 1) { break }
    Start-Sleep -Milliseconds 200
  } while ((Get-Date) -lt $deadline)
  if ($created.Count -ge 1) {
    $createdPid = $created[0].Id
    [Console]::Out.WriteLine("EXCEL_PID=$createdPid")
  }
  [Console]::Out.WriteLine("STAGE=excel-started")
  Set-ComProp $excel "Visible" $false
  Set-ComProp $excel "DisplayAlerts" $false
  Set-ComProp $excel "ScreenUpdating" $false
  Set-ComProp $excel "EnableEvents" $false
  Set-ComProp $excel "AskToUpdateLinks" $false
  try { Set-ComProp $excel "AutomationSecurity" 3 } catch {}
  try { Set-ComProp $excel "CalculateBeforeSave" $false } catch {}
  try { Set-ComProp $excel "Calculation" -4135 } catch {}
  Unblock-File -LiteralPath $WorkbookPath -ErrorAction SilentlyContinue
  $payload = [System.IO.File]::ReadAllText($InstructionsPath) | ConvertFrom-Json
  $workbooks = Get-ComProp $excel "Workbooks"
  $workbook = Invoke-ComMethod $workbooks "Open" @($WorkbookPath, 0, $false)
  [Console]::Out.WriteLine("STAGE=workbook-opened")
  $worksheets = Get-ComProp $workbook "Worksheets"
  $sheet = Invoke-ComMethod $worksheets "Item" @([string]$payload.sheetName)
  [Console]::Out.WriteLine("STAGE=sheet-ready")
  $templateRow = [int]$payload.templateRow
  foreach ($personRow in @($payload.rows)) {
    $rowNumber = [int]$personRow.row
    if ($personRow.copyFromTemplate) {
      $rows = Get-ComProp $sheet "Rows"
      $srcRow = Invoke-ComMethod $rows "Item" @($templateRow)
      $dstRow = Invoke-ComMethod $rows "Item" @($rowNumber)
      Invoke-ComMethod $srcRow "Copy" @($dstRow) | Out-Null
    }
    foreach ($cell in @($personRow.cells)) {
      $address = "{0}{1}" -f $cell.column, $rowNumber
      $range = Get-ComProp $sheet "Range" @($address)
      if ($cell.kind -eq "clear") {
        Invoke-ComMethod $range "ClearContents" @() | Out-Null
      } elseif ($cell.kind -eq "literal") {
        # Leading apostrophe: Excel keeps "0001" as text instead of the number 1.
        Set-ComProp $range "Value2" ("'" + [string]$cell.value)
      } elseif ($cell.kind -eq "number") {
        Set-ComProp $range "Value2" ([double]$cell.value)
      } else {
        Set-ComProp $range "Value2" ([string]$cell.value)
      }
    }
  }
  [Console]::Out.WriteLine("STAGE=edited")
  Invoke-ComMethod $workbook "Save" @()
  [Console]::Out.WriteLine("STAGE=saved")
  Invoke-ComMethod $workbook "Close" @($true)
  $workbook = $null
  [Console]::Out.WriteLine("STAGE=closed")
} catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  exit 1
} finally {
  if ($null -ne $workbook) {
    try { Invoke-ComMethod $workbook "Close" @($false) } catch {}
    try { [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($workbook) } catch {}
  }
  if ($null -ne $excel) {
    try { Invoke-ComMethod $excel "Quit" @() } catch {}
    try { [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel) } catch {}
  }
  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
  if ($null -ne $createdPid) {
    $proc = Get-Process -Id $createdPid -ErrorAction SilentlyContinue
    if ($null -ne $proc) {
      Stop-Process -Id $createdPid -Force -ErrorAction SilentlyContinue
    }
  }
}
`;

type CellEdit =
  | { column: string; kind: "text"; value: string }
  | { column: string; kind: "literal"; value: string }
  | { column: string; kind: "number"; value: number }
  | { column: string; kind: "clear" };

const textCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "text", value },
  );

/** Catalog IDs such as "0001" must reach the import as text, never as numbers. */
const literalCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "literal", value },
  );

/** The template stores these IDs as numbers (GG = GF+0, IU = 1). */
const NUMERIC_CATALOG_FIELDS: ReadonlySet<HireCatalogFieldId> = new Set([
  "adjustmentType",
  "variableCompensationMode",
]);

const cellsForPerson = (person: HirePerson): CellEdit[] => {
  const hireSerial = toExcelSerialDate(person.hireDate);
  return [
    ...textCells(MANUAL_COLUMNS.firstName, person.firstName),
    ...textCells(MANUAL_COLUMNS.lastName1, person.lastName1),
    ...textCells(MANUAL_COLUMNS.lastName2, person.lastName2),
    ...textCells(MANUAL_COLUMNS.documentNumber, person.documentNumber),
    ...textCells(MANUAL_COLUMNS.email, person.email),
    ...MANUAL_COLUMNS.hireDate.map(
      (column): CellEdit => ({ column, kind: "number", value: hireSerial }),
    ),
    ...HIRE_CATALOG_FIELD_IDS.flatMap((field) =>
      NUMERIC_CATALOG_FIELDS.has(field) && /^\d+$/.test(person[field])
        ? MANUAL_COLUMNS[field].map(
            (column): CellEdit => ({ column, kind: "number", value: Number(person[field]) }),
          )
        : literalCells(
            MANUAL_COLUMNS[field],
            HIRE_CATALOG_FIELDS[field].geo ? lastGeoSegment(person[field]) : person[field],
          ),
    ),
    ...HIRE_CONTRACT_FIELDS.flatMap((field) => literalCells(MANUAL_COLUMNS[field], person[field])),
  ];
};

const readWhenUnlocked = async (filePath: string): Promise<Buffer> => {
  let lastError: unknown;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      return await readFile(filePath);
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => {
        setTimeout(resolve, 200);
      });
    }
  }
  throw lastError;
};

const stripMarkOfTheWeb = async (filePath: string): Promise<void> => {
  await rm(`${filePath}:Zone.Identifier`, { force: true }).catch(() => undefined);
};

type ExcelRun =
  | { ok: true }
  | { ok: false; exitCode: number | null; stdout: string; stderr: string };

const spawnExcel = (
  powershellPath: string,
  scriptPath: string,
  workbookPath: string,
  instructionsPath: string,
): Promise<ExcelRun> =>
  new Promise((resolve) => {
    const child = spawn(
      powershellPath,
      [
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        scriptPath,
        "-WorkbookPath",
        workbookPath,
        "-InstructionsPath",
        instructionsPath,
      ],
      { windowsHide: true },
    );
    let stdout = "";
    let stderr = "";
    let excelPid: number | undefined;
    let settled = false;
    let timedOut = false;
    const finish = (result: ExcelRun) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(result);
    };
    const killExcel = () => {
      if (!excelPid) return;
      spawn("taskkill.exe", ["/PID", String(excelPid), "/F"], { windowsHide: true });
    };
    const timer = setTimeout(() => {
      timedOut = true;
      killExcel();
      child.kill();
    }, EXCEL_TIMEOUT_MS);
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
      const match = /EXCEL_PID=(\d+)/.exec(stdout);
      if (match?.[1]) excelPid = Number(match[1]);
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.on("error", (error) => {
      finish({ ok: false, exitCode: null, stdout, stderr: error.message });
    });
    child.on("close", (code) => {
      const nextStderr = timedOut ? `${stderr}\nExcel edit timed out.` : stderr;
      if (code === 0 && !timedOut) {
        finish({ ok: true });
        return;
      }
      finish({
        ok: false,
        exitCode: timedOut ? null : code,
        stdout,
        stderr: nextStderr,
      });
    });
  });

const rejectExcelRun = (run: Extract<ExcelRun, { ok: false }>): never => {
  const diagnostic = buildExcelDiagnostic(run.exitCode, run.stdout, run.stderr);
  logExcelFailure(diagnostic);
  const message =
    run.exitCode === null && /timed out/i.test(run.stderr)
      ? "Excel no terminó de editar la copia de Hire_1_PERSONA.xls."
      : "No se ha podido editar la copia de Hire_1_PERSONA.xls.";
  throw editFailed(message);
};

const runExcel = async (
  scriptPath: string,
  workbookPath: string,
  instructionsPath: string,
): Promise<void> => {
  const primary = powershellForExcel();
  const first = await spawnExcel(primary, scriptPath, workbookPath, instructionsPath);
  if (first.ok) return;
  const alternate = alternatePowershell(primary);
  if (alternate && CLASS_NOT_REGISTERED.test(first.stderr)) {
    const second = await spawnExcel(alternate, scriptPath, workbookPath, instructionsPath);
    if (second.ok) return;
    rejectExcelRun(second);
  }
  rejectExcelRun(first);
};

export const writeHireEditFiles = async (
  directory: string,
  people: readonly HirePerson[],
): Promise<{ scriptPath: string; instructionsPath: string }> => {
  const scriptPath = path.join(directory, "edit-hire.ps1");
  const instructionsPath = path.join(directory, "instructions.json");
  const instructions = {
    sheetName: HIRE_DATA_SHEET,
    templateRow: FIRST_PERSON_ROW,
    rows: people.map((person, index) => ({
      row: FIRST_PERSON_ROW + index,
      copyFromTemplate: index > 0,
      cells: cellsForPerson(person),
    })),
  };
  await writeFile(scriptPath, encodeUtf8Bom(EXCEL_SCRIPT));
  await writeFile(instructionsPath, encodeUtf8Bom(JSON.stringify(instructions)));
  return { scriptPath, instructionsPath };
};

export const assertOle2Buffer = (bytes: Buffer): void => {
  if (bytes.length < OLE_MAGIC.length || !bytes.subarray(0, OLE_MAGIC.length).equals(OLE_MAGIC)) {
    throw editFailed("El fichero Hire generado no es un XLS BIFF/OLE2 válido.");
  }
};

/**
 * Copies Hire_1_PERSONA.xls and lets Excel edit only the manual cells.
 * The original template is never opened. The returned bytes are Excel's save.
 */
export const editHireWorkbook = async (
  templatePath: string,
  people: readonly HirePerson[],
): Promise<Buffer> => {
  const directory = await mkdtemp(path.join(tmpdir(), "hire-edit-"));
  const workbookPath = path.join(directory, "Hire.xls");
  try {
    await copyFile(templatePath, workbookPath);
    await stripMarkOfTheWeb(workbookPath);
    const { scriptPath, instructionsPath } = await writeHireEditFiles(directory, people);
    await runExcel(scriptPath, workbookPath, instructionsPath);
    const bytes = await readWhenUnlocked(workbookPath);
    assertOle2Buffer(bytes);
    return bytes;
  } catch (error) {
    if (error instanceof Meta4HireError) throw error;
    logExcelFailure(
      buildExcelDiagnostic(
        null,
        "",
        error instanceof Error
          ? error.message
          : "No se ha podido preparar la copia de la plantilla.",
      ),
    );
    throw editFailed();
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
};
