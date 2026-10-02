# Teléfono

Identificador: `sse_g1/sse_g1_p1_mod3.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------ | --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"} | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"} | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"} | m4:exec:CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; m4:item:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; m4:label:SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave          | Texto   | Ámbito | Diccionario                                                                                  |
| -------------- | ------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.LblWrite | Escribe | COLL   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite | Escribe | CYC    | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite | Escribe | IBER   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite | Escribe | BASE   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod3.jsp) | `bf1348cf60cddfd59dbe4935f6583db0398bda82e6f70aa5f81461939cc04655` |    266 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod3.jsp)   | `c5202349cec041159f63afd55c5bab159ee72a59b5db981855b36f32f53b21d7` |    266 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod3.jsp) | `bf1348cf60cddfd59dbe4935f6583db0398bda82e6f70aa5f81461939cc04655` |    266 |
| BASE / español    | [sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod3.jsp)                             | `26ae306593bccd473b2ee59a04f30d38c720a95d73489cbed3ca1d7108c48f99` |    264 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 8   | Teléfono                                                  |
| 133 | Teléfono                                                  |
| 136 | Da de alta o modifica tus teléfonos. Mis datos personales |
| 150 | Número de teléfono                                        |
| 158 | * Teléfono                                                |
| 161 | Tipo "&gt;                                                |
| 203 | Teléfono                                                  |
| 204 | Tipo de línea                                             |
| 205 | Lugar                                                     |
| 224 | ');"&gt;                                                  |
| 245 | ');"&gt;                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 135 | img     | alt=Teléfono; title=Teléfono; src=/iconos/noname_telefono_ess_107_100.gif; width=107; height=100                                                                                                          |
| 139 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                         |
| 144 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                                         |
| 145 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PHONE_FAX                                                                                                                                                        |
| 146 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                             |
| 147 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PHONE_FAX                                                                                                                                                        |
| 152 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                |
| 153 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 159 | input   | class=fuenteformulario; type=text; id=STD_PHONE; name=STD_PHONE; size=15; maxlength=11; title=Escribe tu número de teléfono; tabindex=4                                                                   |
| 162 | select  | id=STD_ID_LINE_TYPE; class=fuenteformulario150; name=STD_ID_LINE_TYPE; title=Selecciona el tipo de línea; tabindex=5                                                                                      |
| 165 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                  |
| 175 | input   | type=hidden; name=STD_ID_LOCATION_TYPE; value=1                                                                                                                                                           |
| 184 | a       | title=Enviar; href=javascript:comprobar();; tabindex=7                                                                                                                                                    |
| 184 | img     | alt=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                           |
| 225 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 226 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 246 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 247 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 39  | estado          | getParameter(request,"estado")   |
| 40  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 39  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                   |
| 40  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                 |
| 49  | zsubsesion          | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 50  | zmeta4object        | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 51  | znodo               | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 52  | znodo               | "M4T_PHONE_FAX"                                                                | M4T_PHONE_FAX                                                                                                                        |
| 53  | znodo2              | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                 |
| 54  | znodo3              | "M4T_LU_LINE_TYPE"                                                             | M4T_LU_LINE_TYPE                                                                                                                     |
| 55  | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                  |
| 56  | ztipocarga          | "ALL"                                                                          | ALL                                                                                                                                  |
| 57  | ztipocarga          | "M4T"                                                                          | M4T                                                                                                                                  |
| 59  | zventanas           | "10"                                                                           | 10                                                                                                                                   |
| 60  | zvuelta             | 5                                                                              | 5                                                                                                                                    |
| 61  | zdireccion          | "sse_g1/sse_g1_p1_mod3.jsp"                                                    | sse_g1/sse_g1_p1_mod3.jsp                                                                                                            |
| 62  | zestado             | "11"                                                                           | 11                                                                                                                                   |
| 64  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 66  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 67  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 68  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 69  | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 70  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 72  | zORDINAL            | zcomun + "ORDINAL"                                                             | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                |
| 73  | zORDINAL            | zcomun + "STD_OR_PHONE"                                                        | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_PHONE"}                                           |
| 75  | zSTDPHONE           | zcomun + "STD_PHONE"                                                           | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}                                              |
| 76  | zSTDNLINETYPE       | zcomun + "STD_N_LINE_TYPE"                                                     | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                        |
| 77  | zSTDNLOCATIONTYPE   | zcomun + "STD_N_LOCATION_TYPE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                    |
| 78  | zSTDINTCOUNTRYCODE  | zcomun + "STD_INT_COUNTRY_CODE"                                                | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                   |
| 79  | zSTDINTREGIONCODE   | zcomun + "STD_INT_REGION_CODE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                    |
| 80  | zSTDNATREGIONCODE   | zcomun + "STD_NAT_REGION_CODE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                    |
| 82  | zNACCION            | zcomun + "N_ACCION"                                                            | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                               |
| 84  | zoutputdef2         | zsubsesion + "!" + znodo2 +"[*]"                                               | SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 85  | zmove2              | znodo2 + ":" +znodo2 + "[FIRST]"                                               | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                             |
| 86  | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                             |
| 87  | zSTDNLOCATIONTYPE2  | zcomun2 + "STD_N_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                      |
| 88  | zSTDIDLOCATIONTYPE2 | zcomun2 + "STD_ID_LOCATION_TYPE"                                               | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                     |
| 90  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 91  | zmove3              | znodo3 + ":" +znodo3 + "[FIRST]"                                               | M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                                     |
| 92  | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 93  | zSTDNLINETYPE3      | zcomun3 + "STD_N_LINE_TYPE"                                                    | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                  |
| 94  | zSTDIDLINETYPE3     | zcomun3 + "STD_ID_LINE_TYPE"                                                   | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LINE_TYPE"}                                 |
| 96  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                     |
| 116 | zcount              | 0                                                                              | 0                                                                                                                                    |
| 117 | zcounti             | 0                                                                              | 0                                                                                                                                    |
| 118 | zcount2             | 0                                                                              | 0                                                                                                                                    |
| 119 | zcount3             | 0                                                                              | 0                                                                                                                                    |
| 127 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 128 | zcountv2            | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                              |
| 129 | zcountv3            | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                              |
| 191 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 192 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 193 | zposicions          | "0"                                                                            | 0                                                                                                                                    |
| 194 | zcontrol            | 0                                                                              | 0                                                                                                                                    |
| 195 | zposicion           | 0                                                                              | 0                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 98  | m4:startpage | m4task=SSE_PHONE_FAX                                                                                                                                     |
| 99  | m4:beginjob  |                                                                                                                                                          |
| 100 | m4:datadef   | m4o=SSE_PHONE_FAX; m4name=SSE_PHONE_FAX                                                                                                                  |
| 107 | m4:exec      | m4method=CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                |
| 107 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                               |
| 108 | m4:outputdef | m4alias=M4T_PHONE_FAX                                                                                                                                    |
| 108 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 109 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                             |
| 109 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 110 | m4:outputdef | m4alias=M4T_LU_LINE_TYPE                                                                                                                                 |
| 110 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 111 | m4:endjob    |                                                                                                                                                          |
| 112 | m4:move      |                                                                                                                                                          |
| 112 | m4:param     | name=SSE_PHONE_FAX; value=M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                  |
| 113 | m4:move      |                                                                                                                                                          |
| 113 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                       |
| 114 | m4:move      |                                                                                                                                                          |
| 114 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                               |
| 164 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                    |
| 165 | m4:item      | m4name=M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                |
| 208 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 214 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 218 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 219 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 220 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 235 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 239 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 240 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 241 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 262 | m4:endpage   |                                                                                                                                                          |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 103 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 122 | getCount         | znodo,zsubsesion,znodo                    |
| 123 | getCountInClient | znodo,zsubsesion,znodo                    |
| 124 | getCount         | znodo2,zsubsesion,znodo2                  |
| 125 | getCount         | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 16  | comprobar  |            |
| 31  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | oalfanum = new m4objvalidacion('_alfanum','1','11','El numero de telefono no puede ser nulo',false);                                     |
| 20  | if (oalfanum.resultado == false){                                                                                                        |
| 24  | if (error == 1){                                                                                                                         |
| 25  | alert(texto);                                                                                                                            |
| 27  | else {                                                                                                                                   |
| 41  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 42  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 190 | if (zcount &gt; 0) {                                                                                                                     |
| 212 | if (zcontrol==0){%&gt;                                                                                                                   |
| 222 | &lt;% //if(zORDINAL.isEmpty()){ %&gt;                                                                                                    |
| 233 | &lt;%}else{%&gt;                                                                                                                         |
| 243 | &lt;% //if(zORDINAL.isEmpty()){ %&gt;                                                                                                    |
| 21  | expresión de cálculo/transformación: texto = texto + "\n El Telefono es obligatorio.";                                                   |
| 65  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 67  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 68  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 69  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 70  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 73  | expresión de cálculo/transformación: String zORDINAL = zcomun + "STD_OR_PHONE";                                                          |
| 75  | expresión de cálculo/transformación: String zSTDPHONE = zcomun + "STD_PHONE";                                                            |
| 76  | expresión de cálculo/transformación: String zSTDNLINETYPE = zcomun + "STD_N_LINE_TYPE";                                                  |
| 77  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";                                          |
| 78  | expresión de cálculo/transformación: String zSTDINTCOUNTRYCODE = zcomun + "STD_INT_COUNTRY_CODE";                                        |
| 79  | expresión de cálculo/transformación: String zSTDINTREGIONCODE = zcomun + "STD_INT_REGION_CODE";                                          |
| 80  | expresión de cálculo/transformación: String zSTDNATREGIONCODE = zcomun + "STD_NAT_REGION_CODE";                                          |
| 82  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 84  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                              |
| 85  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                   |
| 86  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 87  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";                                        |
| 88  | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE2 = zcomun2 + "STD_ID_LOCATION_TYPE";                                      |
| 90  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 91  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                   |
| 92  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 93  | expresión de cálculo/transformación: String zSTDNLINETYPE3 = zcomun3 + "STD_N_LINE_TYPE";                                                |
| 94  | expresión de cálculo/transformación: String zSTDIDLINETYPE3 = zcomun3 + "STD_ID_LINE_TYPE";                                              |
| 96  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 192 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | ../../sse_g1/sse_g1_trans.jsp                      |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 47  | ../../sse_generico/espanol/generico_links.jsp      |
| 257 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 259 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 13  | /libreria/clase_val_entradas.js                                 |
| 135 | /iconos/noname_telefono_ess_107_100.gif                         |
| 139 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 144 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 152 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 153 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 184 | javascript:comprobar();                                         |
| 184 | /iconos/icono_enviar_ess_36_36.gif                              |
| 225 | javascript:pendientes(                                          |
| 226 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 246 | javascript:pendientes(                                          |
| 247 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 12  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 34  | sse_generico/generico_actualizar.jsp                            |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 47  | ../../sse_generico/espanol/generico_links.jsp                   |
| 61  | sse_g1/sse_g1_p1_mod3.jsp                                       |
| 257 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 8   | Teléfono                                                  |
| 133 | Teléfono                                                  |
| 136 | Da de alta o modifica tus teléfonos. Mis datos personales |
| 150 | Número de teléfono                                        |
| 158 | * Teléfono                                                |
| 161 | Tipo "&gt;                                                |
| 203 | Teléfono                                                  |
| 204 | Tipo de línea                                             |
| 205 | Lugar                                                     |
| 224 | ');"&gt;                                                  |
| 245 | ');"&gt;                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 135 | img     | alt=Teléfono; title=Teléfono; src=/iconos/noname_telefono_ess_107_100.gif; width=107; height=100                                                                                                          |
| 139 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                         |
| 144 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                                         |
| 145 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PHONE_FAX                                                                                                                                                        |
| 146 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                             |
| 147 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PHONE_FAX                                                                                                                                                        |
| 152 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                |
| 153 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 159 | input   | class=fuenteformulario; type=text; id=STD_PHONE; name=STD_PHONE; size=15; maxlength=15; title=Escribe tu número de teléfono; tabindex=4                                                                   |
| 162 | select  | id=STD_ID_LINE_TYPE; class=fuenteformulario150; name=STD_ID_LINE_TYPE; title=Selecciona el tipo de línea; tabindex=5                                                                                      |
| 165 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                  |
| 175 | input   | type=hidden; name=STD_ID_LOCATION_TYPE; value=1                                                                                                                                                           |
| 184 | a       | title=Enviar; href=javascript:comprobar();; tabindex=7                                                                                                                                                    |
| 184 | img     | alt=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                           |
| 225 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 226 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 246 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 247 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 39  | estado          | getParameter(request,"estado")   |
| 40  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 39  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                   |
| 40  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                 |
| 49  | zsubsesion          | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 50  | zmeta4object        | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 51  | znodo               | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 52  | znodo               | "M4T_PHONE_FAX"                                                                | M4T_PHONE_FAX                                                                                                                        |
| 53  | znodo2              | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                 |
| 54  | znodo3              | "M4T_LU_LINE_TYPE"                                                             | M4T_LU_LINE_TYPE                                                                                                                     |
| 55  | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                  |
| 56  | ztipocarga          | "ALL"                                                                          | ALL                                                                                                                                  |
| 57  | ztipocarga          | "M4T"                                                                          | M4T                                                                                                                                  |
| 59  | zventanas           | "10"                                                                           | 10                                                                                                                                   |
| 60  | zvuelta             | 5                                                                              | 5                                                                                                                                    |
| 61  | zdireccion          | "sse_g1/sse_g1_p1_mod3.jsp"                                                    | sse_g1/sse_g1_p1_mod3.jsp                                                                                                            |
| 62  | zestado             | "11"                                                                           | 11                                                                                                                                   |
| 64  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 66  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 67  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 68  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 69  | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 70  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 72  | zORDINAL            | zcomun + "ORDINAL"                                                             | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                |
| 73  | zORDINAL            | zcomun + "STD_OR_PHONE"                                                        | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_PHONE"}                                           |
| 75  | zSTDPHONE           | zcomun + "STD_PHONE"                                                           | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}                                              |
| 76  | zSTDNLINETYPE       | zcomun + "STD_N_LINE_TYPE"                                                     | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                        |
| 77  | zSTDNLOCATIONTYPE   | zcomun + "STD_N_LOCATION_TYPE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                    |
| 78  | zSTDINTCOUNTRYCODE  | zcomun + "STD_INT_COUNTRY_CODE"                                                | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                   |
| 79  | zSTDINTREGIONCODE   | zcomun + "STD_INT_REGION_CODE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                    |
| 80  | zSTDNATREGIONCODE   | zcomun + "STD_NAT_REGION_CODE"                                                 | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                    |
| 82  | zNACCION            | zcomun + "N_ACCION"                                                            | M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                               |
| 84  | zoutputdef2         | zsubsesion + "!" + znodo2 +"[*]"                                               | SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 85  | zmove2              | znodo2 + ":" +znodo2 + "[FIRST]"                                               | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                             |
| 86  | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                             |
| 87  | zSTDNLOCATIONTYPE2  | zcomun2 + "STD_N_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                      |
| 88  | zSTDIDLOCATIONTYPE2 | zcomun2 + "STD_ID_LOCATION_TYPE"                                               | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                     |
| 90  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 91  | zmove3              | znodo3 + ":" +znodo3 + "[FIRST]"                                               | M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                                     |
| 92  | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 93  | zSTDNLINETYPE3      | zcomun3 + "STD_N_LINE_TYPE"                                                    | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                  |
| 94  | zSTDIDLINETYPE3     | zcomun3 + "STD_ID_LINE_TYPE"                                                   | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LINE_TYPE"}                                 |
| 96  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                     |
| 116 | zcount              | 0                                                                              | 0                                                                                                                                    |
| 117 | zcounti             | 0                                                                              | 0                                                                                                                                    |
| 118 | zcount2             | 0                                                                              | 0                                                                                                                                    |
| 119 | zcount3             | 0                                                                              | 0                                                                                                                                    |
| 127 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 128 | zcountv2            | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                              |
| 129 | zcountv3            | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                              |
| 191 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 192 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 193 | zposicions          | "0"                                                                            | 0                                                                                                                                    |
| 194 | zcontrol            | 0                                                                              | 0                                                                                                                                    |
| 195 | zposicion           | 0                                                                              | 0                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 98  | m4:startpage | m4task=SSE_PHONE_FAX                                                                                                                                     |
| 99  | m4:beginjob  |                                                                                                                                                          |
| 100 | m4:datadef   | m4o=SSE_PHONE_FAX; m4name=SSE_PHONE_FAX                                                                                                                  |
| 107 | m4:exec      | m4method=CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                |
| 107 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                               |
| 108 | m4:outputdef | m4alias=M4T_PHONE_FAX                                                                                                                                    |
| 108 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 109 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                             |
| 109 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 110 | m4:outputdef | m4alias=M4T_LU_LINE_TYPE                                                                                                                                 |
| 110 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 111 | m4:endjob    |                                                                                                                                                          |
| 112 | m4:move      |                                                                                                                                                          |
| 112 | m4:param     | name=SSE_PHONE_FAX; value=M4T_PHONE_FAX{":"}M4T_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                  |
| 113 | m4:move      |                                                                                                                                                          |
| 113 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                       |
| 114 | m4:move      |                                                                                                                                                          |
| 114 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                               |
| 164 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                    |
| 165 | m4:item      | m4name=M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                |
| 208 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 214 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 218 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 219 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 220 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 235 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 239 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 240 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 241 | m4:item      | m4name=M4T_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}M4T_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 262 | m4:endpage   |                                                                                                                                                          |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 103 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 122 | getCount         | znodo,zsubsesion,znodo                    |
| 123 | getCountInClient | znodo,zsubsesion,znodo                    |
| 124 | getCount         | znodo2,zsubsesion,znodo2                  |
| 125 | getCount         | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 16  | comprobar  |            |
| 31  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | oalfanum = new m4objvalidacion('_alfanum','1','15','El numero de telefono no puede ser nulo',false);                                     |
| 20  | if (oalfanum.resultado == false){                                                                                                        |
| 24  | if (error == 1){                                                                                                                         |
| 25  | alert(texto);                                                                                                                            |
| 27  | else {                                                                                                                                   |
| 41  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 42  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 190 | if (zcount &gt; 0) {                                                                                                                     |
| 212 | if (zcontrol==0){%&gt;                                                                                                                   |
| 222 | &lt;% //if(zORDINAL.isEmpty()){ %&gt;                                                                                                    |
| 233 | &lt;%}else{%&gt;                                                                                                                         |
| 243 | &lt;% //if(zORDINAL.isEmpty()){ %&gt;                                                                                                    |
| 21  | expresión de cálculo/transformación: texto = texto + "\n El campo Telefono es obligatorio.";                                             |
| 65  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 67  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 68  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 69  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 70  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 73  | expresión de cálculo/transformación: String zORDINAL = zcomun + "STD_OR_PHONE";                                                          |
| 75  | expresión de cálculo/transformación: String zSTDPHONE = zcomun + "STD_PHONE";                                                            |
| 76  | expresión de cálculo/transformación: String zSTDNLINETYPE = zcomun + "STD_N_LINE_TYPE";                                                  |
| 77  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";                                          |
| 78  | expresión de cálculo/transformación: String zSTDINTCOUNTRYCODE = zcomun + "STD_INT_COUNTRY_CODE";                                        |
| 79  | expresión de cálculo/transformación: String zSTDINTREGIONCODE = zcomun + "STD_INT_REGION_CODE";                                          |
| 80  | expresión de cálculo/transformación: String zSTDNATREGIONCODE = zcomun + "STD_NAT_REGION_CODE";                                          |
| 82  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 84  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                              |
| 85  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                   |
| 86  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 87  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";                                        |
| 88  | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE2 = zcomun2 + "STD_ID_LOCATION_TYPE";                                      |
| 90  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 91  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                   |
| 92  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 93  | expresión de cálculo/transformación: String zSTDNLINETYPE3 = zcomun3 + "STD_N_LINE_TYPE";                                                |
| 94  | expresión de cálculo/transformación: String zSTDIDLINETYPE3 = zcomun3 + "STD_ID_LINE_TYPE";                                              |
| 96  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 192 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | ../../sse_g1/sse_g1_trans.jsp                      |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 47  | ../../sse_generico/espanol/generico_links.jsp      |
| 257 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 259 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 13  | /libreria/clase_val_entradas.js                                 |
| 135 | /iconos/noname_telefono_ess_107_100.gif                         |
| 139 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 144 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 152 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 153 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 184 | javascript:comprobar();                                         |
| 184 | /iconos/icono_enviar_ess_36_36.gif                              |
| 225 | javascript:pendientes(                                          |
| 226 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 246 | javascript:pendientes(                                          |
| 247 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 12  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 34  | sse_generico/generico_actualizar.jsp                            |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 47  | ../../sse_generico/espanol/generico_links.jsp                   |
| 61  | sse_g1/sse_g1_p1_mod3.jsp                                       |
| 257 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p1_mod3.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 8   | Teléfono                                                  |
| 127 | Teléfono                                                  |
| 130 | Da de alta o modifica tus teléfonos. Mis datos personales |
| 144 | Número de teléfono                                        |
| 152 | " tabindex="1" /&gt;                                      |
| 154 | " tabindex="2" /&gt;                                      |
| 156 | " tabindex="3" /&gt;                                      |
| 161 | * Teléfono                                                |
| 164 | Tipo "&gt;                                                |
| 178 | Lugar "&gt;                                               |
| 213 | Teléfono                                                  |
| 214 | Tipo de línea                                             |
| 215 | Lugar                                                     |
| 231 | ');"&gt;                                                  |
| 246 | ');"&gt;                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 129 | img     | alt=Teléfono; title=Teléfono; src=/iconos/noname_telefono_ess_107_100.gif; width=107; height=100                                                                                                          |
| 133 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                         |
| 138 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                                         |
| 139 | input   | type=hidden; id=TAG; name=TAG; value=SSE_PHONE_FAX                                                                                                                                                        |
| 140 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                             |
| 141 | input   | type=hidden; id=NOD; name=NOD; value=SSE_PHONE_FAX                                                                                                                                                        |
| 146 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                |
| 147 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 153 | input   | class=fuenteformulario; type=text; id=STD_INT_COUNTRY_CODE; name=STD_INT_COUNTRY_CODE; size=5; maxlength=11; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDINTCOUNTRYCODE%&gt;                       |
| 155 | input   | class=fuenteformulario; type=text; id=STD_INT_REGION_CODE; name=STD_INT_REGION_CODE; size=5; maxlength=11; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDINTREGIONCODE%&gt;                          |
| 157 | input   | class=fuenteformulario; type=text; id=STD_NAT_REGION_CODE; name=STD_NAT_REGION_CODE; size=5; maxlength=11; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDNATREGIONCODE%&gt;                          |
| 162 | input   | class=fuenteformulario; type=text; id=STD_PHONE; name=STD_PHONE; size=15; maxlength=11; title=Escribe tu número de teléfono; tabindex=4                                                                   |
| 165 | select  | id=STD_ID_LINE_TYPE; class=fuenteformulario150; name=STD_ID_LINE_TYPE; title=Selecciona el tipo de línea; tabindex=5                                                                                      |
| 168 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                  |
| 179 | select  | id=STD_ID_LOCATION_TYPE; class=fuenteformulario150; name=STD_ID_LOCATION_TYPE; title=Escoge la ubicación; tabindex=6                                                                                      |
| 182 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                  |
| 194 | a       | title=Enviar; href=javascript:comprobar();; tabindex=7                                                                                                                                                    |
| 194 | img     | alt=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                           |
| 232 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 233 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 247 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 248 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 39  | estado          | getParameter(request,"estado")   |
| 40  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 39  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                   |
| 40  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                 |
| 49  | zsubsesion          | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 50  | zmeta4object        | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 51  | znodo               | "SSE_PHONE_FAX"                                                                | SSE_PHONE_FAX                                                                                                                        |
| 52  | znodo2              | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                 |
| 53  | znodo3              | "M4T_LU_LINE_TYPE"                                                             | M4T_LU_LINE_TYPE                                                                                                                     |
| 54  | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                  |
| 56  | zventanas           | "10"                                                                           | 10                                                                                                                                   |
| 57  | zvuelta             | 5                                                                              | 5                                                                                                                                    |
| 58  | zdireccion          | "sse_g1/sse_g1_p1_mod3.jsp"                                                    | sse_g1/sse_g1_p1_mod3.jsp                                                                                                            |
| 59  | zestado             | "11"                                                                           | 11                                                                                                                                   |
| 61  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 63  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 64  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 65  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 66  | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 67  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 68  | zORDINAL            | zcomun + "ORDINAL"                                                             | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                |
| 69  | zSTDPHONE           | zcomun + "STD_PHONE"                                                           | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}                                              |
| 70  | zSTDNLINETYPE       | zcomun + "STD_N_LINE_TYPE"                                                     | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                        |
| 71  | zSTDNLOCATIONTYPE   | zcomun + "STD_N_LOCATION_TYPE"                                                 | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                    |
| 72  | zSTDINTCOUNTRYCODE  | zcomun + "STD_INT_COUNTRY_CODE"                                                | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                   |
| 73  | zSTDINTREGIONCODE   | zcomun + "STD_INT_REGION_CODE"                                                 | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                    |
| 74  | zSTDNATREGIONCODE   | zcomun + "STD_NAT_REGION_CODE"                                                 | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                    |
| 76  | zNACCION            | zcomun + "N_ACCION"                                                            | SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                               |
| 78  | zoutputdef2         | zsubsesion + "!" + znodo2 +"[*]"                                               | SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 79  | zmove2              | znodo2 + ":" +znodo2 + "[FIRST]"                                               | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                             |
| 80  | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                             |
| 81  | zSTDNLOCATIONTYPE2  | zcomun2 + "STD_N_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                      |
| 82  | zSTDIDLOCATIONTYPE2 | zcomun2 + "STD_ID_LOCATION_TYPE"                                               | M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                     |
| 84  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 85  | zmove3              | znodo3 + ":" +znodo3 + "[FIRST]"                                               | M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                                     |
| 86  | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 87  | zSTDNLINETYPE3      | zcomun3 + "STD_N_LINE_TYPE"                                                    | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}                                  |
| 88  | zSTDIDLINETYPE3     | zcomun3 + "STD_ID_LINE_TYPE"                                                   | M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LINE_TYPE"}                                 |
| 90  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA"}                                                                                        |
| 110 | zcount              | 0                                                                              | 0                                                                                                                                    |
| 111 | zcounti             | 0                                                                              | 0                                                                                                                                    |
| 112 | zcount2             | 0                                                                              | 0                                                                                                                                    |
| 113 | zcount3             | 0                                                                              | 0                                                                                                                                    |
| 121 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 122 | zcountv2            | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                              |
| 123 | zcountv3            | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                              |
| 201 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 202 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 203 | zposicions          | "0"                                                                            | 0                                                                                                                                    |
| 204 | zcontrol            | 0                                                                              | 0                                                                                                                                    |
| 205 | zposicion           | 0                                                                              | 0                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92  | m4:startpage | m4task=SSE_PHONE_FAX                                                                                                                                     |
| 93  | m4:beginjob  |                                                                                                                                                          |
| 94  | m4:datadef   | m4o=SSE_PHONE_FAX; m4name=SSE_PHONE_FAX                                                                                                                  |
| 101 | m4:exec      | m4method=CARGA:{}SSE_PHONE_FAX{"!SSE_PRINCIPAL.CARGA"}                                                                                                   |
| 101 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                               |
| 102 | m4:outputdef | m4alias=SSE_PHONE_FAX                                                                                                                                    |
| 102 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 103 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                             |
| 103 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE[*]                                                                                            |
| 104 | m4:outputdef | m4alias=M4T_LU_LINE_TYPE                                                                                                                                 |
| 104 | m4:param     | name=m4name0; value=SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[*]"}                                                                                            |
| 105 | m4:endjob    |                                                                                                                                                          |
| 106 | m4:move      |                                                                                                                                                          |
| 106 | m4:param     | name=SSE_PHONE_FAX; value=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                  |
| 107 | m4:move      |                                                                                                                                                          |
| 107 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                       |
| 108 | m4:move      |                                                                                                                                                          |
| 108 | m4:param     | name=SSE_PHONE_FAX; value=M4T_LU_LINE_TYPE{":"}M4T_LU_LINE_TYPE{"[FIRST]"}                                                                               |
| 152 | m4:label     | item=STD_INT_COUNTRY_CODE; htmlsafe=true; outputdef=SSE_PHONE_FAX                                                                                        |
| 154 | m4:label     | item=STD_INT_REGION_CODE; htmlsafe=true; outputdef=SSE_PHONE_FAX                                                                                         |
| 156 | m4:label     | item=STD_NAT_REGION_CODE; htmlsafe=true; outputdef=SSE_PHONE_FAX                                                                                         |
| 167 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                    |
| 168 | m4:item      | m4name=M4T_LU_LINE_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LINE_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                |
| 181 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                    |
| 182 | m4:item      | m4name=M4T_LU_LOCATION_TYPE{":"}SSE_PHONE_FAX{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                    |
| 210 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}                                                |
| 211 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}                                                 |
| 212 | m4:label     | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}                                                 |
| 218 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 224 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 225 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true                                 |
| 226 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true                                  |
| 227 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true                                  |
| 228 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 229 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 230 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 239 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                             |
| 240 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_COUNTRY_CODE"}; htmlsafe=true                                 |
| 241 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_INT_REGION_CODE"}; htmlsafe=true                                  |
| 242 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_NAT_REGION_CODE"}; htmlsafe=true                                  |
| 243 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_PHONE"}; htmlsafe=true                                            |
| 244 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LINE_TYPE"}; htmlsafe=true                                      |
| 245 | m4:item      | m4name=SSE_PHONE_FAX{":"}SSE_PHONE_FAX{"!"}SSE_PHONE_FAX{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                  |
| 260 | m4:endpage   |                                                                                                                                                          |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 97  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 116 | getCount         | znodo,zsubsesion,znodo                    |
| 117 | getCountInClient | znodo,zsubsesion,znodo                    |
| 118 | getCount         | znodo2,zsubsesion,znodo2                  |
| 119 | getCount         | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 16  | comprobar  |            |
| 31  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | oalfanum = new m4objvalidacion('_alfanum','1','11','El numero de telefono no puede ser nulo',false);                                     |
| 20  | if (oalfanum.resultado == false){                                                                                                        |
| 24  | if (error == 1){                                                                                                                         |
| 25  | alert(texto);                                                                                                                            |
| 27  | else {                                                                                                                                   |
| 41  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 42  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 200 | if (zcount &gt; 0) {                                                                                                                     |
| 222 | if (zcontrol==0){%&gt;                                                                                                                   |
| 237 | &lt;%}else{%&gt;                                                                                                                         |
| 21  | expresión de cálculo/transformación: texto = texto + "\n El Telefono es obligatorio.";                                                   |
| 62  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 64  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 65  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 66  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 67  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 68  | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 69  | expresión de cálculo/transformación: String zSTDPHONE = zcomun + "STD_PHONE";                                                            |
| 70  | expresión de cálculo/transformación: String zSTDNLINETYPE = zcomun + "STD_N_LINE_TYPE";                                                  |
| 71  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";                                          |
| 72  | expresión de cálculo/transformación: String zSTDINTCOUNTRYCODE = zcomun + "STD_INT_COUNTRY_CODE";                                        |
| 73  | expresión de cálculo/transformación: String zSTDINTREGIONCODE = zcomun + "STD_INT_REGION_CODE";                                          |
| 74  | expresión de cálculo/transformación: String zSTDNATREGIONCODE = zcomun + "STD_NAT_REGION_CODE";                                          |
| 76  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 78  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                              |
| 79  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                   |
| 80  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 81  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";                                        |
| 82  | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE2 = zcomun2 + "STD_ID_LOCATION_TYPE";                                      |
| 84  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 85  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                   |
| 86  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 87  | expresión de cálculo/transformación: String zSTDNLINETYPE3 = zcomun3 + "STD_N_LINE_TYPE";                                                |
| 88  | expresión de cálculo/transformación: String zSTDIDLINETYPE3 = zcomun3 + "STD_ID_LINE_TYPE";                                              |
| 90  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 202 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 12  | ../../sse_g1/sse_g1_trans.jsp                      |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 47  | ../../sse_generico/espanol/generico_links.jsp      |
| 255 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 257 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 13  | /libreria/clase_val_entradas.js                                 |
| 129 | /iconos/noname_telefono_ess_107_100.gif                         |
| 133 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 138 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 146 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 147 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 194 | javascript:comprobar();                                         |
| 194 | /iconos/icono_enviar_ess_36_36.gif                              |
| 232 | javascript:pendientes(                                          |
| 233 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 247 | javascript:pendientes(                                          |
| 248 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 12  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 34  | sse_generico/generico_actualizar.jsp                            |
| 46  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 47  | ../../sse_generico/espanol/generico_links.jsp                   |
| 58  | sse_g1/sse_g1_p1_mod3.jsp                                       |
| 255 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 257 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 139 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 144 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 152 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 184 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 246 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 34  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 61  | sse_g1/sse_g1_p1_mod3.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 139 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 144 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 152 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 184 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 246 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 34  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 61  | sse_g1/sse_g1_p1_mod3.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 139 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 144 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 152 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 184 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 246 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 34  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 61  | sse_g1/sse_g1_p1_mod3.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 257 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 259 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 255 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 257 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 133 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 138 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 146 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 194 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 232 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 247 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 12  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 34  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 46  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 47  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 58  | sse_g1/sse_g1_p1_mod3.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 255 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 257 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_mod3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
