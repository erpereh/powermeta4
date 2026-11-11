# Diagnóstico de solo lectura del portal

Estado: partial. Motivo: —.
Duración: 98.2 s. Consultas iniciadas: 2740; completadas: 2740; activas: 0; lotes reutilizados: 0.
Referencias procesadas: 5000; pendientes: 0. Errores: 5; incompletas: 22.

Solo SELECT revisadas y GET WSDL. Sin SQL extraído, operaciones SOAP, LN4 ni escrituras. Los metadatos reutilizados conservan su procedencia; sondeos y WSDL se leen de nuevo. Una consulta lenta no acredita un bloqueo.

| Tarea técnica | Estado | Código |
| --- | --- | --- |
| ID_T3/M4ORO_EMPLEADOS | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SCO_MENU | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_BUDGET | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_EVALUATOR | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSE_H_HR_VENT_ACTIV_INDIV | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSM_JOB_COMPETENCES | incomplete | DEFINITION_NOT_FOUND |
| reference-closure | incomplete | REFERENCE_LIMIT |
| ID_TI/SCO_ID_PERSONA_1 | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SCO_AUX_AC_HRPERIOD2_2 | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRCO_PA_HIRE_SEARCH_CLON | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRCO_PA_HIRE_SEARCH_HR_TYPE | incomplete | DEFINITION_NOT_FOUND |
| physical/M4SSP_LG_ENT_ADDRESS | incomplete | TABLE_NOT_FOUND |
| probe/CYC/daf02b486741 | error | SQL_208 |
| probe/CYC/4cba97d94a59 | error | SQL_207 |
| probe/CYC/4345fbd2ef43 | error | SQL_207 |
| probe/CYC/903a223fdf51 | error | SQL_207 |
| probe/CYC/9c745ab6f0a9 | error | SQL_207 |
| probe/IBER/daf02b486741 | incomplete | FAMILY_DEFERRED |
| probe/IBER/4cba97d94a59 | incomplete | FAMILY_DEFERRED |
| probe/IBER/4345fbd2ef43 | incomplete | FAMILY_DEFERRED |
| probe/IBER/903a223fdf51 | incomplete | FAMILY_DEFERRED |
| probe/IBER/9c745ab6f0a9 | incomplete | FAMILY_DEFERRED |
| probe/COLL/daf02b486741 | incomplete | FAMILY_DEFERRED |
| probe/COLL/4cba97d94a59 | incomplete | FAMILY_DEFERRED |
| probe/COLL/4345fbd2ef43 | incomplete | FAMILY_DEFERRED |
| probe/COLL/903a223fdf51 | incomplete | FAMILY_DEFERRED |
| probe/COLL/9c745ab6f0a9 | incomplete | FAMILY_DEFERRED |

## Consultas más lentas

| Tarea | Duración ms | Estado |
| --- | --- | --- |
| dbo.M4RCH_SENT_OBJECTS/ID_OBJECT/cdfcc2a6a485/page-0 | 8009 | ok |
| dbo.M4RCH_SESSION_OBJECTS/ID_OBJECT/e337a9d0f60b/page-0 | 7724 | ok |
| schema | 1485 | ok |
| dbo.M4RCH_RULES3/ID_TI/81effe842fad/page-0 | 875 | ok |
| dbo.M4RCH_ITEM_ARGS/ID_TI/7124ff249d6b/page-0 | 604 | ok |
| dbo.M4RCH_INTERNAL_DEP/ID_TI/5b98f4ae67c6/page-18 | 596 | ok |
| schema/keys | 536 | ok |
| dbo.M4RCH_RULES3/ID_TI/81effe842fad/page-1 | 377 | ok |
| dbo.M4RCH_RULES3/ID_TI/09fb16001f2b/page-0 | 311 | ok |
| dbo.M4RCH_RULES3/ID_TI/d2d91a050f92/page-0 | 236 | ok |

Versionar los seis archivos de esta carpeta. El diario de reanudación se conserva solo en data/portal-readonly-audit/. La misma orden reanuda metadatos compatibles de ejecuciones incompletas de menos de 24 horas. No se hace commit ni push.
