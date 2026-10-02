# sse_g4_gta_planning_get_tooltip_employee_informations

Identificador: `sse_g4/sse_g4_gta_planning_get_tooltip_employee_informations.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto               | Ámbito | Diccionario                                                                                                  |
| ------------------------ | ------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| tooltipEmp.employeeInfos | Datos del empleado  | BASE   | [translations/mss_g4_gta_planning_es.properties:L203](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.job           | Puesto              | BASE   | [translations/mss_g4_gta_planning_es.properties:L208](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.legalEntity   | Empresa             | BASE   | [translations/mss_g4_gta_planning_es.properties:L205](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.position      | Posición            | BASE   | [translations/mss_g4_gta_planning_es.properties:L209](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.role          | Rol                 | BASE   | [translations/mss_g4_gta_planning_es.properties:L204](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.workLocation  | Lugar de trabajo    | BASE   | [translations/mss_g4_gta_planning_es.properties:L207](../../referencias/literales/mss_g4_gta_planning_es.md) |
| tooltipEmp.workUnit      | Unidad organizativa | BASE   | [translations/mss_g4_gta_planning_es.properties:L206](../../referencias/literales/mss_g4_gta_planning_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp) | `453daae99cbcee8e91c36747a8e8bb62528e92ab89d2af8a018ca36b4cae82ee` |    105 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp)   | `453daae99cbcee8e91c36747a8e8bb62528e92ab89d2af8a018ca36b4cae82ee` |    105 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp) | `453daae99cbcee8e91c36747a8e8bb62528e92ab89d2af8a018ca36b4cae82ee` |    105 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp)                             | `453daae99cbcee8e91c36747a8e8bb62528e92ab89d2af8a018ca36b4cae82ee` |    105 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_planning_get_tooltip_employee_informations.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 79  | [valor dinámico] ,       |
| 93  | ( )                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 8   | lang            | getBagEntries("lang")                 |
| 18  | ARG_DATE        | getParameter(request,"ARG_DATE")      |
| 19  | ARG_ID_HR       | getParameter(request,"ARG_ID_HR")     |
| 21  | ARG_OR_PERIOD   | getParameter(request,"ARG_OR_PERIOD") |

| L   | Variable        | Expresión fuente                                                          | Resolución estática parcial                                                |
| --- | --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 8   | zlanguser       | zsesionGTA.getBagEntries("lang")                                          | zsesionGTA.getBagEntries("lang")                                           |
| 18  | argDate         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")       |
| 19  | argHR           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")      |
| 21  | argOrdPerid     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD")  |
| 28  | zsubsesion      | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                               |
| 29  | zmeta4object    | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                               |
| 30  | znodo           | "SSE_GTA_PLAN"                                                            | SSE_GTA_PLAN                                                               |
| 32  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                          | SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                       |
| 33  | zmove           | znodo + ":" +znodo + "[FIRST]"                                            | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                   |
| 34  | zlectura        | znodo + ":" +zsubsesion + "!" + znodo                                     | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN                             |
| 35  | zcomun          | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."          | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[&amp;VAR.m4lix]"}{"."}    |
| 36  | zraiz           | znodo + ":" + zsubsesion + "!" + znodo + "."                              | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}                        |
| 38  | getHrInfoMethod | "LOAD_HR_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_EMPLOYEE_INFOS"  | LOAD_HR_TOOLTIP:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_EMPLOYEE_INFOS"}     |
| 41  | mainRole        | zraiz + "SCO_N_ROLE"                                                      | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_N_ROLE"}          |
| 42  | mainRoleDate    | zraiz + "SCO_DT_START"                                                    | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_DT_START"}        |
| 43  | mainWU          | zraiz + "STD_N_WORK_UNIT"                                                 | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_WORK_UNIT"}     |
| 44  | mainLegEnt      | zraiz + "STD_N_LEG_ENT"                                                   | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_LEG_ENT"}       |
| 45  | mainWorkLoc     | zraiz + "STD_N_WORK_LOCATION"                                             | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_WORK_LOCATION"} |
| 46  | mainJob         | zraiz + "STD_N_JOB_CODE"                                                  | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_JOB_CODE"}      |
| 47  | mainPosition    | zraiz + "SCO_NM_POSITION"                                                 | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_NM_POSITION"}     |
| 48  | mainFirstName   | zraiz + "STD_N_FIRST_NAME"                                                | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FIRST_NAME"}    |
| 49  | mainLastName    | zraiz + "STD_N_FAMILY_NAME_1"                                             | SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FAMILY_NAME_1"} |
| 64  | zcount          | 0                                                                         | 0                                                                          |
| 65  | zcounti         | 0                                                                         | 0                                                                          |
| 66  | zcountv         | "0"                                                                       | 0                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                  |
| --- | ------------ | --------------------------------------------------------------------------------------------------- |
| 52  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                 |
| 52  | m4:beginjob  |                                                                                                     |
| 53  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                               |
| 54  | m4:exec      | m4method=LOAD_HR_TOOLTIP:{}SSE_GTA_PLAN{"!SSE_GTA_PLAN.SSE_GET_EMPLOYEE_INFOS"}                     |
| 55  | m4:param     | name=ARG_DATE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_DATE")           |
| 56  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_ID_HR")         |
| 57  | m4:param     | name=ARG_OR_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ARG_OR_PERIOD") |
| 59  | m4:outputdef | m4alias=SSE_GTA_PLAN                                                                                |
| 59  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"[*]"}                                            |
| 60  | m4:endjob    |                                                                                                     |
| 61  | m4:move      |                                                                                                     |
| 61  | m4:param     | name=SSE_GTA_PLAN; value=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"[FIRST]"}                                   |
| 79  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FIRST_NAME"}                      |
| 79  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_FAMILY_NAME_1"}                   |
| 93  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_N_ROLE"}                            |
| 93  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_DT_START"}                          |
| 94  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_LEG_ENT"}                         |
| 95  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_WORK_UNIT"}                       |
| 96  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_WORK_LOCATION"}                   |
| 97  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"STD_N_JOB_CODE"}                        |
| 98  | m4:item      | m4name=SSE_GTA_PLAN{":"}SSE_GTA_PLAN{"!"}SSE_GTA_PLAN{"."}{"SCO_NM_POSITION"}                       |
| 105 | m4:endpage   |                                                                                                     |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 70  | getCount         | znodo,zsubsesion,znodo |
| 71  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if ((zlanguser==null)&#124;&#124;(zlanguser.equals(""))){zlanguser = "fr";}                                                             |
| 24  | if ((argDate==null)&#124;&#124;(argDate.equals(""))){argDate = "";}                                                                     |
| 25  | if ((argHR==null)&#124;&#124;(argHR.equals(""))){argHR = "";}                                                                           |
| 26  | if ((argOrdPerid==null)&#124;&#124;(argOrdPerid.equals(""))){argOrdPerid = "0";}                                                        |
| 32  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                              |
| 33  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                                     |
| 34  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                           |
| 35  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 36  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                       |
| 38  | expresión de cálculo/transformación: String getHrInfoMethod = "LOAD_HR_TOOLTIP:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_EMPLOYEE_INFOS"; |
| 41  | expresión de cálculo/transformación: String mainRole = zraiz + "SCO_N_ROLE";                                                            |
| 42  | expresión de cálculo/transformación: String mainRoleDate = zraiz + "SCO_DT_START";                                                      |
| 43  | expresión de cálculo/transformación: String mainWU = zraiz + "STD_N_WORK_UNIT";                                                         |
| 44  | expresión de cálculo/transformación: String mainLegEnt = zraiz + "STD_N_LEG_ENT";                                                       |
| 45  | expresión de cálculo/transformación: String mainWorkLoc = zraiz + "STD_N_WORK_LOCATION";                                                |
| 46  | expresión de cálculo/transformación: String mainJob = zraiz + "STD_N_JOB_CODE";                                                         |
| 47  | expresión de cálculo/transformación: String mainPosition = zraiz + "SCO_NM_POSITION";                                                   |
| 48  | expresión de cálculo/transformación: String mainFirstName = zraiz + "STD_N_FIRST_NAME";                                                 |
| 49  | expresión de cálculo/transformación: String mainLastName = zraiz + "STD_N_FAMILY_NAME_1";                                               |

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

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_planning_get_tooltip_employee_informations.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
