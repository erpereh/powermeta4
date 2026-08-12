"use server";

import { requireAuthContext } from "@/lib/auth/session";
import { formatFieldValue, humanizeKey } from "@/lib/meta4/format-profile-field";
import { createDpapiAdapter } from "@/lib/security/dpapi";
import { META4_SOCIETY_LEGAL_NAMES } from "@/lib/meta4/societies";
import { getDatabase } from "@/server/database/client";
import { createMeta4UserProfileRepository } from "@/server/database/repositories/meta4-user-profile-repository";
import type {
  Meta4ProfileFieldView,
  Meta4ProfileSectionView,
  Meta4ProfileView,
} from "@/types/meta4-profile";
import type { Meta4UserProfile } from "@/lib/meta4/user-profile-types";

const KNOWN_FIELD_LABELS: Record<string, { section: string; label: string }> = {
  clave_Self: { section: "account", label: "Usuario Meta4" },
  claveSelf: { section: "account", label: "Usuario Meta4" },
  id_Empleado: { section: "account", label: "Id. empleado" },
  idEmpleado: { section: "account", label: "Id. empleado" },
  Nombre: { section: "account", label: "Nombre" },
  nombre: { section: "account", label: "Nombre" },
  nombre_completo: { section: "account", label: "Nombre completo" },
  NombreCompleto: { section: "account", label: "Nombre completo" },
  nm_Empleado: { section: "account", label: "Nombre" },
  Apellido1: { section: "account", label: "Primer apellido" },
  apellido1: { section: "account", label: "Primer apellido" },
  Apellido2: { section: "account", label: "Segundo apellido" },
  apellido2: { section: "account", label: "Segundo apellido" },
  Email: { section: "account", label: "Correo" },
  email: { section: "account", label: "Correo" },
  Sociedad: { section: "organization", label: "Sociedad" },
  p_Sociedad: { section: "organization", label: "Sociedad" },
  id_Organizacion: { section: "organization", label: "Organización" },
  Organizacion: { section: "organization", label: "Organización" },
  nm_Organizacion: { section: "organization", label: "Organización" },
  Unidad: { section: "organization", label: "Unidad" },
  nm_Unidad: { section: "organization", label: "Unidad" },
  Departamento: { section: "organization", label: "Departamento" },
  nm_Departamento: { section: "organization", label: "Departamento" },
  Puesto: { section: "role", label: "Puesto" },
  nm_Puesto: { section: "role", label: "Puesto" },
  id_Puesto: { section: "role", label: "Id. puesto" },
  Categoria: { section: "role", label: "Categoría" },
  Centro: { section: "workplace", label: "Centro de trabajo" },
  nm_Centro: { section: "workplace", label: "Centro de trabajo" },
  id_Centro: { section: "workplace", label: "Id. centro" },
  Direccion: { section: "workplace", label: "Dirección" },
  Localidad: { section: "workplace", label: "Localidad" },
  Provincia: { section: "workplace", label: "Provincia" },
  Fecha_Alta: { section: "labor", label: "Fecha de alta" },
  fecha_alta: { section: "labor", label: "Fecha de alta" },
  FechaAlta: { section: "labor", label: "Fecha de alta" },
  Tipo_Contrato: { section: "labor", label: "Tipo de contrato" },
  Contrato: { section: "labor", label: "Contrato" },
  Jornada: { section: "labor", label: "Jornada" },
};

const SECTION_TITLES: Record<string, string> = {
  account: "Cuenta",
  organization: "Organización",
  role: "Puesto",
  workplace: "Centro de trabajo",
  labor: "Datos laborales",
  other: "Otros datos",
  session: "Sesión Meta4",
};

const buildSections = (
  profile: Meta4UserProfile,
  extras: { username: string; lookedUpAt: string; societyLegalName: string },
): Meta4ProfileSectionView[] => {
  const buckets = new Map<string, Meta4ProfileFieldView[]>();
  const push = (section: string, field: Meta4ProfileFieldView) => {
    const list = buckets.get(section) ?? [];
    list.push(field);
    buckets.set(section, list);
  };

  push("account", {
    key: "username",
    label: "Usuario",
    value: formatFieldValue(extras.username),
  });
  push("organization", {
    key: "society",
    label: "Sociedad",
    value: formatFieldValue(profile.society),
  });
  push("organization", {
    key: "society_legal",
    label: "Entidad",
    value: formatFieldValue(extras.societyLegalName),
  });

  for (const [key, raw] of Object.entries(profile.fields)) {
    const known = KNOWN_FIELD_LABELS[key];
    push(known?.section ?? "other", {
      key,
      label: known?.label ?? humanizeKey(key),
      value: formatFieldValue(raw),
    });
  }

  push("session", {
    key: "looked_up_at",
    label: "Perfil actualizado",
    value: formatFieldValue(extras.lookedUpAt),
  });
  push("session", {
    key: "meta4_mode",
    label: "Modo",
    value: "Meta4",
  });

  const order = ["account", "organization", "role", "workplace", "labor", "other", "session"];
  return order
    .filter((id) => (buckets.get(id)?.length ?? 0) > 0)
    .map((id) => ({
      id,
      title: SECTION_TITLES[id] ?? id,
      fields: buckets.get(id) ?? [],
    }));
};

const emptyView = (input: { debugMode: boolean; username: string | null }): Meta4ProfileView => ({
  available: false,
  debugMode: input.debugMode,
  username: input.username,
  societyCode: null,
  societyLegalName: null,
  displayName: null,
  lookedUpAt: null,
  sections: [],
});

export async function getMeta4ProfileViewAction(): Promise<Meta4ProfileView> {
  const authSession = await requireAuthContext();
  if (authSession.authContext.mode === "debug") {
    return emptyView({
      debugMode: true,
      username: authSession.authContext.username,
    });
  }

  const repository = createMeta4UserProfileRepository(getDatabase(), createDpapiAdapter());
  const row = await repository.getProfileRow();
  const profile = await repository.getDecryptedProfile();
  if (!row || !profile) {
    return emptyView({
      debugMode: false,
      username: authSession.authContext.username,
    });
  }

  return {
    available: true,
    debugMode: false,
    username: row.username,
    societyCode: row.society,
    societyLegalName: META4_SOCIETY_LEGAL_NAMES[row.society],
    displayName: row.displayName,
    lookedUpAt: row.lookedUpAt.toISOString(),
    sections: buildSections(profile, {
      username: row.username,
      lookedUpAt: row.lookedUpAt.toISOString(),
      societyLegalName: META4_SOCIETY_LEGAL_NAMES[row.society],
    }),
  };
}
