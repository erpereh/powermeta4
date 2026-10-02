# ssco_engine_org_chart_dyn

Identificador: `sse_g0/ssco_engine_org_chart_dyn.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp) | `8793d7944f3dc7c8c653e297bfdaf08e33e3a1f03a0b90133dfc784ce0ec9925` |      1 |
| IBER / español    | [m4custom/IBER/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp) | `8793d7944f3dc7c8c653e297bfdaf08e33e3a1f03a0b90133dfc784ce0ec9925` |      1 |
| BASE / español    | [sse_g0/espanol/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp)                             | `8793d7944f3dc7c8c653e297bfdaf08e33e3a1f03a0b90133dfc784ce0ec9925` |      1 |
| BASE / compartido | [sse_g0/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_org_chart_dyn.jsp)                                             | `57bdfe0e7e9efd8a6db3a8477897d91ff345808bb9dc89d235b1132c4e31960e` |    445 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_engine_org_chart_dyn.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                          |
| --- | -------------------------------- |
| 1   | ../ssco_engine_org_chart_dyn.jsp |

| L   | Destino / recurso                |
| --- | -------------------------------- |
| 1   | ../ssco_engine_org_chart_dyn.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_engine_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_org_chart_dyn.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 19  | Action          | getParameter(request,"Action") |
| 23  | Name            | getParameter(request,"Name")   |
| 29  | WUnit           | getParameter(request,"WUnit")  |
| 81  | Column          | getParameter(request,"Column") |
| 89  | Order           | getParameter(request,"Order")  |
| 97  | Node            | getParameter(request,"Node")   |

| L   | Variable             | Expresión fuente                                                                                              | Resolución estática parcial                                                                                   |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 13  | sEncoding            | M4RequestEncoding.getAppEncoding()                                                                            | M4RequestEncoding.getAppEncoding()                                                                            |
| 19  | sAction              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                            |
| 23  | sName                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                              |
| 29  | sWUnit               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                             |
| 35  | sSubSession          | "SGCO_ORG_CHART"                                                                                              | SGCO_ORG_CHART                                                                                                |
| 36  | sMeta4Object         | "SGCO_ORG_CHART"                                                                                              | SGCO_ORG_CHART                                                                                                |
| 38  | sNodeMain            | "SGCO_ORG_CHART_MAIN"                                                                                         | SGCO_ORG_CHART_MAIN                                                                                           |
| 39  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN                                                                        |
| 40  | sOutputDefMain       | sDataDefMain + "[*]"                                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                                                 |
| 41  | sMethodMainLoad      | sDataDefMain + ".SCO_MTD_LOAD"                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                                       |
| 42  | sMethodMainRoot      | sDataDefMain + ".SCO_MTD_ROOT"                                                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_ROOT"}                                                       |
| 44  | sNodeLabel           | "SGCO_ORG_CHART_LABEL"                                                                                        | SGCO_ORG_CHART_LABEL                                                                                          |
| 45  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel                                                                               | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL                                                                       |
| 46  | sOutputDefLabel      | sDataDefLabel + "[*]"                                                                                         | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                |
| 48  | sNodeLabelTable      | "SGCO_ORG_CHART_LABEL_TABLE"                                                                                  | SGCO_ORG_CHART_LABEL_TABLE                                                                                    |
| 49  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE                                                                 |
| 50  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"                                                                                    | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                          |
| 52  | sNodeReturn          | "SGCO_ORG_CHART_RETURN"                                                                                       | SGCO_ORG_CHART_RETURN                                                                                         |
| 53  | sDataDefReturn       | sMeta4Object + "!" + sNodeReturn                                                                              | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN                                                                      |
| 54  | sOutputDefReturn     | sDataDefReturn + "[*]"                                                                                        | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                               |
| 55  | sMethodGetPath       | sDataDefReturn + ".SCO_MTD_GET_PATH"                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{".SCO_MTD_GET_PATH"}                                                 |
| 57  | sNodeSearchEmp       | "SGCO_ORG_CHART_SEARCH_EMP"                                                                                   | SGCO_ORG_CHART_SEARCH_EMP                                                                                     |
| 58  | sDataDefSearchEmp    | sMeta4Object + "!" + sNodeSearchEmp                                                                           | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP                                                                  |
| 59  | sOutputDefSearchEmp  | sDataDefSearchEmp + "[*]"                                                                                     | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{"[*]"}                                                           |
| 60  | sMethodSearchEmp     | sDataDefSearchEmp + ".SCO_MTD_SEARCH"                                                                         | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{".SCO_MTD_SEARCH"}                                               |
| 62  | sNodeSearchWU        | "SGCO_ORG_CHART_SEARCH_WU"                                                                                    | SGCO_ORG_CHART_SEARCH_WU                                                                                      |
| 63  | sDataDefSearchWU     | sMeta4Object + "!" + sNodeSearchWU                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU                                                                   |
| 64  | sOutputDefSearchWU   | sDataDefSearchWU + "[*]"                                                                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{"[*]"}                                                            |
| 65  | sMethodSearchWU      | sDataDefSearchWU + ".SCO_MTD_SEARCH"                                                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{".SCO_MTD_SEARCH"}                                                |
| 67  | sNodeListEmp         | "SGCO_ORG_CHART_EMPLOYEES"                                                                                    | SGCO_ORG_CHART_EMPLOYEES                                                                                      |
| 68  | sDataDefListEmp      | sMeta4Object + "!" + sNodeListEmp                                                                             | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES                                                                   |
| 69  | sOutputDefListEmp    | sDataDefListEmp + "[*]"                                                                                       | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{"[*]"}                                                            |
| 70  | sMethodListEmp       | sDataDefListEmp + ".SCO_MTD_LOAD"                                                                             | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".SCO_MTD_LOAD"}                                                  |
| 72  | sSortNodeEmp         | sMeta4Object + "!" + sNodeListEmp + ".Sort"                                                                   | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                          |
| 74  | sNodeListResp        | "SGCO_ORG_CHART_RESPONSIBLE"                                                                                  | SGCO_ORG_CHART_RESPONSIBLE                                                                                    |
| 75  | sDataDefListResp     | sMeta4Object + "!" + sNodeListResp                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE                                                                 |
| 76  | sOutputDefListResp   | sDataDefListResp + "[*]"                                                                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{"[*]"}                                                          |
| 77  | sMethodListResp      | sDataDefListResp + ".SCO_MTD_LOAD"                                                                            | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                |
| 79  | sSortNodeResp        | sMeta4Object + "!" + sNodeListResp + ".Sort"                                                                  | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                        |
| 81  | sColumn              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                            |
| 89  | sOrder               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 95  | sNodeList            | ""                                                                                                            |                                                                                                               |
| 96  | sOutputDefList       | ""                                                                                                            |                                                                                                               |
| 97  | sSortNode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                              |
| 114 | sGbName              | "", sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = "" | {, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""} |
| 116 | saEmp                | "", saResp = "", saList = ""                                                                                  | {, saResp = "", saList = ""}                                                                                  |
| 117 | sCol1                | "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = ""                                                            | {, sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = ""}                                                            |
| 118 | sAuxLabel            | ""                                                                                                            |                                                                                                               |
| 254 | secure_id            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             |
| 266 | secure_id            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             |
| 278 | secure_id            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit)             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                                                           |
| --- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 122 | m4:page         | subsessionid=SGCO_ORG_CHART                                                                                                                                                                  |
| 123 | m4:job          |                                                                                                                                                                                              |
| 124 | m4:datadef      | m4name=SGCO_ORG_CHART; m4o=SGCO_ORG_CHART                                                                                                                                                    |
| 129 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 129 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 133 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 133 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 134 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 134 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 138 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{".SCO_MTD_SEARCH"}                                                                                                                     |
| 139 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                                                                        |
| 141 | m4:outputdef    | m4alias=SGCO_ORG_CHART_SEARCH_EMP                                                                                                                                                            |
| 141 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_EMP{"[*]"}                                                                                                                      |
| 142 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 142 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 146 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{".SCO_MTD_SEARCH"}                                                                                                                      |
| 147 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                                                                        |
| 149 | m4:outputdef    | m4alias=SGCO_ORG_CHART_SEARCH_WU                                                                                                                                                             |
| 149 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_SEARCH_WU{"[*]"}                                                                                                                       |
| 150 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL                                                                                                                                                                 |
| 150 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                                                                                           |
| 154 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                                                                                                             |
| 155 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 156 | m4:param        | name=ARG_RESET; value=0                                                                                                                                                                      |
| 158 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RETURN                                                                                                                                                                |
| 158 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                                                                                          |
| 162 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{".SCO_MTD_GET_PATH"}                                                                                                                       |
| 163 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 165 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RETURN                                                                                                                                                                |
| 165 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RETURN{"[*]"}                                                                                                                          |
| 169 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".SCO_MTD_LOAD"}                                                                                                                        |
| 170 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 173 | m4:sortitems    | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                                                                                                  |
| 174 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 177 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                                                                                      |
| 178 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 181 | m4:sortitems    | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                                                                                                |
| 182 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 185 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 185 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 186 | m4:outputdef    | m4alias=SGCO_ORG_CHART_EMPLOYEES                                                                                                                                                             |
| 186 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{"[*]"}                                                                                                                       |
| 187 | m4:outputdef    | m4alias=SGCO_ORG_CHART_RESPONSIBLE                                                                                                                                                           |
| 187 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{"[*]"}                                                                                                                     |
| 188 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_EMPLOYEES{".Sort"}                                                                                                                                  |
| 189 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".SCO_MTD_LOAD"}                                                                                                                        |
| 190 | m4:removefilter | m4name=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_RESPONSIBLE{".Sort"}                                                                                                                                |
| 194 | m4:sortitems    | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Node")                                                                                                                      |
| 195 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                             |
| 197 | m4:outputdef    | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                                                                                                                           |
| 197 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                                                                                                     |
| 198 | m4:outputdef    | m4alias=                                                                                                                                                                                     |
| 198 | m4:param        | name=M4NAME0; value=                                                                                                                                                                         |
| 202 | m4:exec         | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_ROOT"}                                                                                                                             |
| 203 | m4:param        | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                                                                  |
| 205 | m4:outputdef    | m4alias=SGCO_ORG_CHART_MAIN                                                                                                                                                                  |
| 205 | m4:param        | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                                                                                                            |
| 214 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_EMP; var=; htmlsafe=true                                                                                                  |
| 216 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_EMPS; var=; htmlsafe=true                                                                                                 |
| 218 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_WU; var=; htmlsafe=true                                                                                                   |
| 220 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_FOUNDED_WUS; var=; htmlsafe=true                                                                                                  |
| 222 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_NO_FOUNDED; var=; htmlsafe=true                                                                                                   |
| 229 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_ASC; var=; htmlsafe=true                                                                                              |
| 231 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_DESC; var=; htmlsafe=true                                                                                             |
| 233 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_NO_ORDER; var=; htmlsafe=true                                                                                               |
| 235 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LOADING_EMP; var=; htmlsafe=true                                                                                                  |
| 237 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LOADING_RESP; var=; htmlsafe=true                                                                                                 |
| 239 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ORDERING; var=; htmlsafe=true                                                                                               |
| 241 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_OK; var=; htmlsafe=true                                                                                         |
| 243 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_KO; var=; htmlsafe=true                                                                                         |
| 248 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CLICK_WU; var=; htmlsafe=true                                                                                                     |
| 249 | m4:dataloop     | outputdef=SGCO_ORG_CHART_SEARCH_EMP                                                                                                                                                          |
| 250 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true      |
| 251 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_ID_HR; var=sIdHR; htmlsafe=true                                                                                                                |
| 252 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_EMP; item=SCO_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                   |
| 261 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CLICK_WU; var=; htmlsafe=true                                                                                                     |
| 262 | m4:dataloop     | outputdef=SGCO_ORG_CHART_SEARCH_WU                                                                                                                                                           |
| 263 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_WU; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                   |
| 264 | m4:item         | outputdef=SGCO_ORG_CHART_SEARCH_WU; item=STD_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                    |
| 273 | m4:dataloop     | outputdef=SGCO_ORG_CHART_RETURN                                                                                                                                                              |
| 274 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                   |
| 275 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                  |
| 288 | m4:item         | outputdef=SGCO_ORG_CHART_RETURN; item=SCO_PRP_PATH; var=sPath; htmlsafe=true                                                                                                                 |
| 295 | m4:dataloop     | outputdef=SGCO_ORG_CHART_EMPLOYEES                                                                                                                                                           |
| 296 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                             |
| 297 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true   |
| 298 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                            |
| 299 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                            |
| 300 | m4:item         | outputdef=SGCO_ORG_CHART_EMPLOYEES; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                            |
| 302 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 321 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 326 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 333 | m4:dataloop     | outputdef=SGCO_ORG_CHART_RESPONSIBLE                                                                                                                                                         |
| 334 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                           |
| 335 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true |
| 336 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                          |
| 337 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                          |
| 338 | m4:item         | outputdef=SGCO_ORG_CHART_RESPONSIBLE; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                          |
| 339 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 358 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 363 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 384 | m4:dataloop     | outputdef=                                                                                                                                                                                   |
| 385 | m4:item         | outputdef=; item=SCO_PRP_ID_HR; var=sIdHR; htmlsafe=true                                                                                                                                     |
| 386 | m4:item         | outputdef=; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdHR = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""}; htmlsafe=true                           |
| 387 | m4:item         | outputdef=; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                                                                                    |
| 388 | m4:item         | outputdef=; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                                                                                                    |
| 389 | m4:item         | outputdef=; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                                                                                                    |
| 390 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SHOW_INF_EMP; var=; htmlsafe=true                                                                                           |
| 409 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                                                             |
| 414 | m4:label        | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                                                                            |
| 430 | m4:dataloop     | outputdef=SGCO_ORG_CHART_MAIN                                                                                                                                                                |
| 431 | m4:item         | outputdef=SGCO_ORG_CHART_MAIN; item=STD_ID_WORK_UNIT; var=sIdWorkUnit; htmlsafe=true                                                                                                         |
| 432 | m4:item         | outputdef=SGCO_ORG_CHART_MAIN; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                                                                        |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if (sName == null) {sName="";}                                                                                                                       |
| 25  | if (!sName.equals("")) {                                                                                                                             |
| 30  | if (sWUnit == null) {sWUnit="";}                                                                                                                     |
| 31  | if (!sWUnit.equals("")) {                                                                                                                            |
| 82  | if (sColumn == null) {sColumn="SCO_PRP_GB_NAME";}                                                                                                    |
| 83  | if (!sColumn.equals("")) {                                                                                                                           |
| 84  | if (sColumn.equals("Name")) {sColumn="SCO_PRP_GB_NAME";}                                                                                             |
| 85  | if (sColumn.equals("WLoc")) {sColumn="SCO_PRP_N_WORK_LOCATION";}                                                                                     |
| 90  | if (sOrder == null) {sOrder="ASC";}                                                                                                                  |
| 91  | if (!sOrder.equals("")) {                                                                                                                            |
| 98  | if (sSortNode == null) {sSortNode="";}                                                                                                               |
| 99  | if (!sSortNode.equals("")) {                                                                                                                         |
| 100 | if (sSortNode.equals("Employee")) {                                                                                                                  |
| 104 | } else if (sSortNode.equals("Responsible")) {                                                                                                        |
| 127 | if (sAction.equals("InitSearch")) {                                                                                                                  |
| 131 | } else if (sAction.equals("InitOrgChart")) {                                                                                                         |
| 136 | } else if (sAction.equals("SearchEmp")) {                                                                                                            |
| 144 | } else if (sAction.equals("SearchWU")) {                                                                                                             |
| 152 | } else if (sAction.equals("Expand")) {                                                                                                               |
| 160 | } else if (sAction.equals("Getpath")) {                                                                                                              |
| 167 | } else if (sAction.equals("List")) {                                                                                                                 |
| 192 | } else if (sAction.equals("Sort")) {                                                                                                                 |
| 200 | } else if (sAction.equals("Root")) {                                                                                                                 |
| 211 | if (sAction.equals("InitSearch")) {                                                                                                                  |
| 226 | } else if (sAction.equals("InitOrgChart")) {                                                                                                         |
| 246 | } else if (sAction.equals("SearchEmp")) {                                                                                                            |
| 259 | } else if (sAction.equals("SearchWU")) {                                                                                                             |
| 271 | } else if (sAction.equals("Expand")) {                                                                                                               |
| 286 | } else if (sAction.equals("Getpath")) {                                                                                                              |
| 293 | } else if (sAction.equals("List")) {                                                                                                                 |
| 306 | if (saPhone.length == 3) {                                                                                                                           |
| 307 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 309 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 311 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 313 | } else {                                                                                                                                             |
| 317 | } else {                                                                                                                                             |
| 343 | if (saPhone.length == 3) {                                                                                                                           |
| 344 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 346 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 348 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 350 | } else {                                                                                                                                             |
| 354 | } else {                                                                                                                                             |
| 370 | if (saEmp.length() &gt; 0) {                                                                                                                         |
| 374 | if (saResp.length() &gt; 0) {                                                                                                                        |
| 382 | } else if (sAction.equals("Sort")) {                                                                                                                 |
| 394 | if (saPhone.length == 3) {                                                                                                                           |
| 395 | if (saPhone[1].equals("001")) {                                                                                                                      |
| 397 | } else if (saPhone[1].equals("002")) {                                                                                                               |
| 399 | } else if (saPhone[1].equals("003")) {                                                                                                               |
| 401 | } else {                                                                                                                                             |
| 405 | } else {                                                                                                                                             |
| 421 | if (saList.length() &gt; 0) {                                                                                                                        |
| 428 | } else if (sAction.equals("Root")) {                                                                                                                 |
| 14  | expresión de cálculo/transformación: response.setContentType ("text/html; charset=" + sEncoding + "");                                               |
| 39  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                           |
| 40  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                   |
| 41  | expresión de cálculo/transformación: String sMethodMainLoad = sDataDefMain + ".SCO_MTD_LOAD";                                                        |
| 42  | expresión de cálculo/transformación: String sMethodMainRoot = sDataDefMain + ".SCO_MTD_ROOT";;                                                       |
| 45  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                                         |
| 46  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                                 |
| 49  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                               |
| 50  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                                       |
| 53  | expresión de cálculo/transformación: String sDataDefReturn = sMeta4Object + "!" + sNodeReturn;                                                       |
| 54  | expresión de cálculo/transformación: String sOutputDefReturn = sDataDefReturn + "[*]";                                                               |
| 55  | expresión de cálculo/transformación: String sMethodGetPath = sDataDefReturn + ".SCO_MTD_GET_PATH";                                                   |
| 58  | expresión de cálculo/transformación: String sDataDefSearchEmp = sMeta4Object + "!" + sNodeSearchEmp;                                                 |
| 59  | expresión de cálculo/transformación: String sOutputDefSearchEmp = sDataDefSearchEmp + "[*]";                                                         |
| 60  | expresión de cálculo/transformación: String sMethodSearchEmp = sDataDefSearchEmp + ".SCO_MTD_SEARCH";                                                |
| 63  | expresión de cálculo/transformación: String sDataDefSearchWU = sMeta4Object + "!" + sNodeSearchWU;                                                   |
| 64  | expresión de cálculo/transformación: String sOutputDefSearchWU = sDataDefSearchWU + "[*]";                                                           |
| 65  | expresión de cálculo/transformación: String sMethodSearchWU = sDataDefSearchWU + ".SCO_MTD_SEARCH";                                                  |
| 68  | expresión de cálculo/transformación: String sDataDefListEmp = sMeta4Object + "!" + sNodeListEmp;                                                     |
| 69  | expresión de cálculo/transformación: String sOutputDefListEmp = sDataDefListEmp + "[*]";                                                             |
| 70  | expresión de cálculo/transformación: String sMethodListEmp = sDataDefListEmp + ".SCO_MTD_LOAD";                                                      |
| 72  | expresión de cálculo/transformación: String sSortNodeEmp = sMeta4Object + "!" + sNodeListEmp + ".Sort";                                              |
| 75  | expresión de cálculo/transformación: String sDataDefListResp = sMeta4Object + "!" + sNodeListResp;                                                   |
| 76  | expresión de cálculo/transformación: String sOutputDefListResp = sDataDefListResp + "[*]";                                                           |
| 77  | expresión de cálculo/transformación: String sMethodListResp = sDataDefListResp + ".SCO_MTD_LOAD";                                                    |
| 79  | expresión de cálculo/transformación: String sSortNodeResp = sMeta4Object + "!" + sNodeListResp + ".Sort";                                            |
| 304 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 316 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 318 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 323 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 324 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 328 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |
| 341 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 353 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 355 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 360 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 361 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 365 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |
| 392 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";    |
| 404 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]"; |
| 406 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + "\"" + "]";                                                                                |
| 411 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                |
| 412 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                          |
| 416 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 16  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                       | Resolución | Ficha / candidato                                                            |
| ------ | --- | -------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| COLL   | 1   | ../ssco_engine_org_chart_dyn.jsp | ausente    | P06                                                                          |
| COLL   | 1   | ../ssco_engine_org_chart_dyn.jsp | ausente    | P06                                                                          |
| IBER   | 1   | ../ssco_engine_org_chart_dyn.jsp | ausente    | P06                                                                          |
| IBER   | 1   | ../ssco_engine_org_chart_dyn.jsp | ausente    | P06                                                                          |
| BASE   | 1   | ../ssco_engine_org_chart_dyn.jsp | física     | [sse_g0/ssco_engine_org_chart_dyn.jsp](sse_g0--ssco_engine_org_chart_dyn.md) |
| BASE   | 1   | ../ssco_engine_org_chart_dyn.jsp | física     | [sse_g0/ssco_engine_org_chart_dyn.jsp](sse_g0--ssco_engine_org_chart_dyn.md) |
| BASE   | 16  | com.meta4.jsp                    | ausente    | P06                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_engine_org_chart_dyn.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
