# funciones_sse_val

Identificador: `libreria/funciones_sse_val.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_sse_val.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_sse_val.js) | `9c8469b0ab870a6fdbfda7411c7c7de59067db0e77d7185eba5fa796acf71104` |    182 |
| BASE / compartido | [libreria/funciones_sse_val.js](../../../../clon_portal/portal/libreria/funciones_sse_val.js)                             | `9c8469b0ab870a6fdbfda7411c7c7de59067db0e77d7185eba5fa796acf71104` |    182 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_sse_val.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_sse_val.js) | `9c8469b0ab870a6fdbfda7411c7c7de59067db0e77d7185eba5fa796acf71104` |    182 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_sse_val.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_sse_val.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 15  | m4activar        |            |
| 43  | m4desmarcar      |            |
| 70  | m4marcaraceptar  |            |
| 90  | m4marcarcancelar |            |
| 117 | m4validar        |            |
| 171 | m4sincro         |            |

| L   | Condición / acción / mensaje literal                                         |
| --- | ---------------------------------------------------------------------------- |
| 17  | if ((activada != 1) &amp;&amp; (null != document.all["aceptar"].length)){    |
| 45  | if (null == document.all["aceptar"].length){                                 |
| 48  | else{                                                                        |
| 53  | if (null == document.all["cancelar"].length){                                |
| 56  | else{                                                                        |
| 74  | if (null == document.all["aceptar"].length){                                 |
| 100 | if (null == document.all["cancelar"].length){                                |
| 121 | if ("INPUT" == event.srcElement.tagName){                                    |
| 128 | if (document.all["aceptar"].name == ElementoActual.name) {                   |
| 130 | if (document.all["cancelar"].checked == 1){                                  |
| 134 | if (document.all["cancelar"].name == ElementoActual.name) {                  |
| 136 | if (document.all["aceptar"].checked == 1){                                   |
| 141 | if (cadena1 == "Ac") {                                                       |
| 144 | if (document.all["cancelar"].item(i).name == nombreasoc) {                   |
| 146 | if (document.all["cancelar"].item(i).checked == 1){                          |
| 152 | if (cadena1 == "Ca") {                                                       |
| 155 | if (document.all["aceptar"].item(j).name == nombreasoc) {                    |
| 156 | if (document.all["aceptar"].item(j).checked == 1){                           |
| 173 | if (null == document.all["motivo"].length){                                  |
| 142 | expresión de cálculo/transformación: nombreasoc = "Ca"+(parseInt(indice1)+1) |
| 153 | expresión de cálculo/transformación: nombreasoc = "Ac"+(parseInt(indice1)-1) |

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

- Confirmar exposición y permisos de `libreria/funciones_sse_val.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
