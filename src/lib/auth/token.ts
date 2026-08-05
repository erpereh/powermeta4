import { createHash, randomBytes } from "node:crypto";

export const SESSION_COOKIE_NAME = "powermeta4-session";
export const SESSION_DURATION_SECONDS = 30 * 24 * 60 * 60;
export const SESSION_TOUCH_INTERVAL_MS = 24 * 60 * 60 * 1000;
const OPAQUE_SESSION_BYTES = 32;

export type SessionPayload = {
  sessionId: string;
  username: string;
  expiresAt: number;
};

export const createOpaqueSessionId = (): string =>
  randomBytes(OPAQUE_SESSION_BYTES).toString("base64url");

export const hashOpaqueSessionId = (sessionId: string): string =>
  createHash("sha256").update(sessionId, "utf8").digest("hex");

export const isOpaqueSessionId = (sessionId: string | undefined): sessionId is string =>
  typeof sessionId === "string" && /^[A-Za-z0-9_-]{43}$/.test(sessionId);
