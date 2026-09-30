"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { HireIssueField } from "@/lib/meta4/hire/validate";

export const HIRE_TABS = [
  { id: "personal", label: "Datos personales" },
  { id: "organization", label: "Organización" },
  { id: "social-security", label: "Seguridad Social" },
  { id: "payroll", label: "Nómina" },
  { id: "payment", label: "Datos de pago" },
] as const;

export type HireTabId = (typeof HIRE_TABS)[number]["id"];

/** Tab that shows each validated field, for the summary and the tab counters. */
const TAB_FIELDS: Record<HireTabId, readonly HireIssueField[]> = {
  personal: [
    "firstName",
    "lastName1",
    "lastName2",
    "documentType",
    "documentNumber",
    "legalRepresentativeNif",
    "issuingCountry",
    "birthDate",
    "nationality",
    "birthProvince",
    "birthCommunity",
    "birthCountry",
    "gender",
    "maritalStatus",
    "hireDate",
    "atradiusId",
    "atradiusJobCode",
    "atradiusCategory",
    "department",
    "phonePrefix",
    "phoneNumber",
    "mobilePrefix",
    "mobileNumber",
    "email",
    "locationType",
    "roadType",
    "addressLine1",
    "addressLine2",
    "streetNumber",
    "buildingBlock",
    "staircase",
    "floor",
    "door",
    "postalCode",
    "city",
    "province",
    "community",
    "country",
  ],
  organization: [
    "legalEntity",
    "positionChoice",
    "job",
    "position",
    "occupationType",
    "occupationHours",
    "occupationEjc",
    "occupationHeadcount",
    "workUnit",
    "workLocation",
    "category",
    "startReason",
    "keyEmployee",
    "strategicEmployee",
    "structure",
    "functionalWorkCenter",
  ],
  "social-security": [
    "ssNumberChoice",
    "ssNumberPrefix",
    "ssNumberBody",
    "ssNumberSuffix",
    "tc1Header",
    "tariffGroup",
    "ssOccupation",
    "ssAgreement",
    "legalContract",
    "internalContract",
    "contractEnd",
    "laborRelation",
    "scheduleChoice",
    "partialSchedulePercent",
    "hourType",
    "numberOfHours",
    "partialScheduleType",
    "weeklyWorkDays",
    "legalReductionPercent",
    "reductionReason",
    "substitutionCause",
    "replacedSsPrefix",
    "replacedSsBody",
    "replacedSsSuffix",
    "unemploymentCondition",
    "specialLaborRelation",
    "socialExclusion",
    "disabilityChoice",
    "disabilityPercent",
    "contractSeniorityStart",
    "womanMaternity24",
    "underrepresentedWoman",
    "activeInsertionIncome",
    "reliefContract",
    "readmittedDisabled",
    "firstSelfEmployedWorker",
    "probationDays",
    "probationEnd",
    "additionalClause",
  ],
  payroll: [
    "payrollAgreement",
    "adjustmentType",
    "annualGross",
    "salaryType",
    "seniorityDate",
    "extrasDate",
    "payrollCurrency",
    "union",
    "variableCompensationMode",
    "irpfType",
    "perceptionKey",
    "referenceModelWeek",
    "timeManagementPay",
  ],
  payment: [
    "paymentCurrency",
    "paymentType",
    "companyBank",
    "bankFormatChoice",
    "iban",
    "bankBranch",
    "accountNumber",
    "accountCurrency",
  ],
};

export const hireIssueTab = (field: string): HireTabId =>
  HIRE_TABS.find((tab) => TAB_FIELDS[tab.id].some((candidate) => candidate === field))?.id ??
  "personal";

/** Visible problems of the expanded person, by HirePerson key. */
export type HireIssueMap = ReadonlyMap<string, string>;

const NO_ISSUES: HireIssueMap = new Map();

const HireIssuesContext = createContext<HireIssueMap>(NO_ISSUES);

export function HireIssuesProvider({
  issues,
  children,
}: {
  issues: HireIssueMap;
  children: ReactNode;
}) {
  return <HireIssuesContext.Provider value={issues}>{children}</HireIssuesContext.Provider>;
}

/** First visible problem among `keys`, in the order given. */
export const useHireIssue = (keys: readonly string[]): string | undefined => {
  const issues = useContext(HireIssuesContext);
  for (const key of keys) {
    const message = issues.get(key);
    if (message) return message;
  }
  return undefined;
};

/** Space-separated `aria-describedby` from the ids that are present. */
export const describedBy = (...ids: ReadonlyArray<string | undefined>): string | undefined =>
  ids.filter(Boolean).join(" ") || undefined;
