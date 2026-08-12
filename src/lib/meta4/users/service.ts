import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { Meta4HttpError } from "@/lib/meta4/client";
import {
  Meta4SessionRequiredError,
  SessionExpiredError,
} from "@/lib/meta4/authenticated-soap-client";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { executeAuthenticatedSoap } from "@/lib/meta4/server";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import type { Meta4Society } from "@/lib/meta4/societies";

import { Meta4UsersError, isMeta4UsersError } from "./errors";
import { parseUsersListResponse } from "./parser";
import { buildUsersListEnvelope, getMeta4UsersListUrl } from "./soap";
import type { Meta4UsersListResult } from "./types";

export type ListMeta4UsersDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  executeSoap?: typeof executeAuthenticatedSoap;
  usersListUrl?: string;
  log?: (message: string, details: Record<string, string>) => void;
};

const isKnownSystemError = (error: unknown): boolean =>
  error instanceof Meta4SessionRequiredError ||
  error instanceof SessionExpiredError ||
  error instanceof Meta4SoapFaultError ||
  error instanceof Meta4HttpError ||
  error instanceof Meta4ProfileError ||
  isMeta4UsersError(error);

const safeLog = (log: ListMeta4UsersDeps["log"], details: Record<string, string>): void => {
  log?.("meta4-users-list", details);
};

/**
 * Lists Meta4 users for the society from server operational context only.
 * Cookie/JSESSIONID and session renewal go through executeAuthenticatedSoap.
 */
export const listMeta4Users = async (
  authSession: ResolvedAuthSession,
  deps: ListMeta4UsersDeps = {},
): Promise<Meta4UsersListResult> => {
  const getContext = deps.getOperationalContext ?? getMeta4OperationalContext;
  const executeSoap = deps.executeSoap ?? executeAuthenticatedSoap;

  const context = await getContext(authSession);
  const society: Meta4Society = context.society;
  const url = getMeta4UsersListUrl(deps.usersListUrl);
  const xml = buildUsersListEnvelope(society);

  try {
    return await executeSoap({
      url,
      xml,
      parseResponse: async (response) => {
        const body = await response.text();

        if (!response.ok) {
          try {
            parseUsersListResponse(body, society);
          } catch (error) {
            if (error instanceof Meta4SoapFaultError) {
              safeLog(deps.log, {
                operation: "CSP_POWER4_USER_ALL",
                society,
                status: String(response.status),
                code: "SOAP_FAULT",
              });
              throw error;
            }
          }
          safeLog(deps.log, {
            operation: "CSP_POWER4_USER_ALL",
            society,
            status: String(response.status),
            code: "HTTP_ERROR",
          });
          throw new Meta4HttpError(response.status);
        }

        try {
          const users = parseUsersListResponse(body, society);
          safeLog(deps.log, {
            operation: "CSP_POWER4_USER_ALL",
            society,
            status: String(response.status),
            code: "OK",
          });
          return { society, users };
        } catch (error) {
          if (error instanceof Meta4SoapFaultError) {
            safeLog(deps.log, {
              operation: "CSP_POWER4_USER_ALL",
              society,
              status: String(response.status),
              code: "SOAP_FAULT",
            });
            throw error;
          }
          if (isMeta4UsersError(error)) {
            safeLog(deps.log, {
              operation: "CSP_POWER4_USER_ALL",
              society,
              status: String(response.status),
              code: error.code,
            });
            throw error;
          }
          throw error;
        }
      },
    });
  } catch (error) {
    if (isKnownSystemError(error)) throw error;
    safeLog(deps.log, {
      operation: "CSP_POWER4_USER_ALL",
      society,
      status: "unknown",
      code: "META4_USERS_FETCH_FAILED",
    });
    throw new Meta4UsersError(
      "META4_USERS_FETCH_FAILED",
      "No se han podido cargar los usuarios desde Meta4.",
    );
  }
};
