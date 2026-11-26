import { resolveRetributivoCompanyId } from "@/features/registro-retributivo/server/company-scope";
import { getDatabase } from "@/server/database/client";
import { createBreakdownRepository } from "@/server/database/repositories/retributive-breakdown-repository";
import { DATABASE_SCHEMA_VERSION } from "@/server/database/version";
import type { CompanyId } from "@/types/workspace";

import { BREAKDOWN_NO_CACHE, failure, withBreakdownSession } from "../request";

export function historyJson(data: unknown, status = 200) {
  return Response.json(data, { status, headers: BREAKDOWN_NO_CACHE });
}

export function analysisNotFound() {
  return failure("El análisis ya no está disponible en este espacio.", 404);
}

export function withBreakdownHistory(
  error: string,
  run: (
    repository: ReturnType<typeof createBreakdownRepository>,
    companyId: CompanyId,
  ) => Promise<Response>,
) {
  return withBreakdownSession(error, async (session) => {
    const database = getDatabase();
    const version = database.prepare("PRAGMA user_version").get()?.user_version;
    if (typeof version === "number" && version < DATABASE_SCHEMA_VERSION) {
      return failure("La base local debe actualizarse para usar el Desglose Retributivo.", 503);
    }
    const companyId = resolveRetributivoCompanyId(session.authContext, database);
    return run(createBreakdownRepository(database), companyId);
  });
}
