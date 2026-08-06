import "server-only";

import { mkdirSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";

import { ensureLocalDataDirectoriesSync, resolveLocalDataPaths } from "./paths";

type DatabaseGlobal = {
  __powermeta4Database?: DatabaseSync;
  __powermeta4DatabasePath?: string;
};

const globalDatabase = globalThis as DatabaseGlobal;

export const createDatabase = (databasePath = resolveLocalDataPaths().databaseFilePath) => {
  if (databasePath !== resolveLocalDataPaths().databaseFilePath) {
    mkdirSync(pathDirectory(databasePath), { recursive: true });
  } else {
    ensureLocalDataDirectoriesSync();
  }
  const database = new DatabaseSync(databasePath, {
    enableForeignKeyConstraints: true,
    allowExtension: false,
    timeout: 5000,
    defensive: true,
  });
  database.exec(
    "PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000; PRAGMA synchronous = NORMAL;",
  );
  const maybeEnableDefensive = database as DatabaseSync & {
    enableDefensive?: (active: boolean) => void;
  };
  if (typeof maybeEnableDefensive.enableDefensive === "function") {
    maybeEnableDefensive.enableDefensive(true);
  }
  database.enableLoadExtension(false);
  return database;
};

const pathDirectory = (databasePath: string): string => {
  const lastSeparator = Math.max(databasePath.lastIndexOf("/"), databasePath.lastIndexOf("\\"));
  return lastSeparator >= 0 ? databasePath.slice(0, lastSeparator) : process.cwd();
};

export const getDatabase = (): DatabaseSync => {
  const databasePath = resolveLocalDataPaths().databaseFilePath;
  if (
    globalDatabase.__powermeta4Database?.isOpen &&
    globalDatabase.__powermeta4DatabasePath === databasePath
  ) {
    return globalDatabase.__powermeta4Database;
  }
  if (globalDatabase.__powermeta4Database?.isOpen) globalDatabase.__powermeta4Database.close();
  globalDatabase.__powermeta4Database = createDatabase(databasePath);
  globalDatabase.__powermeta4DatabasePath = databasePath;
  return globalDatabase.__powermeta4Database;
};

export const closeDatabase = (): void => {
  if (globalDatabase.__powermeta4Database?.isOpen) globalDatabase.__powermeta4Database.close();
  delete globalDatabase.__powermeta4Database;
  delete globalDatabase.__powermeta4DatabasePath;
};

export const resetDatabaseConnection = closeDatabase;
