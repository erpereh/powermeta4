import { describe, expect, it } from "vitest";

import {
  assertOutboundPayload,
  containsWholeToken,
  payloadContainsAny,
} from "./assert-outbound";

describe("containsWholeToken", () => {
  it("does not treat 10 or 13 as matches inside 1013", () => {
    expect(containsWholeToken("1013", "10")).toBe(false);
    expect(containsWholeToken("1013", "13")).toBe(false);
    expect(containsWholeToken("el 1013", "1013")).toBe(true);
  });

  it("does not treat short ids as matches inside an EMP token", () => {
    expect(containsWholeToken("¿Qué puesto tiene el EMP_A10B13CD?", "10")).toBe(false);
    expect(containsWholeToken("¿Qué puesto tiene el EMP_A10B13CD?", "13")).toBe(false);
    expect(containsWholeToken("¿Qué puesto tiene el EMP_A10B13CD?", "1013")).toBe(false);
  });
});

describe("payloadContainsAny / assertOutboundPayload", () => {
  it("fail-closes on a leftover raw enrolment", () => {
    expect(payloadContainsAny("¿Qué puesto tiene el 1013?", ["1013"])).toBe(true);
    expect(() => assertOutboundPayload({ text: "el 1013" }, ["1013"])).toThrow(/PRIVACY_FAIL_CLOSED/);
  });

  it("allows an opaque EMP token even when the directory has short ids", () => {
    const sanitized = "¿Qué puesto tiene el EMP_A81F3C2D?";
    expect(payloadContainsAny(sanitized, ["10", "13", "0013", "1013"])).toBe(false);
    expect(() =>
      assertOutboundPayload({ messages: [{ content: sanitized }] }, ["10", "13", "1013"]),
    ).not.toThrow();
  });
});
