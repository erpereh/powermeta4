import { randomUUID } from "node:crypto";
import { constants, createWriteStream, openAsBlob } from "node:fs";
import { copyFile, mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { backup } from "node:sqlite";
import { Writable } from "node:stream";

import { BlobReader, TextReader, TextWriter, ZipReader, ZipWriter } from "@zip.js/zip.js";
import { z } from "zod";

import { validateZipEntries } from "@/lib/backups/zip-safety";

import {
  DIMENSIONS,
  EMBEDDING_MODEL,
  INDEX_VERSION,
  SHA256,
  digestFile,
  indexPath,
  originalPath,
  readPointer,
  writePointer,
} from "./config";
import { withKnowledgeWriter } from "./ingestion";
import { acceptanceSchema, readValidation, validationPath, validationSchema } from "./seal";
import { assertComplete, openIndex, readMeta } from "./store";

const FORMAT = 1;
const LIMITS = {
  compressedBytes: 32 * 1024 ** 3,
  uncompressedBytes: 48 * 1024 ** 3,
  singleFileBytes: 32 * 1024 ** 3,
  entries: 100_000,
};
const MANIFEST = "manifest.json";
const INDEX = "index.sqlite";
const MANUAL_ENTRY = /^originals\/[a-f0-9]{64}\.pdf$/;
const fileSchema = z.strictObject({
  name: z.string().refine((name) => name === INDEX || MANUAL_ENTRY.test(name)),
  bytes: z.number().int().nonnegative(),
  checksum: z.string().regex(SHA256),
});
const bundleShape = {
  indexVersion: z.literal(INDEX_VERSION),
  model: z.literal(EMBEDDING_MODEL),
  dimensions: z.literal(DIMENSIONS),
  createdAt: z.string().datetime(),
  inventoryHash: z.string().regex(SHA256),
  files: z
    .array(fileSchema)
    .min(2)
    .max(LIMITS.entries - 1),
};
const manifestSchema = z.discriminatedUnion("format", [
  z.strictObject({ ...bundleShape, format: z.literal(FORMAT) }),
  z.strictObject({ ...bundleShape, format: z.literal(2), validation: validationSchema }),
]);

async function activateSeal(root: string, generation: string) {
  const validation = await readValidation(root, generation);
  if (
    !validation ||
    (await digestFile(indexPath(root, generation))).checksum !== validation.acceptance.indexSha256
  )
    throw new Error("El índice preparado no coincide con el acta.");
  await writePointer(root, "active", generation);
}

export const activatePreparedKnowledge = (root: string, generation: string) =>
  withKnowledgeWriter(root, () => activateSeal(root, generation));

export async function publishKnowledge(
  root: string,
  reportFile: string,
  evaluatedRoot: string,
  activate = true,
) {
  const report = acceptanceSchema.parse(JSON.parse(await readFile(reportFile, "utf8")));
  return withKnowledgeWriter(root, async () => {
    if ((await readPointer(root, "candidate")) !== report.generation)
      throw new Error("La evaluación no corresponde al candidato.");
    const generation = "sealed-" + report.indexSha256;
    const destination = indexPath(root, generation);
    const evaluated = indexPath(evaluatedRoot, report.generation);
    const existing = await readValidation(root, generation);
    const parent = path.dirname(path.dirname(destination));
    const stagingRoot = await mkdtemp(path.join(root, "publish-"));
    const staged = indexPath(stagingRoot, generation);
    let database: ReturnType<typeof openIndex> | undefined;
    try {
      await mkdir(path.dirname(staged), { recursive: true });
      await copyFile(evaluated, staged, constants.COPYFILE_EXCL);
      if ((await digestFile(staged)).checksum !== report.indexSha256)
        throw new Error("La huella del índice no coincide con la evaluación.");
      database = openIndex(stagingRoot, generation);
      if (database.prepare("PRAGMA journal_mode").get()?.journal_mode !== "delete")
        throw new Error("El índice evaluado debe ser un SQLite autónomo.");
      const counts = assertComplete(database);
      if (readMeta(database, "inventoryHash") !== report.inventoryHash)
        throw new Error("El inventario ha cambiado desde la evaluación.");
      for (const row of database
        .prepare("SELECT DISTINCT checksum FROM source_history")
        .iterate()) {
        const checksum = String(row.checksum);
        if ((await digestFile(originalPath(root, checksum))).checksum !== checksum) {
          throw new Error("No se pudo verificar un PDF original del candidato.");
        }
      }
      database.close();
      database = undefined;
      if (existing) {
        if (
          JSON.stringify(existing.acceptance) !== JSON.stringify(report) ||
          (await digestFile(destination)).checksum !== report.indexSha256
        )
          throw new Error("La generación sellada existente no coincide con el acta.");
      } else {
        await writeFile(
          validationPath(stagingRoot, generation),
          JSON.stringify({ acceptance: report, validatedAt: new Date().toISOString() }),
          { flag: "wx" },
        );
        await mkdir(parent, { recursive: true });
        await rename(path.dirname(staged), path.dirname(destination));
      }
      if (activate) await activateSeal(root, generation);
      return { generation, indexSha256: report.indexSha256, activated: activate, ...counts };
    } finally {
      database?.close();
      await rm(stagingRoot, { recursive: true, force: true });
    }
  });
}

export async function exportKnowledge(root: string, output: string, prepared?: string) {
  const generation = prepared ?? (await readPointer(root, "active"));
  if (!generation) throw new Error("Aún no hay una generación RAG publicada.");
  const validation = await readValidation(root, generation);
  if (prepared && !validation) throw new Error("La generación preparada carece de acta.");
  const working = await mkdtemp(path.join(root, "export-"));
  const temporary = path.join(
    path.dirname(output),
    "." + path.basename(output) + "." + randomUUID() + ".tmp",
  );
  const database = openIndex(root, generation);
  try {
    assertComplete(database);
    const staged = validation ? indexPath(root, generation) : path.join(working, INDEX);
    if (!validation) {
      if (!readMeta(database, "validatedAt")) throw new Error("La generación carece de acta.");
      await backup(database, staged);
    }
    const digest = await digestFile(staged);
    if (
      validation &&
      (digest.checksum !== validation.acceptance.indexSha256 ||
        readMeta(database, "inventoryHash") !== validation.acceptance.inventoryHash)
    )
      throw new Error("La generación ha cambiado desde su validación.");
    const files = [{ name: INDEX, ...digest }];
    for (const row of database
      .prepare("SELECT DISTINCT checksum FROM source_history ORDER BY checksum")
      .iterate()) {
      const checksum = String(row.checksum);
      const fp = originalPath(root, checksum);
      const actual = await digestFile(fp);
      if (actual.checksum !== checksum)
        throw new Error("No coincide la huella de un PDF original.");
      files.push({ name: "originals/" + checksum + ".pdf", ...actual });
    }
    const manifest = manifestSchema.parse({
      ...(validation ? { format: 2, validation } : { format: FORMAT }),
      indexVersion: INDEX_VERSION,
      model: EMBEDDING_MODEL,
      dimensions: DIMENSIONS,
      createdAt: new Date().toISOString(),
      inventoryHash: readMeta(database, "inventoryHash"),
      files,
    });
    const stream = createWriteStream(temporary, { flags: "wx" });
    const writer = new ZipWriter(Writable.toWeb(stream), { zip64: true });
    try {
      await writer.add(MANIFEST, new TextReader(JSON.stringify(manifest, null, 2)));
      for (const entry of files) {
        const file = entry.name === INDEX ? staged : originalPath(root, entry.checksum);
        await writer.add(entry.name, new BlobReader(await openAsBlob(file)), {
          level: entry.name === INDEX ? 3 : 0,
        });
      }
    } finally {
      await writer.close();
    }
    await copyFile(temporary, output, constants.COPYFILE_EXCL);
    return {
      generation,
      indexSha256: digest.checksum,
      path: output,
      ...(await digestFile(output)),
      documents: files.length - 1,
    };
  } finally {
    database.close();
    await rm(temporary, { force: true });
    await rm(working, { recursive: true, force: true });
  }
}

export async function importKnowledge(root: string, input: string) {
  const size = (await stat(input)).size;
  if (size > LIMITS.compressedBytes) throw new Error("El paquete RAG supera el tamaño admitido.");
  return withKnowledgeWriter(root, async () => {
    const generation = "import-" + randomUUID();
    const target = indexPath(root, generation);
    const directory = path.dirname(target);
    const staged = await mkdtemp(path.join(root, "import-"));
    const archive = new ZipReader(new BlobReader(await openAsBlob(input)), {
      checkSignature: true,
      checkOverlappingEntry: true,
      strictness: "strict",
    });
    let completed = false;
    try {
      const entries = await archive.getEntries();
      validateZipEntries(entries, LIMITS);
      const byName = new Map(entries.map((entry) => [entry.filename, entry]));
      if (byName.size !== entries.length || entries.some((entry) => entry.directory))
        throw new Error("Entradas RAG duplicadas o no admitidas.");
      const config = byName.get(MANIFEST);
      if (!config || config.directory || config.uncompressedSize > 24 * 1024 ** 2)
        throw new Error("Manifiesto RAG no válido.");
      const manifest = manifestSchema.parse(
        JSON.parse(await config.getData(new TextWriter(), { checkSignature: true })),
      );
      const expected = new Map(manifest.files.map((entry) => [entry.name, entry]));
      if (
        expected.size !== manifest.files.length ||
        !expected.has(INDEX) ||
        expected.size + 1 !== byName.size
      ) {
        throw new Error("El ZIP RAG no coincide con su manifiesto.");
      }
      await mkdir(directory, { recursive: true });
      let downloaded = 0;
      for (const file of expected.values()) {
        const entry = byName.get(file.name);
        if (!entry || entry.directory || entry.uncompressedSize !== file.bytes)
          throw new Error("Tamaño de entrada RAG inesperado.");
        const local =
          file.name === INDEX ? target : path.join(staged, path.posix.basename(file.name));
        let received = 0;
        const output = createWriteStream(local, { flags: "wx" });
        const writer = Writable.toWeb(output).getWriter();
        const guarded = new WritableStream<Uint8Array>({
          async write(chunk) {
            received += chunk.byteLength;
            downloaded += chunk.byteLength;
            if (received > file.bytes || downloaded > LIMITS.uncompressedBytes)
              throw new Error("El paquete excedió el tamaño declarado.");
            await writer.write(chunk);
          },
          close: () => writer.close(),
          abort: (reason) => writer.abort(reason),
        });
        try {
          await entry.getData(guarded, { checkSignature: true });
        } catch (error) {
          await writer.abort(error).catch(() => undefined);
          throw error;
        }
        const digest = await digestFile(local);
        if (digest.bytes !== file.bytes || digest.checksum !== file.checksum)
          throw new Error("Huella de paquete RAG incorrecta.");
      }

      const database = openIndex(root, generation);
      let counts: ReturnType<typeof assertComplete>;
      try {
        counts = assertComplete(database);
        const validated =
          manifest.format === 2
            ? manifest.validation.acceptance.indexSha256 === expected.get(INDEX)?.checksum &&
              manifest.validation.acceptance.inventoryHash === manifest.inventoryHash &&
              database.prepare("PRAGMA journal_mode").get()?.journal_mode === "delete"
            : Boolean(readMeta(database, "validatedAt"));
        if (readMeta(database, "inventoryHash") !== manifest.inventoryHash || !validated) {
          throw new Error("El paquete RAG carece de información de validación.");
        }
        const required = database.prepare("SELECT DISTINCT checksum FROM source_history").all();
        if (required.length + 1 !== expected.size)
          throw new Error("El inventario de originales del ZIP no es completo.");
        for (const row of required) {
          const checksum = String(row.checksum);
          if (expected.get("originals/" + checksum + ".pdf")?.checksum !== checksum)
            throw new Error("El ZIP no contiene el PDF citado.");
        }
      } finally {
        database.close();
      }
      await mkdir(path.join(root, "originals"), { recursive: true });
      for (const file of expected.values()) {
        if (file.name === INDEX) continue;
        const destination = originalPath(root, file.checksum);
        const existing = await digestFile(destination).catch((error: unknown) => {
          if (error instanceof Error && "code" in error && error.code === "ENOENT") return null;
          throw error;
        });
        if (existing && existing.checksum !== file.checksum)
          throw new Error("Un original existente ha sido alterado.");
        if (!existing) await rename(path.join(staged, path.posix.basename(file.name)), destination);
      }
      if (manifest.format === 2)
        await writeFile(validationPath(root, generation), JSON.stringify(manifest.validation), {
          flag: "wx",
        });
      await writePointer(root, "active", generation);
      completed = true;
      return { generation, indexSha256: expected.get(INDEX)?.checksum, ...counts };
    } finally {
      await archive.close();
      await rm(staged, { recursive: true, force: true });
      if (!completed) await rm(directory, { recursive: true, force: true });
    }
  });
}
