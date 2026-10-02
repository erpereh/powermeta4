# Errores

Identificador: `sse_g0/sse_gen_informacion_usuario.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_gen_informacion_usuario.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_gen_informacion_usuario.jsp) | `dc288527181f5dbd319ca467cedc3f0ecf8a7102dd3a68e20cfdca090e353d3d` |     56 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_gen_informacion_usuario.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_gen_informacion_usuario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 7   | Errores                  |
| 24  | Mensaje de error         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | a       | href=; onclick=window.close();                                                                                                                |
| 25  | img     | title=Cerrar; alt=Cerrar; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover= m4sombra(this); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 11  | zsubsesion      | getParameter(request,"zsubsesion") |

| L   | Variable     | Expresión fuente                                                       | Resolución estática parcial                                                                   |
| --- | ------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 11  | zsubsesion   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion")                        |
| 13  | zmeta4object | zsubsesion                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion")                        |
| 14  | znodo2       | "SSE_GN_LOGS"                                                          | SSE_GN_LOGS                                                                                   |
| 15  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion"){"!"}SSE_GN_LOGS{"[*]"} |
| 31  | zcurrent     | Integer.valueOf(current).intValue()+1                                  | {Integer.valueOf(current).intValue()}{1}                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                        |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | m4:startpage | m4task=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion")                                                                             |
| 17  | m4:beginjob  |                                                                                                                                                           |
| 18  | m4:datadef   | m4o=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion"); m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion") |
| 19  | m4:outputdef | m4alias=SSE_GN_LOGS                                                                                                                                       |
| 19  | m4:param     | name=m4name0; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion"){"!"}SSE_GN_LOGS{"[*]"}                                         |
| 20  | m4:endjob    |                                                                                                                                                           |
| 27  | m4:dataloop  | outputdef=SSE_GN_LOGS                                                                                                                                     |
| 28  | m4:item      | m4varname=zTipErr; item=SSE_LOG_TYPE; htmlsafe=true; outputdef=SSE_GN_LOGS                                                                                |
| 29  | m4:current   | m4varname=current; outputdef=SSE_GN_LOGS                                                                                                                  |
| 46  | m4:item      | item=SSE_LOG_TEXT; htmlsafe=true; outputdef=SSE_GN_LOGS                                                                                                   |
| 53  | m4:endpage   |                                                                                                                                                           |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                        |
| --- | ------------------------------------------------------------------------------------------- |
| 12  | if ((zsubsesion==null)&#124;&#124;(zsubsesion.equals(""))){zsubsesion="";}                  |
| 34  | &lt;%if (zTipErr.equals("-1")){%&gt;                                                        |
| 37  | &lt;%}else if (zTipErr.equals("1")){%&gt;                                                   |
| 40  | &lt;%}else{%&gt;                                                                            |
| 15  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 4   | /css/estilo_sse.css                          |
| 5   | /libreria/funciones_sse.js                   |
| 25  | /iconos/noname_volver_52_44.gif              |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 5   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_gen_informacion_usuario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
