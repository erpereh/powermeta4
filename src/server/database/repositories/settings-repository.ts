import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

const now = () => new Date().toISOString();

export const createSettingsRepository = (database: DatabaseSync = getDatabase()) => ({
  getApp: <T>(key: string): T | null => {
    const row = database.prepare("SELECT value_json FROM app_settings WHERE key = ?").get(key);
    if (!row || typeof row.value_json !== "string") return null;
    return JSON.parse(row.value_json) as T;
  },
  getWorkspace: <T>(companyId: CompanyId, key: string): T | null => {
    const row = database
      .prepare("SELECT value_json FROM workspace_settings WHERE company_id = ? AND key = ?")
      .get(companyId, key);
    if (!row || typeof row.value_json !== "string") return null;
    return JSON.parse(row.value_json) as T;
  },
  setApp: async (key: string, value: unknown): Promise<void> =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO app_settings (key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
          )
          .run(key, JSON.stringify(value), timestamp, timestamp);
      }),
    ),
  setWorkspace: async (companyId: CompanyId, key: string, value: unknown): Promise<void> =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        const company = database.prepare("SELECT 1 FROM companies WHERE id = ?").get(companyId);
        if (!company) throw new Error("La configuración no pertenece a una empresa válida.");
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO workspace_settings (id, company_id, key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(company_id, key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
          )
          .run(crypto.randomUUID(), companyId, key, JSON.stringify(value), timestamp, timestamp);
      }),
    ),
});
