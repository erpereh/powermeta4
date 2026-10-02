# smco_prof_cv_trans

Identificador: `mss_g1/smco_prof_cv_trans.jsp`. Perfil: **responsable**. Dominio: **equipo**.

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

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/mss_g1/smco_prof_cv_trans.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/smco_prof_cv_trans.jsp) | `c94c584ddcbb2009d6552d8c4c6f1f4c5d130252de4b3b4bc686817da3fe2e05` |     21 |
| CYC / compartido  | [m4custom/CYC/mss_g1/smco_prof_cv_trans.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/smco_prof_cv_trans.jsp)   | `c94c584ddcbb2009d6552d8c4c6f1f4c5d130252de4b3b4bc686817da3fe2e05` |     21 |
| IBER / compartido | [m4custom/IBER/mss_g1/smco_prof_cv_trans.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/smco_prof_cv_trans.jsp) | `c94c584ddcbb2009d6552d8c4c6f1f4c5d130252de4b3b4bc686817da3fe2e05` |     21 |
| BASE / compartido | [mss_g1/smco_prof_cv_trans.jsp](../../../../clon_portal/portal/mss_g1/smco_prof_cv_trans.jsp)                             | `c94c584ddcbb2009d6552d8c4c6f1f4c5d130252de4b3b4bc686817da3fe2e05` |     21 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/smco_prof_cv_trans.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/smco_prof_cv_trans.jsp). Líneas físicas, contando desde 1.

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

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 13  | agent   | v          |
| 14  | xy      | e,v        |
| 16  | dragOBJ | d,e        |
| 17  | drag    | e          |

| L   | Condición / acción / mensaje literal                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 17  | function drag(e) { if(!stop) { d.style.top=(tX=xy(e,1)+oY-eY+'px'); d.style.left=(tY=xy(e)+oX-eX+'px'); } }                 |
| 18  | expresión de cálculo/transformación: var oX=parseInt(d.style.left),oY=parseInt(d.style.top),eX=xy(e),eY=xy(e,1),tX,tY,stop; |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 2   | ../sse_generico/sse_generico_taglib_2.jsp |
| 4   | ../sse_generico/sse_generico_lang.jsp     |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 2   | ../sse_generico/sse_generico_taglib_2.jsp |
| 4   | ../sse_generico/sse_generico_lang.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| COLL   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| COLL   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| COLL   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| COLL   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| CYC    | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| CYC    | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC    | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| CYC    | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| CYC    | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| CYC    | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| IBER   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| IBER   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| IBER   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| IBER   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 2   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 4   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/smco_prof_cv_trans.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
