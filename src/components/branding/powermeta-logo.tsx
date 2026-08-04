import { cn } from "@/lib/utils";

type PowermetaLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  compact?: boolean;
};

export function PowermetaLogo({
  className,
  markClassName,
  wordmarkClassName,
  compact = false,
}: PowermetaLogoProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2", className)}>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground",
          markClassName,
        )}
      >
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5h10v4H9v6H5V5Zm12 0h10v10h-4V9h-6V5ZM5 17h4v6h6v4H5V17Zm18 0h4v10H17v-4h6v-6Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {!compact && (
        <span className={cn("truncate font-semibold tracking-tight", wordmarkClassName)}>
          powermeta4
        </span>
      )}
    </span>
  );
}
