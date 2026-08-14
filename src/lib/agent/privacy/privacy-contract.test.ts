import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";

import { missingProjectionMessage, runAgentTurn } from "@/lib/agent/runner";
import { payloadContainsAny, serializeOutboundPayload } from "@/lib/agent/privacy/assert-outbound";
import { resolveEmployeeMention } from "@/lib/agent/resolve/employee-resolver";
import { buildAgentTools } from "@/lib/agent/tools/build";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import type { Meta4EmployeeDetailResult } from "@/lib/meta4/users/employee-detail-types";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";
import { bootstrapDatabase } from "@/server/database/bootstrap";
import { runMigrations } from "@/server/database/migrations";
import { createAgentPrivacyRepository } from "@/server/database/repositories/agent-privacy-repository";
import type { DpapiAdapter } from "@/lib/security/dpapi";
import type { Message } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";
import type { AnyAgentTool } from "@/lib/agent/tools/types";
import { z } from "zod";

const databases: DatabaseSync[] = [];

const testDpapi: DpapiAdapter = {
  protectSecret: async (value) => `encrypted:${value}`,
  unprotectSecret: async (value) => value.replace(/^encrypted:/, ""),
};

const JUAN: Meta4UserListItem = {
  id: "1013",
  fullName: "Juan Pérez",
  claveSelf: "jperez",
};

const JUAN_GARCIA: Meta4UserListItem = {
  id: "2044",
  fullName: "Juan García",
  claveSelf: "jgarcia",
};

const USERS = [JUAN, JUAN_GARCIA];

const PRIVATE_VALUES = [
  "Juan",
  "Pérez",
  "Juan Pérez",
  "1013",
  "CYC",
  "Analista Programador",
  "Recursos Humanos",
  "juan.perez@example.internal",
];

const juanDetail = (): Meta4EmployeeDetailResult => ({
  employeeId: "1013",
  fields: {
    n_Puesto: "Analista Programador",
    n_Unidad: "Recursos Humanos",
    correo: "juan.perez@example.internal",
  },
  emails: [
    {
      email: "juan.perez@example.internal",
      order: "1",
      startDate: "",
      endDate: "",
      locationTypeCode: "",
    },
  ],
});

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

