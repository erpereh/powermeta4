import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import {
  isUsableAiProviderConfig,
  type AiProviderConfigInput,
  type AiProviderConfigUpdate,
  type AiProviderConfigView,
} from "@/types/ai-provider-config";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

type ConfigRow = {
  id: string;
  company_id: string;
  name: string;
  base_url: string;
  model: string | null;
  api_key_encrypted: string | null;
  created_at: string;
  updated_at: string;
};

export type AiProviderRuntimeConfig = {
  id: string;
  name: string;
  baseUrl: string;
  model: string;
  apiKey: string;
};

const now = () => new Date().toISOString();

const ensureCompany = (database: DatabaseSync, companyId: CompanyId): void => {
  if (!database.prepare("SELECT 1 FROM companies WHERE id = ?").get(companyId)) {
    throw new Error("La configuración no pertenece a una empresa válida.");
  }
};

const mapView = (row: ConfigRow): AiProviderConfigView => ({
  id: row.id,
  name: row.name,
  baseUrl: row.base_url,
  model: typeof row.model === "string" && row.model.trim() ? row.model.trim() : null,
  hasApiKey: typeof row.api_key_encrypted === "string" && row.api_key_encrypted.length > 0,
});

const getRow = (database: DatabaseSync, companyId: CompanyId, id: string): ConfigRow => {
  const row = database
    .prepare(
      "SELECT id, company_id, name, base_url, model, api_key_encrypted, created_at, updated_at FROM ai_provider_configs WHERE id = ? AND company_id = ?",
    )
    .get(id, companyId) as ConfigRow | undefined;
  if (!row) throw new Error("La configuración no pertenece a la empresa activa.");
  return row;
};

export const createAiProviderConfigRepository = (
  database: DatabaseSync = getDatabase(),
  dpapi: DpapiAdapter,
) => {
  const get = (companyId: CompanyId, id: string): AiProviderConfigView => {
    ensureCompany(database, companyId);
    return mapView(getRow(database, companyId, id));
  };

  const list = (companyId: CompanyId): AiProviderConfigView[] => {
    ensureCompany(database, companyId);
    return (
      database
        .prepare(
          "SELECT id, company_id, name, base_url, model, api_key_encrypted, created_at, updated_at FROM ai_provider_configs WHERE company_id = ? ORDER BY created_at DESC, id DESC",
        )
        .all(companyId) as ConfigRow[]
    ).map(mapView);
  };

  const listUsable = (companyId: CompanyId): AiProviderConfigView[] =>
    list(companyId).filter(isUsableAiProviderConfig);

  const create = async (
    companyId: CompanyId,
    input: AiProviderConfigInput,
  ): Promise<AiProviderConfigView> =>
    withRepositoryWrite(async () => {
      ensureCompany(database, companyId);
      const encryptedApiKey = await dpapi.protectSecret(input.apiKey);
      return withTransaction(database, () => {
        const id = crypto.randomUUID();
        const timestamp = now();
        database
          .prepare(
            "INSERT INTO ai_provider_configs (id, company_id, name, base_url, model, api_key_encrypted, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            id,
            companyId,
            input.name,
            input.baseUrl,
            input.model.trim(),
            encryptedApiKey,
            timestamp,
            timestamp,
          );
        return get(companyId, id);
      });
    });

  const update = async (
    companyId: CompanyId,
    id: string,
    input: AiProviderConfigUpdate,
  ): Promise<AiProviderConfigView> =>
    withRepositoryWrite(async () => {
      ensureCompany(database, companyId);
      const existing = getRow(database, companyId, id);
      const encryptedApiKey = input.apiKey
        ? await dpapi.protectSecret(input.apiKey)
        : existing.api_key_encrypted;
      return withTransaction(database, () => {
        database
          .prepare(
            "UPDATE ai_provider_configs SET name = ?, base_url = ?, model = ?, api_key_encrypted = ?, updated_at = ? WHERE id = ? AND company_id = ?",
          )
          .run(
            input.name,
            input.baseUrl,
            input.model.trim(),
            encryptedApiKey,
            now(),
            id,
            companyId,
          );
        return get(companyId, id);
      });
    });

  const resolveRuntime = async (
    companyId: CompanyId,
    id: string,
  ): Promise<AiProviderRuntimeConfig> => {
    ensureCompany(database, companyId);
    const row = getRow(database, companyId, id);
    const view = mapView(row);
    if (!isUsableAiProviderConfig(view)) {
      throw new Error("La configuración de IA no está completa.");
    }
    if (!row.api_key_encrypted) {
      throw new Error("La configuración de IA no está completa.");
    }
    const apiKey = await dpapi.unprotectSecret(row.api_key_encrypted);
    const model = view.model;
    if (!model) throw new Error("La configuración de IA no está completa.");
    return {
      id: row.id,
      name: row.name,
      baseUrl: row.base_url,
      model,
      apiKey,
    };
  };

  const readApiKey = async (companyId: CompanyId, id: string): Promise<string> => {
    ensureCompany(database, companyId);
    const row = getRow(database, companyId, id);
    if (!row.api_key_encrypted) {
      throw new Error("La configuración de IA no está completa.");
    }
    return dpapi.unprotectSecret(row.api_key_encrypted);
  };

  const remove = async (companyId: CompanyId, id: string): Promise<void> =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        ensureCompany(database, companyId);
        const result = database
          .prepare("DELETE FROM ai_provider_configs WHERE id = ? AND company_id = ?")
          .run(id, companyId);
        if (Number(result.changes) === 0) {
          throw new Error("La configuración no pertenece a la empresa activa.");
        }
      }),
    );

  return { get, list, listUsable, create, update, resolveRuntime, readApiKey, delete: remove };
};
