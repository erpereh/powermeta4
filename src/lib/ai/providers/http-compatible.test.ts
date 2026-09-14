import { afterEach, describe, expect, it, vi } from "vitest";

import { EmbeddingProviderError, httpCompatibleEmbeddingProvider } from "./http-compatible";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

const configuredEnvironment = () => {
  vi.stubEnv("AI_BASE_URL", "https://embeddings.example.test/v1");
  vi.stubEnv("AI_API_KEY", "key-123");
  vi.stubEnv("EMBEDDING_MODEL", "embed-1");
};

describe("httpCompatibleEmbeddingProvider status", () => {
  it("reports not configured when EMBEDDING_MODEL is missing", () => {
    vi.stubEnv("AI_BASE_URL", "https://embeddings.example.test/v1");
    vi.stubEnv("AI_API_KEY", "key-123");
    expect(httpCompatibleEmbeddingProvider.getStatus()).toEqual({
      configured: false,
      model: null,
      dimensions: null,
    });
  });

  it("reports the configured model and dimensions", () => {
    configuredEnvironment();
    vi.stubEnv("EMBEDDING_DIMENSIONS", "768");
    expect(httpCompatibleEmbeddingProvider.getStatus()).toEqual({
      configured: true,
      model: "embed-1",
      dimensions: 768,
    });
  });
});

describe("independent embedding connection", () => {
  it("falls back to the chat connection when no embedding-specific one is set", async () => {
    configuredEnvironment();
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => new Response(JSON.stringify({ data: [{ index: 0, embedding: [1] }] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await httpCompatibleEmbeddingProvider.embed(["x"], "document");

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("https://embeddings.example.test/v1/embeddings");
    expect(init?.headers).toMatchObject({ Authorization: "Bearer key-123" });
  });

  it("uses EMBEDDING_BASE_URL/EMBEDDING_API_KEY instead of the chat connection when set", async () => {
    configuredEnvironment();
    vi.stubEnv("EMBEDDING_BASE_URL", "https://openrouter.example.test/api/v1");
    vi.stubEnv("EMBEDDING_API_KEY", "or-key-456");
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => new Response(JSON.stringify({ data: [{ index: 0, embedding: [1] }] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await httpCompatibleEmbeddingProvider.embed(["x"], "document");

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("https://openrouter.example.test/api/v1/embeddings");
    expect(init?.headers).toMatchObject({ Authorization: "Bearer or-key-456" });
  });

  it("reports the independent embedding connection as configured even without an embedding-specific key, via fallback", () => {
    configuredEnvironment();
    expect(httpCompatibleEmbeddingProvider.getStatus().configured).toBe(true);
  });

  it("strips a trailing /chat/completions before appending /embeddings (a pasted chat URL should still work)", async () => {
    vi.stubEnv("EMBEDDING_BASE_URL", "https://openrouter.example.test/api/v1/chat/completions");
    vi.stubEnv("EMBEDDING_API_KEY", "or-key-456");
    vi.stubEnv("EMBEDDING_MODEL", "embed-1");
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => new Response(JSON.stringify({ data: [{ index: 0, embedding: [1] }] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await httpCompatibleEmbeddingProvider.embed(["x"], "document");

    const [url] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("https://openrouter.example.test/api/v1/embeddings");
  });
});

describe("httpCompatibleEmbeddingProvider.embed", () => {
  it("posts a batch request to the resolved /embeddings endpoint", async () => {
    configuredEnvironment();
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () =>
        new Response(
          JSON.stringify({
            data: [
              { object: "embedding", embedding: [1, 2] },
              { index: 1, object: "embedding", embedding: [3, 4] },
            ],
          }),
          { status: 200 },
        ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const result = await httpCompatibleEmbeddingProvider.embed(["uno", "dos"], "document");

    expect(result).toEqual([
      [1, 2],
      [3, 4],
    ]);
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("https://embeddings.example.test/v1/embeddings");
    // Only {model, input, dimensions} - no vendor-specific fields. An
    // earlier version also sent "task_type", which the real configured
    // endpoint rejects outright (400 "Cannot find field") instead of
    // ignoring, so the generic client must never send it.
    expect(JSON.parse(String(init?.body))).toEqual({
      model: "embed-1",
      input: ["uno", "dos"],
    });
  });

  it("does not vary the request body by taskType (the generic protocol has no such field)", async () => {
    configuredEnvironment();
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => new Response(JSON.stringify({ data: [{ embedding: [1] }] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await httpCompatibleEmbeddingProvider.embed(["pregunta"], "query");

    const [, init] = fetchMock.mock.calls[0] ?? [];
    expect(JSON.parse(String(init?.body))).not.toHaveProperty("task_type");
    expect(JSON.parse(String(init?.body))).not.toHaveProperty("taskType");
  });

  it("treats a response item missing `index` as index 0 (proto3 default omission)", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              data: [
                { index: 1, embedding: [9, 9] },
                { embedding: [1, 1] },
              ],
            }),
            { status: 200 },
          ),
      ),
    );

    const result = await httpCompatibleEmbeddingProvider.embed(["primero", "segundo"], "document");

    expect(result).toEqual([
      [1, 1],
      [9, 9],
    ]);
  });

  it.each([
    [401, "EMBEDDING_AUTH_FAILED"],
    [404, "EMBEDDING_MODEL_NOT_FOUND"],
    [429, "EMBEDDING_RATE_LIMITED"],
    [500, "EMBEDDING_INVALID_RESPONSE"],
  ])("maps HTTP %i to %s", async (status, code) => {
    configuredEnvironment();
    vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status })));

    await expect(httpCompatibleEmbeddingProvider.embed(["x"], "document")).rejects.toMatchObject({
      code,
    });
  });

  it("rejects a response whose item count does not match the request", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ data: [{ embedding: [1] }] }), { status: 200 })),
    );

    await expect(httpCompatibleEmbeddingProvider.embed(["a", "b"], "document")).rejects.toBeInstanceOf(
      EmbeddingProviderError,
    );
  });

  it("splits a batch bigger than 100 texts into multiple requests, preserving order", async () => {
    configuredEnvironment();
    const texts = Array.from({ length: 140 }, (_, i) => `texto ${i}`);
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async (_input, init) => {
        const body = JSON.parse(String(init?.body)) as { input: string[] };
        return new Response(
          JSON.stringify({
            data: body.input.map((text, index) => ({ index, embedding: [text.length] })),
          }),
          { status: 200 },
        );
      },
    );
    vi.stubGlobal("fetch", fetchMock);

    const result = await httpCompatibleEmbeddingProvider.embed(texts, "document");

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const firstBody = JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body)) as { input: string[] };
    const secondBody = JSON.parse(String(fetchMock.mock.calls[1]?.[1]?.body)) as { input: string[] };
    expect(firstBody.input).toHaveLength(100);
    expect(secondBody.input).toHaveLength(40);
    expect(result).toHaveLength(140);
    expect(result.map((v) => v[0])).toEqual(texts.map((t) => t.length));
  });

  it("wraps network failures", async () => {
    configuredEnvironment();
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("boom");
      }),
    );

    await expect(httpCompatibleEmbeddingProvider.embed(["x"], "document")).rejects.toMatchObject({
      code: "EMBEDDING_NETWORK_ERROR",
    });
  });
});
