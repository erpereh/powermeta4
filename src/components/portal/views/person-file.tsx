import { Mail } from "lucide-react";

import { Surface } from "@/components/system";
import type { EmployeeEmailRecord } from "@/lib/peoplenet/employee-detail";
import type { FileSection } from "@/lib/portal/data/organization-core";

const formatDate = (value: string): string => {
  const iso = value.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return value;
  if (iso.startsWith("4000-01-01")) return "Vigente";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

/** Secciones de una ficha como listas de definición en dos columnas. */
export function FileSections({ sections }: { sections: readonly FileSection[] }) {
  return (
    <div className="grid min-w-0 gap-4 lg:grid-cols-2">
      {sections.map((section) => (
        <Surface key={section.id} title={section.title}>
          <dl className="grid min-w-0 grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
            {section.fields.map((field) => (
              <div key={field.label} className="contents">
                <dt className="text-xs text-muted-foreground">{field.label}</dt>
                <dd className="min-w-0 break-words text-sm text-foreground">{field.value}</dd>
              </div>
            ))}
          </dl>
        </Surface>
      ))}
    </div>
  );
}

/** Correos de la persona (`STD_EMAIL`), con su vigencia. */
export function EmailList({ emails }: { emails: readonly EmployeeEmailRecord[] }) {
  return (
    <Surface
      title="Correos electrónicos"
      description="Direcciones registradas en PeopleNet con su vigencia."
    >
      {emails.length === 0 ? (
        <p className="text-sm text-muted-foreground">No hay correos registrados.</p>
      ) : (
        <ul className="flex min-w-0 flex-col divide-y divide-border">
          {emails.map((email) => (
            <li
              key={`${email.order}-${email.email}`}
              className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 py-2.5 first:pt-0 last:pb-0"
            >
              <span className="flex min-w-0 items-center gap-2 text-sm text-foreground">
                <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="min-w-0 break-all">{email.email}</span>
              </span>
              <span className="text-xs text-muted-foreground">
                {email.startDate ? `Desde ${formatDate(email.startDate)}` : null}
                {email.endDate ? ` · Hasta ${formatDate(email.endDate)}` : null}
                {email.locationTypeCode ? ` · Lugar ${email.locationTypeCode}` : null}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Surface>
  );
}
