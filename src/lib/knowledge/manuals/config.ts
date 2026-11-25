import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { lstat, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

import { resolveLocalDataPaths } from "@/server/database/paths";

export const EMBEDDING_MODEL = "nvidia/nemotron-3.5-embed-8b:free";
export const DIMENSIONS = 4096;
export const INDEX_VERSION = 1;
export const EXTRACTION_RECIPE = "layout-ocr-v1";
export const EMBEDDING_RECIPE = "openrouter-search-document-v1";
export const GENERATION_ID = /^[a-z0-9][a-z0-9-]{0,79}$/;
export const SHA256 = /^[a-f0-9]{64}$/;

export const sha256 = (value: string | Uint8Array) =>
  createHash("sha256").update(value).digest("hex");

export async function digestFile(file: string) {
  const entry = await lstat(file);
  if (!entry.isFile() || entry.isSymbolicLink())
    throw new Error("Archivo RAG no válido: " + path.basename(file));
  const digest = createHash("sha256");
  for await (const block of createReadStream(file)) digest.update(block);
  return { bytes: entry.size, checksum: digest.digest("hex") };
}

export const knowledgeRoot = () =>
  path.resolve(
    /* turbopackIgnore: true */
    process.env.KB_DATA_DIR?.trim() || path.join(resolveLocalDataPaths().rootDir, "knowledge"),
  );

export function indexPath(root: string, generation: string) {
  if (!GENERATION_ID.test(generation)) throw new Error("Generación RAG inválida.");
  return path.join(root, "generations", generation, "index.sqlite");
}

export function originalPath(root: string, checksum: string) {
  if (!SHA256.test(checksum)) throw new Error("Huella del original inválida.");
  return path.join(root, "originals", `${checksum}.pdf`);
}

export async function readPointer(root: string, pointer: "active" | "candidate") {
  let value: string;
  try {
    value = (await readFile(path.join(root, `${pointer}.txt`), "utf8")).trim();
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return null;
    throw error;
  }
  if (!GENERATION_ID.test(value)) throw new Error("Puntero RAG inválido.");
  return value;
}

export async function writePointer(
  root: string,
  pointer: "active" | "candidate",
  generation: string,
) {
  if (!GENERATION_ID.test(generation)) throw new Error("Generación RAG inválida.");
  const destination = path.join(root, `${pointer}.txt`);
  const temporary = `${destination}.${process.pid}.tmp`;
  await writeFile(temporary, `${generation}\n`);
  await rename(temporary, destination);
}

export function embeddingKeys() {
  const seen = new Set<string>();
  return [
    "EMBEDDING_API_KEY",
    "EMBEDDING_API_KEY2",
    "EMBEDDING_API_KEY3",
    "EMBEDDING_API_KEY4",
    "EMBEDDING_API_KEY5",
  ].flatMap((name, index) => {
    const value = process.env[name]?.trim();
    if (!value || seen.has(value)) return [];
    seen.add(value);
    return [{ slot: index + 1, value }];
  });
}
