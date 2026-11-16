import "server-only";

import sql from "mssql";

import { getPeopleNetPool } from "@/lib/peoplenet/client";

export type PortalSqlParam =
  | { readonly type: "varchar"; readonly length: number; readonly value: string }
  | { readonly type: "nvarchar"; readonly length: number; readonly value: string }
  | { readonly type: "date"; readonly value: Date }
  | { readonly type: "datetime"; readonly value: Date }
  | { readonly type: "int"; readonly value: number };

export type PortalSqlValue = string | number | boolean | Date | null;
export type PortalSqlRow = Record<string, PortalSqlValue>;

export class PortalSqlGuardError extends Error {
  constructor() {
    super("El portal solo ejecuta consultas SELECT en PeopleNet.");
    this.name = "PortalSqlGuardError";
  }
}

export class PortalSqlContractError extends Error {
  constructor(readonly code: 207 | 208) {
    super("El contrato SQL necesita columnas o tablas que no están disponibles.");
    this.name = "PortalSqlContractError";
  }
}

const READ_ONLY = /^\s*(?:SELECT|WITH)\b/i;
const FORBIDDEN =
  /\b(?:INTO|INSERT|UPDATE|DELETE|MERGE|DROP|ALTER|CREATE|EXEC|EXECUTE|TRUNCATE|GRANT|REVOKE|DENY|BULK|OPENROWSET|OPENQUERY|OPENDATASOURCE|DBCC|BACKUP|RESTORE|USE|SET|DECLARE|WAITFOR|RECONFIGURE|SHUTDOWN)\b/i;

const hasMultipleStatements = (statement: string): boolean => {
  const code = statement.replace(/'(?:''|[^'])*'|\[[^\]]*\]|"(?:""|[^"])*"/g, " ");
  let depth = 0;
  let selected = false;
  let union = false;
  for (const match of code.matchAll(/\(|\)|[A-Z_]+/gi)) {
    const token = match[0].toUpperCase();
    if (token === "(") {
      depth++;
      continue;
    }
    if (token === ")") {
      depth--;
      continue;
    }
    if (depth !== 0) continue;
    if (["UNION", "EXCEPT", "INTERSECT"].includes(token)) union = true;
    if (token === "SELECT") {
      if (selected && !union) return true;
      selected = true;
      union = false;
    }
    if (token === "WITH" && selected) return true;
  }
  return depth !== 0;
};

/** Rechaza cualquier sentencia que no sea una lectura (AGENTS.md). */
export const assertReadOnlySql = (statement: string): void => {
  if (
    !READ_ONLY.test(statement) ||
    FORBIDDEN.test(statement) ||
    statement.includes(";") ||
    /--|\/\*|\*\//.test(statement) ||
    /(?:\[[^\]]+\]|[\w]+)\s*\.\s*(?:\[[^\]]+\]|[\w]*)\s*\./.test(statement) ||
    hasMultipleStatements(statement)
  ) {
    throw new PortalSqlGuardError();
  }
};

const bind = (request: sql.Request, name: string, param: PortalSqlParam): void => {
  switch (param.type) {
    case "varchar":
      request.input(name, sql.VarChar(param.length), param.value);
      return;
    case "nvarchar":
      request.input(name, sql.NVarChar(param.length), param.value);
      return;
    case "date":
      request.input(name, sql.Date, param.value);
      return;
    case "datetime":
      request.input(name, sql.DateTime, param.value);
      return;
    case "int":
      request.input(name, sql.Int, param.value);
  }
};

/** `SELECT` parametrizada sobre el pool de solo lectura existente. */
export const runPortalSelect = async <Row extends PortalSqlRow>(
  statement: string,
  params: Readonly<Record<string, PortalSqlParam>> = {},
): Promise<Row[]> => {
  assertReadOnlySql(statement);
  const pool = await getPeopleNetPool();
  const request = pool.request();
  for (const [name, param] of Object.entries(params)) bind(request, name, param);
  try {
    const result = await request.query<Row>(statement);
    return result.recordset;
  } catch (error) {
    if (error instanceof sql.RequestError && (error.number === 207 || error.number === 208))
      throw new PortalSqlContractError(error.number);
    throw error;
  }
};

export const organizationParam = (society: string): PortalSqlParam => ({
  type: "varchar",
  length: 4,
  value: society,
});

export const employeeParam = (employeeId: string): PortalSqlParam => ({
  type: "varchar",
  length: 64,
  value: employeeId,
});

export const sqlText = (value: PortalSqlValue | undefined): string | null => {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const text = String(value).trim();
  return text === "" ? null : text;
};
