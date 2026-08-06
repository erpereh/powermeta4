import "server-only";

import type { DatabaseSync } from "node:sqlite";

import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { getDatabase } from "@/server/database/client";

export type PendingImportRecord = {
  id: string;
  importIdHash: string;
  localBrowserSessionHash: string;
  checksum: string;
  relativePath: string;
  expiresAt: Date;
  consumedAt: Date | null;
};

const toDate = (value: unknown): Date | null => {
  if (typeof value !== "string") return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const mapRecord = (row: Record<string, unknown>): PendingImportRecord | null => {
  const expiresAt = toDate(row.expires_at);
  if (!expiresAt) return null;
  return {
    id: String(row.id),
    importIdHash: String(row.import_id_hash),
    localBrowserSessionHash: String(row.local_browser_session_hash),
    checksum: String(row.checksum),
    relativePath: String(row.relative_path),
    expiresAt,
    consumedAt: toDate(row.consumed_at),
  };
};

export const createPendingImportRepository = (database: DatabaseSync = getDatabase()) => ({
  create: async (data: Omit<PendingImportRecord, "id" | "consumedAt">) =>
    withRepositoryWrite(async () => {
      database
        .prepare(
          "INSERT INTO pending_backup_imports (id, import_id_hash, local_browser_session_hash, checksum, relative_path, expires_at, consumed_at, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NULL, ?, ?)",
        )
        .run(
          data.importIdHash,
          data.importIdHash,
          data.localBrowserSessionHash,
          data.checksum,
          data.relativePath,
          data.expiresAt.toISOString(),
          new Date().toISOString(),
          new Date().toISOString(),
        );
    }),
  get: async (importIdHash: string) => {
    const row = database
      .prepare(
        "SELECT id, import_id_hash, local_browser_session_hash, checksum, relative_path, expires_at, consumed_at FROM pending_backup_imports WHERE import_id_hash = ?",
      )
      .get(importIdHash);
    return row ? mapRecord(row) : null;
  },
  consume: async (importIdHash: string, sessionHash: string, now: Date) =>
    withRepositoryWrite(async () => {
      const result = database
        .prepare(
          "UPDATE pending_backup_imports SET consumed_at = ?, updated_at = ? WHERE import_id_hash = ? AND local_browser_session_hash = ? AND consumed_at IS NULL AND expires_at > ?",
        )
        .run(now.toISOString(), now.toISOString(), importIdHash, sessionHash, now.toISOString());
      return Number(result.changes) === 1;
    }),
  delete: async (importIdHash: string) =>
    withRepositoryWrite(async () => {
      database
        .prepare("DELETE FROM pending_backup_imports WHERE import_id_hash = ?")
        .run(importIdHash);
    }),
  deleteExpired: async (now: Date) =>
    withRepositoryWrite(async () => {
      const result = database
        .prepare(
          "DELETE FROM pending_backup_imports WHERE expires_at <= ? OR consumed_at IS NOT NULL",
        )
        .run(now.toISOString());
      return Number(result.changes);
    }),
});
