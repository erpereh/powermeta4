import "server-only";

import {
  buildQuinquenalYears,
  organizationLevel,
  ORGANIZATION_NAME_LENGTH,
  QUINQUENAL_YEARS,
  splitJobCategory,
  type QuinquenalFigures,
} from "@/lib/quinquenal/calc";
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlRow,
  type PortalSqlValue,
} from "@/lib/portal/peoplenet/query";
import type { QuinquenalReport, QuinquenalRow } from "@/types/quinquenal";

/*
 * Reproduce el Meta4Object `CYC_CONSULTA_QUINQUENAL` con las sentencias que
 * PeopleNet lanza (traza LDB en `quinquenal/`). Meta4 repite las lecturas
 * económicas por empleado; aquí se agrupan por `SCO_ID_HR` en una sola
 * consulta por nodo, con los mismos filtros, uniones y agregados. Solo SELECT.
 */

/** Nodo `CYC_CONSULTA_QUINQUENAL`: empleados computables y su puesto a hoy. */
const EMPLOYEES_SQL = `
SELECT BASE_0.ID_EMPLEADO, BASE_0.STD_ID_LEG_ENT, ALIAS_C_0.STD_OR_HR_PERIOD,
  BASE_0.ID_AREA, BASE_0.N_AREA, BASE_0.ID_ALT, BASE_0.N_ALT, BASE_0.ID_MB, BASE_0.N_MB,
  BASE_0.ID_CEO, BASE_0.N_CEO, BASE_0.ID_UNIDAD, BASE_0.N_UNIDAD, BASE_0.ID_SERVICIO,
  BASE_0.N_SERVICIO, BASE_0.ID_PUESTO, BASE_0.APELLIDO_1, BASE_0.APELLIDO_2,
  BASE_0.FEC_ANTIGUEDAD, BASE_0.NOMBRE, BASE_0.ID_DIRECCION, BASE_0.FEC_NACIMIENTO,
  BASE_0.CSP_ID_FUSION, ALIAS_5_0.ID_ESTRUCTURA, ALIAS_6_0.N_ESTRUCTURA,
  ALIAS_4_0.SSP_ID_CATEGORIA, ALIAS_7_0.SSP_NM_CATEGORESP, BASE_0.N_DIRECCION, BASE_0.N_PUESTO,
  ALIAS_A_0.STD_ID_JOB_CATEGOR, ALIAS_B_0.CSP_ID_KPI, ALIAS_D_0.CSP_NM_MOD_VAR,
  BASE_0.ID_TIPO_PUESTO, BASE_0.N_TIPO_PUESTO
FROM M4ORO_EMPLEADOS BASE_0
LEFT JOIN M4RCH_ORGANIZATION ALIAS_1_0 ON (BASE_0.ID_ORGANIZATION = ALIAS_1_0.ID_ORGANIZATION)
LEFT JOIN STD_HR_PERIOD ALIAS_2_0 ON ((ALIAS_2_0.ID_ORGANIZATION = @organization)
  AND ALIAS_1_0.ID_ORGANIZATION = ALIAS_2_0.ID_ORGANIZATION)
LEFT JOIN M4SCO_HR_ROLE ALIAS_3_0 ON ((ALIAS_3_0.ID_ORGANIZATION = @organization)
  AND ALIAS_2_0.STD_ID_HR = ALIAS_3_0.SCO_ID_HR AND ALIAS_2_0.STD_OR_HR_PERIOD = ALIAS_3_0.SCO_OR_HR_PER)
LEFT JOIN M4SSP_H_CATEGORIA ALIAS_4_0 ON ((ALIAS_4_0.ID_ORGANIZATION = @organization)
  AND ALIAS_3_0.SCO_ID_HR = ALIAS_4_0.SCO_ID_HR AND ALIAS_3_0.SCO_OR_HR_ROLE = ALIAS_4_0.SCO_OR_HR_ROLE)
LEFT JOIN M4SSP_CATEGORIAS ALIAS_7_0 ON ((ALIAS_7_0.ID_ORGANIZATION = @organization)
  AND ALIAS_4_0.SSP_ID_CATEGORIA = ALIAS_7_0.SSP_ID_CATEGORIA)
LEFT JOIN M4CYC_H_ESTRUCTURA ALIAS_5_0 ON ((ALIAS_5_0.ID_ORGANIZATION = @organization)
  AND ALIAS_3_0.SCO_ID_HR = ALIAS_5_0.SCO_ID_HR AND ALIAS_3_0.SCO_OR_HR_ROLE = ALIAS_5_0.SCO_OR_HR_ROLE)
LEFT JOIN M4CYC_ESTRUCTURA ALIAS_6_0 ON ((ALIAS_6_0.ID_ORGANIZATION = @organization)
  AND ALIAS_5_0.ID_ESTRUCTURA = ALIAS_6_0.ID_ESTRUCTURA)
INNER JOIN M4SSP_H_CENT_COS ALIAS_B_0 ON (ALIAS_3_0.SCO_ID_HR = ALIAS_B_0.SCO_ID_HR)
INNER JOIN M4SCO_H_HR_JOB ALIAS_8_0 ON (ALIAS_3_0.SCO_ID_HR = ALIAS_8_0.SCO_ID_HR
  AND ALIAS_3_0.SCO_OR_HR_ROLE = ALIAS_8_0.SCO_OR_HR_ROLE)
INNER JOIN STD_JOB ALIAS_9_0 ON (ALIAS_8_0.SCO_ID_JOB_CODE = ALIAS_9_0.STD_ID_JOB_CODE)
INNER JOIN STD_HT_JOB_DEF ALIAS_A_0 ON (ALIAS_A_0.STD_ID_JOB_CODE = ALIAS_9_0.STD_ID_JOB_CODE)
INNER JOIN M4CSP_H_MOD_VAR ALIAS_C_0 ON (ALIAS_C_0.STD_ID_HR = ALIAS_2_0.STD_ID_HR)
INNER JOIN M4CSP_MOD_VAR ALIAS_D_0 ON (ALIAS_C_0.CSP_TP_MOD_VAR = ALIAS_D_0.CSP_TP_MOD_VAR
  AND BASE_0.ID_EMPLEADO = ALIAS_2_0.STD_ID_HR)
WHERE ALIAS_9_0.ID_ORGANIZATION = @organization AND ALIAS_8_0.ID_ORGANIZATION = @organization
  AND ALIAS_D_0.ID_ORGANIZATION = @organization AND ALIAS_B_0.ID_ORGANIZATION = @organization
  AND ALIAS_A_0.ID_ORGANIZATION = @organization AND ALIAS_C_0.ID_ORGANIZATION = @organization
  AND BASE_0.ID_ORGANIZATION = @organization
  AND (ALIAS_4_0.SSP_FEC_INICIO <= GETDATE() AND ALIAS_4_0.SSP_FEC_FIN >= GETDATE()
    AND ALIAS_5_0.DT_START >= ALIAS_6_0.DT_START AND ALIAS_5_0.DT_END <= ALIAS_6_0.DT_END
    AND ALIAS_5_0.DT_START <= GETDATE() AND ALIAS_5_0.DT_END >= GETDATE() AND BASE_0.COMPUTA = '1')
  AND BASE_0.STD_ID_LEG_ENT <> 'BRASIL'
  AND ALIAS_8_0.SCO_DT_END >= GETDATE() AND ALIAS_8_0.SCO_DT_START <= GETDATE()
  AND ALIAS_A_0.STD_DT_END >= GETDATE() AND ALIAS_A_0.STD_DT_START <= GETDATE()
  AND ALIAS_B_0.SSP_FEC_FIN >= GETDATE() AND ALIAS_B_0.SSP_FEC_INICIO <= GETDATE()
  AND ALIAS_C_0.DT_END >= GETDATE()`;

