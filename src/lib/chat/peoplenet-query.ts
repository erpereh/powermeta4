import { normalizeUsersSearch } from "@/lib/meta4/users/list-filter";
import { PRIMAVERA_MONTHS } from "@/lib/primavera/cuadre";
import type { PayrollPayFilter, PayrollPaymentType } from "@/types/payroll-receipt";

export const PEOPLENET_ACTIONS = [
  "users.consult",
  "payroll.consult",
  "reports.quinquenal",
  "reports.payroll-results",
  "reports.projections",
  "reports.certificate",
  "reports.primavera",
] as const;

export type PeopleNetAction = (typeof PEOPLENET_ACTIONS)[number];
type Period = { year: number; month?: number; day?: number };
type Filter = { field: "unit" | "center" | "concept"; value: string };

export type PeopleNetQuery = {
  action: PeopleNetAction;
  text: string;
  person?: { type: "own" } | { type: "id" | "name"; value: string };
  periods: Period[];
  range: boolean;
  filters: Filter[];
  report?: string;
  runDate?: string;
  aggregation?: "count" | "sum";
  compare: boolean;
  includeColumns: boolean;
  withEmail: boolean;
  mismatchesOnly: boolean;
  payGroup: PayrollPayFilter;
  paymentType: PayrollPaymentType;
};

export type PeopleNetTurn =
  | { kind: "general" }
  | { kind: "clarify"; text: string }
  | { kind: "query"; query: PeopleNetQuery };

