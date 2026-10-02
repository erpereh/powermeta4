# Autocompleter

Identificador: `javascripts/Autocompleter.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [javascripts/Autocompleter.js](../../../../clon_portal/portal/javascripts/Autocompleter.js) | `257d27024498663d5dac820b57d62651d3efea3ff47d0603fdc8738691c48fe1` |    469 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [javascripts/Autocompleter.js](../../../../clon_portal/portal/javascripts/Autocompleter.js). Líneas físicas, contando desde 1.

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

| L   | Operación | Argumentos literales |
| --- | --------- | -------------------- |
| 197 | setValue  | value                |
| 251 | setValue  | value                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69  | if (this.options.filter) this.filter = this.options.filter.bind(this);                                                                                        |
| 83  | if ($(this.options.customChoices)) {                                                                                                                          |
| 85  | } else {                                                                                                                                                      |
| 93  | if (this.options.relative) {                                                                                                                                  |
| 99  | if (!this.options.separator.test(this.options.separatorSplit)) {                                                                                              |
| 113 | document.addEvent('click', function (e) {if (e.target != this.choices) this.toggleFocus(false)}.bind(this))                                                   |
| 122 | if (this.fix) this.fix.destroy();                                                                                                                             |
| 133 | if (!state) this.hideChoices(true);                                                                                                                           |
| 146 | if (!e &amp;&amp; this.focussed) return this.prefetch();                                                                                                      |
| 147 | if (e &amp;&amp; e.key &amp;&amp; !e.shift) {                                                                                                                 |
| 148 | switch (e.key) {                                                                                                                                              |
| 149 | case 'enter':                                                                                                                                                 |
| 159 | case 'up': case 'down':                                                                                                                                       |
| 160 | if (!this.prefetch() &amp;&amp; this.queryValue !== null) {                                                                                                   |
| 167 | case 'esc': case 'tab':                                                                                                                                       |
| 178 | if (input.substr(0, start).toLowerCase() != this.queryValue.toLowerCase()) start = 0;                                                                         |
| 179 | if (this.options.multiple) {                                                                                                                                  |
| 186 | if (finish) {                                                                                                                                                 |
| 190 | if (!this.options.allowDupes) tokens = [].combine(tokens);                                                                                                    |
| 199 | if (finish &#124;&#124; this.selectMode == 'pick') start = end;                                                                                               |
| 207 | if (this.fix) {                                                                                                                                               |
| 215 | if (!first) return;                                                                                                                                           |
| 216 | if (!this.visible) {                                                                                                                                          |
| 219 | if (this.fx) this.fx.start(1);                                                                                                                                |
| 222 | if (this.options.selectFirst &#124;&#124; this.typeAhead &#124;&#124; first.inputValue == this.queryValue) this.choiceOver(first, this.typeAhead);            |
| 226 | if (items.length &gt; max) {                                                                                                                                  |
| 234 | if (this.options.visibleChoices) {                                                                                                                            |
| 238 | if (coords.right &gt; scroll.x + size.x) scroll.x = coords.right - size.x;                                                                                    |
| 239 | if (coords.bottom &gt; scroll.y + size.y) scroll.y = coords.bottom - size.y;                                                                                  |
| 245 | if (clear) {                                                                                                                                                  |
| 247 | if (this.options.forceSelect) value = this.opted;                                                                                                             |
| 248 | if (this.options.autoTrim) {                                                                                                                                  |
| 253 | if (!this.visible) return;                                                                                                                                    |
| 255 | if (this.selected) this.selected.removeClass('autocompleter-selected');                                                                                       |
| 261 | if (this.fx) this.fx.start(0).chain(hide);                                                                                                                    |
| 262 | else hide();                                                                                                                                                  |
| 268 | if (this.options.multiple) {                                                                                                                                  |
| 277 | if (query.length &lt; this.options.minLength) {                                                                                                               |
| 279 | } else {                                                                                                                                                      |
| 280 | if (query === this.queryValue &#124;&#124; (this.visible &amp;&amp; query == this.selectedValue)) {                                                           |
| 281 | if (this.visible) return false;                                                                                                                               |
| 283 | } else {                                                                                                                                                      |
| 286 | if (!this.fetchCached()) this.query();                                                                                                                        |
| 294 | if (!this.options.cache                                                                                                                                       |
| 307 | if (!type &#124;&#124; (type == 'array' &amp;&amp; !tokens.length) &#124;&#124; (type == 'hash' &amp;&amp; !tokens.getLength())) {                            |
| 309 | } else {                                                                                                                                                      |
| 310 | if (this.options.maxChoices &lt; tokens.length &amp;&amp; !this.options.overflow) tokens.length = this.options.maxChoices;                                    |
| 321 | if (!choice &#124;&#124; choice == this.selected) return;                                                                                                     |
| 322 | if (this.selected) this.selected.removeClass('autocompleter-selected');                                                                                       |
| 325 | if (!this.selectMode) this.opted = this.element.value;                                                                                                        |
| 326 | if (!selection) return;                                                                                                                                       |
| 328 | if (this.overflown) {                                                                                                                                         |
| 331 | if (coords.top - margin &lt; top &amp;&amp; top) this.choices.scrollTop = Math.max(coords.top - margin, 0);                                                   |
| 332 | else if (coords.bottom + margin &gt; bottom) this.choices.scrollTop = Math.min(coords.bottom - height + margin, bottom);                                      |
| 339 | if (choice) this.choiceOver(choice);                                                                                                                          |
| 346 | alert("fiter");                                                                                                                                               |
| 385 | if (Browser.Engine.trident) {                                                                                                                                 |
| 403 | if (this.fix) {                                                                                                                                               |
| 416 | if (this.fix) this.fix.setStyle('display', 'none');                                                                                                           |
| 421 | if (this.fix) this.fix = this.fix.destroy();                                                                                                                  |
| 429 | if (!Browser.Engine.trident) return {start: this.selectionStart, end: this.selectionEnd};                                                                     |
| 432 | if (!range &#124;&#124; range.parentElement() != this) return pos;                                                                                            |
| 434 | if (this.type == 'text') {                                                                                                                                    |
| 437 | } else {                                                                                                                                                      |
| 450 | if (Browser.Engine.trident) {                                                                                                                                 |
| 458 | } else {                                                                                                                                                      |
| 185 | expresión de cálculo/transformación: value = value.substr(0, this.queryIndex) + input + value.substr(this.queryIndex + old.length);                           |
| 192 | expresión de cálculo/transformación: value = tokens.join(sep) + sep;                                                                                          |
| 227 | expresión de cálculo/transformación: var item = items[max - 1];                                                                                               |
| 238 | expresión de cálculo/transformación: if (coords.right &gt; scroll.x + size.x) scroll.x = coords.right - size.x;                                               |
| 239 | expresión de cálculo/transformación: if (coords.bottom &gt; scroll.y + size.y) scroll.y = coords.bottom - size.y;                                             |
| 273 | expresión de cálculo/transformación: var last = toIndex.length - 1;                                                                                           |
| 330 | expresión de cálculo/transformación: top = this.choices.scrollTop, height = this.choices.offsetHeight, bottom = top + height;                                 |
| 331 | expresión de cálculo/transformación: if (coords.top - margin &lt; top &amp;&amp; top) this.choices.scrollTop = Math.max(coords.top - margin, 0);              |
| 332 | expresión de cálculo/transformación: else if (coords.bottom + margin &gt; bottom) this.choices.scrollTop = Math.min(coords.bottom - height + margin, bottom); |
| 435 | expresión de cálculo/transformación: pos.start = 0 - dup.moveStart('character', -100000);                                                                     |
| 436 | expresión de cálculo/transformación: pos.end = pos.start + range.text.length;                                                                                 |
| 439 | expresión de cálculo/transformación: var offset = value.length - value.match(/[\n\r]*$/)[0].length;                                                           |
| 442 | expresión de cálculo/transformación: pos.end = offset - dup.text.length;                                                                                      |
| 444 | expresión de cálculo/transformación: pos.start = offset - dup.text.length;                                                                                    |
| 451 | expresión de cálculo/transformación: var diff = this.value.substr(start, end - start).replace(/\r/g, '').length;                                              |

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

- Confirmar exposición y permisos de `javascripts/Autocompleter.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
