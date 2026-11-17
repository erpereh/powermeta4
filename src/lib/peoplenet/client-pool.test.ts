import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const pools = vi.hoisted(() => [] as Array<{ config: { database: string }; connected: boolean; closed: number }>);
vi.mock("mssql", () => {
  class ConnectionPool {
    connected = false;
    connecting = false;
    closed = 0;
    constructor(public config: { database: string }) {
      pools.push(this);
    }
    async connect() {
      this.connected = true;
      return this;
    }
    async close() {
      this.connected = false;
      this.closed += 1;
    }
    on() {
      return this;
    }
  }
  return { default: { ConnectionPool } };
});

import { getPeopleNetPool, getPeopleNetTarget, peopleNetConfigFingerprint } from "./client";

const ENV = {
  PEOPLENET_DB_HOST: "db-host",
  PEOPLENET_DB_NAME: "M4PRE",
  PEOPLENET_DB_USER: "reader",
  PEOPLENET_DB_PASSWORD: "secret",
};
const cache = globalThis as { powermeta4PeopleNetPool?: unknown; powermeta4PeopleNetPoolKey?: unknown };

beforeEach(() => {
  pools.length = 0;
  delete cache.powermeta4PeopleNetPool;
  delete cache.powermeta4PeopleNetPoolKey;
  for (const [key, value] of Object.entries(ENV)) vi.stubEnv(key, value);
});
afterEach(() => vi.unstubAllEnvs());

describe("PeopleNet pool cache", () => {
  it("reuses the pool while the effective configuration is unchanged", async () => {
    const first = await getPeopleNetPool();
    expect(await getPeopleNetPool()).toBe(first);
    expect(pools).toHaveLength(1);
  });

  it("replaces a pool opened against a previous database (.env.local change)", async () => {
    const old = (await getPeopleNetPool()) as unknown as (typeof pools)[number];
    vi.stubEnv("PEOPLENET_DB_NAME", "M4PRENOMINA");
    const next = (await getPeopleNetPool()) as unknown as (typeof pools)[number];
    expect(next).not.toBe(old);
    expect(next.config.database).toBe("M4PRENOMINA");
    await vi.waitFor(() => expect(old.closed).toBe(1));
  });

  it("reconnects instead of returning a closed pool", async () => {
    const first = await getPeopleNetPool();
    await first.close();
    const second = await getPeopleNetPool();
    expect(second).not.toBe(first);
    expect(second.connected).toBe(true);
  });

  it("exposes server/database and a fingerprint without credentials", () => {
    expect(getPeopleNetTarget()).toEqual({ server: "DB-HOST", database: "M4PRE" });
    const fingerprint = peopleNetConfigFingerprint({ server: "db-host", password: "secret" });
    expect(fingerprint).toMatch(/^[0-9a-f]{64}$/);
    expect(fingerprint).not.toContain("secret");
  });
});
