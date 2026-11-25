import path from "node:path";

import {
  exportKnowledge,
  importKnowledge,
  publishKnowledge,
} from "../src/lib/knowledge/manuals/bundle";
import { knowledgeRoot, readPointer } from "../src/lib/knowledge/manuals/config";
import { readValidation } from "../src/lib/knowledge/manuals/seal";
import { indexCounts, openIndex, readMeta } from "../src/lib/knowledge/manuals/store";

const [, , command, file, ...options] = process.argv;
const option = (name: string) =>
  options.find((value) => value.startsWith(name + "="))?.slice(name.length + 1);
const requiredFile = () => {
  if (!file) throw new Error("Indica la ruta del archivo.");
  return path.resolve(file);
};

async function status(root: string) {
  const active = await readPointer(root, "active");
  const candidate = await readPointer(root, "candidate");
  const generation = file === "--active" ? active : (candidate ?? active);
  if (!generation) return { active, candidate };
  const database = openIndex(root, generation);
  try {
    const search = file?.startsWith("--find=") ? file.slice("--find=".length) : "";
    const terms = search.match(/[\p{L}\p{N}_]+/gu)?.slice(0, 12);
    const validation = await readValidation(root, generation);
    return {
      active,
      candidate,
      inventoryHash: readMeta(database, "inventoryHash"),
      validatedAt: validation?.validatedAt ?? readMeta(database, "validatedAt"),
      indexSha256: validation?.acceptance.indexSha256,
      ...indexCounts(database),
      ...(terms?.length
        ? {
            matches: database
              .prepare(
                "SELECT d.source, p.page, p.section, p.kind, p.text FROM search JOIN passages p ON p.id=search.rowid JOIN documents d ON d.id=p.document WHERE search MATCH ? ORDER BY bm25(search) LIMIT 12",
              )
              .all(terms.map((term) => '"' + term + '"').join(" AND ")),
          }
        : {}),
      ...(file === "--reviews"
        ? {
            reviewPages: database
              .prepare(
                "SELECT d.source, d.checksum AS sha256, p.page FROM pages p JOIN documents d ON d.id = p.document WHERE p.status = 'review' OR (p.status <> 'blank' AND NOT EXISTS (SELECT 1 FROM passages q WHERE q.document=p.document AND q.page=p.page)) ORDER BY d.source, p.page",
              )
              .all(),
          }
        : {}),
    };
  } finally {
    database.close();
  }
}

async function main() {
  const root = knowledgeRoot();
  switch (command) {
    case "status":
      return status(root);
    case "export":
      return exportKnowledge(root, requiredFile(), option("--generation"));
    case "import":
      return importKnowledge(root, requiredFile());
    case "publish": {
      const evaluated = option("--evaluated-root");
      if (!evaluated) throw new Error("Indica --evaluated-root=<raíz de la copia evaluada>.");
      return publishKnowledge(
        root,
        requiredFile(),
        path.resolve(evaluated),
        !options.includes("--prepare"),
      );
    }
    default:
      throw new Error("Operación RAG desconocida.");
  }
}

main()
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : "Operación RAG fallida.");
    process.exitCode = 1;
  });
