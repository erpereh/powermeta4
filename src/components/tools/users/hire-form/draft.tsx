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
  | "referenceSegment1"
  | "referenceSegment2";

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

/** Only the seven fields currently mapped to Excel and SOAP cross this boundary. */
export const toHirePersonInput = ({ current }: HirePersonDraft): HirePersonInput => ({
  firstName: current.firstName,
  lastName1: current.lastName1,
  lastName2: current.lastName2,
  documentType: current.documentType,
  documentNumber: current.documentNumber,
  email: current.email,
  hireDate: current.hireDate,
});

/** Future mappings can read this view without accidentally using retained hidden values. */
export const selectActiveBranchValues = ({ branches, pendingValues }: HirePersonDraft) => ({
  position:
    branches.positionChoice === "job"
      ? { choice: "job", job: pendingValues.job }
      : branches.positionChoice === "position"
        ? {
            choice: "position",
            position: pendingValues.position,
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
