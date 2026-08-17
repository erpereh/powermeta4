import { DatabaseSync } from "node:sqlite";

import { afterEach, describe, expect, it } from "vitest";

import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createWorkspaceRepository } from "@/lib/workspace/repository";
import { createAiProviderConfigRepository } from "@/server/database/repositories/ai-provider-config-repository";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import type { AiProviderConfigInput } from "@/types/ai-provider-config";

const databases: DatabaseSync[] = [];
const META4_AUTH = {
  mode: "meta4" as const,
  username: "usuario local",
  canUseMeta4: true,
  societyCode: "CYC" as const,
};

const testDpapi = createDpapiAdapter({
  platform: "win32",
  runner: async (operation, value) =>
    operation === "protect" ? `protected:${value}` : value.replace("protected:", ""),
});

const createRepository = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  bootstrapDatabase(database);
  databases.push(database);
  return {
    database,
    repository: createWorkspaceRepository(database),
    providerConfigs: createAiProviderConfigRepository(database, testDpapi),
  };
};

const CONFIG_INPUT: AiProviderConfigInput = {
  name: "Gemini Flash",
  baseUrl: "https://api.example.com/v1",
  model: "gemini-flash",
  apiKey: "secret-key",
};

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

describe("workspace repository", () => {
  it("serializes only the safe auth view into the workspace snapshot", async () => {
    const { repository } = createRepository();
    const authWithServerOnlyFields = {
      mode: "debug" as const,
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
      sessionId: "internal-browser-session",
      cookieHash: "hash-only",
      nonce: "opaque-cookie-value",
      expiresAt: new Date("2026-09-01T00:00:00.000Z"),
    };

    const snapshot = await repository.getSnapshot(authWithServerOnlyFields);

    expect(snapshot.auth).toEqual({
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
    });
    expect(JSON.stringify(snapshot)).not.toContain("sessionId");
    expect(JSON.stringify(snapshot)).not.toContain("cookieHash");
    expect(JSON.stringify(snapshot)).not.toContain("opaque-cookie-value");
    expect(JSON.stringify(snapshot)).not.toContain("expiresAt");
    expect("session" in snapshot).toBe(false);
  });

  it("bootstraps once, isolates companies and cascades their data", async () => {
    const { database, repository } = createRepository();

    const firstSnapshot = await repository.getSnapshot(META4_AUTH);
    const initialCompany = firstSnapshot.companies[0];
    if (!initialCompany) throw new Error("The bootstrap company was not created");
    expect(firstSnapshot.companies).toHaveLength(1);
    expect(initialCompany.name).toBe("Empresa local");

    const secondCompany = await repository.createCompany({
      id: "company-second",
      name: "Otra empresa",
      clientMutationId: "11111111-1111-4111-8111-111111111111",
    });
    const repeatedCompany = await repository.createCompany({
      id: "company-second",
      name: "Otra empresa",
      clientMutationId: "11111111-1111-4111-8111-111111111111",
    });
    expect(repeatedCompany.id).toBe(secondCompany.id);

    const firstConversation = await repository.createConversation(
      initialCompany.id,
      "conversation-first",
      "22222222-2222-4222-8222-222222222222",
    );
    const secondConversation = await repository.createConversation(
      secondCompany.id,
      "conversation-second",
      "33333333-3333-4333-8333-333333333333",
    );
    expect(
      await repository.createConversation(
        secondCompany.id,
        "conversation-second",
        "33333333-3333-4333-8333-333333333333",
      ),
    ).toMatchObject({ id: secondConversation.id });

    await repository.upsertMessage({
      companyId: initialCompany.id,
      conversationId: firstConversation.id,
      id: "message-first",
      role: "user",
      content: [{ type: "text", text: "Aislado" }],
      status: "complete",
      clientMutationId: "44444444-4444-4444-8444-444444444444",
    });
    await repository.upsertMessage({
      companyId: secondCompany.id,
      conversationId: secondConversation.id,
      id: "message-second",
      role: "assistant",
      content: [{ type: "text", text: "Persistido" }],
      status: "incomplete",
      clientMutationId: "55555555-5555-4555-8555-555555555555",
    });
    await repository.recordToolVisit(secondCompany.id, "users.consult");

    await expect(
      repository.getConversation(secondCompany.id, firstConversation.id),
    ).rejects.toThrow(/no pertenece/);

    const secondWorkspace = (await repository.getSnapshot(META4_AUTH)).workspaces[secondCompany.id];
    expect(secondWorkspace?.preferences.selectedProviderConfigId).toBeNull();
    expect(secondWorkspace?.recentTools[0]?.toolId).toBe("users.consult");

    expect(await repository.deleteCompany(secondCompany.id)).toBe(initialCompany.id);
    expect(database.prepare("SELECT COUNT(*) AS count FROM companies").get()?.count).toBe(1);
    expect(database.prepare("SELECT COUNT(*) AS count FROM conversations").get()?.count).toBe(1);
    expect(database.prepare("SELECT COUNT(*) AS count FROM messages").get()?.count).toBe(1);
    expect(database.prepare("SELECT COUNT(*) AS count FROM workspace_settings").get()?.count).toBe(
      1,
    );
    expect(database.prepare("SELECT COUNT(*) AS count FROM tool_activity").get()?.count).toBe(0);
    await expect(repository.deleteCompany(initialCompany.id)).rejects.toThrow(/última empresa/);
  });

  it("preserves branch messages and persists the selected head", async () => {
    const { repository } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");
    const conversation = await repository.createConversation(company.id, "conversation-branches");

    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "root-user",
      role: "user",
      content: [{ type: "text", text: "Pregunta" }],
      status: "complete",
      generationId: "generation-root",
      sequence: 1,
    });
    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "branch-a",
      role: "assistant",
      content: [{ type: "text", text: "Respuesta A" }],
      status: "complete",
      parentMessageId: "root-user",
      generationId: "generation-a",
      sequence: 2,
    });
    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "branch-b",
      role: "assistant",
      content: [{ type: "text", text: "Respuesta B" }],
      status: "complete",
      parentMessageId: "root-user",
      generationId: "generation-b",
      sequence: 2,
    });

    await repository.setConversationHead(company.id, conversation.id, "branch-b");
    const restored = await repository.getConversation(company.id, conversation.id);
    expect(restored.headMessageId).toBe("branch-b");
    expect(restored.messages.map((message) => message.id)).toEqual([
      "root-user",
      "branch-a",
      "branch-b",
    ]);
    expect(restored.messages.find((message) => message.id === "branch-b")).toMatchObject({
      parentMessageId: "root-user",
      generationId: "generation-b",
      sequence: 2,
    });
  });

  it("finalizes a response and its conversation head atomically and idempotently", async () => {
    const { database, repository } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");
    const conversation = await repository.createConversation(company.id, "conversation-finalize");

    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "assistant-final",
      role: "assistant",
      content: [],
      status: "running",
      generationId: "generation-final",
      sequence: 0,
    });

    const first = await repository.finalizeMessage({
      companyId: company.id,
      conversationId: conversation.id,
      messageId: "assistant-final",
      content: [{ type: "text", text: "Respuesta final" }],
      status: "complete",
      generationId: "generation-final",
      sequence: 1,
      clientMutationId: "66666666-6666-4666-8666-666666666666",
    });
    const repeated = await repository.finalizeMessage({
      companyId: company.id,
      conversationId: conversation.id,
      messageId: "assistant-final",
      content: [{ type: "text", text: "Contenido obsoleto" }],
      status: "failed",
      generationId: "generation-final",
      sequence: 1,
      clientMutationId: "66666666-6666-4666-8666-666666666666",
    });

    expect(first.status).toBe("complete");
    expect(repeated.content).toEqual(first.content);
    expect(
      database
        .prepare("SELECT head_message_id FROM conversations WHERE id = ?")
        .get(conversation.id)?.head_message_id,
    ).toBe("assistant-final");
    expect(
      database.prepare("SELECT COUNT(*) AS count FROM idempotency_receipts").get()?.count,
    ).toBe(1);
  });

  it("recovers abandoned running messages as incomplete without resuming them", async () => {
    const { repository } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");
    const conversation = await repository.createConversation(company.id, "conversation-recovery");
    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "assistant-abandoned",
      role: "assistant",
      content: [{ type: "text", text: "Parcial" }],
      status: "running",
      generationId: "generation-abandoned",
      sequence: 2,
    });

    const snapshot = await repository.getSnapshot(META4_AUTH);
    const recovered = snapshot.workspaces[company.id]?.chats[0]?.messages[0];
    expect(recovered).toMatchObject({ status: "incomplete", errorCode: "PROCESS_RESTARTED" });
    expect(snapshot.workspaces[company.id]?.chats[0]?.headMessageId).toBe("assistant-abandoned");
  });

  it("exposes newly created ai provider configs and auto-repairs the selection end to end", async () => {
    const { repository, providerConfigs } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");

    const gemini = await providerConfigs.create(company.id, CONFIG_INPUT);
    const firstSnapshot = await repository.getSnapshot(META4_AUTH);
    const firstWorkspace = firstSnapshot.workspaces[company.id];
    expect(firstWorkspace?.aiProviderConfigs).toEqual([gemini]);
    expect(firstWorkspace?.preferences.selectedProviderConfigId).toBe(gemini.id);

    const grok = await providerConfigs.create(company.id, {
      ...CONFIG_INPUT,
      name: "Grok Fast",
      model: "grok-4-fast",
    });
    const secondSnapshot = await repository.getSnapshot(META4_AUTH);
    const secondConfigs = secondSnapshot.workspaces[company.id]?.aiProviderConfigs ?? [];
    expect(secondConfigs.map((config) => config.id).sort()).toEqual([gemini.id, grok.id].sort());

    await repository.setSelectedProviderConfig(company.id, grok.id);
    const reloadedSnapshot = await repository.getSnapshot(META4_AUTH);
    expect(reloadedSnapshot.workspaces[company.id]?.preferences.selectedProviderConfigId).toBe(
      grok.id,
    );

    await providerConfigs.delete(company.id, grok.id);
    const afterDeleteSelected = await repository.getSnapshot(META4_AUTH);
    expect(afterDeleteSelected.workspaces[company.id]?.preferences.selectedProviderConfigId).toBe(
      gemini.id,
    );
    expect(afterDeleteSelected.workspaces[company.id]?.aiProviderConfigs).toEqual([gemini]);

    await providerConfigs.delete(company.id, gemini.id);
    const afterDeleteAll = await repository.getSnapshot(META4_AUTH);
    expect(afterDeleteAll.workspaces[company.id]?.preferences.selectedProviderConfigId).toBeNull();
    expect(afterDeleteAll.workspaces[company.id]?.aiProviderConfigs).toEqual([]);
  });

  it("never leaks an ai provider config into another company's snapshot", async () => {
    const { repository, providerConfigs } = createRepository();
    const firstCompany = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!firstCompany) throw new Error("The bootstrap company was not created");
    const secondCompany = await repository.createCompany({
      id: "company-scope-test",
      name: "Empresa aislada",
    });

    await providerConfigs.create(firstCompany.id, CONFIG_INPUT);
    const snapshot = await repository.getSnapshot(META4_AUTH);
    expect(snapshot.workspaces[firstCompany.id]?.aiProviderConfigs).toHaveLength(1);
    expect(snapshot.workspaces[secondCompany.id]?.aiProviderConfigs).toEqual([]);
    expect(snapshot.workspaces[secondCompany.id]?.preferences.selectedProviderConfigId).toBeNull();
  });

  it("keeps an incomplete config (empty model) out of the usable/selectable set", async () => {
    const { repository, providerConfigs } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");

    const incomplete = await providerConfigs.create(company.id, CONFIG_INPUT);
    await providerConfigs.update(company.id, incomplete.id, {
      name: incomplete.name,
      baseUrl: incomplete.baseUrl,
      model: "",
    });

    expect(providerConfigs.list(company.id)).toHaveLength(1);
    expect(providerConfigs.listUsable(company.id)).toHaveLength(0);

    const snapshot = await repository.getSnapshot(META4_AUTH);
    const workspace = snapshot.workspaces[company.id];
    expect(workspace?.aiProviderConfigs).toHaveLength(1);
    expect(workspace?.preferences.selectedProviderConfigId).toBeNull();
  });

  it("persists user content 1013 exactly, without a newline", async () => {
    const { repository, database } = createRepository();
    const company = (await repository.getSnapshot(META4_AUTH)).companies[0];
    if (!company) throw new Error("The bootstrap company was not created");
    const conversation = await repository.createConversation(company.id, "conversation-1013");
    await repository.upsertMessage({
      companyId: company.id,
      conversationId: conversation.id,
      id: "message-1013",
      role: "user",
      content: [{ type: "text", text: "1013" }],
      status: "complete",
    });

    const stored = await repository.getConversation(company.id, conversation.id);
    const message = stored.messages.find((item) => item.id === "message-1013");
    const content = message?.content;
    expect(Array.isArray(content)).toBe(true);
    if (!Array.isArray(content)) throw new Error("Expected text parts");
    const part = content[0];
    expect(part).toEqual({ type: "text", text: "1013" });
    if (!part || typeof part === "string" || part.type !== "text" || !("text" in part)) {
      throw new Error("Expected a text part");
    }
    expect(JSON.stringify(part.text)).toBe('"1013"');
    expect([...part.text].map((char) => char.codePointAt(0))).toEqual([49, 48, 49, 51]);
    expect(part.text).not.toContain("\n");

    const row = database
      .prepare("SELECT content_json FROM messages WHERE id = ?")
      .get("message-1013") as { content_json: string };
    expect(JSON.parse(row.content_json)).toEqual([{ type: "text", text: "1013" }]);
  });
});
