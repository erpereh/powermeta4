import { spawn } from "node:child_process";

export type OwnedExcel = { pid: number; ticks: string };
export type ExcelRunOptions = {
  deadline?: number;
  signal?: AbortSignal;
  onOwner?: (owner: OwnedExcel) => void;
};
export type ExcelRun =
  | { ok: true; owner?: OwnedExcel }
  | { ok: false; exitCode: number | null; stdout: string; stderr: string; owner?: OwnedExcel };

/** Hwnd identifica la instancia exacta; la lista previa solo impide adoptar una ajena. */
export const EXCEL_LIFECYCLE = String.raw`
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public static class PowerMetaExcelWindow {
  [DllImport("user32.dll")]
  public static extern uint GetWindowThreadProcessId(IntPtr window, out uint process);
}
"@
$excelOwnerId = $null
$excelOwnerTicks = $null
$existingExcel = @(Get-Process -Name EXCEL -ErrorAction SilentlyContinue | ForEach-Object { $_.Id })
function Register-OwnedExcel($application) {
  $window = $application.GetType().InvokeMember("Hwnd", [System.Reflection.BindingFlags]::GetProperty, $null, $application, $null)
  [uint32]$owner = 0
  [void][PowerMetaExcelWindow]::GetWindowThreadProcessId([IntPtr]([long]$window), [ref]$owner)
  if ($owner -eq 0 -or $existingExcel -contains $owner) { throw "EXCEL_OWNERSHIP_UNVERIFIED" }
  $owned = Get-Process -Id $owner -ErrorAction Stop
  if ($owned.ProcessName -ne "EXCEL") { throw "EXCEL_OWNERSHIP_UNVERIFIED" }
  $script:excelOwnerId = $owner
  $script:excelOwnerTicks = $owned.StartTime.ToUniversalTime().Ticks.ToString()
  [Console]::Out.WriteLine("EXCEL_OWNER=" + $owner + ":" + $script:excelOwnerTicks)
}
function Close-OwnedExcel {
  if ($null -eq $script:excelOwnerId) { return }
  $owned = Get-Process -Id $script:excelOwnerId -ErrorAction SilentlyContinue
  if ($null -ne $owned -and $owned.StartTime.ToUniversalTime().Ticks.ToString() -eq $script:excelOwnerTicks -and $owned.ProcessName -eq "EXCEL") {
    if (-not $owned.WaitForExit(1500)) {
      Stop-Process -Id $script:excelOwnerId -Force -ErrorAction SilentlyContinue
      if (-not $owned.WaitForExit(1500)) {
        # Node confirms closure independently after this host has exited.
        [Console]::Out.WriteLine("EXCEL_CLOSE_PENDING=" + $script:excelOwnerId)
        return
      }
    }
  }
  [Console]::Out.WriteLine("EXCEL_EXITED=" + $script:excelOwnerId)
}
`;

const CLOSE_OWNER = String.raw`
param([uint32]$OwnerId, [string]$OwnerTicks)
$ErrorActionPreference = "Stop"
$owned = Get-Process -Id $OwnerId -ErrorAction SilentlyContinue
if ($null -ne $owned -and $owned.ProcessName -eq "EXCEL" -and $owned.StartTime.ToUniversalTime().Ticks.ToString() -eq $OwnerTicks) {
  try { Stop-Process -Id $OwnerId -Force -ErrorAction Stop }
  catch {
    $remaining = Get-Process -Id $OwnerId -ErrorAction SilentlyContinue
    if ($null -ne $remaining -and $remaining.ProcessName -eq "EXCEL" -and $remaining.StartTime.ToUniversalTime().Ticks.ToString() -eq $OwnerTicks) { exit 2 }
  }
  if (-not $owned.WaitForExit(3000)) {
    $remaining = Get-Process -Id $OwnerId -ErrorAction SilentlyContinue
    if ($null -ne $remaining -and $remaining.ProcessName -eq "EXCEL" -and $remaining.StartTime.ToUniversalTime().Ticks.ToString() -eq $OwnerTicks) { exit 2 }
  }
}
exit 0
`;

