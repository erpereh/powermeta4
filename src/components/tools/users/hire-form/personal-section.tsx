"use client";

import { useState } from "react";
import { Accordion } from "@/components/system";

import { HireCatalogsNotice } from "./catalogs";
import {
  CatalogField,
  CompoundField,
  CurrentInput,
  GeoField,
  PendingCatalogLookup,
  PendingInput,
  PlaceField,
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
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <CurrentInput field="firstName" />
                  <CurrentInput field="lastName1" />
                  <CurrentInput field="lastName2" />
                  <CatalogField field="documentType" />
                  <CurrentInput field="documentNumber" />
                  <PendingInput field="legalRepresentativeNif" />
                  <CatalogField field="issuingCountry" />
                  <PendingInput field="birthDate" />
                  <CatalogField field="nationality" />
                  <GeoField group="birth" depth={3} />
                  <GeoField group="birth" depth={2} />
                  <GeoField group="birth" depth={1} />
                  <CatalogField field="gender" />
                  <CatalogField field="maritalStatus" />
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
              <div className="space-y-4">
                <HireCatalogsNotice />
                <div className="grid gap-4 md:grid-cols-2">
                  <PendingInput field="atradiusId" />
                  <CatalogField field="atradiusJobCode" />
                  <CatalogField field="atradiusCategory" />
                  <PendingCatalogLookup field="department" source="department" />
                </div>
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
                <div className="md:col-span-2">
                  <HireCatalogsNotice />
                </div>
                <CatalogField field="locationType" />
                <CatalogField field="roadType" />
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
                <PlaceField />
                <GeoField group="address" depth={3} />
                <GeoField group="address" depth={2} />
                <GeoField group="address" depth={1} />
              </div>
            ) : null,
        },
      ]}
    />
  );
}
