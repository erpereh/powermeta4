import { escapeXml } from "@/lib/meta4/user-profile-soap";
import { getMeta4ServiceUrl, META4_SERVICE } from "@/lib/meta4/config";

import { Meta4HireError } from "./errors";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

const GROUP_INTERFACE = "INIT_EMPLOYEES_FD";
const FLAG_OFF = "0";

export const getMeta4HireUrl = (override?: string): string => {
  if (override !== undefined) {
    const value = override.trim();
    if (!value) {
      throw new Meta4HireError("META4_HIRE_CONFIG", "META4_BASE_URL es obligatoria.");
    }
    if (!value.startsWith("https://")) {
      throw new Meta4HireError("META4_HIRE_CONFIG", "META4_BASE_URL debe usar HTTPS.");
    }
    return value;
  }
  try {
    return getMeta4ServiceUrl(META4_SERVICE.hire);
  } catch (error) {
    const message = error instanceof Error ? error.message : "META4_BASE_URL es obligatoria.";
    throw new Meta4HireError("META4_HIRE_CONFIG", message);
  }
};

export const getMeta4HireDirectory = (override?: string): string => {
  const value = (override ?? process.env.META4_HIRE_FILE_PATH ?? "").trim().replace(/[\\/]+$/, "");
  if (!value) {
    throw new Meta4HireError("META4_HIRE_CONFIG", "META4_HIRE_FILE_PATH es obligatoria.");
  }
  return value;
};

export const getMeta4HireTemplatePath = (override?: string): string => {
  const value = (override ?? process.env.META4_HIRE_TEMPLATE_PATH ?? "").trim();
  if (value) return value;
  return "./fuentes/HIRE/Hire_1_PERSONA.xls";
};

export const buildLaunchImportEnvelope = (filePath: string): string =>
  `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:SRTC_LAUNCH_IMPORT>
      <sch:ARG_ID_GROUP_INTERFACE>${escapeXml(GROUP_INTERFACE)}</sch:ARG_ID_GROUP_INTERFACE>
      <sch:ARG_PATH_FILE>${escapeXml(filePath)}</sch:ARG_PATH_FILE>
      <sch:ARG_LIST_EMAIL>${FLAG_OFF}</sch:ARG_LIST_EMAIL>
      <sch:ARG_ATTACH_FILE>${FLAG_OFF}</sch:ARG_ATTACH_FILE>
      <sch:ARG_SCHEDULE_TASK>${FLAG_OFF}</sch:ARG_SCHEDULE_TASK>
    </sch:SRTC_LAUNCH_IMPORT>
  </soapenv:Body>
</soapenv:Envelope>`;
