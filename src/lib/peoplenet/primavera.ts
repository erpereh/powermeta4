import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";
import {
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlValue,
} from "@/lib/portal/peoplenet/query";
import {
  buildPrimaveraMonths,
  PRIMAVERA_LEGAL_ENTITIES,
  primaveraColumns,
  primaveraSumExpression,
  type PrimaveraCodeRow,
  type PrimaveraMonthRow,
  type PrimaveraPeriod,
} from "@/lib/primavera/cuadre";
import type { PrimaveraReport } from "@/types/primavera";

/*
 * Cuadre Primavera (Portugal): las mismas SELECT que
 * `Desktop/Primavera/herramienta/cuadres-portugal.mjs`, solo para la sociedad
 * del contexto operativo y su entidad legal portuguesa. Solo lectura.
 */

/** Base leída, para distinguir prenómina de producción en la pantalla y en el Excel. */
const DATABASE_SQL = "SELECT DB_NAME() AS DATABASE_NAME";

const ACCRUAL_COLUMNS_SQL = `
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'M4CSP_AC_HR_PERIOD'`;

const CODES_SQL = `
SELECT DISTINCT LEFT(CSP_CODIGO, 1) AS CODE_TYPE, CSP_COLUMNA
FROM M4CSP_CODIGOS_PRIMAVERA
WHERE ID_ORGANIZATION = @organization AND LEFT(CSP_CODIGO, 1) IN ('R', 'D')
  AND CSP_COLUMNA IS NOT NULL`;

/** Totales y suma de conceptos por empleado y mes de pago (todos los allocs y pagos del mes). */
const cuadreSql = (earningsSum: string, deductionsSum: string): string => `
SELECT x.H AS EMPLOYEE_ID, MONTH(x.P) AS PAY_MONTH, SUM(x.DEV) AS DEV, SUM(x.SR) AS SR,
  SUM(x.RET) AS RET, SUM(x.SD) AS SD, SUM(x.LIQ) AS LIQ
FROM (
  SELECT s.SCO_ID_HR AS H, s.SCO_DT_PAYMENT AS P,
    ISNULL(s.SSP_TOTAL_DEVENGOS, 0) AS DEV, ${earningsSum} AS SR,
    ISNULL(s.SSP_TOTAL_RETENIDO, 0) AS RET, ${deductionsSum} AS SD,
    ISNULL(s.SSP_LIQUIDO, 0) AS LIQ
  FROM M4SCO_AC_HR_PERIOD s
  JOIN M4CSP_AC_HR_PERIOD a ON a.ID_ORGANIZATION = s.ID_ORGANIZATION AND a.SCO_ID_HR = s.SCO_ID_HR
    AND a.SCO_DT_ALLOC = s.SCO_DT_ALLOC AND a.SCO_DT_PAYMENT = s.SCO_DT_PAYMENT
  WHERE s.ID_ORGANIZATION = @organization AND s.SCO_DT_PAYMENT >= @from AND s.SCO_DT_PAYMENT < @to
    AND EXISTS (SELECT 1 FROM M4SCO_H_HR_LEGENT l
      WHERE l.ID_ORGANIZATION = s.ID_ORGANIZATION AND l.STD_ID_HR = s.SCO_ID_HR
        AND l.STD_ID_LEG_ENT = @legalEntity
        AND l.DT_START <= EOMONTH(s.SCO_DT_PAYMENT)
        AND ISNULL(l.DT_END, '40000101') >= DATEFROMPARTS(YEAR(s.SCO_DT_PAYMENT), MONTH(s.SCO_DT_PAYMENT), 1))
) x
GROUP BY x.H, MONTH(x.P)
ORDER BY MONTH(x.P), x.H`;

const amount = (value: PortalSqlValue | undefined): number =>
  typeof value === "number" && Number.isFinite(value) ? value : 0;

const utcDate = (isoDay: string): Date => new Date(`${isoDay}T00:00:00.000Z`);

export async function getPrimaveraReport(
  society: Meta4Society,
  period: PrimaveraPeriod,
): Promise<PrimaveraReport> {
  const organization = organizationParam(society);
  const legalEntity = PRIMAVERA_LEGAL_ENTITIES[society];

  const [databaseRows, columnRows, codeRows] = await Promise.all([
    runPortalSelect(DATABASE_SQL),
    runPortalSelect(ACCRUAL_COLUMNS_SQL),
    runPortalSelect(CODES_SQL, { organization }),
  ]);
  const accrualColumns = new Set(
    columnRows.flatMap((row) => {
      const name = sqlText(row.COLUMN_NAME);
      return name ? [name] : [];
    }),
  );
  const codes = codeRows.flatMap((row): PrimaveraCodeRow[] => {
    const type = sqlText(row.CODE_TYPE);
    const column = sqlText(row.CSP_COLUMNA);
    return type && column ? [{ type, column }] : [];
  });

  const rows = await runPortalSelect(
    cuadreSql(
      primaveraSumExpression(primaveraColumns(codes, accrualColumns, "R")),
      primaveraSumExpression(primaveraColumns(codes, accrualColumns, "D")),
    ),
    {
      organization,
      legalEntity: { type: "varchar", length: 20, value: legalEntity },
      from: { type: "date", value: utcDate(period.from) },
      to: { type: "date", value: utcDate(period.to) },
    },
  );

  const monthRows = rows.flatMap((row): PrimaveraMonthRow[] => {
    const employeeId = sqlText(row.EMPLOYEE_ID);
    const month = amount(row.PAY_MONTH);
    if (!employeeId || month < 1 || month > 12) return [];
    return [
      {
        employeeId,
        month,
        earnings: amount(row.DEV),
        earningsConcepts: amount(row.SR),
        deductions: amount(row.RET),
        deductionsConcepts: amount(row.SD),
        net: amount(row.LIQ),
      },
    ];
  });

  return {
    society,
    legalEntity,
    database: sqlText(databaseRows[0]?.DATABASE_NAME),
    year: period.year,
    fromMonth: period.fromMonth,
    toMonth: period.toMonth,
    wholeYear: period.wholeYear,
    months: buildPrimaveraMonths(period, monthRows),
  };
}
