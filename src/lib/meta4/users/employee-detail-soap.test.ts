import { describe, expect, it } from "vitest";

import { escapeXml } from "@/lib/meta4/user-profile-soap";
import { Meta4ConsultaOroError } from "@/lib/meta4/users/employee-detail-errors";
import {
  buildConsultaOroEnvelope,
  getMeta4UsersDetailUrl,
} from "@/lib/meta4/users/employee-detail-soap";

describe("Meta4 employee detail SOAP builder", () => {
  it("builds CSP_POWER4_CONSULTA_ORO with ARG_EMP and without SOAPAction", () => {
    const xml = buildConsultaOroEnvelope("1013");

    expect(xml).toContain("<sch:CSP_POWER4_CONSULTA_ORO>");
    expect(xml).toContain("<sch:ARG_EMP>1013</sch:ARG_EMP>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("escapes the employee id for XML safety", () => {
    const xml = buildConsultaOroEnvelope('1013"&');
    expect(xml).toContain(`<sch:ARG_EMP>${escapeXml('1013"&')}</sch:ARG_EMP>`);
  });

  it("resolves the detail URL from META4_BASE_URL", () => {
    const previous = process.env.META4_BASE_URL;
    process.env.META4_BASE_URL = "https://meta4.example.test";
    try {
      expect(getMeta4UsersDetailUrl()).toBe(
        "https://meta4.example.test/services/CSP_POWER4_CONSULTA_ORO",
      );
    } finally {
      if (previous === undefined) delete process.env.META4_BASE_URL;
      else process.env.META4_BASE_URL = previous;
    }
    expect(getMeta4UsersDetailUrl("https://example.test/detail")).toBe(
      "https://example.test/detail",
    );
    expect(() => getMeta4UsersDetailUrl("http://insecure")).toThrow(/HTTPS/);
  });

  it("throws a typed error, not a plain Error, for a non-HTTPS URL", () => {
    try {
      getMeta4UsersDetailUrl("http://insecure");
      throw new Error("expected getMeta4UsersDetailUrl to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(Meta4ConsultaOroError);
    }
  });
});
