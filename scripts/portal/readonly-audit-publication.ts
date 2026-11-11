import { createHash, randomUUID } from "node:crypto";
import { createReadStream, type Dirent } from "node:fs";
import {
  mkdir,
  open,
  rename,
  unlink,
  rmdir,
  copyFile,
  statfs,
  readdir,
  readFile,
} from "node:fs/promises";
import path from "node:path";
import { setImmediate } from "node:timers/promises";
import {
  AUDIT_FILES,
  AuditFailure,
  auditStorageError,
  type AuditFile,
} from "./readonly-audit-model";

export type AuditDocuments = {
  generationId: string;
  values: Record<AuditFile, unknown>;
  setHashes: (hashes: Record<string, string>) => void;
};

/** Serializa por filas/valores sin construir una cadena del diccionario completo. */
export function* auditJsonChunks(value: unknown, ancestors = new Set<object>()): Generator<string> {
  if (value === null || typeof value === "boolean" || typeof value === "number") {
    if (typeof value === "number" && !Number.isFinite(value))
      throw new AuditFailure("OUTPUT_SERIALIZATION_FAILED");
    yield JSON.stringify(value);
  } else if (typeof value === "string") {
    yield '"';
    for (let i = 0; i < value.length; i += 16_384)
      yield JSON.stringify(value.slice(i, i + 16_384)).slice(1, -1);
    yield '"';
  } else if (typeof value === "object") {
    if (ancestors.has(value)) throw new AuditFailure("OUTPUT_SERIALIZATION_FAILED");
    ancestors.add(value);
    const array = Array.isArray(value);
    if (
      !array &&
      Object.getPrototypeOf(value) !== Object.prototype &&
      Object.getPrototypeOf(value) !== null
    )
      throw new AuditFailure("OUTPUT_SERIALIZATION_FAILED");
    yield array ? "[" : "{";
    let first = true;
    const keys = array
      ? Array.from({ length: value.length }, (_, index) => String(index))
      : Object.keys(value);
    for (const key of keys) {
      const item: unknown = Reflect.get(value, key);
      if (!array && item === undefined) continue;
      if (!first) yield ",";
      first = false;
      if (!array) {
        yield JSON.stringify(key);
        yield ":";
      }
      yield* auditJsonChunks(item === undefined ? null : item, ancestors);
    }
    yield array ? "]" : "}";
    ancestors.delete(value);
  } else throw new AuditFailure("OUTPUT_SERIALIZATION_FAILED");
}

async function* fileChunks(file: AuditFile, value: unknown): AsyncGenerator<string> {
  const source = file === "resumen.md" ? [String(value)] : auditJsonChunks(value);
  let chunk = "";
  try {
    for (const part of source) {
      chunk += part;
      if (chunk.length >= 64 * 1024) {
        yield chunk;
        chunk = "";
        await setImmediate();
      }
    }
    yield chunk + (file === "resumen.md" ? "" : "\n");
  } catch (error) {
    throw error instanceof AuditFailure ? error : new AuditFailure("OUTPUT_SERIALIZATION_FAILED");
  }
}

