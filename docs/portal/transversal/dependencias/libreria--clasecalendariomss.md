# clasecalendariomss

Identificador: `libreria/clasecalendariomss.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/clasecalendariomss.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clasecalendariomss.js) | `88f0d8fcb6f5c67bbaab3b813f2c9732575f7ba8ece92d9d3d5318e8cf602996` |    395 |
| BASE / compartido | [libreria/clasecalendariomss.js](../../../../clon_portal/portal/libreria/clasecalendariomss.js)                             | `88f0d8fcb6f5c67bbaab3b813f2c9732575f7ba8ece92d9d3d5318e8cf602996` |    395 |
| IBER / compartido | [m4custom/IBER/libreria/clasecalendariomss.js](../../../../clon_portal/portal/m4custom/IBER/libreria/clasecalendariomss.js) | `88f0d8fcb6f5c67bbaab3b813f2c9732575f7ba8ece92d9d3d5318e8cf602996` |    395 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/clasecalendariomss.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clasecalendariomss.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta   |
| --- | -------------------------- |
| 87  | " + this.nombreempl + "    |
| 97  | " + totaldays[intLoop] + " |

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

| L   | Función            | Argumentos                                                                      |
| --- | ------------------ | ------------------------------------------------------------------------------- |
| 2   | clasecalendariomss | nombreobjeto,mes,ano,visible,activo,posicionx,posiciony,nombreempl,diascabecera |
| 54  | mostrarmss         | param                                                                           |
| 62  | movermss           | x,y                                                                             |
| 69  | getDaysmss         | month, year                                                                     |
| 77  | getTodaymss        |                                                                                 |
| 85  | cabeceramss        |                                                                                 |
| 107 | cuerpomss          |                                                                                 |
| 117 | pintacalendariomss |                                                                                 |
| 241 | damefechamssacep   | td                                                                              |
| 288 | damefechamsscanc   | td                                                                              |
| 336 | seleccion          | td,evento                                                                       |
| 344 | mcomprobarmss      | valor,matriz                                                                    |
| 355 | quitarvalormss     | valor,matriz                                                                    |
| 371 | mestadomss         |                                                                                 |
| 374 | dd                 |                                                                                 |
| 378 | splitDataInArray   | sArgsValue                                                                      |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if (slanguage == "es") {                                                                                                                                                                                                                             |
| 39  | } else if (slanguage == "in") {                                                                                                                                                                                                                      |
| 43  | } else if (slanguage == "fr") {                                                                                                                                                                                                                      |
| 47  | } else if (slanguage == "pt") {                                                                                                                                                                                                                      |
| 55  | if (param == true) {                                                                                                                                                                                                                                 |
| 57  | } else {                                                                                                                                                                                                                                             |
| 71  | if (1 == month)                                                                                                                                                                                                                                      |
| 73  | else                                                                                                                                                                                                                                                 |
| 99  | if (this.diascabecera==true) {                                                                                                                                                                                                                       |
| 101 | } else {                                                                                                                                                                                                                                             |
| 125 | if (this.mes == 12){                                                                                                                                                                                                                                 |
| 143 | if ((today.year == newCal.getYear()) &amp;&amp; (today.month == newCal.getMonth()))day = today.day;                                                                                                                                                  |
| 155 | if (daily &lt;= intDaysInMonth) {                                                                                                                                                                                                                    |
| 157 | if ((diasemana.getDay() == 0) &#124;&#124; (diasemana.getDay() == 6)) {                                                                                                                                                                              |
| 159 | } else {                                                                                                                                                                                                                                             |
| 163 | } else {                                                                                                                                                                                                                                             |
| 172 | if (salto !=true){                                                                                                                                                                                                                                   |
| 175 | if (m4textodentrotd(cell,false,"") == this.festivos[ifestivos]) {                                                                                                                                                                                    |
| 181 | } else {                                                                                                                                                                                                                                             |
| 189 | if (salto !=true){                                                                                                                                                                                                                                   |
| 192 | if (m4textodentrotd(cell,false,"") == this.pendientes[ifechas]) {                                                                                                                                                                                    |
| 198 | } else {                                                                                                                                                                                                                                             |
| 206 | if (salto !=true){                                                                                                                                                                                                                                   |
| 209 | if (m4textodentrotd(cell,false,"") == this.aceptados[iaceptados]) {                                                                                                                                                                                  |
| 215 | } else {                                                                                                                                                                                                                                             |
| 223 | if (salto !=true){                                                                                                                                                                                                                                   |
| 226 | if (m4textodentrotd(cell,false,"") == this.cancelados[icancelados]) {                                                                                                                                                                                |
| 234 | } else {                                                                                                                                                                                                                                             |
| 252 | if ((m4textodentrotd(td,false,"") != "") &amp;&amp; (this.activo == true)) {                                                                                                                                                                         |
| 253 | if ((td.style.backgroundColor != finsemana) &amp;&amp; (td.style.backgroundColor != festivos) &amp;&amp; (td.style.backgroundColor != normal) &amp;&amp; (td.style.backgroundColor != aceptado) &amp;&amp; (td.style.backgroundColor != colorcanc)){ |
| 258 | if (dianumero.length != 2){                                                                                                                                                                                                                          |
| 262 | if (strmesnumero.length != 2){                                                                                                                                                                                                                       |
| 268 | if (((td.style.backgroundColor == pendiente) &#124;&#124; (td.style.backgroundColor == cancelado)) &amp;&amp; (control == false)) {                                                                                                                  |
| 273 | if ((td.style.backgroundColor == coloracep) &amp;&amp; (control == false)){                                                                                                                                                                          |
| 274 | if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancelados)){                                                                                                                                                                               |
| 276 | } else {                                                                                                                                                                                                                                             |
| 279 | if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.aceppend)){                                                                                                                                                                                 |
| 299 | if ((m4textodentrotd(td,false,"") != "") &amp;&amp; (this.activo == true)) {                                                                                                                                                                         |
| 300 | if ((td.style.backgroundColor != finsemana) &amp;&amp; (td.style.backgroundColor != festivos) &amp;&amp; (td.style.backgroundColor != normal) &amp;&amp; (td.style.backgroundColor != aceptado) &amp;&amp; (td.style.backgroundColor != coloracep)){ |
| 305 | if (dianumero.length != 2){                                                                                                                                                                                                                          |
| 309 | if (strmesnumero.length != 2){                                                                                                                                                                                                                       |
| 316 | if (((td.style.backgroundColor == pendiente) &#124;&#124; (td.style.backgroundColor == cancelado)) &amp;&amp; (control == false)){                                                                                                                   |
| 321 | if ((td.style.backgroundColor == colorcanc) &amp;&amp; (control == false)){                                                                                                                                                                          |
| 322 | if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancelados)){                                                                                                                                                                               |
| 324 | } else {                                                                                                                                                                                                                                             |
| 327 | if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancpend)){                                                                                                                                                                                 |
| 337 | if (evento.altKey){                                                                                                                                                                                                                                  |
| 339 | } else {                                                                                                                                                                                                                                             |
| 347 | if (matriz[i] == valor){                                                                                                                                                                                                                             |
| 359 | if (matriz[elimina] == valor){                                                                                                                                                                                                                       |
| 386 | if (i == 0) {                                                                                                                                                                                                                                        |
| 389 | }else{                                                                                                                                                                                                                                               |
| 63  | expresión de cálculo/transformación: var xporc = x + "%";                                                                                                                                                                                            |
| 64  | expresión de cálculo/transformación: var yporc = y + "%";                                                                                                                                                                                            |
| 87  | expresión de cálculo/transformación: var line = "&lt;TR&gt;&lt;TD class='fuentecalendariotittle' align='center' colspan='35' &gt;" + this.nombreempl + "&lt;/TD&gt;&lt;/TR&gt;";                                                                     |
| 88  | expresión de cálculo/transformación: var parseYear = parseInt(this.ano);                                                                                                                                                                             |
| 97  | expresión de cálculo/transformación: line1 = line1 + "&lt;TD class='fuentecalendariotittle' &gt;" + totaldays[intLoop] + "&lt;/TD&gt;";                                                                                                              |
| 100 | expresión de cálculo/transformación: totalline = line + "&lt;tr&gt;" + line1 + "&lt;/tr&gt;";                                                                                                                                                        |
| 113 | expresión de cálculo/transformación: var totalcuerpo = "&lt;tr&gt;" + line + "&lt;/tr&gt;";                                                                                                                                                          |
| 129 | expresión de cálculo/transformación: var strinicapa = "&lt;div ID='"+ this.nombreobjeto + "' style=\"margin-top: 10px; margin-right: 10px; position: relative; z-index: 2; visibility: " + this.visible + ";\"&gt;";                                 |
| 131 | expresión de cálculo/transformación: var strinitabla = "&lt;table ID='hola" + this.nombreobjeto + "' bgcolor=\"#5a789e\" border =\"0\" &gt;";                                                                                                        |
| 133 | expresión de cálculo/transformación: var strcuerpo = "&lt;THEAD&gt;" + this.cabeceramss() + "&lt;/THEAD&gt;";                                                                                                                                        |
| 134 | expresión de cálculo/transformación: strcuerpo= strcuerpo + "&lt;TBODY ID='dayList" + this.nombreobjeto + "' align=\"center\"&gt;" + this.cuerpomss() + "&lt;/TBODY&gt;";                                                                            |
| 135 | expresión de cálculo/transformación: strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;                                                                                                                                      |
| 139 | expresión de cálculo/transformación: var parseYear = parseInt(this.ano);                                                                                                                                                                             |
| 145 | expresión de cálculo/transformación: var ntabla = "hola" + this.nombreobjeto;                                                                                                                                                                        |
| 146 | expresión de cálculo/transformación: var ntbody = "dayList" + this.nombreobjeto;                                                                                                                                                                     |
| 149 | expresión de cálculo/transformación: var parseYear = parseInt(this.ano);                                                                                                                                                                             |
| 259 | expresión de cálculo/transformación: dianumero = '0' + dianumero;                                                                                                                                                                                    |
| 263 | expresión de cálculo/transformación: strmesnumero = '0' + strmesnumero;                                                                                                                                                                              |
| 266 | expresión de cálculo/transformación: var fechasec = dianumero + "-" + strmesnumero + "-" + anio;                                                                                                                                                     |
| 306 | expresión de cálculo/transformación: dianumero = '0' + dianumero;                                                                                                                                                                                    |
| 310 | expresión de cálculo/transformación: strmesnumero = '0' + strmesnumero;                                                                                                                                                                              |
| 313 | expresión de cálculo/transformación: var fechasec = dianumero + "-" + strmesnumero + "-" + anio;                                                                                                                                                     |

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

- Confirmar exposición y permisos de `libreria/clasecalendariomss.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
