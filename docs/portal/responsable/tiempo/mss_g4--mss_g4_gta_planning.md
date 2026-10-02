# mss_g4_gta_planning

Identificador: `mss_g4/mss_g4_gta_planning.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_gta_planning.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_planning.jsp) | `61d204a4c944d7e5d2dda3fe19913d62ad0a201c4f00f20339dbcc0bb2e479f9` |     53 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_gta_planning.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_planning.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente | Resolución estática parcial |
| --- | -------- | ---------------- | --------------------------- |
| 50  | mss      | "1"              | 1                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                             |
| --- | ---------------------------------------------------------------- |
| 40  | if ((screen.width&lt;=1024) &amp;&amp; (screen.height&lt;=768)){ |
| 42  | if (showMLeft == "menuSwitchShow hidden")                        |

### Includes, navegación y dependencias

| L   | Include                                           |
| --- | ------------------------------------------------- |
| 36  | ../../sse_generico/espanol/menu_ess.jsp           |
| 52  | ../../sse_g4/espanol/sse_g4_gta_planning_body.jsp |

| L   | Destino / recurso                                 |
| --- | ------------------------------------------------- |
| 21  | /css/estilo_mss.css                               |
| 22  | /css/autocompleter.css                            |
| 23  | /css/gta_planning.css                             |
| 25  | /libreria/mootools-core-1.3.2.js                  |
| 26  | /libreria/mootools-more-1.3.2.1.js                |
| 27  | /javascripts/Autocompleter.js                     |
| 28  | /javascripts/Autocompleter.Request.js             |
| 29  | /javascripts/Observer.js                          |
| 30  | /javascripts/floatingtips.js                      |
| 31  | /javascripts/gta.js                               |
| 32  | /library/m4gen.js                                 |
| 33  | /libreria/funciones_sse.js                        |
| 34  | /libreria/clase_val_entradas.js                   |
| 35  | /libreria/sco_incidences_link.js                  |
| 36  | ../../sse_generico/espanol/menu_ess.jsp           |
| 52  | ../../sse_g4/espanol/sse_g4_gta_planning_body.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                        | Resolución | Ficha / candidato                                                                                            |
| ------ | --- | ------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| BASE   | 36  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                          |
| BASE   | 52  | ../../sse_g4/espanol/sse_g4_gta_planning_body.jsp | física     | [sse_g4/sse_g4_gta_planning_body.jsp](../../empleado/tiempo/sse_g4--sse_g4_gta_planning_body.md)             |
| BASE   | 25  | /libreria/mootools-core-1.3.2.js                  | contextual | &#96;libreria/mootools-core-1.3.2.js&#96;                                                                    |
| BASE   | 26  | /libreria/mootools-more-1.3.2.1.js                | contextual | &#96;libreria/mootools-more-1.3.2.1.js&#96;                                                                  |
| BASE   | 27  | /javascripts/Autocompleter.js                     | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                 |
| BASE   | 28  | /javascripts/Autocompleter.Request.js             | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md) |
| BASE   | 29  | /javascripts/Observer.js                          | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                           |
| BASE   | 30  | /javascripts/floatingtips.js                      | contextual | [javascripts/floatingtips.js](../../transversal/dependencias/javascripts--floatingtips.md)                   |
| BASE   | 31  | /javascripts/gta.js                               | contextual | [javascripts/gta.js](../../transversal/dependencias/javascripts--gta.md)                                     |
| BASE   | 32  | /library/m4gen.js                                 | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                         |
| BASE   | 33  | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                       |
| BASE   | 34  | /libreria/clase_val_entradas.js                   | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)             |
| BASE   | 35  | /libreria/sco_incidences_link.js                  | contextual | [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md)           |
| BASE   | 36  | ../../sse_generico/espanol/menu_ess.jsp           | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                          |
| BASE   | 52  | ../../sse_g4/espanol/sse_g4_gta_planning_body.jsp | física     | [sse_g4/sse_g4_gta_planning_body.jsp](../../empleado/tiempo/sse_g4--sse_g4_gta_planning_body.md)             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_gta_planning.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
