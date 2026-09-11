import type { MessageStatus as RuntimeMessageStatus } from "@assistant-ui/react";

import type { PersistedMessageStatus } from "@/types/chat";

export const DEFAULT_ASSISTANT_ERROR_MESSAGE =
  "No se pudo completar la respuesta del asistente.";

const ERROR_CODE_MESSAGES: Readonly<Record<string, string>> = {
  CHAT_CONFIG_UNAVAILABLE: "La IA no está configurada en el servidor.",
  CHAT_AUTH_FAILED: "No se pudo autenticar con el proveedor de chat.",
  CHAT_MODEL_NOT_FOUND: "El modelo configurado no está disponible.",
  CHAT_RATE_LIMITED: "El proveedor de chat ha limitado las solicitudes.",
  CHAT_NETWORK_ERROR: "No se pudo conectar con el proveedor de chat.",
  CHAT_INVALID_RESPONSE: "La respuesta del proveedor de chat no es válida.",
};

const isUsableErrorText = (value: string | null | undefined): value is string => {
  const trimmed = value?.trim() ?? "";
  return trimmed.length > 0 && trimmed !== "[object Object]";
};

export const assistantErrorText = (
  errorCode?: string | null,
  errorMessage?: string | null,
): string => {
  if (errorCode && ERROR_CODE_MESSAGES[errorCode]) return ERROR_CODE_MESSAGES[errorCode];
  if (isUsableErrorText(errorMessage)) return errorMessage.trim();
  return DEFAULT_ASSISTANT_ERROR_MESSAGE;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isKnownErrorCode = (value: unknown): value is string =>
  typeof value === "string" && Object.hasOwn(ERROR_CODE_MESSAGES, value);

export const getCaughtErrorCode = (error: unknown): string | null =>
  isRecord(error) && isKnownErrorCode(error.code) ? error.code : null;

export const inferFailedErrorCode = (errorMessage: string): string => {
  const trimmed = errorMessage.trim();
  const match = Object.entries(ERROR_CODE_MESSAGES).find(([, copy]) => copy === trimmed);
  return match?.[0] ?? "CHAT_INVALID_RESPONSE";
};

export const getCaughtErrorMessage = (error: unknown): string => {
  const errorCode = getCaughtErrorCode(error);
  if (error instanceof Error) return assistantErrorText(errorCode, error.message);
  if (typeof error === "string") return assistantErrorText(null, error);
  return DEFAULT_ASSISTANT_ERROR_MESSAGE;
};

export const toAssistantUiMessageStatus = (
  status: PersistedMessageStatus,
  errorCode?: string | null,
  errorMessage?: string | null,
): RuntimeMessageStatus => {
  if (status === "running") return { type: "running" };
  if (status === "complete") return { type: "complete", reason: "stop" };
  if (status === "cancelled") return { type: "incomplete", reason: "cancelled" };
  if (status === "failed") {
    return {
      type: "incomplete",
      reason: "error",
      error: assistantErrorText(errorCode, errorMessage),
    };
  }
  return { type: "incomplete", reason: "other" };
};

export const toInterruptedStatus = (
  aborted: boolean,
): Extract<PersistedMessageStatus, "cancelled" | "failed"> => (aborted ? "cancelled" : "failed");
