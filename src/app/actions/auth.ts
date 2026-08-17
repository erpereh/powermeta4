"use server";

import { redirect } from "next/navigation";

import {
  createDebugAuthConfigurationError,
  DebugAuthConfigurationError,
  isDebugAuthEnabled,
} from "@/lib/auth/debug-config";
import {
  isLocalSessionStoreError,
  LocalSessionStoreError,
  META4_LOCAL_SESSION_FAILED,
} from "@/lib/auth/local-session-store-error";
import { getAuthService } from "@/lib/auth/server";
import { deleteSessionCookie, getBrowserSessionNonce, setSessionCookie } from "@/lib/auth/session";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";

export type LoginState = {
  error?: string;
  errorCode?:
    | "DEBUG_AUTH_DISABLED"
    | "DEBUG_AUTH_NOT_ALLOWED"
    | "META4_PROFILE_NOT_FOUND"
    | "META4_PROFILE_LOOKUP_FAILED"
    | "META4_PROFILE_INVALID_RESPONSE"
    | typeof META4_LOCAL_SESSION_FAILED;
};

const genericLoginError =
  "No se pudo iniciar sesión con Meta4. Comprueba el usuario, la contraseña y la conexión.";
const genericDebugLoginError = "El modo debug no está disponible.";
const genericDebugSessionCreationError = "No se ha podido iniciar la sesión de desarrollo.";
const profileNotFoundError = "No se ha podido identificar tu sociedad en Meta4.";
const profileLookupFailedAfterLoginError =
  "Se ha iniciado sesión en Meta4, pero no se han podido cargar los datos del usuario.";
const localSessionStoreError =
  "Se ha iniciado sesión en Meta4, pero no se ha podido guardar la sesión local.";

const getSafeServerErrorDetails = (
  error: unknown,
): {
  name: string;
  code?: string;
  causeName?: string;
  causeCode?: string;
  hint?: string;
} => {
  const details: {
    name: string;
    code?: string;
    causeName?: string;
    causeCode?: string;
    hint?: string;
  } = {
    name: error instanceof Error ? error.name : "UnknownError",
  };
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
  ) {
    details.code = error.code;
  }
  if (error instanceof Error && error.cause !== undefined) {
    const cause = error.cause;
    details.causeName = cause instanceof Error ? cause.name : "UnknownError";
    if (
      typeof cause === "object" &&
      cause !== null &&
      "code" in cause &&
      typeof cause.code === "string"
    ) {
      details.causeCode = cause.code;
    }
  }
  if (isMissingSchemaError(error)) details.hint = "npm run setup";
  return details;
};

const collectErrorText = (error: unknown): string => {
  if (!(error instanceof Error)) return "";
  const causeText = error.cause instanceof Error ? collectErrorText(error.cause) : "";
  return causeText ? `${error.message} ${causeText}` : error.message;
};

const isMissingSchemaError = (error: unknown): boolean =>
  /no such table/i.test(collectErrorText(error));

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
    try {
      await setSessionCookie(result.sessionNonce);
    } catch (error) {
      throw new LocalSessionStoreError(undefined, { cause: error });
    }
  } catch (error) {
    if (isMeta4ProfileError(error)) {
      console.error("[meta4-auth] profile login failed", getSafeServerErrorDetails(error));
      if (error.code === "META4_PROFILE_NOT_FOUND") {
        return { error: profileNotFoundError, errorCode: error.code };
      }
      if (error.code === "META4_PROFILE_INVALID_RESPONSE") {
        return { error: profileLookupFailedAfterLoginError, errorCode: error.code };
      }
      return {
        error: profileLookupFailedAfterLoginError,
        errorCode: "META4_PROFILE_LOOKUP_FAILED",
      };
    }
    console.error("[meta4-auth] session creation failed", getSafeServerErrorDetails(error));
    if (isLocalSessionStoreError(error)) {
      return { error: localSessionStoreError, errorCode: error.code };
    }
    return { error: genericLoginError };
  }

  redirect("/home");
}

export async function debugLoginAction(
  _previousState: LoginState,
  _formData: FormData,
): Promise<LoginState> {
  try {
    if (!isDebugAuthEnabled()) throw createDebugAuthConfigurationError();
    const result = await getAuthService().debugLogin();
    await setSessionCookie(result.sessionNonce);
  } catch (error) {
    if (error instanceof DebugAuthConfigurationError) {
      return { error: genericDebugLoginError, errorCode: error.code };
    }
    console.error("[debug-auth] session creation failed", getSafeServerErrorDetails(error));
    return { error: genericDebugSessionCreationError };
  }

  redirect("/home");
}

export async function logoutAction(_formData: FormData): Promise<never> {
  const sessionNonce = await getBrowserSessionNonce();
  await getAuthService().logout(sessionNonce);
  await deleteSessionCookie();
  redirect("/login");
}
