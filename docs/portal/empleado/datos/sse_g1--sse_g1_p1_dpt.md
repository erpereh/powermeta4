# DPT

Identificador: `sse_g1/sse_g1_p1_dpt.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_dpt.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_dpt.jsp) | `8238b2dc37a8c2ede86459132f37fd461774d5b56f5ae1a5d7af5c9b45ee06c1` |     61 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_dpt.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_dpt.jsp)   | `17d01406c2912213f836cfe7ba7aae715b7d09f65d5ef025dd8c5d88dc4a935b` |     59 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_dpt.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_dpt.jsp) | `8238b2dc37a8c2ede86459132f37fd461774d5b56f5ae1a5d7af5c9b45ee06c1` |     61 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_dpt.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_dpt.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 10  | DPT                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                         |
| --- | ------- | ------------------------------------------------------------------------------------------------- |
| 54  | iframe  | id=Local; scrolling=yes; frameborder=0; vspace=0; hspace=0; align=middle; width=100%; height=1750 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 18  | sociedad        | getParameter(request,"sociedad") |
| 19  | idPuesto        | getParameter(request,"idPuesto") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 18  | sociedad     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad") |
| 19  | idPuesto     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") |
| 21  | zmetodocarga | "CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS"                              | CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                             |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 27  | m4:startpage | m4task=CSP_RP_JOB_DESCR                                                                                                        |
| 28  | m4:beginjob  |                                                                                                                                |
| 29  | m4:datadef   | m4o=CSP_RP_JOB_DESCR; m4name=CSP_RP_JOB_DESCR                                                                                  |
| 31  | m4:setitems  |                                                                                                                                |
| 32  | m4:param     | name=CSP_RP_JOB_DESCR!STD_JOB.PROP_STD_ID_JOB_CODE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") |
| 33  | m4:param     | name=CSP_RP_JOB_DESCR!STD_JOB.CSP_PORTAL; value=1                                                                              |
| 34  | m4:param     | name=CSP_RP_JOB_DESCR!STD_JOB.P_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")           |
| 37  | m4:exec      | m4method=CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS                                                                                 |
| 38  | m4:outputdef | m4alias=STD_JOB                                                                                                                |
| 38  | m4:param     | name=m4name0; value=CSP_RP_JOB_DESCR!STD_JOB[0]                                                                                |
| 39  | m4:endjob    |                                                                                                                                |
| 44  | m4:item      | item=P_NOMBRE_FICHERO; htmlsafe=true; outputdef=STD_JOB                                                                        |
| 59  | m4:endpage   |                                                                                                                                |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 42  | frame   | iframeOBj  |

| L   | Condición / acción / mensaje literal                    |
| --- | ------------------------------------------------------- |
| 45  | expresión de cálculo/transformación: ruta = ruta + aux; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                    |
| --- | ------------------------------------ |
| 12  | /css/estilo_sse.css                  |
| 13  | /css/style_persdata.css              |
| 14  | /css/bootstrap/css/bootstrap.min.css |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_dpt.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_dpt.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 10  | DPT                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                         |
| --- | ------- | ------------------------------------------------------------------------------------------------- |
| 53  | iframe  | id=Local; scrolling=yes; frameborder=0; vspace=0; hspace=0; align=middle; width=100%; height=1750 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 18  | idPuesto        | getParameter(request,"idPuesto") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 18  | idPuesto     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") |
| 21  | zmetodocarga | "CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS"                              | CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                             |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 27  | m4:startpage | m4task=CSP_RP_JOB_DESCR                                                                                                        |
| 28  | m4:beginjob  |                                                                                                                                |
| 29  | m4:datadef   | m4o=CSP_RP_JOB_DESCR; m4name=CSP_RP_JOB_DESCR                                                                                  |
| 31  | m4:setitems  |                                                                                                                                |
| 32  | m4:param     | name=CSP_RP_JOB_DESCR!STD_JOB.PROP_STD_ID_JOB_CODE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPuesto") |
| 34  | m4:param     | name=CSP_RP_JOB_DESCR!STD_JOB.CSP_PORTAL; value=1                                                                              |
| 37  | m4:exec      | m4method=CSP_RP_JOB_DESCR!STD_JOB.LANZAR_LOADS                                                                                 |
| 38  | m4:outputdef | m4alias=STD_JOB                                                                                                                |
| 38  | m4:param     | name=m4name0; value=CSP_RP_JOB_DESCR!STD_JOB[0]                                                                                |
| 39  | m4:endjob    |                                                                                                                                |
| 44  | m4:item      | item=P_NOMBRE_FICHERO; htmlsafe=true; outputdef=STD_JOB                                                                        |
| 57  | m4:endpage   |                                                                                                                                |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 42  | frame   | iframeOBj  |

| L   | Condición / acción / mensaje literal                    |
| --- | ------------------------------------------------------- |
| 45  | expresión de cálculo/transformación: ruta = ruta + aux; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                    |
| --- | ------------------------------------ |
| 12  | /css/estilo_sse.css                  |
| 13  | /css/style_persdata.css              |
| 14  | /css/bootstrap/css/bootstrap.min.css |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_dpt.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
