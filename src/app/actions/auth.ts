"use server";

import { redirect } from "next/navigation";

import { assertDebugAuthEnabled, DebugAuthConfigurationError } from "@/lib/auth/debug-config";
import { getAuthService } from "@/lib/auth/server";
import { deleteSessionCookie, getBrowserSessionNonce, setSessionCookie } from "@/lib/auth/session";

export type LoginState = {
  error?: string;
  errorCode?: "DEBUG_AUTH_DISABLED" | "DEBUG_AUTH_NOT_ALLOWED";
};

const genericLoginError =
  "No se pudo iniciar sesión con Meta4. Comprueba el usuario, la contraseña y la conexión.";
const genericDebugLoginError = "El modo debug no está disponible.";

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
    await setSessionCookie(result.sessionNonce);
  } catch {
    return { error: genericLoginError };
  }

  redirect("/home");
}

export async function debugLoginAction(
  _previousState: LoginState,
  _formData: FormData,
): Promise<LoginState> {
  try {
    assertDebugAuthEnabled();
    const result = await getAuthService().debugLogin();
    await setSessionCookie(result.sessionNonce);
  } catch (error) {
    if (error instanceof DebugAuthConfigurationError) {
      return { error: genericDebugLoginError, errorCode: error.code };
    }
    return { error: genericDebugLoginError };
  }

  redirect("/home");
}

export async function logoutAction(_formData: FormData): Promise<never> {
  const sessionNonce = await getBrowserSessionNonce();
  await getAuthService().logout(sessionNonce);
  await deleteSessionCookie();
  redirect("/login");
}
