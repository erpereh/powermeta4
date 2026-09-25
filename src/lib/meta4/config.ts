import "server-only";

export const META4_SERVICE = {
  login: "Login",
  profile: "CSP_CONSULTA_ORO_INTRAN_NEW",
  hire: "SRTC_LAUNCH_IMPORT",
} as const;

export type Meta4ServiceName = (typeof META4_SERVICE)[keyof typeof META4_SERVICE];

export class Meta4ConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Meta4ConfigError";
  }
}

/** Reads META4_BASE_URL. Trailing slashes are removed. Only HTTPS is accepted. */
export const getMeta4BaseUrl = (override?: string): string => {
  const value = (override ?? process.env.META4_BASE_URL ?? "").trim().replace(/\/+$/, "");
  if (!value) {
    throw new Meta4ConfigError("META4_BASE_URL es obligatoria.");
  }
  if (!value.startsWith("https://")) {
    throw new Meta4ConfigError("META4_BASE_URL debe usar HTTPS.");
  }
  const remainder = value.slice("https://".length);
  if (!remainder || remainder.includes("/")) {
    throw new Meta4ConfigError("META4_BASE_URL no debe incluir una ruta.");
  }
  return value;
};

/** Builds `${META4_BASE_URL}/services/${serviceName}` without a double slash. */
export const getMeta4ServiceUrl = (serviceName: string, baseUrl?: string): string => {
  const service = serviceName.trim().replace(/^\/+/, "");
  if (!service || /[\\/]/.test(service)) {
    throw new Meta4ConfigError("El servicio Meta4 no es válido.");
  }
  return `${getMeta4BaseUrl(baseUrl)}/services/${service}`;
};
