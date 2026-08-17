import { describe, expect, it, vi } from "vitest";

import { ProviderValidationError } from "@/lib/agent/errors";
import { probeOpenAiCompatibleProvider } from "@/lib/agent/llm/validate-provider";

const okBody = {
  choices: [{ message: { role: "assistant", content: "OK" } }],
};

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const INPUT = {
  baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
  apiKey: "secret-key",
  model: "gemini-2.5-flash-lite",
};

describe("probeOpenAiCompatibleProvider", () => {
  it("accepts a valid OpenAI-compatible chat and tools response", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => jsonResponse(200, okBody),
    );
    await expect(
      probeOpenAiCompatibleProvider({ ...INPUT, fetchImpl }),
    ).resolves.toBeUndefined();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    const firstUrl = String(fetchImpl.mock.calls[0]?.[0]);
    expect(firstUrl).toBe(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    );
    const firstBody = JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body ?? "{}")) as {
      messages: unknown;
    };
    expect(JSON.stringify(firstBody.messages)).not.toMatch(/empleado|CYC|1013/i);
    const secondBody = JSON.parse(String(fetchImpl.mock.calls[1]?.[1]?.body ?? "{}")) as {
      tools: { function: { name: string } }[];
    };
    expect(secondBody.tools[0]?.function.name).toBe("test_tool");
    expect(JSON.stringify(fetchImpl.mock.calls)).not.toContain("employee.get_field");
  });

  it("maps 401 to an invalid API key error", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(401, { error: { message: "invalid api key" } }));
    await expect(
      probeOpenAiCompatibleProvider({ ...INPUT, fetchImpl: fetchImpl as unknown as typeof fetch }),
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
      probeOpenAiCompatibleProvider({ ...INPUT, fetchImpl: fetchImpl as unknown as typeof fetch }),
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
      probeOpenAiCompatibleProvider({ ...INPUT, fetchImpl: fetchImpl as unknown as typeof fetch }),
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
      return jsonResponse(200, okBody);
    });
    await expect(
      probeOpenAiCompatibleProvider({ ...INPUT, fetchImpl: fetchImpl as unknown as typeof fetch }),
    ).rejects.toMatchObject({
      errorCode: "PROVIDER_TOOLS_UNSUPPORTED",
      message: "El modelo no admite las herramientas requeridas por powermeta4.",
    });
  });

  it("does not include the API key or response body in the thrown message", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(401, { error: { message: "secret-key leaked in provider body" } }),
    );
    await probeOpenAiCompatibleProvider({
      ...INPUT,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    }).catch((error: unknown) => {
      expect(error).toBeInstanceOf(ProviderValidationError);
      expect(String(error)).not.toContain("secret-key");
      expect(String(error)).not.toContain("leaked");
    });
  });
});
