export const normalizeSearchText = (value: string): string =>
  value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

export const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
