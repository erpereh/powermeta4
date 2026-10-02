# printTableData

Identificador: `sse_g2/old/proyecciones_q/js/printTableData.js`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/printTableData.js](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/printTableData.js) | `1a3c4afa6d8f3a1f331b57ae1c74a8f03824aa866065a413a0cba14f2be9e4b4` |    199 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/printTableData.js](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones_q/js/printTableData.js). Líneas físicas, contando desde 1.

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

| L   | Función           | Argumentos                                                                   |
| --- | ----------------- | ---------------------------------------------------------------------------- |
| 1   | printTableData    | anio                                                                         |
| 24  | getColumns00      | nm_pay                                                                       |
| 33  | getColumns01      |                                                                              |
| 39  | getColumns02      | isreal                                                                       |
| 46  | getColumns03      |                                                                              |
| 54  | getColorColumns00 | nm_pay,ind                                                                   |
| 64  | getDatosModo00    | data                                                                         |
| 72  | loadAll           | result                                                                       |
| 127 | cargaGen          | tab, datos, funcol, argfuncol, callfuncdraw, colorscolum, vamifooterCallback |
| 153 | mifooterCallback  | row, data, start, end, display                                               |
| 172 | load              | idtabla,columnas,datos,callfuncdraw,colorscolum,vamifooterCallback           |

| L   | Condición / acción / mensaje literal                                       |
| --- | -------------------------------------------------------------------------- |
| 111 | if(result.other_retribution.compro_jub){                                   |
| 113 | }else{                                                                     |
| 128 | if(datos){                                                                 |
| 129 | if(argfuncol!=null){                                                       |
| 130 | if(typeof (argfuncol) == 'object'){                                        |
| 132 | }else{                                                                     |
| 135 | }else{                                                                     |
| 138 | if(datos.data){                                                            |
| 140 | }else{                                                                     |
| 145 | }else{                                                                     |
| 173 | if(datos.length&gt;0){                                                     |
| 174 | if($('#'+idtabla+'[class*="dataTable"]').length&gt;0) {                    |
| 194 | }else{                                                                     |
| 160 | expresión de cálculo/transformación: var x = parseFloat(a) &#124;&#124; 0; |
| 161 | expresión de cálculo/transformación: var y = parseFloat(b) &#124;&#124; 0; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso          |
| --- | -------------------------- |
| 3   | ../proy_ret_json.jsp?ANIO= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato |
| ------ | --- | -------------------------- | ---------- | ----------------- |
| CYC    | 3   | ../proy_ret_json.jsp?ANIO= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/old/proyecciones_q/js/printTableData.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
