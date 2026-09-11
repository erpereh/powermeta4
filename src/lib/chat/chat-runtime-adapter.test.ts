import { afterEach, describe, expect, it, vi } from "vitest";

import { ChatRuntimeAdapterError, runGlobalChatStream } from "@/lib/chat/chat-runtime-adapter";

afterEach(() => {
  vi.unstubAllGlobals();
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

describe("runGlobalChatStream", () => {
  it("posts no workspace config and forwards fragmented accumulated content", async () => {
    const controller = new AbortController();
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () =>
        new Response(
          streamFromChunks([
            'data: {"type":"content","content":[{"type":"text","text":"Ho',
            'la"}]}\n\n',
            'data: {"type":"content","content":[{"type":"text","text":"Hola mundo"}]}\n\n',
          ]),
          { status: 200, headers: { "Content-Type": "text/event-stream" } },
        ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const events = [];
    for await (const event of runGlobalChatStream({
      companyId: "company-1",
      conversationId: "conversation-1",
      assistantMessageId: "assistant-1",
      abortSignal: controller.signal,
    })) {
      events.push(event);
    }

    expect(events).toEqual([
      { content: [{ type: "text", text: "Hola" }] },
      { content: [{ type: "text", text: "Hola mundo" }] },
    ]);
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(String(url)).toBe("/api/chat/run");
    expect(init?.signal).toBe(controller.signal);
    expect(JSON.parse(String(init?.body))).toEqual({
      companyId: "company-1",
      conversationId: "conversation-1",
      assistantMessageId: "assistant-1",
    });
  });

  it("turns an internal SSE error into a typed runtime error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(
            'data: {"type":"error","errorCode":"CHAT_RATE_LIMITED","message":"El proveedor de chat ha limitado las solicitudes."}\n\n',
            { status: 200 },
          ),
      ),
    );

    const error = await (async () => {
      for await (const _event of runGlobalChatStream({
        companyId: "company-1",
        conversationId: "conversation-1",
        assistantMessageId: "assistant-1",
      })) {
        // The error event must stop the stream before it yields content.
      }
    })().catch((caught: unknown) => caught);

    expect(error).toBeInstanceOf(ChatRuntimeAdapterError);
    expect(error).toMatchObject({ code: "CHAT_RATE_LIMITED" });
  });

  it("rejects an internal stream that closes without usable text", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(streamFromChunks([]), { status: 200 })),
    );

    await expect(
      (async () => {
        for await (const _event of runGlobalChatStream({
          companyId: "company-1",
          conversationId: "conversation-1",
          assistantMessageId: "assistant-1",
        })) {
          // No usable content is expected.
        }
      })(),
    ).rejects.toMatchObject({ code: "CHAT_INVALID_RESPONSE" });
  });

  it("propagates an abort instead of reclassifying it as a runtime failure", async () => {
    const controller = new AbortController();
    const abortError = Object.assign(new Error("aborted"), { name: "AbortError" });
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => Promise.reject(abortError)),
    );

    await expect(
      (async () => {
        for await (const _event of runGlobalChatStream({
          companyId: "company-1",
          conversationId: "conversation-1",
          assistantMessageId: "assistant-1",
          abortSignal: controller.signal,
        })) {
          // No events are expected after cancellation.
        }
      })(),
    ).rejects.toBe(abortError);
  });
});
