import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { getMeta4BaseUrl, getMeta4ServiceUrl, META4_SERVICE, Meta4ConfigError } from "./config";

const HOST = "https://meta4desasoap.creditocaucion.es";

const withBaseUrl = (value: string | undefined, run: () => void): void => {
  const previous = process.env.META4_BASE_URL;
  if (value === undefined) delete process.env.META4_BASE_URL;
  else process.env.META4_BASE_URL = value;
  try {
    run();
  } finally {
    if (previous === undefined) delete process.env.META4_BASE_URL;
    else process.env.META4_BASE_URL = previous;
  }
};

const productionSources = (directory: string): string[] =>
  readdirSync(directory).flatMap((entry) => {
    const fullPath = path.join(directory, entry);
    if (statSync(fullPath).isDirectory()) return productionSources(fullPath);
    if (!/\.tsx?$/.test(entry) || /\.test\.tsx?$/.test(entry)) return [];
    return [fullPath];
  });

describe("Meta4 base URL", () => {
  it("strips trailing slashes and derives every SOAP service", () => {
    withBaseUrl(`${HOST}/`, () => {
      expect(getMeta4BaseUrl()).toBe(HOST);
      expect(getMeta4ServiceUrl(META4_SERVICE.login)).toBe(`${HOST}/services/Login`);
      expect(getMeta4ServiceUrl(META4_SERVICE.profile)).toBe(
        `${HOST}/services/CSP_CONSULTA_ORO_INTRAN_NEW`,
      );
      expect(getMeta4ServiceUrl(META4_SERVICE.hire)).toBe(`${HOST}/services/SRTC_LAUNCH_IMPORT`);
    });
  });

  it("accepts a base URL without a trailing slash", () => {
    withBaseUrl(HOST, () => {
      expect(getMeta4BaseUrl()).toBe(HOST);
      expect(getMeta4ServiceUrl("Login")).not.toContain("//services");
    });
  });

  it("rejects a missing base URL and plain HTTP", () => {
    withBaseUrl(undefined, () => {
      expect(() => getMeta4BaseUrl()).toThrow(Meta4ConfigError);
      expect(() => getMeta4BaseUrl()).toThrow(/META4_BASE_URL es obligatoria/);
    });
    expect(() => getMeta4BaseUrl("http://meta4.example.test")).toThrow(/HTTPS/);
    expect(() => getMeta4ServiceUrl("Login", "http://meta4.example.test")).toThrow(/HTTPS/);
  });

  it("does not hardcode a Meta4 host in production source", () => {
    const forbidden = /meta4desasoap|wmeta4pre2|creditocaucion\.es/i;
    const hits = productionSources(path.join(process.cwd(), "src")).filter((file) =>
      forbidden.test(readFileSync(file, "utf8")),
    );
    expect(hits).toEqual([]);
  });
});
