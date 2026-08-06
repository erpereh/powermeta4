import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { getDatabase } from "@/server/database/client";
import { withTransaction } from "@/server/database/transaction";

export const GLOBAL_SOAP_SESSION_ID = "global";

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
  expiresAt: Date;
};

const toDate = (value: unknown): Date | null => {
  if (typeof value !== "string") return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
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
  updateJSessionId: (encryptedJSessionId: string, lastValidatedAt: Date) => Promise<void>;
  clearAuthState: () => Promise<void>;
  createLocalBrowserSession: (data: LocalBrowserSessionData) => Promise<void>;
  getLocalBrowserSession: (cookieHash: string) => Promise<{
    id: string;
    username: string;
    cookieHash: string;
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
        const timestamp = new Date().toISOString();
        database.exec("DELETE FROM soap_sessions; DELETE FROM local_browser_sessions;");
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
      }),
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
        database.exec("DELETE FROM soap_sessions; DELETE FROM local_browser_sessions;"),
      );
    }),
  createLocalBrowserSession: async (data) =>
    withRepositoryWrite(async () => {
      const timestamp = new Date().toISOString();
      database
        .prepare(
          "INSERT INTO local_browser_sessions (id, cookie_hash, username, created_at, last_seen_at, expires_at, revoked_at) VALUES (?, ?, ?, ?, ?, ?, NULL)",
        )
        .run(
          data.id,
          data.cookieHash,
          data.username,
          timestamp,
          timestamp,
          data.expiresAt.toISOString(),
        );
    }),
  getLocalBrowserSession: async (cookieHash) => {
    const row = database
      .prepare(
        "SELECT id, cookie_hash, username, expires_at, revoked_at, last_seen_at FROM local_browser_sessions WHERE cookie_hash = ?",
      )
      .get(cookieHash);
    if (!row) return null;
    const expiresAt = toDate(row.expires_at);
    const lastSeenAt = toDate(row.last_seen_at);
    if (!expiresAt || !lastSeenAt) return null;
    return {
      id: String(row.id),
      username: String(row.username),
      cookieHash: String(row.cookie_hash),
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
