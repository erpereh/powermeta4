# smco_g3_dev_plan_emp_rec

Identificador: `mss_g3/smco_g3_dev_plan_emp_rec.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                            | Texto                                                                             | Ámbito | Diccionario                                                                                     |
| -------------------------------- | --------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| Label.LblSelect                  | Selecciona                                                                        | COLL   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.LblSelect                  | Selecciona                                                                        | CYC    | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.LblSelect                  | Selecciona                                                                        | IBER   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md)    |
| Label.LblSelect                  | Selecciona                                                                        | BASE   | [translations/ess_mss_gen_es.properties:L162](../../referencias/literales/ess_mss_gen_es.md)    |
| dev_plan.emp_link_rec_close      | Cerrar                                                                            | BASE   | [translations/smco_dev_plan_es.properties:L17](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_ek         | Conocimiento                                                                      | BASE   | [translations/smco_dev_plan_es.properties:L15](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_eval       | Evaluación                                                                        | BASE   | [translations/smco_dev_plan_es.properties:L14](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_evalnodata | No hay evaluaciones disponibles                                                   | BASE   | [translations/smco_dev_plan_es.properties:L20](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_filter     | Filtro                                                                            | BASE   | [translations/smco_dev_plan_es.properties:L12](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_filter     | Filtrar                                                                           | BASE   | [translations/smco_dev_plan_es.properties:L16](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_job        | Puesto                                                                            | BASE   | [translations/smco_dev_plan_es.properties:L13](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_title      | Ver acciones recomendadas                                                         | BASE   | [translations/smco_dev_plan_es.properties:L10](../../referencias/literales/smco_dev_plan_es.md) |
| dev_plan.emp_link_rec_title_desc | Para ayudarte a pedir acciones seleciona una opción y te daremos las recomendadas | BASE   | [translations/smco_dev_plan_es.properties:L11](../../referencias/literales/smco_dev_plan_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_dev_plan_emp_rec.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_emp_rec.jsp) | `e3c1a977d0c189d26a48d5cddc40a418bbdb9b2e73555219f1e35a931295cdab` |    329 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_dev_plan_emp_rec.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_dev_plan_emp_rec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                               |
| --- | ---------------------------------------------------------------------- |
| 225 | :                                                                      |
| 235 | :                                                                      |
| 243 | "&gt; "&gt;                                                            |
| 259 | [valor dinámico] " /&gt; " /&gt; "&gt; "value=" "&gt; [valor dinámico] |
| 280 | [valor dinámico] "&gt; "&gt;                                           |
| 302 | "&gt; " value=" "&gt;                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                       |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 205 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec.jsp; method=post; name=oculto2; id=oculto2                                                                                    |
| 206 | input   | type=hidden; id=SMCO_EK; name=SMCO_EK; value=                                                                                                                                                   |
| 208 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp; method=post; name=oculto; id=oculto                                                                               |
| 209 | input   | type=hidden; id=SMCO_TYPE_FILTER; name=SMCO_TYPE_FILTER; value=                                                                                                                                 |
| 210 | input   | type=hidden; id=SMCO_JOB_FILTER; name=SMCO_JOB_FILTER; value=                                                                                                                                   |
| 211 | input   | type=hidden; id=SMCO_ID_PLAN_FILTER; name=SMCO_ID_PLAN_FILTER; value=                                                                                                                           |
| 212 | input   | type=hidden; id=SMCO_DT_PLAN_FILTER; name=SMCO_DT_PLAN_FILTER; value=                                                                                                                           |
| 213 | input   | type=hidden; id=SMCO_ID_EK_FILTER; name=SMCO_ID_EK_FILTER; value=                                                                                                                               |
| 214 | input   | type=hidden; id=SMCO_ID_LEVEL_FILTER; name=SMCO_ID_LEVEL_FILTER; value=                                                                                                                         |
| 215 | input   | type=hidden; id=SMCO_DT_LEVEL_FILTER; name=SMCO_DT_LEVEL_FILTER; value=                                                                                                                         |
| 217 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_act.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                      |
| 221 | input   | onclick=javascript:control_ra();; type=radio; id=ztype_filter; checked=checked; name=ztype_filter; value=1                                                                                      |
| 226 | input   | type=radio; id=zjob; checked=checked; name=zjob; value=1                                                                                                                                        |
| 230 | input   | type=hidden; id=JOB_ACT; name=JOB_ACT; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                                      |
| 236 | input   | type=radio; id=zjob; name=zjob; value=2                                                                                                                                                         |
| 238 | input   | type=hidden; id=JOB_NEXT; name=JOB_NEXT; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                                    |
| 244 | input   | type=radio; id=zjob; name=zjob; value=3                                                                                                                                                         |
| 246 | select  | id=JOB_SEL; class=fuenteformulario; name=JOB_SEL; title=JSP_EXPR_Tran.getProperty(; item=STD_ID_JOB_CODE; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                                            |
| 247 | option  | value=                                                                                                                                                                                          |
| 249 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                                                                                                                             |
| 257 | input   | onclick=javascript:control_ra();; type=radio; id=ztype_filter; name=ztype_filter; value=2                                                                                                       |
| 263 | input   | type=hidden; id=SCO_ID_EVAL_PLAN; name=SCO_ID_EVAL_PLAN; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                    |
| 264 | input   | type=hidden; id=SCO_DT_START_PROC; name=SCO_DT_START_PROC; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                  |
| 265 | select  | id=EVAL_SEL; class=fuenteformulario; name=EVAL_SEL; title=JSP_EXPR_Tran.getProperty(; item=SMCO_NM_EVAL_PROC; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                        |
| 266 | option  | value=                                                                                                                                                                                          |
| 268 | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                                                                                |
| 278 | input   | type=radio; id=ztype_filter; name=ztype_filter; value=3; onclick=javascript:control_ra();                                                                                                       |
| 283 | select  | onchange=javascript:b_level();; id=EK_SEL; class=fuenteformulario; name=EK_SEL; title=JSP_EXPR_Tran.getProperty(; item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;               |
| 284 | option  | value=                                                                                                                                                                                          |
| 286 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                                                                                             |
| 303 | select  | id=LEVEL_TYPE; class=fuenteformulario; name=LEVEL_TYPE; title=JSP_EXPR_Tran.getProperty(; item=SCO_NM_LEVEL; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                         |
| 304 | option  | id=; value=                                                                                                                                                                                     |
| 306 | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                                |
| 314 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; href=javascript:filtrar();; tabindex=8                                                                                                               |
| 314 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/icono_filtrar_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 315 | a       | title=JSP_EXPR_smco_dev_plan.getProperty(; tabindex=9; href=javascript:window.close();                                                                                                          |
| 315 | img     | alt=JSP_EXPR_smco_dev_plan.getProperty(; src=/iconos/entrar_blanco.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 17  | zid_hr          | getParameter(request,"zid_hr")     |
| 19  | zper            | getParameter(request,"zper")       |
| 21  | zidhr_name      | getParameter(request,"zidhr_name") |
| 24  | SMCO_EK         | getParameter(request,"SMCO_EK")    |

| L   | Variable     | Expresión fuente                                                       | Resolución estática parcial                                            |
| --- | ------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 17  | zidhr_param  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid_hr")     |
| 19  | zorperiod    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zper")       |
| 21  | zidhr_name   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr_name") |
| 24  | zSMCO_EK     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_EK")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SMCO_EK")    |
| 157 | zsubsesion   | "SMCO_DEV_PLAN_ACCION"                                                 | SMCO_DEV_PLAN_ACCION                                                   |
| 158 | zmeta4object | "SMCO_DEV_PLAN_ACCION"                                                 | SMCO_DEV_PLAN_ACCION                                                   |
| 159 | znodo        | "SMCO_DEV_PLAN_ACCION"                                                 | SMCO_DEV_PLAN_ACCION                                                   |
| 160 | znodo1       | "SMCO_EMPLOYEE_DATA"                                                   | SMCO_EMPLOYEE_DATA                                                     |
| 161 | znodo2       | "SMCO_DEV_JOBS"                                                        | SMCO_DEV_JOBS                                                          |
| 162 | znodo3       | "SMCO_EMPLOYEE_EVAL"                                                   | SMCO_EMPLOYEE_EVAL                                                     |
| 163 | znodo4       | "SMCO_DEV_EK"                                                          | SMCO_DEV_EK                                                            |
| 164 | znodo5       | "SMCO_EK_LEVEL"                                                        | SMCO_EK_LEVEL                                                          |
| 165 | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                       | SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_PLAN_ACCION{"[*]"}                   |
| 166 | zoutputdef1  | zsubsesion + "!" + znodo1 + "[*]"                                      | SMCO_DEV_PLAN_ACCION{"!"}SMCO_EMPLOYEE_DATA{"[*]"}                     |
| 167 | zoutputdef2  | zsubsesion + "!" + znodo2 + "[*]"                                      | SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_JOBS{"[*]"}                          |
| 168 | zoutputdef3  | zsubsesion + "!" + znodo3 + "[*]"                                      | SMCO_DEV_PLAN_ACCION{"!"}SMCO_EMPLOYEE_EVAL{"[*]"}                     |
| 169 | zoutputdef4  | zsubsesion + "!" + znodo4 + "[*]"                                      | SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_EK{"[*]"}                            |
| 170 | zoutputdef5  | zsubsesion + "!" + znodo5 + "[*]"                                      | SMCO_DEV_PLAN_ACCION{"!"}SMCO_EK_LEVEL{"[*]"}                          |
| 171 | zmove        | znodo + ":" + znodo + "[FIRST]"                                        | SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"[FIRST]"}               |
| 172 | znamenodo    | znodo + ":" + zsubsesion + "!" + znodo                                 | SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_PLAN_ACCION |
| 173 | znamenodo5   | znodo5 + ":" + zsubsesion + "!" + znodo5                               | SMCO_EK_LEVEL{":"}SMCO_DEV_PLAN_ACCION{"!"}SMCO_EK_LEVEL               |
| 174 | zmetodocarga | ""                                                                     |                                                                        |
| 195 | zcounti3     | 0                                                                      | 0                                                                      |
| 256 | zeval        | ""                                                                     |                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 177 | m4:startpage | m4task=SMCO_DEV_PLAN_ACCION                                                                     |
| 178 | m4:beginjob  |                                                                                                 |
| 179 | m4:datadef   | m4o=SMCO_DEV_PLAN_ACCION; m4name=SMCO_DEV_PLAN_ACCION                                           |
| 185 | m4:exec      | m4method=                                                                                       |
| 186 | m4:outputdef | m4alias=SMCO_DEV_PLAN_ACCION                                                                    |
| 186 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_PLAN_ACCION{"[*]"}                        |
| 187 | m4:outputdef | m4alias=SMCO_EMPLOYEE_DATA                                                                      |
| 187 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_EMPLOYEE_DATA{"[*]"}                          |
| 188 | m4:outputdef | m4alias=SMCO_DEV_JOBS                                                                           |
| 188 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_JOBS{"[*]"}                               |
| 189 | m4:outputdef | m4alias=SMCO_EMPLOYEE_EVAL                                                                      |
| 189 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_EMPLOYEE_EVAL{"[*]"}                          |
| 190 | m4:outputdef | m4alias=SMCO_DEV_EK                                                                             |
| 190 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_DEV_EK{"[*]"}                                 |
| 191 | m4:outputdef | m4alias=SMCO_EK_LEVEL                                                                           |
| 191 | m4:param     | name=m4name0; value=SMCO_DEV_PLAN_ACCION{"!"}SMCO_EK_LEVEL{"[*]"}                               |
| 192 | m4:endjob    |                                                                                                 |
| 193 | m4:move      |                                                                                                 |
| 193 | m4:param     | name=SMCO_DEV_PLAN_ACCION; value=SMCO_DEV_PLAN_ACCION{":"}SMCO_DEV_PLAN_ACCION{"[FIRST]"}       |
| 227 | m4:label     | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_EMPLOYEE_DATA                                |
| 227 | m4:item      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_EMPLOYEE_DATA                                |
| 231 | m4:item      | m4varname=zSMCO_ID_NEXT_JOB; item=SMCO_ID_NEXT_JOB; htmlsafe=true; outputdef=SMCO_EMPLOYEE_DATA |
| 237 | m4:label     | item=SMCO_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_EMPLOYEE_DATA                               |
| 237 | m4:item      | item=SMCO_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_EMPLOYEE_DATA                               |
| 245 | m4:label     | item=STD_ID_JOB_CODE; htmlsafe=true; outputdef=SMCO_DEV_JOBS                                    |
| 248 | m4:dataloop  | outputdef=SMCO_DEV_JOBS                                                                         |
| 249 | m4:item      | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SMCO_DEV_JOBS                                     |
| 267 | m4:dataloop  | outputdef=SMCO_EMPLOYEE_EVAL                                                                    |
| 268 | m4:item      | item=SMCO_DT_START_PROC; htmlsafe=true; outputdef=SMCO_EMPLOYEE_EVAL                            |
| 268 | m4:item      | item=SMCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SMCO_EMPLOYEE_EVAL                             |
| 285 | m4:dataloop  | outputdef=SMCO_DEV_EK                                                                           |
| 286 | m4:item      | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=SMCO_DEV_EK                                       |
| 302 | m4:label     | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=SMCO_EK_LEVEL                                       |
| 305 | m4:dataloop  | outputdef=SMCO_EK_LEVEL                                                                         |
| 306 | m4:item      | item=SCO_ID_LEVEL; htmlsafe=true; outputdef=SMCO_EK_LEVEL                                       |
| 306 | m4:item      | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=SMCO_EK_LEVEL                                       |
| 325 | m4:endpage   |                                                                                                 |

| L   | Operación | Argumentos literales                                         |
| --- | --------- | ------------------------------------------------------------ |
| 182 | setItem   | zsubsesion,"SMCO_EMPLOYEE_DATA","","SMCO_EK_FILTER",zSMCO_EK |
| 198 | getCount  | znodo3,zsubsesion,znodo3                                     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 29  | b_level    |            |
| 44  | control_ra |            |
| 84  | filtrar    |            |

| L   | Condición / acción / mensaje literal                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 22  | if ((zidhr_param==null)&#124;&#124;(zidhr_param.equals(""))){zidhr_param = "";}                                              |
| 23  | if ((zorperiod==null)&#124;&#124;(zorperiod.equals(""))){zorperiod = "";}                                                    |
| 25  | if ((zSMCO_EK==null)&#124;&#124;(zSMCO_EK.equals(""))){zSMCO_EK = "";}                                                       |
| 30  | if (document.NombreFormulario.ztype_filter[2].checked){                                                                      |
| 33  | if (val_ek.length==0){                                                                                                       |
| 37  | }else{                                                                                                                       |
| 46  | if (document.NombreFormulario.ztype_filter[i].checked) {                                                                     |
| 55  | if (ztype_filter=="1"){                                                                                                      |
| 65  | if (ztype_filter=="2"){                                                                                                      |
| 75  | if (ztype_filter=="3"){                                                                                                      |
| 88  | if (document.NombreFormulario.ztype_filter[i].checked) {                                                                     |
| 93  | if (ztype_filter=="1"){                                                                                                      |
| 96  | if (document.NombreFormulario.zjob[i].checked) {                                                                             |
| 101 | if (zjobType=="3"){                                                                                                          |
| 103 | if (val_job.length==0){                                                                                                      |
| 106 | alert(texto);                                                                                                                |
| 109 | }else if (zjobType=="1"){                                                                                                    |
| 112 | }else if (zjobType=="2"){                                                                                                    |
| 121 | if (ztype_filter=="2"){                                                                                                      |
| 124 | if (id_plan.length==0){                                                                                                      |
| 127 | alert(texto);                                                                                                                |
| 138 | if (ztype_filter=="3"){                                                                                                      |
| 140 | if (val_ek.length==0){                                                                                                       |
| 143 | alert(texto);                                                                                                                |
| 232 | &lt;%if (!(zSMCO_ID_NEXT_JOB.equals(""))){%&gt;                                                                              |
| 256 | &lt;%String zeval="";zeval="disabled=\"disabled\"";if (zcounti3 &gt; 0){zeval="";}%&gt;                                      |
| 261 | &lt;% if (zcounti3 &gt; 0){%&gt;                                                                                             |
| 271 | &lt;%}else{%&gt;                                                                                                             |
| 165 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                   |
| 166 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                 |
| 167 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                 |
| 168 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                 |
| 169 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                 |
| 170 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                 |
| 171 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                         |
| 172 | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                              |
| 173 | expresión de cálculo/transformación: String znamenodo5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                           |
| 175 | expresión de cálculo/transformación: zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_DEV_PLAN_ACCION.SMCO_LOAD_EMPLOYEE_DATA"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 11  | ../../mss_generico/espanol/menu_mss.jsp      |
| 13  | /mss_g3/smco_dev_plan_trans.jsp              |

| L   | Destino / recurso                                                     |
| --- | --------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                   |
| 9   | /libreria/funciones_sse.js                                            |
| 10  | /libreria/clase_val_entradas.js                                       |
| 205 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec.jsp        |
| 208 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp |
| 217 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_act.jsp            |
| 314 | javascript:filtrar();                                                 |
| 314 | /iconos/icono_filtrar_36_36.gif                                       |
| 315 | javascript:window.close();                                            |
| 315 | /iconos/entrar_blanco.gif                                             |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                          |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                               |
| 13  | /mss_g3/smco_dev_plan_trans.jsp                                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                            | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | --------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_g3/smco_dev_plan_trans.jsp                                       | contextual | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |
| BASE   | 9   | /libreria/funciones_sse.js                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 10  | /libreria/clase_val_entradas.js                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 205 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec.jsp        | ausente    | P06                                                                                                           |
| BASE   | 208 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp_rec_filter.jsp | ausente    | P06                                                                                                           |
| BASE   | 217 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_act.jsp            | ausente    | P06                                                                                                           |
| BASE   | 314 | javascript:filtrar();                                                 | dinámica   | P06                                                                                                           |
| BASE   | 315 | javascript:window.close();                                            | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                            | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                          | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 13  | /mss_g3/smco_dev_plan_trans.jsp                                       | contextual | [mss_g3/smco_dev_plan_trans.jsp](mss_g3--smco_dev_plan_trans.md)                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_dev_plan_emp_rec.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
