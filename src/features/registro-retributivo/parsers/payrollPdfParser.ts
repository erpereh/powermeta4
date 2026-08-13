import { extractText } from "unpdf";
import type { AnalysisError, PayrollConcept, PayrollRecord } from "@/features/registro-retributivo/types";
import { parseSpanishMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText, normalizeNif } from "@/features/registro-retributivo/utils/normalize";
import { parsePayrollPeriod, toIsoDate } from "@/features/registro-retributivo/utils/spanishDates";

export interface PayrollParseResult {
  readonly records: readonly PayrollRecord[];
  readonly errors: readonly AnalysisError[];
}

const NIF_PATTERN = /^[0-9XYZ]\d{7}[A-Z]$/i;
const BANKING_PATTERNS = [/IBAN/i, /DATOS DEL BANCO/i, /\bES\d{2}\s?\d{4}/i, /DATOS DEL BANCO BENEFICIARIO/i];

function sanitizeText(text: string): string {
  return text
    .split(/\r?\n/)
    .filter((line) => !BANKING_PATTERNS.some((pattern) => pattern.test(line)))
    .join("\n");
}

function findMoneySequenceAfter(text: string, anchor: RegExp): number[] {
  const match = anchor.exec(text);
  if (!match) {
    return [];
  }

  return (
    text
      .slice(match.index)
      .match(/-?\d{1,3}(?:\.\d{3})*,\d{2}/g)
      ?.map((value) => parseSpanishMoney(value))
      .filter((value): value is number => value !== undefined) ?? []
  );
}

function findTotalsBeforeLabels(text: string): { totalDevengado?: number; totalDeducir?: number } {
  const beforeLabels = text.slice(0, Math.max(0, text.search(/REMUNERAC\./i)));
  const moneyLines = beforeLabels
    .split(/\r?\n/)
    .map((line) => line.match(/-?\d{1,3}(?:\.\d{3})*,\d{2}/g) ?? [])
    .filter((amounts) => amounts.length === 2);
  const totals = moneyLines.at(-1)?.map((amount) => parseSpanishMoney(amount));

  return {
    totalDevengado: totals?.[0],
    totalDeducir: totals?.[1],
  };
}

function isKnownInformativeConcept(name: string): boolean {
  const normalized = normalizeComparableText(name);
  return [
    "seguro medico mensual",
    "seguro de vida mensual",
    "seguro de accidente mensual",
    "plan de pensiones mensual",
    "plan de pensiones extraordinario mensual",
  ].includes(normalized);
}

function isResidualConceptName(name: string): boolean {
  const normalized = normalizeComparableText(name);
  return (
    !normalized ||
    /suministrados en periodo de liquidacion|periodo de liquidacion|datos del banco|liquido total a percibir|base irpf acumulada/.test(
      normalized,
    )
  );
}

