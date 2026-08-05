import { exec } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, describe, expect, it } from "vitest";

import { normalizeZipEntryName, validateZipEntries } from "@/lib/backups/zip-safety";

const execAsync = promisify(exec);
const createdDirectories: string[] = [];

afterEach(async () => {
  const { disconnectPrismaClient } = await import("@/lib/local-database/client");
  const { resetAuthService } = await import("@/lib/auth/server");
  const { resetWorkspaceRepository } = await import("@/lib/workspace/service");
  await disconnectPrismaClient();
  resetAuthService();
  resetWorkspaceRepository();
  delete process.env.POWERMETA4_DATA_DIR;
  while (createdDirectories.length > 0) {
    const directory = createdDirectories.pop();
    if (directory) await rm(directory, { recursive: true, force: true });
  }
});

describe("backup safety", () => {
  it("rejects Zip Slip paths, symlinks and configured limits", () => {
    expect(() => normalizeZipEntryName("../outside.txt")).toThrow();
    expect(() => normalizeZipEntryName("C:/outside.txt")).toThrow();
    expect(() => normalizeZipEntryName("uploads/../outside.txt")).toThrow();

    const symlinkEntry = {
      filename: "uploads/link",
      externalFileAttribute: 0xa0000000,
      compressedSize: 1,
      uncompressedSize: 1,
      directory: false,
    };
    expect(() =>
      validateZipEntries([symlinkEntry], {
        compressedBytes: 10,
        uncompressedBytes: 10,
        entries: 2,
        singleFileBytes: 10,
      }),
    ).toThrow(/simbólico/);
  });

  it("exports, validates, restores once and keeps auth tables empty", async () => {
    const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-backup-test-"));
    createdDirectories.push(dataDir);
    const env = { ...process.env, POWERMETA4_DATA_DIR: dataDir };
    await execAsync("npm run db:deploy", {
      cwd: process.cwd(),
      env,
      shell: process.platform === "win32" ? "powershell.exe" : undefined,
    });
    process.env.POWERMETA4_DATA_DIR = dataDir;

    const { getPrismaClient } = await import("@/lib/local-database/client");
    const prisma = getPrismaClient();
    await prisma.company.create({
      data: {
        id: "company-backup-test",
        name: "Empresa local",
        shortName: "Local",
        icon: "building",
        color: "blue",
      },
    });
    await prisma.conversation.create({
      data: { id: "conversation-backup-test", companyId: "company-backup-test", title: "Copia" },
    });
    await prisma.message.create({
      data: {
        id: "message-backup-test",
        conversationId: "conversation-backup-test",
        role: "user",
        contentJson: JSON.stringify([{ type: "text", text: "Persistir" }]),
        status: "complete",
      },
    });

    const { exportBackup, restoreBackup, validateBackup } = await import("@/lib/backups/service");
    const exported = await exportBackup();
    expect(exported.bytes.byteLength).toBeGreaterThan(0);
    expect(exported.checksum).toMatch(/^[a-f0-9]{64}$/);

    const validation = await validateBackup(exported.bytes, "browser-session-hash-a");
    expect(validation.manifest.backupVersion).toBe(1);
    expect(validation.manifest.databaseSchemaVersion).toBe(1);
    expect(validation.manifest.appVersion).toBeTypeOf("string");
    expect(validation.importId).toMatch(/^[A-Za-z0-9_-]{43}$/);

    await expect(restoreBackup(validation.importId, "browser-session-hash-b")).rejects.toThrow(
      /pertenece/,
    );

    const pendingRecord = await prisma.pendingBackupImport.findFirst();
    if (!pendingRecord) throw new Error("Pending import was not stored");
    const pendingPath = path.join(dataDir, pendingRecord.relativePath);
    const tampered = new Uint8Array(await readFile(pendingPath));
    tampered[0] = (tampered[0] ?? 0) ^ 0xff;
    await writeFile(pendingPath, tampered);
    await expect(restoreBackup(validation.importId, "browser-session-hash-a")).rejects.toThrow(
      /checksum/,
    );
    expect(await prisma.pendingBackupImport.count()).toBe(0);

    const secondValidation = await validateBackup(exported.bytes, "browser-session-hash-a");
    await restoreBackup(secondValidation.importId, "browser-session-hash-a");
    await expect(
      restoreBackup(secondValidation.importId, "browser-session-hash-a"),
    ).rejects.toThrow();

    const restored = getPrismaClient();
    expect(await restored.company.count()).toBe(1);
    expect(await restored.conversation.count()).toBe(1);
    expect(await restored.message.count()).toBe(1);
    expect(await restored.soapSession.count()).toBe(0);
    expect(await restored.localBrowserSession.count()).toBe(0);
    expect(await restored.pendingBackupImport.count()).toBe(0);

    const thirdValidation = await validateBackup(exported.bytes, "browser-session-hash-a");
    const pendingToExpire = await restored.pendingBackupImport.findFirst();
    if (!pendingToExpire) throw new Error("Pending import was not stored");
    await restored.pendingBackupImport.update({
      where: { id: pendingToExpire.id },
      data: { expiresAt: new Date(0) },
    });
    await expect(restoreBackup(thirdValidation.importId, "browser-session-hash-a")).rejects.toThrow(
      /caducado/,
    );
  });
});
