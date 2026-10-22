import type { Meta4UserListItem } from "./types";

export const USERS_SEARCH_MAX_LENGTH = 200;

export const normalizeUsersSearch = (value: string): string =>
  value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/** Búsqueda del listado de usuarios: por ID, usuario Meta4 o nombre, sin tildes. */
export const filterUsers = (
  users: readonly Meta4UserListItem[],
  search: string,
): Meta4UserListItem[] => {
  const query = normalizeUsersSearch(search.trim());
  if (!query) return [...users];
  return users.filter(
    (user) =>
      normalizeUsersSearch(user.id).includes(query) ||
      normalizeUsersSearch(user.claveSelf).includes(query) ||
      normalizeUsersSearch(user.fullName).includes(query),
  );
};
