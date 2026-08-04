import type { ChatModelAdapter, ThreadMessage } from "@assistant-ui/react";

export type MockStreamOptions = {
  delayMs?: number;
  signal?: AbortSignal;
};

const wait = (delayMs: number, signal?: AbortSignal) =>
  new Promise<void>((resolve) => {
    if (signal?.aborted) {
      resolve();
      return;
    }

    const timeout = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, delayMs);
    const onAbort = () => {
      clearTimeout(timeout);
      signal?.removeEventListener("abort", onAbort);
      resolve();
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });

const createResponse = (input: string) => {
  const cleanInput = input.trim() || "tu mensaje";
  return `He recibido «${cleanInput}». Puedo ayudarte a organizar la idea, separar decisiones y proponer próximos pasos.`;
};

export async function* streamMockResponse(
  input: string,
  { delayMs = 24, signal }: MockStreamOptions = {},
): AsyncGenerator<string, void> {
  const words = createResponse(input).split(" ");
  let snapshot = "";

  for (const [index, word] of words.entries()) {
    if (signal?.aborted) return;
    await wait(delayMs, signal);
    if (signal?.aborted) return;

    snapshot += `${index === 0 ? "" : " "}${word}`;
    yield snapshot;
  }
}

const getMessageText = (message: ThreadMessage) =>
  message.content
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ");

export const mockChatModel = {
  async *run({ messages, abortSignal }) {
    const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");
    const input = latestUserMessage ? getMessageText(latestUserMessage) : "";

    for await (const snapshot of streamMockResponse(input, {
      signal: abortSignal,
    })) {
      yield { content: [{ type: "text", text: snapshot }] };
    }
  },
} satisfies ChatModelAdapter;
