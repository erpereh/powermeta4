import "server-only";

import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";

import type { Company } from "@/types/workspace";

import { INITIAL_LOCAL_COMPANY_NAME, INITIAL_LOCAL_COMPANY_SHORT_NAME } from "./constants";
import { withTransaction } from "./transaction";

const now = () => new Date().toISOString();

const mapCompany = (row: Record<string, unknown>): Company => ({
  id: String(row.id),
  name: String(row.name),
  shortName: String(row.short_name),
  icon: row.icon === "briefcase" || row.icon === "layers" ? row.icon : "building",
  color: row.color === "purple" || row.color === "green" ? row.color : "blue",
});

export const bootstrapDatabase = (database: DatabaseSync): { created: boolean; company: Company } =>
  withTransaction(database, () => {
    const existing = database
      .prepare(
        "SELECT id, name, short_name, icon, color FROM companies ORDER BY created_at ASC, id ASC LIMIT 1",
      )
      .get();
    let company = existing ? mapCompany(existing) : null;
    let created = false;
    if (!company) {
      const timestamp = now();
      const id = randomUUID();
      database
        .prepare(
          "INSERT INTO companies (id, name, short_name, icon, color, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
        )
        .run(
          id,
          INITIAL_LOCAL_COMPANY_NAME,
          INITIAL_LOCAL_COMPANY_SHORT_NAME,
          "building",
          "blue",
          timestamp,
          timestamp,
        );
      company = {
        id,
        name: INITIAL_LOCAL_COMPANY_NAME,
        shortName: INITIAL_LOCAL_COMPANY_SHORT_NAME,
        icon: "building",
        color: "blue",
      };
      created = true;
    }

    const active = database
      .prepare("SELECT value_json FROM app_settings WHERE key = 'activeCompanyId'")
      .get();
    const activeValue =
      active && typeof active.value_json === "string" ? JSON.parse(active.value_json) : null;
    const activeExists =
      typeof activeValue === "string" &&
      Boolean(database.prepare("SELECT 1 FROM companies WHERE id = ?").get(activeValue));
    if (!activeExists) {
      const timestamp = now();
      database
        .prepare(
          "INSERT INTO app_settings (key, value_json, created_at, updated_at) VALUES ('activeCompanyId', ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
        )
        .run(JSON.stringify(company.id), timestamp, timestamp);
    }
    return { created, company };
  });
