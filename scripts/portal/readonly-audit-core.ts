/** API del diagnóstico; planificador, ejecución y almacenamiento están separados. */
export { collectReadonlyAudit } from "./readonly-audit-engine";
export { REQUIRED_READ_OBJECTS, auditErrorCode } from "./readonly-audit-model";
export { safeMetadataText } from "./readonly-audit-safety";
export type { AuditRead, AuditRow, AuditTask } from "./readonly-audit-model";
