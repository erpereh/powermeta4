import { readFileSync } from "node:fs";
import { getPayrollReportRun } from "../../src/lib/peoplenet/payroll-reports";
import { snapshot } from "../../src/lib/payroll-reconciliation/snapshot";
import { reconcile } from "../../src/lib/payroll-reconciliation/engine";
import { validRunKey } from "../../src/lib/payroll-reconciliation/validation";
import { DEFAULT_PARAMETERS } from "../../src/lib/payroll-reconciliation/types";
import { monthlySnapshotIssue } from "../../src/lib/payroll-reconciliation/comparison";
import { captureAutomaticExtras } from "../../src/lib/payroll-reconciliation/extra-pay-reader";
import {
  captureAutomaticExcess,
  captureAutomaticTelework,
} from "../../src/lib/payroll-reconciliation/automatic-reader";
import { getPeopleNetTarget } from "../../src/lib/peoplenet/client";
import type { Finding } from "../../src/lib/payroll-reconciliation/types";
import { execute, societyArgument } from "./common";

/** Status/reason counts per control and metric; no IDs, names or amounts. */
function reasonSummary(findings: Finding[]) {
  const summary: Record<string, Record<string, number>> = {};
  for (const finding of findings) {
    const key = `${finding.control}/${finding.metric}`;
    const reason = finding.reason
      .replace(/\d+(?:[.,]\d+)?/g, "#")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);
    const bucket = (summary[key] ??= {});
    const label = `${finding.status}${reason ? ` · ${reason}` : ""}`;
    bucket[label] = (bucket[label] ?? 0) + 1;
  }
  return summary;
}

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
    current: await captureAutomaticExcess(
      await captureAutomaticTelework(
        await captureAutomaticExtras(snapshot(current, true, society)),
      ),
    ),
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
        period: input.period,
        target: getPeopleNetTarget(),
        currentRows: current.rows.length,
        previousRows: previous?.rows.length ?? 0,
        engineVersion: result.engineVersion,
        controls: result.controls,
        reasons: reasonSummary(result.findings),
        diagnostics: result.diagnostics,
        monthlyComparison: { comparable: comparisonIssue === null, reason: comparisonIssue },
        automatic: Object.fromEntries(
          (["teleworkAutomatic", "excessAutomatic"] as const).map((key) => [
            key,
            {
              issue: input.current[key]?.issue ?? null,
              people: input.current[key]?.people.length ?? 0,
              pending:
                input.current[key]?.people.filter((person) => person.due === null).length ?? 0,
            },
          ]),
        ),
        extraPayModality: {
          issue: input.current.extraPayAutomatic?.issue ?? null,
          rule: input.current.extraPayAutomatic?.rule ?? null,
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
