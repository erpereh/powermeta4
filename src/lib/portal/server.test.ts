import { afterEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "./context";
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("./context", () => ({ getPortalContext: vi.fn() }));
import { readPortal } from "./server";
import { SessionExpiredError } from "@/lib/meta4/authenticated-soap-client";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import {
  SoapContractError,
  SoapServiceFaultError,
  SoapServiceUnavailableError,
} from "./soap/envelope";
import { PortalDataAmbiguousError } from "./data/errors";
const context: PortalContext = {
  mode: "meta4",
  society: "CYC",
  username: "u",
  variant: "CYC",
  identity: { status: "unresolved", message: "No identificado" },
};
afterEach(() => vi.restoreAllMocks());
describe("resultados y diagnóstico saneado", () => {
  it("distingue servicio ausente, conexión no configurada y consulta vacía", async () => {
    for (const error of [
      new SoapServiceUnavailableError("SERVICE"),
      new PeopleNetConfigError(["PEOPLENET_DB_HOST"]),
    ]) {
      expect(
        (
          await readPortal(
            context,
            async () => {
              throw error;
            },
            "operación",
          )
        ).status,
      ).toBe("unavailable");
    }
    expect(await readPortal(context, async () => [], "operación")).toMatchObject({
      status: "ok",
      data: [],
    });
  });
  it.each([
    [new SessionExpiredError(), "SESSION_EXPIRED"],
    [new SoapContractError("dato sensible sintético"), "CONTRACT_INCOMPATIBLE"],
    [new SoapServiceFaultError("SERVICE", "dato sensible sintético"), "SOAP_FAULT"],
    [new PortalDataAmbiguousError(), "AMBIGUOUS"],
    [new Error("dato sensible sintético"), "READ_FAILED"],
  ])("clasifica %s sin registrar su contenido", async (error, code) => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = await readPortal(
      context,
      async () => {
        throw error;
      },
      "operación",
    );
    expect(result).toMatchObject({ status: "error", code });
    expect(JSON.stringify([result, log.mock.calls, warn.mock.calls])).not.toContain(
      "dato sensible",
    );
    if (code === "READ_FAILED")
      expect(log).toHaveBeenCalledWith(
        "[portal] read failed",
        expect.objectContaining({ operation: "operación", stage: "read", code }),
      );
    else expect(log).not.toHaveBeenCalled();
  });
});
