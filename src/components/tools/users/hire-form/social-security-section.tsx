"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import { useHireDraft } from "./draft";
import {
  CompoundField,
  HireSubsection,
  PendingCatalog,
  PendingCheckbox,
  PendingInput,
  PendingRadio,
  PendingTextarea,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";

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
                  <PendingCatalog field="tc1Header" />
                  <PendingCatalog field="tariffGroup" />
                  <PendingCatalog field="ssOccupation" />
                  <PendingCatalog field="ssAgreement" />
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
                <HireSubsection title="Contrato">
                  <div className="grid gap-4 md:grid-cols-2">
                    <PendingCatalog field="legalContract" />
                    <PendingCatalog field="internalContract" />
                    <PendingInput field="contractEnd" />
                    <PendingCatalog field="laborRelation" />
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
                  <div className="grid gap-4 md:grid-cols-2">
                    <PendingInput
                      field="partialSchedulePercent"
                      disabled={scheduleChoice !== "partial"}
                    />
                    <PendingCatalog field="hourType" />
                    <PendingInput field="numberOfHours" disabled={scheduleChoice !== "partial"} />
                    <PendingCatalog field="partialScheduleType" />
                    <PendingInput field="weeklyWorkDays" disabled={scheduleChoice !== "partial"} />
                  </div>
                </HireSubsection>
              </div>
            ) : null,
        },
        {
          id: "legal-reduction",
          title: "Guarda Legal y reducción especial de jornada",
          description:
            openSection === "legal-reduction" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingInput field="legalReductionPercent" />
                <PendingCatalog field="reductionReason" />
              </div>
            ) : null,
        },
        {
          id: "bonifications",
          title: "Bonificaciones contrato",
          description:
            openSection === "bonifications" ? (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <PendingCatalog field="substitutionCause" />
                  <CompoundField
                    field="replacedPersonSsNumber"
                    parts={[
                      { field: "replacedSsPrefix", label: "Segmento 1" },
                      { field: "replacedSsBody", label: "Segmento 2" },
                      { field: "replacedSsSuffix", label: "Segmento 3" },
                    ]}
                  />
                  <PendingCatalog field="unemploymentCondition" />
                  <PendingCatalog field="specialLaborRelation" />
                  <PendingCatalog field="socialExclusion" />
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
