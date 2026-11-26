import type { ConceptComparisonRow, PersonComparisonRow } from "@/features/registro-retributivo/types";
import { formatEuro, roundMoney } from "@/features/registro-retributivo/utils/money";

type DifferenceExplanation = {
  readonly label: string;
  readonly description: string;
};

export function describePersonCause(row: PersonComparisonRow, tolerance: number): DifferenceExplanation | undefined {
  if (row.status === "Sin Registro" || row.status === "Sin PDF") return undefined;

  const blocks = [
    { name: "Salario", difference: row.salaryDifference },
    { name: "Complemento Salarial", difference: row.salaryComplementDifference },
    { name: "Extrasalarial", difference: row.extraSalaryDifference },
  ];
  const positive = blocks.filter((block) => block.difference > tolerance);
  const negative = blocks.filter((block) => block.difference < -tolerance);
  if (!positive.length || !negative.length) return undefined;

  const surplus = positive.reduce((sum, block) => sum + block.difference, 0);
  const shortfall = negative.reduce((sum, block) => sum - block.difference, 0);
  const compensated = roundMoney(Math.min(surplus, shortfall));
  const formatBlocks = (group: typeof blocks) => group.map((block) => block.name).join(" y ");

  return {
    label: "Compensación entre bloques",
    description: `Las diferencias positivas de ${formatBlocks(positive)} compensan ${formatEuro(compensated)} de las negativas de ${formatBlocks(negative)}. La diferencia total es de ${formatEuro(row.totalDifference)} (recibos menos Registro).`,
  };
}

export function describeConceptCause(row: ConceptComparisonRow, tolerance: number): DifferenceExplanation | undefined {
  if (Math.abs(row.difference) <= tolerance || (row.pdfAmount === 0) === (row.registroAmount === 0)) return undefined;

  return {
    label: row.registroAmount === 0 ? "Importe solo en los recibos" : "Importe solo en el Registro",
    description: `Los recibos incluidos suman ${formatEuro(row.pdfAmount)} para este concepto y el Registro recoge ${formatEuro(row.registroAmount)}.`,
  };
}
