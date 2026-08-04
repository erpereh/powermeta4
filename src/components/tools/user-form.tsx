"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import {
  USER_ROLE_LABELS,
  USER_STATUS_LABELS,
  validateUserDraft,
  type UserFieldErrors,
} from "@/lib/users/validation";
import type { UserDraft, WorkspaceUserRole, WorkspaceUserStatus } from "@/types/workspace";

const initialDraft: UserDraft = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  role: "user",
  status: "active",
};

export function UserForm() {
  const addUser = useWorkspaceStore((state) => state.addUser);
  const [draft, setDraft] = useState<UserDraft>(initialDraft);
  const [errors, setErrors] = useState<UserFieldErrors>({});
  const [createdUserId, setCreatedUserId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateField = <K extends keyof UserDraft>(field: K, value: UserDraft[K]) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setCreatedUserId(null);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateUserDraft(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    startTransition(() => {
      const userId = addUser({
        ...draft,
        firstName: draft.firstName.trim(),
        lastName: draft.lastName.trim(),
        email: draft.email.trim().toLowerCase(),
        username: draft.username.trim(),
      });
      setCreatedUserId(userId);
    });
  };

  return (
    <form onSubmit={submit} className="grid gap-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          field="firstName"
          value={draft.firstName}
          error={errors.firstName}
          onChange={(value) => updateField("firstName", value)}
        />
        <Field
          label="Apellidos"
          field="lastName"
          value={draft.lastName}
          error={errors.lastName}
          onChange={(value) => updateField("lastName", value)}
        />
        <Field
          label="Correo electrónico"
          field="email"
          type="email"
          value={draft.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
        />
        <Field
          label="Nombre de usuario"
          field="username"
          value={draft.username}
          error={errors.username}
          onChange={(value) => updateField("username", value)}
        />
        <SelectField
          label="Rol"
          value={draft.role}
          error={errors.role}
          options={Object.entries(USER_ROLE_LABELS) as [WorkspaceUserRole, string][]}
          onChange={(value) => updateField("role", value as WorkspaceUserRole)}
        />
        <SelectField
          label="Estado"
          value={draft.status}
          error={errors.status}
          options={Object.entries(USER_STATUS_LABELS) as [WorkspaceUserStatus, string][]}
          onChange={(value) => updateField("status", value as WorkspaceUserStatus)}
        />
      </div>

      {createdUserId && (
        <div
          role="status"
          className="rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-primary"
        >
          <p>Usuario guardado en este workspace.</p>
          <Link
            href={`/tools/users/${createdUserId}`}
            className="mt-1 inline-block font-medium underline underline-offset-4"
          >
            Ver usuario
          </Link>
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-2">
        <Button type="button" variant="ghost" asChild disabled={isPending}>
          <Link href="/tools/users">Cancelar</Link>
        </Button>
        <Button type="submit" disabled={isPending} aria-busy={isPending}>
          {isPending ? "Guardando..." : "Guardar usuario"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  field,
  value,
  type = "text",
  error,
  onChange,
}: {
  label: string;
  field: keyof UserDraft;
  value: string;
  type?: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${String(field)}-error`;
  return (
    <div className="grid gap-2">
      <Label htmlFor={String(field)}>{label}</Label>
      <Input
        id={String(field)}
        name={String(field)}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  value,
  error,
  options,
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  options: readonly [string, string][];
  onChange: (value: string) => void;
}) {
  const id = label.toLocaleLowerCase().replaceAll(" ", "-");
  const errorId = `${id}-error`;
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >
          <SelectValue placeholder={`Selecciona ${label.toLocaleLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map(([optionValue, optionLabel]) => (
            <SelectItem key={optionValue} value={optionValue}>
              {optionLabel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
