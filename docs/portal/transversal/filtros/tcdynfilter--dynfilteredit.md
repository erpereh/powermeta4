# dynfilteredit

Identificador: `tcdynfilter/dynfilteredit.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [tcdynfilter/espanol/dynfilteredit.jsp](../../../../clon_portal/portal/tcdynfilter/espanol/dynfilteredit.jsp) | `1a778e0682512b808838f517174f996cfcf300afce6975f17a0e8622f5af6e88` |     36 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [tcdynfilter/espanol/dynfilteredit.jsp](../../../../clon_portal/portal/tcdynfilter/espanol/dynfilteredit.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 16  | zsubsesion      | getParameter("zsubsesion") |

| L   | Variable   | Expresión fuente                                   | Resolución estática parcial                        |
| --- | ---------- | -------------------------------------------------- | -------------------------------------------------- |
| 16  | zsubsesion | getStringValue(request.getParameter("zsubsesion")) | getStringValue(request.getParameter("zsubsesion")) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                        |
| --- | ------------ | --------------------------------------------------------- |
| 25  | m4:startpage | m4task=getStringValue(request.getParameter("zsubsesion")) |
| 27  | m4:endpage   |                                                           |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                     |
| --- | --------------------------- |
| 26  | ../dynfiltereditgenpage.jsp |

| L   | Destino / recurso           |
| --- | --------------------------- |
| 26  | ../dynfiltereditgenpage.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                  | Resolución | Ficha / candidato                                                            |
| ------ | --- | --------------------------- | ---------- | ---------------------------------------------------------------------------- |
| BASE   | 26  | ../dynfiltereditgenpage.jsp | física     | [tcdynfilter/dynfiltereditgenpage.jsp](tcdynfilter--dynfiltereditgenpage.md) |
| BASE   | 26  | ../dynfiltereditgenpage.jsp | física     | [tcdynfilter/dynfiltereditgenpage.jsp](tcdynfilter--dynfiltereditgenpage.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tcdynfilter/dynfilteredit.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