/** Nodo `CYC_ATRADIUS_JOB`. */
const ATRADIUS_JOB_SQL = `
SELECT SCO_ID_HR, CSP_ID_ATRADIUS_JOB FROM M4CSP_H_ATRADIUS_JOB
WHERE ID_ORGANIZATION = @organization AND DT_START <= @today AND DT_END >= @today`;

/** Nodo `CYC_H_CATEG_ATRADIUS`. */
const ATRADIUS_CATEGORY_SQL = `
SELECT SCO_ID_HR, CSP_ID_CATEG_ATRADIUS FROM M4CSP_H_CATEG_ATRADIUS
WHERE ID_ORGANIZATION = @organization AND DT_START <= @today AND DT_END >= @today`;

/** Nodo `CYC_H_VPT`: Global Grade del puesto. */
const GLOBAL_GRADE_SQL = `
SELECT STD_ID_JOB_CODE, CSP_TW_GLOBAL_TRADE FROM M4CSP_VPT
WHERE ID_ORGANIZATION = @organization AND STD_DT_START <= @today AND STD_DT_END >= @today`;

/** Nodo `CYC_ULT_PAGA_PUBLICADA`: última paga ordinaria (día 25) calculada y publicada. */
const LAST_PUBLISHED_PAY_SQL = `
SELECT MAX(SCO_DT_ACCRUED) AS SCO_DT_ACCRUED FROM M4SCO_HT_PAYS
WHERE ID_ORGANIZATION = @organization AND SCO_ID_PAY_STATUS = '03' AND SCO_ID_PAY_PUB_ST = '02'
  AND SCO_ID_PAY_TYPE = '1' AND DATEPART(DD, SCO_DT_ACCRUED) = 25`;

