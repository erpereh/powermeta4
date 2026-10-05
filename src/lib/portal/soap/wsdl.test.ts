import { describe, expect, it } from "vitest";
import { inspectPortalWsdl } from "./wsdl";
import type { SoapServiceContract } from "./types";
const contract: SoapServiceContract = {
  service: "TEST",
  m4Object: "TEST",
  deployedInWsdd: true,
  serialization: {
    style: "rpc",
    use: "encoded",
    namespace: "http://schemas.meta4.com/",
    encodingStyle: "http://schemas.xmlsoap.org/soap/encoding/",
  },
  operations: [
    {
      operation: "READ",
      methodNode: "TEST",
      methodName: "READ",
      args: [
        { name: "ID", kind: "string" },
        { name: "DATE", kind: "date" },
      ],
      blocks: [],
    },
  ],
};
const wsdl = (
  parts: string,
  style = "rpc",
  use = "encoded",
) => `<definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
<message name="READRequest">${parts}</message><portType name="PORT"><operation name="READ"><input message="tns:READRequest"/></operation></portType>
<binding name="BIND" type="tns:PORT"><soap:binding style="${style}"/><operation name="READ"><input><soap:body use="${use}" namespace="http://schemas.meta4.com/"/></input></operation></binding></definitions>`;
describe("verificación WSDL sin datos", () => {
  it("verifica estilo, namespace y orden de argumentos RPC", () => {
    expect(inspectPortalWsdl(contract, wsdl('<part name="ID"/><part name="DATE"/>'))).toEqual([]);
    expect(inspectPortalWsdl(contract, wsdl('<part name="DATE"/><part name="ID"/>'))).toContain(
      "READ: argumentos u orden incompatibles",
    );
    expect(
      inspectPortalWsdl(
        contract,
        wsdl('<part name="ID"/><part name="DATE"/>', "document", "literal"),
      ),
    ).toContain("READ: serialización incompatible");
    expect(inspectPortalWsdl(contract, "<definitions/>")).toEqual(["Falta definitions"]);
  });
});
