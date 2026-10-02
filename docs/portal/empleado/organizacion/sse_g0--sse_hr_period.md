# sse_hr_period

Identificador: `sse_g0/sse_hr_period.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                  | Texto                                     | Ámbito | Diccionario                                                                              |
| ---------------------- | ----------------------------------------- | ------ | ---------------------------------------------------------------------------------------- |
| Label.filterOdata      | Otros datos                               | BASE   | [translations/mss_filter_es.properties:L5](../../referencias/literales/mss_filter_es.md) |
| Label.filterTitle      | Fitro de personas                         | BASE   | [translations/mss_filter_es.properties:L4](../../referencias/literales/mss_filter_es.md) |
| Label.filterde         | de                                        | BASE   | [translations/mss_filter_es.properties:L3](../../referencias/literales/mss_filter_es.md) |
| Msg.FilterWithoutData  | No hay ningún dato para este filtro.      | BASE   | [translations/mss_filter_es.properties:L8](../../referencias/literales/mss_filter_es.md) |
| Msg.FilterWithoutData  | No hay ningún dato para este filtro.      | BASE   | [translations/shco_g0_es.properties:L109](../../referencias/literales/shco_g0_es.md)     |
| Msg.filteFirstLoadList | Para acceder a los datos se debe filtrar. | BASE   | [translations/mss_filter_es.properties:L7](../../referencias/literales/mss_filter_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_hr_period.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_hr_period.jsp) | `a2f475e0568b3ed3d7b0fbe6ca86637216e4c43f181d05905fec3aa66a08baeb` |      1 |
| BASE / compartido | [sse_g0/sse_hr_period.jsp](../../../../clon_portal/portal/sse_g0/sse_hr_period.jsp)                 | `cfda45f099e6f1a78deb7188883d2c9f0339faca0480b50797e6a509e28469d2` |    402 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_hr_period.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_hr_period.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include              |
| --- | -------------------- |
| 1   | ../sse_hr_period.jsp |

| L   | Destino / recurso    |
| --- | -------------------- |
| 1   | ../sse_hr_period.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/sse_hr_period.jsp](../../../../clon_portal/portal/sse_g0/sse_hr_period.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 277 | " onchange="buscar('list1','list3')"&gt; " value=" "&gt; "&gt; " value=" "&gt; " tabindex="3" value="[valor dinámico]" /&gt; |
| 313 | [valor dinámico]-[valor dinámico] [valor dinámico] [valor dinámico]                                                          |
| 334 | ';returnvalues(aval);return false;"&gt;[valor dinámico]                                                                      |
| 365 | [valor dinámico] - [valor dinámico]                                                                                          |
| 370 | [valor dinámico] - [valor dinámico]                                                                                          |
| 382 | [valor dinámico] [valor dinámico]                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                           |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 258 | form    | action=&lt;%=zaccion%&gt;; method=post; name=oculto; id=oculto                                                                                                      |
| 259 | input   | type=hidden; id=zinicio; name=zinicio; value=                                                                                                                       |
| 260 | input   | type=hidden; id=ztipocarga; name=ztipocarga; value=&lt;%=ztipocarga%&gt;                                                                                            |
| 261 | input   | type=hidden; id=zf1id; name=zf1id; value=                                                                                                                           |
| 262 | input   | type=hidden; id=zf3id; name=zf3id; value=                                                                                                                           |
| 263 | input   | type=hidden; id=zv1; name=zv1; value=                                                                                                                               |
| 264 | input   | type=hidden; id=zf2id; name=zf2id; value=                                                                                                                           |
| 265 | input   | type=hidden; id=zf4id; name=zf4id; value=                                                                                                                           |
| 266 | input   | type=hidden; id=zv2; name=zv2; value=                                                                                                                               |
| 269 | form    | action= ; method=post; name=FormularioFiltro; id=FormularioFiltro; onsubmit=return false                                                                            |
| 278 | select  | tabindex=1; id=list1; class=select30; name=list1; title=&lt;m4:label m4name=; htmlsafe=true                                                                         |
| 279 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                                                              |
| 281 | select  | tabindex=2; id=list3; class=select30; name=list3; title=&lt;m4:label m4name=; htmlsafe=true                                                                         |
| 282 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                                                              |
| 297 | input   | class=fuentecampo; type=text; id=VALOR1; name=VALOR1; maxlength=50; title=&lt;m4:label m4name=; htmlsafe=true                                                       |
| 302 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                           |
| 302 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                             |
| 303 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                           |
| 303 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                             |
| 334 | a       | title=; href=; onclick=var aval=new Array();aval[0]='&lt;%=sIdHr_Encr%&gt;';aval[1]='&lt;%=sOrHr_Encr%&gt;';aval[2]='&lt;m4:item m4name=; jsafe=true; htmlsafe=true |
| 370 | a       | href=javascript:m4valor('oculto','zinicio',&lt;%=ziniciointervalo%&gt;,'set');valores();; title=JSP_EXPR_mssfilter.getProperty(                                     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 21  | zinicio         | getParameter(request,"zinicio")    |
| 23  | ztipocarga      | getParameter(request,"ztipocarga") |
| 26  | zf1id           | getParameter(request,"zf1id")      |
| 27  | zf1val          | getParameter(request,"zf1val")     |
| 28  | zf1txt          | getParameter(request,"zf1txt")     |
| 32  | zf2id           | getParameter(request,"zf2id")      |
| 33  | zf2val          | getParameter(request,"zf2val")     |
| 34  | zf2txt          | getParameter(request,"zf2txt")     |
| 39  | zf3id           | getParameter(request,"zf3id")      |
| 41  | zf4id           | getParameter(request,"zf4id")      |
| 43  | zv1             | getParameter(request,"zv1")        |
| 45  | zv2             | getParameter(request,"zv2")        |

| L   | Variable             | Expresión fuente                                                                                | Resolución estática parcial                                                                                                        |
| --- | -------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 8   | zpess                | zsessionmanagermssess.getProductID()                                                            | zsessionmanagermssess.getProductID()                                                                                               |
| 21  | zinicio              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")                                                                |
| 23  | ztipocarga           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                             |
| 26  | zf1id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")                                                                  |
| 27  | zf1val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")                                                                 |
| 28  | zf1txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")                                                                 |
| 32  | zf2id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")                                                                  |
| 33  | zf2val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")                                                                 |
| 34  | zf2txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")                                                                 |
| 39  | zf3id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")                                                                  |
| 41  | zf4id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")                                                                  |
| 43  | zv1                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")                                                                    |
| 45  | zv2                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")                                                                    |
| 48  | zm4object            | "SSE_HR_PERIOD"                                                                                 | SSE_HR_PERIOD                                                                                                                      |
| 49  | znodo                | "SSE_HR_PERIOD"                                                                                 | SSE_HR_PERIOD                                                                                                                      |
| 50  | zsubsesion           | zm4object                                                                                       | SSE_HR_PERIOD                                                                                                                      |
| 52  | zdireccion           | "sse_g0/sse_hr_period.jsp"                                                                      | sse_g0/sse_hr_period.jsp                                                                                                           |
| 53  | zredireccion         | "sse_hr_period.jsp"                                                                             | sse_hr_period.jsp                                                                                                                  |
| 55  | zventanas            | "20"                                                                                            | 20                                                                                                                                 |
| 56  | zvuelta              | 5                                                                                               | 5                                                                                                                                  |
| 59  | znodo2               | "SHCO_GN_MT_FILTER_KEY"                                                                         | SHCO_GN_MT_FILTER_KEY                                                                                                              |
| 60  | znodo3               | "SHCO_GN_MT_FILT"                                                                               | SHCO_GN_MT_FILT                                                                                                                    |
| 61  | znodoroot            | "SHCO_GN_ROOT"                                                                                  | SHCO_GN_ROOT                                                                                                                       |
| 62  | zmetodocarga         | zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER"                                                    | SSE_HR_PERIOD{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                    |
| 65  | zregistroinicial     | Integer.valueOf(zinicio).intValue()                                                             | Integer.valueOf(zinicio).intValue()                                                                                                |
| 67  | zventana             | Integer.valueOf(zventanas).intValue()                                                           | Integer.valueOf(zventanas).intValue()                                                                                              |
| 68  | zregistrofinal       | zregistroinicial + zventana - 1                                                                 | Integer.valueOf(zinicio).intValue(){zventana - 1}                                                                                  |
| 70  | zoutputdef           | zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                   | SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 71  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                              | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"["}Integer.valueOf(zinicio).intValue(){"]"}                                                       |
| 72  | zcomun               | znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + "."                                | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 73  | zraiz                | znodo + ":" + zm4object + "!" + znodo + "."                                                     | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"."}                                                                             |
| 75  | zoutputdefroot       | zm4object + "!" + znodoroot + "[*]"                                                             | SSE_HR_PERIOD{"!"}SHCO_GN_ROOT{"[*]"}                                                                                              |
| 77  | zoutputdef2          | zm4object + "!" + znodo2 + "[*]"                                                                | SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                     |
| 78  | zmove2               | znodo2 + ":" +znodo2 + "[FIRST]"                                                                | SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                         |
| 79  | zcomun2              | znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."                              | SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}                                         |
| 81  | zoutputdef3          | zm4object + "!" + znodo3 + "[*]"                                                                | SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                           |
| 82  | zmove3               | znodo3 + ":" +znodo3 + "[FIRST]"                                                                | SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                                     |
| 83  | zcomun3              | znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."                              | SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 87  | znodolabel           | "SHCO_GN_LABEL"                                                                                 | SHCO_GN_LABEL                                                                                                                      |
| 88  | zoutputdeflabel      | zm4object + "!" + znodolabel + "[*]"                                                            | SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"[*]"}                                                                                             |
| 89  | zmovelabel           | znodolabel + ":" + znodolabel + "[FIRST]"                                                       | SHCO_GN_LABEL{":"}SHCO_GN_LABEL{"[FIRST]"}                                                                                         |
| 90  | zraizlabel           | znodolabel + ":" + zm4object + "!" + znodolabel + "."                                           | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}                                                                             |
| 92  | zurl                 | zdireccion + "#filter"                                                                          | sse_g0/sse_hr_period.jsp{"#filter"}                                                                                                |
| 93  | zaccion              | "/servlet/CheckSecurity/JSP/" + zurl                                                            | /servlet/CheckSecurity/JSP/{}sse_g0/sse_hr_period.jsp{"#filter"}                                                                   |
| 94  | zIDVALUE             | zcomun2 + "SCO_ID_KEY"                                                                          | SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_KEY"}                           |
| 95  | zIDTYPE2             | zcomun2 + "SCO_ID_TYPE"                                                                         | SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                          |
| 96  | zNVALUE              | zcomun2 + "SCO_NM_KEY"                                                                          | SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}                           |
| 98  | zIDFIELD             | zcomun3 + "SCO_ID_FIELD"                                                                        | SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_FIELD"}                                     |
| 99  | zIDTYPE              | zcomun3 + "SCO_ID_TYPE"                                                                         | SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                      |
| 100 | zNFIELD              | zcomun3 + "SCO_NM_FIELD"                                                                        | SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}                                     |
| 103 | zSHCOLBNEW           | zraizlabel + "SHCO_LB_NEW"                                                                      | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEW"}                                                              |
| 104 | zSHCOLBFILTER        | zraizlabel + "SHCO_LB_FILTER"                                                                   | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILTER"}                                                           |
| 105 | zSHCOLBFILT          | zraizlabel + "SHCO_LB_FILT"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILT"}                                                             |
| 106 | zSHCOLBCLOSE         | zraizlabel + "SHCO_LB_CLOSE"                                                                    | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLOSE"}                                                            |
| 107 | zSCHOLBCKALL         | zraizlabel + "SCHO_LB_CK_ALL"                                                                   | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_CK_ALL"}                                                           |
| 108 | zSCHOLBDCKALL        | zraizlabel + "SCHO_LB_DCK_ALL"                                                                  | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_DCK_ALL"}                                                          |
| 109 | zSHCOLBACEPT         | zraizlabel + "SHCO_LB_ACEPT"                                                                    | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ACEPT"}                                                            |
| 111 | zSHCOLBADVANCEFIL    | zraizlabel + "SHCO_LB_ADVANCED_FILTER"                                                          | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ADVANCED_FILTER"}                                                  |
| 112 | zSHCOLBEASYFILT      | zraizlabel + "SHCO_LB_EASY_FILTER"                                                              | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EASY_FILTER"}                                                      |
| 114 | zSHCOLBCLEAN         | zraizlabel + "SHCO_LB_CLEAN"                                                                    | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLEAN"}                                                            |
| 115 | zSHCOLBDEL           | zraizlabel + "SHCO_LB_DEL"                                                                      | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_DEL"}                                                              |
| 116 | zSHCOLBEDIT          | zraizlabel + "SHCO_LB_EDIT"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EDIT"}                                                             |
| 117 | zSHCOLBINSERT        | zraizlabel + "SHCO_LB_INSERT"                                                                   | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INSERT"}                                                           |
| 118 | zSHCOLBLIST          | zraizlabel + "SHCO_LB_LIST"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_LIST"}                                                             |
| 119 | zSHCOLBNEXT          | zraizlabel + "SHCO_LB_NEXT"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEXT"}                                                             |
| 120 | zSHCOLBORD           | zraizlabel + "SHCO_LB_ORD"                                                                      | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ORD"}                                                              |
| 121 | zSHCOLBPREV          | zraizlabel + "SHCO_LB_PREV"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PREV"}                                                             |
| 122 | zSHCOLBREFRESH       | zraizlabel + "SHCO_LB_REFRESH"                                                                  | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_REFRESH"}                                                          |
| 123 | zSHCOLBSEND          | zraizlabel + "SHCO_LB_SEND"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_SEND"}                                                             |
| 124 | zSHCOLBWRITE         | zraizlabel + "SHCO_LB_WRITE"                                                                    | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WRITE"}                                                            |
| 125 | zSHCOLBNOHELP        | zraizlabel + "SHCO_LB_NOHELP"                                                                   | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NOHELP"}                                                           |
| 126 | zSHCOLBHELP          | zraizlabel + "SHCO_LB_HELP"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_HELP"}                                                             |
| 127 | zSHCOLBCAB           | zraizlabel + "SHCO_LB_CAB"                                                                      | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CAB"}                                                              |
| 128 | zSHCOLBTITLEROOT     | zraizlabel + "SHCO_LB_TITLE_ROOT"                                                               | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}                                                       |
| 129 | zSHCOLBTITLE         | zraizlabel + "SHCO_LB_TITLE"                                                                    | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE"}                                                            |
| 130 | zSHCOLBTITERROR      | zraizlabel + "SHCO_LB_TIT_ERROR"                                                                | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TIT_ERROR"}                                                        |
| 131 | zSHCOLBBACK          | zraizlabel + "SHCO_LB_BACK"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_BACK"}                                                             |
| 132 | zSHCOLBERR           | zraizlabel + "SHCO_LB_ERR"                                                                      | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ERR"}                                                              |
| 133 | zSHCOLBWARNING       | zraizlabel + "SHCO_LB_WARNING"                                                                  | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WARNING"}                                                          |
| 134 | zSHCOLBINFO          | zraizlabel + "SHCO_LB_INFO"                                                                     | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INFO"}                                                             |
| 135 | zSHCOLBCABECINFO     | zraizlabel + "SHCO_LB_CABEC_INFO"                                                               | SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CABEC_INFO"}                                                       |
| 138 | zField_Std_id_person | "STD_ID_HR"                                                                                     | STD_ID_HR                                                                                                                          |
| 139 | z_Std_id_person      | zcomun + zField_Std_id_person                                                                   | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}STD_ID_HR                                                |
| 141 | zField_Sco_gb_name   | "SCO_GB_NAME"                                                                                   | SCO_GB_NAME                                                                                                                        |
| 142 | z_Sco_gb_name        | zcomun + zField_Sco_gb_name                                                                     | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME                                              |
| 143 | z_Std_or_hr_period   | zcomun + "STD_OR_HR_PERIOD"                                                                     | SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_HR_PERIOD"}                                     |
| 158 | zcount               | 0                                                                                               | 0                                                                                                                                  |
| 159 | zcounti              | 0                                                                                               | 0                                                                                                                                  |
| 160 | zcounti2             | 0                                                                                               | 0                                                                                                                                  |
| 161 | zcounti3             | 0                                                                                               | 0                                                                                                                                  |
| 169 | zcountv              | String.valueOf(zcounti)                                                                         | String.valueOf(zcounti)                                                                                                            |
| 170 | zcountv2             | String.valueOf(zcounti2)                                                                        | String.valueOf(zcounti2)                                                                                                           |
| 171 | zcountv3             | String.valueOf(zcounti3)                                                                        | String.valueOf(zcounti3)                                                                                                           |
| 172 | zregistroinicials    | String.valueOf(zregistroinicial)                                                                | String.valueOf(zregistroinicial)                                                                                                   |
| 173 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                                  | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                    |
| 174 | zposicions           | "0"                                                                                             | 0                                                                                                                                  |
| 175 | zcontrol             | 0                                                                                               | 0                                                                                                                                  |
| 176 | zposicion            | 0                                                                                               | 0                                                                                                                                  |
| 315 | ziniciosum           | Integer.parseInt(zinicio) + zventana -1                                                         | {Integer.parseInt(zinicio)}{zventana -1}                                                                                           |
| 325 | zpos                 | ""                                                                                              |                                                                                                                                    |
| 331 | sIdHr_Encr           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sIdHr) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sIdHr)                                    |
| 333 | sOrHr_Encr           | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sOrHr) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", sOrHr)                                    |
| 341 | zintervalo           | zcount/zventana                                                                                 | zcount/zventana                                                                                                                    |
| 342 | zresto               | zcount%zventana                                                                                 | zcount%zventana                                                                                                                    |
| 343 | zcontador            | 0                                                                                               | 0                                                                                                                                  |
| 344 | zsalto               | 0                                                                                               | 0                                                                                                                                  |
| 349 | ziniciointervalo     | String.valueOf(1 + zcontador*zventana)                                                          | {String.valueOf(1}{zcontador*zventana)}                                                                                            |
| 350 | zfinintervalo2       | zcontador*zventana + zventana                                                                   | {zcontador*zventana}Integer.valueOf(zventanas).intValue()                                                                          |
| 351 | zfinintervalo        | String.valueOf(zcontador*zventana + zventana)                                                   | {String.valueOf(zcontador*zventana}{zventana)}                                                                                     |
| 384 | zFirstLoad           | ""                                                                                              |                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                     |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 146 | m4:startpage | m4task=SSE_HR_PERIOD                                                                                                                                   |
| 146 | m4:beginjob  |                                                                                                                                                        |
| 146 | m4:datadef   | m4o=SSE_HR_PERIOD; m4name=SSE_HR_PERIOD                                                                                                                |
| 147 | m4:exec      | m4method=SSE_HR_PERIOD{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                               |
| 147 | m4:param     | name=LOAD_TYPE_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                       |
| 148 | m4:outputdef | m4alias=SSE_HR_PERIOD                                                                                                                                  |
| 148 | m4:param     | name=m4name0; value=SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 149 | m4:outputdef | m4alias=SHCO_GN_MT_FILTER_KEY                                                                                                                          |
| 149 | m4:param     | name=m4name0; value=SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                     |
| 150 | m4:outputdef | m4alias=SHCO_GN_MT_FILT                                                                                                                                |
| 150 | m4:param     | name=m4name0; value=SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                           |
| 151 | m4:outputdef | m4alias=SHCO_GN_ROOT                                                                                                                                   |
| 151 | m4:param     | name=m4name0; value=SSE_HR_PERIOD{"!"}SHCO_GN_ROOT{"[*]"}                                                                                              |
| 152 | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                                                                                  |
| 152 | m4:param     | name=m4name0; value=SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"[*]"}                                                                                             |
| 153 | m4:endjob    |                                                                                                                                                        |
| 154 | m4:move      |                                                                                                                                                        |
| 154 | m4:param     | name=SSE_HR_PERIOD; value=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"["}Integer.valueOf(zinicio).intValue(){"]"}                                                 |
| 155 | m4:move      |                                                                                                                                                        |
| 155 | m4:param     | name=SSE_HR_PERIOD; value=SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                   |
| 156 | m4:move      |                                                                                                                                                        |
| 156 | m4:param     | name=SSE_HR_PERIOD; value=SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                               |
| 272 | m4:label     | m4name=SHCO_GN_LABEL{":"}SSE_HR_PERIOD{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}; htmlsafe=true                                                     |
| 279 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                  |
| 279 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                                    |
| 279 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}; htmlsafe=true                                   |
| 282 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                  |
| 282 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                        |
| 282 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}SSE_HR_PERIOD{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}; htmlsafe=true                         |
| 311 | m4:label     | m4name=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}STD_ID_HR; htmlsafe=true                                              |
| 312 | m4:label     | m4name=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                            |
| 320 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                              |
| 330 | m4:item      | m4varname=sIdHr; m4name=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}STD_ID_HR; jsafe=true; htmlsafe=true                 |
| 332 | m4:item      | m4varname=sOrHr; m4name=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_HR_PERIOD"}; jsafe=true; htmlsafe=true      |
| 335 | m4:item      | m4name=SSE_HR_PERIOD{":"}SSE_HR_PERIOD{"!"}SSE_HR_PERIOD{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                            |
| 398 | m4:endpage   |                                                                                                                                                        |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 164 | getCount         | znodo,zm4object,znodo                                        |
| 165 | getCountInClient | znodo,zm4object,znodo                                        |
| 166 | getCountInClient | znodo2,zm4object,znodo2                                      |
| 167 | getCountInClient | znodo3,zm4object,znodo3                                      |
| 387 | getItem          | "SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_FIRST_LOAD" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos         |
| --- | ------------ | ------------------ |
| 179 | valores      |                    |
| 186 | buscarcadena | cadena             |
| 191 | searchoption | oselect,sidoption  |
| 200 | buscar       | lista,sublista,sel |
| 229 | filtrar      |                    |

| L   | Condición / acción / mensaje literal                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | if (zpess.equals("ess")){                                                                                                                                |
| 12  | &lt;%}else{%&gt;                                                                                                                                         |
| 22  | if ((zinicio==null)&#124;&#124;(zinicio.equals(""))){zinicio = "1";}                                                                                     |
| 24  | if ((ztipocarga==null)&#124;&#124;(ztipocarga.equals(""))){ztipocarga = "NORMAL";}                                                                       |
| 29  | if ((zf1id==null)&#124;&#124;(zf1id.equals(""))){zf1id = "";}                                                                                            |
| 30  | if ((zf1val==null)&#124;&#124;(zf1val.equals(""))){zf1val = "";}                                                                                         |
| 31  | if ((zf1txt==null)&#124;&#124;(zf1txt.equals(""))){zf1txt = "";}                                                                                         |
| 35  | if ((zf2id==null)&#124;&#124;(zf2id.equals(""))){zf2id = "";}                                                                                            |
| 36  | if ((zf2val==null)&#124;&#124;(zf2val.equals(""))){zf2val = "";}                                                                                         |
| 37  | if ((zf2txt==null)&#124;&#124;(zf2txt.equals(""))){zf2txt = "";}                                                                                         |
| 40  | if ((zf3id==null)&#124;&#124;(zf3id.equals(""))){zf3id = "";}                                                                                            |
| 42  | if ((zf4id==null)&#124;&#124;(zf4id.equals(""))){zf4id = "";}                                                                                            |
| 44  | if ((zv1==null)&#124;&#124;(zv1.equals(""))){zv1 = "";}                                                                                                  |
| 46  | if ((zv2==null)&#124;&#124;(zv2.equals(""))){zv2 = "";}                                                                                                  |
| 193 | if (oselect.options[ni].id == sidoption){                                                                                                                |
| 212 | if (strlist3ivalue == patron){                                                                                                                           |
| 227 | if (sel!= ""){searchoption(document.forms["FormularioFiltro"].elements[sublista],sel);}                                                                  |
| 240 | if (val != ""){                                                                                                                                          |
| 250 | if (err == 1){                                                                                                                                           |
| 314 | if (zcount&gt;0){                                                                                                                                        |
| 316 | if(ziniciosum &gt; zcount){ziniciosum = zcount;}                                                                                                         |
| 319 | &lt;%if (zcount&gt;0){%&gt;                                                                                                                              |
| 326 | if (zcontrol==0){                                                                                                                                        |
| 345 | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                                                                        |
| 352 | if (zfinintervalo2 &gt; zcount) {                                                                                                                        |
| 357 | if(zsalto == zvuelta){                                                                                                                                   |
| 363 | if (zinicio.equals(ziniciointervalo) == true){                                                                                                           |
| 368 | else{                                                                                                                                                    |
| 381 | &lt;%}else{%&gt;                                                                                                                                         |
| 389 | if ((zFirstLoad.equals("0"))&amp;&amp;((ztipocarga=="NORMAL") &#124;&#124; ("KEEPDATA".equals(ztipocarga)))){%&gt;                                       |
| 391 | &lt;%}else{%&gt;                                                                                                                                         |
| 62  | expresión de cálculo/transformación: String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER";                                                 |
| 66  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                            |
| 68  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                               |
| 70  | expresión de cálculo/transformación: String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; //COMUN VENTANAS |
| 71  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                  |
| 72  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                   |
| 73  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zm4object + "!" + znodo + ".";                                                         |
| 75  | expresión de cálculo/transformación: String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";                                                        |
| 77  | expresión de cálculo/transformación: String zoutputdef2 = zm4object + "!" + znodo2 + "[*]"; //COMUN MT                                                   |
| 78  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                                   |
| 79  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                |
| 81  | expresión de cálculo/transformación: String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";                                                              |
| 82  | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]";                                                                    |
| 83  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                |
| 88  | expresión de cálculo/transformación: String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";                                                      |
| 89  | expresión de cálculo/transformación: String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";                                                      |
| 90  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";                                          |
| 92  | expresión de cálculo/transformación: String zurl = zdireccion + "#filter";                                                                               |
| 93  | expresión de cálculo/transformación: String zaccion = "/servlet/CheckSecurity/JSP/" + zurl;                                                              |
| 94  | expresión de cálculo/transformación: String zIDVALUE = zcomun2 + "SCO_ID_KEY";                                                                           |
| 95  | expresión de cálculo/transformación: String zIDTYPE2 = zcomun2 + "SCO_ID_TYPE";                                                                          |
| 96  | expresión de cálculo/transformación: String zNVALUE = zcomun2 + "SCO_NM_KEY";                                                                            |
| 98  | expresión de cálculo/transformación: String zIDFIELD = zcomun3 + "SCO_ID_FIELD";                                                                         |
| 99  | expresión de cálculo/transformación: String zIDTYPE = zcomun3 + "SCO_ID_TYPE";                                                                           |
| 100 | expresión de cálculo/transformación: String zNFIELD = zcomun3 + "SCO_NM_FIELD";                                                                          |
| 103 | expresión de cálculo/transformación: String zSHCOLBNEW = zraizlabel + "SHCO_LB_NEW";                                                                     |
| 104 | expresión de cálculo/transformación: String zSHCOLBFILTER = zraizlabel + "SHCO_LB_FILTER";                                                               |
| 105 | expresión de cálculo/transformación: String zSHCOLBFILT = zraizlabel + "SHCO_LB_FILT";                                                                   |
| 106 | expresión de cálculo/transformación: String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOSE";                                                                  |
| 107 | expresión de cálculo/transformación: String zSCHOLBCKALL= zraizlabel + "SCHO_LB_CK_ALL";                                                                 |
| 108 | expresión de cálculo/transformación: String zSCHOLBDCKALL= zraizlabel + "SCHO_LB_DCK_ALL";                                                               |
| 109 | expresión de cálculo/transformación: String zSHCOLBACEPT= zraizlabel + "SHCO_LB_ACEPT";                                                                  |
| 111 | expresión de cálculo/transformación: String zSHCOLBADVANCEFIL= zraizlabel + "SHCO_LB_ADVANCED_FILTER";                                                   |
| 112 | expresión de cálculo/transformación: String zSHCOLBEASYFILT= zraizlabel + "SHCO_LB_EASY_FILTER";                                                         |
| 114 | expresión de cálculo/transformación: String zSHCOLBCLEAN = zraizlabel + "SHCO_LB_CLEAN";                                                                 |
| 115 | expresión de cálculo/transformación: String zSHCOLBDEL = zraizlabel + "SHCO_LB_DEL";                                                                     |
| 116 | expresión de cálculo/transformación: String zSHCOLBEDIT = zraizlabel + "SHCO_LB_EDIT";                                                                   |
| 117 | expresión de cálculo/transformación: String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";                                                               |
| 118 | expresión de cálculo/transformación: String zSHCOLBLIST = zraizlabel + "SHCO_LB_LIST";                                                                   |
| 119 | expresión de cálculo/transformación: String zSHCOLBNEXT = zraizlabel + "SHCO_LB_NEXT";                                                                   |
| 120 | expresión de cálculo/transformación: String zSHCOLBORD = zraizlabel + "SHCO_LB_ORD";                                                                     |
| 121 | expresión de cálculo/transformación: String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";                                                                   |
| 122 | expresión de cálculo/transformación: String zSHCOLBREFRESH = zraizlabel + "SHCO_LB_REFRESH";                                                             |
| 123 | expresión de cálculo/transformación: String zSHCOLBSEND = zraizlabel + "SHCO_LB_SEND";                                                                   |
| 124 | expresión de cálculo/transformación: String zSHCOLBWRITE = zraizlabel + "SHCO_LB_WRITE";                                                                 |
| 125 | expresión de cálculo/transformación: String zSHCOLBNOHELP = zraizlabel + "SHCO_LB_NOHELP";                                                               |
| 126 | expresión de cálculo/transformación: String zSHCOLBHELP = zraizlabel + "SHCO_LB_HELP";                                                                   |
| 127 | expresión de cálculo/transformación: String zSHCOLBCAB = zraizlabel + "SHCO_LB_CAB";                                                                     |
| 128 | expresión de cálculo/transformación: String zSHCOLBTITLEROOT = zraizlabel + "SHCO_LB_TITLE_ROOT";                                                        |
| 129 | expresión de cálculo/transformación: String zSHCOLBTITLE = zraizlabel + "SHCO_LB_TITLE";                                                                 |
| 130 | expresión de cálculo/transformación: String zSHCOLBTITERROR = zraizlabel + "SHCO_LB_TIT_ERROR";                                                          |
| 131 | expresión de cálculo/transformación: String zSHCOLBBACK = zraizlabel + "SHCO_LB_BACK";                                                                   |
| 132 | expresión de cálculo/transformación: String zSHCOLBERR = zraizlabel + "SHCO_LB_ERR";                                                                     |
| 133 | expresión de cálculo/transformación: String zSHCOLBWARNING = zraizlabel + "SHCO_LB_WARNING";                                                             |
| 134 | expresión de cálculo/transformación: String zSHCOLBINFO= zraizlabel + "SHCO_LB_INFO";                                                                    |
| 135 | expresión de cálculo/transformación: String zSHCOLBCABECINFO= zraizlabel + "SHCO_LB_CABEC_INFO";                                                         |
| 139 | expresión de cálculo/transformación: String z_Std_id_person = zcomun + zField_Std_id_person;                                                             |
| 142 | expresión de cálculo/transformación: String z_Sco_gb_name = zcomun + zField_Sco_gb_name;                                                                 |
| 143 | expresión de cálculo/transformación: String z_Std_or_hr_period = zcomun + "STD_OR_HR_PERIOD";                                                            |
| 173 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                            |
| 315 | expresión de cálculo/transformación: int ziniciosum = Integer.parseInt(zinicio) + zventana -1;                                                           |
| 349 | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);                                                   |
| 350 | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                                                                 |
| 351 | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana);                                               |
| 353 | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);                                                        |
| 375 | expresión de cálculo/transformación: zsalto = zsalto + 1;                                                                                                |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 17  | ../sse_generico/sse_generico_taglib_2.jsp |
| 18  | ../mss_generico/mss_filter_trans.jsp      |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 11  | /css/estilo_sse.css                       |
| 13  | /css/estilo_mss.css                       |
| 15  | /libreria/funciones_sse.js                |
| 16  | /libreria/funciones_filter.js             |
| 258 | &lt;%=zaccion%&gt;                        |
| 269 |                                           |
| 302 | javascript:filtrar();                     |
| 302 | /iconos/icono_filtrar_36_36.gif           |
| 303 | javascript:window.close();                |
| 303 | /iconos/entrar_blanco.gif                 |
| 370 | javascript:m4valor(                       |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 17  | ../sse_generico/sse_generico_taglib_2.jsp |
| 18  | ../mss_generico/mss_filter_trans.jsp      |
| 52  | sse_g0/sse_hr_period.jsp                  |
| 53  | sse_hr_period.jsp                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../sse_hr_period.jsp                      | física     | [sse_g0/sse_hr_period.jsp](sse_g0--sse_hr_period.md)                                                          |
| BASE   | 1   | ../sse_hr_period.jsp                      | física     | [sse_g0/sse_hr_period.jsp](sse_g0--sse_hr_period.md)                                                          |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 17  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 18  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](../../responsable/tareas/mss_generico--mss_filter_trans.md)               |
| BASE   | 15  | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 16  | /libreria/funciones_filter.js             | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 258 | &lt;%=zaccion%&gt;                        | dinámica   | P06                                                                                                           |
| BASE   | 302 | javascript:filtrar();                     | dinámica   | P06                                                                                                           |
| BASE   | 303 | javascript:window.close();                | dinámica   | P06                                                                                                           |
| BASE   | 370 | javascript:m4valor(                       | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 17  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 18  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](../../responsable/tareas/mss_generico--mss_filter_trans.md)               |
| BASE   | 52  | sse_g0/sse_hr_period.jsp                  | contextual | [sse_g0/sse_hr_period.jsp](sse_g0--sse_hr_period.md)                                                          |
| BASE   | 53  | sse_hr_period.jsp                         | física     | [sse_g0/sse_hr_period.jsp](sse_g0--sse_hr_period.md)                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_hr_period.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
