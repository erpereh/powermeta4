import "server-only";

import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { DatabaseSync } from "node:sqlite";

import { DATABASE_SCHEMA_VERSION } from "./version";
import { withTransaction } from "./transaction";

type DiscoveredMigration = { version: number; name: string; filename: string };
type Migration = DiscoveredMigration & { checksum: string; sql: string };

const defaultMigrationsDirectory = () =>
  path.join(process.cwd(), "src", "server", "database", "migrations");

const discoverMigrations = (directory: string): DiscoveredMigration[] => {
  const migrations = readdirSync(directory)
    .filter((filename) => /^\d+_[a-z0-9_-]+\.sql$/i.test(filename))
    .map((filename) => {
      const match = /^(\d+)_([a-z0-9_-]+)\.sql$/i.exec(filename);
      if (!match) throw new Error(`Nombre de migración inválido: ${filename}`);
      return { version: Number(match[1]), name: filename.slice(0, -4), filename };
    })
    .sort((left, right) => left.version - right.version);

  for (let index = 0; index < migrations.length; index += 1) {
    const migration = migrations[index];
    if (!migration || migration.version !== index + 1) {
      throw new Error("Las migraciones deben tener versiones numéricas consecutivas.");
    }
  }
  if (new Set(migrations.map((migration) => migration.version)).size !== migrations.length) {
    throw new Error("Las migraciones contienen versiones duplicadas.");
  }
  return migrations;
};

const checksumFor = (sql: string): string => createHash("sha256").update(sql, "utf8").digest("hex");

const loadMigrations = (directory: string): Migration[] =>
  discoverMigrations(directory).map((migration) => {
    const sql = readFileSync(path.join(directory, migration.filename), "utf8");
    return { ...migration, sql, checksum: checksumFor(sql) };
  });

const assertMigrationTableHasChecksums = (database: DatabaseSync): void => {
  const columns = database.prepare("PRAGMA table_info(schema_migrations)").all() as Array<{
    name: string;
  }>;
  if (!columns.some((column) => column.name === "checksum")) {
    throw new Error("La tabla schema_migrations carece de huellas de migración verificables.");
  }
};

const readAppliedMigrations = (database: DatabaseSync) =>
  database
    .prepare("SELECT version, name, checksum FROM schema_migrations ORDER BY version")
    .all() as Array<{ version: number; name: string; checksum: string }>;

const assertAppliedMigrationPrefix = (
  applied: Array<{ version: number; name: string; checksum: string }>,
  migrations: Migration[],
) => {
  for (const [index, record] of applied.entries()) {
    if (record.version !== index + 1) {
      throw new Error("La base contiene migraciones omitidas o fuera de orden.");
    }
    const migration = migrations[record.version - 1];
    if (!migration || migration.name !== record.name || migration.checksum !== record.checksum) {
      throw new Error("La base contiene una migración desconocida o modificada.");
    }
  }
};

export const validateMigrationHistory = (
  database: DatabaseSync,
  migrationsDirectory = defaultMigrationsDirectory(),
): void => {
  const migrations = loadMigrations(migrationsDirectory);
  assertMigrationTableHasChecksums(database);
  const applied = readAppliedMigrations(database);
  assertAppliedMigrationPrefix(applied, migrations);
  if (applied.length !== migrations.length || migrations.length !== DATABASE_SCHEMA_VERSION) {
    throw new Error("La base no tiene exactamente las migraciones admitidas.");
  }
};

export const runMigrations = (
  database: DatabaseSync,
  migrationsDirectory = defaultMigrationsDirectory(),
): void => {
  database.exec(
    "CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, checksum TEXT NOT NULL, applied_at TEXT NOT NULL)",
  );
  const migrations = loadMigrations(migrationsDirectory);
  const columns = database.prepare("PRAGMA table_info(schema_migrations)").all() as Array<{
    name: string;
  }>;
  if (!columns.some((column) => column.name === "checksum")) {
    const appliedCount = database
      .prepare("SELECT COUNT(*) AS count FROM schema_migrations")
      .get() as { count: number };
    if (appliedCount.count !== 0) assertMigrationTableHasChecksums(database);
    database.exec("ALTER TABLE schema_migrations ADD COLUMN checksum TEXT NOT NULL DEFAULT ''");
  }
  const applied = readAppliedMigrations(database);
  assertAppliedMigrationPrefix(applied, migrations);
  if (migrations.length !== DATABASE_SCHEMA_VERSION) {
    throw new Error("La versión de esquema centralizada no coincide con las migraciones.");
  }

  for (const migration of migrations.slice(applied.length)) {
    withTransaction(database, () => {
      database.exec(migration.sql);
      database
        .prepare(
          "INSERT INTO schema_migrations (version, name, checksum, applied_at) VALUES (?, ?, ?, ?)",
        )
        .run(migration.version, migration.name, migration.checksum, new Date().toISOString());
    });
  }
};
