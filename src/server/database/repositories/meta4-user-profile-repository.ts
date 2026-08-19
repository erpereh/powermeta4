import "server-only";

import type { DatabaseSync } from "node:sqlite";

import type { DpapiAdapter } from "@/lib/security/dpapi";
import { extractDisplayName } from "@/lib/meta4/user-profile-soap";
import type { Meta4UserProfile } from "@/lib/meta4/user-profile-types";
import { isMeta4Society, orderMeta4Societies, type Meta4Society } from "@/lib/meta4/societies";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { withRepositoryWrite } from "@/lib/backups/maintenance-lock";
import { getDatabase } from "@/server/database/client";
import { withTransaction } from "@/server/database/transaction";

export type StoredMeta4UserProfile = {
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

const mapProfileRow = (row: Record<string, unknown>): StoredMeta4UserProfile | null => {
  if (!isMeta4Society(row.society)) return null;
  const lookedUpAt = toDate(row.looked_up_at);
  const createdAt = toDate(row.created_at);
  const updatedAt = toDate(row.updated_at);
  if (!lookedUpAt || !createdAt || !updatedAt) return null;
  return {
    username: String(row.username),
    society: row.society,
    displayName: typeof row.display_name === "string" ? row.display_name : null,
    profileJsonEncrypted: String(row.profile_json_encrypted),
    lookedUpAt,
    createdAt,
    updatedAt,
  };
};

export const insertEncryptedMeta4Profile = (
  database: DatabaseSync,
  data: EncryptedMeta4ProfileData,
): void => {
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO meta4_user_profile (society, username, display_name, profile_json_encrypted, looked_up_at, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      data.society,
      data.username,
      data.displayName,
      data.profileJsonEncrypted,
      data.lookedUpAt.toISOString(),
      timestamp,
      timestamp,
    );
};

export const replaceEncryptedMeta4Profiles = (
  database: DatabaseSync,
  profiles: readonly EncryptedMeta4ProfileData[],
): void => {
  database.exec("DELETE FROM meta4_user_profile;");
  for (const profile of profiles) {
    insertEncryptedMeta4Profile(database, profile);
  }
};

export const encryptMeta4ProfilePayload = async (
  dpapi: DpapiAdapter,
  profile: Meta4UserProfile,
): Promise<string> => dpapi.protectSecret(JSON.stringify(profile));

export const resolveDisplayName = (profile: Meta4UserProfile): string | null =>
  extractDisplayName(profile);

export type Meta4UserProfileRepository = {
  listProfileRows: () => Promise<StoredMeta4UserProfile[]>;
  getProfileRow: (society: Meta4Society) => Promise<StoredMeta4UserProfile | null>;
  getDecryptedProfile: (society: Meta4Society) => Promise<Meta4UserProfile | null>;
  listAvailableSocieties: (username: string) => Promise<Meta4Society[]>;
  clearProfile: () => Promise<void>;
};

export const createMeta4UserProfileRepository = (
  database: DatabaseSync = getDatabase(),
  dpapi: DpapiAdapter,
): Meta4UserProfileRepository => {
  const listProfileRows = async (): Promise<StoredMeta4UserProfile[]> => {
    const rows = database
      .prepare(
        "SELECT society, username, display_name, profile_json_encrypted, looked_up_at, created_at, updated_at FROM meta4_user_profile",
      )
      .all() as Array<Record<string, unknown>>;
    const mapped = rows.flatMap((row) => {
      const profile = mapProfileRow(row);
      return profile ? [profile] : [];
    });
    const order = orderMeta4Societies(mapped.map((row) => row.society));
    return order.flatMap((society) => {
      const row = mapped.find((item) => item.society === society);
      return row ? [row] : [];
    });
  };

  const getProfileRow = async (society: Meta4Society): Promise<StoredMeta4UserProfile | null> => {
    const row = database
      .prepare(
        "SELECT society, username, display_name, profile_json_encrypted, looked_up_at, created_at, updated_at FROM meta4_user_profile WHERE society = ?",
      )
      .get(society) as Record<string, unknown> | undefined;
    return row ? mapProfileRow(row) : null;
  };

  return {
    listProfileRows,
    getProfileRow,
    getDecryptedProfile: async (society) => {
      const row = await getProfileRow(society);
      if (!row) return null;
      const json = await dpapi.unprotectSecret(row.profileJsonEncrypted);
      return parseProfileJson(json);
    },
    listAvailableSocieties: async (username) => {
      const rows = await listProfileRows();
      return orderMeta4Societies(
        rows.filter((row) => row.username === username).map((row) => row.society),
      );
    },
    clearProfile: async () =>
      withRepositoryWrite(async () => {
        withTransaction(database, () => {
          database.prepare("DELETE FROM meta4_user_profile").run();
        });
      }),
  };
};
