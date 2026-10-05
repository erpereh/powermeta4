import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import type { Meta4Society } from "@/lib/meta4/societies";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { getDatabase } from "@/server/database/client";
import { createMeta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";

import {
  crossCheckIdentity,
  evaluateProfileIdentity,
  type OroIdentityRow,
  type PortalPerson,
} from "./identity-core";
import { resolvePortalVariant } from "./pending";
import { employeeParam, organizationParam, runPortalSelect, sqlText } from "./peoplenet/query";
import type { PortalVariant } from "./types";

export type PortalIdentity =
  | { readonly status: "resolved"; readonly person: PortalPerson; readonly crossChecked: boolean }
  | { readonly status: "unresolved"; readonly message: string };

export type PortalContext =
  | {
      readonly mode: "meta4";
      readonly society: Meta4Society;
      readonly username: string;
      readonly variant: PortalVariant;
      readonly identity: PortalIdentity;
    }
  | {
      readonly mode: "unavailable";
      readonly reason: "debug" | "profile";
      readonly message: string;
    };

export type PortalContextDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  loadProfile?: (
    society: Meta4Society,
  ) => Promise<{ recordSets: { fields: Record<string, string> }[] } | null>;
  loadOroIdentity?: (society: Meta4Society, employeeId: string) => Promise<OroIdentityRow[]>;
};

const ORO_IDENTITY_QUERY = `SELECT ID_EMPLEADO, CLAVE_SELF
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO = @employeeId`;

const loadOroIdentity = async (
  society: Meta4Society,
  employeeId: string,
): Promise<OroIdentityRow[]> => {
  const rows = await runPortalSelect(ORO_IDENTITY_QUERY, {
    organization: organizationParam(society),
    employeeId: employeeParam(employeeId),
  });
  return rows.map((row) => ({
    employeeId: sqlText(row.ID_EMPLEADO) ?? "",
    selfKey: sqlText(row.CLAVE_SELF),
  }));
};

const loadStoredProfile = (society: Meta4Society) =>
  createMeta4UserProfileRepository(getDatabase(), createDpapiAdapter()).getDecryptedProfile(
    society,
  );

const UNRESOLVED_MESSAGES = {
  "no-coherent-record":
    "Tu perfil Meta4 no identifica un empleado con tu usuario en esta sociedad.",
  ambiguous: "Tu usuario corresponde a más de un empleado en esta sociedad.",
  "cross-check-failed": "La ficha de PeopleNet no coincide con el empleado de tu perfil Meta4.",
} as const;

/**
 * Contexto del portal resuelto en servidor: sociedad del workspace activo,
 * variante (carpeta `m4custom` homónima) y empleado propio. El navegador no
 * aporta ningún dato de identidad ni de sociedad.
 */
export const getPortalContext = async (
  authSession: ResolvedAuthSession,
  deps: PortalContextDeps = {},
): Promise<PortalContext> => {
  if (authSession.authContext.mode === "debug") {
    return {
      mode: "unavailable",
      reason: "debug",
      message:
        "El portal necesita una sesión Meta4; el modo desarrollo no tiene datos de empleado.",
    };
  }
  let context;
  try {
    context = await (deps.getOperationalContext ?? getMeta4OperationalContext)(authSession);
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return { mode: "unavailable", reason: "profile", message: error.message };
    }
    throw error;
  }
  const base = {
    mode: "meta4" as const,
    society: context.society,
    username: context.username,
    variant: resolvePortalVariant(context.society),
  };
  let profile;
  try {
    profile = await (deps.loadProfile ?? loadStoredProfile)(context.society);
  } catch (error) {
    console.error("[portal] identity read failed", {
      operation: "identity",
      stage: "profile",
      code: "READ_FAILED",
      name: error instanceof Error ? error.name : "unknown",
    });
    return {
      ...base,
      identity: {
        status: "unresolved",
        message: "No se ha podido leer tu perfil Meta4. Vuelve a iniciar sesión.",
      },
    };
  }
  const evaluation = evaluateProfileIdentity(profile?.recordSets ?? [], context.username);
  if (evaluation.status === "unresolved") {
    return {
      ...base,
      identity: { status: "unresolved", message: UNRESOLVED_MESSAGES[evaluation.reason] },
    };
  }
  try {
    const rows = await (deps.loadOroIdentity ?? loadOroIdentity)(
      context.society,
      evaluation.person.employeeId,
    );
    if (!crossCheckIdentity(rows, evaluation.person.employeeId, context.username)) {
      return {
        ...base,
        identity: { status: "unresolved", message: UNRESOLVED_MESSAGES["cross-check-failed"] },
      };
    }
    return {
      ...base,
      identity: { status: "resolved", person: evaluation.person, crossChecked: true },
    };
  } catch (error) {
    // Sin PeopleNet la identidad del perfil Meta4 sigue siendo la del servidor.
    if (error instanceof PeopleNetConfigError) {
      return {
        ...base,
        identity: { status: "resolved", person: evaluation.person, crossChecked: false },
      };
    }
    console.error("[portal] identity cross-check failed", {
      operation: "identity",
      stage: "peoplenet",
      code: "READ_FAILED",
      name: error instanceof Error ? error.name : "unknown",
    });
    return {
      ...base,
      identity: {
        status: "unresolved",
        message:
          "No se ha podido comprobar tu identidad en PeopleNet. Vuelve a intentarlo cuando la conexión esté disponible.",
      },
    };
  }
};
