import { closeDatabase, createDatabase } from "../src/server/database/client";
import { validateMigrationHistory } from "../src/server/database/migrations";

const requiredTables = [
  "schema_migrations",
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
  "idempotency_receipts",
];

const database = createDatabase();
try {
  validateMigrationHistory(database);
  const integrity = database.prepare("PRAGMA integrity_check").get() as { integrity_check: string };
  if (integrity.integrity_check !== "ok") throw new Error("integrity_check no superado.");
  if (database.prepare("PRAGMA foreign_key_check").all().length > 0) {
    throw new Error("foreign_key_check no superado.");
  }
  const tables = new Set(
    (
      database.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all() as Array<{
        name: string;
      }>
    ).map((row) => row.name),
  );
  for (const table of requiredTables)
    if (!tables.has(table)) throw new Error(`Falta la tabla ${table}.`);
} finally {
  closeDatabase();
}
