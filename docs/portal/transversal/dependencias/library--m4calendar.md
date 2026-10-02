# m4calendar

Identificador: `library/m4calendar.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [library/m4calendar.js](../../../../clon_portal/portal/library/m4calendar.js) | `f6fc7586a1bdaf7cf80b1db169e7ed84abead3084da304fd2a7c67151d43c66b` |    318 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [library/m4calendar.js](../../../../clon_portal/portal/library/m4calendar.js). Líneas físicas, contando desde 1.

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

| L   | Función       | Argumentos   |
| --- | ------------- | ------------ |
| 11  | getDays       | month, year  |
| 15  | getToday      |              |
| 23  | getDate       | TD           |
| 76  | returndate    |              |
| 91  | adios         | bemptydate   |
| 106 | changeYear    | mover        |
| 130 | newCalendar   | mover        |
| 268 | selectcellday | sselectedday |
| 308 | setToday      |              |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | if (1 == month) return ((0 == year % 4) &amp;&amp; (0 != (year % 100))) &#124;&#124; (0 == year % 400) ? 29 : 28;                                                                                                                                                           |
| 13  | else return daysInMonth[month];                                                                                                                                                                                                                                             |
| 35  | if (dianumero != ""){                                                                                                                                                                                                                                                       |
| 37  | if (g_classPreviousMonthDay == TD.className){                                                                                                                                                                                                                               |
| 39  | if (mesnumero == 0 ){                                                                                                                                                                                                                                                       |
| 41  | if(objanio.options[objanio.selectedIndex].text != '1900'){                                                                                                                                                                                                                  |
| 43  | }else{                                                                                                                                                                                                                                                                      |
| 47  | }else{                                                                                                                                                                                                                                                                      |
| 50  | if (g_classNextMonthDay == TD.className){                                                                                                                                                                                                                                   |
| 52  | if ((mesnumero) &gt; 12 ){                                                                                                                                                                                                                                                  |
| 54  | if (objanio.options[objanio.selectedIndex].text != '2099'){                                                                                                                                                                                                                 |
| 56  | }else{                                                                                                                                                                                                                                                                      |
| 65  | if ( mesnumero != mesnumeroinicial){                                                                                                                                                                                                                                        |
| 68  | }else{                                                                                                                                                                                                                                                                      |
| 92  | if (bemptydate == false){                                                                                                                                                                                                                                                   |
| 95  | if (document.forms['miform'].elements['fecha'].value==""){                                                                                                                                                                                                                  |
| 99  | }else{                                                                                                                                                                                                                                                                      |
| 112 | if (mover == "mas") {                                                                                                                                                                                                                                                       |
| 114 | if (yeartext != '2099'){                                                                                                                                                                                                                                                    |
| 120 | if (mover == "menos") {                                                                                                                                                                                                                                                     |
| 121 | if (yeartext != '1900'){                                                                                                                                                                                                                                                    |
| 136 | if (mover == "mas") {                                                                                                                                                                                                                                                       |
| 138 | if (document.forms["fselect"].elements["month"].selectedIndex != 11){                                                                                                                                                                                                       |
| 140 | }else{                                                                                                                                                                                                                                                                      |
| 141 | if (yeartext != '2099'){                                                                                                                                                                                                                                                    |
| 148 | if (mover == "menos") {                                                                                                                                                                                                                                                     |
| 149 | if (document.forms["fselect"].elements["month"].selectedIndex != 0){                                                                                                                                                                                                        |
| 151 | }else{                                                                                                                                                                                                                                                                      |
| 152 | if (yeartext != '1900'){                                                                                                                                                                                                                                                    |
| 168 | if (slanguser == "en"){                                                                                                                                                                                                                                                     |
| 170 | }else{                                                                                                                                                                                                                                                                      |
| 172 | if (startDay == 0){ startDay = 6}                                                                                                                                                                                                                                           |
| 173 | else{ startDay = startDay - 1}                                                                                                                                                                                                                                              |
| 181 | if ((today.year == newCal.getYear()) &amp;&amp; (today.month == newCal.getMonth())) day = today.day;                                                                                                                                                                        |
| 196 | if (intDay == startDay){daily = 1};                                                                                                                                                                                                                                         |
| 199 | if ((num-startDay +1) &gt; intDaysInMonth){                                                                                                                                                                                                                                 |
| 201 | if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}                                                                                                                                                                                                      |
| 202 | if (yeartext == '2099' &amp;&amp; newCal.getMonth()== 11){                                                                                                                                                                                                                  |
| 206 | else{                                                                                                                                                                                                                                                                       |
| 214 | if ((daily = 1) &amp;&amp; (numero &lt;= intDaysInMonth)){                                                                                                                                                                                                                  |
| 215 | if ((num-startDay) &lt; 0 ){                                                                                                                                                                                                                                                |
| 217 | if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}                                                                                                                                                                                                      |
| 218 | if (yeartext == '1900' &amp;&amp; newCal.getMonth()== 0){                                                                                                                                                                                                                   |
| 221 | }else{                                                                                                                                                                                                                                                                      |
| 228 | }else{                                                                                                                                                                                                                                                                      |
| 230 | if (cell.hasChildNodes() == true) {cell.removeChild(cell.firstChild);}                                                                                                                                                                                                      |
| 246 | if (intLoop == iselectedindex) odayselect.options[intLoop].selected = true;                                                                                                                                                                                                 |
| 256 | if (today.year == m4select("fselect","year","id") &amp;&amp; (today.month +1) == m4select("fselect","month","id") &amp;&amp; cell.firstChild.nodeValue == today.day &amp;&amp; cell.className != g_classPreviousMonthDay &amp;&amp; cell.className != g_classNextMonthDay){ |
| 257 | if (cell.className == g_classSelection &#124;&#124; cell.className == g_classSelecteHoy){                                                                                                                                                                                   |
| 259 | }else{ cell.className = g_classHoy;}                                                                                                                                                                                                                                        |
| 278 | if (parseInt(sselectedday,10) &gt; intDaysInMonth){                                                                                                                                                                                                                         |
| 286 | if (colecciontd[i].className == g_classSelection &#124;&#124;colecciontd[i].className == g_classSelecteHoy ){                                                                                                                                                               |
| 296 | if (sselectedday == textocelda &amp;&amp; cell.className != g_classPreviousMonthDay &amp;&amp; cell.className != g_classNextMonthDay){                                                                                                                                      |
| 299 | if (g_classBeforeSelection == g_classHoy) {                                                                                                                                                                                                                                 |
| 301 | }else{ cell.className = g_classSelection;}                                                                                                                                                                                                                                  |
| 161 | expresión de cálculo/transformación: var parseYear = parseInt(yeartext,10);                                                                                                                                                                                                 |
| 173 | expresión de cálculo/transformación: else{ startDay = startDay - 1}                                                                                                                                                                                                         |
| 189 | expresión de cálculo/transformación: var numeroant = intDaysInMonthAnt - startDay + 1;                                                                                                                                                                                      |
| 274 | expresión de cálculo/transformación: var actCal = new Date(parseInt(objyear.options[objyear.selectedIndex].text,10),document.forms["fselect"].elements["month"].selectedIndex, 1);                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `library/m4calendar.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
