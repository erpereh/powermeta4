/** Calendar dates only; never infer seniority from a birth/hire date. */
export function seniorityDate(value: string | undefined): string | null {
  const text = value?.trim() ?? "";
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  const spanish = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(text);
  if (!iso && !spanish) return null;
  const year = Number(iso ? iso[1] : spanish?.[3]);
  const month = Number(iso ? iso[2] : spanish?.[2]);
  const day = Number(iso ? iso[3] : spanish?.[1]);
  if (year < 1900 || year >= 4000 || month < 1 || month > 12 || day < 1) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
    ? date.toISOString().slice(0, 10)
    : null;
}

export function anniversaryMetric(date: string, period: string): string | null {
  const valid = seniorityDate(date);
  if (!valid || valid.slice(5, 7) !== period.slice(5, 7)) return null;
  if (!seniorityDate(`${period.slice(0, 4)}-${valid.slice(5)}`)) return null;
  const years = Number(period.slice(0, 4)) - Number(valid.slice(0, 4));
  return years === 25 || years === 40 ? `anniversary${years}` : null;
}

export function anniversaryDateIssue(date: string, period: string): string | null {
  if (date.slice(0, 7) > period)
    return "Antigüedad laboral posterior al periodo; confirmar la fecha.";
  const years = Number(period.slice(0, 4)) - Number(date.slice(0, 4));
  if (
    (years === 25 || years === 40) &&
    date.slice(5) === "02-29" &&
    !seniorityDate(`${period.slice(0, 4)}-02-29`)
  )
    return "Aniversario del 29 de febrero en año no bisiesto: falta confirmar el mes de pago (Q12).";
  return null;
}
