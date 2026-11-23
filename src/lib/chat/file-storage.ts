import "server-only";

import { lstat, realpath, rm } from "node:fs/promises";
import path from "node:path";

import { resolveLocalDataPaths } from "@/server/database/paths";

type Folder = "chat" | "manuals";

export function managedChatPath(relativePath: string, folder: Folder): string {
  const parts = relativePath.split("/");
  if (
    parts.length !== 3 ||
    parts[0] !== "uploads" ||
    parts[1] !== folder ||
    !parts[2] ||
    !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(parts[2])
  ) {
    throw new Error("Ruta de archivo inválida.");
  }
  return path.join(resolveLocalDataPaths().uploadsDir, folder, parts[2]);
}

export async function resolveManagedFile(relativePath: string, folder: Folder): Promise<string> {
  const file = managedChatPath(relativePath, folder);
  const [entry, target, uploads] = await Promise.all([
    lstat(file),
    realpath(file),
    realpath(resolveLocalDataPaths().uploadsDir),
  ]);
  if (!entry.isFile() || path.dirname(target) !== path.join(uploads, folder)) {
    throw new Error("El archivo no está disponible.");
  }
  return target;
}

export async function removeManagedChatFiles(paths: readonly string[]): Promise<void> {
  await Promise.all(
    paths
      .filter((value) => value.startsWith("uploads/chat/"))
      .map(async (value) => {
        try {
          await rm(await resolveManagedFile(value, "chat"), { force: true });
        } catch (error) {
          if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) {
            console.error("[chat] no se pudo retirar un archivo local");
          }
        }
      }),
  );
}
