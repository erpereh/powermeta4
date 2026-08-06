import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { withTransaction } from "@/server/database/transaction";

const createMigratedDatabase = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  return database;
};

describe("node:sqlite database kernel", () => {
  it("creates the final schema exactly once and enables the required pragmas", () => {
    const database = createMigratedDatabase();

    try {
      expect(database.prepare("PRAGMA foreign_keys").get()).toMatchObject({ foreign_keys: 1 });
      expect(database.prepare("PRAGMA journal_mode").get()).toBeDefined();
      expect(database.prepare("PRAGMA synchronous").get()).toBeDefined();
      expect(database.prepare("SELECT version, name FROM schema_migrations").all()).toEqual([
        { version: 1, name: "001_initial" },
      ]);

      const tables = database
        .prepare(
          "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name",
        )
        .all()
        .map((row) => row.name);

      expect(tables).toEqual([
        "app_settings",
        "attachments",
        "companies",
        "conversations",
        "idempotency_receipts",
        "local_browser_sessions",
        "messages",
        "pending_backup_imports",
        "schema_migrations",
        "soap_sessions",
        "tool_activity",
        "workspace_settings",
      ]);

      expect(() => runMigrations(database)).not.toThrow();
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM schema_migrations").get(),
      ).toMatchObject({
        count: 1,
      });
    } finally {
      database.close();
    }
  });

  it("rolls back failed work and rejects asynchronous transaction callbacks", () => {
    const database = createMigratedDatabase();

    try {
      expect(() =>
        withTransaction(database, () => {
          database
            .prepare(
              "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            )
            .run("company-rollback", "Rollback", "Rollback", "building", "blue", "now", "now");
          throw new Error("expected rollback");
        }),
      ).toThrow("expected rollback");
      expect(database.prepare("SELECT COUNT(*) AS count FROM companies").get()).toMatchObject({
        count: 0,
      });

      expect(() => withTransaction(database, () => Promise.resolve("not allowed"))).toThrow(
        /síncrono|synchronous/i,
      );
      expect(() => withTransaction(database, () => withTransaction(database, () => null))).toThrow(
        /anidadas|nested/i,
      );
    } finally {
      database.close();
    }
  });

  it("bootstraps only the local company and activeCompanyId", () => {
    const database = createMigratedDatabase();

    try {
      expect(bootstrapDatabase(database)).toMatchObject({
        created: true,
        company: { name: "Empresa local" },
      });
      expect(bootstrapDatabase(database)).toMatchObject({
        created: false,
        company: { name: "Empresa local" },
      });
      expect(database.prepare("SELECT COUNT(*) AS count FROM companies").get()).toMatchObject({
        count: 1,
      });
      expect(database.prepare("SELECT COUNT(*) AS count FROM conversations").get()).toMatchObject({
        count: 0,
      });
      expect(database.prepare("SELECT COUNT(*) AS count FROM messages").get()).toMatchObject({
        count: 0,
      });
      expect(
        database.prepare("SELECT value_json FROM app_settings WHERE key = 'activeCompanyId'").get(),
      ).toMatchObject({
        value_json: expect.any(String),
      });
    } finally {
      database.close();
    }
  });

  it("rejects cross-conversation parents, heads, attachment links and cycles", () => {
    const database = createMigratedDatabase();
    const timestamp = new Date().toISOString();

    try {
      database
        .prepare(
          "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, 'building', 'blue', ?, ?)",
        )
        .run("company-1", "Empresa 1", "E1", timestamp, timestamp);
      database
        .prepare(
          "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, 'building', 'blue', ?, ?)",
        )
        .run("company-2", "Empresa 2", "E2", timestamp, timestamp);
      for (const [id, companyId] of [
        ["conversation-1", "company-1"],
        ["conversation-2", "company-2"],
      ]) {
        database
          .prepare(
            "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES (?, ?, 'Chat', 0, ?, ?)",
          )
          .run(id, companyId, timestamp, timestamp);
      }
      for (const id of ["message-1", "message-2"]) {
        database
          .prepare(
            "INSERT INTO messages (id, conversation_id, role, content_json, status, sequence, created_at, updated_at) VALUES (?, 'conversation-1', 'user', '[]', 'complete', 0, ?, ?)",
          )
          .run(id, timestamp, timestamp);
      }

      expect(() =>
        database
          .prepare(
            "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, sequence, created_at, updated_at) VALUES ('message-cross', 'conversation-2', 'message-1', 'assistant', '[]', 'running', 0, ?, ?)",
          )
          .run(timestamp, timestamp),
      ).toThrow(/same conversation/);
      database
        .prepare("UPDATE messages SET parent_message_id = 'message-2' WHERE id = 'message-1'")
        .run();
      expect(() =>
        database
          .prepare("UPDATE messages SET parent_message_id = 'message-1' WHERE id = 'message-2'")
          .run(),
      ).toThrow(/cycle/);
      expect(() =>
        database
          .prepare(
            "UPDATE conversations SET head_message_id = 'message-1' WHERE id = 'conversation-2'",
          )
          .run(),
      ).toThrow(/same conversation/);
      expect(() =>
        database
          .prepare(
            "INSERT INTO attachments (id, conversation_id, message_id, file_name, mime_type, size_bytes, checksum, relative_path, created_at) VALUES ('attachment-cross', 'conversation-2', 'message-1', 'x.txt', 'text/plain', 1, 'checksum', 'uploads/x.txt', ?)",
          )
          .run(timestamp),
      ).toThrow(/same conversation/);
    } finally {
      database.close();
    }
  });

  it("rejects a modified migration after it has been applied", () => {
    const directory = mkdtempSync(path.join(os.tmpdir(), "powermeta4-migrations-test-"));
    const migrationPath = path.join(directory, "001_test.sql");
    const database = new DatabaseSync(":memory:");
    try {
      writeFileSync(
        migrationPath,
        "CREATE TABLE migration_test (id TEXT PRIMARY KEY); PRAGMA user_version = 1;",
      );
      runMigrations(database, directory);
      writeFileSync(
        migrationPath,
        "CREATE TABLE migration_test (id TEXT PRIMARY KEY, changed TEXT); PRAGMA user_version = 1;",
      );
      expect(() => runMigrations(database, directory)).toThrow(/modificada/);
    } finally {
      database.close();
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("rejects an unsupported migration before applying it", () => {
    const directory = mkdtempSync(path.join(os.tmpdir(), "powermeta4-migrations-version-test-"));
    const database = new DatabaseSync(":memory:");
    try {
      writeFileSync(migrationPath(directory, "001_test.sql"), "CREATE TABLE first (id TEXT);");
      runMigrations(database, directory);
      writeFileSync(migrationPath(directory, "002_future.sql"), "CREATE TABLE future (id TEXT);");
      expect(() => runMigrations(database, directory)).toThrow(/versión|migraciones/i);
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM schema_migrations").get(),
      ).toMatchObject({
        count: 1,
      });
      expect(database.prepare("SELECT name FROM sqlite_master WHERE name = 'future'").get()).toBe(
        undefined,
      );
    } finally {
      database.close();
      rmSync(directory, { recursive: true, force: true });
    }
  });
});

const migrationPath = (directory: string, filename: string): string =>
  path.join(directory, filename);
