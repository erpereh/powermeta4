import { closeDatabase } from "../src/server/database/client";
import { DEFAULT_CHUNKING_OPTIONS } from "../src/lib/knowledge/chunking";
import { ingestManualsDirectory } from "../src/lib/knowledge/ingest";
import { embedIndexedManuals } from "../src/lib/knowledge/embed-indexed-manuals";

const readEnvInt = (name: string, fallback: number): number => {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
};

const main = async () => {
  const sourceDir = process.env.KB_SOURCE_DIR?.trim();
  if (!sourceDir) {
    console.error(
      "Define KB_SOURCE_DIR en .env.local con la ruta a la carpeta de manuales PDF a indexar.",
    );
    process.exitCode = 1;
    return;
  }

  const chunking = {
    chunkSizeChars: readEnvInt("KB_CHUNK_SIZE_CHARS", DEFAULT_CHUNKING_OPTIONS.chunkSizeChars),
    overlapChars: readEnvInt("KB_CHUNK_OVERLAP_CHARS", DEFAULT_CHUNKING_OPTIONS.overlapChars),
  };

  console.log(`Indexando manuales desde: ${sourceDir}`);
  console.log(
    `Tamaño de fragmento: ${chunking.chunkSizeChars} caracteres, solape: ${chunking.overlapChars}`,
  );

  const summary = await ingestManualsDirectory({
    sourceDir,
    chunking,
    prioritizePayroll: true,
    lexicalOnly: true,
    log: (outcome) => {
      if (outcome.status === "created" || outcome.status === "reindexed") {
        console.log(`  ${outcome.fileName}: ${outcome.chunkCount} fragmentos`);
      }
    },
  });

  let created = 0;
  let reindexed = 0;
  let skipped = 0;
  let errored = 0;
  for (const outcome of summary.outcomes) {
    if (outcome.status === "created") {
      created += 1;
    } else if (outcome.status === "reindexed") {
      reindexed += 1;
    } else if (outcome.status === "skipped") {
      skipped += 1;
    } else {
      errored += 1;
      console.error(`  ! ${outcome.fileName}: ${outcome.message}`);
    }
  }

  console.log(
    `\nResumen: ${created} nuevos, ${reindexed} reindexados, ${skipped} sin cambios, ${errored} con error.`,
  );
  if (errored > 0) process.exitCode = 1;
  if (process.argv.includes("--lexical")) return;
  const limit = process.argv
    .find((argument) => argument.startsWith("--max-vectors="))
    ?.split("=")[1];
  const maxVectors = limit ? Number(limit) : Infinity;
  if ((!Number.isInteger(maxVectors) && maxVectors !== Infinity) || maxVectors <= 0) {
    throw new Error("--max-vectors admite un entero positivo.");
  }
  const result = await embedIndexedManuals(maxVectors, (message) => console.log(message));
  console.log(
    `Vectores de esta ejecución: ${result.indexed}. ${result.pending ? "Quedan pendientes." : "Índice vectorial completo."}`,
  );
  if (result.rateLimited) process.exitCode = 1;
};

main()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(() => {
    closeDatabase();
  });
