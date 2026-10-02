# clasecalendario

Identificador: `libreria/clasecalendario.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/clasecalendario.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clasecalendario.js) | `1f77d73ac2f2f79ad56cb093da5f0bfa6ebfbfbab4e13d5046cf899302dcaadf` |    387 |
| BASE / compartido | [libreria/clasecalendario.js](../../../../clon_portal/portal/libreria/clasecalendario.js)                             | `1f77d73ac2f2f79ad56cb093da5f0bfa6ebfbfbab4e13d5046cf899302dcaadf` |    387 |
| IBER / compartido | [m4custom/IBER/libreria/clasecalendario.js](../../../../clon_portal/portal/m4custom/IBER/libreria/clasecalendario.js) | `1f77d73ac2f2f79ad56cb093da5f0bfa6ebfbfbab4e13d5046cf899302dcaadf` |    387 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/clasecalendario.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clasecalendario.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 82  | " + this.months[this.mes] + " |
| 85  | " + this.days[intLoop] + "    |

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

| L   | Función         | Argumentos                                                    |
| --- | --------------- | ------------------------------------------------------------- |
| 2   | clasecalendario | nombreobjeto,mes,ano,visible,activo,posicionx,posiciony,vtipo |
| 47  | mostrar         | param                                                         |
| 55  | mover           | x,y                                                           |
| 62  | getDays         | month, year                                                   |
| 70  | getToday        |                                                               |
| 79  | cabecera        |                                                               |
| 91  | cuerpo          |                                                               |
| 103 | pintacalendario |                                                               |
| 244 | damefecha       | td                                                            |
| 323 | adios           |                                                               |
| 326 | mcomprobar      | valor,matriz                                                  |
| 337 | quitarvalor     | valor,matriz                                                  |
| 353 | mestado         |                                                               |
| 357 | escribedias     | num,idcapa                                                    |
| 369 | cuentadiaspend  |                                                               |
| 379 | cuentadiasacep  |                                                               |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 32  | if (slanguage == "es") {                                                                                                                                                                                                                                     |
| 35  | } else if (slanguage == "in") {                                                                                                                                                                                                                              |
| 38  | } else if (slanguage == "fr") {                                                                                                                                                                                                                              |
| 41  | } else if (slanguage == "pt") {                                                                                                                                                                                                                              |
| 48  | if (param == true) {                                                                                                                                                                                                                                         |
| 50  | } else {                                                                                                                                                                                                                                                     |
| 64  | if (1 == month)                                                                                                                                                                                                                                              |
| 66  | else                                                                                                                                                                                                                                                         |
| 104 | if (this.mes == 12){                                                                                                                                                                                                                                         |
| 107 | if (this.mtipo == 1){                                                                                                                                                                                                                                        |
| 110 | }else{                                                                                                                                                                                                                                                       |
| 132 | if ((today.year == newCal.getYear()) &amp;&amp; (today.month == newCal.getMonth())) day = today.day;                                                                                                                                                         |
| 142 | if ((intDay == startDay) &amp;&amp; (0 == daily)){ daily = 1};                                                                                                                                                                                               |
| 145 | if ((daily &gt; 0) &amp;&amp; (daily &lt;= intDaysInMonth)){                                                                                                                                                                                                 |
| 148 | else{                                                                                                                                                                                                                                                        |
| 154 | if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){                                                                                                                                                                                        |
| 157 | if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){                                                                                                                                                                                        |
| 165 | if (salto !=true){                                                                                                                                                                                                                                           |
| 168 | if (m4textodentrotd(cell,false,"") == this.festivos[ifestivos]) {                                                                                                                                                                                            |
| 169 | if (cell.style.backgroundColor != '#CCC'){                                                                                                                                                                                                                   |
| 177 | else{                                                                                                                                                                                                                                                        |
| 185 | if (salto !=true){                                                                                                                                                                                                                                           |
| 188 | if (m4textodentrotd(cell,false,"") == this.pendientes[ifechas]) {                                                                                                                                                                                            |
| 197 | else{                                                                                                                                                                                                                                                        |
| 205 | if (salto !=true){                                                                                                                                                                                                                                           |
| 208 | if (m4textodentrotd(cell,false,"") == this.aceptados[iaceptados]) {                                                                                                                                                                                          |
| 217 | else{                                                                                                                                                                                                                                                        |
| 225 | if (salto !=true){                                                                                                                                                                                                                                           |
| 228 | if (m4textodentrotd(cell,false,"") == this.cancelados[icancelados]) {                                                                                                                                                                                        |
| 229 | if (cell.style.backgroundColor != '#CCC'){                                                                                                                                                                                                                   |
| 237 | else{                                                                                                                                                                                                                                                        |
| 252 | if ((m4textodentrotd(td,false,"") != "") &amp;&amp; (this.activo == true)) {                                                                                                                                                                                 |
| 253 | if ((td.style.backgroundColor != '#CCC') &amp;&amp; (td.style.backgroundColor != festivos)){                                                                                                                                                                 |
| 258 | if (dianumero.length != 2){                                                                                                                                                                                                                                  |
| 262 | if (strmesnumero.length != 2){                                                                                                                                                                                                                               |
| 267 | if ((td.style.backgroundColor == pendiente) &amp;&amp; (control == false)){                                                                                                                                                                                  |
| 269 | if (this.mcomprobar(m4textodentrotd(td,false,""),this.pendientes)){                                                                                                                                                                                          |
| 272 | else{                                                                                                                                                                                                                                                        |
| 279 | if ((td.style.backgroundColor == normal) &amp;&amp; (control == false)){                                                                                                                                                                                     |
| 281 | if (this.mcomprobar(m4textodentrotd(td,false,""),this.pendientes)){                                                                                                                                                                                          |
| 282 | if (this.mcomprobar(m4textodentrotd(td,false,""),this.borradospend)){                                                                                                                                                                                        |
| 286 | else {                                                                                                                                                                                                                                                       |
| 295 | if ((td.style.backgroundColor == aceptado) &amp;&amp; (control == false)){                                                                                                                                                                                   |
| 297 | if (this.mcomprobar(m4textodentrotd(td,false,""),this.cancelados)){                                                                                                                                                                                          |
| 300 | else{                                                                                                                                                                                                                                                        |
| 307 | if ((td.style.backgroundColor == cancelado) &amp;&amp; (control == false)){                                                                                                                                                                                  |
| 309 | if (this.mcomprobar(m4textodentrotd(td,false,""),this.cancelados)){                                                                                                                                                                                          |
| 312 | else{                                                                                                                                                                                                                                                        |
| 329 | if (matriz[i] == valor){                                                                                                                                                                                                                                     |
| 341 | if (matriz[elimina] == valor){                                                                                                                                                                                                                               |
| 358 | if (m4elemento(idcapa) != null){                                                                                                                                                                                                                             |
| 361 | if (colec.length != 0){                                                                                                                                                                                                                                      |
| 363 | } else {                                                                                                                                                                                                                                                     |
| 370 | if (typeof(coleccionmeses) != "undefined") {                                                                                                                                                                                                                 |
| 380 | if (typeof(coleccionmeses) != "undefined") {                                                                                                                                                                                                                 |
| 56  | expresión de cálculo/transformación: var xporc = x + "%";                                                                                                                                                                                                    |
| 57  | expresión de cálculo/transformación: var yporc = y + "%";                                                                                                                                                                                                    |
| 82  | expresión de cálculo/transformación: line = "&lt;TR&gt;&lt;TD class='fuentecalendariotittle' align='center' colspan='7' &gt;" + this.months[this.mes] + "&lt;/TD&gt;&lt;/TR&gt;";                                                                            |
| 85  | expresión de cálculo/transformación: line1 = line1 + "&lt;TD class='fuentecalendariotittle' &gt;" + this.days[intLoop] + "&lt;/TD&gt;";                                                                                                                      |
| 87  | expresión de cálculo/transformación: totalline = line + "&lt;tr&gt;" + line1 + "&lt;/tr&gt;";                                                                                                                                                                |
| 94  | expresión de cálculo/transformación: line = line + "&lt;TR&gt;";                                                                                                                                                                                             |
| 96  | expresión de cálculo/transformación: line = line + "&lt;TD class='fuentecalendario' STYLE='cursor: default;' &gt;&lt;/TD&gt;";                                                                                                                               |
| 98  | expresión de cálculo/transformación: line =line + "&lt;/TR&gt;";                                                                                                                                                                                             |
| 109 | expresión de cálculo/transformación: var strinicapa = "&lt;div ID='"+ this.nombreobjeto + "' style=\"position: absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:0; height:0; z-index:2;visibility: " + this.visible + ";\"&gt;"; |
| 112 | expresión de cálculo/transformación: var strinicapa = "&lt;div ID='"+ this.nombreobjeto + "' style=\"margin-top: 10px; margin-right: 10px; position: relative; float: left; z-index: 2; visibility: " + this.visible + ";\"&gt;";                            |
| 115 | expresión de cálculo/transformación: var strinitabla = "&lt;table ID='hola" + this.nombreobjeto + "' bgcolor=\"#5a789e\" border =\"0\" &gt;";                                                                                                                |
| 119 | expresión de cálculo/transformación: strcuerpo= strcuerpo + "&lt;THEAD&gt;" + this.cabecera() + "&lt;/THEAD&gt;";                                                                                                                                            |
| 120 | expresión de cálculo/transformación: strcuerpo= strcuerpo + "&lt;TBODY id='dayList" + this.nombreobjeto + "' align='center'&gt;" + this.cuerpo() + "&lt;/TBODY&gt;";                                                                                         |
| 121 | expresión de cálculo/transformación: strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;                                                                                                                                              |
| 126 | expresión de cálculo/transformación: var parseYear = parseInt(this.ano);                                                                                                                                                                                     |
| 134 | expresión de cálculo/transformación: var ntabla = "hola" + this.nombreobjeto;                                                                                                                                                                                |
| 135 | expresión de cálculo/transformación: var ntbody = "dayList" + this.nombreobjeto;                                                                                                                                                                             |
| 259 | expresión de cálculo/transformación: dianumero = '0' + dianumero;                                                                                                                                                                                            |
| 263 | expresión de cálculo/transformación: strmesnumero = '0' + strmesnumero;                                                                                                                                                                                      |
| 266 | expresión de cálculo/transformación: var fechasec = dianumero + "-" + strmesnumero + "-" + anio;                                                                                                                                                             |
| 373 | expresión de cálculo/transformación: total = total + coleccionmeses[j].pendientes.length + coleccionmeses[j].pendientessalida.length - coleccionmeses[j].borradospend.length;                                                                                |
| 383 | expresión de cálculo/transformación: total = total + coleccionmeses[j].aceptados.length - coleccionmeses[j].borradosacep.length - coleccionmeses[j].cancelados.length;                                                                                       |

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

- Confirmar exposición y permisos de `libreria/clasecalendario.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
