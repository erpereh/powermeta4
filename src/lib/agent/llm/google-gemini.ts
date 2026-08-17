import type {
  OpenAiChatMessage,
  OpenAiCompletionResult,
  OpenAiToolCall,
  OpenAiToolDefinition,
} from "@/lib/agent/llm/openai-compatible";

const GOOGLE_GENERATIVE_LANGUAGE_HOST = "generativelanguage.googleapis.com";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const stripGeminiCompatSuffix = (pathname: string): string => {
  let path = pathname.replace(/\/+$/, "") || "";
  if (path.endsWith("/chat/completions")) {
    path = path.slice(0, -"/chat/completions".length);
  }
  if (path.endsWith("/openai")) {
    path = path.slice(0, -"/openai".length);
  }
  return path;
};

export const isGoogleGenerativeLanguageHost = (baseUrl: string): boolean => {
  try {
    return new URL(baseUrl).hostname === GOOGLE_GENERATIVE_LANGUAGE_HOST;
  } catch {
    return false;
  }
};

export const resolveGeminiGenerateContentUrl = (baseUrl: string, model: string): string => {
  const parsed = new URL(baseUrl.trim());
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("La Base URL debe usar http o https.");
  }
  let versionPath = stripGeminiCompatSuffix(parsed.pathname);
  if (!versionPath || versionPath === "/") versionPath = "/v1beta";
  const modelId = model.trim().replace(/^models\//, "");
  if (!modelId || /[/?#]/.test(modelId)) {
    throw new Error("El model id no es válido.");
  }
  return `${parsed.origin}${versionPath}/models/${modelId}:generateContent`;
};

export const geminiRequestHeaders = (apiKey: string): Record<string, string> => ({
  "Content-Type": "application/json",
  "X-goog-api-key": apiKey,
});

export const toGeminiOfficialProbeBody = (options?: {
  tools?: readonly OpenAiToolDefinition[];
}): Record<string, unknown> => {
  const body: Record<string, unknown> = {
    contents: [{ parts: [{ text: "OK" }] }],
  };
  if (options?.tools && options.tools.length > 0) {
    body.tools = [
      {
        functionDeclarations: options.tools.map((tool) => ({
          name: tool.function.name,
          description: tool.function.description,
          parameters: tool.function.parameters,
        })),
      },
    ];
  }
  return body;
};

type GeminiTextPart = { text: string };
type GeminiContent = { role: "user" | "model"; parts: GeminiTextPart[] };

export const toGeminiGenerateContentBody = (options: {
  messages: readonly OpenAiChatMessage[];
  tools?: readonly OpenAiToolDefinition[];
  temperature?: number;
}): Record<string, unknown> => {
  const systemParts: string[] = [];
  const contents: GeminiContent[] = [];

  for (const message of options.messages) {
    if (message.role === "system") {
      if (message.content.trim()) systemParts.push(message.content);
      continue;
    }
    const role = message.role === "assistant" ? "model" : "user";
    const last = contents.at(-1);
    if (last && last.role === role) {
      last.parts.push({ text: message.content });
    } else {
      contents.push({ role, parts: [{ text: message.content }] });
    }
  }

  if (contents.length === 0) {
    contents.push({ role: "user", parts: [{ text: "OK" }] });
  }

  const body: Record<string, unknown> = {
    contents,
    generationConfig: { temperature: options.temperature ?? 0 },
  };
  if (systemParts.length > 0) {
    body.systemInstruction = { parts: systemParts.map((text) => ({ text })) };
  }
  if (options.tools && options.tools.length > 0) {
    body.tools = [
      {
        functionDeclarations: options.tools.map((tool) => ({
          name: tool.function.name,
          description: tool.function.description,
          parameters: tool.function.parameters,
        })),
      },
    ];
  }
  return body;
};

export const looksLikeGeminiGenerateContent = (raw: unknown): boolean => {
  if (!isRecord(raw) || !Array.isArray(raw.candidates) || raw.candidates.length === 0) return false;
  const first = raw.candidates[0];
  if (!isRecord(first) || !isRecord(first.content)) return false;
  return Array.isArray(first.content.parts);
};

export const parseGeminiGenerateContent = (raw: unknown): OpenAiCompletionResult => {
  if (!looksLikeGeminiGenerateContent(raw) || !isRecord(raw)) {
    throw new Error("La respuesta del proveedor de IA no es válida.");
  }
  const candidates = raw.candidates;
  if (!Array.isArray(candidates) || !isRecord(candidates[0])) {
    throw new Error("La respuesta del proveedor de IA no es válida.");
  }
  const content = candidates[0].content;
  if (!isRecord(content) || !Array.isArray(content.parts)) {
    throw new Error("La respuesta del proveedor de IA no es válida.");
  }

  const toolCalls: OpenAiToolCall[] = [];
  const texts: string[] = [];
  let index = 0;
  for (const part of content.parts) {
    if (!isRecord(part)) continue;
    if (isRecord(part.functionCall) && typeof part.functionCall.name === "string") {
      const args = part.functionCall.args;
      toolCalls.push({
        id: `call-${part.functionCall.name}-${index}`,
        name: part.functionCall.name,
        arguments: typeof args === "string" ? args : JSON.stringify(args ?? {}),
      });
      index += 1;
      continue;
    }
    if (typeof part.text === "string") texts.push(part.text);
  }
  if (toolCalls.length > 0) return { type: "tool_calls", toolCalls };
  return { type: "text", text: texts.join("").trim() };
};
