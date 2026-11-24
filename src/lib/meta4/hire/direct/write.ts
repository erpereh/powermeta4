import "server-only";

import sql from "mssql";

import { getPeopleNetWritePool } from "@/lib/peoplenet/client";

import { Meta4HireError } from "../errors";
import type { HireModel, HireModelColumn } from "./model-types";
import type { HirePlan, HireRow, SqlScalar } from "./plan";

const IDENTIFIER = /^[A-Z][A-Z0-9_]*$/;

const identifier = (name: string): string => {
  if (!IDENTIFIER.test(name)) {
    throw new Meta4HireError(
      "META4_HIRE_CONFIG",
      "El modelo del alta tiene un nombre de tabla o columna no válido.",
    );
  }
  return `[${name}]`;
};

/** mssql parameter type for a column of the model. */
const sqlTypeOf = (column: HireModelColumn): sql.ISqlType | (() => sql.ISqlType) => {
  const length = column.length !== undefined && column.length > 0 ? column.length : sql.MAX;
  switch (column.sqlType) {
    case "varchar":
      return sql.VarChar(length);
    case "nvarchar":
      return sql.NVarChar(length);
    case "char":
      return sql.Char(length);
    case "nchar":
      return sql.NChar(length);
    case "text":
      return sql.Text;
    case "ntext":
      return sql.NText;
    case "numeric":
    case "decimal":
      return sql.Numeric(column.precision ?? 18, column.scale ?? 0);
    case "int":
      return sql.Int;
    case "bigint":
      return sql.BigInt;
    case "smallint":
      return sql.SmallInt;
    case "tinyint":
      return sql.TinyInt;
    case "float":
      return sql.Float;
    case "real":
      return sql.Real;
    case "bit":
      return sql.Bit;
    case "date":
      return sql.Date;
    case "smalldatetime":
      return sql.SmallDateTime;
    case "datetime2":
      return sql.DateTime2;
    default:
      return sql.DateTime;
  }
};

const insertRow = async (
  transaction: sql.Transaction,
  model: HireModel,
  row: HireRow,
  extra: Record<string, SqlScalar> = {},
): Promise<void> => {
  const definition = model.tables[row.table];
  if (!definition) {
    throw new Meta4HireError("META4_HIRE_CONFIG", `El alta no puede escribir en ${row.table}.`);
  }
  const values = { ...row.values, ...extra };
  const request = new sql.Request(transaction);
  const names: string[] = [];
  const params: string[] = [];
  definition.columns.forEach((column, index) => {
    if (!Object.hasOwn(values, column.name)) return;
    names.push(identifier(column.name));
    params.push(`@p${index}`);
    request.input(`p${index}`, sqlTypeOf(column), values[column.name] ?? null);
  });
  const unknown = Object.keys(values).filter(
    (name) => !definition.columns.some((c) => c.name === name),
  );
  if (unknown.length > 0) {
    throw new Meta4HireError(
      "META4_HIRE_CONFIG",
      `El alta tiene columnas que ${row.table} no tiene.`,
    );
  }
  await request.query(
    `INSERT INTO ${identifier(row.table)} (${names.join(", ")}) VALUES (${params.join(", ")})`,
  );
};

export type DirectHireTarget = {
  personId: string;
  document: string;
  /** M4CSP_BLOCK_SEQ row the ID was taken from, or null when the ID is not from the counter. */
  counter: { society: string; process: string; sequence: number } | null;
};

/**
 * Inserts one hire in a single SQL Server transaction, as Meta4's SAVE_HIRE
 * does: nothing is left half written. Inside the transaction it checks again,
 * with update locks, that the ID and the document are still free, numbers the
 * audit rows with M4RDC_SEQUENCE and raises M4CSP_BLOCK_SEQ to the ID given.
 */
export const writeDirectHire = async (
  model: HireModel,
  plan: HirePlan,
  target: DirectHireTarget,
): Promise<void> => {
  const pool = await getPeopleNetWritePool();
  const transaction = new sql.Transaction(pool);
  await transaction.begin(sql.ISOLATION_LEVEL.SERIALIZABLE);
  try {
    const check = new sql.Request(transaction);
    check.input("id", sql.VarChar(9), target.personId);
    check.input("doc", sql.VarChar(30), target.document);
    const taken = await check.query<{ total: number }>(
      `SELECT COUNT(*) AS total FROM [STD_PERSON] WITH (UPDLOCK, HOLDLOCK)
WHERE STD_ID_PERSON = @id OR UPPER(REPLACE(REPLACE(STD_SSN, ' ', ''), '-', '')) = @doc`,
    );
    if (Number(taken.recordset[0]?.total ?? 0) > 0) {
      throw new Meta4HireError(
        "META4_HIRE_VALIDATION",
        "El ID o el documento ya existen en PeopleNet: otra alta se ha grabado mientras tanto.",
      );
    }
    for (const row of plan.rows) await insertRow(transaction, model, row);
    if (plan.audit.length > 0) {
      const sequence = await new sql.Request(transaction).query<{ id: number }>(
        "SELECT NEXT VALUE FOR [M4RDC_SEQUENCE] AS id",
      );
      const execution = Number(sequence.recordset[0]?.id);
      if (!Number.isFinite(execution)) {
        throw new Meta4HireError(
          "META4_HIRE_CONFIG",
          "No se ha podido numerar la auditoría del alta.",
        );
      }
      for (const row of plan.audit)
        await insertRow(transaction, model, row, { ID_EXECUTION: execution });
    }
    if (target.counter) {
      const counter = new sql.Request(transaction);
      counter.input("society", sql.VarChar(4), target.counter.society);
      counter.input("process", sql.VarChar(30), target.counter.process);
      counter.input("sequence", sql.Numeric(12, 0), target.counter.sequence);
      await counter.query(
        `UPDATE [M4CSP_BLOCK_SEQ] SET SCO_SEQUENCE = @sequence
WHERE ID_ORGANIZATION = @society AND SCO_ID_PROCESS = @process AND SCO_SEQUENCE < @sequence`,
      );
    }
    await transaction.commit();
  } catch (error) {
    await transaction.rollback().catch(() => undefined);
    throw error;
  }
};
