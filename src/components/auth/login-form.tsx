"use client";

import { useActionState } from "react";
import Link from "next/link";

import { loginAction, type LoginState } from "@/app/actions/auth";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="gap-5">
          <Link href="/login" aria-label="powermeta4" className="w-fit">
            <PowermetaLogo />
          </Link>
          <div className="space-y-1.5">
            <CardTitle className="text-2xl">Accede a powermeta4</CardTitle>
            <CardDescription>Continúa con tu espacio de trabajo.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid gap-5" noValidate={false}>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
            {state.error && (
              <p role="alert" className="text-sm text-destructive">
                {state.error}
              </p>
            )}
            <Button type="submit" disabled={pending} aria-busy={pending}>
              {pending ? "Comprobando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
