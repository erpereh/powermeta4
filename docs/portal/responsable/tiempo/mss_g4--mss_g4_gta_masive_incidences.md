# mss_g4_gta_masive_incidences

Identificador: `mss_g4/mss_g4_gta_masive_incidences.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave | Texto                                     | Ámbito | Diccionario                                                                                  |
| ----- | ----------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| GTA_1 | Vacaciones e incidencias de tus empleados | COLL   | [translations/ess_mss_gen_es.properties:L207](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_1 | Vacaciones e incidencias de tus empleados | CYC    | [translations/ess_mss_gen_es.properties:L207](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_1 | Vacaciones e incidencias de tus empleados | IBER   | [translations/ess_mss_gen_es.properties:L207](../../referencias/literales/ess_mss_gen_es.md) |
| GTA_1 | Vacaciones e incidencias de tus empleados | BASE   | [translations/ess_mss_gen_es.properties:L206](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_gta_masive_incidences.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_masive_incidences.jsp) | `77fe8410c02cb58deb4a3ca9ec1fa4737cf8158230e5d49e43d19b549837f311` |     27 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_gta_masive_incidences.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_masive_incidences.jsp). Líneas físicas, contando desde 1.

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

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 23  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 11  | /mss_generico/espanol/menu_mss.jsp                 |
| 13  | /mss_generico/mss_cr_trans.jsp                     |
| 17  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 18  | ../../sse_generico/espanol/generico_links.jsp      |
| 19  | ../mss_g4_gta_masive_incidences_body.jsp           |
| 20  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 7   | /css/estilo_mss.css                                |
| 8   | /libreria/funciones_sse.js                         |
| 9   | /translations/m4err_ess_es.js                      |
| 12  | /libreria/clase_val_entradas.js                    |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 11  | /mss_generico/espanol/menu_mss.jsp                 |
| 13  | /mss_generico/mss_cr_trans.jsp                     |
| 17  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 18  | ../../sse_generico/espanol/generico_links.jsp      |
| 19  | ../mss_g4_gta_masive_incidences_body.jsp           |
| 20  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | /mss_generico/espanol/menu_mss.jsp                 | contextual | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_generico/mss_cr_trans.jsp                     | contextual | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                                      |
| BASE   | 17  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 18  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 19  | ../mss_g4_gta_masive_incidences_body.jsp           | física     | [mss_g4/mss_g4_gta_masive_incidences_body.jsp](mss_g4--mss_g4_gta_masive_incidences_body.md)                  |
| BASE   | 20  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |
| BASE   | 8   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 9   | /translations/m4err_ess_es.js                      | contextual | [translations/m4err_ess_es.js](../../transversal/dependencias/translations--m4err_ess_es.md)                  |
| BASE   | 12  | /libreria/clase_val_entradas.js                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | /mss_generico/espanol/menu_mss.jsp                 | contextual | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_generico/mss_cr_trans.jsp                     | contextual | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                                      |
| BASE   | 17  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                        |
| BASE   | 18  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 19  | ../mss_g4_gta_masive_incidences_body.jsp           | física     | [mss_g4/mss_g4_gta_masive_incidences_body.jsp](mss_g4--mss_g4_gta_masive_incidences_body.md)                  |
| BASE   | 20  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_gta_masive_incidences.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
