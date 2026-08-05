import "server-only";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

import { PrismaClient } from "../../generated/prisma/client";
import {
  ensureLocalDataDirectoriesSync,
  resolveLocalDataPaths,
  toSqliteConnectionUrl,
} from "./paths";

type PrismaClientInstance = InstanceType<typeof PrismaClient>;

const globalForPrisma = globalThis as {
  __powermeta4Prisma?: PrismaClientInstance;
};

const resolveDefaultDatabaseUrl = () => {
  ensureLocalDataDirectoriesSync();
  return toSqliteConnectionUrl(resolveLocalDataPaths().databaseFilePath);
};

export const createPrismaClient = (databaseUrl = resolveDefaultDatabaseUrl()) => {
  const adapter = new PrismaBetterSqlite3({
    url: databaseUrl,
  });

  return new PrismaClient({ adapter });
};

export const getPrismaClient = () => {
  if (!globalForPrisma.__powermeta4Prisma) {
    globalForPrisma.__powermeta4Prisma = createPrismaClient();
  }

  return globalForPrisma.__powermeta4Prisma;
};

export const disconnectPrismaClient = async () => {
  if (globalForPrisma.__powermeta4Prisma) {
    await globalForPrisma.__powermeta4Prisma.$disconnect();
    delete globalForPrisma.__powermeta4Prisma;
  }
};
