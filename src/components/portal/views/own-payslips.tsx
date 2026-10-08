"use client";

import { ReceiptText } from "lucide-react";
import { useEffect, useId, useRef, useState, useTransition } from "react";

import { getOwnPayslipsAction } from "@/app/actions/portal";
import {
  Button,
  Callout,
  EmptyState,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@/components/system";
import { PayrollReceiptRange } from "@/components/tools/payroll/payroll-receipt-range";
import {
  PAYROLL_RANGE_MAX_PAYS,
  type PayrollMissingReceipt,
  type PayrollPayOption,
  type PayrollReceiptEntry,
} from "@/types/payroll-receipt";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | {
      status: "ready";
      key: number;
      receipts: readonly PayrollReceiptEntry[];
      missing: readonly PayrollMissingReceipt[];
    };

const formatDate = (iso: string): string => {
  const [year, month, day] = iso.split("-");
  return year && month && day ? `${day}/${month}/${year}` : iso;
};

function PaySelect({
  label,
  pays,
  value,
  onChange,
}: {
  label: string;
  pays: readonly PayrollPayOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  const id = useId();
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span id={id} className="text-sm font-medium text-foreground">
        {label}
      </span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger aria-labelledby={id}>
          <SelectValue placeholder="Elige una paga" />
        </SelectTrigger>
        <SelectContent>
          {pays.map((pay) => (
            <SelectItem key={pay.paymentDate} value={pay.paymentDate}>
              {formatDate(pay.paymentDate)} · {pay.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

/**
 * «Últimos recibos de salarios» del propio empleado. Al entrar se consulta la
 * paga más reciente; la matrícula nunca sale del navegador.
 */
export function OwnPayslips({ pays }: { pays: readonly PayrollPayOption[] }) {
  const latest = pays[0]?.paymentDate ?? "";
  const [from, setFrom] = useState(latest);
  const [to, setTo] = useState(latest);
  const [state, setState] = useState<State>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const requested = useRef(false);

  const inRange = pays.filter((pay) => pay.paymentDate >= from && pay.paymentDate <= to).length;

  const consult = (fromPaymentDate: string, toPaymentDate: string) => {
    setState({ status: "loading" });
    startTransition(async () => {
      const result = await getOwnPayslipsAction({ fromPaymentDate, toPaymentDate });
      if (!result.ok) setState({ status: "error", message: result.message });
      else if (result.receipts.length === 0)
        setState({
          status: "error",
          message: "No tienes recibos de esas pagas en la sociedad activa.",
        });
      else
        setState({
          status: "ready",
          key: Date.now(),
          receipts: result.receipts,
          missing: result.missing,
        });
    });
  };

  useEffect(() => {
    if (requested.current || !latest) return;
    requested.current = true;
    consult(latest, latest);
  }, [latest]);

  if (pays.length === 0) {
    return (
      <EmptyState
        icon={<ReceiptText />}
        title="Sin pagas"
        description="El calendario de pagas de tu sociedad no tiene pagas pagadas."
      />
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <form
        noValidate
        aria-label="Elegir pagas"
        className="flex min-w-0 flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (from && to && inRange > 0 && inRange <= PAYROLL_RANGE_MAX_PAYS) consult(from, to);
        }}
      >
        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <PaySelect
            label="Desde la paga"
            pays={pays}
            value={from}
            onChange={(value) => {
              setFrom(value);
              if (value > to) setTo(value);
            }}
          />
          <PaySelect
            label="Hasta la paga"
            pays={pays}
            value={to}
            onChange={(value) => {
              setTo(value);
              if (value < from) setFrom(value);
            }}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p
            className={
              inRange > PAYROLL_RANGE_MAX_PAYS
                ? "text-xs text-destructive"
                : "text-xs text-muted-foreground"
            }
          >
            {inRange === 1 ? "1 paga" : `${inRange} pagas`} en el rango (máximo{" "}
            {PAYROLL_RANGE_MAX_PAYS}).
          </p>
          <Button
            type="submit"
            size="sm"
            disabled={pending || inRange === 0 || inRange > PAYROLL_RANGE_MAX_PAYS}
          >
            {pending ? "Consultando…" : "Consultar recibos"}
          </Button>
        </div>
      </form>
      <section aria-label="Tus recibos" aria-busy={pending} className="min-w-0">
        {state.status === "loading" ? <Skeleton className="h-96 w-full rounded-xl" /> : null}
        {state.status === "error" ? (
          <Callout status="error" title="No se ha podido mostrar el recibo">
            {state.message}
          </Callout>
        ) : null}
        {state.status === "ready" ? (
          <PayrollReceiptRange key={state.key} receipts={state.receipts} missing={state.missing} />
        ) : null}
      </section>
    </div>
  );
}
