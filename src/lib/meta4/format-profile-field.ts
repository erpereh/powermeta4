/**
 * Decodes XML entities left raw by the SOAP parsers' processEntities: false
 * guard (a DOCTYPE/ENTITY-injection defense, not an opt-out of decoding).
 * Meta4 mixes literal UTF-8 accented characters with numeric character
 * references (e.g. "&#xF3;" for "ó") in the same response, so both numeric
 * forms and the five predefined XML entities need decoding.
 */
export const decodeXmlEntities = (value: string): string =>
  value
    .replaceAll(/&#x([0-9a-fA-F]+);/g, (_match, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replaceAll(/&#(\d+);/g, (_match, dec: string) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");

export const formatFieldValue = (value: string): string => {
  const decoded = decodeXmlEntities(value).trim();
  if (!decoded) return "—";
  if (/^\d{4}-\d{2}-\d{2}/.test(decoded)) {
    const date = new Date(decoded);
    if (!Number.isNaN(date.getTime())) {
      return new Intl.DateTimeFormat("es-ES", {
        dateStyle: "medium",
        timeStyle: decoded.includes("T") ? "short" : undefined,
      }).format(date);
    }
  }
  return decoded;
};

export const humanizeKey = (key: string): string =>
  key
    .replaceAll("_", " ")
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
