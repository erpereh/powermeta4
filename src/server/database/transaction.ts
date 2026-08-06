import "server-only";

import type { DatabaseSync } from "node:sqlite";

const activeTransactions = new WeakSet<DatabaseSync>();

const isPromiseLike = (value: unknown): value is PromiseLike<unknown> =>
  typeof value === "object" &&
  value !== null &&
  "then" in value &&
  typeof value.then === "function";

export const withTransaction = <T>(database: DatabaseSync, operation: () => T): T => {
  if (database.isTransaction || activeTransactions.has(database)) {
    throw new Error("Las transacciones anidadas no están permitidas.");
  }

  database.exec("BEGIN IMMEDIATE");
  activeTransactions.add(database);
  try {
    const result = operation();
    if (isPromiseLike(result)) {
      throw new Error("El callback de una transacción debe ser síncrono.");
    }
    database.exec("COMMIT");
    return result;
  } catch (error) {
    if (database.isTransaction) database.exec("ROLLBACK");
    throw error;
  } finally {
    activeTransactions.delete(database);
  }
};
