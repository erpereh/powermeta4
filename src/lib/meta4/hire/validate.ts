import { Meta4HireError } from "./errors";
import { MAX_PERSON_COUNT } from "./mapping";
import type { HirePerson, HirePersonInput } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

const requiredText = (value: unknown, label: string): string => {
  if (typeof value !== "string") {
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} es obligatorio.`);
  }
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", `El campo ${label} es obligatorio.`);
  }
  return trimmed;
};

const optionalText = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

const parseHireDate = (value: unknown): string => {
  const trimmed = requiredText(value, "fecha de alta");
  const match = ISO_DATE_PATTERN.exec(trimmed);
  if (!match) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      "La fecha de alta debe usar el formato AAAA-MM-DD.",
    );
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utc = Date.UTC(year, month - 1, day);
  const parsed = new Date(utc);
  if (
    Number.isNaN(utc) ||
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "La fecha de alta no es una fecha válida.");
  }
  return trimmed;
};

const parseEmail = (value: unknown): string => {
  const trimmed = requiredText(value, "correo");
  if (!EMAIL_PATTERN.test(trimmed)) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "El correo no tiene un formato válido.");
  }
  return trimmed;
};

export const parseHirePerson = (value: unknown): HirePerson => {
  if (typeof value !== "object" || value === null) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Cada persona debe ser un objeto.");
  }
  const record = value as HirePersonInput;
  return {
    firstName: requiredText(record.firstName, "nombre"),
    lastName1: requiredText(record.lastName1, "primer apellido"),
    lastName2: optionalText(record.lastName2),
    documentType: requiredText(record.documentType, "tipo de documento"),
    documentNumber: requiredText(record.documentNumber, "número de documento"),
    email: parseEmail(record.email),
    hireDate: parseHireDate(record.hireDate),
  };
};

export const parseHirePeople = (value: unknown): HirePerson[] => {
  if (!Array.isArray(value)) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Debes indicar al menos una persona.");
  }
  if (value.length === 0) {
    throw new Meta4HireError("META4_HIRE_VALIDATION", "Debes indicar al menos una persona.");
  }
  if (value.length > MAX_PERSON_COUNT) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      `No se pueden dar de alta más de ${MAX_PERSON_COUNT} personas a la vez.`,
    );
  }
  return value.map((person) => parseHirePerson(person));
};
