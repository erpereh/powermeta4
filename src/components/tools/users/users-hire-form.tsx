"use client";

import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

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
import { parseHirePeople } from "@/lib/meta4/hire/validate";

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

export function UsersHireForm() {
  const [people, setPeople] = useState<HirePersonInput[]>([emptyPerson()]);
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
    setPeople((current) => [...current, emptyPerson()]);
    setSuccess(null);
  };

  const removePerson = (index: number) => {
    setPeople((current) => (current.length === 1 ? current : current.filter((_, i) => i !== index)));
  };

  const requestConfirm = () => {
    setError(null);
    setSuccess(null);
    try {
      parseHirePeople(people);
      setConfirmOpen(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Revisa los datos indicados.");
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
      setSuccess(`Se han enviado ${result.data.personCount} personas a Meta4.`);
      setPeople([emptyPerson()]);
      setConfirmOpen(false);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8">
      <p className="text-sm text-muted-foreground">
        Añade una o varias personas. Solo se envían los datos personales mínimos; el resto lo toma
        la plantilla Hire y la sociedad activa en servidor.
      </p>

      {people.map((person, index) => (
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
      ))}

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
