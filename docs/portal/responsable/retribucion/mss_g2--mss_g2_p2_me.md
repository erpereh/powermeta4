# mss_g2_p2_me

Identificador: `mss_g2/mss_g2_p2_me.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p2_me.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p2_me.jsp) | `01edec91563d35001973d55c199710a311bf193e1275b9de67bff0174c225aa2` |    272 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p2_me.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p2_me.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 126 | [valor dinámico] [valor dinámico] [valor dinámico] |
| 178 | [valor dinámico] -                                 |
| 186 | -                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                 |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 121 | a       | href=javascript:show_help(8); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                          |
| 121 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                           |
| 125 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100                                                                                     |
| 127 | img     | src=/iconos/advertencia_rojo.gif                                                                                                                                                          |
| 175 | a       | href=&lt;%="javascript:view_message('"_+*id_employee*+_"','"_+*employee_job*+_"');"%&gt;                                                                                                  |
| 175 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/advertencia_rojo.gif                                                                                                                        |
| 178 | a       | href=JSP_EXPR_; shape=rect; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                            |
| 230 | a       | href=javascript:generate_excel('&lt;%=id_wu_plan%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                              |
| 231 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/icono_hacia_excel_32_16.gif                                                                                                                 |
| 234 | a       | href=javascript:import_excel('&lt;%=id_wu_plan%&gt;');; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                |
| 235 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/icono_desde_excel_32_16.gif                                                                                                                 |
| 242 | a       | href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                  |
| 242 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |
| 252 | a       | href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                  |
| 252 | img     | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |
| 260 | a       | href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                  |
| 260 | img     | src=/iconos/icono_anterior_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 266 | form    | name=go_summary; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?; method=post                                                                                                     |
| 267 | input   | name=estado; type=hidden; value=21                                                                                                                                                        |
| 268 | input   | name=go_back_plan; type=hidden; value=1                                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 14  | zinicios        | getParameter(request,"zinicios") |
| 30  | wu              | getParameter(request,"wu")       |

| L   | Variable       | Expresión fuente                                                                                           | Resolución estática parcial                                                                                |
| --- | -------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 13  | estado         | "112"                                                                                                      | 112                                                                                                        |
| 14  | zinicios       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                       |
| 24  | zsubsesion     | "SSM_SALARY_REVIEW_PROCESS"                                                                                | SSM_SALARY_REVIEW_PROCESS                                                                                  |
| 25  | zmeta4object   | "SSM_SALARY_REVIEW_PROCESS"                                                                                | SSM_SALARY_REVIEW_PROCESS                                                                                  |
| 26  | zmetodocarga   | zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_MASSIVE_SALARY_REVIEW"                                         | SSM_SALARY_REVIEW_PROCESS{"!SSM_SALARY_REVIEW_PROCESS.CR_MASSIVE_SALARY_REVIEW"}                           |
| 27  | zmetodo_set    | zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT"                                                 | SSM_SALARY_REVIEW_PROCESS{"!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT"}                                   |
| 28  | znodo          | "SSM_EMPLOYEES_INFORMATION"                                                                                | SSM_EMPLOYEES_INFORMATION                                                                                  |
| 29  | zestado        | "21"                                                                                                       | 21                                                                                                         |
| 30  | idx_wu         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")                                             |
| 134 | icount         | 0                                                                                                          | 0                                                                                                          |
| 144 | iErroneousEmps | 0                                                                                                          | 0                                                                                                          |
| 164 | sIdEmpEnc      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", id_employee)      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", id_employee)      |
| 167 | sIdRoleEnc     | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", employee_id_role) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", employee_id_role) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                         |
| --- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| 100 | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                           |
| 100 | m4:beginjob   |                                                                                                            |
| 101 | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                            |
| 103 | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=CR_SET_WORK_UNIT; m4object=SSM_SALARY_REVIEW_PROCESS                |
| 104 | m4:param      | name=ARG_SAL_PLAN_ID; value=(idx_wu)                                                                       |
| 107 | m4:exec       | m4method=SSM_SALARY_REVIEW_PROCESS{"!SSM_SALARY_REVIEW_PROCESS.CR_MASSIVE_SALARY_REVIEW"}                  |
| 109 | m4:outputdef  | node=SSM_EMPLOYEES_INFORMATION; m4alias=EMPLEADOS; m4object=SSM_SALARY_REVIEW_PROCESS                      |
| 110 | m4:outputdef  | node=SSM_SALARY_REVIEW_PROCESS; m4alias=GENERAL; m4object=SSM_SALARY_REVIEW_PROCESS                        |
| 111 | m4:outputdef  | node=SSM_WU_SALARY_PLANS; m4alias=SSM_WU_SALARY_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS                  |
| 113 | m4:exec       | node=SSM_EMPLOYEES_INFORMATION; alias=emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS          |
| 114 | m4:exec       | node=SSM_WU_SALARY_PLANS; alias=plan_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 115 | m4:endjob     |                                                                                                            |
| 126 | m4:item       | item=CR_DIFFERENT_WORK_UNIT; htmlsafe=true; outputdef=GENERAL                                              |
| 136 | m4:outputexec | var=count; alias=emp_count                                                                                 |
| 142 | m4:item       | m4varname=ind_erroneous_employees; item=SCO_IND_ERRONEOUS_EMPLOYEES; htmlsafe=true; outputdef=EMPLEADOS    |
| 157 | m4:dataloop   | outputdef=EMPLEADOS                                                                                        |
| 159 | m4:item       | m4varname=last_review; item=LAST_REVIEW_BASE_SALARY; htmlsafe=true; outputdef=EMPLEADOS                    |
| 160 | m4:item       | m4varname=name_role; item=ROLE_NAME; htmlsafe=true; outputdef=EMPLEADOS                                    |
| 161 | m4:item       | m4varname=grade; item=SALARY_GRADE_NAME; htmlsafe=true; outputdef=EMPLEADOS                                |
| 162 | m4:item       | m4varname=information; item=PROCESS_USEFUL_INFORMATION; htmlsafe=true; outputdef=EMPLEADOS                 |
| 163 | m4:item       | m4varname=id_employee; item=HR_ID; htmlsafe=true; outputdef=EMPLEADOS                                      |
| 165 | m4:item       | m4varname=employee_job; item=JOB_ID; htmlsafe=true; outputdef=EMPLEADOS                                    |
| 166 | m4:item       | m4varname=employee_id_role; item=HR_ROLE_OR; htmlsafe=true; outputdef=EMPLEADOS                            |
| 168 | m4:item       | m4varname=employee_valid_for_revision; item=SCO_IND_VALID_FOR_REVISION; htmlsafe=true; outputdef=EMPLEADOS |
| 178 | m4:item       | item=HR_NAME; htmlsafe=true; outputdef=EMPLEADOS                                                           |
| 186 | m4:item       | item=JOB_ID; htmlsafe=true; outputdef=EMPLEADOS                                                            |
| 186 | m4:item       | item=JOB_NAME; htmlsafe=true; outputdef=EMPLEADOS                                                          |
| 195 | m4:item       | item=LAST_BASE_SALRY_REVIEW_STATE; htmlsafe=true; outputdef=EMPLEADOS                                      |
| 197 | m4:item       | item=LAST_REVIEW_BASE_SALARY_CUR; htmlsafe=true; outputdef=EMPLEADOS                                       |
| 205 | m4:outputexec | var=count; alias=plan_count                                                                                |
| 221 | m4:dataloop   | outputdef=SSM_WU_SALARY_PLANS                                                                              |
| 223 | m4:item       | m4varname=id_wu_plan; item=SCO_ID_WU_PLAN; htmlsafe=true; outputdef=SSM_WU_SALARY_PLANS                    |
| 224 | m4:item       | m4varname=nm_wu_plan; item=SCO_NM_WU_PLAN; htmlsafe=true; outputdef=SSM_WU_SALARY_PLANS                    |
| 272 | m4:endpage    |                                                                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos            |
| --- | --------------- | --------------------- |
| 36  | view_message    | employee,employee_job |
| 42  | show_help       | cod_help              |
| 48  | edit_history    | id_hr, role_id_hr     |
| 54  | generate_excel  | id_wu_plan            |
| 60  | import_excel    | id_wu_plan            |
| 69  | _getExcel       |                       |
| 91  | _getStatusExcel |                       |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                             |
| 71  | if (!navigator.appMinorVersion) {                                                                                                                                                                                                                                                                                                                   |
| 73  | alert(msg);                                                                                                                                                                                                                                                                                                                                         |
| 75  | } else {                                                                                                                                                                                                                                                                                                                                            |
| 78  | if (oExcel == null) {                                                                                                                                                                                                                                                                                                                               |
| 85  | alert(msg);                                                                                                                                                                                                                                                                                                                                         |
| 94  | if (oExcel != null) vstatus = true;                                                                                                                                                                                                                                                                                                                 |
| 139 | if (icount &gt; 0) {                                                                                                                                                                                                                                                                                                                                |
| 146 | if (iErroneousEmps &gt; 0) { %&gt;                                                                                                                                                                                                                                                                                                                  |
| 170 | &lt;% if(employee_valid_for_revision.equals("0")) { %&gt;                                                                                                                                                                                                                                                                                           |
| 173 | &lt;% if(information.equals("")) { %&gt;                                                                                                                                                                                                                                                                                                            |
| 174 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                    |
| 181 | &lt;% if(name_role.equals("")) { %&gt;                                                                                                                                                                                                                                                                                                              |
| 183 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                    |
| 188 | &lt;% if(grade.equals("")) { %&gt;                                                                                                                                                                                                                                                                                                                  |
| 190 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                    |
| 194 | &lt;% if(last_review.equals("0")) { %&gt;                                                                                                                                                                                                                                                                                                           |
| 196 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                    |
| 208 | if (icount &gt; 0) {                                                                                                                                                                                                                                                                                                                                |
| 209 | if (iErroneousEmps &gt; 0) {                                                                                                                                                                                                                                                                                                                        |
| 247 | }else{%&gt;                                                                                                                                                                                                                                                                                                                                         |
| 259 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                                    |
| 26  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_MASSIVE_SALARY_REVIEW";                                                                                                                                                                                                                      |
| 27  | expresión de cálculo/transformación: String zmetodo_set = zsubsesion + "!SSM_SALARY_REVIEW_PROCESS.CR_SET_WORK_UNIT";                                                                                                                                                                                                                               |
| 37  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?HR=" + employee + "&amp;HR_JOB=" + employee_job;                                                                                                                                                                                           |
| 38  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";                                                                                                                                                                                             |
| 43  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                                                                                                                                                                                                             |
| 44  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=800";                                                                                                                                                                                            |
| 49  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_ht.jsp?HR=" + id_hr + "&amp;HR_ROLE=" + role_id_hr;                                                                                                                                                                                                    |
| 50  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=400";                                                                                                                                                                                            |
| 55  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_me.jsp?id_wu_plan=" + id_wu_plan;                                                                                                                                                                                                                      |
| 56  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";                                                                                                                                                                                             |
| 61  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mi.jsp?id_wu_plan=" + id_wu_plan;                                                                                                                                                                                                                      |
| 62  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=350";                                                                                                                                                                                             |
| 138 | expresión de cálculo/transformación: try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }                                                                                                                                                                                                                                   |
| 175 | expresión de cálculo/transformación: &lt;a href= &lt;%="javascript:view_message('" + id_employee + "','" + employee_job + "');"%&gt;&gt;&lt;img alt="&lt;%=Mss_cr.getProperty("msscr.Pop1-20")%&gt;" src="/iconos/advertencia_rojo.gif"/&gt;&lt;/a&gt;                                                                                              |
| 178 | expresión de cálculo/transformación: &lt;td class="fuentevalor"&gt;&lt;a href="&lt;%= "javascript:edit_history('" + (sIdEmpEnc) + "','" + (sIdRoleEnc) + "')"%&gt;" shape="rect" title="&lt;%=Mss_cr.getProperty("msscr.Pop1-21")%&gt;"&gt;&lt;%=id_employee%&gt; - &lt;m4:item item="HR_NAME" htmlsafe="true" outputdef="EMPLEADOS"/&gt;&lt;/a&gt; |
| 186 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="2"&gt;&lt;m4:item item="JOB_ID" htmlsafe="true" outputdef="EMPLEADOS"/&gt; -  &lt;m4:item item="JOB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/&gt;&lt;/td&gt;                                                                                                            |
| 207 | expresión de cálculo/transformación: try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }                                                                                                                                                                                                                                   |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/mss_cr_trans.jsp                   |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 20  | ../../sse_generico/espanol/generico_links.jsp         |
| 21  | /sse_g0/sgco_gen_trans.jsp                            |
| 264 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                            |
| 10  | /libreria/funciones_sse.js                                     |
| 121 | javascript:show_help(8)                                        |
| 121 | /iconos/ic_help_25_31_0.gif                                    |
| 125 | /iconos/noname_salariales_mss_58_100.gif                       |
| 127 | /iconos/advertencia_rojo.gif                                   |
| 175 | /iconos/advertencia_rojo.gif                                   |
| 178 | &lt;%=                                                         |
| 230 | javascript:generate_excel(                                     |
| 231 | /iconos/icono_hacia_excel_32_16.gif                            |
| 234 | javascript:import_excel(                                       |
| 235 | /iconos/icono_desde_excel_32_16.gif                            |
| 242 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                |
| 242 | /iconos/ic_lis_36_36_2.gif                                     |
| 252 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                |
| 252 | /iconos/ic_lis_36_36_2.gif                                     |
| 260 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                |
| 260 | /iconos/icono_anterior_36_36.gif                               |
| 266 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?               |
| 7   | ../../mss_generico/mss_cr_trans.jsp                            |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                        |
| 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 20  | ../../sse_generico/espanol/generico_links.jsp                  |
| 21  | /sse_g0/sgco_gen_trans.jsp                                     |
| 37  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?HR=    |
| 43  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=      |
| 49  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_ht.jsp?HR=         |
| 55  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_me.jsp?id_wu_plan= |
| 61  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mi.jsp?id_wu_plan= |
| 264 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | -------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                            | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 21  | /sse_g0/sgco_gen_trans.jsp                                     | contextual | [sse_g0/sgco_gen_trans.jsp](../../empleado/organizacion/sse_g0--sgco_gen_trans.md)              |
| BASE   | 264 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 10  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 121 | javascript:show_help(8)                                        | dinámica   | P06                                                                                             |
| BASE   | 178 | &lt;%=                                                         | dinámica   | P06                                                                                             |
| BASE   | 230 | javascript:generate_excel(                                     | dinámica   | P06                                                                                             |
| BASE   | 234 | javascript:import_excel(                                       | dinámica   | P06                                                                                             |
| BASE   | 242 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                | ausente    | P06                                                                                             |
| BASE   | 252 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                | ausente    | P06                                                                                             |
| BASE   | 260 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                | ausente    | P06                                                                                             |
| BASE   | 266 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?               | ausente    | P06                                                                                             |
| BASE   | 7   | ../../mss_generico/mss_cr_trans.jsp                            | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 21  | /sse_g0/sgco_gen_trans.jsp                                     | contextual | [sse_g0/sgco_gen_trans.jsp](../../empleado/organizacion/sse_g0--sgco_gen_trans.md)              |
| BASE   | 37  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?HR=    | ausente    | P06                                                                                             |
| BASE   | 43  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=      | ausente    | P06                                                                                             |
| BASE   | 49  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_ht.jsp?HR=         | ausente    | P06                                                                                             |
| BASE   | 55  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_me.jsp?id_wu_plan= | ausente    | P06                                                                                             |
| BASE   | 61  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mi.jsp?id_wu_plan= | ausente    | P06                                                                                             |
| BASE   | 264 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p2_me.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
