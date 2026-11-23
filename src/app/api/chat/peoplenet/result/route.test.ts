import { beforeEach, describe, expect, it, vi } from "vitest";
import { withChatSources } from "@/lib/chat/chat-data";

const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  clearSession: vi.fn(),
  scope: vi.fn(),
  conversation: vi.fn(),
  execute: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.session,
  deleteSessionCookie: mocks.clearSession,
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceScope: mocks.scope,
  getWorkspaceRepository: () => ({ getConversation: mocks.conversation }),
}));
vi.mock("@/lib/chat/peoplenet-service", () => ({
  executePeopleNetQuery: mocks.execute,
  PeopleNetScopeError: class extends Error {},
}));

import { POST } from "./route";

const body = {
  companyId: "company-1",
  conversationId: "chat-1",
  assistantMessageId: "assistant-1",
  page: 0,
};
const send = (value: object = body) =>
  POST(
    new Request("http://localhost/api/chat/peoplenet/result", {
      method: "POST",
      body: JSON.stringify(value),
    }),
  );
const user = {
  id: "user-1",
  role: "user",
  parentMessageId: null,
  content: "Lista los usuarios con correo",
};
const assistant = {
  id: "assistant-1",
  role: "assistant",
  status: "complete",
  parentMessageId: user.id,
  content: withChatSources("Consulta de PeopleNet", [
    { kind: "peoplenet", id: "users.consult", name: "PeopleNet" },
  ]),
};
const scope = {
  activeCompanyId: "company-1",
  companies: [{ id: "company-1" }, { id: "company-2" }],
};

beforeEach(() => {
  vi.resetAllMocks();
  mocks.session.mockResolvedValue({ authContext: {} });
  mocks.scope.mockResolvedValue(scope);
  mocks.conversation.mockResolvedValue({ messages: [user, assistant] });
  mocks.execute.mockResolvedValue({ debug: true, total: 3 });
});

describe("POST /api/chat/peoplenet/result", () => {
  it("reconstruye la consulta con la pregunta guardada y devuelve no-store", async () => {
    const response = await send({ ...body, page: 2 });
    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(mocks.execute).toHaveBeenCalledWith(
      expect.objectContaining({ action: "users.consult" }),
      expect.any(Object),
      "company-1",
      2,
      expect.any(AbortSignal),
    );
    expect(mocks.scope).toHaveBeenCalledTimes(2);
  });

  it("rechaza una sesión ausente, otra sociedad y parámetros de consulta del navegador", async () => {
    mocks.session.mockResolvedValueOnce(null);
    expect((await send()).status).toBe(401);
    expect((await send({ ...body, companyId: "company-2" })).status).toBe(403);
    expect((await send({ ...body, society: "CYC" })).status).toBe(400);
    expect(mocks.execute).not.toHaveBeenCalled();
  });

  it("rechaza una referencia sin marca o con una generación interrumpida", async () => {
    mocks.conversation.mockResolvedValueOnce({
      messages: [user, { ...assistant, content: "Manual" }],
    });
    expect((await send()).status).toBe(404);
    mocks.conversation.mockResolvedValueOnce({
      messages: [user, { ...assistant, status: "cancelled" }],
    });
    expect((await send()).status).toBe(404);
    expect(mocks.execute).not.toHaveBeenCalled();
  });

  it("desestima los resultados si cambia la sociedad durante la lectura", async () => {
    mocks.scope
      .mockResolvedValueOnce(scope)
      .mockResolvedValueOnce({ ...scope, activeCompanyId: "company-2" });
    const response = await send();
    expect(response.status).toBe(403);
    expect(await response.json()).not.toHaveProperty("total");
  });

  it("omite los detalles de una conexión fallida", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => undefined);
    try {
      mocks.execute.mockRejectedValueOnce(new Error("Detalles privados de prueba"));
      const response = await send();
      expect(response.status).toBe(502);
      expect(await response.text()).not.toContain("Detalles privados");
    } finally {
      log.mockRestore();
    }
  });
});
