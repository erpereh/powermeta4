# mss_g2_p3_mi

Identificador: `mss_g2/mss_g2_p3_mi.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3_mi.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_mi.jsp) | `e09a07f8142f31e6ea50eafced0f2af632f42d9e27f80be6e43098806120ca0a` |    587 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3_mi.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_mi.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                            |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 442 | img     | src=/iconos/advertencia_rojo.gif                                                                                                                                                                     |
| 527 | a       | href=javascript:window.close(); title=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;                                                                                                                 |
| 527 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 542 | a       | href=javascript:window.close(); title=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;                                                                                                                 |
| 542 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 551 | form    | name=zdata; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_mi.jsp; method=post; enctype=application/x-www-form-urlencoded                                                                        |
| 552 | input   | name=SCO_ID_WORK_UNIT; type=hidden; value=N/A                                                                                                                                                        |
| 553 | input   | name=SCO_ID_BASE_PLAN; type=hidden; value=N/A                                                                                                                                                        |
| 554 | input   | name=SCO_NUM_EMPLOYEES_BASE; type=hidden; value=N/A                                                                                                                                                  |
| 555 | input   | name=SCO_ID_CURRENCY_BASE; type=hidden; value=N/A                                                                                                                                                    |
| 556 | input   | name=SCO_DT_START_BASE; type=hidden; value=N/A                                                                                                                                                       |
| 557 | input   | name=SCO_DT_END_BASE; type=hidden; value=N/A                                                                                                                                                         |
| 558 | input   | name=SCO_NUM_VARB_PLANS; type=hidden; value=N/A                                                                                                                                                      |
| 560 | input   | name=SCO_ID_HR_BASE_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                             |
| 561 | input   | name=SCO_OR_HR_ROLE_BASE_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                        |
| 562 | input   | name=SCO_AMT_INC_BASE_&lt;%=i%&gt;; type=hidden; value=                                                                                                                                              |
| 563 | input   | name=SCO_PRC_INC_BASE_&lt;%=i%&gt;; type=hidden; value=                                                                                                                                              |
| 564 | input   | name=SCO_COMMENT_BASE_&lt;%=i%&gt;; type=hidden; value=                                                                                                                                              |
| 569 | input   | name=SCO_ID_CURRENCY_VARB_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                       |
| 570 | input   | name=SCO_ID_VARB_PLAN_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                           |
| 571 | input   | name=SCO_DT_START_VARB_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                          |
| 572 | input   | name=SCO_DT_END_VARB_&lt;%=i%&gt;; type=hidden; value=N/A                                                                                                                                            |
| 573 | input   | name=SCO_NUM_EMP_VARB_&lt;%=i%&gt;; type=hidden; value=&lt;%=iempVarPlan[i]%&gt;                                                                                                                     |
| 576 | input   | name=SCO_ID_HR_VARB_&lt;%=i%&gt;_&lt;%=k%&gt;; type=hidden; value=N/A                                                                                                                                |
| 577 | input   | name=SCO_OR_HR_ROLE_VARB_&lt;%=i%&gt;_&lt;%=k%&gt;; type=hidden; value=N/A                                                                                                                           |
| 578 | input   | name=SCO_AMT_INC_VARB_&lt;%=i%&gt;_&lt;%=k%&gt;; type=hidden; value=                                                                                                                                 |
| 579 | input   | name=SCO_PRC_INC_VARB_&lt;%=i%&gt;_&lt;%=k%&gt;; type=hidden; value=                                                                                                                                 |
| 580 | input   | name=SCO_COMMENT_VARB_&lt;%=i%&gt;_&lt;%=k%&gt;; type=hidden; value=                                                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 18  | id_wu_plan      | getParameter(request,"id_wu_plan") |

| L   | Variable                | Expresión fuente                                                                    | Resolución estática parcial                                                         |
| --- | ----------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 16  | zsubsesion              | "SSM_SALARY_REVIEW_PROCESS"                                                         | SSM_SALARY_REVIEW_PROCESS                                                           |
| 17  | zmeta4object            | "SSM_SALARY_REVIEW_PROCESS"                                                         | SSM_SALARY_REVIEW_PROCESS                                                           |
| 18  | id_wu_plan              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")              |
| 37  | zlanguageFolder         | CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL) |
| 41  | zibaseEmpCount          | 0                                                                                   | 0                                                                                   |
| 42  | zivarbCount             | 0                                                                                   | 0                                                                                   |
| 54  | zbase_idx_id_hr         | 1                                                                                   | 1                                                                                   |
| 55  | zbase_idx_or_hr_role    | 2                                                                                   | 2                                                                                   |
| 56  | zbase_idx_amt_rec_inc   | 15                                                                                  | 15                                                                                  |
| 57  | zbase_idx_prc_rec_inc   | 16                                                                                  | 16                                                                                  |
| 58  | zbase_idx_comment       | 27                                                                                  | 27                                                                                  |
| 61  | zbase_id_currency       | ""                                                                                  |                                                                                     |
| 62  | zbase_id_base_plan      | ""                                                                                  |                                                                                     |
| 63  | zbase_nm_base_plan      | ""                                                                                  |                                                                                     |
| 64  | zbase_nm_base_plan_type | ""                                                                                  |                                                                                     |
| 65  | zbase_id_work_unit      | ""                                                                                  |                                                                                     |
| 66  | zbase_nm_work_unit      | ""                                                                                  |                                                                                     |
| 67  | zbase_num_employees     | ""                                                                                  |                                                                                     |
| 68  | zbase_id_base_plan_html | ""                                                                                  |                                                                                     |
| 69  | zbase_id_work_unit_html | ""                                                                                  |                                                                                     |
| 84  | zibase_num_employees    | 0                                                                                   | 0                                                                                   |
| 91  | zempVarPlan             | ""                                                                                  |                                                                                     |
| 94  | zvarb_idx_id_hr         | 1                                                                                   | 1                                                                                   |
| 95  | zvarb_idx_or_hr_role    | 2                                                                                   | 2                                                                                   |
| 96  | zvarb_idx_amt_rec_inc   | 13                                                                                  | 13                                                                                  |
| 97  | zvarb_idx_prc_rec_inc   | 15                                                                                  | 15                                                                                  |
| 98  | zvarb_idx_comment       | 22                                                                                  | 22                                                                                  |
| 500 | i                       | 0                                                                                   | 0                                                                                   |
| 559 | i                       | 0                                                                                   | 0                                                                                   |
| 567 | i                       | 0                                                                                   | 0                                                                                   |
| 575 | k                       | 0                                                                                   | 0                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                            |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| 21  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                              |
| 21  | m4:beginjob   |                                                                                                               |
| 22  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                               |
| 24  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_IMPORT; m4object=SSM_SALARY_REVIEW_PROCESS                      |
| 25  | m4:param      | name=ARG_ID_WU_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")             |
| 27  | m4:outputdef  | node=SSM_MSR_EMPLOYEES_BASE_PLAN; m4alias=SSM_MSR_EMPLOYEES_BASE_PLAN; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 28  | m4:outputdef  | node=SSM_MSR_VARIABLE_PLANS; m4alias=SSM_MSR_VARIABLE_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 29  | m4:exec       | node=SSM_MSR_EMPLOYEES_BASE_PLAN; alias=base_plan_emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 30  | m4:exec       | node=SSM_MSR_VARIABLE_PLANS; alias=varb_plan_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS          |
| 31  | m4:endjob     |                                                                                                               |
| 44  | m4:outputexec | var=zsbaseEmpCount; alias=base_plan_emp_count                                                                 |
| 45  | m4:outputexec | var=zsvarbCount; alias=varb_plan_count                                                                        |
| 72  | m4:item       | var=; item=SCO_ID_CURRENCY; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 73  | m4:item       | var=; item=SCO_ID_BASE_PLAN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 74  | m4:item       | var=; item=SCO_NM_BASE_PLAN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 75  | m4:item       | var=; item=SCO_NM_PLAN_TYPE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 76  | m4:item       | var=; item=SCO_ID_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 77  | m4:item       | var=; item=SCO_NM_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 78  | m4:item       | var=; item=SCO_NUM_EMPLOYEES; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                               |
| 79  | m4:item       | var=; item=SCO_ID_BASE_PLAN; htmlsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN; jsafe=true                 |
| 80  | m4:item       | var=; item=SCO_ID_WORK_UNIT; htmlsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN; jsafe=true                 |
| 113 | m4:dataloop   | outputdef=SSM_MSR_VARIABLE_PLANS                                                                              |
| 114 | m4:current    | var=ziCurPos; outputdef=SSM_MSR_VARIABLE_PLANS                                                                |
| 116 | m4:item       | var=; item=SCO_NUM_EMPLOYEES; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                    |
| 117 | m4:item       | item=SCO_NUM_EMPLOYEES; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                          |
| 118 | m4:item       | item=SCO_ID_CURRENCY; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 119 | m4:item       | item=SCO_ID_VAR_PLAN; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 120 | m4:item       | item=SCO_NM_VAR_PLAN; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 121 | m4:item       | item=SCO_NM_PLAN_TYPE; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 122 | m4:item       | item=SCO_ID_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 123 | m4:item       | item=SCO_NM_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 124 | m4:item       | item=SCO_ID_VAR_PLAN; htmlsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS; jsafe=true                             |
| 587 | m4:endpage    |                                                                                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos            |
| --- | -------------------- | --------------------- |
| 134 | definitionExcel      | visible               |
| 177 | _openExcel           | pathTemplate, visible |
| 250 | _closeExcel          |                       |
| 264 | _validateFile        |                       |
| 305 | _importMetaInfo      |                       |
| 325 | _importBasePlan      |                       |
| 356 | _importVariablePlans |                       |
| 407 | _finish              |                       |
| 421 | _ImportWorkSheet     |                       |

| L   | Condición / acción / mensaje literal                                                                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100 | if (zivarbCount &gt; 0) {                                                                                                                                                             |
| 187 | if(this.oExcel != null) {                                                                                                                                                             |
| 190 | if (this.statusExcel) {                                                                                                                                                               |
| 191 | if (this.oExcel.workBooks.Count &gt; 0) {                                                                                                                                             |
| 197 | if (this.errorCode != 0) {                                                                                                                                                            |
| 208 | if (this.errorCode == 0) {                                                                                                                                                            |
| 210 | }else{                                                                                                                                                                                |
| 215 | }else{                                                                                                                                                                                |
| 221 | if (!vbValid) {                                                                                                                                                                       |
| 222 | if (this.oExcel.Dialogs(1).Show()) {                                                                                                                                                  |
| 228 | }else{                                                                                                                                                                                |
| 235 | }else{                                                                                                                                                                                |
| 252 | if (!this.statusExcel &amp;&amp; this.oExcel != null) {                                                                                                                               |
| 254 | }else{                                                                                                                                                                                |
| 255 | if (this.workBook != null) {                                                                                                                                                          |
| 274 | if (this.excelVarbPlans &gt; 0) {                                                                                                                                                     |
| 281 | if (this.excelWorkUnitId != "&lt;%=zbase_id_work_unit%&gt;") {this.errorCode = 200;} else {                                                                                           |
| 282 | if (this.excelBasePlanId != "&lt;%=zbase_id_base_plan%&gt;") {this.errorCode = 200;} else {                                                                                           |
| 283 | if (this.excelEmpsBasePlan != &lt;%=zbase_num_employees%&gt;) {this.errorCode = 200;} else {                                                                                          |
| 284 | if (this.excelVarbPlans != &lt;%=zivarbCount%&gt;) {this.errorCode = 200;} else {                                                                                                     |
| 285 | if (this.excelVarbPlans &gt; 0) {                                                                                                                                                     |
| 287 | if (this.excelVarbPlanId[i] != _varb_id_varb_plan[i]) {this.errorCode = 200; i = this.excelVarbPlans;}                                                                                |
| 288 | if (this.excelEmpsVarbPlan[i] != _varb_num_employees[i]) {this.errorCode = 200; i = this.excelVarbPlans;}                                                                             |
| 292 | if (this.errorCode == 200) {                                                                                                                                                          |
| 327 | if (this.recordsBasePlan &gt; 0) {                                                                                                                                                    |
| 341 | _vvalue = this.workSheet.Cells(_iE, &lt;%=zbase_idx_amt_rec_inc%&gt;).value; if (_vvalue) this.form.elements["SCO_AMT_INC_BASE_" + i].value = _vvalue;                                |
| 342 | _vvalue = this.workSheet.Cells(_iE, &lt;%=zbase_idx_prc_rec_inc%&gt;).value; if (_vvalue) this.form.elements["SCO_PRC_INC_BASE_" + i].value = _vvalue;                                |
| 343 | _vvalue = this.workSheet.Cells(_iE, &lt;%=zbase_idx_comment%&gt;).value; if (_vvalue) this.form.elements["SCO_COMMENT_BASE_" + i].value = _vvalue;                                    |
| 364 | if (this.recordsBasePlan == 0) {                                                                                                                                                      |
| 370 | if (this.recordsBasePlan &gt; 0) {                                                                                                                                                    |
| 372 | _ioffsetBase = this.recordsBasePlan - this.baseTableLines;&lt;%//Max is necessary in case there are less employees than lines%&gt;                                                    |
| 373 | }else{                                                                                                                                                                                |
| 390 | _vvalue = this.workSheet.Cells(_iE, &lt;%=zvarb_idx_amt_rec_inc%&gt;).value; if (*vvalue) this.form.elements["SCO_AMT_INC_VARB*" + i + "_" + k].value = _vvalue;                      |
| 391 | _vvalue = this.workSheet.Cells(_iE, &lt;%=zvarb_idx_prc_rec_inc%&gt;).value; if (*vvalue) this.form.elements["SCO_PRC_INC_VARB*" + i + "_" + k].value = _vvalue;                      |
| 392 | _vvalue = this.workSheet.Cells(_iE, _offsetComment).value; if (*vvalue) this.form.elements["SCO_COMMENT_VARB*" + i + "_" + k].value = _vvalue;                                        |
| 426 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                                    |
| 428 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                                    |
| 430 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                                    |
| 432 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                                    |
| 434 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;}                                                                                                                           |
| 436 | &lt;%//Special treatment if error code equal 200 (file invalid), in this case a table with the expected and real values is shown%&gt;                                                 |
| 437 | if (myExcel.errorCode == 200) {                                                                                                                                                       |
| 462 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 470 | &lt;%if (zibase_num_employees &gt; 0) {%&gt;                                                                                                                                          |
| 473 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 483 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 493 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 503 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 511 | if (_vShould == _vIs) {                                                                                                                                                               |
| 514 | if (_vShould != _vIs) {_vHeader = _vheaderError;} else {_vHeader = _vHeaderEqual;}                                                                                                    |
| 530 | }else{                                                                                                                                                                                |
| 47  | expresión de cálculo/transformación: try { zibaseEmpCount = Integer.parseInt(zsbaseEmpCount); } catch(Exception e) { zibaseEmpCount = 0; }                                            |
| 48  | expresión de cálculo/transformación: try { zivarbCount = Integer.parseInt(zsvarbCount); } catch(Exception e) { zivarbCount = 0; }                                                     |
| 85  | expresión de cálculo/transformación: try { zibase_num_employees = Integer.parseInt(zbase_num_employees); } catch(Exception e) { zibase_num_employees = 0; }                           |
| 125 | expresión de cálculo/transformación: &lt;% iempVarPlan[ziIndex] = Integer.parseInt(zempVarPlan); %&gt;                                                                                |
| 276 | expresión de cálculo/transformación: this.excelVarbPlanId[i] = this.workSheet.Cells(1, 3 + i).value;                                                                                  |
| 277 | expresión de cálculo/transformación: this.excelEmpsVarbPlan[i] = this.workSheet.Cells(2, 3 + i).value;                                                                                |
| 338 | expresión de cálculo/transformación: _iE = this.baseTableStart + i;                                                                                                                   |
| 372 | expresión de cálculo/transformación: _ioffsetBase = this.recordsBasePlan - this.baseTableLines;&lt;%//Max is necessary in case there are less employees than lines%&gt;               |
| 377 | expresión de cálculo/transformación: _ioffset = this.varbRangeStart + _ioffsetBase;&lt;%//Calculate first offset%&gt;                                                                 |
| 381 | expresión de cálculo/transformación: this.form.elements["SCO_ID_CURRENCY_VARB_" + i].value = this.workSheet.Cells(_ioffset + 2, this.offsetColumns + 9).value;&lt;%// Currency%&gt;   |
| 382 | expresión de cálculo/transformación: this.form.elements["SCO_DT_START_VARB_" + i].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value&lt;%// Revision start%&gt; |
| 383 | expresión de cálculo/transformación: this.form.elements["SCO_DT_END_VARB_" + i].value = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 11).value&lt;%// Revision end%&gt;    |
| 387 | expresión de cálculo/transformación: _iE = _ioffset + (this.varbTableStart-this.varbRangeStart) + k;                                                                                  |
| 464 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 466 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 467 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 475 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 477 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 478 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 485 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 487 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 488 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 495 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 497 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 498 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 505 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 507 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 508 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 516 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vHeader + "&lt;/td&gt;";                                                                        |
| 518 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vShould + "&lt;/td&gt;";                                                                        |
| 519 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _vIs + "&lt;/td&gt;";                                                                            |
| 536 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _sResult + "&lt;/td&gt;";                                                                        |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 9   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 8   | /libreria/funciones_sse.js                         |
| 11  | /css/estilo_mss.css                                |
| 442 | /iconos/advertencia_rojo.gif                       |
| 527 | javascript:window.close()                          |
| 527 | /iconos/entrar_blanco.gif                          |
| 542 | javascript:window.close()                          |
| 542 | /iconos/entrar_blanco.gif                          |
| 551 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_mi.jsp |
| 9   | ../../mss_generico/mss_cr_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                      |
| ------ | --- | -------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp                | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 8   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 527 | javascript:window.close()                          | dinámica   | P06                                                                                    |
| BASE   | 542 | javascript:window.close()                          | dinámica   | P06                                                                                    |
| BASE   | 551 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_mi.jsp | ausente    | P06                                                                                    |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp                | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3_mi.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
