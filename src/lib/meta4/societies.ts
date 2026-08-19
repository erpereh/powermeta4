export const META4_SOCIETIES = ["CYC", "IBER", "COLL"] as const;

export type Meta4Society = (typeof META4_SOCIETIES)[number];

export const META4_SOCIETY_LEGAL_NAMES: Record<Meta4Society, string> = {
  CYC: "Crédito y Caución",
  IBER: "Iberinform",
  COLL: "Compañía Colateral",
};

export const isMeta4Society = (value: unknown): value is Meta4Society =>
  typeof value === "string" && (META4_SOCIETIES as readonly string[]).includes(value);

export const orderMeta4Societies = (societies: Iterable<Meta4Society>): Meta4Society[] => {
  const unique = new Set(societies);
  return META4_SOCIETIES.filter((society) => unique.has(society));
};

export const pickFirstAvailableSociety = (
  societies: Iterable<Meta4Society>,
): Meta4Society | null => orderMeta4Societies(societies)[0] ?? null;
