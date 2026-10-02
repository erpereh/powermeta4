# mss_g2_p8

Identificador: `mss_g2/mss_g2_p8.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p8.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p8.jsp) | `7d486a4b786513b14a902b6418316608f73a5c5fe594c6ae4f08e980a0725d92` |    142 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p8.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p8.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                  |
| --- | ----------------------------------------------------------------------------------------- |
| 103 | * [valor dinámico]                                                                        |
| 111 | DD / MM / YYYY MM / DD / YYYY DD - MM - YYYY MM - DD - YYYY DD . MM . YYYY MM . DD . YYYY |
| 124 | PDF HTML                                                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                          |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75  | a        | href=javascript:show_help(7); title=JSP_EXPR_Mss_cr.getProperty(                                                                                   |
| 75  | img      | alt=Aceptar cambios; src=/iconos/ic_help_25_31_0.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 78  | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100                                              |
| 98  | form     | name=rpt_setup; action=/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8_p.jsp; method=post; enctype=application/x-www-form-urlencoded                   |
| 104 | m4:input | name=PD_START_DATE; styleclass=fuenteformulario; size=10; type=text; maxlength=10                                                                  |
| 104 | a        | href=javascript:m4calendario(m4objeto('PD_START_DATE','rpt_setup'));                                                                               |
| 104 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(                  |
| 106 | m4:input | name=PD_END_DATE; styleclass=fuenteformulario; size=10; type=text; maxlength=10                                                                    |
| 106 | a        | href=javascript:m4calendario(m4objeto('PD_END_DATE','rpt_setup'));                                                                                 |
| 106 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Mss_cr.getProperty(; title=JSP_EXPR_Mss_cr.getProperty(                  |
| 108 | input    | name=paper_type; class=form; type=hidden; value=LTR                                                                                                |
| 112 | select   | class=fuenteformulario200; name=PN_DATE_FORMAT_ID                                                                                                  |
| 113 | option   | value=5051                                                                                                                                         |
| 114 | option   | value=16                                                                                                                                           |
| 115 | option   | value=51000002                                                                                                                                     |
| 116 | option   | value=51000001                                                                                                                                     |
| 117 | option   | value=51000004                                                                                                                                     |
| 118 | option   | value=51000003                                                                                                                                     |
| 124 | input    | name=report_type; type=radio; value=PDF; checked=checked                                                                                           |
| 125 | a        | class=clickable; shape=rect; onclick=document.forms.rpt_setup.report_type[0].checked=true                                                          |
| 126 | input    | name=report_type; type=radio; value=HTML                                                                                                           |
| 127 | a        | class=clickable; shape=rect; onclick=document.forms.rpt_setup.report_type[1].checked=true                                                          |
| 132 | a        | href=javascript:comprobar()                                                                                                                        |
| 132 | img      | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/icono_crear_mss_36_36.gif                                                                            |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 17  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable   | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ---------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 13  | estado     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 17  | zinicios   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 27  | zestado    | "21"                                                                 | 21                                                                   |
| 28  | trans_list | ""                                                                   |                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                   |
| --- | ------------ | -------------------------------------------------------------------- |
| 84  | m4:page      | subsessionid=CR_RP_SALREV                                            |
| 85  | m4:job       |                                                                      |
| 86  | m4:datadef   | m4o=HCO_RP_HTML; m4name=RPT_HTML                                     |
| 87  | m4:exec      | node=HTML_RPT; method=MN_LOAD_OBJECT_NONSTANDARD; m4object=RPT_HTML  |
| 88  | m4:param     | name=AVS_ID_OBJECT; value=SHCO_CR_RP_SAL_REV                         |
| 89  | m4:param     | name=AVS_ROOT_NODE; value=SHCO_GN_RP_ROOT                            |
| 93  | m4:job       |                                                                      |
| 94  | m4:datadef   | m4o=HCO_RP_HTML.SHCO_CR_RP_SAL_REV; m4find=TRUE; m4name=CR_RP_SALREV |
| 95  | m4:outputdef | node=SHCO_GN_RP_ROOT; m4alias=CR_RP_SALREV; m4object=CR_RP_SALREV    |
| 104 | m4:item      | item=PD_START_DATE; htmlsafe=true; outputdef=CR_RP_SALREV            |
| 106 | m4:item      | item=PD_END_DATE; htmlsafe=true; outputdef=CR_RP_SALREV              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 31  | commit    |            |
| 35  | comprobar |            |
| 63  | show_help | cod_help   |

| L   | Condición / acción / mensaje literal                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                          |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                  |
| 41  | if (zfechaini != ''){                                                                                                                                    |
| 42  | if ("" == m4fechacomprobacion(m4objeto('PD_START_DATE','rpt_setup'),false)){                                                                             |
| 45  | }else if (m4compfechas(m4objeto('PD_START_DATE','rpt_setup'),'&gt;',m4objeto('PD_END_DATE','rpt_setup'))){                                               |
| 49  | }else{                                                                                                                                                   |
| 54  | if (falta_valor == 1){                                                                                                                                   |
| 55  | alert (mensaje);                                                                                                                                         |
| 58  | else{                                                                                                                                                    |
| 37  | expresión de cálculo/transformación: var mensaje = "&lt;%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad23")%&gt;" + "\n";                                  |
| 65  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;                                  |
| 66  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=500"; |
| 113 | expresión de cálculo/transformación: &lt;option value="5051"&gt;DD / MM / YYYY&lt;/option&gt;                                                            |
| 114 | expresión de cálculo/transformación: &lt;option value="16"&gt;MM / DD / YYYY&lt;/option&gt;                                                              |
| 115 | expresión de cálculo/transformación: &lt;option value="51000002"&gt;DD - MM - YYYY&lt;/option&gt;                                                        |
| 116 | expresión de cálculo/transformación: &lt;option value="51000001"&gt;MM - DD - YYYY&lt;/option&gt;                                                        |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 6   | ../../mss_generico/mss_cr_trans.jsp                   |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 25  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 26  | ../../sse_generico/espanol/generico_links.jsp         |
| 140 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 11  | /libreria/clase_val_entradas.js                           |
| 75  | javascript:show_help(7)                                   |
| 75  | /iconos/ic_help_25_31_0.gif                               |
| 78  | /iconos/noname_salariales_mss_58_100.gif                  |
| 98  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8_p.jsp         |
| 104 | javascript:m4calendario(m4objeto(                         |
| 104 | /iconos/icono_calendario_14_18.gif                        |
| 106 | javascript:m4calendario(m4objeto(                         |
| 106 | /iconos/icono_calendario_14_18.gif                        |
| 132 | javascript:comprobar()                                    |
| 132 | /iconos/icono_crear_mss_36_36.gif                         |
| 6   | ../../mss_generico/mss_cr_trans.jsp                       |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 25  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        |
| 26  | ../../sse_generico/espanol/generico_links.jsp             |
| 65  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD= |
| 140 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 6   | ../../mss_generico/mss_cr_trans.jsp                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                         |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 25  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 26  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 140 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 75  | javascript:show_help(7)                                   | dinámica   | P06                                                                                              |
| BASE   | 98  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8_p.jsp         | ausente    | P06                                                                                              |
| BASE   | 104 | javascript:m4calendario(m4objeto(                         | dinámica   | P06                                                                                              |
| BASE   | 106 | javascript:m4calendario(m4objeto(                         | dinámica   | P06                                                                                              |
| BASE   | 132 | javascript:comprobar()                                    | dinámica   | P06                                                                                              |
| BASE   | 6   | ../../mss_generico/mss_cr_trans.jsp                       | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                         |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 25  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 26  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 65  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD= | ausente    | P06                                                                                              |
| BASE   | 140 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp     | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p8.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
