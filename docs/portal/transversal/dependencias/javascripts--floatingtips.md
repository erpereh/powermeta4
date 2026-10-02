# floatingtips

Identificador: `javascripts/floatingtips.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [javascripts/floatingtips.js](../../../../clon_portal/portal/javascripts/floatingtips.js) | `5f2b764d691860d8df57c5be0510926df9f86c533d88b5385d04b6979f46bce3` |    196 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [javascripts/floatingtips.js](../../../../clon_portal/portal/javascripts/floatingtips.js). Líneas físicas, contando desde 1.

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

| L   | Condición / acción / mensaje literal                                                                                                                                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45  | if (!['top', 'right', 'bottom', 'left', 'inside'].contains(this.options.position)) this.options.position = 'top';                                                                             |
| 46  | if (elements) this.attach(elements);                                                                                                                                                          |
| 63  | if (old) if (old.getStyle('opacity') == 1) { clearTimeout(old.retrieve('timeout')); return this; }                                                                                            |
| 65  | if (tip == null) return this;                                                                                                                                                                 |
| 74  | if (!tip) return this;                                                                                                                                                                        |
| 86  | if (oc == 'title') {                                                                                                                                                                          |
| 88  | if (!elem.get('floatingtitle')) elem.setProperty('floatingtitle', elem.get('title'));                                                                                                         |
| 96  | if (cnt) {                                                                                                                                                                                    |
| 97  | if (o.html) cwr.set('html', typeof(cnt) == 'string' ? cnt : cnt.get('html'));                                                                                                                 |
| 98  | else cwr.set('text', cnt);                                                                                                                                                                    |
| 99  | } else {                                                                                                                                                                                      |
| 106 | if (o.balloon &amp;&amp; !Browser.ie6) {                                                                                                                                                      |
| 111 | switch (opos) {                                                                                                                                                                               |
| 112 | case 'inside':                                                                                                                                                                                |
| 113 | case 'top': trgSt['border-bottom-width'] = 0; break;                                                                                                                                          |
| 114 | case 'right': trgSt['border-left-width'] = 0; trgSt['float'] = 'left'; cwr.setStyle('margin-left', o.arrowSize); break;                                                                       |
| 115 | case 'bottom': trgSt['border-top-width'] = 0; break;                                                                                                                                          |
| 116 | case 'left': trgSt['border-right-width'] = 0;                                                                                                                                                 |
| 117 | if (Browser.ie7) { trgSt['position'] = 'absolute'; trgSt['right'] = 0; } else { trgSt['float'] = 'right'; }                                                                                   |
| 121 | switch (opos) {                                                                                                                                                                               |
| 122 | case 'inside': case 'top': case 'bottom':                                                                                                                                                     |
| 125 | case 'left': case 'right':                                                                                                                                                                    |
| 137 | if (opos == 'inside') {                                                                                                                                                                       |
| 141 | } else {                                                                                                                                                                                      |
| 142 | switch (opos) {                                                                                                                                                                               |
| 143 | case 'top': pos.y -= tipSz.y + o.distance; break;                                                                                                                                             |
| 144 | case 'right': pos.x += trgC.width + o.distance; break;                                                                                                                                        |
| 145 | case 'bottom': pos.y += trgC.height + o.distance; break;                                                                                                                                      |
| 146 | case 'left': pos.x -= tipSz.x + o.distance; break;                                                                                                                                            |
| 150 | if (o.center) {                                                                                                                                                                               |
| 151 | switch (opos) {                                                                                                                                                                               |
| 152 | case 'top': case 'bottom': pos.x += (trgC.width / 2 - tipSz.x / 2); break;                                                                                                                    |
| 153 | case 'left': case 'right': pos.y += (trgC.height / 2 - tipSz.y / 2); break;                                                                                                                   |
| 154 | case 'inside':                                                                                                                                                                                |
| 175 | if ((o.motionOnShow &amp;&amp; din) &#124;&#124; (o.motionOnHide &amp;&amp; !din)) {                                                                                                          |
| 177 | if (!pos) return;                                                                                                                                                                             |
| 178 | switch (o.position) {                                                                                                                                                                         |
| 179 | case 'inside':                                                                                                                                                                                |
| 180 | case 'top': m['top'] = din ? [pos.y - o.motion, pos.y] : pos.y - o.motion; break;                                                                                                             |
| 181 | case 'right': m['left'] = din ? [pos.x + o.motion, pos.x] : pos.x + o.motion; break;                                                                                                          |
| 182 | case 'bottom': m['top'] = din ? [pos.y + o.motion, pos.y] : pos.y + o.motion; break;                                                                                                          |
| 183 | case 'left': m['left'] = din ? [pos.x - o.motion, pos.x] : pos.x - o.motion; break;                                                                                                           |
| 188 | if (!din) t.get('morph').chain(function() { this.dispose(); }.bind(t));                                                                                                                       |
| 94  | expresión de cálculo/transformación: var tip = new Element('div').addClass(o.className + '-wrapper').setStyles({ 'margin': 0, 'padding': 0, 'z-index': cwr.getStyle('z-index') }).adopt(cwr); |
| 108 | expresión de cálculo/transformación: var trg = new Element('div').addClass(o.className + '-triangle').setStyles({ 'margin': 0, 'padding': 0 });                                               |
| 135 | expresión de cálculo/transformación: var pos = { x: trgC.left + o.offset.x, y: trgC.top + o.offset.y };                                                                                       |

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

- Confirmar exposición y permisos de `javascripts/floatingtips.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
