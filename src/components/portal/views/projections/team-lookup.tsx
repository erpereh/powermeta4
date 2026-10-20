"use client";

import { FileChartColumn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";

import { Button, Input, Surface } from "@/components/system";
import { PROJECTION_EMPLOYEE_PATTERN, PROJECTION_LOOKUP } from "@/lib/portal/projections/types";

/** Textos de otro informe que también se abre por matrícula (certificado de retenciones). */
export type EmployeeLookupCopy = { title: string; description: string; submit: string };

/**
 * Abre el informe de proyecciones de otra persona por su matrícula (`CARGA_2`
 * del original). Solo navega: el servidor aplica `PROJECTION_LOOKUP` (o la
 * regla del informe que indique `copy`).
 */
export function TeamProjectionLookup({
  route,
  teamSize,
  defaultValue = "",
  copy,
}: {
  route: string;
  teamSize?: number;
  defaultValue?: string;
  copy?: EmployeeLookupCopy;
}) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | undefined>();
  const [pending, startTransition] = useTransition();
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const employee = value.trim();
    if (!PROJECTION_EMPLOYEE_PATTERN.test(employee)) {
      setError("Escribe una matrícula válida, sin espacios.");
      return;
    }
    setError(undefined);
    startTransition(() => router.push(`${route}?${new URLSearchParams({ employee }).toString()}`));
  };
  return (
    <Surface
      title={
        copy?.title ??
        (PROJECTION_LOOKUP.scope === "team"
          ? "Proyección de una persona de tu equipo"
          : "Proyección de otra persona")
      }
      description={
        copy?.description ??
        (PROJECTION_LOOKUP.scope === "society"
          ? "Escribe la matrícula de cualquier persona de la sociedad activa para ver su informe de compensación total."
          : teamSize === undefined
            ? "Escribe la matrícula de una persona de tu jerarquía para ver su informe de compensación total."
            : `Escribe la matrícula de una de las ${teamSize.toLocaleString("es-ES")} personas de tu jerarquía para ver su informe de compensación total.`)
      }
    >
      <form
        onSubmit={submit}
        className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start"
        aria-busy={pending}
        noValidate
      >
        <Input
          label="Matrícula"
          name="employee"
          value={value}
          onChange={(next) => {
            setValue(next);
            if (error) setError(undefined);
          }}
          error={error}
          autoComplete="off"
          inputMode="text"
          maxLength={20}
          className="min-w-0 sm:max-w-xs sm:flex-1"
        />
        <Button type="submit" disabled={pending} className="sm:mt-6">
          <FileChartColumn className="size-4" aria-hidden />
          {copy?.submit ?? "Ver proyección"}
        </Button>
      </form>
    </Surface>
  );
}
