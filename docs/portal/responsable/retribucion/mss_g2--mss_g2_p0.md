# mss_g2_p0

Identificador: `mss_g2/mss_g2_p0.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p0.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0.jsp) | `ca6fa7b10b9bb1cab9f921f24ae9771dd9271a1d276c407863be304cf700b1d3` |    124 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p0.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p0.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 97  | -                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65  | a       | href=javascript:show_help(1); title=JSP_EXPR_Mss_cr.getProperty(                                                                                                |
| 65  | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 69  | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100                                                           |
| 98  | a       | href=&lt;%="javascript:view_details('"_+*work_unit*+_"','"_+*resp_type*+_"');"%&gt;; title=JSP_EXPR_Mss_cr.getProperty(                                         |
| 102 | a       | href=&lt;%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado="_+*zestado*+_"&amp;wu="_+_work_unit%&gt;; title=JSP_EXPR_Mss_cr.getProperty(                |
| 103 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/icono_revision_individual_32_16.gif                                                                               |
| 106 | a       | href=&lt;%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?estado="_+*zestado*+_"&amp;wu="_+_work_unit%&gt;; title=JSP_EXPR_Mss_cr.getProperty(             |
| 107 | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/icono_revision_colectiva_32_16.gif                                                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 17  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 13  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 17  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 27  | zsubsesion   | "SSM_SALARY_REVIEW_PROCESS"                                          | SSM_SALARY_REVIEW_PROCESS                                            |
| 28  | zmeta4object | "SSM_SALARY_REVIEW_PROCESS"                                          | SSM_SALARY_REVIEW_PROCESS                                            |
| 29  | znodo        | "SSM_EMPLOYEES_INFORMATION"                                          | SSM_EMPLOYEES_INFORMATION                                            |
| 30  | zestado      | "21"                                                                 | 21                                                                   |
| 78  | icount_ti    | 0                                                                    | 0                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                   |
| --- | ------------- | ---------------------------------------------------------------------------------------------------- |
| 52  | m4:startpage  | m4task=SSM_SALARY_REVIEW_PROCESS                                                                     |
| 52  | m4:beginjob   |                                                                                                      |
| 53  | m4:datadef    | m4o=SSM_SALARY_REVIEW_PROCESS; m4name=SSM_SALARY_REVIEW_PROCESS                                      |
| 55  | m4:exec       | node=SSM_SALARY_REVIEW_PROCESS; method=CR_WORK_UNITS_FOR_MANAGER; m4object=SSM_SALARY_REVIEW_PROCESS |
| 56  | m4:outputdef  | node=SSM_WORK_UNITS_FOR_PROCESS; m4alias=WORK_UNIT; m4object=SSM_SALARY_REVIEW_PROCESS               |
| 57  | m4:exec       | node=SSM_WORK_UNITS_FOR_PROCESS; alias=wu_count; method=Count; m4object=SSM_SALARY_REVIEW_PROCESS    |
| 59  | m4:endjob     |                                                                                                      |
| 79  | m4:outputexec | var=count_ti; alias=wu_count                                                                         |
| 91  | m4:dataloop   | outputdef=WORK_UNIT                                                                                  |
| 93  | m4:item       | m4varname=work_unit; item=WORK_UNIT_ID; htmlsafe=true; outputdef=WORK_UNIT                           |
| 94  | m4:item       | m4varname=resp_type; item=RESPONSABLE_TP; htmlsafe=true; outputdef=WORK_UNIT                         |
| 98  | m4:item       | item=WORK_UNIT_ID; htmlsafe=true; outputdef=WORK_UNIT                                                |
| 98  | m4:item       | item=WORK_UNIT_NAME; htmlsafe=true; outputdef=WORK_UNIT                                              |
| 99  | m4:item       | item=RESPONSABLE_TP_NAME; htmlsafe=true; outputdef=WORK_UNIT                                         |
| 124 | m4:endpage    |                                                                                                      |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos     |
| --- | ------------ | -------------- |
| 36  | view_details | work_u,resp_tp |
| 43  | show_help    | cod_help       |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                                                        |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                                                |
| 82  | &lt;%if (icount_ti &gt; 0) {%&gt;                                                                                                                                                                                                                                                                                                                                      |
| 118 | }else{%&gt;                                                                                                                                                                                                                                                                                                                                                            |
| 38  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=" + work_u + "&amp;RESP_TYPE=" + resp_tp;                                                                                                                                                                                                                       |
| 39  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";                                                                                                                                                                                                                |
| 45  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                                                                                                                                                                                                                                |
| 46  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=500";                                                                                                                                                                                                               |
| 80  | expresión de cálculo/transformación: &lt;% try { icount_ti = Integer.parseInt(count_ti); } catch(Exception e) { icount_ti = 0; }%&gt;                                                                                                                                                                                                                                  |
| 98  | expresión de cálculo/transformación: &lt;a href=&lt;%="javascript:view_details('" + work_unit + "','" + resp_type + "');"%&gt; title="&lt;%=Mss_cr.getProperty("msscr.Pop2-1")%&gt;"&gt;&lt;m4:item item="WORK_UNIT_ID" htmlsafe="true" outputdef="WORK_UNIT"/&gt; - &lt;m4:item item="WORK_UNIT_NAME" htmlsafe="true" outputdef="WORK_UNIT"/&gt;&lt;/a&gt;&lt;/td&gt; |
| 102 | expresión de cálculo/transformación: &lt;a href=&lt;%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=" + zestado + "&amp;wu=" + work_unit%&gt; title="&lt;%=Mss_cr.getProperty("msscr.Pop1-1")%&gt;"&gt;                                                                                                                                                      |
| 106 | expresión de cálculo/transformación: &lt;a href=&lt;%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?estado=" + zestado + "&amp;wu=" + work_unit%&gt; title="&lt;%=Mss_cr.getProperty("msscr.Pop13-1")%&gt;"&gt;                                                                                                                                                  |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 5   | ../../mss_generico/mss_cr_trans.jsp                   |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 122 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                        |
| 10  | /libreria/funciones_sse.js                                 |
| 65  | javascript:show_help(1)                                    |
| 65  | /iconos/ic_help_25_31_0.gif                                |
| 69  | /iconos/noname_salariales_mss_58_100.gif                   |
| 103 | /iconos/icono_revision_individual_32_16.gif                |
| 107 | /iconos/icono_revision_colectiva_32_16.gif                 |
| 5   | ../../mss_generico/mss_cr_trans.jsp                        |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                    |
| 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp         |
| 24  | ../../sse_generico/espanol/generico_links.jsp              |
| 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=     |
| 45  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=  |
| 102 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=    |
| 106 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?estado= |
| 122 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 5   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 122 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 10  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 65  | javascript:show_help(1)                                    | dinámica   | P06                                                                                             |
| BASE   | 5   | ../../mss_generico/mss_cr_trans.jsp                        | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                        |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 23  | ../../mss_generico/espanol/mssgenerico_menusup.jsp         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 38  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=     | ausente    | P06                                                                                             |
| BASE   | 45  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=  | ausente    | P06                                                                                             |
| BASE   | 102 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=    | ausente    | P06                                                                                             |
| BASE   | 106 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?estado= | ausente    | P06                                                                                             |
| BASE   | 122 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p0.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
