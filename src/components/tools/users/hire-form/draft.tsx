"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { HirePersonInput } from "@/lib/meta4/hire/types";

import type { CurrentFieldId, PendingFieldId } from "./field-metadata";

export type PendingValueKey =
  | PendingFieldId
  | "phonePrefix"
  | "phoneNumber"
  | "mobilePrefix"
  | "mobileNumber"
  | "faxPrefix"
  | "faxNumber"
  | "addressLine1"
  | "addressLine2"
  | "ssNumberPrefix"
  | "ssNumberBody"
  | "ssNumberSuffix"
  | "replacedSsPrefix"
  | "replacedSsBody"
  | "replacedSsSuffix"
  // Name of the chosen Población: it is searched, not preloaded.
  | "cityName";

export type HireBranches = {
  positionChoice: "" | "job" | "position";
  occupationType: "" | "hours" | "ejc" | "headcount";
  ssNumberChoice: "" | "assigned" | "unassigned";
  scheduleChoice: "" | "full" | "partial";
  disabilityChoice: "" | "without" | "with";
  bankFormatChoice: "" | "iban" | "other";
};

export type HirePersonDraft = {
  id: number;
  current: HirePersonInput;
  pendingValues: Partial<Record<PendingValueKey, string>>;
  pendingChecks: Partial<Record<PendingFieldId, boolean>>;
  branches: HireBranches;
};

export const createHirePersonDraft = (id: number): HirePersonDraft => ({
  id,
  current: {
    firstName: "",
    lastName1: "",
    lastName2: "",
    documentType: "",
    documentNumber: "",
    email: "",
    hireDate: "",
    issuingCountry: "",
    nationality: "",
    birthProvince: "",
    birthCountry: "",
    gender: "",
    maritalStatus: "",
    atradiusJobCode: "",
    atradiusCategory: "",
    locationType: "",
    roadType: "",
    city: "",
    province: "",
    community: "",
    country: "",
    legalEntity: "",
    job: "",
    position: "",
    workUnit: "",
    workLocation: "",
    category: "",
    startReason: "",
    structure: "",
    functionalWorkCenter: "",
    tc1Header: "",
    tariffGroup: "",
    ssOccupation: "",
    ssAgreement: "",
    legalContract: "",
    internalContract: "",
    laborRelation: "",
    reductionReason: "",
    substitutionCause: "",
    unemploymentCondition: "",
    specialLaborRelation: "",
    socialExclusion: "",
    payrollAgreement: "",
    adjustmentType: "",
    salaryType: "",
    payrollCurrency: "",
    union: "",
    irpfType: "",
    perceptionKey: "",
    variableCompensationMode: "",
    paymentCurrency: "",
    paymentType: "",
    companyBank: "",
    accountCurrency: "",
  },
  pendingValues: {},
  pendingChecks: {},
  branches: {
    positionChoice: "",
    occupationType: "",
    ssNumberChoice: "",
    scheduleChoice: "",
    disabilityChoice: "",
    bankFormatChoice: "",
  },
});

