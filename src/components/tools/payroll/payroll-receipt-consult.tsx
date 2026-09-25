"use client";

import { useId, useState, useTransition, type FormEvent } from "react";
import { ReceiptText } from "lucide-react";

import { getPayrollReceiptAction } from "@/app/actions/payroll-receipt";
import {
  Button,
  Callout,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  EmptyState,
  Input,
  RadioGroup,
  RadioGroupItem,
  Surface,
  type ComboboxFilter,
} from "@/components/system";
import {
  PAYROLL_PAYMENT_TYPES,
  PAYROLL_RANGE_MAX_PAYS,
  type PayrollMissingReceipt,
  type PayrollPaymentType,
  type PayrollPayOption,
  type PayrollReceiptEntry,
  type PayrollReceiptParameters,
} from "@/types/payroll-receipt";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { useWorkspaceStore } from "@/stores/use-workspace-store";

import { PayrollReceiptRange } from "./payroll-receipt-range";

type CurrencyMode = PayrollReceiptParameters["currency"]["mode"];

type FormErrors = Partial<Record<"employeeId" | "range" | "currencyId", string>>;

type ConsultState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | {
      status: "ready";
      key: number;
      receipts: readonly PayrollReceiptEntry[];
      missing: readonly PayrollMissingReceipt[];
    };

const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9]{1,20}$/;
const CURRENCY_ID_PATTERN = /^[A-Z0-9]{1,10}$/;

const isPaymentType = (value: string): value is PayrollPaymentType =>
  PAYROLL_PAYMENT_TYPES.some((option) => option.value === value);

const isCurrencyMode = (value: string): value is CurrencyMode =>
  value === "calculation" || value === "other";

