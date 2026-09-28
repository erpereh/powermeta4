"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import { HireCatalogsNotice } from "./catalogs";
import { useHireDraft } from "./draft";
import {
  CatalogField,
  FieldGroup,
  PendingInput,
  PendingRadio,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";

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
              <div className="space-y-4">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <CatalogField field="paymentCurrency" />
                  <CatalogField field="paymentType" />
                  <CatalogField field="companyBank" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "bank-data",
          title: "Datos bancarios de la persona",
          description:
            openSection === "bank-data" ? (
              <div className="space-y-6">
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
                  {format === "iban" ? <PendingInput field="iban" /> : null}
                  {format === "other" ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <PendingInput field="bankBranch" />
                      <PendingInput field="accountNumber" />
                    </div>
                  ) : null}
                  {format === "" ? (
                    <p className="text-sm text-muted-foreground">
                      Selecciona un formato para mostrar los campos bancarios.
                    </p>
                  ) : null}
                </FieldGroup>
                <CatalogField field="accountCurrency" />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
