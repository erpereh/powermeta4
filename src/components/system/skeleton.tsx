import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.ComponentProps<"div"> {}

/** Un solo skeleton de producto; sin variantes decorativas. */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-md bg-muted motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  );
}
