# sse_g4_gta_planning_refresh_alerts

Identificador: `sse_g4/sse_g4_gta_planning_refresh_alerts.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp) | `37fd16c3a83870e5af1f55710720ba90182d67b87e2c42c08883205456842aa8` |     57 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp)   | `37fd16c3a83870e5af1f55710720ba90182d67b87e2c42c08883205456842aa8` |     57 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp) | `37fd16c3a83870e5af1f55710720ba90182d67b87e2c42c08883205456842aa8` |     57 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp)                             | `37fd16c3a83870e5af1f55710720ba90182d67b87e2c42c08883205456842aa8` |     57 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_alerts.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 10  | ARG_ID_HR       | getParameter(request,"ARG_ID_HR")     |
| 11  | ARG_OR_PERIOD   | getParameter(request,"ARG_OR_PERIOD") |
| 12  | DT_START        | getParameter(request,"DT_START")      |
| 13  | DT_END          | getParameter(request,"DT_END")        |

| L   | Variable           | Expresión fuente                                                          | Resolución estática parcial                                               |
| --- | ------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 10  | idHr               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")     |
| 11  | orPeriod           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") |
| 12  | dtStart            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")      |
| 13  | dtEnd              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")        |
| 21  | zsubsesion         | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                              |
| 22  | zmeta4object       | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                              |
| 23  | znodo              | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                              |
| 25  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                          | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                      |
| 26  | zmove              | znodo + ":" +znodo + "[FIRST]"                                            | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                  |
| 27  | zlectura           | znodo + ":" +zsubsesion + "!" + znodo                                     | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN                            |
| 28  | zcomun             | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."          | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[&amp;VAR.m4lix]"}{"."}   |
| 30  | refreshMethod      | "refreshAlerts:" + zsubsesion + "!SSE_GTA_PLAN.SSE_REFRESH_ALERTS"        | refreshAlerts:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_REFRESH_ALERTS"}          |
| 46  | executeJavascripts | ""                                                                        |                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                  |
| --- | ------------ | --------------------------------------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                 |
| 33  | m4:beginjob  |                                                                                                     |
| 34  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                               |
| 35  | m4:exec      | m4method=refreshAlerts:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_REFRESH_ALERTS"}                           |
| 36  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")         |
| 37  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") |
| 38  | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")       |
| 39  | m4:param     | name=ARG_DT_END; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END")           |
| 41  | m4:outputdef | m4alias=SSE_GTA_PLAN                                                                                |
| 41  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                            |
| 42  | m4:endjob    |                                                                                                     |
| 43  | m4:move      |                                                                                                     |
| 43  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                   |
| 57  | m4:endpage   |                                                                                                     |

| L   | Operación | Argumentos literales                          |
| --- | --------- | --------------------------------------------- |
| 49  | getItem   | znodo,zmeta4object,znodo,"","SSE_JAVASCRIPTS" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| 16  | if ((idHr==null)&#124;&#124;(idHr.equals(""))){idHr="";}                                                                        |
| 17  | if ((orPeriod==null)&#124;&#124;(orPeriod.equals(""))){orPeriod = "";}                                                          |
| 18  | if ((dtStart==null)&#124;&#124;(dtStart.equals(""))){dtStart = "";}                                                             |
| 19  | if ((dtEnd==null)&#124;&#124;(dtEnd.equals(""))){dtEnd = "";}                                                                   |
| 25  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                      |
| 26  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                             |
| 27  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                   |
| 28  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";          |
| 30  | expresión de cálculo/transformación: String refreshMethod = "refreshAlerts:" + zsubsesion + "!SSE_GTA_PLAN.SSE_REFRESH_ALERTS"; |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_refresh_alerts.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