/** Agregados comunes de los nodos `CYC_DATOS_ECONOMICOS_*`. */
const ECONOMIC_COLUMNS = `
  SUM(ALIAS_3_0.SSP_TOTAL_P_COMPL) AS TOTAL_P_COMPL,
  SUM(ALIAS_3_0.SSP_PR_EXT_PRORRAT) AS PR_EXT_PRORRAT,
  SUM(ALIAS_3_0.SSP_P_PAGA_EX_1) AS PAGA_EX_1, SUM(ALIAS_3_0.SSP_P_PAGA_EX_2) AS PAGA_EX_2,
  SUM(ALIAS_3_0.SSP_P_PAGA_EX_3) AS PAGA_EX_3, SUM(ALIAS_3_0.SSP_P_PAGA_EX_4) AS PAGA_EX_4,
  SUM(ALIAS_3_0.SSP_P_PAGA_EX_5) AS PAGA_EX_5,
  MAX(ALIAS_3_0.SSP_COEF_JORNADA) AS COEF_JORNADA,
  SUM(BASE_0.CSP_P_ASIG_MIN_DESEMPENIO) AS ASIG_MIN_DESEMPENIO,
  MAX(ALIAS_1_0.CSP_P_PLUS_INSPECCION) AS PLUS_INSPECCION,
  SUM(BASE_0.CSP_PT_VENCIMIENTO) AS PT_VENCIMIENTO,
  SUM(BASE_0.CSP_PT_DIUTURNIDADES) AS PT_DIUTURNIDADES,
  SUM(BASE_0.CSP_PT_INSENCAO_HORARIO_TRABAL) AS PT_INSENCAO,
  SUM(BASE_0.CSP_PT_COMP_INSENCAO_HOR_TRA) AS PT_COMP_INSENCAO,
  SUM(BASE_0.CSP_PT_DIUTURNIDADES_IT) AS PT_DIUTURNIDADES_IT,
  SUM(BASE_0.CSP_PT_COMPENSACAO_POSTO_TRABA) AS PT_COMPENSACAO,
  SUM(BASE_0.CSP_PT_AJUDAS_CUSTO) AS PT_AJUDAS_CUSTO,
  SUM(BASE_0.CSP_P_TARGET) AS P_TARGET,
  SUM(BASE_0.CSP_P_EVALUACION) AS P_EVALUACION,
  MAX(BASE_0.CYC_PORC_RETR_VAR) AS PORC_RETR_VAR`;

