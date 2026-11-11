# Diagnóstico de solo lectura del portal

Estado: failed. Motivo: UNSAFE_CHECKPOINT.
Duración: 24.3 s. Consultas iniciadas: 271; completadas: 271; activas: 0; lotes reutilizados: 0.
Referencias completas: 138; pendientes: 3383. Errores: 4; incompletas: 10.

Solo SELECT revisadas y GET WSDL. Sin SQL extraído, operaciones SOAP, LN4 ni escrituras. Los metadatos reutilizados conservan su procedencia; sondeos y WSDL se leen de nuevo. Una consulta lenta no acredita un bloqueo.

| Tarea técnica | Estado | Código |
| --- | --- | --- |
| runner | error | UNSAFE_CHECKPOINT |
| wsdl/CSP_SERVICIO_CV | incomplete | AbortError |
| wsdl/SNTC_AD_MANAGERS | incomplete | AbortError |
| confirm/9c944fd94e2d | error | SQL_8016 |
| confirm/0a9294725fcd | error | SQL_8016 |
| ID_T3/M4ORO_EMPLEADOS | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SCO_MENU | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_BUDGET | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_EVALUATOR | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSE_H_HR_KNC_EXP | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSE_H_HR_VENT_ACTIV_INDIV | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSM_JOB_COMPETENCES | incomplete | DEFINITION_NOT_FOUND |
| confirm/64fb3ba011df | error | SQL_8016 |
| dbo.M4RCH_SENT_ITEMS/ID_TI/f949fee84582/page-0 | incomplete | INTERRUPTED |

## Consultas más lentas

| Tarea | Duración ms | Estado |
| --- | --- | --- |
| schema | 2500 | ok |
| schema/keys | 998 | ok |
| context/permissions | 202 | ok |
| dbo.M4RCH_ITEMS/ID_T3/f4d9abf81b3f/page-0 | 202 | ok |
| dbo.M4RCH_CONNECTORS/ID_T3/73b32b19c8b5/page-0 | 187 | ok |
| dbo.M4RCH_ITEMS_OWR/ID_TI/6b977a65f8fd/page-0 | 173 | ok |
| context | 172 | ok |
| dbo.M4RCH_RULES3/ID_TI/46fc35917e75/page-0 | 155 | ok |
| dbo.M4RCH_ITEMS/ID_T3/9f4e0d82909d/page-0 | 143 | ok |
| dbo.M4RCH_OVERWRITE_NO/ID_T3/9c54788d1c8d/page-0 | 119 | ok |

Versionar los seis archivos de esta carpeta. El diario de reanudación se conserva solo en data/portal-readonly-audit/. La misma orden reanuda metadatos compatibles de ejecuciones incompletas de menos de 24 horas. No se hace commit ni push.
