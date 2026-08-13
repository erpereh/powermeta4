import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { withTransaction } from "@/server/database/transaction";
import { createAuthRepository } from "@/lib/auth/session-repository";

const createMigratedDatabase = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  return database;
};

describe("node:sqlite database kernel", () => {
  it("migrates v1 browser sessions to a constrained auth mode without damaging integrity", () => {
    const database = new DatabaseSync(":memory:");
    const legacyNonce = "A".repeat(43);
    const legacyCookieHash = "legacy-hash";
    const initialMigrationPath = path.join(
      process.cwd(),
      "src",
      "server",
      "database",
      "migrations",
      "001_initial.sql",
    );
    const initialSql = readFileSync(initialMigrationPath, "utf8");

    try {
      database.exec(initialSql);
      database
        .prepare(
          "INSERT INTO schema_migrations (version, name, checksum, applied_at) VALUES (1, '001_initial', ?, ?)",
        )
        .run(
          createHash("sha256").update(initialSql, "utf8").digest("hex"),
          new Date().toISOString(),
        );
      database
        .prepare(
          "INSERT INTO local_browser_sessions (id, cookie_hash, username, created_at, last_seen_at, expires_at, revoked_at) VALUES (?, ?, 'legacy-user', 'now', 'now', '2099-01-01T00:00:00.000Z', NULL)",
        )
        .run(legacyNonce, legacyCookieHash);

      runMigrations(database);

      expect(database.prepare("PRAGMA user_version").get()).toMatchObject({ user_version: 4 });
      expect(database.prepare("SELECT version, name FROM schema_migrations").all()).toEqual([
        { version: 1, name: "001_initial" },
        { version: 2, name: "002_debug_auth_mode" },
        { version: 3, name: "003_meta4_user_profile" },
        { version: 4, name: "004_registro_retributivo" },
      ]);
      const migrated = database
        .prepare(
          "SELECT id, cookie_hash, auth_mode FROM local_browser_sessions WHERE cookie_hash = ?",
        )
        .get(legacyCookieHash) as { id: string; cookie_hash: string; auth_mode: string };
      expect(migrated).toMatchObject({
        cookie_hash: legacyCookieHash,
        auth_mode: "meta4",
      });
      expect(migrated.id).not.toBe(legacyNonce);
      expect(
        database
          .prepare(
            "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'meta4_user_profile'",
          )
          .get(),
      ).toMatchObject({ name: "meta4_user_profile" });
      expect(() =>
        database
          .prepare(
            "INSERT INTO local_browser_sessions (id, cookie_hash, username, created_at, last_seen_at, expires_at, auth_mode) VALUES ('invalid-mode', 'invalid-hash', 'user', 'now', 'now', '2099-01-01T00:00:00.000Z', 'other')",
          )
          .run(),
      ).toThrow();
      expect(database.prepare("PRAGMA integrity_check").get()).toEqual({ integrity_check: "ok" });
      expect(database.prepare("PRAGMA foreign_key_check").all()).toEqual([]);
    } finally {
      database.close();
    }
  });

  it("does not reinterpret a malformed stored auth mode as a Meta4 session", async () => {
    const database = createMigratedDatabase();

    try {
      database.exec("PRAGMA ignore_check_constraints = ON");
      database
        .prepare(
          "INSERT INTO local_browser_sessions (id, cookie_hash, username, auth_mode, created_at, last_seen_at, expires_at, revoked_at) VALUES ('malformed-browser', 'malformed-hash', 'user', 'unexpected', '2026-08-11T00:00:00.000Z', '2026-08-11T00:00:00.000Z', '2099-01-01T00:00:00.000Z', NULL)",
        )
        .run();

      await expect(
        createAuthRepository(database).getLocalBrowserSession("malformed-hash"),
      ).resolves.toBeNull();
    } finally {
      database.close();
    }
  });

  it("keeps SOAP state during a debug-local replacement and removes it on global logout", async () => {
    const database = createMigratedDatabase();
    const timestamp = new Date("2026-08-11T00:00:00.000Z");
    const repository = createAuthRepository(database);

    try {
      database
        .prepare(
          "INSERT INTO soap_sessions (id, username, jsession_id_encrypted, refresh_session_id_encrypted, created_at, updated_at) VALUES ('global', 'meta4-user', 'encrypted-jsession', 'encrypted-refresh', ?, ?)",
        )
        .run(timestamp.toISOString(), timestamp.toISOString());
      database
        .prepare(
          "INSERT INTO local_browser_sessions (id, cookie_hash, username, auth_mode, created_at, last_seen_at, expires_at, revoked_at) VALUES ('old-meta4-browser', 'old-meta4-hash', 'meta4-user', 'meta4', ?, ?, '2026-09-01T00:00:00.000Z', NULL)",
        )
        .run(timestamp.toISOString(), timestamp.toISOString());

      await repository.replaceLocalBrowserSessions({
        id: "debug-browser",
        cookieHash: "debug-hash",
        username: "DEBUG",
        authMode: "debug",
        expiresAt: new Date("2026-09-01T00:00:00.000Z"),
      });

      expect(database.prepare("SELECT COUNT(*) AS count FROM soap_sessions").get()).toEqual({
        count: 1,
      });
      expect(database.prepare("SELECT id, auth_mode FROM local_browser_sessions").all()).toEqual([
        { id: "debug-browser", auth_mode: "debug" },
      ]);

      await repository.clearAuthState();

      expect(database.prepare("SELECT COUNT(*) AS count FROM soap_sessions").get()).toEqual({
        count: 0,
      });
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM local_browser_sessions").get(),
      ).toEqual({ count: 0 });
    } finally {
      database.close();
    }
  });

  it("creates the final schema exactly once and enables the required pragmas", () => {
    const database = createMigratedDatabase();

    try {
      expect(database.prepare("PRAGMA foreign_keys").get()).toMatchObject({ foreign_keys: 1 });
      expect(database.prepare("PRAGMA journal_mode").get()).toBeDefined();
      expect(database.prepare("PRAGMA synchronous").get()).toBeDefined();
      expect(database.prepare("SELECT version, name FROM schema_migrations").all()).toEqual([
        { version: 1, name: "001_initial" },
        { version: 2, name: "002_debug_auth_mode" },
        { version: 3, name: "003_meta4_user_profile" },
        { version: 4, name: "004_registro_retributivo" },
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
        "meta4_user_profile",
        "pending_backup_imports",
        "retributivo_analyses",
        "retributivo_assistant_records",
        "retributivo_settings",
        "retributivo_state",
        "schema_migrations",
        "soap_sessions",
        "tool_activity",
        "workspace_settings",
      ]);

      expect(() => runMigrations(database)).not.toThrow();
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM schema_migrations").get(),
      ).toMatchObject({
        count: 4,
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
    const firstMigrationPath = path.join(directory, "001_test.sql");
    const database = new DatabaseSync(":memory:");
    try {
      writeFileSync(
        firstMigrationPath,
        "CREATE TABLE migration_test (id TEXT PRIMARY KEY); PRAGMA user_version = 1;",
      );
      writeFileSync(
        migrationPath(directory, "002_test.sql"),
        "CREATE TABLE migration_test_v2 (id TEXT PRIMARY KEY); PRAGMA user_version = 2;",
      );
      writeFileSync(
        migrationPath(directory, "003_test.sql"),
        "CREATE TABLE migration_test_v3 (id TEXT PRIMARY KEY); PRAGMA user_version = 3;",
      );
      writeFileSync(
        migrationPath(directory, "004_test.sql"),
        "CREATE TABLE migration_test_v4 (id TEXT PRIMARY KEY); PRAGMA user_version = 4;",
      );
      runMigrations(database, directory);
      writeFileSync(
        firstMigrationPath,
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
      writeFileSync(migrationPath(directory, "002_test.sql"), "CREATE TABLE second (id TEXT);");
      writeFileSync(migrationPath(directory, "003_test.sql"), "CREATE TABLE third (id TEXT);");
      writeFileSync(migrationPath(directory, "004_test.sql"), "CREATE TABLE fourth (id TEXT);");
      runMigrations(database, directory);
      writeFileSync(migrationPath(directory, "002_future.sql"), "CREATE TABLE future (id TEXT);");
      expect(() => runMigrations(database, directory)).toThrow(/versión|migraciones|duplicad/i);
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM schema_migrations").get(),
      ).toMatchObject({
        count: 4,
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