const ECONOMIC_FROM = `
FROM M4CSP_AC_HR_PERIOD BASE_0
LEFT JOIN M4CSP_AC_HR_ROLE ALIAS_1_0 ON ((ALIAS_1_0.ID_ORGANIZATION = @organization)
  AND BASE_0.SCO_DT_ALLOC = ALIAS_1_0.SCO_DT_ALLOC AND BASE_0.SCO_DT_PAYMENT = ALIAS_1_0.SCO_DT_PAYMENT
  AND BASE_0.SCO_DT_START_SLICE = ALIAS_1_0.SCO_DT_START_SLICE AND BASE_0.SCO_ID_HR = ALIAS_1_0.SCO_ID_HR)
INNER JOIN M4SCO_AC_HR_ROLE ALIAS_2_0 ON (ALIAS_2_0.ID_CURRENCY = ALIAS_1_0.ID_CURRENCY
  AND ALIAS_2_0.SCO_DT_ALLOC = ALIAS_1_0.SCO_DT_ALLOC AND ALIAS_2_0.SCO_DT_PAYMENT = ALIAS_1_0.SCO_DT_PAYMENT
  AND ALIAS_2_0.SCO_DT_START_SLICE = ALIAS_1_0.SCO_DT_START_SLICE AND ALIAS_2_0.SCO_ID_HR = ALIAS_1_0.SCO_ID_HR
  AND ALIAS_2_0.SCO_OR_HR_ROLE = ALIAS_1_0.SCO_OR_HR_ROLE
  AND ALIAS_2_0.SCO_PAY_FREQ_ALLOC = ALIAS_1_0.SCO_PAY_FREQ_ALLOC
  AND ALIAS_2_0.SCO_PAY_FREQ_PAY = ALIAS_1_0.SCO_PAY_FREQ_PAY)
INNER JOIN M4SCO_AC_HR_PERIOD ALIAS_3_0 ON (ALIAS_3_0.ID_CURRENCY = BASE_0.ID_CURRENCY
  AND ALIAS_3_0.SCO_DT_ALLOC = BASE_0.SCO_DT_ALLOC AND ALIAS_3_0.SCO_DT_PAYMENT = BASE_0.SCO_DT_PAYMENT
  AND ALIAS_3_0.SCO_DT_START_SLICE = BASE_0.SCO_DT_START_SLICE AND ALIAS_3_0.SCO_ID_HR = BASE_0.SCO_ID_HR
  AND ALIAS_3_0.SCO_OR_HR_PERIOD = BASE_0.SCO_OR_HR_PERIOD
  AND ALIAS_3_0.SCO_PAY_FREQ_ALLOC = BASE_0.SCO_PAY_FREQ_ALLOC
  AND ALIAS_3_0.SCO_PAY_FREQ_PAY = BASE_0.SCO_PAY_FREQ_PAY)
WHERE ALIAS_3_0.ID_ORGANIZATION = @organization AND ALIAS_2_0.ID_ORGANIZATION = @organization
  AND BASE_0.ID_ORGANIZATION = @organization`;

/** Nodo `CYC_DATOS_ECONOMICOS_ACTUAL`: la última paga publicada. */
const CURRENT_ECONOMICS_SQL = `
SELECT BASE_0.SCO_ID_HR, BASE_0.SCO_OR_HR_PERIOD,${ECONOMIC_COLUMNS}${ECONOMIC_FROM}
  AND BASE_0.SCO_DT_ALLOC = @allocation`;
const CURRENT_ECONOMICS_GROUP = " GROUP BY BASE_0.SCO_ID_HR, BASE_0.SCO_OR_HR_PERIOD";

/** Nodo `CYC_DATOS_ECONOMICOS_ANIOS_ANT`: acumulados de diciembre por año. */
const PREVIOUS_ECONOMICS_SQL = `
SELECT BASE_0.SCO_ID_HR, DATEPART(YY, BASE_0.SCO_DT_ALLOC) AS ANIO,${ECONOMIC_COLUMNS}${ECONOMIC_FROM}
  AND DATEPART(MM, BASE_0.SCO_DT_ALLOC) = 12
  AND DATEPART(YY, BASE_0.SCO_DT_ALLOC) >= @fromYear AND DATEPART(YY, BASE_0.SCO_DT_ALLOC) < @toYear`;
const PREVIOUS_ECONOMICS_GROUP = " GROUP BY BASE_0.SCO_ID_HR, DATEPART(YY, BASE_0.SCO_DT_ALLOC)";

