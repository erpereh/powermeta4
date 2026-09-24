"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { Search, X } from "lucide-react";

import {
  Button,
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
  Tooltip,
  type ComboboxFilter,
} from "@/components/system";
import {
  contractOptionId,
  geoAncestor,
  HIRE_CATALOG_FIELDS,
  lastGeoSegment,
  parseContractOptionId,
  type HireCatalogFieldId,
  type HireCatalogOption,
  type HireCatalogSource,
} from "@/lib/meta4/hire/catalogs";
import { cn } from "@/lib/utils";

import { useHireCatalogs } from "./catalogs";
import { useHireDraft, type PendingValueKey } from "./draft";
import {
  HIRE_FIELD_META,
  hireFieldLabelClass,
  hireFieldMappingTooltip,
  hireFieldVisualStatus,
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
  "data-mapping-status": HIRE_FIELD_META[field].mapping.status,
  "data-hire-visual-status": hireFieldVisualStatus(field),
});

function MappingLabel({
  field,
  htmlFor,
  id,
}: {
  field: HireFieldId;
  htmlFor?: string;
  id?: string;
}) {
  const className = cn(
    "text-sm font-medium focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    hireFieldLabelClass(field),
  );
  return (
    <Tooltip content={hireFieldMappingTooltip(field)} wrapperClassName="max-w-full">
      {htmlFor ? (
        <label id={id} htmlFor={htmlFor} tabIndex={0} className={className}>
          {displayLabel(field)}
        </label>
      ) : (
        <span id={id} tabIndex={0} className={className}>
          {displayLabel(field)}
        </span>
      )}
    </Tooltip>
  );
}

