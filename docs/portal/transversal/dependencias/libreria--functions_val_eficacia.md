# functions_val_eficacia

Identificador: `libreria/functions_val_eficacia.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/functions_val_eficacia.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_val_eficacia.js) | `aaf62893afadca57bfb2040eebc47c7082447287b40b4b37574872bc49fa7e91` |    261 |
| CYC / compartido  | [m4custom/CYC/libreria/functions_val_eficacia.js](../../../../clon_portal/portal/m4custom/CYC/libreria/functions_val_eficacia.js)   | `aaf62893afadca57bfb2040eebc47c7082447287b40b4b37574872bc49fa7e91` |    261 |
| IBER / compartido | [m4custom/IBER/libreria/functions_val_eficacia.js](../../../../clon_portal/portal/m4custom/IBER/libreria/functions_val_eficacia.js) | `aaf62893afadca57bfb2040eebc47c7082447287b40b4b37574872bc49fa7e91` |    261 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/functions_val_eficacia.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_val_eficacia.js). Líneas físicas, contando desde 1.

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

| L   | Función                 | Argumentos                                 |
| --- | ----------------------- | ------------------------------------------ |
| 8   | number_format           | number, decimals, dec_point, thousands_sep |
| 29  | formateoFecha           | fecha                                      |
| 53  | formateoCantidad        | cantidad                                   |
| 61  | formateoNumero          | numero                                     |
| 70  | formateListado          | listado                                    |
| 101 | mostrardivoculto        | id                                         |
| 124 | comprobarValoracion     | formulario                                 |
| 159 | rellenarFormularioDatos | formularioDatos, datos                     |

| L   | Condición / acción / mensaje literal                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if (s[0].length &gt; 3) {                                                                                                                                        |
| 22  | if ((s[1] &#124;&#124; '').length &lt; prec) {                                                                                                                   |
| 47  | if(fechaFormateada=="01/01/4000") {fechaFormateada = ""}                                                                                                         |
| 85  | if (contador == cambioCol + 1){                                                                                                                                  |
| 133 | if ((elem[i].type=='hidden')&amp;&amp;(elem[i].id=='CSP_ID_DEV_SUBPRODUCT')){                                                                                    |
| 138 | if((elem[i].type=='text') &amp;&amp;(elem[i].value=="")){                                                                                                        |
| 140 | if (elem[i].id=='CSP_ACCIONES_DESEMPENADAS') {                                                                                                                   |
| 148 | if((elem[i].type=='select-one') &amp;&amp;(elem[i].options[elem[i].selectedIndex].id=='00')) {                                                                   |
| 172 | if(tipo=="fecha") {$(this).html(formateoFecha(valor));}                                                                                                          |
| 173 | if(tipo=="horas") {$(this).html(formateoCantidad(valor));}                                                                                                       |
| 174 | if(tipo=="cantidad") {$(this).html(formateoCantidad(valor));}                                                                                                    |
| 175 | if(tipo=="numero") {$(this).html(formateoNumero(valor));}                                                                                                        |
| 176 | if(tipo=="listado") {$(this).html(formateListado(valor));}                                                                                                       |
| 194 | if(boton=='btnTodos'){                                                                                                                                           |
| 201 | if (numErrores&gt;0) {                                                                                                                                           |
| 206 | if (numErrores==0) {                                                                                                                                             |
| 220 | }else{                                                                                                                                                           |
| 227 | if (numErrores&gt;0) {                                                                                                                                           |
| 232 | if (numErrores==0) {                                                                                                                                             |
| 253 | if ($(this).attr("id")=='CSP_ID_ANSWER_VALUE'){                                                                                                                  |
| 10  | expresión de cálculo/transformación: prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),                                                                       |
| 15  | expresión de cálculo/transformación: var k = Math.pow(10, prec);                                                                                                 |
| 18  | expresión de cálculo/transformación: s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');                                                     |
| 45  | expresión de cálculo/transformación: fechaFormateada = dia + sep + mes + sep + anio;                                                                             |
| 77  | expresión de cálculo/transformación: cambioCol = Math.floor(cambioCol / 3);                                                                                      |
| 81  | expresión de cálculo/transformación: lista = lista + listado.substring(0,listado.indexOf(sep)) + ",&lt;/BR&gt;";                                                 |
| 86  | expresión de cálculo/transformación: lista = lista + '&lt;/td&gt;&lt;td style = "TEXT-ALIGN: top;BACKGROUND-COLOR: #e7e8ec;COLOR: #404040;FONT-SIZE: 13px"&gt;'; |
| 92  | expresión de cálculo/transformación: lista = lista + ' ' + "&lt;/BR&gt;";                                                                                        |
| 95  | expresión de cálculo/transformación: lista = lista + "&lt;/tr&gt;&lt;/table&gt;";                                                                                |
| 235 | expresión de cálculo/transformación: var form = $('#' + formulario);                                                                                             |
| 249 | expresión de cálculo/transformación: seleccionado = $('#' + formulario +' option:selected').attr("id");                                                          |

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

- Confirmar exposición y permisos de `libreria/functions_val_eficacia.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
