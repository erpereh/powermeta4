export type SessionView = {
  username: string | null;
  status: "anonymous" | "authenticated";
  lastValidatedAt: string | null;
};
