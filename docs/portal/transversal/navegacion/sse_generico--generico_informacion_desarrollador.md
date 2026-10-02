# Informacion

Identificador: `sse_generico/generico_informacion_desarrollador.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_informacion_desarrollador.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_informacion_desarrollador.jsp) | `fa31df6ea1058074f41640525958c4341ca2dd18d6b6f0fe9d7b57a40cac4cc2` |     39 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_informacion_desarrollador.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_informacion_desarrollador.jsp)   | `fa31df6ea1058074f41640525958c4341ca2dd18d6b6f0fe9d7b57a40cac4cc2` |     39 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_informacion_desarrollador.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_informacion_desarrollador.jsp) | `fa31df6ea1058074f41640525958c4341ca2dd18d6b6f0fe9d7b57a40cac4cc2` |     39 |
| BASE / español    | [sse_generico/espanol/generico_informacion_desarrollador.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_informacion_desarrollador.jsp)                             | `fa31df6ea1058074f41640525958c4341ca2dd18d6b6f0fe9d7b57a40cac4cc2` |     39 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_informacion_desarrollador.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_informacion_desarrollador.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta      |
| --- | ----------------------------- |
| 7   | Informacion                   |
| 27  | Información sobre el proceso: |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 14  | _M4TAGLET       | getParameter(request,"_M4TAGLET") |

| L   | Variable      | Expresión fuente                                                      | Resolución estática parcial                                                                                                           |
| --- | ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | zsubsesion    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET")                                                                 |
| 15  | zmeta4object  | zsubsesion                                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET")                                                                 |
| 16  | znodo2        | "SSE_COMUNICACION"                                                    | SSE_COMUNICACION                                                                                                                      |
| 17  | zoutputdef    | zsubsesion + "!" + znodo2 + "[*]"                                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"){"!"}SSE_COMUNICACION{"[*]"}                                     |
| 18  | zraiz         | zsubsesion + "!" + znodo2 + "."                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"){"!"}SSE_COMUNICACION{"."}                                       |
| 19  | zTEXTOERRORES | znodo2 + ":" + zraiz + "TEXTO_ERRORES"                                | SSE_COMUNICACION{":"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"){"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | m4:startpage | m4task=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET")                                                                            |
| 21  | m4:beginjob  |                                                                                                                                                         |
| 22  | m4:datadef   | m4o=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"); m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET") |
| 23  | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                                                                |
| 23  | m4:param     | name=m4name0; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"){"!"}SSE_COMUNICACION{"[*]"}                                   |
| 24  | m4:endjob    |                                                                                                                                                         |
| 33  | m4:item      | m4name=SSE_COMUNICACION{":"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"_M4TAGLET"){"!"}SSE_COMUNICACION{"."}{"TEXTO_ERRORES"}            |
| 37  | m4:endpage   |                                                                                                                                                         |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                |
| --- | --------------------------------------------------------------------------------------------------- |
| 17  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";         |
| 18  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                |
| 19  | expresión de cálculo/transformación: String zTEXTOERRORES = znodo2 + ":" + zraiz + "TEXTO_ERRORES"; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso          |
| --- | -------------------------- |
| 8   | /css/estilo_sse.css        |
| 9   | /libreria/funciones_sse.js |
| 10  | /libreria/menu.js          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 9   | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 10  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| CYC    | 9   | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 10  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| IBER   | 9   | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 10  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| BASE   | 9   | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 10  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_informacion_desarrollador.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
