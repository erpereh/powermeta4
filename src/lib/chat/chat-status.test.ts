import { describe, expect, it } from "vitest";

import { getChatStatusLabel } from "@/lib/chat/chat-status";

describe("global chat composer status", () => {
  it("shows no label when configured", () => {
    const status = { configured: true, model: "global-model" } as const;

    expect(getChatStatusLabel(status)).toBe("");
  });

  it("labels missing configuration", () => {
    const status = { configured: false, model: null } as const;

    expect(getChatStatusLabel(status)).toBe("IA no configurada");
    expect(getChatStatusLabel({ configured: true, model: null })).toBe("IA no configurada");
    expect(getChatStatusLabel({ configured: true, model: "  " })).toBe("IA no configurada");
  });
});
