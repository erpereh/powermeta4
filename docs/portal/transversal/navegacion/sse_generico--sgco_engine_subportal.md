# sgco_engine_subportal

Identificador: `sse_generico/sgco_engine_subportal.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_engine_subportal.jsp) | `7e4444703b41f6d745fe1290e8b42438068314d17098ee96d42bdfe0db1b20d8` |      1 |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_engine_subportal.jsp)                 | `707d652b627c258215330e444108046002529ab7861e74925712f8cad546e833` |    211 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_engine_subportal.jsp)   | `7e4444703b41f6d745fe1290e8b42438068314d17098ee96d42bdfe0db1b20d8` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_engine_subportal.jsp)                   | `707d652b627c258215330e444108046002529ab7861e74925712f8cad546e833` |    211 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_engine_subportal.jsp) | `7e4444703b41f6d745fe1290e8b42438068314d17098ee96d42bdfe0db1b20d8` |      1 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_engine_subportal.jsp)                 | `707d652b627c258215330e444108046002529ab7861e74925712f8cad546e833` |    211 |
| BASE / español    | [sse_generico/espanol/sgco_engine_subportal.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_engine_subportal.jsp)                             | `7e4444703b41f6d745fe1290e8b42438068314d17098ee96d42bdfe0db1b20d8` |      1 |
| BASE / compartido | [sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/sse_generico/sgco_engine_subportal.jsp)                                             | `fcd4bd2c88ef63a359d22ae6e9c8ebd90a8dd63f408c32c10a3f68ffef331086` |    211 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_engine_subportal.jsp). Líneas físicas, contando desde 1.

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
| 1   | ../sgco_engine_subportal.jsp |

| L   | Destino / recurso            |
| --- | ---------------------------- |
| 1   | ../sgco_engine_subportal.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_engine_subportal.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                            |
| --- | ------- | ---------------------------------------------------- |
| 125 | a       | class=m4link; href=&lt;%=sURLGroup%&gt;              |
| 159 | img     | title=&lt;%=sTitle%&gt;; src=/iconos/&lt;%=sImg%&gt; |
| 176 | a       | class=m4link; href=&lt;%=sURL%&gt;                   |
| 191 | a       | class=m4link; href=&lt;%=sURLGroup%&gt;              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | isESS           | getParameter(request,"isESS")  |
| 17  | MenuId          | getParameter(request,"MenuId") |

| L   | Variable        | Expresión fuente                                                                                                                                                                                                              | Resolución estática parcial                                                                                                                                                          |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14  | sIsESS          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS")                                                                                                                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS")                                                                                                                    |
| 17  | sMenuId         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MenuId")                                                                                                                                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MenuId")                                                                                                                   |
| 20  | sSubSession     | "SGCO_MENU"                                                                                                                                                                                                                   | SGCO_MENU                                                                                                                                                                            |
| 21  | sMeta4Object    | "MENUS"                                                                                                                                                                                                                       | MENUS                                                                                                                                                                                |
| 23  | sNodeMain       | "MENU_RECURSIVE"                                                                                                                                                                                                              | MENU_RECURSIVE                                                                                                                                                                       |
| 24  | sDataDefMain    | sMeta4Object + "!" + sNodeMain                                                                                                                                                                                                | MENUS{"!"}MENU_RECURSIVE                                                                                                                                                             |
| 25  | sOutputDefMain  | sDataDefMain + "[*]"                                                                                                                                                                                                          | MENUS{"!"}MENU_RECURSIVE{"[*]"}                                                                                                                                                      |
| 26  | sMethodLoad     | sDataDefMain + ".SRTC_LOAD_MENU"                                                                                                                                                                                              | MENUS{"!"}MENU_RECURSIVE{".SRTC_LOAD_MENU"}                                                                                                                                          |
| 27  | sMethodFilter   | sDataDefMain + ".SRTC_FILTER_MENU"                                                                                                                                                                                            | MENUS{"!"}MENU_RECURSIVE{".SRTC_FILTER_MENU"}                                                                                                                                        |
| 29  | sMenuLevel0     | "SGCO_MENU"                                                                                                                                                                                                                   | SGCO_MENU                                                                                                                                                                            |
| 30  | sMenuLevel1     | null                                                                                                                                                                                                                          | null                                                                                                                                                                                 |
| 31  | sMenuSectionAux | null                                                                                                                                                                                                                          | null                                                                                                                                                                                 |
| 32  | bESS            | ((int)Double.parseDouble(sIsESS) == 1)                                                                                                                                                                                        | ((int)Double.parseDouble(sIsESS) == 1)                                                                                                                                               |
| 45  | sMenuFilter     | "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 Then Return(1)" | If SRTC_ID_ROOT_MENU = \"{}null{"\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \""}null{"\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \""}null{"\", 0) &lt;&gt; 0 Then Return(1)"} |
| 46  | sMenuFilterId   | sDataDefMain + ".Filter"                                                                                                                                                                                                      | MENUS{"!"}MENU_RECURSIVE{".Filter"}                                                                                                                                                  |
| 48  | sIdMenuRead     | "", sLevelRead= ""                                                                                                                                                                                                            | {, sLevelRead= ""}                                                                                                                                                                   |
| 49  | sHeaderId       | "", sTitle = "", sDesc = "", sImg = "", sDefaultImg= "", sURL = "", sURLGroup = ""                                                                                                                                            | {, sTitle = "", sDesc = "", sImg = "", sDefaultImg= "", sURL = "", sURLGroup = ""}                                                                                                   |
| 50  | iLevelHeader    | -100, iLevelRead = 0                                                                                                                                                                                                          | -100, iLevelRead = 0                                                                                                                                                                 |
| 51  | bNextLevel      | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |
| 52  | bOpen           | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |
| 53  | bEmpty          | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                                                                                                        |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57  | m4:page         | subsessionid=SGCO_MENU                                                                                                                                                                                                                    |
| 58  | m4:job          |                                                                                                                                                                                                                                           |
| 59  | m4:datadef      | m4name=MENUS; m4o=MENUS                                                                                                                                                                                                                   |
| 60  | m4:exec         | m4method=MENUS{"!"}MENU_RECURSIVE{".SRTC_LOAD_MENU"}                                                                                                                                                                                      |
| 61  | m4:param        | name=ARG_SRTC_ID_MENU; value=SGCO_MENU                                                                                                                                                                                                    |
| 63  | m4:exec         | m4method=MENUS{"!"}MENU_RECURSIVE{".SRTC_FILTER_MENU"}                                                                                                                                                                                    |
| 64  | m4:param        | name=ARG_SRTC_ID_MENU; value=null                                                                                                                                                                                                         |
| 66  | m4:filter       | m4name=MENUS{"!"}MENU_RECURSIVE{".Filter"}; m4filter=If SRTC_ID_ROOT_MENU = \"{}null{"\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \""}null{"\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \""}null{"\", 0) &lt;&gt; 0 Then Return(1)"} |
| 67  | m4:outputdef    | m4alias=MENU_RECURSIVE                                                                                                                                                                                                                    |
| 68  | m4:param        | name=M4NAME0; value=MENUS{"!"}MENU_RECURSIVE{"[*]"}                                                                                                                                                                                       |
| 70  | m4:removefilter | m4name=MENUS{"!"}MENU_RECURSIVE{".Filter"}                                                                                                                                                                                                |
| 74  | m4:dataloop     | outputdef=MENU_RECURSIVE                                                                                                                                                                                                                  |
| 76  | m4:item         | outputdef=MENU_RECURSIVE; item=ID_MENU; var={, sLevelRead= ""}; htmlsafe=true                                                                                                                                                             |
| 77  | m4:item         | outputdef=MENU_RECURSIVE; item=SRTC_LEVEL; var=sLevelRead                                                                                                                                                                                 |
| 84  | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 85  | m4:item         | outputdef=MENU_RECURSIVE; item=N_MENU; var=sDesc; htmlsafe=true                                                                                                                                                                           |
| 86  | m4:item         | outputdef=MENU_RECURSIVE; item=ICON_AUX; var=sImg; htmlsafe=true                                                                                                                                                                          |
| 87  | m4:item         | outputdef=MENU_RECURSIVE; item=ICON; var=sDefaultImg; htmlsafe=true                                                                                                                                                                       |
| 142 | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 143 | m4:item         | outputdef=MENU_RECURSIVE; item=N_MENU; var=sDesc; htmlsafe=true                                                                                                                                                                           |
| 144 | m4:item         | outputdef=MENU_RECURSIVE; item=ICON_AUX; var=sImg                                                                                                                                                                                         |
| 145 | m4:item         | outputdef=MENU_RECURSIVE; item=N_HTTP; var=sURLGroup; htmlsafe=true                                                                                                                                                                       |
| 168 | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 169 | m4:item         | outputdef=MENU_RECURSIVE; item=N_HTTP; var=sURL; htmlsafe=true                                                                                                                                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if (bESS) { //ESS                                                                                                                                                                                                                                                                        |
| 36  | } else { //MSS                                                                                                                                                                                                                                                                           |
| 80  | if (sIdMenuRead.equals(sMenuId)) {                                                                                                                                                                                                                                                       |
| 89  | if (sImg.equals("")) {                                                                                                                                                                                                                                                                   |
| 115 | if (sDefaultImg.equals("")) {                                                                                                                                                                                                                                                            |
| 118 | } else if (iLevelRead == iLevelHeader) {                                                                                                                                                                                                                                                 |
| 120 | } else if (!bNextLevel) {                                                                                                                                                                                                                                                                |
| 121 | if (iLevelRead == iLevelHeader + 1) {                                                                                                                                                                                                                                                    |
| 122 | if (bEmpty) {                                                                                                                                                                                                                                                                            |
| 123 | if (!sURLGroup.equals("")) {                                                                                                                                                                                                                                                             |
| 127 | } else {                                                                                                                                                                                                                                                                                 |
| 133 | if (bOpen) {                                                                                                                                                                                                                                                                             |
| 147 | if (sImg.equals("")) {                                                                                                                                                                                                                                                                   |
| 165 | } else if (iLevelRead == iLevelHeader + 2) {                                                                                                                                                                                                                                             |
| 171 | if (sURL.equals("") &amp;&amp; (!sURLGroup.equals(""))) {                                                                                                                                                                                                                                |
| 174 | if (!sURL.equals("")) {                                                                                                                                                                                                                                                                  |
| 178 | } else {                                                                                                                                                                                                                                                                                 |
| 188 | if (bEmpty) {                                                                                                                                                                                                                                                                            |
| 189 | if (!sURLGroup.equals("")) {                                                                                                                                                                                                                                                             |
| 193 | } else {                                                                                                                                                                                                                                                                                 |
| 199 | if (bOpen) {                                                                                                                                                                                                                                                                             |
| 24  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                                                                                                                                                               |
| 25  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                                                                                                                                                       |
| 26  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SRTC_LOAD_MENU";                                                                                                                                                                                              |
| 27  | expresión de cálculo/transformación: String sMethodFilter = sDataDefMain + ".SRTC_FILTER_MENU";                                                                                                                                                                                          |
| 45  | expresión de cálculo/transformación: String sMenuFilter = "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 Then Return(1)"; |
| 46  | expresión de cálculo/transformación: String sMenuFilterId = sDataDefMain + ".Filter";                                                                                                                                                                                                    |
| 172 | expresión de cálculo/transformación: sURL = sURLGroup + "#" + sIdMenuRead;                                                                                                                                                                                                               |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso       |
| --- | ----------------------- |
| 125 | &lt;%=sURLGroup%&gt;    |
| 159 | /iconos/&lt;%=sImg%&gt; |
| 176 | &lt;%=sURL%&gt;         |
| 191 | &lt;%=sURLGroup%&gt;    |
| 11  | com.meta4.jsp           |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [sse_generico/sgco_engine_subportal.jsp](../../../../clon_portal/portal/sse_generico/sgco_engine_subportal.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                              |
| --- | ------- | ---------------------------------------------------------------------- |
| 107 | img     | id=idheaderimage; title=&lt;%=sTitle%&gt;; src=/iconos/&lt;%=sImg%&gt; |
| 125 | a       | class=m4link; href=&lt;%=sURLGroup%&gt;                                |
| 159 | img     | title=&lt;%=sTitle%&gt;; src=/iconos/&lt;%=sImg%&gt;                   |
| 176 | a       | class=m4link; href=&lt;%=sURL%&gt;                                     |
| 191 | a       | class=m4link; href=&lt;%=sURLGroup%&gt;                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | isESS           | getParameter(request,"isESS")  |
| 17  | MenuId          | getParameter(request,"MenuId") |

| L   | Variable        | Expresión fuente                                                                                                                                                                                                              | Resolución estática parcial                                                                                                                                                          |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14  | sIsESS          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS")                                                                                                                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"isESS")                                                                                                                    |
| 17  | sMenuId         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MenuId")                                                                                                                                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"MenuId")                                                                                                                   |
| 20  | sSubSession     | "SGCO_MENU"                                                                                                                                                                                                                   | SGCO_MENU                                                                                                                                                                            |
| 21  | sMeta4Object    | "MENUS"                                                                                                                                                                                                                       | MENUS                                                                                                                                                                                |
| 23  | sNodeMain       | "MENU_RECURSIVE"                                                                                                                                                                                                              | MENU_RECURSIVE                                                                                                                                                                       |
| 24  | sDataDefMain    | sMeta4Object + "!" + sNodeMain                                                                                                                                                                                                | MENUS{"!"}MENU_RECURSIVE                                                                                                                                                             |
| 25  | sOutputDefMain  | sDataDefMain + "[*]"                                                                                                                                                                                                          | MENUS{"!"}MENU_RECURSIVE{"[*]"}                                                                                                                                                      |
| 26  | sMethodLoad     | sDataDefMain + ".SRTC_LOAD_MENU"                                                                                                                                                                                              | MENUS{"!"}MENU_RECURSIVE{".SRTC_LOAD_MENU"}                                                                                                                                          |
| 27  | sMethodFilter   | sDataDefMain + ".SRTC_FILTER_MENU"                                                                                                                                                                                            | MENUS{"!"}MENU_RECURSIVE{".SRTC_FILTER_MENU"}                                                                                                                                        |
| 29  | sMenuLevel0     | "SGCO_MENU"                                                                                                                                                                                                                   | SGCO_MENU                                                                                                                                                                            |
| 30  | sMenuLevel1     | null                                                                                                                                                                                                                          | null                                                                                                                                                                                 |
| 31  | sMenuSectionAux | null                                                                                                                                                                                                                          | null                                                                                                                                                                                 |
| 32  | bESS            | ((int)Double.parseDouble(sIsESS) == 1)                                                                                                                                                                                        | ((int)Double.parseDouble(sIsESS) == 1)                                                                                                                                               |
| 45  | sMenuFilter     | "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 Then Return(1)" | If SRTC_ID_ROOT_MENU = \"{}null{"\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \""}null{"\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \""}null{"\", 0) &lt;&gt; 0 Then Return(1)"} |
| 46  | sMenuFilterId   | sDataDefMain + ".Filter"                                                                                                                                                                                                      | MENUS{"!"}MENU_RECURSIVE{".Filter"}                                                                                                                                                  |
| 48  | sIdMenuRead     | "", sLevelRead= ""                                                                                                                                                                                                            | {, sLevelRead= ""}                                                                                                                                                                   |
| 49  | sHeaderId       | "", sTitle = "", sDesc = "", sImg = "", sDefaultImg= "", sURL = "", sURLGroup = ""                                                                                                                                            | {, sTitle = "", sDesc = "", sImg = "", sDefaultImg= "", sURL = "", sURLGroup = ""}                                                                                                   |
| 50  | iLevelHeader    | -100, iLevelRead = 0                                                                                                                                                                                                          | -100, iLevelRead = 0                                                                                                                                                                 |
| 51  | bNextLevel      | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |
| 52  | bOpen           | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |
| 53  | bEmpty          | false                                                                                                                                                                                                                         | false                                                                                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                                                                                                        |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57  | m4:page         | subsessionid=SGCO_MENU                                                                                                                                                                                                                    |
| 58  | m4:job          |                                                                                                                                                                                                                                           |
| 59  | m4:datadef      | m4name=MENUS; m4o=MENUS                                                                                                                                                                                                                   |
| 60  | m4:exec         | m4method=MENUS{"!"}MENU_RECURSIVE{".SRTC_LOAD_MENU"}                                                                                                                                                                                      |
| 61  | m4:param        | name=ARG_SRTC_ID_MENU; value=SGCO_MENU                                                                                                                                                                                                    |
| 63  | m4:exec         | m4method=MENUS{"!"}MENU_RECURSIVE{".SRTC_FILTER_MENU"}                                                                                                                                                                                    |
| 64  | m4:param        | name=ARG_SRTC_ID_MENU; value=null                                                                                                                                                                                                         |
| 66  | m4:filter       | m4name=MENUS{"!"}MENU_RECURSIVE{".Filter"}; m4filter=If SRTC_ID_ROOT_MENU = \"{}null{"\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \""}null{"\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \""}null{"\", 0) &lt;&gt; 0 Then Return(1)"} |
| 67  | m4:outputdef    | m4alias=MENU_RECURSIVE                                                                                                                                                                                                                    |
| 68  | m4:param        | name=M4NAME0; value=MENUS{"!"}MENU_RECURSIVE{"[*]"}                                                                                                                                                                                       |
| 70  | m4:removefilter | m4name=MENUS{"!"}MENU_RECURSIVE{".Filter"}                                                                                                                                                                                                |
| 74  | m4:dataloop     | outputdef=MENU_RECURSIVE                                                                                                                                                                                                                  |
| 76  | m4:item         | outputdef=MENU_RECURSIVE; item=ID_MENU; var={, sLevelRead= ""}; htmlsafe=true                                                                                                                                                             |
| 77  | m4:item         | outputdef=MENU_RECURSIVE; item=SRTC_LEVEL; var=sLevelRead                                                                                                                                                                                 |
| 84  | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 85  | m4:item         | outputdef=MENU_RECURSIVE; item=N_MENU; var=sDesc; htmlsafe=true                                                                                                                                                                           |
| 86  | m4:item         | outputdef=MENU_RECURSIVE; item=ICON_AUX; var=sImg; htmlsafe=true                                                                                                                                                                          |
| 87  | m4:item         | outputdef=MENU_RECURSIVE; item=ICON; var=sDefaultImg; htmlsafe=true                                                                                                                                                                       |
| 142 | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 143 | m4:item         | outputdef=MENU_RECURSIVE; item=N_MENU; var=sDesc; htmlsafe=true                                                                                                                                                                           |
| 144 | m4:item         | outputdef=MENU_RECURSIVE; item=ICON_AUX; var=sImg                                                                                                                                                                                         |
| 145 | m4:item         | outputdef=MENU_RECURSIVE; item=N_HTTP; var=sURLGroup; htmlsafe=true                                                                                                                                                                       |
| 168 | m4:item         | outputdef=MENU_RECURSIVE; item=TRANSLATED_MENU; var=sTitle; htmlsafe=true                                                                                                                                                                 |
| 169 | m4:item         | outputdef=MENU_RECURSIVE; item=N_HTTP; var=sURL; htmlsafe=true                                                                                                                                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if (bESS) { //ESS                                                                                                                                                                                                                                                                        |
| 36  | } else { //MSS                                                                                                                                                                                                                                                                           |
| 80  | if (sIdMenuRead.equals(sMenuId)) {                                                                                                                                                                                                                                                       |
| 89  | if (sImg.equals("")) {                                                                                                                                                                                                                                                                   |
| 115 | if (sDefaultImg.equals("")) {                                                                                                                                                                                                                                                            |
| 118 | } else if (iLevelRead == iLevelHeader) {                                                                                                                                                                                                                                                 |
| 120 | } else if (!bNextLevel) {                                                                                                                                                                                                                                                                |
| 121 | if (iLevelRead == iLevelHeader + 1) {                                                                                                                                                                                                                                                    |
| 122 | if (bEmpty) {                                                                                                                                                                                                                                                                            |
| 123 | if (!sURLGroup.equals("")) {                                                                                                                                                                                                                                                             |
| 127 | } else {                                                                                                                                                                                                                                                                                 |
| 133 | if (bOpen) {                                                                                                                                                                                                                                                                             |
| 147 | if (sImg.equals("")) {                                                                                                                                                                                                                                                                   |
| 165 | } else if (iLevelRead == iLevelHeader + 2) {                                                                                                                                                                                                                                             |
| 171 | if (sURL.equals("") &amp;&amp; (!sURLGroup.equals(""))) {                                                                                                                                                                                                                                |
| 174 | if (!sURL.equals("")) {                                                                                                                                                                                                                                                                  |
| 178 | } else {                                                                                                                                                                                                                                                                                 |
| 188 | if (bEmpty) {                                                                                                                                                                                                                                                                            |
| 189 | if (!sURLGroup.equals("")) {                                                                                                                                                                                                                                                             |
| 193 | } else {                                                                                                                                                                                                                                                                                 |
| 199 | if (bOpen) {                                                                                                                                                                                                                                                                             |
| 24  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                                                                                                                                                               |
| 25  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                                                                                                                                                       |
| 26  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SRTC_LOAD_MENU";                                                                                                                                                                                              |
| 27  | expresión de cálculo/transformación: String sMethodFilter = sDataDefMain + ".SRTC_FILTER_MENU";                                                                                                                                                                                          |
| 45  | expresión de cálculo/transformación: String sMenuFilter = "If SRTC_ID_ROOT_MENU = \"" + sMenuLevel1 + "\" and SRTC_LEVEL &gt;= 0 and IndexOf(ID_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 and IndexOf(ID_PARENT_MENU, \"" + sMenuSectionAux + "\", 0) &lt;&gt; 0 Then Return(1)"; |
| 46  | expresión de cálculo/transformación: String sMenuFilterId = sDataDefMain + ".Filter";                                                                                                                                                                                                    |
| 172 | expresión de cálculo/transformación: sURL = sURLGroup + "#" + sIdMenuRead;                                                                                                                                                                                                               |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso       |
| --- | ----------------------- |
| 107 | /iconos/&lt;%=sImg%&gt; |
| 125 | &lt;%=sURLGroup%&gt;    |
| 159 | /iconos/&lt;%=sImg%&gt; |
| 176 | &lt;%=sURL%&gt;         |
| 191 | &lt;%=sURLGroup%&gt;    |
| 11  | com.meta4.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                   | Resolución | Ficha / candidato                                                                |
| ------ | --- | ---------------------------- | ---------- | -------------------------------------------------------------------------------- |
| COLL   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| COLL   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| COLL   | 125 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| COLL   | 159 | /iconos/&lt;%=sImg%&gt;      | dinámica   | P06                                                                              |
| COLL   | 176 | &lt;%=sURL%&gt;              | dinámica   | P06                                                                              |
| COLL   | 191 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| COLL   | 11  | com.meta4.jsp                | ausente    | P06                                                                              |
| CYC    | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| CYC    | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| CYC    | 125 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| CYC    | 159 | /iconos/&lt;%=sImg%&gt;      | dinámica   | P06                                                                              |
| CYC    | 176 | &lt;%=sURL%&gt;              | dinámica   | P06                                                                              |
| CYC    | 191 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| CYC    | 11  | com.meta4.jsp                | ausente    | P06                                                                              |
| IBER   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| IBER   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| IBER   | 125 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| IBER   | 159 | /iconos/&lt;%=sImg%&gt;      | dinámica   | P06                                                                              |
| IBER   | 176 | &lt;%=sURL%&gt;              | dinámica   | P06                                                                              |
| IBER   | 191 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| IBER   | 11  | com.meta4.jsp                | ausente    | P06                                                                              |
| BASE   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| BASE   | 1   | ../sgco_engine_subportal.jsp | física     | [sse_generico/sgco_engine_subportal.jsp](sse_generico--sgco_engine_subportal.md) |
| BASE   | 107 | /iconos/&lt;%=sImg%&gt;      | dinámica   | P06                                                                              |
| BASE   | 125 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| BASE   | 159 | /iconos/&lt;%=sImg%&gt;      | dinámica   | P06                                                                              |
| BASE   | 176 | &lt;%=sURL%&gt;              | dinámica   | P06                                                                              |
| BASE   | 191 | &lt;%=sURLGroup%&gt;         | dinámica   | P06                                                                              |
| BASE   | 11  | com.meta4.jsp                | ausente    | P06                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_engine_subportal.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
