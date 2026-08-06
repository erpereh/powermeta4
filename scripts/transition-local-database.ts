import { DatabaseSync } from "node:sqlite";
import { existsSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";

import { resolveLocalDataPaths } from "../src/server/database/paths";

const functionalTables = [
  "companies",
  "conversations",
  "messages",
  "attachments",
  "app_settings",
  "workspace_settings",
  "tool_activity",
  "soap_sessions",
  "local_browser_sessions",
  "pending_backup_imports",
];

const tableNames = (database: DatabaseSync): Set<string> =>
  new Set(
    (
      database.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all() as Array<{
        name: string;
      }>
    ).map((row) => row.name),
  );

const countRows = (database: DatabaseSync, table: string): number => {
  const row = database.prepare(`SELECT COUNT(*) AS count FROM "${table}"`).get() as {
    count: number;
  };
  return row.count;
};

const isKnownEmptyPrismaDatabase = (database: DatabaseSync): boolean => {
  const tables = tableNames(database);
  if (!tables.has("_prisma_migrations")) return false;
  const knownTables = new Set(["_prisma_migrations", ...functionalTables]);
  for (const table of tables) if (!knownTables.has(table)) return false;
  let seedCompanyId: string | null = null;
  for (const table of functionalTables) {
    if (!tables.has(table)) continue;
    const count = countRows(database, table);
    if (table === "companies" && count === 1) {
      const company = database
        .prepare("SELECT id, name, shortName, icon, color FROM companies LIMIT 1")
        .get() as {
        id?: string;
        name?: string;
        shortName?: string;
        icon?: string;
        color?: string;
      };
      if (
        company.name === "Empresa local" &&
        company.shortName === "Local" &&
        company.icon === "building" &&
        company.color === "blue"
      ) {
        seedCompanyId = company.id ?? null;
        continue;
      }
    }
    if (table === "app_settings" && count === 1 && seedCompanyId) {
      const setting = database.prepare("SELECT key, valueJson FROM app_settings LIMIT 1").get() as {
        key?: string;
        valueJson?: string;
      };
      let activeCompanyId: unknown = null;
      try {
        activeCompanyId = setting.valueJson ? JSON.parse(setting.valueJson) : null;
      } catch {
        return false;
      }
      if (setting.key === "activeCompanyId" && activeCompanyId === seedCompanyId) continue;
    }
    if (count !== 0) return false;
  }
  return true;
};

const directoryIsEmpty = (directory: string): boolean => {
  try {
    return readdirSync(directory).length === 0;
  } catch {
    return true;
  }
};

export const transitionLegacyDatabase = async (
  dataDir?: string,
  cwd = process.cwd(),
): Promise<void> => {
  const paths = resolveLocalDataPaths(dataDir, cwd);
  await mkdir(paths.rootDir, { recursive: true });
  await mkdir(paths.uploadsDir, { recursive: true });
  await mkdir(paths.backupsDir, { recursive: true });
  await mkdir(paths.tempDir, { recursive: true });

  if (existsSync(paths.transitionMarkerPath)) return;
  if (!existsSync(paths.databaseFilePath)) {
    writeFileSync(paths.transitionMarkerPath, `${new Date().toISOString()}\n`, { flag: "wx" });
    return;
  }
  if (statSync(paths.databaseFilePath).size === 0) {
    writeFileSync(paths.transitionMarkerPath, `${new Date().toISOString()}\n`, { flag: "wx" });
    return;
  }
  if (!directoryIsEmpty(paths.uploadsDir)) {
    throw new Error("No se puede reemplazar una base antigua con uploads existentes.");
  }

  const database = new DatabaseSync(paths.databaseFilePath, {
    readOnly: true,
    enableForeignKeyConstraints: false,
    allowExtension: false,
  });
  let canDelete = false;
  try {
    const tables = tableNames(database);
    const isNodeSqliteDatabase =
      tables.has("schema_migrations") && !tables.has("_prisma_migrations");
    if (isNodeSqliteDatabase) {
      canDelete = false;
    } else {
      canDelete = isKnownEmptyPrismaDatabase(database);
    }
  } finally {
    database.close();
  }

  if (canDelete) {
    for (const filename of [
      paths.databaseFilePath,
      `${paths.databaseFilePath}-wal`,
      `${paths.databaseFilePath}-shm`,
    ]) {
      rmSync(filename, { force: true });
    }
  } else {
    const reopened = new DatabaseSync(paths.databaseFilePath, {
      readOnly: true,
      allowExtension: false,
    });
    try {
      const tables = tableNames(reopened);
      if (!tables.has("schema_migrations") || tables.has("_prisma_migrations")) {
        throw new Error("La base local existente contiene datos o un esquema no reconocido.");
      }
    } finally {
      reopened.close();
    }
  }
  writeFileSync(paths.transitionMarkerPath, `${new Date().toISOString()}\n`, { flag: "wx" });
};

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  transitionLegacyDatabase().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
