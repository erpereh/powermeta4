import type { HireCatalogSelections } from "./catalogs";

export type HirePersonInput = HireCatalogSelections & {
  firstName: string;
  lastName1: string;
  lastName2: string;
  documentNumber: string;
  email: string;
  hireDate: string;
};

export type HirePerson = HireCatalogSelections & {
  firstName: string;
  lastName1: string;
  lastName2: string;
  documentNumber: string;
  email: string;
  hireDate: string;
};

export type HireLaunchResult = {
  personCount: number;
  returnCode: string;
  fileName: string;
  filePath: string;
};