/** Nodo `CYC_DATOS_VARIABLE`: variable pagado por año de imputación. */
const VARIABLE_SQL = `
SELECT BASE_0.SCO_ID_HR, DATEPART(YY, BASE_0.SCO_DT_ALLOC) AS ANIO,
  SUM(BASE_0.CSP_I_VARIABLE_COMERCIAL) AS VARIABLE_COMERCIAL,
  SUM(BASE_0.CSP_I_PART_RESULTADOS) AS PART_RESULTADOS,
  SUM(BASE_0.CSP_I_RETRIB_VARIABLE) AS RETRIB_VARIABLE,
  SUM(BASE_0.CSP_I_VAR_EVALUACION) AS VAR_EVALUACION
FROM M4CSP_AC_HR_PERIOD BASE_0, M4SCO_AC_HR_PERIOD ALIAS_1_0
WHERE ALIAS_1_0.ID_CURRENCY = BASE_0.ID_CURRENCY AND ALIAS_1_0.SCO_DT_ALLOC = BASE_0.SCO_DT_ALLOC
  AND ALIAS_1_0.SCO_DT_PAYMENT = BASE_0.SCO_DT_PAYMENT
  AND ALIAS_1_0.SCO_DT_START_SLICE = BASE_0.SCO_DT_START_SLICE
  AND ALIAS_1_0.SCO_ID_HR = BASE_0.SCO_ID_HR AND ALIAS_1_0.SCO_OR_HR_PERIOD = BASE_0.SCO_OR_HR_PERIOD
  AND ALIAS_1_0.SCO_PAY_FREQ_ALLOC = BASE_0.SCO_PAY_FREQ_ALLOC
  AND ALIAS_1_0.SCO_PAY_FREQ_PAY = BASE_0.SCO_PAY_FREQ_PAY
  AND ALIAS_1_0.ID_ORGANIZATION = @organization AND BASE_0.ID_ORGANIZATION = @organization
  AND DATEPART(YY, BASE_0.SCO_DT_ALLOC) >= @fromYear AND DATEPART(YY, BASE_0.SCO_DT_ALLOC) <= @toYear`;
const VARIABLE_GROUP = " GROUP BY BASE_0.SCO_ID_HR, DATEPART(YY, BASE_0.SCO_DT_ALLOC)";

export type QuinquenalQuery = {
  organization: string;
  /** Fecha ISO `YYYY-MM-DD`. */
  today: string;
  /** Matrícula concreta o, si falta, todos los empleados computables. */
  employeeId?: string;
};

const numberOf = (value: PortalSqlValue | undefined): number => {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
};

const optionalNumber = (value: PortalSqlValue | undefined): number | null =>
  value === null || value === undefined || value === "" ? null : numberOf(value);

const keyOf = (value: PortalSqlValue | undefined): string => sqlText(value) ?? "";

const toSqlDate = (isoDate: string): Date => new Date(`${isoDate}T00:00:00.000Z`);

const figuresOf = (row: PortalSqlRow): QuinquenalFigures => ({
  coefficient: numberOf(row.COEF_JORNADA),
  monthlyTotal: numberOf(row.TOTAL_P_COMPL),
  extraPayProration: numberOf(row.PR_EXT_PRORRAT),
  extraPays:
    numberOf(row.PAGA_EX_1) +
    numberOf(row.PAGA_EX_2) +
    numberOf(row.PAGA_EX_3) +
    numberOf(row.PAGA_EX_4) +
    numberOf(row.PAGA_EX_5),
  minPerformance: numberOf(row.ASIG_MIN_DESEMPENIO),
  inspectionPlus: numberOf(row.PLUS_INSPECCION),
  vencimiento: numberOf(row.PT_VENCIMIENTO),
  diuturnidades: numberOf(row.PT_DIUTURNIDADES),
  insencaoHorario: numberOf(row.PT_INSENCAO),
  compInsencaoHorario: numberOf(row.PT_COMP_INSENCAO),
  diuturnidadesIt: numberOf(row.PT_DIUTURNIDADES_IT),
  compensacaoPosto: numberOf(row.PT_COMPENSACAO),
  ajudasCusto: numberOf(row.PT_AJUDAS_CUSTO),
  target: numberOf(row.P_TARGET),
  evaluation: numberOf(row.P_EVALUACION),
  variablePercent: numberOf(row.PORC_RETR_VAR),
});

