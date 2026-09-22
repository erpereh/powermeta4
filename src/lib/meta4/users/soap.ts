import { escapeXml } from "@/lib/meta4/user-profile-soap";
import { getMeta4ServiceUrl, META4_SERVICE } from "@/lib/meta4/config";
import type { Meta4Society } from "@/lib/meta4/societies";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export const getMeta4UsersListUrl = (override?: string): string => {
  if (override !== undefined) {
    if (!override.startsWith("https://")) {
      throw new Error("META4_BASE_URL debe usar HTTPS.");
    }
    return override;
  }
  return getMeta4ServiceUrl(META4_SERVICE.usersList);
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
