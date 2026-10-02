# generico_actualizar_cuerpo

Identificador: `sse_generico/generico_actualizar_cuerpo.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                          | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:zsubsesion; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES_USUARIO"} | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | m4:datadef:zsubsesion; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES_USUARIO"} | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | m4:datadef:zsubsesion; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}; m4:item:SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES_USUARIO"} | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_cuerpo.jsp) | `3148f62827247ff2cd4d3df9e97380f5a304ae89edf5d4bed4006316da1b2319` |     71 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_actualizar_cuerpo.jsp)   | `3148f62827247ff2cd4d3df9e97380f5a304ae89edf5d4bed4006316da1b2319` |     71 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_actualizar_cuerpo.jsp) | `3148f62827247ff2cd4d3df9e97380f5a304ae89edf5d4bed4006316da1b2319` |     71 |
| BASE / español    | [sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_cuerpo.jsp)                             | `6ec73257091f8a3a64aae96f68791dbac578ebb97546412348a5b03c7bbc8a3d` |     25 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_cuerpo.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 4   | Procesando datos                  |
| 7   | Por favor, espere unos instantes. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                   | Resolución estática parcial                                                          |
| --- | ----------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 11  | compara           | "N"                                                | N                                                                                    |
| 12  | zcomparafuncional | "U"                                                | U                                                                                    |
| 15  | zmeta4object_n    | zsubsesion                                         | zsubsesion                                                                           |
| 16  | znodo2_n          | "SSE_COMUNICACION"                                 | SSE_COMUNICACION                                                                     |
| 17  | zoutputdef_u      | zsubsesion + "!" + znodo2_n + "[*]"                | {zsubsesion}{"!"}SSE_COMUNICACION{"[*]"}                                             |
| 18  | zraiz_n           | zsubsesion + "!" + znodo2_n + "."                  | {zsubsesion}{"!"}SSE_COMUNICACION{"."}                                               |
| 19  | zTEXTOERRORES_n   | znodo2_n + ":" + zraiz_n + "TEXTO_ERRORES"         | SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}         |
| 50  | zmeta4object_u    | zsubsesion                                         | zsubsesion                                                                           |
| 51  | znodo2_u          | "SSE_COMUNICACION"                                 | SSE_COMUNICACION                                                                     |
| 52  | zoutputdef_u      | zsubsesion + "!" + znodo2_u + "[*]"                | {zsubsesion}{"!"}SSE_COMUNICACION{"[*]"}                                             |
| 53  | zraiz_u           | zsubsesion + "!" + znodo2_u + "."                  | {zsubsesion}{"!"}SSE_COMUNICACION{"."}                                               |
| 54  | zTEXTOERRORES_u   | znodo2_u + ":" + zraiz_u + "TEXTO_ERRORES_USUARIO" | SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES_USUARIO"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 22  | m4:startpage | m4task=zsubsesion                                                                                                      |
| 22  | m4:beginjob  |                                                                                                                        |
| 23  | m4:datadef   | m4o=zsubsesion; m4name=zsubsesion                                                                                      |
| 24  | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                               |
| 24  | m4:param     | name=m4name0; value={zsubsesion}{"!"}SSE_COMUNICACION{"[*]"}                                                           |
| 25  | m4:endjob    |                                                                                                                        |
| 30  | m4:item      | m4name=SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}; jsafe=true; htmlsafe=true         |
| 57  | m4:startpage | m4task=zsubsesion                                                                                                      |
| 57  | m4:beginjob  |                                                                                                                        |
| 58  | m4:datadef   | m4o=zsubsesion; m4name=zsubsesion                                                                                      |
| 59  | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                               |
| 59  | m4:param     | name=m4name0; value={zsubsesion}{"!"}SSE_COMUNICACION{"[*]"}                                                           |
| 60  | m4:endjob    |                                                                                                                        |
| 65  | m4:item      | m4name=SSE_COMUNICACION{":"}{zsubsesion}{"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES_USUARIO"}; jsafe=true; htmlsafe=true |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------- |
| 13  | if (zerror.equals(compara) == true){                                                                              |
| 39  | if(checkhtml){                                                                                                    |
| 41  | }else{                                                                                                            |
| 42  | alert(valor_final);                                                                                               |
| 48  | if(zerror.equals(zcomparafuncional) == true){                                                                     |
| 68  | alert(salida);                                                                                                    |
| 17  | expresión de cálculo/transformación: String zoutputdef_u = zsubsesion + "!" + znodo2_n + "[*]";                   |
| 18  | expresión de cálculo/transformación: String zraiz_n = zsubsesion + "!" + znodo2_n + ".";                          |
| 19  | expresión de cálculo/transformación: String zTEXTOERRORES_n = znodo2_n + ":" + zraiz_n + "TEXTO_ERRORES";         |
| 52  | expresión de cálculo/transformación: String zoutputdef_u = zsubsesion + "!" + znodo2_u + "[*]";                   |
| 53  | expresión de cálculo/transformación: String zraiz_u = zsubsesion + "!" + znodo2_u + ".";                          |
| 54  | expresión de cálculo/transformación: String zTEXTOERRORES_u = znodo2_u + ":" + zraiz_u + "TEXTO_ERRORES_USUARIO"; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                |
| --- | ---------------------------------------------------------------------------------------------------------------- |
| 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; |
| 63  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_actualizar_cuerpo.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_cuerpo.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 4   | Procesando datos                  |
| 7   | Por favor, espere unos instantes. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente | Resolución estática parcial |
| --- | ----------------- | ---------------- | --------------------------- |
| 11  | compara           | "N"              | N                           |
| 12  | zcomparafuncional | "U"              | U                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal               |
| --- | -------------------------------------------------- |
| 13  | if (zerror.equals(compara) == false){              |
| 20  | if(zerror.equals(zcomparafuncional) == true){%&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                |
| --- | ---------------------------------------------------------------------------------------------------------------- |
| 16  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; |
| 22  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                       | Resolución | Ficha / candidato |
| ------ | --- | ---------------------------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; | ausente    | P06               |
| COLL   | 63  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       | ausente    | P06               |
| CYC    | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; | ausente    | P06               |
| CYC    | 63  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       | ausente    | P06               |
| IBER   | 28  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; | ausente    | P06               |
| IBER   | 63  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       | ausente    | P06               |
| BASE   | 16  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_desarrollador.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt; | ausente    | P06               |
| BASE   | 22  | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%= zsubsesion %&gt;       | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_actualizar_cuerpo.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
