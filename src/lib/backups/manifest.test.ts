import { describe, expect, it } from "vitest";

import { parseBackupManifest } from "@/lib/backups/manifest";

describe("backup manifest compatibility", () => {
  it("treats appVersion as informative when the supported versions match", () => {
    expect(
      parseBackupManifest({
        backupVersion: 1,
        databaseSchemaVersion: 1,
        appVersion: "0.0.1-from-another-machine",
        createdAt: "2026-08-05T00:00:00.000Z",
        databaseFile: "database.sqlite",
        snapshotFile: "workspace.json",
      }),
    ).toMatchObject({
      backupVersion: 1,
      databaseSchemaVersion: 1,
      appVersion: "0.0.1-from-another-machine",
    });
  });

  it("requires exact backup and database schema versions", () => {
    const manifest = {
      backupVersion: 1,
      databaseSchemaVersion: 1,
      appVersion: "0.1.0",
      createdAt: "2026-08-05T00:00:00.000Z",
      databaseFile: "database.sqlite",
      snapshotFile: "workspace.json",
    };

    expect(() => parseBackupManifest({ ...manifest, backupVersion: 2 })).toThrow(/backup/);
    expect(() => parseBackupManifest({ ...manifest, databaseSchemaVersion: 2 })).toThrow(
      /base de datos/,
    );
  });
});
