import { DatabaseSync } from "node:sqlite";
import { access, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { bootstrapDatabase } from "@/server/database/bootstrap";
import { createDatabase } from "@/server/database/client";
import { runMigrations } from "@/server/database/migrations";
import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/server/database/version";
import { transitionLegacyDatabase } from "../../../scripts/transition-local-database";
import { ensureLocalDataDirectories, resolveLocalDataPaths } from "@/server/database/paths";

const createdDirectories: string[] = [];
const openDatabases: DatabaseSync[] = [];

afterEach(async () => {
  while (openDatabases.length > 0) openDatabases.pop()?.close();
  while (createdDirectories.length > 0) {
    const directory = createdDirectories.pop();
    if (directory) await rm(directory, { recursive: true, force: true });
  }
});

describe("local database setup", () => {
  it("uses node:sqlite migrations and the centralized versions", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-db-test-"));
    createdDirectories.push(dataDir);
    const paths = await ensureLocalDataDirectories(dataDir);
    const database = createDatabase(paths.databaseFilePath);
    openDatabases.push(database);

    runMigrations(database);
    const firstBootstrap = bootstrapDatabase(database);
    const secondBootstrap = bootstrapDatabase(database);

    expect(BACKUP_VERSION).toBe(1);
    expect(DATABASE_SCHEMA_VERSION).toBe(2);
    expect(firstBootstrap.created).toBe(true);
    expect(secondBootstrap.created).toBe(false);
    expect(database.prepare("SELECT COUNT(*) AS count FROM companies").get()?.count).toBe(1);
    expect(database.prepare("SELECT COUNT(*) AS count FROM conversations").get()?.count).toBe(0);
    expect(database.prepare("SELECT COUNT(*) AS count FROM messages").get()?.count).toBe(0);
    expect(
      database.prepare("SELECT value_json FROM app_settings WHERE key = 'activeCompanyId'").get(),
    ).toBeTruthy();
    expect(database.prepare("SELECT COUNT(*) AS count FROM schema_migrations").get()?.count).toBe(
      2,
    );
  });

  it("creates the managed directories and transition marker", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-transition-test-"));
    createdDirectories.push(dataDir);
    const paths = resolveLocalDataPaths(dataDir);
    await ensureLocalDataDirectories(dataDir);
    await transitionLegacyDatabase(dataDir);

    await expect(access(paths.uploadsDir)).resolves.toBeUndefined();
    await expect(access(paths.backupsDir)).resolves.toBeUndefined();
    await expect(access(paths.tempDir)).resolves.toBeUndefined();
    await expect(access(paths.transitionMarkerPath)).resolves.toBeUndefined();
  });

  it("removes only a known empty Prisma database during the one-time transition", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-legacy-test-"));
    createdDirectories.push(dataDir);
    const paths = await ensureLocalDataDirectories(dataDir);
    const legacy = new DatabaseSync(paths.databaseFilePath);
    legacy.exec("CREATE TABLE _prisma_migrations (id TEXT PRIMARY KEY)");
    legacy.close();

    await transitionLegacyDatabase(dataDir);

    await expect(access(paths.databaseFilePath)).rejects.toThrow();
    await expect(access(paths.transitionMarkerPath)).resolves.toBeUndefined();
  });

  it("accepts the known empty seed and its active-company setting", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-seed-test-"));
    createdDirectories.push(dataDir);
    const paths = await ensureLocalDataDirectories(dataDir);
    const legacy = new DatabaseSync(paths.databaseFilePath);
    legacy.exec(
      "CREATE TABLE _prisma_migrations (id TEXT PRIMARY KEY); CREATE TABLE companies (id TEXT PRIMARY KEY, name TEXT, shortName TEXT, icon TEXT, color TEXT); CREATE TABLE app_settings (key TEXT PRIMARY KEY, valueJson TEXT)",
    );
    legacy
      .prepare("INSERT INTO companies (id, name, shortName, icon, color) VALUES (?, ?, ?, ?, ?)")
      .run("seed-company", "Empresa local", "Local", "building", "blue");
    legacy
      .prepare("INSERT INTO app_settings (key, valueJson) VALUES (?, ?)")
      .run("activeCompanyId", JSON.stringify("seed-company"));
    legacy.close();

    await transitionLegacyDatabase(dataDir);

    await expect(access(paths.databaseFilePath)).rejects.toThrow();
    await expect(access(paths.transitionMarkerPath)).resolves.toBeUndefined();
  });

  it("aborts the transition when an existing database is unknown", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-unknown-test-"));
    createdDirectories.push(dataDir);
    const paths = await ensureLocalDataDirectories(dataDir);
    const unknown = new DatabaseSync(paths.databaseFilePath);
    unknown.exec("CREATE TABLE foreign_data (id TEXT PRIMARY KEY)");
    unknown.prepare("INSERT INTO foreign_data (id) VALUES (?)").run("real-data");
    unknown.close();

    await expect(transitionLegacyDatabase(dataDir)).rejects.toThrow(/no reconocido/);
    await expect(access(paths.databaseFilePath)).resolves.toBeUndefined();
    await expect(access(paths.transitionMarkerPath)).rejects.toThrow();
  });

  it("rejects a second transition after the marker exists", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-marker-test-"));
    createdDirectories.push(dataDir);
    const paths = await ensureLocalDataDirectories(dataDir);
    await writeFile(paths.transitionMarkerPath, "already transitioned\n", { flag: "wx" });
    await expect(transitionLegacyDatabase(dataDir)).resolves.toBeUndefined();
    await expect(access(paths.transitionMarkerPath)).resolves.toBeUndefined();
  });
});
