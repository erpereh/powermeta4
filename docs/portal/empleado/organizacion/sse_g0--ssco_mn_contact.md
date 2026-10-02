# ssco_mn_contact

Identificador: `sse_g0/ssco_mn_contact.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_mn_contact.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_mn_contact.jsp) | `5811be86fb3d6285bb97bb701fbba65d0850119e9bdce893d149aba951593844` |      1 |
| BASE / compartido | [sse_g0/ssco_mn_contact.jsp](../../../../clon_portal/portal/sse_g0/ssco_mn_contact.jsp)                 | `30f4269ab520e8f4f004c680b72a8ecbab790713bd2af7efaaece8800c992556` |    227 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_mn_contact.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_mn_contact.jsp). Líneas físicas, contando desde 1.

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
| 1   | ../ssco_mn_contact.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 1   | ../ssco_mn_contact.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_mn_contact.jsp](../../../../clon_portal/portal/sse_g0/ssco_mn_contact.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | Action          | getParameter(request,"Action") |
| 18  | IdHR            | getParameter(request,"IdHR")   |
| 24  | Column          | getParameter(request,"Column") |
| 39  | Order           | getParameter(request,"Order")  |

| L   | Variable             | Expresión fuente                                                                                  | Resolución estática parcial                                                                       |
| --- | -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 14  | sAction              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action")                                |
| 18  | sIdHR                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                  |
| 24  | sColumn              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column")                                |
| 39  | sOrder               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")                                 |
| 45  | sSubSession          | "SGCO_CONTACT"                                                                                    | SGCO_CONTACT                                                                                      |
| 46  | sMeta4Object         | "SGCO_CONTACT"                                                                                    | SGCO_CONTACT                                                                                      |
| 48  | sNodeMain            | "SGCO_CONTACT_MAIN"                                                                               | SGCO_CONTACT_MAIN                                                                                 |
| 49  | sDataDefMain         | sMeta4Object + "!" + sNodeMain                                                                    | SGCO_CONTACT{"!"}SGCO_CONTACT_MAIN                                                                |
| 50  | sOutputDefMain       | sDataDefMain + "[*]"                                                                              | SGCO_CONTACT{"!"}SGCO_CONTACT_MAIN{"[*]"}                                                         |
| 52  | sNodeData            | "SGCO_CONTACT_INFO"                                                                               | SGCO_CONTACT_INFO                                                                                 |
| 53  | sDataDefData         | sMeta4Object + "!" + sNodeData                                                                    | SGCO_CONTACT{"!"}SGCO_CONTACT_INFO                                                                |
| 54  | sOutputDefData       | sDataDefData + "[*]"                                                                              | SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{"[*]"}                                                         |
| 56  | sNodeLabel           | "SGCO_CONTACT_LABEL"                                                                              | SGCO_CONTACT_LABEL                                                                                |
| 57  | sDataDefLabel        | sMeta4Object + "!" + sNodeLabel                                                                   | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL                                                               |
| 58  | sOutputDefLabel      | sDataDefLabel + "[*]"                                                                             | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{"[*]"}                                                        |
| 60  | sNodeLabelTable      | "SGCO_CONTACT_LABEL_TABLE"                                                                        | SGCO_CONTACT_LABEL_TABLE                                                                          |
| 61  | sDataDefLabelTable   | sMeta4Object + "!" + sNodeLabelTable                                                              | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE                                                         |
| 62  | sOutputDefLabelTable | sDataDefLabelTable + "[*]"                                                                        | SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE{"[*]"}                                                  |
| 64  | sSortNode            | sMeta4Object + "!" + sNodeData + ".Sort"                                                          | SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{".Sort"}                                                       |
| 66  | sMethodLoad          | sDataDefMain + ".SCO_MTD_LOAD"                                                                    | SGCO_CONTACT{"!"}SGCO_CONTACT_MAIN{".SCO_MTD_LOAD"}                                               |
| 67  | sMethodDelete        | "SCO_MTD_DELETE"                                                                                  | SCO_MTD_DELETE                                                                                    |
| 68  | sMethodInsert        | "SCO_MTD_INSERT"                                                                                  | SCO_MTD_INSERT                                                                                    |
| 70  | sAuxLabel            | ""                                                                                                |                                                                                                   |
| 71  | sGbName              | "", sNameWorkUnit = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = "" | {, sNameWorkUnit = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""} |
| 73  | sCol1                | "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = ""                                    | {, sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = ""}                                    |
| 74  | saContact            | ""                                                                                                |                                                                                                   |
| 76  | sResult              | ""                                                                                                |                                                                                                   |
| 77  | sAuxData             | ""                                                                                                |                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                                       |
| --- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81  | m4:page         | subsessionid=SGCO_CONTACT                                                                                                                                |
| 82  | m4:job          |                                                                                                                                                          |
| 83  | m4:datadef      | m4name=SGCO_CONTACT; m4o=SGCO_CONTACT                                                                                                                    |
| 88  | m4:exec         | m4object=SGCO_CONTACT; node=SGCO_CONTACT_MAIN; method=SCO_MTD_DELETE; alias=methodExec                                                                   |
| 89  | m4:param        | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                                                   |
| 92  | m4:outputdef    | m4alias=SGCO_CONTACT_INFO                                                                                                                                |
| 92  | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{"[*]"}                                                                                            |
| 96  | m4:exec         | m4object=SGCO_CONTACT; node=SGCO_CONTACT_MAIN; method=SCO_MTD_INSERT; alias=methodExec                                                                   |
| 97  | m4:param        | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                                                   |
| 102 | m4:exec         | m4method=SGCO_CONTACT{"!"}SGCO_CONTACT_MAIN{".SCO_MTD_LOAD"}                                                                                             |
| 104 | m4:sortitems    | m4name=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{".Sort"}                                                                                                       |
| 105 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")         |
| 108 | m4:outputdef    | m4alias=SGCO_CONTACT_LABEL_TABLE                                                                                                                         |
| 108 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE{"[*]"}                                                                                     |
| 109 | m4:outputdef    | m4alias=SGCO_CONTACT_LABEL                                                                                                                               |
| 109 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{"[*]"}                                                                                           |
| 110 | m4:outputdef    | m4alias=SGCO_CONTACT_INFO                                                                                                                                |
| 110 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{"[*]"}                                                                                            |
| 111 | m4:removefilter | m4name=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{".Sort"}                                                                                                       |
| 115 | m4:sortitems    | m4name=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{".Sort"}                                                                                                       |
| 116 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")         |
| 119 | m4:outputdef    | m4alias=SGCO_CONTACT_LABEL_TABLE                                                                                                                         |
| 119 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL_TABLE{"[*]"}                                                                                     |
| 120 | m4:outputdef    | m4alias=SGCO_CONTACT_LABEL                                                                                                                               |
| 120 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_LABEL{"[*]"}                                                                                           |
| 121 | m4:outputdef    | m4alias=SGCO_CONTACT_INFO                                                                                                                                |
| 121 | m4:param        | name=M4NAME0; value=SGCO_CONTACT{"!"}SGCO_CONTACT_INFO{"[*]"}                                                                                            |
| 132 | m4:outputexec   | alias=methodExec; var=                                                                                                                                   |
| 139 | m4:dataloop     | outputdef=SGCO_CONTACT_INFO                                                                                                                              |
| 140 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_ID_HR; var=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdHR")                                    |
| 141 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_GB_NAME; var={, sNameWorkUnit = "", sIdWorkUnit = "", sPath = "", sNameWorkLoc = "", sPhone = "", sEmail = ""} |
| 142 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_ID_WORK_UNIT; var=sIdWorkUnit                                                                                  |
| 143 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_N_WORK_UNIT; var=sNameWorkUnit                                                                                 |
| 144 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_N_WORK_LOCATION; var=sNameWorkLoc                                                                              |
| 145 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_PHONE; var=sPhone                                                                                              |
| 146 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_EMAIL; var=sEmail                                                                                              |
| 147 | m4:item         | outputdef=SGCO_CONTACT_INFO; item=SCO_PRP_DT_INSERTED; var=                                                                                              |
| 149 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_INFO_EMP; var=                                                                                  |
| 153 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_ORG_CHART; var=                                                                                 |
| 173 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=                                                                          |
| 178 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_DEL_CONTACT; var=                                                                         |
| 193 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_ASC; var=                                                                           |
| 197 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_DESC; var=                                                                          |
| 201 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_NO_ORDER; var=                                                                            |
| 205 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_ORDERING; var=                                                                            |
| 209 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_DEL_CONTACT_OK; var=                                                                      |
| 213 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL_TABLE; item=SCO_PRP_LBL_DEL_CONTACT_KO; var=                                                                      |
| 217 | m4:label        | get=item; outputdef=SGCO_CONTACT_LABEL; item=SCO_PRP_LBL_LOADING_CONTACT; var=                                                                           |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                           |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if (sIdHR == null) {sIdHR="";}                                                                                                                                 |
| 20  | if (!sIdHR.equals("")) {                                                                                                                                       |
| 25  | if (sColumn == null) {sColumn="SCO_PRP_GB_NAME";}                                                                                                              |
| 26  | if (!sColumn.equals("")) {                                                                                                                                     |
| 28  | if (sColumn.equals("Name")) {                                                                                                                                  |
| 31  | if (sColumn.equals("WUnit")) {                                                                                                                                 |
| 34  | if (sColumn.equals("WLoc")) {                                                                                                                                  |
| 40  | if (sOrder == null) {sOrder="ASC";}                                                                                                                            |
| 41  | if (!sOrder.equals("")) {                                                                                                                                      |
| 86  | if (sAction.equals("Delete")) {                                                                                                                                |
| 94  | } else if (sAction.equals("Insert")) {                                                                                                                         |
| 100 | } else if (sAction.equals("Load")) {                                                                                                                           |
| 113 | } else if (sAction.equals("Sort")) {                                                                                                                           |
| 130 | if (sAction.equals("Delete") &#124;&#124; sAction.equals("Insert")) {                                                                                          |
| 136 | } else {                                                                                                                                                       |
| 158 | if (saPhone.length == 3) {                                                                                                                                     |
| 159 | if (saPhone[1].equals("001")) {                                                                                                                                |
| 161 | } else if (saPhone[1].equals("002")) {                                                                                                                         |
| 163 | } else if (saPhone[1].equals("003")) {                                                                                                                         |
| 165 | } else {                                                                                                                                                       |
| 169 | } else {                                                                                                                                                       |
| 185 | if (saContact.length() &gt; 0) {                                                                                                                               |
| 191 | if (sAction.equals("Load")) {                                                                                                                                  |
| 49  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                                     |
| 50  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                             |
| 53  | expresión de cálculo/transformación: String sDataDefData = sMeta4Object + "!" + sNodeData;                                                                     |
| 54  | expresión de cálculo/transformación: String sOutputDefData = sDataDefData + "[*]";                                                                             |
| 57  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                                                   |
| 58  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                                           |
| 61  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                                         |
| 62  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                                                 |
| 64  | expresión de cálculo/transformación: String sSortNode = sMeta4Object + "!" + sNodeData + ".Sort";                                                              |
| 66  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_LOAD";                                                                      |
| 151 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";              |
| 155 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + sIdWorkUnit + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sNameWorkUnit.trim() + "\"" + "]"; |
| 168 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";           |
| 170 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + "\"" + "]";                                                                                          |
| 175 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                          |
| 176 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                                    |
| 180 | expresión de cálculo/transformación: sCol6 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 11  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia             | Resolución | Ficha / candidato                                        |
| ------ | --- | ---------------------- | ---------- | -------------------------------------------------------- |
| BASE   | 1   | ../ssco_mn_contact.jsp | física     | [sse_g0/ssco_mn_contact.jsp](sse_g0--ssco_mn_contact.md) |
| BASE   | 1   | ../ssco_mn_contact.jsp | física     | [sse_g0/ssco_mn_contact.jsp](sse_g0--ssco_mn_contact.md) |
| BASE   | 11  | com.meta4.jsp          | ausente    | P06                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_mn_contact.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
