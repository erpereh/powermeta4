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
import { PortalSqlGuardError } from "./peoplenet/query";

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
      return portalError(error.message);
    }
    console.error("[portal] read failed", {
      label,
      name: error instanceof Error ? error.name : "unknown",
      ...(error instanceof SoapServiceFaultError ? { service: error.service } : {}),
      ...(error instanceof Meta4HttpError ? { status: error.status } : {}),
    });
    if (error instanceof SoapServiceFaultError)
      return portalError(`Meta4 rechazó la consulta de ${label}.`);
    if (error instanceof SoapContractError || error instanceof PortalSqlGuardError) {
      return portalError(`La respuesta de ${label} no cumple el contrato esperado.`);
    }
    return portalError(`No se ha podido cargar ${label}.`);
  }
};
