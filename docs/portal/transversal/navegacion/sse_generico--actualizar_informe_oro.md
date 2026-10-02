# Actualizacion

Identificador: `sse_generico/actualizar_informe_oro.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/actualizar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_informe_oro.jsp) | `4ba2ea15cce13a4021b1eb3304bb560316ca201f103068e710ce0110f93a354e` |     44 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/actualizar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/actualizar_informe_oro.jsp)   | `01d18c3ae772dfdf8146fba63cd0669153ea1a18b39849f0344fa560fd1f8778` |     44 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/actualizar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/actualizar_informe_oro.jsp) | `4ba2ea15cce13a4021b1eb3304bb560316ca201f103068e710ce0110f93a354e` |     44 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/actualizar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_informe_oro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 36  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 13  | direccion       | getParameter(request,"direccion") |
| 14  | puesto          | getParameter(request,"puesto")    |
| 15  | informe         | getParameter(request,"informe")   |
| 16  | pagina          | getParameter(request,"pagina")    |

| L   | Variable     | Expresión fuente                                                                                                                                                          | Resolución estática parcial                                                                                                                                                                                                                                                                                                                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | direccion    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                                                                                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                                                                                                                                                                                                                                                                                                                      |
| 14  | puesto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                                                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                                                                                                                                                                                                                                                                                                         |
| 15  | informe      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                                                                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                                                                                                                                                                                                                                                                                                                        |
| 16  | pagina       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                                                                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                                                                                                                                                                                                                                                                                                                         |
| 23  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion=" + direccion + "&amp;puesto=" + puesto + "&amp;informe=" + informe + "&amp;pagina=" + pagina | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion={}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion"){"&amp;puesto="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto"){"&amp;informe="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe"){"&amp;pagina="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina") |
| 24  | zerror       | "N"                                                                                                                                                                       | N                                                                                                                                                                                                                                                                                                                                                                                                          |
| 26  | zsubsesion   | "CSP_RP_ORO_MSS"                                                                                                                                                          | CSP_RP_ORO_MSS                                                                                                                                                                                                                                                                                                                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 42  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion=" + direccion + "&amp;puesto=" + puesto + "&amp;informe=" + informe + "&amp;pagina=" + pagina ; |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 41  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                                           |
| --- | --------------------------------------------------------------------------- |
| 37  | /css/estilo_sse.css                                                         |
| 38  | /libreria/funciones_sse.js                                                  |
| 23  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion= |
| 41  | generico_actualizar_cuerpo.jsp                                              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_generico/espanol/actualizar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/actualizar_informe_oro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 36  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 13  | direccion       | getParameter(request,"direccion") |
| 14  | puesto          | getParameter(request,"puesto")    |
| 15  | informe         | getParameter(request,"informe")   |
| 16  | pagina          | getParameter(request,"pagina")    |
| 17  | area            | getParameter(request,"area")      |

| L   | Variable     | Expresión fuente                                                                                                                                                                                | Resolución estática parcial                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | direccion    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                                                                                                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 14  | puesto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                                                                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 15  | informe      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                                                                                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 16  | pagina       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                                                                                                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 17  | area         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                                                                                                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 23  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion=" + direccion + "&amp;area=" + area + "&amp;puesto=" + puesto + "&amp;informe=" + informe + "&amp;pagina=" + pagina | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion={}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion"){"&amp;area="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area"){"&amp;puesto="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto"){"&amp;informe="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe"){"&amp;pagina="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina") |
| 24  | zerror       | "N"                                                                                                                                                                                             | N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 26  | zsubsesion   | "CSP_RP_ORO_MSS"                                                                                                                                                                                | CSP_RP_ORO_MSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 42  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 23  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion=" + direccion + "&amp;area=" + area + "&amp;puesto=" + puesto + "&amp;informe=" + informe + "&amp;pagina=" + pagina ; |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 41  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                                           |
| --- | --------------------------------------------------------------------------- |
| 37  | /css/estilo_sse.css                                                         |
| 38  | /libreria/funciones_sse.js                                                  |
| 23  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion= |
| 41  | generico_actualizar_cuerpo.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                  | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | --------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 38  | /libreria/funciones_sse.js                                                  | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 23  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion= | ausente    | P06                                                                                                                                              |
| COLL   | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 38  | /libreria/funciones_sse.js                                                  | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 23  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion= | ausente    | P06                                                                                                                                              |
| CYC    | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 38  | /libreria/funciones_sse.js                                                  | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 23  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_mostrar_informe_oro.jsp?direccion= | ausente    | P06                                                                                                                                              |
| IBER   | 41  | generico_actualizar_cuerpo.jsp                                              | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/actualizar_informe_oro.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