function classifyConcept(name: string, isInformativeSection = false): PayrollConcept["type"] {
  const normalized = normalizeComparableText(name);
  if (
    /\bcoste empresa\b|cotiz.*empresa|contingencias comunes empresa|desempleo empresa|fogasa empresa|formacion profesional empresa|it ims|mei empresa/.test(
      normalized,
    )
  ) {
    return "coste_empresa";
  }
  if (/^kilometraje (con|sin) retencion\b/.test(normalized)) {
    return "devengo";
  }
  if (/retencion|irpf/.test(normalized)) {
    return "retencion";
  }
  if (/cotizacion|cotiz/.test(normalized)) {
    return "cotizacion";
  }
  if (/descuento|aportacion personal|cancelacion prov/.test(normalized)) {
    return "deduccion";
  }
  if (/especie/.test(normalized)) {
    return "especie";
  }
  if (
    isInformativeSection ||
    isKnownInformativeConcept(name) ||
    /conceptos informativos|devengos superiores|retribucion en especie/.test(normalized)
  ) {
    return "informativo";
  }
  return "devengo";
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractConceptAmount(line: string): { amount: number; amountText: string; trailingText: string } | undefined {
  const match = line.match(/(-?\d{1,3}(?:\.\d{3})*,\d{2})(?:0,\d{4})?\s*$/);
  if (!match) {
    return undefined;
  }
  const amount = parseSpanishMoney(match[1]);
  if (amount === undefined) {
    return undefined;
  }
  return { amount, amountText: match[1], trailingText: match[0].trim() };
}

function cleanConceptName(line: string, amountText: string, trailingText = amountText): string {
  let name = line
    .replace(new RegExp(`\\s*${escapeRegExp(trailingText)}\\s*$`), "")
    .replace(/^\d{1,2},\d{2}\s+%\s+\d{1,3}(?:\.\d{3})*,\d{2}\s+/, "")
    .replace(new RegExp(escapeRegExp(amountText), "g"), "")
    .replace(/\*{3}/g, "")
    .replace(/\s+/g, " ")
    .trim();
  while (/^\d{1,3}(?:\.\d{3})*,\d{2}\s+/.test(name)) {
    name = name.replace(/^\d{1,3}(?:\.\d{3})*,\d{2}\s+/, "").trim();
  }
  return name;
}

function parseConcepts(text: string): PayrollConcept[] {
  const concepts: PayrollConcept[] = [];
  let isInformativeSection = false;
  for (const line of text.split(/\r?\n/)) {
    if (/conceptos informativos/i.test(line)) {
      isInformativeSection = true;
      continue;
    }

    if (/TOTAL PRORRATA|BASE TOTAL|BASE IRPF|CUOTA IRPF|CUOTA S\.S\.|DATOS DEL BANCO|L[IÍ]QUIDO|REMUNERAC\./i.test(line)) {
      continue;
    }

    const parsedAmount = extractConceptAmount(line);
    if (!parsedAmount) {
      continue;
    }

    const name = cleanConceptName(line, parsedAmount.amountText, parsedAmount.trailingText);
    if (!name || name.length < 3 || !/\p{L}/u.test(name) || isResidualConceptName(name)) {
      continue;
    }

    concepts.push({ name, amount: parsedAmount.amount, type: classifyConcept(name, isInformativeSection) });
  }

  return concepts;
}

function parsePayrollPage(rawText: string, sourceFile: string, pageNumber: number): PayrollRecord | undefined {
  const text = sanitizeText(rawText);
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const periodLine = lines.find((line) => /Del\s+\d{1,2}\s+al\s+\d{1,2}\s+\w+\s+\d{4}/i.test(line));
  const periodText = periodLine?.match(/Del\s+\d{1,2}\s+al\s+\d{1,2}\s+\w+\s+\d{4}/i)?.[0] ?? "Periodo no detectado";
  const period = parsePayrollPeriod(periodText);

  const nifIndex = lines.findIndex((line) => NIF_PATTERN.test(normalizeNif(line)));
  if (nifIndex < 0 || !lines[nifIndex + 1]) {
    return undefined;
  }

  const headerBeforeLabels = lines.slice(0, lines.findIndex((line) => line.startsWith("EMPRESA"))).filter(Boolean);
  const cif = headerBeforeLabels[0]?.match(/[A-Z]\d{8}/i)?.[0]?.toUpperCase();
  const workerNif = normalizeNif(lines[nifIndex]) || undefined;
  const workerName = lines[nifIndex + 1]?.trim();
  const professionalGroup = lines[nifIndex + 2]?.trim();
  const gt = lines[nifIndex + 3]?.trim();
  const seniorityAndWorkplace = lines[nifIndex + 4] ?? "";
  const seniorityDate = toIsoDate(seniorityAndWorkplace.slice(0, 10));
  const workplace = seniorityAndWorkplace.slice(10).trim() || undefined;
  const socialAndEmployee = lines[nifIndex + 5] ?? "";
  const socialMatch = socialAndEmployee.match(/(\d{10,12})\s+([A-Z0-9-]+)/i);

  const totals = findTotalsBeforeLabels(text);
  const accumulated = findMoneySequenceAfter(text, /BASE IRPF ACUMULADA/i);
  const liquid = findMoneySequenceAfter(text, /L[IÍ]QUIDO TOTAL A PERCIBIR/i);

  return {
    sourceFile,
    pageNumber,
    periodLabel: period.label,
    periodStart: period.start,
    periodEnd: period.end,
    companyName: "Iberinform España S.A.",
    cif,
    workerNif,
    workerName,
    socialSecurityNumber: socialMatch?.[1],
    employeeNumber: socialMatch?.[2],
    workplace,
    professionalGroup,
    gt,
    seniorityDate,
    concepts: parseConcepts(text),
    totalDevengado: totals.totalDevengado,
    totalDeducir: totals.totalDeducir,
    netPay: liquid.at(-1),
    irpfBaseAccumulated: accumulated[0],
    irpfFeeAccumulated: accumulated[1],
    ssFeeAccumulated: accumulated[2],
  };
}

export async function parsePayrollPdf(input: Buffer | ArrayBuffer | Uint8Array, sourceFile: string): Promise<PayrollParseResult> {
  const data =
    input instanceof ArrayBuffer
      ? new Uint8Array(input)
      : new Uint8Array(input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength));
  const extracted = await extractText(data, { mergePages: false });
  const records: PayrollRecord[] = [];
  const errors: AnalysisError[] = [];

  extracted.text.forEach((pageText, index) => {
    try {
      const record = parsePayrollPage(pageText, sourceFile, index + 1);
      if (record) {
        records.push(record);
      } else {
        errors.push({
          file: `${sourceFile} p.${index + 1}`,
          type: "pdf",
          message: "No se pudo detectar una persona en la pagina del PDF.",
          recommendedAction: "Revisar si la pagina corresponde a una nomina legible.",
        });
      }
    } catch (error) {
      errors.push({
        file: `${sourceFile} p.${index + 1}`,
        type: "pdf",
        message: error instanceof Error ? error.message : "Error desconocido al leer la pagina.",
        recommendedAction: "Revisar manualmente el PDF o convertirlo de nuevo a texto seleccionable.",
      });
    }
  });

  return { records, errors };
}
