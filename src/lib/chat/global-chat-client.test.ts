import { afterEach, describe, expect, it, vi } from "vitest";

import {
  GlobalChatError,
  getGlobalChatStatus,
  resolveGlobalChatCompletionsUrl,
  streamGlobalChat,
} from "@/lib/chat/global-chat-client";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("getGlobalChatStatus", () => {
  it("does not report a usable chat when a required setting is blank", () => {
    vi.stubEnv("AI_BASE_URL", "https://chat.example.test/v1");
    vi.stubEnv("AI_API_KEY", "   ");
    vi.stubEnv("AI_MODEL", "model-1");

    expect(getGlobalChatStatus()).toEqual({ configured: false, model: null });
  });
});

describe("resolveGlobalChatCompletionsUrl", () => {
  it("accepts a root or a chat completions suffix without duplicating the endpoint", () => {
    expect(resolveGlobalChatCompletionsUrl("https://chat.example.test/v1/")).toBe(
      "https://chat.example.test/v1/chat/completions",
    );
    expect(resolveGlobalChatCompletionsUrl("https://chat.example.test/v1/chat/completions/")).toBe(
      "https://chat.example.test/v1/chat/completions",
    );
  });
});

const streamFromChunks = (chunks: readonly string[]): ReadableStream<Uint8Array> => {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      for (const chunk of chunks) controller.enqueue(encoder.encode(chunk));
      controller.close();
    },
  });
};

const configuredEnvironment = () => {
  vi.stubEnv("AI_BASE_URL", "https://chat.example.test/v1");
  vi.stubEnv("AI_API_KEY", "key-123");
  vi.stubEnv("AI_MODEL", "model-1");
};

const collectDeltas = async (abortSignal?: AbortSignal): Promise<string[]> => {
  const content: string[] = [];
  for await (const delta of streamGlobalChat({
    messages: [{ role: "user", content: "Hola" }],
    abortSignal,
  })) {
    content.push(delta);
  }
  return content;
};

