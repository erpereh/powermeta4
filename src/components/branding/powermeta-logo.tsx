import { cn } from "@/lib/utils";

/**
 * Official brand asset paths. Switch the visual source in this file only
 * once the SVG exists under `public/brand/`. Do not render these hrefs from
 * SocietyHeader, login or other consumers, and do not point `<img>` at a
 * missing file.
 */
export const POWERMETA_LOGO_SRC = "/brand/powermeta4-logo.svg";
export const POWERMETA_MARK_SRC = "/brand/powermeta4-mark.svg";

type PowermetaLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  compact?: boolean;
};

function DevelopmentMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground",
        className,
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
  );
}

export function PowermetaLogo({
  className,
  markClassName,
  wordmarkClassName,
  compact = false,
}: PowermetaLogoProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2", className)}>
      <DevelopmentMark className={markClassName} />
      {!compact && (
        <span className={cn("truncate font-semibold tracking-tight", wordmarkClassName)}>
          powermeta4
        </span>
      )}
    </span>
  );
}
