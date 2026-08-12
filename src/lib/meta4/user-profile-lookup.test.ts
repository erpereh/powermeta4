import { describe, expect, it, vi } from "vitest";

import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { lookupMeta4SocietyProfile } from "@/lib/meta4/user-profile-lookup";

const matchBody = (society: string) => `
  <soap:Envelope>
    <soap:Body>
      <response>
        <return>1.0</return>
        <p_Sociedad>${society}</p_Sociedad>
        <Csp_Consulta_Oro_IntranRecordSet>
          <clave_Self>user</clave_Self>
          <id_Empleado>9</id_Empleado>
        </Csp_Consulta_Oro_IntranRecordSet>
      </response>
    </soap:Body>
  </soap:Envelope>`;

const noMatchBody = `
  <soap:Envelope>
    <soap:Body>
      <response>
        <return>1.0</return>
        <p_Sociedad>?</p_Sociedad>
      </response>
    </soap:Body>
  </soap:Envelope>`;

describe("Meta4 society profile lookup", () => {
  it("tries CYC then IBER then COLL and stops on first match", async () => {
    const seen: string[] = [];
    const postSoap = vi.fn(async ({ xml }: { xml: string }) => {
      const society = /ARG_SOCIEDAD>([^<]+)</.exec(xml)?.[1] ?? "";
      seen.push(society);
      if (society === "IBER") return new Response(matchBody("IBER"), { status: 200 });
      return new Response(noMatchBody, { status: 200 });
    });
    const logs: Array<Record<string, string>> = [];

    const result = await lookupMeta4SocietyProfile({
      username: "user",
      jSessionId: "jsession-abc",
      postSoap,
      log: (_message, details) => logs.push(details),
    });

    expect(seen).toEqual(["CYC", "IBER"]);
    expect(result.society).toBe("IBER");
    expect(postSoap.mock.calls[0]?.[0]).toMatchObject({
      headers: {
        Cookie: "JSESSIONID=jsession-abc",
      },
    });
    expect(JSON.stringify(logs)).not.toContain("jsession-abc");
    expect(JSON.stringify(logs)).not.toContain("clave_Self");
    expect(JSON.stringify(postSoap.mock.calls)).not.toContain("SOAPAction");
  });

  it("stops the sequence on infrastructure failure", async () => {
    const postSoap = vi.fn(async () => new Response("unavailable", { status: 500 }));

    await expect(
      lookupMeta4SocietyProfile({
        username: "user",
        jSessionId: "jsession",
        postSoap,
      }),
    ).rejects.toMatchObject({ code: "META4_PROFILE_LOOKUP_FAILED" });
    expect(postSoap).toHaveBeenCalledOnce();
  });

  it("throws META4_PROFILE_NOT_FOUND after three no-matches", async () => {
    const postSoap = vi.fn(async () => new Response(noMatchBody, { status: 200 }));

    await expect(
      lookupMeta4SocietyProfile({
        username: "user",
        jSessionId: "jsession",
        postSoap,
      }),
    ).rejects.toBeInstanceOf(Meta4ProfileError);
    await expect(
      lookupMeta4SocietyProfile({
        username: "user",
        jSessionId: "jsession",
        postSoap,
      }),
    ).rejects.toMatchObject({ code: "META4_PROFILE_NOT_FOUND" });
    expect(postSoap).toHaveBeenCalledTimes(6);
  });
});
