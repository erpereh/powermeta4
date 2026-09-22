import "server-only";

import { open, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";

import { Meta4HireError } from "./errors";

const isNotFound = (error: unknown): boolean =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  (error as { code: unknown }).code === "ENOENT";

export const writeHireFileAtomically = async (
  destinationPath: string,
  bytes: Buffer,
): Promise<void> => {
  const directory = path.dirname(destinationPath);
  const tempName = `Hire.xls.${process.pid}.${randomBytes(8).toString("hex")}.tmp`;
  const tempPath = path.join(directory, tempName);

  try {
    const handle = await open(tempPath, "w");
    try {
      await handle.writeFile(bytes);
      await handle.sync();
    } finally {
      await handle.close();
    }

    try {
      await unlink(destinationPath);
    } catch (error) {
      if (!isNotFound(error)) throw error;
    }

    await rename(tempPath, destinationPath);

    const info = await stat(destinationPath);
    if (info.size <= 0) {
      throw new Meta4HireError(
        "META4_HIRE_WRITE_FAILED",
        "El fichero Hire está vacío tras escribirlo en la carpeta compartida.",
      );
    }
  } catch (error) {
    try {
      await unlink(tempPath);
    } catch {
      // Best-effort cleanup of a leftover temp file.
    }
    if (error instanceof Meta4HireError) throw error;
    throw new Meta4HireError(
      "META4_HIRE_WRITE_FAILED",
      "No se ha podido escribir el fichero Hire en la carpeta compartida.",
    );
  }
};

const OLE_MAGIC = Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);

const writeFailed = (message: string): Meta4HireError =>
  new Meta4HireError("META4_HIRE_WRITE_FAILED", message);

/** Confirms the same filePath exists on disk, is non-empty, and is OLE2. */
export const verifyWrittenHireFile = async (filePath: string): Promise<void> => {
  let info;
  try {
    info = await stat(filePath);
  } catch {
    throw writeFailed("No se ha podido comprobar el fichero Hire en la carpeta compartida.");
  }
  if (info.size <= 0) {
    throw writeFailed("El fichero Hire está vacío tras escribirlo en la carpeta compartida.");
  }

  const handle = await open(filePath, "r");
  try {
    const prefix = Buffer.alloc(OLE_MAGIC.length);
    const { bytesRead } = await handle.read(prefix, 0, prefix.length, 0);
    if (bytesRead < OLE_MAGIC.length || !prefix.equals(OLE_MAGIC)) {
      throw writeFailed("El fichero Hire escrito en la carpeta compartida no es un XLS válido.");
    }
  } catch (error) {
    if (error instanceof Meta4HireError) throw error;
    throw writeFailed("No se ha podido comprobar el fichero Hire en la carpeta compartida.");
  } finally {
    await handle.close();
  }
};
