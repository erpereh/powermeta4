# mss_set_wunit_resp

Identificador: `mss_generico/mss_set_wunit_resp.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp.jsp) | `ed18543eddc7e9f77f0b6fd1ca36ed8d18a50d36feed657f62c1c8e2aa6b363f` |    434 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mss_set_wunit_resp.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mss_set_wunit_resp.jsp) | `ed18543eddc7e9f77f0b6fd1ca36ed8d18a50d36feed657f62c1c8e2aa6b363f` |    434 |
| BASE / español    | [mss_generico/espanol/mss_set_wunit_resp.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_set_wunit_resp.jsp)                             | `75ccc39a87521550866748c006ecec101c819902520db0321b20c212009d3167` |    434 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mss_set_wunit_resp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 273 | [valor dinámico] [valor dinámico] |
| 289 | [valor dinámico] "&gt; '&gt; -    |
| 370 | "/&gt;                            |
| 375 | "/&gt;                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 272 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_configuracion_98_125.gif; width=100; height=100                                                                                                                                                                      |
| 279 | form    | name=load_with_filter; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01; method=get; enctype=application/x-www-form-urlencoded                                                                                                             |
| 280 | input   | name=tp_for_filter; type=hidden; value=                                                                                                                                                                                                                                   |
| 283 | form    | name=select_tp_resp; action=; method=post; enctype=application/x-www-form-urlencoded                                                                                                                                                                                      |
| 290 | select  | id=TP_RESP_FILTER; class=fuenteformulario200; name=TP_RESP_FILTER; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                     |
| 292 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT                                                                                                                                                                                                               |
| 294 | option  | value='&lt;m4:item; item=SCO_ID_TYPE_RESP; htmlsafe=true; outputdef=TP_RESPONSABLE                                                                                                                                                                                        |
| 301 | a       | style=cursor:hand; href=javascript:comprobar_filtro();; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                |
| 302 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ok.gif                                                                                                                                                                                  |
| 310 | form    | name=sel_rev_2; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                                                                         |
| 312 | input   | name=FILTER; type=hidden                                                                                                                                                                                                                                                  |
| 313 | input   | name=tp_for_filter; value=&lt;%=idx_tp_filter%&gt;; type=hidden                                                                                                                                                                                                           |
| 316 | form    | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                                                                            |
| 318 | input   | name=FILTER; type=hidden                                                                                                                                                                                                                                                  |
| 357 | a       | href=javascript:view_employees('&lt;%=sIdWU%&gt;','&lt;%=wu_num_employees%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                     |
| 359 | a       | href=javascript:view_details('&lt;%=sIdWU%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                     |
| 362 | a       | href=javascript:checkr('&lt;%=work_unit%&gt;','&lt;%=idx_tp_filter%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                            |
| 363 | img     | src=/iconos/flecha.gif; width=11; height=9; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                |
| 366 | a       | href=javascript:ucheckr('&lt;%=work_unit%&gt;','&lt;%=idx_tp_filter%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                           |
| 367 | img     | src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                 |
| 371 | input   | title=JSP_EXPR_Mss_cr.getProperty(; onclick=javascript:m4selec_empleados_count(&lt;%=icount%&gt;); checked=true; name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; m4encidwu=&lt;%=sIdWU%&gt;; type=checkbox; value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT |
| 376 | input   | title=JSP_EXPR_Mss_cr.getProperty(; onclick=javascript:m4selec_empleados_count(&lt;%=icount%&gt;); name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; m4encidwu=&lt;%=sIdWU%&gt;; type=checkbox; value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT               |
| 398 | a       | href=javascript:marcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                      |
| 398 | img     | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                            |
| 399 | a       | href=javascript:desmarcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                   |
| 399 | img     | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                             |
| 406 | a       | id=ppe; href=javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                |
| 406 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                       |
| 411 | a       | href=javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                         |
| 411 | img     | src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 14  | estado          | getParameter(request,"estado")        |
| 16  | zinicios        | getParameter(request,"zinicios")      |
| 19  | tp_for_filter   | getParameter(request,"tp_for_filter") |

| L   | Variable      | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 14  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  |
| 16  | zinicios      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                |
| 19  | idx_tp_filter | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter")                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter")                           |
| 27  | zsubsesion    | "SSM_SET_WORK_UNIT_TO_SEE"                                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                            |
| 28  | zmeta4object  | "SSM_SET_WORK_UNIT_TO_SEE"                                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                            |
| 29  | zmetodocarga  | zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS"                                        | SSM_SET_WORK_UNIT_TO_SEE{"!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS"}                           |
| 30  | zestado       | "01"                                                                                                | 01                                                                                                  |
| 258 | icount        | 0                                                                                                   | 0                                                                                                   |
| 259 | icount_1      | 0                                                                                                   | 0                                                                                                   |
| 346 | sIdWU         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", work_unit) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", work_unit) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                 |
| --- | ------------- | -------------------------------------------------------------------------------------------------- |
| 239 | m4:startpage  | m4task=SSM_SET_WORK_UNIT_TO_SEE                                                                    |
| 239 | m4:beginjob   |                                                                                                    |
| 240 | m4:datadef    | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                      |
| 243 | m4:exec       | node=SSM_SET_WORK_UNIT_TO_SEE; method=SSM_LOAD_WORK_UNITS; m4object=SSM_SET_WORK_UNIT_TO_SEE       |
| 244 | m4:param      | name=ARG_TP_RESPONSABLE; value=(idx_tp_filter)                                                     |
| 248 | m4:outputdef  | node=SSM_RSC_APPUSER_WU; m4alias=WORK_UNIT; m4object=SSM_SET_WORK_UNIT_TO_SEE                      |
| 249 | m4:outputdef  | node=SSM_LOAD_TP_RESPONSABLES; m4alias=TP_RESPONSABLE; m4object=SSM_SET_WORK_UNIT_TO_SEE           |
| 250 | m4:exec       | node=SSM_RSC_APPUSER_WU; alias=wu_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE           |
| 251 | m4:exec       | node=SSM_LOAD_TP_RESPONSABLES; alias=tp_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE     |
| 253 | m4:endjob     |                                                                                                    |
| 260 | m4:outputexec | var=count; alias=wu_count                                                                          |
| 261 | m4:outputexec | var=count_1; alias=tp_count                                                                        |
| 273 | m4:item       | item=SSM_TP_RESPONSABLE_NAME; htmlsafe=true; outputdef=WORK_UNIT                                   |
| 292 | m4:item       | item=SSM_TP_RESPONSABLE_NAME; htmlsafe=true; outputdef=WORK_UNIT                                   |
| 293 | m4:dataloop   | outputdef=TP_RESPONSABLE                                                                           |
| 294 | m4:item       | item=SCO_ID_TYPE_RESP; htmlsafe=true; outputdef=TP_RESPONSABLE                                     |
| 294 | m4:item       | item=SCO_N_TYPE_RES; htmlsafe=true; outputdef=TP_RESPONSABLE                                       |
| 334 | m4:item       | m4varname=num_employees; item=SSM_COUNT_OF_EMPLOYEES; htmlsafe=true; outputdef=WORK_UNIT           |
| 336 | m4:dataloop   | outputdef=WORK_UNIT                                                                                |
| 339 | m4:item       | m4varname=work_unit; item=STD_ID_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                     |
| 340 | m4:item       | m4varname=wu_num_employees; item=SSM_COUNT_OF_EMPLOYEES_4_EACH; htmlsafe=true; outputdef=WORK_UNIT |
| 341 | m4:item       | m4varname=work_unit_name; item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                 |
| 342 | m4:item       | m4varname=visible; item=SCO_MSS_VISIBILITY; htmlsafe=true; outputdef=WORK_UNIT                     |
| 349 | m4:current    | var=current; outputdef=WORK_UNIT                                                                   |
| 357 | m4:item       | item=STD_ID_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                                          |
| 359 | m4:item       | item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                                           |
| 391 | m4:item       | item=SSM_COUNT_OF_EMPLOYEES; htmlsafe=true; outputdef=WORK_UNIT                                    |
| 433 | m4:endpage    |                                                                                                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                 | Argumentos             |
| --- | ----------------------- | ---------------------- |
| 35  | m4selec_empleados       | num_reg,num_tot_empl   |
| 72  | m4selec_empleados_count | num_reg                |
| 104 | desmarcar_todos         | num_reg                |
| 118 | marcar_todos            | num_reg                |
| 130 | view_details            | work_u                 |
| 141 | set_work_unit           | registro               |
| 153 | view_employees          | work_u,employee_number |
| 167 | view_all_employees      | num_reg,num_tot_empl   |
| 205 | comprobar_filtro        |                        |
| 224 | checkr                  | work_u,employee_number |
| 230 | ucheckr                 | work_u,employee_number |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                                                                                               |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                                                                                       |
| 38  | if (num_tot_empl == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 40  | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla126")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 44  | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 51  | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 59  | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 61  | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 75  | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 83  | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 91  | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 93  | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 107 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 121 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 124 | if(form.elements["SEL_" + i].disabled==false)                                                                                                                                                                                                                                                                                                                                                                 |
| 146 | if (form.elements["SEL_" + registro].checked==true)                                                                                                                                                                                                                                                                                                                                                           |
| 148 | else                                                                                                                                                                                                                                                                                                                                                                                                          |
| 155 | if (employee_number &gt;= 300)                                                                                                                                                                                                                                                                                                                                                                                |
| 157 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla123")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 169 | if (num_tot_empl &gt;= 300)                                                                                                                                                                                                                                                                                                                                                                                   |
| 171 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla123")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 175 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 182 | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 190 | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 192 | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 213 | if (selected_item != 0)                                                                                                                                                                                                                                                                                                                                                                                       |
| 320 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                                                                                                |
| 369 | &lt;% if(visible.equals("1")) { %&gt;                                                                                                                                                                                                                                                                                                                                                                         |
| 374 | &lt;% }else { %&gt;                                                                                                                                                                                                                                                                                                                                                                                           |
| 418 | if (num_employees==0)                                                                                                                                                                                                                                                                                                                                                                                         |
| 419 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla126")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 424 | }else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                   |
| 29  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS";                                                                                                                                                                                                                                                                                      |
| 53  | expresión de cálculo/transformación: text_filter = text_filter + form.elements["SEL_" + i].value + "&#124;&#124;";                                                                                                                                                                                                                                                                                            |
| 85  | expresión de cálculo/transformación: text_filter = text_filter + form.elements["SEL_" + i].value + "&#124;&#124;";                                                                                                                                                                                                                                                                                            |
| 134 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=" + work_u;                                                                                                                                                                                                                                                                                  |
| 136 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";                                                                                                                                                                                                                                                       |
| 161 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=" + work_u;                                                                                                                                                                                                                                                                                |
| 163 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";                                                                                                                                                                                                                                                       |
| 184 | expresión de cálculo/transformación: text_filter = text_filter + m4urlencode(form.elements["SEL_" + i].getAttribute('m4EncIdWU') )+ ".";                                                                                                                                                                                                                                                                      |
| 196 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees_noenlaces.jsp?wunits=" + text_filter;                                                                                                                                                                                                                                                         |
| 198 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";                                                                                                                                                                                                                                                       |
| 262 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                                                                                                                  |
| 263 | expresión de cálculo/transformación: &lt;% try { icount_1 = Integer.parseInt(count_1); } catch(Exception e) { icount_1 = 0; }%&gt;                                                                                                                                                                                                                                                                            |
| 294 | expresión de cálculo/transformación: &lt;option value='&lt;m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt;'&gt;&lt;m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt; - &lt;m4:item item="SCO_N_TYPE_RES" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt;&lt;/option&gt;                                                                         |
| 371 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad122")%&gt;" onclick="javascript:m4selec_empleados_count(&lt;%=icount%&gt;)" checked="true" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" m4EncIdWU='&lt;%=sIdWU%&gt;' type="checkbox" value="&lt;m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/&gt;"/&gt; |
| 376 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad122")%&gt;" onclick="javascript:m4selec_empleados_count(&lt;%=icount%&gt;)" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" m4EncIdWU='&lt;%=sIdWU%&gt;' type="checkbox" value="&lt;m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/&gt;"/&gt;                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/mss_cr_trans.jsp                   |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                    |
| --- | ------------------------------------------------------------------------------------ |
| 9   | /css/estilo_mss.css                                                                  |
| 10  | /libreria/funciones_sse.js                                                           |
| 272 | /iconos/noname_configuracion_98_125.gif                                              |
| 279 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01             |
| 301 | javascript:comprobar_filtro();                                                       |
| 302 | /iconos/ok.gif                                                                       |
| 310 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?                   |
| 316 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?                    |
| 357 | javascript:view_employees(                                                           |
| 359 | javascript:view_details(                                                             |
| 362 | javascript:checkr(                                                                   |
| 363 | /iconos/flecha.gif                                                                   |
| 366 | javascript:ucheckr(                                                                  |
| 367 | /iconos/flecha_azul2_ess_11_9.gif                                                    |
| 398 | javascript:marcar_todos(&lt;%=icount%&gt;);                                          |
| 398 | /iconos/icono_aceptar_todas_36_36.gif                                                |
| 399 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                                       |
| 399 | /iconos/icono_deshacer_mss_36_36.gif                                                 |
| 406 | javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)            |
| 406 | /iconos/ic_lis_36_36_2.gif                                                           |
| 411 | javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)             |
| 411 | /iconos/icono_aceptar_mss_36_36.gif                                                  |
| 7   | ../../mss_generico/mss_cr_trans.jsp                                                  |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                              |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   |
| 24  | ../../sse_generico/espanol/generico_links.jsp                                        |
| 134 | /servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=                     |
| 161 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=                   |
| 196 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees_noenlaces.jsp?wunits= |
| 228 | mss_generico/mss_set_wunit_resp_p2.jsp                                               |
| 234 | mss_generico/mss_set_wunit_resp_p3.jsp                                               |
| 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [mss_generico/espanol/mss_set_wunit_resp.jsp](../../../../clon_portal/portal/mss_generico/espanol/mss_set_wunit_resp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 273 | [valor dinámico] [valor dinámico] |
| 289 | [valor dinámico] "&gt; '&gt; -    |
| 370 | "/&gt;                            |
| 375 | "/&gt;                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 272 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_configuracion_98_125.gif; width=100; height=100                                                                                                                                                                      |
| 279 | form    | name=load_with_filter; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01; method=get; enctype=application/x-www-form-urlencoded                                                                                                             |
| 280 | input   | name=tp_for_filter; type=hidden; value=                                                                                                                                                                                                                                   |
| 283 | form    | name=select_tp_resp; action=; method=post; enctype=application/x-www-form-urlencoded                                                                                                                                                                                      |
| 290 | select  | id=TP_RESP_FILTER; class=fuenteformulario200; name=TP_RESP_FILTER; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                     |
| 292 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT                                                                                                                                                                                                               |
| 294 | option  | value='&lt;m4:item; item=SCO_ID_TYPE_RESP; htmlsafe=true; outputdef=TP_RESPONSABLE                                                                                                                                                                                        |
| 301 | a       | style=cursor:hand; href=javascript:comprobar_filtro();; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                |
| 302 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ok.gif                                                                                                                                                                                  |
| 310 | form    | name=sel_rev_2; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                                                                         |
| 312 | input   | name=FILTER; type=hidden                                                                                                                                                                                                                                                  |
| 313 | input   | name=tp_for_filter; value=&lt;%=idx_tp_filter%&gt;; type=hidden                                                                                                                                                                                                           |
| 316 | form    | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                                                                            |
| 318 | input   | name=FILTER; type=hidden                                                                                                                                                                                                                                                  |
| 357 | a       | href=javascript:view_employees('&lt;%=sIdWU%&gt;','&lt;%=wu_num_employees%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                     |
| 359 | a       | href=javascript:view_details('&lt;%=sIdWU%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                     |
| 362 | a       | href=javascript:checkr('&lt;%=work_unit%&gt;','&lt;%=idx_tp_filter%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                            |
| 363 | img     | src=/iconos/flecha.gif; width=11; height=9; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                |
| 366 | a       | href=javascript:ucheckr('&lt;%=work_unit%&gt;','&lt;%=idx_tp_filter%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                           |
| 367 | img     | src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                 |
| 371 | input   | title=JSP_EXPR_Mss_cr.getProperty(; onclick=javascript:m4selec_empleados_count(&lt;%=icount%&gt;); checked=true; name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; m4encidwu=&lt;%=sIdWU%&gt;; type=checkbox; value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT |
| 376 | input   | title=JSP_EXPR_Mss_cr.getProperty(; onclick=javascript:m4selec_empleados_count(&lt;%=icount%&gt;); name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; m4encidwu=&lt;%=sIdWU%&gt;; type=checkbox; value=&lt;m4:item item=; htmlsafe=true; outputdef=WORK_UNIT               |
| 398 | a       | href=javascript:marcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                      |
| 398 | img     | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                            |
| 399 | a       | href=javascript:desmarcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                                                   |
| 399 | img     | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                             |
| 406 | a       | id=ppe; href=javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                |
| 406 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                       |
| 411 | a       | href=javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                                         |
| 411 | img     | src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 14  | estado          | getParameter(request,"estado")        |
| 16  | zinicios        | getParameter(request,"zinicios")      |
| 19  | tp_for_filter   | getParameter(request,"tp_for_filter") |

| L   | Variable      | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 14  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  |
| 16  | zinicios      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                |
| 19  | idx_tp_filter | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter")                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tp_for_filter")                           |
| 27  | zsubsesion    | "SSM_SET_WORK_UNIT_TO_SEE"                                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                            |
| 28  | zmeta4object  | "SSM_SET_WORK_UNIT_TO_SEE"                                                                          | SSM_SET_WORK_UNIT_TO_SEE                                                                            |
| 29  | zmetodocarga  | zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS"                                        | SSM_SET_WORK_UNIT_TO_SEE{"!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS"}                           |
| 30  | zestado       | "01"                                                                                                | 01                                                                                                  |
| 258 | icount        | 0                                                                                                   | 0                                                                                                   |
| 259 | icount_1      | 0                                                                                                   | 0                                                                                                   |
| 346 | sIdWU         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", work_unit) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", work_unit) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                 |
| --- | ------------- | -------------------------------------------------------------------------------------------------- |
| 239 | m4:startpage  | m4task=SSM_SET_WORK_UNIT_TO_SEE                                                                    |
| 239 | m4:beginjob   |                                                                                                    |
| 240 | m4:datadef    | m4o=SSM_SET_WORK_UNIT_TO_SEE; m4name=SSM_SET_WORK_UNIT_TO_SEE                                      |
| 243 | m4:exec       | node=SSM_SET_WORK_UNIT_TO_SEE; method=SSM_LOAD_WORK_UNITS; m4object=SSM_SET_WORK_UNIT_TO_SEE       |
| 244 | m4:param      | name=ARG_TP_RESPONSABLE; value=(idx_tp_filter)                                                     |
| 248 | m4:outputdef  | node=SSM_RSC_APPUSER_WU; m4alias=WORK_UNIT; m4object=SSM_SET_WORK_UNIT_TO_SEE                      |
| 249 | m4:outputdef  | node=SSM_LOAD_TP_RESPONSABLES; m4alias=TP_RESPONSABLE; m4object=SSM_SET_WORK_UNIT_TO_SEE           |
| 250 | m4:exec       | node=SSM_RSC_APPUSER_WU; alias=wu_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE           |
| 251 | m4:exec       | node=SSM_LOAD_TP_RESPONSABLES; alias=tp_count; method=Count; m4object=SSM_SET_WORK_UNIT_TO_SEE     |
| 253 | m4:endjob     |                                                                                                    |
| 260 | m4:outputexec | var=count; alias=wu_count                                                                          |
| 261 | m4:outputexec | var=count_1; alias=tp_count                                                                        |
| 273 | m4:item       | item=SSM_TP_RESPONSABLE_NAME; htmlsafe=true; outputdef=WORK_UNIT                                   |
| 292 | m4:item       | item=SSM_TP_RESPONSABLE_NAME; htmlsafe=true; outputdef=WORK_UNIT                                   |
| 293 | m4:dataloop   | outputdef=TP_RESPONSABLE                                                                           |
| 294 | m4:item       | item=SCO_ID_TYPE_RESP; htmlsafe=true; outputdef=TP_RESPONSABLE                                     |
| 294 | m4:item       | item=SCO_N_TYPE_RES; htmlsafe=true; outputdef=TP_RESPONSABLE                                       |
| 334 | m4:item       | m4varname=num_employees; item=SSM_COUNT_OF_EMPLOYEES; htmlsafe=true; outputdef=WORK_UNIT           |
| 336 | m4:dataloop   | outputdef=WORK_UNIT                                                                                |
| 339 | m4:item       | m4varname=work_unit; item=STD_ID_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                     |
| 340 | m4:item       | m4varname=wu_num_employees; item=SSM_COUNT_OF_EMPLOYEES_4_EACH; htmlsafe=true; outputdef=WORK_UNIT |
| 341 | m4:item       | m4varname=work_unit_name; item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                 |
| 342 | m4:item       | m4varname=visible; item=SCO_MSS_VISIBILITY; htmlsafe=true; outputdef=WORK_UNIT                     |
| 349 | m4:current    | var=current; outputdef=WORK_UNIT                                                                   |
| 357 | m4:item       | item=STD_ID_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                                          |
| 359 | m4:item       | item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=WORK_UNIT                                           |
| 391 | m4:item       | item=SSM_COUNT_OF_EMPLOYEES; htmlsafe=true; outputdef=WORK_UNIT                                    |
| 433 | m4:endpage    |                                                                                                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                 | Argumentos             |
| --- | ----------------------- | ---------------------- |
| 35  | m4selec_empleados       | num_reg,num_tot_empl   |
| 72  | m4selec_empleados_count | num_reg                |
| 104 | desmarcar_todos         | num_reg                |
| 118 | marcar_todos            | num_reg                |
| 130 | view_details            | work_u                 |
| 141 | set_work_unit           | registro               |
| 153 | view_employees          | work_u,employee_number |
| 167 | view_all_employees      | num_reg,num_tot_empl   |
| 205 | comprobar_filtro        |                        |
| 224 | checkr                  | work_u,employee_number |
| 230 | ucheckr                 | work_u,employee_number |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                                                                                               |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                                                                                       |
| 38  | if (num_tot_empl == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 40  | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla126")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 44  | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 51  | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 59  | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 61  | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 75  | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 83  | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 91  | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 93  | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 107 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 121 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 124 | if(form.elements["SEL_" + i].disabled==false)                                                                                                                                                                                                                                                                                                                                                                 |
| 146 | if (form.elements["SEL_" + registro].checked==true)                                                                                                                                                                                                                                                                                                                                                           |
| 148 | else                                                                                                                                                                                                                                                                                                                                                                                                          |
| 155 | if (employee_number &gt;= 300)                                                                                                                                                                                                                                                                                                                                                                                |
| 157 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla123")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 169 | if (num_tot_empl &gt;= 300)                                                                                                                                                                                                                                                                                                                                                                                   |
| 171 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla123")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 175 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                                                                                                           |
| 182 | if (form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                                                                                                                  |
| 190 | if (seleccionado == 0)                                                                                                                                                                                                                                                                                                                                                                                        |
| 192 | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad42")%&gt;");                                                                                                                                                                                                                                                                                                                                          |
| 213 | if (selected_item != 0)                                                                                                                                                                                                                                                                                                                                                                                       |
| 320 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                                                                                                |
| 369 | &lt;% if(visible.equals("1")) { %&gt;                                                                                                                                                                                                                                                                                                                                                                         |
| 374 | &lt;% }else { %&gt;                                                                                                                                                                                                                                                                                                                                                                                           |
| 418 | if (num_employees==0)                                                                                                                                                                                                                                                                                                                                                                                         |
| 419 | alert("&lt;%=Mss_cr.getProperty("msscr.Tabla126")%&gt;");                                                                                                                                                                                                                                                                                                                                                     |
| 424 | }else{%&gt;                                                                                                                                                                                                                                                                                                                                                                                                   |
| 29  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_SET_WORK_UNIT_TO_SEE.SSM_LOAD_WORK_UNITS";                                                                                                                                                                                                                                                                                      |
| 53  | expresión de cálculo/transformación: text_filter = text_filter + form.elements["SEL_" + i].value + "&#124;&#124;";                                                                                                                                                                                                                                                                                            |
| 85  | expresión de cálculo/transformación: text_filter = text_filter + form.elements["SEL_" + i].value + "&#124;&#124;";                                                                                                                                                                                                                                                                                            |
| 134 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=" + work_u;                                                                                                                                                                                                                                                                                  |
| 136 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";                                                                                                                                                                                                                                                       |
| 161 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=" + work_u;                                                                                                                                                                                                                                                                                |
| 163 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";                                                                                                                                                                                                                                                       |
| 184 | expresión de cálculo/transformación: text_filter = text_filter + m4urlencode(form.elements["SEL_" + i].getAttribute('m4EncIdWU') )+ ".";                                                                                                                                                                                                                                                                      |
| 196 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?wunits=" + text_filter;                                                                                                                                                                                                                                                                   |
| 198 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=900,height=550";                                                                                                                                                                                                                                                       |
| 262 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                                                                                                                  |
| 263 | expresión de cálculo/transformación: &lt;% try { icount_1 = Integer.parseInt(count_1); } catch(Exception e) { icount_1 = 0; }%&gt;                                                                                                                                                                                                                                                                            |
| 294 | expresión de cálculo/transformación: &lt;option value='&lt;m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt;'&gt;&lt;m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt; - &lt;m4:item item="SCO_N_TYPE_RES" htmlsafe="true" outputdef="TP_RESPONSABLE"/&gt;&lt;/option&gt;                                                                         |
| 371 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad122")%&gt;" onclick="javascript:m4selec_empleados_count(&lt;%=icount%&gt;)" checked="true" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" m4EncIdWU='&lt;%=sIdWU%&gt;' type="checkbox" value="&lt;m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/&gt;"/&gt; |
| 376 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad122")%&gt;" onclick="javascript:m4selec_empleados_count(&lt;%=icount%&gt;)" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" m4EncIdWU='&lt;%=sIdWU%&gt;' type="checkbox" value="&lt;m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="WORK_UNIT"/&gt;"/&gt;                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/mss_cr_trans.jsp                   |
| 12  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                          |
| --- | -------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                        |
| 10  | /libreria/funciones_sse.js                                                 |
| 272 | /iconos/noname_configuracion_98_125.gif                                    |
| 279 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01   |
| 301 | javascript:comprobar_filtro();                                             |
| 302 | /iconos/ok.gif                                                             |
| 310 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?         |
| 316 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?          |
| 357 | javascript:view_employees(                                                 |
| 359 | javascript:view_details(                                                   |
| 362 | javascript:checkr(                                                         |
| 363 | /iconos/flecha.gif                                                         |
| 366 | javascript:ucheckr(                                                        |
| 367 | /iconos/flecha_azul2_ess_11_9.gif                                          |
| 398 | javascript:marcar_todos(&lt;%=icount%&gt;);                                |
| 398 | /iconos/icono_aceptar_todas_36_36.gif                                      |
| 399 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                             |
| 399 | /iconos/icono_deshacer_mss_36_36.gif                                       |
| 406 | javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)  |
| 406 | /iconos/ic_lis_36_36_2.gif                                                 |
| 411 | javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)   |
| 411 | /iconos/icono_aceptar_mss_36_36.gif                                        |
| 7   | ../../mss_generico/mss_cr_trans.jsp                                        |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                                    |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                         |
| 24  | ../../sse_generico/espanol/generico_links.jsp                              |
| 134 | /servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=           |
| 161 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=         |
| 196 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?wunits= |
| 228 | mss_generico/mss_set_wunit_resp_p2.jsp                                     |
| 234 | mss_generico/mss_set_wunit_resp_p3.jsp                                     |
| 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                           | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| COLL   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| COLL   | 10  | /libreria/funciones_sse.js                                                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 279 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01             | ausente    | P06                                                                                                                                                                            |
| COLL   | 301 | javascript:comprobar_filtro();                                                       | dinámica   | P06                                                                                                                                                                            |
| COLL   | 310 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?                   | ausente    | P06                                                                                                                                                                            |
| COLL   | 316 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?                    | ausente    | P06                                                                                                                                                                            |
| COLL   | 357 | javascript:view_employees(                                                           | dinámica   | P06                                                                                                                                                                            |
| COLL   | 359 | javascript:view_details(                                                             | dinámica   | P06                                                                                                                                                                            |
| COLL   | 362 | javascript:checkr(                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 366 | javascript:ucheckr(                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 398 | javascript:marcar_todos(&lt;%=icount%&gt;);                                          | dinámica   | P06                                                                                                                                                                            |
| COLL   | 399 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                                       | dinámica   | P06                                                                                                                                                                            |
| COLL   | 406 | javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)            | dinámica   | P06                                                                                                                                                                            |
| COLL   | 411 | javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)             | dinámica   | P06                                                                                                                                                                            |
| COLL   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| COLL   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| COLL   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 134 | /servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=                     | ausente    | P06                                                                                                                                                                            |
| COLL   | 161 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=                   | ausente    | P06                                                                                                                                                                            |
| COLL   | 196 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees_noenlaces.jsp?wunits= | ausente    | P06                                                                                                                                                                            |
| COLL   | 228 | mss_generico/mss_set_wunit_resp_p2.jsp                                               | ausente    | P06                                                                                                                                                                            |
| COLL   | 234 | mss_generico/mss_set_wunit_resp_p3.jsp                                               | ausente    | P06                                                                                                                                                                            |
| COLL   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| IBER   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| IBER   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| IBER   | 10  | /libreria/funciones_sse.js                                                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 279 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01             | ausente    | P06                                                                                                                                                                            |
| IBER   | 301 | javascript:comprobar_filtro();                                                       | dinámica   | P06                                                                                                                                                                            |
| IBER   | 310 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?                   | ausente    | P06                                                                                                                                                                            |
| IBER   | 316 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?                    | ausente    | P06                                                                                                                                                                            |
| IBER   | 357 | javascript:view_employees(                                                           | dinámica   | P06                                                                                                                                                                            |
| IBER   | 359 | javascript:view_details(                                                             | dinámica   | P06                                                                                                                                                                            |
| IBER   | 362 | javascript:checkr(                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 366 | javascript:ucheckr(                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 398 | javascript:marcar_todos(&lt;%=icount%&gt;);                                          | dinámica   | P06                                                                                                                                                                            |
| IBER   | 399 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                                       | dinámica   | P06                                                                                                                                                                            |
| IBER   | 406 | javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)            | dinámica   | P06                                                                                                                                                                            |
| IBER   | 411 | javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)             | dinámica   | P06                                                                                                                                                                            |
| IBER   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| IBER   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| IBER   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 134 | /servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=                     | ausente    | P06                                                                                                                                                                            |
| IBER   | 161 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=                   | ausente    | P06                                                                                                                                                                            |
| IBER   | 196 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees_noenlaces.jsp?wunits= | ausente    | P06                                                                                                                                                                            |
| IBER   | 228 | mss_generico/mss_set_wunit_resp_p2.jsp                                               | ausente    | P06                                                                                                                                                                            |
| IBER   | 234 | mss_generico/mss_set_wunit_resp_p3.jsp                                               | ausente    | P06                                                                                                                                                                            |
| IBER   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |
| BASE   | 10  | /libreria/funciones_sse.js                                                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 279 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp.jsp?estado=01             | ausente    | P06                                                                                                                                                                            |
| BASE   | 301 | javascript:comprobar_filtro();                                                       | dinámica   | P06                                                                                                                                                                            |
| BASE   | 310 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p4.jsp?                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 316 | /servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p.jsp?                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 357 | javascript:view_employees(                                                           | dinámica   | P06                                                                                                                                                                            |
| BASE   | 359 | javascript:view_details(                                                             | dinámica   | P06                                                                                                                                                                            |
| BASE   | 362 | javascript:checkr(                                                                   | dinámica   | P06                                                                                                                                                                            |
| BASE   | 366 | javascript:ucheckr(                                                                  | dinámica   | P06                                                                                                                                                                            |
| BASE   | 398 | javascript:marcar_todos(&lt;%=icount%&gt;);                                          | dinámica   | P06                                                                                                                                                                            |
| BASE   | 399 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                                       | dinámica   | P06                                                                                                                                                                            |
| BASE   | 406 | javascript:view_all_employees(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)            | dinámica   | P06                                                                                                                                                                            |
| BASE   | 411 | javascript:m4selec_empleados(&lt;%=icount%&gt;,&lt;%=num_employees%&gt;)             | dinámica   | P06                                                                                                                                                                            |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                                                  | física     | [mss_generico/mss_cr_trans.jsp](mss_generico--mss_cr_trans.md)                                                                                                                 |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                                              | física     | [mss_generico/menu_mss.jsp](mss_generico--menu_mss.md)                                                                                                                         |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                   | física     | [mss_generico/mssgenerico_menusup.jsp](mss_generico--mssgenerico_menusup.md)                                                                                                   |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                                        | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 134 | /servlet/CheckSecurity/JSP/mss_generico/mss_wunit_detail.jsp?WU=                     | ausente    | P06                                                                                                                                                                            |
| BASE   | 161 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_employees.jsp?WU=                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 196 | /servlet/CheckSecurity/JSP/mss_generico/mss_list_all_employees.jsp?wunits=           | ausente    | P06                                                                                                                                                                            |
| BASE   | 228 | mss_generico/mss_set_wunit_resp_p2.jsp                                               | ausente    | P06                                                                                                                                                                            |
| BASE   | 234 | mss_generico/mss_set_wunit_resp_p3.jsp                                               | ausente    | P06                                                                                                                                                                            |
| BASE   | 431 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                | física     | [mss_generico/mssgenerico_disclaimer.jsp](mss_generico--mssgenerico_disclaimer.md)                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mss_set_wunit_resp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
