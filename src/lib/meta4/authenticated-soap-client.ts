import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";

import { Meta4SessionRequiredError } from "./errors";
import { isSessionExpiredResponse } from "./session-expiration";

export { Meta4SessionRequiredError } from "./errors";

export class SessionExpiredError extends Error {
  constructor() {
    super("La sesión Meta4 ha caducado. Vuelve a iniciar sesión.");
    this.name = "SessionExpiredError";
  }
}

export type AuthenticatedSoapOperation<T> = {
  url: string;
  xml: string;
  headers?: HeadersInit;
  timeoutMs?: number;
  parseResponse: (response: Response) => Promise<T> | T;
  isSessionExpired?: (response: Response) => Promise<boolean> | boolean;
};

type AuthenticatedSoapAuth = {
  getCurrentAuthContext: () => Promise<ResolvedAuthSession | null>;
  getOperationalSession: (
    authSession: ResolvedAuthSession,
  ) => Promise<{ jSessionId: string; refreshSessionId: string } | null>;
  renewSession: (authSession: ResolvedAuthSession) => Promise<unknown>;
  invalidate: () => Promise<null>;
};

type AuthenticatedSoapClientOptions = {
  auth: AuthenticatedSoapAuth;
  fetchImpl?: typeof fetch;
};

const executeFetch = async (
  fetchImpl: typeof fetch,
  operation: AuthenticatedSoapOperation<unknown>,
  jSessionId: string,
): Promise<Response> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), operation.timeoutMs ?? 15_000);
  const headers = new Headers(operation.headers);
  headers.set("Cookie", `JSESSIONID=${jSessionId}`);
  headers.set("Content-Type", headers.get("Content-Type") ?? "text/xml; charset=utf-8");
  headers.set("Accept", headers.get("Accept") ?? "text/xml");

  try {
    return await fetchImpl(operation.url, {
      method: "POST",
      headers,
      body: operation.xml,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("La petición SOAP excedió el tiempo de espera.");
    }
    throw new Error("No se pudo completar la petición SOAP.");
  } finally {
    clearTimeout(timeout);
  }
};

export const createAuthenticatedSoapClient = ({
  auth,
  fetchImpl = fetch,
}: AuthenticatedSoapClientOptions) => {
  let renewalFlight: Promise<unknown> | null = null;

  const renewIfNeeded = async (
    authSession: ResolvedAuthSession,
    expiredJSessionId: string,
  ): Promise<void> => {
    const latestSession = await auth.getOperationalSession(authSession);
    if (!latestSession) throw new SessionExpiredError();
    if (latestSession.jSessionId !== expiredJSessionId) return;

    if (!renewalFlight) {
      renewalFlight = Promise.resolve(auth.renewSession(authSession)).finally(() => {
        renewalFlight = null;
      });
    }
    await renewalFlight;
  };

  return {
    executeAuthenticatedSoap: async <T>(operation: AuthenticatedSoapOperation<T>): Promise<T> => {
      const authSession = await auth.getCurrentAuthContext();
      if (!authSession) throw new SessionExpiredError();
      if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
        throw new Meta4SessionRequiredError();
      }

      const session = await auth.getOperationalSession(authSession);
      if (!session) throw new SessionExpiredError();

      const executeOnce = async (jSessionId: string) => {
        const response = await executeFetch(
          fetchImpl,
          operation as AuthenticatedSoapOperation<unknown>,
          jSessionId,
        );
        const expired = operation.isSessionExpired
          ? await operation.isSessionExpired(response)
          : await isSessionExpiredResponse(response);
        return { response, expired };
      };

      const firstAttempt = await executeOnce(session.jSessionId);
      if (!firstAttempt.expired) return operation.parseResponse(firstAttempt.response);

      try {
        await renewIfNeeded(authSession, session.jSessionId);
      } catch {
        await auth.invalidate();
        throw new SessionExpiredError();
      }

      const renewedSession = await auth.getOperationalSession(authSession);
      if (!renewedSession) {
        await auth.invalidate();
        throw new SessionExpiredError();
      }
      const retry = await executeOnce(renewedSession.jSessionId);
      if (retry.expired) {
        await auth.invalidate();
        throw new SessionExpiredError();
      }
      return operation.parseResponse(retry.response);
    },
  };
};
