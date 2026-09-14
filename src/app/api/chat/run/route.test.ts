import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Chat, Message } from "@/types/chat";
import type { WorkspaceSnapshot } from "@/lib/local-database/dtos";

const mocks = vi.hoisted(() => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
  getWorkspaceSnapshot: vi.fn(),
  getWorkspaceRepository: vi.fn(),
  getConversation: vi.fn(),
  streamResponse: vi.fn(),
  getChatProvider: vi.fn(),
  retrieveRelevantChunks: vi.fn(),
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.getCurrentAuthContext,
  deleteSessionCookie: mocks.deleteSessionCookie,
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceSnapshot: mocks.getWorkspaceSnapshot,
  getWorkspaceRepository: mocks.getWorkspaceRepository,
}));
vi.mock("@/lib/ai/get-chat-provider", () => ({
  getChatProvider: mocks.getChatProvider,
}));
vi.mock("@/lib/knowledge/retrieval-service", () => ({
  retrieveRelevantChunks: mocks.retrieveRelevantChunks,
}));

import { POST } from "./route";

const authContext = {
  mode: "debug" as const,
  username: "DEBUG",
  canUseMeta4: false,
  societyCode: null,
  availableSocieties: [],
};

const snapshot: WorkspaceSnapshot = {
  companies: [
    { id: "company-1", name: "Empresa", shortName: "Empresa", icon: "building", color: "blue" },
  ],
  activeCompanyId: "company-1",
  workspaces: {},
  auth: authContext,
  backupVersion: 1,
  databaseSchemaVersion: 10,
  appVersion: "0.1.0",
};

const at = "2026-09-11T12:00:00.000Z";
const message = (
  id: string,
  role: Message["role"],
  parentMessageId: string | null,
  text: string,
): Message => ({
  id,
  role,
  parentMessageId,
  content: text ? [{ type: "text", text }] : [],
  createdAt: at,
  status: "complete",
});

const chat = (messages: Message[]): Chat => ({
  id: "conversation-1",
  title: "Prueba",
  favorite: false,
  updatedAt: at,
  messages,
});

