import { describe, expect, it, vi } from "vitest";

import { AgentPrivacyError } from "@/lib/agent/errors";
import { completeOpenAiChat } from "@/lib/agent/llm/openai-compatible";
import { AGENT_SYSTEM_PROMPT } from "@/lib/agent/system-prompt";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

describe("completeOpenAiChat", () => {
  it("uses native Gemini generateContent with x-goog-api-key", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () =>
        jsonResponse(200, {
          candidates: [{ content: { parts: [{ text: "Hola" }] } }],
        }),
    );
    const result = await completeOpenAiChat({
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
      apiKey: "AQ.secret",
      model: "gemini-3.1-flash-lite",
      messages: [{ role: "user", content: "hola" }],
      tools: [],
      forbidden: [],
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.result).toEqual({ type: "text", text: "Hola" });
    expect(String(fetchImpl.mock.calls[0]?.[0])).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent",
    );
    const headers = fetchImpl.mock.calls[0]?.[1]?.headers as Record<string, string>;
    expect(headers["X-goog-api-key"]).toBe("AQ.secret");
    expect(headers.Authorization).toBeUndefined();
    const body = JSON.parse(String(fetchImpl.mock.calls[0]?.[1]?.body ?? "{}")) as {
      systemInstruction: { parts: { text: string }[] };
    };
    expect(body.systemInstruction.parts[0]?.text).toBe(AGENT_SYSTEM_PROMPT);
  });

  it("maps a Gemini functionCall to runner tool_calls", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(200, {
        candidates: [
          {
            content: {
              parts: [
                {
                  functionCall: {
                    name: "employee.get_field",
                    args: { employeeRef: "EMP_DEADBEEF", field: "JOB_TITLE" },
                  },
                },
              ],
            },
          },
        ],
      }),
    );
    const result = await completeOpenAiChat({
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
      apiKey: "AQ.secret",
      model: "gemini-3.1-flash-lite",
      messages: [{ role: "user", content: "EMP_DEADBEEF puesto" }],
      tools: [
        {
          type: "function",
          function: {
            name: "employee.get_field",
            description: "Read a field",
            parameters: { type: "object" },
          },
        },
      ],
      forbidden: ["1013", "Juan Pérez"],
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.result).toEqual({
      type: "tool_calls",
      toolCalls: [
        {
          id: "call-employee.get_field-0",
          name: "employee.get_field",
          arguments: JSON.stringify({ employeeRef: "EMP_DEADBEEF", field: "JOB_TITLE" }),
        },
      ],
    });
    expect(JSON.stringify(result.outboundPayload)).not.toContain("1013");
    expect(JSON.stringify(result.outboundPayload)).not.toContain("Juan Pérez");
  });

  it("keeps Bearer chat/completions for non-Gemini hosts", async () => {
    const fetchImpl = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () =>
        jsonResponse(200, { choices: [{ message: { role: "assistant", content: "ok" } }] }),
    );
    const result = await completeOpenAiChat({
      baseUrl: "https://api.example.com/v1",
      apiKey: "sk-test",
      model: "grok-4-fast",
      messages: [{ role: "user", content: "hola" }],
      tools: [],
      forbidden: [],
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.result).toEqual({ type: "text", text: "ok" });
    expect(String(fetchImpl.mock.calls[0]?.[0])).toBe("https://api.example.com/v1/chat/completions");
    const headers = fetchImpl.mock.calls[0]?.[1]?.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer sk-test");
  });

  it("fail-closes native Gemini payloads that contain forbidden tokens", async () => {
    const fetchImpl = vi.fn(async () => {
      throw new Error("provider should not be called");
    });
    await expect(
      completeOpenAiChat({
        baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
        apiKey: "AQ.secret",
        model: "gemini-3.1-flash-lite",
        messages: [{ role: "user", content: "El puesto de 1013" }],
        tools: [],
        forbidden: ["1013"],
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toBeInstanceOf(AgentPrivacyError);
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
