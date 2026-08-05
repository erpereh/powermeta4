import { exec } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { afterEach, describe, expect, it } from "vitest";

const execAsync = promisify(exec);
const createdDirectories: string[] = [];

afterEach(async () => {
  const { disconnectPrismaClient } = await import("@/lib/local-database/client");
  const { resetWorkspaceRepository } = await import("@/lib/workspace/service");
  await disconnectPrismaClient();
  resetWorkspaceRepository();
  delete process.env.POWERMETA4_DATA_DIR;
  while (createdDirectories.length > 0) {
    const directory = createdDirectories.pop();
    if (directory) await rm(directory, { recursive: true, force: true });
  }
});

const createRepository = async () => {
  const dataDir = await mkdtemp(path.join(os.tmpdir(), "powermeta4-workspace-test-"));
  createdDirectories.push(dataDir);
  const env = { ...process.env, POWERMETA4_DATA_DIR: dataDir };
  await execAsync("npm run db:deploy", {
    cwd: process.cwd(),
    env,
    shell: process.platform === "win32" ? "powershell.exe" : undefined,
  });
  process.env.POWERMETA4_DATA_DIR = dataDir;
  const { getPrismaClient } = await import("@/lib/local-database/client");
  const { createWorkspaceRepository } = await import("@/lib/workspace/repository");
  const prisma = getPrismaClient();
  return { prisma, repository: createWorkspaceRepository(prisma) };
};

describe("workspace repository", () => {
  it("bootstraps once, isolates companies and cascades their data", async () => {
    const { prisma, repository } = await createRepository();

    const firstSnapshot = await repository.getSnapshot("usuario local");
    const initialCompany = firstSnapshot.companies[0];
    if (!initialCompany) throw new Error("The bootstrap company was not created");
    expect(firstSnapshot.companies).toHaveLength(1);
    expect(initialCompany.name).toBe("Empresa local");
    expect(initialCompany.id).not.toBe("company-local");

    await prisma.company.update({
      where: { id: initialCompany.id },
      data: { name: "Empresa renombrada" },
    });
    const renamedSnapshot = await repository.getSnapshot("usuario local");
    expect(renamedSnapshot.companies).toHaveLength(1);
    expect(renamedSnapshot.companies[0]?.name).toBe("Empresa renombrada");

    const secondCompany = await repository.createCompany({ name: "Otra empresa" });
    const firstConversation = await repository.createConversation(
      initialCompany.id,
      "conversation-first",
    );
    const secondConversation = await repository.createConversation(
      secondCompany.id,
      "conversation-second",
    );
    const sameConversation = await repository.createConversation(
      secondCompany.id,
      "conversation-second",
    );
    expect(sameConversation.id).toBe(secondConversation.id);
    expect(await prisma.conversation.count()).toBe(2);

    await repository.upsertMessage({
      companyId: initialCompany.id,
      conversationId: firstConversation.id,
      id: "message-first",
      role: "user",
      content: [{ type: "text", text: "Aislado" }],
      status: "complete",
    });
    await repository.upsertMessage({
      companyId: secondCompany.id,
      conversationId: secondConversation.id,
      id: "message-second",
      role: "assistant",
      content: [{ type: "text", text: "Persistido" }],
      status: "incomplete",
    });
    await repository.setSelectedModel(secondCompany.id, "luma-deep");
    await repository.recordToolVisit(secondCompany.id, "users.consult");

    await expect(
      repository.getConversation(secondCompany.id, firstConversation.id),
    ).rejects.toThrow(/no pertenece/);

    const secondWorkspace = (await repository.getSnapshot("usuario local")).workspaces[
      secondCompany.id
    ];
    expect(secondWorkspace?.preferences.selectedModelId).toBe("luma-deep");
    expect(secondWorkspace?.recentTools[0]?.toolId).toBe("users.consult");

    expect(await repository.deleteCompany(secondCompany.id)).toBe(initialCompany.id);
    expect(await prisma.company.count()).toBe(1);
    expect(await prisma.conversation.count()).toBe(1);
    expect(await prisma.message.count()).toBe(1);
    expect(await prisma.workspaceSetting.count()).toBe(1);
    expect(await prisma.toolActivity.count()).toBe(0);
    await expect(repository.deleteCompany(initialCompany.id)).rejects.toThrow(/última empresa/);

    const finalSnapshot = await repository.getSnapshot("usuario local");
    expect(finalSnapshot.companies).toHaveLength(1);
    expect(finalSnapshot.companies[0]?.name).toBe("Empresa renombrada");
  }, 30_000);
});
