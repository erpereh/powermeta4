"use client";

import { cn } from "@/features/registro-retributivo/utils/classNames";

export function Skeleton({ className }: Readonly<{ className?: string }>) {
  return <div className={cn("animate-pulse rounded-2xl bg-muted", className)} />;
}

export function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-40 lg:col-span-2" />
        <Skeleton className="h-40" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36" />
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
      </div>
    </div>
  );
}
