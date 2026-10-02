# mss_g2_p3_me

Identificador: `mss_g2/mss_g2_p3_me.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3_me.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_me.jsp) | `4164458dd4811f6233ecdb849607d6c606c622763e9985cb4ba0eb3c1eb74b79` |    670 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3_me.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3_me.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                            |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 655 | a       | href=javascript:window.close(); title=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;                                                                                                                 |
| 655 | img     | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=&lt;%=Mss_cr.getProperty("msscr.Pop1-12")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 17  | id_wu_plan      | getParameter(request,"id_wu_plan") |
| 52  | minombre        | getBagEntries("minombre")          |

| L   | Variable                | Expresión fuente                                                                    | Resolución estática parcial                                                         |
| --- | ----------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 15  | zsubsesion              | "SSM_SALARY_REVIEW_PROCESS"                                                         | SSM_SALARY_REVIEW_PROCESS                                                           |
| 16  | zmeta4object            | "SSM_SALARY_REVIEW_PROCESS"                                                         | SSM_SALARY_REVIEW_PROCESS                                                           |
| 17  | id_wu_plan              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")              |
| 38  | zibaseEmpCount          | 0                                                                                   | 0                                                                                   |
| 39  | zivarbCount             | 0                                                                                   | 0                                                                                   |
| 40  | zivarbEmpCount          | 0                                                                                   | 0                                                                                   |
| 52  | zminombre               | zsesion.getBagEntries("minombre")                                                   | zsesion.getBagEntries("minombre")                                                   |
| 58  | zlanguageFolder         | CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageId).intValue(), CheckConfig.THCL) |
| 64  | zbase_id_currency       | ""                                                                                  |                                                                                     |
| 65  | zbase_dt_revision_start | ""                                                                                  |                                                                                     |
| 66  | zbase_dt_revision_end   | ""                                                                                  |                                                                                     |
| 67  | zbase_id_base_plan      | ""                                                                                  |                                                                                     |
| 68  | zbase_nm_base_plan      | ""                                                                                  |                                                                                     |
| 69  | zbase_nm_base_plan_type | ""                                                                                  |                                                                                     |
| 70  | zbase_amt_wu_budget     | ""                                                                                  |                                                                                     |
| 71  | zbase_id_work_unit      | ""                                                                                  |                                                                                     |
| 72  | zbase_nm_work_unit      | ""                                                                                  |                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                            |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------- |
| 20  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                              |
| 20  | m4:beginjob   |                                                                                                               |
| 21  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                               |
| 23  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=CR_MSR_EXPORT; m4object=SSM_SALARY_REVIEW_PROCESS                      |
| 24  | m4:param      | name=ARG_ID_WU_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_wu_plan")             |
| 26  | m4:outputdef  | node=SSM_MSR_EMPLOYEES_BASE_PLAN; m4alias=SSM_MSR_EMPLOYEES_BASE_PLAN; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 27  | m4:outputdef  | node=SSM_MSR_VARIABLE_PLANS; m4alias=SSM_MSR_VARIABLE_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 28  | m4:outputdef  | node=SSM_MSR_EMPLOYEES_VAR_PLANS; m4alias=SSM_MSR_EMPLOYEES_VAR_PLANS; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 29  | m4:exec       | node=SSM_MSR_EMPLOYEES_BASE_PLAN; alias=base_plan_emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 30  | m4:exec       | node=SSM_MSR_VARIABLE_PLANS; alias=varb_plan_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS          |
| 31  | m4:exec       | node=SSM_MSR_EMPLOYEES_VAR_PLANS; alias=varb_plan_emp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 32  | m4:endjob     |                                                                                                               |
| 42  | m4:outputexec | var=zsbaseEmpCount; alias=base_plan_emp_count                                                                 |
| 43  | m4:outputexec | var=zsvarbCount; alias=varb_plan_count                                                                        |
| 44  | m4:outputexec | var=zsvarbEmpCount; alias=varb_plan_emp_count                                                                 |
| 128 | m4:item       | var=; item=SCO_ID_CURRENCY; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 129 | m4:item       | var=; item=SCO_DT_REVISION_START; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                           |
| 130 | m4:item       | var=; item=SCO_DT_REVISION_END; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                             |
| 131 | m4:item       | var=; item=SCO_ID_BASE_PLAN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 132 | m4:item       | var=; item=SCO_NM_BASE_PLAN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 133 | m4:item       | var=; item=SCO_NM_PLAN_TYPE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 134 | m4:item       | var=; item=SCO_AMT_WU_BUDGET; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                               |
| 135 | m4:item       | var=; item=SCO_ID_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 136 | m4:item       | var=; item=SCO_NM_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 138 | m4:dataloop   | outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                                                         |
| 139 | m4:current    | var=ziCurPos; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                                           |
| 141 | m4:item       | item=SCO_ID_HR; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                             |
| 142 | m4:item       | item=SCO_GB_NAME; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                           |
| 143 | m4:item       | item=SCO_OR_HR_ROLE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                        |
| 144 | m4:item       | item=SCO_ID_JOB; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                            |
| 145 | m4:item       | item=SCO_NM_JOB; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                            |
| 146 | m4:item       | item=SCO_JOB_LEVEL; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                         |
| 147 | m4:item       | item=SCO_NM_SALARY_GRADE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                   |
| 148 | m4:item       | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                          |
| 149 | m4:item       | item=SCO_NM_SALARY_TYPE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                    |
| 150 | m4:item       | item=SCO_AMT_BASE_SALARY; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                   |
| 151 | m4:item       | item=SCO_AMT_REC_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 152 | m4:item       | item=SCO_PRC_REC_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 153 | m4:item       | item=SCO_AMT_SUG_MIN_INC; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                   |
| 154 | m4:item       | item=SCO_AMT_SUG_MAX_INC; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                   |
| 155 | m4:item       | item=SCO_PRC_SUG_COMPARATIO; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 156 | m4:item       | item=SCO_PRC_SUG_POSITION; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 157 | m4:item       | item=SCO_AMT_REV_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 158 | m4:item       | item=SCO_PRC_REV_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 159 | m4:item       | item=SCO_PRC_REV_COMPARATIO; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                |
| 160 | m4:item       | item=SCO_PRC_REV_POSITION; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                  |
| 161 | m4:item       | item=SCO_AMT_SAL_GRADE_MIN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 162 | m4:item       | item=SCO_AMT_SAL_GRADE_MID; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 163 | m4:item       | item=SCO_AMT_SAL_GRADE_MAX; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 164 | m4:item       | item=SCO_EMP_CHANGE_FACTOR; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_BASE_PLAN                                 |
| 184 | m4:dataloop   | outputdef=SSM_MSR_VARIABLE_PLANS                                                                              |
| 185 | m4:current    | var=ziCurPos; outputdef=SSM_MSR_VARIABLE_PLANS                                                                |
| 187 | m4:item       | item=SCO_NUM_EMPLOYEES; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                          |
| 188 | m4:item       | item=SCO_ID_CURRENCY; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 189 | m4:item       | item=SCO_DT_REVISION_START; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                      |
| 190 | m4:item       | item=SCO_DT_REVISION_END; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                        |
| 191 | m4:item       | item=SCO_ID_VAR_PLAN; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 192 | m4:item       | item=SCO_NM_VAR_PLAN; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                            |
| 193 | m4:item       | item=SCO_NM_PLAN_TYPE; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 194 | m4:item       | item=SCO_AMT_WU_BUDGET; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                          |
| 195 | m4:item       | item=SCO_ID_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 196 | m4:item       | item=SCO_NM_WORK_UNIT; jsafe=true; outputdef=SSM_MSR_VARIABLE_PLANS                                           |
| 232 | m4:dataloop   | outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                                                         |
| 233 | m4:current    | var=ziCurPos; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                                           |
| 235 | m4:item       | item=SCO_ID_HR; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                             |
| 236 | m4:item       | item=SCO_GB_NAME; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                           |
| 237 | m4:item       | item=SCO_OR_HR_ROLE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                        |
| 238 | m4:item       | item=SCO_ID_JOB; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                            |
| 239 | m4:item       | item=SCO_NM_JOB; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                            |
| 240 | m4:item       | item=SCO_JOB_LEVEL; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                         |
| 241 | m4:item       | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                          |
| 242 | m4:item       | item=SCO_NM_SALARY_TYPE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                    |
| 243 | m4:item       | item=SCO_AMT_CURRENT_VALUE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                 |
| 244 | m4:item       | item=SCO_AMT_REC_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                  |
| 245 | m4:item       | item=SCO_PRC_REC_INCREASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                  |
| 246 | m4:item       | item=SCO_AMT_SUG_MIN_DIF; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                   |
| 247 | m4:item       | item=SCO_AMT_SUG_MAX_DIF; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                   |
| 248 | m4:item       | item=SCO_PRC_MAX_BASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                      |
| 249 | m4:item       | item=SCO_NUM_INDEX_BASE; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                    |
| 250 | m4:item       | item=SCO_ID_VAR_PLAN; jsafe=true; outputdef=SSM_MSR_EMPLOYEES_VAR_PLANS                                       |
| 670 | m4:endpage    |                                                                                                               |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función               | Argumentos            |
| --- | --------------------- | --------------------- |
| 260 | definitionExcel       | visible               |
| 297 | _openExcel            | pathTemplate, visible |
| 325 | _closeExcel           |                       |
| 339 | _prepareBasePlan      |                       |
| 373 | _prepareVariablePlans |                       |
| 442 | _exportBasePlan       |                       |
| 502 | _exportVariablePlans  |                       |
| 574 | _exportMetaInfo       |                       |
| 604 | _finish               | save                  |
| 624 | _GenerateWorkSheet    |                       |

| L   | Condición / acción / mensaje literal                                                                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73  | if (zibaseEmpCount &gt; 0) {                                                                                                                                            |
| 169 | if (zivarbCount &gt; 0) {                                                                                                                                               |
| 303 | if(this.oExcel != null) {                                                                                                                                               |
| 311 | }else{                                                                                                                                                                  |
| 327 | if (!this.statusExcel &amp;&amp; this.oExcel != null) {                                                                                                                 |
| 329 | }else{                                                                                                                                                                  |
| 330 | if (this.workBook != null) {                                                                                                                                            |
| 343 | if (this.recordsBasePlan &gt; 0) {                                                                                                                                      |
| 344 | if (this.baseTableLines &lt; this.recordsBasePlan) {                                                                                                                    |
| 351 | } else if (this.baseTableLines &gt; this.recordsBasePlan) {                                                                                                             |
| 357 | }else{                                                                                                                                                                  |
| 381 | if (this.variablePlans &lt; 1) {                                                                                                                                        |
| 386 | }else{                                                                                                                                                                  |
| 387 | if (this.recordsBasePlan == 0) {                                                                                                                                        |
| 392 | }else{                                                                                                                                                                  |
| 399 | if (this.variablePlans &gt; 1) {                                                                                                                                        |
| 416 | if (this.varbTableLines &lt; this.recordsVarbPlan[i]) {                                                                                                                 |
| 423 | } else if (this.varbTableLines &gt; this.recordsVarbPlan[i]) {                                                                                                          |
| 454 | if (_vvalue == null &#124;&#124; _vvalue == '') {                                                                                                                       |
| 458 | if (_vvalue == null &#124;&#124; _vvalue == '') {                                                                                                                       |
| 511 | if (this.recordsBasePlan &gt; 0) {                                                                                                                                      |
| 513 | _ioffsetBase = this.recordsBasePlan - this.baseTableLines;&lt;%//Max is necessary in case there are less employees than lines%&gt;                                      |
| 514 | }else{                                                                                                                                                                  |
| 529 | if (_vvalue == null &#124;&#124; _vvalue == '') {                                                                                                                       |
| 533 | if (_vvalue == null &#124;&#124; _vvalue == '') {                                                                                                                       |
| 552 | if (this.recordsBasePlan == 0) {                                                                                                                                        |
| 555 | }else{                                                                                                                                                                  |
| 578 | if (this.recordsBasePlan &gt; 0) {                                                                                                                                      |
| 580 | }else{                                                                                                                                                                  |
| 611 | if (save) {                                                                                                                                                             |
| 629 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 631 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 633 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 635 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 637 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 639 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 641 | if (myExcel.errorCode != 0) {_sResult = myExcel.errorText;} else {                                                                                                      |
| 661 | if (myExcel.errorCode == 0) window.close();                                                                                                                             |
| 46  | expresión de cálculo/transformación: try { zibaseEmpCount = Integer.parseInt(zsbaseEmpCount); } catch(Exception e) { zibaseEmpCount = 0; }                              |
| 47  | expresión de cálculo/transformación: try { zivarbCount = Integer.parseInt(zsvarbCount); } catch(Exception e) { zivarbCount = 0; }                                       |
| 48  | expresión de cálculo/transformación: try { zivarbEmpCount = Integer.parseInt(zsvarbEmpCount); } catch(Exception e) { zivarbEmpCount = 0; }                              |
| 346 | expresión de cálculo/transformación: var vindex = new String(this.baseTableStart + 1);                                                                                  |
| 353 | expresión de cálculo/transformación: var vindexStart = new String(this.baseTableStart + this.recordsBasePlan);                                                          |
| 354 | expresión de cálculo/transformación: var vindexEnd = new String(this.baseTableStart + this.baseTableLines - 1);                                                         |
| 360 | expresión de cálculo/transformación: var vindexEnd = new String(this.baseRangeStart + this.baseRangeLines - 1);                                                         |
| 384 | expresión de cálculo/transformación: var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines + this.varbStandAloneOffset - 1);                             |
| 390 | expresión de cálculo/transformación: var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines - 1);                                                         |
| 394 | expresión de cálculo/transformación: var vindexStart = new String(this.varbRangeStart + this.varbStandAloneOffset);                                                     |
| 395 | expresión de cálculo/transformación: var vindexEnd = new String(this.varbRangeStart + this.varbStandAloneOffset + this.varbRangeLines - 1);                             |
| 402 | expresión de cálculo/transformación: var vindexEnd = new String(this.varbRangeStart + this.varbRangeLines - 1);                                                         |
| 405 | expresión de cálculo/transformación: vindexDest = this.varbRangeStart + (this.varbRangeLines * i);                                                                      |
| 410 | expresión de cálculo/transformación: var vindexOrg = new String(this.varbTableStart + 1);                                                                               |
| 413 | expresión de cálculo/transformación: var itableOffset = this.varbTableStart - this.varbRangeStart;                                                                      |
| 418 | expresión de cálculo/transformación: vindexTab = this.varbRangeStart + (this.varbRangeLines * i) + itableOffset + 1;                                                    |
| 425 | expresión de cálculo/transformación: var voffset = this.varbRangeStart + (this.varbRangeLines * i) + itableOffset;                                                      |
| 426 | expresión de cálculo/transformación: var vindexStart = new String(voffset + parseInt(this.recordsVarbPlan[i]));                                                         |
| 427 | expresión de cálculo/transformación: var vindexEnd = new String(voffset + this.varbTableLines - 1);                                                                     |
| 453 | expresión de cálculo/transformación: _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value;                                                        |
| 457 | expresión de cálculo/transformación: _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns +11).value;                                                        |
| 466 | expresión de cálculo/transformación: _iE = this.baseTableStart + i;                                                                                                     |
| 467 | expresión de cálculo/transformación: _iA = i + 1;                                                                                                                       |
| 513 | expresión de cálculo/transformación: _ioffsetBase = this.recordsBasePlan - this.baseTableLines;&lt;%//Max is necessary in case there are less employees than lines%&gt; |
| 518 | expresión de cálculo/transformación: _ioffset = this.varbRangeStart + _ioffsetBase;&lt;%//Calculate first offset%&gt;                                                   |
| 528 | expresión de cálculo/transformación: _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns + 9).value;                                                        |
| 532 | expresión de cálculo/transformación: _vvalue = this.workSheet.Cells(_ioffset + 1, this.offsetColumns +11).value;                                                        |
| 539 | expresión de cálculo/transformación: _iE = _ioffset + (this.varbTableStart-this.varbRangeStart) + k;                                                                    |
| 649 | expresión de cálculo/transformación: _sContent += "&lt;td class='fuentevalor'&gt;" + _sResult + "&lt;/td&gt;";                                                          |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 9   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 8   | /libreria/funciones_sse.js          |
| 11  | /css/estilo_mss.css                 |
| 655 | javascript:window.close()           |
| 655 | /iconos/entrar_blanco.gif           |
| 9   | ../../mss_generico/mss_cr_trans.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 8   | /libreria/funciones_sse.js          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 655 | javascript:window.close()           | dinámica   | P06                                                                                    |
| BASE   | 9   | ../../mss_generico/mss_cr_trans.jsp | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3_me.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
