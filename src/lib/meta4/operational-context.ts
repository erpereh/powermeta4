import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getAuthService } from "@/lib/auth/server";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getDatabase } from "@/server/database/client";
import { createMeta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";
import { Meta4SessionRequiredError } from "./errors";
import { Meta4ProfileError } from "./profile-errors";
import type { Meta4Society } from "./societies";

export type Meta4OperationalContext = {
  mode: "meta4";
  username: string;
  society: Meta4Society;
  jSessionId: string;
};

export const getMeta4OperationalContext = async (
  authSession: ResolvedAuthSession,
): Promise<Meta4OperationalContext> => {
  if (authSession.authContext.mode !== "meta4" || !authSession.authContext.canUseMeta4) {
    throw new Meta4SessionRequiredError();
  }

  const societyFromAuth = authSession.authContext.societyCode;
  if (!societyFromAuth) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  const operational = await getAuthService().getOperationalSession(authSession);
  if (!operational) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se han podido cargar los datos del usuario desde Meta4.",
    );
  }

  const profileRepository = createMeta4UserProfileRepository(getDatabase(), createDpapiAdapter());
  const profileRow = await profileRepository.getProfileRow();
  if (!profileRow || profileRow.username !== operational.username) {
    throw new Meta4ProfileError(
      "META4_PROFILE_REQUIRED",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  // Society comes only from the persisted profile row; ignore any client-supplied value.
  return {
    mode: "meta4",
    username: operational.username,
    society: profileRow.society,
    jSessionId: operational.jSessionId,
  };
};