const monthNames = PRIMAVERA_MONTHS.map((month) => normalizeUsersSearch(month));
const monthPattern = new RegExp(
  "\\b(" + monthNames.join("|") + ")(?:\\s+(?:de[l]?\\s+)?((?:19|20)\\d{2}))?\\b",
  "g",
);
const idPattern =
  /\b(?:matricula|id de empleado|empleado con id)\s*[:#]?\s*(?!de\b|y\b)([a-z0-9][a-z0-9._-]{0,19})\b/;
const excluded =
  /\b(?:da(?:me)? de alta|dar de alta|alta de personas|(?:crea|crear|modifica|modificar|actualiza|actualizar|desactiva|desactivar|elimina|eliminar) (?:a |el |la |un |una )?(?:usuario|persona|emplead[oa]|nomina|paga)|genera(?:r)? (?:una? )?(?:paga|nomina)|ejecuta(?:r)? (?:el )?(?:alta|proceso|informe)|programa(?:r)? (?:un )?informe)\b/;
const manual =
  /\b(?:segun (?:el |los )?manual|en la documentacion|que significa|que es (?:el|la|un|una)|como (?:puedo|se|hacer|funciona|configur\w*|consult[oa]r?|obtengo|saco|genero)|paso a paso|explica como|procedimiento para|en (?:lenguaje )?ln4|del (?:archivo|documento|adjunto)|(?:payroll|nomina) adjunt[ao]|esta nomina)\b/;
const actionPatterns: Record<PeopleNetAction, RegExp> = {
  "users.consult":
    /\b(?:usuarios?|correos?|emails?|e-mails?|ficha (?:de|del)|lista(?:do)? de (?:empleados|personas)|cuantos empleados)\b/,
  "payroll.consult":
    /\b(?:nominas?|recibos? (?:salariales?|de (?:paga|salario))|(?:liquido|devengos?|sueldo|salario) (?:de|del)|cuanto cobr[oa])\b/,
  "reports.quinquenal": /\bquinquenal\b/,
  "reports.payroll-results":
    /\b(?:resultados? de (?:la )?nomina|ejecucion(?:es)? guardadas?|informe de nomina)\b/,
  "reports.projections": /\b(?:proyeccion(?:es)?|compensacion total proyectada)\b/,
  "reports.certificate":
    /\b(?:certificados? de (?:retenciones|haberes)|certificado (?:irpf|fiscal))\b/,
  "reports.primavera": /\bprimavera\b/,
};

const valueEnd = new RegExp(
  "[?;,\\n]|\\.(?:\\s|$)|\\s+(?:para\\b|con\\b|del mes\\b|(?:en|de|del)\\s+(?:" +
    monthNames.join("|") +
    "|\\d)|entre\\b|y (?:compara|calcula|suma|muestra|cuenta|dime|la|el)\\b|solo\\b)",
);
const cleanValue = (input: string): string => input.split(valueEnd)[0]?.trim().slice(0, 120) ?? "";
const namedValue = (text: string, pattern: RegExp): string | undefined => {
  const match = pattern.exec(text);
  if (!match) return undefined;
  const rest = text.slice(match.index + match[0].length).trim();
  const quoted = /^["«“]([^"»”]{1,120})["»”]/.exec(rest)?.[1];
  return (quoted ?? cleanValue(rest)) || undefined;
};

function findPerson(text: string, action: PeopleNetAction) {
  const id = idPattern.exec(text)?.[1];
  if (id) return { type: "id", value: id } as const;
  if (
    /\b(?:mi (?:nomina|recibo|proyeccion|certificado|ficha|correo)|mis (?:nominas|proyecciones|certificados)|propio|propia)\b/.test(
      text,
    )
  ) {
    return { type: "own" } as const;
  }
  const subject = namedValue(
    text,
    /\b(?:(?:del?|para el) (?:empleado|usuario)|de la (?:empleada|usuaria)|para la empleada|ficha de|correo (?:(?:principal|secundario|historico) )?de|nomina (?:ordinaria )?(?:de|del)|(?:recibo|sueldo|salario) de|cuanto cobr[oa]|quinquenal de|proyecciones? de|certificado de (?:retenciones|haberes) de)\s+/,
  );
  if (
    !subject ||
    /^(?:nomina|paga|retenciones|haberes|(?:un|una|cualquier) (?:emplead[oa]|usuari[oa]|persona)|la unidad|la sociedad|los usuarios|la plantilla|esta nomina|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\b/.test(
      subject,
    )
  )
    return undefined;
  if (/^[a-z]*\d[\da-z._-]*$/.test(subject) && subject.length <= 20)
    return { type: "id", value: subject } as const;
  if (action !== "reports.payroll-results" || /\bemplead[oa]\b/.test(text))
    return { type: "name", value: subject } as const;
}

function readPeriods(text: string, previous?: PeopleNetQuery): Period[] {
  const periods: Period[] = [];
  const years = [...text.matchAll(/\b(?:19|20)\d{2}\b/g)].map(([year]) => Number(year));
  const lastPeriod = previous?.periods.at(-1);
  const inferredYear = years.at(-1) ?? lastPeriod?.year;
  const dated = text.replace(
    /\b((?:19|20)\d{2})-(\d{2})(?:-(\d{2}))?\b/g,
    (_, year: string, month: string, day?: string) => {
      periods.push({
        year: Number(year),
        month: Number(month),
        ...(day ? { day: Number(day) } : {}),
      });
      return " ";
    },
  );
  for (const match of dated.matchAll(monthPattern)) {
    const year = match[2] ? Number(match[2]) : inferredYear;
    if (year) periods.push({ year, month: monthNames.indexOf(match[1]) + 1 });
  }
  if (!periods.length) periods.push(...years.map((year) => ({ year })));
  if (/\bmes anterior\b/.test(text)) {
    const base = periods.at(-1) ?? lastPeriod;
    if (base?.month) {
      periods.push(
        base.month === 1
          ? { year: base.year - 1, month: 12 }
          : { year: base.year, month: base.month - 1 },
      );
    }
  }
  if (/\b(?:ejercicio|ano) anterior\b/.test(text)) {
    const base = periods.at(-1) ?? lastPeriod;
    if (base) periods.push({ year: base.year - 1 });
  }
  return [...new Map(periods.map((period) => [JSON.stringify(period), period])).values()];
}

function buildQuery(
  action: PeopleNetAction,
  text: string,
  previous?: PeopleNetQuery,
): PeopleNetQuery {
  const person = findPerson(text, action) ?? previous?.person;
  const runDatePattern =
    /\b(?:fecha de ejecucion|ejecutad[oa] el)\s*((?:19|20)\d{2}-\d{2}-\d{2}(?:t\d{2}:\d{2}:\d{2}(?:\.\d{3})?z)?)\b/;
  const runDate = runDatePattern.exec(text)?.[1];
  let periodText = text
    .replace(idPattern, "")
    .replace(runDatePattern, "")
    .replace(/["«“][^"»”]+["»”]/g, "");
  if (person?.type === "id" && !idPattern.test(text))
    periodText = periodText.replace(
      /(\b(?:nomina|recibo|quinquenal|proyeccion(?:es)?|certificado de (?:retenciones|haberes)) (?:ordinaria )?de )\d+\b/,
      "$1",
    );
  const periods = readPeriods(periodText, previous);
  const compare = /\bcompar\w*|\bfrente a\b|\bdiferencia entre\b/.test(text);
  const newPeriods =
    compare && previous?.periods.length && periods.length === 1
      ? [...previous.periods.slice(-1), ...periods]
      : periods;
  const filters: Filter[] = [];
  for (const [field, pattern] of [
    ["unit", /\b(?:la unidad|unidad|departamento)\s*[:=]?\s+/],
    ["center", /\b(?:el centro|centro(?: de trabajo)?)\s*[:=]?\s+/],
    ["concept", /\bconcepto\s*[:=]?\s+/],
  ] as const) {
    const value = namedValue(text, pattern);
    if (value && !/^(?:y|por|de cada|entre|en cada|disponible|del informe)\b/.test(value))
      filters.push({ field, value });
  }
  const aggregation = /\b(?:suma|sumame|sumar|totaliza)\b/.test(text)
    ? "sum"
    : /\b(?:cuenta|cuantos?|cuantas?|recuento)\b/.test(text)
      ? "count"
      : undefined;
  return {
    action,
    person,
    text: previous ? `${previous.text} ${text}`.slice(-1400) : text,
    periods: newPeriods.length ? newPeriods : (previous?.periods ?? []),
    range:
      ((/\b(?:desde|hasta|entre)\b/.test(text) ||
        new RegExp(
          "\\b(?:" + monthNames.join("|") + ") a (?:" + monthNames.join("|") + ")\\b",
        ).test(text)) &&
        !compare) ||
      (!newPeriods.length && previous?.range === true),
    filters: [
      ...(previous?.filters.filter(
        (filter) => !filters.some(({ field }) => field === filter.field),
      ) ?? []),
      ...filters,
    ],
    report:
      namedValue(
        text,
        /\b(?:ejecucion guardada|ejecuciones guardadas|informe)\s+(?:de\s+)?(?!de nomina\b|nomina\b)/,
      ) ?? previous?.report,
    runDate: runDate ?? previous?.runDate,
    aggregation: aggregation ?? previous?.aggregation,
    compare,
    includeColumns:
      compare ||
      /\b(?:solo|columnas?|campos?|desglose|desglosa|muestra|indicame|dime)\b/.test(text) ||
      previous?.includeColumns === true,
    withEmail:
      /\b(?:con|tienen|tenga[n]?) (?:un )?(?:correo|email)(?: principal)? (?:informado|registrado)\b/.test(
        text,
      ) || previous?.withEmail === true,
    mismatchesOnly:
      /\b(?:que presentan diferencias|con (?:descuadre|diferencias)|solo (?:los )?descuadres|descuadrados)\b/.test(
        text,
      ) || previous?.mismatchesOnly === true,
    payGroup: /\b(?:ordinaria|ordinario|mensual(?:es)?)\b/.test(text)
      ? "ordinary"
      : /\b(?:revision(?:es)?|incrementos)\b/.test(text)
        ? "revision"
        : /\bpaga variable\b/.test(text)
          ? "variable"
          : /\bpaga extra\b/.test(text)
            ? "other"
            : (previous?.payGroup ?? "all"),
    paymentType: /\b(?:normal|actual).{0,12}retroactiv/.test(text)
      ? "current-and-retroactive"
      : /\bretroactiv/.test(text)
        ? "retroactive"
        : (previous?.paymentType ?? "current"),
  };
}

export function detectPeopleNetTurn(input: string, previous?: PeopleNetQuery): PeopleNetTurn {
  const original = normalizeUsersSearch(input.trim());
  const forced = /^peoplenet\s*:/.test(original);
  const text = original.replace(/^peoplenet\s*:\s*/, "");
  const actions = PEOPLENET_ACTIONS.filter((action) => actionPatterns[action].test(text));
  if (!forced && manual.test(text)) {
    if (
      idPattern.test(text) ||
      actions.some((action) => {
        const person = findPerson(text, action);
        return person?.type === "name" || person?.type === "id";
      })
    )
      return {
        kind: "clarify",
        text: "Para consultar el manual, quita los datos de la persona. Para consultar datos concretos, empieza el mensaje con «PeopleNet:».",
      };
    return { kind: "general" };
  }
  if (excluded.test(text))
    return {
      kind: "clarify",
      text: "Desde el chat puedes consultar datos de PeopleNet. El alta y las demás escrituras se gestionan en sus pantallas.",
    };
  if (text.length > 1400 && (actions.length || forced || previous || idPattern.test(text)))
    return { kind: "clarify", text: "Acota la consulta de PeopleNet a una acción y sus filtros." };
  const specific = actions.filter(
    (action) => action !== "payroll.consult" && action !== "users.consult",
  );
  const specificQuery =
    specific.length === 1 &&
    !/\b(?:cruza|cruzar|con (?:la |el )?(?:nomina|lista de usuarios))\b/.test(text);
  const candidates = specificQuery ? specific : actions;
  if (candidates.length > 1)
    return {
      kind: "clarify",
      text: "Indica una sola acción de Inicio por consulta. Puedes pedir filtros o comparar periodos dentro de esa acción.",
    };
  const needsPerson =
    previous &&
    ["payroll.consult", "reports.projections", "reports.certificate"].includes(previous.action);
  const bareName =
    needsPerson &&
    previous.person === undefined &&
    !/^(?:muchas gracias|de acuerdo|buenos dias|por favor)\b/.test(text) &&
    /^\p{Lu}[\p{L}'-]+(?: [\p{L}'-]+){1,3}[.!]?$/u.test(input.trim());
  const bareId = previous && /^(?:si,?\s+)?(\d{1,10})[.!]?$/.exec(text)?.[1];
  const useBareId =
    bareId && (!/^(?:19|20)\d{2}$/.test(bareId) || (needsPerson && !previous.person));
  const followup = Boolean(
    previous &&
    (/^(?:[¿¡]+\s*)?(?:y\b|compar|mejor\b|solo\b|(?:cuantos|cuantas) tienen\b|(?:sumame|suma|filtra)\b|(?:para |en |de )?(?:el |la )?(?:matricula|empleado|\d{4}|mes anterior|ano anterior))/.test(
      text,
    ) ||
      new RegExp("^(?:y en |en |de )?(?:" + monthNames.join("|") + ")\\b").test(text) ||
      findPerson(text, previous.action) ||
      bareName ||
      useBareId),
  );
  const action = candidates[0] ?? (followup ? previous?.action : undefined);
  if (action) {
    const prior =
      previous?.action === action && (followup || candidates.length === 0) ? previous : undefined;
    const query = buildQuery(action, prior && useBareId ? "matricula " + bareId : text, prior);
    if (bareName && prior && !query.person && !candidates.length)
      query.person = { type: "name", value: text.replace(/[.!]$/, "") };
    return { kind: "query", query };
  }
  if (forced || idPattern.test(text) || /\b(?:datos reales|sociedad activa)\b/.test(text))
    return {
      kind: "clarify",
      text: "¿Qué acción de PeopleNet quieres consultar? Puedes indicar usuarios, nómina, quinquenal, resultados de nómina, proyecciones, certificado o Primavera.",
    };
  return { kind: "general" };
}
