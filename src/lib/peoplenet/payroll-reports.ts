import "server-only";

import sql from "mssql";

import { parsePayrollReportBlob } from "@/lib/payroll-reports/result-data";
import { getPeopleNetPool } from "@/lib/peoplenet/client";
import {
  assertReadOnlySql,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlValue,
} from "@/lib/portal/peoplenet/query";
import type {
  PayrollReportRun,
  PayrollReportRunDetail,
  PayrollReportRunKey,
} from "@/types/payroll-report";

/*
 * «Resultados para Informes» de PeopleNet: las ejecuciones guardadas en
 * `M4CSP_INF_RESULT` y su resultado en `M4CSP_INF_RESULT1.CSP_RESULTADO`.
 * Mismas sentencias que el Meta4Object, con la sociedad del contexto operativo
 * como parámetro. Solo SELECT.
 */

/** Lista de ejecuciones (la traza no lee el BLOB: aquí solo su tamaño, para marcar las vacías). */
const RUNS_SQL = `
SELECT B.CSP_ID_INFORME, B.CSP_DT_RUN, B.SCO_DT_ACCRUED, B.SCO_ID_PAY_FREQ, B.CSP_TIPO_PAGA,
  DATALENGTH(R.CSP_RESULTADO) AS RESULT_LENGTH
FROM M4CSP_INF_RESULT B
LEFT JOIN M4CSP_INF_RESULT1 R ON (R.CSP_DT_RUN = B.CSP_DT_RUN AND R.CSP_ID_INFORME = B.CSP_ID_INFORME
  AND R.ID_ORGANIZATION = B.ID_ORGANIZATION AND R.SCO_DT_ACCRUED = B.SCO_DT_ACCRUED
  AND R.SCO_ID_PAY_FREQ = B.SCO_ID_PAY_FREQ)
WHERE B.ID_ORGANIZATION = @organization
ORDER BY B.CSP_DT_RUN DESC, B.SCO_DT_ACCRUED DESC, B.SCO_ID_PAY_FREQ ASC, B.CSP_ID_INFORME ASC`;

/** Catálogo `M4CSP_X_INFORMES` de la sociedad. */
const REPORTS_SQL = `
SELECT CSP_ID_INFORME, CSP_N_INFORME, CSP_PLANTILLA, CSP_ID_TIPO_INF, STD_ID_LEG_ENT
FROM M4CSP_X_INFORMES
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_ID_INFORME ASC, ID_ORGANIZATION ASC, STD_ID_LEG_ENT ASC`;

/** Una ejecución con su comentario y su resultado. */
const RUN_SQL = `
SELECT BASE_0.CSP_TIPO_PAGA, BASE_0.CSP_COMENT, BASE_1.CSP_RESULTADO
FROM M4CSP_INF_RESULT BASE_0
INNER JOIN M4CSP_INF_RESULT1 BASE_1 ON (BASE_1.CSP_DT_RUN = BASE_0.CSP_DT_RUN
  AND BASE_1.CSP_ID_INFORME = BASE_0.CSP_ID_INFORME AND BASE_1.ID_ORGANIZATION = BASE_0.ID_ORGANIZATION
  AND BASE_1.SCO_DT_ACCRUED = BASE_0.SCO_DT_ACCRUED AND BASE_1.SCO_ID_PAY_FREQ = BASE_0.SCO_ID_PAY_FREQ)
WHERE BASE_0.ID_ORGANIZATION = @organization AND BASE_0.CSP_DT_RUN = @runAt
  AND BASE_0.CSP_ID_INFORME = @reportId AND BASE_0.SCO_DT_ACCRUED = @accruedOn
  AND BASE_0.SCO_ID_PAY_FREQ = @payFrequency`;

/** Pagas de la fecha de acumulación con su frecuencia y su tipo. */
const PAYS_SQL = `
SELECT BASE_0.SCO_ID_PAY_FREQ,
  ISNULL(ALIAS_2_0.SCO_NM_PAY_FREQESP, ALIAS_2_0.SCO_NM_PAY_FREQENG) AS PAY_FREQ_NAME,
  ISNULL(BASE_0.SCO_NM_PAYESP, BASE_0.SCO_NM_PAYENG) AS PAY_NAME,
  BASE_0.SCO_DT_START, BASE_0.SCO_DATE_END,
  ISNULL(ALIAS_3_0.SCO_NM_PAY_TYPEESP, ALIAS_3_0.SCO_NM_PAY_TYPEENG) AS PAY_TYPE_NAME
FROM M4SCO_HT_PAYS BASE_0
LEFT JOIN M4SCO_X_PAY_TYPE ALIAS_3_0 ON (BASE_0.SCO_ID_PAY_TYPE = ALIAS_3_0.SCO_ID_PAY_TYPE)
INNER JOIN M4SCO_PAY_FR_NUM ALIAS_1_0 ON (BASE_0.SCO_ID_PAY_FREQ = ALIAS_1_0.SCO_ID_PAY_FREQ
  AND BASE_0.SCO_NUM_PAY_MON = ALIAS_1_0.SCO_NUM_PAY_MON)
INNER JOIN M4SCO_X_PAY_FREQ ALIAS_2_0 ON (ALIAS_1_0.SCO_ID_PAY_FREQ = ALIAS_2_0.SCO_ID_PAY_FREQ)
WHERE BASE_0.ID_ORGANIZATION = @organization AND BASE_0.SCO_DT_ACCRUED = @accruedOn
ORDER BY BASE_0.SCO_DT_ACCRUED DESC, BASE_0.SCO_ID_PAY_FREQ DESC`;

