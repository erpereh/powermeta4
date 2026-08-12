"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

import { getMeta4EmployeeDetailViewAction } from "@/app/actions/meta4-employee-detail";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="flex h-[80vh] w-[min(94vw,64rem)] max-w-4xl flex-col gap-4 overflow-hidden p-4 sm:max-w-4xl"
        showCloseButton
      >
        <DialogHeader className="shrink-0">
          <div className="flex flex-wrap items-center gap-2">
            <DialogTitle>{title}</DialogTitle>
            {!isLoading && view?.available && <Badge variant="secondary">{view.employeeId}</Badge>}
          </div>
          <DialogDescription>Datos del empleado consultados en Meta4.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-6 pr-3">
            {isLoading ? (
              <div className="space-y-3" aria-busy="true">
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            ) : !view?.available ? (
              <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>No se pudo cargar el detalle</AlertTitle>
                <AlertDescription>{view?.message ?? genericErrorMessage}</AlertDescription>
              </Alert>
            ) : (
              <>
                {view.sections.map((section) => (
                  <section key={section.id} className="space-y-3">
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {section.fields.map((field) => (
                        <div key={`${section.id}-${field.key}`} className="space-y-1">
                          <dt className="text-sm text-muted-foreground">{field.label}</dt>
                          <dd className="text-sm font-medium break-words">{field.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}

                <section className="space-y-3">
                  <h2 className="text-lg font-semibold">Correos</h2>
                  {view.emails.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No hay correos registrados.</p>
                  ) : (
                    <ul className="space-y-2">
                      {view.emails.map((email, index) => (
                        <li
                          key={`${email.email}-${index}`}
                          className="space-y-0.5 rounded-lg border border-border p-3"
                        >
                          <p className="text-sm font-medium break-words">{email.email}</p>
                          <p className="text-sm text-muted-foreground">{email.dateRange}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
