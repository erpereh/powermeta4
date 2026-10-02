# sse_g3_p3

Identificador: `sse_g3/sse_g3_p3.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; m4:item:M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3.jsp) | `bc663b17542d8e9018e41e20bca426a31ca6f3ee62722278d032d406299471c0` |    211 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p3.jsp)   | `bc663b17542d8e9018e41e20bca426a31ca6f3ee62722278d032d406299471c0` |    211 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p3.jsp) | `bc663b17542d8e9018e41e20bca426a31ca6f3ee62722278d032d406299471c0` |    211 |
| BASE / español    | [sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3.jsp)                             | `df4c597695782132c8c0d7044284b15addd75c3de85d9909f5975bc20dcad9dd` |    203 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 122 | [valor dinámico] [valor dinámico] |
| 135 | [valor dinámico] "&gt;            |
| 179 | ');" &gt;                         |
| 180 | "&gt;                             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                    |
| --- | ------- | ------------------------------------------------------------------------------------------------------------ |
| 121 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=&lt;%=label_01%&gt;                         |
| 124 | a       | class=enlacefuncional; title=&lt;%=label_02%&gt;; href=sse_g3_p7.jsp?estado=31                               |
| 134 | form    | id=formselect; name=formselect; action=                                                                      |
| 136 | select  | name=filtro; id=filtro; class=fuenteapartados; onchange=javascript:Filtrar(); align=center                   |
| 138 | option  | value=All                                                                                                    |
| 140 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                     |
| 150 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31; method=post; name=oculto; id=oculto        |
| 151 | input   | type=hidden; id=zproducto; name=zproducto; value=&lt;%=zproducto%&gt;                                        |
| 152 | input   | type=hidden; id=znmproducto; name=znmproducto; value=&lt;%=znmproducto%&gt;                                  |
| 153 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                              |
| 176 | a       | title=&lt;%=label_08%&gt;; href=javascript:view_message();                                                   |
| 176 | img     | alt=&lt;%=label_08%&gt;; src=/iconos/advertencia_rojo.gif                                                    |
| 179 | a       | title=&lt;%=label_08%&gt;; href=javascript:CursosMultimedias('&lt;m4:item m4name=; jsafe=true; htmlsafe=true |
| 180 | a       | title=&lt;%=label_08%&gt;; href=&lt;m4:item m4name=; htmlsafe=true                                           |
| 186 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31; method=post; name=oculto2; id=oculto2 |
| 187 | input   | type=hidden; id=zidproducto; name=zidproducto                                                                |
| 188 | input   | type=hidden; id=znproducto; name=znproducto                                                                  |
| 189 | input   | type=hidden; id=znmpt; name=znmpt                                                                            |
| 192 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31; method=post; name=oculto3; id=oculto3 |
| 193 | input   | type=hidden; id=zproduct; name=zproduct                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 44  | estado          | getParameter(request,"estado")      |
| 45  | zinicios        | getParameter(request,"zinicios")    |
| 46  | znmproducto     | getParameter(request,"znmproducto") |
| 47  | zproducto       | getParameter(request,"zproducto")   |
| 48  | znmproducto     | getParameter(request,"znmproducto") |
| 49  | zproducto       | getParameter(request,"zproducto")   |
| 202 | formacion       | getParameter("formacion")           |
| 202 | formacion       | getParameter("formacion")           |

| L   | Variable          | Expresión fuente                                                                   | Resolución estática parcial                                                                                                                     |
| --- | ----------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Catá                                                                              | {"Catá}                                                                                                                                         |
| 9   | label_02          | "Inscripció                                                                        | {"Inscripció}                                                                                                                                   |
| 10  | label_03          | "Filtro"                                                                           | Filtro                                                                                                                                          |
| 11  | label_04          | "Tipos de formació                                                                 | {"Tipos de formació}                                                                                                                            |
| 12  | label_05          | "Producto"                                                                         | Producto                                                                                                                                        |
| 13  | label_06          | "Pá                                                                                | {"Pá}                                                                                                                                           |
| 14  | label_07          | "Consulta la formació                                                              | {"Consulta la formació}                                                                                                                         |
| 15  | label_08          | "Ver detalle"                                                                      | Ver detalle                                                                                                                                     |
| 16  | label_09          | "Todos"                                                                            | Todos                                                                                                                                           |
| 17  | label_10          | "Cerrar"                                                                           | Cerrar                                                                                                                                          |
| 18  | label_11          | "Mi plan de desarrollo"                                                            | Mi plan de desarrollo                                                                                                                           |
| 44  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                              |
| 45  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                            |
| 46  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                         |
| 47  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                           |
| 48  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                         |
| 49  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                           |
| 59  | zsubsesion        | "CSP_SSE_TRAINING_REQUEST"                                                         | CSP_SSE_TRAINING_REQUEST                                                                                                                        |
| 60  | zmeta4object      | "CSP_SSE_TRAINING_REQUEST"                                                         | CSP_SSE_TRAINING_REQUEST                                                                                                                        |
| 61  | znodo             | "M4T_PRODUCTOS"                                                                    | M4T_PRODUCTOS                                                                                                                                   |
| 62  | znodo1            | "M4T_PRODUCTOS_TIPO"                                                               | M4T_PRODUCTOS_TIPO                                                                                                                              |
| 63  | zventanas         | "20"                                                                               | 20                                                                                                                                              |
| 64  | zvuelta           | 5                                                                                  | 5                                                                                                                                               |
| 65  | zdireccion        | "sse_g3/sse_g3_p3.jsp"                                                             | sse_g3/sse_g3_p3.jsp                                                                                                                            |
| 66  | zestado           | "31"                                                                               | 31                                                                                                                                              |
| 67  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                               | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 69  | zventana          | Integer.valueOf(zventanas).intValue()                                              | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 70  | zregistrofinal    | zregistroinicial + zventana - 1                                                    | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 71  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"     | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 72  | zmove             | znodo + "[" + zregistroinicial + "]"                                               | M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 73  | zlectura          | zsubsesion + "!" + znodo                                                           | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS                                                                                                      |
| 74  | zraiz             | zsubsesion + "!" + znodo + "."                                                     | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"."}                                                                                                 |
| 75  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                  | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 76  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                  | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 77  | zmove1            | znodo1 + "[FIRST]"                                                                 | M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                                   |
| 78  | zlectura1         | zsubsesion + "!" + znodo1                                                          | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO                                                                                                 |
| 79  | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                    | CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"."}                                                                                            |
| 80  | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."                | M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 81  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                     | CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                        |
| 82  | ztipocarga        | "PR"                                                                               | PR                                                                                                                                              |
| 83  | zidproducto       | zcomun + "SCO_ID_DEV_PRODUCT"                                                      | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRODUCT"}                                     |
| 84  | znproducto        | zcomun + "SCO_NM_DEV_PRODUCT"                                                      | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}                                     |
| 85  | zhttp             | zcomun + "SCO_HTTP_PATH"                                                           | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}                                          |
| 86  | zidtrtb2          | zcomun + "SCO_ID_TRTBREQ"                                                          | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                         |
| 87  | znmpt             | zcomun + "SCO_NM_PRODUCT_TYPE"                                                     | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                                    |
| 88  | zspecprod         | zcomun + "SSE_SPEC_PROD"                                                           | M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}                                          |
| 89  | zidproductotipo   | zcomun1 + "SCO_ID_PRODUCT_TYPE"                                                    | M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PRODUCT_TYPE"}                          |
| 90  | znmproductotipo   | zcomun1 + "SCO_NM_PRODUCT_TYPE"                                                    | M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                          |
| 91  | zpos              | ""                                                                                 |                                                                                                                                                 |
| 104 | zcount            | 0                                                                                  | 0                                                                                                                                               |
| 105 | zcounti           | 0                                                                                  | 0                                                                                                                                               |
| 106 | zcount1           | 0                                                                                  | 0                                                                                                                                               |
| 107 | zcount1i          | 0                                                                                  | 0                                                                                                                                               |
| 115 | zcountv           | String.valueOf(zcounti)                                                            | String.valueOf(zcounti)                                                                                                                         |
| 116 | zcount1v          | String.valueOf(zcount1i)                                                           | String.valueOf(zcount1i)                                                                                                                        |
| 163 | zregistroinicials | String.valueOf(zregistroinicial)                                                   | String.valueOf(zregistroinicial)                                                                                                                |
| 164 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                     | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                 |
| 165 | zposicions        | "0"                                                                                | 0                                                                                                                                               |
| 166 | zcontrol          | 0                                                                                  | 0                                                                                                                                               |
| 167 | zposicion         | 0                                                                                  | 0                                                                                                                                               |
| 202 | formacion         | (request.getParameter("formacion")!=null) ? request.getParameter("formacion") : "" | (request.getParameter("formacion")!=null) ? request.getParameter("formacion") : ""                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93  | m4:startpage | m4task=CSP_SSE_TRAINING_REQUEST                                                                                                                                     |
| 93  | m4:beginjob  |                                                                                                                                                                     |
| 94  | m4:datadef   | m4o=CSP_SSE_TRAINING_REQUEST; m4name=CSP_SSE_TRAINING_REQUEST                                                                                                       |
| 98  | m4:exec      | m4method=CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                   |
| 98  | m4:param     | name=TIPO_CARGA; value=PR                                                                                                                                           |
| 99  | m4:outputdef | m4alias=M4T_PRODUCTOS                                                                                                                                               |
| 99  | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 100 | m4:outputdef | m4alias=M4T_PRODUCTOS_TIPO                                                                                                                                          |
| 100 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 101 | m4:endjob    |                                                                                                                                                                     |
| 102 | m4:move      |                                                                                                                                                                     |
| 102 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 103 | m4:move      |                                                                                                                                                                     |
| 103 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                  |
| 139 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                               |
| 140 | m4:item      | m4name=M4T_PRODUCTOS_TIPO{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                        |
| 169 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                           |
| 172 | m4:item      | m4varname=zinfoprod; m4name=M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}; htmlsafe=true                   |
| 179 | m4:item      | m4name=M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                   |
| 180 | m4:item      | m4name=M4T_PRODUCTOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                        |
| 199 | m4:endpage   |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 96  | setItem          | zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto |
| 110 | getCount         | znodo,zsubsesion,znodo                           |
| 111 | getCountInClient | znodo,zsubsesion,znodo                           |
| 112 | getCount         | znodo1,zsubsesion,znodo1                         |
| 113 | getCountInClient | znodo1,zsubsesion,znodo1                         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos |
| --- | ----------------- | ---------- |
| 27  | Filtrar           |            |
| 33  | CursosMultimedias | idproducto |
| 36  | view_message      |            |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 52  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 53  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 54  | if (zproducto==null &#124;&#124; zproducto == ""){zproducto = "All";znmproducto = "Todos";}                                                 |
| 155 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                           |
| 170 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 175 | &lt;% if(zinfoprod.equals("1")) { %&gt;                                                                                                     |
| 205 | if(ira!=''){ CursosMultimedias(ira); }                                                                                                      |
| 68  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 70  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 71  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 72  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 73  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 74  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 75  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 76  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 77  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 78  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 79  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 80  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 81  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 83  | expresión de cálculo/transformación: String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT";                                                    |
| 84  | expresión de cálculo/transformación: String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";                                                     |
| 85  | expresión de cálculo/transformación: String zhttp = zcomun + "SCO_HTTP_PATH";                                                               |
| 86  | expresión de cálculo/transformación: String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 87  | expresión de cálculo/transformación: String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";                                                         |
| 88  | expresión de cálculo/transformación: String zspecprod = zcomun + "SSE_SPEC_PROD";                                                           |
| 89  | expresión de cálculo/transformación: String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";                                              |
| 90  | expresión de cálculo/transformación: String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";                                              |
| 164 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 23  | ../../sse_generico/espanol/menu_ess.jsp               |
| 24  | /sse_g3/sse_train_trans.jsp                           |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 58  | ../../sse_generico/espanol/generico_links.jsp         |
| 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 197 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 21  | /css/estilo_sse.css                                            |
| 22  | /libreria/funciones_sse.js                                     |
| 25  | /libreria/clase_val_entradas.js                                |
| 121 | /iconos/noname_puesto_181_125.gif                              |
| 124 | sse_g3_p7.jsp?estado=31                                        |
| 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      |
| 176 | javascript:view_message();                                     |
| 176 | /iconos/advertencia_rojo.gif                                   |
| 179 | javascript:CursosMultimedias(                                  |
| 180 | &lt;m4:item m4name=                                            |
| 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 |
| 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 |
| 23  | ../../sse_generico/espanol/menu_ess.jsp                        |
| 24  | /sse_g3/sse_train_trans.jsp                                    |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp                |
| 58  | ../../sse_generico/espanol/generico_links.jsp                  |
| 65  | sse_g3/sse_g3_p3.jsp                                           |
| 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          |
| 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 122 | [valor dinámico] [valor dinámico] [valor dinámico] |
| 135 | [valor dinámico] "&gt;                             |
| 179 | ');" &gt;                                          |
| 180 | "&gt;                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                    |
| --- | ------- | ------------------------------------------------------------------------------------------------------------ |
| 121 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=&lt;%=label_01%&gt;                         |
| 124 | a       | class=enlacefuncional; title=&lt;%=label_02%&gt;; href=sse_g3_p7.jsp?estado=31                               |
| 125 | a       | class=enlacefuncional; title=&lt;%=label_11%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_pdev.jsp    |
| 134 | form    | id=formselect; name=formselect; action=                                                                      |
| 136 | select  | name=filtro; id=filtro; class=fuenteapartados; onchange=javascript:Filtrar(); align=center                   |
| 138 | option  | value=All                                                                                                    |
| 140 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                     |
| 150 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31; method=post; name=oculto; id=oculto        |
| 151 | input   | type=hidden; id=zproducto; name=zproducto; value=&lt;%=zproducto%&gt;                                        |
| 152 | input   | type=hidden; id=znmproducto; name=znmproducto; value=&lt;%=znmproducto%&gt;                                  |
| 153 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                              |
| 176 | a       | title=&lt;%=label_08%&gt;; href=javascript:view_message();                                                   |
| 176 | img     | alt=&lt;%=label_08%&gt;; src=/iconos/advertencia_rojo.gif                                                    |
| 179 | a       | title=&lt;%=label_08%&gt;; href=javascript:CursosMultimedias('&lt;m4:item m4name=; jsafe=true; htmlsafe=true |
| 180 | a       | title=&lt;%=label_08%&gt;; href=&lt;m4:item m4name=; htmlsafe=true                                           |
| 186 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31; method=post; name=oculto2; id=oculto2 |
| 187 | input   | type=hidden; id=zidproducto; name=zidproducto                                                                |
| 188 | input   | type=hidden; id=znproducto; name=znproducto                                                                  |
| 189 | input   | type=hidden; id=znmpt; name=znmpt                                                                            |
| 192 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31; method=post; name=oculto3; id=oculto3 |
| 193 | input   | type=hidden; id=zproduct; name=zproduct                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 44  | estado          | getParameter(request,"estado")      |
| 45  | zinicios        | getParameter(request,"zinicios")    |
| 46  | znmproducto     | getParameter(request,"znmproducto") |
| 47  | zproducto       | getParameter(request,"zproducto")   |
| 48  | znmproducto     | getParameter(request,"znmproducto") |
| 49  | zproducto       | getParameter(request,"zproducto")   |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                 |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Catá                                                                          | {"Catá}                                                                                                                                     |
| 9   | label_02          | "Inscripció                                                                    | {"Inscripció}                                                                                                                               |
| 10  | label_03          | "Filtro"                                                                       | Filtro                                                                                                                                      |
| 11  | label_04          | "Tipos de formació                                                             | {"Tipos de formació}                                                                                                                        |
| 12  | label_05          | "Producto"                                                                     | Producto                                                                                                                                    |
| 13  | label_06          | "Pá                                                                            | {"Pá}                                                                                                                                       |
| 14  | label_07          | "Consulta la formació                                                          | {"Consulta la formació}                                                                                                                     |
| 15  | label_08          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                 |
| 16  | label_09          | "Todos"                                                                        | Todos                                                                                                                                       |
| 17  | label_10          | "Cerrar"                                                                       | Cerrar                                                                                                                                      |
| 18  | label_11          | "Mi plan de desarrollo"                                                        | Mi plan de desarrollo                                                                                                                       |
| 44  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                          |
| 45  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                        |
| 46  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                     |
| 47  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                       |
| 48  | znmproducto       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")                                                                     |
| 49  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto")                                                                       |
| 59  | zsubsesion        | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                        |
| 60  | zmeta4object      | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                        |
| 61  | znodo             | "M4T_PRODUCTOS"                                                                | M4T_PRODUCTOS                                                                                                                               |
| 62  | znodo1            | "M4T_PRODUCTOS_TIPO"                                                           | M4T_PRODUCTOS_TIPO                                                                                                                          |
| 63  | zventanas         | "20"                                                                           | 20                                                                                                                                          |
| 64  | zvuelta           | 5                                                                              | 5                                                                                                                                           |
| 65  | zdireccion        | "sse_g3/sse_g3_p3.jsp"                                                         | sse_g3/sse_g3_p3.jsp                                                                                                                        |
| 66  | zestado           | "31"                                                                           | 31                                                                                                                                          |
| 67  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                        |
| 69  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                       |
| 70  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                          |
| 71  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 72  | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                 |
| 73  | zlectura          | zsubsesion + "!" + znodo                                                       | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS                                                                                                      |
| 74  | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"."}                                                                                                 |
| 75  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 76  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 77  | zmove1            | znodo1 + "[FIRST]"                                                             | M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                               |
| 78  | zlectura1         | zsubsesion + "!" + znodo1                                                      | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO                                                                                                 |
| 79  | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                | SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"."}                                                                                            |
| 80  | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."            | M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 81  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                        |
| 82  | ztipocarga        | "PR"                                                                           | PR                                                                                                                                          |
| 83  | zidproducto       | zcomun + "SCO_ID_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRODUCT"}                                     |
| 84  | znproducto        | zcomun + "SCO_NM_DEV_PRODUCT"                                                  | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}                                     |
| 85  | zhttp             | zcomun + "SCO_HTTP_PATH"                                                       | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}                                          |
| 86  | zidtrtb2          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                         |
| 87  | znmpt             | zcomun + "SCO_NM_PRODUCT_TYPE"                                                 | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                                    |
| 88  | zspecprod         | zcomun + "SSE_SPEC_PROD"                                                       | M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}                                          |
| 89  | zidproductotipo   | zcomun1 + "SCO_ID_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PRODUCT_TYPE"}                          |
| 90  | znmproductotipo   | zcomun1 + "SCO_NM_PRODUCT_TYPE"                                                | M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}                          |
| 91  | zpos              | ""                                                                             |                                                                                                                                             |
| 104 | zcount            | 0                                                                              | 0                                                                                                                                           |
| 105 | zcounti           | 0                                                                              | 0                                                                                                                                           |
| 106 | zcount1           | 0                                                                              | 0                                                                                                                                           |
| 107 | zcount1i          | 0                                                                              | 0                                                                                                                                           |
| 115 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                     |
| 116 | zcount1v          | String.valueOf(zcount1i)                                                       | String.valueOf(zcount1i)                                                                                                                    |
| 163 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                            |
| 164 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                             |
| 165 | zposicions        | "0"                                                                            | 0                                                                                                                                           |
| 166 | zcontrol          | 0                                                                              | 0                                                                                                                                           |
| 167 | zposicion         | 0                                                                              | 0                                                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                              |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 93  | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                                                                     |
| 93  | m4:beginjob  |                                                                                                                                                                 |
| 94  | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                                                           |
| 98  | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                   |
| 98  | m4:param     | name=TIPO_CARGA; value=PR                                                                                                                                       |
| 99  | m4:outputdef | m4alias=M4T_PRODUCTOS                                                                                                                                           |
| 99  | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 100 | m4:outputdef | m4alias=M4T_PRODUCTOS_TIPO                                                                                                                                      |
| 100 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[*]"}                                                                                          |
| 101 | m4:endjob    |                                                                                                                                                                 |
| 102 | m4:move      |                                                                                                                                                                 |
| 102 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_PRODUCTOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 103 | m4:move      |                                                                                                                                                                 |
| 103 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_PRODUCTOS_TIPO{"[FIRST]"}                                                                                                  |
| 139 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount1v).intValue()-1).toString()                                                                                           |
| 140 | m4:item      | m4name=M4T_PRODUCTOS_TIPO{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS_TIPO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PRODUCT_TYPE"}; htmlsafe=true                        |
| 169 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                       |
| 172 | m4:item      | m4varname=zinfoprod; m4name=M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SSE_SPEC_PROD"}; htmlsafe=true                   |
| 179 | m4:item      | m4name=M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRODUCT"}; htmlsafe=true                                   |
| 180 | m4:item      | m4name=M4T_PRODUCTOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_PRODUCTOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_HTTP_PATH"}; htmlsafe=true                                        |
| 199 | m4:endpage   |                                                                                                                                                                 |

| L   | Operación        | Argumentos literales                             |
| --- | ---------------- | ------------------------------------------------ |
| 96  | setItem          | zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto |
| 110 | getCount         | znodo,zsubsesion,znodo                           |
| 111 | getCountInClient | znodo,zsubsesion,znodo                           |
| 112 | getCount         | znodo1,zsubsesion,znodo1                         |
| 113 | getCountInClient | znodo1,zsubsesion,znodo1                         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos |
| --- | ----------------- | ---------- |
| 27  | Filtrar           |            |
| 33  | CursosMultimedias | idproducto |
| 36  | view_message      |            |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 52  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 53  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 54  | if (zproducto==null &#124;&#124; zproducto == ""){zproducto = "All";znmproducto = "Todos";}                                                 |
| 155 | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                           |
| 170 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 175 | &lt;% if(zinfoprod.equals("1")) { %&gt;                                                                                                     |
| 68  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 70  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 71  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 72  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 73  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 74  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 75  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 76  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                |
| 77  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[FIRST]";                                                                    |
| 78  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                          |
| 79  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                       |
| 80  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                  |
| 81  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 83  | expresión de cálculo/transformación: String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT";                                                    |
| 84  | expresión de cálculo/transformación: String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";                                                     |
| 85  | expresión de cálculo/transformación: String zhttp = zcomun + "SCO_HTTP_PATH";                                                               |
| 86  | expresión de cálculo/transformación: String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 87  | expresión de cálculo/transformación: String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";                                                         |
| 88  | expresión de cálculo/transformación: String zspecprod = zcomun + "SSE_SPEC_PROD";                                                           |
| 89  | expresión de cálculo/transformación: String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";                                              |
| 90  | expresión de cálculo/transformación: String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";                                              |
| 164 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                               |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 23  | ../../sse_generico/espanol/menu_ess.jsp               |
| 24  | /sse_g3/sse_train_trans.jsp                           |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 58  | ../../sse_generico/espanol/generico_links.jsp         |
| 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 197 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 21  | /css/estilo_sse.css                                            |
| 22  | /libreria/funciones_sse.js                                     |
| 25  | /libreria/clase_val_entradas.js                                |
| 121 | /iconos/noname_puesto_181_125.gif                              |
| 124 | sse_g3_p7.jsp?estado=31                                        |
| 125 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_pdev.jsp             |
| 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      |
| 176 | javascript:view_message();                                     |
| 176 | /iconos/advertencia_rojo.gif                                   |
| 179 | javascript:CursosMultimedias(                                  |
| 180 | &lt;m4:item m4name=                                            |
| 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 |
| 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 |
| 23  | ../../sse_generico/espanol/menu_ess.jsp                        |
| 24  | /sse_g3/sse_train_trans.jsp                                    |
| 57  | ../../sse_generico/espanol/generico_menusup.jsp                |
| 58  | ../../sse_generico/espanol/generico_links.jsp                  |
| 65  | sse_g3/sse_g3_p3.jsp                                           |
| 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          |
| 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | -------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| COLL   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 22  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 25  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 124 | sse_g3_p7.jsp?estado=31                                        | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                                                                                                                       |
| COLL   | 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 176 | javascript:view_message();                                     | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 179 | javascript:CursosMultimedias(                                  | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| COLL   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 65  | sse_g3/sse_g3_p3.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| COLL   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| CYC    | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 22  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 25  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 124 | sse_g3_p7.jsp?estado=31                                        | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                                                                                                                       |
| CYC    | 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 176 | javascript:view_message();                                     | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 179 | javascript:CursosMultimedias(                                  | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| CYC    | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 65  | sse_g3/sse_g3_p3.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| CYC    | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| IBER   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 22  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 25  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 124 | sse_g3_p7.jsp?estado=31                                        | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                                                                                                                       |
| IBER   | 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 176 | javascript:view_message();                                     | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 179 | javascript:CursosMultimedias(                                  | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| IBER   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 65  | sse_g3/sse_g3_p3.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| IBER   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| BASE   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 22  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 25  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 124 | sse_g3_p7.jsp?estado=31                                        | física     | [sse_g3/sse_g3_p7.jsp](sse_g3--sse_g3_p7.md)                                                                                                                                                       |
| BASE   | 125 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_pdev.jsp             | ausente    | P06                                                                                                                                                                                                |
| BASE   | 150 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 176 | javascript:view_message();                                     | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 179 | javascript:CursosMultimedias(                                  | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 186 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 192 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 23  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 24  | /sse_g3/sse_train_trans.jsp                                    | contextual | [sse_g3/sse_train_trans.jsp](sse_g3--sse_train_trans.md)                                                                                                                                           |
| BASE   | 57  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 58  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 65  | sse_g3/sse_g3_p3.jsp                                           | ausente    | P06                                                                                                                                                                                                |
| BASE   | 185 | ../../sse_generico/espanol/generico_ventanas_post.jsp          | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 197 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
