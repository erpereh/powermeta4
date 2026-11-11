# Diagnóstico de solo lectura del portal

Estado: running. Motivo: —.
Duración: 193.8 s. Consultas iniciadas: 1153; completadas: 1151; activas: 2; lotes reutilizados: 6028.
Referencias procesadas: 20256; pendientes: 8537. Errores: 3; incompletas: 32.

Solo SELECT revisadas y GET WSDL. Sin SQL extraído, operaciones SOAP, LN4 ni escrituras. Los metadatos reutilizados conservan su procedencia; sondeos y WSDL se leen de nuevo. Una consulta lenta no acredita un bloqueo.

| Tarea técnica | Estado | Código |
| --- | --- | --- |
| ID_T3/M4ORO_EMPLEADOS | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SCO_MENU | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_BUDGET | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SMCO_EVALUATOR | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSE_H_HR_VENT_ACTIV_INDIV | incomplete | DEFINITION_NOT_FOUND |
| ID_T3/SSM_JOB_COMPETENCES | incomplete | DEFINITION_NOT_FOUND |
| ID_SENTENCE/SSE_MAIL | incomplete | DEFINITION_NOT_FOUND |
| ID_SENTENCE/SSM_RECRUIT_PRO | incomplete | DEFINITION_NOT_FOUND |
| dbo.M4RCH_SENT_CALCULU/ID_SENTENCE/d053e39b4ecf/page-0 | error | QUERY_TIMEOUT |
| ID_SENTENCE/SSP_ACUM_SS_AUX_1 | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SCO_HR_PERIOD_INCI | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SCO_ID_PERSONA_1 | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SCO_JS_HR_PERIOD | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRCO_PA_HIRE_SEARCH_CLON | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRCO_PA_HIRE_SEARCH_HR_TYPE | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRCO_PTL_POPULATION | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SRSP_ACCIONES_AFI_1 | incomplete | DEFINITION_NOT_FOUND |
| dbo.M4RCH_RULES3/ID_TI/966080664b7c | error | UNSAFE_CHECKPOINT |
| dbo.M4RCH_SENTENCES3/ID_SENTENCE/71b4e46a5be5/page-0 | error | QUERY_TIMEOUT |
| ID_OBJECT/M4RWF_BPO | incomplete | DEFINITION_NOT_FOUND |
| ID_OBJECT/M4RWF_INST_TASK | incomplete | DEFINITION_NOT_FOUND |
| ID_OBJECT/M4RWF_WORKITEM | incomplete | DEFINITION_NOT_FOUND |
| ID_OBJECT/PLCO_ADT_HT_MED_CHECKUP | incomplete | DEFINITION_NOT_FOUND |
| ID_OBJECT/SCO_CS_NOTES | incomplete | DEFINITION_NOT_FOUND |
| ID_OBJECT/SCO_CS_QUESTION | incomplete | DEFINITION_NOT_FOUND |
| ID_SENTENCE/META_CHANNEL_T3S_READ | incomplete | DEFINITION_NOT_FOUND |
| ID_SENTENCE/SCO_HR_CONS_LVL | incomplete | DEFINITION_NOT_FOUND |
| ID_SENTENCE/TEST_WIZARD_1_IH | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SAV_PARAMS | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SCO_AUX_AC_HRPERIOD2_2 | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SFR_RP_PROVIDERS | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SHCO_SE_POPULATION | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SHCO_SE_POPULATION_AUX | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SHCO_SE_POPULATION_PER | incomplete | DEFINITION_NOT_FOUND |
| ID_TI/SSP_TR_HR_PERIOD_BAJAS | incomplete | DEFINITION_NOT_FOUND |

## Consultas más lentas

| Tarea | Duración ms | Estado |
| --- | --- | --- |
| dbo.M4RCH_SENT_CALCULU/ID_SENTENCE/d053e39b4ecf/page-0 | 22633 | QUERY_TIMEOUT |
| dbo.M4RCH_SENTENCES3/ID_SENTENCE/71b4e46a5be5/page-0 | 17896 | QUERY_TIMEOUT |
| dbo.M4RCH_SENTENCES2/ID_SENTENCE/d045664621cf/page-0 | 17833 | ok |
| dbo.M4RCH_RULES3/ID_TI/966080664b7c/page-0 | 12767 | ok |
| schema | 1810 | ok |
| dbo.M4RDC_SENT_CLC_SHARED/ID_SENTENCE/a9182770c091/page-0 | 684 | ok |
| schema/keys | 571 | ok |
| dbo.M4RCH_ITEMS1/ID_TI/85bf638752fa/page-1 | 400 | ok |
| dbo.M4RCH_ITEM_ARGS/ID_OBJECT/8de7549e300a/page-0 | 260 | ok |
| dbo.M4RCH_NODES1/ID_T3/79159eebc164/page-0 | 209 | ok |

Versionar los seis archivos de esta carpeta. El diario de reanudación se conserva solo en data/portal-readonly-audit/. La misma orden reanuda metadatos compatibles de ejecuciones incompletas de menos de 24 horas. No se hace commit ni push.