export const AUDIT_DISK_RESERVE = 64 * 1024 * 1024;
export async function auditFileHash(file: string): Promise<string> {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
}
export async function copyAuditFile(source: string, destination: string): Promise<void> {
  const temporary = `${destination}.${randomUUID()}.tmp`;
  let failure: unknown;
  try {
    await copyFile(source, temporary);
    const handle = await open(temporary, "r+");
    try {
      await handle.sync();
    } finally {
      await handle.close();
    }
    await rename(temporary, destination);
  } catch (error) {
    failure = error;
  }
  try {
    await unlink(temporary);
  } catch (error) {
    if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) failure ??= error;
  }
  if (failure) throw auditStorageError(failure);
}
async function cleanIncomplete(root: string, notice: (code: string) => void): Promise<void> {
  const base = path.resolve(root, "generations");
  let entries: Dirent<string>[];
  try {
    entries = await readdir(base, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return;
    throw error;
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || !/^[a-f0-9-]{36}$/.test(entry.name)) continue;
    const directory = path.resolve(base, entry.name);
    if (path.dirname(directory) !== base) throw new AuditFailure("UNSAFE_GENERATION_PATH");
    const files = await readdir(directory, { withFileTypes: true });
    if (
      !files.some((file) => file.name === ".publishing" && file.isFile()) ||
      files.some(
        (file) =>
          file.name === "manifest.json" ||
          !file.isFile() ||
          (file.name !== ".publishing" && !AUDIT_FILES.some((known) => known === file.name)),
      )
    )
      continue;
    try {
      if ((await readFile(path.join(directory, ".publishing"), "utf8")) !== entry.name) continue;
      for (const file of files) await unlink(path.join(directory, file.name));
      await rmdir(directory);
      notice("INCOMPLETE_GENERATION_REMOVED");
    } catch {
      notice("GENERATION_CLEANUP_DEFERRED");
    }
  }
}
export async function publishAuditDocuments(
  root: string,
  output: string,
  documents: AuditDocuments,
  freeBytes: () => Promise<number> = async () => {
    const fs = await statfs(root);
    return fs.bavail * fs.bsize;
  },
  notice: (code: string) => void = () => {},
): Promise<void> {
  await cleanIncomplete(root, notice);
  const cleanup = async (file: string) => {
    try {
      await unlink(file);
    } catch (error) {
      if (!(error instanceof Error && "code" in error && error.code === "ENOENT"))
        notice("TEMP_CLEANUP_DEFERRED");
    }
  };
  let total = 0;
  let largest = 0;
  for (const file of AUDIT_FILES) {
    let size = 0;
    for await (const chunk of fileChunks(file, documents.values[file]))
      size += Buffer.byteLength(chunk);
    total += size;
    largest = Math.max(largest, size);
  }
  if ((await freeBytes()) < total + largest + AUDIT_DISK_RESERVE)
    throw new AuditFailure("DISK_SPACE_LOW");
  const directory = path.resolve(root, "generations", documents.generationId);
  if (path.dirname(directory) !== path.resolve(root, "generations"))
    throw new AuditFailure("UNSAFE_GENERATION_PATH");
  await mkdir(directory, { recursive: true });
  const owned = new Set<string>();
  let complete = false;
  try {
    const marker = path.join(directory, ".publishing");
    const markerHandle = await open(marker, "wx", 0o600);
    owned.add(marker);
    try {
      await markerHandle.writeFile(documents.generationId, "utf8");
      await markerHandle.sync();
    } finally {
      await markerHandle.close();
    }
    const hashes: Record<string, string> = {};
    for (const file of AUDIT_FILES) {
      if (file === "manifest.json") documents.setHashes(hashes);
      const destination = path.join(directory, file);
      const handle = await open(destination, "wx", 0o600);
      owned.add(destination);
      const hash = createHash("sha256");
      let sinceCheck = 0;
      try {
        for await (const chunk of fileChunks(file, documents.values[file])) {
          const bytes = Buffer.from(chunk, "utf8");
          hash.update(bytes);
          await handle.writeFile(bytes);
          sinceCheck += bytes.length;
          if (sinceCheck >= 8 * 1024 * 1024) {
            sinceCheck = 0;
            if ((await freeBytes()) < AUDIT_DISK_RESERVE) throw new AuditFailure("DISK_SPACE_LOW");
          }
        }
        await handle.sync();
      } finally {
        await handle.close();
      }
      if (file !== "manifest.json") hashes[file] = hash.digest("hex");
    }
    complete = true;
    await cleanup(marker);
    await atomicText(
      path.join(root, "last-generation.json"),
      JSON.stringify({ id: documents.generationId }),
      cleanup,
    );
    for (const file of AUDIT_FILES) {
      const destination = path.join(output, file);
      const temporary = `${destination}.${randomUUID()}.tmp`;
      try {
        await copyFile(path.join(directory, file), temporary);
        const handle = await open(temporary, "r+");
        try {
          await handle.sync();
        } finally {
          await handle.close();
        }
        await rename(temporary, destination);
      } finally {
        await cleanup(temporary);
      }
    }
  } catch (error) {
    throw auditStorageError(error);
  } finally {
    if (!complete) {
      for (const file of owned) await cleanup(file);
      try {
        await rmdir(directory);
      } catch {
        notice("GENERATION_CLEANUP_DEFERRED");
      }
    }
  }
}

async function atomicText(
  file: string,
  text: string,
  cleanup: (file: string) => Promise<void>,
): Promise<void> {
  const temporary = `${file}.${randomUUID()}.tmp`;
  try {
    const handle = await open(temporary, "wx", 0o600);
    try {
      await handle.writeFile(text, "utf8");
      await handle.sync();
    } finally {
      await handle.close();
    }
    await rename(temporary, file);
  } finally {
    await cleanup(temporary);
  }
}
