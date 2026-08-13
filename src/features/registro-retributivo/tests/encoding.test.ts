import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";

function collectFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      return collectFiles(fullPath);
    }

    return /\.(tsx|ts)$/.test(entry) ? [fullPath] : [];
  });
}

describe("visible UI encoding", () => {
  test("does not leave mojibake markers in registro-retributivo source", () => {
    const files = collectFiles(
      path.join(process.cwd(), "src", "features", "registro-retributivo", "components"),
    );
    const offenders = files.filter((file) => /Ã|Â|ï¿½/.test(readFileSync(file, "utf8")));

    expect(offenders.map((file) => path.relative(process.cwd(), file))).toEqual([]);
  });
});
