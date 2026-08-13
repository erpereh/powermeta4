"use client";

import { useActionState } from "react";
import { Bug } from "lucide-react";
import Link from "next/link";

import { debugLoginAction, loginAction, type LoginState } from "@/app/actions/auth";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: LoginState = {};

export function LoginForm({ debugAuthEnabled }: { debugAuthEnabled: boolean }) {
  const [meta4State, meta4FormAction, meta4Pending] = useActionState(loginAction, initialState);
  const [debugState, debugFormAction, debugPending] = useActionState(
    debugLoginAction,
    initialState,
  );
  const pending = meta4Pending || debugPending;

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="gap-5">
          <Link href="/login" aria-label="powermeta4" className="w-fit">
            <PowermetaLogo markClassName="size-10" />
          </Link>
          <div className="space-y-1.5">
            <CardTitle className="text-2xl">Accede a powermeta4</CardTitle>
            <CardDescription>Continúa con tu espacio de trabajo.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form action={meta4FormAction} className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Usuario Meta4</Label>
              <Input
                id="email"
                name="email"
                type="text"
                autoComplete="username"
                defaultValue="JORGE.SALVADOR"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              {/* TODO: quitar defaultValue antes de hacer push, contraseña hardcodeada solo para pruebas locales */}
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                defaultValue={"wvU5k9[Wk|s8rr2-8R531-z$["}
                required
              />
            </div>
            {meta4State.error && (
              <p role="alert" className="text-sm text-destructive">
                {meta4State.error}
              </p>
            )}
            <Button type="submit" disabled={pending} aria-busy={pending}>
              {pending ? "Comprobando..." : "Entrar"}
            </Button>
          </form>
          {debugAuthEnabled && (
            <>
              <div className="relative my-6 flex items-center justify-center" aria-hidden="true">
                <span className="absolute inset-x-0 border-t" />
                <span className="relative bg-card px-3 text-sm text-muted-foreground">o</span>
              </div>
              <form action={debugFormAction} className="grid gap-3">
                {debugState.error && (
                  <p role="alert" className="text-sm text-destructive">
                    {debugState.error}
                  </p>
                )}
                <Button type="submit" variant="outline" disabled={pending} aria-busy={pending}>
                  <Bug />
                  {pending ? "Comprobando..." : "Entrar en modo debug"}
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
