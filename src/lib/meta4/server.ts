import "server-only";

import { getAuthService } from "@/lib/auth/server";

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
      auth: getAuthService(),
    });
  }
  return globalForMeta4.__powermeta4AuthenticatedSoapClient;
};

export const executeAuthenticatedSoap = <T>(operation: AuthenticatedSoapOperation<T>): Promise<T> =>
  getAuthenticatedSoapClient().executeAuthenticatedSoap(operation);

export const resetAuthenticatedSoapClient = (): void => {
  delete globalForMeta4.__powermeta4AuthenticatedSoapClient;
};
