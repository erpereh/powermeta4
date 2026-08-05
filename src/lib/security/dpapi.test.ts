import { describe, expect, it } from "vitest";

import { createDpapiAdapter } from "@/lib/security/dpapi";

describe("DPAPI adapter", () => {
  it("can be tested with an injected CurrentUser runner without exposing plaintext to arguments", async () => {
    const calls: Array<{ operation: string; value: string }> = [];
    const adapter = createDpapiAdapter({
      platform: "win32",
      runner: async (operation, value) => {
        calls.push({ operation, value });
        return operation === "protect" ? `protected:${value}` : value.replace("protected:", "");
      },
    });

    const encrypted = await adapter.protectSecret("token-value");
    const restored = await adapter.unprotectSecret(encrypted);

    expect(encrypted).toBe("protected:token-value");
    expect(restored).toBe("token-value");
    expect(calls).toEqual([
      { operation: "protect", value: "token-value" },
      { operation: "unprotect", value: "protected:token-value" },
    ]);
  });

  it("fails clearly outside Windows when no test runner is injected", async () => {
    const adapter = createDpapiAdapter({ platform: "linux" });

    await expect(adapter.protectSecret("token-value")).rejects.toThrow(/Windows DPAPI/);
  });
});
