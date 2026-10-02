# ssco_engine_org_chart

Identificador: `sse_g0/ssco_engine_org_chart.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_engine_org_chart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_org_chart.jsp) | `cde88f4f1a4fba125d2480d471519451d0ac6bb335e1cab022c170acccc71b86` |      1 |
| BASE / compartido | [sse_g0/ssco_engine_org_chart.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_org_chart.jsp)                 | `79dad2d3ff69adabf2702f725adb26705691817627c71c780122ee8e5f103f4f` |    436 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_engine_org_chart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_org_chart.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                      |
| --- | ---------------------------- |
| 1   | ../ssco_engine_org_chart.jsp |

| L   | Destino / recurso            |
| --- | ---------------------------- |
| 1   | ../ssco_engine_org_chart.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_engine_org_chart.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_org_chart.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | Action          | getParameter(request,"Action") |
| 18  | Name            | getParameter(request,"Name")   |
| 24  | WUnit           | getParameter(request,"WUnit")  |
| 76  | Column          | getParameter(request,"Column") |
| 84  | Order           | getParameter(request,"Order")  |
| 92  | Node            | getParameter(request,"Node")   |

| L   | Variable             | Expresión fuente                                                                                              | Resolución estática parcial                                                                                   |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 14  | sAction              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                            |
| 18  | sName                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                              |
| 24  | sWUnit               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                             |
| 30  | sSubSession          | "SGCO_ORG_CHART"                                                                                              | SGCO_ORG_CHART                                                                                                |
| 31  | sMeta4Object         | "SGCO_ORG_CHART"                                                                                              | SGCO_ORG_CHART                                                                                                |
| 33  | sNodeMain            | "SGCO_ORG_CHART_MAIN"                                                                                         | SGCO_ORG_CHART_MAIN                                                                                           |
| 34  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN                                                                        |
| 35  | sOutputDefMain       | sDataDefMain + "[*]"                                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                                                 |
| 36  | sMethodMainLoad      | sDataDefMain + ".SCO_MTD_LOAD"                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                                       |
| 37  | sMethodMainRoot      | sDataDefMain + ".SCO_MTD_ROOT"                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_ROOT"}                                                       |
| 39  | sNodeLabel           | "SGCO_ORG_CHART_LABEL"                                                                                        | SGCO_ORG_CHART_LABEL                                                                                          |
| 40  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel                                                                               | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL                                                                       |
| 41  | sOutputDefLabel      | sDataDefLabel + "[*]"                                                                                         | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                |
| 43  | sNodeLabelTable      | "SGCO_ORG_CHART_LABEL_TABLE"                                                                                  | SGCO_ORG_CHART_LABEL_TABLE                                                                                    |
| 44  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE                                                                 |
| 45  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"                                                                                    | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                          |
| 47  | sNodeReturn          | "SGCO_ORG_CHART_RETURN"                                                                                       | SGCO_ORG_CHART_RETURN                                                                                         |
| 48  | sDataDefReturn       | sMeta4Object + "!" + sNodeReturn                                                                              | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN                                                                      |
| 49  | sOutputDefReturn     | sDataDefReturn + "[*]"                                                                                        | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                               |
| 50  | sMethodGetPath       | sDataDefReturn + ".SCO_MTD_GET_PATH"                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{".SCO_MTD_GET_PATH"}                                                 |
| 52  | sNodeSearchEmp       | "SGCO_ORG_CHART_SEARCH_EMP"                                                                                   | SGCO_ORG_CHART_SEARCH_EMP                                                                                     |
| 53  | sDataDefSearchEmp    | sMeta4Object + "!" + sNodeSearchEmp                                                                           | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP                                                                  |
| 54  | sOutputDefSearchEmp  | sDataDefSearchEmp + "[*]"                                                                                     | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{"[*]"}                                                           |
| 55  | sMethodSearchEmp     | sDataDefSearchEmp + ".SCO_MTD_SEARCH"                                                                         | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{".SCO_MTD_SEARCH"}                                               |
| 57  | sNodeSearchWU        | "SGCO_ORG_CHART_SEARCH_WU"                                                                                    | SGCO_ORG_CHART_SEARCH_WU                                                                                      |
| 58  | sDataDefSearchWU     | sMeta4Object + "!" + sNodeSearchWU                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU                                                                   |
| 59  | sOutputDefSearchWU   | sDataDefSearchWU + "[*]"                                                                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{"[*]"}                                                            |
| 60  | sMethodSearchWU      | sDataDefSearchWU + ".SCO_MTD_SEARCH"                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{".SCO_MTD_SEARCH"}                                                |
| 62  | sNodeListEmp         | "SGCO_ORG_CHART_EMPLOYEES"                                                                                    | SGCO_ORG_CHART_EMPLOYEES                                                                                      |
| 63  | sDataDefListEmp      | sMeta4Object + "!" + sNodeListEmp                                                                             | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES                                                                   |
| 64  | sOutputDefListEmp    | sDataDefListEmp + "[*]"                                                                                       | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{"[*]"}                                                            |
| 65  | sMethodListEmp       | sDataDefListEmp + ".SCO_MTD_LOAD"                                                                             | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".SCO_MTD_LOAD"}                                                  |
| 67  | sSortNodeEmp         | sMeta4Object + "!" + sNodeListEmp + ".Sort"                                                                   | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                          |
| 69  | sNodeListResp        | "SGCO_ORG_CHART_RESPONSIBLE"                                                                                  | SGCO_ORG_CHART_RESPONSIBLE                                                                                    |
| 70  | sDataDefListResp     | sMeta4Object + "!" + sNodeListResp                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE                                                                 |
| 71  | sOutputDefListResp   | sDataDefListResp + "[*]"                                                                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{"[*]"}                                                          |
| 72  | sMethodListResp      | sDataDefListResp + ".SCO_MTD_LOAD"                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                |
| 74  | sSortNodeResp        | sMeta4Object + "!" + sNodeListResp + ".Sort"                                                                  | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                        |
| 76  | sColumn              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                            |
| 84  | sOrder               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 90  | sNodeList            | ""                                                                                                            |                                                                                                               |
| 91  | sOutputDefList       | ""                                                                                                            |                                                                                                               |
| 92  | sSortNode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                              |
| 109 | sGbName              | "", sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = "" | {, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""} |
| 111 | saEmp                | "", saResp = "", saList = ""                                                                                  | {, saResp = "", saList = ""}                                                                                  |
| 112 | sCol1                | "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = ""                                                            | {, sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = ""}                                                            |
| 113 | sAuxLabel            | ""                                                                                                            |                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                                                           |
| --- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:page         | subsessionid=SGCO_ORG_CHART                                                                                                                                                                  |
| 118 | m4:job          |                                                                                                                                                                                              |
| 119 | m4:datadef      | m4name=SGCO_ORG_CHART; m4o=SGCO_ORG_CHART                                                                                                                                                    |
| 124 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 124 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 128 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 128 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 129 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 129 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 133 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{".SCO_MTD_SEARCH"}                                                                                                                     |
| 134 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                                                                        |
| 136 | m4:outputdef    | m4alias=SGCO_ORG_CHART_SEARCH_EMP                                                                                                                                                            |
| 136 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{"[*]"}                                                                                                                      |
| 137 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 137 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 141 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{".SCO_MTD_SEARCH"}                                                                                                                      |
| 142 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                                                                        |
| 144 | m4:outputdef    | m4alias=SGCO_ORG_CHART_SEARCH_WU                                                                                                                                                             |
| 144 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{"[*]"}                                                                                                                       |
| 145 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 145 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 149 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                                                                                                             |
| 150 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 151 | m4:param        | name=ARG_RESET; value=0                                                                                                                                                                      |
| 153 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RETURN                                                                                                                                                                |
| 153 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                                                                                          |
| 157 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{".SCO_MTD_GET_PATH"}                                                                                                                       |
| 158 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 160 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RETURN                                                                                                                                                                |
| 160 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                                                                                          |
| 164 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".SCO_MTD_LOAD"}                                                                                                                        |
| 165 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 168 | m4:sortitems    | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                                                                                                  |
| 169 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 172 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                                                                                      |
| 173 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 176 | m4:sortitems    | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                                                                                                |
| 177 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 180 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 180 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 181 | m4:outputdef    | m4alias=SGCO_ORG_CHART_EMPLOYEES                                                                                                                                                             |
| 181 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{"[*]"}                                                                                                                       |
| 182 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RESPONSIBLE                                                                                                                                                           |
| 182 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{"[*]"}                                                                                                                     |
| 183 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                                                                                                  |
| 184 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                                                                                        |
| 185 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                                                                                                |
| 189 | m4:sortitems    | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                                                                                                      |
| 190 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 192 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 192 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 193 | m4:outputdef    | m4alias=                                                                                                                                                                                     |
| 193 | m4:param        | name=M4NAME0; value=                                                                                                                                                                         |
| 197 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_ROOT"}                                                                                                                             |
| 198 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 200 | m4:outputdef    | m4alias=SGCO_ORG_CHART_MAIN                                                                                                                                                                  |
| 200 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                                                                                                            |
| 209 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_EMP; var=; htmlsafe=true                                                                                                  |
| 211 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_EMPS; var=; htmlsafe=true                                                                                                 |
| 213 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_WU; var=; htmlsafe=true                                                                                                   |
| 215 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_WUS; var=; htmlsafe=true                                                                                                  |
| 217 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_NO_FOUNDED; var=; htmlsafe=true                                                                                                   |
| 224 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_ASC; var=; htmlsafe=true                                                                                              |
| 226 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_DESC; var=; htmlsafe=true                                                                                             |
| 228 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_NO_ORDER; var=; htmlsafe=true                                                                                               |
| 230 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LOADING_EMP; var=; htmlsafe=true                                                                                                  |
| 232 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LOADING_RESP; var=; htmlsafe=true                                                                                                 |
| 234 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDERING; var=; htmlsafe=true                                                                                               |
| 236 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_OK; var=                                                                                                        |
| 238 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_KO; var=                                                                                                        |
| 243 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CLICK_WU; var=; htmlsafe=true                                                                                                     |
| 244 | m4:dataloop     | outputdef=SGCO_ORG_CHART_SEARCH_EMP                                                                                                                                                          |
| 245 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true      |
| 246 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_ID_HR; var=sIdHR; htmlsafe=true                                                                                                                |
| 247 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                   |
| 255 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CLICK_WU; var=; htmlsafe=true                                                                                                     |
| 256 | m4:dataloop     | outputdef=SGCO_ORG_CHART_SEARCH_WU                                                                                                                                                           |
| 257 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_WU; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                   |
| 258 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_WU; item=STD_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                    |
| 266 | m4:dataloop     | outputdef=SGCO_ORG_CHART_RETURN                                                                                                                                                              |
| 267 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                   |
| 268 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                  |
| 279 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_PATH; var=sPath; htmlsafe=true                                                                                                                 |
| 286 | m4:dataloop     | outputdef=SGCO_ORG_CHART_EMPLOYEES                                                                                                                                                           |
| 287 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                             |
| 288 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true   |
| 289 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                            |
| 290 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                            |
| 291 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                            |
| 293 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 312 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 317 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 324 | m4:dataloop     | outputdef=SGCO_ORG_CHART_RESPONSIBLE                                                                                                                                                         |
| 325 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                           |
| 326 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true |
| 327 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                          |
| 328 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                          |
| 329 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                          |
| 330 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 349 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 354 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 375 | m4:dataloop     | outputdef=                                                                                                                                                                                   |
| 376 | m4:item         | outputdef=; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                                                     |
| 377 | m4:item         | outputdef=; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true                           |
| 378 | m4:item         | outputdef=; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                                                    |
| 379 | m4:item         | outputdef=; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                                                    |
| 380 | m4:item         | outputdef=; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                                                    |
| 381 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 400 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 405 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 421 | m4:dataloop     | outputdef=SGCO_ORG_CHART_MAIN                                                                                                                                                                |
| 422 | m4:item         | outputdef=SGCO_ORG_CHART_MAIN; item=STD_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                         |
| 423 | m4:item         | outputdef=SGCO_ORG_CHART_MAIN; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                        |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if (sName == null) {sName="";}                                                                                                                       |
| 20  | if (!sName.equals("")) {                                                                                                                             |
| 25  | if (sWUnit == null) {sWUnit="";}                                                                                                                     |
| 26  | if (!sWUnit.equals("")) {                                                                                                                            |
| 77  | if (sColumn == null) {sColumn="SCO_PRP_GB_NAME";}                                                                                                    |
| 78  | if (!sColumn.equals("")) {                                                                                                                           |
| 79  | if (sColumn.equals("Name")) {sColumn="SCO_PRP_GB_NAME";}                                                                                             |
| 80  | if (sColumn.equals("WLoc")) {sColumn="SCO_PRP_N_WORK_LOCATION";}                                                                                     |
| 85  | if (sOrder == null) {sOrder="ASC";}                                                                                                                  |
| 86  | if (!sOrder.equals("")) {                                                                                                                            |
| 93  | if (sSortNode == null) {sSortNode="";}                                                                                                               |
| 94  | if (!sSortNode.equals("")) {                                                                                                                         |
| 95  | if (sSortNode.equals("Employee")) {                                                                                                                  |
| 99  | } else if (sSortNode.equals("Responsible")) {                                                                                                        |
| 122 | if (sAction.equals("InitSearch")) {                                                                                                                  |
| 126 | } else if (sAction.equals("InitOrgChart")) {                                                                                                         |
| 131 | } else if (sAction.equals("SearchEmp")) {                                                                                                            |
| 139 | } else if (sAction.equals("SearchWU")) {                                                                                                             |
| 147 | } else if (sAction.equals("Expand")) {                                                                                                               |
| 155 | } else if (sAction.equals("Getpath")) {                                                                                                              |
| 162 | } else if (sAction.equals("List")) {                                                                                                                 |
| 187 | } else if (sAction.equals("Sort")) {                                                                                                                 |
| 195 | } else if (sAction.equals("Root")) {                                                                                                                 |
| 206 | if (sAction.equals("InitSearch")) {                                                                                                                  |
| 221 | } else if (sAction.equals("InitOrgChart")) {                                                                                                         |
| 241 | } else if (sAction.equals("SearchEmp")) {                                                                                                            |
| 253 | } else if (sAction.equals("SearchWU")) {                                                                                                             |
| 264 | } else if (sAction.equals("Expand")) {                                                                                                               |
| 277 | } else if (sAction.equals("Getpath")) {                                                                                                              |
| 284 | } else if (sAction.equals("List")) {                                                                                                                 |
| 297 | if (saPhone.length == 3) {                                                                                                                           |
| 298 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 300 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 302 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 304 | } else {                                                                                                                                             |
| 308 | } else {                                                                                                                                             |
| 334 | if (saPhone.length == 3) {                                                                                                                           |
| 335 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 337 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 339 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 341 | } else {                                                                                                                                             |
| 345 | } else {                                                                                                                                             |
| 361 | if (saEmp.length() &gt; 0) {                                                                                                                         |
| 365 | if (saResp.length() &gt; 0) {                                                                                                                        |
| 373 | } else if (sAction.equals("Sort")) {                                                                                                                 |
| 385 | if (saPhone.length == 3) {                                                                                                                           |
| 386 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 388 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 390 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 392 | } else {                                                                                                                                             |
| 396 | } else {                                                                                                                                             |
| 412 | if (saList.length() &gt; 0) {                                                                                                                        |
| 419 | } else if (sAction.equals("Root")) {                                                                                                                 |
| 34  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                           |
| 35  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                   |
| 36  | expresión de cálculo/transformación: String sMethodMainLoad = sDataDefMain + ".SCO_MTD_LOAD";                                                        |
| 37  | expresión de cálculo/transformación: String sMethodMainRoot = sDataDefMain + ".SCO_MTD_ROOT";;                                                       |
| 40  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                                         |
| 41  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                                 |
| 44  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                               |
| 45  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                                       |
| 48  | expresión de cálculo/transformación: String sDataDefReturn = sMeta4Object + "!" + sNodeReturn;                                                       |
| 49  | expresión de cálculo/transformación: String sOutputDefReturn = sDataDefReturn + "[*]";                                                               |
| 50  | expresión de cálculo/transformación: String sMethodGetPath = sDataDefReturn + ".SCO_MTD_GET_PATH";                                                   |
| 53  | expresión de cálculo/transformación: String sDataDefSearchEmp = sMeta4Object + "!" + sNodeSearchEmp;                                                 |
| 54  | expresión de cálculo/transformación: String sOutputDefSearchEmp = sDataDefSearchEmp + "[*]";                                                         |
| 55  | expresión de cálculo/transformación: String sMethodSearchEmp = sDataDefSearchEmp + ".SCO_MTD_SEARCH";                                                |
| 58  | expresión de cálculo/transformación: String sDataDefSearchWU = sMeta4Object + "!" + sNodeSearchWU;                                                   |
| 59  | expresión de cálculo/transformación: String sOutputDefSearchWU = sDataDefSearchWU + "[*]";                                                           |
| 60  | expresión de cálculo/transformación: String sMethodSearchWU = sDataDefSearchWU + ".SCO_MTD_SEARCH";                                                  |
| 63  | expresión de cálculo/transformación: String sDataDefListEmp = sMeta4Object + "!" + sNodeListEmp;                                                     |
| 64  | expresión de cálculo/transformación: String sOutputDefListEmp = sDataDefListEmp + "[*]";                                                             |
| 65  | expresión de cálculo/transformación: String sMethodListEmp = sDataDefListEmp + ".SCO_MTD_LOAD";                                                      |
| 67  | expresión de cálculo/transformación: String sSortNodeEmp = sMeta4Object + "!" + sNodeListEmp + ".Sort";                                              |
| 70  | expresión de cálculo/transformación: String sDataDefListResp = sMeta4Object + "!" + sNodeListResp;                                                   |
| 71  | expresión de cálculo/transformación: String sOutputDefListResp = sDataDefListResp + "[*]";                                                           |
| 72  | expresión de cálculo/transformación: String sMethodListResp = sDataDefListResp + ".SCO_MTD_LOAD";                                                    |
| 74  | expresión de cálculo/transformación: String sSortNodeResp = sMeta4Object + "!" + sNodeListResp + ".Sort";                                            |
| 295 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 307 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 309 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 314 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 315 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 319 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |
| 332 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 344 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 346 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 351 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 352 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 356 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |
| 383 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 395 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 397 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 402 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 403 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 407 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 11  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                   | Resolución | Ficha / candidato                                                    |
| ------ | --- | ---------------------------- | ---------- | -------------------------------------------------------------------- |
| BASE   | 1   | ../ssco_engine_org_chart.jsp | física     | [sse_g0/ssco_engine_org_chart.jsp](sse_g0--ssco_engine_org_chart.md) |
| BASE   | 1   | ../ssco_engine_org_chart.jsp | física     | [sse_g0/ssco_engine_org_chart.jsp](sse_g0--ssco_engine_org_chart.md) |
| BASE   | 11  | com.meta4.jsp                | ausente    | P06                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_engine_org_chart.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
