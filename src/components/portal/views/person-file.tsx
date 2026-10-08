import { Section } from "@/components/system";
import { PortalDataTable, PortalRecord } from "../portal-data";
import type { EmployeeEmailRecord } from "@/lib/peoplenet/employee-detail";
import type { FileSection } from "@/lib/portal/data/organization-core";

const formatDate = (value: string): string => {
  const iso = value.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return value;
  if (iso.startsWith("4000-01-01")) return "Vigente";
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

/** Ficha en filas de etiqueta/valor, con acceso al detalle completo. */
export function FileSections({
  sections,
  compact = false,
}: {
  sections: readonly FileSection[];
  compact?: boolean;
}) {
  return (
    <div className={`flex min-w-0 flex-col ${compact ? "gap-4" : "gap-6"}`}>
      {sections.map((section) => (
        <Section key={section.id} title={section.title}>
          <PortalRecord title={section.title} fields={section.fields} />
        </Section>
      ))}
    </div>
  );
}

/** Correos de la persona (`STD_EMAIL`), con su vigencia. */
export function EmailList({ emails }: { emails: readonly EmployeeEmailRecord[] }) {
  return (
    <Section title="Correos electrónicos">
      {emails.length === 0 ? (
        <p className="text-sm text-muted-foreground">No hay correos registrados.</p>
      ) : (
        <PortalDataTable
          title="Correos electrónicos"
          rows={emails.map((email) => ({
            id: `${email.order}-${email.email}`,
            fields: [
              { label: "Correo", value: email.email },
              { label: "Desde", value: email.startDate ? formatDate(email.startDate) : "—" },
              { label: "Hasta", value: email.endDate ? formatDate(email.endDate) : "—" },
              { label: "Lugar", value: email.locationTypeCode ?? "—" },
            ],
          }))}
        />
      )}
    </Section>
  );
}
