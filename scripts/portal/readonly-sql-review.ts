import type { PortalSqlQuery } from "../../src/lib/portal/types";

export type SqlContractReview = {
  tables: string[];
  checkedColumns: number;
  missing: string[];
  unresolved: string[];
};

/** Contraste de nombres físicos, deliberadamente conservador; no es un compilador SQL. */
export function reviewSqlContract(
  query: PortalSqlQuery,
  contracts: Record<string, Record<string, unknown>[]>,
): SqlContractReview {
  const text = query.statement
    .replace(/'(?:''|[^'])*'|--[^\r\n]*|\/\*[\s\S]*?\*\//g, " ")
    .replaceAll("[", "")
    .replaceAll("]", "");
  const missing = new Set<string>();
  const unresolved = new Set<string>();
  const aliases = new Map<string, Set<string>>();
  const tables = new Set<string>();
  const reserved =
    /^(?:WHERE|ON|JOIN|LEFT|RIGHT|INNER|OUTER|CROSS|FULL|GROUP|ORDER|UNION|HAVING|WITH|AS|OFFSET|FETCH)$/i;
  const ctes = new Set(
    [...text.matchAll(/(?:\bWITH|,)\s*([A-Z_][\w]*)\s+AS\s*\(/gi)].map((m) => m[1].toUpperCase()),
  );
  for (const match of text.matchAll(
    /\b(?:FROM|JOIN)\s+((?:[A-Z_][\w]*\.)?[A-Z_][\w]*)(?:\s+(?:AS\s+)?([A-Z_][\w]*))?/gi,
  )) {
    const table = (match[1].split(".").at(-1) ?? match[1]).toUpperCase();
    if (ctes.has(table)) {
      unresolved.add(`CTE:${table}`);
      continue;
    }
    tables.add(table);
    if (!contracts[table]) missing.add(`TABLE:${table}`);
    const alias = match[2] && !reserved.test(match[2]) ? match[2].toUpperCase() : table;
    const values = aliases.get(alias) ?? new Set<string>();
    values.add(table);
    aliases.set(alias, values);
  }
  for (const table of query.tables) {
    if (!contracts[table]) missing.add(`TABLE:${table}`);
    if (!tables.has(table)) unresolved.add(`DECLARED_TABLE:${table}`);
  }
  let checkedColumns = 0;
  const seen = new Set<string>();
  for (const match of text.matchAll(/\b([A-Z_][\w]*)\.([A-Z_][\w]*)\b/gi)) {
    const alias = match[1].toUpperCase(),
      column = match[2].toUpperCase();
    const key = `${alias}.${column}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const candidates = aliases.get(alias);
    if (!candidates) {
      if (!/^(?:DBO|SYS)$/i.test(alias)) unresolved.add(`ALIAS:${key}`);
      continue;
    }
    if (candidates.size !== 1) {
      unresolved.add(`AMBIGUOUS:${key}`);
      continue;
    }
    const table = [...candidates][0];
    const columns = contracts[table];
    if (!columns) continue;
    checkedColumns++;
    if (!columns.some((row) => String(row.column ?? row.COLUMN_NAME).toUpperCase() === column))
      missing.add(`COLUMN:${table}.${column}`);
  }
  // No atribuimos a una tabla las columnas sin calificar ni resolvemos subconsultas por conjetura.
  const bare = text
    .replace(/\bAS\s+[A-Z_][\w]*\b/gi, " ")
    .replace(/@[A-Z_][\w]*|\b[A-Z_][\w]*\.[A-Z_][\w]*/gi, " ");
  const knownColumns = new Set(
    [...tables].flatMap((table) =>
      (contracts[table] ?? []).map((row) => String(row.column ?? row.COLUMN_NAME).toUpperCase()),
    ),
  );
  for (const token of bare.match(/\b[A-Z_][\w]*\b/gi) ?? []) {
    if (knownColumns.has(token.toUpperCase())) unresolved.add(`UNQUALIFIED:${token.toUpperCase()}`);
  }
  return {
    tables: [...tables].sort(),
    checkedColumns,
    missing: [...missing].sort(),
    unresolved: [...unresolved].sort(),
  };
}
