# htmlfilterjob

Identificador: `tchtmlfilter/htmlfilterjob.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tchtmlfilter/htmlfilterjob.jsp](../../../../clon_portal/portal/tchtmlfilter/htmlfilterjob.jsp) | `ddacb10921eb00c3c9cf4a292026b0707f0114f96307d7c4abb0c53065d333da` |    300 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tchtmlfilter/htmlfilterjob.jsp](../../../../clon_portal/portal/tchtmlfilter/htmlfilterjob.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave             | Acceso literal                              |
| --- | --------------------------- | ------------------------------------------- |
| 132 | zidoperation                | getParameter("zidoperation")                |
| 133 | zidsentence                 | getParameter("zidsentence")                 |
| 134 | zidescenario                | getParameter("zidescenario")                |
| 135 | zidtable                    | getParameter("zidtable")                    |
| 136 | zreturnpage                 | getParameter("zreturnpage")                 |
| 137 | zidrelationtype             | getParameter("zidrelationtype")             |
| 138 | zhtmlfilterinstance         | getParameter("zhtmlfilterinstance")         |
| 140 | zcancel                     | getParameter("zcancel")                     |
| 142 | txtIdDetail                 | getParameter("txtIdDetail")                 |
| 143 | txtDetailGenInfo            | getParameter("txtDetailGenInfo")            |
| 144 | txtDetailRightInfo          | getParameter("txtDetailRightInfo")          |
| 145 | txtDetailLeftInfo           | getParameter("txtDetailLeftInfo")           |
| 147 | RigthLeftTable              | getParameter("RigthLeftTable")              |
| 148 | lastIdDetailSelected        | getParameter("lastIdDetailSelected")        |
| 149 | lastUsingExist              | getParameter("lastUsingExist")              |
| 150 | lastAgrupOpOpenSelected     | getParameter("lastAgrupOpOpenSelected")     |
| 151 | lastRelOpSelected           | getParameter("lastRelOpSelected")           |
| 152 | lastLogicOpSelected         | getParameter("lastLogicOpSelected")         |
| 153 | lastAgrupOpCloseSelected    | getParameter("lastAgrupOpCloseSelected")    |
| 154 | lastLeftTableSelected       | getParameter("lastLeftTableSelected")       |
| 155 | lastLeftTableFieldSelected  | getParameter("lastLeftTableFieldSelected")  |
| 156 | lastRigthTableSelected      | getParameter("lastRigthTableSelected")      |
| 157 | lastRigthTableFieldSelected | getParameter("lastRigthTableFieldSelected") |
| 158 | lastRigthValueSelected      | getParameter("lastRigthValueSelected")      |
| 159 | lastRadRightFieldValueIndex | getParameter("lastRadRightFieldValueIndex") |
| 160 | zdynfilteralias             | getParameter("zdynfilteralias")             |

| L   | Variable                       | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | ------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 24  | sAPI_GET_FILTER                | "API_GET_FILTER"                                                    | API_GET_FILTER                                                      |
| 25  | sAPI_SET_FILTER                | "API_SET_FILTER"                                                    | API_SET_FILTER                                                      |
| 26  | sAPI_GET_DETAIL                | "API_GET_DETAIL"                                                    | API_GET_DETAIL                                                      |
| 27  | sAPI_SET_DETAIL                | "API_SET_DETAIL"                                                    | API_SET_DETAIL                                                      |
| 28  | sAPI_DELETE_DETAIL             | "API_DELETE_DETAIL"                                                 | API_DELETE_DETAIL                                                   |
| 29  | sAPI_GET_TABLE_FIELDS          | "API_GET_TABLE_FIELDS"                                              | API_GET_TABLE_FIELDS                                                |
| 30  | sAPI_PERSIST_FILTERS           | "API_PERSIST_FILTERS"                                               | API_PERSIST_FILTERS                                                 |
| 31  | sAPI_REMOVE_FILTER             | "API_REMOVE_FILTER"                                                 | API_REMOVE_FILTER                                                   |
| 35  | sSubsession                    | "HtmlFilter"                                                        | HtmlFilter                                                          |
| 38  | sM4HtmlFilterCL                | "API_FILTER_HTML_CL"                                                | API_FILTER_HTML_CL                                                  |
| 39  | sM4HtmlFilterCLAlias           | "HtmlFilterCL"                                                      | HtmlFilterCL                                                        |
| 41  | sNodeAPI_FILTER_HTML           | "API_FILTER_HTML"                                                   | API_FILTER_HTML                                                     |
| 42  | sNodeFLT_FILTER_INFO           | "FLT_FILTER_INFO"                                                   | FLT_FILTER_INFO                                                     |
| 43  | sNodeFLT_DETAIL_LIST_R         | "FLT_DETAIL_LIST_R"                                                 | FLT_DETAIL_LIST_R                                                   |
| 44  | sNodeFLT_DETAIL_INFO           | "FLT_DETAIL_INFO"                                                   | FLT_DETAIL_INFO                                                     |
| 45  | sNodeFLT_LEFT_DETAIL           | "FLT_LEFT_DETAIL"                                                   | FLT_LEFT_DETAIL                                                     |
| 46  | sNodeFLT_RIGHT_DETAIL          | "FLT_RIGHT_DETAIL"                                                  | FLT_RIGHT_DETAIL                                                    |
| 47  | sNodeFLT_DIC_TABLES            | "FLT_DIC_TABLES"                                                    | FLT_DIC_TABLES                                                      |
| 48  | sNodeFLT_DETAIL_LEFT_FIELDS    | "FLT_DETAIL_LEFT_FIELDS"                                            | FLT_DETAIL_LEFT_FIELDS                                              |
| 49  | sNodeFLT_DETAIL_RIGHT_FIELDS   | "FLT_DETAIL_RIGHT_FIELDS"                                           | FLT_DETAIL_RIGHT_FIELDS                                             |
| 50  | sNodeFLT_OP_ADVANCED           | "FLT_OP_ADVANCED"                                                   | FLT_OP_ADVANCED                                                     |
| 51  | sNodeFLT_OP_AGR_CLOSE          | "FLT_OP_AGR_CLOSE"                                                  | FLT_OP_AGR_CLOSE                                                    |
| 52  | sNodeFLT_OP_AGR_OPEN           | "FLT_OP_AGR_OPEN"                                                   | FLT_OP_AGR_OPEN                                                     |
| 53  | sNodeFLT_OP_LOG                | "FLT_OP_LOG"                                                        | FLT_OP_LOG                                                          |
| 54  | sNodeFLT_OP_REL                | "FLT_OP_REL"                                                        | FLT_OP_REL                                                          |
| 57  | sItemAPI_GET_FILTER            | "API_GET_FILTER"                                                    | API_GET_FILTER                                                      |
| 58  | sItemAPI_SET_FILTER            | "API_SET_FILTER"                                                    | API_SET_FILTER                                                      |
| 59  | sItemAPI_GET_DETAIL            | "API_GET_DETAIL"                                                    | API_GET_DETAIL                                                      |
| 60  | sItemAPI_SET_DETAIL            | "API_SET_DETAIL"                                                    | API_SET_DETAIL                                                      |
| 61  | sItemAPI_DELETE_DETAIL         | "API_DELETE_DETAIL"                                                 | API_DELETE_DETAIL                                                   |
| 62  | sItemAPI_GET_TABLE_FIELDS      | "API_GET_TABLE_FIELDS"                                              | API_GET_TABLE_FIELDS                                                |
| 63  | sItemAPI_PERSIST_FILTERS       | "API_PERSIST_FILTERS"                                               | API_PERSIST_FILTERS                                                 |
| 64  | sItemAPI_REMOVE_FILTER         | "API_REMOVE_FILTER"                                                 | API_REMOVE_FILTER                                                   |
| 68  | sItemOPERATOR                  | "OPERATOR"                                                          | OPERATOR                                                            |
| 69  | sItemOPERATORDESC              | "DESCRIPTION"                                                       | DESCRIPTION                                                         |
| 70  | sItemID_OPERATOR               | "ID_OPERATOR"                                                       | ID_OPERATOR                                                         |
| 71  | sItemOPERATOR_TYPE             | "OPERATOR_TYPE"                                                     | OPERATOR_TYPE                                                       |
| 72  | sItemOP_REL_GEN_TYPE           | "PROP_GEN_TYPE"                                                     | PROP_GEN_TYPE                                                       |
| 77  | sItemPROP_OP_AGR_OPEN          | "PROP_OP_AGR_OPEN"                                                  | PROP_OP_AGR_OPEN                                                    |
| 78  | sItemPROP_OP_ADV               | "PROP_OP_ADV"                                                       | PROP_OP_ADV                                                         |
| 79  | sItemPROP_ID_DETAIL_IN_EDITION | "PROP_ID_DETAIL_IN_EDITION"                                         | PROP_ID_DETAIL_IN_EDITION                                           |
| 80  | sItemPROP_OP_REL               | "PROP_OP_REL"                                                       | PROP_OP_REL                                                         |
| 81  | sItemPROP_OP_AGR_CLOSE         | "PROP_OP_AGR_CLOSE"                                                 | PROP_OP_AGR_CLOSE                                                   |
| 82  | sItemPROP_OP_LOG               | "PROP_OP_LOG"                                                       | PROP_OP_LOG                                                         |
| 87  | sItemPROP_ID_TABLE_TRANSLATED  | "PROP_ID_TABLE_TRANSLATED"                                          | PROP_ID_TABLE_TRANSLATED                                            |
| 88  | sItemPROP_FIELD_TRANSLATED     | "PROP_FIELD_TRANSLATED"                                             | PROP_FIELD_TRANSLATED                                               |
| 89  | sItemPROP_VALUE                | "PROP_VALUE"                                                        | PROP_VALUE                                                          |
| 93  | sItemID_TRANSLATED_OBJ         | "ID_TRANSLATED_OBJ"                                                 | ID_TRANSLATED_OBJ                                                   |
| 94  | sItemTABLE_INFO                | "TABLE_INFO"                                                        | TABLE_INFO                                                          |
| 97  | sItemID_TRANSLATED_FLD         | "ID_TRANSLATED_FLD"                                                 | ID_TRANSLATED_FLD                                                   |
| 98  | sItemID_FIELD                  | "ID_FIELD"                                                          | ID_FIELD                                                            |
| 99  | sItemPROP_GEN_TYPE             | "PROP_GEN_TYPE"                                                     | PROP_GEN_TYPE                                                       |
| 104 | sItemPROP_ID_DETAIL            | "PROP_ID_DETAIL"                                                    | PROP_ID_DETAIL                                                      |
| 105 | sItemPROP_NAT_LANG             | "PROP_NAT_LANG"                                                     | PROP_NAT_LANG                                                       |
| 108 | sItemPROP_NATURAL_LANG         | "PROP_NATURAL_LANG"                                                 | PROP_NATURAL_LANG                                                   |
| 109 | sItemPROP_APISQL               | "PROP_APISQL_HTML"                                                  | PROP_APISQL_HTML                                                    |
| 110 | sItemPROP_ID_SENTENCE          | "PROP_ID_SENTENCE"                                                  | PROP_ID_SENTENCE                                                    |
| 111 | sItemPROP_IS_SYNTAX_OK         | "PROP_IS_SYNTAX_OK"                                                 | PROP_IS_SYNTAX_OK                                                   |
| 113 | sOutputFilterNatLanguage       | "FilterNatLanguage"                                                 | FilterNatLanguage                                                   |
| 114 | sOutputFilterAllDetails        | "FilterAllDetails"                                                  | FilterAllDetails                                                    |
| 115 | sOutputFilterDetailInfo        | "FilterDetailInfo"                                                  | FilterDetailInfo                                                    |
| 116 | sOutputFilterDetailRightInfo   | "FilterDetailRightInfo"                                             | FilterDetailRightInfo                                               |
| 117 | sOutputFilterDetailLeftInfo    | "FilterDetailLeftInfo"                                              | FilterDetailLeftInfo                                                |
| 118 | sOutputAdvancedOperators       | "AdvancedOperators"                                                 | AdvancedOperators                                                   |
| 119 | sOutputGroupOpenOperators      | "GroupOpenOperators"                                                | GroupOpenOperators                                                  |
| 120 | sOutputGroupCloseOperators     | "GroupCloseOperators"                                               | GroupCloseOperators                                                 |
| 121 | sOutputLogicOperators          | "LogicOperators"                                                    | LogicOperators                                                      |
| 122 | sOutputRelationalOperators     | "RelationalOperators"                                               | RelationalOperators                                                 |
| 123 | sOutputFilterTables            | "FilterTables"                                                      | FilterTables                                                        |
| 124 | sOutputFilterLeftTableFields   | "FilterLeftTableFields"                                             | FilterLeftTableFields                                               |
| 125 | sOutputFilterRigthTableFields  | "FilterRigthTableFields"                                            | FilterRigthTableFields                                              |
| 132 | sIdOperation                   | getStringValue(request.getParameter("zidoperation"))                | getStringValue(request.getParameter("zidoperation"))                |
| 133 | sIdSentence                    | getStringValue(request.getParameter("zidsentence"))                 | getStringValue(request.getParameter("zidsentence"))                 |
| 134 | sIdEscenario                   | getStringValue(request.getParameter("zidescenario"))                | getStringValue(request.getParameter("zidescenario"))                |
| 135 | sIdTable                       | getStringValue(request.getParameter("zidtable"))                    | getStringValue(request.getParameter("zidtable"))                    |
| 136 | sDireccion                     | getStringValue(request.getParameter("zreturnpage"))                 | getStringValue(request.getParameter("zreturnpage"))                 |
| 137 | sIdRelationType                | getStringValue(request.getParameter("zidrelationtype"))             | getStringValue(request.getParameter("zidrelationtype"))             |
| 138 | zhtmlfilterinstance            | getStringValue(request.getParameter("zhtmlfilterinstance"))         | getStringValue(request.getParameter("zhtmlfilterinstance"))         |
| 140 | zcancel                        | getStringValue(request.getParameter("zcancel"))                     | getStringValue(request.getParameter("zcancel"))                     |
| 142 | sIdDetail                      | getStringValue(request.getParameter("txtIdDetail"))                 | getStringValue(request.getParameter("txtIdDetail"))                 |
| 143 | sFilterDetailGenInfo           | getStringValue(request.getParameter("txtDetailGenInfo"))            | getStringValue(request.getParameter("txtDetailGenInfo"))            |
| 144 | sFilterDetailRightInfo         | getStringValue(request.getParameter("txtDetailRightInfo"))          | getStringValue(request.getParameter("txtDetailRightInfo"))          |
| 145 | sFilterDetailLeftInfo          | getStringValue(request.getParameter("txtDetailLeftInfo"))           | getStringValue(request.getParameter("txtDetailLeftInfo"))           |
| 147 | sRigthLeftTable                | getStringValue(request.getParameter("RigthLeftTable"))              | getStringValue(request.getParameter("RigthLeftTable"))              |
| 148 | sLastIdDetailSelected          | getStringValue(request.getParameter("lastIdDetailSelected"))        | getStringValue(request.getParameter("lastIdDetailSelected"))        |
| 149 | sLastUsingExist                | getStringValue(request.getParameter("lastUsingExist"))              | getStringValue(request.getParameter("lastUsingExist"))              |
| 150 | sLastSelAgrupOpOpenSelected    | getStringValue(request.getParameter("lastAgrupOpOpenSelected"))     | getStringValue(request.getParameter("lastAgrupOpOpenSelected"))     |
| 151 | sLastRelOpSelected             | getStringValue(request.getParameter("lastRelOpSelected"))           | getStringValue(request.getParameter("lastRelOpSelected"))           |
| 152 | sLastLogicOpSelected           | getStringValue(request.getParameter("lastLogicOpSelected"))         | getStringValue(request.getParameter("lastLogicOpSelected"))         |
| 153 | sLastAgrupOpCloseSelected      | getStringValue(request.getParameter("lastAgrupOpCloseSelected"))    | getStringValue(request.getParameter("lastAgrupOpCloseSelected"))    |
| 154 | sLastLeftTableSelected         | getStringValue(request.getParameter("lastLeftTableSelected"))       | getStringValue(request.getParameter("lastLeftTableSelected"))       |
| 155 | sLastLeftTableFieldSelected    | getStringValue(request.getParameter("lastLeftTableFieldSelected"))  | getStringValue(request.getParameter("lastLeftTableFieldSelected"))  |
| 156 | sLastRigthTableSelected        | getStringValue(request.getParameter("lastRigthTableSelected"))      | getStringValue(request.getParameter("lastRigthTableSelected"))      |
| 157 | sLastRigthTableFieldSelected   | getStringValue(request.getParameter("lastRigthTableFieldSelected")) | getStringValue(request.getParameter("lastRigthTableFieldSelected")) |
| 158 | sLastRigthValueSelected        | getStringValue(request.getParameter("lastRigthValueSelected"))      | getStringValue(request.getParameter("lastRigthValueSelected"))      |
| 159 | slastRadRightFieldValueIndex   | getStringValue(request.getParameter("lastRadRightFieldValueIndex")) | getStringValue(request.getParameter("lastRadRightFieldValueIndex")) |
| 160 | zdynfilteralias                | getStringValue(request.getParameter("zdynfilteralias"))             | getStringValue(request.getParameter("zdynfilteralias"))             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------- |
| 166 | m4:beginjob  |                                                                                                      |
| 177 | m4:datadef   | m4o=API_FILTER_HTML_CL; m4name=HtmlFilterCL                                                          |
| 179 | m4:datadef   | m4o=getStringValue(request.getParameter("zhtmlfilterinstance")); m4name=HtmlFilterCL; m4find=TRUE    |
| 182 | m4:exec      | alias=API_GET_FILTER; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_GET_FILTER             |
| 183 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 184 | m4:param     | name=P_SID_ESCENARIO; value=getStringValue(request.getParameter("zidescenario"))                     |
| 185 | m4:param     | name=P_SID_TABLE; value=getStringValue(request.getParameter("zidtable"))                             |
| 186 | m4:param     | name=P_RELATION_TYPE; value=getStringValue(request.getParameter("zidrelationtype"))                  |
| 193 | m4:exec      | alias=API_SET_FILTER; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_SET_FILTER             |
| 194 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 195 | m4:param     | name=ARG_SENTENCE; value=getStringValue(request.getParameter("zcancel"))                             |
| 204 | m4:exec      | alias=API_GET_DETAIL; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_GET_DETAIL             |
| 205 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 206 | m4:param     | name=P_IID_DETAIL; value=getStringValue(request.getParameter("txtIdDetail"))                         |
| 215 | m4:exec      | alias=API_SET_DETAIL; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_SET_DETAIL             |
| 216 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 217 | m4:param     | name=P_IID_DETAIL; value=getStringValue(request.getParameter("txtIdDetail"))                         |
| 218 | m4:param     | name=P_SDETAIL_GEN_INFO; value=getStringValue(request.getParameter("txtDetailGenInfo"))              |
| 219 | m4:param     | name=P_SDETAIL_RIGHT_TUPLA; value=getStringValue(request.getParameter("txtDetailRightInfo"))         |
| 220 | m4:param     | name=P_SDETAIL_LEFT_TUPLA; value=getStringValue(request.getParameter("txtDetailLeftInfo"))           |
| 229 | m4:exec      | alias=API_DELETE_DETAIL; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_DELETE_DETAIL       |
| 230 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 231 | m4:param     | name=P_IID_DETAIL; value=getStringValue(request.getParameter("txtIdDetail"))                         |
| 237 | m4:exec      | alias=API_GET_TABLE_FIELDS; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_GET_TABLE_FIELDS |
| 238 | m4:param     | name=P_STABLE_INFO; value=getStringValue(request.getParameter("zidtable"))                           |
| 239 | m4:param     | name=P_IWHICH_TABLE; value=getStringValue(request.getParameter("RigthLeftTable"))                    |
| 245 | m4:exec      | alias=API_PERSIST_FILTERS; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_PERSIST_FILTERS   |
| 252 | m4:exec      | alias=API_REMOVE_FILTER; m4object=HtmlFilterCL; node=API_FILTER_HTML; method=API_REMOVE_FILTER       |
| 253 | m4:param     | name=P_SID_SENTENCE; value=getStringValue(request.getParameter("zidsentence"))                       |
| 268 | m4:outputdef | m4alias=AdvancedOperators; m4object=HtmlFilterCL; node=FLT_OP_ADVANCED; records=*                    |
| 269 | m4:outputdef | m4alias=GroupCloseOperators; m4object=HtmlFilterCL; node=FLT_OP_AGR_CLOSE; records=*                 |
| 270 | m4:outputdef | m4alias=GroupOpenOperators; m4object=HtmlFilterCL; node=FLT_OP_AGR_OPEN; records=*                   |
| 271 | m4:outputdef | m4alias=LogicOperators; m4object=HtmlFilterCL; node=FLT_OP_LOG; records=*                            |
| 272 | m4:outputdef | m4alias=RelationalOperators; m4object=HtmlFilterCL; node=FLT_OP_REL; records=*                       |
| 277 | m4:outputdef | m4alias=FilterTables; m4object=HtmlFilterCL; node=FLT_DIC_TABLES; records=*                          |
| 278 | m4:outputdef | m4alias=FilterLeftTableFields; m4object=HtmlFilterCL; node=FLT_DETAIL_LEFT_FIELDS; records=*         |
| 279 | m4:outputdef | m4alias=FilterRigthTableFields; m4object=HtmlFilterCL; node=FLT_DETAIL_RIGHT_FIELDS; records=*       |
| 284 | m4:outputdef | m4alias=FilterDetailInfo; m4object=HtmlFilterCL; node=FLT_DETAIL_INFO; records=*                     |
| 285 | m4:outputdef | m4alias=FilterDetailRightInfo; m4object=HtmlFilterCL; node=FLT_RIGHT_DETAIL; records=*               |
| 286 | m4:outputdef | m4alias=FilterDetailLeftInfo; m4object=HtmlFilterCL; node=FLT_LEFT_DETAIL; records=*                 |
| 292 | m4:outputdef | m4alias=FilterAllDetails; m4object=HtmlFilterCL; node=FLT_DETAIL_LIST_R; records=*                   |
| 297 | m4:outputdef | m4alias=FilterNatLanguage; m4object=HtmlFilterCL; node=FLT_FILTER_INFO; records=*                    |
| 300 | m4:endjob    |                                                                                                      |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                          |
| --- | ------------------------------------------------------------- |
| 173 | &lt;% if (sIdOperation.equals(sAPI_GET_FILTER)){              |
| 174 | if (zhtmlfilterinstance == null){%&gt;                        |
| 178 | &lt;%}else{%&gt;                                              |
| 191 | &lt;% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %&gt;       |
| 201 | &lt;% if (sIdOperation.equals(sAPI_GET_DETAIL) ){ %&gt;       |
| 212 | &lt;% if (sIdOperation.equals(sAPI_SET_DETAIL) ){ %&gt;       |
| 227 | &lt;% if (sIdOperation.equals(sAPI_DELETE_DETAIL) ){ %&gt;    |
| 235 | &lt;% if (sIdOperation.equals(sAPI_GET_TABLE_FIELDS) ){ %&gt; |
| 243 | &lt;% if (sIdOperation.equals(sAPI_PERSIST_FILTERS) ){ %&gt;  |
| 250 | &lt;% if (sIdOperation.equals(sAPI_REMOVE_FILTER) ){ %&gt;    |

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

- Confirmar exposición y permisos de `tchtmlfilter/htmlfilterjob.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
