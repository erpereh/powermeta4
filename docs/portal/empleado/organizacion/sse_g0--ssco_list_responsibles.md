# ssco_list_responsibles

Identificador: `sse_g0/ssco_list_responsibles.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

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

| Sociedad / ámbito | Archivo                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_list_responsibles.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_list_responsibles.jsp) | `310bc5fbd2708e3ea440e54b2348e078fe3496e26f90a21bcf5b9c5e5a320506` |      1 |
| BASE / compartido | [sse_g0/ssco_list_responsibles.jsp](../../../../clon_portal/portal/sse_g0/ssco_list_responsibles.jsp)                 | `cf39a1fc2b26e81200a3d00b6345484639c23d64f267a6b0c52aff5541a791c1` |    421 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_list_responsibles.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_list_responsibles.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                       |
| --- | ----------------------------- |
| 1   | ../ssco_list_responsibles.jsp |

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 1   | ../ssco_list_responsibles.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_list_responsibles.jsp](../../../../clon_portal/portal/sse_g0/ssco_list_responsibles.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 282 | " onchange="buscar('list1','list3')"&gt; " value=" "&gt; "&gt; " value=" "&gt; " tabindex="3" value="[valor dinámico]" /&gt; |
| 346 | ';aval[1]=' ';aval[2]=' ';returnvalues(aval);return false;"&gt;                                                              |
| 384 | [valor dinámico] - [valor dinámico]                                                                                          |
| 389 | [valor dinámico] - [valor dinámico]                                                                                          |
| 401 | [valor dinámico] [valor dinámico]                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 263 | form    | action=&lt;%=zaccion%&gt;; method=post; name=oculto; id=oculto                                                                  |
| 264 | input   | type=hidden; id=zinicio; name=zinicio; value=                                                                                   |
| 265 | input   | type=hidden; id=ztipocarga; name=ztipocarga; value=&lt;%=ztipocarga%&gt;                                                        |
| 266 | input   | type=hidden; id=zf1id; name=zf1id; value=                                                                                       |
| 267 | input   | type=hidden; id=zf3id; name=zf3id; value=                                                                                       |
| 268 | input   | type=hidden; id=zv1; name=zv1; value=                                                                                           |
| 269 | input   | type=hidden; id=zf2id; name=zf2id; value=                                                                                       |
| 270 | input   | type=hidden; id=zf4id; name=zf4id; value=                                                                                       |
| 271 | input   | type=hidden; id=zv2; name=zv2; value=                                                                                           |
| 274 | form    | action= ; method=post; name=FormularioFiltro; id=FormularioFiltro; onsubmit=return false                                        |
| 283 | select  | tabindex=1; id=list1; class=select30; name=list1; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 284 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 286 | select  | tabindex=2; id=list3; class=select30; name=list3; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 287 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 302 | input   | class=fuentecampo; type=text; id=VALOR1; name=VALOR1; maxlength=50; title=&lt;m4:label m4name=; htmlsafe=true                   |
| 307 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                       |
| 307 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                         |
| 308 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                       |
| 308 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                         |
| 346 | a       | title=; href=; onclick=var aval=new Array();aval[0]='&lt;m4:item m4name=; jsafe=true; htmlsafe=true                             |
| 389 | a       | href=javascript:m4valor('oculto','zinicio',&lt;%=ziniciointervalo%&gt;,'set');valores();; title=JSP_EXPR_mssfilter.getProperty( |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 23  | zinicio         | getParameter(request,"zinicio")    |
| 25  | ztipocarga      | getParameter(request,"ztipocarga") |
| 28  | zf1id           | getParameter(request,"zf1id")      |
| 29  | zf1val          | getParameter(request,"zf1val")     |
| 30  | zf1txt          | getParameter(request,"zf1txt")     |
| 34  | zf2id           | getParameter(request,"zf2id")      |
| 35  | zf2val          | getParameter(request,"zf2val")     |
| 36  | zf2txt          | getParameter(request,"zf2txt")     |
| 41  | zf3id           | getParameter(request,"zf3id")      |
| 43  | zf4id           | getParameter(request,"zf4id")      |
| 45  | zv1             | getParameter(request,"zv1")        |
| 47  | zv2             | getParameter(request,"zv2")        |

| L   | Variable             | Expresión fuente                                                              | Resolución estática parcial                                                                                                                          |
| --- | -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | zpess                | zsessionmanagermssess.getProductID()                                          | zsessionmanagermssess.getProductID()                                                                                                                 |
| 23  | zinicio              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")                                                                                  |
| 25  | ztipocarga           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                                               |
| 28  | zf1id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")                                                                                    |
| 29  | zf1val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")                                                                                   |
| 30  | zf1txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")                                                                                   |
| 34  | zf2id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")                                                                                    |
| 35  | zf2val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")                                                                                   |
| 36  | zf2txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")                                                                                   |
| 41  | zf3id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")                                                                                    |
| 43  | zf4id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")                                                                                    |
| 45  | zv1                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")                                                                                      |
| 47  | zv2                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")                                                                                      |
| 50  | zm4object            | "SSCO_LIST_RESPONSIBLES"                                                      | SSCO_LIST_RESPONSIBLES                                                                                                                               |
| 51  | znodo                | "SSCO_LIST_RESPONSIBLES"                                                      | SSCO_LIST_RESPONSIBLES                                                                                                                               |
| 52  | zsubsesion           | zm4object                                                                     | SSCO_LIST_RESPONSIBLES                                                                                                                               |
| 54  | zdireccion           | "sse_g0/ssco_list_responsibles.jsp"                                           | sse_g0/ssco_list_responsibles.jsp                                                                                                                    |
| 55  | zredireccion         | "ssco_list_responsibles.jsp"                                                  | ssco_list_responsibles.jsp                                                                                                                           |
| 57  | zventanas            | "20"                                                                          | 20                                                                                                                                                   |
| 58  | zvuelta              | 5                                                                             | 5                                                                                                                                                    |
| 61  | znodo2               | "SHCO_GN_MT_FILTER_KEY"                                                       | SHCO_GN_MT_FILTER_KEY                                                                                                                                |
| 62  | znodo3               | "SHCO_GN_MT_FILT"                                                             | SHCO_GN_MT_FILT                                                                                                                                      |
| 63  | znodoroot            | "SHCO_GN_ROOT"                                                                | SHCO_GN_ROOT                                                                                                                                         |
| 64  | zmetodocarga         | zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER"                                  | SSCO_LIST_RESPONSIBLES{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                             |
| 67  | zregistroinicial     | Integer.valueOf(zinicio).intValue()                                           | Integer.valueOf(zinicio).intValue()                                                                                                                  |
| 69  | zventana             | Integer.valueOf(zventanas).intValue()                                         | Integer.valueOf(zventanas).intValue()                                                                                                                |
| 70  | zregistrofinal       | zregistroinicial + zventana - 1                                               | Integer.valueOf(zinicio).intValue(){zventana - 1}                                                                                                    |
| 72  | zoutputdef           | zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 73  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                            | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"["}Integer.valueOf(zinicio).intValue(){"]"}                                                       |
| 74  | zcomun               | znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}                                                |
| 75  | zraiz                | znodo + ":" + zm4object + "!" + znodo + "."                                   | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"."}                                                                    |
| 77  | zoutputdefroot       | zm4object + "!" + znodoroot + "[*]"                                           | SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_ROOT{"[*]"}                                                                                                       |
| 79  | zoutputdef2          | zm4object + "!" + znodo2 + "[*]"                                              | SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                              |
| 80  | zmove2               | znodo2 + ":" +znodo2 + "[FIRST]"                                              | SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                                           |
| 81  | zcomun2              | znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}                                                  |
| 83  | zoutputdef3          | zm4object + "!" + znodo3 + "[*]"                                              | SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                                    |
| 84  | zmove3               | znodo3 + ":" +znodo3 + "[FIRST]"                                              | SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                                                       |
| 85  | zcomun3              | znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 89  | znodolabel           | "SHCO_GN_LABEL"                                                               | SHCO_GN_LABEL                                                                                                                                        |
| 90  | zoutputdeflabel      | zm4object + "!" + znodolabel + "[*]"                                          | SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"[*]"}                                                                                                      |
| 91  | zmovelabel           | znodolabel + ":" + znodolabel + "[FIRST]"                                     | SHCO_GN_LABEL{":"}SHCO_GN_LABEL{"[FIRST]"}                                                                                                           |
| 92  | zraizlabel           | znodolabel + ":" + zm4object + "!" + znodolabel + "."                         | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}                                                                                      |
| 94  | zurl                 | zdireccion + "#filter"                                                        | sse_g0/ssco_list_responsibles.jsp{"#filter"}                                                                                                         |
| 95  | zaccion              | "/servlet/CheckSecurity/JSP/" + zurl                                          | /servlet/CheckSecurity/JSP/{}sse_g0/ssco_list_responsibles.jsp{"#filter"}                                                                            |
| 96  | zIDVALUE             | zcomun2 + "SCO_ID_KEY"                                                        | SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_KEY"}                                    |
| 97  | zIDTYPE2             | zcomun2 + "SCO_ID_TYPE"                                                       | SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                   |
| 98  | zNVALUE              | zcomun2 + "SCO_NM_KEY"                                                        | SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}                                    |
| 100 | zIDFIELD             | zcomun3 + "SCO_ID_FIELD"                                                      | SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_FIELD"}                                              |
| 101 | zIDTYPE              | zcomun3 + "SCO_ID_TYPE"                                                       | SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                               |
| 102 | zNFIELD              | zcomun3 + "SCO_NM_FIELD"                                                      | SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}                                              |
| 105 | zSHCOLBNEW           | zraizlabel + "SHCO_LB_NEW"                                                    | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEW"}                                                                       |
| 106 | zSHCOLBFILTER        | zraizlabel + "SHCO_LB_FILTER"                                                 | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILTER"}                                                                    |
| 107 | zSHCOLBFILT          | zraizlabel + "SHCO_LB_FILT"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILT"}                                                                      |
| 108 | zSHCOLBCLOSE         | zraizlabel + "SHCO_LB_CLOSE"                                                  | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLOSE"}                                                                     |
| 109 | zSCHOLBCKALL         | zraizlabel + "SCHO_LB_CK_ALL"                                                 | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_CK_ALL"}                                                                    |
| 110 | zSCHOLBDCKALL        | zraizlabel + "SCHO_LB_DCK_ALL"                                                | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_DCK_ALL"}                                                                   |
| 111 | zSHCOLBACEPT         | zraizlabel + "SHCO_LB_ACEPT"                                                  | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ACEPT"}                                                                     |
| 113 | zSHCOLBADVANCEFIL    | zraizlabel + "SHCO_LB_ADVANCED_FILTER"                                        | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ADVANCED_FILTER"}                                                           |
| 114 | zSHCOLBEASYFILT      | zraizlabel + "SHCO_LB_EASY_FILTER"                                            | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EASY_FILTER"}                                                               |
| 116 | zSHCOLBCLEAN         | zraizlabel + "SHCO_LB_CLEAN"                                                  | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLEAN"}                                                                     |
| 117 | zSHCOLBDEL           | zraizlabel + "SHCO_LB_DEL"                                                    | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_DEL"}                                                                       |
| 118 | zSHCOLBEDIT          | zraizlabel + "SHCO_LB_EDIT"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EDIT"}                                                                      |
| 119 | zSHCOLBINSERT        | zraizlabel + "SHCO_LB_INSERT"                                                 | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INSERT"}                                                                    |
| 120 | zSHCOLBLIST          | zraizlabel + "SHCO_LB_LIST"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_LIST"}                                                                      |
| 121 | zSHCOLBNEXT          | zraizlabel + "SHCO_LB_NEXT"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEXT"}                                                                      |
| 122 | zSHCOLBORD           | zraizlabel + "SHCO_LB_ORD"                                                    | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ORD"}                                                                       |
| 123 | zSHCOLBPREV          | zraizlabel + "SHCO_LB_PREV"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PREV"}                                                                      |
| 124 | zSHCOLBREFRESH       | zraizlabel + "SHCO_LB_REFRESH"                                                | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_REFRESH"}                                                                   |
| 125 | zSHCOLBSEND          | zraizlabel + "SHCO_LB_SEND"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_SEND"}                                                                      |
| 126 | zSHCOLBWRITE         | zraizlabel + "SHCO_LB_WRITE"                                                  | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WRITE"}                                                                     |
| 127 | zSHCOLBNOHELP        | zraizlabel + "SHCO_LB_NOHELP"                                                 | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NOHELP"}                                                                    |
| 128 | zSHCOLBHELP          | zraizlabel + "SHCO_LB_HELP"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_HELP"}                                                                      |
| 129 | zSHCOLBCAB           | zraizlabel + "SHCO_LB_CAB"                                                    | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CAB"}                                                                       |
| 130 | zSHCOLBTITLEROOT     | zraizlabel + "SHCO_LB_TITLE_ROOT"                                             | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}                                                                |
| 131 | zSHCOLBTITLE         | zraizlabel + "SHCO_LB_TITLE"                                                  | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE"}                                                                     |
| 132 | zSHCOLBTITERROR      | zraizlabel + "SHCO_LB_TIT_ERROR"                                              | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TIT_ERROR"}                                                                 |
| 133 | zSHCOLBBACK          | zraizlabel + "SHCO_LB_BACK"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_BACK"}                                                                      |
| 134 | zSHCOLBERR           | zraizlabel + "SHCO_LB_ERR"                                                    | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ERR"}                                                                       |
| 135 | zSHCOLBWARNING       | zraizlabel + "SHCO_LB_WARNING"                                                | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WARNING"}                                                                   |
| 136 | zSHCOLBINFO          | zraizlabel + "SHCO_LB_INFO"                                                   | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INFO"}                                                                      |
| 137 | zSHCOLBCABECINFO     | zraizlabel + "SHCO_LB_CABEC_INFO"                                             | SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CABEC_INFO"}                                                                |
| 140 | zField_Std_id_person | "SCO_ID_HR"                                                                   | SCO_ID_HR                                                                                                                                            |
| 141 | z_Std_id_person      | zcomun + zField_Std_id_person                                                 | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_ID_HR                                       |
| 143 | zField_Sco_gb_name   | "SCO_GB_NAME"                                                                 | SCO_GB_NAME                                                                                                                                          |
| 144 | z_Sco_gb_name        | zcomun + zField_Sco_gb_name                                                   | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME                                     |
| 145 | z_Std_or_hr_period   | zcomun + "SCO_OR_HR_PERIOD"                                                   | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}                            |
| 146 | z_Sco_nm_work_unit   | zcomun + "SCO_NM_WORK_UNIT"                                                   | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_WORK_UNIT"}                            |
| 147 | z_Sco_nm_type_res    | zcomun + "SCO_NM_TYPE_RES"                                                    | SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TYPE_RES"}                             |
| 163 | zcount               | 0                                                                             | 0                                                                                                                                                    |
| 164 | zcounti              | 0                                                                             | 0                                                                                                                                                    |
| 165 | zcounti2             | 0                                                                             | 0                                                                                                                                                    |
| 166 | zcounti3             | 0                                                                             | 0                                                                                                                                                    |
| 174 | zcountv              | String.valueOf(zcounti)                                                       | String.valueOf(zcounti)                                                                                                                              |
| 175 | zcountv2             | String.valueOf(zcounti2)                                                      | String.valueOf(zcounti2)                                                                                                                             |
| 176 | zcountv3             | String.valueOf(zcounti3)                                                      | String.valueOf(zcounti3)                                                                                                                             |
| 177 | zregistroinicials    | String.valueOf(zregistroinicial)                                              | String.valueOf(zregistroinicial)                                                                                                                     |
| 178 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                      |
| 179 | zposicions           | "0"                                                                           | 0                                                                                                                                                    |
| 180 | zcontrol             | 0                                                                             | 0                                                                                                                                                    |
| 181 | zposicion            | 0                                                                             | 0                                                                                                                                                    |
| 316 | ziniciosum           | Integer.parseInt(zinicio) + zventana -1                                       | {Integer.parseInt(zinicio)}{zventana -1}                                                                                                             |
| 337 | zpos                 | ""                                                                            |                                                                                                                                                      |
| 360 | zintervalo           | zcount/zventana                                                               | zcount/zventana                                                                                                                                      |
| 361 | zresto               | zcount%zventana                                                               | zcount%zventana                                                                                                                                      |
| 362 | zcontador            | 0                                                                             | 0                                                                                                                                                    |
| 363 | zsalto               | 0                                                                             | 0                                                                                                                                                    |
| 368 | ziniciointervalo     | String.valueOf(1 + zcontador*zventana)                                        | {String.valueOf(1}{zcontador*zventana)}                                                                                                              |
| 369 | zfinintervalo2       | zcontador*zventana + zventana                                                 | {zcontador*zventana}Integer.valueOf(zventanas).intValue()                                                                                            |
| 370 | zfinintervalo        | String.valueOf(zcontador*zventana + zventana)                                 | {String.valueOf(zcontador*zventana}{zventana)}                                                                                                       |
| 403 | zFirstLoad           | ""                                                                            |                                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                       |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 150 | m4:startpage | m4task=SSCO_LIST_RESPONSIBLES                                                                                                                                            |
| 150 | m4:beginjob  |                                                                                                                                                                          |
| 150 | m4:datadef   | m4o=SSCO_LIST_RESPONSIBLES; m4name=SSCO_LIST_RESPONSIBLES                                                                                                                |
| 151 | m4:exec      | m4method=SSCO_LIST_RESPONSIBLES{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                                        |
| 151 | m4:param     | name=LOAD_TYPE_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                                         |
| 152 | m4:outputdef | m4alias=SSCO_LIST_RESPONSIBLES                                                                                                                                           |
| 152 | m4:param     | name=m4name0; value=SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 153 | m4:outputdef | m4alias=SHCO_GN_MT_FILTER_KEY                                                                                                                                            |
| 153 | m4:param     | name=m4name0; value=SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                              |
| 154 | m4:outputdef | m4alias=SHCO_GN_MT_FILT                                                                                                                                                  |
| 154 | m4:param     | name=m4name0; value=SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                                    |
| 155 | m4:outputdef | m4alias=SHCO_GN_ROOT                                                                                                                                                     |
| 155 | m4:param     | name=m4name0; value=SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_ROOT{"[*]"}                                                                                                       |
| 156 | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                                                                                                    |
| 156 | m4:param     | name=m4name0; value=SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"[*]"}                                                                                                      |
| 157 | m4:endjob    |                                                                                                                                                                          |
| 158 | m4:move      |                                                                                                                                                                          |
| 158 | m4:param     | name=SSCO_LIST_RESPONSIBLES; value=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"["}Integer.valueOf(zinicio).intValue(){"]"}                                        |
| 159 | m4:move      |                                                                                                                                                                          |
| 159 | m4:param     | name=SSCO_LIST_RESPONSIBLES; value=SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                            |
| 160 | m4:move      |                                                                                                                                                                          |
| 160 | m4:param     | name=SSCO_LIST_RESPONSIBLES; value=SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                                        |
| 277 | m4:label     | m4name=SHCO_GN_LABEL{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}; htmlsafe=true                                                              |
| 284 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                                    |
| 284 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                                             |
| 284 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}; htmlsafe=true                                            |
| 287 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                                    |
| 287 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                                 |
| 287 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}SSCO_LIST_RESPONSIBLES{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}; htmlsafe=true                                  |
| 325 | m4:label     | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                   |
| 326 | m4:label     | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_WORK_UNIT"}; htmlsafe=true                          |
| 332 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 342 | m4:item      | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; m4varname=zGbName; htmlsafe=true                |
| 346 | m4:item      | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}; jsafe=true; htmlsafe=true              |
| 346 | m4:item      | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; jsafe=true; htmlsafe=true                       |
| 346 | m4:item      | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                   |
| 354 | m4:item      | m4name=SSCO_LIST_RESPONSIBLES{":"}SSCO_LIST_RESPONSIBLES{"!"}SSCO_LIST_RESPONSIBLES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_WORK_UNIT"}; htmlsafe=true                          |
| 417 | m4:endpage   |                                                                                                                                                                          |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 169 | getCount         | znodo,zm4object,znodo                                        |
| 170 | getCountInClient | znodo,zm4object,znodo                                        |
| 171 | getCountInClient | znodo2,zm4object,znodo2                                      |
| 172 | getCountInClient | znodo3,zm4object,znodo3                                      |
| 406 | getItem          | "SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_FIRST_LOAD" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos         |
| --- | ------------ | ------------------ |
| 184 | valores      |                    |
| 191 | buscarcadena | cadena             |
| 196 | searchoption | oselect,sidoption  |
| 205 | buscar       | lista,sublista,sel |
| 234 | filtrar      |                    |

| L   | Condición / acción / mensaje literal                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | if (zpess.equals("ess")){                                                                                                                                |
| 13  | &lt;%}else{%&gt;                                                                                                                                         |
| 24  | if ((zinicio==null)&#124;&#124;(zinicio.equals(""))){zinicio = "1";}                                                                                     |
| 26  | if ((ztipocarga==null)&#124;&#124;(ztipocarga.equals(""))){ztipocarga = "NORMAL";}                                                                       |
| 31  | if ((zf1id==null)&#124;&#124;(zf1id.equals(""))){zf1id = "";}                                                                                            |
| 32  | if ((zf1val==null)&#124;&#124;(zf1val.equals(""))){zf1val = "";}                                                                                         |
| 33  | if ((zf1txt==null)&#124;&#124;(zf1txt.equals(""))){zf1txt = "";}                                                                                         |
| 37  | if ((zf2id==null)&#124;&#124;(zf2id.equals(""))){zf2id = "";}                                                                                            |
| 38  | if ((zf2val==null)&#124;&#124;(zf2val.equals(""))){zf2val = "";}                                                                                         |
| 39  | if ((zf2txt==null)&#124;&#124;(zf2txt.equals(""))){zf2txt = "";}                                                                                         |
| 42  | if ((zf3id==null)&#124;&#124;(zf3id.equals(""))){zf3id = "";}                                                                                            |
| 44  | if ((zf4id==null)&#124;&#124;(zf4id.equals(""))){zf4id = "";}                                                                                            |
| 46  | if ((zv1==null)&#124;&#124;(zv1.equals(""))){zv1 = "";}                                                                                                  |
| 48  | if ((zv2==null)&#124;&#124;(zv2.equals(""))){zv2 = "";}                                                                                                  |
| 198 | if (oselect.options[ni].id == sidoption){                                                                                                                |
| 217 | if (strlist3ivalue == patron){                                                                                                                           |
| 232 | if (sel!= ""){searchoption(document.forms["FormularioFiltro"].elements[sublista],sel);}                                                                  |
| 245 | if (val != ""){                                                                                                                                          |
| 255 | if (err == 1){                                                                                                                                           |
| 315 | if (zcount&gt;0){                                                                                                                                        |
| 317 | if(ziniciosum &gt; zcount){ziniciosum = zcount;}                                                                                                         |
| 331 | &lt;%if (zcount&gt;0){%&gt;                                                                                                                              |
| 338 | if (zcontrol==0){                                                                                                                                        |
| 343 | &lt;% if (zGbName!=null &amp;&amp; zGbName!="")                                                                                                          |
| 348 | } else {                                                                                                                                                 |
| 364 | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                                                                        |
| 371 | if (zfinintervalo2 &gt; zcount) {                                                                                                                        |
| 376 | if(zsalto == zvuelta){                                                                                                                                   |
| 382 | if (zinicio.equals(ziniciointervalo) == true){                                                                                                           |
| 387 | else{                                                                                                                                                    |
| 400 | &lt;%}else{%&gt;                                                                                                                                         |
| 408 | if ((zFirstLoad.equals("0"))&amp;&amp;((ztipocarga=="NORMAL") &#124;&#124; ("KEEPDATA".equals(ztipocarga)))){%&gt;                                       |
| 410 | &lt;%}else{%&gt;                                                                                                                                         |
| 64  | expresión de cálculo/transformación: String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER";                                                 |
| 68  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                            |
| 70  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                               |
| 72  | expresión de cálculo/transformación: String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; //COMUN VENTANAS |
| 73  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                  |
| 74  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                   |
| 75  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zm4object + "!" + znodo + ".";                                                         |
| 77  | expresión de cálculo/transformación: String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";                                                        |
| 79  | expresión de cálculo/transformación: String zoutputdef2 = zm4object + "!" + znodo2 + "[*]"; //COMUN MT                                                   |
| 80  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                                   |
| 81  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                |
| 83  | expresión de cálculo/transformación: String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";                                                              |
| 84  | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]";                                                                    |
| 85  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                |
| 90  | expresión de cálculo/transformación: String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";                                                      |
| 91  | expresión de cálculo/transformación: String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";                                                      |
| 92  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";                                          |
| 94  | expresión de cálculo/transformación: String zurl = zdireccion + "#filter";                                                                               |
| 95  | expresión de cálculo/transformación: String zaccion = "/servlet/CheckSecurity/JSP/" + zurl;                                                              |
| 96  | expresión de cálculo/transformación: String zIDVALUE = zcomun2 + "SCO_ID_KEY";                                                                           |
| 97  | expresión de cálculo/transformación: String zIDTYPE2 = zcomun2 + "SCO_ID_TYPE";                                                                          |
| 98  | expresión de cálculo/transformación: String zNVALUE = zcomun2 + "SCO_NM_KEY";                                                                            |
| 100 | expresión de cálculo/transformación: String zIDFIELD = zcomun3 + "SCO_ID_FIELD";                                                                         |
| 101 | expresión de cálculo/transformación: String zIDTYPE = zcomun3 + "SCO_ID_TYPE";                                                                           |
| 102 | expresión de cálculo/transformación: String zNFIELD = zcomun3 + "SCO_NM_FIELD";                                                                          |
| 105 | expresión de cálculo/transformación: String zSHCOLBNEW = zraizlabel + "SHCO_LB_NEW";                                                                     |
| 106 | expresión de cálculo/transformación: String zSHCOLBFILTER = zraizlabel + "SHCO_LB_FILTER";                                                               |
| 107 | expresión de cálculo/transformación: String zSHCOLBFILT = zraizlabel + "SHCO_LB_FILT";                                                                   |
| 108 | expresión de cálculo/transformación: String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOSE";                                                                  |
| 109 | expresión de cálculo/transformación: String zSCHOLBCKALL= zraizlabel + "SCHO_LB_CK_ALL";                                                                 |
| 110 | expresión de cálculo/transformación: String zSCHOLBDCKALL= zraizlabel + "SCHO_LB_DCK_ALL";                                                               |
| 111 | expresión de cálculo/transformación: String zSHCOLBACEPT= zraizlabel + "SHCO_LB_ACEPT";                                                                  |
| 113 | expresión de cálculo/transformación: String zSHCOLBADVANCEFIL= zraizlabel + "SHCO_LB_ADVANCED_FILTER";                                                   |
| 114 | expresión de cálculo/transformación: String zSHCOLBEASYFILT= zraizlabel + "SHCO_LB_EASY_FILTER";                                                         |
| 116 | expresión de cálculo/transformación: String zSHCOLBCLEAN = zraizlabel + "SHCO_LB_CLEAN";                                                                 |
| 117 | expresión de cálculo/transformación: String zSHCOLBDEL = zraizlabel + "SHCO_LB_DEL";                                                                     |
| 118 | expresión de cálculo/transformación: String zSHCOLBEDIT = zraizlabel + "SHCO_LB_EDIT";                                                                   |
| 119 | expresión de cálculo/transformación: String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";                                                               |
| 120 | expresión de cálculo/transformación: String zSHCOLBLIST = zraizlabel + "SHCO_LB_LIST";                                                                   |
| 121 | expresión de cálculo/transformación: String zSHCOLBNEXT = zraizlabel + "SHCO_LB_NEXT";                                                                   |
| 122 | expresión de cálculo/transformación: String zSHCOLBORD = zraizlabel + "SHCO_LB_ORD";                                                                     |
| 123 | expresión de cálculo/transformación: String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";                                                                   |
| 124 | expresión de cálculo/transformación: String zSHCOLBREFRESH = zraizlabel + "SHCO_LB_REFRESH";                                                             |
| 125 | expresión de cálculo/transformación: String zSHCOLBSEND = zraizlabel + "SHCO_LB_SEND";                                                                   |
| 126 | expresión de cálculo/transformación: String zSHCOLBWRITE = zraizlabel + "SHCO_LB_WRITE";                                                                 |
| 127 | expresión de cálculo/transformación: String zSHCOLBNOHELP = zraizlabel + "SHCO_LB_NOHELP";                                                               |
| 128 | expresión de cálculo/transformación: String zSHCOLBHELP = zraizlabel + "SHCO_LB_HELP";                                                                   |
| 129 | expresión de cálculo/transformación: String zSHCOLBCAB = zraizlabel + "SHCO_LB_CAB";                                                                     |
| 130 | expresión de cálculo/transformación: String zSHCOLBTITLEROOT = zraizlabel + "SHCO_LB_TITLE_ROOT";                                                        |
| 131 | expresión de cálculo/transformación: String zSHCOLBTITLE = zraizlabel + "SHCO_LB_TITLE";                                                                 |
| 132 | expresión de cálculo/transformación: String zSHCOLBTITERROR = zraizlabel + "SHCO_LB_TIT_ERROR";                                                          |
| 133 | expresión de cálculo/transformación: String zSHCOLBBACK = zraizlabel + "SHCO_LB_BACK";                                                                   |
| 134 | expresión de cálculo/transformación: String zSHCOLBERR = zraizlabel + "SHCO_LB_ERR";                                                                     |
| 135 | expresión de cálculo/transformación: String zSHCOLBWARNING = zraizlabel + "SHCO_LB_WARNING";                                                             |
| 136 | expresión de cálculo/transformación: String zSHCOLBINFO= zraizlabel + "SHCO_LB_INFO";                                                                    |
| 137 | expresión de cálculo/transformación: String zSHCOLBCABECINFO= zraizlabel + "SHCO_LB_CABEC_INFO";                                                         |
| 141 | expresión de cálculo/transformación: String z_Std_id_person = zcomun + zField_Std_id_person;                                                             |
| 144 | expresión de cálculo/transformación: String z_Sco_gb_name = zcomun + zField_Sco_gb_name;                                                                 |
| 145 | expresión de cálculo/transformación: String z_Std_or_hr_period = zcomun + "SCO_OR_HR_PERIOD";                                                            |
| 146 | expresión de cálculo/transformación: String z_Sco_nm_work_unit = zcomun + "SCO_NM_WORK_UNIT";                                                            |
| 147 | expresión de cálculo/transformación: String z_Sco_nm_type_res = zcomun + "SCO_NM_TYPE_RES";                                                              |
| 178 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                            |
| 316 | expresión de cálculo/transformación: int ziniciosum = Integer.parseInt(zinicio) + zventana -1;                                                           |
| 368 | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);                                                   |
| 369 | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                                                                 |
| 370 | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana);                                               |
| 372 | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);                                                        |
| 394 | expresión de cálculo/transformación: zsalto = zsalto + 1;                                                                                                |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 19  | ../sse_generico/sse_generico_taglib_2.jsp |
| 20  | ../mss_generico/mss_filter_trans.jsp      |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 12  | /css/estilo_sse.css                       |
| 14  | /css/estilo_mss.css                       |
| 17  | /libreria/funciones_sse.js                |
| 18  | /libreria/funciones_filter.js             |
| 263 | &lt;%=zaccion%&gt;                        |
| 274 |                                           |
| 307 | javascript:filtrar();                     |
| 307 | /iconos/icono_filtrar_36_36.gif           |
| 308 | javascript:window.close();                |
| 308 | /iconos/entrar_blanco.gif                 |
| 389 | javascript:m4valor(                       |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 19  | ../sse_generico/sse_generico_taglib_2.jsp |
| 20  | ../mss_generico/mss_filter_trans.jsp      |
| 54  | sse_g0/ssco_list_responsibles.jsp         |
| 55  | ssco_list_responsibles.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../ssco_list_responsibles.jsp             | física     | [sse_g0/ssco_list_responsibles.jsp](sse_g0--ssco_list_responsibles.md)                                        |
| BASE   | 1   | ../ssco_list_responsibles.jsp             | física     | [sse_g0/ssco_list_responsibles.jsp](sse_g0--ssco_list_responsibles.md)                                        |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 19  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 20  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](../../responsable/tareas/mss_generico--mss_filter_trans.md)               |
| BASE   | 17  | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 18  | /libreria/funciones_filter.js             | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 263 | &lt;%=zaccion%&gt;                        | dinámica   | P06                                                                                                           |
| BASE   | 307 | javascript:filtrar();                     | dinámica   | P06                                                                                                           |
| BASE   | 308 | javascript:window.close();                | dinámica   | P06                                                                                                           |
| BASE   | 389 | javascript:m4valor(                       | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 19  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 20  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](../../responsable/tareas/mss_generico--mss_filter_trans.md)               |
| BASE   | 54  | sse_g0/ssco_list_responsibles.jsp         | contextual | [sse_g0/ssco_list_responsibles.jsp](sse_g0--ssco_list_responsibles.md)                                        |
| BASE   | 55  | ssco_list_responsibles.jsp                | física     | [sse_g0/ssco_list_responsibles.jsp](sse_g0--ssco_list_responsibles.md)                                        |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_list_responsibles.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
