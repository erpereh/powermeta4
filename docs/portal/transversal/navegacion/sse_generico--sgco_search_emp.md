# sgco_search_emp

Identificador: `sse_generico/sgco_search_emp.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_search_emp.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_search_emp.jsp) | `921d53e3bf80b7a5e57f3232461b0f6a89f9ea76496af2a9e9d00c95a3e5f492` |    193 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_search_emp.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_search_emp.jsp)   | `921d53e3bf80b7a5e57f3232461b0f6a89f9ea76496af2a9e9d00c95a3e5f492` |    193 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_search_emp.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_search_emp.jsp) | `921d53e3bf80b7a5e57f3232461b0f6a89f9ea76496af2a9e9d00c95a3e5f492` |    193 |
| BASE / compartido | [sse_generico/sgco_search_emp.jsp](../../../../clon_portal/portal/sse_generico/sgco_search_emp.jsp)                             | `921d53e3bf80b7a5e57f3232461b0f6a89f9ea76496af2a9e9d00c95a3e5f492` |    193 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_search_emp.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_search_emp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 10  | Name            | getParameter(request,"Name")       |
| 14  | IdWorkUnit      | getParameter(request,"IdWorkUnit") |

| L   | Variable        | Expresión fuente                                                       | Resolución estática parcial                                            |
| --- | --------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 10  | sName           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")       |
| 14  | sIdWorkUnit     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWorkUnit") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWorkUnit") |
| 18  | iEmployees      | 0                                                                      | 0                                                                      |
| 20  | sSubSession     | "SSCO_WHO_IS_WHO"                                                      | SSCO_WHO_IS_WHO                                                        |
| 21  | sMeta4Object    | "SSCO_WHO_IS_WHO"                                                      | SSCO_WHO_IS_WHO                                                        |
| 23  | sNodeMain       | "SSCO_MAIN_WHO"                                                        | SSCO_MAIN_WHO                                                          |
| 24  | sDataDefMain    | sMeta4Object + "!" + sNodeMain                                         | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO                                      |
| 25  | sOutputDefMain  | sDataDefMain + "[*]"                                                   | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO{"[*]"}                               |
| 26  | sMoveMain       | sNodeMain + ":" + sNodeMain + "[FIRST]"                                | SSCO_MAIN_WHO{":"}SSCO_MAIN_WHO{"[FIRST]"}                             |
| 28  | sMethodLoad     | sDataDefMain + ".SCO_MTD_FILTER"                                       | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO{".SCO_MTD_FILTER"}                   |
| 30  | sNodePhone      | "SSCO_MAIN_WHO_PHONE"                                                  | SSCO_MAIN_WHO_PHONE                                                    |
| 31  | sDataDefPhone   | sMeta4Object + "!" + sNodePhone                                        | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_PHONE                                |
| 32  | sOutputDefPhone | sDataDefPhone + "[*]"                                                  | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_PHONE{"[*]"}                         |
| 33  | sMovePhone      | sNodePhone + ":" + sNodePhone + "[FIRST]"                              | SSCO_MAIN_WHO_PHONE{":"}SSCO_MAIN_WHO_PHONE{"[FIRST]"}                 |
| 34  | sNodeAuxPhone   | ""                                                                     |                                                                        |
| 36  | sNodeEmail      | "SSCO_MAIN_WHO_EMAIL"                                                  | SSCO_MAIN_WHO_EMAIL                                                    |
| 37  | sDataDefEmail   | sMeta4Object + "!" + sNodeEmail                                        | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_EMAIL                                |
| 38  | sOutputDefEmail | sDataDefEmail + "[*]"                                                  | SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_EMAIL{"[*]"}                         |
| 39  | sMoveEmail      | sNodeEmail + ":" + sNodeEmail + "[FIRST]"                              | SSCO_MAIN_WHO_EMAIL{":"}SSCO_MAIN_WHO_EMAIL{"[FIRST]"}                 |
| 40  | sNodeAuxEmail   | ""                                                                     |                                                                        |
| 42  | iCount          | 0                                                                      | 0                                                                      |
| 43  | sCountMain      | ""                                                                     |                                                                        |
| 59  | i               | 0                                                                      | 0                                                                      |
| 60  | iCountMain      | 0                                                                      | 0                                                                      |
| 83  | slblFound       | ""                                                                     |                                                                        |
| 87  | i               | 0                                                                      | 0                                                                      |
| 89  | sIdHR           | "", sGbName = "", sNmWorkUnit = ""                                     | {, sGbName = "", sNmWorkUnit = ""}                                     |
| 90  | saIdHR          | "", saGbName = "", saNmWorkUnit = ""                                   | {, saGbName = "", saNmWorkUnit = ""}                                   |
| 91  | sIdPersonPhone  | "", sIntCountry= "", sIntRegion = "", sNatRegion = "", sPhone = ""     | {, sIntCountry= "", sIntRegion = "", sNatRegion = "", sPhone = ""}     |
| 92  | saIdPersonPhone | "", saPhone = ""                                                       | {, saPhone = ""}                                                       |
| 93  | sIdPersonEmail  | "", sEmail = ""                                                        | {, sEmail = ""}                                                        |
| 94  | saIdPersonEmail | "", saEmail = ""                                                       | {, saEmail = ""}                                                       |
| 95  | sPhoneAux       | ""                                                                     |                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                     |
| --- | ------------- | ------------------------------------------------------------------------------------------------------ |
| 46  | m4:page       | subsessionid=SSCO_WHO_IS_WHO                                                                           |
| 47  | m4:job        |                                                                                                        |
| 48  | m4:datadef    | m4name=SSCO_WHO_IS_WHO; m4o=SSCO_WHO_IS_WHO                                                            |
| 49  | m4:exec       | m4method=SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO{".SCO_MTD_FILTER"}                                          |
| 50  | m4:param      | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                  |
| 51  | m4:param      | name=ARG_ID_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWorkUnit")    |
| 53  | m4:exec       | node=SSCO_MAIN_WHO; alias=countMain; method=COUNT; m4object=SSCO_WHO_IS_WHO                            |
| 55  | m4:job        |                                                                                                        |
| 56  | m4:outputdef  | m4alias=SSCO_MAIN_WHO                                                                                  |
| 56  | m4:param      | name=M4NAME0; value=SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO{"[*]"}                                           |
| 57  | m4:outputexec | var=; alias=countMain                                                                                  |
| 68  | m4:move       |                                                                                                        |
| 68  | m4:param      | name=SSCO_WHO_IS_WHO; value=SSCO_MAIN_WHO{":"}SSCO_MAIN_WHO{"[FIRST]"}                                 |
| 69  | m4:outputdef  | m4alias=                                                                                               |
| 69  | m4:param      | name=M4NAME0; value=SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_PHONE{"[*]"}                                     |
| 70  | m4:outputdef  | m4alias=                                                                                               |
| 70  | m4:param      | name=M4NAME0; value=SSCO_WHO_IS_WHO{"!"}SSCO_MAIN_WHO_EMAIL{"[*]"}                                     |
| 85  | m4:item       | outputdef=SSCO_MAIN_WHO; item=SCO_PRP_FOUND; var=                                                      |
| 100 | m4:dataloop   | outputdef=SSCO_MAIN_WHO                                                                                |
| 101 | m4:item       | outputdef=SSCO_MAIN_WHO; item=SCO_ID_HR; var={, sGbName = "", sNmWorkUnit = ""}                        |
| 102 | m4:item       | outputdef=SSCO_MAIN_WHO; item=SCO_GB_NAME; var=sGbName                                                 |
| 103 | m4:item       | outputdef=SSCO_MAIN_WHO; item=STD_N_WORK_UNIT; var=sNmWorkUnit                                         |
| 118 | m4:count      | outputdef=; var=iCountPhone                                                                            |
| 121 | m4:dataloop   | outputdef=                                                                                             |
| 122 | m4:item       | outputdef=; item=STD_ID_PERSON; var={, sIntCountry= "", sIntRegion = "", sNatRegion = "", sPhone = ""} |
| 123 | m4:item       | outputdef=; item=STD_INT_COUNTRY_CODE; var=sIntCountry                                                 |
| 124 | m4:item       | outputdef=; item=STD_INT_REGION_CODE; var=sIntRegion                                                   |
| 125 | m4:item       | outputdef=; item=STD_NAT_REGION_CODE; var=sNatRegion                                                   |
| 126 | m4:item       | outputdef=; item=STD_PHONE; var=sPhone                                                                 |
| 157 | m4:count      | outputdef=; var=iCountEmail                                                                            |
| 160 | m4:dataloop   | outputdef=                                                                                             |
| 161 | m4:item       | outputdef=; item=STD_ID_PERSON; var={, sEmail = ""}                                                    |
| 162 | m4:item       | outputdef=; item=STD_EMAIL; var=sEmail                                                                 |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 11  | if (sName == null) {sName="";}                                                                                |
| 15  | if (sIdWorkUnit == null) {sIdWorkUnit="";}                                                                    |
| 99  | if (iCount &gt; 0) {                                                                                          |
| 119 | if (iCountPhone.intValue() &gt; 0) {                                                                          |
| 131 | if (!sIntCountry.equals("")) {sPhoneAux = sIntCountry.trim();}                                                |
| 132 | if (!sIntRegion.equals("")) {                                                                                 |
| 136 | if (!sNatRegion.equals("")) {                                                                                 |
| 140 | if (!sPhone.equals("")) {                                                                                     |
| 150 | if (saIdPersonPhone.length() &gt; 0) {                                                                        |
| 158 | if (iCountEmail.intValue() &gt; 0) {                                                                          |
| 172 | if (saIdPersonEmail.length() &gt; 0) {                                                                        |
| 24  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                    |
| 25  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                            |
| 26  | expresión de cálculo/transformación: String sMoveMain = sNodeMain + ":" + sNodeMain + "[FIRST]";              |
| 28  | expresión de cálculo/transformación: String sMethodLoad = sDataDefMain + ".SCO_MTD_FILTER";                   |
| 31  | expresión de cálculo/transformación: String sDataDefPhone = sMeta4Object + "!" + sNodePhone;                  |
| 32  | expresión de cálculo/transformación: String sOutputDefPhone = sDataDefPhone + "[*]";                          |
| 33  | expresión de cálculo/transformación: String sMovePhone = sNodePhone + ":" + sNodePhone + "[FIRST]";           |
| 37  | expresión de cálculo/transformación: String sDataDefEmail = sMeta4Object + "!" + sNodeEmail;                  |
| 38  | expresión de cálculo/transformación: String sOutputDefEmail = sDataDefEmail + "[*]";                          |
| 39  | expresión de cálculo/transformación: String sMoveEmail = sNodeEmail + ":" + sNodeEmail + "[FIRST]";           |
| 62  | expresión de cálculo/transformación: iCountMain = Integer.parseInt(sCountMain);                               |
| 64  | expresión de cálculo/transformación: sMoveMain = sNodeMain + ":" + sNodeMain + "[" + String.valueOf(i) + "]"; |
| 65  | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 66  | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |
| 78  | expresión de cálculo/transformación: iCount = Integer.parseInt(sCountMain);                                   |
| 117 | expresión de cálculo/transformación: sNodeAuxPhone = sNodePhone + String.valueOf(i);                          |
| 156 | expresión de cálculo/transformación: sNodeAuxEmail = sNodeEmail + String.valueOf(i);                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 7   | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia    | Resolución | Ficha / candidato |
| ------ | --- | ------------- | ---------- | ----------------- |
| COLL   | 7   | com.meta4.jsp | ausente    | P06               |
| CYC    | 7   | com.meta4.jsp | ausente    | P06               |
| IBER   | 7   | com.meta4.jsp | ausente    | P06               |
| BASE   | 7   | com.meta4.jsp | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_search_emp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
