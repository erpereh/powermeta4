import { describe, expect, it } from "vitest";

import {
  DEFAULT_ASSISTANT_ERROR_MESSAGE,
  assistantErrorText,
  getCaughtErrorMessage,
  inferFailedErrorCode,
  toAssistantUiMessageStatus,
  toInterruptedStatus,
} from "@/lib/chat/message-status";

describe("assistant message statuses", () => {
  it("keeps incomplete, cancelled and failed messages non-complete in assistant-ui", () => {
    expect(toAssistantUiMessageStatus("incomplete")).toEqual({
      type: "incomplete",
      reason: "other",
    });
    expect(toAssistantUiMessageStatus("cancelled")).toEqual({
      type: "incomplete",
      reason: "cancelled",
    });
    expect(toAssistantUiMessageStatus("failed")).toEqual({
      type: "incomplete",
      reason: "error",
      error: DEFAULT_ASSISTANT_ERROR_MESSAGE,
    });
    expect(toAssistantUiMessageStatus("complete")).toEqual({ type: "complete", reason: "stop" });
  });

  it("maps failed statuses to a string error, never an object", () => {
    const status = toAssistantUiMessageStatus("failed", "CHAT_INVALID_RESPONSE");
    expect(status).toEqual({
      type: "incomplete",
      reason: "error",
      error: "La respuesta del proveedor de chat no es válida.",
    });
    expect(typeof status).toBe("object");
    if (status.type !== "incomplete") throw new Error("expected incomplete status");
    expect(typeof status.error).toBe("string");
    expect(String(status.error)).not.toBe("[object Object]");
  });

  it("uses a sanitized copy for global chat error codes", () => {
    expect(assistantErrorText("CHAT_CONFIG_UNAVAILABLE")).toBe(
      "La IA no está configurada en el servidor.",
    );
    expect(assistantErrorText("CHAT_AUTH_FAILED")).toBe(
      "No se pudo autenticar con el proveedor de chat.",
    );
    expect(assistantErrorText("CHAT_MODEL_NOT_FOUND")).toBe(
      "El modelo configurado no está disponible.",
    );
    expect(assistantErrorText("CHAT_RATE_LIMITED")).toBe(
      "El proveedor de chat ha limitado las solicitudes.",
    );
    expect(assistantErrorText("CHAT_NETWORK_ERROR")).toBe(
      "No se pudo conectar con el proveedor de chat.",
    );
    expect(assistantErrorText("CHAT_INVALID_RESPONSE")).toBe(
      "La respuesta del proveedor de chat no es válida.",
    );
  });

  it("captures a thrown Error message as assistant text", () => {
    expect(
      getCaughtErrorMessage(
        new Error("No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes."),
      ),
    ).toBe("No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.");
    expect(inferFailedErrorCode(getCaughtErrorMessage(new Error("fallo del chat")))).toBe(
      "CHAT_INVALID_RESPONSE",
    );
  });

  it("distinguishes cancellation from generation failure", () => {
    expect(toInterruptedStatus(true)).toBe("cancelled");
    expect(toInterruptedStatus(false)).toBe("failed");
  });
});
