# smco_ev_gauss

Identificador: `mss_g3/smco_ev_gauss.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave            | Texto                                  | Ámbito | Diccionario                                                                       |
| ---------------- | -------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| ev_mss.GrafGauss | Resultados por evaluador conocimientos | BASE   | [translations/mss_ev_es.properties:L29](../../referencias/literales/mss_ev_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_ev_gauss.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_ev_gauss.jsp) | `713de5d3c4f83127f05d10e254805e3527b19d1f389a80fb637b8990491085fb` |    190 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_ev_gauss.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_ev_gauss.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 12  | IDEvaluator     | getParameter(request,"IDEvaluator") |
| 14  | zNivel          | getParameter(request,"zNivel")      |
| 15  | DTStartEval     | getParameter(request,"DTStartEval") |
| 17  | IDPlan          | getParameter(request,"IDPlan")      |
| 19  | DTStartProc     | getParameter(request,"DTStartProc") |

| L   | Variable          | Expresión fuente                                                                      | Resolución estática parcial                                                              |
| --- | ----------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 12  | IDEvaluator       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDEvaluator")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDEvaluator")                  |
| 14  | zNivel            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNivel")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNivel")                       |
| 15  | DTStartEval       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")                  |
| 17  | IDPlan            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")                       |
| 19  | DTStartProc       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")                  |
| 25  | sWebServerName    | ""                                                                                    |                                                                                          |
| 26  | sWebServerPort    | ""                                                                                    |                                                                                          |
| 27  | sProtocol         | "http"                                                                                | http                                                                                     |
| 28  | sURLxlsTplt       | ""                                                                                    |                                                                                          |
| 33  | zlanguageFolderev | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL)    |
| 121 | zmeta4object      | "SMCO_GRAPH_EVAL_GAUSS"                                                               | SMCO_GRAPH_EVAL_GAUSS                                                                    |
| 122 | zsubsesion        | "SMCO_GRAPH_EVAL_GAUSS"                                                               | SMCO_GRAPH_EVAL_GAUSS                                                                    |
| 123 | znodop            | "SMCO_GRAPH_EVAL_GAUSS"                                                               | SMCO_GRAPH_EVAL_GAUSS                                                                    |
| 124 | znodo             | "SMCO_GRAPH_SCALE"                                                                    | SMCO_GRAPH_SCALE                                                                         |
| 125 | znodo1            | "SMCO_EVAL_DATA"                                                                      | SMCO_EVAL_DATA                                                                           |
| 126 | zoutputdefp       | zsubsesion + "!" + znodop + "[*]"                                                     | SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_GRAPH_EVAL_GAUSS{"[*]"}                                   |
| 127 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                     | SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_EVAL_DATA{"[*]"}                                          |
| 128 | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                      | SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_GRAPH_SCALE{"[*]"}                                        |
| 129 | zmove1            | znodo1 + ":" + znodo1 + "[0]"                                                         | SMCO_EVAL_DATA{":"}SMCO_EVAL_DATA{"[0]"}                                                 |
| 130 | zmove             | znodo + ":" + znodo + "[0]"                                                           | SMCO_GRAPH_SCALE{":"}SMCO_GRAPH_SCALE{"[0]"}                                             |
| 131 | zmovep            | znodo + ":" + znodop + "[0]"                                                          | SMCO_GRAPH_SCALE{":"}SMCO_GRAPH_EVAL_GAUSS{"[0]"}                                        |
| 132 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                     | SMCO_GRAPH_SCALE{":"}SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_GRAPH_SCALE{"[&amp;VAR.m4lix]"}{"."} |
| 133 | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + "."                                | SMCO_EVAL_DATA{":"}SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_EVAL_DATA{"[0]"}{"."}                  |
| 136 | zmetodoinitrw     | "INIT_RW:" + zsubsesion + "!SMCO_GRAPH_EVAL_GAUSS.SMCO_LOAD"                          | INIT_RW:{}SMCO_GRAPH_EVAL_GAUSS{"!SMCO_GRAPH_EVAL_GAUSS.SMCO_LOAD"}                      |
| 153 | zcount            | 0                                                                                     | 0                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                    |
| --- | ------------ | ----------------------------------------------------------------------------------------------------- |
| 138 | m4:startpage | m4task=SMCO_GRAPH_EVAL_GAUSS                                                                          |
| 139 | m4:beginjob  |                                                                                                       |
| 140 | m4:datadef   | m4o=SMCO_GRAPH_EVAL_GAUSS; m4name=SMCO_GRAPH_EVAL_GAUSS                                               |
| 141 | m4:exec      | m4method=INIT_RW:{}SMCO_GRAPH_EVAL_GAUSS{"!SMCO_GRAPH_EVAL_GAUSS.SMCO_LOAD"}                          |
| 142 | m4:param     | name=ARG_ID_EVAL_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")       |
| 143 | m4:param     | name=ARG_DT_START_PROC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc") |
| 144 | m4:param     | name=ARG_NIVEL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNivel")              |
| 145 | m4:param     | name=ARG_ID_EVALUATOR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDEvaluator")  |
| 147 | m4:outputdef | m4alias=SMCO_GRAPH_EVAL_GAUSS                                                                         |
| 147 | m4:param     | name=M4NAME0; value=SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_GRAPH_EVAL_GAUSS{"[*]"}                            |
| 148 | m4:move      |                                                                                                       |
| 148 | m4:param     | name=SMCO_GRAPH_EVAL_GAUSS; value=SMCO_GRAPH_SCALE{":"}SMCO_GRAPH_EVAL_GAUSS{"[0]"}                   |
| 149 | m4:outputdef | m4alias=SMCO_EVAL_DATA                                                                                |
| 149 | m4:param     | name=M4NAME0; value=SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_EVAL_DATA{"[*]"}                                   |
| 150 | m4:outputdef | m4alias=SMCO_GRAPH_SCALE                                                                              |
| 150 | m4:param     | name=M4NAME0; value=SMCO_GRAPH_EVAL_GAUSS{"!"}SMCO_GRAPH_SCALE{"[*]"}                                 |
| 151 | m4:endjob    |                                                                                                       |
| 160 | m4:item      | item=SCO_NM_EVAL_PROC; jsafe=true; outputdef=SMCO_GRAPH_EVAL_GAUSS                                    |
| 165 | m4:dataloop  | outputdef=SMCO_GRAPH_SCALE                                                                            |
| 166 | m4:current   | var=ziCurPos; outputdef=SMCO_GRAPH_SCALE                                                              |
| 168 | m4:item      | item=SMCO_PRC_ACT; jsafe=true; outputdef=SMCO_GRAPH_SCALE                                             |
| 169 | m4:item      | item=SMCO_PRC_ACT_O; jsafe=true; outputdef=SMCO_GRAPH_SCALE                                           |
| 170 | m4:item      | item=SMCO_PRC_REF; jsafe=true; outputdef=SMCO_GRAPH_SCALE                                             |
| 171 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_GRAPH_SCALE                                             |
| 174 | m4:dataloop  | outputdef=SMCO_EVAL_DATA                                                                              |
| 175 | m4:current   | var=ziCurPos; outputdef=SMCO_EVAL_DATA                                                                |
| 178 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_EVAL_DATA                                                |
| 179 | m4:item      | item=NOMBRE_EMPLEADO; jsafe=true; outputdef=SMCO_EVAL_DATA                                            |
| 180 | m4:item      | item=STD_N_JOB_CODE; jsafe=true; outputdef=SMCO_EVAL_DATA                                             |
| 181 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_EVAL_DATA                                               |
| 182 | m4:item      | item=SCO_CALCUL_CAP; jsafe=true; outputdef=SMCO_EVAL_DATA                                             |
| 183 | m4:item      | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SMCO_EVAL_DATA                                             |
| 184 | m4:item      | item=SCO_CALCUL_OBJ; jsafe=true; outputdef=SMCO_EVAL_DATA                                             |
| 185 | m4:item      | item=SCO_VALUE_OBJ_QUANT; jsafe=true; outputdef=SMCO_EVAL_DATA                                        |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 156 | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 47  | graf_eval |            |

| L   | Condición / acción / mensaje literal                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((zNivel==null)&#124;&#124;(zNivel.equals(""))){zNivel="0";}                                                                                                  |
| 22  | if ((IDEvaluator==null)&#124;&#124;(IDEvaluator.equals(""))){IDEvaluator="";}                                                                                    |
| 38  | if ( request.isSecure() )                                                                                                                                        |
| 48  | if (!navigator.appMinorVersion) {                                                                                                                                |
| 50  | alert(msg);                                                                                                                                                      |
| 52  | } else {                                                                                                                                                         |
| 76  | if (i&gt;1){                                                                                                                                                     |
| 96  | if (ExcelApp == null) {                                                                                                                                          |
| 100 | alert(msg);                                                                                                                                                      |
| 103 | }else if (openWb == null) {                                                                                                                                      |
| 107 | alert(msg);                                                                                                                                                      |
| 109 | }else{                                                                                                                                                           |
| 41  | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/ev_gauss.xls"; |
| 126 | expresión de cálculo/transformación: String zoutputdefp = zsubsesion + "!" + znodop + "[*]";                                                                     |
| 127 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                     |
| 128 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                       |
| 129 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[0]";                                                                              |
| 130 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[0]";                                                                                 |
| 131 | expresión de cálculo/transformación: String zmovep = znodo + ":" + znodop + "[0]";                                                                               |
| 132 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                          |
| 133 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";                                                    |
| 136 | expresión de cálculo/transformación: String zmetodoinitrw = "INIT_RW:" + zsubsesion + "!SMCO_GRAPH_EVAL_GAUSS.SMCO_LOAD";                                        |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g3/sse_ev_trans.jsp                     |
| 10  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 44  | /css/estilo_mss.css                          |
| 45  | /libreria/funciones_sse.js                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g3/sse_ev_trans.jsp                     |
| 10  | /mss_g3/mss_ev_trans.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                     | contextual | [sse_g3/sse_ev_trans.jsp](../../empleado/talento/sse_g3--sse_ev_trans.md)                                     |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |
| BASE   | 45  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                     | contextual | [sse_g3/sse_ev_trans.jsp](../../empleado/talento/sse_g3--sse_ev_trans.md)                                     |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_ev_gauss.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
