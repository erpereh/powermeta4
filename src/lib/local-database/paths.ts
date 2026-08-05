import { mkdir, mkdirSync, writeFile, writeFileSync } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

import {
  DEFAULT_DATA_DIR,
  LOCAL_DATABASE_BACKUPS_DIRNAME,
  LOCAL_DATABASE_FILENAME,
  LOCAL_DATABASE_UPLOADS_DIRNAME,
  LOCAL_DATABASE_TEMP_DIRNAME,
  POWERMETA4_DATA_DIR_ENV,
} from "./constants";

const mkdirAsync = promisify(mkdir);
const writeFileAsync = promisify(writeFile);

export type LocalDataPaths = {
  rootDir: string;
  databaseFilePath: string;
  uploadsDir: string;
  backupsDir: string;
  tempDir: string;
};

const resolveConfiguredDataDir = (dataDir?: string) => {
  const configuredValue = dataDir ?? process.env[POWERMETA4_DATA_DIR_ENV] ?? DEFAULT_DATA_DIR;
  const trimmedValue = configuredValue.trim();

  return trimmedValue.length > 0 ? trimmedValue : DEFAULT_DATA_DIR;
};

export const resolveLocalDataPaths = (dataDir?: string, cwd = process.cwd()): LocalDataPaths => {
  const rootDir = path.resolve(cwd, resolveConfiguredDataDir(dataDir));

  return {
    rootDir,
    databaseFilePath: path.join(rootDir, LOCAL_DATABASE_FILENAME),
    uploadsDir: path.join(rootDir, LOCAL_DATABASE_UPLOADS_DIRNAME),
    backupsDir: path.join(rootDir, LOCAL_DATABASE_BACKUPS_DIRNAME),
    tempDir: path.join(rootDir, LOCAL_DATABASE_TEMP_DIRNAME),
  };
};

const getManagedDirectories = (paths: LocalDataPaths) => [
  paths.rootDir,
  paths.uploadsDir,
  paths.backupsDir,
  paths.tempDir,
];

export const ensureLocalDataDirectories = async (dataDir?: string, cwd = process.cwd()) => {
  const paths = resolveLocalDataPaths(dataDir, cwd);

  await Promise.all(
    getManagedDirectories(paths).map((directory) => mkdirAsync(directory, { recursive: true })),
  );

  await writeFileAsync(paths.databaseFilePath, "", { flag: "a" });
  return paths;
};

export const ensureLocalDataDirectoriesSync = (dataDir?: string, cwd = process.cwd()) => {
  const paths = resolveLocalDataPaths(dataDir, cwd);

  for (const directory of getManagedDirectories(paths)) {
    mkdirSync(directory, { recursive: true });
  }

  writeFileSync(paths.databaseFilePath, "", { flag: "a" });
  return paths;
};

export const toSqliteConnectionUrl = (databaseFilePath: string) =>
  `file:${databaseFilePath.replaceAll(path.sep, "/")}`;
