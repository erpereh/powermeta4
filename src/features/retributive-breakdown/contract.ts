export const GROUPINGS = [
  {
    sheet: "Agrupación Categoría Personal",
    identifier: "Id. Agrup. Cat. Personal",
    label: "Agrup. Cat. Personal",
    file: "categoria-personal",
  },
  {
    sheet: "Análisis por categoría",
    identifier: "ID Categoría",
    label: "Categoría",
    file: "categoria",
  },
  {
    sheet: "Análisis por familia de puesto",
    identifier: "ID Familia Puesto",
    label: "Familia Puesto",
    file: "familia-de-puesto",
  },
  { sheet: "Análisis por puesto", identifier: "ID Puesto", label: "Puesto", file: "puesto" },
  {
    sheet: "Análisis por valoración puesto",
    identifier: "ID Valoración Retributiva",
    label: "Valoración Retributiva",
    file: "valoracion-del-puesto",
  },
] as const;

export const MAX_UPLOAD_BYTES = 9 * 1024 * 1024;
export const BREAKDOWN_ZIP_NAME = "desglose-retributivo-iber.zip";
