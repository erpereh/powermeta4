import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const staleHirePath = ["\\\\WMETA4PRE2", "powermeta4", "Hire.xls"].join("\\");

const textExtensions = new Set([".ts", ".tsx", ".md", ".example", ".json"]);

const collectFiles = (directory: string): string[] => {
  const found: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === "fuentes") {
      continue;
    }
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      found.push(...collectFiles(fullPath));
      continue;
    }
    if (textExtensions.has(path.extname(entry.name))) found.push(fullPath);
  }
  return found;
};

describe("Meta4 hire import path", () => {
  it("does not keep the old Hire.xls directory as an active path", () => {
    const root = process.cwd();
    const files = [...collectFiles(path.join(root, "src")), path.join(root, ".env.example")];
    const hits = files.filter((filePath) => {
      if (!statSync(filePath).isFile()) return false;
      return readFileSync(filePath, "utf8").includes(staleHirePath);
    });
    expect(hits).toEqual([]);
  });
});
