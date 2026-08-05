import "server-only";

import { getPrismaClient } from "@/lib/local-database/client";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { createMeta4Client } from "@/lib/meta4/client";

import { createAuthRepository } from "./session-repository";
import { createAuthService, type AuthService } from "./service";

const globalForAuth = globalThis as { __powermeta4AuthService?: AuthService };

export const getAuthService = (): AuthService => {
  if (!globalForAuth.__powermeta4AuthService) {
    globalForAuth.__powermeta4AuthService = createAuthService({
      repository: createAuthRepository(getPrismaClient()),
      dpapi: createDpapiAdapter(),
      soap: createMeta4Client(),
    });
  }
  return globalForAuth.__powermeta4AuthService;
};

export const resetAuthService = (): void => {
  delete globalForAuth.__powermeta4AuthService;
};
