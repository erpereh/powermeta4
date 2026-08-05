import "server-only";

import { createHash, randomBytes } from "node:crypto";
import { mkdtemp, readFile, readdir, rename, rm, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  Uint8ArrayReader,
  Uint8ArrayWriter,
  ZipReader,
  ZipWriter,
  type Entry,
} from "@zip.js/zip.js";
import Database from "better-sqlite3";

import { getAuthService, resetAuthService } from "@/lib/auth/server";
import { getPrismaClient, disconnectPrismaClient } from "@/lib/local-database/client";
import { ensureLocalDataDirectories, resolveLocalDataPaths } from "@/lib/local-database/paths";
import { BACKUP_VERSION, DATABASE_SCHEMA_VERSION } from "@/lib/local-database/server-constants";
import { resetAuthenticatedSoapClient } from "@/lib/meta4/server";
import { resetWorkspaceRepository } from "@/lib/workspace/service";

import { BACKUP_IMPORT_TTL_MS, getBackupLimits, type BackupLimits } from "./constants";
import { parseBackupManifest, type BackupManifest } from "./manifest";
import {
  createPendingImportRepository,
  type PendingImportRecord,
} from "./pending-import-repository";
import { withMaintenanceLock } from "./maintenance-lock";
import { normalizeZipEntryName, validateZipEntries } from "./zip-safety";

const MANIFEST_FILENAME = "manifest.json";
const DATABASE_FILENAME = "database.sqlite";
const WORKSPACE_FILENAME = "workspace.json";
const UPLOADS_PREFIX = "uploads/";
const GLOBAL_APP_SETTING_KEYS = new Set(["activeCompanyId"]);
const WORKSPACE_SETTING_KEYS = new Set(["activeChatId", "selectedModelId"]);

export type BackupValidationResult = {
  manifest: BackupManifest;
  compressedBytes: number;
  uncompressedBytes: number;
  entryCount: number;
  checksum: string;
  importId: string;
};

export type RestoreResult = {
  appVersion: string;
  restoredAt: string;
};

type InspectedBackup = {
  manifest: BackupManifest;
  compressedBytes: number;
  uncompressedBytes: number;
  entries: readonly Entry[];
  databaseBytes: Uint8Array;
  workspaceBytes: Uint8Array;
};

const appVersion = process.env.npm_package_version ?? "0.1.0";

const checksumBytes = (bytes: Uint8Array): string =>
  createHash("sha256").update(bytes).digest("hex");

const asUint8Array = (value: ArrayBuffer): Uint8Array => new Uint8Array(value);

