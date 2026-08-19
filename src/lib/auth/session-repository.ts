import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import type { Meta4Society } from "@/lib/meta4/societies";
import {
  activateMeta4Workspace,
  reconcileMeta4Workspace,
  type ReconciledMeta4Workspace,
} from "@/lib/meta4/workspace-scope";
import { getDatabase } from "@/server/database/client";
import { withTransaction } from "@/server/database/transaction";
import { ensureSocietyCompanyInTransaction } from "@/server/database/repositories/company-repository";
import {
  insertEncryptedMeta4Profile,
  replaceEncryptedMeta4Profiles,
} from "@/server/database/repositories/meta4-user-profile-repository";
import type { AuthMode } from "@/types/session";

export const GLOBAL_SOAP_SESSION_ID = "global";
export const ACTIVE_COMPANY_SETTING_KEY = "activeCompanyId";

export type SoapSessionData = {
  username: string;
  jsessionIdEncrypted: string;
  refreshSessionIdEncrypted: string;
  lastValidatedAt: Date;
};

export type LocalBrowserSessionData = {
  id: string;
  cookieHash: string;
  username: string;
  authMode: AuthMode;
  expiresAt: Date;
};

export type Meta4LoginPersistData = {
  soap: SoapSessionData;
  profiles: Array<{
    username: string;
    society: Meta4Society;
    displayName: string | null;
    profileJsonEncrypted: string;
    lookedUpAt: Date;
  }>;
  browserSession: LocalBrowserSessionData;
};

export type Meta4WorkspacePersistResult = ReconciledMeta4Workspace;

const toDate = (value: unknown): Date | null => {
  if (typeof value !== "string") return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const insertSoapSession = (database: DatabaseSync, data: SoapSessionData): void => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO soap_sessions (id, username, jsession_id_encrypted, refresh_session_id_encrypted, session_id_encrypted, expires_at, last_validated_at, created_at, updated_at) VALUES (?, ?, ?, ?, NULL, NULL, ?, ?, ?)",
    )
    .run(
      GLOBAL_SOAP_SESSION_ID,
      data.username,
      data.jsessionIdEncrypted,
      data.refreshSessionIdEncrypted,
      data.lastValidatedAt.toISOString(),
      timestamp,
      timestamp,
    );
};

const insertLocalBrowserSession = (database: DatabaseSync, data: LocalBrowserSessionData): void => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO local_browser_sessions (id, cookie_hash, username, auth_mode, created_at, last_seen_at, expires_at, revoked_at) VALUES (?, ?, ?, ?, ?, ?, ?, NULL)",
    )
    .run(
      data.id,
      data.cookieHash,
      data.username,
      data.authMode,
      timestamp,
      timestamp,
      data.expiresAt.toISOString(),
    );
};

const applyMatchedCompanies = (
  database: DatabaseSync,
  societies: readonly Meta4Society[],
): ReconciledMeta4Workspace => {
  for (const society of societies) {
    ensureSocietyCompanyInTransaction(database, society);
  }
  const reconciled = reconcileMeta4Workspace(database, societies);
  if (!reconciled) {
    throw new Error("No se ha podido identificar tu sociedad en Meta4.");
  }
  return reconciled;
};

const persistMatchedWorkspaces = (
  database: DatabaseSync,
  profiles: Meta4LoginPersistData["profiles"],
): ReconciledMeta4Workspace => {
  for (const profile of profiles) {
    insertEncryptedMeta4Profile(database, profile);
  }
  return applyMatchedCompanies(
    database,
    profiles.map((profile) => profile.society),
  );
};

export type AuthRepository = {
  getSoapSession: () => Promise<{
    id: string;
    username: string;
    jsessionIdEncrypted: string;
    refreshSessionIdEncrypted: string | null;
    lastValidatedAt: Date | null;
  } | null>;
  replaceAuthState: (data: SoapSessionData) => Promise<void>;
  persistMeta4LoginState: (data: Meta4LoginPersistData) => Promise<Meta4WorkspacePersistResult>;
  persistMeta4ProfileRepair: (data: {
    profiles: Meta4LoginPersistData["profiles"];
  }) => Promise<Meta4WorkspacePersistResult>;
  reconcileActiveWorkspace: (
    availableSocieties: readonly Meta4Society[],
  ) => Promise<Meta4WorkspacePersistResult | null>;
  activateWorkspace: (
    society: Meta4Society,
    availableSocieties: readonly Meta4Society[],
  ) => Promise<Meta4WorkspacePersistResult>;
  updateJSessionId: (encryptedJSessionId: string, lastValidatedAt: Date) => Promise<void>;
  clearAuthState: () => Promise<void>;
  replaceLocalBrowserSessions: (data: LocalBrowserSessionData) => Promise<void>;
  createLocalBrowserSession: (data: LocalBrowserSessionData) => Promise<void>;
  getLocalBrowserSession: (cookieHash: string) => Promise<{
    id: string;
    username: string;
    cookieHash: string;
    authMode: AuthMode;
    expiresAt: Date;
    revokedAt: Date | null;
    lastSeenAt: Date;
  } | null>;
  touchLocalBrowserSession: (id: string, lastSeenAt: Date, expiresAt: Date) => Promise<void>;
  revokeLocalBrowserSession: (id: string) => Promise<void>;
};

