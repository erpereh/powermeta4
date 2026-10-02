# Editar favoritos

Identificador: `sse_g0/sse_g0_editar_links.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_g0_editar_links.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_editar_links.jsp) | `73c09227ddfe4b7095f20b285d1b7e387a20e40c2acc900de9e0863eaabfe69a` |     89 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_g0_editar_links.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_editar_links.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Editar favoritos                                                                                                                        |
| 58  | Editar favoritos                                                                                                                        |
| 61  | Lista de tus enlaces de favoritos. Elimina aquellos que ya no utilices. Los cambios se verán reflejados la próxima vez que nos visites. |
| 69  | Nombre                                                                                                                                  |
| 70  | Dirección URL                                                                                                                           |
| 77  | $M4ITEM0$                                                                                                                               |
| 78  | $M4ITEM1$                                                                                                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                       |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79  | a       | href=/servlet/CheckSecurity/JSP/sse_g0/sse_g0_eliminar_links.jsp?id_enl=$M4ITEM2$                                                                                                               |
| 79  | img     | align=right; alt=Eliminar enlace; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 11  | estado          | getParameter(request,"estado") |

| L   | Variable     | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 11  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |
| 21  | zsubsesion   | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 22  | zmeta4object | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 23  | znodo        | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 27  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                   | SSE_ENLACES{"!"}SSE_ENLACES{"[*]"}                                 |
| 28  | zraiz        | zsubsesion + "!" + znodo + "."                                     | SSE_ENLACES{"!"}SSE_ENLACES{"."}                                   |
| 29  | zmove        | znodo + ":" + znodo + "[FIRST]"                                    | SSE_ENLACES{":"}SSE_ENLACES{"[FIRST]"}                             |
| 30  | ziterator    | znodo + ":" + zsubsesion + "!" + znodo                             | SSE_ENLACES{":"}SSE_ENLACES{"!"}SSE_ENLACES                        |
| 34  | zMETODOCARGA | zsubsesion + "!SSE_ENLACES.CARGA"                                  | SSE_ENLACES{"!SSE_ENLACES.CARGA"}                                  |
| 38  | zENLACE      | "ENLACE"                                                           | ENLACE                                                             |
| 39  | zORDINAL     | "ORDINAL"                                                          | ORDINAL                                                            |
| 40  | zNENLACE     | "N_ENLACE"                                                         | N_ENLACE                                                           |
| 50  | zcounti      | 0                                                                  | 0                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                             |
| --- | ------------ | -------------------------------------------------------------- |
| 43  | m4:startpage | m4task=SSE_ENLACES                                             |
| 43  | m4:beginjob  |                                                                |
| 44  | m4:datadef   | m4o=SSE_ENLACES; m4name=SSE_ENLACES                            |
| 45  | m4:exec      | m4method=SSE_ENLACES{"!SSE_ENLACES.CARGA"}                     |
| 46  | m4:outputdef | m4alias=SSE_ENLACES                                            |
| 46  | m4:param     | name=m4name0; value=SSE_ENLACES{"!"}SSE_ENLACES{"[*]"}         |
| 47  | m4:endjob    |                                                                |
| 48  | m4:move      |                                                                |
| 48  | m4:param     | name=SSE_ENLACES; value=SSE_ENLACES{":"}SSE_ENLACES{"[FIRST]"} |
| 72  | m4:iterator  | m4rows=*; m4node=SSE_ENLACES{":"}SSE_ENLACES{"!"}SSE_ENLACES   |
| 73  | m4:param     | name=m4item0; value=N_ENLACE                                   |
| 74  | m4:param     | name=m4item1; value=ENLACE                                     |
| 75  | m4:param     | name=m4item2; value=ORDINAL                                    |
| 88  | m4:endpage   |                                                                |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 53  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                            |
| --- | ----------------------------------------------------------------------------------------------- |
| 12  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                             |
| 65  | if (zcounti &gt; 0) {                                                                           |
| 83  | &lt;%}else{%&gt;                                                                                |
| 27  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";      |
| 28  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";             |
| 29  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";            |
| 30  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo; |
| 34  | expresión de cálculo/transformación: String zMETODOCARGA = zsubsesion + "!SSE_ENLACES.CARGA";   |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 18  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 19  | ../../sse_generico/espanol/generico_links.jsp      |
| 86  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                            |
| --- | ---------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                          |
| 9   | /libreria/funciones_sse.js                                                   |
| 79  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_eliminar_links.jsp?id_enl=$M4ITEM2$ |
| 79  | /iconos/icono_borrar_16_16.gif                                               |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                      |
| 18  | ../../sse_generico/espanol/generico_menusup.jsp                              |
| 19  | ../../sse_generico/espanol/generico_links.jsp                                |
| 86  | ../../sse_generico/espanol/generico_disclaimer.jsp                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                   | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ---------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 18  | ../../sse_generico/espanol/generico_menusup.jsp                              | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp                                | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 86  | ../../sse_generico/espanol/generico_disclaimer.jsp                           | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 79  | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_eliminar_links.jsp?id_enl=$M4ITEM2$ | ausente    | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 18  | ../../sse_generico/espanol/generico_menusup.jsp                              | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp                                | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 86  | ../../sse_generico/espanol/generico_disclaimer.jsp                           | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_editar_links.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
