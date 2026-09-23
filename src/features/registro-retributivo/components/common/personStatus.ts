export type PersonStatusMeta = {
  /** Valor de `PersonComparisonRow.status` (y del filtro de Personas). */
  readonly status: string;
  readonly label: string;
  /** Explicación en lenguaje llano para quien no conoce el análisis. */
  readonly explanation: string;
  /** Clase de fondo estática (excepción de color semántico documentada). */
  readonly dotClass: string;
};

/** Orden de lectura: primero lo que requiere acción, al final lo correcto. */
export const PERSON_STATUS_META: readonly PersonStatusMeta[] = [
  {
    status: "Diferencia",
    label: "Con diferencia",
    explanation: "El recibo no coincide con el Registro Retributivo.",
    dotClass: "bg-destructive",
  },
  {
    status: "Revisar",
    label: "A revisar",
    explanation: "Diferencia pequeña o dudosa que conviene comprobar.",
    dotClass: "bg-amber-500",
  },
  {
    status: "Sin mapear",
    label: "Sin mapear",
    explanation: "Tienen conceptos del recibo sin regla asignada.",
    dotClass: "bg-orange-400",
  },
  {
    status: "Sin Registro",
    label: "Recibo sin Registro",
    explanation: "Hay recibo, pero la persona no está en el Excel.",
    dotClass: "bg-primary",
  },
  {
    status: "Sin PDF",
    label: "Registro sin recibo",
    explanation: "Está en el Excel, pero no se ha subido su recibo.",
    dotClass: "bg-muted-foreground/60",
  },
  {
    status: "OK",
    label: "Sin diferencia",
    explanation: "Recibo y Registro coinciden dentro de la tolerancia.",
    dotClass: "bg-emerald-500",
  },
];

export type PersonStatusCount = PersonStatusMeta & { readonly count: number };

/** Cuenta personas por estado, en el orden de lectura y sin estados vacíos. */
export function countPeopleByStatus(people: readonly { readonly status: string }[]): PersonStatusCount[] {
  const counts = new Map<string, number>();
  people.forEach((row) => counts.set(row.status, (counts.get(row.status) ?? 0) + 1));
  const known = PERSON_STATUS_META.map((meta) => ({ ...meta, count: counts.get(meta.status) ?? 0 }));
  const unknown = [...counts.entries()]
    .filter(([status]) => !PERSON_STATUS_META.some((meta) => meta.status === status))
    .map(([status, count]) => ({ status, label: status, explanation: "", dotClass: "bg-primary", count }));
  return [...known, ...unknown].filter((item) => item.count > 0);
}

/** Metadatos de un estado; los desconocidos se muestran tal cual. */
export function personStatusMeta(status: string): PersonStatusMeta {
  return (
    PERSON_STATUS_META.find((meta) => meta.status === status) ?? {
      status,
      label: status || "Sin dato",
      explanation: "",
      dotClass: "bg-muted-foreground/60",
    }
  );
}

/** Estados en los que existen recibo y registro, y la diferencia es comparable. */
export function isComparableStatus(status: string): boolean {
  return status !== "Sin Registro" && status !== "Sin PDF";
}
