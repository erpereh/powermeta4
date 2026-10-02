# shco_gen_js

Identificador: `shco_g0/shco_gen_js.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_js.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_js.jsp) | `fd4f1c5ac265bb655a5dc7ef7981a55791cf30c3be5e11b2ba4f5bda2d244f63` |     31 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_js.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_js.jsp). Líneas físicas, contando desde 1.

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

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12  | &lt;% if (!zappprod.equals("")){%&gt;                                                                                                            |
| 14  | &lt;%} else {%&gt;                                                                                                                               |
| 24  | if (M4FileURIChecker.exists((String)pageContext.getAttribute("zProdFileURI"),pageContext)== true){%&gt;                                          |
| 13  | expresión de cálculo/transformación: &lt;jsp:include page='&lt;%="/shco_g0_" + zappprod + "/shco_gen_load_js_msg.jsp" %&gt;' flush="false" /&gt; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 13  | &lt;%=                                  |
| 15  | &lt;%=                                  |
| 25  | &lt;%=(String)pageContext.getAttribute( |

| L   | Destino / recurso                           |
| --- | ------------------------------------------- |
| 9   | /translations/m4err_&lt;%=zlanguser%&gt;.js |
| 18  | /library/m4gen_excep.js                     |
| 19  | /library/m4gen.js                           |
| 20  | /library/m4menu.js                          |
| 21  | /library/m4help.js                          |
| 13  | /shco_gen_load_js_msg.jsp                   |
| 15  | /shco_g0/shco_gen_load_js_msg.jsp           |
| 23  | /shco_gen_js.jsp                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                  | Resolución | Ficha / candidato                                                    |
| ------ | --- | ------------------------------------------- | ---------- | -------------------------------------------------------------------- |
| BASE   | 13  | &lt;%=                                      | dinámica   | P06                                                                  |
| BASE   | 15  | &lt;%=                                      | dinámica   | P06                                                                  |
| BASE   | 25  | &lt;%=(String)pageContext.getAttribute(     | dinámica   | P06                                                                  |
| BASE   | 9   | /translations/m4err_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                  |
| BASE   | 18  | /library/m4gen_excep.js                     | contextual | [library/m4gen_excep.js](library--m4gen_excep.md)                    |
| BASE   | 19  | /library/m4gen.js                           | contextual | [library/m4gen.js](library--m4gen.md)                                |
| BASE   | 20  | /library/m4menu.js                          | contextual | [library/m4menu.js](library--m4menu.md)                              |
| BASE   | 21  | /library/m4help.js                          | contextual | [library/m4help.js](library--m4help.md)                              |
| BASE   | 13  | /shco_gen_load_js_msg.jsp                   | ausente    | P06                                                                  |
| BASE   | 15  | /shco_g0/shco_gen_load_js_msg.jsp           | contextual | [shco_g0/shco_gen_load_js_msg.jsp](shco_g0--shco_gen_load_js_msg.md) |
| BASE   | 23  | /shco_gen_js.jsp                            | ausente    | P06                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_js.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
