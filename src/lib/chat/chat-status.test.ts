import { describe, expect, it } from "vitest";

import { getChatStatusLabel, isChatSendDisabled } from "@/lib/chat/chat-status";

describe("global chat composer status", () => {
  it("shows no label when configured and allows sending - never reveals the model/provider", () => {
    const status = { configured: true, model: "global-model" } as const;

    expect(getChatStatusLabel(status)).toBe("");
    expect(isChatSendDisabled(status, false)).toBe(false);
  });

  it("labels missing configuration and disables sending", () => {
    const status = { configured: false, model: null } as const;

    expect(getChatStatusLabel(status)).toBe("IA no configurada");
    expect(isChatSendDisabled(status, false)).toBe(true);
    expect(isChatSendDisabled({ configured: true, model: null }, false)).toBe(true);
    expect(getChatStatusLabel({ configured: true, model: "  " })).toBe("IA no configurada");
    expect(isChatSendDisabled({ configured: true, model: "  " }, false)).toBe(true);
    expect(isChatSendDisabled({ configured: true, model: "model-1" }, true)).toBe(true);
  });
});
