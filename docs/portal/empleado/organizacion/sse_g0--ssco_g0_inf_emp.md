# ssco_g0_inf_emp

Identificador: `sse_g0/ssco_g0_inf_emp.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_g0_inf_emp.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_inf_emp.jsp) | `dcc035adba271ea873a56a5596bfeb3e37bf214eea84795cf9cdd3dba7c5a5c8` |      1 |
| BASE / compartido | [sse_g0/ssco_g0_inf_emp.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_inf_emp.jsp)                 | `5a014a9af44c3d9e037dc1a9860d50b75edc1a0fd16b72e6da6e6bc6e14267f3` |    352 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_g0_inf_emp.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_g0_inf_emp.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                |
| --- | ---------------------- |
| 1   | ../ssco_g0_inf_emp.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 1   | ../ssco_g0_inf_emp.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_g0_inf_emp.jsp](../../../../clon_portal/portal/sse_g0/ssco_g0_inf_emp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 155 | a       | class=aLink; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                                                                                               |
| 162 | img     | class=nophoto; id=imgPhoto                                                                                                                                               |
| 178 | img     | id=imgAddContact; idhr=&lt;%=sIdPerson%&gt;; class=imgAdd; title=&lt;%=sAuxLabel%&gt;; src=/iconos/lu_add_con_nor_24.png                                                 |
| 208 | img     | class=typePhone; id=typePhone1; title=&lt;%=sNameLine%&gt;; src=&lt;%=sIdLine%&gt;                                                                                       |
| 211 | img     | id=imgPhone; class=imgMore; src=/iconos/menu_closed.png                                                                                                                  |
| 214 | img     | class=typePhone; id=typePhone&lt;%=iCountAux%&gt;; title=&lt;%=sNameLine%&gt;; src=&lt;%=sIdLine%&gt;                                                                    |
| 242 | a       | id=spnEmail1; class=spanValue spanLink; title=&lt;%=sAuxLabel%&gt;; href=mailto:&lt;%=sEmail%&gt;                                                                        |
| 245 | img     | id=imgEmail; class=imgMore; src=/iconos/menu_closed.png                                                                                                                  |
| 248 | a       | id=spnEmail&lt;%=iCountAux%&gt;; class=spanValue spanLink; title=&lt;%=sAuxLabel%&gt;; href=mailto:&lt;%=sEmail%&gt;                                                     |
| 300 | a       | id=spnWUnit; class=spanValue spanLink; title=&lt;%=sAuxLabel%&gt;; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=&lt;%=sIdWorkUnit%&gt;           |
| 319 | a       | id=spnResp1; class=spanValue spanLink; title=&lt;%=sAuxLabel%&gt;; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt;                    |
| 322 | img     | id=imgResp; class=imgMore; src=/iconos/menu_closed.png                                                                                                                   |
| 325 | a       | id=spnResp&lt;%=iCountAux%&gt;; class=spanValue spanLink; title=&lt;%=sAuxLabel%&gt;; href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt; |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 32  | IdHR            | getParameter(request,"IdHR") |

| L   | Variable        | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 29  | sPathTempMap    | m4Session.getPathTempMapping()                                   | m4Session.getPathTempMapping()                                   |
| 30  | sPathTempURI    | m4Session.getUserTempURI() + '/'                                 | {m4Session.getUserTempURI()}{'/'}                                |
| 32  | sIdHR           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR") |
| 38  | sSubSession     | "SGCO_INF_EMPLOYEE"                                              | SGCO_INF_EMPLOYEE                                                |
| 39  | sMeta4Object    | "SGCO_INF_EMPLOYEE"                                              | SGCO_INF_EMPLOYEE                                                |
| 41  | sNodeMain       | "SGCO_INF_EMPLOYEE"                                              | SGCO_INF_EMPLOYEE                                                |
| 42  | sDataDefMain    | sMeta4Object + "!" + sNodeMain                                   | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE                          |
| 43  | sOutputDefMain  | sDataDefMain + "[*]"                                             | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                   |
| 44  | sMoveMain       | sNodeMain + ":" + sNodeMain + "[FIRST]"                          | SGCO_INF_EMPLOYEE{":"}SGCO_INF_EMPLOYEE{"[FIRST]"}               |
| 46  | sIdPerson       | ""                                                               |                                                                  |
| 47  | sGbName         | ""                                                               |                                                                  |
| 48  | sWorkLoc        | ""                                                               |                                                                  |
| 49  | sIdWorkUnit     | ""                                                               |                                                                  |
| 50  | sWorkUnit       | ""                                                               |                                                                  |
| 53  | sNodePhone      | "SGCO_INF_PHONE_FAX"                                             | SGCO_INF_PHONE_FAX                                               |
| 54  | sDataDefPhone   | sMeta4Object + "!" + sNodePhone                                  | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX                         |
| 55  | sOutputDefPhone | sDataDefPhone + "[*]"                                            | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX{"[*]"}                  |
| 56  | sNodeAuxPhone   | ""                                                               |                                                                  |
| 58  | sPhone          | ""                                                               |                                                                  |
| 59  | sIdLine         | ""                                                               |                                                                  |
| 60  | sNameLine       | ""                                                               |                                                                  |
| 62  | sNodeEmail      | "SGCO_INF_EMAIL"                                                 | SGCO_INF_EMAIL                                                   |
| 63  | sDataDefEmail   | sMeta4Object + "!" + sNodeEmail                                  | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL                             |
| 64  | sOutputDefEmail | sDataDefEmail + "[*]"                                            | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL{"[*]"}                      |
| 65  | sNodeAuxEmail   | ""                                                               |                                                                  |
| 67  | sEmail          | ""                                                               |                                                                  |
| 69  | sNodeJob        | "SGCO_INF_JOB"                                                   | SGCO_INF_JOB                                                     |
| 70  | sDataDefJob     | sMeta4Object + "!" + sNodeJob                                    | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB                               |
| 71  | sOutputDefJob   | sDataDefJob + "[*]"                                              | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB{"[*]"}                        |
| 72  | sNodeAuxJob     | ""                                                               |                                                                  |
| 74  | sNameJob        | ""                                                               |                                                                  |
| 76  | sNodeResp       | "SGCO_INF_RESPONSIBLE"                                           | SGCO_INF_RESPONSIBLE                                             |
| 77  | sDataDefResp    | sMeta4Object + "!" + sNodeResp                                   | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE                       |
| 78  | sOutputDefResp  | sDataDefResp + "[*]"                                             | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE{"[*]"}                |
| 79  | sNodeAuxResp    | ""                                                               |                                                                  |
| 81  | sIdResp         | ""                                                               |                                                                  |
| 82  | sGbNameResp     | ""                                                               |                                                                  |
| 84  | sMethodLoad     | sDataDefMain + ".SCO_MTD_LOAD"                                   | SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{".SCO_MTD_LOAD"}         |
| 86  | iCount          | 0                                                                | 0                                                                |
| 87  | sCountMain      | ""                                                               |                                                                  |
| 108 | i               | 0                                                                | 0                                                                |
| 109 | iCountMain      | 0                                                                | 0                                                                |
| 138 | i               | 0                                                                | 0                                                                |
| 139 | iCountAux       | 0                                                                | 0                                                                |
| 140 | sAuxLabel       | ""                                                               |                                                                  |
| 141 | sAuxLabelOK     | ""                                                               |                                                                  |
| 142 | sAuxLabelKO     | ""                                                               |                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                      |
| --- | ------------- | --------------------------------------------------------------------------------------- |
| 92  | m4:page       | subsessionid=SGCO_INF_EMPLOYEE                                                          |
| 93  | m4:job        |                                                                                         |
| 94  | m4:datadef    | m4name=SGCO_INF_EMPLOYEE; m4o=SGCO_INF_EMPLOYEE                                         |
| 96  | m4:exec       | m4method=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{".SCO_MTD_LOAD"}                       |
| 97  | m4:param      | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")  |
| 99  | m4:exec       | node=SGCO_INF_EMPLOYEE; alias=countMain; method=COUNT; m4object=SGCO_INF_EMPLOYEE       |
| 101 | m4:outputdef  | m4alias=SGCO_INF_EMPLOYEE                                                               |
| 101 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                      |
| 104 | m4:job        |                                                                                         |
| 105 | m4:outputdef  | m4alias=SGCO_INF_EMPLOYEE                                                               |
| 105 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMPLOYEE{"[*]"}                      |
| 106 | m4:outputexec | var=; alias=countMain                                                                   |
| 119 | m4:move       |                                                                                         |
| 119 | m4:param      | name=SGCO_INF_EMPLOYEE; value=SGCO_INF_EMPLOYEE{":"}SGCO_INF_EMPLOYEE{"[FIRST]"}        |
| 120 | m4:outputdef  | m4alias=                                                                                |
| 120 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_PHONE_FAX{"[*]"}                     |
| 121 | m4:outputdef  | m4alias=                                                                                |
| 121 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_EMAIL{"[*]"}                         |
| 122 | m4:outputdef  | m4alias=                                                                                |
| 122 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_JOB{"[*]"}                           |
| 123 | m4:outputdef  | m4alias=                                                                                |
| 123 | m4:param      | name=M4NAME0; value=SGCO_INF_EMPLOYEE{"!"}SGCO_INF_RESPONSIBLE{"[*]"}                   |
| 148 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_TITLE; var=; htmlsafe=true      |
| 154 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_WHO; var=; htmlsafe=true        |
| 167 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=SCO_GB_NAME; var=; htmlsafe=true                      |
| 168 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=STD_ID_PERSON; var=; htmlsafe=true                    |
| 171 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_NAME; var=; htmlsafe=true       |
| 173 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_CONTACT_OK; var=; htmlsafe=true |
| 174 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_CONTACT_KO; var=; htmlsafe=true |
| 177 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_PERS; var=; htmlsafe=true       |
| 187 | m4:count      | outputdef=; var=iCountPhone                                                             |
| 188 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_PHONE; var=; htmlsafe=true                       |
| 193 | m4:dataloop   | outputdef=                                                                              |
| 195 | m4:item       | outputdef=; item=SCO_PRP_PHONE; var=; htmlsafe=true                                     |
| 196 | m4:item       | outputdef=; item=STD_ID_LINE_TYPE; var=; htmlsafe=true                                  |
| 197 | m4:item       | outputdef=; item=STD_N_LINE_TYPE; var=; htmlsafe=true                                   |
| 232 | m4:count      | outputdef=; var=iCountEmail                                                             |
| 233 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_EMAIL; var=; htmlsafe=true                       |
| 237 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_SEND; var=; htmlsafe=true       |
| 238 | m4:dataloop   | outputdef=                                                                              |
| 240 | m4:item       | outputdef=; item=STD_EMAIL; var=; htmlsafe=true                                         |
| 265 | m4:count      | outputdef=; var=iCountJob                                                               |
| 266 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_JOB; var=; htmlsafe=true                         |
| 270 | m4:dataloop   | outputdef=                                                                              |
| 272 | m4:item       | outputdef=; item=STD_N_JOB_CODE; var=; htmlsafe=true                                    |
| 286 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_WLOC; var=; htmlsafe=true       |
| 288 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=STD_N_WORK_LOCATION; var=; htmlsafe=true              |
| 295 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_WUNIT; var=; htmlsafe=true      |
| 297 | m4:label      | get=item; outputdef=SGCO_INF_EMPLOYEE; item=SCO_PRP_LBL_ORG_CHART; var=; htmlsafe=true  |
| 298 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=SCO_ID_WORK_UNIT; var=; htmlsafe=true                 |
| 299 | m4:item       | outputdef=SGCO_INF_EMPLOYEE; item=STD_N_WORK_UNIT; var=; htmlsafe=true                  |
| 308 | m4:count      | outputdef=; var=iCountResp                                                              |
| 309 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_RESP; var=; htmlsafe=true                        |
| 313 | m4:label      | get=item; outputdef=; item=SCO_PRP_LBL_VIEW; var=; htmlsafe=true                        |
| 314 | m4:dataloop   | outputdef=                                                                              |
| 316 | m4:item       | outputdef=; item=SCO_PRP_RESP_ID_HR; var=; htmlsafe=true                                |
| 317 | m4:item       | outputdef=; item=SCO_PRP_RESP_GB_NAME; var=; htmlsafe=true                              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 33  | if (sIdHR == null) {sIdHR="";}                                                                                |
| 34  | if (!sIdHR.equals("")) {                                                                                      |
| 190 | if (iCountPhone.intValue() &gt; 0) {                                                                          |
| 198 | if (sIdLine.equals("001")) {                                                                                  |
| 200 | } else if (sIdLine.equals("002")) {                                                                           |
| 202 | } else if (sIdLine.equals("003")) {                                                                           |
| 204 | } else {                                                                                                      |
| 207 | if (iCountAux == 1) {%&gt;                                                                                    |
| 209 | &lt;%} else if (iCountAux &gt; 1) {                                                                           |
| 210 | if (iCountAux == 2) {                                                                                         |
| 217 | if (iCountAux &gt; 1) {                                                                                       |
| 220 | } else {%&gt;                                                                                                 |
| 235 | if (iCountEmail.intValue() &gt; 0) {                                                                          |
| 241 | if (iCountAux == 1) {%&gt;                                                                                    |
| 243 | &lt;%} else if (iCountAux &gt; 1) {                                                                           |
| 244 | if (iCountAux == 2) {                                                                                         |
| 251 | if (iCountAux &gt; 1) {                                                                                       |
| 254 | } else {%&gt;                                                                                                 |
| 268 | if (iCountJob.intValue() &gt; 0) {                                                                            |
| 273 | &lt;% if (iCountAux == 1) {%&gt;                                                                              |
| 277 | } else {%&gt;                                                                                                 |
| 311 | if (iCountResp.intValue() &gt; 0) {                                                                           |
| 318 | if (iCountAux == 1) {%&gt;                                                                                    |
| 320 | &lt;%} else if (iCountAux &gt; 1) {                                                                           |
| 321 | if (iCountAux == 2) {                                                                                         |
| 328 | if (iCountAux &gt; 1) {                                                                                       |
| 331 | } else {%&gt;                                                                                                 |
| 30  | expresión de cálculo/transformación: String sPathTempURI = m4Session.getUserTempURI() + '/';                  |
| 42  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                    |
| 43  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                            |
| 44  | expresión de cálculo/transformación: String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";              |
| 54  | expresión de cálculo/transformación: String sDataDefPhone = sMeta4Object + "!" + sNodePhone;                  |
| 55  | expresión de cálculo/transformación: String sOutputDefPhone = sDataDefPhone + "[*]";                          |
| 63  | expresión de cálculo/transformación: String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;                  |
| 64  | expresión de cálculo/transformación: String sOutputDefEmail = sDataDefEmail + "[*]";                          |
| 70  | expresión de cálculo/transformación: String sDataDefJob = sMeta4Object + "!" + sNodeJob;                      |
| 71  | expresión de cálculo/transformación: String sOutputDefJob = sDataDefJob + "[*]";                              |
| 77  | expresión de cálculo/transformación: String sDataDefResp = sMeta4Object + "!" + sNodeResp;                    |
| 78  | expresión de cálculo/transformación: String sOutputDefResp = sDataDefResp + "[*]";                            |
| 84  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                     |
| 111 | expresión de cálculo/transformación: iCountMain = Integer.parseInt(sCountMain);                               |
| 113 | expresión de cálculo/transformación: sMoveMain = sNodeMain + ":" + sNodeMain + "[" + String.valueOf(i) + "]"; |
| 114 | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 115 | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |
| 116 | expresión de cálculo/transformación: sNodeAuxJob = sNodeJob + String.valueOf(i);                              |
| 117 | expresión de cálculo/transformación: sNodeAuxResp = sNodeResp + String.valueOf(i);                            |
| 131 | expresión de cálculo/transformación: iCount = Integer.parseInt(sCountMain);                                   |
| 186 | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 231 | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |
| 264 | expresión de cálculo/transformación: sNodeAuxJob = sNodeJob + String.valueOf(i);                              |
| 307 | expresión de cálculo/transformación: sNodeAuxResp = sNodeResp + String.valueOf(i);                            |
| 315 | expresión de cálculo/transformación: iCountAux = iCountAux + 1;%&gt;                                          |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../sse_generico/sse_generico_taglib.jsp |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 12  | /libreria/mootools.js                                                                  |
| 13  | /libreria/meta4ajax.js                                                                 |
| 14  | /libreria/meta4photo.js                                                                |
| 15  | /libreria/functions_infemp.js                                                          |
| 16  | /css/style_infemp.css                                                                  |
| 155 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                               |
| 178 | /iconos/lu_add_con_nor_24.png                                                          |
| 208 | &lt;%=sIdLine%&gt;                                                                     |
| 211 | /iconos/menu_closed.png                                                                |
| 214 | &lt;%=sIdLine%&gt;                                                                     |
| 242 | mailto:&lt;%=sEmail%&gt;                                                               |
| 245 | /iconos/menu_closed.png                                                                |
| 248 | mailto:&lt;%=sEmail%&gt;                                                               |
| 300 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=&lt;%=sIdWorkUnit%&gt; |
| 319 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt;          |
| 322 | /iconos/menu_closed.png                                                                |
| 325 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt;          |
| 9   | ../sse_generico/sse_generico_taglib.jsp                                                |
| 25  | com.meta4.jsp                                                                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                             | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../ssco_g0_inf_emp.jsp                                                                 | física     | [sse_g0/ssco_g0_inf_emp.jsp](sse_g0--ssco_g0_inf_emp.md)                                                  |
| BASE   | 1   | ../ssco_g0_inf_emp.jsp                                                                 | física     | [sse_g0/ssco_g0_inf_emp.jsp](sse_g0--ssco_g0_inf_emp.md)                                                  |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                                                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 12  | /libreria/mootools.js                                                                  | contextual | &#96;libreria/mootools.js&#96;                                                                            |
| BASE   | 13  | /libreria/meta4ajax.js                                                                 | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                            |
| BASE   | 14  | /libreria/meta4photo.js                                                                | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)                          |
| BASE   | 15  | /libreria/functions_infemp.js                                                          | contextual | [libreria/functions_infemp.js](../../transversal/dependencias/libreria--functions_infemp.md)              |
| BASE   | 155 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                               | contextual | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                            |
| BASE   | 208 | &lt;%=sIdLine%&gt;                                                                     | dinámica   | P06                                                                                                       |
| BASE   | 214 | &lt;%=sIdLine%&gt;                                                                     | dinámica   | P06                                                                                                       |
| BASE   | 242 | mailto:&lt;%=sEmail%&gt;                                                               | dinámica   | P06                                                                                                       |
| BASE   | 248 | mailto:&lt;%=sEmail%&gt;                                                               | dinámica   | P06                                                                                                       |
| BASE   | 300 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=&lt;%=sIdWorkUnit%&gt; | contextual | [sse_g0/ssco_g0_org_chart.jsp](sse_g0--ssco_g0_org_chart.md)                                              |
| BASE   | 319 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt;          | contextual | [sse_g0/ssco_g0_inf_emp.jsp](sse_g0--ssco_g0_inf_emp.md)                                                  |
| BASE   | 325 | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_inf_emp.jsp?IdHR=&lt;%=sIdResp%&gt;          | contextual | [sse_g0/ssco_g0_inf_emp.jsp](sse_g0--ssco_g0_inf_emp.md)                                                  |
| BASE   | 9   | ../sse_generico/sse_generico_taglib.jsp                                                | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md) |
| BASE   | 25  | com.meta4.jsp                                                                          | ausente    | P06                                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_g0_inf_emp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
