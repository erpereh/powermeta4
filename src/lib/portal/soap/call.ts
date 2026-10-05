import "server-only";

import { getMeta4ServiceUrl } from "@/lib/meta4/config";
import { Meta4HttpError } from "@/lib/meta4/client";
import { executeAuthenticatedSoap } from "@/lib/meta4/server";

import { SOAP_CATALOG, type SoapServiceName } from "./catalog.generated";
import {
  buildServiceEnvelope,
  parseServiceResponse,
  SERVICE_MISSING_PATTERN,
  SoapServiceUnavailableError,
  type SoapArgValue,
} from "./envelope";
import type { SoapResult } from "./types";

export type CallPortalServiceDeps = {
  executeSoap?: typeof executeAuthenticatedSoap;
  serviceUrl?: (service: string) => string;
};

const PORTAL_SOAP_TIMEOUT_MS = 20_000;

/**
 * Ejecuta un servicio Meta4 publicado con la sesión del usuario. El servidor
 * aplica la seguridad de Meta4; powermeta4 aplica además su propio alcance.
 */
export const callPortalService = async (
  service: SoapServiceName,
  operation: string,
  args: Readonly<Record<string, SoapArgValue>>,
  deps: CallPortalServiceDeps = {},
): Promise<SoapResult> => {
  const contract = SOAP_CATALOG[service];
  const xml = buildServiceEnvelope(contract, operation, args);
  const execute = deps.executeSoap ?? executeAuthenticatedSoap;
  const url = (deps.serviceUrl ?? getMeta4ServiceUrl)(contract.service);
  return execute({
    url,
    xml,
    timeoutMs: PORTAL_SOAP_TIMEOUT_MS,
    parseResponse: async (response) => {
      const body = await response.text();
      if (response.status === 404) throw new SoapServiceUnavailableError(contract.service);
      if (!response.ok && !/Fault/i.test(body)) {
        if (SERVICE_MISSING_PATTERN.test(body)) {
          throw new SoapServiceUnavailableError(contract.service);
        }
        throw new Meta4HttpError(response.status);
      }
      return parseServiceResponse(contract, operation, body);
    },
  });
};
