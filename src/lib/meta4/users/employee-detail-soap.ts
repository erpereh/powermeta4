import { escapeXml } from "@/lib/meta4/user-profile-soap";
import { getMeta4ServiceUrl, META4_SERVICE } from "@/lib/meta4/config";

import { Meta4ConsultaOroError } from "./employee-detail-errors";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export const getMeta4UsersDetailUrl = (override?: string): string => {
  if (override !== undefined) {
    if (!override.startsWith("https://")) {
      throw new Meta4ConsultaOroError(
        "META4_CONSULTA_ORO_FETCH_FAILED",
        "META4_BASE_URL debe usar HTTPS.",
      );
    }
    return override;
  }
  try {
    return getMeta4ServiceUrl(META4_SERVICE.usersDetail);
  } catch (error) {
    const message = error instanceof Error ? error.message : "META4_BASE_URL es obligatoria.";
    throw new Meta4ConsultaOroError("META4_CONSULTA_ORO_FETCH_FAILED", message);
  }
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
