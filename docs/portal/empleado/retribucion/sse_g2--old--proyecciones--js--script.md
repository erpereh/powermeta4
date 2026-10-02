# script

Identificador: `sse_g2/old/proyecciones/js/script.js`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/old/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones/js/script.js) | `ed1711db7f4658ec0d9cde8e9f8372ccf8a0d858c15dd39f188d714981282045` |    639 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/old/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones/js/script.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                  |
| --- | ----------------------------------------- |
| 29  | ${r.format ? r.format(r.value) : r.value} |
| 31  | ${r.format ? r.format(r.value) : r.value} |
| 40  | ${c}                                      |
| 56  | ${table.title}                            |

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

| L   | Condición / acción / mensaje literal                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 28  | if (r.type === 'title') {                                                                                                                              |
| 55  | if (table.title) {                                                                                                                                     |
| 84  | if (projection_data.nm_pay[i]) return projection_data.nm_pay[i]                                                                                        |
| 85  | else return 'nm_pay_' + (i + 1).toLocaleString('en-US', {                                                                                              |
| 137 | if (tableRefData &amp;&amp; tableRefData.length &amp;&amp; hasTotPay)                                                                                  |
| 149 | if (!hasTotPay &amp;&amp; tableRefData &amp;&amp; tableRefData.length) {                                                                               |
| 160 | } else {                                                                                                                                               |
| 174 | if (tableRef.data &amp;&amp; tableRef.data.length) {                                                                                                   |
| 187 | } else if (tableRef.data &amp;&amp; tableRef.data.pay) {                                                                                               |
| 200 | } else {                                                                                                                                               |
| 228 | if (hasTotPay) {                                                                                                                                       |
| 236 | } else {                                                                                                                                               |
| 250 | if (res.direct_remuneration) {                                                                                                                         |
| 251 | if (res.direct_remuneration.fixed_remuneration) {                                                                                                      |
| 260 | if (res.direct_remuneration.variable_remuneration) {                                                                                                   |
| 267 | if (res.direct_remuneration.base_ret_var) {                                                                                                            |
| 273 | if (res.direct_remuneration.seg_soc) {                                                                                                                 |
| 281 | if (res.indirect_retribution) {                                                                                                                        |
| 282 | if (res.indirect_retribution.val_especie) {                                                                                                            |
| 289 | if (res.indirect_retribution.contrato_seguros) {                                                                                                       |
| 296 | if (res.indirect_retribution.ayudas) {                                                                                                                 |
| 303 | if (res.indirect_retribution.comidas) {                                                                                                                |
| 310 | if (res.indirect_retribution.diet_km) {                                                                                                                |
| 317 | if (res.indirect_retribution.ret_flex) {                                                                                                               |
| 325 | if (res.other_retribution) {                                                                                                                           |
| 326 | if (res.other_retribution.compro_jub) {                                                                                                                |
| 331 | if (res.other_retribution.plan_prev_emp) {                                                                                                             |
| 338 | if (res.other_retribution.rp_aportacion_definida) {                                                                                                    |
| 345 | if (res.other_retribution.inv_formacion) {                                                                                                             |
| 384 | if(data.type === 'bar') {                                                                                                                              |
| 393 | if (path) return path.split('.').reduce((prev, curr) =&gt; prev &amp;&amp; prev[curr], obj) &#124;&#124; ''                                            |
| 394 | else return ''                                                                                                                                         |
| 575 | if(data.type === 'bar') {                                                                                                                              |
| 8   | expresión de cálculo/transformación: const aux01 = aux00 - 1                                                                                           |
| 9   | expresión de cálculo/transformación: const aux02 = aux00 - 2                                                                                           |
| 10  | expresión de cálculo/transformación: const aux03 = aux00 - 3                                                                                           |
| 11  | expresión de cálculo/transformación: const aux04 = aux00 - 4                                                                                           |
| 407 | expresión de cálculo/transformación: const total = items.reduce((a, b) =&gt; a + b, 0)                                                                 |
| 409 | expresión de cálculo/transformación: const val1 = Math.round(items[0] * 100 / total)                                                                   |
| 410 | expresión de cálculo/transformación: const val2 = Math.round(items[1] * 100 / total)                                                                   |
| 411 | expresión de cálculo/transformación: const val3 = Math.round(items[2] * 100 / total)                                                                   |
| 452 | expresión de cálculo/transformación: const total = items.reduce((a, b) =&gt; a + b, 0)                                                                 |
| 453 | expresión de cálculo/transformación: const val1 = Math.abs(Math.round(items[0] * 100 / total))                                                         |
| 454 | expresión de cálculo/transformación: const val2 = Math.abs(Math.round(items[1] * 100 / total))                                                         |
| 455 | expresión de cálculo/transformación: const val3 = Math.abs(Math.round(items[2] * 100 / total))                                                         |
| 456 | expresión de cálculo/transformación: const val4 = Math.abs(Math.round(items[3] * 100 / total))                                                         |
| 457 | expresión de cálculo/transformación: const val5 = Math.abs(Math.round(items[4] * 100 / total))                                                         |
| 458 | expresión de cálculo/transformación: const val6 = Math.abs(Math.round(items[5] * 100 / total))                                                         |
| 603 | expresión de cálculo/transformación: h1.innerHTML = 'Proyección Teórica Haberes año ' + res.projection_data.year &#124;&#124; new Date().getFullYear() |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                 |
| --- | ------------------------------------------------- |
| 1   | [host externo]/npm/lit-html@1.3.0/lit-html.min.js |
| 2   | ../node_modules/lit-html/lit-html.js              |
| 13  | ../proy_ret_json.jsp?ANIO=                        |
| 14  | ../proy_ret_json.jsp?ANIO=                        |
| 15  | ../proy_ret_json.jsp?ANIO=                        |
| 16  | ../proy_ret_json.jsp?ANIO=                        |
| 17  | ../proy_ret_json.jsp?ANIO=                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                        | Resolución | Ficha / candidato                                                                                                           |
| ------ | --- | ------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| CYC    | 1   | [host externo]/npm/lit-html@1.3.0/lit-html.min.js | externa    | destino externo                                                                                                             |
| CYC    | 2   | ../node_modules/lit-html/lit-html.js              | física     | [sse_g2/old/proyecciones/node_modules/lit-html/lit-html.js](sse_g2--old--proyecciones--node_modules--lit-html--lit-html.md) |
| CYC    | 13  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                         |
| CYC    | 14  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                         |
| CYC    | 15  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                         |
| CYC    | 16  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                         |
| CYC    | 17  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/old/proyecciones/js/script.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
