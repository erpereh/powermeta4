# Actualizacion

Identificador: `sse_generico/generico_actualizar.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar.jsp) | `0cc45da4e84eb5066355cb1c8f12334f8bce00717f53e81590792351a9887d44` |     96 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_actualizar.jsp)   | `0cc45da4e84eb5066355cb1c8f12334f8bce00717f53e81590792351a9887d44` |     96 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_actualizar.jsp) | `0cc45da4e84eb5066355cb1c8f12334f8bce00717f53e81590792351a9887d44` |     96 |
| BASE / español    | [sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar.jsp)                             | `938e204fe0615adcd1bf5923cf1b9aa844f1682e77f9dd25004a749bbf02ba98` |     95 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 87  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal   |
| --- | --------------- | ---------------- |
| 35  | TAG             | zhash.get("TAG") |
| 38  | REC             | zhash.get("REC") |
| 40  | ACC             | zhash.get("ACC") |
| 42  | NOD             | zhash.get("NOD") |

| L   | Variable     | Expresión fuente                                                                     | Resolución estática parcial                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 9   | nombre       | ""                                                                                   |                                                                                   |
| 10  | nombreAux    | ""                                                                                   |                                                                                   |
| 11  | valor        | ""                                                                                   |                                                                                   |
| 12  | valorEncr    | ""                                                                                   |                                                                                   |
| 13  | nPos         | 0                                                                                    | 0                                                                                 |
| 34  | zparametro   | ""                                                                                   |                                                                                   |
| 35  | zsubsesion   | (String)zhash.get("TAG")                                                             | (String)zhash.get("TAG")                                                          |
| 54  | _SERVER      | "+"htt[ruta interna omitida]"+ request.getServerName()+":"+ request.getServerPort()" | +{htt[ruta interna omitida]"}{request.getServerName()}:{request.getServerPort()"} |
| 55  | zmeta4object | zsubsesion                                                                           | (String)zhash.get("TAG")                                                          |
| 56  | znodo        | "SSE_PRINCIPAL"                                                                      | SSE_PRINCIPAL                                                                     |
| 57  | znodo2       | "SSE_COMUNICACION"                                                                   | SSE_COMUNICACION                                                                  |
| 58  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"                                                    | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}                              |
| 59  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION"                                                | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}                            |
| 60  | zraiz        | zsubsesion + "!" + znodo2 + "."                                                      | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}                                |
| 69  | zerror       | "0"                                                                                  | 0                                                                                 |
| 70  | zredireccion | ""                                                                                   |                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 62  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 62  | m4:beginjob  |                                                                          |
| 63  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 64  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 64  | m4:param     | name=GESTION_ARG; value=                                                 |
| 65  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 65  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 66  | m4:endjob    |                                                                          |
| 94  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 73  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 74  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 26  | if (nPos &gt;= 0){                                                                           |
| 28  | }else{                                                                                       |
| 77  | if ((zredireccion==null)){                                                                   |
| 79  | }else{                                                                                       |
| 23  | expresión de cálculo/transformación: nombreAux = "0_" + nombre + "_0";                       |
| 58  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 59  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 60  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 93  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 88  | /css/estilo_sse.css            |
| 89  | /libreria/funciones_sse.js     |
| 90  | /library/jquery-2.1.3.min.js   |
| 93  | generico_actualizar_cuerpo.jsp |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_actualizar.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 87  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal   |
| --- | --------------- | ---------------- |
| 35  | TAG             | zhash.get("TAG") |
| 38  | REC             | zhash.get("REC") |
| 40  | ACC             | zhash.get("ACC") |
| 42  | NOD             | zhash.get("NOD") |

| L   | Variable     | Expresión fuente                                                                     | Resolución estática parcial                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 9   | nombre       | ""                                                                                   |                                                                                   |
| 10  | nombreAux    | ""                                                                                   |                                                                                   |
| 11  | valor        | ""                                                                                   |                                                                                   |
| 12  | valorEncr    | ""                                                                                   |                                                                                   |
| 13  | nPos         | 0                                                                                    | 0                                                                                 |
| 34  | zparametro   | ""                                                                                   |                                                                                   |
| 35  | zsubsesion   | (String)zhash.get("TAG")                                                             | (String)zhash.get("TAG")                                                          |
| 54  | _SERVER      | "+"htt[ruta interna omitida]"+ request.getServerName()+":"+ request.getServerPort()" | +{htt[ruta interna omitida]"}{request.getServerName()}:{request.getServerPort()"} |
| 55  | zmeta4object | zsubsesion                                                                           | (String)zhash.get("TAG")                                                          |
| 56  | znodo        | "SSE_PRINCIPAL"                                                                      | SSE_PRINCIPAL                                                                     |
| 57  | znodo2       | "SSE_COMUNICACION"                                                                   | SSE_COMUNICACION                                                                  |
| 58  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"                                                    | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}                              |
| 59  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION"                                                | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}                            |
| 60  | zraiz        | zsubsesion + "!" + znodo2 + "."                                                      | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}                                |
| 69  | zerror       | "0"                                                                                  | 0                                                                                 |
| 70  | zredireccion | ""                                                                                   |                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 62  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 62  | m4:beginjob  |                                                                          |
| 63  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 64  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 64  | m4:param     | name=GESTION_ARG; value=                                                 |
| 65  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 65  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 66  | m4:endjob    |                                                                          |
| 93  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 73  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 74  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 26  | if (nPos &gt;= 0){                                                                           |
| 28  | }else{                                                                                       |
| 77  | if ((zredireccion==null)){                                                                   |
| 79  | }else{                                                                                       |
| 23  | expresión de cálculo/transformación: nombreAux = "0_" + nombre + "_0";                       |
| 58  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 59  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 60  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 92  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 88  | /css/estilo_sse.css            |
| 89  | /libreria/funciones_sse.js     |
| 92  | generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 89  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 90  | /library/jquery-2.1.3.min.js   | contextual | &#96;m4custom/COLL/library/jquery-2.1.3.min.js&#96;                                                                                              |
| COLL   | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 89  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 90  | /library/jquery-2.1.3.min.js   | contextual | &#96;m4custom/CYC/library/jquery-2.1.3.min.js&#96;                                                                                               |
| CYC    | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 89  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 90  | /library/jquery-2.1.3.min.js   | contextual | &#96;m4custom/IBER/library/jquery-2.1.3.min.js&#96;                                                                                              |
| IBER   | 93  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 92  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 89  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 92  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_actualizar.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
