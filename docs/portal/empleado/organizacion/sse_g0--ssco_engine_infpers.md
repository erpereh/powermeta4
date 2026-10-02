# ssco_engine_infpers

Identificador: `sse_g0/ssco_engine_infpers.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_engine_infpers.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_infpers.jsp) | `6bd07f5d20873546efd6769b91481ddada948fe347aa83b6e9f1d9de8b2216d5` |      1 |
| BASE / compartido | [sse_g0/ssco_engine_infpers.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_infpers.jsp)                 | `5df8718b3f18542cd0ed41adf62363d4a648b9ec85a2f865693bbbed167e3480` |    266 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_engine_infpers.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_infpers.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                    |
| --- | -------------------------- |
| 1   | ../ssco_engine_infpers.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 1   | ../ssco_engine_infpers.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_engine_infpers.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_infpers.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 14  | IdHR            | getParameter(request,"IdHR") |

| L   | Variable        | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | --------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 14  | sIdHR           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")     |
| 20  | sSubSession     | "SGCO_INF_EMPLOYEE"                                                  | SGCO_INF_EMPLOYEE                                                    |
| 21  | sMeta4Object    | "SGCO_INF_EMPLOYEE"                                                  | SGCO_INF_EMPLOYEE                                                    |
| 23  | sNodeMain       | "SGCO_INF_EMPLOYEE"                                                  | SGCO_INF_EMPLOYEE                                                    |
| 24  | sDataDefMain    | sMeta4Object + "!" + sNodeMain                                       | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE                              |
| 25  | sOutputDefMain  | sDataDefMain + "[*]"                                                 | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                       |
| 26  | sMoveMain       | sNodeMain + ":" + sNodeMain + "[FIRST]"                              | SGCO_INF_EMPLOYEE{":"}SGCO_INF_EMPLOYEE{"[FIRST]"}                   |
| 27  | sMethodLoad     | sDataDefMain + ".SCO_MTD_LOAD"                                       | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{".SCO_MTD_LOAD"}             |
| 29  | sLabelName      | "", sGbName = ""                                                     | {, sGbName = ""}                                                     |
| 30  | sLabelWLoc      | "", sWLoc = ""                                                       | {, sWLoc = ""}                                                       |
| 31  | sLabelWUnit     | "", sWUnit = ""                                                      | {, sWUnit = ""}                                                      |
| 33  | sNodePhone      | "SGCO_INF_PHONE_FAX"                                                 | SGCO_INF_PHONE_FAX                                                   |
| 34  | sDataDefPhone   | sMeta4Object + "!" + sNodePhone                                      | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX                             |
| 35  | sOutputDefPhone | sDataDefPhone + "[*]"                                                | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX{"[*]"}                      |
| 36  | sNodeAuxPhone   | ""                                                                   |                                                                      |
| 38  | sLabelPhone     | "", sLabelMorePhone = "", sPhone = "" , sIdLine = "", sNameLine = "" | {, sLabelMorePhone = "", sPhone = "" , sIdLine = "", sNameLine = ""} |
| 39  | saPhone         | ""                                                                   |                                                                      |
| 41  | sNodeEmail      | "SGCO_INF_EMAIL"                                                     | SGCO_INF_EMAIL                                                       |
| 42  | sDataDefEmail   | sMeta4Object + "!" + sNodeEmail                                      | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL                                 |
| 43  | sOutputDefEmail | sDataDefEmail + "[*]"                                                | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL{"[*]"}                          |
| 44  | sNodeAuxEmail   | ""                                                                   |                                                                      |
| 46  | sLabelEmail     | "", sLabelMoreEmail = "", sEmail = ""                                | {, sLabelMoreEmail = "", sEmail = ""}                                |
| 47  | saEmail         | ""                                                                   |                                                                      |
| 49  | sNodeJob        | "SGCO_INF_JOB"                                                       | SGCO_INF_JOB                                                         |
| 50  | sDataDefJob     | sMeta4Object + "!" + sNodeJob                                        | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB                                   |
| 51  | sOutputDefJob   | sDataDefJob + "[*]"                                                  | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB{"[*]"}                            |
| 52  | sNodeAuxJob     | ""                                                                   |                                                                      |
| 54  | sLabelJob       | "", sJob = ""                                                        | {, sJob = ""}                                                        |
| 55  | saJob           | ""                                                                   |                                                                      |
| 57  | sNodeResp       | "SGCO_INF_RESPONSIBLE"                                               | SGCO_INF_RESPONSIBLE                                                 |
| 58  | sDataDefResp    | sMeta4Object + "!" + sNodeResp                                       | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE                           |
| 59  | sOutputDefResp  | sDataDefResp + "[*]"                                                 | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE{"[*]"}                    |
| 60  | sNodeAuxResp    | ""                                                                   |                                                                      |
| 62  | sLabelResp      | "", sLabelMoreResp = "", sResp = ""                                  | {, sLabelMoreResp = "", sResp = ""}                                  |
| 63  | saResp          | ""                                                                   |                                                                      |
| 65  | iCount          | 0                                                                    | 0                                                                    |
| 66  | sCountMain      | ""                                                                   |                                                                      |
| 86  | i               | 0                                                                    | 0                                                                    |
| 87  | iCountMain      | 0                                                                    | 0                                                                    |
| 116 | i               | 0                                                                    | 0                                                                    |
| 117 | iCountAux       | 0                                                                    | 0                                                                    |
| 118 | sAuxLabel       | ""                                                                   |                                                                      |
| 119 | sAuxLabelOK     | ""                                                                   |                                                                      |
| 120 | sAuxLabelKO     | ""                                                                   |                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                     |
| --- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 70  | m4:page       | subsessionid=SGCO_INF_EMPLOYEE                                                                                         |
| 71  | m4:job        |                                                                                                                        |
| 72  | m4:datadef    | m4name=SGCO_INF_EMPLOYEE; m4o=SGCO_INF_EMPLOYEE                                                                        |
| 74  | m4:exec       | m4method=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{".SCO_MTD_LOAD"}                                                      |
| 75  | m4:param      | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                 |
| 77  | m4:exec       | node=SGCO_INF_EMPLOYEE; alias=countMain; method=COUNT; m4object=SGCO_INF_EMPLOYEE                                      |
| 79  | m4:outputdef  | m4alias=SGCO_INF_EMPLOYEE                                                                                              |
| 79  | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                                                     |
| 82  | m4:job        |                                                                                                                        |
| 83  | m4:outputdef  | m4alias=SGCO_INF_EMPLOYEE                                                                                              |
| 83  | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                                                     |
| 84  | m4:outputexec | var=; alias=countMain                                                                                                  |
| 97  | m4:move       |                                                                                                                        |
| 97  | m4:param      | name=SGCO_INF_EMPLOYEE; value=SGCO_INF_EMPLOYEE{":"}SGCO_INF_EMPLOYEE{"[FIRST]"}                                       |
| 98  | m4:outputdef  | m4alias=                                                                                                               |
| 98  | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX{"[*]"}                                                    |
| 99  | m4:outputdef  | m4alias=                                                                                                               |
| 99  | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL{"[*]"}                                                        |
| 100 | m4:outputdef  | m4alias=                                                                                                               |
| 100 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB{"[*]"}                                                          |
| 101 | m4:outputdef  | m4alias=                                                                                                               |
| 101 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE{"[*]"}                                                  |
| 127 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_NAME; var={, sGbName = ""}                                     |
| 128 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_WLOC; var={, sWLoc = ""}                                       |
| 129 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_WUNIT; var={, sWUnit = ""}                                     |
| 130 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=SCO_GB_NAME; var=sGbName                                                             |
| 131 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=STD_N_WORK_LOCATION; var=sWLoc                                                       |
| 132 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=STD_N_WORK_UNIT; var=sWUnit                                                          |
| 146 | m4:count      | outputdef=; var=iCountPhone                                                                                            |
| 147 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_PHONE; var={, sLabelMorePhone = "", sPhone = "" , sIdLine = "", sNameLine = ""} |
| 148 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_MORE_PHONE; var=sLabelMorePhone                                                 |
| 152 | m4:dataloop   | outputdef=                                                                                                             |
| 153 | m4:item       | outputdef=; item=SCO_PRP_PHONE; var=sPhone                                                                             |
| 154 | m4:item       | outputdef=; item=STD_ID_LINE_TYPE; var=sIdLine                                                                         |
| 155 | m4:item       | outputdef=; item=STD_N_LINE_TYPE; var=sNameLine                                                                        |
| 185 | m4:count      | outputdef=; var=iCountEmail                                                                                            |
| 186 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_EMAIL; var={, sLabelMoreEmail = "", sEmail = ""}                                |
| 187 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_MORE_EMAIL; var=sLabelMoreEmail                                                 |
| 191 | m4:dataloop   | outputdef=                                                                                                             |
| 192 | m4:item       | outputdef=; item=STD_EMAIL; var=sEmail                                                                                 |
| 212 | m4:count      | outputdef=; var=iCountWLoc                                                                                             |
| 213 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_JOB; var={, sJob = ""}                                                          |
| 217 | m4:dataloop   | outputdef=                                                                                                             |
| 218 | m4:item       | outputdef=; item=STD_N_JOB_CODE; var=sJob                                                                              |
| 237 | m4:count      | outputdef=; var=iCountWLoc                                                                                             |
| 238 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_RESP; var={, sLabelMoreResp = "", sResp = ""}                                   |
| 239 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_MORE_RESP; var=sLabelMoreResp                                                   |
| 243 | m4:dataloop   | outputdef=                                                                                                             |
| 244 | m4:item       | outputdef=; item=SCO_PRP_RESP_GB_NAME; var=sResp                                                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 15  | if (sIdHR == null) {sIdHR="";}                                                                                |
| 16  | if (!sIdHR.equals("")) {                                                                                      |
| 150 | if (iCountPhone.intValue() &gt; 0) {                                                                          |
| 157 | if (sIdLine.equals("001")) {                                                                                  |
| 159 | } else if (sIdLine.equals("002")) {                                                                           |
| 161 | } else if (sIdLine.equals("003")) {                                                                           |
| 163 | } else {                                                                                                      |
| 174 | if (saPhone.length() &gt; 0) {                                                                                |
| 189 | if (iCountEmail.intValue() &gt; 0) {                                                                          |
| 201 | if (saEmail.length() &gt; 0) {                                                                                |
| 215 | if (iCountWLoc.intValue() &gt; 0) {                                                                           |
| 227 | if (saJob.length() &gt; 0) {                                                                                  |
| 241 | if (iCountWLoc.intValue() &gt; 0) {                                                                           |
| 253 | if (saResp.length() &gt; 0) {                                                                                 |
| 24  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                    |
| 25  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                            |
| 26  | expresión de cálculo/transformación: String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";              |
| 27  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                     |
| 34  | expresión de cálculo/transformación: String sDataDefPhone = sMeta4Object + "!" + sNodePhone;                  |
| 35  | expresión de cálculo/transformación: String sOutputDefPhone = sDataDefPhone + "[*]";                          |
| 42  | expresión de cálculo/transformación: String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;                  |
| 43  | expresión de cálculo/transformación: String sOutputDefEmail = sDataDefEmail + "[*]";                          |
| 50  | expresión de cálculo/transformación: String sDataDefJob = sMeta4Object + "!" + sNodeJob;                      |
| 51  | expresión de cálculo/transformación: String sOutputDefJob = sDataDefJob + "[*]";                              |
| 58  | expresión de cálculo/transformación: String sDataDefResp = sMeta4Object + "!" + sNodeResp;                    |
| 59  | expresión de cálculo/transformación: String sOutputDefResp = sDataDefResp + "[*]";                            |
| 89  | expresión de cálculo/transformación: iCountMain = Integer.parseInt(sCountMain);                               |
| 91  | expresión de cálculo/transformación: sMoveMain = sNodeMain + ":" + sNodeMain + "[" + String.valueOf(i) + "]"; |
| 92  | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 93  | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |
| 94  | expresión de cálculo/transformación: sNodeAuxJob = sNodeJob + String.valueOf(i);                              |
| 95  | expresión de cálculo/transformación: sNodeAuxResp = sNodeResp + String.valueOf(i);                            |
| 109 | expresión de cálculo/transformación: iCount = Integer.parseInt(sCountMain);                                   |
| 144 | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 183 | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |
| 210 | expresión de cálculo/transformación: sNodeAuxJob = sNodeJob + String.valueOf(i);                              |
| 235 | expresión de cálculo/transformación: sNodeAuxResp = sNodeResp + String.valueOf(i);                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 11  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                |
| ------ | --- | -------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 1   | ../ssco_engine_infpers.jsp | física     | [sse_g0/ssco_engine_infpers.jsp](sse_g0--ssco_engine_infpers.md) |
| BASE   | 1   | ../ssco_engine_infpers.jsp | física     | [sse_g0/ssco_engine_infpers.jsp](sse_g0--ssco_engine_infpers.md) |
| BASE   | 11  | com.meta4.jsp              | ausente    | P06                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_engine_infpers.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
