# ssco_g0_org_chart_dyn

Identificador: `sse_g0/ssco_g0_org_chart_dyn.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp) | `5994ffdcf7576062c1a0f466344cb522b04ee90f858d0d7237ecad6b0c95f681` |      1 |
| IBER / español    | [m4custom/IBER/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp) | `5994ffdcf7576062c1a0f466344cb522b04ee90f858d0d7237ecad6b0c95f681` |      1 |
| BASE / español    | [sse_g0/espanol/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp)                             | `5994ffdcf7576062c1a0f466344cb522b04ee90f858d0d7237ecad6b0c95f681` |      1 |
| BASE / compartido | [sse_g0/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_org_chart_dyn.jsp)                                             | `8d0b0a67cff707d09fd3800ef320e6cc9c6d25d74813df4864a15694384c65e0` |    229 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_g0_org_chart_dyn.jsp). Líneas físicas, contando desde 1.

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
| 1   | ../ssco_g0_org_chart_dyn.jsp |

| L   | Destino / recurso            |
| --- | ---------------------------- |
| 1   | ../ssco_g0_org_chart_dyn.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_g0_org_chart_dyn.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_org_chart_dyn.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                              |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89  | form    | action=/servlet/CheckSecurity/JSP/sse_g0/ssco_dynamic_orgchart.jsp; method=post; name=Dynamic Orgchart; id=formDynamicOrgchart; target=dynamicorgchart |
| 90  | input   | type=hidden; id=paramWU; name=paramWU; value=                                                                                                          |
| 91  | input   | type=hidden; id=paramType; name=paramType; value=                                                                                                      |
| 92  | input   | type=hidden; id=paramSerialize; name=paramSerialize; value=                                                                                            |
| 114 | img     | src=/iconos/spinner48.gif                                                                                                                              |
| 124 | img     | src=/iconos/inf_complementaria_empleado_100x100.gif; title=&lt;%=sAuxLabel%&gt;                                                                        |
| 131 | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                                                                             |
| 133 | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp                                                                                |
| 139 | img     | class=nophoto; id=imgPhoto; src=                                                                                                                       |
| 187 | input   | id=inputSearchWU; type=text; title=&lt;%=sAuxLabel%&gt;                                                                                                |
| 193 | input   | id=inputSearchEmp; type=text; title=&lt;%=sAuxLabel%&gt;                                                                                               |
| 208 | img     | id=imgRoot; class=photo; title=&lt;%=sAuxLabel%&gt;; src=/iconos/wunits_visibility_36_36.gif                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 76  | IdWUnit         | getParameter(request,"IdWUnit") |

| L   | Variable             | Expresión fuente                                                                                  | Resolución estática parcial                                                                       |
| --- | -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 45  | sPathTempMap         | m4Session.getPathTempMapping()                                                                    | m4Session.getPathTempMapping()                                                                    |
| 46  | sPathTempURI         | m4Session.getUserTempURI() + '/'                                                                  | {m4Session.getUserTempURI()}{'/'}                                                                 |
| 48  | sSubSession          | "SGCO_ORG_CHART"                                                                                  | SGCO_ORG_CHART                                                                                    |
| 49  | sMeta4Object         | "SGCO_ORG_CHART"                                                                                  | SGCO_ORG_CHART                                                                                    |
| 51  | sNodeMain            | "SGCO_ORG_CHART_MAIN"                                                                             | SGCO_ORG_CHART_MAIN                                                                               |
| 52  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                    | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN                                                            |
| 53  | sOutputDefMain       | sDataDefMain + "[*]"                                                                              | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                                                     |
| 55  | sIdWorkUnit          | ""                                                                                                |                                                                                                   |
| 56  | sNameWorkUnit        | ""                                                                                                |                                                                                                   |
| 57  | sLevel               | ""                                                                                                |                                                                                                   |
| 58  | sLoaded              | ""                                                                                                |                                                                                                   |
| 60  | sMethodLoad          | sDataDefMain + ".SCO_MTD_LOAD"                                                                    | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                                           |
| 62  | sNodeLabel           | "SGCO_ORG_CHART_LABEL"                                                                            | SGCO_ORG_CHART_LABEL                                                                              |
| 63  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel                                                                   | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL                                                           |
| 64  | sOutputDefLabel      | sDataDefLabel + "[*]"                                                                             | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                                                    |
| 65  | sMethodLoadLabel     | sDataDefLabel + ".SCO_MTD_LOAD_LABEL_DYN"                                                         | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{".SCO_MTD_LOAD_LABEL_DYN"}                                |
| 67  | sNodeLabelTable      | "SGCO_ORG_CHART_LABEL_TABLE"                                                                      | SGCO_ORG_CHART_LABEL_TABLE                                                                        |
| 68  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable                                                              | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE                                                     |
| 69  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"                                                                        | SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                                              |
| 71  | sDescription         | ""                                                                                                |                                                                                                   |
| 72  | sAuxLabel            | ""                                                                                                |                                                                                                   |
| 73  | sAuxLabelTitle       | ""                                                                                                |                                                                                                   |
| 75  | sReset               | "0"                                                                                               | 0                                                                                                 |
| 76  | sIdWUnit             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit")                               |
| 84  | sIdUsser             | m4Session.getIdUser()                                                                             | m4Session.getIdUser()                                                                             |
| 145 | iOrg                 | 0                                                                                                 | 0                                                                                                 |
| 146 | sClassName           | ""                                                                                                |                                                                                                   |
| 161 | secure_id            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit) |
| 168 | secure_id            | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt (request, "tcorgchart", sIdWorkUnit) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                            |
| --- | ------------ | --------------------------------------------------------------------------------------------- |
| 97  | m4:page      | subsessionid=SGCO_ORG_CHART                                                                   |
| 98  | m4:job       |                                                                                               |
| 99  | m4:datadef   | m4name=SGCO_ORG_CHART; m4o=SGCO_ORG_CHART                                                     |
| 100 | m4:exec      | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{".SCO_MTD_LOAD"}                              |
| 101 | m4:param     | name=ARG_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWUnit") |
| 102 | m4:param     | name=ARG_RESET; value=0                                                                       |
| 104 | m4:exec      | m4method=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{".SCO_MTD_LOAD_LABEL_DYN"}                   |
| 106 | m4:outputdef | m4alias=SGCO_ORG_CHART_LABEL                                                                  |
| 106 | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL{"[*]"}                            |
| 107 | m4:outputdef | m4alias=SGCO_ORG_CHART_LABEL_TABLE                                                            |
| 107 | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_LABEL_TABLE{"[*]"}                      |
| 108 | m4:outputdef | m4alias=SGCO_ORG_CHART_MAIN                                                                   |
| 108 | m4:param     | name=M4NAME0; value=SGCO_ORG_CHART{"!"}SGCO_ORG_CHART_MAIN{"[*]"}                             |
| 118 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU_DYN; var=; htmlsafe=true        |
| 126 | m4:item      | outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_DESC; var=; htmlsafe=true                    |
| 130 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WHO_IS_WHO; var=; htmlsafe=true    |
| 132 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_CONTACT; var=; htmlsafe=true       |
| 147 | m4:dataloop  | outputdef=SGCO_ORG_CHART_MAIN                                                                 |
| 149 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=STD_ID_WORK_UNIT; var=; htmlsafe=true                     |
| 150 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=STD_N_WORK_UNIT; var=; htmlsafe=true                      |
| 151 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=SCO_PRP_LEVEL; var=; htmlsafe=true                        |
| 152 | m4:item      | outputdef=SGCO_ORG_CHART_MAIN; item=SCO_PRP_LOADED; var=; htmlsafe=true                       |
| 180 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SEARCH; var=; htmlsafe=true        |
| 184 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU; var=; htmlsafe=true            |
| 186 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true         |
| 190 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_EMPLOYEE; var=; htmlsafe=true      |
| 192 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_2_CAR; var=; htmlsafe=true         |
| 196 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_RESULT; var=; htmlsafe=true        |
| 205 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SHOW_ROOT; var=; htmlsafe=true     |
| 206 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_SHOW_TREE; var=; htmlsafe=true     |
| 210 | m4:label     | get=item; outputdef=SGCO_ORG_CHART_LABEL; item=SCO_PRP_LBL_WU_SHOWED; var=; htmlsafe=true     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 77  | if (sIdWUnit == null) {sIdWUnit="";}                                                                                                  |
| 78  | if (!sIdWUnit.equals("")) {                                                                                                           |
| 153 | &lt;%if (sLevel.equals("0") &amp;&amp; iOrg &gt; 1) {%&gt;                                                                            |
| 157 | if (sLevel.equals("0")) {                                                                                                             |
| 158 | if (sLoaded.equals("true")) {sClassName = "divSpanOrgChart openedOrgtree";} else {sClassName = "divSpanOrgChart closedOrgtree";}%&gt; |
| 165 | &lt;%} else {%&gt;                                                                                                                    |
| 46  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                                          |
| 52  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                            |
| 53  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                    |
| 60  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                                             |
| 63  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                          |
| 64  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                  |
| 65  | expresión de cálculo/transformación: String sMethodLoadLabel = sDataDefLabel + ".SCO_MTD_LOAD_LABEL_DYN";                             |
| 68  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                |
| 69  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                        |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../sse_generico/sse_generico_taglib.jsp |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 12  | /library/meta4cookies.js                                    |
| 13  | /libreria/mootools.js                                       |
| 14  | /libreria/meta4ajax.js                                      |
| 15  | /libreria/meta4photo.js                                     |
| 16  | /libreria/functions_orgchart_dyn.js                         |
| 17  | /libreria/funciones_sse.js                                  |
| 18  | /css/style_orgchart.css                                     |
| 19  | /css/meta4table.css                                         |
| 89  | /servlet/CheckSecurity/JSP/sse_g0/ssco_dynamic_orgchart.jsp |
| 114 | /iconos/spinner48.gif                                       |
| 124 | /iconos/inf_complementaria_empleado_100x100.gif             |
| 131 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp    |
| 133 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp       |
| 208 | /iconos/wunits_visibility_36_36.gif                         |
| 9   | ../sse_generico/sse_generico_taglib.jsp                     |
| 41  | com.meta4.jsp                                               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ----------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | ausente    | P06                                                                                                       |
| COLL   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | ausente    | P06                                                                                                       |
| IBER   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | ausente    | P06                                                                                                       |
| IBER   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | ausente    | P06                                                                                                       |
| BASE   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | física     | [sse_g0/ssco_g0_org_chart_dyn.jsp](sse_g0--ssco_g0_org_chart_dyn.md)                                      |
| BASE   | 1   | ../ssco_g0_org_chart_dyn.jsp                                | física     | [sse_g0/ssco_g0_org_chart_dyn.jsp](sse_g0--ssco_g0_org_chart_dyn.md)                                      |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                     | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 12  | /library/meta4cookies.js                                    | contextual | [library/meta4cookies.js](../../transversal/dependencias/library--meta4cookies.md)                        |
| BASE   | 13  | /libreria/mootools.js                                       | contextual | &#96;libreria/mootools.js&#96;                                                                            |
| BASE   | 14  | /libreria/meta4ajax.js                                      | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                            |
| BASE   | 15  | /libreria/meta4photo.js                                     | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)                          |
| BASE   | 16  | /libreria/functions_orgchart_dyn.js                         | contextual | &#96;libreria/functions_orgchart_dyn.js&#96;                                                              |
| BASE   | 17  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 89  | /servlet/CheckSecurity/JSP/sse_g0/ssco_dynamic_orgchart.jsp | contextual | [sse_g0/ssco_dynamic_orgchart.jsp](sse_g0--ssco_dynamic_orgchart.md)                                      |
| BASE   | 131 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp    | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                            |
| BASE   | 133 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_contact.jsp       | contextual | [sse_g0/ssco_g0_contact.jsp](sse_g0--ssco_g0_contact.md)                                                  |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                     | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 41  | com.meta4.jsp                                               | ausente    | P06                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_org_chart_dyn.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
