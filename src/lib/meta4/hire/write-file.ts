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
        "META4_HIRE_FILE_FAILED",
        "El fichero Hire.xls está vacío tras la escritura.",
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
      "META4_HIRE_FILE_FAILED",
      "No se ha podido escribir Hire.xls en la ruta configurada.",
    );
  }
};
