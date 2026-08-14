import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type {
  AiProviderConfigInput,
  AiProviderConfigView,
} from "@/types/ai-provider-config";
import type { CompanyId } from "@/types/workspace";

import { getDatabase } from "../client";
import { withTransaction } from "../transaction";

type ConfigRow = {
  id: string;
  company_id: string;
  name: string;
  base_url: string;
  api_key_encrypted: string | null;
  created_at: string;
  updated_at: string;
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
  hasApiKey: typeof row.api_key_encrypted === "string" && row.api_key_encrypted.length > 0,
});

export const createAiProviderConfigRepository = (
  database: DatabaseSync = getDatabase(),
  dpapi: DpapiAdapter,
) => {
  const get = (companyId: CompanyId, id: string): AiProviderConfigView => {
    ensureCompany(database, companyId);
    const row = database
      .prepare(
        "SELECT id, company_id, name, base_url, api_key_encrypted, created_at, updated_at FROM ai_provider_configs WHERE id = ? AND company_id = ?",
      )
      .get(id, companyId) as ConfigRow | undefined;
    if (!row) throw new Error("La configuración no pertenece a la empresa activa.");
    return mapView(row);
  };

  const list = (companyId: CompanyId): AiProviderConfigView[] => {
    ensureCompany(database, companyId);
    return (
      database
        .prepare(
          "SELECT id, company_id, name, base_url, api_key_encrypted, created_at, updated_at FROM ai_provider_configs WHERE company_id = ? ORDER BY created_at DESC, id DESC",
        )
        .all(companyId) as ConfigRow[]
    ).map(mapView);
  };

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
            "INSERT INTO ai_provider_configs (id, company_id, name, base_url, api_key_encrypted, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
          )
          .run(
            id,
            companyId,
            input.name,
            input.baseUrl,
            encryptedApiKey,
            timestamp,
            timestamp,
          );
        return get(companyId, id);
      });
    });

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

  return { list, create, delete: remove };
};
