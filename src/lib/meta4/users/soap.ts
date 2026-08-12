import { escapeXml } from "@/lib/meta4/user-profile-soap";
import type { Meta4Society } from "@/lib/meta4/societies";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export const DEFAULT_META4_USERS_LIST_URL =
  "https://meta4desasoap.creditocaucion.es/services/CSP_POWER4_USER_ALL";

export const getMeta4UsersListUrl = (override?: string): string => {
  const value = override ?? process.env.META4_USERS_LIST_URL ?? DEFAULT_META4_USERS_LIST_URL;
  if (!value.startsWith("https://")) {
    throw new Error("META4_USERS_LIST_URL debe usar HTTPS.");
  }
  return value;
};

/** Builds the CSP_POWER4_USER_ALL envelope. Society must come from operational context only. */
export const buildUsersListEnvelope = (society: Meta4Society): string =>
  `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:CSP_POWER4_USER_ALL>
      <sch:ARG_SOCIEDAD>${escapeXml(society)}</sch:ARG_SOCIEDAD>
    </sch:CSP_POWER4_USER_ALL>
  </soapenv:Body>
</soapenv:Envelope>`;
