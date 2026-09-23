"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import { Button, Input, Modal } from "@/components/system";
import type { HirePersonInput } from "@/lib/meta4/hire/types";
import { parseHirePeople, parseHirePerson } from "@/lib/meta4/hire/validate";

const emptyPerson = (): HirePersonInput => ({
  firstName: "",
  lastName1: "",
  lastName2: "",
  documentType: "",
  documentNumber: "",
  email: "",
  hireDate: "",
});

type FieldKey = keyof HirePersonInput;

const FIELDS: ReadonlyArray<{ key: FieldKey; label: string; type: string; required: boolean }> = [
  { key: "firstName", label: "Nombre", type: "text", required: true },
  { key: "lastName1", label: "Primer apellido", type: "text", required: true },
  { key: "lastName2", label: "Segundo apellido", type: "text", required: false },
  { key: "documentType", label: "Tipo de documento", type: "text", required: true },
  { key: "documentNumber", label: "Número de documento", type: "text", required: true },
  { key: "email", label: "Correo", type: "email", required: true },
  { key: "hireDate", label: "Fecha de alta", type: "date", required: true },
];

const errorMessage = (caught: unknown): string =>
  caught instanceof Error ? caught.message : "Revisa los datos indicados.";

const personFullName = (person: HirePersonInput): string =>
  [person.firstName, person.lastName1, person.lastName2]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ");

export function UsersHireForm() {
  const [people, setPeople] = useState<HirePersonInput[]>([emptyPerson()]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const personCount = people.length;

  const confirmation = useMemo(
    () => `Se van a procesar ${personCount} personas en Meta4`,
    [personCount],
  );

  const updatePerson = (index: number, key: FieldKey, value: string) => {
    setPeople((current) =>
      current.map((person, personIndex) =>
        personIndex === index ? { ...person, [key]: value } : person,
      ),
    );
  };

  const validateExpanded = (): boolean => {
    const current = people[expandedIndex];
    if (!current) return false;
    try {
      parseHirePerson(current);
      setError(null);
      return true;
    } catch (caught) {
      setError(errorMessage(caught));
      return false;
    }
  };

  const addPerson = () => {
    setSuccess(null);
    if (!validateExpanded()) return;
    setPeople((existing) => [...existing, emptyPerson()]);
    setExpandedIndex(people.length);
  };

  const editPerson = (index: number) => {
    if (index === expandedIndex) return;
    if (!validateExpanded()) return;
    setExpandedIndex(index);
  };

  const removePerson = (index: number) => {
    if (people.length === 1) return;
    setPeople((current) => current.filter((_, personIndex) => personIndex !== index));
    setExpandedIndex((currentExpanded) => {
      if (index < currentExpanded) return currentExpanded - 1;
      const remaining = people.length - 1;
      if (index === currentExpanded) return Math.min(index, remaining - 1);
      return currentExpanded;
    });
  };

  const requestConfirm = () => {
    setError(null);
    setSuccess(null);
    try {
      parseHirePeople(people);
      setConfirmOpen(true);
    } catch (caught) {
      setError(errorMessage(caught));
    }
  };

  const submitHire = async () => {
    setPending(true);
    setError(null);
    try {
      const result = await launchMeta4HireAction(people);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setSuccess(`Alta enviada correctamente · ${result.data.fileName}`);
      setPeople([emptyPerson()]);
      setExpandedIndex(0);
      setConfirmOpen(false);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-8">
      <p className="text-sm text-muted-foreground">
        Añade una o varias personas. Solo se sustituyen los datos personales mínimos; el resto lo
        conserva la plantilla Hire.
      </p>

      <div className="flex flex-col gap-3">
        {people.map((person, index) => {
          const isExpanded = index === expandedIndex;
          const name = personFullName(person);
          const summary = [person.documentNumber.trim(), person.email.trim()]
            .filter(Boolean)
            .join(" · ");

          if (isExpanded) {
            return (
              <fieldset
                key={index}
                className="grid gap-4 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-sm"
              >
                <legend className="px-1 text-sm font-medium text-foreground">
                  Persona {index + 1}
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  {FIELDS.map((field) => {
                    const id = `person-${index}-${field.key}`;
                    return (
                      <Input
                        key={field.key}
                        id={id}
                        name={id}
                        label={field.required ? field.label : `${field.label} (opcional)`}
                        type={field.type}
                        required={field.required}
                        value={person[field.key]}
                        onChange={(value) => updatePerson(index, field.key, value)}
                        autoComplete="off"
                      />
                    );
                  })}
                </div>
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removePerson(index)}
                    disabled={people.length === 1}
                    aria-label={`Eliminar persona ${index + 1}`}
                    className="text-destructive bg-destructive/10 hover:bg-destructive/15"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                    Eliminar persona
                  </Button>
                </div>
              </fieldset>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">Persona {index + 1}</p>
                <p className="truncate text-sm text-foreground">{name}</p>
                <p className="truncate text-sm text-muted-foreground">{summary}</p>
              </div>
              <div className="flex shrink-0 gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => editPerson(index)}
                  aria-label={`Editar persona ${index + 1}`}
                >
                  <Pencil className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removePerson(index)}
                  disabled={people.length === 1}
                  aria-label={`Eliminar persona ${index + 1}`}
                  className="text-destructive bg-destructive/10 hover:bg-destructive/15"
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={addPerson}>
          <Plus className="size-4" aria-hidden="true" />
          Añadir persona
        </Button>
        <Button type="button" onClick={requestConfirm} disabled={pending} aria-busy={pending}>
          Lanzar alta
        </Button>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {success ? (
        <p role="status" className="text-sm text-foreground">
          {success}
        </p>
      ) : null}

      <Modal
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Confirmar alta"
        description={confirmation}
        size="sm"
        footer={
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={pending}
              onClick={() => setConfirmOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              size="sm"
              disabled={pending}
              onClick={() => {
                void submitHire();
              }}
            >
              {pending ? "Enviando..." : "Confirmar"}
            </Button>
          </>
        }
      />
    </div>
  );
}
