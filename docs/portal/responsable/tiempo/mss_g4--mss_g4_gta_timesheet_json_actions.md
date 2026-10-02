# mss_g4_gta_timesheet_json_actions

Identificador: `mss_g4/mss_g4_gta_timesheet_json_actions.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_gta_timesheet_json_actions.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_timesheet_json_actions.jsp) | `558b8ac4da2030de6cf60cd664624c21ba75dfe3139686ccde531b2144182d83` |    174 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_gta_timesheet_json_actions.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_timesheet_json_actions.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 22  | ActionTp        | getParameter(request,"ActionTp")  |
| 23  | NumCurReg       | getParameter(request,"NumCurReg") |
| 24  | aRows           | getParameter(request,"aRows")     |
| 27  | DtStart         | getParameter(request,"DtStart")   |
| 28  | ID_STATUS       | getParameter(request,"ID_STATUS") |
| 29  | ID_HR           | getParameter(request,"ID_HR")     |
| 30  | OR_PER          | getParameter(request,"OR_PER")    |
| 31  | IdWu            | getParameter(request,"IdWu")      |

| L   | Variable        | Expresión fuente                                                             | Resolución estática parcial                                                    |
| --- | --------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 22  | sActionTp       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp")           |
| 23  | sNumCurReg      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")          |
| 24  | sRows           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")              |
| 27  | sDtStart        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")            |
| 28  | sID_STATUS      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_STATUS")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_STATUS")          |
| 29  | sIDHr           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")              |
| 30  | sOrPer          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")             |
| 31  | sIdWu           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")               |
| 35  | sMethod         | ""                                                                           |                                                                                |
| 45  | sChannelID      | "SCO_GTA_GENERATE_EV"                                                        | SCO_GTA_GENERATE_EV                                                            |
| 46  | sChannelAlias   | sChannelID                                                                   | SCO_GTA_GENERATE_EV                                                            |
| 47  | sRootNode       | "SHCO_GN_ROOT"                                                               | SHCO_GN_ROOT                                                                   |
| 48  | sLogNode        | "SHCO_GN_LOGS"                                                               | SHCO_GN_LOGS                                                                   |
| 49  | sLabelNode      | "SHCO_GN_LABEL"                                                              | SHCO_GN_LABEL                                                                  |
| 50  | sMainNode       | "SRCO_GTA_RWD_PRES_EV"                                                       | SRCO_GTA_RWD_PRES_EV                                                           |
| 51  | sRootNodeOutDef | sChannelAlias + "!" + sRootNode + "[*]"                                      | SCO_GTA_GENERATE_EV{"!"}SHCO_GN_ROOT{"[*]"}                                    |
| 52  | sLogNodeOutDef  | sChannelAlias + "!" + sLogNode + "[*]"                                       | SCO_GTA_GENERATE_EV{"!"}SHCO_GN_LOGS{"[*]"}                                    |
| 53  | sOutDefLabel    | sChannelAlias + "!" + sLabelNode + "[*]"                                     | SCO_GTA_GENERATE_EV{"!"}SHCO_GN_LABEL{"[*]"}                                   |
| 54  | sOutDefMain     | sChannelAlias + "!" + sMainNode + "[*]"                                      | SCO_GTA_GENERATE_EV{"!"}SRCO_GTA_RWD_PRES_EV{"[*]"}                            |
| 55  | sLoadMethod     | sChannelAlias + "!" + sRootNode + "." + sMethod                              | SCO_GTA_GENERATE_EV{"!"}SHCO_GN_ROOT{"."}                                      |
| 56  | sComunRoot      | sRootNode + ":" + sChannelAlias + "!" + sRootNode + "[&amp;VAR.m4lix]" + "." | SHCO_GN_ROOT{":"}SCO_GTA_GENERATE_EV{"!"}SHCO_GN_ROOT{"[&amp;VAR.m4lix]"}{"."} |
| 58  | nullStr         | null                                                                         | null                                                                           |
| 62  | sLogErrorMsg    | ""                                                                           |                                                                                |
| 63  | sIdHR           | ""                                                                           |                                                                                |
| 63  | sOrHrPer        | ""                                                                           |                                                                                |
| 63  | sDtStartRet     | ""                                                                           |                                                                                |
| 64  | sDtStartFilFix  | ""                                                                           |                                                                                |
| 64  | sNmEmpl         | ""                                                                           |                                                                                |
| 64  | sNMStatus       | ""                                                                           |                                                                                |
| 65  | sIDStatus       | ""                                                                           |                                                                                |
| 65  | sIdRefMod       | ""                                                                           |                                                                                |
| 66  | sIdHRhinc       | ""                                                                           |                                                                                |
| 66  | sOrHrPerhinc    | ""                                                                           |                                                                                |
| 70  | sret            | ""                                                                           |                                                                                |
| 100 | nCount          | 0                                                                            | 0                                                                              |
| 100 | sCount          | ""                                                                           |                                                                                |
| 101 | nLogCount       | 0                                                                            | 0                                                                              |
| 101 | sLogCount       | ""                                                                           |                                                                                |
| 118 | i               | 0                                                                            | 0                                                                              |
| 119 | sI              | String.valueOf(i)                                                            | String.valueOf(i)                                                              |
| 161 | j               | 0                                                                            | 0                                                                              |
| 163 | sJ              | String.valueOf(j)                                                            | String.valueOf(j)                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 74  | m4:startpage | m4task=SCO_GTA_GENERATE_EV                                                                      |
| 74  | m4:beginjob  |                                                                                                 |
| 75  | m4:datadef   | m4o=SCO_GTA_GENERATE_EV; m4name=SCO_GTA_GENERATE_EV                                             |
| 76  | m4:exec      | m4method=SCO_GTA_GENERATE_EV{"!"}SHCO_GN_ROOT{"."}                                              |
| 80  | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")    |
| 81  | m4:param     | name=ARG_ID_STATUS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_STATUS") |
| 82  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")         |
| 83  | m4:param     | name=ARG_OR_PER; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")       |
| 84  | m4:param     | name=ARG_ID_WU; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")          |
| 87  | m4:param     | name=ARG_NUM_REG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")   |
| 89  | m4:param     | name=ARG_NUM_REG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")   |
| 90  | m4:param     | name=ARG_LIST_CHECKED; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")  |
| 93  | m4:outputdef | m4alias=SHCO_GN_ROOT                                                                            |
| 93  | m4:param     | name=m4name0; value=SCO_GTA_GENERATE_EV{"!"}SHCO_GN_ROOT{"[*]"}                                 |
| 94  | m4:outputdef | m4alias=SHCO_GN_LOGS                                                                            |
| 94  | m4:param     | name=m4name0; value=SCO_GTA_GENERATE_EV{"!"}SHCO_GN_LOGS{"[*]"}                                 |
| 95  | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                           |
| 95  | m4:param     | name=m4name0; value=SCO_GTA_GENERATE_EV{"!"}SHCO_GN_LABEL{"[*]"}                                |
| 96  | m4:outputdef | m4alias=SRCO_GTA_RWD_PRES_EV                                                                    |
| 96  | m4:param     | name=m4name0; value=SCO_GTA_GENERATE_EV{"!"}SRCO_GTA_RWD_PRES_EV{"[*]"}                         |
| 97  | m4:endjob    |                                                                                                 |
| 174 | m4:endpage   |                                                                                                 |

| L   | Operación | Argumentos literales                                             |
| --- | --------- | ---------------------------------------------------------------- |
| 114 | getCount  | sMainNode,sChannelAlias,sMainNode                                |
| 120 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"STD_ID_HR"                 |
| 122 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"STD_OR_HR_PERIOD"          |
| 123 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SSM_DT_START_STRING"       |
| 124 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"DT_START_P"                |
| 125 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_GB_NAME"               |
| 126 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_STATUS_TIMESHEET"   |
| 127 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_STATUS_TIMESHEET_1" |
| 128 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_REF_MOD"            |
| 157 | getCount  | sLogNode,sChannelAlias,sLogNode                                  |
| 164 | getItem   | sLogNode,sChannelAlias,sLogNode,sJ,"SHCO_LOG_TEXT"               |
| 165 | getItem   | sLogNode,sChannelAlias,sLogNode,"0","SHCO_LOG_TYPE"              |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 36  | if (sActionTp.equals("1")){                                                                                                              |
| 38  | }else if (sActionTp.equals("2")){                                                                                                        |
| 40  | }else if (sActionTp.equals("3")){                                                                                                        |
| 78  | if (sActionTp.equals("1")){                                                                                                              |
| 86  | }else if (sActionTp.equals("2")){                                                                                                        |
| 88  | } else if (sActionTp.equals("3")){                                                                                                       |
| 112 | if (sActionTp.equals("1")){                                                                                                              |
| 131 | if (sOrHrPer != ""){                                                                                                                     |
| 133 | }else {sOrHrPer="1";}                                                                                                                    |
| 160 | if (nLogCount&gt;0){                                                                                                                     |
| 162 | if (j!=0){sLogErrorMsg = "\n" + sLogErrorMsg;}                                                                                           |
| 51  | expresión de cálculo/transformación: String sRootNodeOutDef = sChannelAlias + "!" + sRootNode + "[*]";                                   |
| 52  | expresión de cálculo/transformación: String sLogNodeOutDef = sChannelAlias + "!" + sLogNode + "[*]";                                     |
| 53  | expresión de cálculo/transformación: String sOutDefLabel = sChannelAlias + "!" + sLabelNode + "[*]";                                     |
| 54  | expresión de cálculo/transformación: String sOutDefMain = sChannelAlias + "!" + sMainNode + "[*]";                                       |
| 55  | expresión de cálculo/transformación: String sLoadMethod = sChannelAlias + "!" + sRootNode + "." + sMethod;                               |
| 56  | expresión de cálculo/transformación: String sComunRoot = sRootNode + ":" + sChannelAlias + "!" + sRootNode + "[&amp;VAR.m4lix]" + ".";   |
| 164 | expresión de cálculo/transformación: sLogErrorMsg = sLogErrorMsg + oOperDef.getItem(sLogNode,sChannelAlias,sLogNode,sJ,"SHCO_LOG_TEXT"); |

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

- Confirmar exposición y permisos de `mss_g4/mss_g4_gta_timesheet_json_actions.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
