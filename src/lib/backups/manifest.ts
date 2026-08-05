import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/lib/local-database/server-constants";

export type BackupManifest = {
  backupVersion: typeof BACKUP_VERSION;
  databaseSchemaVersion: typeof DATABASE_SCHEMA_VERSION;
  appVersion: string;
  createdAt: string;
  databaseFile: "database.sqlite";
  snapshotFile: "workspace.json";
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
  if (
    typeof value.appVersion !== "string" ||
    typeof value.createdAt !== "string" ||
    value.databaseFile !== "database.sqlite" ||
    value.snapshotFile !== "workspace.json"
  ) {
    throw new Error("El manifest del backup está incompleto.");
  }
  return {
    backupVersion: BACKUP_VERSION,
    databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
    appVersion: value.appVersion.slice(0, 120),
    createdAt: value.createdAt,
    databaseFile: "database.sqlite",
    snapshotFile: "workspace.json",
  };
};
