import "server-only";

import { backup, DatabaseSync } from "node:sqlite";
import { createHash, randomBytes } from "node:crypto";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import path from "node:path";

import {
  Uint8ArrayReader,
  Uint8ArrayWriter,
  ZipReader,
  ZipWriter,
  type Entry,
} from "@zip.js/zip.js";

import { resetAuthService } from "@/lib/auth/server";
import { resetAuthenticatedSoapClient } from "@/lib/meta4/server";
import { resetWorkspaceRepository } from "@/lib/workspace/service";
import { withBackupSnapshotLock, withMaintenanceLock } from "@/lib/backups/maintenance-lock";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { closeDatabase, getDatabase } from "@/server/database/client";
import { ensureLocalDataDirectories, resolveLocalDataPaths } from "@/server/database/paths";
import { validateMigrationHistory } from "@/server/database/migrations";
import { withTransaction } from "@/server/database/transaction";
import {
  BACKUP_DATABASE_PATH,
  BACKUP_VERSION,
  DATABASE_SCHEMA_VERSION,
} from "@/server/database/version";

import { BACKUP_IMPORT_TTL_MS, getBackupLimits, type BackupLimits } from "./constants";
import { parseBackupManifest, type BackupManifest } from "./manifest";
import {
  createPendingImportRepository,
  type PendingImportRecord,
} from "./pending-import-repository";
import { normalizeZipEntryName, validateZipEntries } from "./zip-safety";

const MANIFEST_FILENAME = "manifest.json";
const UPLOADS_PREFIX = "uploads/";
const appVersion = process.env.npm_package_version ?? "0.1.0";

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
};

const checksumBytes = (bytes: Uint8Array): string =>
  createHash("sha256").update(bytes).digest("hex");

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
    return new Uint8Array(input);
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

const readEntryBytes = async (entry: Entry): Promise<Uint8Array> =>
  entry.directory ? new Uint8Array() : entry.getData(new Uint8ArrayWriter());

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
    const databaseEntry = files.get(BACKUP_DATABASE_PATH);
    const uploadsEntry = files.get(UPLOADS_PREFIX);
    if (!manifestEntry || manifestEntry.directory || !databaseEntry || databaseEntry.directory) {
      throw new Error("El ZIP no contiene el manifest o la base de datos requeridos.");
    }
    if (!uploadsEntry || !uploadsEntry.directory) throw new Error("El ZIP no contiene uploads/.");
    for (const name of files.keys()) {
      if (
        name !== MANIFEST_FILENAME &&
        name !== BACKUP_DATABASE_PATH &&
        name !== UPLOADS_PREFIX &&
        !name.startsWith(UPLOADS_PREFIX)
      ) {
        throw new Error("El ZIP contiene una entrada no permitida.");
      }
    }
    const manifest = parseBackupManifest(
      JSON.parse(new TextDecoder().decode(await readEntryBytes(manifestEntry))) as unknown,
    );
    return {
      manifest,
      compressedBytes: sizes.compressedBytes,
      uncompressedBytes: sizes.uncompressedBytes,
      entries,
      databaseBytes: await readEntryBytes(databaseEntry),
    };
  } finally {
    await reader.close();
  }
};

const requiredTables = [
  "schema_migrations",
  "companies",
  "conversations",
  "messages",
  "attachments",
  "app_settings",
  "workspace_settings",
  "tool_activity",
  "soap_sessions",
  "local_browser_sessions",
  "meta4_user_profile",
  "pending_backup_imports",
  "idempotency_receipts",
  "retributivo_analyses",
  "retributivo_settings",
  "retributivo_state",
  "retributivo_assistant_records",
];

export const assertSqliteIntegrity = (databasePath: string): void => {
  const database = new DatabaseSync(databasePath, {
    readOnly: true,
    enableForeignKeyConstraints: true,
    allowExtension: false,
    timeout: 5000,
  });
  try {
    database.enableLoadExtension(false);
    const defensiveDatabase = database as DatabaseSync & {
      enableDefensive?: (active: boolean) => void;
    };
    defensiveDatabase.enableDefensive?.(true);
    const integrity = database.prepare("PRAGMA integrity_check").get() as {
      integrity_check: string;
    };
    if (integrity.integrity_check !== "ok")
      throw new Error("La copia SQLite no supera integrity_check.");
    if (database.prepare("PRAGMA foreign_key_check").all().length > 0) {
      throw new Error("La copia SQLite contiene referencias no válidas.");
    }
    const userVersion = database.prepare("PRAGMA user_version").get() as { user_version: number };
    if (userVersion.user_version !== DATABASE_SCHEMA_VERSION) {
      throw new Error("La copia SQLite no tiene la versión de esquema admitida.");
    }
    const tables = new Set(
      (
        database.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all() as Array<{
          name: string;
        }>
      ).map((row) => row.name),
    );
    for (const table of requiredTables)
      if (!tables.has(table)) throw new Error("La copia SQLite no tiene el esquema requerido.");
    validateMigrationHistory(database);
    for (const table of [
      "soap_sessions",
      "local_browser_sessions",
      "meta4_user_profile",
      "pending_backup_imports",
      "idempotency_receipts",
    ]) {
      const row = database.prepare(`SELECT COUNT(*) AS count FROM "${table}"`).get() as {
        count: number;
      };
      if (row.count !== 0)
        throw new Error("La copia SQLite contiene datos temporales no permitidos.");
    }
  } finally {
    database.close();
  }
};

