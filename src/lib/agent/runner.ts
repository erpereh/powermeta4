import type { Message, MessageContent } from "@/types/chat";
import type { CompanyId } from "@/types/workspace";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { AgentPrivacyError, AgentProviderConfigError, AgentToolError } from "@/lib/agent/errors";
import type { EmployeeDisambiguationData } from "@/lib/agent/disambiguation";
import { completeOpenAiChat } from "@/lib/agent/llm/openai-compatible";
import type { OpenAiChatMessage } from "@/lib/agent/llm/openai-compatible";
import { payloadContainsAny } from "@/lib/agent/privacy/assert-outbound";
import {
  messageHasEmployeeIntent,
  replaceMentionWithToken,
  resolveEmployeeMention,
} from "@/lib/agent/resolve/employee-resolver";
import { toOpenAiToolDefinitions } from "@/lib/agent/tools/registry";
import type { AnyAgentTool } from "@/lib/agent/tools/types";
import type { createAgentPrivacyRepository } from "@/server/database/repositories/agent-privacy-repository";
import type { AiProviderRuntimeConfig } from "@/server/database/repositories/ai-provider-config-repository";

const SOCIETY_CODES = ["CYC", "IBER", "COLL"] as const;

const SESSION_REQUIRED_MESSAGE =
  "Esta consulta requiere una sesión Meta4 real y no está disponible en modo debug.";

const UNRESOLVED_MESSAGE =
  "No he podido identificar al empleado de forma segura. Indica la matrícula o el nombre y apellidos completos.";

const NO_PROVIDER_MESSAGE = "Configura un modelo en Ajustes para usar el asistente.";

const MISSING_PROJECTION_MESSAGE =
  "No se puede continuar con el modelo porque falta la proyección de privacidad de un turno anterior. El historial visible no se ha modificado.";

export type AgentContentPart =
  | { type: "text"; text: string }
  | { type: "data-employee-disambiguation"; data: EmployeeDisambiguationData };

export type AgentRunResult = {
  content: AgentContentPart[];
  outboundPayloads: unknown[];
};

export type AgentRunnerDeps = {
  companyId: CompanyId;
  conversationId: string;
  assistantMessageId: string;
  messages: readonly Message[];
  privacy: ReturnType<typeof createAgentPrivacyRepository>;
  listUsers: () => Promise<{ society: string; users: readonly Meta4UserListItem[] }>;
  resolveProvider: () => Promise<AiProviderRuntimeConfig>;
  fetchImpl: typeof fetch;
  abortSignal?: AbortSignal;
  tools: AnyAgentTool[];
};

const messageText = (content: MessageContent): string => {
  if (typeof content === "string") return content;
  return content
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
};

const uniqueForbidden = (values: readonly string[]): string[] => {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const trimmed = value.trim();
    if (!trimmed) continue;
    const key = trimmed.toLocaleLowerCase("es");
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(trimmed);
  }
  return result;
};

const collectUserPlaintext = (users: readonly Meta4UserListItem[]): string[] => {
  const values: string[] = [];
  for (const user of users) {
    values.push(user.id, user.fullName, user.claveSelf);
    for (const part of user.fullName.split(/\s+/)) {
      if (part.length >= 2) values.push(part);
    }
  }
  return values;
};

const textParts = (text: string): AgentContentPart[] => [{ type: "text", text }];

