import { describe, expect, it, vi } from "vitest";

import { ProviderValidationError } from "@/lib/agent/errors";
import { probeOpenAiCompatibleProvider } from "@/lib/agent/llm/validate-provider";

const openaiOkBody = {
  choices: [{ message: { role: "assistant", content: "OK" } }],
};

const geminiOkBody = {
  candidates: [{ content: { parts: [{ text: "OK" }] } }],
};

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const GEMINI_INPUT = {
  baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
  apiKey: "AQ.secret-key",
  model: "gemini-3.1-flash-lite",
};

const OPENAI_INPUT = {
  baseUrl: "https://api.example.com/v1",
  apiKey: "secret-key",
  model: "grok-4-fast",
};

describe("probeOpenAiCompatibleProvider", () => {
  it("probes Gemini with the official generateContent curl shape", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => jsonResponse(200, geminiOkBody),
    );
    await expect(
      probeOpenAiCompatibleProvider({ ...GEMINI_INPUT, fetchImpl }),
    ).resolves.toBeUndefined();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    const firstUrl = String(fetchImpl.mock.calls[0]?.[0]);
    expect(firstUrl).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent",
    );
    expect(firstUrl).not.toContain("/openai/chat/completions");
    expect(firstUrl).not.toContain("key=");
    const firstHeaders = fetchImpl.mock.calls[0]?.[1]?.headers as Record<string, string>;
    expect(firstHeaders["X-goog-api-key"]).toBe("AQ.secret-key");
    expect(firstHeaders.Authorization).toBeUndefined();
    const firstBody = JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body ?? "{}")) as Record<
      string,
      unknown
    >;
    expect(firstBody).toEqual({ contents: [{ parts: [{ text: "OK" }] }] });
    expect(firstBody).not.toHaveProperty("systemInstruction");
    expect(firstBody).not.toHaveProperty("generationConfig");
    expect(JSON.stringify(firstBody)).not.toContain('"role"');
    expect(JSON.stringify(firstBody.contents)).not.toMatch(/empleado|CYC|1013/i);
    const secondBody = JSON.parse(String(fetchImpl.mock.calls[1]?.[1]?.body ?? "{}")) as {
      tools: { functionDeclarations: { name: string }[] }[];
    };
    expect(secondBody.tools[0]?.functionDeclarations[0]?.name).toBe("test_tool");
    expect(JSON.stringify(fetchImpl.mock.calls)).not.toContain("employee.get_field");
    expect(JSON.stringify(fetchImpl.mock.calls)).not.toContain("Authorization");
  });

  it("maps a Gemini native 403 on the first POST to an invalid API key error", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(403, { error: { message: "API key not valid" } }));
    await expect(
      probeOpenAiCompatibleProvider({
        ...GEMINI_INPUT,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_API_KEY_INVALID",
      message: "API key no válida.",
    });
  });

  it("maps a Gemini tools 403 after a successful chat to tools unsupported, not an invalid key", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async (_input, init) => {
        const body = JSON.parse(String(init?.body ?? "{}")) as { tools?: unknown };
        if (body.tools) {
          return jsonResponse(403, { error: { status: "PERMISSION_DENIED", message: "permission" } });
        }
        return jsonResponse(200, geminiOkBody);
      },
    );
    await expect(
      probeOpenAiCompatibleProvider({ ...GEMINI_INPUT, fetchImpl }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_TOOLS_UNSUPPORTED",
      message: "El modelo no admite las herramientas requeridas por powermeta4.",
    });
  });

  it("keeps Bearer plus chat/completions for non-Gemini hosts", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => jsonResponse(200, openaiOkBody),
    );
    await expect(
      probeOpenAiCompatibleProvider({ ...OPENAI_INPUT, fetchImpl }),
    ).resolves.toBeUndefined();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(String(fetchImpl.mock.calls[0]?.[0])).toBe("https://api.example.com/v1/chat/completions");
    const headers = fetchImpl.mock.calls[0]?.[1]?.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer secret-key");
    expect(headers["x-goog-api-key"]).toBeUndefined();
  });

  it("maps 401 to an invalid API key error", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(401, { error: { message: "invalid api key" } }));
    await expect(
      probeOpenAiCompatibleProvider({
        ...OPENAI_INPUT,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_API_KEY_INVALID",
      message: "API key no válida.",
    });
  });

  it("maps a missing model to a sanitized model error", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(404, { error: { code: "model_not_found", message: "models/nope is not found" } }),
    );
    await expect(
      probeOpenAiCompatibleProvider({
        ...GEMINI_INPUT,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_MODEL_UNAVAILABLE",
      message: "El modelo indicado no existe o no está disponible.",
    });
  });

  it("maps a connection failure without leaking the cause", async () => {
    const fetchImpl = vi.fn(async () => {
      throw new TypeError("fetch failed");
    });
    await expect(
      probeOpenAiCompatibleProvider({
        ...GEMINI_INPUT,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_UNREACHABLE",
      message: "No se ha podido conectar con el proveedor.",
    });
  });

  it("maps a tools rejection after a valid chat response", async () => {
    const fetchImpl = vi.fn(async (_input, init) => {
      const body = JSON.parse(String(init?.body ?? "{}")) as { tools?: unknown };
      if (body.tools) {
        return jsonResponse(400, { error: { message: "tools are not supported" } });
      }
      return jsonResponse(200, openaiOkBody);
    });
    await expect(
      probeOpenAiCompatibleProvider({
        ...OPENAI_INPUT,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_TOOLS_UNSUPPORTED",
      message: "El modelo no admite las herramientas requeridas por powermeta4.",
    });
  });

  it("does not include the API key or response body in the thrown message", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(401, { error: { message: "AQ.secret-key leaked in provider body" } }),
    );
    await probeOpenAiCompatibleProvider({
      ...GEMINI_INPUT,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    }).catch((error: unknown) => {
      expect(error).toBeInstanceOf(ProviderValidationError);
      expect(String(error)).not.toContain("AQ.secret-key");
      expect(String(error)).not.toContain("leaked");
    });
  });
});
