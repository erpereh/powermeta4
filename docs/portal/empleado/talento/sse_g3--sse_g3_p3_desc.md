# sse_g3_p3_desc

Identificador: `sse_g3/sse_g3_p3_desc.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------ | --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSE_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSE_TRAINING_REQUEST; m4:exec:CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3_desc.jsp) | `607035caba64a0ceaa23bcaa93fcec0614cdbf3ee737be79d8cd0e90a0580c26` |    220 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p3_desc.jsp)   | `607035caba64a0ceaa23bcaa93fcec0614cdbf3ee737be79d8cd0e90a0580c26` |    220 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p3_desc.jsp) | `607035caba64a0ceaa23bcaa93fcec0614cdbf3ee737be79d8cd0e90a0580c26` |    220 |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc.jsp)                             | `f3fb1ff96a41d4ae29c3bfc904b4d4643ff23f09a1ac886fe79049cfb4088092` |    170 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p3_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                   |
| --- | ------------------------------------------ |
| 139 | [valor dinámico] [valor dinámico]          |
| 152 | Modalidad                                  |
| 155 | Destinatarios                              |
| 175 | ',' ',' ');" title="Detalle del curso"&gt; |
| 179 | Ver destinatarios                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 138 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=Producto de formación                                                                                              |
| 139 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=sse_g3_p3.jsp?estado=31                                                                                          |
| 156 | a       | href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                                                      |
| 156 | img     | alt=&lt;%=label_13%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 172 | a       | title=&lt;%=label_11%&gt;; href=javascript:view_message();                                                                                                                          |
| 172 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                           |
| 175 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                     |
| 194 | a       | href=javascript:destinatarios('&lt;%=zDest%&gt;');                                                                                                                                  |
| 201 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                          |
| 202 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                               |
| 203 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                               |
| 204 | input   | type=hidden; id=zntipo; name=zntipo                                                                                                                                                 |
| 205 | input   | type=hidden; id=zncu; name=zncu                                                                                                                                                     |
| 206 | input   | type=hidden; id=zid; name=zid                                                                                                                                                       |
| 207 | input   | type=hidden; id=zinfosubp; name=zinfosubp                                                                                                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 57  | estado          | getParameter(request,"estado")      |
| 58  | zinicios        | getParameter(request,"zinicios")    |
| 59  | zidproducto     | getParameter(request,"zidproducto") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Detalle del producto"                                                         | Detalle del producto                                                                                                                         |
| 9   | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                                |
| 10  | label_03          | "Cursos presenciales"                                                          | Cursos presenciales                                                                                                                          |
| 11  | label_04          | "Nombre"                                                                       | Nombre                                                                                                                                       |
| 12  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                        |
| 13  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                                    |
| 14  | label_07          | "Tipo"                                                                         | Tipo                                                                                                                                         |
| 15  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                            |
| 16  | label_09          | "Este producto no dispone de ningú                                             | {"Este producto no dispone de ningú}                                                                                                         |
| 17  | label_10          | "Autor"                                                                        | Autor                                                                                                                                        |
| 18  | label_11          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                  |
| 19  | label_13          | "Catá                                                                          | {"Catá}                                                                                                                                      |
| 57  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                           |
| 58  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                         |
| 59  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")                                                                      |
| 69  | zsubsesion        | "CSP_SSE_TRAINING_REQUEST"                                                     | CSP_SSE_TRAINING_REQUEST                                                                                                                     |
| 70  | zMeta4Object      | "CSP_SSE_TRAINING_REQUEST"                                                     | CSP_SSE_TRAINING_REQUEST                                                                                                                     |
| 71  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                                   |
| 72  | znodo2            | "CSP_DESTINATARIOS"                                                            | CSP_DESTINATARIOS                                                                                                                            |
| 74  | ztipocarga        | "CM"                                                                           | CM                                                                                                                                           |
| 75  | zventanas         | "50"                                                                           | 50                                                                                                                                           |
| 76  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 78  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 79  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 80  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 81  | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 82  | zlectura          | zsubsesion + "!" + znodo                                                       | CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS                                                                                                      |
| 83  | zraiz             | zsubsesion + "!" + znodo + "."                                                 | CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"."}                                                                                                 |
| 84  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 87  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | CSP_SSE_TRAINING_REQUEST{"!"}CSP_DESTINATARIOS{"[*]"}                                                                                        |
| 88  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | CSP_DESTINATARIOS{":"}CSP_DESTINATARIOS{"[FIRST]"}                                                                                           |
| 90  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                     |
| 91  | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 92  | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 93  | zNnmtipo          | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 94  | zIDtipo           | zcomun + "SCO_ID_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 95  | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 96  | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 97  | zdiasestimated    | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 98  | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 99  | zinfosubprod      | zcomun + "INFO_SUBPROD"                                                        | M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}                                              |
| 100 | zDest             | ""                                                                             |                                                                                                                                              |
| 101 | zpos              | ""                                                                             |                                                                                                                                              |
| 119 | zcount            | 0                                                                              | 0                                                                                                                                            |
| 120 | zcounti           | 0                                                                              | 0                                                                                                                                            |
| 121 | zcount1           | 0                                                                              | 0                                                                                                                                            |
| 122 | zcount1i          | 0                                                                              | 0                                                                                                                                            |
| 123 | zdestinatarios    | 0                                                                              | 0                                                                                                                                            |
| 131 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 132 | zcountdest        | String.valueOf(zdestinatarios)                                                 | String.valueOf(zdestinatarios)                                                                                                               |
| 159 | i                 | 0                                                                              | 0                                                                                                                                            |
| 160 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 161 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                               |
| 162 | zposicions        | "0"                                                                            | 0                                                                                                                                            |
| 162 | zcontrol          | 0                                                                              | 0                                                                                                                                            |
| 162 | zposicion         | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 104 | m4:startpage | m4task=CSP_SSE_TRAINING_REQUEST                                                                                                                                  |
| 104 | m4:beginjob  |                                                                                                                                                                  |
| 105 | m4:datadef   | m4o=CSP_SSE_TRAINING_REQUEST; m4name=CSP_SSE_TRAINING_REQUEST                                                                                                    |
| 111 | m4:exec      | m4method=CARGA:{}CSP_SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                |
| 111 | m4:param     | name=TIPO_CARGA; value=CM                                                                                                                                        |
| 112 | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                               |
| 112 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 113 | m4:outputdef | m4alias=CSP_DESTINATARIOS                                                                                                                                        |
| 113 | m4:param     | name=m4name0; value=CSP_SSE_TRAINING_REQUEST{"!"}CSP_DESTINATARIOS{"[*]"}                                                                                        |
| 115 | m4:endjob    |                                                                                                                                                                  |
| 116 | m4:move      |                                                                                                                                                                  |
| 116 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 117 | m4:move      |                                                                                                                                                                  |
| 117 | m4:param     | name=CSP_SSE_TRAINING_REQUEST; value=CSP_DESTINATARIOS{":"}CSP_DESTINATARIOS{"[FIRST]"}                                                                          |
| 163 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                             |
| 167 | m4:item      | m4varname=infosubprod; m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; htmlsafe=true                     |
| 175 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 175 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; jsafe=true; htmlsafe=true                                |
| 175 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 176 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 177 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 217 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                                    |
| --- | ---------------- | ------------------------------------------------------- |
| 108 | setItem          | zsubsesion,znodo,"","SSE_PRODUCTO",zproducto            |
| 126 | getCount         | znodo,zsubsesion,znodo                                  |
| 127 | getCountInClient | znodo,zsubsesion,znodo                                  |
| 128 | getCount         | znodo2,zsubsesion,znodo2                                |
| 185 | getItem          | znodo2,zMeta4Object,znodo2,"","CSP_DESTINATARIOS_CURSO" |
| 186 | getItem          | znodo,zMeta4Object,znodo,"","CSP_PR_DESTINATARIOS"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos          |
| --- | --------------- | ------------------- |
| 29  | solicitar_curso | idtrtb,id,infosprod |
| 35  | view_message    |                     |
| 41  | destinatarios   | dest                |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 61  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado = "0";}                                                                           |
| 62  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 143 | if (zcounti == 0 ) {                                                                                                                        |
| 146 | &lt;% } if (zcounti != 0) { %&gt;                                                                                                           |
| 164 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 171 | if(infosubprod.equals("1")) { %&gt;                                                                                                         |
| 46  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios=" + dest_utf8;             |
| 77  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 79  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 80  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 81  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 82  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 83  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 84  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 87  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                |
| 88  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                     |
| 90  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 91  | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                   |
| 92  | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                    |
| 93  | expresión de cálculo/transformación: String zNnmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                      |
| 94  | expresión de cálculo/transformación: String zIDtipo = zcomun + "SCO_ID_DEV_PRO_TYPE";                                                       |
| 95  | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 96  | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                    |
| 97  | expresión de cálculo/transformación: String zdiasestimated = zcomun + "SCO_DAYS";                                                           |
| 98  | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                   |
| 99  | expresión de cálculo/transformación: String zinfosubprod = zcomun + "INFO_SUBPROD";                                                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 25  | ../../sse_generico/espanol/menu_ess.jsp            |
| 67  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 68  | ../../sse_generico/espanol/generico_links.jsp      |
| 211 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                   |
| --- | ------------------------------------------------------------------- |
| 23  | /css/estilo_sse.css                                                 |
| 24  | /libreria/funciones_sse.js                                          |
| 26  | /libreria/clase_val_entradas.js                                     |
| 27  | /library/jquery.js                                                  |
| 138 | /iconos/noname_puesto_181_125.gif                                   |
| 139 | sse_g3_p3.jsp?estado=31                                             |
| 156 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31           |
| 156 | /iconos/icono_flecha_azul2_ess_11_9.gif                             |
| 172 | javascript:view_message();                                          |
| 172 | /iconos/advertencia_rojo.gif                                        |
| 175 | javascript:solicitar_curso(                                         |
| 194 | javascript:destinatarios(                                           |
| 201 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31      |
| 25  | ../../sse_generico/espanol/menu_ess.jsp                             |
| 46  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios= |
| 67  | ../../sse_generico/espanol/generico_menusup.jsp                     |
| 68  | ../../sse_generico/espanol/generico_links.jsp                       |
| 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                   |
| --- | ------------------------------------------ |
| 113 | [valor dinámico] [valor dinámico]          |
| 147 | ',' ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 112 | img     | src=/iconos/noname_puesto_181_125.gif; width=99; height=100; alt=Producto de formación                                                                                              |
| 113 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=sse_g3_p3.jsp?estado=31                                                                                          |
| 130 | a       | href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                                                      |
| 130 | img     | alt=&lt;%=label_13%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 144 | a       | title=&lt;%=label_11%&gt;; href=javascript:view_message();                                                                                                                          |
| 144 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                           |
| 147 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                     |
| 155 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                          |
| 156 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                               |
| 157 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                               |
| 158 | input   | type=hidden; id=zntipo; name=zntipo                                                                                                                                                 |
| 159 | input   | type=hidden; id=zncu; name=zncu                                                                                                                                                     |
| 160 | input   | type=hidden; id=zid; name=zid                                                                                                                                                       |
| 161 | input   | type=hidden; id=zinfosubp; name=zinfosubp                                                                                                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 43  | estado          | getParameter(request,"estado")      |
| 44  | zinicios        | getParameter(request,"zinicios")    |
| 45  | zidproducto     | getParameter(request,"zidproducto") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Detalle del producto"                                                         | Detalle del producto                                                                                                                     |
| 9   | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                            |
| 10  | label_03          | "Cursos presenciales"                                                          | Cursos presenciales                                                                                                                      |
| 11  | label_04          | "Nombre"                                                                       | Nombre                                                                                                                                   |
| 12  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                    |
| 13  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                                |
| 14  | label_07          | "Tipo"                                                                         | Tipo                                                                                                                                     |
| 15  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                        |
| 16  | label_09          | "Este producto no dispone de ningú                                             | {"Este producto no dispone de ningú}                                                                                                     |
| 17  | label_10          | "Autor"                                                                        | Autor                                                                                                                                    |
| 18  | label_11          | "Ver detalle"                                                                  | Ver detalle                                                                                                                              |
| 19  | label_13          | "Catá                                                                          | {"Catá}                                                                                                                                  |
| 43  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 44  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 45  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")                                                                  |
| 54  | zsubsesion        | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                     |
| 55  | zMeta4Object      | "SSE_TRAINING_REQUEST"                                                         | SSE_TRAINING_REQUEST                                                                                                                     |
| 56  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                               |
| 58  | ztipocarga        | "CM"                                                                           | CM                                                                                                                                       |
| 59  | zventanas         | "50"                                                                           | 50                                                                                                                                       |
| 60  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 62  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 63  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 64  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 65  | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                 |
| 66  | zlectura          | zsubsesion + "!" + znodo                                                       | SSE_TRAINING_REQUEST{"!"}M4T_CURSOS                                                                                                      |
| 67  | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"."}                                                                                                 |
| 68  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 70  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                     |
| 71  | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 72  | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 73  | zNnmtipo          | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 74  | zIDtipo           | zcomun + "SCO_ID_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 75  | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 76  | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 77  | zdiasestimated    | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 78  | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 79  | zinfosubprod      | zcomun + "INFO_SUBPROD"                                                        | M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}                                              |
| 80  | zpos              | ""                                                                             |                                                                                                                                          |
| 96  | zcount            | 0                                                                              | 0                                                                                                                                        |
| 97  | zcounti           | 0                                                                              | 0                                                                                                                                        |
| 98  | zcount1           | 0                                                                              | 0                                                                                                                                        |
| 99  | zcount1i          | 0                                                                              | 0                                                                                                                                        |
| 106 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 133 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 134 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                           |
| 135 | zposicions        | "0"                                                                            | 0                                                                                                                                        |
| 135 | zcontrol          | 0                                                                              | 0                                                                                                                                        |
| 135 | zposicion         | 0                                                                              | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 83  | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                                                                  |
| 83  | m4:beginjob  |                                                                                                                                                              |
| 84  | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                                                        |
| 90  | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                                                |
| 90  | m4:param     | name=TIPO_CARGA; value=CM                                                                                                                                    |
| 91  | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                           |
| 91  | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 93  | m4:endjob    |                                                                                                                                                              |
| 94  | m4:move      |                                                                                                                                                              |
| 94  | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 136 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                         |
| 140 | m4:item      | m4varname=infosubprod; m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; htmlsafe=true                     |
| 147 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 147 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; jsafe=true; htmlsafe=true                                |
| 147 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 148 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 149 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; htmlsafe=true                                                |
| 150 | m4:item      | m4name=M4T_CURSOS{":"}SSE_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 167 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 87  | setItem          | zsubsesion,znodo,"","SSE_PRODUCTO",zproducto |
| 102 | getCount         | znodo,zsubsesion,znodo                       |
| 103 | getCountInClient | znodo,zsubsesion,znodo                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos          |
| --- | --------------- | ------------------- |
| 28  | solicitar_curso | idtrtb,id,infosprod |
| 34  | view_message    |                     |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 47  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado = "0";}                                                                           |
| 48  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 117 | if (zcounti == 0 ) {                                                                                                                        |
| 120 | &lt;% } if (zcounti != 0) { %&gt;                                                                                                           |
| 137 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 143 | &lt;% if(infosubprod.equals("1")) { %&gt;                                                                                                   |
| 61  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 63  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 64  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 65  | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 66  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 67  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 68  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 70  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                  |
| 71  | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                   |
| 72  | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                    |
| 73  | expresión de cálculo/transformación: String zNnmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                      |
| 74  | expresión de cálculo/transformación: String zIDtipo = zcomun + "SCO_ID_DEV_PRO_TYPE";                                                       |
| 75  | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 76  | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                    |
| 77  | expresión de cálculo/transformación: String zdiasestimated = zcomun + "SCO_DAYS";                                                           |
| 78  | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                   |
| 79  | expresión de cálculo/transformación: String zinfosubprod = zcomun + "INFO_SUBPROD";                                                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 25  | ../../sse_generico/espanol/menu_ess.jsp            |
| 52  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 53  | ../../sse_generico/espanol/generico_links.jsp      |
| 165 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 23  | /css/estilo_sse.css                                            |
| 24  | /libreria/funciones_sse.js                                     |
| 26  | /libreria/clase_val_entradas.js                                |
| 112 | /iconos/noname_puesto_181_125.gif                              |
| 113 | sse_g3_p3.jsp?estado=31                                        |
| 130 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      |
| 130 | /iconos/icono_flecha_azul2_ess_11_9.gif                        |
| 144 | javascript:view_message();                                     |
| 144 | /iconos/advertencia_rojo.gif                                   |
| 147 | javascript:solicitar_curso(                                    |
| 155 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31 |
| 25  | ../../sse_generico/espanol/menu_ess.jsp                        |
| 52  | ../../sse_generico/espanol/generico_menusup.jsp                |
| 53  | ../../sse_generico/espanol/generico_links.jsp                  |
| 165 | ../../sse_generico/espanol/generico_disclaimer.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                          | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 24  | /libreria/funciones_sse.js                                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 26  | /libreria/clase_val_entradas.js                                     | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 27  | /library/jquery.js                                                  | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                             |
| COLL   | 139 | sse_g3_p3.jsp?estado=31                                             | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| COLL   | 156 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31           | ausente    | P06                                                                                                                                                                                                |
| COLL   | 172 | javascript:view_message();                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 175 | javascript:solicitar_curso(                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 194 | javascript:destinatarios(                                           | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 201 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 46  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios= | ausente    | P06                                                                                                                                                                                                |
| COLL   | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 24  | /libreria/funciones_sse.js                                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 26  | /libreria/clase_val_entradas.js                                     | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 27  | /library/jquery.js                                                  | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                              |
| CYC    | 139 | sse_g3_p3.jsp?estado=31                                             | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| CYC    | 156 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31           | ausente    | P06                                                                                                                                                                                                |
| CYC    | 172 | javascript:view_message();                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 175 | javascript:solicitar_curso(                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 194 | javascript:destinatarios(                                           | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 201 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 46  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios= | ausente    | P06                                                                                                                                                                                                |
| CYC    | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 24  | /libreria/funciones_sse.js                                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 26  | /libreria/clase_val_entradas.js                                     | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 27  | /library/jquery.js                                                  | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                             |
| IBER   | 139 | sse_g3_p3.jsp?estado=31                                             | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| IBER   | 156 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31           | ausente    | P06                                                                                                                                                                                                |
| IBER   | 172 | javascript:view_message();                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 175 | javascript:solicitar_curso(                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 194 | javascript:destinatarios(                                           | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 201 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 46  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios= | ausente    | P06                                                                                                                                                                                                |
| IBER   | 67  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 68  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 211 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 52  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 53  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 165 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 24  | /libreria/funciones_sse.js                                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 26  | /libreria/clase_val_entradas.js                                     | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 113 | sse_g3_p3.jsp?estado=31                                             | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                                                                                                                       |
| BASE   | 130 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31           | ausente    | P06                                                                                                                                                                                                |
| BASE   | 144 | javascript:view_message();                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 147 | javascript:solicitar_curso(                                         | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 155 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp                             | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 52  | ../../sse_generico/espanol/generico_menusup.jsp                     | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 53  | ../../sse_generico/espanol/generico_links.jsp                       | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 165 | ../../sse_generico/espanol/generico_disclaimer.jsp                  | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