const readInput = async (
  input: Uint8Array | ArrayBuffer | ReadableStream<Uint8Array>,
  maxBytes: number,
): Promise<Uint8Array> => {
  if (input instanceof Uint8Array) {
    if (input.byteLength > maxBytes)
      throw new Error("El ZIP comprimido supera el límite permitido.");
    return input;
  }
  if (input instanceof ArrayBuffer) {
    if (input.byteLength > maxBytes)
      throw new Error("El ZIP comprimido supera el límite permitido.");
    return asUint8Array(input);
  }

  const reader = input.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const result = await reader.read();
      if (result.done) break;
      total += result.value.byteLength;
      if (total > maxBytes) throw new Error("El ZIP comprimido supera el límite permitido.");
      chunks.push(result.value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
};

const entryMap = (entries: readonly Entry[]): Map<string, Entry> => {
  const result = new Map<string, Entry>();
  for (const entry of entries) {
    const name = normalizeZipEntryName(entry.filename);
    if (result.has(name)) throw new Error("El ZIP contiene nombres de entrada duplicados.");
    result.set(name, entry);
  }
  return result;
};

const readEntryBytes = async (entry: Entry): Promise<Uint8Array> => {
  if (entry.directory) return new Uint8Array();
  return entry.getData(new Uint8ArrayWriter());
};

const inspectZip = async (bytes: Uint8Array, limits: BackupLimits): Promise<InspectedBackup> => {
  const reader = new ZipReader(new Uint8ArrayReader(bytes), {
    checkSignature: true,
    checkOverlappingEntry: true,
    strictness: "strict",
  });
  try {
    const entries = await reader.getEntries();
    const sizes = validateZipEntries(entries, limits);
    const files = entryMap(entries);
    const manifestEntry = files.get(MANIFEST_FILENAME);
    const databaseEntry = files.get(DATABASE_FILENAME);
    const workspaceEntry = files.get(WORKSPACE_FILENAME);
    if (!manifestEntry || manifestEntry.directory || !databaseEntry || databaseEntry.directory) {
      throw new Error("El ZIP no contiene el manifest o la base de datos requeridos.");
    }
    if (!workspaceEntry || workspaceEntry.directory) {
      throw new Error("El ZIP no contiene el snapshot del workspace requerido.");
    }
    for (const name of files.keys()) {
      if (
        name !== MANIFEST_FILENAME &&
        name !== DATABASE_FILENAME &&
        name !== WORKSPACE_FILENAME &&
        !name.startsWith(UPLOADS_PREFIX)
      ) {
        throw new Error("El ZIP contiene una entrada no permitida.");
      }
    }
    const manifestBytes = await readEntryBytes(manifestEntry);
    const workspaceBytes = await readEntryBytes(workspaceEntry);
    const databaseBytes = await readEntryBytes(databaseEntry);
    const manifest = parseBackupManifest(
      JSON.parse(new TextDecoder().decode(manifestBytes)) as unknown,
    );
    const workspaceValue = JSON.parse(new TextDecoder().decode(workspaceBytes)) as unknown;
    if (typeof workspaceValue !== "object" || workspaceValue === null) {
      throw new Error("El snapshot del workspace no es válido.");
    }
    return {
      manifest,
      compressedBytes: sizes.compressedBytes,
      uncompressedBytes: sizes.uncompressedBytes,
      entries,
      databaseBytes,
      workspaceBytes,
    };
  } finally {
    await reader.close();
  }
};

const assertSqliteIntegrity = (databasePath: string): void => {
  const database = new Database(databasePath, { readonly: true, fileMustExist: true });
  try {
    const integrity = database.pragma("integrity_check", { simple: true });
    if (integrity !== "ok") throw new Error("La copia SQLite no supera integrity_check.");
    const foreignKeys = database.pragma("foreign_key_check");
    if (Array.isArray(foreignKeys) && foreignKeys.length > 0) {
      throw new Error("La copia SQLite contiene referencias no válidas.");
    }
    const requiredTables = database
      .prepare("SELECT name FROM sqlite_master WHERE type = 'table'")
      .all() as Array<{ name: string }>;
    const tableNames = new Set(requiredTables.map((table) => table.name));
    for (const table of [
      "companies",
      "conversations",
      "messages",
      "app_settings",
      "soap_sessions",
      "local_browser_sessions",
      "pending_backup_imports",
    ]) {
      if (!tableNames.has(table)) throw new Error("La copia SQLite no tiene el esquema requerido.");
    }
    for (const table of ["soap_sessions", "local_browser_sessions", "pending_backup_imports"]) {
      const row = database.prepare(`SELECT COUNT(*) AS count FROM "${table}"`).get() as {
        count: number;
      };
      if (row.count !== 0)
        throw new Error("La copia SQLite contiene datos de sesión no permitidos.");
    }
  } finally {
    database.close();
  }
};

const createDatabaseSnapshot = async (destination: string): Promise<void> => {
  const paths = resolveLocalDataPaths();
  const source = new Database(paths.databaseFilePath, { fileMustExist: true });
  try {
    await writeFile(destination, source.serialize(), { flag: "wx" });
  } finally {
    source.close();
  }
};

const sanitizeDatabase = (databasePath: string): void => {
  const database = new Database(databasePath);
  try {
    database.exec(`
      PRAGMA foreign_keys = OFF;
      DELETE FROM soap_sessions;
      DELETE FROM local_browser_sessions;
      DELETE FROM pending_backup_imports;
      PRAGMA foreign_keys = ON;
    `);
  } finally {
    database.close();
  }
  assertSqliteIntegrity(databasePath);
};

const serializeWorkspace = async (): Promise<Uint8Array> => {
  const prisma = getPrismaClient();
  const [companies, conversations, appSettings, workspaceSettings, toolActivity] =
    await Promise.all([
      prisma.company.findMany({ orderBy: { createdAt: "asc" } }),
      prisma.conversation.findMany({
        orderBy: { updatedAt: "desc" },
        include: { messages: { orderBy: { createdAt: "asc" } }, attachments: true },
      }),
      prisma.appSetting.findMany({ where: { key: { in: [...GLOBAL_APP_SETTING_KEYS] } } }),
      prisma.workspaceSetting.findMany({ where: { key: { in: [...WORKSPACE_SETTING_KEYS] } } }),
      prisma.toolActivity.findMany({ orderBy: { createdAt: "desc" } }),
    ]);
  const snapshot = { companies, conversations, appSettings, workspaceSettings, toolActivity };
  return new TextEncoder().encode(JSON.stringify(snapshot));
};

type UploadFile = { name: string; absolutePath: string; size: number };

const collectUploadFiles = async (directory: string, prefix = ""): Promise<UploadFile[]> => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: UploadFile[] = [];
  for (const entry of entries) {
    if (entry.isSymbolicLink()) throw new Error("La carpeta uploads contiene un enlace simbólico.");
    const relativeName = `${prefix}${entry.name}`;
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectUploadFiles(absolutePath, `${relativeName}/`)));
      continue;
    }
    if (!entry.isFile()) throw new Error("La carpeta uploads contiene una entrada no compatible.");
    const fileStats = await stat(absolutePath);
    files.push({
      name: `${UPLOADS_PREFIX}${relativeName.replaceAll("\\", "/")}`,
      absolutePath,
      size: fileStats.size,
    });
  }
  return files;
};

