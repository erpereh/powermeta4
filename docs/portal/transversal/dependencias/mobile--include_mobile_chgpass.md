# include_mobile_chgpass

Identificador: `mobile/include_mobile_chgpass.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/include_mobile_chgpass.jsp](../../../../clon_portal/portal/mobile/include_mobile_chgpass.jsp) | `25013f61ab0aa47536029b62e8c0f6ea76c3071c422c9e45e744397141311e5c` |     27 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/include_mobile_chgpass.jsp](../../../../clon_portal/portal/mobile/include_mobile_chgpass.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente                                          | Resolución estática parcial                               |
| --- | -------- | --------------------------------------------------------- | --------------------------------------------------------- |
| 11  | prod     | M4ProductByThreadUpdater.getProductIDFromRequest(request) | M4ProductByThreadUpdater.getProductIDFromRequest(request) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal               |
| --- | -------------------------------------------------- |
| 12  | if (prod != null &amp;&amp; prod.equals("mobile")) |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                        |
| --- | ---------------------------------------- |
| 17  | /mobile/css/mobile.generic.css           |
| 18  | /mobile/css/mobile.m4change_password.css |
| 19  | /library/jquery.js                       |
| 20  | /library/jquery.mobile.js                |
| 25  | /mobile/js/meta4.mobile.js               |
| 26  | /mobile/js/meta4.mobile.chgpass.js       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                         | Resolución | Ficha / candidato                                                        |
| ------ | --- | ---------------------------------- | ---------- | ------------------------------------------------------------------------ |
| BASE   | 19  | /library/jquery.js                 | contextual | &#96;library/jquery.js&#96;                                              |
| BASE   | 20  | /library/jquery.mobile.js          | ausente    | P06                                                                      |
| BASE   | 25  | /mobile/js/meta4.mobile.js         | contextual | [mobile/js/meta4.mobile.js](mobile--js--meta4-mobile.md)                 |
| BASE   | 26  | /mobile/js/meta4.mobile.chgpass.js | contextual | [mobile/js/meta4.mobile.chgpass.js](mobile--js--meta4-mobile-chgpass.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/include_mobile_chgpass.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
