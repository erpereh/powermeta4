"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import { HireCatalogsNotice } from "./catalogs";
import { useHireDraft } from "./draft";
import {
  CatalogField,
  CompoundField,
  ContractField,
  HireSubsection,
  PendingCheckbox,
  PendingChoice,
  PendingInput,
  PendingRadio,
  PendingTextarea,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";

// Fixed PeopleNet values (SRSP_VALIDATION CF:CG and AE:AF in the template).
const HOUR_TYPES = [
  { id: "1", name: "Semanales" },
  { id: "2", name: "Mensuales" },
  { id: "3", name: "Anuales" },
] as const;

const PARTIAL_SCHEDULE_TYPES = [
  { id: "R", name: "Regular" },
  { id: "I", name: "Irregular" },
] as const;

export function SocialSecuritySection() {
  const [openSection, setOpenSection] = useState<string | null>("ss-general");
  const { draft, onBranchChange } = useHireDraft();
  const { ssNumberChoice, scheduleChoice, disabilityChoice } = draft.branches;

  return (
    <Accordion
      classNames={HIRE_ACCORDION_CLASS_NAMES}
      value={openSection}
      onValueChange={setOpenSection}
      items={[
        {
          id: "ss-general",
          title: "Datos generales de Seguridad Social",
          description:
            openSection === "ss-general" ? (
              <div className="space-y-4">
                <HireCatalogsNotice />
                <PendingRadio
                  field="ssNumberChoice"
                  value={ssNumberChoice}
                  onValueChange={(value) => {
                    if (value === "assigned" || value === "unassigned") {
                      onBranchChange("ssNumberChoice", value);
                    }
                  }}
                  options={[
                    { value: "assigned", label: "Con Núm. S.S. asignado" },
                    { value: "unassigned", label: "Sin Núm. S.S. asignado" },
                  ]}
                />
                {ssNumberChoice === "assigned" ? (
                  <CompoundField
                    field="ssNumber"
                    parts={[
                      { field: "ssNumberPrefix", label: "Segmento 1" },
                      { field: "ssNumberBody", label: "Segmento 2" },
                      { field: "ssNumberSuffix", label: "Segmento 3" },
                    ]}
                  />
                ) : null}
                <div className="grid gap-4 md:grid-cols-2">
                  <CatalogField field="tc1Header" />
                  <CatalogField field="tariffGroup" />
                  <CatalogField field="ssOccupation" />
                  <CatalogField field="ssAgreement" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "contract",
          title: "Datos generales del contrato",
          description:
            openSection === "contract" ? (
              <div className="space-y-6">
                <HireCatalogsNotice />
                <HireSubsection title="Contrato">
                  <div className="grid gap-4 md:grid-cols-2">
                    <ContractField />
                    <PendingInput field="contractEnd" />
                    <CatalogField field="laborRelation" />
                  </div>
                </HireSubsection>
                <HireSubsection title="Jornada">
                  <PendingRadio
                    field="scheduleChoice"
                    value={scheduleChoice}
                    onValueChange={(value) => {
                      if (value === "full" || value === "partial")
                        onBranchChange("scheduleChoice", value);
                    }}
                    options={[
                      { value: "full", label: "Jornada completa" },
                      { value: "partial", label: "Jornada parcial" },
                    ]}
                  />
                  {scheduleChoice === "partial" ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <PendingInput field="partialSchedulePercent" />
                      <PendingChoice field="hourType" options={HOUR_TYPES} />
                      <PendingInput field="numberOfHours" />
                      <PendingChoice field="partialScheduleType" options={PARTIAL_SCHEDULE_TYPES} />
                      <PendingInput field="weeklyWorkDays" />
                    </div>
                  ) : null}
                </HireSubsection>
              </div>
            ) : null,
        },
        {
          id: "legal-reduction",
          title: "Guarda Legal y reducción especial de jornada",
          description:
            openSection === "legal-reduction" ? (
              <div className="space-y-4">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <PendingInput field="legalReductionPercent" />
                  <CatalogField field="reductionReason" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "bonifications",
          title: "Bonificaciones contrato",
          description:
            openSection === "bonifications" ? (
              <div className="space-y-6">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <CatalogField field="substitutionCause" />
                  <CompoundField
                    field="replacedPersonSsNumber"
                    parts={[
                      { field: "replacedSsPrefix", label: "Segmento 1" },
                      { field: "replacedSsBody", label: "Segmento 2" },
                      { field: "replacedSsSuffix", label: "Segmento 3" },
                    ]}
                  />
                  <CatalogField field="unemploymentCondition" />
                  <CatalogField field="specialLaborRelation" />
                  <CatalogField field="socialExclusion" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <PendingRadio
                    field="disabilityChoice"
                    value={disabilityChoice}
                    onValueChange={(value) => {
                      if (value === "without" || value === "with")
                        onBranchChange("disabilityChoice", value);
                    }}
                    options={[
                      { value: "without", label: "Sin minusvalía" },
                      { value: "with", label: "Con minusvalía" },
                    ]}
                  />
                  <PendingInput field="disabilityPercent" disabled={disabilityChoice !== "with"} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <PendingCheckbox field="specificFic" />
                  <PendingInput field="contractSeniorityStart" />
                  <PendingCheckbox field="womanMaternity24" />
                  <PendingCheckbox field="underrepresentedWoman" />
                  <PendingCheckbox field="activeInsertionIncome" />
                  <PendingCheckbox field="reliefContract" />
                  <PendingCheckbox field="readmittedDisabled" />
                  <PendingCheckbox field="firstSelfEmployedWorker" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "other-contract",
          title: "Otros datos contrato",
          description:
            openSection === "other-contract" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingInput field="probationDays" />
                <PendingInput field="probationEnd" />
                <div className="md:col-span-2">
                  <PendingTextarea field="additionalClause" />
                </div>
              </div>
            ) : null,
        },
      ]}
    />
  );
}
