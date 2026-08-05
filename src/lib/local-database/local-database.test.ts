import { exec } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { access, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, describe, expect, it, vi } from "vitest";

const execAsync = promisify(exec);
const repoRoot = process.cwd();
const localDatabaseDir = path.join(repoRoot, "src", "lib", "local-database");
const localDatabaseTestDir = () => mkdtempSync(path.join(os.tmpdir(), "powermeta4-db-test-"));

const requirePath = async (targetPath: string) => {
  await access(targetPath);
  return targetPath;
};

const importLocalDatabaseModule = async <TModule>(relativePath: string): Promise<TModule> => {
  const absolutePath = await requirePath(path.join(localDatabaseDir, relativePath));
  return import(absolutePath) as Promise<TModule>;
};

const runNpmScript = async (scriptName: string, dataDir: string) => {
  const sanitizedEnv: NodeJS.ProcessEnv = {
    ...process.env,
    POWERMETA4_DATA_DIR: dataDir,
  };
  const command = process.platform === "win32" ? `npm run ${scriptName}` : `npm run ${scriptName}`;

  await execAsync(command, {
    cwd: repoRoot,
    env: sanitizedEnv,
    shell: process.platform === "win32" ? "powershell.exe" : undefined,
  });
};

describe("local database setup", () => {
  const createdDirectories: string[] = [];

  afterEach(async () => {
    vi.resetModules();
    delete process.env.POWERMETA4_DATA_DIR;

    while (createdDirectories.length > 0) {
      const directory = createdDirectories.pop();
      if (!directory) continue;
      rmSync(directory, { force: true, recursive: true });
    }
  });

  it("declares Prisma 7 config, schema, migration and npm scripts", async () => {
    const packageJson = JSON.parse(readFileSync(path.join(repoRoot, "package.json"), "utf8")) as {
      scripts?: Record<string, string>;
    };

    expect(packageJson.scripts).toMatchObject({
      "db:generate": expect.any(String),
      "db:migrate": expect.any(String),
      "db:deploy": expect.any(String),
      "db:validate": expect.any(String),
      "db:studio": expect.any(String),
      setup: expect.any(String),
    });

    const prismaConfigPath = path.join(repoRoot, "prisma.config.ts");
    const schemaPath = path.join(repoRoot, "prisma", "schema.prisma");
    await expect(access(prismaConfigPath)).resolves.toBeUndefined();
    await expect(access(schemaPath)).resolves.toBeUndefined();

    const migrationsDirectory = path.join(repoRoot, "prisma", "migrations");
    const migrations = await readdir(migrationsDirectory);
    expect(migrations.some((entry) => entry !== "migration_lock.toml")).toBe(true);

    const schemaContents = readFileSync(schemaPath, "utf8");
    expect(schemaContents).toContain('provider     = "prisma-client"');
    expect(schemaContents).toContain('provider = "sqlite"');
    expect(schemaContents).toContain('output       = "../src/generated/prisma"');
    for (const model of [
      "Company",
      "Conversation",
      "Message",
      "Attachment",
      "AppSetting",
      "WorkspaceSetting",
      "ToolActivity",
      "SoapSession",
      "LocalBrowserSession",
      "PendingBackupImport",
    ]) {
      expect(schemaContents).toMatch(new RegExp(`model\\s+${model}\\s*\\{`));
    }
  });

  it("resolves local data paths and creates the expected directories", async () => {
    const dataDir = localDatabaseTestDir();
    createdDirectories.push(dataDir);

    const { DEFAULT_DATABASE_SCHEMA_VERSION, DEFAULT_BACKUP_VERSION } =
      await importLocalDatabaseModule<{
        DEFAULT_DATABASE_SCHEMA_VERSION: number;
        DEFAULT_BACKUP_VERSION: number;
      }>("constants.ts");
    const { ensureLocalDataDirectories, resolveLocalDataPaths } = await importLocalDatabaseModule<{
      ensureLocalDataDirectories: (dataDir?: string) => Promise<void>;
      resolveLocalDataPaths: (dataDir?: string) => {
        rootDir: string;
        databaseFilePath: string;
        backupsDir: string;
        uploadsDir: string;
        tempDir: string;
      };
    }>("paths.ts");

    expect(DEFAULT_DATABASE_SCHEMA_VERSION).toBe(1);
    expect(DEFAULT_BACKUP_VERSION).toBe(1);

    const paths = resolveLocalDataPaths(dataDir);
    await ensureLocalDataDirectories(dataDir);

    expect(paths.rootDir).toBe(dataDir);
    expect(paths.databaseFilePath).toBe(path.join(dataDir, "powermeta4.db"));
    await expect(access(paths.uploadsDir)).resolves.toBeUndefined();
    await expect(access(paths.backupsDir)).resolves.toBeUndefined();
    await expect(access(paths.tempDir)).resolves.toBeUndefined();
  });

  it("bootstraps exactly one local company and exposes it through the repository", async () => {
    const dataDir = localDatabaseTestDir();
    createdDirectories.push(dataDir);

    await runNpmScript("db:deploy", dataDir);

    const { resolveLocalDataPaths, toSqliteConnectionUrl } = await importLocalDatabaseModule<{
      resolveLocalDataPaths: (dataDir?: string) => { databaseFilePath: string };
      toSqliteConnectionUrl: (databaseFilePath: string) => string;
    }>("paths.ts");
    const { createPrismaClient } = await importLocalDatabaseModule<{
      createPrismaClient: (databaseUrl: string) => {
        $disconnect(): Promise<void>;
      };
    }>("client.ts");
    const { createCompanyRepository } = await importLocalDatabaseModule<{
      createCompanyRepository: (prisma: object) => {
        count(): Promise<number>;
        list(): Promise<Array<{ id: string; name: string }>>;
        createLocalCompany(): Promise<{ id: string; name: string }>;
      };
    }>("repositories/company-repository.ts");
    const { bootstrapLocalCompany } = await importLocalDatabaseModule<{
      bootstrapLocalCompany: (repository: {
        count(): Promise<number>;
        list(): Promise<Array<{ id: string; name: string }>>;
        createLocalCompany(): Promise<{ id: string; name: string }>;
      }) => Promise<{ created: boolean; company: { id: string; name: string } }>;
    }>("bootstrap.ts");

    const databaseUrl = toSqliteConnectionUrl(resolveLocalDataPaths(dataDir).databaseFilePath);
    const prisma = createPrismaClient(databaseUrl);
    const repository = createCompanyRepository(prisma);

    expect(await repository.count()).toBe(0);

    try {
      const firstBootstrap = await bootstrapLocalCompany(repository);
      const secondBootstrap = await bootstrapLocalCompany(repository);
      const companies = await repository.list();

      expect(firstBootstrap).toMatchObject({
        created: true,
        company: { id: expect.any(String), name: "Empresa local" },
      });
      expect(secondBootstrap).toMatchObject({
        created: false,
        company: { id: firstBootstrap.company.id, name: "Empresa local" },
      });
      expect(companies).toEqual([
        expect.objectContaining({ id: firstBootstrap.company.id, name: "Empresa local" }),
      ]);
    } finally {
      await prisma.$disconnect();
    }
  });

  it("returns the same company when bootstrap calls race", async () => {
    const { bootstrapLocalCompany } = await importLocalDatabaseModule<{
      bootstrapLocalCompany: (repository: {
        getFirst(): Promise<{ id: string; name: string } | null>;
        createLocalCompany(): Promise<{ id: string; name: string }>;
      }) => Promise<{ created: boolean; company: { id: string; name: string } }>;
    }>("bootstrap.ts");
    let company: { id: string; name: string } | null = null;
    let createCalls = 0;
    const repository = {
      getFirst: async () => company,
      createLocalCompany: async () => {
        createCalls += 1;
        await new Promise((resolve) => setTimeout(resolve, 5));
        if (company) {
          const error = Object.assign(new Error("duplicate"), { code: "P2002" });
          throw error;
        }
        company = { id: "company-race", name: "Empresa local" };
        return company;
      },
    };

    const results = await Promise.all([
      bootstrapLocalCompany(repository),
      bootstrapLocalCompany(repository),
    ]);

    expect(createCalls).toBe(2);
    expect(results.filter((result) => result.created)).toHaveLength(1);
    expect(results[0]?.company).toEqual(results[1]?.company);
  });
});
