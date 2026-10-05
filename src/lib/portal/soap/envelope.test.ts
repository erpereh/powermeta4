import { describe, expect, it } from "vitest";

import { SOAP_CATALOG } from "./catalog.generated";
import {
  buildServiceEnvelope,
  parseServiceResponse,
  SoapContractError,
  SoapServiceFaultError,
  SoapServiceUnavailableError,
} from "./envelope";

const TASKS = SOAP_CATALOG.PGCO_ES_WS_VALIDATIONS;
const POPULATION = SOAP_CATALOG.SNTC_AD_POPULATION;

const envelope = (body: string) =>
  `<?xml version="1.0"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Body>${body}</soapenv:Body></soapenv:Envelope>`;

describe("sobre SOAP de servicios publicados", () => {
  it("serializa solo argumentos del contrato, con fecha Axis", () => {
    const xml = buildServiceEnvelope(POPULATION, "LOAD_PERSONS", {
      AI_FILTER_DATE: new Date(2026, 9, 2),
    });
    expect(xml).toContain("<sch:LOAD_PERSONS>");
    expect(xml).toContain("<sch:AI_FILTER_DATE>2026-10-02T00:00:00</sch:AI_FILTER_DATE>");
    expect(() => buildServiceEnvelope(POPULATION, "LOAD_PERSONS", { ID_EMPLEADO: "1" })).toThrow(
      SoapContractError,
    );
    expect(() => buildServiceEnvelope(TASKS, "NO_EXISTE", {})).toThrow(SoapContractError);
  });

  it("interpreta los registros de la operación sin inventar ítems", () => {
    const result = parseServiceResponse(
      TASKS,
      "PGCO_TASKS",
      envelope(
        "<PGCO_TASKSResponse><Pgco_Es_Ws_Validations><Pgco_Es_Ws_ValidationsRecordSet>" +
          "<PGCO_TASK_TITLE>Revisar</PGCO_TASK_TITLE><PGCO_TASK_COUNT>3</PGCO_TASK_COUNT><OTRO>x</OTRO>" +
          "</Pgco_Es_Ws_ValidationsRecordSet></Pgco_Es_Ws_Validations></PGCO_TASKSResponse>",
      ),
    );
    expect(result.nodes.PGCO_ES_WS_VALIDATIONS).toEqual([
      { PGCO_TASK_TITLE: "Revisar", PGCO_TASK_COUNT: "3" },
    ]);
  });

  it("distingue servicio inexistente, rechazo y XML no permitido", () => {
    const fault = (text: string) =>
      envelope(`<soapenv:Fault><faultstring>${text}</faultstring></soapenv:Fault>`);
    expect(() =>
      parseServiceResponse(TASKS, "PGCO_TASKS", fault("Could not find a target service")),
    ).toThrow(SoapServiceUnavailableError);
    expect(() => parseServiceResponse(TASKS, "PGCO_TASKS", fault("Error interno"))).toThrow(
      SoapServiceFaultError,
    );
    expect(() =>
      parseServiceResponse(TASKS, "PGCO_TASKS", `<!DOCTYPE x [<!ENTITY a "b">]>${envelope("")}`),
    ).toThrow(SoapContractError);
    expect(() => parseServiceResponse(TASKS, "PGCO_TASKS", "  ")).toThrow(SoapContractError);
  });
});
