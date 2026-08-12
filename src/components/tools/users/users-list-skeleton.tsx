import { Skeleton } from "@/components/ui/skeleton";

export function UsersListSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-8"
      aria-busy="true"
      aria-label="Cargando listado de usuarios"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
      <Skeleton className="h-4 w-72 max-w-full" />
      <Skeleton className="h-9 w-full max-w-md" />
      <div className="space-y-2 rounded-lg border border-border p-2">
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: 9 }, (_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
      </div>
    </div>
  );
}
