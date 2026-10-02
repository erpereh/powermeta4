# Actualizacion

Identificador: `sse_g1/sssp_g1_p6_actualizar.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sssp_g1_p6_actualizar.jsp) | `79e233c7eb3cf06f17861d64bac39a6abb66d088a1183b31bdbd0be810669f73` |     55 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sssp_g1_p6_actualizar.jsp)   | `1c5f02153b38edbb074ee8a37e067b16adb3af5eccfc9f17f661a5fa0a38118a` |     54 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sssp_g1_p6_actualizar.jsp) | `79e233c7eb3cf06f17861d64bac39a6abb66d088a1183b31bdbd0be810669f73` |     55 |
| BASE / español    | [sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/sse_g1/espanol/sssp_g1_p6_actualizar.jsp)                             | `79e233c7eb3cf06f17861d64bac39a6abb66d088a1183b31bdbd0be810669f73` |     55 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sssp_g1_p6_actualizar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 47  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                       | Resolución estática parcial                                |
| --- | ------------ | ------------------------------------------------------ | ---------------------------------------------------------- |
| 7   | nombre       | ""                                                     |                                                            |
| 8   | valor        | ""                                                     |                                                            |
| 18  | zparametro   | ""                                                     |                                                            |
| 29  | zsubsesion   | "SSE_MOD_SITIRPF"                                      | SSE_MOD_SITIRPF                                            |
| 30  | zmeta4object | zsubsesion                                             | SSE_MOD_SITIRPF                                            |
| 31  | znodo        | "SSE_MOD_SITIRPF"                                      | SSE_MOD_SITIRPF                                            |
| 32  | zmetodo      | zsubsesion + "!" + znodo + ".SSE_GESTION_ACCION"       | SSE_MOD_SITIRPF{"!"}SSE_MOD_SITIRPF{".SSE_GESTION_ACCION"} |
| 42  | zerror       | "S"                                                    | S                                                          |
| 43  | zredireccion | "/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp" | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                  |
| --- | ------------ | ------------------------------------------------------------------- |
| 35  | m4:startpage | m4task=SSE_MOD_SITIRPF                                              |
| 35  | m4:beginjob  |                                                                     |
| 36  | m4:datadef   | m4o=SSE_MOD_SITIRPF; m4name=SSE_MOD_SITIRPF                         |
| 37  | m4:exec      | m4method=SSE_MOD_SITIRPF{"!"}SSE_MOD_SITIRPF{".SSE_GESTION_ACCION"} |
| 38  | m4:param     | name=ARG_CADENA; value=                                             |
| 40  | m4:endjob    |                                                                     |
| 54  | m4:endpage   |                                                                     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 32  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION_ACCION"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 48  | /css/estilo_sse.css                                       |
| 49  | /libreria/funciones_sse.js                                |
| 43  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      |
| 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sssp_g1_p6_actualizar.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sssp_g1_p6_actualizar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 45  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                                       | Resolución estática parcial                                |
| --- | ------------ | ------------------------------------------------------ | ---------------------------------------------------------- |
| 5   | nombre       | ""                                                     |                                                            |
| 6   | valor        | ""                                                     |                                                            |
| 16  | zparametro   | ""                                                     |                                                            |
| 27  | zsubsesion   | "SSE_MOD_SITIRPF"                                      | SSE_MOD_SITIRPF                                            |
| 28  | zmeta4object | zsubsesion                                             | SSE_MOD_SITIRPF                                            |
| 29  | znodo        | "SSE_MOD_SITIRPF"                                      | SSE_MOD_SITIRPF                                            |
| 30  | zmetodo      | zsubsesion + "!" + znodo + ".SSE_GESTION_ACCION"       | SSE_MOD_SITIRPF{"!"}SSE_MOD_SITIRPF{".SSE_GESTION_ACCION"} |
| 40  | zerror       | "S"                                                    | S                                                          |
| 41  | zredireccion | "/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp" | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                  |
| --- | ------------ | ------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=SSE_MOD_SITIRPF                                              |
| 33  | m4:beginjob  |                                                                     |
| 34  | m4:datadef   | m4o=SSE_MOD_SITIRPF; m4name=SSE_MOD_SITIRPF                         |
| 35  | m4:exec      | m4method=SSE_MOD_SITIRPF{"!"}SSE_MOD_SITIRPF{".SSE_GESTION_ACCION"} |
| 36  | m4:param     | name=ARG_CADENA; value=                                             |
| 38  | m4:endjob    |                                                                     |
| 52  | m4:endpage   |                                                                     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 30  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION_ACCION"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 51  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 46  | /css/estilo_sse.css                                       |
| 47  | /libreria/funciones_sse.js                                |
| 41  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      |
| 51  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| COLL   | 49  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 43  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      | ausente    | P06                                                                                                                                                                            |
| COLL   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 51  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| CYC    | 47  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 41  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      | ausente    | P06                                                                                                                                                                            |
| CYC    | 51  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| IBER   | 49  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 43  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      | ausente    | P06                                                                                                                                                                            |
| IBER   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |
| BASE   | 49  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 43  | /servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp      | ausente    | P06                                                                                                                                                                            |
| BASE   | 53  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sssp_g1_p6_actualizar.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
