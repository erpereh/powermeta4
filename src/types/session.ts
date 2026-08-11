export type AuthMode = "meta4" | "debug";

export type AuthContext = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
};

export type AuthView = {
  mode: AuthMode;
  username: string;
  canUseMeta4: boolean;
};
