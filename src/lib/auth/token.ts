import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE_NAME = "powermeta4-session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export type SessionPayload = {
  userId: string;
  expiresAt: number;
};

const encode = (value: string) => Buffer.from(value, "utf8").toString("base64url");
const decode = (value: string) => Buffer.from(value, "base64url").toString("utf8");

const getSecret = (secret?: string) => secret ?? process.env.DEMO_SESSION_SECRET ?? "";

const sign = (value: string, secret: string) =>
  createHmac("sha256", secret).update(value).digest("base64url");

const signaturesMatch = (left: string, right: string) => {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
};

export const createSessionToken = (
  userId: string,
  secret?: string,
  now = Date.now(),
): string | null => {
  const resolvedSecret = getSecret(secret);
  if (!resolvedSecret || !userId) return null;

  const payload: SessionPayload = {
    userId,
    expiresAt: Math.floor(now / 1000) + SESSION_DURATION_SECONDS,
  };
  const encodedPayload = encode(JSON.stringify(payload));
  return `${encodedPayload}.${sign(encodedPayload, resolvedSecret)}`;
};

export const verifySessionToken = (
  token: string | undefined,
  secret?: string,
  now = Date.now(),
): SessionPayload | null => {
  const resolvedSecret = getSecret(secret);
  if (!token || !resolvedSecret) return null;

  const [encodedPayload, receivedSignature, ...rest] = token.split(".");
  if (!encodedPayload || !receivedSignature || rest.length > 0) return null;

  const expectedSignature = sign(encodedPayload, resolvedSecret);
  if (!signaturesMatch(receivedSignature, expectedSignature)) return null;

  try {
    const payload: unknown = JSON.parse(decode(encodedPayload));
    if (
      typeof payload !== "object" ||
      payload === null ||
      typeof (payload as { userId?: unknown }).userId !== "string" ||
      typeof (payload as { expiresAt?: unknown }).expiresAt !== "number"
    ) {
      return null;
    }

    const session = payload as SessionPayload;
    if (!Number.isFinite(session.expiresAt) || session.expiresAt <= Math.floor(now / 1000)) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
};
