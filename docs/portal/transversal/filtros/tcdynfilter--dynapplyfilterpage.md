# dynapplyfilterpage

Identificador: `tcdynfilter/dynapplyfilterpage.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tcdynfilter/dynapplyfilterpage.jsp](../../../../clon_portal/portal/tcdynfilter/dynapplyfilterpage.jsp) | `b39562d09dc349f39dbd476b72be21f29685ada21b7b11b6878ffab61228e30f` |     51 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tcdynfilter/dynapplyfilterpage.jsp](../../../../clon_portal/portal/tcdynfilter/dynapplyfilterpage.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                |
| --- | ------- | ------------------------------------------------------------------------ |
| 34  | form    | method=post; name=frmcallreturnpage; id=="frmcallreturnpage"; action=    |
| 35  | input   | type=hidden; id=zdynfiltersinfo; name=zdynfiltersinfo; value=            |
| 36  | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt; |
| 40  | form    | method=post; name=frmApplyfilter; id=="frmApplyfilter"; action=          |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag     | Contrato declarado                                                         |
| --- | ------- | -------------------------------------------------------------------------- |
| 42  | m4:item | outputdef=DynFilterAPiNode; item=PAR_RETURN_PAGE; m4varname=sParReturnPage |
| 43  | m4:item | outputdef=DynFilterAPiNode; item=DYN_INFO_HTML; m4varname=sDynFiltersInfo  |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos              |
| --- | -------------- | ----------------------- |
| 25  | callReturnPage | sIdPage,sDynFiltersInfo |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include               |
| --- | --------------------- |
| 10  | dynapplyfilterjob.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 18  | /style/tcreports_0.css |
| 10  | dynapplyfilterjob.jsp  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia            | Resolución | Ficha / candidato                                                      |
| ------ | --- | --------------------- | ---------- | ---------------------------------------------------------------------- |
| BASE   | 10  | dynapplyfilterjob.jsp | física     | [tcdynfilter/dynapplyfilterjob.jsp](tcdynfilter--dynapplyfilterjob.md) |
| BASE   | 10  | dynapplyfilterjob.jsp | física     | [tcdynfilter/dynapplyfilterjob.jsp](tcdynfilter--dynapplyfilterjob.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tcdynfilter/dynapplyfilterpage.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
