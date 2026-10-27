import {
  getPayrollReportRun,
  listPayrollReportRuns,
} from "../../src/lib/peoplenet/payroll-reports";
import { columnIndex, METRICS } from "../../src/lib/payroll-reconciliation/catalogue";
import { execute, societyArgument } from "./common";

void execute(async () => {
  const society = societyArgument();
  const index = process.argv.indexOf("--period"),
    period = process.argv[index + 1];
  if (index < 0 || !/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) throw new Error("Periodo inválido.");
  const runs = (await listPayrollReportRuns(society)).filter((run) =>
    run.accruedOn.startsWith(period),
  );
  const output = [];
  for (const run of runs) {
    const detail = run.hasData ? await getPayrollReportRun(society, run) : null;
    const key = {
      reportId: run.reportId,
      runAt: run.runAt,
      accruedOn: run.accruedOn,
      payFrequency: run.payFrequency,
    };
    const idIndex = detail ? columnIndex(detail.headers, "Id Empleado") : -1;
    const occurrences = new Map<string, number>();
    output.push({
      key,
      hasData: run.hasData,
      rows: detail?.rows.length ?? 0,
      people: detail && idIndex >= 0 ? new Set(detail.rows.map((row) => row[idIndex])).size : 0,
      headers:
        detail?.headers.map((header, index) => {
          const occurrence = (occurrences.get(header) ?? 0) + 1;
          occurrences.set(header, occurrence);
          return { header, index, occurrence };
        }) ?? [],
      metricsAvailable: detail
        ? METRICS.filter(
            (metric) => columnIndex(detail.headers, metric.header, metric.occurrence) >= 0,
          ).map((metric) => metric.id)
        : [],
    });
  }
  console.log(
    JSON.stringify(
      {
        society,
        period,
        runs: output,
        selectionFormat: { currentKey: output[0]?.key ?? null, previousKey: null },
      },
      null,
      2,
    ),
  );
});
