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

const includesInsensitive = (haystack: string, needle: string): boolean => {
  if (!needle.trim()) return false;
  return haystack.toLocaleLowerCase("es").includes(needle.toLocaleLowerCase("es"));
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
    const trimmed = value.trim();
    if (!trimmed) continue;
    if (includesInsensitive(blob, trimmed)) {
      throw new Error("PRIVACY_FAIL_CLOSED");
    }
  }
};

export const payloadContainsAny = (payload: unknown, needles: readonly string[]): boolean => {
  const blob = collectOutboundStrings(payload).join("\n");
  return needles.some((needle) => needle.trim() && includesInsensitive(blob, needle));
};
