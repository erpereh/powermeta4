"use client";

import { useState } from "react";
import { Accordion, Input } from "@/components/system";

import { useHireDraft } from "./draft";
import {
  FieldGroup,
  PendingCatalog,
  PendingCheckbox,
  PendingInput,
  PendingLookupButton,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";
import { hireFieldLabelClass } from "./field-metadata";

function ReferenceModelLookup() {
  const { draft, onPendingChange } = useHireDraft();
  return (
    <FieldGroup field="referenceModelWeek">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)_minmax(0,1.6fr)_auto] sm:items-end">
        <Input
          label="Segmento 1"
          aria-label="ID Modelo/Semana de referencia, segmento 1"
          value={draft.pendingValues.referenceSegment1 ?? ""}
          onChange={(value) => onPendingChange("referenceSegment1", value)}
          classNames={{ label: hireFieldLabelClass("referenceModelWeek") }}
        />
        <Input
          label="Segmento 2"
          aria-label="ID Modelo/Semana de referencia, segmento 2"
          value={draft.pendingValues.referenceSegment2 ?? ""}
          onChange={(value) => onPendingChange("referenceSegment2", value)}
          classNames={{ label: hireFieldLabelClass("referenceModelWeek") }}
        />
        <Input
          label="Descripción"
          value=""
          disabled
          placeholder="Catálogo pendiente"
          classNames={{ label: hireFieldLabelClass("referenceModelWeek") }}
        />
        <PendingLookupButton label="Búsqueda de modelo o semana pendiente" />
      </div>
    </FieldGroup>
  );
}

export function PayrollSection() {
  const [openSection, setOpenSection] = useState<string | null>("payroll-general");
  return (
    <Accordion
      classNames={HIRE_ACCORDION_CLASS_NAMES}
      value={openSection}
      onValueChange={setOpenSection}
      items={[
        {
          id: "payroll-general",
          title: "Datos generales",
          description:
            openSection === "payroll-general" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingCatalog field="payrollAgreement" />
                <PendingCatalog field="adjustmentType" />
                <PendingInput field="annualGross" />
                <PendingCatalog field="salaryType" />
                <PendingInput field="seniorityDate" />
                <PendingInput field="extrasDate" />
                <PendingCatalog field="payrollCurrency" />
                <PendingCatalog field="union" />
                <PendingCatalog field="variableCompensationMode" />
              </div>
            ) : null,
        },
        {
          id: "irpf",
          title: "Datos para el IRPF",
          description:
            openSection === "irpf" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingCatalog field="irpfType" />
                <PendingCatalog field="perceptionKey" />
              </div>
            ) : null,
        },
        {
          id: "theoretical-time",
          title: "Tiempo teórico",
          description:
            openSection === "theoretical-time" ? (
              <div className="space-y-4">
                <ReferenceModelLookup />
                <PendingCheckbox field="timeManagementPay" />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
