import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { orderMeta4Societies, type Meta4Society } from "@/lib/meta4/societies";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";

const ACTIVE_COMPANY_SETTING_KEY = "activeCompanyId";

export type ReconciledMeta4Workspace = {
  society: Meta4Society;
  companyId: string;
  availableSocieties: Meta4Society[];
};

const parseStoredCompanyId = (value: unknown): string | null => {
  if (typeof value !== "string") return null;
  try {
    const parsed: unknown = JSON.parse(value);
    return typeof parsed === "string" && parsed ? parsed : null;
  } catch {
    return typeof value === "string" && value ? value : null;
  }
};

export const readStoredActiveCompanyId = (database: DatabaseSync): string | null => {
  const row = database
    .prepare("SELECT value_json FROM app_settings WHERE key = ?")
    .get(ACTIVE_COMPANY_SETTING_KEY) as { value_json?: unknown } | undefined;
  return parseStoredCompanyId(row?.value_json);
};

export const writeStoredActiveCompanyId = (database: DatabaseSync, companyId: string): void => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO app_settings (key, value_json, created_at, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at",
    )
    .run(ACTIVE_COMPANY_SETTING_KEY, JSON.stringify(companyId), timestamp, timestamp);
};

export const pickPersistedActiveSociety = (
  availableSocieties: readonly Meta4Society[],
  previousSociety: Meta4Society | null,
): Meta4Society | null => {
  const ordered = orderMeta4Societies(availableSocieties);
  if (previousSociety && ordered.includes(previousSociety)) return previousSociety;
  return ordered[0] ?? null;
};

export const reconcileMeta4Workspace = (
  database: DatabaseSync,
  availableSocieties: readonly Meta4Society[],
): ReconciledMeta4Workspace | null => {
  const ordered = orderMeta4Societies(availableSocieties);
  if (ordered.length === 0) return null;

  const companies = createCompanyRepository(database);
  const storedCompanyId = readStoredActiveCompanyId(database);
  const previousSociety = storedCompanyId ? companies.getSocietyCode(storedCompanyId) : null;
  const society = pickPersistedActiveSociety(ordered, previousSociety);
  if (!society) return null;

  const company = companies.ensureSocietyCompanySync(society);
  if (company.id !== storedCompanyId) {
    writeStoredActiveCompanyId(database, company.id);
  }
  return {
    society,
    companyId: company.id,
    availableSocieties: ordered,
  };
};

export const activateMeta4Workspace = (
  database: DatabaseSync,
  society: Meta4Society,
  availableSocieties: readonly Meta4Society[],
): ReconciledMeta4Workspace => {
  const ordered = orderMeta4Societies(availableSocieties);
  if (!ordered.includes(society)) {
    throw new Error("SOCIETY_NOT_ALLOWED");
  }
  const company = createCompanyRepository(database).ensureSocietyCompanySync(society);
  writeStoredActiveCompanyId(database, company.id);
  return {
    society,
    companyId: company.id,
    availableSocieties: ordered,
  };
};
