import "server-only";

import type { PrismaClient } from "@/generated/prisma/client";

export type PendingImportRecord = {
  id: string;
  importIdHash: string;
  localBrowserSessionHash: string;
  checksum: string;
  relativePath: string;
  expiresAt: Date;
  consumedAt: Date | null;
};

type PendingImportPrismaClient = Pick<PrismaClient, "pendingBackupImport">;

export const createPendingImportRepository = (prisma: PendingImportPrismaClient) => ({
  create: async (data: Omit<PendingImportRecord, "id" | "consumedAt">) =>
    prisma.pendingBackupImport.create({
      data: {
        id: data.importIdHash,
        importIdHash: data.importIdHash,
        localBrowserSessionHash: data.localBrowserSessionHash,
        checksum: data.checksum,
        relativePath: data.relativePath,
        expiresAt: data.expiresAt,
      },
    }),
  get: (importIdHash: string) =>
    prisma.pendingBackupImport.findUnique({
      where: { importIdHash },
      select: {
        id: true,
        importIdHash: true,
        localBrowserSessionHash: true,
        checksum: true,
        relativePath: true,
        expiresAt: true,
        consumedAt: true,
      },
    }),
  consume: async (importIdHash: string, sessionHash: string, now: Date) => {
    const result = await prisma.pendingBackupImport.updateMany({
      where: {
        importIdHash,
        localBrowserSessionHash: sessionHash,
        consumedAt: null,
        expiresAt: { gt: now },
      },
      data: { consumedAt: now },
    });
    return result.count === 1;
  },
  delete: (importIdHash: string) =>
    prisma.pendingBackupImport.deleteMany({ where: { importIdHash } }),
  deleteExpired: (now: Date) =>
    prisma.pendingBackupImport.deleteMany({
      where: { OR: [{ expiresAt: { lte: now } }, { consumedAt: { not: null } }] },
    }),
});
