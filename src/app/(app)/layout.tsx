import type { ReactNode } from "react";

import { AppShell } from "@/components/app-shell/app-shell";
import { requireAuthContext } from "@/lib/auth/session";

export default async function PrivateLayout({ children }: { children: ReactNode }) {
  await requireAuthContext();

  return <AppShell>{children}</AppShell>;
}
