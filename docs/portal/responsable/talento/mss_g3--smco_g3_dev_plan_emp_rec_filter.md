# smco_g3_dev_plan_emp_rec_filter

Identificador: `mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                        | Texto                                              | Ámbito | Diccionario                                                                                     |
| ---------------------------- | -------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| dev_plan.emp_link_rec_apply  | Enviar                                             | BASE   | [translations/smco_dev_plan_es.properties:L18](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_close  | Cerrar                                             | BASE   | [translations/smco_dev_plan_es.properties:L17](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_nodata | No hay ninguna acción recomendada para este filtro | BASE   | [translations/smco_dev_plan_es.properties:L19](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_title  | Ver acciones recomendadas                          | BASE   | [translations/smco_dev_plan_es.properties:L10](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.pdevSelAll          | Selecionar todas                                   | BASE   | [translations/smco_dev_plan_es.properties:L42](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.pdevdesAll          | Quitar la selección                                | BASE   | [translations/smco_dev_plan_es.properties:L43](../../referencias/literales/smco_dev_plan_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_dev_plan_emp_rec_filter.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_emp_rec_filter.jsp) | `38d8d18e1d8d438388e2569df4d99ba5d514f93a51d5f7f649ae6425b0ab9415` |    190 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_dev_plan_emp_rec_filter.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_emp_rec_filter.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------- |
| 154 | " id="SRCO_SELECTED[valor dinámico]" name="SRCO_SELECTED[valor dinámico]" type="checkbox" value="1" /&gt; |
| 155 | " src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /&gt;                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                  |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 141 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_act.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                         |
| 154 | input   | title=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                                                                                       |
| 157 | img     | alt=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                                                                                         |
| 169 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; href=javascript:sel_all('&lt;%=zcounti%&gt;');; tabindex=8                                                                                                      |
| 169 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)      |
| 170 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; href=javascript:dessel_all('&lt;%=zcounti%&gt;');; tabindex=9                                                                                                   |
| 170 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/icono_cancelar_todas_mss_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 171 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; href=javascript:aplicar('&lt;%=zcounti%&gt;');; tabindex=10                                                                                                     |
| 171 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)         |
| 172 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; href=javascript:window.close();                                                                                                                                 |
| 172 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/entrar_blanco.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                  |
| 180 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; tabindex=9; href=javascript:window.close();                                                                                                                     |
| 180 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/entrar_blanco.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave      | Acceso literal                               |
| --- | -------------------- | -------------------------------------------- |
| 16  | zid_hr               | getParameter(request,"zid_hr")               |
| 17  | zper                 | getParameter(request,"zper")                 |
| 18  | zidhr_name           | getParameter(request,"zidhr_name")           |
| 21  | SMCO_TYPE_FILTER     | getParameter(request,"SMCO_TYPE_FILTER")     |
| 23  | SMCO_JOB_FILTER      | getParameter(request,"SMCO_JOB_FILTER")      |
| 26  | SMCO_DT_PLAN_FILTER  | getParameter(request,"SMCO_DT_PLAN_FILTER")  |
| 28  | SMCO_ID_PLAN_FILTER  | getParameter(request,"SMCO_ID_PLAN_FILTER")  |
| 31  | SMCO_ID_EK_FILTER    | getParameter(request,"SMCO_ID_EK_FILTER")    |
| 32  | SMCO_ID_LEVEL_FILTER | getParameter(request,"SMCO_ID_LEVEL_FILTER") |
| 33  | SMCO_DT_LEVEL_FILTER | getParameter(request,"SMCO_DT_LEVEL_FILTER") |

| L   | Variable                | Expresión fuente                                                                 | Resolución estática parcial                                                                     |
| --- | ----------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 16  | zidhr_param             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")                              |
| 17  | zorperiod               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")                                |
| 18  | zidhr_name              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name")                          |
| 21  | zfilter_type            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_TYPE_FILTER")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_TYPE_FILTER")                    |
| 23  | zfilter_job             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_JOB_FILTER")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_JOB_FILTER")                     |
| 26  | zfilter_dt_eval         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_PLAN_FILTER")                 |
| 28  | zfilter_id_eval         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_PLAN_FILTER")                 |
| 31  | zfilter_id_ek_filter    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_EK_FILTER")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_EK_FILTER")                   |
| 32  | zfilter_id_level_filter | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_LEVEL_FILTER") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_ID_LEVEL_FILTER")                |
| 33  | zfilter_dt_level_filter | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_LEVEL_FILTER") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_DT_LEVEL_FILTER")                |
| 84  | zsubsesion              | "SMCO_DEV_PLAN_ACCION"                                                           | SMCO_DEV_PLAN_ACCION                                                                            |
| 85  | zmeta4object            | "SMCO_DEV_PLAN_ACCION"                                                           | SMCO_DEV_PLAN_ACCION                                                                            |
| 86  | znodo                   | "SMCO_DEV_PLAN_ACCION"                                                           | SMCO_DEV_PLAN_ACCION                                                                            |
| 87  | znodo1                  | "SMCO_CR_ACT"                                                                    | SMCO_CR_ACT                                                                                     |
| 90  | zoutputdef              | zsubsesion + "!" + znodo + "[*]"                                                 | SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_PLAN_ACCION{"[*]"}                                            |
| 91  | zoutputdef1             | zsubsesion + "!" + znodo1 + "[*]"                                                | SMCO_DEV_PLAN_ACCION{"!"}SMCO_CR_ACT{"[*]"}                                                     |
| 94  | zmove                   | znodo + ":" + znodo + "[FIRST]"                                                  | SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"[FIRST]"}                                        |
| 95  | znamenodo1              | znodo1 + ":" + zsubsesion + "!" + znodo1                                         | SMCO_CR_ACT{":"}SMCO_DEV_PLAN_ACCION{"!"}SMCO_CR_ACT                                            |
| 96  | zcomun                  | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                | SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_PLAN_ACCION{"[&amp;VAR.m4lix]"}{"."} |
| 97  | zmetodocarga            | "CARGA:" + zsubsesion + "!SMCO_EMPLOYEE_DATA.SMCO_LOAD_ACTIONS"                  | CARGA:{}SMCO_DEV_PLAN_ACCION{"!SMCO_EMPLOYEE_DATA.SMCO_LOAD_ACTIONS"}                           |
| 127 | zcounti                 | 0                                                                                | 0                                                                                               |
| 133 | zcountv                 | String.valueOf(zcounti)                                                          | String.valueOf(zcounti)                                                                         |
| 140 | zposicions              | "0"                                                                              | 0                                                                                               |
| 140 | zcontrol                | 0                                                                                | 0                                                                                               |
| 140 | zPaint                  | ""                                                                               |                                                                                                 |
| 140 | zposicion               | 0                                                                                | 0                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                        |
| --- | ------------ | ----------------------------------------------------------------------------------------- |
| 100 | m4:startpage | m4task=SMCO_DEV_PLAN_ACCION                                                               |
| 101 | m4:beginjob  |                                                                                           |
| 102 | m4:datadef   | m4o=SMCO_DEV_PLAN_ACCION; m4name=SMCO_DEV_PLAN_ACCION                                     |
| 118 | m4:exec      | m4method=CARGA:{}SMCO_DEV_PLAN_ACCION{"!SMCO_EMPLOYEE_DATA.SMCO_LOAD_ACTIONS"}            |
| 122 | m4:outputdef | m4alias=SMCO_CR_ACT                                                                       |
| 122 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_CR_ACT{"[*]"}                           |
| 124 | m4:endjob    |                                                                                           |
| 125 | m4:move      |                                                                                           |
| 125 | m4:param     | name=SMCO_DEV_PLAN_ACCION; value=SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"[FIRST]"} |
| 139 | m4:label     | m4name=SMCO_CR_ACT{":"}SMCO_DEV_PLAN_ACCION{"!"}SMCO_CR_ACT; htmlsafe=true                |
| 143 | m4:label     | item=SRCO_SELECTED; htmlsafe=true; outputdef=SMCO_CR_ACT                                  |
| 144 | m4:label     | item=SRCO_TYPE; htmlsafe=true; outputdef=SMCO_CR_ACT                                      |
| 145 | m4:label     | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_CR_ACT                                  |
| 146 | m4:label     | item=SCO_ID_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_CR_ACT                             |
| 148 | m4:dataloop  | outputdef=SMCO_CR_ACT                                                                     |
| 149 | m4:current   | m4varname=current; outputdef=SMCO_CR_ACT                                                  |
| 150 | m4:item      | m4varname=zSRCO_TYPE; item=SRCO_TYPE; htmlsafe=true; outputdef=SMCO_CR_ACT                |
| 162 | m4:item      | item=SCO_NM_ACTION; htmlsafe=true; outputdef=SMCO_CR_ACT                                  |
| 163 | m4:item      | item=SMCO_NM_ACTION_TYPE; htmlsafe=true; outputdef=SMCO_CR_ACT                            |
| 186 | m4:endpage   |                                                                                           |

| L   | Operación | Argumentos literales                                                              |
| --- | --------- | --------------------------------------------------------------------------------- |
| 105 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_TYPE_FILTER",zfilter_type                |
| 106 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_JOB_FILTER",zfilter_job                  |
| 107 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_PLAN_FILTER",zfilter_id_eval          |
| 108 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_DT_PLAN_FILTER",zfilter_dt_eval          |
| 109 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_EK_FILTER",zfilter_id_ek_filter       |
| 110 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_ID_LEVEL_FILTER",zfilter_id_level_filter |
| 111 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_DT_LEVEL_FILTER",zfilter_dt_level_filter |
| 130 | getCount  | znodo1,zsubsesion,znodo1                                                          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 39  | aplicar    | nreg       |
| 66  | sel_all    | nreg       |
| 74  | dessel_all | nreg       |

| L   | Condición / acción / mensaje literal                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((zidhr_param==null)&#124;&#124;(zidhr_param.equals(""))){zidhr_param = "";}                                             |
| 20  | if ((zorperiod==null)&#124;&#124;(zorperiod.equals(""))){zorperiod = "";}                                                   |
| 22  | if ((zfilter_type==null)&#124;&#124;(zfilter_type.equals(""))){zfilter_type = "1";}                                         |
| 24  | if ((zfilter_job==null)&#124;&#124;(zfilter_job.equals(""))){zfilter_job = "";}                                             |
| 27  | if ((zfilter_dt_eval==null)&#124;&#124;(zfilter_dt_eval.equals(""))){zfilter_dt_eval = "";}                                 |
| 29  | if ((zfilter_id_eval==null)&#124;&#124;(zfilter_id_eval.equals(""))){zfilter_id_eval = "";}                                 |
| 34  | if ((zfilter_id_ek_filter==null)&#124;&#124;(zfilter_id_ek_filter.equals(""))){zfilter_id_ek_filter = "";}                  |
| 35  | if ((zfilter_id_level_filter==null)&#124;&#124;(zfilter_id_level_filter.equals(""))){zfilter_id_level_filter = "";}         |
| 36  | if ((zfilter_dt_level_filter==null)&#124;&#124;(zfilter_dt_level_filter.equals(""))){zfilter_dt_level_filter = "";}         |
| 46  | if (vobjeto.checked==true){                                                                                                 |
| 52  | if ( error==1){                                                                                                             |
| 56  | alert(texto);                                                                                                               |
| 57  | }else{                                                                                                                      |
| 140 | &lt;% if (zcounti &gt; 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %&gt;                |
| 152 | &lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                                     |
| 156 | &lt;%if (zSRCO_TYPE.equals("1")){%&gt;                                                                                      |
| 158 | &lt;%}else{%&gt;                                                                                                            |
| 174 | &lt;%}else{%&gt;                                                                                                            |
| 90  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                  |
| 91  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                |
| 94  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                        |
| 95  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                          |
| 96  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";     |
| 97  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_EMPLOYEE_DATA.SMCO_LOAD_ACTIONS"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp      |
| 13  | /mss_g3/smco_dev_plan_trans.jsp              |

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 8   | /css/estilo_mss.css                                                |
| 9   | /libreria/funciones_sse.js                                         |
| 10  | /libreria/clase_val_entradas.js                                    |
| 141 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_act.jsp |
| 157 | /iconos/icono_seleccionar_11_12.gif                                |
| 169 | javascript:sel_all(                                                |
| 169 | /iconos/icono_aceptar_todas_36_36.gif                              |
| 170 | javascript:dessel_all(                                             |
| 170 | /iconos/icono_cancelar_todas_mss_36_36.gif                         |
| 171 | javascript:aplicar(                                                |
| 171 | /iconos/icono_enviar_ess_36_36.gif                                 |
| 172 | javascript:window.close();                                         |
| 172 | /iconos/entrar_blanco.gif                                          |
| 180 | javascript:window.close();                                         |
| 180 | /iconos/entrar_blanco.gif                                          |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                       |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                            |
| 13  | /mss_g3/smco_dev_plan_trans.jsp                                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_g3/smco_dev_plan_trans.jsp                                    | contextual | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |
| BASE   | 9   | /libreria/funciones_sse.js                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 10  | /libreria/clase_val_entradas.js                                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 141 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_act.jsp | ausente    | P06                                                                                                           |
| BASE   | 169 | javascript:sel_all(                                                | dinámica   | P06                                                                                                           |
| BASE   | 170 | javascript:dessel_all(                                             | dinámica   | P06                                                                                                           |
| BASE   | 171 | javascript:aplicar(                                                | dinámica   | P06                                                                                                           |
| BASE   | 172 | javascript:window.close();                                         | dinámica   | P06                                                                                                           |
| BASE   | 180 | javascript:window.close();                                         | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_g3/smco_dev_plan_trans.jsp                                    | contextual | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
