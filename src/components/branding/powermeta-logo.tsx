import { cn } from "@/lib/utils";

/**
 * Official brand asset. PowermetaLogo is the only branding API: SocietyHeader,
 * login, headers and settings must consume this component instead of the
 * public SVG path.
 */
export const POWERMETA_MARK_SRC = "/brand/powermeta4-mark.svg";

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
      <img
        src={POWERMETA_MARK_SRC}
        alt=""
        className={cn("size-8 shrink-0 object-contain", markClassName)}
      />
      {!compact && (
        <span className={cn("truncate font-semibold tracking-tight", wordmarkClassName)}>
          powermeta4
        </span>
      )}
    </span>
  );
}
