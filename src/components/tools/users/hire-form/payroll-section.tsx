"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import { HireCatalogsNotice } from "./catalogs";
import {
  CatalogField,
  PendingCatalogLookup,
  PendingCheckbox,
  PendingInput,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";

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
              <div className="space-y-4">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <CatalogField field="payrollAgreement" />
                  <CatalogField field="adjustmentType" />
                  <PendingInput field="annualGross" />
                  <CatalogField field="salaryType" />
                  <PendingInput field="seniorityDate" />
                  <PendingInput field="extrasDate" />
                  <CatalogField field="payrollCurrency" />
                  <CatalogField field="union" />
                  <CatalogField field="variableCompensationMode" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "irpf",
          title: "Datos para el IRPF",
          description:
            openSection === "irpf" ? (
              <div className="space-y-4">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <CatalogField field="irpfType" />
                  <CatalogField field="perceptionKey" />
                </div>
              </div>
            ) : null,
        },
        {
          id: "theoretical-time",
          title: "Tiempo teórico",
          description:
            openSection === "theoretical-time" ? (
              <div className="space-y-4">
                <HireCatalogsNotice />
                <PendingCatalogLookup field="referenceModelWeek" source="referenceModelWeek" />
                <PendingCheckbox field="timeManagementPay" />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
