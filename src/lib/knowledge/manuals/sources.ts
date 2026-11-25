import "server-only";

import { lstat, readdir, realpath } from "node:fs/promises";
import path from "node:path";

import { GENERATION_ID, knowledgeRoot, originalPath, readPointer } from "./config";
import { readValidation } from "./seal";
import { openIndex, readMeta } from "./store";

export async function resolveManualSource(id: string, checksum?: string) {
  const root = knowledgeRoot();
  const active = await readPointer(root, "active");
  if (!active) return null;
  const available = await readdir(path.join(root, "generations"), { withFileTypes: true });
  const generations = [
    active,
    ...available
      .filter(
        (entry) => entry.isDirectory() && GENERATION_ID.test(entry.name) && entry.name !== active,
      )
      .map((entry) => entry.name)
      .reverse(),
  ];
  for (const generation of generations) {
    const database = openIndex(root, generation);
    try {
      if (
        generation !== active &&
        !(await readValidation(root, generation)) &&
        !readMeta(database, "validatedAt")
      )
        continue;
      const row = checksum
        ? database
            .prepare("SELECT checksum, source FROM source_history WHERE checksum = ? LIMIT 1")
            .get(checksum)
        : database.prepare("SELECT checksum, source FROM source_history WHERE id = ?").get(id);
      if (!row) continue;
      const file = originalPath(root, String(row.checksum));
      const [entry, resolved, base] = await Promise.all([
        lstat(file),
        realpath(file),
        realpath(path.dirname(file)),
      ]);
      if (!entry.isFile() || entry.isSymbolicLink() || path.dirname(resolved) !== base) return null;
      return { file: resolved, name: path.posix.basename(String(row.source)) };
    } finally {
      database.close();
    }
  }
  return null;
}
