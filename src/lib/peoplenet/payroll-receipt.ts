import "server-only";

import sql from "mssql";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";
import {
  mapPayrollPays,
  mapPayrollReceipt,
  PERIOD_EXTRA_COLUMNS,
  ROLE_EXTRA_COLUMNS,
  toText,
} from "@/lib/peoplenet/payroll-receipt-mapper";
import {
  resolveReceiptTemplate,
  templateColumns,
  type AccrualLevel,
  type PeopleNetRow,
  type ReceiptTemplate,
} from "@/lib/peoplenet/payroll-receipt-template";
import {
  PAYROLL_RANGE_MAX_PAYS,
  type PayrollMissingReceipt,
  type PayrollPayOption,
  type PayrollProcessCurrency,
  type PayrollReceipt,
  type PayrollReceiptEntry,
} from "@/types/payroll-receipt";

export type PayrollReceiptErrorCode = "NOT_FOUND" | "UNSUPPORTED" | "RANGE_TOO_LARGE";

export class PayrollReceiptError extends Error {
  constructor(
    readonly code: PayrollReceiptErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "PayrollReceiptError";
  }
}

/**
 * Plantilla RECIBO de Meta4: líneas, columnas del recibo y cómo se leen. Solo
 * la sociedad es parámetro; nada procede del navegador.
 */
const TEMPLATE_DEFINITION_QUERY = `SELECT R.SCO_ORDER, R.SCO_ID_ROW, R.SCO_NM_ROWESP, R.SCO_RECORDS,
  R.SCO_SLICES, D.SCO_ID_COLUMN, D.SCO_LABELESP, D.SCO_CONSTANT, D.SCO_BEF_AFT, D.SCO_ID_PRT_ITEM,
  D.SFR_ID_SOURCE_ITEM, D.SFR_ID_SOURCE_NODE, PC.ID_ITEM AS PC_ITEM, PC.ID_TI AS PC_TI
FROM M4SCO_ROWS R
JOIN M4SCO_ROW_COL_DEF D
  ON D.ID_ORGANIZATION = R.ID_ORGANIZATION AND D.SCO_ID_REPORT = R.SCO_ID_REPORT
 AND D.SCO_ID_BODY = R.SCO_ID_BODY AND D.SCO_ID_ROW = R.SCO_ID_ROW
LEFT JOIN M4RCH_PICOMPONENTS PC
  ON PC.ID_T3 = R.ID_T3_PI AND PC.ID_PAYROLL_ITEM = R.ID_PAYROLL_ITEM
 AND PC.ID_COMPONENT_TYPE = D.ID_COMPONENT_TYPE
WHERE R.ID_ORGANIZATION = @organization AND R.SCO_ID_REPORT = 'RECIBO' AND R.SCO_ID_BODY = 1
ORDER BY R.SCO_ORDER, R.SCO_ID_ROW, D.SCO_ID_COLUMN`;

/** Item del repositorio Meta4 → columna física de los acumulados. */
const TEMPLATE_REPOSITORY_QUERY = `SELECT DISTINCT I.ID_ITEM, I.ID_READ_OBJECT, F.REAL_NAME
FROM M4RCH_ITEMS I
JOIN M4RDC_FIELDS F ON F.ID_OBJECT = I.ID_READ_OBJECT AND F.ID_FIELD = I.ID_READ_FIELD
WHERE I.ID_READ_OBJECT IN ('SCO_AC_HR_PERIOD', 'CSP_AC_HR_PERIOD', 'SCO_AC_HR_ROLE', 'CSP_AC_HR_ROLE')`;

const ACCRUAL_COLUMNS_QUERY = `SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME IN ('M4CSP_AC_HR_PERIOD', 'M4SCO_AC_HR_PERIOD', 'M4CSP_AC_HR_ROLE', 'M4SCO_AC_HR_ROLE')`;

const TEMPLATE_TTL_MS = 15 * 60_000;

// La plantilla cambia muy poco; se reutiliza entre consultas y recargas en desarrollo.
const templateCache = globalThis as typeof globalThis & {
  powermeta4ReceiptTemplates?: Map<
    string,
    { expiresAt: number; template: Promise<ReceiptTemplate> }
  >;
};

