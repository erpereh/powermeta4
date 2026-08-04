"use server";

import { timingSafeEqual } from "node:crypto";
import { redirect } from "next/navigation";

import { deleteSessionCookie, setSessionCookie } from "@/lib/auth/session";

export type LoginState = {
  error?: string;
};

const valuesMatch = (provided: string, expected: string | undefined) => {
  if (!expected) return false;
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);
  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (
    !email ||
    !password ||
    !valuesMatch(email, process.env.DEMO_AUTH_EMAIL?.trim().toLowerCase()) ||
    !valuesMatch(password, process.env.DEMO_AUTH_PASSWORD)
  ) {
    return { error: "El correo o la contraseña no son correctos." };
  }

  await setSessionCookie("demo-user");
  redirect("/home");
}

export async function logoutAction(_formData: FormData): Promise<never> {
  await deleteSessionCookie();
  redirect("/login");
}