const addZipEntry = async (
  writer: ZipWriter<Uint8Array>,
  name: string,
  bytes: Uint8Array,
  limits: BackupLimits,
  state: { entries: number; uncompressedBytes: number },
) => {
  if (++state.entries > limits.entries)
    throw new Error("El backup supera el número de entradas permitido.");
  if (bytes.byteLength > limits.singleFileBytes)
    throw new Error("Un archivo supera el límite permitido.");
  state.uncompressedBytes += bytes.byteLength;
  if (state.uncompressedBytes > limits.uncompressedBytes) {
    throw new Error("El backup descomprimido supera el límite permitido.");
  }
  await writer.add(name, new Uint8ArrayReader(bytes));
};

export const exportBackup = async (): Promise<{
  bytes: Uint8Array;
  filename: string;
  checksum: string;
}> =>
  withMaintenanceLock(async () => {
    const paths = await ensureLocalDataDirectories();
    const limits = getBackupLimits();
    const workingDirectory = await mkdtemp(path.join(paths.tempDir, "export-"));
    const databasePath = path.join(workingDirectory, DATABASE_FILENAME);
    try {
      await createDatabaseSnapshot(databasePath);
      sanitizeDatabase(databasePath);
      const workspaceBytes = await serializeWorkspace();
      const manifest: BackupManifest = {
        backupVersion: BACKUP_VERSION,
        databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
        appVersion,
        createdAt: new Date().toISOString(),
        databaseFile: "database.sqlite",
        snapshotFile: "workspace.json",
      };
      const writer = new Uint8ArrayWriter();
      const zipWriter = new ZipWriter(writer);
      const state = { entries: 0, uncompressedBytes: 0 };
      await addZipEntry(
        zipWriter,
        MANIFEST_FILENAME,
        new TextEncoder().encode(JSON.stringify(manifest)),
        limits,
        state,
      );
      await addZipEntry(
        zipWriter,
        DATABASE_FILENAME,
        new Uint8Array(await readFile(databasePath)),
        limits,
        state,
      );
      await addZipEntry(zipWriter, WORKSPACE_FILENAME, workspaceBytes, limits, state);
      const uploadFiles = await collectUploadFiles(paths.uploadsDir);
      for (const upload of uploadFiles) {
        if (upload.size > limits.singleFileBytes)
          throw new Error("Un archivo subido supera el límite permitido.");
        await addZipEntry(
          zipWriter,
          upload.name,
          new Uint8Array(await readFile(upload.absolutePath)),
          limits,
          state,
        );
      }
      await zipWriter.close();
      const bytes = await writer.getData();
      if (bytes.byteLength > limits.compressedBytes)
        throw new Error("El backup comprimido supera el límite permitido.");
      const checksum = checksumBytes(bytes);
      const filename = `powermeta4-backup-${new Date().toISOString().replaceAll(/[:.]/g, "-")}.zip`;
      await writeFile(path.join(paths.backupsDir, filename), bytes, { flag: "wx" });
      return { bytes, filename, checksum };
    } finally {
      await rm(workingDirectory, { recursive: true, force: true });
    }
  });

