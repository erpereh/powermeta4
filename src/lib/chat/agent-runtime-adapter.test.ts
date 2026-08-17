import { afterEach, describe, expect, it, vi } from "vitest";

import { runAgentChatStream } from "@/lib/chat/agent-runtime-adapter";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("runAgentChatStream", () => {
  it("posts the picker providerConfigId to the agent runner", async () => {
    const fetchMock = vi.fn<(input: RequestInfo | URL, init?: RequestInit) => Promise<Response>>(
      async () => {
        return new Response(
          "data: {\"type\":\"content\",\"content\":[{\"type\":\"text\",\"text\":\"ok\"}]}\n\n",
          {
            status: 200,
            headers: { "Content-Type": "text/event-stream" },
          },
        );
      },
    );
    vi.stubGlobal("fetch", fetchMock);

    const events = [];
    for await (const event of runAgentChatStream({
      companyId: "company-1",
      providerConfigId: "config-gemini",
      conversationId: "chat-1",
      assistantMessageId: "assistant-1",
    })) {
      events.push(event);
    }

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const init = fetchMock.mock.calls[0]?.[1] as RequestInit | undefined;
    const body = JSON.parse(String(init?.body ?? "{}")) as {
      providerConfigId: string;
      companyId: string;
    };
    expect(body.providerConfigId).toBe("config-gemini");
    expect(body.companyId).toBe("company-1");
    expect(events).toEqual([{ content: [{ type: "text", text: "ok" }] }]);
  });
});
