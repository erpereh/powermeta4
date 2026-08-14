import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { CompanyId } from "@/types/workspace";

const databases: DatabaseSync[] = [];

const testDpapiAdapter: DpapiAdapter = {
  protectSecret: async (value) => `encrypted:${value}`,
  unprotectSecret: async (value) => value.replace(/^encrypted:/, ""),
};

const insertCompany = (database: DatabaseSync, id: string, name: string): CompanyId => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO companies (id, name, short_name, icon, color, society_code, created_at, updated_at) VALUES (?, ?, ?, 'building', 'blue', NULL, ?, ?)",
    )
    .run(id, name, name, timestamp, timestamp);
  return id;
};

const createRepository = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  const { company } = bootstrapDatabase(database);
  databases.push(database);
  return {
    database,
    companyId: company.id as CompanyId,
    repository: createAiProviderConfigRepository(database, testDpapiAdapter),
  };
};

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

describe("AI provider config repository", () => {
  it("creates and lists only a safe view of configs for the owning company", async () => {
    const { database, companyId, repository } = createRepository();
    const otherCompanyId = insertCompany(database, "company-other", "Otra empresa");

    const created = await repository.create(companyId, {
      name: "Servidor local",
      baseUrl: "https://api.example.com/v1",
      apiKey: "sk-secret-value",
    });

    expect(created).toMatchObject({
      name: "Servidor local",
      baseUrl: "https://api.example.com/v1",
      hasApiKey: true,
    });
    expect(JSON.stringify(created)).not.toContain("sk-secret-value");
    expect(
      database
        .prepare("SELECT api_key_encrypted FROM ai_provider_configs WHERE id = ?")
        .get(created.id),
    ).toEqual({ api_key_encrypted: "encrypted:sk-secret-value" });
    expect(repository.list(otherCompanyId)).toEqual([]);
  });

  it("deletes only configs owned by the active company", async () => {
    const { database, companyId, repository } = createRepository();
    const otherCompanyId = insertCompany(database, "company-other", "Otra empresa");
    const created = await repository.create(companyId, {
      name: "Servidor local",
      baseUrl: "http://localhost:11434/v1",
      apiKey: "local-key",
    });

    await expect(repository.delete(otherCompanyId, created.id)).rejects.toThrow(/no pertenece/);
    expect(repository.list(companyId)).toHaveLength(1);

    await repository.delete(companyId, created.id);
    expect(repository.list(companyId)).toEqual([]);
  });
});
