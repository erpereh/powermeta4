# Calendario

Identificador: `sse_generico/calendario.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/calendario.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/calendario.jsp) | `e8f72f0912c3910a66a35648aa41156d9dd9fc9c6e251098ec0ebe532df4c47d` |    394 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/calendario.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/calendario.jsp)   | `e8f72f0912c3910a66a35648aa41156d9dd9fc9c6e251098ec0ebe532df4c47d` |    394 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/calendario.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/calendario.jsp) | `e8f72f0912c3910a66a35648aa41156d9dd9fc9c6e251098ec0ebe532df4c47d` |    394 |
| BASE / español    | [sse_generico/espanol/calendario.jsp](../../../../clon_portal/portal/sse_generico/espanol/calendario.jsp)                             | `e8f72f0912c3910a66a35648aa41156d9dd9fc9c6e251098ec0ebe532df4c47d` |    394 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/calendario.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/calendario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Calendario               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------- |
| 305 | form    | id=miform; name=miform; action=                                                    |
| 306 | input   | type=hidden; id=fecha; name=fecha                                                  |
| 313 | form    | id=fselect; name=fselect; action=                                                  |
| 314 | select  | id=month; onchange=newCalendar(); class=fuenteformulario100                        |
| 320 | option  | class=enlacefuncional; month==; selected=presente; confirmar condición si dinámico |
| 330 | select  | id=year; onchange=newCalendar(); class=fuenteformulario100                         |
| 336 | option  | class=enlacefuncional; year==; selected=presente; confirmar condición si dinámico  |
| 378 | a       | onclick=javascript:newCalendar('menos');                                           |
| 378 | img     | alt=mes anterior; src=/iconos/icono_anterior_36_36.gif; height=36; width=36        |
| 379 | a       | onclick=javascript:adios();                                                        |
| 379 | img     | src=/iconos/ok.gif; width=36; height=36; alt=Aceptar                               |
| 380 | a       | onclick=javascript:newCalendar('mas');                                             |
| 380 | img     | alt=mes posterior; src=/iconos/icono_siguiente_ess_36_36.gif; height=36; width=36  |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos  |
| --- | ----------- | ----------- |
| 28  | setColor    |             |
| 45  | getDays     | month, year |
| 53  | getToday    |             |
| 64  | newCalendar | mover       |
| 190 | getDate     | TD          |
| 299 | adios       |             |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 29  | if (Browser.ie7 &#124;&#124; Browser.ie8) {                                                                                |
| 35  | } else {                                                                                                                   |
| 47  | if (1 == month)                                                                                                            |
| 50  | else                                                                                                                       |
| 65  | if (mover == "mas") {                                                                                                      |
| 66  | if (document.forms["fselect"].elements["month"].selectedIndex != 11){                                                      |
| 69  | else{                                                                                                                      |
| 73  | if (yeartext != 2100){                                                                                                     |
| 80  | if (mover == "menos") {                                                                                                    |
| 81  | if (document.forms["fselect"].elements["month"].selectedIndex != 0){                                                       |
| 84  | else{                                                                                                                      |
| 88  | if (yeartext != 1900){                                                                                                     |
| 112 | if ((today.year == newCal.getFullYear()) &amp;&amp;                                                                        |
| 140 | if (intDay == startDay){ daily = 1};                                                                                       |
| 146 | if ((num-startDay +1) &gt; intDaysInMonth){                                                                                |
| 147 | if (cell.hasChildNodes() == true) {                                                                                        |
| 156 | if ((daily = 1) &amp;&amp; (numero &lt;= intDaysInMonth)){                                                                 |
| 157 | if ((num-startDay) &lt; 0 ){                                                                                               |
| 159 | if (cell.hasChildNodes() == true) {                                                                                        |
| 166 | else{                                                                                                                      |
| 167 | if (cell.hasChildNodes() == true) {                                                                                        |
| 197 | if (colecciontd.item(i).style.backgroundColor == sColorSkyBlue){                                                           |
| 211 | if (color==sColorSilver)                                                                                                   |
| 215 | if (mesnumero != 0 ){                                                                                                      |
| 220 | else {                                                                                                                     |
| 225 | if (yeartext != '1900'){                                                                                                   |
| 234 | else{                                                                                                                      |
| 240 | if (color == sColorWhite)                                                                                                  |
| 244 | if (mesnumero &lt; 10 ){                                                                                                   |
| 252 | else                                                                                                                       |
| 253 | if (mesnumero == 10){                                                                                                      |
| 255 | else {                                                                                                                     |
| 260 | if (yeartext != '2100'){                                                                                                   |
| 267 | else { anio = '2101'}                                                                                                      |
| 274 | if (dianumero.length != 2){                                                                                                |
| 281 | if (strmesnumero.length != 2){                                                                                             |
| 292 | if (!document.all){                                                                                                        |
| 98  | expresión de cálculo/transformación: var parseYear = parseInt(yeartext);                                                   |
| 129 | expresión de cálculo/transformación: var numeroant = intDaysInMonthAnt - startDay + 1;                                     |
| 262 | expresión de cálculo/transformación: var anio = objanio.options[objanio.selectedIndex + 1].text;                           |
| 275 | expresión de cálculo/transformación: dianumero = '0' + dianumero;                                                          |
| 282 | expresión de cálculo/transformación: strmesnumero = '0' + strmesnumero;                                                    |
| 288 | expresión de cálculo/transformación: var fechasec = dianumero + "-" + strmesnumero + "-" + anio;                           |
| 355 | expresión de cálculo/transformación: document.write("&lt;td class='enlacefuncional'&gt;" + days[intLoop] + "&lt;/td&gt;"); |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/sgco_gen_inc.jsp          |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 7   | /css/estilo_sse.css                          |
| 9   | /libreria/funciones_sse.js                   |
| 10  | /libreria/mootools.js                        |
| 11  | /libreria/dom1.js                            |
| 378 | /iconos/icono_anterior_36_36.gif             |
| 379 | /iconos/ok.gif                               |
| 380 | /iconos/icono_siguiente_ess_36_36.gif        |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/sgco_gen_inc.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| COLL   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| COLL   | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 10  | /libreria/mootools.js                        | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                     |
| COLL   | 11  | /libreria/dom1.js                            | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)                                     |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| COLL   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| COLL   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| CYC    | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| CYC    | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 10  | /libreria/mootools.js                        | contextual | &#96;libreria/mootools.js&#96;                                                                                                                   |
| CYC    | 11  | /libreria/dom1.js                            | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                                            |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| CYC    | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| CYC    | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| IBER   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| IBER   | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 10  | /libreria/mootools.js                        | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                     |
| IBER   | 11  | /libreria/dom1.js                            | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)                                     |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| IBER   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| IBER   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |
| BASE   | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 10  | /libreria/mootools.js                        | contextual | &#96;libreria/mootools.js&#96;                                                                                                                   |
| BASE   | 11  | /libreria/dom1.js                            | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                                            |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](sse_generico--sse_generico_taglib.md)                                                                     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](sse_generico--sse_generico_taglib_2.md)                                                                 |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp          | física     | [sse_generico/sgco_gen_inc.jsp](sse_generico--sgco_gen_inc.md)                                                                                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/calendario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
