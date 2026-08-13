import "server-only";

import type { DatabaseSync } from "node:sqlite";

import type { AuthView } from "@/types/session";
import type { CompanyId } from "@/types/workspace";
import { getDatabase } from "@/server/database/client";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";
import { ACTIVE_COMPANY_SETTING_KEY } from "@/lib/auth/session-repository";

export function resolveRetributivoCompanyId(
  auth: AuthView,
  database: DatabaseSync = getDatabase(),
): CompanyId {
  if (auth.mode === "meta4") {
    if (!auth.societyCode) {
      throw new Error("La sesión Meta4 no tiene sociedad.");
    }
    const company = createCompanyRepository(database).getBySocietyCode(auth.societyCode);
    if (!company) {
      throw new Error("La empresa de la sociedad activa no existe.");
    }
    return company.id;
  }

  const stored = database
    .prepare("SELECT value_json FROM app_settings WHERE key = ?")
    .get(ACTIVE_COMPANY_SETTING_KEY) as { value_json?: unknown } | undefined;
  const parsed =
    typeof stored?.value_json === "string" ? (JSON.parse(stored.value_json) as unknown) : null;
  if (typeof parsed !== "string" || !parsed) {
    throw new Error("No hay una empresa local activa.");
  }
  createCompanyRepository(database).getById(parsed);
  return parsed as CompanyId;
}
