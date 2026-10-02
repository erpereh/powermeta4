# mss_g3_p6

Identificador: `mss_g3/mss_g3_p6.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto                                              | Ámbito | Diccionario                                                                                  |
| ------------- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | COLL   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | CYC    | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | IBER   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | BASE   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6.jsp) | `0729c53355e463d8dbc9e72efd850acb233bf0e21a868ffc05018257b73e842e` |    300 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6.jsp)   | `e345ffd38cefc75d3f03b4829051740de0a5e0e0f1dab1730790efd9b88bfa5f` |    301 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p6.jsp) | `0729c53355e463d8dbc9e72efd850acb233bf0e21a868ffc05018257b73e842e` |    300 |
| BASE / español    | [mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6.jsp)                             | `e7d897763a3a42164ffb60b25d0da39dcdeea308a3d6d7fdca08df7c2a67da27` |    286 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 187 | [valor dinámico] [valor dinámico] |
| 204 | [valor dinámico] "&gt;            |
| 256 | ');" &gt;                         |
| 257 | "&gt;                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 186 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=&lt;%=label_01%&gt;                                                                                               |
| 190 | a       | class=enlacefuncional; title=&lt;%=label_10%&gt;; href=mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A     |
| 203 | form    | id=formselect; name=formselect; action=                                                                                                                                            |
| 205 | select  | name=filtro; id=filtro; class=fuenteapartados; onchange=javascript:Filtrar(); align=center                                                                                         |
| 207 | option  | value=All                                                                                                                                                                          |
| 209 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                           |
| 221 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31; method=post; name=oculto; id=oculto                                                                              |
| 222 | input   | type=hidden; id=zproducto; name=zproducto; value=&lt;%=zproducto%&gt;                                                                                                              |
| 223 | input   | type=hidden; id=znmproducto; name=znmproducto; value=&lt;%=znmproducto%&gt;                                                                                                        |
| 224 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                    |
| 226 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 227 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 228 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 229 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 253 | a       | title=&lt;%=label_08%&gt;; href=javascript:view_message();                                                                                                                         |
| 253 | img     | alt=&lt;%=label_08%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                          |
| 256 | a       | title=&lt;%=label_08%&gt;; href=javascript:CursosMultimedias('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                       |
| 257 | a       | title=&lt;%=label_08%&gt;; href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                 |
| 261 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31; method=post; name=oculto2; id=oculto2                                                                       |
| 262 | input   | type=hidden; id=zidproducto; name=zidproducto                                                                                                                                      |
| 263 | input   | type=hidden; id=znproducto; name=znproducto                                                                                                                                        |
| 264 | input   | type=hidden; id=znmpt; name=znmpt                                                                                                                                                  |
| 266 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 267 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 268 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 269 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 277 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                               |
| 278 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                     |
| 279 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                              |
| 280 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 281 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                              |
| 281 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 285 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 20  | empleado        | getParameter(request,"empleado")        |
| 21  | periodo         | getParameter(request,"periodo")         |
| 22  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 23  | zVis            | getParameter(request,"zVis")            |
| 62  | estado          | getParameter(request,"estado")          |
| 63  | zinicios        | getParameter(request,"zinicios")        |
| 64  | znmproducto     | getParameter(request,"znmproducto")     |
| 65  | zproducto       | getParameter(request,"zproducto")       |
| 175 | mailrrhh        | getBagEntries("mailrrhh")               |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                     |
| --- | ----------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                             |
| 9   | label_03          | "Filtro"                                                                       | Filtro                                                                                                                                          |
| 10  | label_04          | "Tipos de formació                                                             | {"Tipos de formació}                                                                                                                            |
| 11  | label_05          | "Producto"                                                                     | Producto                                                                                                                                        |
| 12  | label_06          | "Pá                                                                            | {"Pá}                                                                                                                                           |
| 13  | label_07          | "Consulta la formació                                                          | {"Consulta la formació}                                                                                                                         |
| 14  | label_08          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                     |
| 15  | label_09          | "Todos"                                                                        | Todos                                                                                                                                           |
| 16  | label_10          | "Solicita un curso que no aparezca en el catá                                  | {"Solicita un curso que no aparezca en el catá}                                                                                                 |
| 17  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                       |
| 18  | label_12          | "Plan de desarrollo"                                                           | Plan de desarrollo                                                                                                                              |
| 20  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                            |
| 21  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                             |
| 22  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                                     |
| 23  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                                |
| 62  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                              |
| 63  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                            |
| 64  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                         |
| 65  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                           |
| 86  | zsubsesion        | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                        |
| 87  | zmeta4object      | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                        |
| 88  | znodo             | "M4T_PRODUCTOS"                                                                | M4T_PRODUCTOS                                                                                                                                   |
| 89  | znodo1            | "M4T_PRODUCTOS_TIPO"                                                           | M4T_PRODUCTOS_TIPO                                                                                                                              |
| 90  | ztipocarga        | "PR"                                                                           | PR                                                                                                                                              |
| 92  | zventanas         | "20"                                                                           | 20                                                                                                                                              |
| 93  | zvuelta           | 5                                                                              | 5                                                                                                                                               |
| 94  | zdireccion        | "mss_g3/mss_g3_p6.jsp"                                                         | mss_g3/mss_g3_p6.jsp                                                                                                                            |
| 95  | zestado           | "33"                                                                           | 33                                                                                                                                              |
| 97  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 99  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 100 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 102 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 103 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 104 | zlectura          | zsubsesion + "!" + znodo                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS                                                                                                      |
| 105 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"."}                                                                                                 |
| 106 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 108 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 109 | zmove1            | znodo1 + "[FIRST]"                                                             | M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                                   |
| 110 | zlectura1         | zsubsesion + "!" + znodo1                                                      | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO                                                                                                 |
| 111 | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"."}                                                                                            |
| 112 | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 116 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                        |
| 117 | zmetodocarga2     | "CALCULA:" + zsubsesion + "!SSM_PRINCIPAL.OBTENER_CORREO"                      | CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}                                                                             |
| 121 | zidproducto       | zcomun + "SCO_ID_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRODUCT"}                                     |
| 122 | znproducto        | zcomun + "SCO_NM_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}                                     |
| 123 | zhttp             | zcomun + "SCO_HTTP_PATH"                                                       | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}                                          |
| 124 | zidtrtb2          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                         |
| 125 | znmpt             | zcomun + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                                    |
| 126 | zspecprod         | zcomun + "SSE_SPEC_PROD"                                                       | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}                                          |
| 128 | zidproductotipo   | zcomun1 + "SCO_ID_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PRODUCT_TYPE"}                          |
| 129 | znmproductotipo   | zcomun1 + "SCO_NM_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                          |
| 130 | zpos              | ""                                                                             |                                                                                                                                                 |
| 159 | zcount            | 0                                                                              | 0                                                                                                                                               |
| 160 | zcounti           | 0                                                                              | 0                                                                                                                                               |
| 161 | zcount1           | 0                                                                              | 0                                                                                                                                               |
| 162 | zcount1i          | 0                                                                              | 0                                                                                                                                               |
| 170 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                         |
| 171 | zcount1v          | String.valueOf(zcount1i)                                                       | String.valueOf(zcount1i)                                                                                                                        |
| 175 | zmailrrhh2        | zsesion22.getBagEntries("mailrrhh")                                            | zsesion22.getBagEntries("mailrrhh")                                                                                                             |
| 243 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                |
| 244 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                 |
| 245 | zposicions        | "0"                                                                            | 0                                                                                                                                               |
| 245 | zcontrol          | 0                                                                              | 0                                                                                                                                               |
| 245 | zposicion         | 0                                                                              | 0                                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                                                                  |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 135 | m4:startpage  | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                                                     |
| 136 | m4:beginjob   |                                                                                                                                                                     |
| 137 | m4:datadef    | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                                                       |
| 144 | m4:exec       | m4method=CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}                                                                                        |
| 145 | m4:exec       | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 145 | m4:param      | name=TIPO_CARGA; value=PR                                                                                                                                           |
| 148 | m4:outputdef  | m4alias=M4T_PRODUCTOS                                                                                                                                               |
| 148 | m4:param      | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 149 | m4:outputdef  | m4alias=M4T_PRODUCTOS_TIPO                                                                                                                                          |
| 149 | m4:param      | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 150 | m4:endjob     |                                                                                                                                                                     |
| 151 | m4:outputexec | m4alias=CALCULA; var=correo                                                                                                                                         |
| 154 | m4:move       |                                                                                                                                                                     |
| 154 | m4:param      | name=CSP_SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 155 | m4:move       |                                                                                                                                                                     |
| 155 | m4:param      | name=CSP_SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                  |
| 208 | m4:loop       | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                               |
| 209 | m4:item       | m4name=M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                        |
| 246 | m4:loop       | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                           |
| 249 | m4:item       | m4varname=zinfoprod; m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}; htmlsafe=true                   |
| 256 | m4:item       | m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                   |
| 257 | m4:item       | m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                        |
| 296 | m4:endpage    |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 140 | setItem          | zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto |
| 165 | getCount         | znodo,zsubsesion,znodo                           |
| 166 | getCountInClient | znodo,zsubsesion,znodo                           |
| 167 | getCount         | znodo1,zsubsesion,znodo1                         |
| 168 | getCountInClient | znodo1,zsubsesion,znodo1                         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos            |
| --- | ----------------- | --------------------- |
| 37  | Filtrar           |                       |
| 43  | CursosMultimedias | idproducto            |
| 47  | view_message      |                       |
| 52  | volver_prof       |                       |
| 73  | navegar           | ord,fecha,idhr,oreval |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 68  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 69  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 70  | if (zproducto==null &#124;&#124; zproducto== ""){ zproducto = "All";znmproducto = "Todos";}                                                 |
| 81  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 188 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 214 | if ('&lt;%=zproducto%&gt;'!= "All"){                                                                                                        |
| 225 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 234 | if (zcounti &gt; 0) {                                                                                                                       |
| 247 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 252 | &lt;% if(zinfoprod.equals("1")) { %&gt;                                                                                                     |
| 265 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 274 | } else {%&gt;    &lt;br /&gt;&lt;br /&gt; &lt;%}%&gt;                                                                                       |
| 276 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 291 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 98  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 100 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 102 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 103 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 104 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 105 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 106 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 108 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 109 | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 110 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 111 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 112 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 116 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 117 | expresión de cálculo/transformación: String zmetodocarga2 = "CALCULA:" + zsubsesion + "!SSM_PRINCIPAL.OBTENER_CORREO";                      |
| 121 | expresión de cálculo/transformación: String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT";                                                    |
| 122 | expresión de cálculo/transformación: String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";                                                     |
| 123 | expresión de cálculo/transformación: String zhttp = zcomun + "SCO_HTTP_PATH";                                                               |
| 124 | expresión de cálculo/transformación: String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 125 | expresión de cálculo/transformación: String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";                                                         |
| 126 | expresión de cálculo/transformación: String zspecprod = zcomun + "SSE_SPEC_PROD";                                                           |
| 128 | expresión de cálculo/transformación: String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";                                              |
| 129 | expresión de cálculo/transformación: String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";                                              |
| 244 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 34  | ../../mss_generico/espanol/menu_mss.jsp               |
| 35  | /mss_g3/mss_train_trans.jsp                           |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 83  | ../../sse_generico/espanol/generico_links.jsp         |
| 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 32  | /css/estilo_mss.css                                                                                                     |
| 33  | /libreria/funciones_sse.js                                                                                              |
| 186 | /iconos/noname_puesto_144_100.gif                                                                                       |
| 190 | mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A |
| 221 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                               |
| 253 | javascript:view_message();                                                                                              |
| 253 | /iconos/advertencia_rojo.gif                                                                                            |
| 256 | javascript:CursosMultimedias(                                                                                           |
| 257 | &lt;m4:item m4name=                                                                                                     |
| 261 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                          |
| 277 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                |
| 281 | javascript:volver_prof();                                                                                               |
| 281 | /iconos/icono_entrar_ess_36_36.gif                                                                                      |
| 285 | /iconos/cargando.gif                                                                                                    |
| 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                 |
| 35  | /mss_g3/mss_train_trans.jsp                                                                                             |
| 76  | mss_g3/mss_g3_p5_mod.jsp                                                                                                |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                      |
| 83  | ../../sse_generico/espanol/generico_links.jsp                                                                           |
| 94  | mss_g3/mss_g3_p6.jsp                                                                                                    |
| 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                   |
| 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                   |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 188 | [valor dinámico] [valor dinámico] |
| 205 | [valor dinámico] "&gt;            |
| 257 | ');" &gt;                         |
| 258 | "&gt;                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 187 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=&lt;%=label_01%&gt;                                                                                               |
| 191 | a       | class=enlacefuncional; title=&lt;%=label_10%&gt;; href=mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A     |
| 204 | form    | id=formselect; name=formselect; action=                                                                                                                                            |
| 206 | select  | name=filtro; id=filtro; class=fuenteapartados; onchange=javascript:Filtrar(); align=center                                                                                         |
| 208 | option  | value=All                                                                                                                                                                          |
| 210 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                           |
| 222 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31; method=post; name=oculto; id=oculto                                                                              |
| 223 | input   | type=hidden; id=zproducto; name=zproducto; value=&lt;%=zproducto%&gt;                                                                                                              |
| 224 | input   | type=hidden; id=znmproducto; name=znmproducto; value=&lt;%=znmproducto%&gt;                                                                                                        |
| 225 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                    |
| 227 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 228 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 229 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 230 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 254 | a       | title=&lt;%=label_08%&gt;; href=javascript:view_message();                                                                                                                         |
| 254 | img     | alt=&lt;%=label_08%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                          |
| 257 | a       | title=&lt;%=label_08%&gt;; href=javascript:CursosMultimedias('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                       |
| 258 | a       | title=&lt;%=label_08%&gt;; href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                 |
| 262 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31; method=post; name=oculto2; id=oculto2                                                                       |
| 263 | input   | type=hidden; id=zidproducto; name=zidproducto                                                                                                                                      |
| 264 | input   | type=hidden; id=znproducto; name=znproducto                                                                                                                                        |
| 265 | input   | type=hidden; id=znmpt; name=znmpt                                                                                                                                                  |
| 267 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 268 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 269 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 270 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 278 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                               |
| 279 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                     |
| 280 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                              |
| 281 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 282 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                              |
| 282 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 286 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 21  | empleado        | getParameter(request,"empleado")        |
| 22  | periodo         | getParameter(request,"periodo")         |
| 23  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 24  | zVis            | getParameter(request,"zVis")            |
| 63  | estado          | getParameter(request,"estado")          |
| 64  | zinicios        | getParameter(request,"zinicios")        |
| 65  | znmproducto     | getParameter(request,"znmproducto")     |
| 66  | zproducto       | getParameter(request,"zproducto")       |
| 176 | mailrrhh        | getBagEntries("mailrrhh")               |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                     |
| --- | ----------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | label_01          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                             |
| 10  | label_03          | "Filtro"                                                                       | Filtro                                                                                                                                          |
| 11  | label_04          | "Tipos de formació                                                             | {"Tipos de formació}                                                                                                                            |
| 12  | label_05          | "Producto"                                                                     | Producto                                                                                                                                        |
| 13  | label_06          | "Pá                                                                            | {"Pá}                                                                                                                                           |
| 14  | label_07          | "Consulta la formació                                                          | {"Consulta la formació}                                                                                                                         |
| 15  | label_08          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                     |
| 16  | label_09          | "Todos"                                                                        | Todos                                                                                                                                           |
| 17  | label_10          | "Solicita un curso que no aparezca en el catá                                  | {"Solicita un curso que no aparezca en el catá}                                                                                                 |
| 18  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                       |
| 19  | label_12          | "Plan de desarrollo"                                                           | Plan de desarrollo                                                                                                                              |
| 21  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                            |
| 22  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                             |
| 23  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                                     |
| 24  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                                |
| 63  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                              |
| 64  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                            |
| 65  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                         |
| 66  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                           |
| 87  | zsubsesion        | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                        |
| 88  | zmeta4object      | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                        |
| 89  | znodo             | "M4T_PRODUCTOS"                                                                | M4T_PRODUCTOS                                                                                                                                   |
| 90  | znodo1            | "M4T_PRODUCTOS_TIPO"                                                           | M4T_PRODUCTOS_TIPO                                                                                                                              |
| 91  | ztipocarga        | "PR"                                                                           | PR                                                                                                                                              |
| 93  | zventanas         | "20"                                                                           | 20                                                                                                                                              |
| 94  | zvuelta           | 5                                                                              | 5                                                                                                                                               |
| 95  | zdireccion        | "mss_g3/mss_g3_p6.jsp"                                                         | mss_g3/mss_g3_p6.jsp                                                                                                                            |
| 96  | zestado           | "33"                                                                           | 33                                                                                                                                              |
| 98  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 100 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 101 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 103 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 104 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 105 | zlectura          | zsubsesion + "!" + znodo                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS                                                                                                      |
| 106 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"."}                                                                                                 |
| 107 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 109 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 110 | zmove1            | znodo1 + "[FIRST]"                                                             | M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                                   |
| 111 | zlectura1         | zsubsesion + "!" + znodo1                                                      | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO                                                                                                 |
| 112 | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                | CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"."}                                                                                            |
| 113 | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 117 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                        |
| 118 | zmetodocarga2     | "CALCULA:" + zsubsesion + "!SSM_PRINCIPAL.OBTENER_CORREO"                      | CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}                                                                             |
| 122 | zidproducto       | zcomun + "SCO_ID_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRODUCT"}                                     |
| 123 | znproducto        | zcomun + "SCO_NM_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}                                     |
| 124 | zhttp             | zcomun + "SCO_HTTP_PATH"                                                       | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}                                          |
| 125 | zidtrtb2          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                         |
| 126 | znmpt             | zcomun + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                                    |
| 127 | zspecprod         | zcomun + "SSE_SPEC_PROD"                                                       | M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}                                          |
| 129 | zidproductotipo   | zcomun1 + "SCO_ID_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PRODUCT_TYPE"}                          |
| 130 | znmproductotipo   | zcomun1 + "SCO_NM_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                          |
| 131 | zpos              | ""                                                                             |                                                                                                                                                 |
| 160 | zcount            | 0                                                                              | 0                                                                                                                                               |
| 161 | zcounti           | 0                                                                              | 0                                                                                                                                               |
| 162 | zcount1           | 0                                                                              | 0                                                                                                                                               |
| 163 | zcount1i          | 0                                                                              | 0                                                                                                                                               |
| 171 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                         |
| 172 | zcount1v          | String.valueOf(zcount1i)                                                       | String.valueOf(zcount1i)                                                                                                                        |
| 176 | zmailrrhh2        | zsesion22.getBagEntries("mailrrhh")                                            | zsesion22.getBagEntries("mailrrhh")                                                                                                             |
| 244 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                |
| 245 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                 |
| 246 | zposicions        | "0"                                                                            | 0                                                                                                                                               |
| 246 | zcontrol          | 0                                                                              | 0                                                                                                                                               |
| 246 | zposicion         | 0                                                                              | 0                                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                                                                  |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | m4:startpage  | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                                                     |
| 137 | m4:beginjob   |                                                                                                                                                                     |
| 138 | m4:datadef    | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                                                       |
| 145 | m4:exec       | m4method=CALCULA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.OBTENER_CORREO"}                                                                                        |
| 146 | m4:exec       | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 146 | m4:param      | name=TIPO_CARGA; value=PR                                                                                                                                           |
| 149 | m4:outputdef  | m4alias=M4T_PRODUCTOS                                                                                                                                               |
| 149 | m4:param      | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 150 | m4:outputdef  | m4alias=M4T_PRODUCTOS_TIPO                                                                                                                                          |
| 150 | m4:param      | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 151 | m4:endjob     |                                                                                                                                                                     |
| 152 | m4:outputexec | m4alias=CALCULA; var=correo                                                                                                                                         |
| 155 | m4:move       |                                                                                                                                                                     |
| 155 | m4:param      | name=CSP_SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 156 | m4:move       |                                                                                                                                                                     |
| 156 | m4:param      | name=CSP_SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                  |
| 209 | m4:loop       | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                               |
| 210 | m4:item       | m4name=M4T_PRODUCTOS_TIPO{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                        |
| 247 | m4:loop       | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                           |
| 250 | m4:item       | m4varname=zinfoprod; m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}; htmlsafe=true                   |
| 257 | m4:item       | m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                   |
| 258 | m4:item       | m4name=M4T_PRODUCTOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                        |
| 297 | m4:endpage    |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 141 | setItem          | zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto |
| 166 | getCount         | znodo,zsubsesion,znodo                           |
| 167 | getCountInClient | znodo,zsubsesion,znodo                           |
| 168 | getCount         | znodo1,zsubsesion,znodo1                         |
| 169 | getCountInClient | znodo1,zsubsesion,znodo1                         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos            |
| --- | ----------------- | --------------------- |
| 38  | Filtrar           |                       |
| 44  | CursosMultimedias | idproducto            |
| 48  | view_message      |                       |
| 53  | volver_prof       |                       |
| 74  | navegar           | ord,fecha,idhr,oreval |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 69  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 70  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 71  | if (zproducto==null &#124;&#124; zproducto== ""){ zproducto = "All";znmproducto = "Todos";}                                                 |
| 82  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 189 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 215 | if ('&lt;%=zproducto%&gt;'!= "All"){                                                                                                        |
| 226 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 235 | if (zcounti &gt; 0) {                                                                                                                       |
| 248 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 253 | &lt;% if(zinfoprod.equals("1")) { %&gt;                                                                                                     |
| 266 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 275 | } else {%&gt;    &lt;br /&gt;&lt;br /&gt; &lt;%}%&gt;                                                                                       |
| 277 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 292 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 99  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 101 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 103 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 104 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 105 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 106 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 107 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 109 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 110 | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 111 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 112 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 113 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 117 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 118 | expresión de cálculo/transformación: String zmetodocarga2 = "CALCULA:" + zsubsesion + "!SSM_PRINCIPAL.OBTENER_CORREO";                      |
| 122 | expresión de cálculo/transformación: String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT";                                                    |
| 123 | expresión de cálculo/transformación: String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";                                                     |
| 124 | expresión de cálculo/transformación: String zhttp = zcomun + "SCO_HTTP_PATH";                                                               |
| 125 | expresión de cálculo/transformación: String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 126 | expresión de cálculo/transformación: String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";                                                         |
| 127 | expresión de cálculo/transformación: String zspecprod = zcomun + "SSE_SPEC_PROD";                                                           |
| 129 | expresión de cálculo/transformación: String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";                                              |
| 130 | expresión de cálculo/transformación: String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";                                              |
| 245 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 35  | ../../mss_generico/espanol/menu_mss.jsp               |
| 36  | /mss_g3/mss_train_trans.jsp                           |
| 83  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 84  | ../../sse_generico/espanol/generico_links.jsp         |
| 273 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 33  | /css/estilo_mss.css                                                                                                     |
| 34  | /libreria/funciones_sse.js                                                                                              |
| 187 | /iconos/noname_puesto_144_100.gif                                                                                       |
| 191 | mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A |
| 222 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                               |
| 254 | javascript:view_message();                                                                                              |
| 254 | /iconos/advertencia_rojo.gif                                                                                            |
| 257 | javascript:CursosMultimedias(                                                                                           |
| 258 | &lt;m4:item m4name=                                                                                                     |
| 262 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                          |
| 278 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                |
| 282 | javascript:volver_prof();                                                                                               |
| 282 | /iconos/icono_entrar_ess_36_36.gif                                                                                      |
| 286 | /iconos/cargando.gif                                                                                                    |
| 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                                 |
| 36  | /mss_g3/mss_train_trans.jsp                                                                                             |
| 77  | mss_g3/mss_g3_p5_mod.jsp                                                                                                |
| 83  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                      |
| 84  | ../../sse_generico/espanol/generico_links.jsp                                                                           |
| 95  | mss_g3/mss_g3_p6.jsp                                                                                                    |
| 273 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                   |
| 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                   |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 173 | [valor dinámico] [valor dinámico] [valor dinámico] |
| 190 | [valor dinámico] "&gt;                             |
| 242 | ');" &gt;                                          |
| 243 | "&gt;                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 172 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=&lt;%=label_01%&gt;                                                                                               |
| 176 | a       | class=enlacefuncional; title=&lt;%=label_10%&gt;; href=mailto:&lt;%=zmailrrhh2%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A |
| 177 | a       | class=enlacefuncional; title=&lt;%=label_12%&gt;; href=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp                                                               |
| 189 | form    | id=formselect; name=formselect; action=                                                                                                                                            |
| 191 | select  | name=filtro; id=filtro; class=fuenteapartados; onchange=javascript:Filtrar(); align=center                                                                                         |
| 193 | option  | value=All                                                                                                                                                                          |
| 195 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                           |
| 207 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31; method=post; name=oculto; id=oculto                                                                              |
| 208 | input   | type=hidden; id=zproducto; name=zproducto; value=&lt;%=zproducto%&gt;                                                                                                              |
| 209 | input   | type=hidden; id=znmproducto; name=znmproducto; value=&lt;%=znmproducto%&gt;                                                                                                        |
| 210 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                    |
| 212 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 213 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 214 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 215 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 239 | a       | title=&lt;%=label_08%&gt;; href=javascript:view_message();                                                                                                                         |
| 239 | img     | alt=&lt;%=label_08%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                          |
| 242 | a       | title=&lt;%=label_08%&gt;; href=javascript:CursosMultimedias('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                       |
| 243 | a       | title=&lt;%=label_08%&gt;; href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                 |
| 247 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31; method=post; name=oculto2; id=oculto2                                                                       |
| 248 | input   | type=hidden; id=zidproducto; name=zidproducto                                                                                                                                      |
| 249 | input   | type=hidden; id=znproducto; name=znproducto                                                                                                                                        |
| 250 | input   | type=hidden; id=znmpt; name=znmpt                                                                                                                                                  |
| 252 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                 |
| 253 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                    |
| 254 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 255 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                             |
| 263 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                               |
| 264 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                     |
| 265 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                              |
| 266 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                            |
| 267 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                              |
| 267 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 271 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 20  | empleado        | getParameter(request,"empleado")        |
| 21  | periodo         | getParameter(request,"periodo")         |
| 22  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 23  | zVis            | getParameter(request,"zVis")            |
| 62  | estado          | getParameter(request,"estado")          |
| 63  | zinicios        | getParameter(request,"zinicios")        |
| 64  | znmproducto     | getParameter(request,"znmproducto")     |
| 65  | zproducto       | getParameter(request,"zproducto")       |
| 164 | mailrrhh        | getBagEntries("mailrrhh")               |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                 |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                         |
| 9   | label_03          | "Filtro"                                                                       | Filtro                                                                                                                                      |
| 10  | label_04          | "Tipos de formació                                                             | {"Tipos de formació}                                                                                                                        |
| 11  | label_05          | "Producto"                                                                     | Producto                                                                                                                                    |
| 12  | label_06          | "Pá                                                                            | {"Pá}                                                                                                                                       |
| 13  | label_07          | "Consulta la formació                                                          | {"Consulta la formació}                                                                                                                     |
| 14  | label_08          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                 |
| 15  | label_09          | "Todos"                                                                        | Todos                                                                                                                                       |
| 16  | label_10          | "Solicita un curso que no aparezca en el catá                                  | {"Solicita un curso que no aparezca en el catá}                                                                                             |
| 17  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                   |
| 18  | label_12          | "Plan de desarrollo"                                                           | Plan de desarrollo                                                                                                                          |
| 20  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                        |
| 21  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                         |
| 22  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                                 |
| 23  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                            |
| 62  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                          |
| 63  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                        |
| 64  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                     |
| 65  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                       |
| 86  | zsubsesion        | "SSM_TRAINING_REQUEST"                                                         | SSM_TRAINING_REQUEST                                                                                                                        |
| 87  | zmeta4object      | "SSM_TRAINING_REQUEST"                                                         | SSM_TRAINING_REQUEST                                                                                                                        |
| 88  | znodo             | "M4T_PRODUCTOS"                                                                | M4T_PRODUCTOS                                                                                                                               |
| 89  | znodo1            | "M4T_PRODUCTOS_TIPO"                                                           | M4T_PRODUCTOS_TIPO                                                                                                                          |
| 90  | ztipocarga        | "PR"                                                                           | PR                                                                                                                                          |
| 92  | zventanas         | "20"                                                                           | 20                                                                                                                                          |
| 93  | zvuelta           | 5                                                                              | 5                                                                                                                                           |
| 94  | zdireccion        | "mss_g3/mss_g3_p6.jsp"                                                         | mss_g3/mss_g3_p6.jsp                                                                                                                        |
| 95  | zestado           | "33"                                                                           | 33                                                                                                                                          |
| 97  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                        |
| 99  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                       |
| 100 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                          |
| 102 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 103 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                 |
| 104 | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS                                                                                                      |
| 105 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"."}                                                                                                 |
| 106 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 108 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 109 | zmove1            | znodo1 + "[FIRST]"                                                             | M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                               |
| 110 | zlectura1         | zsubsesion + "!" + znodo1                                                      | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO                                                                                                 |
| 111 | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                | SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"."}                                                                                            |
| 112 | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 116 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                        |
| 120 | zidproducto       | zcomun + "SCO_ID_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRODUCT"}                                     |
| 121 | znproducto        | zcomun + "SCO_NM_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}                                     |
| 122 | zhttp             | zcomun + "SCO_HTTP_PATH"                                                       | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}                                          |
| 123 | zidtrtb2          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                         |
| 124 | znmpt             | zcomun + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                                    |
| 125 | zspecprod         | zcomun + "SSE_SPEC_PROD"                                                       | M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}                                          |
| 127 | zidproductotipo   | zcomun1 + "SCO_ID_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PRODUCT_TYPE"}                          |
| 128 | znmproductotipo   | zcomun1 + "SCO_NM_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                          |
| 129 | zpos              | ""                                                                             |                                                                                                                                             |
| 148 | zcount            | 0                                                                              | 0                                                                                                                                           |
| 149 | zcounti           | 0                                                                              | 0                                                                                                                                           |
| 150 | zcount1           | 0                                                                              | 0                                                                                                                                           |
| 151 | zcount1i          | 0                                                                              | 0                                                                                                                                           |
| 159 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                     |
| 160 | zcount1v          | String.valueOf(zcount1i)                                                       | String.valueOf(zcount1i)                                                                                                                    |
| 164 | zmailrrhh2        | zsesion22.getBagEntries("mailrrhh")                                            | zsesion22.getBagEntries("mailrrhh")                                                                                                         |
| 229 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                            |
| 230 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                             |
| 231 | zposicions        | "0"                                                                            | 0                                                                                                                                           |
| 231 | zcontrol          | 0                                                                              | 0                                                                                                                                           |
| 231 | zposicion         | 0                                                                              | 0                                                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                              |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 132 | m4:startpage | m4task=SSM_TRAINING_REQUEST                                                                                                                                     |
| 133 | m4:beginjob  |                                                                                                                                                                 |
| 134 | m4:datadef   | m4o=SSM_TRAINING_REQUEST; m4name=SSM_TRAINING_REQUEST                                                                                                           |
| 141 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                   |
| 141 | m4:param     | name=TIPO_CARGA; value=PR                                                                                                                                       |
| 142 | m4:outputdef | m4alias=M4T_PRODUCTOS                                                                                                                                           |
| 142 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 143 | m4:outputdef | m4alias=M4T_PRODUCTOS_TIPO                                                                                                                                      |
| 143 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 144 | m4:endjob    |                                                                                                                                                                 |
| 145 | m4:move      |                                                                                                                                                                 |
| 145 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 146 | m4:move      |                                                                                                                                                                 |
| 146 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                  |
| 194 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                           |
| 195 | m4:item      | m4name=M4T_PRODUCTOS_TIPO{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                        |
| 232 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                       |
| 235 | m4:item      | m4varname=zinfoprod; m4name=M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}; htmlsafe=true                   |
| 242 | m4:item      | m4name=M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                   |
| 243 | m4:item      | m4name=M4T_PRODUCTOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                        |
| 282 | m4:endpage   |                                                                                                                                                                 |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 137 | setItem          | zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto |
| 154 | getCount         | znodo,zsubsesion,znodo                           |
| 155 | getCountInClient | znodo,zsubsesion,znodo                           |
| 156 | getCount         | znodo1,zsubsesion,znodo1                         |
| 157 | getCountInClient | znodo1,zsubsesion,znodo1                         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos            |
| --- | ----------------- | --------------------- |
| 37  | Filtrar           |                       |
| 43  | CursosMultimedias | idproducto            |
| 47  | view_message      |                       |
| 52  | volver_prof       |                       |
| 73  | navegar           | ord,fecha,idhr,oreval |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 68  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 69  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 70  | if (zproducto==null &#124;&#124; zproducto== ""){ zproducto = "All";znmproducto = "Todos";}                                                 |
| 81  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 174 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 200 | if ('&lt;%=zproducto%&gt;'!= "All"){                                                                                                        |
| 211 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 220 | if (zcounti &gt; 0) {                                                                                                                       |
| 233 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 238 | &lt;% if(zinfoprod.equals("1")) { %&gt;                                                                                                     |
| 251 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 260 | } else {%&gt;    &lt;br /&gt;&lt;br /&gt; &lt;%}%&gt;                                                                                       |
| 262 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 277 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 98  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 100 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 102 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 103 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 104 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 105 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 106 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 108 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 109 | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 110 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 111 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 112 | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 116 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 120 | expresión de cálculo/transformación: String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT";                                                    |
| 121 | expresión de cálculo/transformación: String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";                                                     |
| 122 | expresión de cálculo/transformación: String zhttp = zcomun + "SCO_HTTP_PATH";                                                               |
| 123 | expresión de cálculo/transformación: String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 124 | expresión de cálculo/transformación: String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";                                                         |
| 125 | expresión de cálculo/transformación: String zspecprod = zcomun + "SSE_SPEC_PROD";                                                           |
| 127 | expresión de cálculo/transformación: String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";                                              |
| 128 | expresión de cálculo/transformación: String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";                                              |
| 230 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 34  | ../../mss_generico/espanol/menu_mss.jsp               |
| 35  | /mss_g3/mss_train_trans.jsp                           |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 83  | ../../sse_generico/espanol/generico_links.jsp         |
| 258 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 278 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                           |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 32  | /css/estilo_mss.css                                                                                                         |
| 33  | /libreria/funciones_sse.js                                                                                                  |
| 172 | /iconos/noname_puesto_144_100.gif                                                                                           |
| 176 | mailto:&lt;%=zmailrrhh2%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A |
| 177 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp                                                               |
| 207 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                   |
| 239 | javascript:view_message();                                                                                                  |
| 239 | /iconos/advertencia_rojo.gif                                                                                                |
| 242 | javascript:CursosMultimedias(                                                                                               |
| 243 | &lt;m4:item m4name=                                                                                                         |
| 247 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                              |
| 263 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                    |
| 267 | javascript:volver_prof();                                                                                                   |
| 267 | /iconos/icono_entrar_ess_36_36.gif                                                                                          |
| 271 | /iconos/cargando.gif                                                                                                        |
| 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     |
| 35  | /mss_g3/mss_train_trans.jsp                                                                                                 |
| 76  | mss_g3/mss_g3_p5_mod.jsp                                                                                                    |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          |
| 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               |
| 94  | mss_g3/mss_g3_p6.jsp                                                                                                        |
| 258 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       |
| 278 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                  | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| COLL   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| COLL   | 33  | /libreria/funciones_sse.js                                                                                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 190 | mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A     | dinámica   | P06                                                                                                                                                                            |
| COLL   | 221 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                   | ausente    | P06                                                                                                                                                                            |
| COLL   | 253 | javascript:view_message();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| COLL   | 256 | javascript:CursosMultimedias(                                                                                               | dinámica   | P06                                                                                                                                                                            |
| COLL   | 261 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                              | ausente    | P06                                                                                                                                                                            |
| COLL   | 277 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                    | ausente    | P06                                                                                                                                                                            |
| COLL   | 281 | javascript:volver_prof();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| COLL   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| COLL   | 76  | mss_g3/mss_g3_p5_mod.jsp                                                                                                    | ausente    | P06                                                                                                                                                                            |
| COLL   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 94  | mss_g3/mss_g3_p6.jsp                                                                                                        | ausente    | P06                                                                                                                                                                            |
| COLL   | 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| COLL   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| CYC    | 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| CYC    | 36  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| CYC    | 83  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| CYC    | 84  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 273 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| CYC    | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| CYC    | 34  | /libreria/funciones_sse.js                                                                                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 191 | mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A     | dinámica   | P06                                                                                                                                                                            |
| CYC    | 222 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                   | ausente    | P06                                                                                                                                                                            |
| CYC    | 254 | javascript:view_message();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| CYC    | 257 | javascript:CursosMultimedias(                                                                                               | dinámica   | P06                                                                                                                                                                            |
| CYC    | 262 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                              | ausente    | P06                                                                                                                                                                            |
| CYC    | 278 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                    | ausente    | P06                                                                                                                                                                            |
| CYC    | 282 | javascript:volver_prof();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| CYC    | 35  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| CYC    | 36  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| CYC    | 77  | mss_g3/mss_g3_p5_mod.jsp                                                                                                    | ausente    | P06                                                                                                                                                                            |
| CYC    | 83  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| CYC    | 84  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 95  | mss_g3/mss_g3_p6.jsp                                                                                                        | ausente    | P06                                                                                                                                                                            |
| CYC    | 273 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| CYC    | 293 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| IBER   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| IBER   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| IBER   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| IBER   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| IBER   | 33  | /libreria/funciones_sse.js                                                                                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 190 | mailto:&lt;%=correo%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A     | dinámica   | P06                                                                                                                                                                            |
| IBER   | 221 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                   | ausente    | P06                                                                                                                                                                            |
| IBER   | 253 | javascript:view_message();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| IBER   | 256 | javascript:CursosMultimedias(                                                                                               | dinámica   | P06                                                                                                                                                                            |
| IBER   | 261 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                              | ausente    | P06                                                                                                                                                                            |
| IBER   | 277 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                    | ausente    | P06                                                                                                                                                                            |
| IBER   | 281 | javascript:volver_prof();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| IBER   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| IBER   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| IBER   | 76  | mss_g3/mss_g3_p5_mod.jsp                                                                                                    | ausente    | P06                                                                                                                                                                            |
| IBER   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| IBER   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 94  | mss_g3/mss_g3_p6.jsp                                                                                                        | ausente    | P06                                                                                                                                                                            |
| IBER   | 272 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| IBER   | 292 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| BASE   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| BASE   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| BASE   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| BASE   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 258 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 278 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| BASE   | 33  | /libreria/funciones_sse.js                                                                                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 176 | mailto:&lt;%=zmailrrhh2%&gt;?Subject=Solicitud%20de%20un%20curso.&amp;Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A | dinámica   | P06                                                                                                                                                                            |
| BASE   | 177 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp                                                               | ausente    | P06                                                                                                                                                                            |
| BASE   | 207 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                   | ausente    | P06                                                                                                                                                                            |
| BASE   | 239 | javascript:view_message();                                                                                                  | dinámica   | P06                                                                                                                                                                            |
| BASE   | 242 | javascript:CursosMultimedias(                                                                                               | dinámica   | P06                                                                                                                                                                            |
| BASE   | 247 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31                                                              | ausente    | P06                                                                                                                                                                            |
| BASE   | 263 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 267 | javascript:volver_prof();                                                                                                   | dinámica   | P06                                                                                                                                                                            |
| BASE   | 34  | ../../mss_generico/espanol/menu_mss.jsp                                                                                     | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| BASE   | 35  | /mss_g3/mss_train_trans.jsp                                                                                                 | contextual | [mss_g3/mss_train_trans.jsp](mss_g3--mss_train_trans.md)                                                                                                                       |
| BASE   | 76  | mss_g3/mss_g3_p5_mod.jsp                                                                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                          | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| BASE   | 83  | ../../sse_generico/espanol/generico_links.jsp                                                                               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 94  | mss_g3/mss_g3_p6.jsp                                                                                                        | ausente    | P06                                                                                                                                                                            |
| BASE   | 258 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                       | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                |
| BASE   | 278 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                       | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
