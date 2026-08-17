import { AgentPrivacyError } from "@/lib/agent/errors";
import {
  geminiRequestHeaders,
  isGoogleGenerativeLanguageHost,
  parseGeminiGenerateContent,
  resolveGeminiGenerateContentUrl,
  toGeminiGenerateContentBody,
} from "@/lib/agent/llm/google-gemini";
import { resolveChatCompletionsUrl } from "@/lib/agent/llm/provider-url";
import { assertOutboundPayload } from "@/lib/agent/privacy/assert-outbound";
import { AGENT_SYSTEM_PROMPT } from "@/lib/agent/system-prompt";

export type OpenAiChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type OpenAiToolCall = {
  id: string;
  name: string;
  arguments: string;
};

export type OpenAiCompletionResult =
  | { type: "text"; text: string }
  | { type: "tool_calls"; toolCalls: OpenAiToolCall[] };

export type OpenAiToolDefinition = {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  };
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const assertPrivatePayload = (outboundPayload: unknown, forbidden: readonly string[]): void => {
  try {
    assertOutboundPayload(outboundPayload, forbidden);
  } catch {
    throw new AgentPrivacyError(
      "No se puede enviar el mensaje al modelo porque no está anonimizado con seguridad.",
    );
  }
};

export const completeOpenAiChat = async (options: {
  baseUrl: string;
  apiKey: string;
  model: string;
  messages: OpenAiChatMessage[];
  tools: OpenAiToolDefinition[];
  forbidden: readonly string[];
  fetchImpl: typeof fetch;
  abortSignal?: AbortSignal;
}): Promise<{ result: OpenAiCompletionResult; outboundPayload: unknown }> => {
  const systemAndUser: OpenAiChatMessage[] = [
    { role: "system", content: AGENT_SYSTEM_PROMPT },
    ...options.messages,
  ];

  if (isGoogleGenerativeLanguageHost(options.baseUrl)) {
    const outboundPayload = toGeminiGenerateContentBody({
      messages: systemAndUser,
      tools: options.tools,
      temperature: 0,
    });
    assertPrivatePayload(outboundPayload, options.forbidden);
    const response = await options.fetchImpl(
      resolveGeminiGenerateContentUrl(options.baseUrl, options.model),
      {
        method: "POST",
        headers: geminiRequestHeaders(options.apiKey),
        body: JSON.stringify(outboundPayload),
        signal: options.abortSignal,
      },
    );
    const raw = (await response.json()) as unknown;
    if (!response.ok) {
      throw new Error("El proveedor de IA no pudo completar la solicitud.");
    }
    return { result: parseGeminiGenerateContent(raw), outboundPayload };
  }

  const outboundPayload = {
    model: options.model,
    temperature: 0,
    messages: systemAndUser,
    tools: options.tools,
    tool_choice: "auto",
  };
  assertPrivatePayload(outboundPayload, options.forbidden);

  const response = await options.fetchImpl(resolveChatCompletionsUrl(options.baseUrl), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(outboundPayload),
    signal: options.abortSignal,
  });

  const raw = (await response.json()) as unknown;
  if (!response.ok) {
    throw new Error("El proveedor de IA no pudo completar la solicitud.");
  }
  if (!isRecord(raw) || !Array.isArray(raw.choices) || !isRecord(raw.choices[0])) {
    throw new Error("La respuesta del proveedor de IA no es válida.");
  }
  const message = raw.choices[0].message;
  if (!isRecord(message)) {
    throw new Error("La respuesta del proveedor de IA no es válida.");
  }
  if (Array.isArray(message.tool_calls) && message.tool_calls.length > 0) {
    const toolCalls: OpenAiToolCall[] = [];
    for (const item of message.tool_calls) {
      if (!isRecord(item) || !isRecord(item.function)) continue;
      if (typeof item.id !== "string" || typeof item.function.name !== "string") continue;
      const args = item.function.arguments;
      toolCalls.push({
        id: item.id,
        name: item.function.name,
        arguments: typeof args === "string" ? args : JSON.stringify(args ?? {}),
      });
    }
    if (toolCalls.length > 0) return { result: { type: "tool_calls", toolCalls }, outboundPayload };
  }
  const text = typeof message.content === "string" ? message.content.trim() : "";
  return { result: { type: "text", text }, outboundPayload };
};
