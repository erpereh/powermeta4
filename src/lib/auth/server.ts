import "server-only";

import { createDpapiAdapter } from "@/lib/security/dpapi";
import { createMeta4Client } from "@/lib/meta4/client";
import { getDatabase } from "@/server/database/client";
import { createMeta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";

import { createAuthRepository } from "./session-repository";
import { createAuthService, type AuthService } from "./service";

const globalForAuth = globalThis as {
  __powermeta4AuthService?: AuthService;
  __powermeta4AuthDatabase?: ReturnType<typeof getDatabase>;
};

const safeProfileLookupLog = (message: string, details: Record<string, string>): void => {
  console.info(`[${message}]`, details);
};

export const getAuthService = (): AuthService => {
  const database = getDatabase();
  if (
    !globalForAuth.__powermeta4AuthService ||
    globalForAuth.__powermeta4AuthDatabase !== database
  ) {
    const dpapi = createDpapiAdapter();
    globalForAuth.__powermeta4AuthService = createAuthService({
      repository: createAuthRepository(database),
      profileRepository: createMeta4UserProfileRepository(database, dpapi),
      dpapi,
      soap: createMeta4Client(),
      logProfileLookup: safeProfileLookupLog,
    });
    globalForAuth.__powermeta4AuthDatabase = database;
  }
  return globalForAuth.__powermeta4AuthService;
};

export const resetAuthService = (): void => {
  delete globalForAuth.__powermeta4AuthService;
  delete globalForAuth.__powermeta4AuthDatabase;
};
