const euros = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  useGrouping: "always",
});

export const formatProjectionMoney = (value: number | null): string =>
  value === null ? "No informado" : euros.format(value);

/** La unidad se muestra en la cabecera de las matrices compactas de escritorio. */
export const formatProjectionAmount = (value: number | null, grouping = true): string =>
  value === null
    ? "No informado"
    : euros
        .formatToParts(value)
        .filter(
          (part) =>
            part.type !== "currency" &&
            part.type !== "literal" &&
            (grouping || part.type !== "group"),
        )
        .map((part) => part.value)
        .join("");