function FieldCaption({ field, htmlFor }: { field: HireFieldId; htmlFor: string }) {
  const meta = HIRE_FIELD_META[field];
  const integrationOnly = meta.requiredForCurrentHire && !isPeopleNetRequired(field);
  return (
    <div className="flex min-w-0 flex-wrap items-baseline gap-x-1.5 gap-y-0.5 px-1">
      <MappingLabel
        field={field}
        htmlFor={meta.kind === "catalog" ? undefined : htmlFor}
        id={`${htmlFor}-label`}
      />
      {isPeopleNetRequired(field) ? (
        <span aria-hidden="true" className={cn("text-sm", hireFieldLabelClass(field))}>
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
  return (
    <fieldset {...fieldAttributes(field)} className={cn("min-w-0 space-y-3", className)}>
      <legend className="px-1 text-sm font-medium">
        <MappingLabel field={field} />
        {isPeopleNetRequired(field) ? (
          <span aria-hidden="true" className={hireFieldLabelClass(field)}>
            {" "}
            *
          </span>
        ) : null}
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

const foldText = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es");

/** Substring match on ID, name and detail, ignoring case and accents. */
const catalogFilter: ComboboxFilter = (value, query, keywords) => {
  const needle = foldText(query.trim());
  return !needle || foldText([value, ...keywords].join(" ")).includes(needle);
};

/** Server-searched lists are already filtered. */
const keepAll: ComboboxFilter = () => true;

/** Describes a control with the requirement caption FieldCaption rendered for it. */
const requirementDescription = (field: HireFieldId, id: string): string | undefined => {
  if (isPeopleNetRequired(field)) return `${id}-peoplenet`;
  if (HIRE_FIELD_META[field].requiredForCurrentHire) return `${id}-integration`;
  return undefined;
};

type CatalogSearch = {
  query: string;
  onQueryChange: (query: string) => void;
  emptyMessage: string;
};

/** PeopleNet catalog: the list shows ID and name, the field keeps the name, the value is the ID. */
function CatalogCombobox({
  field,
  options,
  value,
  onValueChange,
  unavailable = false,
  displayId = (option) => option.id,
  search,
}: {
  field: HireFieldId;
  options: readonly HireCatalogOption[];
  value: string;
  onValueChange: (value: string) => void;
  unavailable?: boolean;
  displayId?: (option: HireCatalogOption) => string;
  search?: CatalogSearch;
}) {
  const id = useId();
  const meta = HIRE_FIELD_META[field];
  const required = meta.requiredForCurrentHire || isPeopleNetRequired(field);
  const placeholder = unavailable
    ? "Catálogo no disponible"
    : search
      ? "Escribe al menos 2 letras"
      : "Buscar por ID o nombre";

  return (
    <FieldFrame field={field} id={id}>
      <div className="flex min-w-0 items-center gap-2">
        <Combobox
          value={value}
          onValueChange={onValueChange}
          filter={search ? keepAll : catalogFilter}
          query={search?.query}
          onQueryChange={search?.onQueryChange}
          disabled={unavailable}
        >
          <ComboboxTrigger className="h-11 rounded-full">
            <ComboboxInput
              aria-label={meta.label}
              aria-labelledby={`${id}-label`}
              aria-describedby={requirementDescription(field, id)}
              aria-required={required}
              placeholder={placeholder}
            />
          </ComboboxTrigger>
          <ComboboxContent>
            <div
              aria-hidden="true"
              className="grid grid-cols-[5.5rem_minmax(0,1fr)_1.25rem] gap-3 border-b border-border px-3.5 py-2 text-xs font-medium text-muted-foreground"
            >
              <span>ID</span>
              <span>Nombre</span>
            </div>
            <ComboboxList ariaLabel={meta.label}>
              {options.map((option) => (
                <ComboboxItem
                  key={option.id}
                  value={option.id}
                  textValue={option.name}
                  keywords={option.detail ? [option.detail] : []}
                >
                  <span className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3">
                    <span className="truncate tabular-nums">{displayId(option)}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-foreground">{option.name}</span>
                      {option.detail ? (
                        <span className="block truncate text-xs text-muted-foreground">
                          {option.detail}
                        </span>
                      ) : null}
                    </span>
                  </span>
                </ComboboxItem>
              ))}
              <ComboboxEmpty>
                {search
                  ? search.emptyMessage
                  : options.length === 0
                    ? "Catálogo vacío en PeopleNet"
                    : "Sin resultados"}
              </ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {!required && value !== "" ? (
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="shrink-0"
            aria-label={`Quitar ${meta.label}`}
            onClick={() => onValueChange("")}
          >
            <X aria-hidden="true" className="size-4" />
          </Button>
        ) : null}
      </div>
    </FieldFrame>
  );
}

const useCatalogOptions = (source: HireCatalogSource) => {
  const catalogState = useHireCatalogs();
  return catalogState.status === "ready"
    ? { options: catalogState.catalogs[source], unavailable: false }
    : { options: [], unavailable: true };
};

/** Catalog field sent to Excel: its ID lives in the draft's current values. */
export function CatalogField({ field }: { field: HireCatalogFieldId }) {
  const { draft, onCurrentChange } = useHireDraft();
  const { options, unavailable } = useCatalogOptions(HIRE_CATALOG_FIELDS[field].source);
  return (
    <CatalogCombobox
      field={field}
      options={options}
      unavailable={unavailable}
      value={draft.current[field]}
      onValueChange={(next) => onCurrentChange(field, next)}
    />
  );
}

/**
 * Legal + internal contract are one PeopleNet pair: it is chosen once in the
 * legal field and the internal row shows the resulting internal contract.
 */
export function ContractField() {
  const internalId = useId();
  const { draft, onCurrentChange } = useHireDraft();
  const { options, unavailable } = useCatalogOptions("contract");
  const selected = contractOptionId(draft.current);
  const option = options.find((candidate) => candidate.id === selected);

  return (
    <>
      <CatalogCombobox
        field="legalContract"
        options={options}
        unavailable={unavailable}
        value={selected}
        onValueChange={(next) => {
          const pair = parseContractOptionId(next);
          onCurrentChange("legalContract", pair.legalContract);
          onCurrentChange("internalContract", pair.internalContract);
        }}
      />
      <FieldFrame field="internalContract" id={internalId}>
        <Input
          id={internalId}
          readOnly
          aria-labelledby={`${internalId}-label`}
          aria-describedby={requirementDescription("internalContract", internalId)}
          value={option ? `${draft.current.internalContract} · ${option.detail ?? ""}` : ""}
          placeholder="Se completa al elegir el contrato legal"
        />
      </FieldFrame>
    </>
  );
}

/** Catalog field without a confirmed Excel mapping: the choice stays in the local draft. */
export function PendingCatalogLookup({
  field,
  source,
}: {
  field: PendingFieldId;
  source: HireCatalogSource;
}) {
  const { draft, onPendingChange } = useHireDraft();
  const { options, unavailable } = useCatalogOptions(source);
  return (
    <CatalogCombobox
      field={field}
      options={options}
      unavailable={unavailable}
      value={draft.pendingValues[field] ?? ""}
      onValueChange={(next) => onPendingChange(field, next)}
    />
  );
}

/** Fixed PeopleNet choices (not a table) kept in the local draft. */
export function PendingChoice({
  field,
  options,
}: {
  field: PendingFieldId;
  options: readonly HireCatalogOption[];
}) {
  const { draft, onPendingChange } = useHireDraft();
  return (
    <CatalogCombobox
      field={field}
      options={options}
      value={draft.pendingValues[field] ?? ""}
      onValueChange={(next) => onPendingChange(field, next)}
    />
  );
}

type GeoLevel = { depth: number; source: HireCatalogSource } & (
  | { draft: "current"; field: CurrentFieldId }
  | { draft: "pending"; field: PendingFieldId }
);

/** From the broadest to the most specific level; depth = segments of the geographic path. */
const GEO_GROUPS = {
  address: [
    { draft: "current", field: "country", depth: 1, source: "country" },
    { draft: "current", field: "community", depth: 2, source: "community" },
    { draft: "current", field: "province", depth: 3, source: "province" },
    { draft: "current", field: "city", depth: 4, source: "place" },
  ],
  birth: [
    { draft: "current", field: "birthCountry", depth: 1, source: "country" },
    { draft: "pending", field: "birthCommunity", depth: 2, source: "community" },
    { draft: "current", field: "birthProvince", depth: 3, source: "province" },
  ],
} as const satisfies Record<string, readonly GeoLevel[]>;

type GeoGroup = keyof typeof GEO_GROUPS;

/**
 * Choosing a level fills its ancestors from the path and clears descendants
 * that no longer belong to it, as PeopleNet does.
 */
const useGeoSelection = (group: GeoGroup) => {
  const { draft, onCurrentChange, onPendingChange } = useHireDraft();
  const levels: readonly GeoLevel[] = GEO_GROUPS[group];
  const read = (level: GeoLevel): string =>
    level.draft === "current"
      ? draft.current[level.field]
      : (draft.pendingValues[level.field] ?? "");
  const write = (level: GeoLevel, value: string) => {
    if (level.draft === "current") onCurrentChange(level.field, value);
    else onPendingChange(level.field, value);
  };
  return {
    levels,
    read,
    select: (depth: number, value: string) => {
      for (const level of levels) {
        if (level.depth === depth) write(level, value);
        else if (level.depth < depth) {
          if (value) write(level, geoAncestor(value, level.depth));
        } else if (geoAncestor(read(level), depth) !== value) {
          write(level, "");
        }
      }
    },
  };
};

/** Country, community or province, linked to the rest of its group. */
export function GeoField({ group, depth }: { group: GeoGroup; depth: 1 | 2 | 3 }) {
  const { levels, read, select } = useGeoSelection(group);
  const level = levels.find((candidate) => candidate.depth === depth);
  const { options, unavailable } = useCatalogOptions(level?.source ?? "country");
  if (!level) return null;
  return (
    <CatalogCombobox
      field={level.field}
      options={options}
      unavailable={unavailable}
      value={read(level)}
      displayId={(option) => lastGeoSegment(option.id)}
      onValueChange={(next) => select(depth, next)}
    />
  );
}

type PlaceSearchResponse = { ok: true; data: HireCatalogOption[] } | { ok: false };

const isPlaceSearchResponse = (value: unknown): value is PlaceSearchResponse =>
  typeof value === "object" && value !== null && "ok" in value;

/** Población: searched in PeopleNet on demand, then fills province, community and country. */
export function PlaceField() {
  const { draft, onPendingChange } = useHireDraft();
  const catalogState = useHireCatalogs();
  const { select } = useGeoSelection("address");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<readonly HireCatalogOption[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const value = draft.current.city;
  const text = query.trim();

  useEffect(() => {
    if (text.length < 2) return;
    const controller = new AbortController();
    const timer = setTimeout(() => {
      setStatus("loading");
      fetch(`/api/hire/places?q=${encodeURIComponent(text)}`, { signal: controller.signal })
        .then((response) => response.json())
        .then((body: unknown) => {
          if (!isPlaceSearchResponse(body) || !body.ok) throw new Error("PLACE_SEARCH_FAILED");
          setResults(body.data);
          setStatus("idle");
        })
        .catch(() => {
          if (controller.signal.aborted) return;
          setResults([]);
          setStatus("error");
        });
    }, 250);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [text]);

  // The chosen place stays listed while the field is closed so it keeps its name.
  const selected: HireCatalogOption | null = value
    ? { id: value, name: draft.pendingValues.cityName || lastGeoSegment(value) }
    : null;
  const options = text.length < 2 ? (selected ? [selected] : []) : results;
  const emptyMessage =
    text.length < 2
      ? "Escribe al menos 2 letras del nombre o del código"
      : status === "loading"
        ? "Buscando…"
        : status === "error"
          ? "No se ha podido buscar en PeopleNet"
          : "Sin resultados";

  return (
    <CatalogCombobox
      field="city"
      options={options}
      unavailable={catalogState.status !== "ready"}
      value={value}
      displayId={(option) => lastGeoSegment(option.id)}
      search={{ query, onQueryChange: setQuery, emptyMessage }}
      onValueChange={(next) => {
        onPendingChange("cityName", results.find((option) => option.id === next)?.name ?? "");
        select(4, next);
      }}
    />
  );
}

export function PendingCheckbox({ field }: { field: PendingFieldId }) {
  const { draft, onCheckChange } = useHireDraft();
  const id = useId();
  return (
    <div {...fieldAttributes(field)} className="flex min-w-0 items-center gap-3">
      <Checkbox
        id={id}
        aria-label={HIRE_FIELD_META[field].label}
        checked={draft.pendingChecks[field] ?? false}
        onCheckedChange={(checked) => onCheckChange(field, checked)}
      />
      <MappingLabel field={field} htmlFor={id} />
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
            className={cn(
              hireFieldVisualStatus(field) === "confirmed-pending" && "[&>span]:text-hire-pending",
              hireFieldVisualStatus(field) === "unconfirmed" && "[&>span]:text-destructive",
            )}
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
            classNames={{ label: hireFieldLabelClass(field) }}
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
