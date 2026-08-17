import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";

import { AgentProviderConfigError, AgentProviderRuntimeError } from "@/lib/agent/errors";
import { noProviderMessage, runAgentTurn } from "@/lib/agent/runner";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createAgentPrivacyRepository } from "@/server/database/repositories/agent-privacy-repository";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { Message } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";

const databases: DatabaseSync[] = [];

const testDpapi: DpapiAdapter = {
  protectSecret: async (value) => `encrypted:${value}`,
  unprotectSecret: async (value) => value.replace(/^encrypted:/, ""),
};

const createHarness = () => {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  const { company } = bootstrapDatabase(database);
  databases.push(database);
  const timestamp = new Date().toISOString();
  database
    .prepare(
      "INSERT INTO conversations (id, company_id, title, favorite, created_at, updated_at) VALUES ('conversation-1', ?, 'Chat', 0, ?, ?)",
    )
    .run(company.id, timestamp, timestamp);
  return {
    database,
    companyId: company.id as CompanyId,
    privacy: createAgentPrivacyRepository(database, testDpapi),
  };
};

const persist = (database: DatabaseSync, messages: readonly Message[]) => {
  const timestamp = new Date().toISOString();
  const insert = database.prepare(
    "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, error_code, created_at, updated_at) VALUES (?, 'conversation-1', ?, ?, ?, ?, NULL, 0, NULL, ?, ?)",
  );
  for (const message of messages) {
    insert.run(
      message.id,
      message.parentMessageId ?? null,
      message.role,
      JSON.stringify(message.content),
      message.status,
      timestamp,
      timestamp,
    );
  }
};

const userMessage = (text: string): Message => ({
  id: "user-1",
  conversationId: "conversation-1",
  role: "user",
  content: [{ type: "text", text }],
  createdAt: new Date().toISOString(),
  status: "complete",
  parentMessageId: null,
});

const assistantMessage = (): Message => ({
  id: "assistant-1",
  conversationId: "conversation-1",
  role: "assistant",
  content: [],
  createdAt: new Date().toISOString(),
  status: "running",
  parentMessageId: "user-1",
});

const textResponse = (text: string): Response =>
  new Response(JSON.stringify({ choices: [{ message: { role: "assistant", content: text } }] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

describe("agent provider selection", () => {
  it("does not return the missing-model copy when a usable Gemini config resolves", async () => {
    const { database, companyId, privacy } = createHarness();
    const user = userMessage("hola");
    const assistant = assistantMessage();
    persist(database, [user, assistant]);

    const result = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: assistant.id,
      messages: [user, assistant],
      privacy,
      listUsers: async () => ({ society: "CYC", users: [] }),
      tools: [],
      resolveProvider: async () => ({
        id: "config-gemini",
        name: "Gemini",
        baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
        model: "gemini-2.5-flash-lite",
        apiKey: "secret",
      }),
      fetchImpl: (async () => textResponse("Hola, ¿en qué te ayudo?")) as typeof fetch,
    });

    expect(result.content).toEqual([{ type: "text", text: "Hola, ¿en qué te ayudo?" }]);
    expect(JSON.stringify(result.content)).not.toContain(noProviderMessage);
  });

  it("returns the missing-model copy only for AgentProviderConfigError", async () => {
    const { database, companyId, privacy } = createHarness();
    const user = userMessage("hola");
    const assistant = assistantMessage();
    persist(database, [user, assistant]);

    const result = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: assistant.id,
      messages: [user, assistant],
      privacy,
      listUsers: async () => ({ society: "CYC", users: [] }),
      tools: [],
      resolveProvider: async () => {
        throw new AgentProviderConfigError("Configura un modelo en Ajustes para usar el asistente.");
      },
      fetchImpl: (async () => {
        throw new Error("provider should not be called");
      }) as typeof fetch,
    });

    expect(result.content).toEqual([{ type: "text", text: noProviderMessage }]);
  });

  it("does not disguise a runtime/decrypt failure as a missing model", async () => {
    const { database, companyId, privacy } = createHarness();
    const user = userMessage("hola");
    const assistant = assistantMessage();
    persist(database, [user, assistant]);

    await expect(
      runAgentTurn({
        companyId,
        conversationId: "conversation-1",
        assistantMessageId: assistant.id,
        messages: [user, assistant],
        privacy,
        listUsers: async () => ({ society: "CYC", users: [] }),
        tools: [],
        resolveProvider: async () => {
          throw new AgentProviderRuntimeError(
            "No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.",
          );
        },
        fetchImpl: (async () => {
          throw new Error("provider should not be called");
        }) as typeof fetch,
      }),
    ).rejects.toBeInstanceOf(AgentProviderRuntimeError);
  });
});
