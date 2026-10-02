# QOrg

Identificador: `QOrg/js/QOrg.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / compartido  | [m4custom/CYC/QOrg/js/QOrg.js](../../../../clon_portal/portal/m4custom/CYC/QOrg/js/QOrg.js) | `6c86592ec7926c1f674bf05e097e2ace4abd3abe2113b3646e7a9192ef734263` |    557 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/QOrg/js/QOrg.js](../../../../clon_portal/portal/m4custom/CYC/QOrg/js/QOrg.js). Líneas físicas, contando desde 1.

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

| L   | Función           | Argumentos  |
| --- | ----------------- | ----------- |
| 11  | recarorg          |             |
| 69  | buscarminmax      | disx,disy   |
| 96  | getscale          |             |
| 105 | funmousemove      | event       |
| 113 | funtouchmove      | event       |
| 121 | funmouseclickmove | event,di    |
| 155 | buscarmascer      |             |
| 177 | setZoom           | zoom,el     |
| 191 | blockevdef        | event       |
| 202 | zoomea            | event,tipo  |
| 254 | eventinicio       | event       |
| 267 | eventiniciotouch  | event       |
| 280 | eventfinal        | event       |
| 318 | eventinicialclick | event       |
| 342 | eventfinalclick   | event       |
| 413 | buscaennodo       | textob,nodo |
| 421 | buscaenorg        | textob      |
| 431 | centraNodo        | nodo        |
| 445 | numpadres         | padrecoll   |
| 451 | despli            | ele         |
| 458 | aplicazoombus     | divcont     |
| 468 | procesaBusq       | resp        |
| 483 | aplibus           | ele,dire    |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 77  | if(this.style['visibility']=='visible'){                                                                                                                                                                                                                           |
| 110 | if(clickado) eventfinal(event);                                                                                                                                                                                                                                    |
| 118 | if(clickado) eventfinal(event);                                                                                                                                                                                                                                    |
| 125 | if(di=='l'){                                                                                                                                                                                                                                                       |
| 128 | }else if(di=='r'){                                                                                                                                                                                                                                                 |
| 131 | }else if(di=='u'){                                                                                                                                                                                                                                                 |
| 134 | }else if(di=='d'){                                                                                                                                                                                                                                                 |
| 157 | if(this.style['visibility']=='visible'){                                                                                                                                                                                                                           |
| 166 | if ( mascer==null &#124;&#124; ( calc01x &lt;= calc02x &amp;&amp; calc01y &lt;= calc02y ) ) {                                                                                                                                                                      |
| 208 | if( fin&gt;=zminv &amp;&amp; fin&lt;=zmaxv ) {                                                                                                                                                                                                                     |
| 217 | if( tipo!='+' &amp;&amp; tipo!='-' &amp;&amp; mi_x!=0 &amp;&amp; mi_y!=0) {                                                                                                                                                                                        |
| 255 | if ( event.target.getAttribute("data-quitar") != "false" ){                                                                                                                                                                                                        |
| 268 | if ( event.target.getAttribute("data-quitar") != "false" ){                                                                                                                                                                                                        |
| 299 | if(minx&gt;$(window).width()) {                                                                                                                                                                                                                                    |
| 302 | if(maxx&lt;0) {                                                                                                                                                                                                                                                    |
| 305 | if(miny&gt;$(window).height()) {                                                                                                                                                                                                                                   |
| 308 | if(maxy-zmargtop&lt;0) {                                                                                                                                                                                                                                           |
| 320 | if( event.target.id != 'inbusq' ) {                                                                                                                                                                                                                                |
| 327 | if(resta&gt;500){                                                                                                                                                                                                                                                  |
| 331 | if( $(event.target)[0].className.toString().indexOf('gen-fle') != -1 &#124;&#124;                                                                                                                                                                                  |
| 344 | if( event.target.id != 'inbusq' ) {                                                                                                                                                                                                                                |
| 345 | if( event.target.dataset['quitar'] != 'false' &amp;&amp;                                                                                                                                                                                                           |
| 352 | if(auxtiempoclick&gt;0){                                                                                                                                                                                                                                           |
| 356 | if(resta&lt;500){                                                                                                                                                                                                                                                  |
| 358 | if(numclicks==2){                                                                                                                                                                                                                                                  |
| 362 | }else{                                                                                                                                                                                                                                                             |
| 366 | }else{                                                                                                                                                                                                                                                             |
| 416 | if( re == 0 ){                                                                                                                                                                                                                                                     |
| 425 | if(resp!=null){                                                                                                                                                                                                                                                    |
| 446 | if(padrecoll){                                                                                                                                                                                                                                                     |
| 462 | if( $(elemento).hasClass('zoombus') ) {                                                                                                                                                                                                                            |
| 486 | if(ele.value!="" &amp;&amp; ele.value!=undefined){                                                                                                                                                                                                                 |
| 489 | if(dire=="+"){                                                                                                                                                                                                                                                     |
| 491 | }else if(dire=="-"){                                                                                                                                                                                                                                               |
| 495 | if(resp[item]==undefined){                                                                                                                                                                                                                                         |
| 496 | if(item&lt;0){                                                                                                                                                                                                                                                     |
| 498 | }else{                                                                                                                                                                                                                                                             |
| 503 | if(resp[item]!=undefined){ procesaBusq(resp[item]); }                                                                                                                                                                                                              |
| 512 | if(e.keyCode==13){                                                                                                                                                                                                                                                 |
| 514 | } else{                                                                                                                                                                                                                                                            |
| 531 | if(event.target.id != 'inbusq') {                                                                                                                                                                                                                                  |
| 535 | if (event.which == '107') {                                                                                                                                                                                                                                        |
| 537 | }else if (event.which == '109') {                                                                                                                                                                                                                                  |
| 541 | if (event.which == '37') {                                                                                                                                                                                                                                         |
| 544 | }else if (event.which == '39') {                                                                                                                                                                                                                                   |
| 547 | }else if (event.which == '38') {                                                                                                                                                                                                                                   |
| 550 | }else if (event.which == '40') {                                                                                                                                                                                                                                   |
| 89  | expresión de cálculo/transformación: minx = objminx.offset().left + disx + (objmaxx.width()*zoomscale) + 5;                                                                                                                                                        |
| 90  | expresión de cálculo/transformación: maxx = objmaxx.offset().left + disx ;                                                                                                                                                                                         |
| 91  | expresión de cálculo/transformación: miny = objminy.offset().top + disy + (objmaxy.height()*zoomscale) + 5;                                                                                                                                                        |
| 92  | expresión de cálculo/transformación: maxy = objmaxy.offset().top + disy ;                                                                                                                                                                                          |
| 126 | expresión de cálculo/transformación: clientX = mi_x + desplaza;                                                                                                                                                                                                    |
| 129 | expresión de cálculo/transformación: clientX = mi_x - desplaza;                                                                                                                                                                                                    |
| 133 | expresión de cálculo/transformación: clientY = mi_y + desplaza;                                                                                                                                                                                                    |
| 136 | expresión de cálculo/transformación: clientY = mi_y - desplaza;                                                                                                                                                                                                    |
| 161 | expresión de cálculo/transformación: var calc01x = (mascer!=null) ? Math.abs($(this).offset().left+($(this).width()*zoomscale/2)-mi_x) : null;                                                                                                                     |
| 162 | expresión de cálculo/transformación: var calc02x = (mascer!=null) ? Math.abs(mascer.offset().left+(mascer.width()*zoomscale/2)-mi_x) : null;                                                                                                                       |
| 163 | expresión de cálculo/transformación: var calc01y = (mascer!=null) ? Math.abs($(this).offset().top+($(this).height()*zoomscale/2)-mi_y) : null;                                                                                                                     |
| 164 | expresión de cálculo/transformación: var calc02y = (mascer!=null) ? Math.abs(mascer.offset().top+(mascer.height()*zoomscale/2)-mi_y) : null;                                                                                                                       |
| 181 | expresión de cálculo/transformación: var s = "scale(" + zoom + ")";                                                                                                                                                                                                |
| 182 | expresión de cálculo/transformación: var oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";                                                                                                                                           |
| 206 | expresión de cálculo/transformación: var fin = (event!=null) ? (event.originalEvent.wheelDelta &gt;= 0) ? (zoomscale + zincdec).toFixed(1) : (zoomscale - zincdec).toFixed(1) : (tipo=='+') ? (zoomscale + zincdec).toFixed(1) : (zoomscale - zincdec).toFixed(1); |
| 218 | expresión de cálculo/transformación: var desfx = posiantx - (mascer.offset().left);                                                                                                                                                                                |
| 219 | expresión de cálculo/transformación: var desfy = posianty - (mascer.offset().top) - zmargtop;                                                                                                                                                                      |
| 221 | expresión de cálculo/transformación: var pad_x = $elecontent.offset().left + desfx;                                                                                                                                                                                |
| 222 | expresión de cálculo/transformación: var pad_y = $elecontent.offset().top + desfy;                                                                                                                                                                                 |
| 289 | expresión de cálculo/transformación: disx = (mi_x - clientX);                                                                                                                                                                                                      |
| 291 | expresión de cálculo/transformación: clientX = clientX + disx;                                                                                                                                                                                                     |
| 293 | expresión de cálculo/transformación: disy = (mi_y - clientY);                                                                                                                                                                                                      |
| 295 | expresión de cálculo/transformación: clientY = clientY + disy;                                                                                                                                                                                                     |
| 306 | expresión de cálculo/transformación: valtop = $elecontent.offset().top - zmargtop;                                                                                                                                                                                 |
| 309 | expresión de cálculo/transformación: valtop = $elecontent.offset().top - zmargtop;                                                                                                                                                                                 |
| 325 | expresión de cálculo/transformación: var resta = actrime - auxtiempoclick;                                                                                                                                                                                         |
| 354 | expresión de cálculo/transformación: var resta = actrime - auxtiempoclick;                                                                                                                                                                                         |
| 433 | expresión de cálculo/transformación: var difobx = ($(window).width()/2) - ($(nodeEl).offset().left + ($(nodeEl).width()/2) );                                                                                                                                      |
| 434 | expresión de cálculo/transformación: var difoby = ($(window).height()/2) - ($(nodeEl).offset().top + ($(nodeEl).height()/2) );                                                                                                                                     |

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

- Confirmar exposición y permisos de `QOrg/js/QOrg.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
