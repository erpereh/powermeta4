# Actualizacion

Identificador: `mss_g4/act_val_vac.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/act_val_vac.jsp](../../../../clon_portal/portal/mss_g4/espanol/act_val_vac.jsp) | `bf619085825cdf9147422bf5c548e5b6b9db7dc5c775424fd6a4b2cbc4252551` |     85 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/act_val_vac.jsp](../../../../clon_portal/portal/mss_g4/espanol/act_val_vac.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 71  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                                   | Resolución estática parcial                             |
| --- | ---------------- | -------------------------------------------------- | ------------------------------------------------------- |
| 12  | zdireccionvuelta | zobjtabla.m4paramvalor("param1")                   | zobjtabla.m4paramvalor("param1")                        |
| 13  | zPARAMETRO_VAL   | zobjtabla.m4paramvalor("param2")                   | zobjtabla.m4paramvalor("param2")                        |
| 14  | zMES_VAL         | zobjtabla.m4paramvalor("mes")                      | zobjtabla.m4paramvalor("mes")                           |
| 15  | zANO_VAL         | zobjtabla.m4paramvalor("ano")                      | zobjtabla.m4paramvalor("ano")                           |
| 19  | zsubsesion       | "SSE_HOLYDAYS"                                     | SSE_HOLYDAYS                                            |
| 20  | znodo            | "SSE_PRINCIPAL"                                    | SSE_PRINCIPAL                                           |
| 21  | znodo1           | "SSE_REAL_TIME_PRD"                                | SSE_REAL_TIME_PRD                                       |
| 22  | znodo2           | "SSE_COMUNICACION"                                 | SSE_COMUNICACION                                        |
| 23  | zoutputdef       | zsubsesion + "!" + znodo1 + "[*]"                  | SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}               |
| 24  | zoutputdef2      | zsubsesion + "!" + znodo2 + "[*]"                  | SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}                |
| 25  | zmetodo          | zsubsesion + "!" + znodo + ".GESTION_VAL_HOLYDAYS" | SSE_HOLYDAYS{"!"}SSE_PRINCIPAL{".GESTION_VAL_HOLYDAYS"} |
| 26  | zraiz            | zsubsesion + "!" + znodo2 + "."                    | SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"."}                  |
| 49  | zerror           | "0"                                                | 0                                                       |
| 50  | zredireccion     | ""                                                 |                                                         |
| 51  | zv1              | ""                                                 |                                                         |
| 52  | zv2              | ""                                                 |                                                         |
| 53  | zv3              | ""                                                 |                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                               |
| --- | ------------ | ---------------------------------------------------------------- |
| 29  | m4:startpage | m4task=SSE_HOLYDAYS                                              |
| 30  | m4:beginjob  |                                                                  |
| 31  | m4:datadef   | m4o=SSE_HOLYDAYS; m4name=SSE_HOLYDAYS                            |
| 39  | m4:exec      | m4method=SSE_HOLYDAYS{"!"}SSE_PRINCIPAL{".GESTION_VAL_HOLYDAYS"} |
| 40  | m4:outputdef | m4alias=SSE_REAL_TIME_PRD                                        |
| 41  | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}    |
| 43  | m4:outputdef | m4alias=SSE_COMUNICACION                                         |
| 44  | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}     |
| 46  | m4:endjob    |                                                                  |
| 83  | m4:endpage   |                                                                  |

| L   | Operación | Argumentos literales                                             |
| --- | --------- | ---------------------------------------------------------------- |
| 34  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","MES_VAL",zMES_VAL             |
| 35  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","ANO_VAL",zANO_VAL             |
| 36  | setItem   | zsubsesion,"SSE_REAL_TIME_PRD","","PARAMETRO_VAL",zPARAMETRO_VAL |
| 56  | getItem   | znodo2,zsubsesion,znodo2,"","TIPO_DEBUG"                         |
| 57  | getItem   | znodo2,zsubsesion,znodo2,"","JSP_REDIRECCION"                    |
| 58  | getItem   | znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","MES_VAL"               |
| 59  | getItem   | znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","ANO_VAL"               |
| 60  | getItem   | znodo1,zsubsesion,"SSE_REAL_TIME_PRD","","PARAMETRO_VAL"         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 63  | if ((zredireccion==null)){                                                                                |
| 65  | }else{                                                                                                    |
| 23  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo1 + "[*]";               |
| 24  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";              |
| 25  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION_VAL_HOLYDAYS"; |
| 26  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                      |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 82  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 73  | /css/estilo_sse.css                                       |
| 75  | /libreria/funciones_sse.js                                |
| 82  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 82  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 75  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 82  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/act_val_vac.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
