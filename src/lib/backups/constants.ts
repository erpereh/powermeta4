import "server-only";

export const BACKUP_MAX_COMPRESSED_BYTES = 268_435_456;
export const BACKUP_MAX_UNCOMPRESSED_BYTES = 1_073_741_824;
export const BACKUP_MAX_ENTRIES = 10_000;
export const BACKUP_MAX_SINGLE_FILE_BYTES = 268_435_456;
export const BACKUP_IMPORT_TTL_MS = 15 * 60 * 1000;

const ENV_NAMES = {
  compressed: "POWERMETA4_BACKUP_MAX_COMPRESSED_BYTES",
  uncompressed: "POWERMETA4_BACKUP_MAX_UNCOMPRESSED_BYTES",
  entries: "POWERMETA4_BACKUP_MAX_ENTRIES",
  singleFile: "POWERMETA4_BACKUP_MAX_SINGLE_FILE_BYTES",
} as const;

export type BackupLimits = {
  compressedBytes: number;
  uncompressedBytes: number;
  entries: number;
  singleFileBytes: number;
};

const parseLimit = (value: string | undefined, fallback: number): number => {
  if (!value || !/^[0-9]+$/.test(value)) return fallback;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
};

export const getBackupLimits = (env: NodeJS.ProcessEnv = process.env): BackupLimits => ({
  compressedBytes: parseLimit(env[ENV_NAMES.compressed], BACKUP_MAX_COMPRESSED_BYTES),
  uncompressedBytes: parseLimit(env[ENV_NAMES.uncompressed], BACKUP_MAX_UNCOMPRESSED_BYTES),
  entries: parseLimit(env[ENV_NAMES.entries], BACKUP_MAX_ENTRIES),
  singleFileBytes: parseLimit(env[ENV_NAMES.singleFile], BACKUP_MAX_SINGLE_FILE_BYTES),
});
