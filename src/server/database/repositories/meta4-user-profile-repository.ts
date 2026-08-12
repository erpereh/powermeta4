import "server-only";

import type { DatabaseSync } from "node:sqlite";

import type { DpapiAdapter } from "@/lib/security/dpapi";
import { extractDisplayName } from "@/lib/meta4/user-profile-soap";
import type { Meta4UserProfile } from "@/lib/meta4/user-profile-types";
import { isMeta4Society, type Meta4Society } from "@/lib/meta4/societies";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { getDatabase } from "@/server/database/client";
import { withTransaction } from "@/server/database/transaction";

export const GLOBAL_META4_PROFILE_ID = "global";

export type StoredMeta4UserProfile = {
  id: string;
  username: string;
  society: Meta4Society;
  displayName: string | null;
  profileJsonEncrypted: string;
  lookedUpAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type EncryptedMeta4ProfileData = {
  username: string;
  society: Meta4Society;
  displayName: string | null;
  profileJsonEncrypted: string;
  lookedUpAt: Date;
};

const toDate = (value: unknown): Date | null => {
  if (typeof value !== "string") return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const parseProfileJson = (json: string): Meta4UserProfile => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json) as unknown;
  } catch {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "El perfil Meta4 almacenado no es válido.",
    );
  }
  if (typeof parsed !== "object" || parsed === null) {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "El perfil Meta4 almacenado no es válido.",
    );
  }
  const record = parsed as Record<string, unknown>;
  if (!isMeta4Society(record.society)) {
    throw new Meta4ProfileError(
      "META4_PROFILE_INVALID_RESPONSE",
      "El perfil Meta4 almacenado no contiene una sociedad válida.",
    );
  }
  return parsed as Meta4UserProfile;
};

export const insertEncryptedMeta4Profile = (
  database: DatabaseSync,
  data: EncryptedMeta4ProfileData,
): void => {
  const timestamp = new Date().toISOString();
  database.exec("DELETE FROM meta4_user_profile;");
  database
    .prepare(
      "INSERT INTO meta4_user_profile (id, username, society, display_name, profile_json_encrypted, looked_up_at, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      GLOBAL_META4_PROFILE_ID,
      data.username,
      data.society,
      data.displayName,
      data.profileJsonEncrypted,
      data.lookedUpAt.toISOString(),
      timestamp,
      timestamp,
    );
};

export const encryptMeta4ProfilePayload = async (
  dpapi: DpapiAdapter,
  profile: Meta4UserProfile,
): Promise<string> => dpapi.protectSecret(JSON.stringify(profile));

export const resolveDisplayName = (profile: Meta4UserProfile): string | null =>
  extractDisplayName(profile);

export type Meta4UserProfileRepository = {
  getProfileRow: () => Promise<StoredMeta4UserProfile | null>;
  getDecryptedProfile: () => Promise<Meta4UserProfile | null>;
  clearProfile: () => Promise<void>;
};

export const createMeta4UserProfileRepository = (
  database: DatabaseSync = getDatabase(),
  dpapi: DpapiAdapter,
): Meta4UserProfileRepository => {
  const getProfileRow = async (): Promise<StoredMeta4UserProfile | null> => {
    const row = database
      .prepare(
        "SELECT id, username, society, display_name, profile_json_encrypted, looked_up_at, created_at, updated_at FROM meta4_user_profile WHERE id = ?",
      )
      .get(GLOBAL_META4_PROFILE_ID);
    if (!row) return null;
    if (!isMeta4Society(row.society)) return null;
    const lookedUpAt = toDate(row.looked_up_at);
    const createdAt = toDate(row.created_at);
    const updatedAt = toDate(row.updated_at);
    if (!lookedUpAt || !createdAt || !updatedAt) return null;
    return {
      id: String(row.id),
      username: String(row.username),
      society: row.society,
      displayName: typeof row.display_name === "string" ? row.display_name : null,
      profileJsonEncrypted: String(row.profile_json_encrypted),
      lookedUpAt,
      createdAt,
      updatedAt,
    };
  };

  return {
    getProfileRow,
    getDecryptedProfile: async () => {
      const row = await getProfileRow();
      if (!row) return null;
      const json = await dpapi.unprotectSecret(row.profileJsonEncrypted);
      return parseProfileJson(json);
    },
    clearProfile: async () =>
      withRepositoryWrite(async () => {
        withTransaction(database, () => {
          database.prepare("DELETE FROM meta4_user_profile").run();
        });
      }),
  };
};
