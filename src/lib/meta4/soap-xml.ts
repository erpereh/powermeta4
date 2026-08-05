import { XMLParser } from "fast-xml-parser";

const SOAP_NAMESPACE = "http://schemas.xmlsoap.org/soap/envelope/";
const META4_NAMESPACE = "http://schemas.meta4.com/";

export class Meta4SoapFaultError extends Error {
  readonly code: string | null;

  constructor(message: string, code: string | null = null) {
    super(`SOAP Fault${code ? ` ${code}` : ""}: ${message}`);
    this.name = "Meta4SoapFaultError";
    this.code = code;
  }
}

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
});

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const toText = (value: unknown): string | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "object" && value !== null && "#text" in value) {
    return toText(value["#text"]);
  }
  return null;
};

const findValues = (value: unknown, wantedName: string, values: string[] = []): string[] => {
  if (Array.isArray(value)) {
    for (const item of value) findValues(item, wantedName, values);
    return values;
  }
  if (typeof value !== "object" || value === null) return values;

  for (const [key, child] of Object.entries(value)) {
    const localName = key.includes(":") ? key.slice(key.lastIndexOf(":") + 1) : key;
    if (localName.toLowerCase() === wantedName.toLowerCase()) {
      const text = toText(child);
      if (text !== null) values.push(text);
    }
    findValues(child, wantedName, values);
  }

  return values;
};

const hasKey = (value: unknown, wantedName: string): boolean => {
  if (Array.isArray(value)) return value.some((item) => hasKey(item, wantedName));
  if (typeof value !== "object" || value === null) return false;
  return Object.entries(value).some(([key, child]) => {
    const localName = key.includes(":") ? key.slice(key.lastIndexOf(":") + 1) : key;
    return localName.toLowerCase() === wantedName.toLowerCase() || hasKey(child, wantedName);
  });
};

const parseDocument = (xml: string): unknown => {
  if (!xml.trim()) throw new Error("La respuesta SOAP está vacía.");
  if (/<!(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Error("La respuesta SOAP contiene declaraciones XML no permitidas.");
  }
  try {
    return parser.parse(xml);
  } catch {
    throw new Error("La respuesta SOAP no contiene XML válido.");
  }
};

const parseFault = (document: unknown): Meta4SoapFaultError | null => {
  const hasFault = hasKey(document, "Fault") || hasKey(document, "faultcode");
  if (!hasFault) return null;

  const code = findValues(document, "faultcode")[0] ?? null;
  const message = findValues(document, "faultstring")[0] ?? "Respuesta SOAP rechazada";
  return new Meta4SoapFaultError(message.slice(0, 240), code?.slice(0, 120) ?? null);
};

export const buildLoginEnvelope = (
  username: string,
  password: string,
  language = "3",
): string => `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:login>
      <sch:ai_sUser>${escapeXml(username)}</sch:ai_sUser>
      <sch:ai_sPassword>${escapeXml(password)}</sch:ai_sPassword>
      <sch:ai_sLanguage>${escapeXml(language)}</sch:ai_sLanguage>
    </sch:login>
  </soapenv:Body>
</soapenv:Envelope>`;

export const buildRetrieveM4SessionEnvelope = (refreshSessionId: string): string =>
  `<soapenv:Envelope xmlns:soapenv="${SOAP_NAMESPACE}" xmlns:sch="${META4_NAMESPACE}">
  <soapenv:Header/>
  <soapenv:Body>
    <sch:retrieveM4Session>
      <sch:ai_sessionId>${escapeXml(refreshSessionId)}</sch:ai_sessionId>
    </sch:retrieveM4Session>
  </soapenv:Body>
</soapenv:Envelope>`;

export const parseLoginResponse = (xml: string): { refreshSessionId: string } => {
  const document = parseDocument(xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const refreshSessionId = findValues(document, "sessionID")[0]?.trim();
  if (!refreshSessionId) throw new Error("La respuesta SOAP no contiene sessionID.");
  return { refreshSessionId };
};

export const parseRetrieveM4SessionResponse = (xml: string): { returnCode: string } => {
  const document = parseDocument(xml);
  const fault = parseFault(document);
  if (fault) throw fault;

  const returnCode = findValues(document, "retrieveM4SessionReturn")[0]?.trim();
  if (!returnCode) throw new Error("La respuesta SOAP no contiene el código de retrieveM4Session.");
  if (returnCode !== "0") throw new Error("Meta4 rechazó retrieveM4Session return distinto de 0.");
  return { returnCode };
};