const sanitizeDatabase = (databasePath: string): void => {
  const database = new DatabaseSync(databasePath, {
    enableForeignKeyConstraints: true,
    allowExtension: false,
    timeout: 5000,
  });
  try {
    database.enableLoadExtension(false);
    withTransaction(database, () => {
      database.exec(
        "DELETE FROM soap_sessions; DELETE FROM local_browser_sessions; DELETE FROM meta4_user_profile; DELETE FROM pending_backup_imports; DELETE FROM idempotency_receipts;",
      );
    });
  } finally {
    database.close();
  }
  assertSqliteIntegrity(databasePath);
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
  if (state.uncompressedBytes > limits.uncompressedBytes)
    throw new Error("El backup descomprimido supera el límite permitido.");
  await writer.add(name, new Uint8ArrayReader(bytes));
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
    } else if (entry.isFile()) {
      files.push({
        name: `${UPLOADS_PREFIX}${relativeName.replaceAll("\\", "/")}`,
        absolutePath,
        size: (await stat(absolutePath)).size,
      });
    } else {
      throw new Error("La carpeta uploads contiene una entrada no compatible.");
    }
  }
  return files;
};

const createDatabaseSnapshot = async (destination: string): Promise<void> => {
  const source = getDatabase();
  await withBackupSnapshotLock(async () => {
    if (source.isTransaction)
      throw new Error("No se puede crear un backup con una transacción abierta.");
    await backup(source, destination);
  });
};

