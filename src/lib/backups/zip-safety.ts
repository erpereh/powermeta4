import type { Entry } from "@zip.js/zip.js";

export type ZipSafetyLimits = {
  compressedBytes: number;
  uncompressedBytes: number;
  entries: number;
  singleFileBytes: number;
};

export const normalizeZipEntryName = (name: string): string => {
  const normalized = name.replaceAll("\\", "/");
  if (
    !normalized ||
    normalized.includes("\0") ||
    normalized.startsWith("/") ||
    /^[A-Za-z]:\//.test(normalized) ||
    normalized.split("/").some((segment) => segment === "..")
  ) {
    throw new Error("El ZIP contiene una ruta no segura.");
  }
  return normalized;
};

export const isZipSymlink = (entry: Pick<Entry, "externalFileAttribute">): boolean => {
  const unixMode = (entry.externalFileAttribute >>> 16) & 0xffff;
  return (unixMode & 0xf000) === 0xa000;
};

type ZipEntryMetadata = Pick<
  Entry,
  "filename" | "externalFileAttribute" | "compressedSize" | "uncompressedSize" | "directory"
>;

export const validateZipEntries = (
  entries: readonly ZipEntryMetadata[],
  limits: ZipSafetyLimits,
): { uncompressedBytes: number; compressedBytes: number } => {
  if (entries.length === 0 || entries.length > limits.entries) {
    throw new Error("El ZIP no contiene un número de entradas válido.");
  }

  let compressedBytes = 0;
  let uncompressedBytes = 0;
  for (const entry of entries) {
    normalizeZipEntryName(entry.filename);
    if (isZipSymlink(entry)) throw new Error("El ZIP contiene un enlace simbólico.");
    if (!Number.isSafeInteger(entry.compressedSize) || entry.compressedSize < 0) {
      throw new Error("El ZIP contiene un tamaño comprimido no válido.");
    }
    if (!Number.isSafeInteger(entry.uncompressedSize) || entry.uncompressedSize < 0) {
      throw new Error("El ZIP contiene un tamaño descomprimido no válido.");
    }
    if (entry.uncompressedSize > limits.singleFileBytes) {
      throw new Error("El ZIP contiene un archivo demasiado grande.");
    }
    compressedBytes += entry.compressedSize;
    uncompressedBytes += entry.uncompressedSize;
    if (compressedBytes > limits.compressedBytes) {
      throw new Error("El ZIP comprimido supera el límite permitido.");
    }
    if (uncompressedBytes > limits.uncompressedBytes) {
      throw new Error("El ZIP descomprimido supera el límite permitido.");
    }
  }
  return { compressedBytes, uncompressedBytes };
};
