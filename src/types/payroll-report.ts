/** Identifica una ejecución de `M4CSP_INF_RESULT` (clave primaria sin la sociedad). */
export type PayrollReportRunKey = {
  reportId: string;
  /** `CSP_DT_RUN` en ISO con milisegundos. */
  runAt: string;
  /** `SCO_DT_ACCRUED` como `YYYY-MM-DD`. */
  accruedOn: string;
  payFrequency: string;
};

/** Una fila de «Lista de Lista: Resultados para Informes». */
export type PayrollReportRun = PayrollReportRunKey & {
  reportName: string | null;
  /** `CSP_TIPO_PAGA`: Normal, Retroactivas, Paga Regular… */
  payKind: string | null;
  /** `false` cuando la ejecución no generó filas (BLOB vacío). */
  hasData: boolean;
};

export type PayrollReportRunDetail = {
  run: PayrollReportRun;
  comment: string | null;
  template: string | null;
  reportType: string | null;
  /** Datos de la paga en `M4SCO_HT_PAYS`. */
  payName: string | null;
  payTypeName: string | null;
  payFrequencyName: string | null;
  payStart: string | null;
  payEnd: string | null;
  /** Hoja «Datos»: cabeceras y texto original de cada celda. */
  headers: string[];
  rows: string[][];
};

export type PayrollReportRunsResult =
  | { ok: true; runs: PayrollReportRun[] }
  | { ok: false; message: string };

export type PayrollReportRunResult =
  | { ok: true; detail: PayrollReportRunDetail }
  | { ok: false; message: string };
