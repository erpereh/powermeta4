# mss_g2_p8_p

Identificador: `mss_g2/mss_g2_p8_p.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p8_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p8_p.jsp) | `4dd032a13c115f0a1047d617fdda204a9a06b11d06476e4ccee0bea304d04a2d` |    185 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p8_p.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p8_p.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 171 | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                   |
| --- | ------- | ----------------------------------------------------------------------------------------------------------- |
| 35  | img     | alt=JSP_EXPR_Mss_cr.getProperty(; src=/iconos/noname_puestos_trabajo_mss_141_100.gif; width=100; height=100 |
| 179 | a       | href=javascript:history.go(-1); shape=rect                                                                  |
| 179 | img     | src=/iconos/icono_anterior_mss_58_50.gif; alt=JSP_EXPR_Mss_cr.getProperty(; align=middle                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave   | Acceso literal                            |
| --- | ----------------- | ----------------------------------------- |
| 17  | estado            | getParameter(request,"estado")            |
| 19  | zinicios          | getParameter(request,"zinicios")          |
| 42  | PD_START_DATE     | getParameter(request,"PD_START_DATE")     |
| 43  | PD_END_DATE       | getParameter(request,"PD_END_DATE")       |
| 48  | PN_DATE_FORMAT_ID | getParameter(request,"PN_DATE_FORMAT_ID") |
| 60  | paper_type        | getParameter(request,"paper_type")        |
| 61  | report_type       | getParameter(request,"report_type")       |

| L   | Variable        | Expresión fuente                                                        | Resolución estática parcial                                             |
| --- | --------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 17  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")      |
| 19  | zinicios        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    |
| 28  | zestado         | "21"                                                                    | 21                                                                      |
| 57  | rpt_m4o_alias   | "RPT_HTML"                                                              | RPT_HTML                                                                |
| 58  | report_id       | "SHCO_CR_RP_SAL_REV"                                                    | SHCO_CR_RP_SAL_REV                                                      |
| 59  | root_node       | "SHCO_GN_RP_ROOT"                                                       | SHCO_GN_RP_ROOT                                                         |
| 60  | paper_type      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"paper_type")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"paper_type")  |
| 61  | report_type     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"report_type") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"report_type") |
| 62  | zusertempuri    | ""                                                                      |                                                                         |
| 66  | pathReports     | ""                                                                      |                                                                         |
| 67  | thinclient_root | ""                                                                      |                                                                         |
| 68  | webPath         | ""                                                                      |                                                                         |
| 69  | methodParam     | ""                                                                      |                                                                         |
| 70  | reportParam     | "#/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/PRESERVE_DIR#"                       | #/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/PRESERVE_DIR#                         |
| 71  | separator       | ""                                                                      |                                                                         |
| 88  | index           | pathReports.indexOf(thinclient_root)                                    | pathReports.indexOf(thinclient_root)                                    |
| 120 | stResult        | ""                                                                      |                                                                         |
| 121 | iResult         | -1                                                                      | -1                                                                      |
| 133 | sRuta           | ""                                                                      |                                                                         |
| 150 | i               | sRuta.indexOf(zusertempuri.replace('/',separator.charAt(0)))            | sRuta.indexOf(zusertempuri.replace('/',separator.charAt(0)))            |
| 153 | x               | sAux.indexOf("\\")                                                      | sAux.indexOf("\\")                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag            | Contrato declarado                                                                    |
| --- | -------------- | ------------------------------------------------------------------------------------- |
| 37  | m4:page        | subsessionid=CR_RP_SALREV                                                             |
| 38  | m4:job         |                                                                                       |
| 39  | m4:datadef     | m4o=HCO_RP_HTML.SHCO_CR_RP_SAL_REV; m4find=TRUE; m4name=CR_RP_SALREV                  |
| 40  | m4:exec        | node=SHCO_GN_TC_ROOT; method=MSS_UPDATE_MULT_ITEMS; m4object=CR_RP_SALREV             |
| 50  | m4:param       | name=AVS_NODE; value=SHCO_GN_RP_ROOT                                                  |
| 51  | m4:param       | name=AN_RECORD_INDEX; value=-1                                                        |
| 52  | m4:param       | name=AL_FIELD_INFORMATION; value=(field_info)                                         |
| 100 | m4:job         |                                                                                       |
| 101 | m4:datadef     | m4o=HCO_RP_HTML; m4name=(rpt_m4o_alias)                                               |
| 104 | m4:exec        | node=HTML_RPT; alias=EXEC; method=MN_RUN_REPORT; m4object=(rpt_m4o_alias)             |
| 105 | m4:param       | name=AL_RPT_PARMS; value=(methodParam)                                                |
| 108 | m4:exec        | node=HTML_RPT; alias=EXEC; method=MN_RUN_REPORT_NONSTANDARD; m4object=(rpt_m4o_alias) |
| 109 | m4:param       | name=AL_RPT_PARMS; value=(methodParam)                                                |
| 110 | m4:param       | name=AVS_ROOT_NODE; value=(root_node)                                                 |
| 114 | m4:outputdef   | node=HTML_RPT; m4alias=; records=0; m4object=(rpt_m4o_alias)                          |
| 144 | m4:putbagvalue | m4key=salida; m4value=&amp;RPT_HTML!HTML_RPT.OUTPUT                                   |
| 148 | m4:item        | var=; m4name=RPT_HTML!HTML_RPT.OUTPUT; htmlsafe=true                                  |

| L   | Operación | Argumentos literales                      |
| --- | --------- | ----------------------------------------- |
| 125 | getItem   | "", "RPT_HTML", "HTML_RPT", "0", "RESULT" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                 |
| 21  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                         |
| 90  | if( index != -1){                                                                                                                                                                                               |
| 92  | }else{                                                                                                                                                                                                          |
| 103 | &lt;% if(root_node == null) { %&gt;                                                                                                                                                                             |
| 107 | &lt;% } else { %&gt;                                                                                                                                                                                            |
| 136 | &lt;% if (iResult == -1) { %&gt;                                                                                                                                                                                |
| 142 | &lt;% } else if(iResult == 0) { %&gt;                                                                                                                                                                           |
| 151 | if( i != -1) sRuta = sRuta.substring(i, sRuta.length());                                                                                                                                                        |
| 95  | expresión de cálculo/transformación: pathReports = pathReports + separator + "reports" + separator + report_id + separator + report_id;                                                                         |
| 97  | expresión de cálculo/transformación: methodParam = "CalledFromESS #"+ report_id + "# #1# #" + report_type + "# #/PATH:" + pathReports + "# #/PRESERVE_DIR# #/WEB:" + webPath + "# " + reportParam + ";1;0;3;0"; |
| 160 | expresión de cálculo/transformación: sRutaDef = sRutaDef + sAux;                                                                                                                                                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/mss_cr_trans.jsp                   |
| 14  | ../../mss_generico/espanol/menu_mss.jsp               |
| 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 27  | ../../sse_generico/espanol/generico_links.jsp         |
| 183 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 12  | /css/estilo_mss.css                                   |
| 13  | /libreria/funciones_sse.js                            |
| 15  | /libreria/clase_val_entradas.js                       |
| 35  | /iconos/noname_puestos_trabajo_mss_141_100.gif        |
| 179 | javascript:history.go(-1)                             |
| 179 | /iconos/icono_anterior_mss_58_50.gif                  |
| 10  | ../../mss_generico/mss_cr_trans.jsp                   |
| 14  | ../../mss_generico/espanol/menu_mss.jsp               |
| 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 27  | ../../sse_generico/espanol/generico_links.jsp         |
| 183 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/mss_cr_trans.jsp                   | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                         |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 183 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 13  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 15  | /libreria/clase_val_entradas.js                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 179 | javascript:history.go(-1)                             | dinámica   | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/mss_cr_trans.jsp                   | física     | [mss_generico/mss_cr_trans.jsp](../tareas/mss_generico--mss_cr_trans.md)                         |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 26  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 183 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p8_p.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
