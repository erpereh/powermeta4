"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Callout,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/system";
import { DEBUG_ACTORS, debugSelection } from "@/lib/portal/read-model";

/** El servidor decide si se monta. Las URL de muestra no autorizan lecturas reales. */
export function PortalDebugPanel() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const selected = debugSelection(Object.fromEntries(params));
  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    next.set(key, value);
    for (const filter of ["employee", "q", "period", "field", "value"]) next.delete(filter);
    router.replace(`${pathname}?${next}`, { scroll: false });
  };
  const choices = [
    {
      key: "debugActor",
      label: "Persona de muestra",
      value: selected.actor,
      options: DEBUG_ACTORS.map((actor) => ({ value: actor.id, label: actor.name })),
    },
    {
      key: "debugVariant",
      label: "Variante de muestra",
      value: selected.variant,
      options: ["BASE", "CYC", "IBER", "COLL"].map((value) => ({ value, label: value })),
    },
    {
      key: "debugScenario",
      label: "Escenario de muestra",
      value: selected.scenario,
      options: [
        { value: "full", label: "Completo" },
        { value: "partial", label: "Parcial" },
        { value: "empty", label: "Vacío" },
        { value: "error", label: "Error" },
      ],
    },
  ];
  return (
    <Callout title="DEBUG · Datos ficticios · Solo lectura">
      <p className="mb-3 text-sm">
        Estas muestras no proceden de PeopleNet y no validan la integración con la VM. No se guarda
        ningún dato del portal.
      </p>
      <div className="grid min-w-0 gap-3 sm:grid-cols-3">
        {choices.map((choice) => (
          <div key={choice.key} className="min-w-0 space-y-1">
            <span id={choice.key} className="text-xs font-medium">
              {choice.label}
            </span>
            <Select value={choice.value} onValueChange={(value) => update(choice.key, value)}>
              <SelectTrigger aria-labelledby={choice.key}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {choice.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </Callout>
  );
}
