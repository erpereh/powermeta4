# Proyección Teórica Haberes año [valor dinámico]

Identificador: `sse_g2/old/proyecciones/index.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/old/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones/index.jsp) | `f86b511410727da4838be89da847c4e7444a0a65d9f76ef078fc8ae82a10dd67` |    290 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/old/proyecciones/index.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/old/proyecciones/index.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                        |
| --- | ----------------------------------------------- |
| 23  | Proyección Teórica Haberes año [valor dinámico] |
| 263 | Proyección Teórica Haberes año [valor dinámico] |
| 264 | Imprimir PDF                                    |
| 271 | Remuneración Directa                            |
| 275 | Retribución Indirecta                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                         |
| --- | ------- | --------------------------------- |
| 262 | img     | class=logo; src=./assets/logo.png |
| 264 | button  | class=print-btn; onclick=print()  |
| 265 | img     | src=./assets/print-sharp.svg      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 14  | anio            | getParameter(request,"anio") |

| L   | Variable | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | -------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 14  | anio     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                        |
| --- | ----------------------------------------------------------- |
| 15  | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";} |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 25  | ./css/bootstrap.min.css        |
| 26  | ./css/chartist.min.css         |
| 253 | ./css/print.css                |
| 256 | ./js/dirty-json.js             |
| 257 | ./js/chartist.min.js           |
| 258 | ./js/chartist-plugin-legend.js |
| 262 | ./assets/logo.png              |
| 265 | ./assets/print-sharp.svg       |
| 287 | ./js/script.js                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                                        |
| ------ | --- | ------------------------------ | ---------- | ---------------------------------------------------------------------------------------- |
| CYC    | 256 | ./js/dirty-json.js             | física     | [sse_g2/old/proyecciones/js/dirty-json.js](sse_g2--old--proyecciones--js--dirty-json.md) |
| CYC    | 257 | ./js/chartist.min.js           | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones/js/chartist.min.js&#96;                |
| CYC    | 258 | ./js/chartist-plugin-legend.js | física     | &#96;m4custom/CYC/sse_g2/espanol/old/proyecciones/js/chartist-plugin-legend.js&#96;      |
| CYC    | 287 | ./js/script.js                 | física     | [sse_g2/old/proyecciones/js/script.js](sse_g2--old--proyecciones--js--script.md)         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/old/proyecciones/index.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
