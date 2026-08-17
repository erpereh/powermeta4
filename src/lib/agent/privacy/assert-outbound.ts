import { escapeRegExp } from "@/lib/agent/normalize";

const collectStrings = (value: unknown, acc: string[]): void => {
  if (typeof value === "string") {
    acc.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, acc);
    return;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, acc);
  }
};

export const containsWholeToken = (haystack: string, needle: string): boolean => {
  const trimmed = needle.trim();
  if (!trimmed) return false;
  const pattern = new RegExp(
    `(^|[^\\p{L}\\p{N}])${escapeRegExp(trimmed)}([^\\p{L}\\p{N}]|$)`,
    "iu",
  );
  return pattern.test(haystack);
};

export const collectOutboundStrings = (payload: unknown): string[] => {
  const acc: string[] = [];
  collectStrings(payload, acc);
  return acc;
};

export const serializeOutboundPayload = (payload: unknown): string =>
  JSON.stringify(payload);

export const assertOutboundPayload = (payload: unknown, forbidden: readonly string[]): void => {
  const blob = collectOutboundStrings(payload).join("\n");
  for (const value of forbidden) {
    if (containsWholeToken(blob, value)) {
      throw new Error("PRIVACY_FAIL_CLOSED");
    }
  }
};

export const payloadContainsAny = (payload: unknown, needles: readonly string[]): boolean => {
  const blob = collectOutboundStrings(payload).join("\n");
  return needles.some((needle) => containsWholeToken(blob, needle));
};
