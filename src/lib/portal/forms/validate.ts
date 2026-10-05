import type { FormFieldSpec, FormSpec } from "../types";

export type FormValues = Readonly<Record<string, string>>;
export type FormIssues = Readonly<Record<string, string>>;

export type ValidationContext = {
  /** Fecha de alta del empleado (ISO), cuando la regla del original la usa. */
  readonly hireDate?: string | null;
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s-]*$/;

export const isFieldVisible = (field: FormFieldSpec, values: FormValues): boolean =>
  !field.showWhen || field.showWhen.equals.includes(values[field.showWhen.field] ?? "");

const isRealDate = (value: string): boolean => {
  if (!ISO_DATE.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};

const fieldIssue = (field: FormFieldSpec, raw: string | undefined): string | null => {
  const value = (raw ?? "").trim();
  if (field.type === "checkbox") {
    return field.required && value !== "true" ? `${field.label}: es obligatorio.` : null;
  }
  if (value === "") return field.required ? `${field.label}: es obligatorio.` : null;
  if (field.maxLength !== undefined && value.length > field.maxLength) {
    return `${field.label}: admite como máximo ${field.maxLength} caracteres.`;
  }
  if (field.pattern && !new RegExp(field.pattern.regex).test(value)) return field.pattern.message;
  switch (field.type) {
    case "date":
      return isRealDate(value) ? null : `${field.label}: la fecha no es válida.`;
    case "email":
      return EMAIL.test(value) ? null : "El formato del correo electrónico es incorrecto.";
    case "tel":
      return PHONE.test(value) ? null : `${field.label}: solo admite números.`;
    case "number": {
      const number = Number(value.replace(",", "."));
      if (!Number.isFinite(number)) return `${field.label}: debe ser un número.`;
      if (field.min !== undefined && number < field.min)
        return `${field.label}: el mínimo es ${field.min}.`;
      if (field.max !== undefined && number > field.max)
        return `${field.label}: el máximo es ${field.max}.`;
      return null;
    }
    case "iban":
      return /^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(value.replace(/\s/g, "").toUpperCase())
        ? null
        : `${field.label}: el IBAN no tiene un formato válido.`;
    default:
      return null;
  }
};

/** Reproduce las comprobaciones visibles del JavaScript original. */
export const validatePortalForm = (
  spec: FormSpec,
  values: FormValues,
  context: ValidationContext = {},
): FormIssues => {
  const issues: Record<string, string> = {};
  for (const field of spec.fields) {
    if (!isFieldVisible(field, values)) continue;
    const issue = fieldIssue(field, values[field.name]);
    if (issue) issues[field.name] = issue;
  }
  for (const rule of spec.rules ?? []) {
    switch (rule.kind) {
      case "dateOrder": {
        const start = values[rule.start] ?? "";
        const end = values[rule.end] ?? "";
        if (isRealDate(start) && isRealDate(end) && start > end && !issues[rule.end]) {
          issues[rule.end] = rule.message;
        }
        break;
      }
      case "notBeforeHireDate": {
        const value = values[rule.field] ?? "";
        if (
          context.hireDate &&
          isRealDate(value) &&
          value < context.hireDate &&
          !issues[rule.field]
        ) {
          issues[rule.field] = rule.message;
        }
        break;
      }
      case "oneOf": {
        if (rule.fields.every((name) => (values[name] ?? "").trim() === "")) {
          issues[rule.fields[0]] = rule.message;
        }
        break;
      }
      case "emailMatch": {
        if ((values[rule.field] ?? "") !== (values[rule.confirm] ?? "") && !issues[rule.confirm]) {
          issues[rule.confirm] = rule.message;
        }
        break;
      }
    }
  }
  return issues;
};
