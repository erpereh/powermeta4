"use client";

import type { ReactNode } from "react";

import { PageHeader } from "@/components/system";

export function ToolsPageHeader({ title, actions }: { title: string; actions?: ReactNode }) {
  return <PageHeader title={title} actions={actions} />;
}
