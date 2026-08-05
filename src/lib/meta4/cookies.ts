type CookieHeaderSource = {
  getSetCookie?: () => string[];
  get: (name: string) => string | null;
};

export type ParsedCookie = { name: string; value: string };

const splitCombinedSetCookie = (value: string): string[] => value.split(/,(?=\s*[^;,=\s]+\s*=)/g);

export const parseSetCookieHeaders = (headers: CookieHeaderSource): ParsedCookie[] => {
  const values = headers.getSetCookie?.() ?? [];
  const fallback =
    values.length > 0 ? values : headers.get("set-cookie") ? [headers.get("set-cookie")!] : [];
  const cookies: ParsedCookie[] = [];

  for (const header of fallback.flatMap(splitCombinedSetCookie)) {
    const firstPart = header.split(";", 1)[0] ?? "";
    const separator = firstPart.indexOf("=");
    if (separator <= 0) continue;
    const name = firstPart.slice(0, separator).trim();
    const value = firstPart.slice(separator + 1).trim();
    if (!name || !value) continue;
    cookies.push({ name, value });
  }

  return cookies;
};

export const extractJSessionId = (headers: CookieHeaderSource): string => {
  const cookie = parseSetCookieHeaders(headers).find((item) => item.name === "JSESSIONID");
  if (!cookie) throw new Error("La respuesta Meta4 no contiene JSESSIONID.");
  return cookie.value;
};
