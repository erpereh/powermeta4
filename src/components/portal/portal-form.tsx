"use client";

import { useId, useMemo, useState, type ReactNode } from "react";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  type ComboboxFilter,
} from "@/components/system";
import { isFieldVisible, validatePortalForm, type FormIssues } from "@/lib/portal/forms/validate";
import type { ConnectedCatalog, FieldOption, FormFieldSpec, FormSpec } from "@/lib/portal/types";
import { cn } from "@/lib/utils";

import { WriteBlockedNotice } from "./portal-states";

export type CatalogOptions = Partial<Record<ConnectedCatalog, readonly FieldOption[]>>;

export type CatalogAvailability =
  | { readonly status: "ready"; readonly options: CatalogOptions }
  | { readonly status: "unavailable"; readonly message: string };

const fold = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

const catalogFilter: ComboboxFilter = (value, query, keywords) => {
  const needle = fold(query.trim());
  return !needle || fold([value, ...keywords].join(" ")).includes(needle);
};

/** Combobox para catálogos largos de PeopleNet. */
function CatalogField({
  field,
  options,
  value,
  onChange,
  labelId,
  describedBy,
  invalid,
}: {
  field: FormFieldSpec;
  options: readonly FieldOption[];
  value: string;
  onChange: (value: string) => void;
  labelId: string;
  describedBy?: string;
  invalid: boolean;
}) {
  return (
    <Combobox
      value={value}
      onValueChange={onChange}
      filter={catalogFilter}
      disabled={options.length === 0}
    >
      <ComboboxTrigger className="h-10 rounded-xl">
        <ComboboxInput
          aria-labelledby={labelId}
          aria-describedby={describedBy}
          aria-invalid={invalid ? true : undefined}
          aria-required={field.required ? true : undefined}
          placeholder={options.length === 0 ? "Catálogo vacío" : "Buscar"}
        />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList ariaLabel={field.label}>
          {options.map((option) => (
            <ComboboxItem
              key={option.value}
              value={option.value}
              textValue={option.label}
              keywords={[option.label, option.value]}
            >
              <span className="flex min-w-0 items-baseline gap-2">
                <span className="truncate text-foreground">{option.label}</span>
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {option.value}
                </span>
              </span>
            </ComboboxItem>
          ))}
          <ComboboxEmpty>Sin resultados</ComboboxEmpty>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

function FieldControl({
  field,
  value,
  onChange,
  issue,
  catalogs,
}: {
  field: FormFieldSpec;
  value: string;
  onChange: (value: string) => void;
  issue?: string;
  catalogs: CatalogAvailability;
}) {
  const id = useId();
  const labelId = `${id}-label`;
  const helpId = field.help ? `${id}-help` : undefined;
  const errorId = issue ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;
  const label = (
    <span id={labelId} className="text-sm font-medium text-foreground">
      {field.label}
      {field.required ? (
        <span className="text-destructive" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
    </span>
  );
  const help = field.help ? (
    <p id={helpId} className="text-xs text-muted-foreground">
      {field.help}
    </p>
  ) : null;
  const error = issue ? (
    <p id={errorId} className="text-xs font-medium text-destructive">
      {issue}
    </p>
  ) : null;

  if (field.type === "checkbox") {
    return (
      <div className="flex min-w-0 flex-col gap-1">
        <Checkbox
          checked={value === "true"}
          onCheckedChange={(checked) => onChange(checked ? "true" : "")}
          label={field.label}
          aria-describedby={describedBy}
        />
        {help}
        {error}
      </div>
    );
  }

  if (field.type === "select") {
    const source = field.options;
    let control: ReactNode;
    if (!source || source.kind === "pending") {
      control = (
        <div
          aria-labelledby={labelId}
          role="group"
          className="flex h-10 items-center rounded-xl border border-dashed border-border bg-muted/30 px-3 text-xs text-muted-foreground"
        >
          Catálogo pendiente{source?.kind === "pending" ? ` (${source.meta4})` : ""}
        </div>
      );
    } else if (source.kind === "static") {
      control = (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger
            aria-labelledby={labelId}
            aria-describedby={describedBy}
            aria-invalid={issue ? true : undefined}
            aria-required={field.required ? true : undefined}
          >
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            {source.values.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    } else if (catalogs.status === "unavailable") {
      control = (
        <div
          role="group"
          aria-labelledby={labelId}
          className="flex h-10 items-center rounded-xl border border-dashed border-border bg-muted/30 px-3 text-xs text-muted-foreground"
        >
          {catalogs.message}
        </div>
      );
    } else {
      control = (
        <CatalogField
          field={field}
          options={catalogs.options[source.catalog] ?? []}
          value={value}
          onChange={onChange}
          labelId={labelId}
          describedBy={describedBy}
          invalid={Boolean(issue)}
        />
      );
    }
    return (
      <div className="flex min-w-0 flex-col gap-1.5">
        {label}
        {control}
        {help}
        {error}
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="flex min-w-0 flex-col gap-1.5">
        {label}
        <Textarea
          aria-labelledby={labelId}
          aria-describedby={describedBy}
          aria-invalid={issue ? true : undefined}
          aria-required={field.required ? true : undefined}
          maxLength={field.maxLength}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={3}
        />
        {field.maxLength ? (
          <p className="text-right text-[11px] tabular-nums text-muted-foreground">
            {value.length}/{field.maxLength}
          </p>
        ) : null}
        {help}
        {error}
      </div>
    );
  }

  const inputType =
    field.type === "date"
      ? "date"
      : field.type === "number"
        ? "number"
        : field.type === "email"
          ? "email"
          : field.type === "tel"
            ? "tel"
            : "text";
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      {label}
      <Input
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        aria-required={field.required ? true : undefined}
        type={inputType}
        inputMode={field.type === "number" ? "decimal" : undefined}
        maxLength={field.maxLength}
        min={field.min}
        max={field.max}
        value={value}
        onChange={onChange}
        error={issue ? true : undefined}
      />
      {help}
      {error}
    </div>
  );
}

/**
 * Formulario de una petición del portal. Conserva el borrador en memoria y
 * valida como el original; el envío está bloqueado mientras no exista un
 * contrato de escritura aprobado.
 */
export function PortalForm({
  spec,
  catalogs,
  hireDate,
}: {
  spec: FormSpec;
  catalogs: CatalogAvailability;
  hireDate?: string | null;
}) {
  const noticeId = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [issues, setIssues] = useState<FormIssues>({});
  const [checked, setChecked] = useState(false);

  const visible = useMemo(
    () => spec.fields.filter((field) => isFieldVisible(field, values)),
    [spec.fields, values],
  );
  const issueCount = Object.keys(issues).length;

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (issues[name]) {
      setIssues((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const check = (form: HTMLFormElement) => {
    const found = validatePortalForm(spec, values, { hireDate });
    setIssues(found);
    setChecked(true);
    if (Object.keys(found).length > 0) {
      // El foco va al primer campo editable con error.
      requestAnimationFrame(() =>
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      );
    }
  };

  return (
    <form
      noValidate
      aria-label={spec.title}
      className="flex min-w-0 flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        check(event.currentTarget);
      }}
    >
      {spec.description ? (
        <p className="text-sm text-muted-foreground">{spec.description}</p>
      ) : null}
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        {visible.map((field) => (
          <div key={field.name} className={cn("min-w-0", field.span === 2 && "sm:col-span-2")}>
            <FieldControl
              field={field}
              value={values[field.name] ?? ""}
              onChange={(value) => update(field.name, value)}
              issue={issues[field.name]}
              catalogs={catalogs}
            />
          </div>
        ))}
      </div>
      {spec.notice ? <p className="text-xs text-muted-foreground">{spec.notice}</p> : null}
      <div aria-live="polite" className="text-sm">
        {checked ? (
          issueCount > 0 ? (
            <p className="font-medium text-destructive">
              Se han encontrado {issueCount === 1 ? "1 error" : `${issueCount} errores`}. Debes
              corregirlos para {spec.mode === "query" ? "consultar" : "enviar tu petición"}.
            </p>
          ) : (
            <p className="text-muted-foreground">
              Los datos cumplen las comprobaciones del portal.
            </p>
          )
        ) : null}
      </div>
      <WriteBlockedNotice write={spec.write} id={noticeId} mode={spec.mode} />
      <div className="flex flex-wrap items-center justify-end gap-2">
        <Button type="submit" variant="secondary" size="sm">
          Comprobar datos
        </Button>
        <Button type="button" size="sm" disabled aria-describedby={noticeId}>
          {spec.write.label}
        </Button>
      </div>
    </form>
  );
}