export const exportBackup = async (): Promise<{
  bytes: Uint8Array;
  filename: string;
  checksum: string;
}> => {
  const paths = await ensureLocalDataDirectories();
  const limits = getBackupLimits();
  const workingDirectory = await mkdtemp(path.join(paths.tempDir, "export-"));
  const databasePath = path.join(workingDirectory, "powermeta4.db");
  try {
    await createDatabaseSnapshot(databasePath);
    sanitizeDatabase(databasePath);
    const manifest: BackupManifest = {
      backupVersion: BACKUP_VERSION,
      databaseSchemaVersion: DATABASE_SCHEMA_VERSION,
      appVersion,
      createdAt: new Date().toISOString(),
      databasePath: BACKUP_DATABASE_PATH,
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
      BACKUP_DATABASE_PATH,
      new Uint8Array(await readFile(databasePath)),
      limits,
      state,
    );
    await addZipEntry(zipWriter, UPLOADS_PREFIX, new Uint8Array(), limits, state);
    for (const upload of await collectUploadFiles(paths.uploadsDir)) {
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
};

const writeInspectionDatabase = async (
  inspected: InspectedBackup,
  directory: string,
): Promise<string> => {
  const databasePath = path.join(directory, "powermeta4.db");
  await writeFile(databasePath, inspected.databaseBytes, { flag: "wx" });
  assertSqliteIntegrity(databasePath);
  return databasePath;
};

const copyUploadsFromZip = async (inspected: InspectedBackup, directory: string): Promise<void> => {
  await mkdir(directory, { recursive: true });
  for (const entry of inspected.entries) {
    const name = normalizeZipEntryName(entry.filename);
    if (entry.directory || !name.startsWith(UPLOADS_PREFIX)) continue;
    const relativeName = name.slice(UPLOADS_PREFIX.length);
    const destination = path.resolve(directory, relativeName);
    const prefix = `${path.resolve(directory)}${path.sep}`;
    if (!destination.startsWith(prefix)) throw new Error("La ruta de upload no es segura.");
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, await readEntryBytes(entry), { flag: "wx" });
  }
};

const copyDirectory = async (source: string, destination: string): Promise<void> => {
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error("No se permiten symlinks en uploads.");
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) await copyDirectory(sourcePath, destinationPath);
    else if (entry.isFile())
      await writeFile(destinationPath, await readFile(sourcePath), { flag: "wx" });
    else throw new Error("Entrada de uploads no compatible.");
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

const databaseArtifactSuffixes = ["", "-wal", "-shm", "-journal"] as const;
type MovedDatabaseArtifact = { sourcePath: string; destinationPath: string };

const moveDatabaseArtifacts = async (
  sourceBasePath: string,
  destinationBasePath: string,
): Promise<MovedDatabaseArtifact[]> => {
  const moved: MovedDatabaseArtifact[] = [];
  try {
    for (const suffix of databaseArtifactSuffixes) {
      const sourcePath = `${sourceBasePath}${suffix}`;
      if (!(await fileExists(sourcePath))) continue;
      const destinationPath = `${destinationBasePath}${suffix}`;
      await rename(sourcePath, destinationPath);
      moved.push({ sourcePath, destinationPath });
    }
  } catch (error) {
    for (const artifact of [...moved].reverse()) {
      if (await fileExists(artifact.destinationPath)) {
        await rename(artifact.destinationPath, artifact.sourcePath).catch(() => undefined);
      }
    }
    throw error;
  }
  return moved;
};

const removeDatabaseArtifacts = async (basePath: string): Promise<void> => {
  await Promise.all(
    databaseArtifactSuffixes.map((suffix) => rm(`${basePath}${suffix}`, { force: true })),
  );
};

const restoreMovedDatabaseArtifacts = async (moved: readonly MovedDatabaseArtifact[]) => {
  for (const artifact of [...moved].reverse()) {
    if (await fileExists(artifact.destinationPath)) {
      await rename(artifact.destinationPath, artifact.sourcePath);
    }
  }
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
  await unlink(getPendingPath(record)).catch(() => undefined);
  const repository = createPendingImportRepository(getDatabase());
  await repository.delete(record.importIdHash).catch(() => undefined);
  await repository.deleteExpired(new Date()).catch(() => undefined);
};

const persistPendingImport = async (
  bytes: Uint8Array,
  sessionHash: string,
): Promise<BackupValidationResult> => {
  const paths = await ensureLocalDataDirectories();
  const limits = getBackupLimits();
  const inspected = await inspectZip(bytes, limits);
  const inspectionDirectory = await mkdtemp(path.join(paths.tempDir, "validate-"));
  try {
    await writeInspectionDatabase(inspected, inspectionDirectory);
  } finally {
    await rm(inspectionDirectory, { recursive: true, force: true });
  }
  const importId = randomBytes(32).toString("base64url");
  const importIdHash = checksumBytes(new TextEncoder().encode(importId));
  const filename = `import-${randomBytes(16).toString("hex")}.zip`;
  const absolutePath = path.join(paths.tempDir, filename);
  const relativePath = path.relative(paths.rootDir, absolutePath).replaceAll("\\", "/");
  await writeFile(absolutePath, bytes, { flag: "wx" });
  try {
    const repository = createPendingImportRepository(getDatabase());
    await repository.deleteExpired(new Date());
    await repository.create({
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
): Promise<BackupValidationResult> =>
  persistPendingImport(await readInput(input, getBackupLimits().compressedBytes), sessionHash);

const restoreStorage = async (
  stagedDatabasePath: string,
  stagedUploadsPath: string,
  rollbackDatabasePath: string,
  rollbackUploadsPath: string,
): Promise<void> => {
  const paths = resolveLocalDataPaths();
  closeDatabase();
  resetAuthService();
  resetAuthenticatedSoapClient();
  resetWorkspaceRepository();
  const previousDatabasePath = path.join(
    paths.tempDir,
    `previous-${randomBytes(12).toString("hex")}.db`,
  );
  const previousUploadsPath = path.join(
    paths.tempDir,
    `previous-uploads-${randomBytes(12).toString("hex")}`,
  );
  let movedDatabaseArtifacts: MovedDatabaseArtifact[] = [];
  let uploadsMoved = false;
  try {
    movedDatabaseArtifacts = await moveDatabaseArtifacts(
      paths.databaseFilePath,
      previousDatabasePath,
    );
    await rename(stagedDatabasePath, paths.databaseFilePath);
    if (await fileExists(paths.uploadsDir)) {
      await rename(paths.uploadsDir, previousUploadsPath);
      uploadsMoved = true;
    }
    await rename(stagedUploadsPath, paths.uploadsDir);
    const reopened = getDatabase();
    assertSqliteIntegrity(paths.databaseFilePath);
    const companyCount = (
      reopened.prepare("SELECT COUNT(*) AS count FROM companies").get() as { count: number }
    ).count;
    if (companyCount === 0) bootstrapDatabase(reopened);
    else {
      const active = reopened
        .prepare("SELECT value_json FROM app_settings WHERE key = 'activeCompanyId'")
        .get();
      const activeId =
        typeof active?.value_json === "string" ? JSON.parse(active.value_json) : null;
      if (
        typeof activeId !== "string" ||
        !reopened.prepare("SELECT 1 FROM companies WHERE id = ?").get(activeId)
      ) {
        bootstrapDatabase(reopened);
      }
    }
    await removeDatabaseArtifacts(previousDatabasePath);
    await rm(previousUploadsPath, { recursive: true, force: true });
    await removeDatabaseArtifacts(rollbackDatabasePath);
    await rm(rollbackUploadsPath, { recursive: true, force: true });
  } catch (error) {
    closeDatabase();
    const rollbackErrors: unknown[] = [];
    try {
      await removeDatabaseArtifacts(paths.databaseFilePath);
      if (movedDatabaseArtifacts.length > 0) {
        await restoreMovedDatabaseArtifacts(movedDatabaseArtifacts);
      } else if (await fileExists(rollbackDatabasePath)) {
        await moveDatabaseArtifacts(rollbackDatabasePath, paths.databaseFilePath);
      }
    } catch (rollbackError) {
      rollbackErrors.push(rollbackError);
    }
    try {
      await rm(paths.uploadsDir, { recursive: true, force: true });
      if (uploadsMoved) await rename(previousUploadsPath, paths.uploadsDir);
      else if (await fileExists(rollbackUploadsPath))
        await rename(rollbackUploadsPath, paths.uploadsDir);
    } catch (rollbackError) {
      rollbackErrors.push(rollbackError);
    }
    resetAuthService();
    resetAuthenticatedSoapClient();
    resetWorkspaceRepository();
    try {
      getDatabase();
    } catch (rollbackError) {
      rollbackErrors.push(rollbackError);
    }
    if (rollbackErrors.length > 0) {
      throw new Error("La restauración falló y el rollback no se pudo completar.", {
        cause: rollbackErrors[0],
      });
    }
    throw error;
  }
};

export const restoreBackup = async (
  importId: string,
  sessionHash: string,
): Promise<RestoreResult> => {
  const importIdHash = checksumBytes(new TextEncoder().encode(importId));
  const repository = createPendingImportRepository(getDatabase());
  let record = await repository.get(importIdHash);
  if (!record || record.localBrowserSessionHash !== sessionHash || record.consumedAt)
    throw new Error("El import no existe o no pertenece a esta sesión.");
  if (record.expiresAt.getTime() <= Date.now()) {
    await cleanupPending(record);
    throw new Error("El import ha caducado.");
  }
  const zipPath = getPendingPath(record);
  const initialBytes = new Uint8Array(await readFile(zipPath));
  if (checksumBytes(initialBytes) !== record.checksum)
    throw new Error("El checksum del import no coincide.");
  const initialInspection = await inspectZip(initialBytes, getBackupLimits());
  const consumed = await repository.consume(importIdHash, sessionHash, new Date());
  if (!consumed) throw new Error("El import ya fue consumido.");
  try {
    const currentRecord =
      (await createPendingImportRepository(getDatabase()).get(importIdHash)) ?? record;
    if (!currentRecord) throw new Error("El import no existe o ya fue consumido.");
    record = currentRecord;
    const secondBytes = new Uint8Array(await readFile(zipPath));
    if (checksumBytes(secondBytes) !== currentRecord.checksum)
      throw new Error("El archivo del import ha cambiado.");
    const inspected = await inspectZip(secondBytes, getBackupLimits());
    const stagingDirectory = await mkdtemp(path.join(resolveLocalDataPaths().tempDir, "restore-"));
    const rollbackDirectory = await mkdtemp(
      path.join(resolveLocalDataPaths().tempDir, "rollback-"),
    );
    try {
      const stagedDatabasePath = await writeInspectionDatabase(inspected, stagingDirectory);
      const stagedUploadsPath = path.join(stagingDirectory, "uploads");
      await copyUploadsFromZip(inspected, stagedUploadsPath);
      const rollbackDatabasePath = path.join(rollbackDirectory, "powermeta4.db");
      await backup(getDatabase(), rollbackDatabasePath);
      const rollbackUploadsPath = path.join(rollbackDirectory, "uploads");
      await copyDirectory(resolveLocalDataPaths().uploadsDir, rollbackUploadsPath);
      await withMaintenanceLock(async () => {
        await restoreStorage(
          stagedDatabasePath,
          stagedUploadsPath,
          rollbackDatabasePath,
          rollbackUploadsPath,
        );
      });
    } finally {
      await rm(stagingDirectory, { recursive: true, force: true });
      await rm(rollbackDirectory, { recursive: true, force: true });
    }
    return {
      appVersion: initialInspection.manifest.appVersion,
      restoredAt: new Date().toISOString(),
    };
  } finally {
    await cleanupPending(record).catch(() => undefined);
  }
};

export const cancelBackupImport = async (importId: string, sessionHash: string): Promise<void> => {
  const importIdHash = checksumBytes(new TextEncoder().encode(importId));
  const repository = createPendingImportRepository(getDatabase());
  const record = await repository.get(importIdHash);
  if (!record || record.localBrowserSessionHash !== sessionHash) return;
  await cleanupPending(record);
};