const loadReceiptTemplate = (organization: Meta4Society): Promise<ReceiptTemplate> => {
  const cache = (templateCache.powermeta4ReceiptTemplates ??= new Map());
  const cached = cache.get(organization);
  if (cached && cached.expiresAt > Date.now()) return cached.template;

  const template = (async () => {
    const pool = await getPeopleNetPool();
    const [definition, repository, columns] = await Promise.all([
      pool
        .request()
        .input("organization", sql.VarChar(4), organization)
        .query<PeopleNetRow>(TEMPLATE_DEFINITION_QUERY),
      pool.request().query<PeopleNetRow>(TEMPLATE_REPOSITORY_QUERY),
      pool.request().query<PeopleNetRow>(ACCRUAL_COLUMNS_QUERY),
    ]);
    return resolveReceiptTemplate({
      definitionRows: definition.recordset,
      repositoryRows: repository.recordset,
      columnRows: columns.recordset,
    });
  })();
  cache.set(organization, { expiresAt: Date.now() + TEMPLATE_TTL_MS, template });
  template.catch(() => cache.delete(organization));
  return template;
};

/**
 * Columnas de la plantilla más las de cabecera y pie. Solo se interpolan
 * identificadores presentes en `INFORMATION_SCHEMA` de las tablas de acumulados.
 */
const selectList = (
  template: ReceiptTemplate,
  level: AccrualLevel,
  extras: readonly string[],
): string => {
  const available = template.columns[level];
  return [...new Set([...extras, ...templateColumns(template, level)])]
    .flatMap((column) => {
      const alias = available.get(column);
      return alias ? [`${alias}.${column}`] : [];
    })
    .join(", ");
};

const accrualJoin = (level: "PERIOD" | "ROLE"): string => `FROM M4CSP_AC_HR_${level} B
JOIN M4SCO_AC_HR_${level} A
  ON A.ID_CURRENCY = B.ID_CURRENCY AND A.SCO_DT_ALLOC = B.SCO_DT_ALLOC
 AND A.SCO_DT_PAYMENT = B.SCO_DT_PAYMENT AND A.SCO_DT_START_SLICE = B.SCO_DT_START_SLICE
 AND A.SCO_ID_HR = B.SCO_ID_HR AND A.SCO_OR_HR_${level} = B.SCO_OR_HR_${level}
 AND A.SCO_PAY_FREQ_ALLOC = B.SCO_PAY_FREQ_ALLOC AND A.SCO_PAY_FREQ_PAY = B.SCO_PAY_FREQ_PAY`;

const currencyFilter = (currency: PayrollProcessCurrency): string =>
  currency.mode === "other" ? "A.ID_CURRENCY = @currency" : "A.SCO_IND_MAIN_CURR = 1";

/** Paga actual: la imputación coincide con la fecha de pago. */
const periodQuery = (
  template: ReceiptTemplate,
  currency: PayrollProcessCurrency,
) => `SELECT ${selectList(template, "period", PERIOD_EXTRA_COLUMNS)}
${accrualJoin("PERIOD")}
WHERE A.ID_ORGANIZATION = @organization AND B.ID_ORGANIZATION = @organization
  AND B.SCO_ID_HR = @employeeId
  AND B.SCO_DT_PAYMENT = @paymentDate AND B.SCO_DT_ALLOC = @paymentDate
  AND ${currencyFilter(currency)}`;

const roleQuery = (
  template: ReceiptTemplate,
  currency: PayrollProcessCurrency,
) => `SELECT ${selectList(template, "role", ROLE_EXTRA_COLUMNS)}
${accrualJoin("ROLE")}
WHERE A.ID_ORGANIZATION = @organization AND B.ID_ORGANIZATION = @organization
  AND B.SCO_ID_HR = @employeeId AND A.SCO_OR_HR_PERIOD = @hrPeriod
  AND B.SCO_DT_PAYMENT = @paymentDate AND B.SCO_DT_ALLOC = @paymentDate
  AND ${currencyFilter(currency)}
ORDER BY B.SCO_OR_HR_ROLE, B.SCO_DT_START_SLICE`;

