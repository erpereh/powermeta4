import { describe, expect, it } from "vitest";

import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";

import { Meta4HireError } from "./errors";
import { parseLaunchImportResponse } from "./parser";

const envelope = (body: string) => `
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      ${body}
    </soap:Body>
  </soap:Envelope>`;

describe("parseLaunchImportResponse", () => {
  it("accepts nested return 0 and 0.0 as success", () => {
    expect(
      parseLaunchImportResponse(
        envelope(`
          <SRTC_LAUNCH_IMPORTResponse>
            <SRTC_LAUNCH_IMPORTReturn>
              <return>0</return>
            </SRTC_LAUNCH_IMPORTReturn>
          </SRTC_LAUNCH_IMPORTResponse>`),
      ),
    ).toEqual({ returnCode: "0" });

    expect(
      parseLaunchImportResponse(
        envelope(`
          <SRTC_LAUNCH_IMPORTResponse>
            <SRTC_LAUNCH_IMPORTReturn>
              <return>0.0</return>
            </SRTC_LAUNCH_IMPORTReturn>
          </SRTC_LAUNCH_IMPORTResponse>`),
      ),
    ).toEqual({ returnCode: "0.0" });
  });

  it("accepts a direct numeric value in SRTC_LAUNCH_IMPORTResponse", () => {
    expect(
      parseLaunchImportResponse(
        envelope(`<SRTC_LAUNCH_IMPORTResponse>0.0</SRTC_LAUNCH_IMPORTResponse>`),
      ),
    ).toEqual({ returnCode: "0.0" });
  });

  it("treats a non-zero return as a functional error", () => {
    expect(() =>
      parseLaunchImportResponse(
        envelope(`
          <SRTC_LAUNCH_IMPORTResponse>
            <SRTC_LAUNCH_IMPORTReturn>
              <return>1.0</return>
            </SRTC_LAUNCH_IMPORTReturn>
          </SRTC_LAUNCH_IMPORTResponse>`),
      ),
    ).toThrow(Meta4HireError);

    try {
      parseLaunchImportResponse(
        envelope(`
          <SRTC_LAUNCH_IMPORTResponse>
            <SRTC_LAUNCH_IMPORTReturn>
              <return>2</return>
            </SRTC_LAUNCH_IMPORTReturn>
          </SRTC_LAUNCH_IMPORTResponse>`),
      );
      throw new Error("expected failure");
    } catch (error) {
      expect(error).toMatchObject({ code: "META4_HIRE_IMPORT_FAILED" });
    }
  });

  it("throws SOAP Fault without treating HTTP-looking success as ok", () => {
    expect(() =>
      parseLaunchImportResponse(
        envelope(`
          <Fault>
            <faultcode>soap:Server</faultcode>
            <faultstring>Import rejected</faultstring>
          </Fault>`),
      ),
    ).toThrow(Meta4SoapFaultError);
  });

  it("rejects a missing return code", () => {
    expect(() =>
      parseLaunchImportResponse(envelope(`<SRTC_LAUNCH_IMPORTResponse></SRTC_LAUNCH_IMPORTResponse>`)),
    ).toThrow(/código de retorno/);
  });
});
