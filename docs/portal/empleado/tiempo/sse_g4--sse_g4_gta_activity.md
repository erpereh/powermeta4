# sse_g4_gta_activity

Identificador: `sse_g4/sse_g4_gta_activity.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

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

| Clave             | Texto                                                             | Ámbito | Diccionario                                                                                                       |
| ----------------- | ----------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| bt.returnToFilter | Volver al filtro                                                  | BASE   | [translations/mss_g4_gta_2_es.properties:L24](../../referencias/literales/mss_g4_gta_2_es.md)                     |
| bt.returnToFilter | Filtrar de nuevo                                                  | BASE   | [translations/mss_g4_gta_view_alerts_es.properties:L12](../../referencias/literales/mss_g4_gta_view_alerts_es.md) |
| desc.line         | En esta página puedes fichar y registrar tus tiempo de presencia. | BASE   | [translations/ess_g4_gta_es.properties:L4](../../referencias/literales/ess_g4_gta_es.md)                          |
| list.Loading      | Cargando...                                                       | BASE   | [translations/mss_g4_gta_2_es.properties:L3](../../referencias/literales/mss_g4_gta_2_es.md)                      |
| page.title        | Planificación de la Gestión del tiempo avanzada                   | BASE   | [translations/mss_g4_gta_planning_es.properties:L45](../../referencias/literales/mss_g4_gta_planning_es.md)       |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_gta_activity.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_activity.jsp) | `d5039ac80c112e47e8856d980cd49badba47f21b9e3a9acf3e8c624f7a5ac229` |    989 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_gta_activity.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_gta_activity.jsp)   | `d5039ac80c112e47e8856d980cd49badba47f21b9e3a9acf3e8c624f7a5ac229` |    989 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_gta_activity.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_gta_activity.jsp) | `d5039ac80c112e47e8856d980cd49badba47f21b9e3a9acf3e8c624f7a5ac229` |    989 |
| BASE / español    | [sse_g4/espanol/sse_g4_gta_activity.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_gta_activity.jsp)                             | `d5039ac80c112e47e8856d980cd49badba47f21b9e3a9acf3e8c624f7a5ac229` |    989 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_gta_activity.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_gta_activity.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                              |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 775 | img     | src=/iconos/noname_listado_110_125.gif; alt=JSP_EXPR_com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(oLabelValues.getLabel(                                    |
| 785 | form    | action=; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                       |
| 787 | input   | type=hidden; id=dDtStart; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                     |
| 796 | a       | id=btReturnToFilter; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; href=javascript:returnToFilter();                                                               |
| 797 | img     | id=ButtonLOAD; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(; src=/iconos/icono_anterior_36_36.gif                                                                    |
| 814 | a       | href=javascript:ChangeID(-1); id=PrevID; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                      |
| 815 | img     | src=/iconos/lu_nor_rew_24.png; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                                          |
| 818 | input   | type=hidden; id=PrevNM; value=                                                                                                                                         |
| 821 | input   | type=hidden; id=IdEmployee; value=                                                                                                                                     |
| 822 | input   | type=hidden; id=OrEmployee; value=                                                                                                                                     |
| 824 | a       | href=javascript:ChangeID(1); id=NextID; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                       |
| 825 | img     | src=/iconos/lu_nor_for_24.png; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                                          |
| 827 | input   | type=hidden; id=NextNM; value=                                                                                                                                         |
| 834 | a       | href=javascript:ChangePeriod(-1); id=StartDate; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                               |
| 835 | img     | src=/iconos/icono_formacion_eliminar_11_12.gif; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                         |
| 840 | a       | href=javascript:ChangePeriod(1); id=EndDate; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                  |
| 841 | img     | src=/iconos/icono_formacion_anadir_11_12.gif; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                           |
| 845 | a       | href=javascript:AnaCodesVisibility(); title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                         |
| 846 | img     | src=/iconos/lu_nor_info_24.png; width=30; height=30; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                    |
| 848 | input   | type=hidden; id=ANA_CODES_VIS; value=0                                                                                                                                 |
| 851 | a       | href=javascript:SaveKey(); title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                                    |
| 852 | img     | id=ButtonKEY; src=/iconos/frm_key.png; width=36; height=36; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                             |
| 859 | a       | href=javascript:AddNewLine(); title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                                 |
| 860 | img     | src=/iconos/select_all.gif; width=36; height=36; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                        |
| 865 | a       | href=javascript:CompleteKey(); title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                                |
| 866 | img     | id=ButtonCOMP; src=/iconos/lu_gear_2_128.png; width=36; height=36; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                      |
| 870 | a       | href=javascript:Save(); title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value=                                                                                       |
| 871 | img     | id=ButtonSAVE; src=/iconos/lu_ok_128.png; width=36; height=36; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                          |
| 908 | a       | href=javascript:Delete; onclick=javascript:DeleteLine(this.id);; id=SCO_ORD_SAISIE_XXXX; name=SCO_ORD_SAISIE; title=JSP_EXPR_Tran_mss_g4_activity.getProperty(; value= |
| 909 | img     | src=/iconos/lu_close_1_24.png; alt=JSP_EXPR_Tran_mss_g4_activity.getProperty(                                                                                          |
| 913 | input   | class=fuenteformulario; type=text; id=SCO_DURATION_XXXX; maxlength=5; size=5; value=                                                                                   |
| 916 | input   | class=fuenteformulario; type=text; id=SCO_PERCENTAGE_XXXX; maxlength=5; size=5; value=                                                                                 |
| 919 | input   | type=hidden; id=SCO_ID_ACTIVITY_XXXX; maxlength=50; size=50; value=                                                                                                    |
| 920 | input   | class=fuenteformulario; type=text; id=SRCO_TK_QBF_VW_H_HR_ACTI.SCO_N_ACTIVITY; maxlength=50; size=50; value=                                                           |
| 923 | input   | class=fuenteformulario; type=text; id=SCO_QUANTITY_XXXX; maxlength=9; size=9; value=                                                                                   |
| 926 | select  | id=SCO_ID_WORK_UNITY_XXXX; class=fuenteformulario; disabled=disabled                                                                                                   |
| 927 | option  | value=                                                                                                                                                                 |
| 931 | input   | class=fuenteformulario; type=text; id=SCO_COMMENT_XXXX; maxlength=254; size=54; value=                                                                                 |
| 934 | select  | id=SCO_ID_ANALYTICAL_CODE1_XXXX; class=fuenteformulario                                                                                                                |
| 935 | option  | value=                                                                                                                                                                 |
| 939 | select  | id=SCO_ID_ANALYTICAL_CODE2_XXXX; class=fuenteformulario                                                                                                                |
| 940 | option  | value=                                                                                                                                                                 |
| 944 | select  | id=SCO_ID_ANALYTICAL_CODE3_XXXX; class=fuenteformulario                                                                                                                |
| 945 | option  | value=                                                                                                                                                                 |
| 949 | select  | id=SCO_ID_ANALYTICAL_CODE4_XXXX; class=fuenteformulario                                                                                                                |
| 950 | option  | value=                                                                                                                                                                 |
| 954 | select  | id=SCO_ID_ANALYTICAL_CODE5_XXXX; class=fuenteformulario                                                                                                                |
| 955 | option  | value=                                                                                                                                                                 |
| 959 | select  | id=SCO_ID_ANALYTICAL_CODE6_XXXX; class=fuenteformulario                                                                                                                |
| 960 | option  | value=                                                                                                                                                                 |
| 964 | select  | id=SCO_ID_ANALYTICAL_CODE7_XXXX; class=fuenteformulario                                                                                                                |
| 965 | option  | value=                                                                                                                                                                 |
| 969 | select  | id=SCO_ID_ANALYTICAL_CODE8_XXXX; class=fuenteformulario                                                                                                                |
| 970 | option  | value=                                                                                                                                                                 |
| 974 | select  | id=SCO_ID_ANALYTICAL_CODE9_XXXX; class=fuenteformulario                                                                                                                |
| 975 | option  | value=                                                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 28  | zinicios        | getParameter(request,"zinicios") |
| 29  | estado          | getParameter(request,"estado")   |
| 36  | zIdPerson       | getBagEntries("zIdPerson")       |
| 89  | lang            | getBagEntries("lang")            |

| L   | Variable        | Expresión fuente                                                          | Resolución estática parcial                                                                                                  |
| --- | --------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 28  | zinicios        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                         |
| 29  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                           |
| 36  | sIdPerson       | oSession.getBagEntries("zIdPerson")                                       | oSession.getBagEntries("zIdPerson")                                                                                          |
| 44  | sChannelID      | "SSE_H_HR_VENT_ACTIV_INDIV"                                               | SSE_H_HR_VENT_ACTIV_INDIV                                                                                                    |
| 46  | sRootNode       | "SSE_H_HR_VENT_ACTIV_INDIV_ROOT"                                          | SSE_H_HR_VENT_ACTIV_INDIV_ROOT                                                                                               |
| 47  | sLoadMainMethod | sChannelID + "!" + sRootNode + ".SSM_H_HR_VENT_ACTIV_MAIN_LOAD"           | SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV_ROOT{".SSM_H_HR_VENT_ACTIV_MAIN_LOAD"}                               |
| 49  | sLabelNode      | "SSE_H_HR_VENT_ACTIV_LABELS"                                              | SSE_H_HR_VENT_ACTIV_LABELS                                                                                                   |
| 50  | sOutDefLabel    | sChannelID + "!" + sLabelNode + "[*]"                                     | SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_LABELS{"[*]"}                                                              |
| 52  | sWUNode         | "SSE_H_HR_VENT_ACTIV_WU"                                                  | SSE_H_HR_VENT_ACTIV_WU                                                                                                       |
| 53  | sOutDefWU       | sChannelID + "!" + sWUNode + "[*]"                                        | SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_WU{"[*]"}                                                                  |
| 54  | sComunWU        | sWUNode + ":" + sChannelID + "!" + sWUNode + "[&amp;VAR.m4lix]" + "."     | SSE_H_HR_VENT_ACTIV_WU{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_WU{"[&amp;VAR.m4lix]"}{"."}                     |
| 55  | sIdWu           | sComunWU + "STD_ID_WORK_UNIT"                                             | SSE_H_HR_VENT_ACTIV_WU{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_WU{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"} |
| 56  | sNmWu           | sComunWU + "STD_N_WORK_UNIT"                                              | SSE_H_HR_VENT_ACTIV_WU{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_WU{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}  |
| 58  | sMainNode       | "SSE_H_HR_VENT_ACTIV_INDIV"                                               | SSE_H_HR_VENT_ACTIV_INDIV                                                                                                    |
| 59  | sMainDefRoot    | sChannelID + "!" + sMainNode + "[*]"                                      | SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV{"[*]"}                                                               |
| 60  | sComunMain      | sMainNode + ":" + sChannelID + "!" + sMainNode + "[&amp;VAR.m4lix]" + "." | SSE_H_HR_VENT_ACTIV_INDIV{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV{"[&amp;VAR.m4lix]"}{"."}               |
| 61  | sComunMainNode  | sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + "."              | SSE_H_HR_VENT_ACTIV_INDIV{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV{"[0]"}{"."}                            |
| 62  | sDtStart        | sComunMainNode + "DT_START_P"                                             | SSE_H_HR_VENT_ACTIV_INDIV{":"}SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV{"[0]"}{"."}{"DT_START_P"}              |
| 85  | nCountWU        | Oper.getCount(sWUNode,sChannelID,sWUNode)                                 | Oper.getCount(sWUNode,sChannelID,sWUNode)                                                                                    |
| 86  | sCountWU        | String.valueOf(nCountWU)                                                  | String.valueOf(nCountWU)                                                                                                     |
| 89  | zlanguser       | zlanguser = zsesion.getBagEntries("lang")                                 | zlanguser = zsesion.getBagEntries("lang")                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                      |
| --- | --------------- | ------------------------------------------------------------------------------------------------------- |
| 65  | m4:startpage    | m4task=SSE_H_HR_VENT_ACTIV_INDIV                                                                        |
| 66  | m4:beginjob     |                                                                                                         |
| 67  | m4:datadef      | m4o=SSE_H_HR_VENT_ACTIV_INDIV; m4name=SSE_H_HR_VENT_ACTIV_INDIV                                         |
| 68  | m4:exec         | m4method=SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV_ROOT{".SSM_H_HR_VENT_ACTIV_MAIN_LOAD"} |
| 69  | m4:outputdef    | m4alias=SSE_H_HR_VENT_ACTIV_INDIV_ROOT                                                                  |
| 69  | m4:param        | name=m4name0; value=SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_LABELS{"[*]"}                     |
| 70  | m4:outputdef    | m4alias=SSE_H_HR_VENT_ACTIV_LABELS                                                                      |
| 70  | m4:param        | name=m4name0; value=SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_LABELS{"[*]"}                     |
| 71  | m4:outputdef    | m4alias=SSE_H_HR_VENT_ACTIV_INDIV                                                                       |
| 71  | m4:param        | name=m4name0; value=SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_INDIV{"[*]"}                      |
| 72  | m4:outputdef    | m4alias=SSE_H_HR_VENT_ACTIV_WU                                                                          |
| 72  | m4:param        | name=m4name0; value=SSE_H_HR_VENT_ACTIV_INDIV{"!"}SSE_H_HR_VENT_ACTIV_WU{"[*]"}                         |
| 73  | m4:endjob       |                                                                                                         |
| 100 | m4:getapplparam | section=PORTAL_PARAM; key=SSM_GENVAL_VAL_AFTER_CHANGE; output=page                                      |
| 988 | m4:endpage      |                                                                                                         |

| L   | Operación | Argumentos literales       |
| --- | --------- | -------------------------- |
| 85  | getCount  | sWUNode,sChannelID,sWUNode |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                  | Argumentos             |
| --- | ------------------------ | ---------------------- |
| 116 | formatDate               | DateArg,Type           |
| 138 | startAction              | sActionTp              |
| 143 | endAction                | sActionTp              |
| 149 | GestionWindowSize        |                        |
| 158 | load                     |                        |
| 165 | ControlPercent           | Value                  |
| 172 | ControlDuration          | Value                  |
| 186 | Save                     |                        |
| 247 | CompleteKey              |                        |
| 271 | SaveKey                  |                        |
| 332 | jsonActions              | sActionTp,Parametre    |
| 394 | putRegistersInTable      |                        |
| 509 | GestionListeDeroulante   | IdObjet,IdSelect       |
| 532 | VideListeDeroulante      | IdSelect               |
| 545 | GestionAffichageAnaCodes | Type                   |
| 573 | AnaCodesVisibility       |                        |
| 581 | GestionAffichListe       | LongueurObjet,IdSelect |
| 599 | cleanActivityTable       |                        |
| 609 | addRowToActivityTable    |                        |
| 686 | TabUnable                | event                  |
| 708 | ChangePeriod             | Type                   |
| 714 | m4chercheOption          | oselect,sidoption      |
| 727 | GestionTypeSaisie        |                        |
| 735 | AddNewLine               |                        |
| 745 | DeleteLine               | Object                 |

| L   | Condición / acción / mensaje literal                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30  | if ((estado==null)&#124;&#124;(estado.equals("")))                                                                                                                                                 |
| 90  | if ((zlanguser==null)&#124;&#124;(zlanguser.equals("")))                                                                                                                                           |
| 112 | if (document.all) showMode = 'block';                                                                                                                                                              |
| 118 | if (Type==1)                                                                                                                                                                                       |
| 125 | if (Type==2)                                                                                                                                                                                       |
| 151 | if (MinSize &lt; document.body.scrollHeight)                                                                                                                                                       |
| 174 | if (sTimeSpan=="1")                                                                                                                                                                                |
| 178 | else                                                                                                                                                                                               |
| 200 | if ($(ParamId))                                                                                                                                                                                    |
| 203 | if ((IdParams[taj] == 'SCO_PERCENTAGE')&amp;&amp;(sTypeSaisie=="P"))                                                                                                                               |
| 206 | if (Retour==false)                                                                                                                                                                                 |
| 208 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+'&lt;%=Tran_mss_g4_activity.getProperty("error.Percent")%&gt;');                                                             |
| 213 | if ((IdParams[taj] == 'SCO_DURATION')&amp;&amp;(sTypeSaisie=="D"))                                                                                                                                 |
| 215 | if (sTimeSpan=="1")                                                                                                                                                                                |
| 219 | else                                                                                                                                                                                               |
| 224 | if (Retour==false)                                                                                                                                                                                 |
| 226 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+errorMsg);                                                                                                                   |
| 231 | if (IdParams[taj] == 'SCO_ID_ACTIVITY')                                                                                                                                                            |
| 233 | if ((ParamValue=='')&#124;&#124;(ParamValue==null)&#124;&#124;(ParamValue=='null'))                                                                                                                |
| 235 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+'&lt;%=Tran_mss_g4_activity.getProperty("error.Activity")%&gt;');                                                            |
| 261 | if ($(ParamId).style.display=='')                                                                                                                                                                  |
| 285 | if ($(ParamId))                                                                                                                                                                                    |
| 288 | if ((IdParams[taj] == 'SCO_PERCENTAGE')&amp;&amp;(sTypeSaisie=="P"))                                                                                                                               |
| 291 | if (Retour==false)                                                                                                                                                                                 |
| 293 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+'&lt;%=Tran_mss_g4_activity.getProperty("error.Percent")%&gt;');                                                             |
| 298 | if ((IdParams[taj] == 'SCO_DURATION')&amp;&amp;(sTypeSaisie=="D"))                                                                                                                                 |
| 300 | if (sTimeSpan=="1")                                                                                                                                                                                |
| 304 | else                                                                                                                                                                                               |
| 309 | if (Retour==false)                                                                                                                                                                                 |
| 311 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+errorMsg);                                                                                                                   |
| 316 | if (IdParams[taj] == 'SCO_ID_ACTIVITY')                                                                                                                                                            |
| 318 | if ((ParamValue=='')&#124;&#124;(ParamValue==null)&#124;&#124;(ParamValue=='null'))                                                                                                                |
| 320 | alert('&lt;%=Tran_mss_g4_activity.getProperty("error.Line")%&gt;'+jta+'&lt;%=Tran_mss_g4_activity.getProperty("error.Activity")%&gt;');                                                            |
| 341 | if ((Parametre != '')&amp;&amp;(Parametre != null))                                                                                                                                                |
| 352 | alert('Error: findValueForEmployeeAndConcept: Request.JSON oncancel');                                                                                                                             |
| 357 | if (jsonObj!=null)                                                                                                                                                                                 |
| 361 | if(ReturnedValues.MsgLog!="")                                                                                                                                                                      |
| 363 | alert(ReturnedValues.MsgLog);                                                                                                                                                                      |
| 366 | if ((sActionTp=="LOAD")&#124;&#124;(sActionTp=="COMP"))                                                                                                                                            |
| 372 | else                                                                                                                                                                                               |
| 374 | alert('Error: loadEmployees: onSuccess. Return object is null');                                                                                                                                   |
| 380 | alert('Error: findValueForEmployeeAndConcept: Request.JSON onFailure' + xhr.responseText);                                                                                                         |
| 385 | alert('Error: findValueForEmployeeAndConcept: Request.JSON onException');                                                                                                                          |
| 415 | if (snInfoCount==0)                                                                                                                                                                                |
| 453 | if ((sPeriodType=='')&#124;&#124;(sPeriodType== null))                                                                                                                                             |
| 459 | else                                                                                                                                                                                               |
| 489 | if (indexFin == 0)                                                                                                                                                                                 |
| 512 | if (IdObjet.length &gt; 0)                                                                                                                                                                         |
| 520 | if(!document.all)                                                                                                                                                                                  |
| 523 | }else                                                                                                                                                                                              |
| 535 | if (Longueur &gt; 0)                                                                                                                                                                               |
| 547 | if (Type=='0')                                                                                                                                                                                     |
| 559 | else                                                                                                                                                                                               |
| 583 | if (LongueurObjet == 0)                                                                                                                                                                            |
| 587 | else                                                                                                                                                                                               |
| 675 | if ((WorkUnity=='null')&#124;&#124;($(NActivity).value=='')&#124;&#124;(WorkUnity==null))                                                                                                          |
| 688 | if (event.code==9)                                                                                                                                                                                 |
| 693 | if (event.code==13)                                                                                                                                                                                |
| 699 | if ($(IdParams[jta]+"_"+IdElement))                                                                                                                                                                |
| 719 | if ($(oselect).options[ni].value == sidoption)                                                                                                                                                     |
| 753 | if (Compteur==1)                                                                                                                                                                                   |
| 47  | expresión de cálculo/transformación: String sLoadMainMethod = sChannelID + "!" + sRootNode + ".SSM_H_HR_VENT_ACTIV_MAIN_LOAD";                                                                     |
| 50  | expresión de cálculo/transformación: String sOutDefLabel = sChannelID + "!" + sLabelNode + "[*]";                                                                                                  |
| 53  | expresión de cálculo/transformación: String sOutDefWU = sChannelID + "!" + sWUNode + "[*]";                                                                                                        |
| 54  | expresión de cálculo/transformación: String sComunWU = sWUNode + ":" + sChannelID + "!" + sWUNode + "[&amp;VAR.m4lix]" + ".";                                                                      |
| 55  | expresión de cálculo/transformación: String sIdWu = sComunWU + "STD_ID_WORK_UNIT";                                                                                                                 |
| 56  | expresión de cálculo/transformación: String sNmWu = sComunWU + "STD_N_WORK_UNIT";                                                                                                                  |
| 59  | expresión de cálculo/transformación: String sMainDefRoot = sChannelID + "!" + sMainNode + "[*]";                                                                                                   |
| 60  | expresión de cálculo/transformación: String sComunMain = sMainNode + ":" + sChannelID + "!" + sMainNode + "[&amp;VAR.m4lix]" + ".";                                                                |
| 61  | expresión de cálculo/transformación: String sComunMainNode = sMainNode + ":" + sChannelID + "!" + sMainNode + "[0]" + ".";                                                                         |
| 62  | expresión de cálculo/transformación: String sDtStart = sComunMainNode + "DT_START_P";                                                                                                              |
| 123 | expresión de cálculo/transformación: DateArg = jour + "-" + mois +"-"+ annee;                                                                                                                      |
| 130 | expresión de cálculo/transformación: DateArg = annee + "-" + mois +"-"+ jour;                                                                                                                      |
| 195 | expresión de cálculo/transformación: IndiceRec = "{" + jta + "*";                                                                                                                                  |
| 199 | expresión de cálculo/transformación: ParamId = IdParams[taj] + "_" + jta;                                                                                                                          |
| 256 | expresión de cálculo/transformación: IndiceRec = "{" + jta + "*";                                                                                                                                  |
| 260 | expresión de cálculo/transformación: ParamId = IdParams[taj] + "_" + jta;                                                                                                                          |
| 280 | expresión de cálculo/transformación: IndiceRec = "{" + jta + "*";                                                                                                                                  |
| 284 | expresión de cálculo/transformación: ParamId = IdParams[taj] + "_" + jta;                                                                                                                          |
| 592 | expresión de cálculo/transformación: Compteur = document.getElementsByName('col_' + IdSelect).length;                                                                                              |
| 636 | expresión de cálculo/transformación: IdActivity = 'SCO_ID_ACTIVITY_' + rowCount;                                                                                                                   |
| 637 | expresión de cálculo/transformación: NActivity = 'SCO_N_ACTIVITY_' + rowCount;                                                                                                                     |
| 644 | expresión de cálculo/transformación: var InitVariable = $('IdEmployee').value + "," + $('OrEmployee').value + ",," + formatDate($('dDtStart').value,2) + ",," + formatDate($('dDtStart').value,2); |

### Includes, navegación y dependencias

| L   | Include                                             |
| --- | --------------------------------------------------- |
| 26  | ../../sse_generico/francais/menu_ess.jsp            |
| 38  | ../../shco_g0/shco_gen_formats.jsp                  |
| 39  | ../../sse_generico/francais/generico_menusup.jsp    |
| 40  | ../../sse_generico/francais/generico_links.jsp      |
| 985 | ../../sse_generico/francais/generico_disclaimer.jsp |

| L   | Destino / recurso                                                 |
| --- | ----------------------------------------------------------------- |
| 11  | /css/estilo_mss.css                                               |
| 12  | /css/autocompleter.css                                            |
| 13  | /libreria/funciones_sse.js                                        |
| 14  | /libreria/funciones_filter.js                                     |
| 15  | /libreria/mootools.js                                             |
| 16  | /libreria/sco_incidences_link.js                                  |
| 17  | /library/m4valdata.js                                             |
| 18  | /library/m4val.js                                                 |
| 19  | /library/m4gen.js                                                 |
| 20  | /library/m4gen_mt.js                                              |
| 21  | /libreria/meta4ajax.js                                            |
| 22  | /libreria/meta4list.js                                            |
| 23  | /javascripts/Autocompleter.js                                     |
| 24  | /javascripts/Autocompleter.Request.js                             |
| 25  | /javascripts/Observer.js                                          |
| 140 | /iconos/cargando.gif                                              |
| 775 | /iconos/noname_listado_110_125.gif                                |
| 796 | javascript:returnToFilter();                                      |
| 797 | /iconos/icono_anterior_36_36.gif                                  |
| 814 | javascript:ChangeID(-1)                                           |
| 815 | /iconos/lu_nor_rew_24.png                                         |
| 824 | javascript:ChangeID(1)                                            |
| 825 | /iconos/lu_nor_for_24.png                                         |
| 834 | javascript:ChangePeriod(-1)                                       |
| 835 | /iconos/icono_formacion_eliminar_11_12.gif                        |
| 840 | javascript:ChangePeriod(1)                                        |
| 841 | /iconos/icono_formacion_anadir_11_12.gif                          |
| 845 | javascript:AnaCodesVisibility()                                   |
| 846 | /iconos/lu_nor_info_24.png                                        |
| 851 | javascript:SaveKey()                                              |
| 852 | /iconos/frm_key.png                                               |
| 859 | javascript:AddNewLine()                                           |
| 860 | /iconos/select_all.gif                                            |
| 865 | javascript:CompleteKey()                                          |
| 866 | /iconos/lu_gear_2_128.png                                         |
| 870 | javascript:Save()                                                 |
| 871 | /iconos/lu_ok_128.png                                             |
| 908 | javascript:Delete                                                 |
| 909 | /iconos/lu_close_1_24.png                                         |
| 26  | ../../sse_generico/francais/menu_ess.jsp                          |
| 38  | ../../shco_g0/shco_gen_formats.jsp                                |
| 39  | ../../sse_generico/francais/generico_menusup.jsp                  |
| 40  | ../../sse_generico/francais/generico_links.jsp                    |
| 337 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp |
| 985 | ../../sse_generico/francais/generico_disclaimer.jsp               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                        | Resolución | Ficha / candidato                                                                                                                                                                                      |
| ------ | --- | ----------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| COLL   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| COLL   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| COLL   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| COLL   | 13  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                         |
| COLL   | 14  | /libreria/funciones_filter.js                                     | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)             |
| COLL   | 15  | /libreria/mootools.js                                             | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                                                           |
| COLL   | 16  | /libreria/sco_incidences_link.js                                  | contextual | [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md); [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md) |
| COLL   | 17  | /library/m4valdata.js                                             | contextual | [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md); [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md)                                             |
| COLL   | 18  | /library/m4val.js                                                 | contextual | [library/m4val.js](../../transversal/dependencias/library--m4val.md); [library/m4val.js](../../transversal/dependencias/library--m4val.md)                                                             |
| COLL   | 19  | /library/m4gen.js                                                 | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md); [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                                             |
| COLL   | 20  | /library/m4gen_mt.js                                              | contextual | [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md); [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md)                                                 |
| COLL   | 21  | /libreria/meta4ajax.js                                            | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                         |
| COLL   | 22  | /libreria/meta4list.js                                            | contextual | [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md); [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md)                                         |
| COLL   | 23  | /javascripts/Autocompleter.js                                     | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                                                                                                           |
| COLL   | 24  | /javascripts/Autocompleter.Request.js                             | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md)                                                                                           |
| COLL   | 25  | /javascripts/Observer.js                                          | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                                                                                                                     |
| COLL   | 796 | javascript:returnToFilter();                                      | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 814 | javascript:ChangeID(-1)                                           | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 824 | javascript:ChangeID(1)                                            | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 834 | javascript:ChangePeriod(-1)                                       | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 840 | javascript:ChangePeriod(1)                                        | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 845 | javascript:AnaCodesVisibility()                                   | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 851 | javascript:SaveKey()                                              | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 859 | javascript:AddNewLine()                                           | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 865 | javascript:CompleteKey()                                          | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 870 | javascript:Save()                                                 | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 908 | javascript:Delete                                                 | dinámica   | P06                                                                                                                                                                                                    |
| COLL   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| COLL   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| COLL   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| COLL   | 337 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| CYC    | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| CYC    | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| CYC    | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| CYC    | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| CYC    | 13  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                                 |
| CYC    | 14  | /libreria/funciones_filter.js                                     | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                                                                                                           |
| CYC    | 15  | /libreria/mootools.js                                             | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                                                         |
| CYC    | 16  | /libreria/sco_incidences_link.js                                  | contextual | [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md)                                                                                                     |
| CYC    | 17  | /library/m4valdata.js                                             | contextual | [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md); [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md)                                             |
| CYC    | 18  | /library/m4val.js                                                 | contextual | [library/m4val.js](../../transversal/dependencias/library--m4val.md); [library/m4val.js](../../transversal/dependencias/library--m4val.md)                                                             |
| CYC    | 19  | /library/m4gen.js                                                 | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md); [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                                             |
| CYC    | 20  | /library/m4gen_mt.js                                              | contextual | [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md); [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md)                                                 |
| CYC    | 21  | /libreria/meta4ajax.js                                            | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                                                                                                         |
| CYC    | 22  | /libreria/meta4list.js                                            | contextual | [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md)                                                                                                                         |
| CYC    | 23  | /javascripts/Autocompleter.js                                     | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                                                                                                           |
| CYC    | 24  | /javascripts/Autocompleter.Request.js                             | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md)                                                                                           |
| CYC    | 25  | /javascripts/Observer.js                                          | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                                                                                                                     |
| CYC    | 796 | javascript:returnToFilter();                                      | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 814 | javascript:ChangeID(-1)                                           | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 824 | javascript:ChangeID(1)                                            | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 834 | javascript:ChangePeriod(-1)                                       | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 840 | javascript:ChangePeriod(1)                                        | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 845 | javascript:AnaCodesVisibility()                                   | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 851 | javascript:SaveKey()                                              | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 859 | javascript:AddNewLine()                                           | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 865 | javascript:CompleteKey()                                          | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 870 | javascript:Save()                                                 | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 908 | javascript:Delete                                                 | dinámica   | P06                                                                                                                                                                                                    |
| CYC    | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| CYC    | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| CYC    | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| CYC    | 337 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| IBER   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| IBER   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| IBER   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| IBER   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| IBER   | 13  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                         |
| IBER   | 14  | /libreria/funciones_filter.js                                     | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)             |
| IBER   | 15  | /libreria/mootools.js                                             | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                                                           |
| IBER   | 16  | /libreria/sco_incidences_link.js                                  | contextual | [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md); [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md) |
| IBER   | 17  | /library/m4valdata.js                                             | contextual | [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md); [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md)                                             |
| IBER   | 18  | /library/m4val.js                                                 | contextual | [library/m4val.js](../../transversal/dependencias/library--m4val.md); [library/m4val.js](../../transversal/dependencias/library--m4val.md)                                                             |
| IBER   | 19  | /library/m4gen.js                                                 | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md); [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                                             |
| IBER   | 20  | /library/m4gen_mt.js                                              | contextual | [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md); [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md)                                                 |
| IBER   | 21  | /libreria/meta4ajax.js                                            | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md); [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                         |
| IBER   | 22  | /libreria/meta4list.js                                            | contextual | [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md); [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md)                                         |
| IBER   | 23  | /javascripts/Autocompleter.js                                     | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                                                                                                           |
| IBER   | 24  | /javascripts/Autocompleter.Request.js                             | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md)                                                                                           |
| IBER   | 25  | /javascripts/Observer.js                                          | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                                                                                                                     |
| IBER   | 796 | javascript:returnToFilter();                                      | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 814 | javascript:ChangeID(-1)                                           | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 824 | javascript:ChangeID(1)                                            | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 834 | javascript:ChangePeriod(-1)                                       | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 840 | javascript:ChangePeriod(1)                                        | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 845 | javascript:AnaCodesVisibility()                                   | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 851 | javascript:SaveKey()                                              | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 859 | javascript:AddNewLine()                                           | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 865 | javascript:CompleteKey()                                          | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 870 | javascript:Save()                                                 | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 908 | javascript:Delete                                                 | dinámica   | P06                                                                                                                                                                                                    |
| IBER   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| IBER   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| IBER   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| IBER   | 337 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| BASE   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| BASE   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | física     | [shco_g0/shco_gen_formats.jsp](../../transversal/dependencias/shco_g0--shco_gen_formats.md)                                                                                                            |
| BASE   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| BASE   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| BASE   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |
| BASE   | 13  | /libreria/funciones_sse.js                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                                 |
| BASE   | 14  | /libreria/funciones_filter.js                                     | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                                                                                                           |
| BASE   | 15  | /libreria/mootools.js                                             | contextual | &#96;libreria/mootools.js&#96;                                                                                                                                                                         |
| BASE   | 16  | /libreria/sco_incidences_link.js                                  | contextual | [libreria/sco_incidences_link.js](../../transversal/dependencias/libreria--sco_incidences_link.md)                                                                                                     |
| BASE   | 17  | /library/m4valdata.js                                             | contextual | [library/m4valdata.js](../../transversal/dependencias/library--m4valdata.md)                                                                                                                           |
| BASE   | 18  | /library/m4val.js                                                 | contextual | [library/m4val.js](../../transversal/dependencias/library--m4val.md)                                                                                                                                   |
| BASE   | 19  | /library/m4gen.js                                                 | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                                                                                                                   |
| BASE   | 20  | /library/m4gen_mt.js                                              | contextual | [library/m4gen_mt.js](../../transversal/dependencias/library--m4gen_mt.md)                                                                                                                             |
| BASE   | 21  | /libreria/meta4ajax.js                                            | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                                                                                                         |
| BASE   | 22  | /libreria/meta4list.js                                            | contextual | [libreria/meta4list.js](../../transversal/dependencias/libreria--meta4list.md)                                                                                                                         |
| BASE   | 23  | /javascripts/Autocompleter.js                                     | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                                                                                                           |
| BASE   | 24  | /javascripts/Autocompleter.Request.js                             | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md)                                                                                           |
| BASE   | 25  | /javascripts/Observer.js                                          | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                                                                                                                     |
| BASE   | 796 | javascript:returnToFilter();                                      | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 814 | javascript:ChangeID(-1)                                           | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 824 | javascript:ChangeID(1)                                            | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 834 | javascript:ChangePeriod(-1)                                       | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 840 | javascript:ChangePeriod(1)                                        | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 845 | javascript:AnaCodesVisibility()                                   | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 851 | javascript:SaveKey()                                              | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 859 | javascript:AddNewLine()                                           | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 865 | javascript:CompleteKey()                                          | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 870 | javascript:Save()                                                 | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 908 | javascript:Delete                                                 | dinámica   | P06                                                                                                                                                                                                    |
| BASE   | 26  | ../../sse_generico/francais/menu_ess.jsp                          | física     | [sse_generico/francais/menu_ess.jsp](../../transversal/navegacion/sse_generico--francais--menu_ess.md)                                                                                                 |
| BASE   | 38  | ../../shco_g0/shco_gen_formats.jsp                                | física     | [shco_g0/shco_gen_formats.jsp](../../transversal/dependencias/shco_g0--shco_gen_formats.md)                                                                                                            |
| BASE   | 39  | ../../sse_generico/francais/generico_menusup.jsp                  | física     | [sse_generico/francais/generico_menusup.jsp](../../transversal/navegacion/sse_generico--francais--generico_menusup.md)                                                                                 |
| BASE   | 40  | ../../sse_generico/francais/generico_links.jsp                    | física     | [sse_generico/francais/generico_links.jsp](../../transversal/navegacion/sse_generico--francais--generico_links.md)                                                                                     |
| BASE   | 337 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_gta_activity_actions.jsp | ausente    | P06                                                                                                                                                                                                    |
| BASE   | 985 | ../../sse_generico/francais/generico_disclaimer.jsp               | física     | [sse_generico/francais/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--francais--generico_disclaimer.md)                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_gta_activity.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
