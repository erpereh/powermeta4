import { escapeXml } from "@/lib/meta4/user-profile-soap";

import { Meta4ConsultaOroError } from "./employee-detail-errors";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export const DEFAULT_META4_USERS_DETAIL_URL =
  "https://meta4desasoap.creditocaucion.es/services/CSP_POWER4_CONSULTA_ORO";

export const getMeta4UsersDetailUrl = (override?: string): string => {
  const value = override ?? process.env.META4_USERS_DETAIL_URL ?? DEFAULT_META4_USERS_DETAIL_URL;
  if (!value.startsWith("https://")) {
    throw new Meta4ConsultaOroError(
      "META4_CONSULTA_ORO_FETCH_FAILED",
      "META4_USERS_DETAIL_URL debe usar HTTPS.",
    );
  }
  return value;
};

/** Builds the CSP_POWER4_CONSULTA_ORO envelope for a single employee id. */
export const buildConsultaOroEnvelope = (employeeId: string): string =>
  `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:CSP_POWER4_CONSULTA_ORO>
      <sch:ARG_EMP>${escapeXml(employeeId)}</sch:ARG_EMP>
    </sch:CSP_POWER4_CONSULTA_ORO>
  </soapenv:Body>
</soapenv:Envelope>`;
