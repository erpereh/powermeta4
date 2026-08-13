import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DataTableShell({
  toolbar,
  summary,
  children,
  empty,
  className,
  viewportClassName = "max-h-[70dvh]",
}: Readonly<{
  toolbar?: ReactNode;
  summary?: ReactNode;
  children: ReactNode;
  empty?: ReactNode;
  className?: string;
  viewportClassName?: string;
}>) {
  return (
    <Card data-surface="table-shell" className={cn("w-full min-w-0 max-w-full gap-0 overflow-hidden py-0", className)}>
      {toolbar ? (
        <div data-slot="table-toolbar" className="min-w-0 border-b px-4 py-4 sm:px-5">
          {toolbar}
        </div>
      ) : null}
      {summary ? (
        <div data-slot="table-summary" className="min-w-0 border-b bg-muted/40 px-4 py-3 sm:px-5">
          {summary}
        </div>
      ) : null}
      <div
        data-slot="table-viewport"
        className={cn("min-w-0 w-full max-w-full overflow-auto", viewportClassName)}
      >
        {children}
        {empty}
      </div>
    </Card>
  );
}
