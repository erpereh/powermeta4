import "server-only";

import {
  BACKUP_DATABASE_PATH,
  BACKUP_VERSION,
  DATABASE_SCHEMA_VERSION,
} from "@/server/database/version";

export type BackupManifest = {
  backupVersion: typeof BACKUP_VERSION;
  databaseSchemaVersion: typeof DATABASE_SCHEMA_VERSION;
  appVersion: string;
  createdAt: string;
  databasePath: typeof BACKUP_DATABASE_PATH;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const parseBackupManifest = (value: unknown): BackupManifest => {
  if (!isRecord(value)) throw new Error("El manifest del backup no es válido.");
  if (value.backupVersion !== BACKUP_VERSION) {
    throw new Error("La versión de backup no es compatible.");
  }
  if (value.databaseSchemaVersion !== DATABASE_SCHEMA_VERSION) {
    throw new Error("La versión de base de datos no es compatible.");
  }
  const keys = Object.keys(value).sort();
  const expectedKeys = [
    "appVersion",
    "backupVersion",
    "createdAt",
    "databasePath",
    "databaseSchemaVersion",
  ];
  if (
    keys.length !== expectedKeys.length ||
    keys.some((key, index) => key !== expectedKeys[index])
  ) {
    throw new Error("El manifest del backup está incompleto o contiene campos no permitidos.");
  }
  if (
    typeof value.appVersion !== "string" ||
    typeof value.createdAt !== "string" ||
    value.databasePath !== BACKUP_DATABASE_PATH
  ) {
    throw new Error("El manifest del backup está incompleto.");
  }
  return {
    backupVersion: BACKUP_VERSION,
    databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
    appVersion: value.appVersion.slice(0, 120),
    createdAt: value.createdAt,
    databasePath: BACKUP_DATABASE_PATH,
  };
};
