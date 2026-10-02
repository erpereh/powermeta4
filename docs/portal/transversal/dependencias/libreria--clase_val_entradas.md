# clase_val_entradas

Identificador: `libreria/clase_val_entradas.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/clase_val_entradas.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clase_val_entradas.js) | `77a152cdb0e8a67ad8cd7755e8c782d3b2aeb7f15421b44912d8126597a0fb58` |    151 |
| BASE / compartido | [libreria/clase_val_entradas.js](../../../../clon_portal/portal/libreria/clase_val_entradas.js)                             | `f8cad0e3d7d39929952bac6e52b4ccec0a1d5c1f58c5c7c417b920077aa02a87` |    152 |
| IBER / compartido | [m4custom/IBER/libreria/clase_val_entradas.js](../../../../clon_portal/portal/m4custom/IBER/libreria/clase_val_entradas.js) | `77a152cdb0e8a67ad8cd7755e8c782d3b2aeb7f15421b44912d8126597a0fb58` |    151 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/clase_val_entradas.js](../../../../clon_portal/portal/m4custom/COLL/libreria/clase_val_entradas.js). Líneas físicas, contando desde 1.

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

| L   | Función         | Argumentos                               |
| --- | --------------- | ---------------------------------------- |
| 1   | m4validar       | obj                                      |
| 142 | m4objvalidacion | tipo,parametro1,parametro2,validanook,me |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if (this.tipo == "_fechaing"){                                                                                                                                                                                                                                        |
| 13  | if (this.tipo == "_fechaesp"){                                                                                                                                                                                                                                        |
| 21  | if (this.tipo == "_email"){                                                                                                                                                                                                                                           |
| 26  | if (this.tipo == "_cp"){                                                                                                                                                                                                                                              |
| 31  | if (this.tipo == "_nif"){                                                                                                                                                                                                                                             |
| 36  | if (this.tipo == "_str"){                                                                                                                                                                                                                                             |
| 38  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 42  | else {                                                                                                                                                                                                                                                                |
| 43  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 46  | if (this.tipo == "_num"){                                                                                                                                                                                                                                             |
| 48  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 52  | else {                                                                                                                                                                                                                                                                |
| 53  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 56  | if (this.tipo == "_alfanum"){                                                                                                                                                                                                                                         |
| 58  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 63  | else {                                                                                                                                                                                                                                                                |
| 64  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 67  | if (this.tipo == "_decimal"){                                                                                                                                                                                                                                         |
| 69  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 74  | else {                                                                                                                                                                                                                                                                |
| 75  | alert("numero de decimales (parametro1) no definido");                                                                                                                                                                                                                |
| 78  | if (this.tipo == "_decimal2"){                                                                                                                                                                                                                                        |
| 80  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 84  | else {                                                                                                                                                                                                                                                                |
| 85  | alert("numero de decimales (parametro1) no definido");                                                                                                                                                                                                                |
| 88  | if (this.tipo == "_num_decimal"){                                                                                                                                                                                                                                     |
| 92  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 97  | else {                                                                                                                                                                                                                                                                |
| 98  | alert("Arguments missing");                                                                                                                                                                                                                                           |
| 101 | if (this.tipo == "_telef"){                                                                                                                                                                                                                                           |
| 107 | if (this.tipo == "_hours_minutes"){                                                                                                                                                                                                                                   |
| 111 | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 116 | else {                                                                                                                                                                                                                                                                |
| 117 | alert("Arguments missing");                                                                                                                                                                                                                                           |
| 124 | if (defecto == true){                                                                                                                                                                                                                                                 |
| 125 | alert("Tipo de validacion no definido");                                                                                                                                                                                                                              |
| 129 | if (this.resultado == false){                                                                                                                                                                                                                                         |
| 130 | if ((this.validanook != "") &amp;&amp; (this.me == true)){                                                                                                                                                                                                            |
| 132 | alert(this.validanook);                                                                                                                                                                                                                                               |
| 134 | else{                                                                                                                                                                                                                                                                 |
| 135 | if (this.me == true){                                                                                                                                                                                                                                                 |
| 136 | alert("La cadena no pasa la validacion");                                                                                                                                                                                                                             |
| 39  | expresión de cálculo/transformación: var objeto = new RegExp("^[ a-zA-Z.,áéíóúÁÉÍÓÚÜü]{" + this.parametro1 +"," + this.parametro2 + "}$");                                                                                                                            |
| 49  | expresión de cálculo/transformación: var objeto = new RegExp("^\\d{" + this.parametro1 +"," + this.parametro2 + "}$");                                                                                                                                                |
| 59  | expresión de cálculo/transformación: var objeto = new RegExp("^[ a-zA-Z0-9.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏÐÖ×ØÝÞßåðøýþÿ‰¢,_,\\-,:,\\,,\(,\),\',&amp;,^,&#96;,´,\",/,\$,€,£,\\\\]{" + this.parametro1 +"," + this.parametro2 + "}$");  |
| 71  | expresión de cálculo/transformación: var objeto = new RegExp("(^[1-9]{1}[0-9]*[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^0[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$");               |
| 81  | expresión de cálculo/transformación: var objeto = new RegExp("(^[1-9])&#124;(^[1-9]{1}[0-9]*[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^0[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$"); |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [libreria/clase_val_entradas.js](../../../../clon_portal/portal/libreria/clase_val_entradas.js). Líneas físicas, contando desde 1.

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

| L   | Función         | Argumentos                               |
| --- | --------------- | ---------------------------------------- |
| 1   | m4validar       | obj                                      |
| 143 | m4objvalidacion | tipo,parametro1,parametro2,validanook,me |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if (this.tipo == "_fechaing"){                                                                                                                                                                                                                                        |
| 13  | if (this.tipo == "_fechaesp"){                                                                                                                                                                                                                                        |
| 21  | if (this.tipo == "_email"){                                                                                                                                                                                                                                           |
| 26  | if (this.tipo == "_cp"){                                                                                                                                                                                                                                              |
| 32  | if (this.tipo == "_nif"){                                                                                                                                                                                                                                             |
| 37  | if (this.tipo == "_str"){                                                                                                                                                                                                                                             |
| 39  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 43  | else {                                                                                                                                                                                                                                                                |
| 44  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 47  | if (this.tipo == "_num"){                                                                                                                                                                                                                                             |
| 49  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 53  | else {                                                                                                                                                                                                                                                                |
| 54  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 57  | if (this.tipo == "_alfanum"){                                                                                                                                                                                                                                         |
| 59  | if (this.parametro1 != "" &amp;&amp; this.parametro2 != ""){                                                                                                                                                                                                          |
| 64  | else {                                                                                                                                                                                                                                                                |
| 65  | alert("parametros no definidos");                                                                                                                                                                                                                                     |
| 68  | if (this.tipo == "_decimal"){                                                                                                                                                                                                                                         |
| 70  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 75  | else {                                                                                                                                                                                                                                                                |
| 76  | alert("numero de decimales (parametro1) no definido");                                                                                                                                                                                                                |
| 79  | if (this.tipo == "_decimal2"){                                                                                                                                                                                                                                        |
| 81  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 85  | else {                                                                                                                                                                                                                                                                |
| 86  | alert("numero de decimales (parametro1) no definido");                                                                                                                                                                                                                |
| 89  | if (this.tipo == "_num_decimal"){                                                                                                                                                                                                                                     |
| 93  | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 98  | else {                                                                                                                                                                                                                                                                |
| 99  | alert("Arguments missing");                                                                                                                                                                                                                                           |
| 102 | if (this.tipo == "_telef"){                                                                                                                                                                                                                                           |
| 108 | if (this.tipo == "_hours_minutes"){                                                                                                                                                                                                                                   |
| 112 | if (this.parametro1 != ""){                                                                                                                                                                                                                                           |
| 117 | else {                                                                                                                                                                                                                                                                |
| 118 | alert("Arguments missing");                                                                                                                                                                                                                                           |
| 125 | if (defecto == true){                                                                                                                                                                                                                                                 |
| 126 | alert("Tipo de validacion no definido");                                                                                                                                                                                                                              |
| 130 | if (this.resultado == false){                                                                                                                                                                                                                                         |
| 131 | if ((this.validanook != "") &amp;&amp; (this.me == true)){                                                                                                                                                                                                            |
| 133 | alert(this.validanook);                                                                                                                                                                                                                                               |
| 135 | else{                                                                                                                                                                                                                                                                 |
| 136 | if (this.me == true){                                                                                                                                                                                                                                                 |
| 137 | alert("La cadena no pasa la validacion");                                                                                                                                                                                                                             |
| 40  | expresión de cálculo/transformación: var objeto = new RegExp("^[ a-zA-Z.,áéíóúÁÉÍÓÚÜü]{" + this.parametro1 +"," + this.parametro2 + "}$");                                                                                                                            |
| 50  | expresión de cálculo/transformación: var objeto = new RegExp("^\\d{" + this.parametro1 +"," + this.parametro2 + "}$");                                                                                                                                                |
| 60  | expresión de cálculo/transformación: var objeto = new RegExp("^[ a-zA-Z0-9.,ãÃõÕàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛáéíóúÁÉÍÓÚäëïöüÄËÏÖÜæÆœŒñÑçÇªº@%ŠšŸƒÅÏÐÖ×ØÝÞßåðøýþÿ‰¢,_,\\-,:,\\,,\(,\),\',&amp;,^,&#96;,´,\",/,\$,€,£,\\\\]{" + this.parametro1 +"," + this.parametro2 + "}$");  |
| 72  | expresión de cálculo/transformación: var objeto = new RegExp("(^[1-9]{1}[0-9]*[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^0[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$");               |
| 82  | expresión de cálculo/transformación: var objeto = new RegExp("(^[1-9])&#124;(^[1-9]{1}[0-9]*[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^0[ruta interna omitida]" + this.parametro1 + "}$)&#124;(^\\d{" + this.parametro1 +"," + this.parametro2 + "})$"); |

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

- Confirmar exposición y permisos de `libreria/clase_val_entradas.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
