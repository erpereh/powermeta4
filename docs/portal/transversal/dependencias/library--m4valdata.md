# m4valdata

Identificador: `library/m4valdata.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/library/m4valdata.js](../../../../clon_portal/portal/m4custom/COLL/library/m4valdata.js) | `ba5d65dedfafd03c53ca4ffd072b2c713e2df50a3e9496e9c84a98446c019997` |    187 |
| BASE / compartido | [library/m4valdata.js](../../../../clon_portal/portal/library/m4valdata.js)                             | `00184fe27bc1c5864c89f0e2439c0f470b18ac77ee2ac02606f0d6fe4b266fcc` |    185 |
| CYC / compartido  | [m4custom/CYC/library/m4valdata.js](../../../../clon_portal/portal/m4custom/CYC/library/m4valdata.js)   | `ba5d65dedfafd03c53ca4ffd072b2c713e2df50a3e9496e9c84a98446c019997` |    187 |
| IBER / compartido | [m4custom/IBER/library/m4valdata.js](../../../../clon_portal/portal/m4custom/IBER/library/m4valdata.js) | `ba5d65dedfafd03c53ca4ffd072b2c713e2df50a3e9496e9c84a98446c019997` |    187 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/library/m4valdata.js](../../../../clon_portal/portal/m4custom/COLL/library/m4valdata.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos                                    |
| --- | ---------------- | --------------------------------------------- |
| 12  | getHTTPObject    |                                               |
| 31  | getDOMObject     | strXML                                        |
| 53  | getHTTPDOMObject | objHTTP                                       |
| 69  | isXMLRecord      | rec, index, aIn                               |
| 80  | writeXMLRecord   | rec, index, aIn, aOut                         |
| 88  | getXMLItemValue  | item                                          |
| 98  | clearRecord      | aOut                                          |
| 105 | m4translate      | sPageVal, fPageList, aIn, aOut, bServerFilter |
| 182 | m4translatelist  | sPageVal, fPageList, aIn, aOut                |
| 185 | m4translatepick  | sPageVal, fPageList, aIn, aOut                |

| L   | Condición / acción / mensaje literal                                               |
| --- | ---------------------------------------------------------------------------------- |
| 73  | if (m4valor("NombreFormulario", aIn[i], "", "get") != getXMLItemValue(item)) {     |
| 91  | if (item.childNodes[i].nodeName == "item") {                                       |
| 116 | if (sValue.length &gt; 0) {                                                        |
| 122 | if (bInValuesNotNull) {                                                            |
| 129 | if (xmlhttp.readyState == 4) {                                                     |
| 133 | if (oo == null) {                                                                  |
| 151 | if (isXMLRecord(recs, i, aIn)) {                                                   |
| 159 | if (bList) {                                                                       |
| 160 | if (typeof(fPageList) == "function") {                                             |
| 162 | } else if (typeof(fPageList) == "string") {                                        |
| 83  | expresión de cálculo/transformación: var item = rec[i + aIn.length][index];        |
| 163 | expresión de cálculo/transformación: var sFunc = "m4filtro(\"" + fPageList + "\""; |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [library/m4valdata.js](../../../../clon_portal/portal/library/m4valdata.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos                                    |
| --- | ---------------- | --------------------------------------------- |
| 10  | getHTTPObject    |                                               |
| 29  | getDOMObject     | strXML                                        |
| 51  | getHTTPDOMObject | objHTTP                                       |
| 67  | isXMLRecord      | rec, index, aIn                               |
| 78  | writeXMLRecord   | rec, index, aIn, aOut                         |
| 86  | getXMLItemValue  | item                                          |
| 96  | clearRecord      | aOut                                          |
| 103 | m4translate      | sPageVal, fPageList, aIn, aOut, bServerFilter |
| 180 | m4translatelist  | sPageVal, fPageList, aIn, aOut                |
| 183 | m4translatepick  | sPageVal, fPageList, aIn, aOut                |

| L   | Condición / acción / mensaje literal                                               |
| --- | ---------------------------------------------------------------------------------- |
| 71  | if (m4valor("NombreFormulario", aIn[i], "", "get") != getXMLItemValue(item)) {     |
| 89  | if (item.childNodes[i].nodeName == "item") {                                       |
| 114 | if (sValue.length &gt; 0) {                                                        |
| 120 | if (bInValuesNotNull) {                                                            |
| 127 | if (xmlhttp.readyState == 4) {                                                     |
| 131 | if (oo == null) {                                                                  |
| 149 | if (isXMLRecord(recs, i, aIn)) {                                                   |
| 157 | if (bList) {                                                                       |
| 158 | if (typeof(fPageList) == "function") {                                             |
| 160 | } else if (typeof(fPageList) == "string") {                                        |
| 81  | expresión de cálculo/transformación: var item = rec[i + aIn.length][index];        |
| 161 | expresión de cálculo/transformación: var sFunc = "m4filtro(\"" + fPageList + "\""; |

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

- Confirmar exposición y permisos de `library/m4valdata.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
