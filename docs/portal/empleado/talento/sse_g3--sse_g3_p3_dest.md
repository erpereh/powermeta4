# Destinatarios

Identificador: `sse_g3/sse_g3_p3_dest.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p3_dest.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3_dest.jsp) | `25285ad7ae0f07aadf63f751d148971506a491460b5ed665a4f08efd452dbb1b` |     35 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p3_dest.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p3_dest.jsp)   | `e4ea192fbdad71b467a3312b0641f0352930a64f1f1f5b56b28c2452828db454` |     26 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p3_dest.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p3_dest.jsp) | `25285ad7ae0f07aadf63f751d148971506a491460b5ed665a4f08efd452dbb1b` |     35 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p3_dest.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3_dest.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 16  | Destinatarios            |
| 28  | Destinatarios            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 21  | destinatarios   | getParameter(request,"destinatarios") |

| L   | Variable      | Expresión fuente                                                          | Resolución estática parcial                                               |
| --- | ------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 21  | destinatarios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"destinatarios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"destinatarios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 22  | if ((destinatarios==null)&#124;&#124;(destinatarios.equals(""))){destinatarios = "Todos los empleados.";} |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 19  | ../../sse_generico/espanol/menu_ess.jsp |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 17  | /css/estilo_sse.css                     |
| 18  | /libreria/funciones_sse.js              |
| 19  | ../../sse_generico/espanol/menu_ess.jsp |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g3/espanol/sse_g3_p3_dest.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p3_dest.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 7   | Destinatarios            |
| 19  | Destinatarios            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 12  | destinatarios   | getParameter(request,"destinatarios") |

| L   | Variable      | Expresión fuente                                                          | Resolución estática parcial                                               |
| --- | ------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 12  | destinatarios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"destinatarios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"destinatarios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 13  | if ((destinatarios==null)&#124;&#124;(destinatarios.equals(""))){destinatarios = "Todos los empleados.";} |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 8   | /css/estilo_sse.css                     |
| 9   | /libreria/funciones_sse.js              |
| 10  | ../../sse_generico/espanol/menu_ess.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 19  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 18  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 19  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 9   | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 19  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 18  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 19  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_dest.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
