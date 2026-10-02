# sgco_engine_tasks

Identificador: `sse_generico/sgco_engine_tasks.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                             | Solo en BASE                                                                   |
| ------ | --------- | ------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                                      | sin diferencia en estos identificadores                                        |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores                                      | sin diferencia en estos identificadores                                        |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                                      | sin diferencia en estos identificadores                                        |
| COLL   | shared    | contenido diferente | m4:datadef:CSP_TASKS; m4:exec:CSP_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} | m4:datadef:SGCO_TASKS; m4:exec:SGCO_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} |
| CYC    | shared    | contenido diferente | m4:datadef:CSP_TASKS; m4:exec:CSP_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} | m4:datadef:SGCO_TASKS; m4:exec:SGCO_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} |
| IBER   | shared    | contenido diferente | m4:datadef:CSP_TASKS; m4:exec:CSP_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} | m4:datadef:SGCO_TASKS; m4:exec:SGCO_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_engine_tasks.jsp) | `6b81c67372184ac7e85f4d964e10b1680dc6405f1c16c421e7ea9e282cc4ae1b` |      1 |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_engine_tasks.jsp)                 | `0cf430ccee5cb9f5bae485ba2779576fdb63a98d1281264d09306b3a76c7a8c3` |    287 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_engine_tasks.jsp)   | `6b81c67372184ac7e85f4d964e10b1680dc6405f1c16c421e7ea9e282cc4ae1b` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_engine_tasks.jsp)                   | `0cf430ccee5cb9f5bae485ba2779576fdb63a98d1281264d09306b3a76c7a8c3` |    287 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_engine_tasks.jsp) | `6b81c67372184ac7e85f4d964e10b1680dc6405f1c16c421e7ea9e282cc4ae1b` |      1 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_engine_tasks.jsp)                 | `0cf430ccee5cb9f5bae485ba2779576fdb63a98d1281264d09306b3a76c7a8c3` |    287 |
| BASE / español    | [sse_generico/espanol/sgco_engine_tasks.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_engine_tasks.jsp)                             | `6b81c67372184ac7e85f4d964e10b1680dc6405f1c16c421e7ea9e282cc4ae1b` |      1 |
| BASE / compartido | [sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/sse_generico/sgco_engine_tasks.jsp)                                             | `cc06788ed9f2feeb016a4555a5c7fd7ce716274208be9415af9dc5e948bb396d` |    287 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_engine_tasks.jsp). Líneas físicas, contando desde 1.

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
| 1   | ../sgco_engine_tasks.jsp |

| L   | Destino / recurso        |
| --- | ------------------------ |
| 1   | ../sgco_engine_tasks.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_engine_tasks.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 153 | ([valor dinámico])                  |
| 276 | [valor dinámico] ([valor dinámico]) |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                        |
| --- | ------- | -------------------------------------------------------------------------------- |
| 153 | a       | class=m4link; title=&lt;%=sToolTipLevelLeft%&gt;; href=&lt;%=sLinkLevelLeft%&gt; |
| 166 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLinkMore%&gt;               |
| 242 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sRedirection%&gt;            |
| 251 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLinkMore%&gt;               |
| 276 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLink%&gt;                   |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable             | Expresión fuente                                                                                           | Resolución estática parcial                                                                                |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 17  | sPathTempMap         | m4Session.getPathTempMapping()                                                                             | m4Session.getPathTempMapping()                                                                             |
| 19  | sSubSession          | "SGCO_MENU"                                                                                                | SGCO_MENU                                                                                                  |
| 20  | sMeta4Object         | "CSP_TASKS"                                                                                                | CSP_TASKS                                                                                                  |
| 22  | sNodeMain            | "SGCO_MAIN_TASKS"                                                                                          | SGCO_MAIN_TASKS                                                                                            |
| 23  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                             | CSP_TASKS{"!"}SGCO_MAIN_TASKS                                                                              |
| 24  | sOutputDefMain       | sDataDefMain + "[*]"                                                                                       | CSP_TASKS{"!"}SGCO_MAIN_TASKS{"[*]"}                                                                       |
| 25  | sMethodLoad          | sDataDefMain + ".SCO_MTD_LOAD"                                                                             | CSP_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"}                                                             |
| 27  | sTasksTitle          | "", sMore = "", sLinkMore = "", sNone = ""                                                                 | {, sMore = "", sLinkMore = "", sNone = ""}                                                                 |
| 29  | sNodeValida          | "SGCO_VALIDATIONS_TASKS"                                                                                   | SGCO_VALIDATIONS_TASKS                                                                                     |
| 30  | sNodeValidaOutputDef | sMeta4Object + "!" + sNodeValida + "[*]"                                                                   | CSP_TASKS{"!"}SGCO_VALIDATIONS_TASKS{"[*]"}                                                                |
| 32  | sValidTitle          | "", sValidCount = ""                                                                                       | {, sValidCount = ""}                                                                                       |
| 34  | sNodeTask            | "SGCO_TASKS_TASKS"                                                                                         | SGCO_TASKS_TASKS                                                                                           |
| 35  | sNodeTaskOutputDef   | sMeta4Object + "!" + sNodeTask + "[*]"                                                                     | CSP_TASKS{"!"}SGCO_TASKS_TASKS{"[*]"}                                                                      |
| 37  | sTaskTitle           | "", sTaskCount = ""                                                                                        | {, sTaskCount = ""}                                                                                        |
| 39  | sNodeValua           | "SGCO_VALUATIONS_TASKS"                                                                                    | SGCO_VALUATIONS_TASKS                                                                                      |
| 40  | sNodeValuaOutputDef  | sMeta4Object + "!" + sNodeValua + "[*]"                                                                    | CSP_TASKS{"!"}SGCO_VALUATIONS_TASKS{"[*]"}                                                                 |
| 42  | sValuaTitle          | "", sValuaCount = ""                                                                                       | {, sValuaCount = ""}                                                                                       |
| 67  | sToolTip             | "", sLink = ""                                                                                             | {, sLink = ""}                                                                                             |
| 68  | iReg                 | 0, iValidCount = 0, iTaskCount = 0, iValuaCount = 0, iTotalCount = 0                                       | 0, iValidCount = 0, iTaskCount = 0, iValuaCount = 0, iTotalCount = 0                                       |
| 98  | sValidMaxLines       | ""                                                                                                         |                                                                                                            |
| 110 | iValidMaxLines       | Integer.parseInt(sValidMaxLines)                                                                           | Integer.parseInt(sValidMaxLines)                                                                           |
| 111 | iPos                 | 0                                                                                                          | 0                                                                                                          |
| 112 | sCountLevel          | "", sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = "" | {, sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = ""} |
| 175 | sTaskMaxLines        | ""                                                                                                         |                                                                                                            |
| 187 | iTaskMaxLines        | Integer.parseInt(sTaskMaxLines)                                                                            | Integer.parseInt(sTaskMaxLines)                                                                            |
| 203 | sValue               | ""                                                                                                         |                                                                                                            |
| 203 | sValueAux            | ""                                                                                                         |                                                                                                            |
| 203 | sValueEncr           | ""                                                                                                         |                                                                                                            |
| 203 | sRedirection         | ""                                                                                                         |                                                                                                            |
| 204 | contador             | 0                                                                                                          | 0                                                                                                          |
| 204 | nPos                 | 0                                                                                                          | 0                                                                                                          |
| 260 | sTaskMaxLines        | ""                                                                                                         |                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                        |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | m4:page      | subsessionid=SGCO_MENU                                                                                                                                                                    |
| 47  | m4:job       |                                                                                                                                                                                           |
| 48  | m4:datadef   | m4name=CSP_TASKS; m4o=CSP_TASKS                                                                                                                                                           |
| 49  | m4:exec      | m4method=CSP_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"}                                                                                                                                   |
| 50  | m4:param     | name=ARG_PATH_TEMP; value=m4Session.getPathTempMapping()                                                                                                                                  |
| 52  | m4:outputdef | m4alias=SGCO_MAIN_TASKS                                                                                                                                                                   |
| 53  | m4:param     | name=M4NAME0; value=CSP_TASKS{"!"}SGCO_MAIN_TASKS{"[*]"}                                                                                                                                  |
| 55  | m4:outputdef | m4alias=SGCO_VALIDATIONS_TASKS                                                                                                                                                            |
| 56  | m4:param     | name=M4NAME0; value=CSP_TASKS{"!"}SGCO_VALIDATIONS_TASKS{"[*]"}                                                                                                                           |
| 58  | m4:outputdef | m4alias=SGCO_TASKS_TASKS                                                                                                                                                                  |
| 59  | m4:param     | name=M4NAME0; value=CSP_TASKS{"!"}SGCO_TASKS_TASKS{"[*]"}                                                                                                                                 |
| 61  | m4:outputdef | m4alias=SGCO_VALUATIONS_TASKS                                                                                                                                                             |
| 62  | m4:param     | name=M4NAME0; value=CSP_TASKS{"!"}SGCO_VALUATIONS_TASKS{"[*]"}                                                                                                                            |
| 78  | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE; var={, sMore = "", sLinkMore = "", sNone = ""}; htmlsafe=true                                                                    |
| 79  | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_MORE; var=sMore; htmlsafe=true                                                                                                          |
| 80  | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_LINK_MORE; var=sLinkMore; htmlsafe=true                                                                                                           |
| 89  | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_NONE_TASK; var=sNone; htmlsafe=true                                                                                                               |
| 100 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_VALID; var={, sValidCount = ""}; htmlsafe=true                                                                                    |
| 101 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_VALID; var=sValidCount; htmlsafe=true                                                                                                           |
| 102 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_MAX_VALID; var=; htmlsafe=true                                                                                                                  |
| 114 | m4:dataloop  | outputdef=SGCO_VALIDATIONS_TASKS                                                                                                                                                          |
| 119 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                 |
| 120 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TITLE; var={, sValidCount = ""}; htmlsafe=true                                                                                             |
| 121 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_COUNT_LEVEL; var={, sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = ""}; htmlsafe=true |
| 122 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_LINK_LEVEL; var=sLinkLevel; htmlsafe=true                                                                                                  |
| 123 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TOOLTIP_LEVEL; var=sToolTipLevel; htmlsafe=true                                                                                            |
| 165 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TOOLTIP_VALID; var={, sLink = ""}; htmlsafe=true                                                                                                  |
| 177 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_TASK; var={, sTaskCount = ""}; htmlsafe=true                                                                                      |
| 178 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_TASK; var=sTaskCount; htmlsafe=true                                                                                                             |
| 179 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_MAX_TASK; var=; htmlsafe=true                                                                                                                   |
| 190 | m4:dataloop  | outputdef=SGCO_TASKS_TASKS                                                                                                                                                                |
| 195 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TITLE; var={, sTaskCount = ""}; htmlsafe=true                                                                                                    |
| 196 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                       |
| 197 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_LINK; var=sLink; htmlsafe=true                                                                                                                   |
| 250 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TOOLTIP_TASK; var={, sLink = ""}; htmlsafe=true                                                                                                   |
| 262 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_VALUA; var={, sValuaCount = ""}; htmlsafe=true                                                                                    |
| 263 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_VALUA; var=sValuaCount; htmlsafe=true                                                                                                           |
| 271 | m4:dataloop  | outputdef=SGCO_TASKS_TASKS                                                                                                                                                                |
| 272 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TITLE; var={, sValuaCount = ""}; htmlsafe=true                                                                                                   |
| 273 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                       |
| 274 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_LINK; var=sLink; htmlsafe=true                                                                                                                   |
| 275 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_COUNT; var=sValuaCount; htmlsafe=true                                                                                                            |

| L   | Operación | Argumentos literales                 |
| --- | --------- | ------------------------------------ |
| 71  | getCount  | sNodeValida,sMeta4Object,sNodeValida |
| 72  | getCount  | sNodeTask,sMeta4Object,sNodeTask     |
| 73  | getCount  | sNodeValua,sMeta4Object,sNodeValua   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 87  | if (iTotalCount == 0) {                                                                                      |
| 92  | } else {                                                                                                     |
| 97  | if (iValidCount &gt; 0) {                                                                                    |
| 116 | if (iReg &lt; iValidMaxLines) {                                                                              |
| 129 | if (iPos &gt; -1) {                                                                                          |
| 131 | } else {                                                                                                     |
| 137 | if (iPos &gt; -1) {                                                                                          |
| 139 | } else {                                                                                                     |
| 145 | if (iPos &gt; -1) {                                                                                          |
| 147 | } else {                                                                                                     |
| 163 | if (iValidCount &gt; iValidMaxLines) {                                                                       |
| 174 | if (iTaskCount &gt; 0) {                                                                                     |
| 192 | if (iReg &lt; iTaskMaxLines) {                                                                               |
| 206 | if ((sLink.indexOf("?") != -1)&amp;&amp;(sLink.indexOf("=") != -1)){                                         |
| 216 | if (nPos &gt;= 0){                                                                                           |
| 225 | }else{                                                                                                       |
| 228 | if (contador == 0){                                                                                          |
| 230 | }else{                                                                                                       |
| 238 | }else{                                                                                                       |
| 248 | if (iValidCount &gt; iTaskMaxLines) {                                                                        |
| 259 | if (iValuaCount &gt; 0) {                                                                                    |
| 23  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                   |
| 24  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                           |
| 25  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                    |
| 30  | expresión de cálculo/transformación: String sNodeValidaOutputDef = sMeta4Object + "!" + sNodeValida + "[*]"; |
| 35  | expresión de cálculo/transformación: String sNodeTaskOutputDef = sMeta4Object + "!" + sNodeTask + "[*]";     |
| 40  | expresión de cálculo/transformación: String sNodeValuaOutputDef = sMeta4Object + "!" + sNodeValua + "[*]";   |
| 75  | expresión de cálculo/transformación: iTotalCount = iValidCount + iTaskCount + iValuaCount;                   |
| 110 | expresión de cálculo/transformación: int iValidMaxLines = Integer.parseInt(sValidMaxLines);                  |
| 133 | expresión de cálculo/transformación: iPos = sCountLevel.length() - 1;                                        |
| 135 | expresión de cálculo/transformación: sCountLevel = sCountLevel.substring(iPos + 1);                          |
| 141 | expresión de cálculo/transformación: iPos = sLinkLevel.length() - 1;                                         |
| 143 | expresión de cálculo/transformación: sLinkLevel = sLinkLevel.substring(iPos + 1);                            |
| 149 | expresión de cálculo/transformación: iPos = sToolTipLevel.length() - 1;                                      |
| 151 | expresión de cálculo/transformación: sToolTipLevel = sToolTipLevel.substring(iPos + 1);                      |
| 187 | expresión de cálculo/transformación: int iTaskMaxLines = Integer.parseInt(sTaskMaxLines);                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso         |
| --- | ------------------------- |
| 153 | &lt;%=sLinkLevelLeft%&gt; |
| 166 | &lt;%=sLinkMore%&gt;      |
| 242 | &lt;%=sRedirection%&gt;   |
| 251 | &lt;%=sLinkMore%&gt;      |
| 276 | &lt;%=sLink%&gt;          |
| 11  | com.meta4.jsp             |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [sse_generico/sgco_engine_tasks.jsp](../../../../clon_portal/portal/sse_generico/sgco_engine_tasks.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 153 | ([valor dinámico])                  |
| 276 | [valor dinámico] ([valor dinámico]) |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                        |
| --- | ------- | -------------------------------------------------------------------------------- |
| 153 | a       | class=m4link; title=&lt;%=sToolTipLevelLeft%&gt;; href=&lt;%=sLinkLevelLeft%&gt; |
| 166 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLinkMore%&gt;               |
| 242 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sRedirection%&gt;            |
| 251 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLinkMore%&gt;               |
| 276 | a       | class=m4link; title=&lt;%=sToolTip%&gt;; href=&lt;%=sLink%&gt;                   |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable             | Expresión fuente                                                                                           | Resolución estática parcial                                                                                |
| --- | -------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 17  | sPathTempMap         | m4Session.getPathTempMapping()                                                                             | m4Session.getPathTempMapping()                                                                             |
| 19  | sSubSession          | "SGCO_MENU"                                                                                                | SGCO_MENU                                                                                                  |
| 20  | sMeta4Object         | "SGCO_TASKS"                                                                                               | SGCO_TASKS                                                                                                 |
| 22  | sNodeMain            | "SGCO_MAIN_TASKS"                                                                                          | SGCO_MAIN_TASKS                                                                                            |
| 23  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                             | SGCO_TASKS{"!"}SGCO_MAIN_TASKS                                                                             |
| 24  | sOutputDefMain       | sDataDefMain + "[*]"                                                                                       | SGCO_TASKS{"!"}SGCO_MAIN_TASKS{"[*]"}                                                                      |
| 25  | sMethodLoad          | sDataDefMain + ".SCO_MTD_LOAD"                                                                             | SGCO_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"}                                                            |
| 27  | sTasksTitle          | "", sMore = "", sLinkMore = "", sNone = ""                                                                 | {, sMore = "", sLinkMore = "", sNone = ""}                                                                 |
| 29  | sNodeValida          | "SGCO_VALIDATIONS_TASKS"                                                                                   | SGCO_VALIDATIONS_TASKS                                                                                     |
| 30  | sNodeValidaOutputDef | sMeta4Object + "!" + sNodeValida + "[*]"                                                                   | SGCO_TASKS{"!"}SGCO_VALIDATIONS_TASKS{"[*]"}                                                               |
| 32  | sValidTitle          | "", sValidCount = ""                                                                                       | {, sValidCount = ""}                                                                                       |
| 34  | sNodeTask            | "SGCO_TASKS_TASKS"                                                                                         | SGCO_TASKS_TASKS                                                                                           |
| 35  | sNodeTaskOutputDef   | sMeta4Object + "!" + sNodeTask + "[*]"                                                                     | SGCO_TASKS{"!"}SGCO_TASKS_TASKS{"[*]"}                                                                     |
| 37  | sTaskTitle           | "", sTaskCount = ""                                                                                        | {, sTaskCount = ""}                                                                                        |
| 39  | sNodeValua           | "SGCO_VALUATIONS_TASKS"                                                                                    | SGCO_VALUATIONS_TASKS                                                                                      |
| 40  | sNodeValuaOutputDef  | sMeta4Object + "!" + sNodeValua + "[*]"                                                                    | SGCO_TASKS{"!"}SGCO_VALUATIONS_TASKS{"[*]"}                                                                |
| 42  | sValuaTitle          | "", sValuaCount = ""                                                                                       | {, sValuaCount = ""}                                                                                       |
| 67  | sToolTip             | "", sLink = ""                                                                                             | {, sLink = ""}                                                                                             |
| 68  | iReg                 | 0, iValidCount = 0, iTaskCount = 0, iValuaCount = 0, iTotalCount = 0                                       | 0, iValidCount = 0, iTaskCount = 0, iValuaCount = 0, iTotalCount = 0                                       |
| 98  | sValidMaxLines       | ""                                                                                                         |                                                                                                            |
| 110 | iValidMaxLines       | Integer.parseInt(sValidMaxLines)                                                                           | Integer.parseInt(sValidMaxLines)                                                                           |
| 111 | iPos                 | 0                                                                                                          | 0                                                                                                          |
| 112 | sCountLevel          | "", sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = "" | {, sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = ""} |
| 175 | sTaskMaxLines        | ""                                                                                                         |                                                                                                            |
| 187 | iTaskMaxLines        | Integer.parseInt(sTaskMaxLines)                                                                            | Integer.parseInt(sTaskMaxLines)                                                                            |
| 203 | sValue               | ""                                                                                                         |                                                                                                            |
| 203 | sValueAux            | ""                                                                                                         |                                                                                                            |
| 203 | sValueEncr           | ""                                                                                                         |                                                                                                            |
| 203 | sRedirection         | ""                                                                                                         |                                                                                                            |
| 204 | contador             | 0                                                                                                          | 0                                                                                                          |
| 204 | nPos                 | 0                                                                                                          | 0                                                                                                          |
| 260 | sTaskMaxLines        | ""                                                                                                         |                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                        |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | m4:page      | subsessionid=SGCO_MENU                                                                                                                                                                    |
| 47  | m4:job       |                                                                                                                                                                                           |
| 48  | m4:datadef   | m4name=SGCO_TASKS; m4o=SGCO_TASKS                                                                                                                                                         |
| 49  | m4:exec      | m4method=SGCO_TASKS{"!"}SGCO_MAIN_TASKS{".SCO_MTD_LOAD"}                                                                                                                                  |
| 50  | m4:param     | name=ARG_PATH_TEMP; value=m4Session.getPathTempMapping()                                                                                                                                  |
| 52  | m4:outputdef | m4alias=SGCO_MAIN_TASKS                                                                                                                                                                   |
| 53  | m4:param     | name=M4NAME0; value=SGCO_TASKS{"!"}SGCO_MAIN_TASKS{"[*]"}                                                                                                                                 |
| 55  | m4:outputdef | m4alias=SGCO_VALIDATIONS_TASKS                                                                                                                                                            |
| 56  | m4:param     | name=M4NAME0; value=SGCO_TASKS{"!"}SGCO_VALIDATIONS_TASKS{"[*]"}                                                                                                                          |
| 58  | m4:outputdef | m4alias=SGCO_TASKS_TASKS                                                                                                                                                                  |
| 59  | m4:param     | name=M4NAME0; value=SGCO_TASKS{"!"}SGCO_TASKS_TASKS{"[*]"}                                                                                                                                |
| 61  | m4:outputdef | m4alias=SGCO_VALUATIONS_TASKS                                                                                                                                                             |
| 62  | m4:param     | name=M4NAME0; value=SGCO_TASKS{"!"}SGCO_VALUATIONS_TASKS{"[*]"}                                                                                                                           |
| 78  | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE; var={, sMore = "", sLinkMore = "", sNone = ""}; htmlsafe=true                                                                    |
| 79  | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_MORE; var=sMore; htmlsafe=true                                                                                                          |
| 80  | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_LINK_MORE; var=sLinkMore; htmlsafe=true                                                                                                           |
| 89  | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_NONE_TASK; var=sNone; htmlsafe=true                                                                                                               |
| 100 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_VALID; var={, sValidCount = ""}; htmlsafe=true                                                                                    |
| 101 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_VALID; var=sValidCount; htmlsafe=true                                                                                                           |
| 102 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_MAX_VALID; var=; htmlsafe=true                                                                                                                  |
| 114 | m4:dataloop  | outputdef=SGCO_VALIDATIONS_TASKS                                                                                                                                                          |
| 119 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                 |
| 120 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TITLE; var={, sValidCount = ""}; htmlsafe=true                                                                                             |
| 121 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_COUNT_LEVEL; var={, sLinkLevel = "", sToolTipLevel = "", sCountLevelLeft = "", sLinkLevelLeft = "", sToolTipLevelLeft = ""}; htmlsafe=true |
| 122 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_LINK_LEVEL; var=sLinkLevel; htmlsafe=true                                                                                                  |
| 123 | m4:item      | outputdef=SGCO_VALIDATIONS_TASKS; item=SCO_PRP_TOOLTIP_LEVEL; var=sToolTipLevel; htmlsafe=true                                                                                            |
| 165 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TOOLTIP_VALID; var={, sLink = ""}; htmlsafe=true                                                                                                  |
| 177 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_TASK; var={, sTaskCount = ""}; htmlsafe=true                                                                                      |
| 178 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_TASK; var=sTaskCount; htmlsafe=true                                                                                                             |
| 179 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_MAX_TASK; var=; htmlsafe=true                                                                                                                   |
| 190 | m4:dataloop  | outputdef=SGCO_TASKS_TASKS                                                                                                                                                                |
| 195 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TITLE; var={, sTaskCount = ""}; htmlsafe=true                                                                                                    |
| 196 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                       |
| 197 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_LINK; var=sLink; htmlsafe=true                                                                                                                   |
| 250 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TOOLTIP_TASK; var={, sLink = ""}; htmlsafe=true                                                                                                   |
| 262 | m4:label     | get=item; outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_TITLE_VALUA; var={, sValuaCount = ""}; htmlsafe=true                                                                                    |
| 263 | m4:item      | outputdef=SGCO_MAIN_TASKS; item=SCO_PRP_N_VALUA; var=sValuaCount; htmlsafe=true                                                                                                           |
| 271 | m4:dataloop  | outputdef=SGCO_TASKS_TASKS                                                                                                                                                                |
| 272 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TITLE; var={, sValuaCount = ""}; htmlsafe=true                                                                                                   |
| 273 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_TOOLTIP; var={, sLink = ""}; htmlsafe=true                                                                                                       |
| 274 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_LINK; var=sLink; htmlsafe=true                                                                                                                   |
| 275 | m4:item      | outputdef=SGCO_TASKS_TASKS; item=SCO_PRP_COUNT; var=sValuaCount; htmlsafe=true                                                                                                            |

| L   | Operación | Argumentos literales                 |
| --- | --------- | ------------------------------------ |
| 71  | getCount  | sNodeValida,sMeta4Object,sNodeValida |
| 72  | getCount  | sNodeTask,sMeta4Object,sNodeTask     |
| 73  | getCount  | sNodeValua,sMeta4Object,sNodeValua   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 87  | if (iTotalCount == 0) {                                                                                      |
| 92  | } else {                                                                                                     |
| 97  | if (iValidCount &gt; 0) {                                                                                    |
| 116 | if (iReg &lt; iValidMaxLines) {                                                                              |
| 129 | if (iPos &gt; -1) {                                                                                          |
| 131 | } else {                                                                                                     |
| 137 | if (iPos &gt; -1) {                                                                                          |
| 139 | } else {                                                                                                     |
| 145 | if (iPos &gt; -1) {                                                                                          |
| 147 | } else {                                                                                                     |
| 163 | if (iValidCount &gt; iValidMaxLines) {                                                                       |
| 174 | if (iTaskCount &gt; 0) {                                                                                     |
| 192 | if (iReg &lt; iTaskMaxLines) {                                                                               |
| 206 | if ((sLink.indexOf("?") != -1)&amp;&amp;(sLink.indexOf("=") != -1)){                                         |
| 216 | if (nPos &gt;= 0){                                                                                           |
| 225 | }else{                                                                                                       |
| 228 | if (contador == 0){                                                                                          |
| 230 | }else{                                                                                                       |
| 238 | }else{                                                                                                       |
| 248 | if (iValidCount &gt; iTaskMaxLines) {                                                                        |
| 259 | if (iValuaCount &gt; 0) {                                                                                    |
| 23  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                   |
| 24  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                           |
| 25  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                    |
| 30  | expresión de cálculo/transformación: String sNodeValidaOutputDef = sMeta4Object + "!" + sNodeValida + "[*]"; |
| 35  | expresión de cálculo/transformación: String sNodeTaskOutputDef = sMeta4Object + "!" + sNodeTask + "[*]";     |
| 40  | expresión de cálculo/transformación: String sNodeValuaOutputDef = sMeta4Object + "!" + sNodeValua + "[*]";   |
| 75  | expresión de cálculo/transformación: iTotalCount = iValidCount + iTaskCount + iValuaCount;                   |
| 110 | expresión de cálculo/transformación: int iValidMaxLines = Integer.parseInt(sValidMaxLines);                  |
| 133 | expresión de cálculo/transformación: iPos = sCountLevel.length() - 1;                                        |
| 135 | expresión de cálculo/transformación: sCountLevel = sCountLevel.substring(iPos + 1);                          |
| 141 | expresión de cálculo/transformación: iPos = sLinkLevel.length() - 1;                                         |
| 143 | expresión de cálculo/transformación: sLinkLevel = sLinkLevel.substring(iPos + 1);                            |
| 149 | expresión de cálculo/transformación: iPos = sToolTipLevel.length() - 1;                                      |
| 151 | expresión de cálculo/transformación: sToolTipLevel = sToolTipLevel.substring(iPos + 1);                      |
| 187 | expresión de cálculo/transformación: int iTaskMaxLines = Integer.parseInt(sTaskMaxLines);                    |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso         |
| --- | ------------------------- |
| 153 | &lt;%=sLinkLevelLeft%&gt; |
| 166 | &lt;%=sLinkMore%&gt;      |
| 242 | &lt;%=sRedirection%&gt;   |
| 251 | &lt;%=sLinkMore%&gt;      |
| 276 | &lt;%=sLink%&gt;          |
| 11  | com.meta4.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                | Resolución | Ficha / candidato                                                        |
| ------ | --- | ------------------------- | ---------- | ------------------------------------------------------------------------ |
| COLL   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| COLL   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| COLL   | 153 | &lt;%=sLinkLevelLeft%&gt; | dinámica   | P06                                                                      |
| COLL   | 166 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| COLL   | 242 | &lt;%=sRedirection%&gt;   | dinámica   | P06                                                                      |
| COLL   | 251 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| COLL   | 276 | &lt;%=sLink%&gt;          | dinámica   | P06                                                                      |
| COLL   | 11  | com.meta4.jsp             | ausente    | P06                                                                      |
| CYC    | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| CYC    | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| CYC    | 153 | &lt;%=sLinkLevelLeft%&gt; | dinámica   | P06                                                                      |
| CYC    | 166 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| CYC    | 242 | &lt;%=sRedirection%&gt;   | dinámica   | P06                                                                      |
| CYC    | 251 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| CYC    | 276 | &lt;%=sLink%&gt;          | dinámica   | P06                                                                      |
| CYC    | 11  | com.meta4.jsp             | ausente    | P06                                                                      |
| IBER   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| IBER   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| IBER   | 153 | &lt;%=sLinkLevelLeft%&gt; | dinámica   | P06                                                                      |
| IBER   | 166 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| IBER   | 242 | &lt;%=sRedirection%&gt;   | dinámica   | P06                                                                      |
| IBER   | 251 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| IBER   | 276 | &lt;%=sLink%&gt;          | dinámica   | P06                                                                      |
| IBER   | 11  | com.meta4.jsp             | ausente    | P06                                                                      |
| BASE   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| BASE   | 1   | ../sgco_engine_tasks.jsp  | física     | [sse_generico/sgco_engine_tasks.jsp](sse_generico--sgco_engine_tasks.md) |
| BASE   | 153 | &lt;%=sLinkLevelLeft%&gt; | dinámica   | P06                                                                      |
| BASE   | 166 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| BASE   | 242 | &lt;%=sRedirection%&gt;   | dinámica   | P06                                                                      |
| BASE   | 251 | &lt;%=sLinkMore%&gt;      | dinámica   | P06                                                                      |
| BASE   | 276 | &lt;%=sLink%&gt;          | dinámica   | P06                                                                      |
| BASE   | 11  | com.meta4.jsp             | ausente    | P06                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_engine_tasks.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
