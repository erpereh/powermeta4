"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";

const HireCatalogsContext = createContext<HireCatalogState | null>(null);

export function HireCatalogsProvider({
  value,
  children,
}: {
  value: HireCatalogState;
  children: ReactNode;
}) {
  return <HireCatalogsContext.Provider value={value}>{children}</HireCatalogsContext.Provider>;
}

export const useHireCatalogs = (): HireCatalogState => {
  const context = useContext(HireCatalogsContext);
  if (!context) throw new Error("Los catálogos del alta requieren HireCatalogsProvider.");
  return context;
};

/** One notice per section when PeopleNet could not be read. */
export function HireCatalogsNotice() {
  const catalogs = useHireCatalogs();
  if (catalogs.status === "ready") return null;
  return (
    <p role="status" className="text-sm text-destructive">
      {catalogs.message}
    </p>
  );
}
