import type { PeopleNetEmployeeListRow } from "@/lib/peoplenet/employees";

import type { Meta4UserListItem } from "./types";

/** Treats blank and lone "." as empty name parts; collapses spaces between parts. */
export const buildFullName = (
  nombre: string,
  apellido1: string,
  apellido2: string,
): string | null => {
  const normalizePart = (value: string): string => {
    const trimmed = value.trim();
    return trimmed === "." ? "" : trimmed;
  };
  const parts = [normalizePart(nombre), normalizePart(apellido1), normalizePart(apellido2)].filter(
    (part) => part.length > 0,
  );
  return parts.length > 0 ? parts.join(" ") : null;
};

const text = (value: string | number | null): string =>
  value === null ? "" : String(value).trim();

const toUserListItem = (row: PeopleNetEmployeeListRow): Meta4UserListItem | null => {
  const id = text(row.ID_EMPLEADO);
  if (!id) return null;

  const fullName = buildFullName(text(row.NOMBRE), text(row.APELLIDO_1), text(row.APELLIDO_2));
  if (!fullName) return null;

  return { id, fullName, claveSelf: text(row.CLAVE_SELF) };
};

/** Keeps the first valid row per employee ID, matching the former list contract. */
export const mapEmployeeListRows = (
  rows: readonly PeopleNetEmployeeListRow[],
): Meta4UserListItem[] => {
  const users: Meta4UserListItem[] = [];
  const seen = new Set<string>();
  for (const row of rows) {
    const user = toUserListItem(row);
    if (!user || seen.has(user.id)) continue;
    seen.add(user.id);
    users.push(user);
  }
  return users;
};
