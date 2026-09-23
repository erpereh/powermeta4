import { Skeleton } from "@/components/system";

export function UsersListSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-6xl space-y-5 px-4 py-6 sm:px-8"
      aria-busy="true"
      aria-label="Cargando listado de usuarios"
    >
      <div className="flex flex-wrap items-center gap-2.5">
        <Skeleton className="h-7 w-32" />
        <Skeleton className="h-6 w-12 rounded-full" />
      </div>
      <Skeleton className="h-4 w-72 max-w-full" />
      <Skeleton className="h-11 w-full max-w-md rounded-full" />
      <div className="space-y-2 overflow-hidden rounded-2xl border border-border p-2">
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: 8 }, (_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
      </div>
    </div>
  );
}
