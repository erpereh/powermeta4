# ssco_g0_org_chart

Identificador: `sse_g0/ssco_g0_org_chart.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_g0_org_chart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_org_chart.jsp) | `d4bd5316782c3031a837ac016cf2d4a5158bf5b3ee8df7c9d08b817622e0e4b9` |      1 |
| BASE / compartido | [sse_g0/ssco_g0_org_chart.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_org_chart.jsp)                 | `2abe4744f4d635ed60bbbefe067665ae53ca01a04dfd15681789c6ea0c2e4177` |    285 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_g0_org_chart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_org_chart.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                  |
| --- | ------------------------ |
| 1   | ../ssco_g0_org_chart.jsp |

| L   | Destino / recurso        |
| --- | ------------------------ |
| 1   | ../ssco_g0_org_chart.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_g0_org_chart.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_org_chart.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta              |
| --- | ------------------------------------- |
| 209 | Página 0 de 0                         |
| 251 | [valor dinámico] 0 [valor dinámico] 0 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 98  | img     | src=/iconos/inf_complementaria_empleado_100x100.gif; title=&lt;%=sAuxLabel%&gt;              |
| 105 | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                   |
| 107 | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp                      |
| 113 | img     | class=nophoto; id=imgPhoto; src=                                                             |
| 159 | input   | id=inputSearchEmp; type=text; title=&lt;%=sAuxLabel%&gt;                                     |
| 165 | input   | id=inputSearchWU; type=text; title=&lt;%=sAuxLabel%&gt;                                      |
| 180 | img     | id=imgRoot; class=photo; title=&lt;%=sAuxLabel%&gt;; src=/iconos/wunits_visibility_36_36.gif |
| 215 | img     | id=imgFirstPageResp; m4action=first; title=&lt;%=sAuxLabel%&gt;                              |
| 217 | img     | id=imgPrevPageResp; m4action=prev; title=&lt;%=sAuxLabel%&gt;                                |
| 219 | input   | id=inputPageResp; type=text; maxlength=3; title=&lt;%=sAuxLabel%&gt;                         |
| 221 | img     | id=imgNextPageResp; m4action=next; title=&lt;%=sAuxLabel%&gt;                                |
| 223 | img     | id=imgLastPageResp; m4action=last; title=&lt;%=sAuxLabel%&gt;                                |
| 259 | img     | id=imgFirstPageEmp; m4action=first; title=&lt;%=sAuxLabel%&gt;                               |
| 261 | img     | id=imgPrevPageEmp; m4action=prev; title=&lt;%=sAuxLabel%&gt;                                 |
| 263 | input   | id=inputPageEmp; type=text; maxlength=3; title=&lt;%=sAuxLabel%&gt;                          |
| 265 | img     | id=imgNextPageEmp; m4action=next; title=&lt;%=sAuxLabel%&gt;                                 |
| 267 | img     | id=imgLastPageEmp; m4action=last; title=&lt;%=sAuxLabel%&gt;                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 63  | IdWUnit         | getParameter(request,"IdWUnit") |

| L   | Variable             | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | -------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 32  | sPathTempMap         | m4Session.getPathTempMapping()                                      | m4Session.getPathTempMapping()                                      |
| 33  | sPathTempURI         | m4Session.getUserTempURI() + '/'                                    | {m4Session.getUserTempURI()}{'/'}                                   |
| 35  | sSubSession          | "SGCO_ORG_CHART"                                                    | SGCO_ORG_CHART                                                      |
| 36  | sMeta4Object         | "SGCO_ORG_CHART"                                                    | SGCO_ORG_CHART                                                      |
| 38  | sNodeMain            | "SGCO_ORG_CHART_MAIN"                                               | SGCO_ORG_CHART_MAIN                                                 |
| 39  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN                              |
| 40  | sOutputDefMain       | sDataDefMain + "[*]"                                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                       |
| 42  | sIdWorkUnit          | ""                                                                  |                                                                     |
| 43  | sNameWorkUnit        | ""                                                                  |                                                                     |
| 44  | sLevel               | ""                                                                  |                                                                     |
| 45  | sLoaded              | ""                                                                  |                                                                     |
| 47  | sMethodLoad          | sDataDefMain + ".SCO_MTD_LOAD"                                      | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}             |
| 49  | sNodeLabel           | "SGCO_ORG_CHART_LABEL"                                              | SGCO_ORG_CHART_LABEL                                                |
| 50  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel                                     | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL                             |
| 51  | sOutputDefLabel      | sDataDefLabel + "[*]"                                               | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                      |
| 52  | sMethodLoadLabel     | sDataDefLabel + ".SCO_MTD_LOAD_LABEL"                               | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{".SCO_MTD_LOAD_LABEL"}      |
| 54  | sNodeLabelTable      | "SGCO_ORG_CHART_LABEL_TABLE"                                        | SGCO_ORG_CHART_LABEL_TABLE                                          |
| 55  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable                                | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE                       |
| 56  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"                                          | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                |
| 58  | sDescription         | ""                                                                  |                                                                     |
| 59  | sAuxLabel            | ""                                                                  |                                                                     |
| 60  | sAuxLabelTitle       | ""                                                                  |                                                                     |
| 62  | sReset               | "0"                                                                 | 0                                                                   |
| 63  | sIdWUnit             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit") |
| 119 | iOrg                 | 0                                                                   | 0                                                                   |
| 120 | sClassName           | ""                                                                  |                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------ |
| 75  | m4:page      | subsessionid=SGCO_ORG_CHART                                                                      |
| 76  | m4:job       |                                                                                                  |
| 77  | m4:datadef   | m4name=SGCO_ORG_CHART; m4o=SGCO_ORG_CHART                                                        |
| 78  | m4:exec      | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                 |
| 79  | m4:param     | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit")    |
| 80  | m4:param     | name=ARG_RESET; value=0                                                                          |
| 82  | m4:exec      | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{".SCO_MTD_LOAD_LABEL"}                          |
| 84  | m4:outputdef | m4alias=SGCO_ORG_CHART_LABEL                                                                     |
| 84  | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                               |
| 85  | m4:outputdef | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                               |
| 85  | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                         |
| 86  | m4:outputdef | m4alias=SGCO_ORG_CHART_MAIN                                                                      |
| 86  | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                |
| 92  | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU_TREE; var=; htmlsafe=true          |
| 100 | m4:item      | outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_DESC; var=; htmlsafe=true                       |
| 104 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WHO_IS_WHO; var=; htmlsafe=true       |
| 106 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CONTACT; var=; htmlsafe=true          |
| 121 | m4:dataloop  | outputdef=SGCO_ORG_CHART_MAIN                                                                    |
| 123 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=STD_ID_WORK_UNIT; var=; htmlsafe=true                        |
| 124 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=STD_N_WORK_UNIT; var=; htmlsafe=true                         |
| 125 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=SCO_PRP_LEVEL; var=; htmlsafe=true                           |
| 126 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=SCO_PRP_LOADED; var=; htmlsafe=true                          |
| 152 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SEARCH; var=; htmlsafe=true           |
| 156 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_EMPLOYEE; var=; htmlsafe=true         |
| 158 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true            |
| 162 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU; var=; htmlsafe=true               |
| 164 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true            |
| 168 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_RESULT; var=; htmlsafe=true           |
| 177 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SHOW_ROOT; var=; htmlsafe=true        |
| 178 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SHOW_TREE; var=; htmlsafe=true        |
| 182 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU_SHOWED; var=; htmlsafe=true        |
| 190 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LIST_RESP; var=; htmlsafe=true        |
| 194 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true             |
| 196 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_PHONE; var=; htmlsafe=true            |
| 198 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_EMAIL; var=; htmlsafe=true            |
| 200 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true             |
| 214 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_FIRST_PAGE; var=; htmlsafe=true |
| 216 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_PRV_PAGE; var=; htmlsafe=true   |
| 218 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_GOTO_PAGE; var=; htmlsafe=true  |
| 220 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_NEXT_PAGE; var=; htmlsafe=true  |
| 222 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_LAST_PAGE; var=; htmlsafe=true  |
| 232 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_LIST_EMP; var=; htmlsafe=true         |
| 236 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true             |
| 238 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_PHONE; var=; htmlsafe=true            |
| 240 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_EMAIL; var=; htmlsafe=true            |
| 242 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true             |
| 253 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_PAGE; var=; htmlsafe=true       |
| 254 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_OF; var=; htmlsafe=true         |
| 258 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_FIRST_PAGE; var=; htmlsafe=true |
| 260 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_PRV_PAGE; var=; htmlsafe=true   |
| 262 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_GOTO_PAGE; var=; htmlsafe=true  |
| 264 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_NEXT_PAGE; var=; htmlsafe=true  |
| 266 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL_TABLE; item=SCO_PRP_LBL_LAST_PAGE; var=; htmlsafe=true  |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 64  | if (sIdWUnit == null) {sIdWUnit="";}                                                                                                  |
| 65  | if (!sIdWUnit.equals("")) {                                                                                                           |
| 127 | &lt;%if (sLevel.equals("0") &amp;&amp; iOrg &gt; 1) {%&gt;                                                                            |
| 131 | if (sLevel.equals("0")) {                                                                                                             |
| 132 | if (sLoaded.equals("true")) {sClassName = "divSpanOrgChart openedOrgtree";} else {sClassName = "divSpanOrgChart closedOrgtree";}%&gt; |
| 138 | &lt;%} else {%&gt;                                                                                                                    |
| 33  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                                          |
| 39  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                            |
| 40  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                    |
| 47  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                                             |
| 50  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                          |
| 51  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                  |
| 52  | expresión de cálculo/transformación: String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL";                                 |
| 55  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                |
| 56  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                        |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../sse_generico/sse_generico_taglib.jsp |

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 12  | /libreria/mootools.js                                    |
| 13  | /libreria/meta4ajax.js                                   |
| 14  | /libreria/meta4photo.js                                  |
| 15  | /libreria/meta4table.js                                  |
| 16  | /libreria/meta4infpers.js                                |
| 17  | /libreria/functions_orgchart.js                          |
| 18  | /css/style_orgchart.css                                  |
| 19  | /css/meta4table.css                                      |
| 98  | /iconos/inf_complementaria_empleado_100x100.gif          |
| 105 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp |
| 107 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp    |
| 180 | /iconos/wunits_visibility_36_36.gif                      |
| 215 | first                                                    |
| 217 | prev                                                     |
| 221 | next                                                     |
| 223 | last                                                     |
| 259 | first                                                    |
| 261 | prev                                                     |
| 265 | next                                                     |
| 267 | last                                                     |
| 9   | ../sse_generico/sse_generico_taglib.jsp                  |
| 28  | com.meta4.jsp                                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../ssco_g0_org_chart.jsp                                 | física     | [sse_g0/ssco_g0_org_chart.jsp](sse_g0--ssco_g0_org_chart.md)                                              |
| BASE   | 1   | ../ssco_g0_org_chart.jsp                                 | física     | [sse_g0/ssco_g0_org_chart.jsp](sse_g0--ssco_g0_org_chart.md)                                              |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 12  | /libreria/mootools.js                                    | contextual | &#96;libreria/mootools.js&#96;                                                                            |
| BASE   | 13  | /libreria/meta4ajax.js                                   | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                            |
| BASE   | 14  | /libreria/meta4photo.js                                  | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)                          |
| BASE   | 15  | /libreria/meta4table.js                                  | contextual | [libreria/meta4table.js](../../transversal/dependencias/libreria--meta4table.md)                          |
| BASE   | 16  | /libreria/meta4infpers.js                                | contextual | [libreria/meta4infpers.js](../../transversal/dependencias/libreria--meta4infpers.md)                      |
| BASE   | 17  | /libreria/functions_orgchart.js                          | contextual | &#96;libreria/functions_orgchart.js&#96;                                                                  |
| BASE   | 105 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                            |
| BASE   | 107 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp    | contextual | [sse_g0/ssco_g0_contact.jsp](sse_g0--ssco_g0_contact.md)                                                  |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                  | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 28  | com.meta4.jsp                                            | ausente    | P06                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_org_chart.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
