# script

Identificador: `sse_g2/proyecciones/js/script.js`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proyecciones/js/script.js) | `ce610c2858aad8f8ec59cb40d8a92ceb5d26664f6dd6bb462a3c0e8e0011edc9` |    861 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/proyecciones/js/script.js)   | `ce610c2858aad8f8ec59cb40d8a92ceb5d26664f6dd6bb462a3c0e8e0011edc9` |    861 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/proyecciones/js/script.js) | `ce610c2858aad8f8ec59cb40d8a92ceb5d26664f6dd6bb462a3c0e8e0011edc9` |    861 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/proyecciones/js/script.js](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/proyecciones/js/script.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                  |
| --- | ----------------------------------------- |
| 35  | ${r.format ? r.format(r.value) : r.value} |
| 38  | ${r.format ? r.format(r.value) : r.value} |
| 40  | ${r.format ? r.format(r.value) : r.value} |
| 50  | ${c}                                      |
| 66  | ${table.title}                            |
| 781 | Retribución Directa '+aux00+'             |
| 785 | Compensación Total                        |
| 791 | Retribución Directa '+aux00+'             |
| 795 | Compensación Total                        |
| 799 | Retribución Flexible                      |

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

| L   | Función     | Argumentos |
| --- | ----------- | ---------- |
| 19  | getindexfom | arr,seh    |

| L   | Condición / acción / mensaje literal                                                                                                                                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22  | if(currentValue.concept == seh) ind = index;                                                                                                                                                  |
| 34  | if (r.type === 'title') {                                                                                                                                                                     |
| 37  | if (r.type === 'total') {                                                                                                                                                                     |
| 107 | if (projection_data.nm_pay[i]) return projection_data.nm_pay[i]                                                                                                                               |
| 108 | else return 'nm_pay_' + (i + 1).toLocaleString('en-US', {                                                                                                                                     |
| 240 | if (tableRefData &amp;&amp; tableRefData.length &amp;&amp; hasTotPay){                                                                                                                        |
| 253 | if (!hasTotPay &amp;&amp; tableRefData &amp;&amp; tableRefData.length) {                                                                                                                      |
| 264 | } else {                                                                                                                                                                                      |
| 278 | if (tableRef.data &amp;&amp; tableRef.data.length) {                                                                                                                                          |
| 291 | } else if (tableRef.data &amp;&amp; tableRef.data.pay) {                                                                                                                                      |
| 304 | } else {                                                                                                                                                                                      |
| 332 | if (hasTotPay) {                                                                                                                                                                              |
| 340 | } else {                                                                                                                                                                                      |
| 354 | if (res.direct_remuneration) {                                                                                                                                                                |
| 355 | if (res.direct_remuneration.fixed_remuneration) {                                                                                                                                             |
| 364 | if (res.direct_remuneration.variable_remuneration) {                                                                                                                                          |
| 371 | if (res.direct_remuneration.base_ret_var) {                                                                                                                                                   |
| 377 | if (res.direct_remuneration.seg_soc) {                                                                                                                                                        |
| 385 | if (res.indirect_retribution) {                                                                                                                                                               |
| 387 | if (res.indirect_retribution.comidas) {                                                                                                                                                       |
| 395 | if (res.indirect_retribution.contrato_seguros) {                                                                                                                                              |
| 402 | if (res.indirect_retribution.val_especie) {                                                                                                                                                   |
| 411 | if(value.length&gt;0){                                                                                                                                                                        |
| 413 | if(key1=='value'){                                                                                                                                                                            |
| 428 | if (res.indirect_retribution.ayudas) {                                                                                                                                                        |
| 436 | if (res.indirect_retribution.diet_km) {                                                                                                                                                       |
| 453 | if (res.other_retribution &amp;&amp; res.other_retribution.compro_jub) {                                                                                                                      |
| 460 | if (res.other_retribution &amp;&amp; res.other_retribution.plan_prev_emp) {                                                                                                                   |
| 469 | if (res.other_retribution &amp;&amp; res.other_retribution.rp_aportacion_definida) {                                                                                                          |
| 478 | if (res.indirect_retribution &amp;&amp; res.indirect_retribution.ret_flex) {                                                                                                                  |
| 507 | if (res.indirect_retribution.val_especie &amp;&amp; res.indirect_retribution.val_especie.data) {                                                                                              |
| 516 | if (res.indirect_retribution.val_especie &amp;&amp; res.indirect_retribution.val_especie.data &amp;&amp; getindexfom(res.indirect_retribution.val_especie.data,'Vehículo compañía') != -1) {  |
| 525 | if (res.other_retribution &amp;&amp; res.other_retribution.inv_formacion) {                                                                                                                   |
| 820 | if(res.projection_data.year&gt;=2018){                                                                                                                                                        |
| 822 | }else{                                                                                                                                                                                        |
| 8   | expresión de cálculo/transformación: const aux01 = aux00 - 1                                                                                                                                  |
| 9   | expresión de cálculo/transformación: const aux02 = aux00 - 2                                                                                                                                  |
| 10  | expresión de cálculo/transformación: const aux03 = aux00 - 3                                                                                                                                  |
| 11  | expresión de cálculo/transformación: const aux04 = aux00 - 4                                                                                                                                  |
| 414 | expresión de cálculo/transformación: totti = totti + value1;                                                                                                                                  |
| 813 | expresión de cálculo/transformación: tt.innerHTML = 'Informe de compensación total ' + res.projection_data.year &#124;&#124; new Date().getFullYear()                                         |
| 815 | expresión de cálculo/transformación: tn.innerHTML = res.projection_data.id_hr + ' - ' + res.projection_data.nm_first_name + ' ' + res.projection_data.nm_family_name &#124;&#124; 'Sin datos' |

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

| Ámbito | L   | Referencia                                        | Resolución | Ficha / candidato                                                                                                  |
| ------ | --- | ------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | [host externo]/npm/lit-html@1.3.0/lit-html.min.js | externa    | destino externo                                                                                                    |
| COLL   | 2   | ../node_modules/lit-html/lit-html.js              | física     | [sse_g2/proyecciones/node_modules/lit-html/lit-html.js](sse_g2--proyecciones--node_modules--lit-html--lit-html.md) |
| COLL   | 13  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| COLL   | 14  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| COLL   | 15  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| COLL   | 16  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| COLL   | 17  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| CYC    | 1   | [host externo]/npm/lit-html@1.3.0/lit-html.min.js | externa    | destino externo                                                                                                    |
| CYC    | 2   | ../node_modules/lit-html/lit-html.js              | física     | [sse_g2/proyecciones/node_modules/lit-html/lit-html.js](sse_g2--proyecciones--node_modules--lit-html--lit-html.md) |
| CYC    | 13  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| CYC    | 14  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| CYC    | 15  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| CYC    | 16  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| CYC    | 17  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| IBER   | 1   | [host externo]/npm/lit-html@1.3.0/lit-html.min.js | externa    | destino externo                                                                                                    |
| IBER   | 2   | ../node_modules/lit-html/lit-html.js              | física     | [sse_g2/proyecciones/node_modules/lit-html/lit-html.js](sse_g2--proyecciones--node_modules--lit-html--lit-html.md) |
| IBER   | 13  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| IBER   | 14  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| IBER   | 15  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| IBER   | 16  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |
| IBER   | 17  | ../proy_ret_json.jsp?ANIO=                        | ausente    | P06                                                                                                                |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/proyecciones/js/script.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
