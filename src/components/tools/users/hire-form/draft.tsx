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
    project: "",
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

/** Project only confirmed mappings; retained values from inactive branches stay local. */
export const toHirePersonInput = ({
  current,
  branches,
  pendingValues,
  pendingChecks,
}: HirePersonDraft): HirePersonInput => ({
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
  project: current.project,
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
  positionChoice: branches.positionChoice,
  occupationType: branches.positionChoice === "position" ? branches.occupationType : "",
  legalRepresentativeNif: pendingValues.legalRepresentativeNif ?? "",
  birthDate: pendingValues.birthDate ?? "",
  atradiusId: pendingValues.atradiusId ?? "",
  phonePrefix: pendingValues.phonePrefix ?? "",
  phoneNumber: pendingValues.phoneNumber ?? "",
  mobilePrefix: pendingValues.mobilePrefix ?? "",
  mobileNumber: pendingValues.mobileNumber ?? "",
  addressLine1: pendingValues.addressLine1 ?? "",
  addressLine2: pendingValues.addressLine2 ?? "",
  streetNumber: pendingValues.streetNumber ?? "",
  buildingBlock: pendingValues.buildingBlock ?? "",
  staircase: pendingValues.staircase ?? "",
  floor: pendingValues.floor ?? "",
  door: pendingValues.door ?? "",
  postalCode: pendingValues.postalCode ?? "",
  occupationHours:
    branches.positionChoice === "position" && branches.occupationType === "hours"
      ? (pendingValues.occupationHours ?? "")
      : "",
  occupationEjc:
    branches.positionChoice === "position" && branches.occupationType === "ejc"
      ? (pendingValues.occupationEjc ?? "")
      : "",
  occupationHeadcount:
    branches.positionChoice === "position" && branches.occupationType === "headcount"
      ? (pendingValues.occupationHeadcount ?? "")
      : "",
  keyEmployee: pendingChecks.keyEmployee ?? false,
  strategicEmployee: pendingChecks.strategicEmployee ?? false,
  ssNumberChoice: branches.ssNumberChoice,
  ssNumberPrefix: branches.ssNumberChoice === "assigned" ? (pendingValues.ssNumberPrefix ?? "") : "",
  ssNumberBody: branches.ssNumberChoice === "assigned" ? (pendingValues.ssNumberBody ?? "") : "",
  ssNumberSuffix: branches.ssNumberChoice === "assigned" ? (pendingValues.ssNumberSuffix ?? "") : "",
  contractEnd: pendingValues.contractEnd ?? "",
  scheduleChoice: branches.scheduleChoice,
  partialSchedulePercent:
    branches.scheduleChoice === "partial" ? (pendingValues.partialSchedulePercent ?? "") : "",
  hourType: branches.scheduleChoice === "partial" ? (pendingValues.hourType ?? "") : "",
  numberOfHours: branches.scheduleChoice === "partial" ? (pendingValues.numberOfHours ?? "") : "",
  partialScheduleType:
    branches.scheduleChoice === "partial" ? (pendingValues.partialScheduleType ?? "") : "",
  weeklyWorkDays: branches.scheduleChoice === "partial" ? (pendingValues.weeklyWorkDays ?? "") : "",
  legalReductionPercent: pendingValues.legalReductionPercent ?? "",
  replacedSsPrefix: pendingValues.replacedSsPrefix ?? "",
  replacedSsBody: pendingValues.replacedSsBody ?? "",
  replacedSsSuffix: pendingValues.replacedSsSuffix ?? "",
  disabilityChoice: branches.disabilityChoice,
  disabilityPercent:
    branches.disabilityChoice === "with" ? (pendingValues.disabilityPercent ?? "") : "",
  contractSeniorityStart: pendingValues.contractSeniorityStart ?? "",
  womanMaternity24: pendingChecks.womanMaternity24 ?? false,
  underrepresentedWoman: pendingChecks.underrepresentedWoman ?? false,
  activeInsertionIncome: pendingChecks.activeInsertionIncome ?? false,
  reliefContract: pendingChecks.reliefContract ?? false,
  readmittedDisabled: pendingChecks.readmittedDisabled ?? false,
  firstSelfEmployedWorker: pendingChecks.firstSelfEmployedWorker ?? false,
  probationDays: pendingValues.probationDays ?? "",
  probationEnd: pendingValues.probationEnd ?? "",
  additionalClause: pendingValues.additionalClause ?? "",
  annualGross: pendingValues.annualGross ?? "",
  seniorityDate: pendingValues.seniorityDate ?? "",
  timeManagementPay: pendingChecks.timeManagementPay ?? false,
  bankFormatChoice: branches.bankFormatChoice,
  iban: branches.bankFormatChoice === "iban" ? (pendingValues.iban ?? "") : "",
  bankBranch: branches.bankFormatChoice === "other" ? (pendingValues.bankBranch ?? "") : "",
  accountNumber:
    branches.bankFormatChoice === "other" ? (pendingValues.accountNumber ?? "") : "",
});

/** Active draft view for branch-specific UI. */
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
      ? { choice: "iban", iban: pendingValues.iban }
      : branches.bankFormatChoice === "other"
        ? {
            choice: "other",
            branch: pendingValues.bankBranch,
            accountNumber: pendingValues.accountNumber,
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