/** Primer valor por clave, como hace el nodo Meta4 al leer el primer registro. */
const firstBy = (
  rows: readonly PortalSqlRow[],
  key: string,
  value: string,
): Map<string, PortalSqlValue> => {
  const map = new Map<string, PortalSqlValue>();
  for (const row of rows) {
    const id = keyOf(row[key]);
    if (!map.has(id)) map.set(id, row[value] ?? null);
  }
  return map;
};

/** Consulta quinquenal completa (o de una matrícula) de la sociedad del contexto. */
export async function getQuinquenalReport(query: QuinquenalQuery): Promise<QuinquenalReport> {
  const currentYear = Number(query.today.slice(0, 4));
  const firstYear = currentYear - QUINQUENAL_YEARS + 1;
  const organization = organizationParam(query.organization);
  const base: Record<string, PortalSqlParam> = { organization };
  if (query.employeeId) base.employeeId = employeeParam(query.employeeId);
  const byEmployee = (column: string) => (query.employeeId ? ` AND ${column} = @employeeId` : "");
  const today: PortalSqlParam = { type: "date", value: toSqlDate(query.today) };

  const [employees, atradiusJobs, atradiusCategories, grades, lastPay] = await Promise.all([
    runPortalSelect(
      `${EMPLOYEES_SQL}${byEmployee("BASE_0.ID_EMPLEADO")} ORDER BY BASE_0.ID_EMPLEADO ASC`,
      base,
    ),
    runPortalSelect(`${ATRADIUS_JOB_SQL}${byEmployee("SCO_ID_HR")} ORDER BY DT_START DESC`, {
      ...base,
      today,
    }),
    runPortalSelect(`${ATRADIUS_CATEGORY_SQL}${byEmployee("SCO_ID_HR")} ORDER BY DT_START DESC`, {
      ...base,
      today,
    }),
    runPortalSelect(`${GLOBAL_GRADE_SQL} ORDER BY STD_DT_START DESC`, { organization, today }),
    runPortalSelect(LAST_PUBLISHED_PAY_SQL, { organization }),
  ]);

  const allocation = lastPay[0]?.SCO_DT_ACCRUED;
  const years = (from: number, to: number): Record<string, PortalSqlParam> => ({
    ...base,
    fromYear: { type: "int", value: from },
    toYear: { type: "int", value: to },
  });

  const [current, previous, variable] = await Promise.all([
    allocation instanceof Date
      ? runPortalSelect(
          `${CURRENT_ECONOMICS_SQL}${byEmployee("BASE_0.SCO_ID_HR")}${CURRENT_ECONOMICS_GROUP}`,
          { ...base, allocation: { type: "date", value: allocation } },
        )
      : Promise.resolve([]),
    runPortalSelect(
      `${PREVIOUS_ECONOMICS_SQL}${byEmployee("BASE_0.SCO_ID_HR")}${PREVIOUS_ECONOMICS_GROUP}`,
      years(firstYear, currentYear),
    ),
    // El variable de un año se imputa al siguiente: del segundo año al actual.
    runPortalSelect(
      `${VARIABLE_SQL}${byEmployee("BASE_0.SCO_ID_HR")}${VARIABLE_GROUP}`,
      years(firstYear + 1, currentYear),
    ),
  ]);

  const jobByEmployee = firstBy(atradiusJobs, "SCO_ID_HR", "CSP_ID_ATRADIUS_JOB");
  const categoryByEmployee = firstBy(atradiusCategories, "SCO_ID_HR", "CSP_ID_CATEG_ATRADIUS");
  const gradeByJob = firstBy(grades, "STD_ID_JOB_CODE", "CSP_TW_GLOBAL_TRADE");

  const currentByKey = new Map<string, QuinquenalFigures>();
  for (const row of current) {
    currentByKey.set(`${keyOf(row.SCO_ID_HR)}|${numberOf(row.SCO_OR_HR_PERIOD)}`, figuresOf(row));
  }
  const previousByEmployee = new Map<string, Map<number, QuinquenalFigures>>();
  for (const row of previous) {
    const id = keyOf(row.SCO_ID_HR);
    const map = previousByEmployee.get(id) ?? new Map<number, QuinquenalFigures>();
    map.set(numberOf(row.ANIO), figuresOf(row));
    previousByEmployee.set(id, map);
  }
  const variableByEmployee = new Map<string, Map<number, number>>();
  for (const row of variable) {
    const id = keyOf(row.SCO_ID_HR);
    const map = variableByEmployee.get(id) ?? new Map<number, number>();
    map.set(
      numberOf(row.ANIO),
      numberOf(row.VARIABLE_COMERCIAL) +
        numberOf(row.PART_RESULTADOS) +
        numberOf(row.RETRIB_VARIABLE) +
        numberOf(row.VAR_EVALUACION),
    );
    variableByEmployee.set(id, map);
  }

  const rows = employees.map((row): QuinquenalRow => {
    const employeeId = keyOf(row.ID_EMPLEADO);
    const legalEntity = sqlText(row.STD_ID_LEG_ENT);
    const jobId = sqlText(row.ID_PUESTO);
    const { group, level } = splitJobCategory(sqlText(row.STD_ID_JOB_CATEGOR));
    return {
      employeeId,
      legalEntity,
      firstName: sqlText(row.NOMBRE),
      lastName1: sqlText(row.APELLIDO_1),
      lastName2: sqlText(row.APELLIDO_2),
      birthDate: sqlText(row.FEC_NACIMIENTO),
      seniorityDate: sqlText(row.FEC_ANTIGUEDAD),
      fusionId: sqlText(row.CSP_ID_FUSION),
      structureId: sqlText(row.ID_ESTRUCTURA),
      structureName: sqlText(row.N_ESTRUCTURA),
      ceo: organizationLevel(sqlText(row.ID_CEO), sqlText(row.N_CEO), 0),
      mb: organizationLevel(sqlText(row.ID_MB), sqlText(row.N_MB), 1),
      alt: organizationLevel(sqlText(row.ID_ALT), sqlText(row.N_ALT), 2),
      direction: organizationLevel(
        sqlText(row.ID_DIRECCION),
        sqlText(row.N_DIRECCION),
        3,
        ORGANIZATION_NAME_LENGTH,
      ),
      area: organizationLevel(sqlText(row.ID_AREA), sqlText(row.N_AREA), 4),
      unit: organizationLevel(
        sqlText(row.ID_UNIDAD),
        sqlText(row.N_UNIDAD),
        5,
        ORGANIZATION_NAME_LENGTH,
      ),
      service: organizationLevel(
        sqlText(row.ID_SERVICIO),
        sqlText(row.N_SERVICIO),
        6,
        ORGANIZATION_NAME_LENGTH,
      ),
      jobId,
      jobName: sqlText(row.N_PUESTO),
      categoryId: sqlText(row.SSP_ID_CATEGORIA),
      categoryName: sqlText(row.SSP_NM_CATEGORESP),
      jobGroup: group,
      jobLevel: level,
      costCenter: sqlText(row.CSP_ID_KPI),
      atradiusJob: sqlText(jobByEmployee.get(employeeId)),
      variableModel: sqlText(row.CSP_NM_MOD_VAR),
      atradiusCategory: sqlText(categoryByEmployee.get(employeeId)),
      // Meta4 deja 0 cuando el puesto no tiene valoración vigente.
      globalGrade: (jobId ? optionalNumber(gradeByJob.get(jobId)) : null) ?? 0,
      jobFamilyId: sqlText(row.ID_TIPO_PUESTO),
      jobFamilyName: sqlText(row.N_TIPO_PUESTO),
      years: buildQuinquenalYears({
        legalEntity,
        currentYear,
        current: currentByKey.get(`${employeeId}|${numberOf(row.STD_OR_HR_PERIOD)}`) ?? null,
        previous: previousByEmployee.get(employeeId) ?? new Map(),
        paidVariable: variableByEmployee.get(employeeId) ?? new Map(),
      }),
    };
  });

  return { generatedOn: query.today, currentYear, rows };
}
