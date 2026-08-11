import "server-only";

import { getAuthService } from "@/lib/auth/server";
import { getCurrentAuthContext } from "@/lib/auth/session";

import {
  createAuthenticatedSoapClient,
  type AuthenticatedSoapOperation,
} from "./authenticated-soap-client";

const globalForMeta4 = globalThis as {
  __powermeta4AuthenticatedSoapClient?: ReturnType<typeof createAuthenticatedSoapClient>;
};

const getAuthenticatedSoapClient = () => {
  if (!globalForMeta4.__powermeta4AuthenticatedSoapClient) {
    globalForMeta4.__powermeta4AuthenticatedSoapClient = createAuthenticatedSoapClient({
      auth: {
        getCurrentAuthContext,
        getOperationalSession: (authSession) => getAuthService().getOperationalSession(authSession),
        renewSession: (authSession) => getAuthService().renewSession(authSession),
        invalidate: () => getAuthService().invalidate(),
      },
    });
  }
  return globalForMeta4.__powermeta4AuthenticatedSoapClient;
};

export const executeAuthenticatedSoap = <T>(operation: AuthenticatedSoapOperation<T>): Promise<T> =>
  getAuthenticatedSoapClient().executeAuthenticatedSoap(operation);

export const resetAuthenticatedSoapClient = (): void => {
  delete globalForMeta4.__powermeta4AuthenticatedSoapClient;
};
