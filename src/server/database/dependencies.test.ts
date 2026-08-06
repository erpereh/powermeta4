import { readFileSync } from "node:fs";
import path from "node:path";
import { backup, DatabaseSync } from "node:sqlite";

import { describe, expect, it } from "vitest";

const repositoryRoot = process.cwd();

describe("node:sqlite dependency boundary", () => {
  it("uses the supported Node engine and has no external SQLite native dependency", () => {
    const packageJson = JSON.parse(
      readFileSync(path.join(repositoryRoot, "package.json"), "utf8"),
    ) as {
      engines?: { node?: string };
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };
    const packageLock = readFileSync(path.join(repositoryRoot, "package-lock.json"), "utf8");
    const dependencyNames = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    }).join(" ");

    expect(packageJson.engines?.node).toBe(">=24.15 <25");
    expect(dependencyNames).not.toMatch(/prisma|better-sqlite3|adapter-better/i);
    expect(packageLock).not.toMatch(
      /better-sqlite3|@prisma\/adapter-better-sqlite3|@prisma\/client/i,
    );
    expect(typeof DatabaseSync).toBe("function");
    expect(typeof backup).toBe("function");
  });

  it("does not put compiler or node-gyp requirements in the new persistence", () => {
    const files = [
      "src/server/database/client.ts",
      "src/server/database/migrations.ts",
      "src/lib/backups/service.ts",
    ];
    const source = files
      .map((file) => readFileSync(path.join(repositoryRoot, file), "utf8"))
      .join("\n");
    expect(source).not.toMatch(/node-gyp|Visual Studio Build Tools|better-sqlite3/i);
    expect(source).toContain("node:sqlite");
  });
});
