"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { SessionExpiredError } from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { isMeta4HireError, type Meta4HireIssue } from "@/lib/meta4/hire/errors";
import { launchMeta4Hire } from "@/lib/meta4/hire/service";
import { parseHirePeople } from "@/lib/meta4/hire/validate";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import type { ActionResult } from "@/lib/local-database/dtos";

export type HireActionData = {
  personCount: number;
  fileName: string;
};

/** Validation problems and PeopleNet rejections come back per person and field. */
export type HireActionResult =
  | ActionResult<HireActionData>
  | { ok: false; errorCode: string; message: string; issues: readonly Meta4HireIssue[] };

const resolveHireErrorMessage = (error: unknown): { errorCode: string; message: string } => {
  if (isMeta4HireError(error)) return { errorCode: error.code, message: error.message };
  if (error instanceof Meta4SessionRequiredError) {
    return { errorCode: error.code, message: error.message };
  }
  if (isMeta4ProfileError(error)) return { errorCode: error.code, message: error.message };
  if (error instanceof SessionExpiredError) {
    return { errorCode: "SESSION_EXPIRED", message: error.message };
  }
  if (error instanceof Meta4SoapFaultError) {
    // error.message already carries Meta4's own fault text ("SOAP Fault
    // <code>: <faultstring>") - surfacing it (instead of a generic string)
    // is what actually lets the person filling the form self-diagnose
    // things like "empleado ya existe" without escalating to IT each time.
    return {
      errorCode: "SOAP_FAULT",
      message: `Meta4 rechazó el alta de personas: ${error.message}`,
    };
  }
  if (error instanceof Meta4HttpError) {
    return {
      errorCode: "HTTP_ERROR",
      message: "Meta4 no pudo completar el alta de personas.",
    };
  }
  return {
    errorCode: "META4_HIRE_FETCH_FAILED",
    message: "No se ha podido completar el alta de personas en Meta4.",
  };
};

export async function launchMeta4HireAction(people: unknown): Promise<HireActionResult> {
  try {
    const parsed = parseHirePeople(people);
    const authSession = await requireAuthContext();
    const result = await launchMeta4Hire(authSession, parsed, {
      log: (message, details) => console.info(`[${message}]`, details),
    });
    return { ok: true, data: { personCount: result.personCount, fileName: result.fileName } };
  } catch (error) {
    const resolved = resolveHireErrorMessage(error);
    const issues = isMeta4HireError(error) ? error.issues : [];
    // Issues and rejection texts may contain personal data: only counts are logged.
    console.error("[meta4-hire] launchMeta4HireAction failed", {
      errorCode: resolved.errorCode,
      ...(issues.length > 0
        ? { issueCount: issues.length }
        : { message: error instanceof Error ? error.message : String(error) }),
    });
    return issues.length > 0
      ? { ok: false, errorCode: resolved.errorCode, message: resolved.message, issues }
      : { ok: false, errorCode: resolved.errorCode, message: resolved.message };
  }
}