const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}/${month}/${year}` : isoDate;
};

const foldText = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

/** Busca por nombre de la paga y por fecha de pago en cualquiera de sus formatos. */
const payFilter: ComboboxFilter = (value, query, keywords) => {
  const needle = foldText(query.trim());
  return !needle || foldText([value, ...keywords].join(" ")).includes(needle);
};

function PayCombobox({
  label,
  pays,
  value,
  onValueChange,
  invalid,
  describedBy,
}: {
  label: string;
  pays: readonly PayrollPayOption[];
  value: string;
  onValueChange: (value: string) => void;
  invalid: boolean;
  describedBy?: string;
}) {
  const id = useId();
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <span id={`${id}-label`} className="text-sm font-medium text-foreground">
        {label}
      </span>
      <Combobox
        value={value}
        onValueChange={onValueChange}
        filter={payFilter}
        disabled={pays.length === 0}
      >
        <ComboboxTrigger className="h-11 rounded-full">
          <ComboboxInput
            aria-labelledby={`${id}-label`}
            aria-describedby={describedBy}
            aria-invalid={invalid ? true : undefined}
            aria-required
            placeholder={pays.length === 0 ? "Sin pagas disponibles" : "Buscar paga"}
          />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList ariaLabel={label}>
            {pays.map((pay) => (
              <ComboboxItem
                key={pay.paymentDate}
                value={pay.paymentDate}
                textValue={pay.name}
                keywords={[pay.name, formatDate(pay.paymentDate)]}
              >
                <span className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3">
                  <span className="tabular-nums text-muted-foreground">
                    {formatDate(pay.paymentDate)}
                  </span>
                  <span className="truncate text-foreground">{pay.name}</span>
                </span>
              </ComboboxItem>
            ))}
            <ComboboxEmpty>Sin resultados</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

/** Ventana «Consultar una nómina»: parámetros del recibo y resultado. */
export function PayrollReceiptConsult({
  pays,
  paysError,
}: {
  pays: readonly PayrollPayOption[];
  paysError: string | null;
}) {
  const scopeLabel = getWorkspaceScopeLabel(useWorkspaceStore((state) => state.auth));
  const rangeErrorId = useId();
  const latest = pays[0]?.paymentDate ?? "";
  const [employeeId, setEmployeeId] = useState("");
  const [fromPaymentDate, setFromPaymentDate] = useState(latest);
  const [toPaymentDate, setToPaymentDate] = useState(latest);
  const [paymentType, setPaymentType] = useState<PayrollPaymentType>("current");
  const [currencyMode, setCurrencyMode] = useState<CurrencyMode>("calculation");
  const [currencyId, setCurrencyId] = useState("EUR");
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<ConsultState>({ status: "idle" });
  const [pending, startTransition] = useTransition();

  const paysInRange = pays.filter(
    (pay) => pay.paymentDate >= fromPaymentDate && pay.paymentDate <= toPaymentDate,
  ).length;

  // Mantiene el rango ordenado: elegir un extremo arrastra al otro si se cruzan.
  const chooseFrom = (value: string) => {
    setFromPaymentDate(value);
    if (value && toPaymentDate && value > toPaymentDate) setToPaymentDate(value);
  };
  const chooseTo = (value: string) => {
    setToPaymentDate(value);
    if (value && fromPaymentDate && value < fromPaymentDate) setFromPaymentDate(value);
  };

  const validate = (): PayrollReceiptParameters | null => {
    const nextErrors: FormErrors = {};
    const trimmedEmployeeId = employeeId.trim();
    const normalizedCurrencyId = currencyId.trim().toUpperCase();
    const knownDates = new Set(pays.map((pay) => pay.paymentDate));

    if (!EMPLOYEE_ID_PATTERN.test(trimmedEmployeeId)) {
      nextErrors.employeeId = "Indica la matrícula del empleado.";
    }
    if (!knownDates.has(fromPaymentDate) || !knownDates.has(toPaymentDate)) {
      nextErrors.range = "Elige la primera y la última paga del rango.";
    } else if (paysInRange > PAYROLL_RANGE_MAX_PAYS) {
      nextErrors.range = `El rango incluye ${paysInRange} pagas; elige como máximo ${PAYROLL_RANGE_MAX_PAYS}.`;
    }
    if (currencyMode === "other" && !CURRENCY_ID_PATTERN.test(normalizedCurrencyId)) {
      nextErrors.currencyId = "Indica el ID de la moneda.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return null;

    return {
      employeeId: trimmedEmployeeId,
      fromPaymentDate,
      toPaymentDate,
      paymentType,
      currency:
        currencyMode === "other"
          ? { mode: "other", currencyId: normalizedCurrencyId }
          : { mode: "calculation" },
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parameters = validate();
    if (!parameters) return;
    startTransition(async () => {
      try {
        const result = await getPayrollReceiptAction(parameters);
        if (!result.ok) {
          setState({ status: "error", message: result.message });
        } else if (result.receipts.length === 0) {
          setState({
            status: "error",
            message: "El empleado no tiene recibos de esas pagas en la sociedad activa.",
          });
        } else {
          setState({
            status: "ready",
            key: Date.now(),
            receipts: result.receipts,
            missing: result.missing,
          });
        }
      } catch {
        setState({
          status: "error",
          message: "No se ha podido cargar el recibo de nómina desde PeopleNet.",
        });
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
      <section className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
          <ReceiptText className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 space-y-1">
          <p className="text-xs text-muted-foreground">{scopeLabel}</p>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Consultar una nómina
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Consulta los recibos de nómina de un empleado en una paga o en un rango de pagas.
          </p>
        </div>
      </section>

      {paysError ? (
        <Callout status="error" title="Calendario de pagas no disponible">
          {paysError}
        </Callout>
      ) : null}

      <Surface title="Ejecución del recibo de nómina" description="Parámetros de la consulta">
        <form noValidate onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
            <Input
              label="Matrícula"
              name="employeeId"
              inputMode="text"
              autoComplete="off"
              placeholder="Ej. 1013"
              value={employeeId}
              onChange={setEmployeeId}
              error={errors.employeeId}
              required
            />
            <fieldset className="min-w-0 space-y-1.5">
              <legend className="sr-only">Periodo de liquidación</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <PayCombobox
                  label="Desde la paga"
                  pays={pays}
                  value={fromPaymentDate}
                  onValueChange={chooseFrom}
                  invalid={Boolean(errors.range)}
                  describedBy={errors.range ? rangeErrorId : undefined}
                />
                <PayCombobox
                  label="Hasta la paga"
                  pays={pays}
                  value={toPaymentDate}
                  onValueChange={chooseTo}
                  invalid={Boolean(errors.range)}
                  describedBy={errors.range ? rangeErrorId : undefined}
                />
              </div>
              {errors.range ? (
                <p id={rangeErrorId} className="text-xs text-destructive">
                  {errors.range}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  {paysInRange === 1 ? "1 paga" : `${paysInRange} pagas`} en el rango (máximo{" "}
                  {PAYROLL_RANGE_MAX_PAYS}).
                </p>
              )}
            </fieldset>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <fieldset className="min-w-0 space-y-3 rounded-xl border border-border px-4 pb-4 pt-2">
              <legend className="px-1 text-sm font-medium text-foreground">Tipo de pagas</legend>
              <RadioGroup
                value={paymentType}
                onValueChange={(value) => {
                  if (isPaymentType(value)) setPaymentType(value);
                }}
              >
                {PAYROLL_PAYMENT_TYPES.map((option) => (
                  <RadioGroupItem key={option.value} value={option.value} label={option.label} />
                ))}
              </RadioGroup>
            </fieldset>

            <fieldset className="min-w-0 space-y-3 rounded-xl border border-border px-4 pb-4 pt-2">
              <legend className="px-1 text-sm font-medium text-foreground">
                Moneda de proceso
              </legend>
              <RadioGroup
                value={currencyMode}
                onValueChange={(value) => {
                  if (isCurrencyMode(value)) setCurrencyMode(value);
                }}
              >
                <RadioGroupItem value="calculation" label="Moneda de cálculo" />
                <RadioGroupItem value="other" label="Otra" />
              </RadioGroup>
              <Input
                label="ID moneda"
                name="currencyId"
                autoComplete="off"
                placeholder="EUR"
                value={currencyId}
                onChange={(value) => setCurrencyId(value.toUpperCase())}
                disabled={currencyMode !== "other"}
                error={currencyMode === "other" ? errors.currencyId : undefined}
                classNames={{ root: "max-w-40" }}
              />
            </fieldset>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={pending || pays.length === 0} aria-busy={pending}>
              {pending ? "Consultando…" : "Consultar recibos"}
            </Button>
          </div>
        </form>
      </Surface>

      <section aria-label="Recibos de nómina" aria-busy={pending}>
        {state.status === "idle" ? (
          <EmptyState
            icon={<ReceiptText aria-hidden="true" />}
            title="Sin recibo seleccionado"
            description="Indica la matrícula y las pagas para consultar los recibos."
          />
        ) : null}
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