describe("streamGlobalChat", () => {
  it("sends the exact streaming request and emits only fragmented text deltas", async () => {
    vi.stubEnv("AI_BASE_URL", "https://chat.example.test/v1/");
    vi.stubEnv("AI_API_KEY", " key-123 ");
    vi.stubEnv("AI_MODEL", " model-1 ");
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () =>
        new Response(
          streamFromChunks([
            'data: {"choices":[{"delta":{"content":"Ho',
            'la"}}]}\n\n',
            'data: {"choices":[{"delta":{"tool_calls":[{"id":"call-1"}]}}]}\n\n',
            'data: {"choices":[{"delta":{"content":" mundo"}}]}\n\n',
            "data: [DONE]\n\n",
          ]),
          { status: 200, headers: { "Content-Type": "text/event-stream" } },
        ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const content: string[] = [];
    for await (const delta of streamGlobalChat({
      messages: [{ role: "user", content: "Hola" }],
    })) {
      content.push(delta);
    }

    expect(content).toEqual(["Hola", " mundo"]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("https://chat.example.test/v1/chat/completions");
    expect(init?.method).toBe("POST");
    expect(init?.headers).toEqual({
      Authorization: "Bearer key-123",
      "Content-Type": "application/json",
    });
    expect(JSON.parse(String(init?.body))).toEqual({
      model: "model-1",
      messages: [{ role: "user", content: "Hola" }],
      stream: true,
    });
  });

  it("collects textual content from every choice and ignores tool-only choices", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(
            [
              'data: {"choices":[{"delta":{"tool_calls":[{"id":"call-1"}]}},{"delta":{"content":"Hola"}}]}',
              'data: {"choices":[{"delta":{"content":" mundo"}}]}',
              "data: [DONE]",
            ].join("\n\n"),
            { status: 200 },
          ),
      ),
    );

    await expect(collectDeltas()).resolves.toEqual(["Hola", " mundo"]);
  });

  it.each([
    [401, "CHAT_AUTH_FAILED"],
    [403, "CHAT_AUTH_FAILED"],
    [404, "CHAT_MODEL_NOT_FOUND"],
    [429, "CHAT_RATE_LIMITED"],
    [500, "CHAT_INVALID_RESPONSE"],
  ])("maps HTTP %i to the sanitized %s error, without retrying", async (status, code) => {
    configuredEnvironment();
    const fetchMock = vi.fn(
      async () => new Response('{"error":{"message":"key-123 leaked"}}', { status }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(collectDeltas()).rejects.toMatchObject({ code });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it.each([502, 503, 504])(
    "retries an HTTP %i (upstream temporarily unavailable) and succeeds once it clears",
    async (status) => {
      configuredEnvironment();
      let call = 0;
      vi.stubGlobal(
        "fetch",
        vi.fn(async () => {
          call += 1;
          if (call < 3) return new Response("overloaded", { status });
          return new Response('data: {"choices":[{"delta":{"content":"Hola"}}]}\n\ndata: [DONE]\n\n', {
            status: 200,
          });
        }),
      );

      await expect(collectDeltas()).resolves.toEqual(["Hola"]);
      expect(call).toBe(3);
    },
  );

  it("gives up after exhausting retries on a persistent 503 and reports CHAT_SERVICE_UNAVAILABLE", async () => {
    configuredEnvironment();
    const fetchMock = vi.fn(async () => new Response("overloaded", { status: 503 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(collectDeltas()).rejects.toMatchObject({ code: "CHAT_SERVICE_UNAVAILABLE" });
    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it("stops retrying immediately when aborted mid-backoff", async () => {
    configuredEnvironment();
    const controller = new AbortController();
    const fetchMock = vi.fn(async () => new Response("overloaded", { status: 503 }));
    vi.stubGlobal("fetch", fetchMock);

    const pending = collectDeltas(controller.signal);
    // Let the first attempt fail and enter the retry backoff, then abort.
    await new Promise((resolve) => setTimeout(resolve, 10));
    controller.abort();

    await expect(pending).rejects.toMatchObject({ name: "AbortError" });
    expect(fetchMock.mock.calls.length).toBeLessThan(4);
  });

  it("sanitizes provider network failures instead of exposing their message", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("provider said key-123 is invalid");
      }),
    );

    const error = await collectDeltas().catch((caught: unknown) => caught);

    expect(error).toBeInstanceOf(GlobalChatError);
    expect(error).toMatchObject({ code: "CHAT_NETWORK_ERROR" });
    expect(String(error)).not.toContain("key-123");
    expect(String(error)).not.toContain("provider said");
  });

  it("propagates its abort signal without converting cancellation into a network error", async () => {
    configuredEnvironment();
    const controller = new AbortController();
    const abortError = Object.assign(new Error("aborted"), { name: "AbortError" });
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async (_input, init) => {
        expect(init?.signal).toBe(controller.signal);
        throw abortError;
      },
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(collectDeltas(controller.signal)).rejects.toBe(abortError);
  });

  it("rejects a malformed SSE event", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("data: not-json\n\ndata: [DONE]\n\n", { status: 200 })),
    );

    await expect(collectDeltas()).rejects.toMatchObject({ code: "CHAT_INVALID_RESPONSE" });
  });

  it("rejects a non-text delta even when earlier events contain text", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(
            'data: {"choices":[{"delta":{"content":"Hola"}}]}\n\ndata: {"choices":[{"delta":{"content":42}}]}\n\ndata: [DONE]\n\n',
            { status: 200 },
          ),
      ),
    );

    await expect(collectDeltas()).rejects.toMatchObject({ code: "CHAT_INVALID_RESPONSE" });
  });

  it("rejects a stream that completes without text", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("data: [DONE]\n\n", { status: 200 })),
    );

    await expect(collectDeltas()).rejects.toMatchObject({ code: "CHAT_INVALID_RESPONSE" });
  });

  it("rejects a stream that closes before its completion sentinel", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response('data: {"choices":[{"delta":{"content":"Hola"}}]}\n\n', {
            status: 200,
          }),
      ),
    );

    await expect(collectDeltas()).rejects.toMatchObject({ code: "CHAT_INVALID_RESPONSE" });
  });

  it("accepts a final completion sentinel without a trailing blank event delimiter", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response('data: {"choices":[{"delta":{"content":"Hola"}}]}\n\ndata: [DONE]', {
            status: 200,
          }),
      ),
    );

    await expect(collectDeltas()).resolves.toEqual(["Hola"]);
  });
});
