"use client";

import { Button } from "@/components/ui/button";
import { useConfirmDisambiguation } from "@/components/chat/agent-disambiguation-context";
import type { EmployeeDisambiguationData } from "@/lib/agent/disambiguation";

type EmployeeDisambiguationCardProps = {
  data: EmployeeDisambiguationData;
};

export function EmployeeDisambiguationCard({ data }: EmployeeDisambiguationCardProps) {
  const confirm = useConfirmDisambiguation();

  return (
    <div className="mt-3 flex flex-col gap-2" role="group" aria-label="Seleccionar empleado">
      {data.candidates.map((candidate) => (
        <Button
          key={candidate.choiceId}
          type="button"
          variant="outline"
          className="h-auto justify-start py-2 text-left whitespace-normal"
          onClick={() => {
            void confirm?.(data.pendingId, candidate.choiceId);
          }}
          disabled={!confirm}
        >
          {candidate.label}
        </Button>
      ))}
    </div>
  );
}
