import "server-only";

import { spawn } from "node:child_process";
import { copyFile, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { Meta4HireError } from "./errors";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  MANUAL_COLUMNS,
  toExcelSerialDate,
} from "./mapping";
import type { HirePerson } from "./types";

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
const UTF8_BOM = Buffer.from([0xef, 0xbb, 0xbf]);
const EXCEL_TIMEOUT_MS = 180_000;

export const encodeUtf8Bom = (text: string): Buffer =>
  Buffer.concat([UTF8_BOM, Buffer.from(text, "utf8")]);

export const redactHireDiagnostic = (text: string): string =>
  text
    .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, "[redacted-email]")
    .replace(/\b\d{7,}[A-Za-z]?\b/g, "[redacted-id]");

const lastStage = (stdout: string): string => {
  const matches = [...stdout.matchAll(/STAGE=([a-z-]+)/g)];
  return matches.at(-1)?.[1] ?? "unknown";
};

const logExcelFailure = (exitCode: number | null, stdout: string, stderr: string): void => {
  console.error("meta4-hire excel failed", {
    exitCode,
    stage: lastStage(stdout),
    stderr: redactHireDiagnostic(stderr).trim(),
  });
};

const EXCEL_SCRIPT = String.raw`
param(
  [Parameter(Mandatory = $true)][string]$WorkbookPath,
  [Parameter(Mandatory = $true)][string]$InstructionsPath
)
$ErrorActionPreference = "Stop"
$excel = $null
$workbook = $null
$createdPid = $null
$before = @(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | ForEach-Object { $_.Id })
try {
  $excel = New-Object -ComObject Excel.Application
  $deadline = (Get-Date).AddSeconds(8)
  do {
    Start-Sleep -Milliseconds 200
    $created = @(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | Where-Object { $before -notcontains $_.Id })
  } while ($created.Count -lt 1 -and (Get-Date) -lt $deadline)
  if ($created.Count -lt 1) {
    $excel = $null
    throw "Excel COM did not start a new process."
  }
  $createdPid = $created[0].Id
  [Console]::Out.WriteLine("STAGE=excel-started")
  [Console]::Out.WriteLine("EXCEL_PID=$createdPid")
  $excel.Visible = $false
  $excel.DisplayAlerts = $false
  $excel.ScreenUpdating = $false
  $excel.EnableEvents = $false
  $excel.AskToUpdateLinks = $false
  try { $excel.CalculateBeforeSave = $false } catch {}
  try { $excel.Calculation = -4135 } catch {}
  $payload = Get-Content -LiteralPath $InstructionsPath -Raw -Encoding UTF8 | ConvertFrom-Json
  $workbook = $excel.Workbooks.Open($WorkbookPath, 0, $false)
  [Console]::Out.WriteLine("STAGE=workbook-opened")
  $sheet = $workbook.Worksheets.Item([string]$payload.sheetName)
  [Console]::Out.WriteLine("STAGE=sheet-ready")
  $templateRow = [int]$payload.templateRow
  foreach ($personRow in @($payload.rows)) {
    $rowNumber = [int]$personRow.row
    if ($personRow.copyFromTemplate) {
      $sheet.Rows.Item($templateRow).Copy($sheet.Rows.Item($rowNumber)) | Out-Null
    }
    foreach ($cell in @($personRow.cells)) {
      $address = "{0}{1}" -f $cell.column, $rowNumber
      $range = $sheet.Range($address)
      if ($cell.kind -eq "clear") {
        $range.ClearContents() | Out-Null
      } elseif ($cell.kind -eq "number") {
        $range.Value2 = [double]$cell.value
      } else {
        $range.Value2 = [string]$cell.value
      }
    }
  }
  [Console]::Out.WriteLine("STAGE=edited")
  $workbook.Save()
  [Console]::Out.WriteLine("STAGE=saved")
  $workbook.Close($true)
  $workbook = $null
  [Console]::Out.WriteLine("STAGE=closed")
} catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  exit 1
} finally {
  if ($null -ne $workbook) {
    try { $workbook.Close($false) } catch {}
    try { [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($workbook) } catch {}
  }
  if ($null -ne $excel -and $null -ne $createdPid) {
    try { $excel.Quit() } catch {}
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
  | { column: string; kind: "number"; value: number }
  | { column: string; kind: "clear" };

const textCells = (columns: readonly string[], value: string): CellEdit[] =>
  columns.map((column) =>
    value === "" ? { column, kind: "clear" } : { column, kind: "text", value },
  );

const cellsForPerson = (person: HirePerson): CellEdit[] => {
  const hireSerial = toExcelSerialDate(person.hireDate);
  return [
    ...textCells(MANUAL_COLUMNS.firstName, person.firstName),
    ...textCells(MANUAL_COLUMNS.lastName1, person.lastName1),
    ...textCells(MANUAL_COLUMNS.lastName2, person.lastName2),
    ...textCells(MANUAL_COLUMNS.documentType, person.documentType),
    ...textCells(MANUAL_COLUMNS.documentNumber, person.documentNumber),
    ...textCells(MANUAL_COLUMNS.email, person.email),
    ...MANUAL_COLUMNS.hireDate.map(
      (column): CellEdit => ({ column, kind: "number", value: hireSerial }),
    ),
  ];
};

const readWhenUnlocked = async (filePath: string): Promise<Buffer> => {
  let lastError: unknown;
  for (let attempt = 0; attempt < 10; attempt += 1) {
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

const runExcel = (
  scriptPath: string,
  workbookPath: string,
  instructionsPath: string,
): Promise<void> =>
  new Promise((resolve, reject) => {
    const child = spawn(
      "powershell.exe",
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
    const killExcel = () => {
      if (!excelPid) return;
      spawn("taskkill.exe", ["/PID", String(excelPid), "/F"], { windowsHide: true });
    };
    const timer = setTimeout(() => {
      logExcelFailure(null, stdout, `${stderr}\nExcel edit timed out.`);
      killExcel();
      child.kill();
      reject(
        new Meta4HireError(
          "META4_HIRE_FILE_FAILED",
          "Excel no terminó de editar la copia de Hire_1_PERSONA.xls.",
        ),
      );
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
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve();
        return;
      }
      logExcelFailure(code, stdout, stderr);
      reject(
        new Meta4HireError(
          "META4_HIRE_FILE_FAILED",
          "No se ha podido editar la copia de Hire_1_PERSONA.xls.",
        ),
      );
    });
  });

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
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "El fichero Hire generado no es un XLS BIFF/OLE2 válido.",
    );
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
    const { scriptPath, instructionsPath } = await writeHireEditFiles(directory, people);
    await runExcel(scriptPath, workbookPath, instructionsPath);
    const bytes = await readWhenUnlocked(workbookPath);
    assertOle2Buffer(bytes);
    return bytes;
  } catch (error) {
    if (error instanceof Meta4HireError) throw error;
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "No se ha podido editar la copia de Hire_1_PERSONA.xls.",
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
};
