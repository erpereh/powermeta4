import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { loadHireCatalogState } from "@/lib/meta4/hire/catalog-queries";

import type { ConnectedCatalog, FieldOption, PortalFeature } from "../types";

export type PortalCatalogState =
  | {
      readonly status: "ready";
      readonly options: Partial<Record<ConnectedCatalog, readonly FieldOption[]>>;
    }
  | { readonly status: "unavailable"; readonly message: string };

/** Catálogos conectados que usan los formularios de una pantalla. */
export const featureCatalogs = (feature: PortalFeature): ConnectedCatalog[] => [
  ...new Set(
    (feature.sections ?? []).flatMap((section) =>
      section.kind === "form"
        ? section.form.fields.flatMap((field) =>
            field.options?.kind === "catalog" ? [field.options.catalog] : [],
          )
        : [],
    ),
  ),
];

/**
 * Reutiliza los catálogos PeopleNet ya conectados del alta (mismas tablas y
 * sociedad del contexto). Solo se envían al cliente los que usa la pantalla.
 */
export const loadPortalCatalogs = async (
  authSession: ResolvedAuthSession,
  catalogs: readonly ConnectedCatalog[],
): Promise<PortalCatalogState> => {
  if (catalogs.length === 0) return { status: "ready", options: {} };
  const state = await loadHireCatalogState(authSession);
  if (state.status === "unavailable") return { status: "unavailable", message: state.message };
  const options: Partial<Record<ConnectedCatalog, readonly FieldOption[]>> = {};
  for (const catalog of catalogs) {
    options[catalog] = state.catalogs[catalog].map((option) => ({
      value: option.id,
      label: option.name,
    }));
  }
  return { status: "ready", options };
};
