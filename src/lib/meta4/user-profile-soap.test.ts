import { describe, expect, it } from "vitest";

import {
  buildUserProfileEnvelope,
  classifyUserProfileResponse,
  escapeXml,
} from "@/lib/meta4/user-profile-soap";

const matchXml = (society: string, extras = "") => `
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <CSP_CONSULTA_ORO_INTRAN_NEWResponse xmlns="http://schemas.meta4.com/">
        <return>1.0</return>
        <p_Sociedad>${society}</p_Sociedad>
        <Csp_Consulta_Oro_IntranRecordSet>
          <clave_Self>demo.user</clave_Self>
          <id_Empleado>42</id_Empleado>
          <Nombre>Demo</Nombre>
          ${extras}
        </Csp_Consulta_Oro_IntranRecordSet>
      </CSP_CONSULTA_ORO_INTRAN_NEWResponse>
    </soap:Body>
  </soap:Envelope>`;

describe("Meta4 user profile SOAP", () => {
  it("builds the CSP envelope with exact username escaping and without SOAPAction", () => {
    const xml = buildUserProfileEnvelope("CYC", ' USER&<" ');

    expect(xml).toContain("<sch:ARG_SOCIEDAD>CYC</sch:ARG_SOCIEDAD>");
    expect(xml).toContain("<sch:ARG_ID_EMPLEADO>0</sch:ARG_ID_EMPLEADO>");
    expect(xml).toContain(`<sch:ARG_CVE_SELF>${escapeXml(' USER&<" ')}</sch:ARG_CVE_SELF>`);
    expect(xml).toContain("<sch:ARG_COMPUTA>1</sch:ARG_COMPUTA>");
    expect(xml).toContain("<sch:ARG_DIRECTOR>0</sch:ARG_DIRECTOR>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("matches when society and usable RecordSet are present even if return is 1.0", () => {
    const result = classifyUserProfileResponse({
      xml: matchXml("CYC"),
      queriedSociety: "CYC",
      consultedUsername: "demo.user",
    });

    expect(result.outcome).toBe("match");
    if (result.outcome !== "match") throw new Error("expected match");
    expect(result.profile.society).toBe("CYC");
    expect(result.profile.fields.clave_Self).toBe("demo.user");
    expect(["1", "1.0"]).toContain(result.profile.returnCode);
  });

  it("treats unknown society marker and missing RecordSet as no-match", () => {
    expect(
      classifyUserProfileResponse({
        xml: `<x><return>1.0</return><p_Sociedad>?</p_Sociedad></x>`,
        queriedSociety: "CYC",
        consultedUsername: "demo.user",
      }).outcome,
    ).toBe("no-match");

    expect(
      classifyUserProfileResponse({
        xml: `<x><return>1.0</return><p_Sociedad>CYC</p_Sociedad></x>`,
        queriedSociety: "CYC",
        consultedUsername: "demo.user",
      }).outcome,
    ).toBe("no-match");
  });

  it("rejects SOAP Faults as infrastructure failures", () => {
    expect(() =>
      classifyUserProfileResponse({
        xml: `<soap:Envelope><soap:Body><soap:Fault><faultcode>soap:Server</faultcode><faultstring>boom</faultstring></soap:Fault></soap:Body></soap:Envelope>`,
        queriedSociety: "CYC",
        consultedUsername: "demo.user",
      }),
    ).toThrow(/SOAP Fault/);
  });

  it("keeps multiple RecordSets and selects a coherent primary without rejecting case differences", () => {
    const xml = `
      <response>
        <p_Sociedad>IBER</p_Sociedad>
        <Csp_Consulta_Oro_IntranRecordSet>
          <clave_Self>other</clave_Self>
          <id_Empleado>1</id_Empleado>
        </Csp_Consulta_Oro_IntranRecordSet>
        <Csp_Consulta_Oro_IntranRecordSet>
          <clave_Self>DEMO.USER</clave_Self>
          <id_Empleado>2</id_Empleado>
          <Nombre>Principal</Nombre>
        </Csp_Consulta_Oro_IntranRecordSet>
      </response>`;

    const result = classifyUserProfileResponse({
      xml,
      queriedSociety: "IBER",
      consultedUsername: "demo.user",
    });

    expect(result.outcome).toBe("match");
    if (result.outcome !== "match") throw new Error("expected match");
    expect(result.profile.recordSets).toHaveLength(2);
    expect(result.profile.primaryIndex).toBe(1);
    expect(result.profile.fields.Nombre).toBe("Principal");
  });

  it("rejects empty-present id_Empleado as no-match", () => {
    const result = classifyUserProfileResponse({
      xml: `
        <response>
          <return>1.0</return>
          <p_Sociedad>CYC</p_Sociedad>
          <Csp_Consulta_Oro_IntranRecordSet>
            <clave_Self>demo.user</clave_Self>
            <id_Empleado></id_Empleado>
            <Nombre>Demo</Nombre>
          </Csp_Consulta_Oro_IntranRecordSet>
        </response>`,
      queriedSociety: "CYC",
      consultedUsername: "demo.user",
    });

    expect(result).toMatchObject({
      outcome: "no-match",
      society: "CYC",
      reason: "empty-employee-id",
    });
  });

  it("rejects a RecordSet that only has an empty id_Empleado", () => {
    const result = classifyUserProfileResponse({
      xml: `
        <response>
          <return>1.0</return>
          <p_Sociedad>COLL</p_Sociedad>
          <Csp_Consulta_Oro_IntranRecordSet>
            <id_Empleado>   </id_Empleado>
          </Csp_Consulta_Oro_IntranRecordSet>
        </response>`,
      queriedSociety: "COLL",
      consultedUsername: "demo.user",
    });

    expect(result).toMatchObject({
      outcome: "no-match",
      society: "COLL",
      reason: "empty-employee-id",
    });
  });
});
