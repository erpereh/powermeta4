"use client";

import {
  Tabs as BeuiTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/motion/tabs";
import type { ComponentProps } from "react";

/** Tabs de producto: variante pill por defecto. */
function Tabs({
  variant = "pill",
  ...props
}: ComponentProps<typeof BeuiTabs>) {
  return <BeuiTabs variant={variant} {...props} />;
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