const persistMessages = (database: DatabaseSync, messages: readonly Message[]) => {
  const timestamp = new Date().toISOString();
  const hasRow = database.prepare("SELECT 1 AS present FROM messages WHERE id = ?");
  const insert = database.prepare(
    "INSERT INTO messages (id, conversation_id, parent_message_id, role, content_json, status, generation_id, sequence, error_code, created_at, updated_at) VALUES (?, 'conversation-1', ?, ?, ?, ?, NULL, 0, NULL, ?, ?)",
  );
  const update = database.prepare(
    "UPDATE messages SET parent_message_id = ?, role = ?, content_json = ?, status = ?, updated_at = ? WHERE id = ?",
  );
  for (const message of messages) {
    if (hasRow.get(message.id)) {
      update.run(
        message.parentMessageId ?? null,
        message.role,
        JSON.stringify(message.content),
        message.status,
        timestamp,
        message.id,
      );
    } else {
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
  }
};

const userMessage = (id: string, text: string, parentId: string | null = null): Message => ({
  id,
  conversationId: "conversation-1",
  role: "user",
  content: [{ type: "text", text }],
  createdAt: new Date().toISOString(),
  status: "complete",
  parentMessageId: parentId,
});

const assistantMessage = (id: string, parentId: string, text = ""): Message => ({
  id,
  conversationId: "conversation-1",
  role: "assistant",
  content: text ? [{ type: "text", text }] : [],
  createdAt: new Date().toISOString(),
  status: "running",
  parentMessageId: parentId,
});

const extractEmpToken = (payload: unknown): string => {
  const serialized = serializeOutboundPayload(payload);
  const match = serialized.match(/EMP_[0-9A-F]{8}/i);
  if (!match || !match[0]) throw new Error("No opaque employee token in payload");
  return match[0];
};

const toolCallResponse = (name: string, args: unknown): Response =>
  new Response(
    JSON.stringify({
      choices: [
        {
          message: {
            role: "assistant",
            tool_calls: [
              {
                id: "call-1",
                type: "function",
                function: { name, arguments: JSON.stringify(args) },
              },
            ],
          },
        },
      ],
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );

afterEach(() => {
  while (databases.length > 0) databases.pop()?.close();
});

describe("employee mention resolver", () => {
  it("resolves a full name and a matching employee id to the same person", () => {
    const byName = resolveEmployeeMention("¿Qué puesto tiene Juan Pérez?", USERS);
    const byId = resolveEmployeeMention("¿Qué puesto tiene el 1013?", USERS);
    expect(byName).toMatchObject({ status: "unique", employee: { employeeId: "1013" } });
    expect(byId).toMatchObject({ status: "unique", employee: { employeeId: "1013" } });
  });

  it("does not let the model choose when a first name is ambiguous", () => {
    const result = resolveEmployeeMention("¿Qué puesto tiene Juan?", USERS);
    expect(result.status).toBe("ambiguous");
  });

  it("fail-closes an unresolvable name in an employee question", () => {
    const result = resolveEmployeeMention("¿Qué puesto tiene Juan raro que no puedo resolver?", [
      { id: "9", fullName: "María López", claveSelf: "mlopez" },
    ]);
    expect(result.status).toBe("unresolved");
  });
});

describe("agent privacy contract", () => {
  it("never sends Meta4 plaintext to the provider and renders real data locally", async () => {
    const { database, companyId, privacy } = createHarness();
    const outbound: unknown[] = [];
    const user = userMessage("user-1", "¿Qué puesto tiene Juan Pérez?");
    const assistant = assistantMessage("assistant-1", "user-1");
    persistMessages(database, [user, assistant]);
    let soapCalls = 0;

    const result = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: assistant.id,
      messages: [user, assistant],
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => {
          soapCalls += 1;
          return juanDetail();
        },
      }),
      resolveProvider: async () => ({
        id: "provider-1",
        name: "Grok 4.1 Fast",
        baseUrl: "https://api.example.invalid/v1",
        model: "grok-4-1-fast",
        apiKey: "sk-test",
      }),
      fetchImpl: (async (_input, init) => {
        const payload = JSON.parse(String(init?.body ?? "{}")) as unknown;
        outbound.push(payload);
        const token = extractEmpToken(payload);
        return toolCallResponse("employee.get_field", {
          employeeRef: token,
          field: "JOB_TITLE",
        });
      }) as typeof fetch,
    });

    expect(outbound).toHaveLength(1);
    const body = outbound[0];
    expect(payloadContainsAny(body, PRIVATE_VALUES)).toBe(false);
    const serialized = serializeOutboundPayload(body);
    expect(serialized).toMatch(/EMP_[0-9A-F]{8}/i);
    expect(serialized).toContain("JOB_TITLE");
    expect(soapCalls).toBe(1);
    expect(result.content).toEqual([
      {
        type: "text",
        text: "Juan Pérez tiene el puesto de Analista Programador.",
      },
    ]);

    const token = extractEmpToken(body);
    const followUpUser = userMessage("user-2", "¿Y en qué unidad trabaja?", assistant.id);
    const followUpAssistant = assistantMessage("assistant-2", "user-2");
    persistMessages(database, [
      { ...user, status: "complete" },
      {
        ...assistant,
        status: "complete",
        content: [{ type: "text", text: "Juan Pérez tiene el puesto de Analista Programador." }],
      },
      followUpUser,
      followUpAssistant,
    ]);
    const followUpOutbound: unknown[] = [];

    const followUp = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: followUpAssistant.id,
      messages: [
        { ...user, status: "complete" },
        {
          ...assistant,
          status: "complete",
          content: [{ type: "text", text: "Juan Pérez tiene el puesto de Analista Programador." }],
        },
        followUpUser,
        followUpAssistant,
      ],
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => ({
        id: "provider-1",
        name: "Grok 4.1 Fast",
        baseUrl: "https://api.example.invalid/v1",
        model: "grok-4-1-fast",
        apiKey: "sk-test",
      }),
      fetchImpl: (async (_input, init) => {
        const payload = JSON.parse(String(init?.body ?? "{}")) as unknown;
        followUpOutbound.push(payload);
        return toolCallResponse("employee.get_field", {
          employeeRef: token,
          field: "UNIT",
        });
      }) as typeof fetch,
    });

    expect(followUpOutbound).toHaveLength(1);
    expect(payloadContainsAny(followUpOutbound[0], PRIVATE_VALUES)).toBe(false);
    expect(serializeOutboundPayload(followUpOutbound[0])).toContain(token);
    expect(serializeOutboundPayload(followUpOutbound[0])).not.toContain(
      "Juan Pérez tiene el puesto de Analista Programador.",
    );
    expect(followUp.content).toEqual([
      { type: "text", text: "Juan Pérez tiene la unidad de Recursos Humanos." },
    ]);
    expect(
      database
        .prepare("SELECT content_json FROM messages WHERE id = 'assistant-1'")
        .get() as { content_json: string },
    ).toMatchObject({
      content_json: expect.stringContaining("Juan Pérez tiene el puesto de Analista Programador."),
    });
  });

  it("blocks the provider if an assistant turn has private data without a projection", async () => {
    const { database, companyId, privacy } = createHarness();
    const user = userMessage("user-1", "¿Qué puesto tiene Juan Pérez?");
    const assistant = assistantMessage("assistant-1", "user-1");
    persistMessages(database, [user, assistant]);

    await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: assistant.id,
      messages: [user, assistant],
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => ({
        id: "provider-1",
        name: "Grok 4.1 Fast",
        baseUrl: "https://api.example.invalid/v1",
        model: "grok-4-1-fast",
        apiKey: "sk-test",
      }),
      fetchImpl: (async (_input, init) => {
        const payload = JSON.parse(String(init?.body ?? "{}")) as unknown;
        return toolCallResponse("employee.get_field", {
          employeeRef: extractEmpToken(payload),
          field: "JOB_TITLE",
        });
      }) as typeof fetch,
    });

    persistMessages(database, [
      {
        ...assistant,
        status: "complete",
        content: [{ type: "text", text: "Juan Pérez tiene el puesto de Analista Programador." }],
      },
    ]);
    database.prepare("DELETE FROM agent_turn_projections WHERE message_id = ?").run(assistant.id);
    expect(
      database
        .prepare("SELECT content_json FROM messages WHERE id = 'assistant-1'")
        .get() as { content_json: string },
    ).toMatchObject({
      content_json: expect.stringContaining("Juan Pérez tiene el puesto de Analista Programador."),
    });

    const followUpUser = userMessage("user-2", "¿Y en qué unidad trabaja?", assistant.id);
    const followUpAssistant = assistantMessage("assistant-2", "user-2");
    persistMessages(database, [followUpUser, followUpAssistant]);
    let fetchCalls = 0;

    const blocked = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: followUpAssistant.id,
      messages: [
        user,
        {
          ...assistant,
          status: "complete",
          content: [{ type: "text", text: "Juan Pérez tiene el puesto de Analista Programador." }],
        },
        followUpUser,
        followUpAssistant,
      ],
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => {
        throw new Error("provider should not be resolved");
      },
      fetchImpl: (async () => {
        fetchCalls += 1;
        throw new Error("provider should not be called");
      }) as typeof fetch,
    });

    expect(fetchCalls).toBe(0);
    expect(blocked.outboundPayloads).toEqual([]);
    expect(blocked.content).toEqual([{ type: "text", text: missingProjectionMessage }]);
    expect(
      database
        .prepare("SELECT content_json FROM messages WHERE id = 'assistant-1'")
        .get() as { content_json: string },
    ).toMatchObject({
      content_json: expect.stringContaining("Juan Pérez tiene el puesto de Analista Programador."),
    });
    expect(
      database.prepare("SELECT COUNT(*) AS count FROM conversations").get() as { count: number },
    ).toEqual({ count: 1 });
  });

  it("maps employee id 1013 to the same semantic token without sending the id", async () => {
    const { database, companyId, privacy } = createHarness();
    const byNameMessages = [
      userMessage("user-name", "¿Qué puesto tiene Juan Pérez?"),
      assistantMessage("assistant-name", "user-name"),
    ];
    persistMessages(database, byNameMessages);
    const byName = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: "assistant-name",
      messages: byNameMessages,
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => ({
        id: "provider-1",
        name: "Grok",
        baseUrl: "https://api.example.invalid/v1",
        model: "grok-4-1-fast",
        apiKey: "sk-test",
      }),
      fetchImpl: (async (_input, init) => {
        const payload = JSON.parse(String(init?.body ?? "{}")) as unknown;
        return toolCallResponse("employee.get_field", {
          employeeRef: extractEmpToken(payload),
          field: "JOB_TITLE",
        });
      }) as typeof fetch,
    });

    const bindings = await privacy.listEmployeeBindings("conversation-1", companyId);
    expect(bindings).toHaveLength(1);
    const token = bindings[0]?.token;
    expect(token).toMatch(/^EMP_[0-9A-F]{8}$/i);
    expect(await privacy.getEmployeeId("conversation-1", companyId, token ?? "")).toBe("1013");
    expect(byName.content[0]).toMatchObject({ type: "text" });

    const { database: databaseB, privacy: privacyB, companyId: companyB } = createHarness();
    const byIdMessages = [
      userMessage("user-id", "¿Qué puesto tiene el 1013?"),
      assistantMessage("assistant-id", "user-id"),
    ];
    persistMessages(databaseB, byIdMessages);
    await runAgentTurn({
      companyId: companyB,
      conversationId: "conversation-1",
      assistantMessageId: "assistant-id",
      messages: byIdMessages,
      privacy: privacyB,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => ({
        id: "provider-1",
        name: "Grok",
        baseUrl: "https://api.example.invalid/v1",
        model: "grok-4-1-fast",
        apiKey: "sk-test",
      }),
      fetchImpl: (async (_input, init) => {
        const payload = JSON.parse(String(init?.body ?? "{}")) as unknown;
        expect(payloadContainsAny(payload, ["1013", "Juan Pérez", "CYC"])).toBe(false);
        return toolCallResponse("employee.get_field", {
          employeeRef: extractEmpToken(payload),
          field: "JOB_TITLE",
        });
      }) as typeof fetch,
    });
    const idBindings = await privacyB.listEmployeeBindings("conversation-1", companyB);
    expect(idBindings[0]?.employeeId).toBe("1013");
    expect(idBindings[0]?.token).toBe(token);
  });

  it("does not call the provider when a mention cannot be tokenized", async () => {
    const { database, companyId, privacy } = createHarness();
    let fetchCalls = 0;
    const unresolvedMessages = [
      userMessage("user-1", "¿Qué puesto tiene Juan raro que no puedo resolver?"),
      assistantMessage("assistant-1", "user-1"),
    ];
    persistMessages(database, unresolvedMessages);
    const result = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: "assistant-1",
      messages: unresolvedMessages,
      privacy,
      listUsers: async () => ({ society: "CYC", users: USERS }),
      tools: buildAgentTools({
        listUsers: async () => USERS,
        getDetail: async () => juanDetail(),
      }),
      resolveProvider: async () => {
        throw new Error("provider should not be resolved");
      },
      fetchImpl: (async () => {
        fetchCalls += 1;
        throw new Error("provider should not be called");
      }) as typeof fetch,
    });
    expect(fetchCalls).toBe(0);
    expect(result.outboundPayloads).toEqual([]);
    expect(result.content[0]).toMatchObject({ type: "text" });
  });

  it("does not call SOAP in debug auth and never reaches the provider for employee questions", async () => {
    const { database, companyId, privacy } = createHarness();
    let soapCalls = 0;
    let fetchCalls = 0;
    const debugMessages = [
      userMessage("user-1", "¿Qué puesto tiene Juan Pérez?"),
      assistantMessage("assistant-1", "user-1"),
    ];
    persistMessages(database, debugMessages);
    const result = await runAgentTurn({
      companyId,
      conversationId: "conversation-1",
      assistantMessageId: "assistant-1",
      messages: debugMessages,
      privacy,
      listUsers: async () => {
        soapCalls += 1;
        throw new Meta4SessionRequiredError();
      },
      tools: buildAgentTools({
        listUsers: async () => {
          throw new Meta4SessionRequiredError();
        },
        getDetail: async () => {
          throw new Error("SOAP should not run");
        },
      }),
      resolveProvider: async () => {
        throw new Error("provider should not be resolved");
      },
      fetchImpl: (async () => {
        fetchCalls += 1;
        throw new Error("provider should not be called");
      }) as typeof fetch,
    });
    expect(soapCalls).toBe(1);
    expect(fetchCalls).toBe(0);
    expect(result.content[0]).toMatchObject({
      type: "text",
      text: expect.stringMatching(/sesión Meta4 real/i),
    });
  });

  it("does not auto-execute write tools", async () => {
    const { database, companyId, privacy } = createHarness();
    let executed = false;
    const writeTool: AnyAgentTool = {
      id: "employee.fake_write",
      description: "write stub",
      inputSchema: z.object({ employeeRef: z.string() }),
      jsonSchema: { type: "object", properties: { employeeRef: { type: "string" } } },
      permissions: [],
      mutation: "write",
      privacy: { input: "entity-refs-only", output: "local-template" },
      execute: async () => {
        executed = true;
        return {};
      },
      render: () => "should not render",
    };

    const writeMessages = [
      userMessage("user-1", "hola"),
      assistantMessage("assistant-1", "user-1"),
    ];
    persistMessages(database, writeMessages);
    await expect(
      runAgentTurn({
        companyId,
        conversationId: "conversation-1",
        assistantMessageId: "assistant-1",
        messages: writeMessages,
        privacy,
        listUsers: async () => ({ society: "CYC", users: USERS }),
        tools: [writeTool],
        resolveProvider: async () => ({
          id: "provider-1",
          name: "Grok",
          baseUrl: "https://api.example.invalid/v1",
          model: "grok-4-1-fast",
          apiKey: "sk-test",
        }),
        fetchImpl: (async () =>
          toolCallResponse("employee.fake_write", { employeeRef: "EMP_DEADBEEF" })) as typeof fetch,
      }),
    ).rejects.toMatchObject({ code: "CONFIRMATION_REQUIRED" });
    expect(executed).toBe(false);
  });

  it("rejects a raw employee id as a tool argument", async () => {
    const { database, companyId, privacy } = createHarness();
    const rawIdMessages = [
      userMessage("user-1", "¿Qué puesto tiene Juan Pérez?"),
      assistantMessage("assistant-1", "user-1"),
    ];
    persistMessages(database, rawIdMessages);
    await expect(
      runAgentTurn({
        companyId,
        conversationId: "conversation-1",
        assistantMessageId: "assistant-1",
        messages: rawIdMessages,
        privacy,
        listUsers: async () => ({ society: "CYC", users: USERS }),
        tools: buildAgentTools({
          listUsers: async () => USERS,
          getDetail: async () => juanDetail(),
        }),
        resolveProvider: async () => ({
          id: "provider-1",
          name: "Grok",
          baseUrl: "https://api.example.invalid/v1",
          model: "grok-4-1-fast",
          apiKey: "sk-test",
        }),
        fetchImpl: (async () =>
          toolCallResponse("employee.get_field", {
            employeeRef: "1013",
            field: "JOB_TITLE",
          })) as typeof fetch,
      }),
    ).rejects.toBeTruthy();
  });
});