const HR_PERIOD_QUERY = `SELECT SSP_NUM_MATRICULA, SSP_FEC_ANTIGUEDAD
FROM STD_HR_PERIOD
WHERE ID_ORGANIZATION = @organization AND STD_ID_HR = @employeeId AND STD_OR_HR_PERIOD = @hrPeriod`;

const PERSON_QUERY = `SELECT P.STD_N_FIRST_NAME, P.STD_N_FAM_NAME_1, P.STD_N_MAIDEN_NAME, P.STD_SSN,
  P.STD_SS_NUMBER, H.SSP_PROV_NUM_SS, H.SSP_NUM_SS, H.SSP_DIG_NUM_SS
FROM STD_HR H JOIN STD_PERSON P ON H.STD_ID_HR = P.STD_ID_PERSON
WHERE H.STD_ID_HR = @employeeId`;

const LEGAL_ENTITY_QUERY = `SELECT SSP_ID_LEGAL, STD_N_LEG_ENT
FROM STD_LEG_ENT
WHERE ID_ORGANIZATION = @organization AND STD_ID_LEG_ENT = @legalEntity`;

const CONTRIBUTION_ACCOUNT_QUERY = `SELECT SSP_NUM_CUENTA_COT
FROM M4SSP_CABEC_TC1
WHERE ID_ORGANIZATION = @organization AND SSP_ID_CABEC_TC1 = @contributionHeader`;

const CONTRIBUTION_GROUP_QUERY = `SELECT TOP 1 SSP_ID_GRUP_TARIFA
FROM M4SSP_H_GRUPO_TAR
WHERE ID_ORGANIZATION = @organization AND SSP_ID_HR = @employeeId AND SSP_OR_HR_PERIOD = @hrPeriod
  AND FEC_INICIO <= @paymentDate AND FEC_FIN >= @paymentDate
ORDER BY FEC_INICIO DESC`;

const CATEGORY_QUERY = `SELECT TOP 1 C.SSP_NM_CATEGORESP, R.SCO_OR_HR_ROLE
FROM M4SSP_H_CATEGORIA HC
JOIN M4SSP_CATEGORIAS C
  ON C.ID_ORGANIZATION = @organization AND HC.SSP_ID_CATEGORIA = C.SSP_ID_CATEGORIA
JOIN M4SCO_HR_ROLE R
  ON R.ID_ORGANIZATION = @organization AND HC.SCO_ID_HR = R.SCO_ID_HR
 AND HC.SCO_OR_HR_ROLE = R.SCO_OR_HR_ROLE
WHERE HC.ID_ORGANIZATION = @organization AND R.SCO_ID_HR = @employeeId
  AND R.SCO_OR_HR_PER = @hrPeriod AND R.SCO_MAIN_ROLE = '1'
  AND HC.SSP_FEC_INICIO <= @paymentDate AND HC.SSP_FEC_FIN >= @paymentDate
ORDER BY HC.SSP_FEC_INICIO DESC`;

const WORK_LOCATION_QUERY = `SELECT TOP 1 STD_WORK_LOCESP
FROM STD_WORK_LOCATION
WHERE ID_ORGANIZATION = @organization AND STD_ID_WORK_LOCAT = @workLocation
  AND STD_DT_START <= @paymentDate
ORDER BY STD_DT_START DESC`;

/** Orden de pago de la paga actual y la cuenta bancaria a la que se transfiere. */
const PAYMENTS_QUERY = `SELECT O.SCO_PAYORDPRIM, BANK.SCO_GB_IBAN
FROM M4SCO_PAYMENT_DATA D
JOIN M4SCO_PAYMEN_ORDER O
  ON O.ID_ORGANIZATION = @organization AND D.SCO_ID_HR = O.SCO_ID_HR
 AND D.SCO_ORIGIN_TYPE = O.SCO_ORIGIN_TYPE AND D.SCO_OR_HR_PERIOD = O.SCO_OR_HR_PERIOD
 AND D.SCO_OR_PAYMENTDATA = O.SCO_OR_PAYMENTDATA
LEFT JOIN M4SCO_PERSON_BANK BANK
  ON BANK.SCO_ID_PERSON = D.SCO_ID_PERSON AND BANK.SCO_OR_ACCOUNT = D.SCO_OR_ACCOUNT
WHERE D.ID_ORGANIZATION = @organization AND D.SCO_ID_HR = @employeeId
  AND D.SCO_OR_HR_PERIOD = @hrPeriod AND D.SCO_ORIGIN_TYPE = '01' AND D.SCO_EMP_CHECK = '1'
  AND D.SCO_DT_START <= @paymentDate AND D.SCO_DT_END >= @paymentDate
  AND O.SCO_DT_PAYMENT = @paymentDate AND O.SCO_DT_ALLOCATION = @paymentDate
ORDER BY D.SCO_OR_PAYMENTDATA`;

