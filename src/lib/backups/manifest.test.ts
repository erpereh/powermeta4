import { describe, expect, it } from "vitest";

import { parseBackupManifest } from "@/lib/backups/manifest";
import {
  BACKUP_DATABASE_PATH,
  BACKUP_VERSION,
  DATABASE_SCHEMA_VERSION,
} from "@/server/database/version";

describe("backup manifest compatibility", () => {
  it("treats appVersion as informative when the supported versions match", () => {
    expect(
      parseBackupManifest({
        backupVersion: BACKUP_VERSION,
        databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
        appVersion: "0.0.1-from-another-machine",
        createdAt: "2026-08-05T00:00:00.000Z",
        databasePath: BACKUP_DATABASE_PATH,
      }),
    ).toMatchObject({
      backupVersion: BACKUP_VERSION,
      databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
      appVersion: "0.0.1-from-another-machine",
      databasePath: BACKUP_DATABASE_PATH,
    });
  });

  it("requires exact backup and database schema versions", () => {
    const manifest = {
      backupVersion: BACKUP_VERSION,
      databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
      appVersion: "0.1.0",
      createdAt: "2026-08-05T00:00:00.000Z",
      databasePath: BACKUP_DATABASE_PATH,
    };

    expect(() => parseBackupManifest({ ...manifest, backupVersion: BACKUP_VERSION + 1 })).toThrow(
      /backup/,
    );
    expect(() =>
      parseBackupManifest({ ...manifest, databaseSchemaVersion: DATABASE_SCHEMA_VERSION + 1 }),
    ).toThrow(/base de datos/);
    const legacyVersionKey = ["schema", "Version"].join("");
    expect(() =>
      parseBackupManifest({ ...manifest, [legacyVersionKey]: DATABASE_SCHEMA_VERSION }),
    ).toThrow(/manifest/);
  });
});
