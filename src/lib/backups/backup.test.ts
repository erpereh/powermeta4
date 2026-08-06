import { writeFile, mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import { Uint8ArrayReader, Uint8ArrayWriter, ZipReader, ZipWriter } from "@zip.js/zip.js";
import { afterEach, describe, expect, it } from "vitest";

import { closeDatabase, getDatabase } from "@/server/database/client";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import {
  BACKUP_DATABASE_PATH,
  BACKUP_VERSION,
  DATABASE_SCHEMA_VERSION,
} from "@/server/database/version";
import { ensureLocalDataDirectories } from "@/server/database/paths";
import { normalizeZipEntryName, validateZipEntries } from "@/lib/backups/zip-safety";
import { resetMaintenanceLockForTests } from "@/lib/backups/maintenance-lock";

const createdDirectories: string[] = [];

afterEach(async () => {
  closeDatabase();
  resetMaintenanceLockForTests();
  delete process.env.POWERMETA4_DATA_DIR;
  while (createdDirectories.length > 0) {
    const directory = createdDirectories.pop();
    if (directory) await rm(directory, { recursive: true, force: true });
  }
});

const createFixture = async () => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-backup-test-"));
  createdDirectories.push(dataDir);
  process.env.POWERMETA4_DATA_DIR = dataDir;
  const paths = await ensureLocalDataDirectories(dataDir);
  const database = getDatabase();
  runMigrations(database);
  bootstrapDatabase(database);
  const company = database.prepare("SELECT id FROM companies LIMIT 1").get() as { id: string };
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES (?, ?, ?, 0, ?, ?)",
    )
    .run("conversation-backup", company.id, "Copia", timestamp, timestamp);
  database
    .prepare(
      "INSERT INTO messages (id, conversation_id, role, content_json, status, sequence, created_at, updated_at) VALUES (?, ?, 'user', ?, 'complete', 0, ?, ?)",
    )
    .run(
      "message-backup",
      "conversation-backup",
      JSON.stringify([{ type: "text", text: "Persistir" }]),
      timestamp,
      timestamp,
    );
  database
    .prepare(
      "INSERT INTO soap_sessions (id, username, jsession_id_encrypted, refresh_session_id_encrypted, created_at, updated_at) VALUES ('global', 'usuario', 'secret', 'secret', ?, ?)",
    )
    .run(timestamp, timestamp);
  await writeFile(path.join(paths.uploadsDir, "hello.txt"), "upload content");
  return { dataDir, paths };
};

describe("backup safety and exact format", () => {
  it("rejects Zip Slip paths, symlinks and configured limits", () => {
    expect(() => normalizeZipEntryName("../outside.txt")).toThrow();
    expect(() => normalizeZipEntryName("C:/outside.txt")).toThrow();
    expect(() => normalizeZipEntryName("uploads/../outside.txt")).toThrow();

    expect(() =>
      validateZipEntries(
        [
          {
            filename: "uploads/link",
            externalFileAttribute: 0xa0000000,
            compressedSize: 1,
            uncompressedSize: 1,
            directory: false,
          },
        ],
        { compressedBytes: 10, uncompressedBytes: 10, entries: 2, singleFileBytes: 10 },
      ),
    ).toThrow(/simbólico/);
  });

  it("exports only the strict manifest, sanitized database, and uploads", async () => {
    await createFixture();
    const { exportBackup } = await import("@/lib/backups/service");
    const exported = await exportBackup();
    const reader = new ZipReader(new Uint8ArrayReader(exported.bytes));
    try {
      const entries = await reader.getEntries();
      const names = entries.map((entry) => entry.filename).sort();
      expect(names).toEqual([
        "database/powermeta4.db",
        "manifest.json",
        "uploads/",
        "uploads/hello.txt",
      ]);
      expect(names).not.toContain("workspace.json");
      const manifestEntry = entries.find((entry) => entry.filename === "manifest.json");
      if (!manifestEntry) throw new Error("manifest missing");
      if (manifestEntry.directory) throw new Error("manifest is a directory");
      const manifest = JSON.parse(
        new TextDecoder().decode(await manifestEntry.getData(new Uint8ArrayWriter())),
      ) as Record<string, unknown>;
      expect(Object.keys(manifest).sort()).toEqual([
        "appVersion",
        "backupVersion",
        "createdAt",
        "databasePath",
        "databaseSchemaVersion",
      ]);
      expect(manifest.databasePath).toBe(BACKUP_DATABASE_PATH);
      expect(manifest.databaseFile).toBeUndefined();
      expect(manifest.snapshotFile).toBeUndefined();
      const databaseEntry = entries.find((entry) => entry.filename === "database/powermeta4.db");
      if (!databaseEntry) throw new Error("database missing");
      if (databaseEntry.directory) throw new Error("database is a directory");
      const temporaryPath = path.join(os.tmpdir(), `powermeta4-export-${crypto.randomUUID()}.db`);
      await writeFile(temporaryPath, await databaseEntry.getData(new Uint8ArrayWriter()));
      const database = new DatabaseSync(temporaryPath, { readOnly: true });
      try {
        expect(database.prepare("SELECT COUNT(*) AS count FROM soap_sessions").get()).toMatchObject(
          { count: 0 },
        );
        expect(database.prepare("SELECT COUNT(*) AS count FROM messages").get()).toMatchObject({
          count: 1,
        });
      } finally {
        database.close();
        await rm(temporaryPath, { force: true });
      }
    } finally {
      await reader.close();
    }
  });

  it("validates and restores uploads once", async () => {
    await createFixture();
    const { exportBackup, restoreBackup, validateBackup } = await import("@/lib/backups/service");
    const exported = await exportBackup();
    const validation = await validateBackup(exported.bytes, "browser-session-hash");
    expect(validation.manifest.databasePath).toBe(BACKUP_DATABASE_PATH);
    await restoreBackup(validation.importId, "browser-session-hash");
    await expect(restoreBackup(validation.importId, "browser-session-hash")).rejects.toThrow();
    const paths = await ensureLocalDataDirectories();
    expect(await readFile(path.join(paths.uploadsDir, "hello.txt"), "utf8")).toBe("upload content");
    const database = getDatabase();
    try {
      expect(database.prepare("SELECT COUNT(*) AS count FROM messages").get()).toMatchObject({
        count: 1,
      });
      expect(database.prepare("SELECT COUNT(*) AS count FROM soap_sessions").get()).toMatchObject({
        count: 0,
      });
      expect(
        database.prepare("SELECT COUNT(*) AS count FROM pending_backup_imports").get(),
      ).toMatchObject({ count: 0 });
    } finally {
      closeDatabase();
    }
  });

  it("rejects a version mismatch before restoring", async () => {
    await createFixture();
    const writer = new Uint8ArrayWriter();
    const zip = new ZipWriter(writer);
    await zip.add(
      "manifest.json",
      new Uint8ArrayReader(
        new TextEncoder().encode(
          JSON.stringify({
            backupVersion: BACKUP_VERSION + 1,
            databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
            appVersion: "0.1.0",
            createdAt: new Date().toISOString(),
            databasePath: BACKUP_DATABASE_PATH,
          }),
        ),
      ),
    );
    await zip.add(BACKUP_DATABASE_PATH, new Uint8ArrayReader(new Uint8Array([1, 2, 3])));
    await zip.add("uploads/", new Uint8ArrayReader(new Uint8Array()));
    await zip.close();
    const { validateBackup } = await import("@/lib/backups/service");
    await expect(validateBackup(await writer.getData(), "browser-session-hash")).rejects.toThrow(
      /backup/,
    );
  });
});
