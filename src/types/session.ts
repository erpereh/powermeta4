export type AuthMode = "meta4" | "debug";

export type Meta4SocietyCode = "CYC" | "IBER" | "COLL";

export type AuthContext = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
  societyCode: Meta4SocietyCode | null;
};

export type AuthView = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
  societyCode: Meta4SocietyCode | null;
};
