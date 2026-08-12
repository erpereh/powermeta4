import type { Meta4Society } from "@/lib/meta4/societies";

export type Meta4UserListItem = {
  id: string;
  fullName: string;
  claveSelf: string;
};

export type Meta4UsersListResult = {
  society: Meta4Society;
  users: Meta4UserListItem[];
};
