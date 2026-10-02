# CV

Identificador: `mss_g1/mss_g1_p3_cv.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_p3_cv.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_cv.jsp) | `512fb680000d019155c615760aa91d9f35e85b7873f2eefbbb360ce7bbb102b1` |     68 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_p3_cv.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_p3_cv.jsp) | `512fb680000d019155c615760aa91d9f35e85b7873f2eefbbb360ce7bbb102b1` |     68 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_p3_cv.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_p3_cv.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 17  | CV                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------- |
| 53  | form    | action=/servlet/download_blob; method=post; name=oFormDownloadBlob; id=oFormDownloadBlob |
| 54  | input   | type=hidden; id=task; name=task; value=&lt;%=zsubsesion%&gt;                             |
| 55  | input   | type=hidden; id=item; name=item; value=CSP_RP_CV!CSP_RP_CV[0].CSP_INFORME_HTML           |
| 56  | input   | type=hidden; id=no-cache; name=no-cache; value=true                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 24  | matricula       | getParameter(request,"matricula") |
| 25  | pagina          | getParameter(request,"pagina")    |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                                                            |
| --- | ------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 24  | idMatricula  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"matricula") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"matricula")                                  |
| 25  | idPagina     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina")                                     |
| 27  | zredireccion | "/servlet/CheckSecurity/JSP/mss_g1/" + idPagina                       | /servlet/CheckSecurity/JSP/mss_g1/{}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pagina") |
| 29  | zsubsesion   | "CSP_RP_CV"                                                           | CSP_RP_CV                                                                                              |
| 30  | zmeta4object | "CSP_RP_CV"                                                           | CSP_RP_CV                                                                                              |
| 31  | zmetodocarga | zsubsesion +"!CSP_RP_CV.CSP_GENERAR_INFORME"                          | CSP_RP_CV!CSP_RP_CV.CSP_GENERAR_INFORME                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                               |
| --- | ------------ | ------------------------------------------------ |
| 40  | m4:startpage | m4task=CSP_RP_CV                                 |
| 42  | m4:beginjob  |                                                  |
| 43  | m4:datadef   | m4o=CSP_RP_CV; m4name=CSP_RP_CV                  |
| 50  | m4:exec      | m4method=CSP_RP_CV!CSP_RP_CV.CSP_GENERAR_INFORME |
| 51  | m4:endjob    |                                                  |

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 47  | setItem   | zsubsesion,zsubsesion,"","P_ID_HR",idMatricula |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 27  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/" + idPagina ; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso       |
| --- | ----------------------- |
| 19  | /css/estilo_sse.css     |
| 20  | /css/style_persdata.css |
| 53  | /servlet/download_blob  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_p3_cv.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