export const createAuthRepository = (database: DatabaseSync = getDatabase()): AuthRepository => ({
  getSoapSession: async () => {
    const row = database
      .prepare(
        "SELECT id, username, jsession_id_encrypted, refresh_session_id_encrypted, last_validated_at FROM soap_sessions WHERE id = ?",
      )
      .get(GLOBAL_SOAP_SESSION_ID);
    if (!row) return null;
    return {
      id: String(row.id),
      username: String(row.username),
      jsessionIdEncrypted: String(row.jsession_id_encrypted),
      refreshSessionIdEncrypted:
        typeof row.refresh_session_id_encrypted === "string"
          ? row.refresh_session_id_encrypted
          : null,
      lastValidatedAt: toDate(row.last_validated_at),
    };
  },
  replaceAuthState: async (data) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        // Keep profile cleared with soap/local so a legacy caller cannot leave
        // an orphaned meta4_user_profile. DEBUG never uses this path.
        database.exec(
          "DELETE FROM soap_sessions; DELETE FROM local_browser_sessions; DELETE FROM meta4_user_profile;",
        );
        insertSoapSession(database, data);
      }),
    ),
  persistMeta4LoginState: async (data) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        database.exec(
          "DELETE FROM soap_sessions; DELETE FROM local_browser_sessions; DELETE FROM meta4_user_profile;",
        );
        insertSoapSession(database, data.soap);
        const workspace = persistMatchedWorkspaces(database, data.profiles);
        insertLocalBrowserSession(database, data.browserSession);
        return workspace;
      }),
    ),
  persistMeta4ProfileRepair: async (data) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        replaceEncryptedMeta4Profiles(database, data.profiles);
        return applyMatchedCompanies(
          database,
          data.profiles.map((profile) => profile.society),
        );
      }),
    ),
  reconcileActiveWorkspace: async (availableSocieties) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => reconcileMeta4Workspace(database, availableSocieties)),
    ),
  activateWorkspace: async (society, availableSocieties) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => activateMeta4Workspace(database, society, availableSocieties)),
    ),
  updateJSessionId: async (encryptedJSessionId, lastValidatedAt) =>
    withRepositoryWrite(async () => {
      database
        .prepare(
          "UPDATE soap_sessions SET jsession_id_encrypted = ?, last_validated_at = ?, updated_at = ? WHERE id = ?",
        )
        .run(
          encryptedJSessionId,
          lastValidatedAt.toISOString(),
          new Date().toISOString(),
          GLOBAL_SOAP_SESSION_ID,
        );
    }),
  clearAuthState: async () =>
    withRepositoryWrite(async () => {
      withTransaction(database, () =>
        database.exec(
          "DELETE FROM soap_sessions; DELETE FROM local_browser_sessions; DELETE FROM meta4_user_profile;",
        ),
      );
    }),
  replaceLocalBrowserSessions: async (data) =>
    withRepositoryWrite(async () =>
      withTransaction(database, () => {
        database.exec("DELETE FROM local_browser_sessions;");
        insertLocalBrowserSession(database, data);
      }),
    ),
  createLocalBrowserSession: async (data) =>
    withRepositoryWrite(async () => {
      insertLocalBrowserSession(database, data);
    }),
  getLocalBrowserSession: async (cookieHash) => {
    const row = database
      .prepare(
        "SELECT id, cookie_hash, username, auth_mode, expires_at, revoked_at, last_seen_at FROM local_browser_sessions WHERE cookie_hash = ?",
      )
      .get(cookieHash);
    if (!row) return null;
    const expiresAt = toDate(row.expires_at);
    const lastSeenAt = toDate(row.last_seen_at);
    const authMode = row.auth_mode;
    if (!expiresAt || !lastSeenAt || (authMode !== "meta4" && authMode !== "debug")) return null;
    return {
      id: String(row.id),
      username: String(row.username),
      cookieHash: String(row.cookie_hash),
      authMode,
      expiresAt,
      revokedAt: toDate(row.revoked_at),
      lastSeenAt,
    };
  },
  touchLocalBrowserSession: async (id, lastSeenAt, expiresAt) =>
    withRepositoryWrite(async () => {
      database
        .prepare("UPDATE local_browser_sessions SET last_seen_at = ?, expires_at = ? WHERE id = ?")
        .run(lastSeenAt.toISOString(), expiresAt.toISOString(), id);
    }),
  revokeLocalBrowserSession: async (id) =>
    withRepositoryWrite(async () => {
      database
        .prepare("UPDATE local_browser_sessions SET revoked_at = ? WHERE id = ?")
        .run(new Date().toISOString(), id);
    }),
});
