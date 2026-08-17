import type { MessageStatus as RuntimeMessageStatus } from "@assistant-ui/react";

import type { PersistedMessageStatus } from "@/types/chat";

export const DEFAULT_ASSISTANT_ERROR_MESSAGE =
  "No se pudo completar la respuesta del asistente.";

const ERROR_CODE_MESSAGES: Readonly<Record<string, string>> = {
  MODEL_REQUEST_FAILED: DEFAULT_ASSISTANT_ERROR_MESSAGE,
  PROVIDER_RUNTIME_FAILED:
    "No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.",
  PROVIDER_CONFIG_UNAVAILABLE: "Configura un modelo en Ajustes para usar el asistente.",
  PRIVACY_FAIL_CLOSED:
    "No se puede enviar el mensaje al modelo porque no está anonimizado con seguridad.",
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

export const inferFailedErrorCode = (errorMessage: string): string => {
  const trimmed = errorMessage.trim();
  const match = Object.entries(ERROR_CODE_MESSAGES).find(([, copy]) => copy === trimmed);
  return match?.[0] ?? "MODEL_REQUEST_FAILED";
};

export const getCaughtErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return assistantErrorText(null, error.message);
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
