"use client";

import { useActionState } from "react";
import { Bug } from "lucide-react";
import Link from "next/link";

import { debugLoginAction, loginAction, type LoginState } from "@/app/actions/auth";
import { PowermetaLogo } from "@/components/branding/powermeta-logo";
import { Input, StatefulButton } from "@/components/system";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const initialState: LoginState = {};

export function LoginForm({ debugAuthEnabled }: { debugAuthEnabled: boolean }) {
  const [meta4State, meta4FormAction, meta4Pending] = useActionState(loginAction, initialState);
  const [debugState, debugFormAction, debugPending] = useActionState(
    debugLoginAction,
    initialState,
  );
  const pending = meta4Pending || debugPending;

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-6">
      <Card
        size="sm"
        className="w-full max-w-md border border-border bg-card shadow-none ring-0"
      >
        <CardHeader className="gap-4">
          <Link
            href="/login"
            aria-label="powermeta4"
            className="w-fit rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <PowermetaLogo markClassName="size-9" wordmarkClassName="text-base" />
          </Link>
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold tracking-tight text-foreground">
              Accede a powermeta4
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Continúa con tu espacio de trabajo.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pb-1">
          <form action={meta4FormAction} className="grid gap-4">
            <Input
              id="email"
              name="email"
              type="text"
              label="Usuario Meta4"
              autoComplete="username"
              required
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              autoComplete="current-password"
              required
            />
            {meta4State.error && (
              <p role="alert" className="text-sm text-destructive">
                {meta4State.error}
              </p>
            )}
            <StatefulButton
              type="submit"
              variant="primary"
              className="w-full"
              state={pending ? "loading" : "idle"}
              loadingText="Comprobando..."
              disabled={pending}
            >
              Entrar
            </StatefulButton>
          </form>
          {debugAuthEnabled && (
            <>
              <div className="relative my-5 flex items-center justify-center" aria-hidden="true">
                <span className="absolute inset-x-0 border-t border-border" />
                <span className="relative bg-card px-3 text-sm text-muted-foreground">o</span>
              </div>
              <form action={debugFormAction} className="grid gap-3">
                {debugState.error && (
                  <p role="alert" className="text-sm text-destructive">
                    {debugState.error}
                  </p>
                )}
                <StatefulButton
                  type="submit"
                  variant="outline"
                  className="w-full"
                  state={pending ? "loading" : "idle"}
                  loadingText="Comprobando..."
                  disabled={pending}
                  icon={<Bug aria-hidden="true" />}
                >
                  Entrar en modo debug
                </StatefulButton>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
