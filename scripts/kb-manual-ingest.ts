import path from "node:path";
import { setTimeout } from "node:timers/promises";

import { knowledgeRoot } from "../src/lib/knowledge/manuals/config";
import { ingestCorpus } from "../src/lib/knowledge/manuals/ingestion";

const args = process.argv.slice(2);
const valueOf = (name: string) =>
  args.find((arg) => arg.startsWith(name + "="))?.slice(name.length + 1);
const integer = (name: string, fallback: number, max: number) => {
  const value = Number(valueOf(name) ?? fallback);
  if (!Number.isInteger(value) || value < 1 || value > max)
    throw new Error("Valor inválido para " + name);
  return value;
};

async function main() {
  const options = {
    root: knowledgeRoot(),
    source: path.resolve(valueOf("--source") || process.env.KB_SOURCE_DIR || "manuales"),
    lexical: args.includes("--lexical"),
    fresh: args.includes("--fresh"),
    vectorsOnly: args.includes("--vectors-only"),
    reviewFile: valueOf("--review"),
    maxRequests: integer("--max-requests", 1000, 1000),
    workers: integer("--workers", 3, 8),
    log: console.log,
  };
  for (;;) {
    const result = await ingestCorpus(options);
    console.log(JSON.stringify(result, null, 2));
    if (!result.quotaPaused || !args.includes("--wait-for-quota")) {
      if (result.errors || result.vectorFailure || result.review || result.contentWithoutPassage)
        process.exitCode = 1;
      return;
    }
    const next = result.retryAt ? Date.parse(result.retryAt) : Date.now() + 15 * 60_000;
    console.log("Se comprobará la cuota de nuevo a las " + new Date(next).toISOString());
    while (Date.now() < next) await setTimeout(Math.min(60_000, next - Date.now()));
    options.vectorsOnly = true;
    options.fresh = false;
    options.reviewFile = undefined;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Error de ingesta RAG.");
  process.exitCode = 1;
});
