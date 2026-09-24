"use client";

import { HireCatalogsNotice } from "./catalogs";
import {
  CatalogField,
  PendingCatalogLookup,
  PendingCheckbox,
  PendingInput,
  PendingRadio,
  HireSubsection,
} from "./fields";
import { useHireDraft } from "./draft";

export function OrganizationSection() {
  const { draft, onBranchChange } = useHireDraft();
  const { positionChoice, occupationType } = draft.branches;

  return (
    <HireSubsection title="Organización">
      <HireCatalogsNotice />
      <div className="grid gap-4 md:grid-cols-2">
        <CatalogField field="legalEntity" />
        <div className="md:col-span-2">
          <PendingRadio
            field="positionChoice"
            value={positionChoice}
            onValueChange={(value) => {
              if (value === "job" || value === "position") onBranchChange("positionChoice", value);
            }}
            options={[
              { value: "job", label: "Puesto" },
              { value: "position", label: "Posición" },
            ]}
          />
        </div>
        {positionChoice === "job" ? <CatalogField field="job" /> : null}
        {positionChoice === "position" ? (
          <>
            <CatalogField field="position" />
            <div className="md:col-span-2 rounded-2xl border border-border p-4">
              <PendingRadio
                field="occupationType"
                value={occupationType}
                onValueChange={(value) => {
                  if (value === "hours" || value === "ejc" || value === "headcount") {
                    onBranchChange("occupationType", value);
                  }
                }}
                options={[
                  { value: "hours", label: "Horas" },
                  { value: "ejc", label: "EJC" },
                  { value: "headcount", label: "Efectivos" },
                ]}
              />
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <PendingInput field="occupationHours" />
                <PendingInput field="occupationEjc" />
                <PendingInput field="occupationHeadcount" />
              </div>
            </div>
          </>
        ) : null}
        <CatalogField field="workUnit" />
        <CatalogField field="workLocation" />
        <CatalogField field="category" />
        <PendingCatalogLookup field="project" source="costCenter" />
        <CatalogField field="startReason" />
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-2">
          <PendingCheckbox field="keyEmployee" />
          <PendingCheckbox field="strategicEmployee" />
        </div>
        <CatalogField field="structure" />
        <CatalogField field="functionalWorkCenter" />
      </div>
    </HireSubsection>
  );
}
