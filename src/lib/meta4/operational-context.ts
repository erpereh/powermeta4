import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getAuthService } from "@/lib/auth/server";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getDatabase } from "@/server/database/client";
import { createCompanyRepository } from "@/server/database/repositories/company-repository";
import { createMeta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";
import { Meta4SessionRequiredError } from "./errors";
import { Meta4ProfileError } from "./profile-errors";
import type { Meta4Society } from "./societies";
import { reconcileMeta4Workspace } from "./workspace-scope";

export type Meta4OperationalContext = {
  mode: "meta4";
  username: string;
  society: Meta4Society;
  companyId: string;
  jSessionId: string;
};

export const getMeta4OperationalContext = async (
  authSession: ResolvedAuthSession,
): Promise<Meta4OperationalContext> => {
  if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
    throw new Meta4SessionRequiredError();
  }

  const operational = await getAuthService().getOperationalSession(authSession);
  if (!operational) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se han podido cargar los datos del usuario desde Meta4.",
    );
  }

  const database = getDatabase();
  const profileRepository = createMeta4UserProfileRepository(database, createDpapiAdapter());
  const availableSocieties = await profileRepository.listAvailableSocieties(operational.username);
  if (availableSocieties.length === 0) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  const reconciled = reconcileMeta4Workspace(database, availableSocieties);
  if (!reconciled) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  const company = createCompanyRepository(database).getById(reconciled.companyId);
  const profileRow = await profileRepository.getProfileRow(reconciled.society);
  if (!profileRow || profileRow.username !== operational.username) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  return {
    mode: "meta4",
    username: operational.username,
    society: reconciled.society,
    companyId: company.id,
    jSessionId: operational.jSessionId,
  };
};
