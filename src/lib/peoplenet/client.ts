import "server-only";

import sql from "mssql";

export class PeopleNetConfigError extends Error {
  constructor(missing: readonly string[]) {
    super(`Faltan variables de conexión a PeopleNet: ${missing.join(", ")}.`);
    this.name = "PeopleNetConfigError";
  }
}

const REQUIRED_ENV = [
  "PEOPLENET_DB_HOST",
  "PEOPLENET_DB_NAME",
  "PEOPLENET_DB_USER",
  "PEOPLENET_DB_PASSWORD",
] as const;

const DEFAULT_PORT = 1433;

const readFlag = (value: string | undefined): boolean => value?.trim().toLowerCase() === "true";

const readPort = (value: string | undefined): number => {
  const port = Number(value?.trim() || DEFAULT_PORT);
  return Number.isInteger(port) && port > 0 && port < 65_536 ? port : DEFAULT_PORT;
};

/** Reads the PeopleNet SQL Server connection from the server environment only. */
export const getPeopleNetConfig = (env: NodeJS.ProcessEnv = process.env): sql.config => {
  const missing = REQUIRED_ENV.filter((name) => !env[name]?.trim());
  if (missing.length > 0) throw new PeopleNetConfigError(missing);

  return {
    server: env.PEOPLENET_DB_HOST?.trim() ?? "",
    port: readPort(env.PEOPLENET_DB_PORT),
    database: env.PEOPLENET_DB_NAME?.trim() ?? "",
    user: env.PEOPLENET_DB_USER?.trim() ?? "",
    password: env.PEOPLENET_DB_PASSWORD ?? "",
    connectionTimeout: 15_000,
    requestTimeout: 30_000,
    pool: { max: 8, min: 0, idleTimeoutMillis: 60_000 },
    options: {
      encrypt: readFlag(env.PEOPLENET_DB_ENCRYPT),
      trustServerCertificate: readFlag(env.PEOPLENET_DB_TRUST_SERVER_CERTIFICATE),
      appName: "powermeta4",
    },
  };
};

// Survives dev hot reloads so each edit does not open a new pool.
const poolCache = globalThis as typeof globalThis & {
  powermeta4PeopleNetPool?: Promise<sql.ConnectionPool>;
};

export const getPeopleNetPool = (): Promise<sql.ConnectionPool> => {
  if (!poolCache.powermeta4PeopleNetPool) {
    const pool = new sql.ConnectionPool(getPeopleNetConfig());
    poolCache.powermeta4PeopleNetPool = pool.connect().catch((error: unknown) => {
      poolCache.powermeta4PeopleNetPool = undefined;
      throw error;
    });
  }
  return poolCache.powermeta4PeopleNetPool;
};
