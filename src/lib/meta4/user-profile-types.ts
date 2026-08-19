import type { Meta4Society } from "./societies";

export type Meta4ProfileRecordSet = {
  fields: Record<string, string>;
};

export type Meta4UserProfile = {
  society: Meta4Society;
  pSociedad: string;
  returnCode: string | null;
  recordSets: Meta4ProfileRecordSet[];
  primaryIndex: number;
  fields: Record<string, string>;
  consultedUsername: string;
  lookedUpAt: string;
};

export type SocietyProbeOutcome = "match" | "no-match";

export type SocietyProbeMatch = {
  outcome: "match";
  society: Meta4Society;
  profile: Meta4UserProfile;
};

export type SocietyProbeNoMatch = {
  outcome: "no-match";
  society: Meta4Society;
  reason: string;
};

export type SocietyProbeResult = SocietyProbeMatch | SocietyProbeNoMatch;

export type SocietyLookupMatch = {
  society: Meta4Society;
  profile: Meta4UserProfile;
};

export type SocietyLookupMatches = {
  matches: SocietyLookupMatch[];
};
