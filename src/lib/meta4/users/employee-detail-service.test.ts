import { describe, expect, it } from "vitest";

import {
  Meta4SessionRequiredError,
  SessionExpiredError,
  type AuthenticatedSoapOperation,
} from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { Meta4ConsultaOroError } from "@/lib/meta4/users/employee-detail-errors";
import { getMeta4EmployeeDetail } from "@/lib/meta4/users/employee-detail-service";

type SoapExecute = <T>(operation: AuthenticatedSoapOperation<T>) => Promise<T>;

const successBody = (employeeId: string) => `
  <soap:Envelope>
    <soap:Body>
      <CSP_POWER4_CONSULTA_OROResponse>
        <CSP_POWER4_CONSULTA_OROReturn>
          <return>1.0</return>
          <Csp_Power4_Consulta_Oro>
            <p_Emp>${employeeId}</p_Emp>
            <Csp_Power4_Consulta_OroRecordSet>
              <nombre>Alberto</nombre>
              <id_Empleado>${employeeId}</id_Empleado>
            </Csp_Power4_Consulta_OroRecordSet>
          </Csp_Power4_Consulta_Oro>
        </CSP_POWER4_CONSULTA_OROReturn>
      </CSP_POWER4_CONSULTA_OROResponse>
    </soap:Body>
  </soap:Envelope>`;

describe("getMeta4EmployeeDetail service", () => {
  it("builds the envelope with the requested ARG_EMP and no SOAPAction", async () => {
    let callCount = 0;
    const executeSoap: SoapExecute = async (operation) => {
      callCount += 1;
      expect(operation.xml).toContain("ARG_EMP>1013<");
      expect(operation.xml).not.toContain("SOAPAction");
      return operation.parseResponse(new Response(successBody("1013"), { status: 200 }));
    };

    const result = await getMeta4EmployeeDetail("1013", {
      executeSoap,
      detailUrl: "https://example.test/CSP_POWER4_CONSULTA_ORO",
    });

    expect(result.employeeId).toBe("1013");
    expect(result.fields.nombre).toBe("Alberto");
    expect(callCount).toBe(1);
  });

  it("rethrows known system errors and only wraps unclassified failures", async () => {
    const known = [
      new Meta4SessionRequiredError(),
      new SessionExpiredError(),
      new Meta4SoapFaultError("boom", "soap:Server"),
      new Meta4HttpError(500),
      new Meta4ConsultaOroError("META4_CONSULTA_ORO_NOT_FOUND", "no encontrado"),
    ];

    for (const error of known) {
      await expect(
        getMeta4EmployeeDetail("1013", {
          executeSoap: async () => {
            throw error;
          },
        }),
      ).rejects.toBe(error);
    }

    await expect(
      getMeta4EmployeeDetail("1013", {
        executeSoap: async () => {
          throw new Error("network cable melted");
        },
      }),
    ).rejects.toMatchObject({ code: "META4_CONSULTA_ORO_FETCH_FAILED" });
  });

  it("logs only sanitized operation metadata (employeeId, never name/DNI/email)", async () => {
    const logs: Array<Record<string, string>> = [];
    await getMeta4EmployeeDetail("1013", {
      executeSoap: async (operation) =>
        operation.parseResponse(new Response(successBody("1013"), { status: 200 })),
      detailUrl: "https://example.test/detail",
      log: (_message, details) => logs.push(details),
    });

    expect(logs[0]).toEqual({
      operation: "CSP_POWER4_CONSULTA_ORO",
      employeeId: "1013",
      status: "200",
      code: "OK",
    });
    expect(JSON.stringify(logs)).not.toContain("Alberto");
  });
});
