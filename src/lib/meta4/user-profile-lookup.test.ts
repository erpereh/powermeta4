import { describe, expect, it, vi } from "vitest";

import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { lookupMeta4SocietyProfiles } from "@/lib/meta4/user-profile-lookup";

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

const lookup = (postSoap: (input: { xml: string }) => Promise<Response>, log?: (message: string, details: Record<string, string>) => void) =>
  lookupMeta4SocietyProfiles({
    username: "user",
    jSessionId: "jsession-abc",
    postSoap,
    log,
  });

const posterFrom = (resolver: (society: string) => Response | "throw") => {
  const seen: string[] = [];
  const postSoap = vi.fn(async ({ xml }: { xml: string }) => {
    const society = /ARG_SOCIEDAD>([^<]+)</.exec(xml)?.[1] ?? "";
    seen.push(society);
    const resolved = resolver(society);
    if (resolved === "throw") throw new Error("network");
    return resolved;
  });
  return { seen, postSoap };
};

describe("Meta4 society profile lookup", () => {
  it("A) keeps only CYC when IBER and COLL are no-match", async () => {
    const { seen, postSoap } = posterFrom((society) =>
      society === "CYC" ? new Response(matchBody("CYC"), { status: 200 }) : new Response(noMatchBody, { status: 200 }),
    );

    const result = await lookup(postSoap);

    expect(seen).toEqual(["CYC", "IBER", "COLL"]);
    expect(result.matches.map((match) => match.society)).toEqual(["CYC"]);
  });

  it("B) keeps CYC and IBER when COLL is no-match", async () => {
    const { seen, postSoap } = posterFrom((society) =>
      society === "COLL"
        ? new Response(noMatchBody, { status: 200 })
        : new Response(matchBody(society), { status: 200 }),
    );

    const result = await lookup(postSoap);

    expect(seen).toEqual(["CYC", "IBER", "COLL"]);
    expect(result.matches.map((match) => match.society)).toEqual(["CYC", "IBER"]);
  });

  it("C) keeps CYC, IBER and COLL when all match", async () => {
    const { seen, postSoap } = posterFrom(
      (society) => new Response(matchBody(society), { status: 200 }),
    );

    const result = await lookup(postSoap);

    expect(seen).toEqual(["CYC", "IBER", "COLL"]);
    expect(result.matches.map((match) => match.society)).toEqual(["CYC", "IBER", "COLL"]);
  });

  it("D) keeps only IBER when CYC and COLL are no-match", async () => {
    const { seen, postSoap } = posterFrom((society) =>
      society === "IBER" ? new Response(matchBody("IBER"), { status: 200 }) : new Response(noMatchBody, { status: 200 }),
    );

    const result = await lookup(postSoap);

    expect(seen).toEqual(["CYC", "IBER", "COLL"]);
    expect(result.matches.map((match) => match.society)).toEqual(["IBER"]);
  });

  it("E) rejects login when none match", async () => {
    const { seen, postSoap } = posterFrom(() => new Response(noMatchBody, { status: 200 }));

    await expect(lookup(postSoap)).rejects.toBeInstanceOf(Meta4ProfileError);
    await expect(lookup(postSoap)).rejects.toMatchObject({ code: "META4_PROFILE_NOT_FOUND" });
    expect(seen).toEqual(["CYC", "IBER", "COLL", "CYC", "IBER", "COLL"]);
  });

  it("F) does not stop after the first match", async () => {
    const logs: Array<Record<string, string>> = [];
    const { seen, postSoap } = posterFrom((society) =>
      society === "CYC" || society === "IBER"
        ? new Response(matchBody(society), { status: 200 })
        : new Response(noMatchBody, { status: 200 }),
    );

    const result = await lookup(postSoap, (_message, details) => logs.push(details));

    expect(seen).toEqual(["CYC", "IBER", "COLL"]);
    expect(result.matches.map((match) => match.society)).toEqual(["CYC", "IBER"]);
    expect(postSoap.mock.calls[0]?.[0]).toMatchObject({
      headers: {
        Cookie: "JSESSIONID=jsession-abc",
        SOAPAction: '""',
      },
    });
    expect(JSON.stringify(logs)).not.toContain("jsession-abc");
    expect(JSON.stringify(logs)).not.toContain("clave_Self");
  });

  it("aborts the sequence on infrastructure failure even after a match", async () => {
    const { seen, postSoap } = posterFrom((society) => {
      if (society === "CYC") return new Response(matchBody("CYC"), { status: 200 });
      return new Response("unavailable", { status: 500 });
    });

    await expect(lookup(postSoap)).rejects.toMatchObject({ code: "META4_PROFILE_LOOKUP_FAILED" });
    expect(seen).toEqual(["CYC", "IBER"]);
  });

  it("stops the sequence on the first infrastructure failure", async () => {
    const postSoap = vi.fn(async () => new Response("unavailable", { status: 500 }));

    await expect(
      lookupMeta4SocietyProfiles({
        username: "user",
        jSessionId: "jsession",
        postSoap,
      }),
    ).rejects.toMatchObject({ code: "META4_PROFILE_LOOKUP_FAILED" });
    expect(postSoap).toHaveBeenCalledOnce();
  });
});
