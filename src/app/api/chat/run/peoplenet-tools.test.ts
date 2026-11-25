import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readChatSources, withChatSources, type ChatSource } from "@/lib/chat/chat-data";
import type { ChatToolCall, ChatToolMessage } from "@/lib/ai/chat-provider";
import type { Message } from "@/types/chat";

const fake = vi.hoisted(() => ({
  pool: vi.fn(),
  context: vi.fn(),
  scope: vi.fn(),
  session: vi.fn(),
  repository: vi.fn(),
  protect: vi.fn(),
  unprotect: vi.fn(),
  retrieve: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: fake.session,
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceScope: fake.scope,
  getWorkspaceRepository: fake.repository,
}));
vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetPool: fake.pool }));
vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: fake.context }));
vi.mock("@/lib/security/dpapi", () => ({
  createDpapiAdapter: () => ({ protectSecret: fake.protect, unprotectSecret: fake.unprotect }),
}));
vi.mock("@/lib/knowledge/retrieval-service", () => ({ retrieveRelevantChunks: fake.retrieve }));

import { POST as run } from "./route";
import { POST as result } from "../peoplenet/result/route";

const scope = { activeCompanyId: "company", companies: [{ id: "company" }, { id: "otro" }] };
const endpoint = "https://authorized.invalid/openai/chat/completions";
const common = { companyId: "company", conversationId: "chat" };
let transcript: Message[];
let ciphertexts: Map<string, string>;
let protectedValues: Map<string, string>;
const request = (path: string, payload: object, signal?: AbortSignal) =>
  new Request(`http://localhost/api/chat/${path}`, {
    method: "POST",
    body: JSON.stringify(payload),
    signal,
  });
const reply = (tool_calls?: ChatToolCall[], content: string | null = null) =>
  Response.json({
    choices: [
      {
        finish_reason: tool_calls?.length ? "tool_calls" : "stop",
        message: { role: "assistant", content, tool_calls },
      },
    ],
  });
const call = (id: string, name: string, args: object): ChatToolCall => ({
  id,
  type: "function",
  function: { name, arguments: JSON.stringify(args) },
});
const callWithSignature = (id: string, name: string, args: object): ChatToolCall => ({
  ...call(id, name, args),
  extra_content: { google: { thought_signature: "opaque-debug-signature" } },
});
const callSources = (id: string) =>
  readChatSources(transcript.find((message) => message.id === id)?.content ?? "").filter(
    (source) => source.kind === "peoplenet-call",
  );
const who = { type: "id", value: "90001" };

function start(input: string, id = "assistant", parentMessageId: string | null = null) {
  const user = `${id}-user`;
  transcript.push(
    {
      id: user,
      role: "user",
      parentMessageId,
      content: input,
      status: "complete",
      createdAt: "2026-11-25",
    },
    {
      id,
      role: "assistant",
      parentMessageId: user,
      content: [],
      status: "running",
      generationId: `${id}-generation`,
      createdAt: "2026-11-25",
    },
  );
  return id;
}

type Sent = { model: string; messages: ChatToolMessage[]; tools: { function: { name: string } }[] };
function stubProvider(handle: (body: Sent, round: number) => Response | Promise<Response>) {
  let round = 0;
  const fetch = vi.fn(async (url: string, init: RequestInit) => {
    expect(url).toBe(endpoint);
    expect(init.redirect).toBe("error");
    const body: Sent = JSON.parse(String(init.body));
    expect(body.model).toBe("debug-tools");
    return handle(body, round++);
  });
  vi.stubGlobal("fetch", fetch);
  return fetch;
}

function lastTool(messages: ChatToolMessage[]) {
  const tool = messages.findLast((item) => item.role === "tool");
  if (!tool) throw new Error("No se recibió el resultado de la herramienta.");
  return JSON.parse(tool.content);
}

async function answer(id: string, signal?: AbortSignal) {
  const response = await run(request("run", { ...common, assistantMessageId: id }, signal));
  expect(response.ok).toBe(true);
  const body = await response.text();
  const message = transcript.find((item) => item.id === id);
  if (message) message.status = signal?.aborted ? "cancelled" : "complete";
  return body;
}

const card = (id: string, callId: string, fields?: object) =>
  result(
    request("peoplenet/result", { ...common, assistantMessageId: id, callId, page: 0, ...fields }),
  );

