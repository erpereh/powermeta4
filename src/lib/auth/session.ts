import "server-only";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { getAuthService } from "./server";
import {
  SESSION_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
  type SessionPayload,
  isOpaqueSessionId,
} from "./token";

export { SESSION_COOKIE_NAME } from "./token";
export type { SessionPayload } from "./token";

const isHttpsRequest = async (): Promise<boolean> => {
  try {
    const requestHeaders = await headers();
    const protocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim();
    return protocol === "https";
  } catch {
    return false;
  }
};

export const getSession = async (): Promise<SessionPayload | null> => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!isOpaqueSessionId(sessionId)) return null;

  const session = await getAuthService().getLocalSession(sessionId);
  if (!session) return null;
  return {
    sessionId,
    username: session.username,
    expiresAt: Math.floor(session.expiresAt.getTime() / 1000),
  };
};

export const requireSession = async (): Promise<SessionPayload> => {
  const session = await getSession();
  if (!session) redirect("/login");

  const restored = await getAuthService().restoreSession();
  if (!restored) {
    await deleteSessionCookie();
    redirect("/login");
  }
  return session;
};

export const setSessionCookie = async (sessionId: string) => {
  if (!isOpaqueSessionId(sessionId)) throw new Error("La sesión local no es válida.");
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    sameSite: "strict",
    secure: await isHttpsRequest(),
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
};

export const deleteSessionCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: await isHttpsRequest(),
    path: "/",
    maxAge: 0,
  });
};
