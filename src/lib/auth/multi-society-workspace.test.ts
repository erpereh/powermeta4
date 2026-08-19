import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { ACTIVE_COMPANY_SETTING_KEY, createAuthRepository } from "@/lib/auth/session-repository";
import { pickPersistedActiveSociety } from "@/lib/meta4/workspace-scope";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";

const databases: DatabaseSync[] = [];

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

const createDatabase = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  bootstrapDatabase(database);
  databases.push(database);
  return database;
};

describe("Meta4 multi-society workspace persistence", () => {
  it("picks the previous society when it remains available, otherwise CYC then IBER then COLL", () => {
    expect(pickPersistedActiveSociety(["IBER", "CYC"], "IBER")).toBe("IBER");
    expect(pickPersistedActiveSociety(["IBER", "COLL"], "CYC")).toBe("IBER");
    expect(pickPersistedActiveSociety(["COLL"], "IBER")).toBe("COLL");
    expect(pickPersistedActiveSociety([], "CYC")).toBeNull();
  });

  it("persists CYC and IBER, restores previous IBER, and rejects activating COLL", async () => {
    const database = createDatabase();
    const companies = createCompanyRepository(database);
    const iber = companies.ensureSocietyCompanySync("IBER");
    const timestamp = new Date().toISOString();
    database
      .prepare(
        "INSERT INTO app_settings (key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
      )
      .run(ACTIVE_COMPANY_SETTING_KEY, JSON.stringify(iber.id), timestamp, timestamp);

    const repository = createAuthRepository(database);
    const persisted = await repository.persistMeta4LoginState({
      soap: {
        username: "user",
        jsessionIdEncrypted: "jsession",
        refreshSessionIdEncrypted: "refresh",
        lastValidatedAt: new Date("2026-08-19T00:00:00.000Z"),
      },
      profiles: [
        {
          username: "user",
          society: "CYC",
          displayName: "User CYC",
          profileJsonEncrypted: "enc-cyc",
          lookedUpAt: new Date("2026-08-19T00:00:00.000Z"),
        },
        {
          username: "user",
          society: "IBER",
          displayName: "User IBER",
          profileJsonEncrypted: "enc-iber",
          lookedUpAt: new Date("2026-08-19T00:00:00.000Z"),
        },
      ],
      browserSession: {
        id: "browser",
        cookieHash: "hash",
        username: "user",
        authMode: "meta4",
        expiresAt: new Date("2099-01-01T00:00:00.000Z"),
      },
    });

    expect(persisted.availableSocieties).toEqual(["CYC", "IBER"]);
    expect(persisted.society).toBe("IBER");
    expect(persisted.companyId).toBe(iber.id);
    expect(
      database.prepare("SELECT society FROM meta4_user_profile ORDER BY society").all(),
    ).toEqual([{ society: "CYC" }, { society: "IBER" }]);

    const switched = await repository.activateWorkspace("CYC", ["CYC", "IBER"]);
    expect(switched.society).toBe("CYC");
    expect(companies.getSocietyCode(switched.companyId)).toBe("CYC");

    const restored = await repository.reconcileActiveWorkspace(["CYC", "IBER"]);
    expect(restored?.society).toBe("CYC");

    await expect(repository.activateWorkspace("COLL", ["CYC", "IBER"])).rejects.toThrow(
      "SOCIETY_NOT_ALLOWED",
    );
  });
});
