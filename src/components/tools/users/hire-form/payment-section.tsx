"use client";

import { useState } from "react";
import { Accordion, Input } from "@/components/system";

import { useHireDraft } from "./draft";
import {
  FieldGroup,
  PendingCatalog,
  PendingInput,
  PendingLookupButton,
  PendingRadio,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";
import { hireFieldLabelClass } from "./field-metadata";

function PersonBankOrdinal() {
  return (
    <FieldGroup field="personBankOrdinal">
      <div className="flex max-w-xs items-end gap-2">
        <Input
          label="Ordinal"
          value=""
          disabled
          placeholder="Pendiente"
          classNames={{ label: hireFieldLabelClass("personBankOrdinal") }}
        />
        <PendingLookupButton label="Búsqueda de ordinal banco persona pendiente" />
      </div>
    </FieldGroup>
  );
}

export function PaymentSection() {
  const [openSection, setOpenSection] = useState<string | null>("payment-general");
  const { draft, onBranchChange } = useHireDraft();
  const format = draft.branches.bankFormatChoice;

  return (
    <Accordion
      classNames={HIRE_ACCORDION_CLASS_NAMES}
      value={openSection}
      onValueChange={setOpenSection}
      items={[
        {
          id: "payment-general",
          title: "Datos de pago",
          description:
            openSection === "payment-general" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingCatalog field="paymentCurrency" />
                <PendingCatalog field="paymentType" />
                <PendingCatalog field="companyBank" />
              </div>
            ) : null,
        },
        {
          id: "bank-data",
          title: "Datos bancarios de la persona",
          description:
            openSection === "bank-data" ? (
              <div className="space-y-6">
                <PersonBankOrdinal />
                <PendingRadio
                  field="bankFormatChoice"
                  value={format}
                  onValueChange={(value) => {
                    if (value === "iban" || value === "other")
                      onBranchChange("bankFormatChoice", value);
                  }}
                  options={[
                    { value: "iban", label: "IBAN" },
                    { value: "other", label: "Otro formato" },
                  ]}
                />
                <FieldGroup field="bankAccount">
                  {format === "iban" ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <PendingInput field="iban" />
                      <PendingInput field="bic" />
                    </div>
                  ) : null}
                  {format === "other" ? (
                    <div className="grid gap-4 md:grid-cols-3">
                      <PendingInput field="bankBranch" />
                      <PendingInput field="accountNumber" />
                      <PendingInput field="bic" />
                    </div>
                  ) : null}
                  {format === "" ? (
                    <p className="text-sm text-muted-foreground">
                      Selecciona un formato para mostrar los campos bancarios.
                    </p>
                  ) : null}
                </FieldGroup>
                <PendingCatalog field="accountCurrency" />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