beforeEach(() => {
  vi.resetAllMocks();
  transcript = [];
  ciphertexts = new Map();
  protectedValues = new Map();
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
  vi.stubEnv("AI_PROVIDER", "http-compatible");
  vi.stubEnv("AI_BASE_URL", endpoint);
  vi.stubEnv("AI_API_KEY", "debug-fake-key");
  vi.stubEnv("AI_MODEL", "debug-tools");
  vi.stubEnv("AI_PEOPLENET_APPROVED_ENDPOINT", endpoint);
  vi.stubEnv("AI_PEOPLENET_APPROVED_MODEL", "debug-tools");
  fake.session.mockResolvedValue({
    sessionId: "debug",
    authContext: {
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
      availableSocieties: [],
    },
    expiresAt: new Date(Date.now() + 60_000),
  });
  fake.scope.mockResolvedValue(scope);
  fake.protect.mockImplementation(async (value: string) => {
    const encrypted = `ciphertext-${protectedValues.size}`;
    protectedValues.set(encrypted, value);
    return encrypted;
  });
  fake.unprotect.mockImplementation(async (value: string) => protectedValues.get(value));
  fake.repository.mockReturnValue({
    getConversation: () => ({ messages: transcript }),
    getPeopleNetRecipe: (_company: string, _chat: string, id: string) => ciphertexts.get(id),
    setMessageSources: (
      _company: string,
      _chat: string,
      id: string,
      sources: ChatSource[],
      recipe?: { ciphertext: string },
    ) => {
      const message = transcript.find((entry) => entry.id === id);
      if (message?.status !== "running") return false;
      message.content = withChatSources(message.content, sources);
      if (recipe) ciphertexts.set(id, recipe.ciphertext);
      return true;
    },
  });
  fake.pool.mockImplementation(() => {
    throw new Error("Se intentó abrir PeopleNet real");
  });
  fake.context.mockImplementation(() => {
    throw new Error("Se intentó abrir Meta4 real");
  });
});