export const runAgentTurn = async (deps: AgentRunnerDeps): Promise<AgentRunResult> => {
  const visible = deps.messages.filter((message) => message.id !== deps.assistantMessageId);
  const latestUser = [...visible].reverse().find((message) => message.role === "user");
  if (!latestUser) {
    return { content: textParts("No hay un mensaje para responder."), outboundPayloads: [] };
  }

  let users: readonly Meta4UserListItem[] = [];
  let listedUsers = false;
  try {
    const listed = await deps.listUsers();
    users = listed.users;
    listedUsers = true;
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError) {
      const intent = resolveEmployeeMention(messageText(latestUser.content), []);
      if (intent.status !== "none") {
        await deps.privacy.putProjection(latestUser.id, deps.conversationId, {
          kind: "omit",
          text: "",
        });
        return { content: textParts(SESSION_REQUIRED_MESSAGE), outboundPayloads: [] };
      }
    } else {
      throw error;
    }
  }

  const bindings = await deps.privacy.listEmployeeBindings(deps.conversationId, deps.companyId);
  const forbidden = uniqueForbidden([
    ...SOCIETY_CODES,
    ...(listedUsers ? collectUserPlaintext(users) : []),
    ...bindings.map((binding) => binding.employeeId),
  ]);

  const llmMessages: OpenAiChatMessage[] = [];
  for (const message of visible) {
    const projection = deps.privacy.getProjection(message.id);
    if (projection?.kind === "omit") continue;
    if (projection?.kind === "tool_result" || projection?.kind === "sanitized_text") {
      llmMessages.push({
        role: message.role === "user" ? "user" : "assistant",
        content: projection.text,
      });
      continue;
    }
    if (message.role === "assistant") {
      const raw = messageText(message.content);
      if (payloadContainsAny(raw, forbidden)) {
        await deps.privacy.putProjection(deps.assistantMessageId, deps.conversationId, {
          kind: "omit",
          text: "",
        });
        return { content: textParts(MISSING_PROJECTION_MESSAGE), outboundPayloads: [] };
      }
      if (raw.trim()) {
        llmMessages.push({ role: "assistant", content: raw });
      }
      continue;
    }

    const prepared = await sanitizeUserMessage({
      message,
      text: messageText(message.content),
      users,
      listedUsers,
      hasBindings: bindings.length > 0,
      conversationId: deps.conversationId,
      companyId: deps.companyId,
      privacy: deps.privacy,
      isLatest: message.id === latestUser.id,
    });
    if (prepared.status === "disambiguation") {
      const pendingId = crypto.randomUUID();
      await deps.privacy.putPendingDisambiguation({
        id: pendingId,
        conversationId: deps.conversationId,
        companyId: deps.companyId,
        assistantMessageId: deps.assistantMessageId,
        userMessageId: message.id,
        originalText: prepared.originalText,
        candidates: prepared.candidates.map((candidate) => ({
          choiceId: crypto.randomUUID(),
          employeeId: candidate.employeeId,
          fullName: candidate.fullName,
        })),
      });
      const pending = deps.privacy.getPendingDisambiguation(
        pendingId,
        deps.companyId,
        deps.conversationId,
      );
      await deps.privacy.putProjection(message.id, deps.conversationId, {
        kind: "omit",
        text: "",
      });
      await deps.privacy.putProjection(deps.assistantMessageId, deps.conversationId, {
        kind: "omit",
        text: "",
      });
      return {
        content: [
          { type: "text", text: "Hay varios empleados. ¿A cuál te refieres?" },
          {
            type: "data-employee-disambiguation",
            data: {
              pendingId,
              candidates:
                pending?.candidates.map((candidate) => ({
                  choiceId: candidate.choiceId,
                  label: `${candidate.fullName} (${candidate.employeeId})`,
                })) ?? [],
            },
          },
        ],
        outboundPayloads: [],
      };
    }
    if (prepared.status === "local") {
      await deps.privacy.putProjection(message.id, deps.conversationId, {
        kind: "omit",
        text: "",
      });
      return { content: textParts(prepared.message), outboundPayloads: [] };
    }
    llmMessages.push({ role: "user", content: prepared.text });
  }

  if (
    messageHasEmployeeIntent(messageText(latestUser.content)) &&
    bindings.length === 0 &&
    resolveEmployeeMention(messageText(latestUser.content), users).status === "none"
  ) {
    await deps.privacy.putProjection(latestUser.id, deps.conversationId, {
      kind: "omit",
      text: "",
    });
    return { content: textParts(UNRESOLVED_MESSAGE), outboundPayloads: [] };
  }

  if (payloadContainsAny(llmMessages, forbidden)) {
    throw new AgentPrivacyError(
      "No se puede enviar el mensaje al modelo porque no está anonimizado con seguridad.",
    );
  }

  let provider: AiProviderRuntimeConfig;
  try {
    provider = await deps.resolveProvider();
  } catch {
    return { content: textParts(NO_PROVIDER_MESSAGE), outboundPayloads: [] };
  }

  const tools = deps.tools;
  const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
  const { result, outboundPayload } = await completeOpenAiChat({
    baseUrl: provider.baseUrl,
    apiKey: provider.apiKey,
    model: provider.model,
    messages: llmMessages,
    tools: toOpenAiToolDefinitions(tools),
    forbidden,
    fetchImpl: deps.fetchImpl,
    abortSignal: deps.abortSignal,
  });

  if (result.type === "text") {
    if (payloadContainsAny(result.text, forbidden)) {
      throw new AgentPrivacyError("La respuesta del modelo contenía datos protegidos.");
    }
    await deps.privacy.putProjection(deps.assistantMessageId, deps.conversationId, {
      kind: "sanitized_text",
      text: result.text,
    });
    return { content: textParts(result.text || "No hay respuesta."), outboundPayloads: [outboundPayload] };
  }

  const rendered: string[] = [];
  const projectionParts: string[] = [];
  for (const call of result.toolCalls) {
    const tool = toolsById.get(call.name);
    if (!tool) {
      throw new AgentToolError("UNKNOWN_TOOL", "La herramienta solicitada no existe.");
    }
    if (tool.mutation === "write") {
      throw new AgentToolError(
        "CONFIRMATION_REQUIRED",
        "Las herramientas de escritura requieren confirmación explícita.",
      );
    }
    let parsed: unknown = {};
    try {
      parsed = JSON.parse(call.arguments) as unknown;
    } catch {
      throw new AgentToolError("INVALID_TOOL_ARGS", "Los argumentos de la herramienta no son válidos.");
    }
    const input = tool.inputSchema.parse(parsed);
    const toolResult = await tool.execute(input, {
      conversationId: deps.conversationId,
      companyId: deps.companyId,
      resolveEmployeeRef: async (token) => {
        const employeeId = await deps.privacy.getEmployeeId(
          deps.conversationId,
          deps.companyId,
          token,
        );
        if (!employeeId) {
          throw new AgentToolError("UNKNOWN_REF", "La referencia de empleado no es válida.");
        }
        return employeeId;
      },
    });
    rendered.push(tool.render(toolResult));
    projectionParts.push(`Consultado ${tool.id}(${formatToolProjectionArgs(input)}).`);
  }

  const visibleText = rendered.join("\n");
  await deps.privacy.putProjection(deps.assistantMessageId, deps.conversationId, {
    kind: "tool_result",
    text: projectionParts.join(" "),
  });
  return { content: textParts(visibleText), outboundPayloads: [outboundPayload] };
};