/** Un BLOB de solo cabecera (`~BLOBD\0\0`) es una ejecución sin filas. */
const EMPTY_RESULT_LENGTH = 8;

const iso = (value: PortalSqlValue | undefined): string | null =>
  value instanceof Date ? value.toISOString() : null;

const isoDate = (value: PortalSqlValue | undefined): string | null =>
  value instanceof Date ? value.toISOString().slice(0, 10) : null;

const utcDate = (isoDay: string): Date => new Date(`${isoDay}T00:00:00.000Z`);

type ReportInfo = { name: string | null; template: string | null; type: string | null };

/** Primer registro de cada informe: `M4CSP_X_INFORMES` lo repite por entidad legal. */
const listReports = async (organization: PortalSqlParam): Promise<Map<string, ReportInfo>> => {
  const rows = await runPortalSelect(REPORTS_SQL, { organization });
  const reports = new Map<string, ReportInfo>();
  for (const row of rows) {
    const id = sqlText(row.CSP_ID_INFORME);
    if (!id || reports.has(id)) continue;
    reports.set(id, {
      name: sqlText(row.CSP_N_INFORME),
      template: sqlText(row.CSP_PLANTILLA),
      type: sqlText(row.CSP_ID_TIPO_INF),
    });
  }
  return reports;
};

/** Ejecuciones guardadas de la sociedad, de la más reciente a la más antigua. */
export async function listPayrollReportRuns(society: string): Promise<PayrollReportRun[]> {
  const organization = organizationParam(society);
  const [rows, reports] = await Promise.all([
    runPortalSelect(RUNS_SQL, { organization }),
    listReports(organization),
  ]);
  return rows.flatMap((row): PayrollReportRun[] => {
    const reportId = sqlText(row.CSP_ID_INFORME);
    const runAt = iso(row.CSP_DT_RUN);
    const accruedOn = isoDate(row.SCO_DT_ACCRUED);
    const payFrequency = sqlText(row.SCO_ID_PAY_FREQ);
    if (!reportId || !runAt || !accruedOn || !payFrequency) return [];
    const length = typeof row.RESULT_LENGTH === "number" ? row.RESULT_LENGTH : 0;
    return [
      {
        reportId,
        runAt,
        accruedOn,
        payFrequency,
        reportName: reports.get(reportId)?.name ?? null,
        payKind: sqlText(row.CSP_TIPO_PAGA),
        hasData: length > EMPTY_RESULT_LENGTH,
      },
    ];
  });
}

type RunRow = {
  CSP_TIPO_PAGA: string | null;
  CSP_COMENT: string | null;
  CSP_RESULTADO: Buffer | null;
};

/** Una ejecución con los datos de su paga y su hoja «Datos»; `null` si no existe. */
export async function getPayrollReportRun(
  society: string,
  key: PayrollReportRunKey,
): Promise<PayrollReportRunDetail | null> {
  const organization = organizationParam(society);
  const accruedOn: PortalSqlParam = { type: "date", value: utcDate(key.accruedOn) };

  // El BLOB no es un valor de `runPortalSelect`: misma guarda, lectura directa.
  assertReadOnlySql(RUN_SQL);
  const pool = await getPeopleNetPool();
  const runQuery = pool
    .request()
    .input("organization", sql.VarChar(4), society)
    .input("runAt", sql.DateTime, new Date(key.runAt))
    .input("reportId", sql.VarChar(4), key.reportId)
    .input("accruedOn", sql.DateTime, utcDate(key.accruedOn))
    .input("payFrequency", sql.VarChar(3), key.payFrequency)
    .query<RunRow>(RUN_SQL);

  const [runResult, reports, pays] = await Promise.all([
    runQuery,
    listReports(organization),
    runPortalSelect(PAYS_SQL, { organization, accruedOn }),
  ]);
  const run = runResult.recordset[0];
  if (!run) return null;

  const table = parsePayrollReportBlob(run.CSP_RESULTADO);
  const report = reports.get(key.reportId);
  const pay = pays.find((row) => sqlText(row.SCO_ID_PAY_FREQ) === key.payFrequency) ?? pays[0];
  return {
    run: {
      ...key,
      reportName: report?.name ?? null,
      payKind: sqlText(run.CSP_TIPO_PAGA),
      hasData: table.rawRows.length > 0,
    },
    comment: sqlText(run.CSP_COMENT),
    template: report?.template ?? null,
    reportType: report?.type ?? null,
    payName: sqlText(pay?.PAY_NAME),
    payTypeName: sqlText(pay?.PAY_TYPE_NAME),
    payFrequencyName: sqlText(pay?.PAY_FREQ_NAME),
    payStart: isoDate(pay?.SCO_DT_START),
    payEnd: isoDate(pay?.SCO_DATE_END),
    headers: table.headers,
    rows: table.rawRows,
  };
}
