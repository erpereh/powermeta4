# shco_gen_htmlfilter_act

Identificador: `shco_g0/shco_gen_htmlfilter_act.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_htmlfilter_act.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_htmlfilter_act.jsp) | `75c359eea5425a0557c73431f10c19ef5b1022bb923c9e87714bd27458092284` |    103 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_htmlfilter_act.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_htmlfilter_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente    | Resolución estática parcial |
| --- | ---------------- | ------------------- | --------------------------- |
| 22  | zMethodGetFilter | sItemAPI_GET_FILTER | sItemAPI_GET_FILTER         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 10  | m4:startpage | m4task=zsubsesion                                                                                                               |
| 11  | m4:beginjob  |                                                                                                                                 |
| 18  | m4:datadef   | m4o=sM4HtmlFilterCL; m4name=sM4HtmlFilterCLAlias                                                                                |
| 20  | m4:datadef   | m4o=sM4HtmlFilterCL; m4name=sM4HtmlFilterCLAlias; m4find=TRUE                                                                   |
| 26  | m4:exec      | alias=sItemAPI_GET_FILTER; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_GET_FILTER                 |
| 27  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 28  | m4:param     | name=P_SID_ESCENARIO; value=sIdEscenario                                                                                        |
| 29  | m4:param     | name=P_SID_TABLE; value=sIdTable                                                                                                |
| 30  | m4:param     | name=P_RELATION_TYPE; value=sIdRelationType                                                                                     |
| 32  | m4:param     | name=P_RELOAD_SENTENCE; value=sReloadSentence                                                                                   |
| 38  | m4:exec      | alias=sItemAPI_SET_FILTER; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_SET_FILTER                 |
| 39  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 40  | m4:param     | name=ARG_CANCEL; value=zcancel                                                                                                  |
| 43  | m4:exec      | alias=sItemAPI_SAVE_PRED_FILTER; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_SAVE_PRED_FILTER     |
| 44  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 45  | m4:param     | name=P_SN_SENTENCE; value=sNSentence                                                                                            |
| 46  | m4:param     | name=ARG_CANCEL; value=zcancel                                                                                                  |
| 49  | m4:exec      | alias=sItemAPI_DELETE_PRED_FILTER; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_DELETE_PRED_FILTER |
| 50  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 53  | m4:exec      | alias=sItemAPI_GET_DETAIL; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_GET_DETAIL                 |
| 54  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 55  | m4:param     | name=P_IID_DETAIL; value=sIdDetail                                                                                              |
| 58  | m4:exec      | alias=sItemAPI_SET_DETAIL; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_SET_DETAIL                 |
| 59  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 60  | m4:param     | name=P_IID_DETAIL; value=sIdDetail                                                                                              |
| 61  | m4:param     | name=P_SDETAIL_GEN_INFO; value=sFilterDetailGenInfo                                                                             |
| 62  | m4:param     | name=P_SDETAIL_RIGHT_TUPLA; value=sFilterDetailRightInfo                                                                        |
| 63  | m4:param     | name=P_SDETAIL_LEFT_TUPLA; value=sFilterDetailLeftInfo                                                                          |
| 66  | m4:exec      | alias=sItemAPI_DELETE_DETAIL; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_DELETE_DETAIL           |
| 67  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 68  | m4:param     | name=P_IID_DETAIL; value=sIdDetail                                                                                              |
| 71  | m4:exec      | alias=sItemAPI_GET_TABLE_FIELDS; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_GET_TABLE_FIELDS     |
| 72  | m4:param     | name=P_STABLE_INFO; value=sIdTable                                                                                              |
| 73  | m4:param     | name=P_IWHICH_TABLE; value=sRigthLeftTable                                                                                      |
| 76  | m4:exec      | alias=sItemAPI_PERSIST_FILTERS; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_PERSIST_FILTERS       |
| 79  | m4:exec      | alias=sItemAPI_REMOVE_FILTER; m4object=sM4HtmlFilterCLAlias; node=sNodeAPI_FILTER_HTML; method=sItemAPI_REMOVE_FILTER           |
| 80  | m4:param     | name=P_SID_SENTENCE; value=sIdSentence                                                                                          |
| 85  | m4:outputdef | m4alias=sOutputAdvancedOperators; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_OP_ADVANCED; records=*                           |
| 86  | m4:outputdef | m4alias=sOutputGroupCloseOperators; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_OP_AGR_CLOSE; records=*                        |
| 87  | m4:outputdef | m4alias=sOutputGroupOpenOperators; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_OP_AGR_OPEN; records=*                          |
| 88  | m4:outputdef | m4alias=sOutputLogicOperators; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_OP_LOG; records=*                                   |
| 89  | m4:outputdef | m4alias=sOutputRelationalOperators; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_OP_REL; records=*                              |
| 91  | m4:outputdef | m4alias=sOutputFilterTables; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_DIC_TABLES; records=*                                 |
| 94  | m4:outputdef | m4alias=sOutputFilterDetailInfo; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_DETAIL_INFO; records=*                            |
| 95  | m4:outputdef | m4alias=sOutputFilterDetailRightInfo; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_RIGHT_DETAIL; records=*                      |
| 96  | m4:outputdef | m4alias=sOutputFilterDetailLeftInfo; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_LEFT_DETAIL; records=*                        |
| 98  | m4:outputdef | m4alias=sOutputFilterAllDetails; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_DETAIL_LIST_R; records=*                          |
| 100 | m4:outputdef | m4alias=sOutputFilterNatLanguage; m4object=sM4HtmlFilterCLAlias; node=sNodeFLT_FILTER_INFO; records=*                           |
| 101 | m4:outputdef | m4alias=sNodeSHCO_GN_LABEL; m4object=sM4HtmlFilterCLAlias; node=sNodeSHCO_GN_LABEL; records=*                                   |
| 102 | m4:outputdef | m4alias=sNodeSHCO_GN_COMUNICATION; m4object=sM4HtmlFilterCLAlias; node=sNodeSHCO_GN_COMUNICATION; records=*                     |
| 103 | m4:endjob    |                                                                                                                                 |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                 |
| --- | ---------------------------------------------------------------------------------------------------- |
| 16  | &lt;% if (sIdOperation.equals(sAPI_GET_FILTER)&#124;&#124; sIdOperation.equals(sAPI_GET_FILTER_EX)){ |
| 17  | if (zhtmlfilterinstance == null){%&gt;                                                               |
| 19  | &lt;%}else{%&gt;                                                                                     |
| 23  | if (sIdOperation.equals(sAPI_GET_FILTER_EX)){                                                        |
| 31  | &lt;%if (sIdOperation.equals(sAPI_GET_FILTER_EX)){%&gt;                                              |
| 37  | &lt;% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %&gt;                                              |
| 42  | &lt;%}else if (sIdOperation.equals(sAPI_SAVE_PRED_FILTER) ){ %&gt;                                   |
| 48  | &lt;%}else if (sIdOperation.equals(sAPI_DELETE_PRED_FILTER) ){ %&gt;                                 |
| 52  | &lt;%}else if (sIdOperation.equals(sAPI_GET_DETAIL) ){ %&gt;                                         |
| 57  | &lt;%}else if (sIdOperation.equals(sAPI_SET_DETAIL) ){ %&gt;                                         |
| 65  | &lt;%}else if (sIdOperation.equals(sAPI_DELETE_DETAIL) ){ %&gt;                                      |
| 70  | &lt;%}else if (sIdOperation.equals(sAPI_GET_TABLE_FIELDS) ){ %&gt;                                   |
| 75  | &lt;%}else if (sIdOperation.equals(sAPI_PERSIST_FILTERS) ){ %&gt;                                    |
| 78  | &lt;%}else if (sIdOperation.equals(sAPI_REMOVE_FILTER) ){ %&gt;                                      |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_htmlfilter_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
