"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import {
  CompoundField,
  CurrentInput,
  PendingCatalog,
  PendingInput,
  HireSubsection,
  HIRE_ACCORDION_CLASS_NAMES,
} from "./fields";

export function PersonalSection() {
  const [openSection, setOpenSection] = useState<string | null>("identity");
  return (
    <Accordion
      classNames={HIRE_ACCORDION_CLASS_NAMES}
      value={openSection}
      onValueChange={setOpenSection}
      items={[
        {
          id: "identity",
          title: "Datos personales",
          description:
            openSection === "identity" ? (
              <HireSubsection title="Identificación y nacimiento">
                <div className="grid gap-4 md:grid-cols-2">
                  <CurrentInput field="firstName" />
                  <CurrentInput field="lastName1" />
                  <CurrentInput field="lastName2" />
                  <CurrentInput field="documentType" />
                  <CurrentInput field="documentNumber" />
                  <PendingInput field="legalRepresentativeNif" />
                  <PendingCatalog field="issuingCountry" />
                  <PendingInput field="birthDate" />
                  <PendingCatalog field="nationality" />
                  <PendingCatalog field="birthCountry" />
                  <PendingCatalog field="birthCommunity" />
                  <PendingCatalog field="birthProvince" />
                  <PendingCatalog field="gender" />
                  <PendingCatalog field="maritalStatus" />
                  <CurrentInput field="hireDate" />
                </div>
              </HireSubsection>
            ) : null,
        },
        {
          id: "atradius",
          title: "Información Atradius",
          description:
            openSection === "atradius" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingInput field="atradiusId" />
                <PendingCatalog field="atradiusJobCode" />
                <PendingCatalog field="atradiusCategory" />
                <PendingCatalog field="department" />
              </div>
            ) : null,
        },
        {
          id: "contacts",
          title: "Contactos",
          description:
            openSection === "contacts" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <CompoundField
                  field="phone"
                  parts={[
                    { field: "phonePrefix", label: "Prefijo" },
                    { field: "phoneNumber", label: "Número" },
                  ]}
                />
                <CompoundField
                  field="mobile"
                  parts={[
                    { field: "mobilePrefix", label: "Prefijo" },
                    { field: "mobileNumber", label: "Número" },
                  ]}
                />
                <CurrentInput field="email" />
                <CompoundField
                  field="fax"
                  parts={[
                    { field: "faxPrefix", label: "Prefijo" },
                    { field: "faxNumber", label: "Número" },
                  ]}
                />
              </div>
            ) : null,
        },
        {
          id: "address",
          title: "Dirección",
          description:
            openSection === "address" ? (
              <div className="grid gap-4 md:grid-cols-2">
                <PendingCatalog field="locationType" />
                <PendingCatalog field="roadType" />
                <CompoundField
                  field="address"
                  parts={[
                    { field: "addressLine1", label: "Línea 1" },
                    { field: "addressLine2", label: "Línea 2" },
                  ]}
                  className="md:col-span-2"
                />
                <PendingInput field="streetNumber" />
                <PendingInput field="buildingBlock" />
                <PendingInput field="staircase" />
                <PendingInput field="floor" />
                <PendingInput field="door" />
                <PendingInput field="postalCode" />
                <PendingCatalog field="country" />
                <PendingCatalog field="community" />
                <PendingCatalog field="province" />
                <PendingCatalog field="city" />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
