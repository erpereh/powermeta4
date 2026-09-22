"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  const addPerson = () => {
    setSuccess(null);
    const current = people[expandedIndex];
    if (!current) return;
    try {
      parseHirePerson(current);
    } catch (caught) {
      setError(errorMessage(caught));
      return;
    }
    setError(null);
    setPeople((existing) => [...existing, emptyPerson()]);
    setExpandedIndex(people.length);
  };

  const editPerson = (index: number) => {
    if (index === expandedIndex) return;
    const current = people[expandedIndex];
    if (!current) return;
    try {
      parseHirePerson(current);
    } catch (caught) {
      setError(errorMessage(caught));
      return;
    }
    setError(null);
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
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8">
      <p className="text-sm text-muted-foreground">
        Añade una o varias personas. Solo se sustituyen los datos personales mínimos; el resto lo
        conserva la plantilla Hire.
      </p>

      {people.map((person, index) =>
        index === expandedIndex ? (
          <fieldset key={index} className="grid gap-4 rounded-lg border border-border p-4">
            <legend className="px-1 text-sm font-medium">Persona {index + 1}</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => {
                const id = `person-${index}-${field.key}`;
                return (
                  <div key={field.key} className="grid gap-2">
                    <Label htmlFor={id}>
                      {field.label}
                      {field.required ? "" : " (opcional)"}
                    </Label>
                    <Input
                      id={id}
                      name={id}
                      type={field.type}
                      required={field.required}
                      value={person[field.key]}
                      onChange={(event) => updatePerson(index, field.key, event.target.value)}
                      autoComplete="off"
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                type="button"
                variant="outline"
                onClick={() => removePerson(index)}
                disabled={people.length === 1}
                aria-label={`Eliminar persona ${index + 1}`}
              >
                <Trash2 />
                Eliminar persona
              </Button>
            </div>
          </fieldset>
        ) : (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg border border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium">Persona {index + 1}</p>
              <p className="truncate text-sm">{personFullName(person)}</p>
              <p className="truncate text-sm text-muted-foreground">
                {person.documentNumber.trim()} · {person.email.trim()}
              </p>
            </div>
            <div className="flex shrink-0 gap-1">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => editPerson(index)}
                aria-label={`Editar persona ${index + 1}`}
              >
                <Pencil />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removePerson(index)}
                disabled={people.length === 1}
                aria-label={`Eliminar persona ${index + 1}`}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ),
      )}

      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={addPerson}>
          <Plus />
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
        <p role="status" className="text-sm">
          {success}
        </p>
      ) : null}

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar alta</AlertDialogTitle>
            <AlertDialogDescription>{confirmation}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={pending}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              disabled={pending}
              onClick={(event) => {
                event.preventDefault();
                void submitHire();
              }}
            >
              {pending ? "Enviando..." : "Confirmar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
