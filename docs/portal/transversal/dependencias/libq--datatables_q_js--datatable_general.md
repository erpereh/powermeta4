# datatable_general

Identificador: `LibQ/DataTables_Q_js/datatable_general.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [LibQ/DataTables_Q_js/datatable_general.js](../../../../clon_portal/portal/LibQ/DataTables_Q_js/datatable_general.js) | `afbd9854e0d9c44312464058c3bbc38dea8decd65f5fa92ae4b805e2f17f4977` |    210 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [LibQ/DataTables_Q_js/datatable_general.js](../../../../clon_portal/portal/LibQ/DataTables_Q_js/datatable_general.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                  |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29  | input   | type=text; style=width:100%;; placeholder=Buscar '+title+'; id=buss'+indi+'; name=buss'+indi+'; data-index='+indi+'; onblur=$(\''+tablarefres+'\').DataTable().draw();; onkeyup=$(\''+tablarefres+'\').DataTable().draw(); |
| 31  | select  | style=width:100%; id=buss'+indi+'; name=buss'+indi+'; data-index='+indi+'; onchange=$(\''+tablarefres+'\').DataTable().draw();                                                                                             |
| 32  | option  | value=                                                                                                                                                                                                                     |
| 34  | option  | value='+ele+'                                                                                                                                                                                                              |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                         | Argumentos                      |
| --- | ------------------------------- | ------------------------------- |
| 25  | colocaFiltros_thead             | tablarefres                     |
| 42  | cargaFunBusqueda_thead          | tabla                           |
| 60  | valoresColmnUnicos              | idtabla,columna                 |
| 73  | valoresColmnUnicosFechaOnlyYear | idtabla,columna,separa,posicion |
| 96  | busfeconform                    | data,ele                        |
| 126 | buscaqcontencade                | data, ele                       |
| 137 | filrannum                       | data, ele                       |
| 157 | filporranfe                     | data, ind                       |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 28  | if($(this)[0].dataset.tipo=="text"){                                                                                       |
| 30  | }else if($(this)[0].dataset.tipo=="select"){                                                                               |
| 44  | if(this.dataset.funbus){                                                                                                   |
| 66  | if(el==valor){ esta = true; }                                                                                              |
| 68  | if(!esta){ if(valor!=null){ arra.push(valor); } }                                                                          |
| 79  | if(el==valor){ esta = true; }                                                                                              |
| 81  | if(!esta &amp;&amp; valor!=null){ arra.push(valor); }                                                                      |
| 100 | if (typeof($('#buss'+ele).val()) === "undefined") {                                                                        |
| 102 | }else{                                                                                                                     |
| 104 | if ( $('#buss'+ele).val() == '' ) {                                                                                        |
| 106 | }else{                                                                                                                     |
| 113 | if ( buqueda===datete ){                                                                                                   |
| 128 | if(typeof($($('[name="buss'+ele+'"]')[ind]).val()) === "undefined") { return true; }                                       |
| 129 | if($($('[name="buss'+ele+'"]')[ind]).val() == '') { return true; }                                                         |
| 130 | if(data[ele].toLowerCase().indexOf( $($('[name="buss'+ele+'"]')[ind]).val().toLowerCase() ) &gt; -1){ return true; }       |
| 143 | if ( ( isNaN( min ) &amp;&amp; isNaN( max ) ) &#124;&#124;                                                                 |
| 159 | if ((typeof($('#min'+ind).val()) === "undefined") &#124;&#124; (typeof($('#max'+ind).val()) === "undefined")){             |
| 161 | }else{                                                                                                                     |
| 163 | if ( ($('#min'+ind).val() == '' &amp;&amp; $('#max'+ind).val() == '') ){                                                   |
| 167 | if ($('#min'+ind).val() != '' &#124;&#124; $('#max'+ind).val() != '') {                                                    |
| 171 | if (iMin_temp == '') {                                                                                                     |
| 177 | if (iMax_temp == '') {                                                                                                     |
| 188 | if (iMin=="" &amp;&amp; iMax == ""){                                                                                       |
| 191 | else if (iMin=="" &amp;&amp; iDate&lt;iMax){                                                                               |
| 194 | else if (iMin&lt;=iDate &amp;&amp; ""==iMax){                                                                              |
| 197 | else if (iMin&lt;=iDate &amp;&amp; iDate&lt;=iMax){                                                                        |
| 139 | expresión de cálculo/transformación: var min = parseFloat( $('#min'+ele).val() );                                          |
| 140 | expresión de cálculo/transformación: var max = parseFloat( $('#max'+ele).val() );                                          |
| 141 | expresión de cálculo/transformación: var age = parseFloat( data[ele] ) &#124;&#124; 0; // aqui se le dice el nº de columna |

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

- Confirmar exposición y permisos de `LibQ/DataTables_Q_js/datatable_general.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
