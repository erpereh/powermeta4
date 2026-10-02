# shco_gen_dynfilter_m4def

Identificador: `shco_g0/shco_gen_dynfilter_m4def.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_dynfilter_m4def.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_m4def.jsp) | `29746745b97341c779b541f8f4750d7352f2f3e6b02c927eba25f9fb26db7cf6` |    113 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_dynfilter_m4def.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter_m4def.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable                            | Expresión fuente                                                                           | Resolución estática parcial                                                                                  |
| --- | ----------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 16  | zSAVE_FILTER_OP                     | "01"                                                                                       | 01                                                                                                           |
| 17  | zDELETE_FILTER_OP                   | "02"                                                                                       | 02                                                                                                           |
| 18  | zAPPLY_DYN_FILTER_OP                | "03"                                                                                       | 03                                                                                                           |
| 19  | zDELETE_SENTENCE_OP                 | "04"                                                                                       | 04                                                                                                           |
| 20  | zPARAM_SUB                          | "zdf_sub"                                                                                  | zdf_sub                                                                                                      |
| 21  | zPARAM_M4O                          | "zdf_m4o"                                                                                  | zdf_m4o                                                                                                      |
| 22  | zPARAM_M4OALIAS                     | "zdf_m4oalias"                                                                             | zdf_m4oalias                                                                                                 |
| 23  | zPARAM_RETPAGE                      | "zdf_retpage"                                                                              | zdf_retpage                                                                                                  |
| 24  | zPARAM_RETPAGEWIDTH                 | "zdf_retpagewidth"                                                                         | zdf_retpagewidth                                                                                             |
| 25  | zPARAM_RETPAGEWIDTH_DEF             | "800"                                                                                      | 800                                                                                                          |
| 26  | zPARAM_RETPAGEHEIGHT                | "zdf_retpageheight"                                                                        | zdf_retpageheight                                                                                            |
| 27  | zPARAM_RETPAGEHEIGHT_DEF            | "600"                                                                                      | 600                                                                                                          |
| 28  | zPARAM_APPLYMODE                    | "zdf_applymode"                                                                            | zdf_applymode                                                                                                |
| 29  | zAPPLY_MODE_DEF                     | "1"                                                                                        | 1                                                                                                            |
| 30  | zPARAM_DYNFILTER                    | "zdynfiltersinfo"                                                                          | zdynfiltersinfo                                                                                              |
| 31  | zPARAM_RETMODE                      | "zdf_retmode"                                                                              | zdf_retmode                                                                                                  |
| 32  | zRET_MODE_SUBMIT                    | "1"                                                                                        | 1                                                                                                            |
| 33  | zRET_MODE_RETURNVALUES              | "2"                                                                                        | 2                                                                                                            |
| 34  | zRET_MODE_RETURNVALUES_CALLBACK     | "3"                                                                                        | 3                                                                                                            |
| 35  | zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW | "4"                                                                                        | 4                                                                                                            |
| 37  | zm4object                           | "SHCO_GN_DYNFILTER"                                                                        | SHCO_GN_DYNFILTER                                                                                            |
| 38  | znodoraiz                           | "SHCO_GN_ROOT"                                                                             | SHCO_GN_ROOT                                                                                                 |
| 39  | znodolabel                          | "SHCO_GN_LABEL"                                                                            | SHCO_GN_LABEL                                                                                                |
| 40  | znodocom                            | "SHCO_GN_COMUNICATION"                                                                     | SHCO_GN_COMUNICATION                                                                                         |
| 41  | znodoapi                            | "SHCO_DYNFILTER_API"                                                                       | SHCO_DYNFILTER_API                                                                                           |
| 42  | znododynfilterlist                  | "SHCO_DYNFILTER_LIST"                                                                      | SHCO_DYNFILTER_LIST                                                                                          |
| 44  | zmetodolist                         | "API_LIST_DYN_FILTERS"                                                                     | API_LIST_DYN_FILTERS                                                                                         |
| 45  | zmetodoapply                        | "API_APPLY_DYN_FILTERS"                                                                    | API_APPLY_DYN_FILTERS                                                                                        |
| 46  | zmetodosetparams                    | "API_SET_DYN_FILTERS_PARAMS"                                                               | API_SET_DYN_FILTERS_PARAMS                                                                                   |
| 47  | zmetodosave                         | "API_SAVE_DYN_FILTER"                                                                      | API_SAVE_DYN_FILTER                                                                                          |
| 48  | zmetodosavedynfilter                | "API_SAVE_DYN_FILTER"                                                                      | API_SAVE_DYN_FILTER                                                                                          |
| 49  | zmetodoremovefilter                 | "API_REMOVE_FILTER"                                                                        | API_REMOVE_FILTER                                                                                            |
| 51  | zIdNodeItem                         | "ARG_ID_NODE"                                                                              | ARG_ID_NODE                                                                                                  |
| 52  | zNNodeItem                          | "ARG_N_NODE"                                                                               | ARG_N_NODE                                                                                                   |
| 53  | zIdReadObjetItem                    | "ARG_ID_READ_OBJECT"                                                                       | ARG_ID_READ_OBJECT                                                                                           |
| 54  | zIdScenarioItem                     | "ARG_ID_SCENARIO"                                                                          | ARG_ID_SCENARIO                                                                                              |
| 55  | zFilterLangItem                     | "ARG_LANGUAGE"                                                                             | ARG_LANGUAGE                                                                                                 |
| 56  | zIdSentenceItem                     | "ARG_ID_SENTENCE"                                                                          | ARG_ID_SENTENCE                                                                                              |
| 57  | zApiSqlItem                         | "ARG_API_SQL"                                                                              | ARG_API_SQL                                                                                                  |
| 58  | zListOfScenario                     | "ARG_SCENARIO_LIST"                                                                        | ARG_SCENARIO_LIST                                                                                            |
| 60  | zNodeSubsessionItem                 | "ARG_SUBSESSION_ID"                                                                        | ARG_SUBSESSION_ID                                                                                            |
| 62  | zDynInfoItem                        | "DYN_INFO"                                                                                 | DYN_INFO                                                                                                     |
| 63  | zIdT3                               | "PAR_ID_T3"                                                                                | PAR_ID_T3                                                                                                    |
| 64  | zNT3                                | "PAR_N_T3"                                                                                 | PAR_N_T3                                                                                                     |
| 65  | zIdT3Alias                          | "PAR_ID_T3_ALIAS"                                                                          | PAR_ID_T3_ALIAS                                                                                              |
| 66  | zReturnPageItem                     | "PAR_RETURN_PAGE"                                                                          | PAR_RETURN_PAGE                                                                                              |
| 67  | zReturnPageWidthItem                | "PAR_RETURN_PAGE_WIDTH"                                                                    | PAR_RETURN_PAGE_WIDTH                                                                                        |
| 68  | zReturnPageHeightItem               | "PAR_RETURN_PAGE_HEIGHT"                                                                   | PAR_RETURN_PAGE_HEIGHT                                                                                       |
| 72  | zm4oalias                           | zm4object                                                                                  | SHCO_GN_DYNFILTER                                                                                            |
| 75  | zcomunnodolist                      | znododynfilterlist + ":" + zm4object + "!" + znododynfilterlist + "[&amp;VAR.m4lix]" + "." | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}                   |
| 76  | zraiznodoapi                        | znodoapi + ":" + zm4object + "!" + znodoapi + "."                                          | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}                                         |
| 77  | zraizlabel                          | znodolabel + ":" + zm4object + "!" + znodolabel + "."                                      | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}                                                   |
| 78  | zmovelab                            | znodolabel + ":" + znodolabel + "[0]"                                                      | SHCO_GN_LABEL{":"}SHCO_GN_LABEL{"[0]"}                                                                       |
| 81  | zlIdNodeItem                        | zcomunnodolist + zIdNodeItem                                                               | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_ID_NODE        |
| 82  | zlNNodeItem                         | zcomunnodolist + zNNodeItem                                                                | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_N_NODE         |
| 83  | zlIdReadObjetItem                   | zcomunnodolist + zIdReadObjetItem                                                          | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_ID_READ_OBJECT |
| 84  | zlIdScenarioItem                    | zcomunnodolist + zIdScenarioItem                                                           | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_ID_SCENARIO    |
| 85  | zlFilterLangItem                    | zcomunnodolist + zFilterLangItem                                                           | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_LANGUAGE       |
| 86  | zlIdSentenceItem                    | zcomunnodolist + zIdSentenceItem                                                           | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_ID_SENTENCE    |
| 87  | zlApiSqlItem                        | zcomunnodolist + zApiSqlItem                                                               | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_API_SQL        |
| 88  | zlListOfScenario                    | zcomunnodolist + zListOfScenario                                                           | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_SCENARIO_LIST  |
| 89  | zlNodeSubsessionItem                | zcomunnodolist + zNodeSubsessionItem                                                       | SHCO_DYNFILTER_LIST{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_LIST{"[&amp;VAR.m4lix]"}{"."}ARG_SUBSESSION_ID  |
| 90  | zlDynInfoItem                       | zraiznodoapi + zDynInfoItem                                                                | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}DYN_INFO                                 |
| 91  | zlIdT3Item                          | zraiznodoapi + zIdT3                                                                       | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_ID_T3                                |
| 92  | zlNT3Item                           | zraiznodoapi + zNT3                                                                        | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_N_T3                                 |
| 93  | zlIdT3Alias                         | zraiznodoapi + zIdT3Alias                                                                  | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_ID_T3_ALIAS                          |
| 94  | zlReturnPageItem                    | zraiznodoapi + zReturnPageItem                                                             | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_RETURN_PAGE                          |
| 95  | zlReturnPageWidthItem               | zraiznodoapi + zReturnPageWidthItem                                                        | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_RETURN_PAGE_WIDTH                    |
| 96  | zlReturnPageHeightItem              | zraiznodoapi + zReturnPageHeightItem                                                       | SHCO_DYNFILTER_API{":"}SHCO_GN_DYNFILTER{"!"}SHCO_DYNFILTER_API{"."}PAR_RETURN_PAGE_HEIGHT                   |
| 102 | zSHCO_LB_APPLY_FILTER               | zraizlabel + "SHCO_LB_APPLY_FILTER"                                                        | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_APPLY_FILTER"}                           |
| 103 | zSHCO_LB_SCENARIO                   | zraizlabel + "SHCO_LB_SCENARIO"                                                            | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_SCENARIO"}                               |
| 104 | zSHCOLBCANCEL                       | zraizlabel + "SHCO_LB_CANCEL"                                                              | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CANCEL"}                                 |
| 105 | zSHCOLBFILTER                       | zraizlabel + "SHCO_LB_FILTER"                                                              | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILTER"}                                 |
| 106 | zSHCOLBALLFILTERS                   | zraizlabel + "SHCO_LB_ALLFILTERS"                                                          | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ALLFILTERS"}                             |
| 107 | zSHCOLBINSTEM                       | zraizlabel + "SHCO_LB_INSERT"                                                              | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INSERT"}                                 |
| 108 | zSHCOLBEDITFILTER                   | zraizlabel + "SHCO_LB_EDIT_FILTER"                                                         | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EDIT_FILTER"}                            |
| 109 | zSHCOLBAPPLY                        | zraizlabel + "SHCO_LB_APPLY"                                                               | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_APPLY"}                                  |
| 110 | zSHCOLBPREDFILTER                   | zraizlabel + "SHCO_LB_PRED_FILTER"                                                         | SHCO_GN_LABEL{":"}SHCO_GN_DYNFILTER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PRED_FILTER"}                            |
| 111 | zTab                                | 0                                                                                          | 0                                                                                                            |
| 112 | zCol                                | 0                                                                                          | 0                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73  | if ((zsubsesion == null)&#124;&#124;(zsubsesion.equals(""))) zsubsesion = zm4object + "_SUB";                                                            |
| 73  | expresión de cálculo/transformación: if ((zsubsesion == null)&#124;&#124;(zsubsesion.equals(""))) zsubsesion = zm4object + "_SUB";                       |
| 75  | expresión de cálculo/transformación: String zcomunnodolist = znododynfilterlist + ":" + zm4object + "!" + znododynfilterlist + "[&amp;VAR.m4lix]" + "."; |
| 76  | expresión de cálculo/transformación: String zraiznodoapi = znodoapi + ":" + zm4object + "!" + znodoapi + ".";                                            |
| 77  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";                                          |
| 78  | expresión de cálculo/transformación: String zmovelab = znodolabel + ":" + znodolabel + "[0]";                                                            |
| 81  | expresión de cálculo/transformación: String zlIdNodeItem = zcomunnodolist + zIdNodeItem;                                                                 |
| 82  | expresión de cálculo/transformación: String zlNNodeItem = zcomunnodolist + zNNodeItem;                                                                   |
| 83  | expresión de cálculo/transformación: String zlIdReadObjetItem = zcomunnodolist + zIdReadObjetItem;                                                       |
| 84  | expresión de cálculo/transformación: String zlIdScenarioItem = zcomunnodolist + zIdScenarioItem;                                                         |
| 85  | expresión de cálculo/transformación: String zlFilterLangItem = zcomunnodolist + zFilterLangItem;                                                         |
| 86  | expresión de cálculo/transformación: String zlIdSentenceItem = zcomunnodolist + zIdSentenceItem;                                                         |
| 87  | expresión de cálculo/transformación: String zlApiSqlItem = zcomunnodolist + zApiSqlItem;                                                                 |
| 88  | expresión de cálculo/transformación: String zlListOfScenario = zcomunnodolist + zListOfScenario;                                                         |
| 89  | expresión de cálculo/transformación: String zlNodeSubsessionItem = zcomunnodolist + zNodeSubsessionItem;                                                 |
| 90  | expresión de cálculo/transformación: String zlDynInfoItem = zraiznodoapi + zDynInfoItem;                                                                 |
| 91  | expresión de cálculo/transformación: String zlIdT3Item = zraiznodoapi + zIdT3;                                                                           |
| 92  | expresión de cálculo/transformación: String zlNT3Item = zraiznodoapi + zNT3;                                                                             |
| 93  | expresión de cálculo/transformación: String zlIdT3Alias = zraiznodoapi + zIdT3Alias;                                                                     |
| 94  | expresión de cálculo/transformación: String zlReturnPageItem = zraiznodoapi + zReturnPageItem;                                                           |
| 95  | expresión de cálculo/transformación: String zlReturnPageWidthItem = zraiznodoapi + zReturnPageWidthItem;                                                 |
| 96  | expresión de cálculo/transformación: String zlReturnPageHeightItem = zraiznodoapi + zReturnPageHeightItem;                                               |
| 102 | expresión de cálculo/transformación: String zSHCO_LB_APPLY_FILTER = zraizlabel + "SHCO_LB_APPLY_FILTER";                                                 |
| 103 | expresión de cálculo/transformación: String zSHCO_LB_SCENARIO = zraizlabel + "SHCO_LB_SCENARIO";                                                         |
| 104 | expresión de cálculo/transformación: String zSHCOLBCANCEL= zraizlabel + "SHCO_LB_CANCEL";                                                                |
| 105 | expresión de cálculo/transformación: String zSHCOLBFILTER= zraizlabel + "SHCO_LB_FILTER";                                                                |
| 106 | expresión de cálculo/transformación: String zSHCOLBALLFILTERS = zraizlabel + "SHCO_LB_ALLFILTERS";                                                       |
| 107 | expresión de cálculo/transformación: String zSHCOLBINSTEM = zraizlabel + "SHCO_LB_INSERT";                                                               |
| 108 | expresión de cálculo/transformación: String zSHCOLBEDITFILTER = zraizlabel + "SHCO_LB_EDIT_FILTER";                                                      |
| 109 | expresión de cálculo/transformación: String zSHCOLBAPPLY = zraizlabel + "SHCO_LB_APPLY";                                                                 |
| 110 | expresión de cálculo/transformación: String zSHCOLBPREDFILTER = zraizlabel + "SHCO_LB_PRED_FILTER";                                                      |

### Includes, navegación y dependencias

| L   | Include                       |
| --- | ----------------------------- |
| 100 | ../shco_g0/shco_gen_label.jsp |

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 100 | ../shco_g0/shco_gen_label.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                    | Resolución | Ficha / candidato                                        |
| ------ | --- | ----------------------------- | ---------- | -------------------------------------------------------- |
| BASE   | 100 | ../shco_g0/shco_gen_label.jsp | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md) |
| BASE   | 100 | ../shco_g0/shco_gen_label.jsp | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_dynfilter_m4def.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
