import "server-only";

import { spawn } from "node:child_process";

export type DpapiOperation = "protect" | "unprotect";
export type DpapiRunner = (operation: DpapiOperation, value: string) => Promise<string>;

export type DpapiAdapter = {
  protectSecret: (value: string) => Promise<string>;
  unprotectSecret: (value: string) => Promise<string>;
};

const POWERSHELL_TIMEOUT_MS = 10_000;
const powershellScript = (operation: DpapiOperation) => {
  const operationExpression =
    operation === "protect"
      ? "[System.Security.Cryptography.ProtectedData]::Protect($bytes, $null, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)"
      : "[System.Security.Cryptography.ProtectedData]::Unprotect($bytes, $null, [System.Security.Cryptography.DataProtectionScope]::CurrentUser)";
  const outputExpression =
    operation === "protect"
      ? "[Console]::Write([Convert]::ToBase64String($result))"
      : "[Console]::Write([Text.Encoding]::UTF8.GetString($result))";

  return [
    "Add-Type -AssemblyName System.Security",
    "$inputText = [Console]::In.ReadToEnd()",
    operation === "protect"
      ? "$bytes = [Text.Encoding]::UTF8.GetBytes($inputText)"
      : "$bytes = [Convert]::FromBase64String($inputText)",
    `$result = ${operationExpression}`,
    outputExpression,
  ].join("; ");
};

const runPowerShellDpapi: DpapiRunner = (operation, value) =>
  new Promise((resolve, reject) => {
    const child = spawn(
      "powershell.exe",
      ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", powershellScript(operation)],
      { windowsHide: true, stdio: ["pipe", "pipe", "pipe"] },
    );
    let stdout = "";
    let stderr = "";
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      child.kill();
      reject(new Error("La operación DPAPI excedió el tiempo de espera."));
    }, POWERSHELL_TIMEOUT_MS);

    child.stdout.on("data", (chunk: Buffer) => {
      stdout += chunk.toString("utf8");
    });
    child.stderr.on("data", (chunk: Buffer) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(new Error(`No se pudo iniciar DPAPI: ${error.message.slice(0, 160)}`));
    });
    child.on("close", (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (code !== 0) {
        reject(new Error(`DPAPI rechazó la operación (${code ?? "sin código"}).`));
        return;
      }
      const result = stdout.trimEnd();
      if (!result) {
        reject(new Error(`DPAPI no devolvió un resultado (${stderr.trim().slice(0, 120)}).`));
        return;
      }
      resolve(result);
    });

    child.stdin.end(operation === "protect" ? value : value, "utf8");
  });

export const createDpapiAdapter = (
  options: {
    platform?: NodeJS.Platform;
    runner?: DpapiRunner;
  } = {},
): DpapiAdapter => {
  const platform = options.platform ?? process.platform;
  const runner = options.runner ?? runPowerShellDpapi;

  const run = (operation: DpapiOperation, value: string) => {
    if (platform !== "win32") {
      return Promise.reject(
        new Error("Windows DPAPI CurrentUser solo está disponible en Windows."),
      );
    }
    if (!value) return Promise.reject(new Error("DPAPI no acepta un secreto vacío."));
    return runner(operation, value);
  };

  return {
    protectSecret: (value) => run("protect", value),
    unprotectSecret: (value) => run("unprotect", value),
  };
};
