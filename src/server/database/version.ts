import "server-only";

export const BACKUP_VERSION = 1 as const;
export const DATABASE_SCHEMA_VERSION = 13 as const;
export const LEGACY_MANUAL_SOURCES_SCHEMA_VERSION = 12 as const;
export const LEGACY_RAG_SCHEMA_VERSION = 11 as const;
export const BACKUP_DATABASE_PATH = "database/powermeta4.db" as const;
