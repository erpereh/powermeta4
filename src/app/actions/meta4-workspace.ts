"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { getAuthService } from "@/lib/auth/server";
import type { ActionResult, WorkspaceSnapshot } from "@/lib/local-database/dtos";
import { Meta4SocietyNotAllowedError, Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4Society, type Meta4Society } from "@/lib/meta4/societies";
import { getWorkspaceSnapshot } from "@/lib/workspace/service";

const ok = <T>(data: T): ActionResult<T> => ({ ok: true, data });

export async function switchMeta4WorkspaceAction(
  societyCode: string,
): Promise<ActionResult<WorkspaceSnapshot>> {
  try {
    if (!isMeta4Society(societyCode)) {
      return {
        ok: false,
        errorCode: "SOCIETY_NOT_ALLOWED",
        message: "No tienes acceso a esa sociedad Meta4.",
      };
    }

    const authSession = await requireAuthContext();
    const workspace = await getAuthService().switchWorkspace(
      authSession,
      societyCode as Meta4Society,
    );
    const snapshot = await getWorkspaceSnapshot({
      mode: "meta4",
      username: authSession.authContext.username,
      canUseMeta4: true,
      societyCode: workspace.society,
      availableSocieties: workspace.availableSocieties,
    });
    return ok(snapshot);
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError) {
      return {
        ok: false,
        errorCode: error.code,
        message: error.message,
      };
    }
    if (error instanceof Meta4SocietyNotAllowedError) {
      return {
        ok: false,
        errorCode: error.code,
        message: error.message,
      };
    }
    const message = error instanceof Error ? error.message : "No se pudo cambiar de sociedad.";
    return {
      ok: false,
      errorCode: "WORKSPACE_OPERATION_FAILED",
      message: message.length > 180 ? "No se pudo cambiar de sociedad." : message,
    };
  }
}
