"use client";

import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

import { Button, EmptyState } from "@/components/system";

export function UsersListError({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8">
      <EmptyState
        icon={<AlertCircle aria-hidden="true" />}
        title="No se pudo cargar el listado"
        description={message}
        action={
          <Button type="button" variant="outline" size="sm" onClick={() => router.refresh()}>
            Reintentar
          </Button>
        }
      />
    </div>
  );
}
