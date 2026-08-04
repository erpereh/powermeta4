import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
  verifySessionToken,
  type SessionPayload,
} from "@/lib/auth/token";

export { SESSION_COOKIE_NAME, createSessionToken, verifySessionToken } from "@/lib/auth/token";
export type { SessionPayload } from "@/lib/auth/token";

export const getSession = async (): Promise<SessionPayload | null> => {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(SESSION_COOKIE_NAME)?.value);
};

export const requireSession = async (): Promise<SessionPayload> => {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
};

export const setSessionCookie = async (userId: string) => {
  const token = createSessionToken(userId);
  if (!token) throw new Error("DEMO_SESSION_SECRET no está configurado.");

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
};

export const deleteSessionCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
};
