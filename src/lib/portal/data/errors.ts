export class PortalDataAmbiguousError extends Error {
  constructor() {
    super("Hay varias fichas diferentes para la misma matrícula en la sociedad activa.");
    this.name = "PortalDataAmbiguousError";
  }
}
