import { describe, expect, it } from "vitest";

import { ibanChecksumIsValid, normalizeIban, spanishControlDigits, splitSpanishIban } from "./bank";

describe("hire bank helpers", () => {
  it("normalizes and checks an IBAN", () => {
    expect(normalizeIban(" es52 0049 1500 0612 3456 7890 ")).toBe("ES5200491500061234567890");
    expect(ibanChecksumIsValid("ES5200491500061234567890")).toBe(true);
    expect(ibanChecksumIsValid("ES5200491500061234567891")).toBe(false);
  });

  it("computes the Spanish CCC control digits", () => {
    expect(spanishControlDigits("0049", "1500", "1234567890")).toBe("06");
    expect(spanishControlDigits("2100", "0418", "0200051332")).toBe("45");
  });

  it("splits only Spanish IBANs into their CCC parts", () => {
    expect(splitSpanishIban("ES5200491500061234567890")).toEqual({
      bank: "0049",
      branch: "1500",
      controlDigits: "06",
      account: "1234567890",
    });
    expect(splitSpanishIban("DE89370400440532013000")).toBeNull();
  });
});
