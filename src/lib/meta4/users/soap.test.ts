import { describe, expect, it } from "vitest";

import { escapeXml } from "@/lib/meta4/user-profile-soap";
import { buildUsersListEnvelope, getMeta4UsersListUrl } from "@/lib/meta4/users/soap";

describe("Meta4 users list SOAP builder", () => {
  it("builds CSP_POWER4_USER_ALL with society and without SOAPAction", () => {
    const xml = buildUsersListEnvelope("CYC");

    expect(xml).toContain("<sch:CSP_POWER4_USER_ALL>");
    expect(xml).toContain("<sch:ARG_SOCIEDAD>CYC</sch:ARG_SOCIEDAD>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("escapes society values for XML safety", () => {
    // Societies are typed, but escapeXml must still protect the envelope builder path.
    const xml = buildUsersListEnvelope("IBER");
    expect(xml).toContain(`<sch:ARG_SOCIEDAD>${escapeXml("IBER")}</sch:ARG_SOCIEDAD>`);
  });

  it("builds envelopes for CYC, IBER and COLL", () => {
    expect(buildUsersListEnvelope("CYC")).toContain("ARG_SOCIEDAD>CYC<");
    expect(buildUsersListEnvelope("IBER")).toContain("ARG_SOCIEDAD>IBER<");
    expect(buildUsersListEnvelope("COLL")).toContain("ARG_SOCIEDAD>COLL<");
  });

  it("resolves the users list URL from META4_BASE_URL", () => {
    const previous = process.env.META4_BASE_URL;
    process.env.META4_BASE_URL = "https://meta4.example.test/";
    try {
      expect(getMeta4UsersListUrl()).toBe(
        "https://meta4.example.test/services/CSP_POWER4_USER_ALL",
      );
    } finally {
      if (previous === undefined) delete process.env.META4_BASE_URL;
      else process.env.META4_BASE_URL = previous;
    }
    expect(getMeta4UsersListUrl("https://example.test/users")).toBe("https://example.test/users");
    expect(() => getMeta4UsersListUrl("http://insecure")).toThrow(/HTTPS/);
  });
});
