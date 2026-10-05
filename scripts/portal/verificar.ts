/**
 * Verificación en la VM de los contratos de lectura del portal
 * (`npm run portal:verify`). Emite solo presencia de columnas, recuentos por
 * sociedad y el estado HTTP del WSDL de cada servicio SOAP usado; nunca valores
 * de empleados. Solo ejecuta `SELECT` en PeopleNet y `GET ...?wsdl` en Meta4,
 * sin credenciales ni sesión.
 */
import sql from "mssql";

import { META4_SOCIETIES } from "../../src/lib/meta4/societies";
import { getMeta4BaseUrl } from "../../src/lib/meta4/config";
import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { ORO_PORTAL_COLUMNS } from "../../src/lib/portal/data/organization";
import { PAYMENT_COLUMNS } from "../../src/lib/portal/data/payments";
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";
import { inspectPortalWsdl } from "../../src/lib/portal/soap/wsdl";

/** Tablas y columnas que leen las pantallas con contrato SQL. */
const SQL_CONTRACTS: Readonly<
  Record<string, { columns: readonly string[]; organization: boolean }>
> = {
  M4ORO_EMPLEADOS: { columns: ORO_PORTAL_COLUMNS, organization: true },
  M4SCO_PAYMENT_DATA: { columns: PAYMENT_COLUMNS.M4SCO_PAYMENT_DATA, organization: true },
  M4SCO_PERSON_BANK: { columns: PAYMENT_COLUMNS.M4SCO_PERSON_BANK, organization: false },
  M4SCO_HT_PAYS: {
    columns: [
      "ID_ORGANIZATION",
      "SCO_DT_ACCRUED",
      "SCO_NM_PAYESP",
      "SCO_NM_PAYENG",
      "SCO_DT_START",
      "SCO_DATE_END",
    ],
    organization: true,
  },
  M4SCO_AC_HR_PERIOD: {
    columns: [
      "ID_ORGANIZATION",
      "SCO_ID_HR",
      "SCO_OR_HR_PERIOD",
      "SCO_DT_PAYMENT",
      "SCO_DT_ALLOC",
      "SCO_DT_START_SLICE",
      "ID_CURRENCY",
      "SCO_IND_MAIN_CURR",
      "SCO_PAY_FREQ_ALLOC",
      "SCO_PAY_FREQ_PAY",
    ],
    organization: true,
  },
  M4CSP_AC_HR_PERIOD: {
    columns: [
      "ID_ORGANIZATION",
      "SCO_ID_HR",
      "SCO_OR_HR_PERIOD",
      "SCO_DT_PAYMENT",
      "SCO_DT_ALLOC",
      "SCO_DT_START_SLICE",
      "ID_CURRENCY",
      "SCO_PAY_FREQ_ALLOC",
      "SCO_PAY_FREQ_PAY",
    ],
    organization: true,
  },
  M4SCO_ROWS: {
    columns: [
      "ID_ORGANIZATION",
      "SCO_ID_REPORT",
      "SCO_ID_BODY",
      "SCO_ID_ROW",
      "SCO_ORDER",
      "SCO_NM_ROWESP",
      "SCO_RECORDS",
      "SCO_SLICES",
      "ID_T3_PI",
      "ID_PAYROLL_ITEM",
    ],
    organization: true,
  },
  M4SCO_ROW_COL_DEF: {
    columns: [
      "ID_ORGANIZATION",
      "SCO_ID_REPORT",
      "SCO_ID_BODY",
      "SCO_ID_ROW",
      "SCO_ID_COLUMN",
      "SCO_LABELESP",
      "SCO_CONSTANT",
      "SCO_BEF_AFT",
      "SCO_ID_PRT_ITEM",
      "SFR_ID_SOURCE_ITEM",
      "SFR_ID_SOURCE_NODE",
      "ID_COMPONENT_TYPE",
    ],
    organization: true,
  },
  STD_HR_PERIOD: {
    columns: [
      "ID_ORGANIZATION",
      "STD_ID_HR",
      "STD_OR_HR_PERIOD",
      "SSP_NUM_MATRICULA",
      "SSP_FEC_ANTIGUEDAD",
    ],
    organization: true,
  },
  STD_EMAIL: {
    columns: [
      "STD_ID_PERSON",
      "STD_OR_MAIL",
      "STD_DT_START",
      "STD_DT_END",
      "STD_EMAIL",
      "STD_ID_LOCAT_TYPE",
    ],
    organization: false,
  },
};

const loadEnv = () => {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      // El fichero es opcional: las variables pueden venir del entorno.
    }
  }
};

