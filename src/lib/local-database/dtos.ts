import type { CompanyId, Company, WorkspaceData } from "../../types/workspace";
import type { AuthView } from "../../types/session";

import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/server/database/version";

export type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; errorCode: string; message: string };

export type { AuthView } from "../../types/session";

export type WorkspaceSnapshot = {
  companies: Company[];
  activeCompanyId: CompanyId | null;
  workspaces: Partial<Record<CompanyId, WorkspaceData>>;
  auth: AuthView | null;
  backupVersion: typeof BACKUP_VERSION;
  databaseSchemaVersion: typeof DATABASE_SCHEMA_VERSION;
  appVersion: string;
};
