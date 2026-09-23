"use client";

import { useEffect, useState } from "react";

import { getMeta4EmployeeDetailViewAction } from "@/app/actions/meta4-employee-detail";
import { Badge, Modal, Skeleton } from "@/components/system";
import type { Meta4EmployeeDetailView } from "@/types/meta4-employee-detail";

const genericErrorMessage = "No se han podido cargar los datos del empleado desde Meta4.";

export type UserDetailDialogProps = {
  employeeId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UserDetailDialog({ employeeId, open, onOpenChange }: UserDetailDialogProps) {
  const [view, setView] = useState<Meta4EmployeeDetailView | null>(null);

  useEffect(() => {
    if (!employeeId) return;
    let mounted = true;
    void getMeta4EmployeeDetailViewAction(employeeId)
      .then((result) => {
        if (mounted) setView(result);
      })
      .catch(() => {
        if (mounted) {
          setView({
            available: false,
            employeeId,
            displayName: null,
            message: genericErrorMessage,
            sections: [],
            emails: [],
          });
        }
      });
    return () => {
      mounted = false;
    };
  }, [employeeId]);

  const isLoading = employeeId !== null && (view === null || view.employeeId !== employeeId);
  const title = !isLoading && view?.displayName ? view.displayName : "Detalle del empleado";

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description="Datos del empleado consultados en Meta4."
      size="lg"
      className="max-h-[min(80vh,52rem)]"
    >
      <div className="flex max-h-[min(60vh,40rem)] flex-col gap-4">
        {!isLoading && view?.available ? (
          <div className="flex flex-wrap items-center gap-2">
            <Badge status="neutral" size="sm">
              {view.employeeId}
            </Badge>
          </div>
        ) : null}

        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="space-y-6">
            {isLoading ? (
              <div className="space-y-3" aria-busy="true">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            ) : !view?.available ? (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-destructive"
              >
                <p className="text-sm font-medium">No se pudo cargar el detalle</p>
                <p className="mt-1 text-sm">{view?.message ?? genericErrorMessage}</p>
              </div>
            ) : (
              <>
                {view.sections.map((section) => (
                  <section key={section.id} className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {section.fields.map((field) => (
                        <div key={`${section.id}-${field.key}`} className="space-y-1">
                          <dt className="text-sm text-muted-foreground">{field.label}</dt>
                          <dd className="text-sm font-medium break-words text-foreground">
                            {field.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}

                <section className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground">Correos</h3>
                  {view.emails.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No hay correos registrados.</p>
                  ) : (
                    <ul className="space-y-2">
                      {view.emails.map((email, index) => (
                        <li
                          key={`${email.email}-${index}`}
                          className="space-y-0.5 rounded-xl border border-border bg-elevated/40 p-3"
                        >
                          <p className="text-sm font-medium break-words text-foreground">
                            {email.email}
                          </p>
                          <p className="text-sm text-muted-foreground">{email.dateRange}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
