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
    expect(xml).toContain(
      '<sch:LOAD_PERSONS soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">',
    );
    expect(xml).toContain(
      '<AI_FILTER_DATE xsi:type="xsd:dateTime">2026-10-02T00:00:00</AI_FILTER_DATE>',
    );
    expect(xml).toContain('<AI_ID_HR xsi:nil="true"/>');
    expect(xml).toContain('<SNCO_AD_POPULATION xsi:nil="true"/>');
    expect(xml.indexOf("<AI_ID_HR")).toBeLessThan(xml.indexOf("<AI_FILTER_DATE"));
    expect(() => buildServiceEnvelope(POPULATION, "LOAD_PERSONS", { ID_EMPLEADO: "1" })).toThrow(
      SoapContractError,
    );
    expect(() => buildServiceEnvelope(TASKS, "NO_EXISTE", {})).toThrow(SoapContractError);
  });

  it("conserva wrapped/literal y rechaza tipos o bloques que podrían escribir", () => {
    const xml = buildServiceEnvelope(TASKS, "PGCO_TASKS", {});
    expect(xml).toContain("<sch:PGCO_TASKS>");
    expect(xml).not.toContain("encodingStyle=");
    expect(() =>
      buildServiceEnvelope(POPULATION, "LOAD_PERSONS", { AI_FILTER_DATE: "2026-10-05" }),
    ).toThrow(SoapContractError);
    expect(() =>
      buildServiceEnvelope(POPULATION, "LOAD_PERSONS", { SNCO_AD_POPULATION: "" }),
    ).toThrow(SoapContractError);
  });

  it("resuelve arrays Axis, referencias encadenadas y conserva ceros iniciales", () => {
    const result = parseServiceResponse(
      POPULATION,
      "M4LoadObject",
      envelope(
        '<M4LoadObjectResponse><M4LoadObjectReturn href="#out"/></M4LoadObjectResponse>' +
          '<multiRef id="out"><Snco_Ad_Person_List href="#block"/><return>0</return></multiRef>' +
          '<multiRef id="block"><Snco_Ad_Person_ListRecordSet href="#array"/></multiRef>' +
          '<multiRef id="array"><item href="#r1"/><item href="#r2"/></multiRef>' +
          '<multiRef id="r1"><SCO_ID_HR>001471</SCO_ID_HR></multiRef>' +
          '<multiRef id="r2"><SCO_ID_HR>001411</SCO_ID_HR></multiRef>',
      ),
    );
    expect(result.nodes.SNCO_AD_PERSON_LIST).toEqual([
      { SCO_ID_HR: "001471" },
      { SCO_ID_HR: "001411" },
    ]);
    expect(result.returnValue).toBe("0");
  });

  it("distingue arrays nulos, registros con campos nulos y contratos incompatibles", () => {
    const response = (body: string) => envelope(`<PGCO_TASKSResponse>${body}</PGCO_TASKSResponse>`);
    expect(
      parseServiceResponse(
        TASKS,
        "PGCO_TASKS",
        response(
          '<Pgco_Es_Ws_Validations><Pgco_Es_Ws_ValidationsRecordSet xsi:nil="true"/></Pgco_Es_Ws_Validations>',
        ),
      ).nodes.PGCO_ES_WS_VALIDATIONS,
    ).toEqual([]);
    expect(
      parseServiceResponse(
        TASKS,
        "PGCO_TASKS",
        response(
          '<Pgco_Es_Ws_Validations><Pgco_Es_Ws_ValidationsRecordSet><PGCO_TASK_TITLE xsi:nil="1"/></Pgco_Es_Ws_ValidationsRecordSet></Pgco_Es_Ws_Validations>',
        ),
      ).nodes.PGCO_ES_WS_VALIDATIONS,
    ).toEqual([{}]);
    expect(
      parseServiceResponse(TASKS, "PGCO_TASKS", response('<PGCO_TASKSReturn xsi:nil="true"/>'))
        .nodes.PGCO_ES_WS_VALIDATIONS,
    ).toEqual([]);
    expect(() => parseServiceResponse(TASKS, "PGCO_TASKS", response("<unexpected/>"))).toThrow(
      SoapContractError,
    );
    expect(() => parseServiceResponse(TASKS, "PGCO_TASKS", envelope("<OTHERResponse/>"))).toThrow(
      SoapContractError,
    );
    expect(parseServiceResponse(TASKS, "PGCO_TASKS", response(""))).toMatchObject({
      nodes: { PGCO_ES_WS_VALIDATIONS: [] },
    });
  });

  it("rechaza referencias inexistentes, externas, ciclos y XML mal formado", () => {
    for (const href of ["#missing", "https://example.com/value", "#loop"]) {
      expect(() =>
        parseServiceResponse(
          TASKS,
          "PGCO_TASKS",
          envelope(
            `<PGCO_TASKSResponse><return href="${href}"/></PGCO_TASKSResponse><multiRef id="loop" href="#loop"/>`,
          ),
        ),
      ).toThrow(SoapContractError);
    }
    expect(() => parseServiceResponse(TASKS, "PGCO_TASKS", "<broken>")).toThrow(SoapContractError);
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