const PAYS_QUERY = `SELECT TOP 240 SCO_DT_ACCRUED, ISNULL(SCO_NM_PAYESP, SCO_NM_PAYENG) AS PAY_NAME,
  SCO_DT_START, SCO_DATE_END
FROM M4SCO_HT_PAYS
WHERE ID_ORGANIZATION = @organization AND SCO_DT_ACCRUED <= @today
ORDER BY SCO_DT_ACCRUED DESC`;

const PAYS_RANGE_QUERY = `SELECT SCO_DT_ACCRUED, ISNULL(SCO_NM_PAYESP, SCO_NM_PAYENG) AS PAY_NAME,
  SCO_DT_START, SCO_DATE_END
FROM M4SCO_HT_PAYS
WHERE ID_ORGANIZATION = @organization AND SCO_DT_ACCRUED >= @fromDate AND SCO_DT_ACCRUED <= @toDate
ORDER BY SCO_DT_ACCRUED`;

/** `YYYY-MM-DD` → fecha UTC a medianoche, como la guarda PeopleNet. */
const toSqlDate = (isoDate: string): Date => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year ?? 0, (month ?? 1) - 1, day ?? 1));
};

type QueryInputs = {
  organization: Meta4Society;
  employeeId: string;
  paymentDate: string;
  currency: PayrollProcessCurrency;
};

const createRunner = async (inputs: QueryInputs) => {
  const pool = await getPeopleNetPool();
  return async (
    statement: string,
    extra: Record<string, string | number> = {},
  ): Promise<PeopleNetRow[]> => {
    const request = pool
      .request()
      .input("organization", sql.VarChar(4), inputs.organization)
      .input("employeeId", sql.VarChar(64), inputs.employeeId)
      .input("paymentDate", sql.Date, toSqlDate(inputs.paymentDate))
      .input(
        "currency",
        sql.VarChar(10),
        inputs.currency.mode === "other" ? inputs.currency.currencyId : "",
      );
    for (const [name, value] of Object.entries(extra)) {
      if (typeof value === "number") request.input(name, sql.Int, value);
      else request.input(name, sql.VarChar(64), value);
    }
    const result = await request.query<PeopleNetRow>(statement);
    return result.recordset;
  };
};

/** Calendario de pagas ya abonadas de la sociedad, de la más reciente a la más antigua. */
export const listPayrollPays = async (
  organization: Meta4Society,
  today: string,
): Promise<PayrollPayOption[]> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("organization", sql.VarChar(4), organization)
    .input("today", sql.Date, toSqlDate(today))
    .query<PeopleNetRow>(PAYS_QUERY);
  return mapPayrollPays(result.recordset);
};

