# Actualizacion

Identificador: `sse_g4/act_va.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/act_va.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/act_va.jsp) | `183e85f7c125052ae2e096839335d87b93ed5fe49aebe382cf372c3eb1263126` |     86 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/act_va.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/act_va.jsp)   | `183e85f7c125052ae2e096839335d87b93ed5fe49aebe382cf372c3eb1263126` |     86 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/act_va.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/act_va.jsp) | `183e85f7c125052ae2e096839335d87b93ed5fe49aebe382cf372c3eb1263126` |     86 |
| BASE / español    | [sse_g4/espanol/act_va.jsp](../../../../clon_portal/portal/sse_g4/espanol/act_va.jsp)                             | `183e85f7c125052ae2e096839335d87b93ed5fe49aebe382cf372c3eb1263126` |     86 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/act_va.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/act_va.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 68  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                     | Resolución estática parcial                           |
| --- | ------------ | ---------------------------------------------------- | ----------------------------------------------------- |
| 9   | zparametro   | "0"                                                  | 0                                                     |
| 10  | zsubsesion   | "SSE_HOLYDAYS"                                       | SSE_HOLYDAYS                                          |
| 11  | znodo        | "SSE_PRINCIPAL"                                      | SSE_PRINCIPAL                                         |
| 12  | znodo1       | "SSE_REAL_TIME_PRD"                                  | SSE_REAL_TIME_PRD                                     |
| 13  | znodo2       | "SSE_COMUNICACION"                                   | SSE_COMUNICACION                                      |
| 14  | zoutputdef   | zsubsesion + "!" + znodo1 + "[*]"                    | SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}             |
| 15  | zoutputdef2  | zsubsesion + "!" + znodo2 + "[*]"                    | SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}              |
| 16  | zmetodo      | "SHOWACTION:"+ zsubsesion + "!" + znodo + ".GESTION" | SHOWACTION:SSE_HOLYDAYS{"!"}SSE_PRINCIPAL{".GESTION"} |
| 17  | zraiz        | zsubsesion + "!" + znodo2 + "."                      | SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"."}                |
| 21  | zBSE         | ztabla.m4paramvalor("bSE")                           | ztabla.m4paramvalor("bSE")                            |
| 22  | zISE         | ztabla.m4paramvalor("iSE")                           | ztabla.m4paramvalor("iSE")                            |
| 23  | zBM4         | ztabla.m4paramvalor("bM4")                           | ztabla.m4paramvalor("bM4")                            |
| 48  | zerror       | "0"                                                  | 0                                                     |
| 49  | zredireccion | ""                                                   |                                                       |
| 50  | zv1          | ""                                                   |                                                       |
| 51  | zv2          | ""                                                   |                                                       |
| 52  | zv3          | ""                                                   |                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                             |
| --- | ------------ | -------------------------------------------------------------- |
| 26  | m4:startpage | m4task=SSE_HOLYDAYS                                            |
| 27  | m4:beginjob  |                                                                |
| 28  | m4:datadef   | m4o=SSE_HOLYDAYS; m4name=SSE_HOLYDAYS                          |
| 36  | m4:exec      | m4method=SHOWACTION:SSE_HOLYDAYS{"!"}SSE_PRINCIPAL{".GESTION"} |
| 37  | m4:param     | name=GESTION_ARG; value=0                                      |
| 39  | m4:outputdef |                                                                |
| 40  | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}  |
| 42  | m4:outputdef |                                                                |
| 43  | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}   |
| 45  | m4:endjob    |                                                                |
| 78  | m4:endpage   |                                                                |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 31  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","BSE",zBSE |
| 32  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","ISE",zISE |
| 33  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","BM4",zBM4 |
| 55  | getItem   | "",zsubsesion,znodo2,"","TIPO_DEBUG"         |
| 56  | getItem   | "",zsubsesion,znodo2,"","JSP_REDIRECCION"    |
| 57  | getItem   | "",zsubsesion,"SSE_REAL_TIME_PRD","","ISE"   |
| 58  | getItem   | "",zsubsesion,"SSE_REAL_TIME_PRD","","BSE"   |
| 59  | getItem   | "",zsubsesion,"SSE_REAL_TIME_PRD","","BM4"   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------- |
| 62  | if ((zredireccion==null)){                                                                                  |
| 14  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo1 + "[*]";                 |
| 15  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                |
| 16  | expresión de cálculo/transformación: String zmetodo = "SHOWACTION:"+ zsubsesion + "!" + znodo + ".GESTION"; |
| 17  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                        |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 71  | /css/estilo_sse.css                                       |
| 73  | /libreria/funciones_sse.js                                |
| 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 73  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 73  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 73  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 73  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 77  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/act_va.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
