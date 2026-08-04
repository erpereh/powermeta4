import type { ReactNode } from "react";

import { AppShell } from "@/components/app-shell/app-shell";
import { requireSession } from "@/lib/auth/session";

export default async function PrivateLayout({ children }: { children: ReactNode }) {
  await requireSession();

  return <AppShell>{children}</AppShell>;
}
