import "server-only";

import { Meta4HttpError } from "@/lib/meta4/client";
import {
  Meta4SessionRequiredError,
  SessionExpiredError,
} from "@/lib/meta4/authenticated-soap-client";
import { executeAuthenticatedSoap } from "@/lib/meta4/server";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";

import { Meta4ConsultaOroError, isMeta4ConsultaOroError } from "./employee-detail-errors";
import { parseEmployeeDetailResponse } from "./employee-detail-parser";
import { buildConsultaOroEnvelope, getMeta4UsersDetailUrl } from "./employee-detail-soap";
import type { Meta4EmployeeDetailResult } from "./employee-detail-types";

export type GetMeta4EmployeeDetailDeps = {
  executeSoap?: typeof executeAuthenticatedSoap;
  detailUrl?: string;
  log?: (message: string, details: Record<string, string>) => void;
};

const isKnownSystemError = (error: unknown): boolean =>
  error instanceof Meta4SessionRequiredError ||
  error instanceof SessionExpiredError ||
  error instanceof Meta4SoapFaultError ||
  error instanceof Meta4HttpError ||
  isMeta4ConsultaOroError(error);

const safeLog = (log: GetMeta4EmployeeDetailDeps["log"], details: Record<string, string>): void => {
  log?.("meta4-employee-detail", details);
};

/**
 * Fetches CSP_POWER4_CONSULTA_ORO for a single employee id. Takes no society:
 * ARG_EMP is the only SOAP argument. Cookie/JSESSIONID and session renewal go
 * through executeAuthenticatedSoap; authorization against the caller's own
 * society is enforced by the caller (see getMeta4EmployeeDetailViewAction).
 */
export const getMeta4EmployeeDetail = async (
  employeeId: string,
  deps: GetMeta4EmployeeDetailDeps = {},
): Promise<Meta4EmployeeDetailResult> => {
  const executeSoap = deps.executeSoap ?? executeAuthenticatedSoap;
  const url = getMeta4UsersDetailUrl(deps.detailUrl);
  const xml = buildConsultaOroEnvelope(employeeId);

  try {
    return await executeSoap({
      url,
      xml,
      parseResponse: async (response) => {
        const body = await response.text();

        if (!response.ok) {
          try {
            parseEmployeeDetailResponse(body, employeeId);
          } catch (error) {
            if (error instanceof Meta4SoapFaultError) {
              safeLog(deps.log, {
                operation: "CSP_POWER4_CONSULTA_ORO",
                employeeId,
                status: String(response.status),
                code: "SOAP_FAULT",
              });
              throw error;
            }
          }
          safeLog(deps.log, {
            operation: "CSP_POWER4_CONSULTA_ORO",
            employeeId,
            status: String(response.status),
            code: "HTTP_ERROR",
          });
          throw new Meta4HttpError(response.status);
        }

        try {
          const detail = parseEmployeeDetailResponse(body, employeeId);
          safeLog(deps.log, {
            operation: "CSP_POWER4_CONSULTA_ORO",
            employeeId,
            status: String(response.status),
            code: "OK",
          });
          return detail;
        } catch (error) {
          if (error instanceof Meta4SoapFaultError) {
            safeLog(deps.log, {
              operation: "CSP_POWER4_CONSULTA_ORO",
              employeeId,
              status: String(response.status),
              code: "SOAP_FAULT",
            });
            throw error;
          }
          if (isMeta4ConsultaOroError(error)) {
            safeLog(deps.log, {
              operation: "CSP_POWER4_CONSULTA_ORO",
              employeeId,
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
      operation: "CSP_POWER4_CONSULTA_ORO",
      employeeId,
      status: "unknown",
      code: "META4_CONSULTA_ORO_FETCH_FAILED",
    });
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_FETCH_FAILED",
      "No se ha podido cargar el detalle del empleado desde Meta4.",
    );
  }
};