/** Solo termina el PID cuya identidad fue entregada por nuestra instancia COM. */
async function closeOwner(powershell: string, owner: OwnedExcel): Promise<boolean> {
  return new Promise((resolve) => {
    const command = `& { ${CLOSE_OWNER} } -OwnerId ${owner.pid} -OwnerTicks '${owner.ticks}'`;
    const process = spawn(powershell, ["-NoProfile", "-NonInteractive", "-Command", command], {
      windowsHide: true,
      stdio: "ignore",
    });
    const timer = setTimeout(() => {
      process.kill();
      resolve(false);
    }, 5000);
    process.once("error", () => {
      clearTimeout(timer);
      resolve(false);
    });
    process.once("close", (code) => {
      clearTimeout(timer);
      resolve(code === 0);
    });
  });
}

export function runOwnedExcel(
  powershell: string,
  script: string,
  parameters: Readonly<Record<string, string>>,
  options: ExcelRunOptions = {},
): Promise<ExcelRun> {
  return new Promise((resolve) => {
    const deadline = options.deadline ?? Date.now() + 180_000;
    if (options.signal?.aborted || deadline - Date.now() <= 5000) {
      resolve({ ok: false, exitCode: null, stdout: "", stderr: "EXCEL_BUDGET_EXHAUSTED" });
      return;
    }
    const child = spawn(
      powershell,
      [
        "-NoProfile",
        "-NonInteractive",
        "-ExecutionPolicy",
        "Bypass",
        "-File",
        script,
        ...Object.entries(parameters).flatMap(([name, value]) => [`-${name}`, value]),
      ],
      { windowsHide: true },
    );
    let stdout = "",
      stderr = "";
    let owner: OwnedExcel | undefined;
    let settled = false;
    let timedOut = false;
    let cleanup: Promise<boolean> | undefined;
    let forced: ReturnType<typeof setTimeout> | undefined;
    const finish = async (code: number | null) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (forced) clearTimeout(forced);
      options.signal?.removeEventListener("abort", cancel);
      const closed =
        owner && !stdout.includes(`EXCEL_EXITED=${owner.pid}`)
          ? await (cleanup ?? closeOwner(powershell, owner))
          : true;
      if (!closed) stderr += "\nEXCEL_CLOSE_TIMEOUT";
      if (!owner) stderr += "\nEXCEL_OWNERSHIP_UNVERIFIED";
      if (timedOut) stderr += "\nExcel edit timed out.";
      resolve(
        code === 0 && !timedOut && closed && owner
          ? { ok: true, owner }
          : { ok: false, exitCode: timedOut ? null : code, stdout, stderr, owner },
      );
    };
    const cancel = () => {
      if (timedOut || settled) return;
      timedOut = true;
      if (owner) cleanup = closeOwner(powershell, owner);
      child.kill();
      forced = setTimeout(
        () => {
          stderr += "\nEXCEL_HOST_CLOSE_UNCONFIRMED";
          void finish(null);
        },
        Math.max(1, Math.min(5000, deadline - Date.now())),
      );
    };
    const timer = setTimeout(cancel, Math.max(1, deadline - Date.now() - 5000));
    options.signal?.addEventListener("abort", cancel, { once: true });
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
      if (!owner) {
        const match = /(?:^|\n)EXCEL_OWNER=(\d+):(\d+)\r?\n/.exec(stdout);
        if (match && Number.isSafeInteger(Number(match[1])) && Number(match[1]) > 0) {
          owner = { pid: Number(match[1]), ticks: match[2] };
          options.onOwner?.(owner);
        }
      }
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.once("error", () => {
      stderr += "EXCEL_HOST_FAILED";
      void finish(null);
    });
    child.once("close", (code) => {
      void finish(code);
    });
  });
}
