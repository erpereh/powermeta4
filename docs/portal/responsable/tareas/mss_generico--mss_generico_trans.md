# mss_generico_trans

Identificador: `mss_generico/mss_generico_trans.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/mss_generico/mss_generico_trans.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/mss_generico_trans.jsp) | `e19c0593920bde935b4b0aab1b818afb6c41d4a8f901a420aaa07f4b2474d549` |     12 |
| CYC / compartido  | [m4custom/CYC/mss_generico/mss_generico_trans.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_generico/mss_generico_trans.jsp)   | `e19c0593920bde935b4b0aab1b818afb6c41d4a8f901a420aaa07f4b2474d549` |     12 |
| IBER / compartido | [m4custom/IBER/mss_generico/mss_generico_trans.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/mss_generico_trans.jsp) | `e19c0593920bde935b4b0aab1b818afb6c41d4a8f901a420aaa07f4b2474d549` |     12 |
| BASE / compartido | [mss_generico/mss_generico_trans.jsp](../../../../clon_portal/portal/mss_generico/mss_generico_trans.jsp)                             | `e19c0593920bde935b4b0aab1b818afb6c41d4a8f901a420aaa07f4b2474d549` |     12 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/mss_generico_trans.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/mss_generico_trans.jsp). Líneas físicas, contando desde 1.

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

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp |
| 2   | ../sse_generico/sse_generico_lang.jsp   |

| L   | Destino / recurso                              |
| --- | ---------------------------------------------- |
| 4   | /translations/m4err_&lt;%=sLangEss%&gt;.js     |
| 5   | /translations/m4err_mss_&lt;%=sLangEss%&gt;.js |
| 6   | /library/m4gen_excep.js                        |
| 1   | ../sse_generico/sse_generico_taglib.jsp        |
| 2   | ../sse_generico/sse_generico_lang.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                                                                                                  |
| ------ | --- | ---------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| COLL   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| COLL   | 4   | /translations/m4err_&lt;%=sLangEss%&gt;.js     | dinámica   | P06                                                                                                                                                                |
| COLL   | 5   | /translations/m4err_mss_&lt;%=sLangEss%&gt;.js | dinámica   | P06                                                                                                                                                                |
| COLL   | 6   | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md); [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md) |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| COLL   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| CYC    | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| CYC    | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| CYC    | 4   | /translations/m4err_&lt;%=sLangEss%&gt;.js     | dinámica   | P06                                                                                                                                                                |
| CYC    | 5   | /translations/m4err_mss_&lt;%=sLangEss%&gt;.js | dinámica   | P06                                                                                                                                                                |
| CYC    | 6   | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md); [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md) |
| CYC    | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| CYC    | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| IBER   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| IBER   | 4   | /translations/m4err_&lt;%=sLangEss%&gt;.js     | dinámica   | P06                                                                                                                                                                |
| IBER   | 5   | /translations/m4err_mss_&lt;%=sLangEss%&gt;.js | dinámica   | P06                                                                                                                                                                |
| IBER   | 6   | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md); [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md) |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| IBER   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| BASE   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |
| BASE   | 4   | /translations/m4err_&lt;%=sLangEss%&gt;.js     | dinámica   | P06                                                                                                                                                                |
| BASE   | 5   | /translations/m4err_mss_&lt;%=sLangEss%&gt;.js | dinámica   | P06                                                                                                                                                                |
| BASE   | 6   | /library/m4gen_excep.js                        | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md)                                                                                   |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp        | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                          |
| BASE   | 2   | ../sse_generico/sse_generico_lang.jsp          | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_generico_trans.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
