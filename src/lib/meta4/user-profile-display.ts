import type { Meta4UserProfile } from "./user-profile-types";

const fieldValue = (fields: Record<string, string>, ...names: readonly string[]): string | null => {
  for (const name of names) {
    const found = Object.entries(fields).find(([key]) => key.toLowerCase() === name.toLowerCase());
    if (found && found[1].trim() !== "") return found[1];
  }
  return null;
};

/** Nombre visible del perfil, con los alias que usaban las respuestas de Meta4. */
export const extractDisplayName = (profile: Meta4UserProfile): string | null =>
  fieldValue(
    profile.fields,
    "nombre_completo",
    "NombreCompleto",
    "nm_Empleado",
    "Nombre",
    "nombre",
    "display_name",
  ) ?? null;
