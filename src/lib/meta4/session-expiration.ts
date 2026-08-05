import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
  ignoreAttributes: true,
  removeNSPrefix: true,
  processEntities: false,
  trimValues: true,
});

const knownSessionPatterns = [
  /session[_ -]?expired/i,
  /session.*(invalid|expired|not\s+found)/i,
  /(not|no).*(authenticated|logged|login)/i,
  /authentication.*(required|failed|invalid)/i,
  /jsessionid/i,
];

const containsKnownSessionText = (value: unknown): boolean => {
  if (typeof value === "string") return knownSessionPatterns.some((pattern) => pattern.test(value));
  if (Array.isArray(value)) return value.some(containsKnownSessionText);
  if (typeof value === "object" && value !== null) {
    return Object.entries(value).some(
      ([key, child]) =>
        knownSessionPatterns.some((pattern) => pattern.test(key)) ||
        containsKnownSessionText(child),
    );
  }
  return false;
};

export const isSessionExpiredResponse = async (response: Response): Promise<boolean> => {
  if (response.status === 401 || response.status === 403) return true;
  if (response.status < 400) return false;

  let body = "";
  try {
    body = await response.clone().text();
  } catch {
    return false;
  }
  if (!body || !knownSessionPatterns.some((pattern) => pattern.test(body))) return false;

  try {
    return containsKnownSessionText(parser.parse(body));
  } catch {
    return knownSessionPatterns.some((pattern) => pattern.test(body));
  }
};
