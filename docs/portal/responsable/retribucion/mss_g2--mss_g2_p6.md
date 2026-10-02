# mss_g2_p6

Identificador: `mss_g2/mss_g2_p6.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p6.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p6.jsp) | `50b81e9d6b161e642cbf1b86e8b19d9d38f31a85f0aecb97934d8e84e6553dfd` |    226 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p6.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 124 | [valor dinámico] [valor dinámico] - |
| 167 | - -                                 |
| 190 | -                                   |
| 202 | [valor dinámico]:                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                          |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91  | form    | name=load_with_filter; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21; method=get; enctype=application/x-www-form-urlencoded     |
| 92  | input   | name=emp_for_filter; type=hidden; value=                                                                                                           |
| 93  | input   | name=filter; type=hidden; value=1                                                                                                                  |
| 97  | form    | name=load_without_filter; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21; method=get; enctype=application/x-www-form-urlencoded  |
| 102 | a       | href=javascript:show_help(6); title=JSP_EXPR_Mss_cr.getProperty(                                                                                   |
| 102 | img     | alt=Aceptar cambios; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 104 | img     | alt=Datos salariales; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100                                                          |
| 119 | form    | name=sel_rev; action=; method=post; enctype=application/x-www-form-urlencoded                                                                      |
| 125 | select  | id=EMPLOYEE_FILTER; class=fuenteformulario200; name=EMPLOYEE_FILTER; title=JSP_EXPR_Mss_cr.getProperty(                                            |
| 127 | option  | value=0                                                                                                                                            |
| 131 | option  | value=&lt;%=sIdHrEnc%&gt;                                                                                                                          |
| 138 | a       | style=cursor:hand; href=javascript:comprobar_filtro();; title=JSP_EXPR_Mss_cr.getProperty(                                                         |
| 139 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/js_filtrar.gif                                                   |
| 140 | a       | style=cursor:hand; href=javascript:deshacer_filtro();; title=JSP_EXPR_Mss_cr.getProperty(                                                          |
| 140 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/js_deshacer_filtro.gif                                           |
| 169 | img     | src=/iconos/advertencia.gif                                                                                                                        |
| 169 | a       | href=&lt;%="javascript:view_comment('"_+*employee_id*+_"');"%&gt;; title=JSP_EXPR_Mss_cr.getProperty(                                              |
| 186 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/aceptado.gif                                                                                         |
| 187 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/denegado.gif                                                                                         |
| 188 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/pendiente.gif                                                                                        |
| 190 | img     | src=/iconos/flecha.gif                                                                                                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                         |
| --- | --------------- | -------------------------------------- |
| 13  | estado          | getParameter(request,"estado")         |
| 14  | filter          | getParameter(request,"filter")         |
| 15  | emp_for_filter  | getParameter(request,"emp_for_filter") |
| 20  | zinicios        | getParameter(request,"zinicios")       |
| 31  | wu              | getParameter(request,"wu")             |

| L   | Variable      | Expresión fuente                                                           | Resolución estática parcial                                                |
| --- | ------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 13  | estado        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")         |
| 14  | load_filtered | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"filter")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"filter")         |
| 15  | idx_emp       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"emp_for_filter") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"emp_for_filter") |
| 20  | zinicios      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")       |
| 30  | zsubsesion    | "SSM_SALARY_REVIEW_PROCESS"                                                | SSM_SALARY_REVIEW_PROCESS                                                  |
| 31  | idx_wu        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"wu")             |
| 111 | icount        | 0                                                                          | 0                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                      |
| --- | ------------- | ------------------------------------------------------------------------------------------------------- |
| 76  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                        |
| 76  | m4:beginjob   |                                                                                                         |
| 77  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                         |
| 79  | m4:exec       | node=SSM_H_HR_SAL_REVIEW_INS; method=CR_LOAD_SALARY_REVIEW_PETITION; m4object=SSM_SALARY_REVIEW_PROCESS |
| 82  | m4:exec       | node=SSM_H_HR_SAL_REVIEW_INS; method=CR_LOAD_SAL_REVIEW_PET_FILTER; m4object=SSM_SALARY_REVIEW_PROCESS  |
| 83  | m4:param      | name=ARG_EMPL_FILTER; value=(idx_emp)                                                                   |
| 86  | m4:outputdef  | node=SSM_H_HR_SAL_REVIEW_INS; m4alias=EMPLEADOS; m4object=SSM_SALARY_REVIEW_PROCESS                     |
| 87  | m4:outputdef  | node=SSM_H_HR_SAL_REVIEW_ONLY_EMP; m4alias=EMPLEADOS_ONLY; m4object=SSM_SALARY_REVIEW_PROCESS           |
| 88  | m4:exec       | node=SSM_H_HR_SAL_REVIEW_INS; alias=emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS         |
| 89  | m4:endjob     |                                                                                                         |
| 112 | m4:outputexec | var=count; alias=emp_count                                                                              |
| 128 | m4:dataloop   | outputdef=EMPLEADOS_ONLY                                                                                |
| 129 | m4:item       | item=EMPLOYEE_HR_ID; htmlsafe=true; outputdef=EMPLEADOS_ONLY; m4varname=sIdHrEnc                        |
| 131 | m4:item       | item=EMPLOYEE_HR_ID; htmlsafe=true; outputdef=EMPLEADOS_ONLY                                            |
| 131 | m4:item       | item=EMPLOYEE_NAME; htmlsafe=true; outputdef=EMPLEADOS_ONLY                                             |
| 150 | m4:dataloop   | outputdef=EMPLEADOS                                                                                     |
| 152 | m4:item       | m4varname=employee_id; item=SCO_ID_HR; htmlsafe=true; outputdef=EMPLEADOS                               |
| 153 | m4:item       | m4varname=role_id; item=SCO_OR_HR_ROLE; htmlsafe=true; outputdef=EMPLEADOS                              |
| 154 | m4:item       | m4varname=idx_this_rec; item=IDX_REG; htmlsafe=true; outputdef=EMPLEADOS                                |
| 155 | m4:item       | m4varname=PARTIAL_TIME; item=EMPLOYEE_PARTIAL_TIME; htmlsafe=true; outputdef=EMPLEADOS                  |
| 167 | m4:item       | item=SCO_ID_HR; htmlsafe=true; outputdef=EMPLEADOS                                                      |
| 167 | m4:item       | item=SCO_GB_NAME; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 167 | m4:item       | item=SCO_N_ROLE; htmlsafe=true; outputdef=EMPLEADOS                                                     |
| 182 | m4:item       | m4varname=state; item=HCO_CR_REVIEW_STATE; htmlsafe=true; outputdef=EMPLEADOS                           |
| 191 | m4:item       | item=HCO_CR_SALARY_P_NM; htmlsafe=true; outputdef=EMPLEADOS                                             |
| 191 | m4:item       | item=HCO_CR_SPLAN_TP_NM; htmlsafe=true; outputdef=EMPLEADOS                                             |
| 192 | m4:item       | item=HCO_CR_SAL_REV_VALUE; htmlsafe=true; outputdef=EMPLEADOS                                           |
| 192 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 193 | m4:item       | item=PREVIOUS_AMOUNT; htmlsafe=true; outputdef=EMPLEADOS                                                |
| 193 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 194 | m4:item       | item=INCREASE_AMOUNT; htmlsafe=true; outputdef=EMPLEADOS                                                |
| 194 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 195 | m4:item       | item=HCO_CR_INC_PERCENTAGE; htmlsafe=true; outputdef=EMPLEADOS                                          |
| 196 | m4:item       | item=DT_START; htmlsafe=true; outputdef=EMPLEADOS                                                       |
| 196 | m4:item       | item=DT_END; htmlsafe=true; outputdef=EMPLEADOS                                                         |
| 203 | m4:item       | item=HCO_CR_SAL_REV_VALUE_REAL; htmlsafe=true; outputdef=EMPLEADOS                                      |
| 203 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 204 | m4:item       | item=PREVIOUS_AMOUNT_REAL; htmlsafe=true; outputdef=EMPLEADOS                                           |
| 204 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 205 | m4:item       | item=INCREASE_AMOUNT_REAL; htmlsafe=true; outputdef=EMPLEADOS                                           |
| 205 | m4:item       | item=ID_CURRENCY; htmlsafe=true; outputdef=EMPLEADOS                                                    |
| 226 | m4:endpage    |                                                                                                         |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 36  | view_comment     | employee   |
| 43  | show_help        | cod_help   |
| 50  | comprobar_filtro |            |
| 62  | deshacer_filtro  |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                             |
| 22  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                     |
| 54  | if (selected_item != 0)                                                                                                                                                                                                                                                                                                                     |
| 68  | if (employee_already_filtered != "null") {                                                                                                                                                                                                                                                                                                  |
| 78  | &lt;% if(load_filtered==null) { %&gt;                                                                                                                                                                                                                                                                                                       |
| 80  | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                            |
| 115 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                              |
| 157 | &lt;% if(!employee_id.equals("")) { %&gt;                                                                                                                                                                                                                                                                                                   |
| 160 | &lt;% if(!idx_this_rec.equals("0")) { %&gt;                                                                                                                                                                                                                                                                                                 |
| 181 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                                            |
| 186 | &lt;% if(state.equals("ACEPTAR")) { %&gt; &lt;td class="fuentevalor_2" width="10%"&gt;&lt;img alt="&lt;%=Mss_cr.getProperty("msscr.Pop.Acep")%&gt;" src="/iconos/aceptado.gif"/&gt;&lt;/td&gt;&lt;%}%&gt;                                                                                                                                   |
| 187 | &lt;% if(state.equals("DENEGAR")) { %&gt; &lt;td class="fuentevalor_2" width="10%"&gt;&lt;img alt="&lt;%=Mss_cr.getProperty("msscr.Pop.Den")%&gt;" src="/iconos/denegado.gif"/&gt;&lt;/td&gt;&lt;%}%&gt;                                                                                                                                    |
| 188 | &lt;% if(state.equals("PENDING")) { %&gt; &lt;td class="fuentevalor_2" width="10%"&gt;&lt;img alt="&lt;%=Mss_cr.getProperty("msscr.Pop.Pen")%&gt;" src="/iconos/pendiente.gif"/&gt;&lt;/td&gt;&lt;%}%&gt;                                                                                                                                   |
| 199 | &lt;% if(PARTIAL_TIME.equals("1")) { %&gt;                                                                                                                                                                                                                                                                                                  |
| 218 | }else{%&gt;                                                                                                                                                                                                                                                                                                                                 |
| 38  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6_comment.jsp?HR=" + employee;                                                                                                                                                                                                                   |
| 39  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=400,height=350";                                                                                                                                                                                     |
| 45  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                                                                                                                                                                                                     |
| 46  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=600";                                                                                                                                                                                    |
| 113 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                                                |
| 131 | expresión de cálculo/transformación: &lt;option value='&lt;%=sIdHrEnc%&gt;'&gt;&lt;m4:item item="EMPLOYEE_HR_ID" htmlsafe="true" outputdef="EMPLEADOS_ONLY"/&gt; - &lt;m4:item item="EMPLOYEE_NAME" htmlsafe="true" outputdef="EMPLEADOS_ONLY"/&gt;&lt;/option&gt;                                                                          |
| 167 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="6"&gt;&lt;b&gt;&lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPLEADOS"/&gt; - &lt;m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/&gt; - &lt;m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPLEADOS"/&gt;&lt;/b&gt;&lt;/td&gt; |
| 169 | expresión de cálculo/transformación: &lt;td class="fuentevalor" width="25%"&gt;&lt;img src="/iconos/advertencia.gif"/&gt;&lt;a href= &lt;%="javascript:view_comment('" + employee_id + "');"%&gt; title="&lt;%=Mss_cr.getProperty("msscr.Pop1-2")%&gt;"&gt;&lt;%=Mss_cr.getProperty("msscr.Titulo3-2")%&gt;&lt;/a&gt;&lt;/td&gt;            |
| 191 | expresión de cálculo/transformación: &lt;m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="EMPLEADOS"/&gt; - &lt;m4:item item="HCO_CR_SPLAN_TP_NM" htmlsafe="true" outputdef="EMPLEADOS"/&gt;&lt;/td&gt;                                                                                                                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 5   | ../../mss_generico/mss_cr_trans.jsp                   |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 27  | ../../sse_generico/espanol/generico_links.jsp         |
| 224 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                         |
| 10  | /libreria/funciones_sse.js                                  |
| 91  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21   |
| 97  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21   |
| 102 | javascript:show_help(6)                                     |
| 102 | /iconos/ic_help_25_31_0.gif                                 |
| 104 | /iconos/noname_salariales_mss_58_100.gif                    |
| 138 | javascript:comprobar_filtro();                              |
| 139 | /iconos/js_filtrar.gif                                      |
| 140 | javascript:deshacer_filtro();                               |
| 140 | /iconos/js_deshacer_filtro.gif                              |
| 169 | /iconos/advertencia.gif                                     |
| 186 | /iconos/aceptado.gif                                        |
| 187 | /iconos/denegado.gif                                        |
| 188 | /iconos/pendiente.gif                                       |
| 190 | /iconos/flecha.gif                                          |
| 5   | ../../mss_generico/mss_cr_trans.jsp                         |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                     |
| 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp          |
| 27  | ../../sse_generico/espanol/generico_links.jsp               |
| 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6_comment.jsp?HR= |
| 45  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=   |
| 224 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ----------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 5   | ../../mss_generico/mss_cr_trans.jsp                         | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 224 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 10  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 91  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21   | ausente    | P06                                                                                             |
| BASE   | 97  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=21   | ausente    | P06                                                                                             |
| BASE   | 102 | javascript:show_help(6)                                     | dinámica   | P06                                                                                             |
| BASE   | 138 | javascript:comprobar_filtro();                              | dinámica   | P06                                                                                             |
| BASE   | 140 | javascript:deshacer_filtro();                               | dinámica   | P06                                                                                             |
| BASE   | 5   | ../../mss_generico/mss_cr_trans.jsp                         | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6_comment.jsp?HR= | ausente    | P06                                                                                             |
| BASE   | 45  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=   | ausente    | P06                                                                                             |
| BASE   | 224 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p6.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
