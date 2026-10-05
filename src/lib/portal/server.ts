import "server-only";

import { cache } from "react";

import { requireAuthContext } from "@/lib/auth/session";
import { SessionExpiredError } from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4ConfigError } from "@/lib/meta4/config";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

import { getPortalContext, type PortalContext } from "./context";
import { portalError, portalOk, portalUnavailable, type PortalResult } from "./result";
import {
  SoapContractError,
  SoapServiceFaultError,
  SoapServiceUnavailableError,
} from "./soap/envelope";
import { PortalSqlContractError, PortalSqlGuardError } from "./peoplenet/query";
import { PortalDataAmbiguousError } from "./data/errors";

/** Contexto del portal resuelto una vez por petición (layout y página). */
export const getRequestPortalContext = cache(async (): Promise<PortalContext> => {
  const authSession = await requireAuthContext();
  return getPortalContext(authSession);
});

/**
 * Ejecuta una lectura y traduce los fallos a estados honestos: servicio no
 * publicado o PeopleNet sin configurar son dependencias, no errores de datos.
 */
export const readPortal = async <T>(
  context: PortalContext,
  load: (meta4: Extract<PortalContext, { mode: "meta4" }>) => Promise<T>,
  label: string,
): Promise<PortalResult<T>> => {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  try {
    return portalOk(context.society, await load(context));
  } catch (error) {
    if (error instanceof SoapServiceUnavailableError) {
      return portalUnavailable(
        ["P04", "P05"],
        `${error.message} Comprueba que el servicio sigue publicado.`,
      );
    }
    if (error instanceof PeopleNetConfigError) {
      return portalUnavailable(
        ["P05"],
        "La conexión de solo lectura a PeopleNet no está configurada en este servidor.",
      );
    }
    if (error instanceof Meta4ConfigError) {
      return portalUnavailable(
        ["P05"],
        "La dirección de Meta4 no está configurada en este servidor.",
      );
    }
    if (error instanceof SessionExpiredError || error instanceof Meta4SessionRequiredError) {
      return portalError(
        "La sesión Meta4 ha caducado. Vuelve a iniciar sesión.",
        "SESSION_EXPIRED",
      );
    }
    if (error instanceof PortalDataAmbiguousError) return portalError(error.message, "AMBIGUOUS");
    if (error instanceof SoapServiceFaultError) {
      console.warn("[portal] read rejected", {
        operation: label,
        stage: "soap",
        code: "SOAP_FAULT",
        service: error.service,
      });
      return portalError(`Meta4 rechazó la consulta de ${label}.`, "SOAP_FAULT");
    }
    if (
      error instanceof SoapContractError ||
      error instanceof PortalSqlGuardError ||
      error instanceof PortalSqlContractError
    ) {
      console.warn("[portal] contract incompatible", {
        operation: label,
        stage: "contract",
        code: "CONTRACT_INCOMPATIBLE",
      });
      return portalError(
        `La respuesta de ${label} no cumple el contrato esperado.`,
        "CONTRACT_INCOMPATIBLE",
      );
    }
    console.error("[portal] read failed", {
      operation: label,
      stage: "read",
      code: "READ_FAILED",
      name: error instanceof Error ? error.name : "unknown",
      ...(error instanceof Meta4HttpError ? { status: error.status } : {}),
    });
    return portalError(`No se ha podido cargar ${label}.`, "READ_FAILED");
  }
};
