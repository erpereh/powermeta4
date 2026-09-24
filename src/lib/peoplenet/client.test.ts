import { describe, expect, it } from "vitest";

import { getPeopleNetConfig, PeopleNetConfigError } from "./client";

const ENV = {
  PEOPLENET_DB_HOST: "db-host",
  PEOPLENET_DB_NAME: "M4DB",
  PEOPLENET_DB_USER: "reader",
  PEOPLENET_DB_PASSWORD: "secret",
} as const;

describe("getPeopleNetConfig", () => {
  it("reads the server environment with safe defaults", () => {
    const config = getPeopleNetConfig({ ...ENV, NODE_ENV: "test" });
    expect(config).toMatchObject({
      server: "db-host",
      port: 1433,
      database: "M4DB",
      user: "reader",
      password: "secret",
      options: { encrypt: false, trustServerCertificate: false },
    });
  });

  it("parses port and TLS flags", () => {
    const config = getPeopleNetConfig({
      ...ENV,
      NODE_ENV: "test",
      PEOPLENET_DB_PORT: "14330",
      PEOPLENET_DB_ENCRYPT: "true",
      PEOPLENET_DB_TRUST_SERVER_CERTIFICATE: "TRUE",
    });
    expect(config.port).toBe(14330);
    expect(config.options).toMatchObject({ encrypt: true, trustServerCertificate: true });
  });

  it("names missing variables without echoing any value", () => {
    const call = () =>
      getPeopleNetConfig({
        NODE_ENV: "test",
        PEOPLENET_DB_HOST: "db-host",
        PEOPLENET_DB_PASSWORD: "secret",
      });
    expect(call).toThrow(PeopleNetConfigError);
    expect(call).toThrow("PEOPLENET_DB_NAME, PEOPLENET_DB_USER");
    expect(call).not.toThrow(/secret/);
  });
});
