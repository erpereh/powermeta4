import "server-only";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { getAuthService } from "./server";
import { SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS, isOpaqueSessionId } from "./token";
import type { ResolvedAuthSession } from "./service";

export { SESSION_COOKIE_NAME } from "./token";

const isHttpsRequest = async (): Promise<boolean> => {
  try {
    const requestHeaders = await headers();
    const protocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]?.trim();
    return protocol === "https";
  } catch {
    return false;
  }
};

export const getBrowserSessionNonce = async (): Promise<string | undefined> => {
  const sessionNonce = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  return isOpaqueSessionId(sessionNonce) ? sessionNonce : undefined;
};

export const getCurrentAuthContext = async (): Promise<ResolvedAuthSession | null> => {
  const sessionNonce = await getBrowserSessionNonce();
  if (!sessionNonce) return null;
  return getAuthService().resolveSession(sessionNonce);
};

export const requireAuthContext = async (): Promise<ResolvedAuthSession> => {
  const authSession = await getCurrentAuthContext();
  if (authSession) return authSession;

  const sessionNonce = await getBrowserSessionNonce();
  redirect(sessionNonce ? "/login?expired=1" : "/login");
};

export const setSessionCookie = async (sessionNonce: string): Promise<void> => {
  if (!isOpaqueSessionId(sessionNonce)) throw new Error("La sesión local no es válida.");
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionNonce, {
    httpOnly: true,
    sameSite: "strict",
    secure: await isHttpsRequest(),
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
};

export const deleteSessionCookie = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: await isHttpsRequest(),
    path: "/",
    maxAge: 0,
  });
};
