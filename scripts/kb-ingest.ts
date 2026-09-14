import { closeDatabase } from "../src/server/database/client";
import { DEFAULT_CHUNKING_OPTIONS } from "../src/lib/knowledge/chunking";
import { ingestManualsDirectory } from "../src/lib/knowledge/ingest";

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
  console.log(`Tamaño de fragmento: ${chunking.chunkSizeChars} caracteres, solape: ${chunking.overlapChars}`);

  const summary = await ingestManualsDirectory({ sourceDir, chunking });

  let created = 0;
  let reindexed = 0;
  let skipped = 0;
  let errored = 0;
  for (const outcome of summary.outcomes) {
    if (outcome.status === "created") {
      created += 1;
      console.log(`  + ${outcome.fileName} (nuevo, ${outcome.chunkCount} fragmentos)`);
    } else if (outcome.status === "reindexed") {
      reindexed += 1;
      console.log(`  ~ ${outcome.fileName} (reindexado, ${outcome.chunkCount} fragmentos)`);
    } else if (outcome.status === "skipped") {
      skipped += 1;
      console.log(`  = ${outcome.fileName} (${outcome.reason})`);
    } else {
      errored += 1;
      console.error(`  ! ${outcome.fileName}: ${outcome.message}`);
    }
  }

  console.log(
    `\nResumen: ${created} nuevos, ${reindexed} reindexados, ${skipped} sin cambios, ${errored} con error.`,
  );
  if (errored > 0) process.exitCode = 1;
};

main()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(() => {
    closeDatabase();
  });
