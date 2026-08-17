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
    const status = toAssistantUiMessageStatus("failed", "MODEL_REQUEST_FAILED");
    expect(status).toEqual({
      type: "incomplete",
      reason: "error",
      error: DEFAULT_ASSISTANT_ERROR_MESSAGE,
    });
    expect(typeof status).toBe("object");
    if (status.type !== "incomplete") throw new Error("expected incomplete status");
    expect(typeof status.error).toBe("string");
    expect(String(status.error)).not.toBe("[object Object]");
  });

  it("uses a sanitized copy for known provider and privacy codes", () => {
    expect(assistantErrorText("PROVIDER_RUNTIME_FAILED")).toBe(
      "No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.",
    );
    expect(assistantErrorText("PROVIDER_CONFIG_UNAVAILABLE")).toBe(
      "Configura un modelo en Ajustes para usar el asistente.",
    );
    expect(assistantErrorText("PRIVACY_FAIL_CLOSED")).toBe(
      "No se puede enviar el mensaje al modelo porque no está anonimizado con seguridad.",
    );
  });

  it("captures a thrown Error message as assistant text", () => {
    expect(
      getCaughtErrorMessage(
        new Error("No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes."),
      ),
    ).toBe("No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.");
    expect(inferFailedErrorCode(getCaughtErrorMessage(new Error("fallo de Gemini")))).toBe(
      "MODEL_REQUEST_FAILED",
    );
    expect(
      inferFailedErrorCode(
        "No se pudo leer la configuración de IA. Vuelve a guardar el modelo en Ajustes.",
      ),
    ).toBe("PROVIDER_RUNTIME_FAILED");
  });

  it("distinguishes cancellation from generation failure", () => {
    expect(toInterruptedStatus(true)).toBe("cancelled");
    expect(toInterruptedStatus(false)).toBe("failed");
  });
});
