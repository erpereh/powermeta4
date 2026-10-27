import { readFileSync } from "node:fs";
import { getPayrollReportRun } from "../../src/lib/peoplenet/payroll-reports";
import { snapshot } from "../../src/lib/payroll-reconciliation/snapshot";
import { reconcile } from "../../src/lib/payroll-reconciliation/engine";
import { validRunKey } from "../../src/lib/payroll-reconciliation/validation";
import { DEFAULT_PARAMETERS } from "../../src/lib/payroll-reconciliation/types";
import { execute, societyArgument } from "./common";

void execute(async () => {
  const society = societyArgument(),
    index = process.argv.indexOf("--selection");
  if (index < 0 || !process.argv[index + 1]) throw new Error("Falta selector.");
  const selection: unknown = JSON.parse(
    readFileSync(process.argv[index + 1], "utf8").replace(/^\uFEFF/, ""),
  );
  if (!selection || typeof selection !== "object" || !("currentKey" in selection))
    throw new Error("Selector inválido.");
  const current = await getPayrollReportRun(society, validRunKey(selection.currentKey));
  const previous =
    "previousKey" in selection && selection.previousKey
      ? await getPayrollReportRun(society, validRunKey(selection.previousKey))
      : null;
  if (!current) throw new Error("Ejecución inexistente.");
  const result = reconcile({
    period: current.run.accruedOn.slice(0, 7),
    current: snapshot(current, true),
    previous: previous ? snapshot(previous, true) : null,
    sources: [],
    parameters: DEFAULT_PARAMETERS,
  });
  console.log(
    JSON.stringify(
      {
        society,
        currentRows: current.rows.length,
        previousRows: previous?.rows.length ?? 0,
        engineVersion: result.engineVersion,
        controls: result.controls,
        diagnostics: result.diagnostics,
      },
      null,
      2,
    ),
  );
});
