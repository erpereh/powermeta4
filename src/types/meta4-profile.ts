import type { Meta4Society } from "@/lib/meta4/societies";

export type Meta4ProfileFieldView = {
  key: string;
  label: string;
  value: string;
};

export type Meta4ProfileSectionView = {
  id: string;
  title: string;
  fields: Meta4ProfileFieldView[];
};

export type Meta4ProfileView = {
  available: boolean;
  debugMode: boolean;
  username: string | null;
  societyCode: Meta4Society | null;
  societyLegalName: string | null;
  displayName: string | null;
  lookedUpAt: string | null;
  sections: Meta4ProfileSectionView[];
};
