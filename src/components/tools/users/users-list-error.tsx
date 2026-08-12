"use client";

import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function UsersListError({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-4 px-4 py-8 sm:px-8">
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>No se pudo cargar el listado</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
      <Button type="button" variant="outline" onClick={() => router.refresh()}>
        Reintentar
      </Button>
    </div>
  );
}
