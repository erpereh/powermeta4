import type { CompanyId, Company, WorkspaceData } from "../../types/workspace";

import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "./server-constants";

export type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; errorCode: string; message: string };

export type SessionView = {
  username: string | null;
  status: "anonymous" | "authenticated";
  lastValidatedAt: string | null;
};

export type WorkspaceSnapshot = {
  companies: Company[];
  activeCompanyId: CompanyId | null;
  workspaces: Record<CompanyId, WorkspaceData>;
  session: SessionView;
  backupVersion: typeof BACKUP_VERSION;
  databaseSchemaVersion: typeof DATABASE_SCHEMA_VERSION;
  appVersion: string;
};
