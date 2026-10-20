import type { ReactNode } from "react";

/** Keep the original copy available while presenting concise, nontechnical help. */
export function DevelopmentText({
  children,
  presentation,
}: {
  children: ReactNode;
  presentation?: ReactNode;
}) {
  return (
    <>
      <span data-development-only>{children}</span>
      {presentation != null ? <span data-presentation-only>{presentation}</span> : null}
    </>
  );
}
