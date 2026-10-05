import { describe, expect, it, vi } from "vitest";
vi.mock("@/lib/meta4/server", () => ({ executeAuthenticatedSoap: vi.fn() }));
import { callPortalService } from "./call";
import { SoapServiceUnavailableError } from "./envelope";

describe("lecturas con el cliente de sesión autenticada existente", () => {
  it("envía el contrato RPC y procesa la respuesta con el ejecutor autenticado", async () => {
    const result = await callPortalService(
      "SNTC_AD_POPULATION",
      "LOAD_PERSONS",
      {},
      {
        serviceUrl: (service) => `https://meta4.invalid/services/${service}`,
        executeSoap: async (operation) => {
          expect(operation.url).toBe("https://meta4.invalid/services/SNTC_AD_POPULATION");
          expect(operation.xml).toContain('<AI_ID_HR xsi:nil="true"/>');
          expect(operation.xml).not.toContain("JSESSIONID");
          return operation.parseResponse(
            new Response("<Envelope><Body><LOAD_PERSONSResponse/></Body></Envelope>"),
          );
        },
      },
    );
    expect(result.nodes.SNCO_AD_POPULATION).toEqual([]);
  });
  it("un HTTP 404 es una dependencia de servicio", async () => {
    await expect(
      callPortalService(
        "PGCO_ES_WS_VALIDATIONS",
        "PGCO_TASKS",
        {},
        {
          serviceUrl: () => "https://meta4.invalid/services/TASKS",
          executeSoap: async (operation) =>
            operation.parseResponse(new Response("not found", { status: 404 })),
        },
      ),
    ).rejects.toBeInstanceOf(SoapServiceUnavailableError);
  });
});