/** Only the fields currently mapped to Excel and SOAP cross this boundary. */
export const toHirePersonInput = ({ current, branches }: HirePersonDraft): HirePersonInput => ({
  firstName: current.firstName,
  lastName1: current.lastName1,
  lastName2: current.lastName2,
  documentType: current.documentType,
  documentNumber: current.documentNumber,
  email: current.email,
  hireDate: current.hireDate,
  issuingCountry: current.issuingCountry,
  nationality: current.nationality,
  birthProvince: current.birthProvince,
  birthCountry: current.birthCountry,
  gender: current.gender,
  maritalStatus: current.maritalStatus,
  atradiusJobCode: current.atradiusJobCode,
  atradiusCategory: current.atradiusCategory,
  locationType: current.locationType,
  roadType: current.roadType,
  city: current.city,
  province: current.province,
  community: current.community,
  country: current.country,
  legalEntity: current.legalEntity,
  // The job only applies to the Puesto branch; a retained value is not sent.
  job: branches.positionChoice === "job" ? current.job : "",
  position: branches.positionChoice === "position" ? current.position : "",
  workUnit: current.workUnit,
  workLocation: current.workLocation,
  category: current.category,
  startReason: current.startReason,
  structure: current.structure,
  functionalWorkCenter: current.functionalWorkCenter,
  tc1Header: current.tc1Header,
  tariffGroup: current.tariffGroup,
  ssOccupation: current.ssOccupation,
  ssAgreement: current.ssAgreement,
  legalContract: current.legalContract,
  internalContract: current.internalContract,
  laborRelation: current.laborRelation,
  reductionReason: current.reductionReason,
  substitutionCause: current.substitutionCause,
  unemploymentCondition: current.unemploymentCondition,
  specialLaborRelation: current.specialLaborRelation,
  socialExclusion: current.socialExclusion,
  payrollAgreement: current.payrollAgreement,
  adjustmentType: current.adjustmentType,
  salaryType: current.salaryType,
  payrollCurrency: current.payrollCurrency,
  union: current.union,
  irpfType: current.irpfType,
  perceptionKey: current.perceptionKey,
  variableCompensationMode: current.variableCompensationMode,
  paymentCurrency: current.paymentCurrency,
  paymentType: current.paymentType,
  companyBank: current.companyBank,
  accountCurrency: current.accountCurrency,
});

/** Future mappings can read this view without accidentally using retained hidden values. */
export const selectActiveBranchValues = ({
  branches,
  current,
  pendingValues,
}: HirePersonDraft) => ({
  position:
    branches.positionChoice === "job"
      ? { choice: "job", job: current.job }
      : branches.positionChoice === "position"
        ? {
            choice: "position",
            position: current.position,
            occupationType: branches.occupationType,
            occupationHours: pendingValues.occupationHours,
            occupationEjc: pendingValues.occupationEjc,
            occupationHeadcount: pendingValues.occupationHeadcount,
          }
        : { choice: "" },
  socialSecurityNumber:
    branches.ssNumberChoice === "assigned"
      ? {
          choice: "assigned",
          prefix: pendingValues.ssNumberPrefix,
          body: pendingValues.ssNumberBody,
          suffix: pendingValues.ssNumberSuffix,
        }
      : { choice: branches.ssNumberChoice },
  schedule:
    branches.scheduleChoice === "partial"
      ? {
          choice: "partial",
          percent: pendingValues.partialSchedulePercent,
          hourType: pendingValues.hourType,
          hours: pendingValues.numberOfHours,
          partialType: pendingValues.partialScheduleType,
          weeklyDays: pendingValues.weeklyWorkDays,
        }
      : { choice: branches.scheduleChoice },
  disability:
    branches.disabilityChoice === "with"
      ? { choice: "with", percent: pendingValues.disabilityPercent }
      : { choice: branches.disabilityChoice },
  bank:
    branches.bankFormatChoice === "iban"
      ? { choice: "iban", iban: pendingValues.iban, bic: pendingValues.bic }
      : branches.bankFormatChoice === "other"
        ? {
            choice: "other",
            branch: pendingValues.bankBranch,
            accountNumber: pendingValues.accountNumber,
            bic: pendingValues.bic,
          }
        : { choice: "" },
});

export type HireDraftActions = {
  onCurrentChange: (field: CurrentFieldId, value: string) => void;
  onPendingChange: (field: PendingValueKey, value: string) => void;
  onCheckChange: (field: PendingFieldId, checked: boolean) => void;
  onBranchChange: <K extends keyof HireBranches>(field: K, value: HireBranches[K]) => void;
};

type HireDraftContextValue = HireDraftActions & {
  draft: HirePersonDraft;
};

const HireDraftContext = createContext<HireDraftContextValue | null>(null);

export function HireDraftProvider({
  draft,
  children,
  ...actions
}: HireDraftContextValue & { children: ReactNode }) {
  return (
    <HireDraftContext.Provider value={{ draft, ...actions }}>{children}</HireDraftContext.Provider>
  );
}

export const useHireDraft = (): HireDraftContextValue => {
  const context = useContext(HireDraftContext);
  if (!context) throw new Error("Los campos del alta requieren HireDraftProvider.");
  return context;
};
