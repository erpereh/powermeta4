# Actualizacion

Identificador: `sse_g3/sse_g3_p8_act.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                           | Solo en BASE                                                                               |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p8_act.jsp) | `f27e2253c38050b137473abe3d6ee769db7e7ad3deacf33617be13a5e6864756` |     60 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p8_act.jsp)   | `f27e2253c38050b137473abe3d6ee769db7e7ad3deacf33617be13a5e6864756` |     60 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p8_act.jsp) | `f27e2253c38050b137473abe3d6ee769db7e7ad3deacf33617be13a5e6864756` |     60 |
| BASE / español    | [sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8_act.jsp)                             | `19220a5cc9745f758df3a55c94b574931a0bdac518407390b2b6d02db748d231` |     58 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p8_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 51  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                     | Resolución estática parcial                          |
| --- | ------------ | ------------------------------------ | ---------------------------------------------------- |
| 7   | nombre       | ""                                   |                                                      |
| 8   | valor        | ""                                   |                                                      |
| 17  | zparametro   | ""                                   |                                                      |
| 28  | zsubsesion   | "CSP_TRAINING_EVAL"                  | CSP_TRAINING_EVAL                                    |
| 29  | zmeta4object | zsubsesion                           | CSP_TRAINING_EVAL                                    |
| 30  | znodo        | "SSE_EVEN_EVAL_SHEET"                | SSE_EVEN_EVAL_SHEET                                  |
| 31  | zmetodo      | zsubsesion + "!" + znodo + ".GUARDA" | CSP_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| 39  | zerror       | "N"                                  | N                                                    |
| 40  | zredireccion | "sse_g3_p8.jsp"                      | sse_g3_p8.jsp                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                            |
| --- | ------------ | ------------------------------------------------------------- |
| 34  | m4:startpage | m4task=CSP_TRAINING_EVAL                                      |
| 34  | m4:beginjob  |                                                               |
| 35  | m4:datadef   | m4o=CSP_TRAINING_EVAL; m4name=CSP_TRAINING_EVAL               |
| 36  | m4:exec      | m4method=CSP_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| 36  | m4:param     | name=PARAMETROS_ARG; value=                                   |
| 37  | m4:endjob    |                                                               |
| 59  | m4:endpage   |                                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                        |
| --- | ------------------------------------------------------------------------------------------- |
| 42  | if ((zredireccion==null)){                                                                  |
| 44  | }else{                                                                                      |
| 31  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GUARDA"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 52  | /css/estilo_sse.css                                       |
| 53  | /libreria/funciones_sse.js                                |
| 40  | sse_g3_p8.jsp                                             |
| 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p8_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 50  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                     | Resolución estática parcial                          |
| --- | ------------ | ------------------------------------ | ---------------------------------------------------- |
| 7   | nombre       | ""                                   |                                                      |
| 8   | valor        | ""                                   |                                                      |
| 17  | zparametro   | ""                                   |                                                      |
| 28  | zsubsesion   | "SSE_TRAINING_EVAL"                  | SSE_TRAINING_EVAL                                    |
| 29  | zmeta4object | zsubsesion                           | SSE_TRAINING_EVAL                                    |
| 30  | znodo        | "SSE_EVEN_EVAL_SHEET"                | SSE_EVEN_EVAL_SHEET                                  |
| 31  | zmetodo      | zsubsesion + "!" + znodo + ".GUARDA" | SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| 38  | zerror       | "N"                                  | N                                                    |
| 39  | zredireccion | "sse_g3_p8.jsp"                      | sse_g3_p8.jsp                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                            |
| --- | ------------ | ------------------------------------------------------------- |
| 33  | m4:startpage | m4task=SSE_TRAINING_EVAL                                      |
| 33  | m4:beginjob  |                                                               |
| 34  | m4:datadef   | m4o=SSE_TRAINING_EVAL; m4name=SSE_TRAINING_EVAL               |
| 35  | m4:exec      | m4method=SSE_TRAINING_EVAL{"!"}SSE_EVEN_EVAL_SHEET{".GUARDA"} |
| 35  | m4:param     | name=PARAMETROS_ARG; value=                                   |
| 36  | m4:endjob    |                                                               |
| 57  | m4:endpage   |                                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                        |
| --- | ------------------------------------------------------------------------------------------- |
| 41  | if ((zredireccion==null)){                                                                  |
| 43  | }else{                                                                                      |
| 31  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GUARDA"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 51  | /css/estilo_sse.css                                       |
| 52  | /libreria/funciones_sse.js                                |
| 39  | sse_g3_p8.jsp                                             |
| 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 53  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 40  | sse_g3_p8.jsp                                             | ausente    | P06                                                                                                                                                                            |
| COLL   | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 53  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 40  | sse_g3_p8.jsp                                             | ausente    | P06                                                                                                                                                                            |
| CYC    | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 53  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 40  | sse_g3_p8.jsp                                             | ausente    | P06                                                                                                                                                                            |
| IBER   | 58  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 52  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 39  | sse_g3_p8.jsp                                             | física     | [sse_g3/sse_g3_p8.jsp](sse_g3--sse_g3_p8.md)                                                                                                                                   |
| BASE   | 56  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p8_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
