# Actualizacion

Identificador: `sse_generico/generico_actualizar_get.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_actualizar_get.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_get.jsp) | `a5c0740a875613322ce23eabdfcff8cfe02471b8e0d4439dbe307f0b16e7d832` |     52 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_actualizar_get.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_actualizar_get.jsp)   | `a5c0740a875613322ce23eabdfcff8cfe02471b8e0d4439dbe307f0b16e7d832` |     52 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_actualizar_get.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_actualizar_get.jsp) | `a5c0740a875613322ce23eabdfcff8cfe02471b8e0d4439dbe307f0b16e7d832` |     52 |
| BASE / español    | [sse_generico/espanol/generico_actualizar_get.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_get.jsp)                             | `a5c0740a875613322ce23eabdfcff8cfe02471b8e0d4439dbe307f0b16e7d832` |     52 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_actualizar_get.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_get.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 45  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 14  | TAG             | getParameter(request,"TAG") |

| L   | Variable     | Expresión fuente                                                | Resolución estática parcial                                                                   |
| --- | ------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 13  | zparametro   | zquery.toString().replace('&amp;','{')                          | zquery.toString().replace('&amp;','{')                                                        |
| 14  | zsubsesion   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG")                               |
| 15  | zmeta4object | zsubsesion                                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG")                               |
| 16  | znodo        | "SSE_PRINCIPAL"                                                 | SSE_PRINCIPAL                                                                                 |
| 17  | znodo2       | "SSE_COMUNICACION"                                              | SSE_COMUNICACION                                                                              |
| 18  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 19  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION"                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 20  | zraiz        | zsubsesion + "!" + znodo2 + "."                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"){"!"}SSE_COMUNICACION{"."}     |
| 28  | zerror       | "0"                                                             | 0                                                                                             |
| 29  | zredireccion | ""                                                              |                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                          |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 22  | m4:startpage | m4task=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG")                                                                      |
| 22  | m4:beginjob  |                                                                                                                                             |
| 23  | m4:datadef   | m4o=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"); m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG") |
| 24  | m4:exec      | m4method=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"){"!"}SSE_PRINCIPAL{".GESTION"}                                      |
| 24  | m4:param     | name=GESTION_ARG; value=zquery.toString().replace('&amp;','{')                                                                              |
| 25  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                                                                                       |
| 25  | m4:param     | name=m4name0; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TAG"){"!"}SSE_COMUNICACION{"[*]"}                             |
| 26  | m4:endjob    |                                                                                                                                             |
| 51  | m4:endpage   |                                                                                                                                             |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 32  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 33  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 36  | if ((zredireccion==null)){                                                                   |
| 38  | }else{                                                                                       |
| 18  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";  |
| 19  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION"; |
| 20  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";         |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 50  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 46  | /css/estilo_sse.css            |
| 47  | /libreria/funciones_sse.js     |
| 50  | generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 47  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 47  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 47  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 47  | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 50  | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_actualizar_get.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