const request = (body: unknown, signal?: AbortSignal): Request =>
  new Request("http://localhost/api/chat/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });

const validBody = {
  companyId: "company-1",
  conversationId: "conversation-1",
  assistantMessageId: "assistant-target",
};

const parseSse = (body: string): unknown[] =>
  body
    .trim()
    .split("\n\n")
    .filter(Boolean)
    .map((event) => JSON.parse(event.slice("data: ".length)) as unknown);

beforeEach(() => {
  mocks.getCurrentAuthContext.mockReset();
  mocks.deleteSessionCookie.mockReset();
  mocks.getWorkspaceSnapshot.mockReset();
  mocks.getWorkspaceRepository.mockReset();
  mocks.getConversation.mockReset();
  mocks.streamResponse.mockReset();
  mocks.getChatProvider.mockReset();
  mocks.retrieveRelevantChunks.mockReset();

  mocks.getCurrentAuthContext.mockResolvedValue({ authContext });
  mocks.getWorkspaceSnapshot.mockResolvedValue(snapshot);
  mocks.getWorkspaceRepository.mockReturnValue({ getConversation: mocks.getConversation });
  mocks.getConversation.mockResolvedValue(
    chat([
      message("user-1", "user", null, "Hola"),
      message("assistant-target", "assistant", "user-1", ""),
    ]),
  );
  mocks.retrieveRelevantChunks.mockResolvedValue([]);
  mocks.getChatProvider.mockReturnValue({
    name: "mock-provider",
    streamResponse: mocks.streamResponse,
    getStatus: () => ({ configured: true, model: "mock-model" }),
  });
  mocks.streamResponse.mockImplementation(async function* () {
    yield "Hola";
  });
});

describe("POST /api/chat/run", () => {
  it("rejects a request without a session and clears the invalid cookie", async () => {
    mocks.getCurrentAuthContext.mockResolvedValue(null);

    const response = await POST(request(validBody));

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ ok: false, errorCode: "UNAUTHENTICATED" });
    expect(mocks.deleteSessionCookie).toHaveBeenCalledOnce();
  });

  it("rejects empty route identifiers before reading workspace data", async () => {
    const response = await POST(request({ ...validBody, conversationId: "   " }));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ ok: false, errorCode: "INVALID_BODY" });
    expect(mocks.getWorkspaceSnapshot).not.toHaveBeenCalled();
  });

  it("rejects a company that is not active and authorized for the session", async () => {
    const response = await POST(request({ ...validBody, companyId: "company-2" }));

    expect(response.status).toBe(403);
    await expect(response.json()).resolves.toEqual({ ok: false, errorCode: "COMPANY_MISMATCH" });
    expect(mocks.getConversation).not.toHaveBeenCalled();
  });

  it("rejects a conversation outside the active company", async () => {
    mocks.getConversation.mockRejectedValue(new Error("outside company"));

    const response = await POST(request(validBody));

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      errorCode: "CONVERSATION_NOT_FOUND",
    });
  });

  it("rejects an assistant message id that does not identify an assistant message", async () => {
    mocks.getConversation.mockResolvedValue(
      chat([message("assistant-target", "user", null, "Hola")]),
    );

    const response = await POST(request(validBody));

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      ok: false,
      errorCode: "ASSISTANT_MESSAGE_NOT_FOUND",
    });
  });

  it("streams accumulated internal content from the reconstructed branch", async () => {
    mocks.getConversation.mockResolvedValue(
      chat([
        message("assistant-target", "assistant", "user-2", ""),
        message("user-2", "user", "assistant-old", "Siguiente"),
        message("assistant-old", "assistant", "user-1", "Respuesta previa"),
        message("user-1", "user", null, "Primera"),
      ]),
    );
    mocks.streamResponse.mockImplementation(async function* () {
      yield "Ho";
      yield "la";
    });

    const response = await POST(request(validBody));

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/event-stream");
    expect(parseSse(await response.text())).toEqual([
      { type: "content", content: [{ type: "text", text: "Ho" }] },
      { type: "content", content: [{ type: "text", text: "Hola" }] },
    ]);

    // Retrieval runs against the actual latest question, not the whole
    // history, and the provider only ever receives a system message plus
    // the conversation - never a direct call to a concrete provider API.
    expect(mocks.retrieveRelevantChunks).toHaveBeenCalledWith("Siguiente");
    const call = mocks.streamResponse.mock.calls[0]?.[0];
    expect(call.messages[0]).toMatchObject({ role: "system" });
    expect(call.messages.slice(1)).toEqual([
      { role: "user", content: "Primera" },
      { role: "assistant", content: "Respuesta previa" },
      { role: "user", content: "Siguiente" },
    ]);
    expect(call.abortSignal).toBeInstanceOf(AbortSignal);
  });

  it("includes retrieved manual excerpts in the system message sent to the provider", async () => {
    mocks.retrieveRelevantChunks.mockResolvedValue([
      {
        chunkId: "c1",
        documentId: "d1",
        documentName: "Manual de Instalación.pdf",
        page: 37,
        section: null,
        text: "La presión máxima es de 16 bar.",
        score: 0.9,
      },
    ]);

    await POST(request(validBody));

    const call = mocks.streamResponse.mock.calls[0]?.[0];
    expect(call.messages[0].content).toContain("Manual de Instalación.pdf, página 37");
    expect(call.messages[0].content).toContain("16 bar");
  });

  it("degrades to no-context instead of failing the turn when retrieval throws", async () => {
    mocks.retrieveRelevantChunks.mockRejectedValue(new Error("db unavailable"));

    const response = await POST(request(validBody));

    expect(response.status).toBe(200);
    const call = mocks.streamResponse.mock.calls[0]?.[0];
    expect(call.messages[0].content).toContain(
      "No he encontrado información suficiente en los manuales disponibles",
    );
  });

  it("returns a safe internal SSE error for a typed chat failure", async () => {
    mocks.streamResponse.mockImplementation(async function* () {
      const deltas: string[] = [];
      for (const delta of deltas) {
        yield delta;
      }
      throw Object.assign(new Error("El proveedor de chat ha limitado las solicitudes."), {
        code: "CHAT_RATE_LIMITED",
      });
    });

    const response = await POST(request(validBody));

    expect(parseSse(await response.text())).toEqual([
      {
        type: "error",
        errorCode: "CHAT_RATE_LIMITED",
        message: "El proveedor de chat ha limitado las solicitudes.",
      },
    ]);
  });

  it("maps an unrecognized provider error to a generic, safe internal code", async () => {
    mocks.streamResponse.mockImplementation(async function* () {
      const deltas: string[] = [];
      for (const delta of deltas) {
        yield delta;
      }
      throw new Error("some leaking internal detail, e.g. an api key");
    });

    const response = await POST(request(validBody));

    const events = parseSse(await response.text());
    expect(events).toEqual([
      {
        type: "error",
        errorCode: "CHAT_INVALID_RESPONSE",
        message: "La respuesta del proveedor de chat no es válida.",
      },
    ]);
    expect(JSON.stringify(events)).not.toContain("api key");
  });

  it("closes silently when the request is aborted", async () => {
    mocks.streamResponse.mockImplementation(async function* ({
      abortSignal,
    }: {
      abortSignal?: AbortSignal;
    }) {
      const deltas: string[] = [];
      for (const delta of deltas) {
        yield delta;
      }
      await new Promise<void>((resolve) => {
        abortSignal?.addEventListener("abort", () => resolve(), { once: true });
      });
      throw Object.assign(new Error("aborted"), { name: "AbortError" });
    });
    const controller = new AbortController();

    const response = await POST(request(validBody, controller.signal));
    controller.abort();

    await expect(response.text()).resolves.toBe("");
  });
});
