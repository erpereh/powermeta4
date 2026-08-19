import type { Meta4Society } from "@/lib/meta4/societies";

export type AuthMode = "meta4" | "debug";

export type Meta4SocietyCode = Meta4Society;

export type AuthContext = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
  societyCode: Meta4SocietyCode | null;
  availableSocieties: Meta4SocietyCode[];
};

export type AuthView = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
  societyCode: Meta4SocietyCode | null;
  availableSocieties: Meta4SocietyCode[];
};
