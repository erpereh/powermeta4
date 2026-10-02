# mss_g2_p0_wu

Identificador: `mss_g2/mss_g2_p0_wu.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p0_wu.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu.jsp) | `0927e1c0dc3d14fa76df94b18979487c24db2a99997aaa1116ea533ac3e2ec07` |    253 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p0_wu.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0_wu.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 197 | -                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                    |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97  | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/informacion_blanco.gif                                                                                                                         |
| 118 | form     | name=check_manager; action=; method=post; enctype=application/x-www-form-urlencoded                                                                                                          |
| 119 | input    | name=THERE_ARE_MANAGERS; id=THERE_ARE_MANAGERS; type=hidden; value=&lt;%=icount_3%&gt;                                                                                                       |
| 149 | textarea | cols=30; rows=2                                                                                                                                                                              |
| 169 | form     | name=sel_rev; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_p.jsp?; method=post; enctype=application/x-www-form-urlencoded                                                           |
| 171 | input    | name=EMPLOYEE; id=EMPLOYEE; type=hidden                                                                                                                                                      |
| 172 | input    | name=EMPLOYEE_OR; id=EMPLOYEE_OR; type=hidden                                                                                                                                                |
| 173 | input    | name=ANY_CHANGE; id=ANY_CHANGE; type=hidden                                                                                                                                                  |
| 175 | input    | name=WORK_UNIT; id=WORK_UNIT; type=hidden; value=&lt;%=id_wu%&gt;                                                                                                                            |
| 176 | input    | name=RESP_TYPE; id=RESP_TYPE; type=hidden; value=&lt;%=resp_tp%&gt;                                                                                                                          |
| 187 | input    | name=&lt;%="ENC_SCO_ID_HR_"_+_(current)%&gt;; id=&lt;%="ENC_SCO_ID_HR_"_+_(current)%&gt;; type=hidden; value=&lt;%=id_employee%&gt;                                                          |
| 192 | input    | name=&lt;%="ENC_SCO_OR_HR_PERIOD_"_+_(current)%&gt;; id=&lt;%="ENC_SCO_OR_HR_PERIOD_"_+_(current)%&gt;; type=hidden; value=&lt;%=or_employee%&gt;                                            |
| 194 | m4:input | name=&lt;%="SCO_ID_HR_"_+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                                     |
| 195 | m4:input | name=&lt;%="SCO_OR_HR_PERIOD_"__+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                             |
| 200 | input    | title=JSP_EXPR_Mss_cr.getProperty(; name=&lt;%="REV_"_+_(current)%&gt;; id=JSP_EXPR_; type=checkbox; onclick=set_rev('&lt;%=current%&gt;','&lt;%=icount_3%&gt;')                             |
| 207 | m4:input | name=&lt;%="SCO_ID_TYPE_RESP_"__+_(current)%&gt;; type=hidden; disabled=disabled                                                                                                             |
| 244 | a        | href=javascript:comprobar(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                              |
| 244 | img      | src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 246 | a        | href=javascript:window.close(); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                                           |
| 246 | img      | src=/iconos/entrar_blanco.gif; width=36; height=36; alt=JSP_EXPR_Mss_cr.getProperty(; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 16  | WU              | getParameter(request,"WU")        |
| 18  | RESP_TYPE       | getParameter(request,"RESP_TYPE") |
| 88  | zIdPerson       | getBagEntries("zIdPerson")        |

| L   | Variable   | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ---------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 15  | zsubsesion | "SSM_SALARY_REVIEW_PROCESS"                                           | SSM_SALARY_REVIEW_PROCESS                                             |
| 16  | id_wu      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU")        |
| 18  | resp_tp    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE") |
| 88  | zIdPerson  | zsesion.getBagEntries("zIdPerson")                                    | zsesion.getBagEntries("zIdPerson")                                    |
| 108 | icount     | 0                                                                     | 0                                                                     |
| 114 | icount_3   | 0                                                                     | 0                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                |
| --- | ------------- | ------------------------------------------------------------------------------------------------- |
| 75  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                  |
| 75  | m4:beginjob   |                                                                                                   |
| 76  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                   |
| 77  | m4:exec       | node=SSM_SHOW_DATA_WORK_UNIT; method=CR_SHOW_WORK_UNIT_DATA; m4object=SSM_SALARY_REVIEW_PROCESS   |
| 78  | m4:param      | name=ARG_WORK_UNIT; value=(id_wu)                                                                 |
| 80  | m4:outputdef  | node=SSM_SHOW_DATA_WORK_UNIT; m4alias=WORK_U; m4object=SSM_SALARY_REVIEW_PROCESS                  |
| 81  | m4:exec       | node=SSM_SHOW_DATA_WORK_UNIT; alias=wu_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS    |
| 82  | m4:outputdef  | node=SSM_SHOW_WU_RESPONSABLES; m4alias=RESP; m4object=SSM_SALARY_REVIEW_PROCESS                   |
| 83  | m4:exec       | node=SSM_SHOW_WU_RESPONSABLES; alias=resp_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS |
| 85  | m4:endjob     |                                                                                                   |
| 101 | m4:item       | item=STD_N_WORK_UNIT; outputdef=WORK_U; htmlsafe=true                                             |
| 109 | m4:outputexec | var=count; alias=wu_count                                                                         |
| 115 | m4:outputexec | var=count_3; alias=resp_count                                                                     |
| 133 | m4:item       | item=STD_ID_WORK_UNIT; outputdef=WORK_U; htmlsafe=true                                            |
| 135 | m4:item       | item=STD_N_WORK_UNIT; outputdef=WORK_U; htmlsafe=true                                             |
| 144 | m4:item       | item=STD_N_WU_TYPE; outputdef=WORK_U; htmlsafe=true                                               |
| 149 | m4:item       | item=STD_DESCRIPTION; outputdef=WORK_U; htmlsafe=true                                             |
| 178 | m4:dataloop   | outputdef=RESP                                                                                    |
| 181 | m4:current    | var=current; outputdef=RESP                                                                       |
| 185 | m4:item       | m4varname=id_employee; item=SCO_ID_HR; htmlsafe=true; outputdef=RESP                              |
| 190 | m4:item       | m4varname=or_employee; item=SCO_OR_HR_PERIOD; htmlsafe=true; outputdef=RESP                       |
| 194 | m4:item       | item=SCO_ID_HR; htmlsafe=true; outputdef=RESP                                                     |
| 195 | m4:item       | item=SCO_OR_HR_PERIOD; htmlsafe=true; outputdef=RESP                                              |
| 197 | m4:item       | item=SCO_ID_HR; outputdef=RESP; htmlsafe=true                                                     |
| 197 | m4:item       | item=SCO_GB_NAME; outputdef=RESP; htmlsafe=true                                                   |
| 198 | m4:item       | item=SCO_N_TYPE_RES; outputdef=RESP; htmlsafe=true                                                |
| 199 | m4:item       | item=SCO_NM_POSITION; outputdef=RESP; htmlsafe=true                                               |
| 207 | m4:item       | item=SCO_ID_TYPE_RESP; htmlsafe=true; outputdef=RESP                                              |
| 253 | m4:endpage    |                                                                                                   |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos                |
| --- | --------- | ------------------------- |
| 23  | set_rev   | this_record,total_records |
| 54  | comprobar |                           |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if (form.elements["REV_" + this_record].checked==false)                                                                                                                                                                                                                                                     |
| 39  | else                                                                                                                                                                                                                                                                                                        |
| 46  | if (i!= this_record)                                                                                                                                                                                                                                                                                        |
| 59  | if (able_to_submit != 0)                                                                                                                                                                                                                                                                                    |
| 62  | if (form.elements["ANY_CHANGE"].value!=1)                                                                                                                                                                                                                                                                   |
| 64  | alert("&lt;%=Mss_cr.getProperty("msscr.NOHTML_Pop_ad")%&gt;");                                                                                                                                                                                                                                              |
| 70  | else                                                                                                                                                                                                                                                                                                        |
| 122 | &lt;%if (icount &gt; 0) {%&gt;                                                                                                                                                                                                                                                                              |
| 154 | &lt;%if (icount_3 &gt; 0) {%&gt;                                                                                                                                                                                                                                                                            |
| 212 | if (form.elements["SCO_ID_TYPE_RESP_" + i].value=="112")                                                                                                                                                                                                                                                    |
| 219 | if (form.elements["SCO_ID_HR_" + i].value=="&lt;%=zIdPerson%&gt;")                                                                                                                                                                                                                                          |
| 222 | if (form.elements["RESP_TYPE"].value=="112")                                                                                                                                                                                                                                                                |
| 230 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                            |
| 234 | &lt;%}else{%&gt;                                                                                                                                                                                                                                                                                            |
| 58  | expresión de cálculo/transformación: var able_to_submit = parseInt(form_1.elements["THERE_ARE_MANAGERS"].value);                                                                                                                                                                                            |
| 110 | expresión de cálculo/transformación: &lt;% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%&gt;                                                                                                                                                                                |
| 116 | expresión de cálculo/transformación: &lt;% try { icount_3 = Integer.parseInt(count_3); } catch(Exception e) { icount_3 = 0; }%&gt;                                                                                                                                                                          |
| 187 | expresión de cálculo/transformación: &lt;input name='&lt;%= "ENC_SCO_ID_HR_" + (current)%&gt;' id='&lt;%= "ENC_SCO_ID_HR_" + (current)%&gt;' type="hidden" value='&lt;%=id_employee%&gt;'/&gt;                                                                                                              |
| 192 | expresión de cálculo/transformación: &lt;input name='&lt;%= "ENC_SCO_OR_HR_PERIOD_" + (current)%&gt;' id='&lt;%= "ENC_SCO_OR_HR_PERIOD_" + (current)%&gt;' type="hidden" value='&lt;%=or_employee%&gt;'/&gt;                                                                                                |
| 194 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "SCO_ID_HR_" + (current)%&gt;' type="hidden" disabled="disabled"&gt;&lt;m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="RESP"/&gt;&lt;/m4:input&gt;                                                                                      |
| 195 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "SCO_OR_HR_PERIOD_" + (current)%&gt;' type="hidden" disabled="disabled" &gt;&lt;m4:item item="SCO_OR_HR_PERIOD" htmlsafe="true" outputdef="RESP" /&gt;&lt;/m4:input&gt;                                                                      |
| 197 | expresión de cálculo/transformación: &lt;td class="fuentevalor" colspan="2"&gt; &lt;m4:item item="SCO_ID_HR" outputdef="RESP" htmlsafe="true"/&gt; - &lt;m4:item item="SCO_GB_NAME" outputdef="RESP" htmlsafe="true"/&gt;&lt;/td&gt;                                                                        |
| 200 | expresión de cálculo/transformación: &lt;td class="fuentevalor"&gt;&lt;input title="&lt;%=Mss_cr.getProperty("msscr.Pop_ad2")%&gt;" name='&lt;%= "REV_" + (current)%&gt;' id="&lt;%= "REV_" + (current)%&gt;" type="checkbox" onclick="set_rev('&lt;%=current%&gt;','&lt;%=icount_3%&gt;')"/&gt;&lt;/td&gt; |
| 207 | expresión de cálculo/transformación: &lt;m4:input name='&lt;%= "SCO_ID_TYPE_RESP_" + (current)%&gt;' type="hidden" disabled="disabled" &gt;&lt;m4:item item="SCO_ID_TYPE_RESP" htmlsafe="true" outputdef="RESP" /&gt;&lt;/m4:input&gt;                                                                      |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../mss_generico/mss_cr_trans.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 7   | /libreria/funciones_sse.js                            |
| 10  | /css/estilo_mss.css                                   |
| 97  | /iconos/informacion_blanco.gif                        |
| 169 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_p.jsp? |
| 244 | javascript:comprobar()                                |
| 244 | /iconos/icono_aceptar_mss_36_36.gif                   |
| 246 | javascript:window.close()                             |
| 246 | /iconos/entrar_blanco.gif                             |
| 8   | ../../mss_generico/mss_cr_trans.jsp                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                      |
| ------ | --- | ----------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                   | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |
| BASE   | 7   | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 169 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_p.jsp? | ausente    | P06                                                                                    |
| BASE   | 244 | javascript:comprobar()                                | dinámica   | P06                                                                                    |
| BASE   | 246 | javascript:window.close()                             | dinámica   | P06                                                                                    |
| BASE   | 8   | ../../mss_generico/mss_cr_trans.jsp                   | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p0_wu.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
