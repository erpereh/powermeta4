import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AccentInitScript } from "@/components/theme/accent-init-script";
import { DevelopmentTextInitScript } from "@/components/theme/development-text-init-script";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ToastProvider } from "@/components/system/toast";
import { DEFAULT_ACCENT } from "@/lib/theme/accent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "powermeta4",
  description: "Gestiona las operaciones de tu empresa con claridad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={inter.variable}
      data-accent={DEFAULT_ACCENT}
      data-hide-development-text="true"
      suppressHydrationWarning
    >
      <head>
        <AccentInitScript />
        <DevelopmentTextInitScript />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
