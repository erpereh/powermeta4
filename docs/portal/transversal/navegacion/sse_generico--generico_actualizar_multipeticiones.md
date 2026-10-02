# Actualizacion

Identificador: `sse_generico/generico_actualizar_multipeticiones.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_multipeticiones.jsp) | `fc1c69e1286c3568b6b7e9a8aebc69d81e8dfd97d154c6ae2762aaecbca94b86` |     52 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_actualizar_multipeticiones.jsp)   | `fc1c69e1286c3568b6b7e9a8aebc69d81e8dfd97d154c6ae2762aaecbca94b86` |     52 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_actualizar_multipeticiones.jsp) | `fc1c69e1286c3568b6b7e9a8aebc69d81e8dfd97d154c6ae2762aaecbca94b86` |     52 |
| BASE / español    | [sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_multipeticiones.jsp)                             | `fb11215479c92d73996bd6df9844bab6c4e9985befef435fd25c43e4a7e3a764` |     51 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_multipeticiones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 44  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal     |
| --- | --------------- | ------------------ |
| 10  | param           | zhash.get("param") |
| 11  | TAG             | zhash.get("TAG")   |

| L   | Variable     | Expresión fuente                      | Resolución estática parcial                            |
| --- | ------------ | ------------------------------------- | ------------------------------------------------------ |
| 10  | zparametro   | (String)zhash.get("param")            | (String)zhash.get("param")                             |
| 11  | zsubsesion   | (String)zhash.get("TAG")              | (String)zhash.get("TAG")                               |
| 14  | zmeta4object | zsubsesion                            | (String)zhash.get("TAG")                               |
| 15  | znodo        | "SSE_PRINCIPAL"                       | SSE_PRINCIPAL                                          |
| 16  | znodo2       | "SSE_COMUNICACION"                    | SSE_COMUNICACION                                       |
| 17  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"     | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 18  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION" | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 19  | zraiz        | zsubsesion + "!" + znodo2 + "."       | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}     |
| 27  | zerror       | "0"                                   | 0                                                      |
| 28  | zredireccion | ""                                    |                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 21  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 21  | m4:beginjob  |                                                                          |
| 22  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 23  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 23  | m4:param     | name=GESTION_ARG; value=(String)zhash.get("param")                       |
| 24  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 24  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 25  | m4:endjob    |                                                                          |
| 50  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 31  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 32  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 35  | if ((zredireccion==null)){                                                                   |
| 37  | }else{                                                                                       |
| 17  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 18  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 19  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 49  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 45  | /css/estilo_sse.css            |
| 46  | /libreria/funciones_sse.js     |
| 49  | generico_actualizar_cuerpo.jsp |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_actualizar_multipeticiones.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_multipeticiones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 43  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal     |
| --- | --------------- | ------------------ |
| 8   | param           | zhash.get("param") |
| 9   | TAG             | zhash.get("TAG")   |

| L   | Variable     | Expresión fuente                      | Resolución estática parcial                            |
| --- | ------------ | ------------------------------------- | ------------------------------------------------------ |
| 8   | zparametro   | (String)zhash.get("param")            | (String)zhash.get("param")                             |
| 9   | zsubsesion   | (String)zhash.get("TAG")              | (String)zhash.get("TAG")                               |
| 12  | zmeta4object | zsubsesion                            | (String)zhash.get("TAG")                               |
| 13  | znodo        | "SSE_PRINCIPAL"                       | SSE_PRINCIPAL                                          |
| 14  | znodo2       | "SSE_COMUNICACION"                    | SSE_COMUNICACION                                       |
| 15  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"     | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 16  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION" | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 17  | zraiz        | zsubsesion + "!" + znodo2 + "."       | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}     |
| 26  | zerror       | "0"                                   | 0                                                      |
| 27  | zredireccion | ""                                    |                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 19  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 19  | m4:beginjob  |                                                                          |
| 20  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 21  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 21  | m4:param     | name=GESTION_ARG; value=(String)zhash.get("param")                       |
| 22  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 22  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 23  | m4:endjob    |                                                                          |
| 49  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 30  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 31  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 34  | if ((zredireccion==null)){                                                                   |
| 36  | }else{                                                                                       |
| 15  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 16  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 17  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 48  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 44  | /css/estilo_sse.css            |
| 45  | /libreria/funciones_sse.js     |
| 48  | generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 46  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 46  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 46  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 49  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 48  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 45  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 48  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_actualizar_multipeticiones.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
