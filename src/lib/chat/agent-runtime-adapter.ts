import type { MessageContent } from "@/types/chat";

export type AgentStreamEvent =
  | { type: "content"; content: MessageContent }
  | { type: "error"; message: string };

const parseSseBlock = (block: string): AgentStreamEvent | null => {
  const dataLines = block
    .split("\n")
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trim());
  if (dataLines.length === 0) return null;
  try {
    return JSON.parse(dataLines.join("\n")) as AgentStreamEvent;
  } catch {
    return null;
  }
};

export async function* runAgentChatStream(options: {
  companyId: string;
  providerConfigId: string | null;
  conversationId: string | undefined;
  assistantMessageId: string | undefined;
  abortSignal?: AbortSignal;
}): AsyncGenerator<{ content: MessageContent }> {
  const response = await fetch("/api/agent/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      companyId: options.companyId,
      conversationId: options.conversationId,
      assistantMessageId: options.assistantMessageId,
      providerConfigId: options.providerConfigId,
    }),
    signal: options.abortSignal,
  });
  if (!response.ok || !response.body) {
    throw new Error("No se pudo ejecutar el asistente.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const blocks = buffer.split("\n\n");
    buffer = blocks.pop() ?? "";
    for (const block of blocks) {
      const event = parseSseBlock(block);
      if (!event) continue;
      if (event.type === "error") throw new Error(event.message);
      if (event.type === "content") {
        yield { content: event.content };
      }
    }
  }
  if (buffer.trim()) {
    const event = parseSseBlock(buffer);
    if (event?.type === "content") yield { content: event.content };
    if (event?.type === "error") throw new Error(event.message);
  }
}
