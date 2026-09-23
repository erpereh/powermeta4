"use client";

import { useId, type ReactNode } from "react";
import { Search } from "lucide-react";

import {
  Button,
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxList,
  ComboboxTrigger,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "@/components/system";
import { cn } from "@/lib/utils";

import { useHireDraft, type PendingValueKey } from "./draft";
import {
  HIRE_FIELD_META,
  HIRE_PENDING_LABEL_CLASS,
  type CurrentFieldId,
  type HireFieldId,
  type PendingFieldId,
} from "./field-metadata";

export const HIRE_ACCORDION_CLASS_NAMES = {
  trigger: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
} as const;

const isPeopleNetRequired = (field: HireFieldId): boolean => {
  const status = HIRE_FIELD_META[field].peopleNet;
  return status === "required" || status === "conditional-required";
};

const displayLabel = (field: HireFieldId): string => {
  const meta = HIRE_FIELD_META[field];
  if (meta.peopleNet === "conditional") return `${meta.label} (condicional)`;
  if (meta.peopleNet === "conditional-required") return `${meta.label} (según rama)`;
  return meta.label;
};

const fieldAttributes = (field: HireFieldId) => ({
  "data-hire-field": field,
  "data-peoplenet-requirement": HIRE_FIELD_META[field].peopleNet,
  "data-integration": HIRE_FIELD_META[field].integration,
});

function FieldCaption({ field, htmlFor }: { field: HireFieldId; htmlFor: string }) {
  const meta = HIRE_FIELD_META[field];
  const integrationOnly = meta.requiredForCurrentHire && !isPeopleNetRequired(field);
  return (
    <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0.5 px-1">
      {meta.kind === "catalog" ? (
        <span className={cn("text-sm font-medium", HIRE_PENDING_LABEL_CLASS)}>
          {displayLabel(field)}
        </span>
      ) : (
        <label
          htmlFor={htmlFor}
          className={cn(
            "text-sm font-medium text-foreground",
            meta.integration === "pending" && HIRE_PENDING_LABEL_CLASS,
          )}
        >
          {displayLabel(field)}
        </label>
      )}
      {isPeopleNetRequired(field) ? (
        <span
          aria-hidden="true"
          className={cn("text-sm", meta.integration === "pending" && HIRE_PENDING_LABEL_CLASS)}
        >
          *
        </span>
      ) : null}
      {isPeopleNetRequired(field) ? (
        <span id={`${htmlFor}-peoplenet`} className="sr-only">
          Obligatorio visual en PeopleNet
        </span>
      ) : null}
      {integrationOnly ? (
        <span id={`${htmlFor}-integration`} className="text-xs text-muted-foreground">
          Requerido para enviar
        </span>
      ) : null}
    </div>
  );
}

function FieldFrame({
  field,
  id,
  children,
  className,
}: {
  field: HireFieldId;
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div {...fieldAttributes(field)} className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <FieldCaption field={field} htmlFor={id} />
      {children}
    </div>
  );
}

export function FieldGroup({
  field,
  children,
  className,
}: {
  field: HireFieldId;
  children: ReactNode;
  className?: string;
}) {
  const meta = HIRE_FIELD_META[field];
  return (
    <fieldset {...fieldAttributes(field)} className={cn("min-w-0 space-y-3", className)}>
      <legend
        className={cn(
          "px-1 text-sm font-medium text-foreground",
          meta.integration === "pending" && HIRE_PENDING_LABEL_CLASS,
        )}
      >
        {displayLabel(field)}
        {isPeopleNetRequired(field) ? <span aria-hidden="true"> *</span> : null}
        {isPeopleNetRequired(field) ? (
          <span className="sr-only"> (obligatorio en PeopleNet)</span>
        ) : null}
      </legend>
      {children}
    </fieldset>
  );
}

export function CurrentInput({ field }: { field: CurrentFieldId }) {
  const id = useId();
  const { draft, onCurrentChange } = useHireDraft();
  const meta = HIRE_FIELD_META[field];
  return (
    <FieldFrame field={field} id={id}>
      <Input
        id={id}
        name={field}
        aria-describedby={
          meta.requiredForCurrentHire && !isPeopleNetRequired(field)
            ? `${id}-integration`
            : isPeopleNetRequired(field)
              ? `${id}-peoplenet`
              : undefined
        }
        type={meta.kind}
        required={meta.requiredForCurrentHire}
        value={draft.current[field]}
        onChange={(value) => onCurrentChange(field, value)}
        autoComplete="off"
      />
    </FieldFrame>
  );
}

export function PendingInput({
  field,
  disabled = false,
  type,
  className,
}: {
  field: PendingFieldId;
  disabled?: boolean;
  type?: string;
  className?: string;
}) {
  const id = useId();
  const { draft, onPendingChange } = useHireDraft();
  const meta = HIRE_FIELD_META[field];
  return (
    <FieldFrame field={field} id={id} className={className}>
      <Input
        id={id}
        name={field}
        type={type ?? (meta.kind === "compound" ? "text" : meta.kind)}
        aria-describedby={isPeopleNetRequired(field) ? `${id}-peoplenet` : undefined}
        disabled={disabled}
        value={draft.pendingValues[field] ?? ""}
        onChange={(value) => onPendingChange(field, value)}
        autoComplete="off"
      />
    </FieldFrame>
  );
}

export function PendingCatalog({ field }: { field: PendingFieldId }) {
  const meta = HIRE_FIELD_META[field];
  const id = useId();
  return (
    <FieldFrame field={field} id={id}>
      <Combobox disabled>
        <ComboboxTrigger className="h-11 rounded-full">
          <ComboboxInput
            aria-label={meta.label}
            aria-disabled="true"
            aria-describedby={isPeopleNetRequired(field) ? `${id}-peoplenet` : undefined}
            placeholder="Catálogo pendiente"
          />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList ariaLabel={meta.label}>
            <ComboboxEmpty>Catálogo pendiente</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </FieldFrame>
  );
}

export function PendingCheckbox({ field }: { field: PendingFieldId }) {
  const { draft, onCheckChange } = useHireDraft();
  return (
    <div {...fieldAttributes(field)} className="min-w-0">
      <Checkbox
        checked={draft.pendingChecks[field] ?? false}
        onCheckedChange={(checked) => onCheckChange(field, checked)}
        label={displayLabel(field)}
        className="[&>span]:text-hire-pending"
      />
    </div>
  );
}

export function PendingRadio({
  field,
  value,
  onValueChange,
  options,
}: {
  field: PendingFieldId;
  value: string;
  onValueChange: (value: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <FieldGroup field={field}>
      <RadioGroup value={value} onValueChange={onValueChange} orientation="horizontal">
        {options.map((option) => (
          <RadioGroupItem
            key={option.value}
            value={option.value}
            label={option.label}
            className="[&>span]:text-hire-pending"
          />
        ))}
      </RadioGroup>
    </FieldGroup>
  );
}

export function PendingTextarea({ field }: { field: PendingFieldId }) {
  const id = useId();
  const { draft, onPendingChange } = useHireDraft();
  return (
    <FieldFrame field={field} id={id}>
      <Textarea
        id={id}
        name={field}
        value={draft.pendingValues[field] ?? ""}
        onChange={(event) => onPendingChange(field, event.target.value)}
      />
    </FieldFrame>
  );
}

export type CompoundPart = {
  field: PendingValueKey;
  label: string;
  type?: string;
};

export function CompoundField({
  field,
  parts,
  disabled = false,
  className,
}: {
  field: PendingFieldId;
  parts: readonly CompoundPart[];
  disabled?: boolean;
  className?: string;
}) {
  const { draft, onPendingChange } = useHireDraft();
  const parentLabel = HIRE_FIELD_META[field].label;
  return (
    <FieldGroup field={field} className={className}>
      <div className={cn("grid gap-3", parts.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {parts.map((part) => (
          <Input
            key={part.field}
            label={part.label}
            aria-label={`${parentLabel}, ${part.label}`}
            name={part.field}
            type={part.type ?? "text"}
            disabled={disabled}
            value={draft.pendingValues[part.field] ?? ""}
            onChange={(value) => onPendingChange(part.field, value)}
            classNames={{ label: HIRE_PENDING_LABEL_CLASS }}
            autoComplete="off"
          />
        ))}
      </div>
    </FieldGroup>
  );
}

export function HireSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="min-w-0 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </section>
  );
}

export function PendingLookupButton({ label }: { label: string }) {
  return (
    <Button type="button" variant="outline" size="icon" disabled aria-label={label}>
      <Search aria-hidden="true" className="size-4" />
    </Button>
  );
}