afterEach(() => {
  expect(fake.pool).not.toHaveBeenCalled();
  expect(fake.context).not.toHaveBeenCalled();
  expect(fake.retrieve).not.toHaveBeenCalled();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("Function Calling de PeopleNet con fixtures DEBUG", () => {
  it.each([
    ["listar_usuarios", { person: who, showEmail: true }, "users.consult"],
    [
      "consultar_nomina",
      { person: who, periods: [{ year: 2026, month: 10 }], metrics: ["net"] },
      "payroll.consult",
    ],
    [
      "consultar_quinquenal",
      { person: who, years: [2026], metrics: ["salary"] },
      "reports.quinquenal",
    ],
    [
      "resultados_nomina",
      { report: "Informe Normal", periods: [{ year: 2026, month: 9 }], metrics: ["baseSalary"] },
      "reports.payroll-results",
    ],
    [
      "consultar_proyecciones",
      { person: who, years: [2026], metrics: ["compensation"] },
      "reports.projections",
    ],
    ["consultar_certificado", { person: who, years: [2025] }, "reports.certificate"],
    [
      "consultar_primavera",
      { year: 2026, months: [9, 10], mismatchesOnly: true },
      "reports.primavera",
    ],
  ])("ejecuta %s y reabre su tarjeta", async (name, args, action) => {
    const id = start("Trae la información que te solicito para revisar el caso");
    stubProvider(({ messages, tools }, round) => {
      expect(tools.some(({ function: item }) => item.name.includes("alta"))).toBe(false);
      if (round === 0) return reply([callWithSignature("a", name, args)]);
      const payload = lastTool(messages);
      expect(payload).toMatchObject({
        status: "ok",
        ref: expect.any(String),
        total: expect.any(Number),
      });
      expect(messages.at(-2)).toMatchObject({
        tool_calls: [
          { extra_content: { google: { thought_signature: "opaque-debug-signature" } } },
        ],
      });
      const exported = JSON.stringify(payload);
      expect(exported).not.toMatch(/90001|Ana López|@|\/api\/|fullName|currencyId/);
      return reply([call("b", "presentar_resultados", { refs: [payload.ref] })]);
    });
    const sse = await answer(id);
    const [source] = callSources(id);
    expect(source?.action).toBe(action);
    expect(sse).not.toMatch(/ciphertext|90001|Ana López|opaque-debug-signature/);
    const response = await card(id, source.id);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    const data = await response.json();
    expect(data).toMatchObject({ debug: true, rows: expect.any(Array) });
    expect(data.rows.length).toBeGreaterThan(0);
    if (action === "reports.certificate") expect(data.document.href).toMatch(/^\/api\/portal\//);
    expect(fake.protect.mock.calls[0]?.[0]).not.toMatch(/"rows"|"calculations"|"salary"\s*:/);
  });

  it("encadena consultas, cruza la matrícula en servidor y recupera referencias de la rama tras recarga", async () => {
    const id = start(
      "Me interesa el caso de Ana López. Revisa sus datos de octubre y su previsión de 2026 y crúzalos con el listado.",
    );
    let personRef = "";
    let payrollRef = "";
    let projectionRef = "";
    stubProvider(({ messages }, round) => {
      if (round === 0)
        return reply([
          call("a", "listar_usuarios", { person: { type: "name", value: "Ana López" } }),
        ]);
      const data = lastTool(messages);
      if (round === 1) {
        personRef = data.personReference;
        const person = { type: "reference", value: personRef };
        return reply([
          call("b", "consultar_nomina", { person, periods: [{ year: 2026, month: 10 }] }),
          call("c", "consultar_proyecciones", { person, years: [2026] }),
        ]);
      }
      if (round === 2) {
        const payroll = messages.find((item) => item.role === "tool" && item.tool_call_id === "b");
        payrollRef = JSON.parse(payroll?.content ?? "{}").ref;
        projectionRef = data.ref;
        return reply([
          call("d", "analizar_resultados", {
            operation: "intersection",
            left: { ref: payrollRef },
            right: { ref: projectionRef },
            match: "person",
          }),
        ]);
      }
      expect(data.calculation).toBe(1);
      return reply([
        call("e", "presentar_resultados", { refs: [data.ref, payrollRef, projectionRef] }),
      ]);
    });
    expect(await answer(id)).toContain("resultado calculado");
    const sources = callSources(id);
    expect(sources.map(({ action }) => action)).toEqual([
      "analysis",
      "payroll.consult",
      "reports.projections",
      "users.consult",
    ]);
    expect(await (await card(id, sources[0].id)).json()).toMatchObject({
      calculations: [{ label: "Coincidencias", value: 1 }],
    });
    const followup = start(
      "¿Y para ese mismo caso, qué dice el certificado de 2025?",
      "followup",
      id,
    );
    stubProvider(({ messages }, round) => {
      if (round === 0) {
        expect(JSON.stringify(messages)).toContain(payrollRef);
        expect(JSON.stringify(messages)).not.toContain("Ana López");
        return reply([
          call("f", "consultar_certificado", {
            person: { type: "reference", value: payrollRef },
            years: [2025],
          }),
        ]);
      }
      return reply([call("g", "presentar_resultados", { refs: [lastTool(messages).ref] })]);
    });
    await answer(followup);
    expect(callSources(followup)[0]?.action).toBe("reports.certificate");
    const other = start("Utiliza la consulta anterior", "other");
    stubProvider(({ messages }, round) => {
      if (round === 0) {
        expect(JSON.stringify(messages)).not.toContain(payrollRef);
        return reply([
          call("h", "consultar_certificado", { person: { type: "reference", value: payrollRef } }),
        ]);
      }
      expect(lastTool(messages).status).toBe("invalid_arguments");
      return reply([call("i", "aclarar_consulta", { field: "person" })]);
    });
    expect(await answer(other)).toContain("Qué persona");
    expect(callSources(other)).toHaveLength(0);
  });

  it("rechaza alta, SQL, fechas inválidas y referencias ajenas sin publicar lecturas", async () => {
    const id = start("Haz lo que te indiqué con los registros");
    stubProvider(({ messages }, round) => {
      if (round === 0)
        return reply([
          call("a", "alta_personas", {}),
          call("b", "listar_usuarios", { sql: "test", society: "otra" }),
          call("c", "consultar_nomina", {
            person: who,
            periods: [{ year: 2026, month: 2, day: 30 }],
          }),
        ]);
      const bodies = messages
        .filter((item) => item.role === "tool")
        .map(({ content }) => JSON.parse(content).status);
      expect(bodies).toEqual(["unknown_tool", "invalid_arguments", "invalid_arguments"]);
      return reply([call("d", "aclarar_consulta", { field: "operation" })]);
    });
    expect(await answer(id)).toContain("escrituras");
    expect(callSources(id)).toHaveLength(0);
    const unknown = await card(id, "9851b35c-e877-4528-9cd2-b516206b7c2b");
    expect(unknown.status).toBe(404);
  });

  it("compara dos liquidaciones y conserva el importe calculado fuera del transcript", async () => {
    const id = start("Compara lo cobrado con y sin atrasos en octubre para esta persona");
    stubProvider(({ messages }, round) => {
      if (round === 0)
        return reply([
          call("first", "consultar_nomina", {
            person: who,
            periods: [{ year: 2026, month: 10 }],
            paymentType: "current-and-retroactive",
            metrics: ["net"],
          }),
          call("second", "consultar_nomina", {
            person: who,
            periods: [{ year: 2026, month: 10 }],
            paymentType: "current",
            metrics: ["net"],
          }),
        ]);
      if (round === 1) {
        const first = messages.find(
          (item) => item.role === "tool" && item.tool_call_id === "first",
        );
        return reply([
          call("difference", "analizar_resultados", {
            operation: "difference",
            left: { ref: JSON.parse(first?.content ?? "{}").ref, metric: "net" },
            right: { ref: lastTool(messages).ref, metric: "net" },
          }),
        ]);
      }
      const analysis = lastTool(messages);
      expect(analysis.calculation).toBe(120);
      return reply([call("finish", "presentar_resultados", { refs: [analysis.ref] })]);
    });
    const sse = await answer(id);
    expect(sse).toContain("primer valor es mayor");
    expect(sse.split("\n").find((line) => line.includes('"type":"content"'))).not.toContain("120");
    const [source] = callSources(id);
    expect(await (await card(id, source.id)).json()).toMatchObject({
      calculations: [expect.objectContaining({ value: 120 })],
    });
  });

  it("resuelve localmente si el modelo difiere del autorizado o no soporta herramientas", async () => {
    vi.stubEnv("AI_PEOPLENET_APPROVED_MODEL", "another-model");
    const fetch = stubProvider(() =>
      Response.json({ error: { code: "tools_not_supported" } }, { status: 400 }),
    );
    expect(await answer(start("Listado de usuarios con correo principal"))).toContain(
      '"kind":"peoplenet"',
    );
    expect(fetch).not.toHaveBeenCalled();
    vi.stubEnv("AI_PEOPLENET_APPROVED_MODEL", "debug-tools");
    expect(await answer(start("Listado de usuarios con correo principal", "fallback"))).toContain(
      '"kind":"peoplenet"',
    );
    expect(fetch).toHaveBeenCalledOnce();
    expect(fake.protect).not.toHaveBeenCalled();
  });

  it("conserva el streaming general con Function Calling activo y oculta los turnos operativos anteriores", async () => {
    const previous = start("PeopleNet: ¿qué datos hay de la matrícula 90001?");
    stubProvider(() => reply([call("clarify", "aclarar_consulta", { field: "period" })]));
    await answer(previous);
    const id = start("Hola, ¿qué puedes hacer?", "general", previous);
    const fetch = vi.fn(async (_url: string, init: RequestInit) => {
      const body = String(init.body);
      expect(body).not.toContain("90001");
      if (JSON.parse(body).stream === false) return reply(undefined, "GENERAL");
      return new Response('data: {"choices":[{"delta":{"content":"Hola"}}]}\n\ndata: [DONE]\n\n');
    });
    vi.stubGlobal("fetch", fetch);
    expect(await answer(id)).toContain('"text":"Hola"');
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(callSources(id)).toHaveLength(0);
  });

  it("vigila el workspace y la sesión antes de publicar una lectura", async () => {
    const id = start("Lista los usuarios");
    stubProvider(() => reply([call("a", "listar_usuarios", {})]));
    await answer(id);
    const [source] = callSources(id);
    const changed = { ...scope, activeCompanyId: "otro" };
    fake.scope
      .mockResolvedValueOnce(scope)
      .mockResolvedValueOnce(scope)
      .mockResolvedValueOnce(changed);
    expect((await card(id, source.id)).status).toBe(403);
    expect((await card(id, source.id, { person: who })).status).toBe(400);
    fake.session.mockResolvedValueOnce(null);
    expect((await card(id, source.id)).status).toBe(401);
  });

  it("no guarda referencias de resultados si se cancela la generación", async () => {
    const controller = new AbortController();
    stubProvider(() => {
      controller.abort();
      return reply([call("a", "listar_usuarios", {})]);
    });
    const id = start("Lista los usuarios");
    expect(await answer(id, controller.signal)).toBe("");
    expect(callSources(id)).toHaveLength(0);
    expect(fake.protect).not.toHaveBeenCalled();
  });
});