const writeInspectionDatabase = async (
  inspected: InspectedBackup,
  directory: string,
): Promise<string> => {
  const databasePath = path.join(directory, DATABASE_FILENAME);
  await writeFile(databasePath, inspected.databaseBytes, { flag: "wx" });
  assertSqliteIntegrity(databasePath);
  return databasePath;
};

const getPendingPath = (record: PendingImportRecord): string => {
  const paths = resolveLocalDataPaths();
  const absolutePath = path.resolve(paths.rootDir, record.relativePath);
  const rootPrefix = `${paths.rootDir}${path.sep}`;
  if (!absolutePath.startsWith(rootPrefix) || path.dirname(absolutePath) !== paths.tempDir) {
    throw new Error("La ubicación interna del import no es válida.");
  }
  return absolutePath;
};

const cleanupPending = async (record: PendingImportRecord | null): Promise<void> => {
  if (!record) return;
  try {
    await unlink(getPendingPath(record));
  } catch {
    // The temporary may already have been removed.
  }
  try {
    const pendingRepository = createPendingImportRepository(getPrismaClient());
    await pendingRepository.delete(record.importIdHash);
    await pendingRepository.deleteExpired(new Date());
  } catch {
    // A successful restore replaces the Prisma connection and removes the row with the database.
  }
};

const persistPendingImport = async (
  bytes: Uint8Array,
  sessionHash: string,
): Promise<BackupValidationResult> => {
  const paths = await ensureLocalDataDirectories();
  const limits = getBackupLimits();
  const importId = randomBytes(32).toString("base64url");
  const importIdHash = checksumBytes(new TextEncoder().encode(importId));
  const filename = `import-${randomBytes(16).toString("hex")}.zip`;
  const absolutePath = path.join(paths.tempDir, filename);
  const relativePath = path.relative(paths.rootDir, absolutePath).replaceAll("\\", "/");
  await writeFile(absolutePath, bytes, { flag: "wx" });
  try {
    const inspected = await inspectZip(bytes, limits);
    const inspectionDirectory = await mkdtemp(path.join(paths.tempDir, "validate-"));
    try {
      await writeInspectionDatabase(inspected, inspectionDirectory);
    } finally {
      await rm(inspectionDirectory, { recursive: true, force: true });
    }
    const pendingRepository = createPendingImportRepository(getPrismaClient());
    await pendingRepository.deleteExpired(new Date());
    await pendingRepository.create({
      importIdHash,
      localBrowserSessionHash: sessionHash,
      checksum: checksumBytes(bytes),
      relativePath,
      expiresAt: new Date(Date.now() + BACKUP_IMPORT_TTL_MS),
    });
    return {
      manifest: inspected.manifest,
      compressedBytes: bytes.byteLength,
      uncompressedBytes: inspected.uncompressedBytes,
      entryCount: inspected.entries.length,
      checksum: checksumBytes(bytes),
      importId,
    };
  } catch (error) {
    await unlink(absolutePath).catch(() => undefined);
    throw error;
  }
};

export const validateBackup = async (
  input: Uint8Array | ArrayBuffer | ReadableStream<Uint8Array>,
  sessionHash: string,
): Promise<BackupValidationResult> => {
  const bytes = await readInput(input, getBackupLimits().compressedBytes);
  return persistPendingImport(bytes, sessionHash);
};

