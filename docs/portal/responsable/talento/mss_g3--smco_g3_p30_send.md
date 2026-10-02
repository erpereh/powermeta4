# Entrevistas

Identificador: `mss_g3/smco_g3_p30_send.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto                             | Ámbito | Diccionario                                                                         |
| ----------------- | --------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.LblProcess | Procesando datos                  | BASE   | [translations/smco_iv_es.properties:L63](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblWait    | Por favor, espere unos instantes. | BASE   | [translations/smco_iv_es.properties:L64](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p30_send.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_send.jsp) | `d9301a7327c87eb3fea0cc78872b995100d00bc2ad3565df564b8ade0cbe6208` |    171 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p30_send.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_send.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 30  | Entrevistas              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave           | Acceso literal                                    |
| --- | ------------------------- | ------------------------------------------------- |
| 8   | SCO_ID_HR                 | getParameter(request,"SCO_ID_HR")                 |
| 12  | SCO_OR_HR_PERIOD          | getParameter(request,"SCO_OR_HR_PERIOD")          |
| 17  | zVis                      | getParameter(request,"zVis")                      |
| 42  | SCO_ID_INTERVIEW_TYPE     | getParameter(request,"SCO_ID_INTERVIEW_TYPE")     |
| 43  | SCO_DT_REQUEST            | getParameter(request,"SCO_DT_REQUEST")            |
| 44  | ID_WORKITEM               | getParameter(request,"ID_WORKITEM")               |
| 65  | SCO_INTERVIEW_NAME        | getParameter(request,"SCO_INTERVIEW_NAME")        |
| 66  | SCO_ID_INTERVIEW_PRIORITY | getParameter(request,"SCO_ID_INTERVIEW_PRIORITY") |
| 67  | SCO_INTERVIEW_REASON      | getParameter(request,"SCO_INTERVIEW_REASON")      |
| 72  | SCO_DT_FINISH             | getParameter(request,"SCO_DT_FINISH")             |
| 73  | SCO_ID_INTERVIEW_RESULT   | getParameter(request,"SCO_ID_INTERVIEW_RESULT")   |
| 74  | SCO_INTERVIEW_RESULT      | getParameter(request,"SCO_INTERVIEW_RESULT")      |
| 76  | SCO_ID_ACTION_TYPE        | getParameter(request,"SCO_ID_ACTION_TYPE")        |
| 79  | SCO_DT_NEXT_ACTION        | getParameter(request,"SCO_DT_NEXT_ACTION")        |
| 82  | SCO_DT_NEXT_INTERVIEW     | getParameter(request,"SCO_DT_NEXT_INTERVIEW")     |
| 85  | SCO_INTERVIEWER_COMENT    | getParameter(request,"SCO_INTERVIEWER_COMENT")    |
| 88  | SCO_ID_DOC                | getParameter(request,"SCO_ID_DOC")                |

| L   | Variable                | Expresión fuente                                                                  | Resolución estática parcial                                                       |
| --- | ----------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 8   | sIdHR_Encr              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR")             |
| 9   | zSCOIDHR                | ""                                                                                |                                                                                   |
| 12  | sOrHr_Encr              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD")      |
| 13  | zSCOORHPERIOD           | ""                                                                                |                                                                                   |
| 17  | zVis                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                  |
| 20  | zurl                    | ""                                                                                |                                                                                   |
| 42  | zSCOIDINTERVIEWTYPE     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INTERVIEW_TYPE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INTERVIEW_TYPE") |
| 43  | zSCODTREQUEST           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_REQUEST")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_REQUEST")        |
| 44  | zIDWORKITEM             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM")           |
| 47  | zSCOINTERVIEWNAME       | ""                                                                                |                                                                                   |
| 48  | zSCOIDINTERVIEWPRIORITY | ""                                                                                |                                                                                   |
| 49  | zSCOINTERVIEWREASON     | ""                                                                                |                                                                                   |
| 51  | zSCODTFINISH            | ""                                                                                |                                                                                   |
| 52  | zSCOIDINTERVIEWRESULT   | ""                                                                                |                                                                                   |
| 53  | zSCOINTERVIEWRESULT     | ""                                                                                |                                                                                   |
| 54  | zSCOIDACTIONTYPE        | ""                                                                                |                                                                                   |
| 55  | zSCODTNEXTACTION        | ""                                                                                |                                                                                   |
| 56  | zSCODTNEXTINTERVIEW     | ""                                                                                |                                                                                   |
| 57  | zSCOINTERVIEWCOMENT     | ""                                                                                |                                                                                   |
| 59  | zSCOIDDOC               | ""                                                                                |                                                                                   |
| 95  | zsubsesion              | "SSM_GN_INTERVIEW"                                                                | SSM_GN_INTERVIEW                                                                  |
| 96  | zMeta4Object            | "SSM_GN_INTERVIEW"                                                                | SSM_GN_INTERVIEW                                                                  |
| 97  | znodo                   | "SSM_GN_INTERVIEW"                                                                | SSM_GN_INTERVIEW                                                                  |
| 98  | znodoError              | "SSE_COMUNICACION"                                                                | SSE_COMUNICACION                                                                  |
| 99  | zoutputdef              | zsubsesion + "!" + znodoError + "[*]"                                             | SSM_GN_INTERVIEW{"!"}SSE_COMUNICACION{"[*]"}                                      |
| 100 | zmetodocarga            | "CARGA:" + zsubsesion + "!SSM_GN_INTERVIEW.SCO_MTD_SAVE"                          | CARGA:{}SSM_GN_INTERVIEW{"!SSM_GN_INTERVIEW.SCO_MTD_SAVE"}                        |
| 101 | ztipocarga              | ""                                                                                |                                                                                   |
| 143 | zerror                  | "P"                                                                               | P                                                                                 |
| 160 | zcomparafuncional       | "U"                                                                               | U                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                  |
| --- | ------------ | ------------------------------------------------------------------- |
| 108 | m4:startpage | m4task=SSM_GN_INTERVIEW                                             |
| 109 | m4:beginjob  |                                                                     |
| 110 | m4:datadef   | m4o=SSM_GN_INTERVIEW; m4name=SSM_GN_INTERVIEW                       |
| 138 | m4:exec      | m4method=CARGA:{}SSM_GN_INTERVIEW{"!SSM_GN_INTERVIEW.SCO_MTD_SAVE"} |
| 138 | m4:param     | name=ARG_TYPE_SAVE; value=                                          |
| 139 | m4:outputdef | m4alias=SSM_GN_INTERVIEW                                            |
| 139 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}SSE_COMUNICACION{"[*]"}    |
| 140 | m4:endjob    |                                                                     |
| 170 | m4:endpage   |                                                                     |

| L   | Operación | Argumentos literales                                                    |
| --- | --------- | ----------------------------------------------------------------------- |
| 114 | setItem   | zsubsesion,znodo,"","PRP_ID_HR",zSCOIDHR                                |
| 115 | setItem   | zsubsesion,znodo,"","PRP_OR_HR_PERIOD",zSCOORHPERIOD                    |
| 116 | setItem   | zsubsesion,znodo,"","PRP_ID_INTERVIEW_TYPE",zSCOIDINTERVIEWTYPE         |
| 117 | setItem   | zsubsesion,znodo,"","PRP_DT_REQUEST",zSCODTREQUEST                      |
| 118 | setItem   | zsubsesion,znodo,"","PRP_ID_WORKITEM",zIDWORKITEM                       |
| 120 | setItem   | zsubsesion,znodo,"","PRP_DT_FINISH",zSCODTFINISH                        |
| 121 | setItem   | zsubsesion,znodo,"","PRP_ID_INTERVIEW_RESULT",zSCOIDINTERVIEWRESULT     |
| 122 | setItem   | zsubsesion,znodo,"","PRP_INTERVIEW_RESULT",zSCOINTERVIEWRESULT          |
| 123 | setItem   | zsubsesion,znodo,"","PRP_ID_ACTION_TYPE",zSCOIDACTIONTYPE               |
| 124 | setItem   | zsubsesion,znodo,"","PRP_DT_NEXT_ACTION",zSCODTNEXTACTION               |
| 125 | setItem   | zsubsesion,znodo,"","PRP_DT_NEXT_INTERVIEW",zSCODTNEXTINTERVIEW         |
| 126 | setItem   | zsubsesion,znodo,"","PRP_INTERVIEWER_COMENT",zSCOINTERVIEWCOMENT        |
| 128 | setItem   | zsubsesion,znodo,"","PRP_INTERVIEW_NAME",zSCOINTERVIEWNAME              |
| 129 | setItem   | zsubsesion,znodo,"","PRP_ID_INTERVIEW_PRIORITY",zSCOIDINTERVIEWPRIORITY |
| 130 | setItem   | zsubsesion,znodo,"","PRP_INTERVIEW_REASON",zSCOINTERVIEWREASON          |
| 132 | setItem   | zsubsesion,znodo,"","PRP_ID_DOC",zSCOIDDOC                              |
| 146 | getItem   | znodo,zsubsesion,znodoError,"","TIPO_DEBUG"                             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | if (sIdHR_Encr == null &#124;&#124; sIdHR_Encr.equals("")) {zSCOIDHR="";}                                                                                                     |
| 11  | else {zSCOIDHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", sIdHR_Encr);}                                                       |
| 14  | if (sOrHr_Encr == null &#124;&#124; sOrHr_Encr.equals("")) {zSCOORHPERIOD="";}                                                                                                |
| 15  | else {zSCOORHPERIOD = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", sOrHr_Encr);}                                                  |
| 18  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                               |
| 21  | if (zVis.equals("1")){                                                                                                                                                        |
| 23  | }else{                                                                                                                                                                        |
| 45  | if (zIDWORKITEM==null){zIDWORKITEM="";};                                                                                                                                      |
| 61  | if (zSCODTREQUEST==null)                                                                                                                                                      |
| 69  | else                                                                                                                                                                          |
| 77  | if (zSCOIDACTIONTYPE==null){zSCOIDACTIONTYPE="";};                                                                                                                            |
| 80  | if (zSCODTNEXTACTION==null){zSCODTNEXTACTION="";};                                                                                                                            |
| 83  | if (zSCODTNEXTINTERVIEW==null){zSCODTNEXTINTERVIEW="";};                                                                                                                      |
| 86  | if (zSCOINTERVIEWCOMENT==null){zSCOINTERVIEWCOMENT="";};                                                                                                                      |
| 102 | if (zSCODTREQUEST.equals(""))                                                                                                                                                 |
| 104 | else                                                                                                                                                                          |
| 161 | if(zerror.equals(zcomparafuncional) == true)                                                                                                                                  |
| 24  | expresión de cálculo/transformación: zurl="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person=" + sIdHR_Encr + "&amp;person_ord=" + zSCOORHPERIOD; |
| 99  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodoError + "[*]";                                                                               |
| 100 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_GN_INTERVIEW.SCO_MTD_SAVE";                                                          |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 35  | ../../mss_generico/espanol/menu_mss.jsp |
| 36  | /mss_g3/smco_iv_trans.jsp               |

| L   | Destino / recurso                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------- |
| 32  | /css/estilo_mss.css                                                                                      |
| 34  | /libreria/funciones_sse.js                                                                               |
| 37  | /libreria/menuintercambio.js                                                                             |
| 22  | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                                              |
| 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person=                           |
| 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                  |
| 36  | /mss_g3/smco_iv_trans.jsp                                                                                |
| 164 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=zsubsesion%&gt; |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                               | Resolución | Ficha / candidato                                                                          |
| ------ | --- | -------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| BASE   | 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                           |
| BASE   | 36  | /mss_g3/smco_iv_trans.jsp                                                                                | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                       |
| BASE   | 34  | /libreria/funciones_sse.js                                                                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)     |
| BASE   | 37  | /libreria/menuintercambio.js                                                                             | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md) |
| BASE   | 22  | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                                              | ausente    | P06                                                                                        |
| BASE   | 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person=                           | ausente    | P06                                                                                        |
| BASE   | 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                           |
| BASE   | 36  | /mss_g3/smco_iv_trans.jsp                                                                                | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                       |
| BASE   | 164 | /servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=&lt;%=zsubsesion%&gt; | ausente    | P06                                                                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p30_send.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
