# combos

Identificador: `libreria/combos.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / compartido  | [m4custom/CYC/libreria/combos.js](../../../../clon_portal/portal/m4custom/CYC/libreria/combos.js)   | `cc2146c4b7047df870cd1811c4a512310f3fce2317fb610748a791e61098c9f9` |    325 |
| COLL / compartido | [m4custom/COLL/libreria/combos.js](../../../../clon_portal/portal/m4custom/COLL/libreria/combos.js) | `cc2146c4b7047df870cd1811c4a512310f3fce2317fb610748a791e61098c9f9` |    325 |
| IBER / compartido | [m4custom/IBER/libreria/combos.js](../../../../clon_portal/portal/m4custom/IBER/libreria/combos.js) | `cc2146c4b7047df870cd1811c4a512310f3fce2317fb610748a791e61098c9f9` |    325 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC compartida, COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/CYC/libreria/combos.js](../../../../clon_portal/portal/m4custom/CYC/libreria/combos.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos           |
| --- | ---------------- | -------------------- |
| 8   | tildes_unicode   | str                  |
| 26  | parsear          | soc,dir,area,uni,ser |
| 34  | cargaInicial     | s,d,a,u,se           |
| 141 | eliminarNoSelSoc |                      |
| 204 | eliminarNoSelDir |                      |
| 258 | eliminarNoSelAre |                      |
| 299 | eliminarNoSelUni |                      |

| L   | Condición / acción / mensaje literal                                                                 |
| --- | ---------------------------------------------------------------------------------------------------- |
| 35  | if(s=="0"){                                                                                          |
| 49  | if(i!=zsoc.sociedad.length){                                                                         |
| 50  | if (zsoc.sociedad[i].ID==s){                                                                         |
| 53  | }else{                                                                                               |
| 58  | if(d=="0"){                                                                                          |
| 69  | if(i!=zdir.direccion.length){                                                                        |
| 70  | if (zdir.direccion[i].ID==d){                                                                        |
| 73  | }else{                                                                                               |
| 78  | if(a=="0"){                                                                                          |
| 89  | if(i!=zarea.area.length){                                                                            |
| 90  | if (zarea.area[i].ID==a){                                                                            |
| 93  | }else{                                                                                               |
| 99  | if(u=="0"){                                                                                          |
| 110 | if(i!=zuni.unidad.length){                                                                           |
| 111 | if (zuni.unidad[i].ID==u){                                                                           |
| 114 | }else{                                                                                               |
| 130 | if(i!=zser.servicio.length){                                                                         |
| 131 | if (zser.servicio[i].ID==se){                                                                        |
| 134 | }else{                                                                                               |
| 149 | if(soci!="00"){                                                                                      |
| 155 | if (zdir.direccion[i].TAG!=soci) {                                                                   |
| 163 | if (zarea.area[i].TAG[j]==soci) {                                                                    |
| 167 | if(aux==1){                                                                                          |
| 176 | if (zuni.unidad[i].TAG[j]==soci) {                                                                   |
| 180 | if(aux==1){                                                                                          |
| 189 | if (zser.servicio[i].TAG[j]==soci) {                                                                 |
| 193 | if(aux==1){                                                                                          |
| 198 | }else{                                                                                               |
| 211 | if(dire!="00"){                                                                                      |
| 217 | if (zarea.area[i].TAG[j]==dire) {                                                                    |
| 221 | if(aux==1){                                                                                          |
| 230 | if (zuni.unidad[i].TAG[j]==dire) {                                                                   |
| 234 | if(aux==1){                                                                                          |
| 243 | if (zser.servicio[i].TAG[j]==dire) {                                                                 |
| 247 | if(aux==1){                                                                                          |
| 252 | }else{                                                                                               |
| 265 | if(areai!="00"){                                                                                     |
| 271 | if (zuni.unidad[i].TAG[j]==areai) {                                                                  |
| 275 | if(aux==1){                                                                                          |
| 284 | if (zser.servicio[i].TAG[j]==areai) {                                                                |
| 288 | if(aux==1){                                                                                          |
| 293 | }else{                                                                                               |
| 306 | if(unii!="00"){                                                                                      |
| 312 | if (zser.servicio[i].TAG[j]==unii) {                                                                 |
| 316 | if(aux==1){                                                                                          |
| 321 | }else{                                                                                               |
| 153 | expresión de cálculo/transformación: for(var i = zdir.direccion.length - 1; i &gt;= 0; i--){         |
| 162 | expresión de cálculo/transformación: for (var j = zarea.area[i].TAG.length - 1; j &gt;= 0; j--) {    |
| 175 | expresión de cálculo/transformación: for (var j = zuni.unidad[i].TAG.length - 1; j &gt;= 0; j--) {   |
| 188 | expresión de cálculo/transformación: for (var j = zser.servicio[i].TAG.length - 1; j &gt;= 0; j--) { |
| 216 | expresión de cálculo/transformación: for (var j = zarea.area[i].TAG.length - 1; j &gt;= 0; j--) {    |
| 229 | expresión de cálculo/transformación: for (var j = zuni.unidad[i].TAG.length - 1; j &gt;= 0; j--) {   |
| 242 | expresión de cálculo/transformación: for (var j = zser.servicio[i].TAG.length - 1; j &gt;= 0; j--) { |
| 270 | expresión de cálculo/transformación: for (var j = zuni.unidad[i].TAG.length - 1; j &gt;= 0; j--) {   |
| 283 | expresión de cálculo/transformación: for (var j = zser.servicio[i].TAG.length - 1; j &gt;= 0; j--) { |
| 311 | expresión de cálculo/transformación: for (var j = zser.servicio[i].TAG.length - 1; j &gt;= 0; j--) { |

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

- Confirmar exposición y permisos de `libreria/combos.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