/** Recibo de la paga actual de un empleado de la sociedad resuelta en servidor. */
export const getCurrentPayrollReceipt = async (inputs: QueryInputs): Promise<PayrollReceipt> => {
  const [run, template] = await Promise.all([
    createRunner(inputs),
    loadReceiptTemplate(inputs.organization),
  ]);

  const periods = await run(periodQuery(template, inputs.currency));
  const [period, ...otherPeriods] = periods;
  if (!period) {
    throw new PayrollReceiptError(
      "NOT_FOUND",
      "No hay recibo de esta paga para el empleado en la sociedad activa.",
    );
  }
  if (otherPeriods.length > 0) {
    throw new PayrollReceiptError(
      "UNSUPPORTED",
      "El empleado tiene varios periodos de alta en esta paga; esa consulta todavía no está disponible.",
    );
  }

  const hrPeriod = Number(toText(period.SCO_OR_HR_PERIOD)) || 1;
  const byPeriod = { hrPeriod };
  const [roles, hrPeriods, people, legalEntities, accounts, groups, categories, payments] =
    await Promise.all([
      run(roleQuery(template, inputs.currency), byPeriod),
      run(HR_PERIOD_QUERY, byPeriod),
      run(PERSON_QUERY),
      run(LEGAL_ENTITY_QUERY, { legalEntity: toText(period.STD_ID_LEG_ENT) }),
      run(CONTRIBUTION_ACCOUNT_QUERY, { contributionHeader: toText(period.SSP_ID_CABEC_TC1) }),
      run(CONTRIBUTION_GROUP_QUERY, byPeriod),
      run(CATEGORY_QUERY, byPeriod),
      run(PAYMENTS_QUERY, byPeriod),
    ]);

  const category = categories[0] ?? null;
  const mainRole =
    roles.find((role) => toText(role.SCO_OR_HR_ROLE) === toText(category?.SCO_OR_HR_ROLE)) ??
    roles[0];
  const workLocationId = toText(mainRole?.SCO_ID_WORK_LOCATION);
  const workLocations = workLocationId
    ? await run(WORK_LOCATION_QUERY, { workLocation: workLocationId })
    : [];

  return mapPayrollReceipt({
    template,
    period,
    roles,
    hrPeriod: hrPeriods[0] ?? null,
    person: people[0] ?? null,
    legalEntity: legalEntities[0] ?? null,
    contributionAccount: accounts[0] ?? null,
    contributionGroup: groups[0] ?? null,
    category,
    workLocation: workLocations[0] ?? null,
    payments,
    employeeId: inputs.employeeId,
  });
};

type RangeInputs = Omit<QueryInputs, "paymentDate"> & {
  fromPaymentDate: string;
  toPaymentDate: string;
};

/** Consultas de recibo en paralelo por rango; acotadas para no saturar el pool. */
const RANGE_CONCURRENCY = 3;

/**
 * Recibos de la paga actual de cada paga del calendario entre dos fechas de
 * pago. Las pagas sin recibo para el empleado se devuelven aparte.
 */
export const getCurrentPayrollReceiptRange = async (
  inputs: RangeInputs,
): Promise<{ receipts: PayrollReceiptEntry[]; missing: PayrollMissingReceipt[] }> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("organization", sql.VarChar(4), inputs.organization)
    .input("fromDate", sql.Date, toSqlDate(inputs.fromPaymentDate))
    .input("toDate", sql.Date, toSqlDate(inputs.toPaymentDate))
    .query<PeopleNetRow>(PAYS_RANGE_QUERY);
  const pays = mapPayrollPays(result.recordset);
  if (pays.length > PAYROLL_RANGE_MAX_PAYS) {
    throw new PayrollReceiptError(
      "RANGE_TOO_LARGE",
      `El rango incluye ${pays.length} pagas; elige como máximo ${PAYROLL_RANGE_MAX_PAYS}.`,
    );
  }

  // Cada worker escribe en la posición de su paga para conservar el orden cronológico.
  const outcomes: (
    | { kind: "receipt"; entry: PayrollReceiptEntry }
    | { kind: "missing"; entry: PayrollMissingReceipt }
    | undefined
  )[] = Array.from({ length: pays.length }, () => undefined);
  let next = 0;
  const worker = async () => {
    while (next < pays.length) {
      const index = next++;
      const pay = pays[index];
      if (!pay) continue;
      try {
        const receipt = await getCurrentPayrollReceipt({ ...inputs, paymentDate: pay.paymentDate });
        outcomes[index] = {
          kind: "receipt",
          entry: { paymentDate: pay.paymentDate, payName: pay.name, receipt },
        };
      } catch (error) {
        if (!(error instanceof PayrollReceiptError)) throw error;
        outcomes[index] = {
          kind: "missing",
          entry: { paymentDate: pay.paymentDate, payName: pay.name, reason: error.message },
        };
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(RANGE_CONCURRENCY, pays.length) }, worker));

  return {
    receipts: outcomes.flatMap((outcome) => (outcome?.kind === "receipt" ? [outcome.entry] : [])),
    missing: outcomes.flatMap((outcome) => (outcome?.kind === "missing" ? [outcome.entry] : [])),
  };
};
