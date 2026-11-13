import { readFileSync } from "node:fs";
import { getPayrollReportRun } from "../../src/lib/peoplenet/payroll-reports";
import { snapshot } from "../../src/lib/payroll-reconciliation/snapshot";
import { reconcile } from "../../src/lib/payroll-reconciliation/engine";
import { validRunKey } from "../../src/lib/payroll-reconciliation/validation";
import { DEFAULT_PARAMETERS } from "../../src/lib/payroll-reconciliation/types";
import { monthlySnapshotIssue } from "../../src/lib/payroll-reconciliation/comparison";
import { captureAutomaticExtras } from "../../src/lib/payroll-reconciliation/extra-pay-reader";
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
  const input = {
    period: current.run.accruedOn.slice(0, 7),
    current: await captureAutomaticExtras(snapshot(current, true, society)),
    previous: previous ? snapshot(previous, true, society) : null,
    sources: [],
    parameters: DEFAULT_PARAMETERS,
  };
  const result = reconcile(input);
  const comparisonIssue = monthlySnapshotIssue(input.period, input.current, input.previous);
  console.log(
    JSON.stringify(
      {
        society,
        currentRows: current.rows.length,
        previousRows: previous?.rows.length ?? 0,
        engineVersion: result.engineVersion,
        controls: result.controls,
        diagnostics: result.diagnostics,
        monthlyComparison: { comparable: comparisonIssue === null, reason: comparisonIssue },
        extraPayModality: {
          issue: input.current.extraPayAutomatic?.issue ?? null,
          people: input.current.extraPayAutomatic?.people.length ?? 0,
          accredited:
            input.current.extraPayAutomatic?.people.filter((person) => !person.issue).length ?? 0,
          pending:
            input.current.extraPayAutomatic?.people.filter((person) => person.issue).length ?? 0,
        },
      },
      null,
      2,
    ),
  );
});
