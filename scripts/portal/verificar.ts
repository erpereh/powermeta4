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
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";

/** Tablas y columnas que leen las pantallas con contrato SQL. */
const SQL_CONTRACTS: Readonly<
  Record<string, { columns: readonly string[]; organization: boolean }>
> = {
  M4ORO_EMPLEADOS: { columns: ORO_PORTAL_COLUMNS, organization: true },
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
      if (present.size === 0 || !contract.organization) continue;
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
    }
  } finally {
    await pool.close();
  }
};

const verifySoap = async () => {
  const base = getMeta4BaseUrl();
  for (const service of Object.keys(SOAP_CATALOG)) {
    try {
      const response = await fetch(`${base}/services/${service}?wsdl`, {
        signal: AbortSignal.timeout(15_000),
      });
      const body = response.ok ? await response.text() : "";
      const published = response.ok && body.includes("definitions");
      console.log(
        `${service}: HTTP ${response.status}${published ? " · WSDL publicado" : " · no publicado"}`,
      );
    } catch (error) {
      console.log(`${service}: sin respuesta (${error instanceof Error ? error.name : "error"})`);
    }
  }
};

const main = async () => {
  loadEnv();
  const target = process.argv[2] ?? "todo";
  if (!["todo", "sql", "soap"].includes(target)) {
    throw new Error("Uso: npm run portal:verify -- [todo|sql|soap]");
  }
  if (target !== "soap") await verifySql();
  if (target !== "sql") await verifySoap();
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