const verifySql = async () => {
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  try {
    for (const [table, contract] of Object.entries(SQL_CONTRACTS)) {
      const statement = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = @table`;
      assertReadOnlySql(statement);
      const columns = await pool
        .request()
        .input("table", sql.NVarChar(128), table)
        .query<{ COLUMN_NAME: string }>(statement);
      const present = new Set(columns.recordset.map((row) => row.COLUMN_NAME.toUpperCase()));
      const missing = contract.columns.filter((column) => !present.has(column.toUpperCase()));
      console.log(
        `${table}: ${present.size === 0 ? "tabla no encontrada" : `${contract.columns.length - missing.length}/${contract.columns.length} columnas`}`,
      );
      if (missing.length > 0) console.log(`  faltan: ${missing.join(", ")}`);
      if (missing.length > 0) process.exitCode = 1;
      if (!present.has("ID_ORGANIZATION") || !contract.organization) continue;
      // El nombre de tabla procede de la constante anterior, nunca de la entrada.
      const counts = `SELECT ID_ORGANIZATION, COUNT(*) AS TOTAL FROM ${table} GROUP BY ID_ORGANIZATION`;
      assertReadOnlySql(counts);
      const result = await pool.request().query<{ ID_ORGANIZATION: string; TOTAL: number }>(counts);
      for (const society of META4_SOCIETIES) {
        const row = result.recordset.find(
          (candidate) => candidate.ID_ORGANIZATION?.trim() === society,
        );
        console.log(`  ${society}: ${row ? `${row.TOTAL} registros` : "sin registros"}`);
      }
      if (
        table === "M4ORO_EMPLEADOS" &&
        ["ID_EMPLEADO", "CLAVE_SELF"].every((column) => present.has(column))
      ) {
        const duplicates = `WITH identities AS (
SELECT ID_ORGANIZATION, ID_EMPLEADO, COUNT(*) AS TOTAL,
  COUNT(DISTINCT COALESCE(LOWER(LTRIM(RTRIM(CLAVE_SELF))), '')) AS USERS
FROM M4ORO_EMPLEADOS GROUP BY ID_ORGANIZATION, ID_EMPLEADO
)
SELECT ID_ORGANIZATION, COUNT(*) AS PEOPLE,
  SUM(CASE WHEN TOTAL > 1 THEN 1 ELSE 0 END) AS REPEATED,
  SUM(CASE WHEN USERS > 1 THEN 1 ELSE 0 END) AS CONFLICTING
FROM identities GROUP BY ID_ORGANIZATION`;
        assertReadOnlySql(duplicates);
        const aggregate = await pool.request().query<{
          ID_ORGANIZATION: string;
          PEOPLE: number;
          REPEATED: number;
          CONFLICTING: number;
        }>(duplicates);
        for (const society of META4_SOCIETIES) {
          const row = aggregate.recordset.find(
            (entry) => entry.ID_ORGANIZATION?.trim() === society,
          );
          if (row)
            console.log(
              `  ${society}: ${row.PEOPLE} matrículas, ${row.REPEATED} repetidas, ${row.CONFLICTING} con usuarios contradictorios`,
            );
        }
      }
    }
  } finally {
    await pool.close();
  }
};

const verifySoap = async () => {
  const base = getMeta4BaseUrl();
  for (const [service, contract] of Object.entries(SOAP_CATALOG)) {
    try {
      const response = await fetch(`${base}/services/${service}?wsdl`, {
        signal: AbortSignal.timeout(15_000),
      });
      const body = response.ok ? await response.text() : "";
      const published = response.ok && body.includes("definitions");
      console.log(
        `${service}: HTTP ${response.status}${published ? " · WSDL publicado" : " · no publicado"}`,
      );
      const issues = published ? inspectPortalWsdl(contract, body) : ["WSDL no disponible"];
      if (issues.length > 0) process.exitCode = 1;
      for (const issue of issues) console.log(`  ${issue}`);
    } catch (error) {
      console.log(`${service}: sin respuesta (${error instanceof Error ? error.name : "error"})`);
      process.exitCode = 1;
    }
  }
};

const main = async () => {
  loadEnv();
  const target = process.argv[2] ?? "todo";
  if (!["todo", "sql", "soap"].includes(target)) {
    throw new Error("Uso: npm run portal:verify -- [todo|sql|soap]");
  }
  const results = await Promise.allSettled([
    ...(target !== "soap" ? [verifySql()] : []),
    ...(target !== "sql" ? [verifySoap()] : []),
  ]);
  for (const result of results)
    if (result.status === "rejected") {
      console.error(
        `Verificación no completada (${result.reason instanceof Error ? result.reason.name : "error"}). Revisa la configuración y conexión en la VM.`,
      );
      process.exitCode = 1;
    }
};

main().catch((error: unknown) => {
  console.error(`Verificación no completada (${error instanceof Error ? error.name : "error"}).`);
  process.exitCode = 1;
});