const formatToolProjectionArgs = (input: unknown): string => {
  if (!input || typeof input !== "object") return "";
  const record = input as Record<string, unknown>;
  if (typeof record.employeeRef === "string" && typeof record.field === "string") {
    return `${record.employeeRef}, ${record.field}`;
  }
  return Object.entries(record)
    .map(([key, value]) => `${key}: ${typeof value === "string" ? value : JSON.stringify(value)}`)
    .join(", ");
};

type SanitizeResult =
  | { status: "ok"; text: string }
  | { status: "local"; message: string }
  | {
      status: "disambiguation";
      originalText: string;
      candidates: Array<{ employeeId: string; fullName: string }>;
    };

const sanitizeUserMessage = async (options: {
  message: Message;
  text: string;
  users: readonly Meta4UserListItem[];
  listedUsers: boolean;
  hasBindings: boolean;
  conversationId: string;
  companyId: CompanyId;
  privacy: ReturnType<typeof createAgentPrivacyRepository>;
  isLatest: boolean;
}): Promise<SanitizeResult> => {
  const resolved = resolveEmployeeMention(options.text, options.users);
  if (resolved.status === "ambiguous") {
    if (!options.isLatest) {
      return { status: "local", message: UNRESOLVED_MESSAGE };
    }
    return {
      status: "disambiguation",
      originalText: options.text,
      candidates: resolved.candidates.map((candidate) => ({
        employeeId: candidate.employeeId,
        fullName: candidate.fullName,
      })),
    };
  }
  if (resolved.status === "unresolved") {
    return { status: "local", message: resolved.message };
  }
  if (resolved.status === "unique") {
    const token = await options.privacy.bindEmployee(
      options.conversationId,
      options.companyId,
      resolved.employee.employeeId,
    );
    const sanitized = replaceMentionWithToken(options.text, resolved.employee.matchedSpan, token);
    const leftover = collectUserPlaintext(options.users);
    if (payloadContainsAny(sanitized, leftover.filter((value) => value !== token))) {
      return { status: "local", message: UNRESOLVED_MESSAGE };
    }
    await options.privacy.putProjection(options.message.id, options.conversationId, {
      kind: "sanitized_text",
      text: sanitized,
    });
    return { status: "ok", text: sanitized };
  }

  if (!options.listedUsers && options.isLatest) {
    return { status: "ok", text: options.text };
  }

  const leftover = collectUserPlaintext(options.users);
  if (payloadContainsAny(options.text, leftover)) {
    return { status: "local", message: UNRESOLVED_MESSAGE };
  }

  await options.privacy.putProjection(options.message.id, options.conversationId, {
    kind: "sanitized_text",
    text: options.text,
  });
  return { status: "ok", text: options.text };
};

export const rewriteDisambiguationText = (originalText: string, fullName: string): string => {
  const tokens = fullName.trim().split(/\s+/);
  const first = tokens[0];
  if (first && originalText.includes(first) && !originalText.includes(fullName)) {
    return originalText.replace(first, fullName);
  }
  if (originalText.includes(fullName)) return originalText;
  return `${originalText.trim()} (${fullName})`;
};

export const noProviderMessage = NO_PROVIDER_MESSAGE;
export const sessionRequiredMessage = SESSION_REQUIRED_MESSAGE;
export const missingProjectionMessage = MISSING_PROJECTION_MESSAGE;
export { AgentProviderConfigError };
