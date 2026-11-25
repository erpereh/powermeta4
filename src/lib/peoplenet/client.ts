import "server-only";

import { createHash } from "node:crypto";
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

/**
 * Write connection for the hire only (PEOPLENET_DB_WRITE_USER / _PASSWORD on the
 * same server and database). The read connection never gets write rights; null
 * while the write user is not configured.
 */
export const getPeopleNetWriteConfig = (
  env: NodeJS.ProcessEnv = process.env,
): sql.config | null => {
  // PEOPLENET_DB_WRITE_USE_READ_USER=true: the read user already has write rights
  // (the same login used in DBeaver), so the hire reuses it instead of a copy of the password.
  const reuse = readFlag(env.PEOPLENET_DB_WRITE_USE_READ_USER);
  const user = reuse ? env.PEOPLENET_DB_USER?.trim() : env.PEOPLENET_DB_WRITE_USER?.trim();
  const password = reuse ? env.PEOPLENET_DB_PASSWORD : env.PEOPLENET_DB_WRITE_PASSWORD;
  if (!user || !password) return null;
  return {
    ...getPeopleNetConfig(env),
    user,
    password,
    pool: { max: 2, min: 0, idleTimeoutMillis: 60_000 },
    options: { ...getPeopleNetConfig(env).options, appName: "powermeta4-hire" },
  };
};

/**
 * Non-reversible fingerprint of the effective connection. It lets a long-lived
 * process notice that `.env.local` now points elsewhere without keeping secrets.
 */
export const peopleNetConfigFingerprint = (config: sql.config): string =>
  createHash("sha256")
    .update(
      JSON.stringify([
        config.server,
        config.port,
        config.database,
        config.user,
        config.password,
        config.options?.encrypt,
        config.options?.trustServerCertificate,
      ]),
    )
    .digest("hex");

/** Server and database actually used; never includes credentials. */
export const getPeopleNetTarget = (
  env: NodeJS.ProcessEnv = process.env,
): { server: string; database: string } => {
  const config = getPeopleNetConfig(env);
  return {
    server: config.server.toUpperCase(),
    database: (config.database ?? "").toUpperCase(),
  };
};

// Survives dev hot reloads so each edit does not open a new pool.
const poolCache = globalThis as typeof globalThis & {
  powermeta4PeopleNetPool?: Promise<sql.ConnectionPool>;
  powermeta4PeopleNetPoolKey?: string;
  powermeta4PeopleNetWritePool?: Promise<sql.ConnectionPool>;
  powermeta4PeopleNetWritePoolKey?: string;
};

/** Pool of the write connection; throws PeopleNetConfigError while it is not configured. */
export const getPeopleNetWritePool = (): Promise<sql.ConnectionPool> => {
  const config = getPeopleNetWriteConfig();
  if (!config)
    throw new PeopleNetConfigError(["PEOPLENET_DB_WRITE_USER", "PEOPLENET_DB_WRITE_PASSWORD"]);
  const key = peopleNetConfigFingerprint(config);
  const cached = poolCache.powermeta4PeopleNetWritePool;
  if (cached && poolCache.powermeta4PeopleNetWritePoolKey === key) {
    return cached.then((pool) => {
      if (pool.connected || pool.connecting) return pool;
      poolCache.powermeta4PeopleNetWritePool = undefined;
      return getPeopleNetWritePool();
    });
  }
  if (cached) void cached.then((pool) => pool.close()).catch(() => undefined);
  const connecting = new sql.ConnectionPool(config).connect();
  poolCache.powermeta4PeopleNetWritePool = connecting;
  poolCache.powermeta4PeopleNetWritePoolKey = key;
  connecting.catch(() => {
    if (poolCache.powermeta4PeopleNetWritePool === connecting) {
      poolCache.powermeta4PeopleNetWritePool = undefined;
    }
  });
  return connecting;
};

export const getPeopleNetPool = (): Promise<sql.ConnectionPool> => {
  const config = getPeopleNetConfig();
  const key = peopleNetConfigFingerprint(config);
  const cached = poolCache.powermeta4PeopleNetPool;
  if (cached && poolCache.powermeta4PeopleNetPoolKey !== key) {
    // A previous base/credential must never keep answering after a config change.
    poolCache.powermeta4PeopleNetPool = undefined;
    void cached.then((pool) => pool.close()).catch(() => undefined);
  }
  if (!poolCache.powermeta4PeopleNetPool) {
    const pool = new sql.ConnectionPool(config);
    const connecting = pool.connect();
    poolCache.powermeta4PeopleNetPool = connecting;
    poolCache.powermeta4PeopleNetPoolKey = key;
    connecting.catch(() => {
      if (poolCache.powermeta4PeopleNetPool === connecting)
        poolCache.powermeta4PeopleNetPool = undefined;
    });
    // mssql recovers individual connections; only log a safe name, never the message.
    pool.on("error", (error: unknown) => {
      console.error("[peoplenet] pool error", {
        name: error instanceof Error ? error.name : "unknown",
      });
    });
    return connecting;
  }
  return poolCache.powermeta4PeopleNetPool.then((pool) => {
    if (pool.connected || pool.connecting) return pool;
    // Closed by a script or the driver: reconnect instead of reusing a dead pool.
    if (poolCache.powermeta4PeopleNetPoolKey === key) poolCache.powermeta4PeopleNetPool = undefined;
    return getPeopleNetPool();
  });
};
