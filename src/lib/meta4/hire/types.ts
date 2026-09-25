import type { HireCatalogSelections } from "./catalogs";

type HireBasePerson = HireCatalogSelections & {
  firstName: string;
  lastName1: string;
  lastName2: string;
  documentNumber: string;
  email: string;
  hireDate: string;
};

export type HireExtraFields = {
  positionChoice: "" | "job" | "position";
  occupationType: "" | "hours" | "ejc" | "headcount";
  legalRepresentativeNif: string;
  birthDate: string;
  atradiusId: string;
  phonePrefix: string;
  phoneNumber: string;
  mobilePrefix: string;
  mobileNumber: string;
  addressLine1: string;
  addressLine2: string;
  streetNumber: string;
  buildingBlock: string;
  staircase: string;
  floor: string;
  door: string;
  postalCode: string;
  occupationHours: string;
  occupationEjc: string;
  occupationHeadcount: string;
  keyEmployee: boolean;
  strategicEmployee: boolean;
  ssNumberChoice: "" | "assigned" | "unassigned";
  ssNumberPrefix: string;
  ssNumberBody: string;
  ssNumberSuffix: string;
  contractEnd: string;
  scheduleChoice: "" | "full" | "partial";
  partialSchedulePercent: string;
  hourType: string;
  numberOfHours: string;
  partialScheduleType: string;
  weeklyWorkDays: string;
  legalReductionPercent: string;
  replacedSsPrefix: string;
  replacedSsBody: string;
  replacedSsSuffix: string;
  disabilityChoice: "" | "without" | "with";
  disabilityPercent: string;
  contractSeniorityStart: string;
  womanMaternity24: boolean;
  underrepresentedWoman: boolean;
  activeInsertionIncome: boolean;
  reliefContract: boolean;
  readmittedDisabled: boolean;
  firstSelfEmployedWorker: boolean;
  probationDays: string;
  probationEnd: string;
  additionalClause: string;
  annualGross: string;
  seniorityDate: string;
  timeManagementPay: boolean;
  bankFormatChoice: "" | "iban" | "other";
  iban: string;
  bankBranch: string;
  accountNumber: string;
};

export type HirePersonInput = HireBasePerson & Partial<HireExtraFields>;
export type HirePerson = HireBasePerson & HireExtraFields;

export type HireLaunchResult = {
  personCount: number;
  returnCode: string;
  fileName: string;
  filePath: string;
};
