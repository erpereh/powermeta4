# mss_g2_p3

Identificador: `mss_g2/mss_g2_p3.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p3.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3.jsp) | `86b2def33302719fb7d402554050e70961b15d5c68179c85384b07d2e92b2a34` |    726 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p3.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                |
| --- | --------------------------------------- |
| 483 | [valor dinámico] [valor dinámico]       |
| 510 | -                                       |
| 523 | %                                       |
| 588 | -                                       |
| 602 | - - - -                                 |
| 634 | - - - -                                 |
| 697 | [valor dinámico] [valor dinámico] '&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 478 | a        | href=javascript:show_help(3); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                         |
| 478 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                          |
| 482 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_salariales_mss_58_100.gif; width=58; height=100                                                                                                     |
| 492 | a        | href=javascript:view_message();; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                      |
| 492 | img      | src=/iconos/admiracion_blanco.gif; alt=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                      |
| 511 | a        | href=javascript:view_sal_grade(); shape=rect                                                                                                                                                             |
| 532 | form     | name=redireccion; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                        |
| 535 | form     | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                                          |
| 537 | input    | name=FILTER; type=hidden                                                                                                                                                                                 |
| 539 | input    | name=LAST_BASE_DEPENDANT_REVIEW_VAL; type=hidden; value=                                                                                                                                                 |
| 540 | input    | name=LAST_BASE_DEPENDANT_REVIEW_CUR; type=hidden; value=                                                                                                                                                 |
| 541 | input    | name=LAST_BASE_DEP_REVIEW_DT_START; type=hidden; value=                                                                                                                                                  |
| 542 | input    | name=LAST_BASE_DEP_REVIEW_DT_END; type=hidden; value=                                                                                                                                                    |
| 550 | input    | name=PERFORMANCE_NUMBER; type=hidden; disabled=disabled; value=&lt;%=icount_2%&gt;                                                                                                                       |
| 584 | input    | name=THIS_IS_BASE_PLAN; type=hidden; value=&lt;%=(current)%&gt;                                                                                                                                          |
| 591 | a        | href=&lt;%="javascript:view_message_3('"_+*id_plan_sal_var*+_"');"%&gt;                                                                                                                                  |
| 591 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/advertencia_rojo.gif                                                                                                                                       |
| 594 | a        | href=javascript:view_sal_plan('&lt;%=id_plan_sal_var_Encr%&gt;'); shape=rect                                                                                                                             |
| 607 | a        | href=; onclick=abrirFicha('&lt;%=zId_hr%&gt;','&lt;%=zId_Or_hr%&gt;','&lt;%=zIdPlanEval%&gt;','&lt;%=zStartProc%&gt;');return false;; shape=rect                                                         |
| 616 | a        | href=javascript:view_details('&lt;%=id_plan_sal_var%&gt;'); shape=rect                                                                                                                                   |
| 620 | a        | href=javascript:view_details_2(); shape=rect                                                                                                                                                             |
| 642 | input    | title=JSP_EXPR_Mss_cr.getProperty(; name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; type=checkbox; disabled=disabled; value=NOT_AVAILABLE                                                              |
| 644 | input    | title=JSP_EXPR_Mss_cr.getProperty(; name=&lt;%="SEL_"_+_(current)%&gt;; id=JSP_EXPR_; type=checkbox; value=AVAILABLE; onclick=&lt;%="set_base_salary_dependant("_+_(current)_+_","_+_(icount)_+_")"%&gt; |
| 647 | m4:input | name=&lt;%="HCO_CR_SALARY_P_ID_"__+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                       |
| 649 | m4:input | name=&lt;%="SCO_ID_LEVEL_SAL_PLAN_"__+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                    |
| 651 | m4:input | name=&lt;%="HCO_CR_SPLAN_TP_ID_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                        |
| 653 | m4:input | name=&lt;%="HCO_CR_SALARY_P_NM_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                        |
| 655 | m4:input | name=&lt;%="HCO_CR_B_DEPENDANT_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                        |
| 657 | m4:input | name=&lt;%="HCO_CR_INC_TP_ID_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                          |
| 659 | m4:input | name=&lt;%="LAST_BASE_DEPENDANT_REVIEW_VAL_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                            |
| 661 | m4:input | name=&lt;%="LAST_BASE_DEPENDANT_REVIEW_CUR_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                            |
| 663 | m4:input | name=&lt;%="LAST_BASE_DEP_REVIEW_DT_START_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                             |
| 665 | m4:input | name=&lt;%="LAST_BASE_DEP_REVIEW_DT_END_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                               |
| 667 | m4:input | name=&lt;%="LAST_BASE_DEP_REVIEW_TEXT_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                 |
| 671 | input    | name=ONLY_BUDGET_SAL_PLANS_TP; disabled=disabled; type=hidden; value=0                                                                                                                                   |
| 682 | a        | href=javascript:view_message_2();; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                    |
| 682 | img      | src=/iconos/advertencia_rojo.gif; alt=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                       |
| 687 | a        | href=javascript:marcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                     |
| 687 | img      | src=/iconos/icono_aceptar_todas_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |
| 688 | a        | href=javascript:desmarcar_todos(&lt;%=icount%&gt;);; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                  |
| 688 | img      | src=/iconos/icono_deshacer_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)            |
| 698 | select   | id=SCO_ID_LEVEL; class=fuenteformulario200; name=SCO_ID_LEVEL; disabled=disabled; title=JSP_EXPR_Mss_cr.getProperty(; onchange=javascript:check_performance(&lt;%=icount%&gt;)                           |
| 700 | option   | value=0                                                                                                                                                                                                  |
| 702 | option   | value='&lt;m4:item; item=SCO_ID_LEVEL; htmlsafe=true; outputdef=PERFORMANCE                                                                                                                              |
| 711 | a        | href=javascript:comprobar_accion();; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                                  |
| 711 | img      | src=/iconos/ic_lis_36_36_2.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                      |
| 713 | a        | href=javascript:m4selec_salplans(&lt;%=icount%&gt;); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                  |
| 713 | img      | src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)               |
| 716 | a        | href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=0; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                 |
| 716 | img      | src=/iconos/user_2_next_32.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                      |
| 717 | a        | href=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=1; title=JSP_EXPR_Mss_cr.getProperty(                                                                                                 |
| 717 | img      | src=/iconos/group_next_32.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 15  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable             | Expresión fuente                                                                                          | Resolución estática parcial                                                                               |
| --- | -------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 13  | estado               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                        |
| 15  | zinicios             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                      |
| 25  | zsubsesion           | "SSM_SALARY_REVIEW_PROCESS"                                                                               | SSM_SALARY_REVIEW_PROCESS                                                                                 |
| 26  | zestado              | "21"                                                                                                      | 21                                                                                                        |
| 546 | icount_2             | 0                                                                                                         | 0                                                                                                         |
| 554 | icount               | 0                                                                                                         | 0                                                                                                         |
| 580 | id_plan_sal_var_Encr | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", id_plan_sal_var) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", id_plan_sal_var) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                         |
| --- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| 461 | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                           |
| 461 | m4:beginjob   |                                                                                                            |
| 462 | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                            |
| 463 | m4:outputdef  | node=SSM_EMPLOYEE_SALARY_PLANS; m4alias=SAL_PLAN; m4object=SSM_SALARY_REVIEW_PROCESS                       |
| 464 | m4:outputdef  | node=SSM_INFO_COMES_FROM_ROLE; m4alias=EMPLEADO; m4object=SSM_SALARY_REVIEW_PROCESS                        |
| 465 | m4:outputdef  | node=SSM_PERFORMANCE_LEVEL_LIST; m4alias=PERFORMANCE; m4object=SSM_SALARY_REVIEW_PROCESS                   |
| 466 | m4:outputdef  | node=SSM_SALARY_REVIEW_PROCESS; m4alias=GENERAL; m4object=SSM_SALARY_REVIEW_PROCESS                        |
| 467 | m4:exec       | node=SSM_EMPLOYEE_SALARY_PLANS; alias=sal_plan_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS     |
| 468 | m4:exec       | node=SSM_PERFORMANCE_LEVEL_LIST; alias=performance_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 470 | m4:endjob     |                                                                                                            |
| 485 | m4:item       | m4varname=information; item=PROCESS_USEFUL_INFORMATION; htmlsafe=true; outputdef=EMPLEADO                  |
| 507 | m4:item       | item=HR_ID; htmlsafe=true; outputdef=EMPLEADO                                                              |
| 508 | m4:item       | item=HR_NAME; htmlsafe=true; outputdef=EMPLEADO                                                            |
| 509 | m4:item       | item=ROLE_NAME; htmlsafe=true; outputdef=EMPLEADO                                                          |
| 510 | m4:item       | item=JOB_ID; htmlsafe=true; outputdef=EMPLEADO                                                             |
| 510 | m4:item       | item=JOB_NAME; htmlsafe=true; outputdef=EMPLEADO                                                           |
| 511 | m4:item       | item=SALARY_GRADE_NAME; htmlsafe=true; outputdef=EMPLEADO                                                  |
| 522 | m4:item       | item=EMPLOYEE_PARTIAL_TIME_TXT; htmlsafe=true; outputdef=EMPLEADO                                          |
| 523 | m4:item       | item=EMPLOYEE_PART_TIME_PERCENTAGE; htmlsafe=true; outputdef=EMPLEADO                                      |
| 524 | m4:item       | item=EMPLOYEE_WORKING_HOURS; htmlsafe=true; outputdef=EMPLEADO                                             |
| 525 | m4:item       | item=BASE_SALARY; htmlsafe=true; outputdef=EMPLEADO                                                        |
| 525 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                                               |
| 526 | m4:item       | item=BASE_SALARY_REAL; htmlsafe=true; outputdef=EMPLEADO                                                   |
| 526 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                                               |
| 547 | m4:outputexec | var=count_2; alias=performance_count                                                                       |
| 555 | m4:outputexec | var=count; alias=sal_plan_count                                                                            |
| 570 | m4:dataloop   | outputdef=SAL_PLAN                                                                                         |
| 575 | m4:current    | var=current; outputdef=SAL_PLAN                                                                            |
| 577 | m4:item       | m4varname=id_plan_sal_var; item=HCO_CR_SALARY_P_ID; htmlsafe=true; outputdef=SAL_PLAN                      |
| 578 | m4:item       | m4varname=id_plan_sal_tp; item=HCO_CR_SPLAN_TP_ID; htmlsafe=true; outputdef=SAL_PLAN                       |
| 579 | m4:item       | m4varname=future_info; item=FUTURE_REVIEWS_INFORMATION; htmlsafe=true; outputdef=SAL_PLAN                  |
| 594 | m4:item       | item=HCO_CR_SALARY_P_ID; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 594 | m4:item       | item=HCO_CR_SALARY_P_NM; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 596 | m4:item       | m4varname=zId_hr; item=HR_ID; htmlsafe=true; outputdef=EMPLEADO                                            |
| 597 | m4:item       | m4varname=zId_Or_hr; item=HR_ROLE_OR; htmlsafe=true; outputdef=EMPLEADO                                    |
| 598 | m4:item       | m4varname=zStartProc; item=SCO_DT_START_PROC; htmlsafe=true; outputdef=SAL_PLAN                            |
| 599 | m4:item       | m4varname=zIdPlanEval; item=SCO_ID_EVAL_PLAN; htmlsafe=true; outputdef=SAL_PLAN                            |
| 600 | m4:item       | m4varname=zNmEvalProc; item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SAL_PLAN                            |
| 607 | m4:item       | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=SAL_PLAN                                                   |
| 609 | m4:item       | item=HCO_CR_SPLAN_TP_NM; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 611 | m4:item       | m4varname=plan_state; item=THIS_PLAN_STATE; htmlsafe=true; outputdef=SAL_PLAN                              |
| 616 | m4:item       | item=THIS_PLAN_MESSAGE; htmlsafe=true; outputdef=SAL_PLAN                                                  |
| 620 | m4:item       | item=THIS_PLAN_MESSAGE; htmlsafe=true; outputdef=SAL_PLAN                                                  |
| 622 | m4:item       | item=THIS_PLAN_MESSAGE; htmlsafe=true; outputdef=SAL_PLAN                                                  |
| 628 | m4:item       | item=CURRENT_REVIEW_VALUE; htmlsafe=true; outputdef=SAL_PLAN                                               |
| 628 | m4:item       | item=BASE_SALARY_CURRENCY; htmlsafe=true; outputdef=EMPLEADO                                               |
| 631 | m4:item       | m4varname=last_review_date; item=LAST_REVIEW; htmlsafe=true; outputdef=SAL_PLAN                            |
| 636 | m4:item       | item=LAST_REVIEW; htmlsafe=true; outputdef=SAL_PLAN                                                        |
| 647 | m4:item       | item=HCO_CR_SALARY_P_ID; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 649 | m4:item       | item=SCO_ID_LEVEL; htmlsafe=true; outputdef=SAL_PLAN                                                       |
| 651 | m4:item       | item=HCO_CR_SPLAN_TP_ID; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 653 | m4:item       | item=HCO_CR_SALARY_P_NM; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 655 | m4:item       | item=HCO_CR_B_DEPENDANT; htmlsafe=true; outputdef=SAL_PLAN                                                 |
| 657 | m4:item       | item=HCO_CR_INC_TP_ID; htmlsafe=true; outputdef=SAL_PLAN                                                   |
| 659 | m4:item       | item=LAST_BASE_DEPENDANT_REVIEW_VAL; htmlsafe=true; outputdef=SAL_PLAN                                     |
| 661 | m4:item       | item=LAST_BASE_DEPENDANT_REVIEW_CUR; htmlsafe=true; outputdef=SAL_PLAN                                     |
| 663 | m4:item       | item=LAST_BASE_DEP_REVIEW_DT_START; htmlsafe=true; outputdef=SAL_PLAN                                      |
| 665 | m4:item       | item=LAST_BASE_DEP_REVIEW_DT_END; htmlsafe=true; outputdef=SAL_PLAN                                        |
| 667 | m4:item       | item=LAST_BASE_DEP_REVIEW_TEXT; htmlsafe=true; outputdef=SAL_PLAN                                          |
| 676 | m4:item       | m4varname=html_control; item=HTML_SAL_PLANS_NOT_SELECTED; htmlsafe=true; outputdef=GENERAL                 |
| 701 | m4:dataloop   | outputdef=PERFORMANCE                                                                                      |
| 702 | m4:item       | item=SCO_NM_LEVEL; htmlsafe=true; outputdef=PERFORMANCE                                                    |
| 726 | m4:endpage    |                                                                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                   | Argumentos                        |
| --- | ------------------------- | --------------------------------- |
| 32  | comprobar_accion          |                                   |
| 40  | check_performance         | num_reg                           |
| 131 | desmarcar_todos           | num_reg                           |
| 163 | marcar_todos              | num_reg                           |
| 188 | m4selec_salplans          | num_reg                           |
| 238 | view_sal_plan             | sal_plan_id                       |
| 246 | view_message              |                                   |
| 253 | view_message_2            |                                   |
| 260 | view_details              | sal_plan_id                       |
| 268 | view_details_2            |                                   |
| 276 | view_sal_grade            |                                   |
| 283 | set_base_salary_dependant | num_reg,num_tot_reg               |
| 413 | there_are_only_budget     | num_total_reg                     |
| 441 | show_help                 | cod_help                          |
| 448 | view_message_3            | sal_plan                          |
| 454 | abrirFicha                | empleado,ordinal,id_plan,fec_proc |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                      |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                              |
| 35  | if (confirm("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad")%&gt;"))                                                                                                                                                                                                                                             |
| 48  | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                  |
| 54  | if ((sal_plan_tp!="BASE")&amp;&amp; (form.elements["SEL_" + i].value=="AVAILABLE"))                                                                                                                                                                                                                                  |
| 58  | if (form.elements["SEL_" + i].disabled==true)                                                                                                                                                                                                                                                                        |
| 71  | if (form.SCO_ID_LEVEL.options.value == level_required)                                                                                                                                                                                                                                                               |
| 82  | if (level_required!="")                                                                                                                                                                                                                                                                                              |
| 85  | if (performance_selected=="POOR")                                                                                                                                                                                                                                                                                    |
| 86  | if ((level_required=="NEEDS_IMP") &#124;&#124; (level_required=="SATISFACT") &#124;&#124; (level_required=="EXCELLENT") &#124;&#124; (level_required=="OUTSTAND"))                                                                                                                                                   |
| 95  | if (performance_selected=="NEEDS_IMP")                                                                                                                                                                                                                                                                               |
| 96  | if ((level_required=="SATISFACT") &#124;&#124; (level_required=="EXCELLENT") &#124;&#124; (level_required=="OUTSTAND"))                                                                                                                                                                                              |
| 105 | if (performance_selected=="SATISFACT")                                                                                                                                                                                                                                                                               |
| 106 | if ((level_required=="EXCELLENT") &#124;&#124; (level_required=="OUTSTAND"))                                                                                                                                                                                                                                         |
| 115 | if (performance_selected=="EXCELLENT")                                                                                                                                                                                                                                                                               |
| 116 | if (level_required=="OUTSTAND")                                                                                                                                                                                                                                                                                      |
| 127 | if (show_error==1)                                                                                                                                                                                                                                                                                                   |
| 128 | alert(error_text);                                                                                                                                                                                                                                                                                                   |
| 134 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                  |
| 143 | if (form.elements["SEL_" + i].value == "AVAILABLE")                                                                                                                                                                                                                                                                  |
| 166 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                  |
| 169 | if(form.elements["SEL_" + i].disabled==false)                                                                                                                                                                                                                                                                        |
| 179 | if(form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                          |
| 180 | if (form.elements["HCO_CR_INC_TP_ID_" + i].value!="BUD")                                                                                                                                                                                                                                                             |
| 190 | if (num_reg &gt; 0)                                                                                                                                                                                                                                                                                                  |
| 198 | if (form.elements["SEL_" + i].checked==false)                                                                                                                                                                                                                                                                        |
| 200 | else                                                                                                                                                                                                                                                                                                                 |
| 204 | if (seleccionado == 0)                                                                                                                                                                                                                                                                                               |
| 208 | if (form.elements["SEL_" + i].value== "AVAILABLE")                                                                                                                                                                                                                                                                   |
| 212 | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad4")%&gt;");                                                                                                                                                                                                                                                  |
| 215 | else                                                                                                                                                                                                                                                                                                                 |
| 221 | if (form.elements["ONLY_BUDGET_SAL_PLANS_TP"].value!="0") // Con esto sabemos si es necesario                                                                                                                                                                                                                        |
| 222 | if (form.elements["SCO_ID_LEVEL"].value == "0") // Con esto sabemos si la hemos seleccionado                                                                                                                                                                                                                         |
| 226 | if (form.elements["SEL_" + i].value== "AVAILABLE")                                                                                                                                                                                                                                                                   |
| 229 | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad32")%&gt;");                                                                                                                                                                                                                                                 |
| 290 | if (this_checked_plan_type=="BASE")                                                                                                                                                                                                                                                                                  |
| 292 | if (form.elements["SEL_" + num_reg].checked==true)                                                                                                                                                                                                                                                                   |
| 297 | else                                                                                                                                                                                                                                                                                                                 |
| 300 | if(form.elements["HCO_CR_B_DEPENDANT_" + i].value==1)                                                                                                                                                                                                                                                                |
| 304 | else                                                                                                                                                                                                                                                                                                                 |
| 306 | if (is_dependant!=1)                                                                                                                                                                                                                                                                                                 |
| 326 | if (form.elements["SEL_" + num_reg].checked==false)                                                                                                                                                                                                                                                                  |
| 333 | if (value_dependant &gt; 0)                                                                                                                                                                                                                                                                                          |
| 350 | if (value_dependant &gt; 0)                                                                                                                                                                                                                                                                                          |
| 356 | if (form.elements["SEL_" + idx_base_sal_plan].checked==true)                                                                                                                                                                                                                                                         |
| 365 | if (confirm(text_dependant))                                                                                                                                                                                                                                                                                         |
| 370 | if (j != num_reg)                                                                                                                                                                                                                                                                                                    |
| 395 | if (form.elements["SEL_" + idx_base_sal_plan].value== "AVAILABLE")                                                                                                                                                                                                                                                   |
| 398 | else                                                                                                                                                                                                                                                                                                                 |
| 406 | alert(text);                                                                                                                                                                                                                                                                                                         |
| 423 | if(form.elements["SEL_" + i].checked==true)                                                                                                                                                                                                                                                                          |
| 425 | if (form.elements["HCO_CR_INC_TP_ID_" + i].value!="BUD")                                                                                                                                                                                                                                                             |
| 487 | &lt;% if(information.equals("")) { %&gt;                                                                                                                                                                                                                                                                             |
| 489 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 558 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                       |
| 582 | &lt;% if(id_plan_sal_tp.equals("BASE")) { %&gt;                                                                                                                                                                                                                                                                      |
| 590 | &lt;% if(!future_info.equals("")) {%&gt;                                                                                                                                                                                                                                                                             |
| 601 | &lt;% if((zNmEvalProc==null)&#124;&#124;(zNmEvalProc.equals(""))) { %&gt;                                                                                                                                                                                                                                            |
| 603 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 613 | &lt;% if(!plan_state.equals("")) { %&gt;                                                                                                                                                                                                                                                                             |
| 615 | &lt;% if(plan_state.equals("P")) { %&gt;                                                                                                                                                                                                                                                                             |
| 617 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 619 | &lt;% if(plan_state.equals("N")) { %&gt;                                                                                                                                                                                                                                                                             |
| 621 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 627 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 633 | &lt;% if((last_review_date==null)&#124;&#124;(last_review_date.equals(""))) { %&gt;                                                                                                                                                                                                                                  |
| 635 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 641 | &lt;% if((plan_state.equals("P"))&#124;&#124;(plan_state.equals("N"))) { %&gt;                                                                                                                                                                                                                                       |
| 643 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 678 | &lt;% if(!html_control.equals("")) { %&gt;                                                                                                                                                                                                                                                                           |
| 683 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                                     |
| 51  | expresión de cálculo/transformación: var sal_plan_tp = form.elements["HCO_CR_SPLAN_TP_ID_" + i].value;                                                                                                                                                                                                               |
| 52  | expresión de cálculo/transformación: var sal_plan_name = form.elements["HCO_CR_SALARY_P_NM_" + i].value;                                                                                                                                                                                                             |
| 61  | expresión de cálculo/transformación: var level_required = form.elements["SCO_ID_LEVEL_SAL_PLAN_" + i].value;                                                                                                                                                                                                         |
| 88  | expresión de cálculo/transformación: error_text = error_text + "\n" + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%&gt;" + " " + sal_plan_name                                                                                                                                                                   |
| 89  | expresión de cálculo/transformación: error_text = error_text + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%&gt;" + " " + level_required_name;                                                                                                                                                              |
| 98  | expresión de cálculo/transformación: error_text = error_text + "\n" + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%&gt;" + " " + sal_plan_name                                                                                                                                                                   |
| 99  | expresión de cálculo/transformación: error_text = error_text + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%&gt;" + " " + level_required_name;                                                                                                                                                              |
| 108 | expresión de cálculo/transformación: error_text = error_text + "\n" + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%&gt;" + " " + sal_plan_name                                                                                                                                                                   |
| 109 | expresión de cálculo/transformación: error_text = error_text + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%&gt;" + " " + level_required_name;                                                                                                                                                              |
| 118 | expresión de cálculo/transformación: error_text = error_text + "\n" + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_ID16-3")%&gt;" + " " + sal_plan_name                                                                                                                                                                   |
| 119 | expresión de cálculo/transformación: error_text = error_text + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad3")%&gt;" + " " + level_required_name;                                                                                                                                                              |
| 199 | expresión de cálculo/transformación: text_filter = text_filter + form.elements["HCO_CR_SALARY_P_ID_" + i].value + ";"                                                                                                                                                                                                |
| 240 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_sal.jsp?ID_SAL_PL=" + sal_plan_id;                                                                                                                                                                                      |
| 241 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=600";                                                                                                                                                             |
| 249 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";                                                                                                                                                              |
| 256 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=550";                                                                                                                                                             |
| 262 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_pending.jsp?ID_SAL_PL=" + sal_plan_id;                                                                                                                                                                                  |
| 263 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=400";                                                                                                                                                              |
| 271 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=300,height=350";                                                                                                                                                              |
| 279 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=500,height=250";                                                                                                                                                              |
| 287 | expresión de cálculo/transformación: var is_dependant = form.elements["HCO_CR_B_DEPENDANT_" + num_reg].value;                                                                                                                                                                                                        |
| 288 | expresión de cálculo/transformación: var this_checked_plan_type = form.elements["HCO_CR_SPLAN_TP_ID_" + num_reg].value;                                                                                                                                                                                              |
| 319 | expresión de cálculo/transformación: var value_dependant = form.elements["LAST_BASE_DEPENDANT_REVIEW_VAL_" + num_reg].value;                                                                                                                                                                                         |
| 320 | expresión de cálculo/transformación: value_dependant = parseInt(value_dependant)                                                                                                                                                                                                                                     |
| 321 | expresión de cálculo/transformación: var value_currency_dependant = form.elements["LAST_BASE_DEPENDANT_REVIEW_CUR_" + num_reg].value;                                                                                                                                                                                |
| 322 | expresión de cálculo/transformación: var fec_ini_dependant = form.elements["LAST_BASE_DEP_REVIEW_DT_START_" + num_reg].value;                                                                                                                                                                                        |
| 323 | expresión de cálculo/transformación: var fec_fin_dependant = form.elements["LAST_BASE_DEP_REVIEW_DT_END_" + num_reg].value;                                                                                                                                                                                          |
| 324 | expresión de cálculo/transformación: var text_dependant = form.elements["LAST_BASE_DEP_REVIEW_TEXT_" + num_reg].value;                                                                                                                                                                                               |
| 400 | expresión de cálculo/transformación: var name = form.elements["HCO_CR_SALARY_P_NM_" + idx_base_sal_plan].value;                                                                                                                                                                                                      |
| 401 | expresión de cálculo/transformación: var name_variable = form.elements["HCO_CR_SALARY_P_NM_" + num_reg].value;                                                                                                                                                                                                       |
| 402 | expresión de cálculo/transformación: var text = "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad6")%&gt;" + " " + name;                                                                                                                                                                                            |
| 403 | expresión de cálculo/transformación: text = text + "." + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad6")%&gt;";                                                                                                                                                                                                |
| 404 | expresión de cálculo/transformación: text = text + ". " + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad7")%&gt;" + "'" + name + "'" + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad8")%&gt;";                                                                                                              |
| 405 | expresión de cálculo/transformación: text = text + name_variable + " " + "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad9")%&gt;";                                                                                                                                                                                |
| 443 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                                                                                                                                                                              |
| 444 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=1000";                                                                                                                                                            |
| 450 | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?salary_plan=" + sal_plan + "&amp;BASE=7";                                                                                                                                                                   |
| 451 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=400,height=350";                                                                                                                                                              |
| 510 | expresión de cálculo/transformación: &lt;td class="fuentevalor"&gt; &lt;m4:item item="JOB_ID" htmlsafe="true" outputdef="EMPLEADO"/&gt; -  &lt;m4:item item="JOB_NAME" htmlsafe="true" outputdef="EMPLEADO"/&gt;&lt;/td&gt;                                                                                          |
| 548 | expresión de cálculo/transformación: &lt;% try { icount_2 = Integer.parseInt(count_2); } catch(Exception e) { icount_2 = 0; }%&gt;                                                                                                                                                                                   |
| 556 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                         |
| 591 | expresión de cálculo/transformación: &lt;a href= &lt;%="javascript:view_message_3('" + id_plan_sal_var + "');"%&gt;&gt;&lt;img alt="&lt;%=Mss_cr.getProperty("msscr.Pop1-20")%&gt;" src="/iconos/advertencia_rojo.gif"/&gt;&lt;/a&gt;                                                                                |
| 594 | expresión de cálculo/transformación: &lt;a href="javascript:view_sal_plan('&lt;%=id_plan_sal_var_Encr%&gt;')" shape="rect"&gt;&lt;m4:item item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN"/&gt; - &lt;m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/a&gt;&lt;/td&gt; |
| 642 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad24")%&gt;" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" type="checkbox" disabled="disabled" value="NOT_AVAILABLE"/&gt;                                                                  |
| 644 | expresión de cálculo/transformación: &lt;input title="&lt;%=Mss_cr.getProperty("msscr.Confirm_ad24")%&gt;" name='&lt;%= "SEL_" + (current)%&gt;' id="&lt;%= "SEL_" + (current)%&gt;" type="checkbox" value="AVAILABLE" onclick='&lt;%= "set_base_salary_dependant(" + (current) + "," + (icount) + ")"%&gt;'/&gt;    |
| 647 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "HCO_CR_SALARY_P_ID_" + (current)%&gt;' type="hidden" disabled="disabled" &gt;&lt;m4:item item="HCO_CR_SALARY_P_ID" htmlsafe="true" outputdef="SAL_PLAN" /&gt;&lt;/m4:input&gt;                                                                       |
| 649 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "SCO_ID_LEVEL_SAL_PLAN_" + (current)%&gt;' type="hidden" disabled="disabled" &gt;&lt;m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="SAL_PLAN" /&gt;&lt;/m4:input&gt;                                                                          |
| 651 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "HCO_CR_SPLAN_TP_ID_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="HCO_CR_SPLAN_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                                         |
| 653 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "HCO_CR_SALARY_P_NM_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="HCO_CR_SALARY_P_NM" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                                         |
| 655 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "HCO_CR_B_DEPENDANT_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="HCO_CR_B_DEPENDANT" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                                         |
| 657 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "HCO_CR_INC_TP_ID_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="HCO_CR_INC_TP_ID" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                                             |
| 659 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "LAST_BASE_DEPENDANT_REVIEW_VAL_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="LAST_BASE_DEPENDANT_REVIEW_VAL" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                 |
| 661 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "LAST_BASE_DEPENDANT_REVIEW_CUR_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="LAST_BASE_DEPENDANT_REVIEW_CUR" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                 |
| 663 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "LAST_BASE_DEP_REVIEW_DT_START_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="LAST_BASE_DEP_REVIEW_DT_START" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                   |
| 665 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "LAST_BASE_DEP_REVIEW_DT_END_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="LAST_BASE_DEP_REVIEW_DT_END" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                       |
| 667 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "LAST_BASE_DEP_REVIEW_TEXT_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="LAST_BASE_DEP_REVIEW_TEXT" htmlsafe="true" outputdef="SAL_PLAN"/&gt;&lt;/m4:input&gt;                                                           |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 6   | ../../mss_generico/mss_cr_trans.jsp                   |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 21  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp         |
| 724 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                         |
| --- | ------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                       |
| 10  | /libreria/funciones_sse.js                                                |
| 478 | javascript:show_help(3)                                                   |
| 478 | /iconos/ic_help_25_31_0.gif                                               |
| 482 | /iconos/noname_salariales_mss_58_100.gif                                  |
| 492 | javascript:view_message();                                                |
| 492 | /iconos/admiracion_blanco.gif                                             |
| 511 | javascript:view_sal_grade()                                               |
| 532 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?                          |
| 535 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_p.jsp?                        |
| 591 | /iconos/advertencia_rojo.gif                                              |
| 594 | javascript:view_sal_plan(                                                 |
| 616 | javascript:view_details(                                                  |
| 620 | javascript:view_details_2()                                               |
| 682 | javascript:view_message_2();                                              |
| 682 | /iconos/advertencia_rojo.gif                                              |
| 687 | javascript:marcar_todos(&lt;%=icount%&gt;);                               |
| 687 | /iconos/icono_aceptar_todas_36_36.gif                                     |
| 688 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                            |
| 688 | /iconos/icono_deshacer_mss_36_36.gif                                      |
| 711 | javascript:comprobar_accion();                                            |
| 711 | /iconos/ic_lis_36_36_2.gif                                                |
| 713 | javascript:m4selec_salplans(&lt;%=icount%&gt;)                            |
| 713 | /iconos/icono_siguiente_36_36.gif                                         |
| 716 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=0           |
| 716 | /iconos/user_2_next_32.gif                                                |
| 717 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=1           |
| 717 | /iconos/group_next_32.gif                                                 |
| 6   | ../../mss_generico/mss_cr_trans.jsp                                       |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                   |
| 21  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                        |
| 22  | ../../sse_generico/espanol/generico_links.jsp                             |
| 240 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_sal.jsp?ID_SAL_PL=            |
| 248 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp                   |
| 255 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=4            |
| 262 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_pending.jsp?ID_SAL_PL=        |
| 270 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=5            |
| 278 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_grade.jsp                     |
| 443 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=                 |
| 450 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?salary_plan=      |
| 456 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p20.jsp?estado=31&amp;SSM_ID_HR= |
| 724 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 6   | ../../mss_generico/mss_cr_trans.jsp                                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 21  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp                             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 724 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 10  | /libreria/funciones_sse.js                                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 478 | javascript:show_help(3)                                                   | dinámica   | P06                                                                                             |
| BASE   | 492 | javascript:view_message();                                                | dinámica   | P06                                                                                             |
| BASE   | 511 | javascript:view_sal_grade()                                               | dinámica   | P06                                                                                             |
| BASE   | 532 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?                          | ausente    | P06                                                                                             |
| BASE   | 535 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_p.jsp?                        | ausente    | P06                                                                                             |
| BASE   | 594 | javascript:view_sal_plan(                                                 | dinámica   | P06                                                                                             |
| BASE   | 616 | javascript:view_details(                                                  | dinámica   | P06                                                                                             |
| BASE   | 620 | javascript:view_details_2()                                               | dinámica   | P06                                                                                             |
| BASE   | 682 | javascript:view_message_2();                                              | dinámica   | P06                                                                                             |
| BASE   | 687 | javascript:marcar_todos(&lt;%=icount%&gt;);                               | dinámica   | P06                                                                                             |
| BASE   | 688 | javascript:desmarcar_todos(&lt;%=icount%&gt;);                            | dinámica   | P06                                                                                             |
| BASE   | 711 | javascript:comprobar_accion();                                            | dinámica   | P06                                                                                             |
| BASE   | 713 | javascript:m4selec_salplans(&lt;%=icount%&gt;)                            | dinámica   | P06                                                                                             |
| BASE   | 716 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=0           | ausente    | P06                                                                                             |
| BASE   | 717 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p4_salto.jsp?control=1           | ausente    | P06                                                                                             |
| BASE   | 6   | ../../mss_generico/mss_cr_trans.jsp                                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 21  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp                             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 240 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_sal.jsp?ID_SAL_PL=            | ausente    | P06                                                                                             |
| BASE   | 248 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp                   | ausente    | P06                                                                                             |
| BASE   | 255 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=4            | ausente    | P06                                                                                             |
| BASE   | 262 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_pending.jsp?ID_SAL_PL=        | ausente    | P06                                                                                             |
| BASE   | 270 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?BASE=5            | ausente    | P06                                                                                             |
| BASE   | 278 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_grade.jsp                     | ausente    | P06                                                                                             |
| BASE   | 443 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=                 | ausente    | P06                                                                                             |
| BASE   | 450 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_mensaje.jsp?salary_plan=      | ausente    | P06                                                                                             |
| BASE   | 456 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p20.jsp?estado=31&amp;SSM_ID_HR= | ausente    | P06                                                                                             |
| BASE   | 724 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
