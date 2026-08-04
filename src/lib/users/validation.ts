import type { UserDraft, WorkspaceUserRole, WorkspaceUserStatus } from "@/types/workspace";

export type UserField = keyof UserDraft;
export type UserFieldErrors = Partial<Record<UserField, string>>;

const validRoles: readonly WorkspaceUserRole[] = ["administrator", "manager", "user"];
const validStatuses: readonly WorkspaceUserStatus[] = ["active", "inactive"];

const requiredMessage = "Este campo es obligatorio.";

export const validateUserDraft = (draft: UserDraft): UserFieldErrors => {
  const errors: UserFieldErrors = {};
  const requiredFields: UserField[] = ["firstName", "lastName", "email", "username"];

  for (const field of requiredFields) {
    if (!draft[field].trim()) errors[field] = requiredMessage;
  }

  if (draft.email.trim() && !/^\S+@\S+\.\S+$/.test(draft.email.trim())) {
    errors.email = "Introduce un correo válido.";
  }
  if (draft.username.trim() && !/^[a-zA-Z0-9._-]+$/.test(draft.username.trim())) {
    errors.username = "Usa letras, números, puntos, guiones o guiones bajos.";
  }
  if (!validRoles.includes(draft.role)) errors.role = "Selecciona un rol válido.";
  if (!validStatuses.includes(draft.status)) errors.status = "Selecciona un estado válido.";

  return errors;
};

export const USER_ROLE_LABELS: Record<WorkspaceUserRole, string> = {
  administrator: "Administrador",
  manager: "Responsable",
  user: "Usuario",
};

export const USER_STATUS_LABELS: Record<WorkspaceUserStatus, string> = {
  active: "Activo",
  inactive: "Inactivo",
};
