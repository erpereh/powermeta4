# shco_mt_list_person

Identificador: `mss_generico/shco_mt_list_person.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

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

| Sociedad / ámbito | Archivo                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/shco_mt_list_person.jsp) | `feacd659044004ecb4874f745bb38f96d50cf8aeb0fbba2e9cc2f8c2ee994396` |      1 |
| COLL / compartido | [m4custom/COLL/mss_generico/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/shco_mt_list_person.jsp)                 | `2b5dbf5062bfcde51f43d5577cfa29004242669f300724f416928d87b8b48a90` |    420 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/shco_mt_list_person.jsp) | `feacd659044004ecb4874f745bb38f96d50cf8aeb0fbba2e9cc2f8c2ee994396` |      1 |
| IBER / compartido | [m4custom/IBER/mss_generico/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/shco_mt_list_person.jsp)                 | `2b5dbf5062bfcde51f43d5577cfa29004242669f300724f416928d87b8b48a90` |    420 |
| BASE / español    | [mss_generico/espanol/shco_mt_list_person.jsp](../../../../clon_portal/portal/mss_generico/espanol/shco_mt_list_person.jsp)                             | `feacd659044004ecb4874f745bb38f96d50cf8aeb0fbba2e9cc2f8c2ee994396` |      1 |
| BASE / compartido | [mss_generico/shco_mt_list_person.jsp](../../../../clon_portal/portal/mss_generico/shco_mt_list_person.jsp)                                             | `2b5dbf5062bfcde51f43d5577cfa29004242669f300724f416928d87b8b48a90` |    420 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/shco_mt_list_person.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                    |
| --- | -------------------------- |
| 1   | ../shco_mt_list_person.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 1   | ../shco_mt_list_person.jsp |

## Versión 2: COLL compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/shco_mt_list_person.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/shco_mt_list_person.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------- |
| 273 | " onchange="buscar('list1','list3')"&gt; " value=" "&gt; "&gt; " value=" "&gt; " tabindex="3" value="[valor dinámico]" /&gt;  |
| 297 | " onchange="buscar('list2','list4')"&gt; " value=" "&gt; " &gt; " value=" "&gt; " tabindex="6" value="[valor dinámico]" /&gt; |
| 330 | [valor dinámico]-[valor dinámico] [valor dinámico] [valor dinámico]                                                           |
| 347 | ';aval[1]=' ';returnvalues(aval);return false;"&gt;                                                                           |
| 383 | [valor dinámico] - [valor dinámico]                                                                                           |
| 388 | [valor dinámico] - [valor dinámico]                                                                                           |
| 400 | [valor dinámico] [valor dinámico]                                                                                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 254 | form    | action=&lt;%=zaccion%&gt;; method=post; name=oculto; id=oculto                                                                  |
| 255 | input   | type=hidden; id=zinicio; name=zinicio; value=                                                                                   |
| 256 | input   | type=hidden; id=ztipocarga; name=ztipocarga; value=&lt;%=ztipocarga%&gt;                                                        |
| 257 | input   | type=hidden; id=zf1id; name=zf1id; value=                                                                                       |
| 258 | input   | type=hidden; id=zf3id; name=zf3id; value=                                                                                       |
| 259 | input   | type=hidden; id=zv1; name=zv1; value=                                                                                           |
| 260 | input   | type=hidden; id=zf2id; name=zf2id; value=                                                                                       |
| 261 | input   | type=hidden; id=zf4id; name=zf4id; value=                                                                                       |
| 262 | input   | type=hidden; id=zv2; name=zv2; value=                                                                                           |
| 265 | form    | action= ; method=post; name=FormularioFiltro; id=FormularioFiltro                                                               |
| 274 | select  | tabindex=1; id=list1; class=select30; name=list1; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 275 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 277 | select  | tabindex=2; id=list3; class=select30; name=list3; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 278 | option  | id=A&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 293 | input   | class=fuentecampo; type=text; id=VALOR1; name=VALOR1; maxlength=50; title=&lt;m4:label m4name=; htmlsafe=true                   |
| 298 | select  | tabindex=4; id=list2; class=select30; name=list2; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 300 | option  | id=B&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 303 | select  | tabindex=5; id=list4; class=select30; name=list4; title=&lt;m4:label m4name=; htmlsafe=true                                     |
| 305 | option  | id=B&lt;m4:item m4name=; htmlsafe=true                                                                                          |
| 316 | input   | class=fuentecampo; type=text; id=VALOR2; name=VALOR2; maxlength=50; title=&lt;m4:label m4name=; htmlsafe=true                   |
| 319 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                       |
| 319 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                         |
| 320 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                       |
| 320 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                         |
| 348 | a       | title=; href=; onclick=var aval=new Array();aval[0]='&lt;m4:item m4name=; jsafe=true; htmlsafe=true                             |
| 388 | a       | href=javascript:m4valor('oculto','zinicio',&lt;%=ziniciointervalo%&gt;,'set');valores();; title=JSP_EXPR_mssfilter.getProperty( |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 7   | zcss            | getParameter(request,"zcss")       |
| 20  | zinicio         | getParameter(request,"zinicio")    |
| 22  | ztipocarga      | getParameter(request,"ztipocarga") |
| 25  | zf1id           | getParameter(request,"zf1id")      |
| 26  | zf1val          | getParameter(request,"zf1val")     |
| 27  | zf1txt          | getParameter(request,"zf1txt")     |
| 31  | zf2id           | getParameter(request,"zf2id")      |
| 32  | zf2val          | getParameter(request,"zf2val")     |
| 33  | zf2txt          | getParameter(request,"zf2txt")     |
| 38  | zf3id           | getParameter(request,"zf3id")      |
| 40  | zf4id           | getParameter(request,"zf4id")      |
| 42  | zv1             | getParameter(request,"zv1")        |
| 44  | zv2             | getParameter(request,"zv2")        |

| L   | Variable             | Expresión fuente                                                              | Resolución estática parcial                                                                                                        |
| --- | -------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 7   | zcss                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcss")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcss")                                                                   |
| 20  | zinicio              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio")                                                                |
| 22  | ztipocarga           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                             |
| 25  | zf1id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id")                                                                  |
| 26  | zf1val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val")                                                                 |
| 27  | zf1txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt")                                                                 |
| 31  | zf2id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id")                                                                  |
| 32  | zf2val               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val")                                                                 |
| 33  | zf2txt               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt")                                                                 |
| 38  | zf3id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id")                                                                  |
| 40  | zf4id                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id")                                                                  |
| 42  | zv1                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1")                                                                    |
| 44  | zv2                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2")                                                                    |
| 47  | zm4object            | "MSS_MT_PERSON"                                                               | MSS_MT_PERSON                                                                                                                      |
| 48  | znodo                | "MSS_MT_PERSON"                                                               | MSS_MT_PERSON                                                                                                                      |
| 49  | zsubsesion           | zm4object                                                                     | MSS_MT_PERSON                                                                                                                      |
| 51  | zdireccion           | "mss_generico/shco_mt_list_person.jsp"                                        | mss_generico/shco_mt_list_person.jsp                                                                                               |
| 52  | zredireccion         | "shco_mt_list_person.jsp"                                                     | shco_mt_list_person.jsp                                                                                                            |
| 54  | zventanas            | "20"                                                                          | 20                                                                                                                                 |
| 55  | zvuelta              | 5                                                                             | 5                                                                                                                                  |
| 58  | znodo2               | "SHCO_GN_MT_FILTER_KEY"                                                       | SHCO_GN_MT_FILTER_KEY                                                                                                              |
| 59  | znodo3               | "SHCO_GN_MT_FILT"                                                             | SHCO_GN_MT_FILT                                                                                                                    |
| 60  | znodoroot            | "SHCO_GN_ROOT"                                                                | SHCO_GN_ROOT                                                                                                                       |
| 61  | zmetodocarga         | zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER"                                  | MSS_MT_PERSON{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                    |
| 64  | zregistroinicial     | Integer.valueOf(zinicio).intValue()                                           | Integer.valueOf(zinicio).intValue()                                                                                                |
| 66  | zventana             | Integer.valueOf(zventanas).intValue()                                         | Integer.valueOf(zventanas).intValue()                                                                                              |
| 67  | zregistrofinal       | zregistroinicial + zventana - 1                                               | Integer.valueOf(zinicio).intValue(){zventana - 1}                                                                                  |
| 69  | zoutputdef           | zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | MSS_MT_PERSON{"!"}MSS_MT_PERSON{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 70  | zmove                | znodo + ":" + znodo + "[" + zregistroinicial + "]"                            | MSS_MT_PERSON{":"}MSS_MT_PERSON{"["}Integer.valueOf(zinicio).intValue(){"]"}                                                       |
| 71  | zcomun               | znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 72  | zraiz                | znodo + ":" + zm4object + "!" + znodo + "."                                   | MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"."}                                                                             |
| 74  | zoutputdefroot       | zm4object + "!" + znodoroot + "[*]"                                           | MSS_MT_PERSON{"!"}SHCO_GN_ROOT{"[*]"}                                                                                              |
| 76  | zoutputdef2          | zm4object + "!" + znodo2 + "[*]"                                              | MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                     |
| 77  | zmove2               | znodo2 + ":" +znodo2 + "[FIRST]"                                              | SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                         |
| 78  | zcomun2              | znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}                                         |
| 80  | zoutputdef3          | zm4object + "!" + znodo3 + "[*]"                                              | MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                           |
| 81  | zmove3               | znodo3 + ":" +znodo3 + "[FIRST]"                                              | SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                                     |
| 82  | zcomun3              | znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 86  | znodolabel           | "SHCO_GN_LABEL"                                                               | SHCO_GN_LABEL                                                                                                                      |
| 87  | zoutputdeflabel      | zm4object + "!" + znodolabel + "[*]"                                          | MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"[*]"}                                                                                             |
| 88  | zmovelabel           | znodolabel + ":" + znodolabel + "[FIRST]"                                     | SHCO_GN_LABEL{":"}SHCO_GN_LABEL{"[FIRST]"}                                                                                         |
| 89  | zraizlabel           | znodolabel + ":" + zm4object + "!" + znodolabel + "."                         | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}                                                                             |
| 91  | zurl                 | zdireccion + "#filter"                                                        | mss_generico/shco_mt_list_person.jsp{"#filter"}                                                                                    |
| 92  | zaccion              | "/servlet/CheckSecurity/JSP/" + zurl                                          | /servlet/CheckSecurity/JSP/{}mss_generico/shco_mt_list_person.jsp{"#filter"}                                                       |
| 93  | zIDVALUE             | zcomun2 + "SCO_ID_KEY"                                                        | SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_KEY"}                           |
| 94  | zIDTYPE2             | zcomun2 + "SCO_ID_TYPE"                                                       | SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                          |
| 95  | zNVALUE              | zcomun2 + "SCO_NM_KEY"                                                        | SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}                           |
| 97  | zIDFIELD             | zcomun3 + "SCO_ID_FIELD"                                                      | SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_FIELD"}                                     |
| 98  | zIDTYPE              | zcomun3 + "SCO_ID_TYPE"                                                       | SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}                                      |
| 99  | zNFIELD              | zcomun3 + "SCO_NM_FIELD"                                                      | SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}                                     |
| 102 | zSHCOLBNEW           | zraizlabel + "SHCO_LB_NEW"                                                    | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEW"}                                                              |
| 103 | zSHCOLBFILTER        | zraizlabel + "SHCO_LB_FILTER"                                                 | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILTER"}                                                           |
| 104 | zSHCOLBFILT          | zraizlabel + "SHCO_LB_FILT"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_FILT"}                                                             |
| 105 | zSHCOLBCLOSE         | zraizlabel + "SHCO_LB_CLOSE"                                                  | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLOSE"}                                                            |
| 106 | zSCHOLBCKALL         | zraizlabel + "SCHO_LB_CK_ALL"                                                 | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_CK_ALL"}                                                           |
| 107 | zSCHOLBDCKALL        | zraizlabel + "SCHO_LB_DCK_ALL"                                                | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SCHO_LB_DCK_ALL"}                                                          |
| 108 | zSHCOLBACEPT         | zraizlabel + "SHCO_LB_ACEPT"                                                  | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ACEPT"}                                                            |
| 110 | zSHCOLBADVANCEFIL    | zraizlabel + "SHCO_LB_ADVANCED_FILTER"                                        | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ADVANCED_FILTER"}                                                  |
| 111 | zSHCOLBEASYFILT      | zraizlabel + "SHCO_LB_EASY_FILTER"                                            | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EASY_FILTER"}                                                      |
| 113 | zSHCOLBCLEAN         | zraizlabel + "SHCO_LB_CLEAN"                                                  | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLEAN"}                                                            |
| 114 | zSHCOLBDEL           | zraizlabel + "SHCO_LB_DEL"                                                    | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_DEL"}                                                              |
| 115 | zSHCOLBEDIT          | zraizlabel + "SHCO_LB_EDIT"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_EDIT"}                                                             |
| 116 | zSHCOLBINSERT        | zraizlabel + "SHCO_LB_INSERT"                                                 | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INSERT"}                                                           |
| 117 | zSHCOLBLIST          | zraizlabel + "SHCO_LB_LIST"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_LIST"}                                                             |
| 118 | zSHCOLBNEXT          | zraizlabel + "SHCO_LB_NEXT"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NEXT"}                                                             |
| 119 | zSHCOLBORD           | zraizlabel + "SHCO_LB_ORD"                                                    | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ORD"}                                                              |
| 120 | zSHCOLBPREV          | zraizlabel + "SHCO_LB_PREV"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PREV"}                                                             |
| 121 | zSHCOLBREFRESH       | zraizlabel + "SHCO_LB_REFRESH"                                                | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_REFRESH"}                                                          |
| 122 | zSHCOLBSEND          | zraizlabel + "SHCO_LB_SEND"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_SEND"}                                                             |
| 123 | zSHCOLBWRITE         | zraizlabel + "SHCO_LB_WRITE"                                                  | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WRITE"}                                                            |
| 124 | zSHCOLBNOHELP        | zraizlabel + "SHCO_LB_NOHELP"                                                 | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_NOHELP"}                                                           |
| 125 | zSHCOLBHELP          | zraizlabel + "SHCO_LB_HELP"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_HELP"}                                                             |
| 126 | zSHCOLBCAB           | zraizlabel + "SHCO_LB_CAB"                                                    | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CAB"}                                                              |
| 127 | zSHCOLBTITLEROOT     | zraizlabel + "SHCO_LB_TITLE_ROOT"                                             | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}                                                       |
| 128 | zSHCOLBTITLE         | zraizlabel + "SHCO_LB_TITLE"                                                  | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE"}                                                            |
| 129 | zSHCOLBTITERROR      | zraizlabel + "SHCO_LB_TIT_ERROR"                                              | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TIT_ERROR"}                                                        |
| 130 | zSHCOLBBACK          | zraizlabel + "SHCO_LB_BACK"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_BACK"}                                                             |
| 131 | zSHCOLBERR           | zraizlabel + "SHCO_LB_ERR"                                                    | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ERR"}                                                              |
| 132 | zSHCOLBWARNING       | zraizlabel + "SHCO_LB_WARNING"                                                | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_WARNING"}                                                          |
| 133 | zSHCOLBINFO          | zraizlabel + "SHCO_LB_INFO"                                                   | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_INFO"}                                                             |
| 134 | zSHCOLBCABECINFO     | zraizlabel + "SHCO_LB_CABEC_INFO"                                             | SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CABEC_INFO"}                                                       |
| 137 | zField_Std_id_person | "STD_ID_PERSON"                                                               | STD_ID_PERSON                                                                                                                      |
| 138 | z_Std_id_person      | zcomun + zField_Std_id_person                                                 | MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON                                            |
| 140 | zField_Sco_gb_name   | "SCO_GB_NAME"                                                                 | SCO_GB_NAME                                                                                                                        |
| 141 | z_Sco_gb_name        | zcomun + zField_Sco_gb_name                                                   | MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME                                              |
| 156 | zcount               | 0                                                                             | 0                                                                                                                                  |
| 157 | zcounti              | 0                                                                             | 0                                                                                                                                  |
| 158 | zcounti2             | 0                                                                             | 0                                                                                                                                  |
| 159 | zcounti3             | 0                                                                             | 0                                                                                                                                  |
| 167 | zcountv              | String.valueOf(zcounti)                                                       | String.valueOf(zcounti)                                                                                                            |
| 168 | zcountv2             | String.valueOf(zcounti2)                                                      | String.valueOf(zcounti2)                                                                                                           |
| 169 | zcountv3             | String.valueOf(zcounti3)                                                      | String.valueOf(zcounti3)                                                                                                           |
| 170 | zregistroinicials    | String.valueOf(zregistroinicial)                                              | String.valueOf(zregistroinicial)                                                                                                   |
| 171 | zregistrofinals      | String.valueOf(zregistroinicial + zcounti - 1)                                | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                    |
| 172 | zposicions           | "0"                                                                           | 0                                                                                                                                  |
| 173 | zcontrol             | 0                                                                             | 0                                                                                                                                  |
| 174 | zposicion            | 0                                                                             | 0                                                                                                                                  |
| 332 | ziniciosum           | Integer.parseInt(zinicio) + zventana -1                                       | {Integer.parseInt(zinicio)}{zventana -1}                                                                                           |
| 342 | zpos                 | ""                                                                            |                                                                                                                                    |
| 359 | zintervalo           | zcount/zventana                                                               | zcount/zventana                                                                                                                    |
| 360 | zresto               | zcount%zventana                                                               | zcount%zventana                                                                                                                    |
| 361 | zcontador            | 0                                                                             | 0                                                                                                                                  |
| 362 | zsalto               | 0                                                                             | 0                                                                                                                                  |
| 367 | ziniciointervalo     | String.valueOf(1 + zcontador*zventana)                                        | {String.valueOf(1}{zcontador*zventana)}                                                                                            |
| 368 | zfinintervalo2       | zcontador*zventana + zventana                                                 | {zcontador*zventana}Integer.valueOf(zventanas).intValue()                                                                          |
| 369 | zfinintervalo        | String.valueOf(zcontador*zventana + zventana)                                 | {String.valueOf(zcontador*zventana}{zventana)}                                                                                     |
| 402 | zFirstLoad           | ""                                                                            |                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                     |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 144 | m4:startpage | m4task=MSS_MT_PERSON                                                                                                                                   |
| 144 | m4:beginjob  |                                                                                                                                                        |
| 144 | m4:datadef   | m4o=MSS_MT_PERSON; m4name=MSS_MT_PERSON                                                                                                                |
| 145 | m4:exec      | m4method=MSS_MT_PERSON{"!SHCO_GN_ROOT.SHCO_LOAD_FILTER"}                                                                                               |
| 145 | m4:param     | name=LOAD_TYPE_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga")                                                       |
| 146 | m4:outputdef | m4alias=MSS_MT_PERSON                                                                                                                                  |
| 146 | m4:param     | name=m4name0; value=MSS_MT_PERSON{"!"}MSS_MT_PERSON{"["}Integer.valueOf(zinicio).intValue(){"-"}Integer.valueOf(zinicio).intValue(){zventana - 1}{"]"} |
| 147 | m4:outputdef | m4alias=SHCO_GN_MT_FILTER_KEY                                                                                                                          |
| 147 | m4:param     | name=m4name0; value=MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[*]"}                                                                                     |
| 148 | m4:outputdef | m4alias=SHCO_GN_MT_FILT                                                                                                                                |
| 148 | m4:param     | name=m4name0; value=MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[*]"}                                                                                           |
| 149 | m4:outputdef | m4alias=SHCO_GN_ROOT                                                                                                                                   |
| 149 | m4:param     | name=m4name0; value=MSS_MT_PERSON{"!"}SHCO_GN_ROOT{"[*]"}                                                                                              |
| 150 | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                                                                                  |
| 150 | m4:param     | name=m4name0; value=MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"[*]"}                                                                                             |
| 151 | m4:endjob    |                                                                                                                                                        |
| 152 | m4:move      |                                                                                                                                                        |
| 152 | m4:param     | name=MSS_MT_PERSON; value=MSS_MT_PERSON{":"}MSS_MT_PERSON{"["}Integer.valueOf(zinicio).intValue(){"]"}                                                 |
| 153 | m4:move      |                                                                                                                                                        |
| 153 | m4:param     | name=MSS_MT_PERSON; value=SHCO_GN_MT_FILTER_KEY{":"}SHCO_GN_MT_FILTER_KEY{"[FIRST]"}                                                                   |
| 154 | m4:move      |                                                                                                                                                        |
| 154 | m4:param     | name=MSS_MT_PERSON; value=SHCO_GN_MT_FILT{":"}SHCO_GN_MT_FILT{"[FIRST]"}                                                                               |
| 268 | m4:label     | m4name=SHCO_GN_LABEL{":"}MSS_MT_PERSON{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_TITLE_ROOT"}; htmlsafe=true                                                     |
| 275 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                  |
| 275 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                                    |
| 275 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}; htmlsafe=true                                   |
| 278 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                  |
| 278 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                        |
| 278 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}; htmlsafe=true                         |
| 299 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                  |
| 300 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                                    |
| 300 | m4:item      | m4name=SHCO_GN_MT_FILT{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILT{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_FIELD"}; htmlsafe=true                                   |
| 304 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                  |
| 305 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TYPE"}; htmlsafe=true                        |
| 306 | m4:item      | m4name=SHCO_GN_MT_FILTER_KEY{":"}MSS_MT_PERSON{"!"}SHCO_GN_MT_FILTER_KEY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_KEY"}; htmlsafe=true                         |
| 328 | m4:label     | m4name=MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON; htmlsafe=true                                          |
| 329 | m4:label     | m4name=MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                            |
| 337 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                              |
| 348 | m4:item      | m4name=MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; jsafe=true; htmlsafe=true                                |
| 350 | m4:item      | m4name=MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}STD_ID_PERSON; htmlsafe=true                                          |
| 352 | m4:item      | m4name=MSS_MT_PERSON{":"}MSS_MT_PERSON{"!"}MSS_MT_PERSON{"[&amp;VAR.m4lix]"}{"."}SCO_GB_NAME; htmlsafe=true                                            |
| 416 | m4:endpage   |                                                                                                                                                        |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 162 | getCount         | znodo,zm4object,znodo                                        |
| 163 | getCountInClient | znodo,zm4object,znodo                                        |
| 164 | getCountInClient | znodo2,zm4object,znodo2                                      |
| 165 | getCountInClient | znodo3,zm4object,znodo3                                      |
| 405 | getItem          | "SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_FIRST_LOAD" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos         |
| --- | ------------ | ------------------ |
| 177 | valores      |                    |
| 186 | buscarcadena | cadena             |
| 191 | searchoption | oselect,sidoption  |
| 200 | buscar       | lista,sublista,sel |
| 229 | filtrar      |                    |

| L   | Condición / acción / mensaje literal                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((zcss==null)&#124;&#124;(zcss.equals(""))){zcss = "mss";}                                                                                            |
| 9   | if (zcss.equals("mss")){%&gt;                                                                                                                            |
| 11  | &lt;%}else{%&gt;                                                                                                                                         |
| 21  | if ((zinicio==null)&#124;&#124;(zinicio.equals(""))){zinicio = "1";}                                                                                     |
| 23  | if ((ztipocarga==null)&#124;&#124;(ztipocarga.equals(""))){ztipocarga = "NORMAL";}                                                                       |
| 28  | if ((zf1id==null)&#124;&#124;(zf1id.equals(""))){zf1id = "";}                                                                                            |
| 29  | if ((zf1val==null)&#124;&#124;(zf1val.equals(""))){zf1val = "";}                                                                                         |
| 30  | if ((zf1txt==null)&#124;&#124;(zf1txt.equals(""))){zf1txt = "";}                                                                                         |
| 34  | if ((zf2id==null)&#124;&#124;(zf2id.equals(""))){zf2id = "";}                                                                                            |
| 35  | if ((zf2val==null)&#124;&#124;(zf2val.equals(""))){zf2val = "";}                                                                                         |
| 36  | if ((zf2txt==null)&#124;&#124;(zf2txt.equals(""))){zf2txt = "";}                                                                                         |
| 39  | if ((zf3id==null)&#124;&#124;(zf3id.equals(""))){zf3id = "";}                                                                                            |
| 41  | if ((zf4id==null)&#124;&#124;(zf4id.equals(""))){zf4id = "";}                                                                                            |
| 43  | if ((zv1==null)&#124;&#124;(zv1.equals(""))){zv1 = "";}                                                                                                  |
| 45  | if ((zv2==null)&#124;&#124;(zv2.equals(""))){zv2 = "";}                                                                                                  |
| 193 | if (oselect.options[ni].id == sidoption){                                                                                                                |
| 212 | if (strlist3ivalue == patron){                                                                                                                           |
| 227 | if (sel!= ""){searchoption(document.forms["FormularioFiltro"].elements[sublista],sel);}                                                                  |
| 239 | if (val != ""){                                                                                                                                          |
| 246 | if (err == 1){                                                                                                                                           |
| 311 | if ('&lt;%=zf2id%&gt;'!= ""){                                                                                                                            |
| 331 | if (zcount&gt;0){                                                                                                                                        |
| 333 | if(ziniciosum &gt; zcount){ziniciosum = zcount;}                                                                                                         |
| 336 | &lt;%if (zcount&gt;0){%&gt;                                                                                                                              |
| 343 | if (zcontrol==0){                                                                                                                                        |
| 363 | if (zresto &gt; 0) {zintervalo = zintervalo + 1;}                                                                                                        |
| 370 | if (zfinintervalo2 &gt; zcount) {                                                                                                                        |
| 375 | if(zsalto == zvuelta){                                                                                                                                   |
| 381 | if (zinicio.equals(ziniciointervalo) == true){                                                                                                           |
| 386 | else{                                                                                                                                                    |
| 399 | &lt;%}else{%&gt;                                                                                                                                         |
| 407 | if ((zFirstLoad.equals("0"))&amp;&amp;((ztipocarga=="NORMAL") &#124;&#124; ("KEEPDATA".equals(ztipocarga)))){%&gt;                                       |
| 409 | &lt;%}else{%&gt;                                                                                                                                         |
| 61  | expresión de cálculo/transformación: String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER";                                                 |
| 65  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                            |
| 67  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                               |
| 69  | expresión de cálculo/transformación: String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; //COMUN VENTANAS |
| 70  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                  |
| 71  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                   |
| 72  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zm4object + "!" + znodo + ".";                                                         |
| 74  | expresión de cálculo/transformación: String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";                                                        |
| 76  | expresión de cálculo/transformación: String zoutputdef2 = zm4object + "!" + znodo2 + "[*]"; //COMUN MT                                                   |
| 77  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                                   |
| 78  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                |
| 80  | expresión de cálculo/transformación: String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";                                                              |
| 81  | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]";                                                                    |
| 82  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                |
| 87  | expresión de cálculo/transformación: String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";                                                      |
| 88  | expresión de cálculo/transformación: String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";                                                      |
| 89  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";                                          |
| 91  | expresión de cálculo/transformación: String zurl = zdireccion + "#filter";                                                                               |
| 92  | expresión de cálculo/transformación: String zaccion = "/servlet/CheckSecurity/JSP/" + zurl;                                                              |
| 93  | expresión de cálculo/transformación: String zIDVALUE = zcomun2 + "SCO_ID_KEY";                                                                           |
| 94  | expresión de cálculo/transformación: String zIDTYPE2 = zcomun2 + "SCO_ID_TYPE";                                                                          |
| 95  | expresión de cálculo/transformación: String zNVALUE = zcomun2 + "SCO_NM_KEY";                                                                            |
| 97  | expresión de cálculo/transformación: String zIDFIELD = zcomun3 + "SCO_ID_FIELD";                                                                         |
| 98  | expresión de cálculo/transformación: String zIDTYPE = zcomun3 + "SCO_ID_TYPE";                                                                           |
| 99  | expresión de cálculo/transformación: String zNFIELD = zcomun3 + "SCO_NM_FIELD";                                                                          |
| 102 | expresión de cálculo/transformación: String zSHCOLBNEW = zraizlabel + "SHCO_LB_NEW";                                                                     |
| 103 | expresión de cálculo/transformación: String zSHCOLBFILTER = zraizlabel + "SHCO_LB_FILTER";                                                               |
| 104 | expresión de cálculo/transformación: String zSHCOLBFILT = zraizlabel + "SHCO_LB_FILT";                                                                   |
| 105 | expresión de cálculo/transformación: String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOSE";                                                                  |
| 106 | expresión de cálculo/transformación: String zSCHOLBCKALL= zraizlabel + "SCHO_LB_CK_ALL";                                                                 |
| 107 | expresión de cálculo/transformación: String zSCHOLBDCKALL= zraizlabel + "SCHO_LB_DCK_ALL";                                                               |
| 108 | expresión de cálculo/transformación: String zSHCOLBACEPT= zraizlabel + "SHCO_LB_ACEPT";                                                                  |
| 110 | expresión de cálculo/transformación: String zSHCOLBADVANCEFIL= zraizlabel + "SHCO_LB_ADVANCED_FILTER";                                                   |
| 111 | expresión de cálculo/transformación: String zSHCOLBEASYFILT= zraizlabel + "SHCO_LB_EASY_FILTER";                                                         |
| 113 | expresión de cálculo/transformación: String zSHCOLBCLEAN = zraizlabel + "SHCO_LB_CLEAN";                                                                 |
| 114 | expresión de cálculo/transformación: String zSHCOLBDEL = zraizlabel + "SHCO_LB_DEL";                                                                     |
| 115 | expresión de cálculo/transformación: String zSHCOLBEDIT = zraizlabel + "SHCO_LB_EDIT";                                                                   |
| 116 | expresión de cálculo/transformación: String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";                                                               |
| 117 | expresión de cálculo/transformación: String zSHCOLBLIST = zraizlabel + "SHCO_LB_LIST";                                                                   |
| 118 | expresión de cálculo/transformación: String zSHCOLBNEXT = zraizlabel + "SHCO_LB_NEXT";                                                                   |
| 119 | expresión de cálculo/transformación: String zSHCOLBORD = zraizlabel + "SHCO_LB_ORD";                                                                     |
| 120 | expresión de cálculo/transformación: String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";                                                                   |
| 121 | expresión de cálculo/transformación: String zSHCOLBREFRESH = zraizlabel + "SHCO_LB_REFRESH";                                                             |
| 122 | expresión de cálculo/transformación: String zSHCOLBSEND = zraizlabel + "SHCO_LB_SEND";                                                                   |
| 123 | expresión de cálculo/transformación: String zSHCOLBWRITE = zraizlabel + "SHCO_LB_WRITE";                                                                 |
| 124 | expresión de cálculo/transformación: String zSHCOLBNOHELP = zraizlabel + "SHCO_LB_NOHELP";                                                               |
| 125 | expresión de cálculo/transformación: String zSHCOLBHELP = zraizlabel + "SHCO_LB_HELP";                                                                   |
| 126 | expresión de cálculo/transformación: String zSHCOLBCAB = zraizlabel + "SHCO_LB_CAB";                                                                     |
| 127 | expresión de cálculo/transformación: String zSHCOLBTITLEROOT = zraizlabel + "SHCO_LB_TITLE_ROOT";                                                        |
| 128 | expresión de cálculo/transformación: String zSHCOLBTITLE = zraizlabel + "SHCO_LB_TITLE";                                                                 |
| 129 | expresión de cálculo/transformación: String zSHCOLBTITERROR = zraizlabel + "SHCO_LB_TIT_ERROR";                                                          |
| 130 | expresión de cálculo/transformación: String zSHCOLBBACK = zraizlabel + "SHCO_LB_BACK";                                                                   |
| 131 | expresión de cálculo/transformación: String zSHCOLBERR = zraizlabel + "SHCO_LB_ERR";                                                                     |
| 132 | expresión de cálculo/transformación: String zSHCOLBWARNING = zraizlabel + "SHCO_LB_WARNING";                                                             |
| 133 | expresión de cálculo/transformación: String zSHCOLBINFO= zraizlabel + "SHCO_LB_INFO";                                                                    |
| 134 | expresión de cálculo/transformación: String zSHCOLBCABECINFO= zraizlabel + "SHCO_LB_CABEC_INFO";                                                         |
| 138 | expresión de cálculo/transformación: String z_Std_id_person = zcomun + zField_Std_id_person;                                                             |
| 141 | expresión de cálculo/transformación: String z_Sco_gb_name = zcomun + zField_Sco_gb_name;                                                                 |
| 171 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                            |
| 332 | expresión de cálculo/transformación: int ziniciosum = Integer.parseInt(zinicio) + zventana -1;                                                           |
| 367 | expresión de cálculo/transformación: String ziniciointervalo = String.valueOf(1 + zcontador*zventana);                                                   |
| 368 | expresión de cálculo/transformación: int zfinintervalo2 = zcontador*zventana + zventana;                                                                 |
| 369 | expresión de cálculo/transformación: String zfinintervalo = String.valueOf(zcontador*zventana + zventana);                                               |
| 371 | expresión de cálculo/transformación: zfinintervalo = String.valueOf(zcontador*zventana + zresto);                                                        |
| 393 | expresión de cálculo/transformación: zsalto = zsalto + 1;                                                                                                |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 16  | ../sse_generico/sse_generico_taglib_2.jsp |
| 17  | ../mss_generico/mss_filter_trans.jsp      |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 10  | /css/estilo_mss.css                       |
| 12  | /css/estilo_sse.css                       |
| 14  | /libreria/funciones_sse.js                |
| 15  | /libreria/funciones_filter.js             |
| 254 | &lt;%=zaccion%&gt;                        |
| 265 |                                           |
| 319 | javascript:filtrar();                     |
| 319 | /iconos/icono_filtrar_36_36.gif           |
| 320 | javascript:window.close();                |
| 320 | /iconos/entrar_blanco.gif                 |
| 388 | javascript:m4valor(                       |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 16  | ../sse_generico/sse_generico_taglib_2.jsp |
| 17  | ../mss_generico/mss_filter_trans.jsp      |
| 51  | mss_generico/shco_mt_list_person.jsp      |
| 52  | shco_mt_list_person.jsp                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                                                                                                          |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| COLL   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| COLL   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| COLL   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| COLL   | 14  | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)             |
| COLL   | 15  | /libreria/funciones_filter.js             | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md) |
| COLL   | 254 | &lt;%=zaccion%&gt;                        | dinámica   | P06                                                                                                                                                                                        |
| COLL   | 319 | javascript:filtrar();                     | dinámica   | P06                                                                                                                                                                                        |
| COLL   | 320 | javascript:window.close();                | dinámica   | P06                                                                                                                                                                                        |
| COLL   | 388 | javascript:m4valor(                       | dinámica   | P06                                                                                                                                                                                        |
| COLL   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| COLL   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| COLL   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| COLL   | 51  | mss_generico/shco_mt_list_person.jsp      | contextual | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md); [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                 |
| COLL   | 52  | shco_mt_list_person.jsp                   | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| IBER   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| IBER   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| IBER   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| IBER   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| IBER   | 14  | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)             |
| IBER   | 15  | /libreria/funciones_filter.js             | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md) |
| IBER   | 254 | &lt;%=zaccion%&gt;                        | dinámica   | P06                                                                                                                                                                                        |
| IBER   | 319 | javascript:filtrar();                     | dinámica   | P06                                                                                                                                                                                        |
| IBER   | 320 | javascript:window.close();                | dinámica   | P06                                                                                                                                                                                        |
| IBER   | 388 | javascript:m4valor(                       | dinámica   | P06                                                                                                                                                                                        |
| IBER   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| IBER   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| IBER   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| IBER   | 51  | mss_generico/shco_mt_list_person.jsp      | contextual | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md); [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                 |
| IBER   | 52  | shco_mt_list_person.jsp                   | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| BASE   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| BASE   | 1   | ../shco_mt_list_person.jsp                | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| BASE   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| BASE   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| BASE   | 14  | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                     |
| BASE   | 15  | /libreria/funciones_filter.js             | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                                                                                               |
| BASE   | 254 | &lt;%=zaccion%&gt;                        | dinámica   | P06                                                                                                                                                                                        |
| BASE   | 319 | javascript:filtrar();                     | dinámica   | P06                                                                                                                                                                                        |
| BASE   | 320 | javascript:window.close();                | dinámica   | P06                                                                                                                                                                                        |
| BASE   | 388 | javascript:m4valor(                       | dinámica   | P06                                                                                                                                                                                        |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                  |
| BASE   | 16  | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                              |
| BASE   | 17  | ../mss_generico/mss_filter_trans.jsp      | física     | [mss_generico/mss_filter_trans.jsp](mss_generico--mss_filter_trans.md)                                                                                                                     |
| BASE   | 51  | mss_generico/shco_mt_list_person.jsp      | contextual | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |
| BASE   | 52  | shco_mt_list_person.jsp                   | física     | [mss_generico/shco_mt_list_person.jsp](mss_generico--shco_mt_list_person.md)                                                                                                               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/shco_mt_list_person.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
