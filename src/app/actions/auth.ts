"use server";

import { redirect } from "next/navigation";

import { getAuthService } from "@/lib/auth/server";
import { deleteSessionCookie, getSession, setSessionCookie } from "@/lib/auth/session";

export type LoginState = {
  error?: string;
};

const genericLoginError =
  "No se pudo iniciar sesión con Meta4. Comprueba el usuario, la contraseña y la conexión.";

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { error: "El usuario y la contraseña son obligatorios." };
  }

  try {
    const result = await getAuthService().login(username, password);
    await setSessionCookie(result.sessionId);
  } catch {
    return { error: genericLoginError };
  }

  redirect("/home");
}

export async function logoutAction(_formData: FormData): Promise<never> {
  const session = await getSession();
  await getAuthService().logout(session?.sessionId);
  await deleteSessionCookie();
  redirect("/login");
}
