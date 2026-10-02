# sgco_ek_job_hr

Identificador: `sse_g0/sgco_ek_job_hr.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto                                                                                                                                                                 | Ámbito | Diccionario                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------ |
| sgco_gen.EKnow           | Conocimientos                                                                                                                                                         | BASE   | [translations/sgco_gen_es.properties:L5](../../referencias/literales/sgco_gen_es.md) |
| sgco_gen.Label_ex        | En esta analítica puedes ver el desajuste existente, en términos cuantitativos, entre los conocimientos que posees y los que se necesitan para alcanzar el puesto .   | BASE   | [translations/sgco_gen_es.properties:L7](../../referencias/literales/sgco_gen_es.md) |
| sgco_gen.Label_ex1       | En esta analítica puedes ver el desajuste existente, en términos cuantitativos, entre los conocimientos del empleado y los que se necesitan para alcanzar el puesto . | BASE   | [translations/sgco_gen_es.properties:L9](../../referencias/literales/sgco_gen_es.md) |
| sgco_gen.Label_ex_cabec  | Gap del puesto                                                                                                                                                        | BASE   | [translations/sgco_gen_es.properties:L6](../../referencias/literales/sgco_gen_es.md) |
| sgco_gen.Label_ex_cabec1 | del empleado                                                                                                                                                          | BASE   | [translations/sgco_gen_es.properties:L8](../../referencias/literales/sgco_gen_es.md) |
| sgco_gen.TGap            | Gap individual de conocimientos                                                                                                                                       | BASE   | [translations/sgco_gen_es.properties:L3](../../referencias/literales/sgco_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sgco_ek_job_hr.jsp](../../../../clon_portal/portal/sse_g0/espanol/sgco_ek_job_hr.jsp) | `209507f6c7316a1372548a325a5db70d55aa568a437a3674b4f201dc137a8a1d` |    176 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sgco_ek_job_hr.jsp](../../../../clon_portal/portal/sse_g0/espanol/sgco_ek_job_hr.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 11  | estado          | getParameter(request,"estado")   |
| 13  | zinicios        | getParameter(request,"zinicios") |
| 16  | zIDhr           | getParameter(request,"zIDhr")    |
| 19  | zJob            | getParameter(request,"zJob")     |
| 21  | zWunit          | getParameter(request,"zWunit")   |

| L   | Variable          | Expresión fuente                                                                      | Resolución estática parcial                                                           |
| --- | ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 11  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    |
| 13  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  |
| 16  | zIDhr             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIDhr")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIDhr")                     |
| 19  | zJob              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zJob")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zJob")                      |
| 21  | zWunit            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zWunit")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zWunit")                    |
| 26  | sWebServerName    | ""                                                                                    |                                                                                       |
| 27  | sWebServerPort    | ""                                                                                    |                                                                                       |
| 28  | sProtocol         | "http"                                                                                | http                                                                                  |
| 29  | sURLxlsTplt       | ""                                                                                    |                                                                                       |
| 34  | zlanguageFolderev | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) |
| 106 | zmeta4object      | "SCO_GR_HR_GAP"                                                                       | SCO_GR_HR_GAP                                                                         |
| 107 | zsubsesion        | "SCO_GR_HR_GAP"                                                                       | SCO_GR_HR_GAP                                                                         |
| 108 | znodop            | "SCO_GAP_PARAMS"                                                                      | SCO_GAP_PARAMS                                                                        |
| 109 | znodo             | "SMCO_GRAPH_SCALE"                                                                    | SMCO_GRAPH_SCALE                                                                      |
| 110 | znodo1            | "DETAIL"                                                                              | DETAIL                                                                                |
| 111 | zoutputdefp       | zsubsesion + "!" + znodop + "[*]"                                                     | SCO_GR_HR_GAP{"!"}SCO_GAP_PARAMS{"[*]"}                                               |
| 112 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                     | SCO_GR_HR_GAP{"!"}DETAIL{"[*]"}                                                       |
| 114 | zmove1            | znodo1 + ":" + znodo1 + "[0]"                                                         | DETAIL{":"}DETAIL{"[0]"}                                                              |
| 115 | zmovep            | znodo + ":" + znodop + "[0]"                                                          | SMCO_GRAPH_SCALE{":"}SCO_GAP_PARAMS{"[0]"}                                            |
| 116 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                     | SMCO_GRAPH_SCALE{":"}SCO_GR_HR_GAP{"!"}SMCO_GRAPH_SCALE{"[&amp;VAR.m4lix]"}{"."}      |
| 117 | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + "."                                | DETAIL{":"}SCO_GR_HR_GAP{"!"}DETAIL{"[0]"}{"."}                                       |
| 120 | zmetodoinitrw     | "INIT_RW:" + zsubsesion + "!SCO_GAP_PARAMS.SGCO_CALL_ESS"                             | INIT_RW:{}SCO_GR_HR_GAP{"!SCO_GAP_PARAMS.SGCO_CALL_ESS"}                              |
| 137 | zcount            | 0                                                                                     | 0                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 122 | m4:startpage | m4task=SCO_GR_HR_GAP                                                                            |
| 123 | m4:beginjob  |                                                                                                 |
| 124 | m4:datadef   | m4o=SCO_GR_HR_GAP; m4name=SCO_GR_HR_GAP                                                         |
| 125 | m4:exec      | m4method=INIT_RW:{}SCO_GR_HR_GAP{"!SCO_GAP_PARAMS.SGCO_CALL_ESS"}                               |
| 128 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIDhr")         |
| 129 | m4:param     | name=ARG_ID_JOB; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zJob")         |
| 130 | m4:param     | name=ARG_ID_WUNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zWunit")     |
| 133 | m4:outputdef | m4alias=SCO_GAP_PARAMS                                                                          |
| 133 | m4:param     | name=M4NAME0; value=SCO_GR_HR_GAP{"!"}SCO_GAP_PARAMS{"[*]"}                                     |
| 134 | m4:outputdef | m4alias=DETAIL                                                                                  |
| 134 | m4:param     | name=M4NAME0; value=SCO_GR_HR_GAP{"!"}DETAIL{"[*]"}                                             |
| 135 | m4:endjob    |                                                                                                 |
| 145 | m4:item      | item=GAP; jsafe=true; outputdef=SCO_GAP_PARAMS                                                  |
| 152 | m4:item      | item=SGCO_GB_NAME; jsafe=true; outputdef=SCO_GAP_PARAMS                                         |
| 157 | m4:label     | item=REQUIRED; jsafe=true; outputdef=DETAIL; required=presente; confirmar condición si dinámico |
| 158 | m4:label     | item=HR_LEVEL; jsafe=true; outputdef=DETAIL                                                     |
| 159 | m4:dataloop  | outputdef=DETAIL                                                                                |
| 160 | m4:current   | var=ziCurPos; outputdef=DETAIL                                                                  |
| 163 | m4:item      | item=COMPETENCY; jsafe=true; outputdef=DETAIL                                                   |
| 164 | m4:item      | item=HR_LEVEL; jsafe=true; outputdef=DETAIL                                                     |
| 165 | m4:item      | item=REQUIRED; jsafe=true; outputdef=DETAIL; required=presente; confirmar condición si dinámico |
| 166 | m4:item      | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=DETAIL                                               |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 140 | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 48  | graf_ek |            |

| L   | Condición / acción / mensaje literal                                                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                        |
| 14  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                |
| 17  | if ((zIDhr==null)&#124;&#124;(zIDhr.equals(""))){zIDhr="";}                                                                                                            |
| 18  | else {zIDhr=com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zIDhr);}                                                          |
| 20  | if ((zJob==null)&#124;&#124;(zJob.equals(""))){zJob="";}                                                                                                               |
| 22  | if ((zWunit==null)&#124;&#124;(zWunit.equals(""))){zWunit="";}                                                                                                         |
| 39  | if ( request.isSecure() )                                                                                                                                              |
| 66  | if (i&gt;1){                                                                                                                                                           |
| 79  | if (ExcelApp == null) {                                                                                                                                                |
| 83  | alert(msg);                                                                                                                                                            |
| 86  | }else if (openWb == null) {                                                                                                                                            |
| 90  | alert(msg);                                                                                                                                                            |
| 92  | }else{                                                                                                                                                                 |
| 147 | if ('&lt;%=zIDhr%&gt;'==""){                                                                                                                                           |
| 150 | }else{                                                                                                                                                                 |
| 42  | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/sgco_ek_job_hr.xls"; |
| 111 | expresión de cálculo/transformación: String zoutputdefp = zsubsesion + "!" + znodop + "[*]";                                                                           |
| 112 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                           |
| 114 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[0]";                                                                                    |
| 115 | expresión de cálculo/transformación: String zmovep = znodo + ":" + znodop + "[0]";                                                                                     |
| 116 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                |
| 117 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[0]" + ".";                                                          |
| 120 | expresión de cálculo/transformación: String zmetodoinitrw = "INIT_RW:" + zsubsesion + "!SCO_GAP_PARAMS.SGCO_CALL_ESS";                                                 |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g0/sgco_gen_trans.jsp                   |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 45  | /css/estilo_mss.css                          |
| 46  | /libreria/funciones_sse.js                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g0/sgco_gen_trans.jsp                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g0/sgco_gen_trans.jsp                   | contextual | [sse_g0/sgco_gen_trans.jsp](sse_g0--sgco_gen_trans.md)                                                        |
| BASE   | 46  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g0/sgco_gen_trans.jsp                   | contextual | [sse_g0/sgco_gen_trans.jsp](sse_g0--sgco_gen_trans.md)                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sgco_ek_job_hr.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
