# mss_g2_p5

Identificador: `mss_g2/mss_g2_p5.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p5.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p5.jsp) | `1bada766390e7278716533f33fb73d491b64ff58e12086a5e02c2b908d71faca` |    313 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p5.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 163 | [valor dinámico] ( )     |
| 165 | [valor dinámico] ( )     |
| 167 | [valor dinámico] ( )     |
| 169 | [valor dinámico] ( )     |
| 173 | [valor dinámico] ( )     |
| 175 | [valor dinámico] ( )     |
| 187 | -                        |
| 235 | [valor dinámico] %       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                      |
| --- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 138 | a        | href=javascript:show_help(5); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                               |
| 138 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                |
| 142 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100                                                                                          |
| 147 | form     | name=redireccion; action=; method=post; enctype=application/x-www-form-urlencoded                                                                                                              |
| 149 | form     | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                |
| 150 | input    | name=FILTER; type=hidden                                                                                                                                                                       |
| 151 | input    | name=go_back_plan; type=hidden; value=&lt;%=zgo_back_plan%&gt;                                                                                                                                 |
| 189 | a        | href=javascript:show_details(&lt;%=(icurrent)%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                        |
| 215 | input    | title=JSP_EXPR_Mss_cr.getProperty(; name=&lt;%="SEL_"_+_(icurrent)%&gt;; id=JSP_EXPR_; type=checkbox                                                                                           |
| 218 | m4:input | name=&lt;%="ID_EMP_"_+_(icurrent)%&gt;; size=8; type=hidden; disabled=disabled                                                                                                                 |
| 219 | m4:input | name=&lt;%="ROLE_EMP_"_+_(icurrent)%&gt;; size=8; type=hidden; disabled=disabled                                                                                                               |
| 224 | input    | id=&lt;%="ACTIVATED_"_+_(icurrent)%&gt;; name=&lt;%="ACTIVATED_"_+_(icurrent)%&gt;; type=hidden; value=0                                                                                       |
| 291 | a        | href=javascript:marcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                           |
| 291 | img      | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 292 | a        | href=javascript:desmarcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                        |
| 292 | img      | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)  |
| 298 | a        | href=javascript:comprobar_accion('/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?');; title=JSP_EXPR_Mss_cr.getProperty(                                                                      |
| 298 | img      | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)            |
| 300 | a        | href=javascript:comprobar_accion('/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?');; title=JSP_EXPR_Mss_cr.getProperty(                                                                   |
| 300 | img      | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)            |
| 305 | a        | href=javascript:m4selec_empleados(&lt;%=icount%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                       |
| 305 | img      | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 13  | estado          | getParameter(request,"estado")       |
| 15  | zinicios        | getParameter(request,"zinicios")     |
| 16  | go_back_plan    | getParameter(request,"go_back_plan") |

| L   | Variable      | Expresión fuente                                                         | Resolución estática parcial                                                           |
| --- | ------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 13  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    |
| 15  | zinicios      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  |
| 16  | zgo_back_plan | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"go_back_plan") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"go_back_plan")              |
| 26  | zsubsesion    | "SSM_SALARY_REVIEW_PROCESS"                                              | SSM_SALARY_REVIEW_PROCESS                                                             |
| 27  | zmeta4object  | "SSM_SALARY_REVIEW_PROCESS"                                              | SSM_SALARY_REVIEW_PROCESS                                                             |
| 28  | zmetodocarga  | zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS"  | SSM_SALARY_REVIEW_PROCESS{"!SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS"} |
| 29  | zmetodo_set   | zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT"               | SSM_SALARY_REVIEW_PROCESS{"!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT"}              |
| 30  | znodo         | "SSM_EMPLOYEES_INFORMATION"                                              | SSM_EMPLOYEES_INFORMATION                                                             |
| 32  | zestado       | "21"                                                                     | 21                                                                                    |
| 153 | icount        | 0                                                                        | 0                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                  |
| --- | ------------- | --------------------------------------------------------------------------------------------------- |
| 129 | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                    |
| 129 | m4:beginjob   |                                                                                                     |
| 130 | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                     |
| 131 | m4:outputdef  | node=SSM_SAL_REVIEW_EMPL_RESUMEN; m4alias=TOTALES; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 132 | m4:exec       | node=SSM_SAL_REVIEW_EMPL_RESUMEN; alias=emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 133 | m4:endjob     |                                                                                                     |
| 154 | m4:outputexec | var=count; alias=emp_count                                                                          |
| 163 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 165 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 167 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 169 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 173 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 175 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=TOTALES                                         |
| 180 | m4:dataloop   | outputdef=TOTALES                                                                                   |
| 183 | m4:current    | var=icurrent; outputdef=TOTALES                                                                     |
| 185 | m4:item       | m4varname=FULL_TIME; item=EMPLOYEE_PARTIAL_TIME; htmlsafe=true; outputdef=TOTALES                   |
| 191 | m4:item       | item=HR_ID; htmlsafe=true; outputdef=TOTALES                                                        |
| 192 | m4:item       | item=HR_NAME; htmlsafe=true; outputdef=TOTALES                                                      |
| 194 | m4:item       | item=EMPLOYEE_PERFORMANCE; htmlsafe=true; outputdef=TOTALES                                         |
| 197 | m4:item       | item=BASE_MANAGER_CASH; htmlsafe=true; outputdef=TOTALES                                            |
| 200 | m4:item       | item=BASE_MANAGER_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                       |
| 203 | m4:item       | item=VARIABLE_MANAGER_CASH; htmlsafe=true; outputdef=TOTALES                                        |
| 206 | m4:item       | item=VARIABLE_MANAGER_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                   |
| 209 | m4:item       | item=TOTAL_MANAGER_CASH; htmlsafe=true; outputdef=TOTALES                                           |
| 212 | m4:item       | item=TOTAL_MANAGER_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                      |
| 218 | m4:item       | item=HR_ID; htmlsafe=true; outputdef=TOTALES                                                        |
| 219 | m4:item       | item=HR_ROLE_OR; htmlsafe=true; outputdef=TOTALES                                                   |
| 232 | m4:item       | item=HR_ID; htmlsafe=true; outputdef=TOTALES                                                        |
| 233 | m4:item       | item=HR_NAME; htmlsafe=true; outputdef=TOTALES                                                      |
| 235 | m4:item       | item=EMPLOYEE_PART_TIME_PERCENTAGE; htmlsafe=true; outputdef=TOTALES                                |
| 245 | m4:item       | item=BASE_GUIDELINE_CASH; htmlsafe=true; outputdef=TOTALES                                          |
| 247 | m4:item       | item=BASE_GUIDELINE_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                     |
| 258 | m4:item       | item=VARIABLE_GUIDELINE_CASH; htmlsafe=true; outputdef=TOTALES                                      |
| 262 | m4:item       | item=VARIABLE_GUIDELINE_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                 |
| 271 | m4:item       | item=TOTAL_GUIDELINE_CASH; htmlsafe=true; outputdef=TOTALES                                         |
| 275 | m4:item       | item=TOTAL_GUIDELINE_CASH_REAL; htmlsafe=true; outputdef=TOTALES                                    |
| 313 | m4:endpage    |                                                                                                     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos |
| --- | ----------------- | ---------- |
| 39  | show_details      | this_id    |
| 59  | desmarcar_todos   | num_reg    |
| 67  | marcar_todos      | num_reg    |
| 78  | comprobar_accion  | vaction    |
| 88  | m4selec_empleados | num_reg    |
| 120 | show_help         | cod_help   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                  |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                          |
| 19  | if ((zgo_back_plan==null)&#124;&#124;(zgo_back_plan.equals(""))){zgo_back_plan = "0";}                                                                                                                                                           |
| 45  | if (is_display=="0")                                                                                                                                                                                                                             |
| 50  | else                                                                                                                                                                                                                                             |
| 62  | if (num_reg &gt; 0)                                                                                                                                                                                                                              |
| 70  | if (num_reg &gt; 0)                                                                                                                                                                                                                              |
| 73  | if(form.elements["SEL_" + i].disabled==false)                                                                                                                                                                                                    |
| 81  | if (confirm("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad")%&gt;")) {                                                                                                                                                                       |
| 90  | if (num_reg &gt; 0)                                                                                                                                                                                                                              |
| 98  | if (form.elements["SEL_" + i].checked==false)                                                                                                                                                                                                    |
| 100 | else                                                                                                                                                                                                                                             |
| 104 | if (seleccionado == 0)                                                                                                                                                                                                                           |
| 109 | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Texto6-14")%&gt;");                                                                                                                                                                                |
| 112 | else                                                                                                                                                                                                                                             |
| 157 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                   |
| 297 | &lt;% if (zgo_back_plan == "0") { //Go back to employee list%&gt;                                                                                                                                                                                |
| 299 | &lt;%} else { //Go back to compensation plan list%&gt;                                                                                                                                                                                           |
| 28  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SALARY_REVIEW_MAIN_PROCESS";                                                                                                              |
| 29  | expresión de cálculo/transformación: String zmetodo_set = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT";                                                                                                                            |
| 41  | expresión de cálculo/transformación: element = "DETAILS_" + this_id                                                                                                                                                                              |
| 42  | expresión de cálculo/transformación: control_element = "ACTIVATED_" + this_id                                                                                                                                                                    |
| 99  | expresión de cálculo/transformación: text_filter = text_filter + form.elements["ID_EMP_" + i].value + "&#124;&#124;" + form.elements["ROLE_EMP_" + i].value + ";";                                                                               |
| 122 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                                                                                                          |
| 123 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=1000";                                                                                        |
| 155 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                     |
| 191 | expresión de cálculo/transformación: &lt;m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/&gt; -                                                                                                                                         |
| 215 | expresión de cálculo/transformación: &lt;td class="fuentevalor3"&gt;&lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad25")%&gt;" name='&lt;%= "SEL_" + (icurrent)%&gt;'                                                                 |
| 216 | expresión de cálculo/transformación: id="&lt;%= "SEL_" + (icurrent)%&gt;" type="checkbox"/&gt;                                                                                                                                                   |
| 218 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "ID_EMP_" + (icurrent)%&gt;' size="8" type="hidden" disabled="disabled"&gt;&lt;m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/&gt;&lt;/m4:input&gt;                     |
| 219 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "ROLE_EMP_" + (icurrent)%&gt;' size="8" type="hidden" disabled="disabled"&gt;&lt;m4:item item="HR_ROLE_OR" htmlsafe="true" outputdef="TOTALES"/&gt;&lt;/m4:input&gt;              |
| 224 | expresión de cálculo/transformación: &lt;input id='&lt;%= "ACTIVATED_" + (icurrent)%&gt;' name='&lt;%= "ACTIVATED_" + (icurrent)%&gt;' type="hidden" value="0"/&gt;                                                                              |
| 227 | expresión de cálculo/transformación: &lt;table id='&lt;%= "DETAILS_" + (icurrent)%&gt;' name='&lt;%= "DETAILS_" + (icurrent)%&gt;' class="invisible2" align="center" width="100%" cellspacing="0"&gt;                                            |
| 232 | expresión de cálculo/transformación: &lt;td class="fuentevalor2" colspan="6"&gt;&lt;b&gt;&lt;br/&gt;    &lt;%=Mss_cr.getProperty("msscr.Tabla1289")%&gt;&lt;/b&gt;  &lt;u&gt;&lt;m4:item item="HR_ID" htmlsafe="true" outputdef="TOTALES"/&gt; - |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/mss_cr_trans.jsp                   |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 311 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                       |
| 10  | /libreria/funciones_sse.js                                |
| 138 | javascript:show_help(5)                                   |
| 138 | /iconos/ic_help_25_31_0.gif                               |
| 142 | /iconos/noname_salariales_mss_58_100.gif                  |
| 149 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_p.jsp?        |
| 189 | javascript:show_details(&lt;%=(icurrent)%&gt;)            |
| 291 | javascript:marcar_todos(&lt;%=icount%&gt;);               |
| 291 | /iconos/icono_aceptar_todas_36_36.gif                     |
| 292 | javascript:desmarcar_todos(&lt;%=icount%&gt;);            |
| 292 | /iconos/icono_deshacer_mss_36_36.gif                      |
| 298 | javascript:comprobar_accion(                              |
| 298 | /iconos/ic_lis_36_36_2.gif                                |
| 300 | javascript:comprobar_accion(                              |
| 300 | /iconos/ic_lis_36_36_2.gif                                |
| 305 | javascript:m4selec_empleados(&lt;%=icount%&gt;)           |
| 305 | /iconos/icono_siguiente_36_36.gif                         |
| 7   | ../../mss_generico/mss_cr_trans.jsp                       |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        |
| 24  | ../../sse_generico/espanol/generico_links.jsp             |
| 122 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD= |
| 298 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?          |
| 300 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?       |
| 311 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                               |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 311 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 10  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 138 | javascript:show_help(5)                                   | dinámica   | P06                                                                                             |
| BASE   | 149 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_p.jsp?        | ausente    | P06                                                                                             |
| BASE   | 189 | javascript:show_details(&lt;%=(icurrent)%&gt;)            | dinámica   | P06                                                                                             |
| BASE   | 291 | javascript:marcar_todos(&lt;%=icount%&gt;);               | dinámica   | P06                                                                                             |
| BASE   | 292 | javascript:desmarcar_todos(&lt;%=icount%&gt;);            | dinámica   | P06                                                                                             |
| BASE   | 298 | javascript:comprobar_accion(                              | dinámica   | P06                                                                                             |
| BASE   | 300 | javascript:comprobar_accion(                              | dinámica   | P06                                                                                             |
| BASE   | 305 | javascript:m4selec_empleados(&lt;%=icount%&gt;)           | dinámica   | P06                                                                                             |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 122 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD= | ausente    | P06                                                                                             |
| BASE   | 298 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?          | ausente    | P06                                                                                             |
| BASE   | 300 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?       | ausente    | P06                                                                                             |
| BASE   | 311 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
