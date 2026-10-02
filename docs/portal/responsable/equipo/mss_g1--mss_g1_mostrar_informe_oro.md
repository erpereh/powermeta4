# mss_g1_mostrar_informe_oro

Identificador: `mss_g1/mss_g1_mostrar_informe_oro.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp) | `f70ff8122c36edcf628986515fd65950d5d913564d351a171dd1e23642c6a22c` |     74 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp)   | `019e7e55598260e8f257fe3d0cf0937fdd801d8f9cf596b95b0f9d5b75e81984` |     77 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp) | `f70ff8122c36edcf628986515fd65950d5d913564d351a171dd1e23642c6a22c` |     74 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 59  | form    | action=/servlet/download_blob; method=post; name=oFormDownloadBlob; id=oFormDownloadBlob     |
| 60  | input   | type=hidden; id=task; name=task; value=&lt;%=zsubsesion%&gt;                                 |
| 61  | input   | type=hidden; id=item; name=item; value=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS%5B0%5D.CSP_INFORME_HTML |
| 62  | input   | type=hidden; id=no-cache; name=no-cache; value=true                                          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 24  | direccion       | getParameter(request,"direccion") |
| 25  | puesto          | getParameter(request,"puesto")    |
| 26  | informe         | getParameter(request,"informe")   |
| 27  | pagina          | getParameter(request,"pagina")    |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                                                            |
| --- | ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 24  | direccion    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                  |
| 25  | puesto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                     |
| 26  | informe      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                    |
| 27  | pagina       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                     |
| 29  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g1/" + pagina                         | /servlet/CheckSecurity/JSP/mss_g1/{}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina") |
| 33  | zsubsesion   | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                                                         |
| 34  | zmeta4object | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                                                         |
| 35  | zmetodocarga | zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME"                     | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                         |
| --- | ------------ | ---------------------------------------------------------- |
| 43  | m4:startpage | m4task=CSP_RP_ORO_MSS                                      |
| 45  | m4:beginjob  |                                                            |
| 46  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                  |
| 56  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME |
| 57  | m4:endjob    |                                                            |

| L   | Operación | Argumentos literales                               |
| --- | --------- | -------------------------------------------------- |
| 52  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe  |
| 53  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_UNIDAD",direccion |
| 54  | setItem   | zsubsesion,zsubsesion,"","CSP_RP_PUESTO",puesto    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 29  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/" + pagina ; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso          |
| --- | -------------------------- |
| 18  | /css/estilo_sse.css        |
| 19  | /library/jquery.js         |
| 20  | /libreria/funciones_sse.js |
| 59  | /servlet/download_blob     |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_mostrar_informe_oro.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------- |
| 62  | form    | action=/servlet/download_blob; method=post; name=oFormDownloadBlob; id=oFormDownloadBlob     |
| 63  | input   | type=hidden; id=task; name=task; value=&lt;%=zsubsesion%&gt;                                 |
| 64  | input   | type=hidden; id=item; name=item; value=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS%5B0%5D.CSP_INFORME_HTML |
| 65  | input   | type=hidden; id=no-cache; name=no-cache; value=true                                          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 24  | direccion       | getParameter(request,"direccion") |
| 25  | puesto          | getParameter(request,"puesto")    |
| 26  | informe         | getParameter(request,"informe")   |
| 27  | pagina          | getParameter(request,"pagina")    |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                                                            |
| --- | ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 24  | direccion    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion")                                  |
| 25  | puesto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puesto")                                     |
| 26  | informe      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"informe")                                    |
| 27  | pagina       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                     |
| 29  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g1/" + pagina                         | /servlet/CheckSecurity/JSP/mss_g1/{}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina") |
| 33  | zsubsesion   | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                                                         |
| 34  | zmeta4object | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                                                         |
| 35  | zmetodocarga | zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME"                     | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                         |
| --- | ------------ | ---------------------------------------------------------- |
| 43  | m4:startpage | m4task=CSP_RP_ORO_MSS                                      |
| 45  | m4:beginjob  |                                                            |
| 46  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                  |
| 59  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME |
| 60  | m4:endjob    |                                                            |

| L   | Operación | Argumentos literales                               |
| --- | --------- | -------------------------------------------------- |
| 52  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe  |
| 53  | setItem   | zsubsesion,zsubsesion,"","CSP_PR_UNIDAD",direccion |
| 54  | setItem   | zsubsesion,zsubsesion,"","CSP_RP_PUESTO",puesto    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 29  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/" + pagina ; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso          |
| --- | -------------------------- |
| 18  | /css/estilo_sse.css        |
| 19  | /library/jquery.js         |
| 20  | /libreria/funciones_sse.js |
| 62  | /servlet/download_blob     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 19  | /library/jquery.js         | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 20  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| CYC    | 19  | /library/jquery.js         | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 20  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| IBER   | 19  | /library/jquery.js         | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 20  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_mostrar_informe_oro.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
