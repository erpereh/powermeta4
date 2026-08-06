import "server-only";

import { createDpapiAdapter } from "@/lib/security/dpapi";
import { createMeta4Client } from "@/lib/meta4/client";
import { getDatabase } from "@/server/database/client";

import { createAuthRepository } from "./session-repository";
import { createAuthService, type AuthService } from "./service";

const globalForAuth = globalThis as {
  __powermeta4AuthService?: AuthService;
  __powermeta4AuthDatabase?: ReturnType<typeof getDatabase>;
};

export const getAuthService = (): AuthService => {
  const database = getDatabase();
  if (
    !globalForAuth.__powermeta4AuthService ||
    globalForAuth.__powermeta4AuthDatabase !== database
  ) {
    globalForAuth.__powermeta4AuthService = createAuthService({
      repository: createAuthRepository(database),
      dpapi: createDpapiAdapter(),
      soap: createMeta4Client(),
    });
    globalForAuth.__powermeta4AuthDatabase = database;
  }
  return globalForAuth.__powermeta4AuthService;
};

export const resetAuthService = (): void => {
  delete globalForAuth.__powermeta4AuthService;
  delete globalForAuth.__powermeta4AuthDatabase;
};
