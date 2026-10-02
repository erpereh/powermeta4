# sse_g4_gta_planning_refresh_counters

Identificador: `sse_g4/sse_g4_gta_planning_refresh_counters.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp) | `bac13ff0045cd53eeccb9e3505c32d5a3f56c93c43960970c120eff065e99d1d` |     58 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp)   | `bac13ff0045cd53eeccb9e3505c32d5a3f56c93c43960970c120eff065e99d1d` |     58 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp) | `bac13ff0045cd53eeccb9e3505c32d5a3f56c93c43960970c120eff065e99d1d` |     58 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp)                             | `bac13ff0045cd53eeccb9e3505c32d5a3f56c93c43960970c120eff065e99d1d` |     58 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_refresh_counters.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 10  | ARG_ID_HR       | getParameter(request,"ARG_ID_HR")      |
| 11  | ARG_OR_PERIOD   | getParameter(request,"ARG_OR_PERIOD")  |
| 12  | ARG_DATE        | getParameter(request,"ARG_DATE")       |
| 13  | ARG_ID_COUNTER  | getParameter(request,"ARG_ID_COUNTER") |

| L   | Variable       | Expresión fuente                                                           | Resolución estática parcial                                                |
| --- | -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 10  | idHr           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")      |
| 11  | ordPeriod      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")  |
| 12  | date           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")       |
| 13  | idCounter      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_COUNTER") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_COUNTER") |
| 21  | zsubsesion     | "SSE_GTA_PLAN"                                                             | SSE_GTA_PLAN                                                               |
| 22  | zmeta4object   | "SSE_GTA_PLAN"                                                             | SSE_GTA_PLAN                                                               |
| 23  | znodo          | "SSE_GTA_VE"                                                               | SSE_GTA_VE                                                                 |
| 25  | zoutputdef     | zsubsesion + "!" + znodo + "[*]"                                           | SSE_GTA_PLAN{"!"}SSE_GTA_VE{"[*]"}                                         |
| 26  | zmove          | znodo + ":" +znodo + "[FIRST]"                                             | SSE_GTA_VE{":"}SSE_GTA_VE{"[FIRST]"}                                       |
| 27  | zlectura       | znodo + ":" +zsubsesion + "!" + znodo                                      | SSE_GTA_VE{":"}SSE_GTA_PLAN{"!"}SSE_GTA_VE                                 |
| 28  | zcomun         | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."           | SSE_GTA_VE{":"}SSE_GTA_PLAN{"!"}SSE_GTA_VE{"[&amp;VAR.m4lix]"}{"."}        |
| 29  | zraiz          | znodo + ":" +zsubsesion + "!" + znodo + "."                                | SSE_GTA_VE{":"}SSE_GTA_PLAN{"!"}SSE_GTA_VE{"."}                            |
| 31  | counterValue   | zraiz + "SSE_GET_COUNTER_VALUE"                                            | SSE_GTA_VE{":"}SSE_GTA_PLAN{"!"}SSE_GTA_VE{"."}{"SSE_GET_COUNTER_VALUE"}   |
| 33  | refreshCounter | "refreshCounter:" + zsubsesion + "!SSE_GTA_VE.SSE_REFRESH_COUNTER"         | refreshCounter:{}SSE_GTA_PLAN{"!SSE_GTA_VE.SSE_REFRESH_COUNTER"}           |
| 48  | zcounti        | 0                                                                          | 0                                                                          |
| 53  | zcountv        | String.valueOf(zcounti)                                                    | String.valueOf(zcounti)                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                    |
| --- | ------------ | ----------------------------------------------------------------------------------------------------- |
| 36  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                   |
| 36  | m4:beginjob  |                                                                                                       |
| 37  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                                 |
| 38  | m4:exec      | m4method=refreshCounter:{}SSE_GTA_PLAN{"!SSE_GTA_VE.SSE_REFRESH_COUNTER"}                             |
| 39  | m4:param     | name=ARG_DATE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")             |
| 40  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")           |
| 41  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")   |
| 42  | m4:param     | name=ARG_ID_COUNTER; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_COUNTER") |
| 44  | m4:outputdef | m4alias=SSE_GTA_VE                                                                                    |
| 44  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_VE{"[*]"}                                                |
| 45  | m4:endjob    |                                                                                                       |
| 46  | m4:move      |                                                                                                       |
| 46  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_VE{":"}SSE_GTA_VE{"[FIRST]"}                                         |
| 56  | m4:item      | m4name=SSE_GTA_VE{":"}SSE_GTA_PLAN{"!"}SSE_GTA_VE{"."}{"SSE_GET_COUNTER_VALUE"}                       |
| 58  | m4:endpage   |                                                                                                       |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 51  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 16  | if ((idHr==null)&#124;&#124;(idHr.equals(""))){idHr="";}                                                                         |
| 17  | if ((ordPeriod==null)&#124;&#124;(ordPeriod.equals(""))){ordPeriod = "";}                                                        |
| 18  | if ((date==null)&#124;&#124;(date.equals(""))){date = "";}                                                                       |
| 19  | if ((idCounter==null)&#124;&#124;(idCounter.equals(""))){idCounter="";}                                                          |
| 25  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                       |
| 26  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                              |
| 27  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                    |
| 28  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";           |
| 29  | expresión de cálculo/transformación: String zraiz = znodo + ":" +zsubsesion + "!" + znodo + ".";                                 |
| 31  | expresión de cálculo/transformación: String counterValue = zraiz + "SSE_GET_COUNTER_VALUE";                                      |
| 33  | expresión de cálculo/transformación: String refreshCounter = "refreshCounter:" + zsubsesion + "!SSE_GTA_VE.SSE_REFRESH_COUNTER"; |

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

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_refresh_counters.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