const replaceDatabase = async (stagedDatabasePath: string): Promise<void> => {
  const paths = resolveLocalDataPaths();
  const rollbackPath = path.join(paths.tempDir, `rollback-${randomBytes(16).toString("hex")}.db`);
  const previousPath = path.join(paths.tempDir, `previous-${randomBytes(16).toString("hex")}.db`);
  const source = new Database(paths.databaseFilePath, { fileMustExist: true });
  try {
    await writeFile(rollbackPath, source.serialize(), { flag: "wx" });
  } finally {
    source.close();
  }
  await disconnectPrismaClient();
  try {
    await rename(paths.databaseFilePath, previousPath);
    try {
      await rename(stagedDatabasePath, paths.databaseFilePath);
    } catch (error) {
      await rename(previousPath, paths.databaseFilePath).catch(() => undefined);
      throw error;
    }
    await rm(previousPath, { force: true });
  } catch (error) {
    if (!(await fileExists(paths.databaseFilePath))) {
      await writeFile(paths.databaseFilePath, await readFile(rollbackPath));
    }
    throw error;
  } finally {
    await rm(rollbackPath, { force: true });
    await rm(previousPath, { force: true });
    await rm(`${paths.databaseFilePath}-wal`, { force: true });
    await rm(`${paths.databaseFilePath}-shm`, { force: true });
    resetAuthService();
    resetAuthenticatedSoapClient();
    resetWorkspaceRepository();
  }
};

const fileExists = async (filename: string): Promise<boolean> => {
  try {
    await stat(filename);
    return true;
  } catch {
    return false;
  }
};

export const restoreBackup = async (
  importId: string,
  sessionHash: string,
): Promise<RestoreResult> => {
  const importIdHash = checksumBytes(new TextEncoder().encode(importId));
  const paths = await ensureLocalDataDirectories();
  const pendingRepository = createPendingImportRepository(getPrismaClient());
  let record: PendingImportRecord | null = await pendingRepository.get(importIdHash);
  if (!record || record.localBrowserSessionHash !== sessionHash || record.consumedAt) {
    throw new Error("El import no existe o no pertenece a esta sesión.");
  }
  if (record.expiresAt.getTime() <= Date.now()) {
    await cleanupPending(record);
    throw new Error("El import ha caducado.");
  }

  try {
    return await withMaintenanceLock(async () => {
      record = await pendingRepository.get(importIdHash);
      if (!record || record.localBrowserSessionHash !== sessionHash || record.consumedAt) {
        throw new Error("El import no existe o ya fue consumido.");
      }
      if (record.expiresAt.getTime() <= Date.now()) throw new Error("El import ha caducado.");
      const zipPath = getPendingPath(record);
      const bytes = new Uint8Array(await readFile(zipPath));
      if (checksumBytes(bytes) !== record.checksum)
        throw new Error("El checksum del import no coincide.");
      const inspected = await inspectZip(bytes, getBackupLimits());
      const consumed = await pendingRepository.consume(importIdHash, sessionHash, new Date());
      if (!consumed) throw new Error("El import ya fue consumido.");

      const secondRead = new Uint8Array(await readFile(zipPath));
      if (checksumBytes(secondRead) !== record.checksum)
        throw new Error("El archivo del import ha cambiado.");
      const secondInspection = await inspectZip(secondRead, getBackupLimits());
      const stagingDirectory = await mkdtemp(path.join(paths.tempDir, "restore-"));
      try {
        const stagedDatabasePath = await writeInspectionDatabase(
          secondInspection,
          stagingDirectory,
        );
        await getAuthService().invalidate();
        await replaceDatabase(stagedDatabasePath);
      } finally {
        await rm(stagingDirectory, { recursive: true, force: true });
      }
      return {
        appVersion: inspected.manifest.appVersion,
        restoredAt: new Date().toISOString(),
      };
    });
  } finally {
    if (record) await cleanupPending(record).catch(() => undefined);
  }
};

export const cancelBackupImport = async (importId: string, sessionHash: string): Promise<void> =>
  withMaintenanceLock(async () => {
    const importIdHash = checksumBytes(new TextEncoder().encode(importId));
    const pendingRepository = createPendingImportRepository(getPrismaClient());
    const record = await pendingRepository.get(importIdHash);
    if (!record || record.localBrowserSessionHash !== sessionHash) return;
    await cleanupPending(record);
  });
