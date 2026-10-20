"use client";

import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId, useTransition } from "react";

import {
  ButtonLink,
  Callout,
  EmptyState,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Surface,
} from "@/components/system";
import { DevelopmentText } from "@/components/system/development-text";
import type { CertificatePageData } from "@/lib/portal/certificates/types";

const PDF_ROUTE = "/api/portal/certificates/pdf";

/** Enlaces de la vista previa y de la descarga: mismo PDF, distinta presentación. */
const generatedLinks = (year: number, employee: string | null) => {
  const params = new URLSearchParams({ year: String(year) });
  if (employee) params.set("employee", employee);
  const preview = `${PDF_ROUTE}?${params}`;
  params.set("download", "1");
  return { preview, download: `${PDF_ROUTE}?${params}` };
};

function CertificatePreview({
  year,
  preview,
  download,
}: {
  year: number;
  preview: string;
  download: string;
}) {
  return (
    <section
      aria-label={`Certificado de retenciones ${year}`}
      className="flex min-w-0 flex-col gap-3"
    >
      <div className="flex flex-wrap items-center justify-end gap-2">
        <ButtonLink href={preview} target="_blank" rel="noopener" variant="outline" size="sm">
          <ExternalLink className="size-4" aria-hidden />
          Abrir en otra pestaña
        </ButtonLink>
        <ButtonLink href={download} download size="sm">
          <Download className="size-4" aria-hidden />
          Descargar PDF
        </ButtonLink>
      </div>
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-border/70 bg-muted shadow-xs">
        <iframe
          key={preview}
          src={preview}
          title={`Vista previa del certificado de retenciones ${year}`}
          className="block aspect-[595/842] w-full bg-background"
        />
      </div>
    </section>
  );
}

/**
 * «Mis Certificados de retenciones»: el original elige el año en un desplegable
 * y abre el informe en PDF. Aquí se previsualiza y se descarga ese mismo PDF.
 */
export function CertificateReportView({
  data,
  debug = false,
}: {
  data: CertificatePageData;
  debug?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, startTransition] = useTransition();
  const selectId = useId();
  const employee = data.member ? params.get("employee") : null;

  const navigate = (year: string) => {
    const next = new URLSearchParams({ year });
    // La matrícula se conserva al cambiar de ejercicio; el servidor la vuelve a validar.
    if (employee) next.set("employee", employee);
    startTransition(() => router.push(`${pathname}?${next}`, { scroll: false }));
  };

  const year = data.selectedYear;
  const selection = data.selection;
  return (
    <div className="flex min-w-0 flex-col gap-6" aria-busy={pending} data-certificate-report>
      {debug ? (
        <Callout
          status="info"
          title={
            <DevelopmentText presentation="Datos de ejemplo">
              Vista de desarrollo · Datos ficticios
            </DevelopmentText>
          }
        >
          <DevelopmentText presentation="Este certificado contiene datos ficticios.">
            Esta muestra permite revisar el certificado sin consultar Meta4 ni guardar datos de
            empleado.
          </DevelopmentText>
        </Callout>
      ) : null}
      {data.member ? (
        <Callout
          status="info"
          title="Certificado de otra persona"
          action={
            <ButtonLink href={pathname} variant="outline" size="sm">
              <ArrowLeft className="size-4" aria-hidden />
              Ver mi certificado
            </ButtonLink>
          }
        >
          {data.member.name} · {data.member.id} · Matrícula de la sociedad activa.
        </Callout>
      ) : null}
      <Surface
        title={data.member ? "Certificados de retenciones" : "Mis certificados de retenciones"}
        description="Para visualizar un certificado, selecciona el año en el siguiente listado."
        actions={
          data.years.length ? (
            <div className="flex items-center gap-2 py-1">
              <span id={selectId} className="text-xs text-muted-foreground">
                Ejercicio
              </span>
              <Select value={String(year ?? "")} disabled={pending} onValueChange={navigate}>
                <SelectTrigger aria-labelledby={selectId} className="w-32">
                  <span>{year ? `Año ${year}` : "Seleccione año"}</span>
                </SelectTrigger>
                <SelectContent>
                  {data.years.map((entry) => (
                    <SelectItem key={entry.year} value={String(entry.year)}>
                      Año {entry.year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : null
        }
      >
        {data.notices.length ? (
          <Callout status="info" title="Información incompleta" className="mb-4">
            <ul className="space-y-1">
              {data.notices.map((notice) => (
                <li key={notice}>{notice}</li>
              ))}
            </ul>
          </Callout>
        ) : null}
        {year !== null && selection.kind === "generated" ? (
          <CertificatePreview year={year} {...generatedLinks(year, employee)} />
        ) : year !== null && selection.kind === "stored" ? (
          <CertificatePreview
            year={year}
            preview={`${selection.document.href}&inline=1`}
            download={selection.document.href}
          />
        ) : selection.kind === "unavailable" ? (
          <EmptyState
            icon={<FileText />}
            title={`El certificado de ${year ?? "este ejercicio"} todavía no se puede generar`}
            description={selection.message}
          />
        ) : (
          <EmptyState
            icon={<FileText />}
            title="No hay certificados disponibles"
            description={
              year === null
                ? "No consta ningún ejercicio con certificado de retenciones en la sociedad activa."
                : `No hay datos del certificado de retenciones de ${year}.`
            }
          />
        )}
      </Surface>
    </div>
  );
}
