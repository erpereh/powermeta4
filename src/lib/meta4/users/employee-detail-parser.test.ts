import { describe, expect, it } from "vitest";

import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { Meta4ConsultaOroError } from "@/lib/meta4/users/employee-detail-errors";
import { parseEmployeeDetailResponse } from "@/lib/meta4/users/employee-detail-parser";

const record = (fields: Record<string, string>) =>
  Object.entries(fields)
    .map(([key, value]) => `<${key}>${value}</${key}>`)
    .join("");

const emailRecordSet = (fields: Record<string, string>) =>
  `<Csp_Power4_Std_EmailRecordSet>${record(fields)}</Csp_Power4_Std_EmailRecordSet>`;

const detailXml = (options: {
  employeeId?: string;
  recordFields?: Record<string, string>;
  emailBlockXml?: string;
  omitRecordSet?: boolean;
}) => {
  const employeeId = options.employeeId ?? "1013";
  const recordFields = options.recordFields ?? { nombre: "Alberto", apellido_1: "Olalla" };
  const recordSetXml = options.omitRecordSet
    ? ""
    : `<Csp_Power4_Consulta_OroRecordSet>
        ${record(recordFields)}
        <Csp_Power4_Std_Email>
          <std_Id_Person>${employeeId}</std_Id_Person>
          ${options.emailBlockXml ?? ""}
        </Csp_Power4_Std_Email>
      </Csp_Power4_Consulta_OroRecordSet>`;

  return `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <CSP_POWER4_CONSULTA_OROResponse xmlns="http://schemas.meta4.com/">
          <CSP_POWER4_CONSULTA_OROReturn>
            <return>1.0</return>
            <Csp_Power4_Consulta_Oro>
              <p_Emp>${employeeId}</p_Emp>
              ${recordSetXml}
            </Csp_Power4_Consulta_Oro>
          </CSP_POWER4_CONSULTA_OROReturn>
        </CSP_POWER4_CONSULTA_OROResponse>
      </soap:Body>
    </soap:Envelope>`;
};

describe("parseEmployeeDetailResponse", () => {
  it("parses flat fields and zero emails when there are none", () => {
    const result = parseEmployeeDetailResponse(
      detailXml({ recordFields: { nombre: "Alberto", apellido_1: "Olalla" } }),
      "1013",
    );

    expect(result.fields.nombre).toBe("Alberto");
    expect(result.fields.apellido_1).toBe("Olalla");
    expect(result.emails).toEqual([]);
  });

  it("parses a single email", () => {
    const result = parseEmployeeDetailResponse(
      detailXml({
        emailBlockXml: emailRecordSet({
          std_Email: "aolalla@creditoycaucion.es",
          std_Or_Mail: "1.0",
          std_Dt_Start: "2004-03-01T00:00:00.000Z",
          std_Dt_End: "4000-01-01T00:00:00.000Z",
          std_Id_Location_Type: "2",
        }),
      }),
      "1013",
    );

    expect(result.emails).toEqual([
      {
        email: "aolalla@creditoycaucion.es",
        order: "1.0",
        startDate: "2004-03-01T00:00:00.000Z",
        endDate: "4000-01-01T00:00:00.000Z",
        locationTypeCode: "2",
      },
    ]);
  });

  it("parses multiple emails preserving source order", () => {
    const result = parseEmployeeDetailResponse(
      detailXml({
        emailBlockXml: [
          emailRecordSet({ std_Email: "one@example.test", std_Or_Mail: "1.0" }),
          emailRecordSet({ std_Email: "two@example.test", std_Or_Mail: "2.0" }),
          emailRecordSet({ std_Email: "three@example.test", std_Or_Mail: "3.0" }),
        ].join(""),
      }),
      "1013",
    );

    expect(result.emails.map((email) => email.email)).toEqual([
      "one@example.test",
      "two@example.test",
      "three@example.test",
    ]);
  });

  it("returns the 4000-01-01 sentinel end date raw, without transforming it", () => {
    const result = parseEmployeeDetailResponse(
      detailXml({
        emailBlockXml: emailRecordSet({
          std_Email: "a@example.test",
          std_Dt_End: "4000-01-01T00:00:00.000Z",
        }),
      }),
      "1013",
    );

    expect(result.emails[0]?.endDate).toBe("4000-01-01T00:00:00.000Z");
  });

  it("excludes the email container keys from the flat fields record", () => {
    const result = parseEmployeeDetailResponse(
      detailXml({ emailBlockXml: emailRecordSet({ std_Email: "a@example.test" }) }),
      "1013",
    );

    const keys = Object.keys(result.fields).map((key) => key.toLowerCase());
    expect(keys).not.toContain("csp_power4_std_email");
    expect(keys).not.toContain("csp_power4_std_emailrecordset");
  });

  it("throws INVALID_RESPONSE when CSP_POWER4_CONSULTA_OROResponse is missing", () => {
    const xml = `<soap:Envelope><soap:Body><Other /></soap:Body></soap:Envelope>`;
    expect(() => parseEmployeeDetailResponse(xml, "1013")).toThrow(
      /CSP_POWER4_CONSULTA_OROResponse/,
    );
  });

  it("throws INVALID_RESPONSE when CSP_POWER4_CONSULTA_OROReturn is missing", () => {
    const xml = `
      <soap:Envelope><soap:Body>
        <CSP_POWER4_CONSULTA_OROResponse xmlns="http://schemas.meta4.com/" />
      </soap:Body></soap:Envelope>`;
    expect(() => parseEmployeeDetailResponse(xml, "1013")).toThrow(
      /CSP_POWER4_CONSULTA_OROReturn/,
    );
  });

  it("throws INVALID_RESPONSE when Csp_Power4_Consulta_Oro is missing", () => {
    const xml = `
      <soap:Envelope><soap:Body>
        <CSP_POWER4_CONSULTA_OROResponse xmlns="http://schemas.meta4.com/">
          <CSP_POWER4_CONSULTA_OROReturn><return>1.0</return></CSP_POWER4_CONSULTA_OROReturn>
        </CSP_POWER4_CONSULTA_OROResponse>
      </soap:Body></soap:Envelope>`;
    expect(() => parseEmployeeDetailResponse(xml, "1013")).toThrow(/Csp_Power4_Consulta_Oro/);
  });

  it("throws NOT_FOUND when the RecordSet is missing or empty", () => {
    try {
      parseEmployeeDetailResponse(detailXml({ omitRecordSet: true }), "1013");
      throw new Error("expected parseEmployeeDetailResponse to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(Meta4ConsultaOroError);
      expect((error as Meta4ConsultaOroError).code).toBe("META4_CONSULTA_ORO_NOT_FOUND");
    }
  });

  it("throws a SOAP fault as Meta4SoapFaultError", () => {
    const xml = `
      <soap:Envelope><soap:Body>
        <soap:Fault><faultcode>soap:Server</faultcode><faultstring>boom</faultstring></soap:Fault>
      </soap:Body></soap:Envelope>`;
    expect(() => parseEmployeeDetailResponse(xml, "1013")).toThrow(Meta4SoapFaultError);
  });

  it("rejects empty or DOCTYPE-bearing XML", () => {
    expect(() => parseEmployeeDetailResponse("", "1013")).toThrow(Meta4ConsultaOroError);
    expect(() =>
      parseEmployeeDetailResponse('<!DOCTYPE foo><soap:Envelope />', "1013"),
    ).toThrow(Meta4ConsultaOroError);
  });
});
