# sse_g1_p4_mod

Identificador: `sse_g1/sse_g1_p4_mod.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                          | Solo en BASE                                           |
| ------ | --------- | ------------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                                     | Ámbito | Diccionario                                                                                  |
| ----------------------- | ------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Delete2          | Eliminar la petición                                                      | COLL   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                                      | CYC    | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                                      | IBER   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                                      | BASE   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Modify           | Modificar                                                                 | COLL   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Modify           | Modificar                                                                 | CYC    | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Modify           | Modificar                                                                 | IBER   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Modify           | Modificar                                                                 | BASE   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                                    | COLL   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                                    | CYC    | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                                    | IBER   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                                    | BASE   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                                    | BASE   | [translations/shco_g0_es.properties:L34](../../referencias/literales/shco_g0_es.md)          |
| Button.Send             | Enviar                                                                    | BASE   | [translations/ssco_etask_es.properties:L35](../../referencias/literales/ssco_etask_es.md)    |
| Label.LblWrite          | Escribe                                                                   | COLL   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                                                   | CYC    | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                                                   | IBER   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                                                   | BASE   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |
| Label.sse_g1_p4NoData   | Actualmente no tienes ningún contacto de emergencia (ICE)                 | COLL   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)             |
| Label.sse_g1_p4NoData   | Actualmente no tienes ningún contacto de emergencia (ICE)                 | IBER   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)             |
| Label.sse_g1_p4NoData   | Actualmente no tienes ningún contacto de emergencia (ICE)                 | BASE   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)             |
| Label.sse_g1_p4_modData | Contactos ICE                                                             | COLL   | [translations/sse_g1_es.properties:L12](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4_modData | Contactos ICE                                                             | IBER   | [translations/sse_g1_es.properties:L12](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4_modData | Contactos ICE                                                             | BASE   | [translations/sse_g1_es.properties:L12](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4_modDes  | En esta pantalla puedes añadir o modificar contactos de emergencia (ICE). | COLL   | [translations/sse_g1_es.properties:L11](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4_modDes  | En esta pantalla puedes añadir o modificar contactos de emergencia (ICE). | IBER   | [translations/sse_g1_es.properties:L11](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4_modDes  | En esta pantalla puedes añadir o modificar contactos de emergencia (ICE). | BASE   | [translations/sse_g1_es.properties:L11](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4         | Mis contactos de emergencia (ICE)                                         | COLL   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4         | Mis contactos de emergencia (ICE)                                         | IBER   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4         | Mis contactos de emergencia (ICE)                                         | BASE   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4_mod     | Mis contactos de emergencia (ICE)                                         | COLL   | [translations/sse_g1_es.properties:L9](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4_mod     | Mis contactos de emergencia (ICE)                                         | IBER   | [translations/sse_g1_es.properties:L9](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4_mod     | Mis contactos de emergencia (ICE)                                         | BASE   | [translations/sse_g1_es.properties:L9](../../referencias/literales/sse_g1_es.md)             |
| Title.sse_g1_p4_modDes  | Contactos de emergencia (ICE)                                             | COLL   | [translations/sse_g1_es.properties:L10](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4_modDes  | Contactos de emergencia (ICE)                                             | IBER   | [translations/sse_g1_es.properties:L10](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4_modDes  | Contactos de emergencia (ICE)                                             | BASE   | [translations/sse_g1_es.properties:L10](../../referencias/literales/sse_g1_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p4_mod.jsp) | `e5f483818a3a771a7c6837a9fbe932d7df28a8500f426266892ece667c879118` |    362 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p4_mod.jsp)   | `e5f483818a3a771a7c6837a9fbe932d7df28a8500f426266892ece667c879118` |    362 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p4_mod.jsp) | `e5f483818a3a771a7c6837a9fbe932d7df28a8500f426266892ece667c879118` |    362 |
| BASE / español    | [sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p4_mod.jsp)                             | `3606bc2d7ad0decdda10fa94a52bbe88193e9a799e3875b0f37a1883d601bb66` |    220 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p4_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                        |
| --- | ----------------------------------------------- |
| 131 | [valor dinámico] [valor dinámico]               |
| 160 | * "tabindex="1" value="[valor dinámico]"/&gt;   |
| 166 | "tabindex="2"value="[valor dinámico]" /&gt;     |
| 169 | "tabindex="2"value="[valor dinámico]" /&gt;     |
| 172 | "tabindex="2"value="[valor dinámico]" /&gt;     |
| 177 | * "tabindex="2"value="[valor dinámico]" /&gt;   |
| 180 | * " tabindex="3" value="[valor dinámico]" /&gt; |
| 226 | ');"&gt;                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 130 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/noname_telefono_ess_107_100.gif; width=107; height=100                                                                           |
| 134 | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11                                                                                             |
| 149 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                                                        |
| 150 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HR_CONTACT                                                                                                                                                                      |
| 151 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                            |
| 152 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HR_CONTACT                                                                                                                                                                      |
| 153 | input   | type=hidden; id=STD_OR_CONTACT; name=STD_OR_CONTACT; value=&lt;%=zSTD_OR_CONTACT%&gt;                                                                                                                                    |
| 157 | a       | title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11                                                                                                                    |
| 157 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                          |
| 161 | input   | class=fuenteformulario; type=text; id=STD_N_CONTACT; name=STD_N_CONTACT; size=15; maxlength=62; title=JSP_EXPR_Tran.getProperty(; item=STD_N_CONTACT; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                          |
| 167 | input   | class=fuenteformulario; type=text; id=STD_INT_COUNTRY_CODE_1; name=STD_INT_COUNTRY_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt; |
| 170 | input   | class=fuenteformulario; type=text; id=STD_INT_REGION_CODE_1; name=STD_INT_REGION_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;    |
| 173 | input   | class=fuenteformulario; type=text; id=STD_NAT_REGION_CODE_1; name=STD_NAT_REGION_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;    |
| 178 | input   | class=fuenteformulario; type=text; id=STD_PHONE_NUMBER_1; name=STD_PHONE_NUMBER_1; size=15; maxlength=62; title=JSP_EXPR_Tran.getProperty(; item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;           |
| 181 | input   | class=fuenteformulario; type=number; id=SCO_ICE; name=SCO_ICE; size=2; maxlength=2; title=JSP_EXPR_Tran.getProperty(; item=SCO_ICE; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                            |
| 188 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:comprobar();; tabindex=4                                                                                                                                               |
| 188 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                |
| 226 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:pendientes('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true                                                                                   |
| 226 | img     | class=tablamenuright; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)          |
| 263 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp; method=post; name=ocult; id=ocult                                                                                                                            |
| 264 | input   | type=hidden; name=estado; id=estado; value=11                                                                                                                                                                            |
| 265 | input   | type=hidden; name=zPos; id=zPos; value=                                                                                                                                                                                  |
| 282 | a       | title=JSP_EXPR_Tran.getProperty(; alt=JSP_EXPR_Tran.getProperty(; href=javascript:mod('&lt;%=current%&gt;');                                                                                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |
| 17  | zPos            | getParameter(request,"zPos")     |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                            |
| --- | ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                     |
| 14  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                   |
| 17  | zPos                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos")                                                                       |
| 66  | zsubsesion          | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 67  | zmeta4object        | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 68  | znodo               | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 69  | znodo1              | "M4T_HR_CONTACT"                                                               | M4T_HR_CONTACT                                                                                                                         |
| 70  | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                    |
| 72  | zventanas           | "10"                                                                           | 10                                                                                                                                     |
| 73  | zvuelta             | 5                                                                              | 5                                                                                                                                      |
| 74  | zdireccion          | "sse_g1/sse_g1_p4_mod.jsp"                                                     | sse_g1/sse_g1_p4_mod.jsp                                                                                                               |
| 75  | zestado             | "11"                                                                           | 11                                                                                                                                     |
| 77  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                   |
| 79  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                  |
| 80  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                     |
| 81  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HR_CONTACT{"!"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 82  | zoutputdef1         | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 83  | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_HR_CONTACT{":"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 84  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                      |
| 100 | zcount              | 0                                                                              | 0                                                                                                                                      |
| 101 | zcounti             | 0                                                                              | 0                                                                                                                                      |
| 108 | zSTD_OR_CONTACT     | ""                                                                             |                                                                                                                                        |
| 109 | zSTD_N_CONTACT      | ""                                                                             |                                                                                                                                        |
| 110 | zSTD_PHONE_NUMBER1  | ""                                                                             |                                                                                                                                        |
| 111 | zSTDINTCOUNTRYCODE1 | ""                                                                             |                                                                                                                                        |
| 112 | zSTDINTREGIONCODE1  | ""                                                                             |                                                                                                                                        |
| 113 | zSTDNATREGIONCODE1  | ""                                                                             |                                                                                                                                        |
| 114 | zSCO_ICE            | ""                                                                             |                                                                                                                                        |
| 116 | zmove1              | znodo1 + ":" +znodo1 + "[" + zPos + "]"                                        | M4T_HR_CONTACT{":"}M4T_HR_CONTACT{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos"){"]"}                            |
| 193 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                       |
| 194 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                        |
| 195 | zposicions          | "0"                                                                            | 0                                                                                                                                      |
| 196 | zcontrol            | 0                                                                              | 0                                                                                                                                      |
| 197 | zposicion           | 0                                                                              | 0                                                                                                                                      |
| 198 | zPaint              | ""                                                                             |                                                                                                                                        |
| 237 | zsubsesion10        | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 238 | zmeta4object10      | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 239 | znodo10             | "M4T_HR_CONTACT"                                                               | M4T_HR_CONTACT                                                                                                                         |
| 240 | ztipocarga10        | "M4T"                                                                          | M4T                                                                                                                                    |
| 241 | zoutputdef10        | zsubsesion10 + "!" + znodo10 + "[*]"                                           | SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 242 | zmetodocarga10      | "CARGA:" + zsubsesion10 + "!SSE_PRINCIPAL.CARGA_CV"                            | CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                      |
| 255 | zcount10            | 0                                                                              | 0                                                                                                                                      |
| 255 | zcounti10           | 0                                                                              | 0                                                                                                                                      |
| 255 | aux                 | 0                                                                              | 0                                                                                                                                      |
| 261 | zcountv10           | String.valueOf(zcounti10)                                                      | String.valueOf(zcounti10)                                                                                                              |
| 267 | zposicions10        | "0"                                                                            | 0                                                                                                                                      |
| 267 | zcontrol10          | 0                                                                              | 0                                                                                                                                      |
| 267 | zPaint10            | ""                                                                             |                                                                                                                                        |
| 267 | zposicion10         | 0                                                                              | 0                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 86  | m4:startpage | m4task=SSE_HR_CONTACT                                                                                                                                      |
| 87  | m4:beginjob  |                                                                                                                                                            |
| 88  | m4:datadef   | m4o=SSE_HR_CONTACT; m4name=SSE_HR_CONTACT                                                                                                                  |
| 94  | m4:exec      | m4method=CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                 |
| 94  | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                 |
| 95  | m4:outputdef | m4alias=SSE_HR_CONTACT                                                                                                                                     |
| 95  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 96  | m4:outputdef | m4alias=M4T_HR_CONTACT                                                                                                                                     |
| 96  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 97  | m4:endjob    |                                                                                                                                                            |
| 98  | m4:move      |                                                                                                                                                            |
| 98  | m4:param     | name=SSE_HR_CONTACT; value=SSE_HR_CONTACT{":"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 118 | m4:move      |                                                                                                                                                            |
| 118 | m4:param     | name=SSE_HR_CONTACT; value=M4T_HR_CONTACT{":"}M4T_HR_CONTACT{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos"){"]"}                     |
| 119 | m4:item      | var=; item=STD_OR_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                         |
| 120 | m4:item      | var=; item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                          |
| 121 | m4:item      | var=; item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                 |
| 122 | m4:item      | var=; item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                  |
| 123 | m4:item      | var=; item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                  |
| 124 | m4:item      | var=; item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                     |
| 125 | m4:item      | var=; item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                |
| 160 | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 166 | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 169 | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 172 | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 177 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 180 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 203 | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 204 | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 205 | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 206 | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 207 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 208 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 211 | m4:dataloop  | outputdef=SSE_HR_CONTACT                                                                                                                                   |
| 212 | m4:current   | m4varname=current; outputdef=SSE_HR_CONTACT                                                                                                                |
| 219 | m4:item      | item=N_ACCION; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                     |
| 220 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 221 | m4:item      | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 222 | m4:item      | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 223 | m4:item      | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 224 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 225 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 235 | m4:endpage   |                                                                                                                                                            |
| 244 | m4:startpage | m4task=SSE_HR_CONTACT                                                                                                                                      |
| 244 | m4:beginjob  |                                                                                                                                                            |
| 245 | m4:datadef   | m4o=SSE_HR_CONTACT; m4name=SSE_HR_CONTACT                                                                                                                  |
| 251 | m4:exec      | m4method=CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                 |
| 251 | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                 |
| 252 | m4:outputdef | m4alias=M4T_HR_CONTACT                                                                                                                                     |
| 252 | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 253 | m4:endjob    |                                                                                                                                                            |
| 270 | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                |
| 271 | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                       |
| 272 | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                        |
| 273 | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                        |
| 274 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                           |
| 275 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                      |
| 277 | m4:dataloop  | outputdef=M4T_HR_CONTACT                                                                                                                                   |
| 278 | m4:current   | m4varname=current; outputdef=M4T_HR_CONTACT                                                                                                                |
| 282 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                |
| 283 | m4:item      | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                       |
| 284 | m4:item      | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                        |
| 285 | m4:item      | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                        |
| 286 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                           |
| 287 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                      |
| 358 | m4:endpage   |                                                                                                                                                            |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 91  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0"   |
| 104 | getCount         | znodo,zsubsesion,znodo                      |
| 105 | getCountInClient | znodo,zsubsesion,znodo                      |
| 248 | setItem          | zsubsesion10,"SSE_PRINCIPAL","","NIVEL","0" |
| 258 | getCount         | znodo10,zsubsesion10,znodo10                |
| 259 | getCountInClient | znodo10,zsubsesion10,znodo10                |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 21  | comprobar  |            |
| 50  | mod        | ord        |
| 55  | pendientes | ord        |
| 318 | cambiaono  |            |
| 330 | cambato    |            |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 22  | var ncontac = new m4objvalidacion('_alfanum','1','62','','',false);                                                                      |
| 23  | var oalfanum = new m4objvalidacion('_alfanum','1','11','',false);                                                                        |
| 24  | var num = new m4objvalidacion('_num','1','99','',false);                                                                                 |
| 30  | if (ncontac.resultado == false){                                                                                                         |
| 34  | if (oalfanum.resultado == false){                                                                                                        |
| 38  | if (num.resultado == false){                                                                                                             |
| 42  | if (error == 1){                                                                                                                         |
| 43  | alert(texto);                                                                                                                            |
| 45  | }else {                                                                                                                                  |
| 115 | if ((zPos==null)&#124;&#124;(zPos.equals(""))){zPos = "NA";}else{                                                                        |
| 192 | if (zcounti &gt; 0){                                                                                                                     |
| 217 | &lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                                                  |
| 267 | &lt;% if (zcounti10 &gt; 0){String zposicions10 = "0";int zcontrol10 = 0; String zPaint10="";int zposicion10 =0; %&gt;                   |
| 280 | &lt;%if (zcontrol10==0){zPaint10="";}else{zPaint10="2";}aux += 1;%&gt;                                                                   |
| 292 | &lt;%} else {%&gt;                                                                                                                       |
| 321 | if(indi&gt;3){                                                                                                                           |
| 322 | if($(this).find('td').get(5).innerHTML==0){                                                                                              |
| 332 | if(indi&gt;3){                                                                                                                           |
| 339 | if( cambiaono() ) { cambato(); }                                                                                                         |
| 349 | if(this.value=='0'){                                                                                                                     |
| 31  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_1")+"\n";                                                   |
| 35  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_2")+"\n";                                                   |
| 39  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_3")+"\n";                                                   |
| 78  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 80  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 81  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 82  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 83  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 84  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 116 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" +znodo1 + "[" + zPos + "]";                                            |
| 194 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |
| 241 | expresión de cálculo/transformación: String zoutputdef10 = zsubsesion10 + "!" + znodo10 + "[*]";                                         |
| 242 | expresión de cálculo/transformación: String zmetodocarga10 = "CARGA:" + zsubsesion10 + "!SSE_PRINCIPAL.CARGA_CV";                        |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 7   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | ../../sse_g1/sse_g1_trans.jsp                      |
| 63  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 64  | ../../sse_generico/espanol/generico_links.jsp      |
| 230 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 232 | ../../sse_generico/espanol/generico_disclaimer.jsp |
| 295 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 5   | /css/estilo_sse.css                                             |
| 6   | /libreria/funciones_sse.js                                      |
| 8   | /libreria/clase_val_entradas.js                                 |
| 10  | ../../../../library/jquery-2.1.3.min.js                         |
| 130 | /iconos/noname_telefono_ess_107_100.gif                         |
| 134 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       |
| 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 157 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       |
| 157 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 188 | javascript:comprobar();                                         |
| 188 | /iconos/icono_enviar_ess_36_36.gif                              |
| 226 | javascript:pendientes(                                          |
| 226 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 263 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             |
| 282 | javascript:mod(                                                 |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 7   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 9   | ../../sse_g1/sse_g1_trans.jsp                                   |
| 58  | sse_generico/generico_actualizar.jsp                            |
| 63  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 64  | ../../sse_generico/espanol/generico_links.jsp                   |
| 74  | sse_g1/sse_g1_p4_mod.jsp                                        |
| 230 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              |
| 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p4_mod.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p4_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                      |
| --- | --------------------------------------------- |
| 126 | [valor dinámico] [valor dinámico]             |
| 145 | * "tabindex="1" value="[valor dinámico]"/&gt; |
| 151 | "tabindex="2"value="[valor dinámico]" /&gt;   |
| 154 | "tabindex="2"value="[valor dinámico]" /&gt;   |
| 157 | "tabindex="2"value="[valor dinámico]" /&gt;   |
| 162 | * "tabindex="2"value="[valor dinámico]" /&gt; |
| 165 | * "tabindex="3"value="[valor dinámico]" /&gt; |
| 207 | ');"&gt;                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 125 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/noname_telefono_ess_107_100.gif; width=107; height=100                                                                           |
| 129 | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11                                                                                             |
| 134 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:comprobar();                                                        |
| 135 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HR_CONTACT                                                                                                                                                                      |
| 136 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                            |
| 137 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HR_CONTACT                                                                                                                                                                      |
| 138 | input   | type=hidden; id=STD_OR_CONTACT; name=STD_OR_CONTACT; value=&lt;%=zSTD_OR_CONTACT%&gt;                                                                                                                                    |
| 142 | a       | title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11                                                                                                                    |
| 142 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                          |
| 146 | input   | class=fuenteformulario; type=text; id=STD_N_CONTACT; name=STD_N_CONTACT; size=15; maxlength=62; title=JSP_EXPR_Tran.getProperty(; item=STD_N_CONTACT; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                          |
| 152 | input   | class=fuenteformulario; type=text; id=STD_INT_COUNTRY_CODE_1; name=STD_INT_COUNTRY_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt; |
| 155 | input   | class=fuenteformulario; type=text; id=STD_INT_REGION_CODE_1; name=STD_INT_REGION_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;    |
| 158 | input   | class=fuenteformulario; type=text; id=STD_NAT_REGION_CODE_1; name=STD_NAT_REGION_CODE_1; size=2; maxlength=5; title=JSP_EXPR_Tran.getProperty(; item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;    |
| 163 | input   | class=fuenteformulario; type=text; id=STD_PHONE_NUMBER_1; name=STD_PHONE_NUMBER_1; size=15; maxlength=62; title=JSP_EXPR_Tran.getProperty(; item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=&lt;%=znodo%&gt;           |
| 166 | input   | class=fuenteformulario; type=text; id=SCO_ICE; name=SCO_ICE; size=2; maxlength=2; title=JSP_EXPR_Tran.getProperty(; item=SCO_ICE; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                              |
| 169 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:comprobar();; tabindex=4                                                                                                                                               |
| 169 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                |
| 207 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:pendientes('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true                                                                                   |
| 207 | img     | class=tablamenuright; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 14  | estado          | getParameter(request,"estado")   |
| 15  | zinicios        | getParameter(request,"zinicios") |
| 18  | zPos            | getParameter(request,"zPos")     |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                            |
| --- | ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                     |
| 15  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                   |
| 18  | zPos                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos")                                                                       |
| 61  | zsubsesion          | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 62  | zmeta4object        | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 63  | znodo               | "SSE_HR_CONTACT"                                                               | SSE_HR_CONTACT                                                                                                                         |
| 64  | znodo1              | "M4T_HR_CONTACT"                                                               | M4T_HR_CONTACT                                                                                                                         |
| 65  | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                    |
| 67  | zventanas           | "10"                                                                           | 10                                                                                                                                     |
| 68  | zvuelta             | 5                                                                              | 5                                                                                                                                      |
| 69  | zdireccion          | "sse_g1/sse_g1_p4_mod.jsp"                                                     | sse_g1/sse_g1_p4_mod.jsp                                                                                                               |
| 70  | zestado             | "11"                                                                           | 11                                                                                                                                     |
| 72  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                   |
| 74  | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                  |
| 75  | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                     |
| 76  | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HR_CONTACT{"!"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 77  | zoutputdef1         | zsubsesion + "!" + znodo1 + "[*]"                                              | SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 78  | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_HR_CONTACT{":"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 79  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"}                                                                                         |
| 95  | zcount              | 0                                                                              | 0                                                                                                                                      |
| 96  | zcounti             | 0                                                                              | 0                                                                                                                                      |
| 103 | zSTD_OR_CONTACT     | ""                                                                             |                                                                                                                                        |
| 104 | zSTD_N_CONTACT      | ""                                                                             |                                                                                                                                        |
| 105 | zSTD_PHONE_NUMBER1  | ""                                                                             |                                                                                                                                        |
| 106 | zSTDINTCOUNTRYCODE1 | ""                                                                             |                                                                                                                                        |
| 107 | zSTDINTREGIONCODE1  | ""                                                                             |                                                                                                                                        |
| 108 | zSTDNATREGIONCODE1  | ""                                                                             |                                                                                                                                        |
| 109 | zSCO_ICE            | ""                                                                             |                                                                                                                                        |
| 111 | zmove1              | znodo1 + ":" +znodo1 + "[" + zPos + "]"                                        | M4T_HR_CONTACT{":"}M4T_HR_CONTACT{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos"){"]"}                            |
| 174 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                       |
| 175 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                        |
| 176 | zposicions          | "0"                                                                            | 0                                                                                                                                      |
| 177 | zcontrol            | 0                                                                              | 0                                                                                                                                      |
| 178 | zposicion           | 0                                                                              | 0                                                                                                                                      |
| 179 | zPaint              | ""                                                                             |                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81  | m4:startpage | m4task=SSE_HR_CONTACT                                                                                                                                      |
| 82  | m4:beginjob  |                                                                                                                                                            |
| 83  | m4:datadef   | m4o=SSE_HR_CONTACT; m4name=SSE_HR_CONTACT                                                                                                                  |
| 89  | m4:exec      | m4method=CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"}                                                                                                    |
| 89  | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                 |
| 90  | m4:outputdef | m4alias=SSE_HR_CONTACT                                                                                                                                     |
| 90  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 91  | m4:outputdef | m4alias=M4T_HR_CONTACT                                                                                                                                     |
| 91  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                                                                                               |
| 92  | m4:endjob    |                                                                                                                                                            |
| 93  | m4:move      |                                                                                                                                                            |
| 93  | m4:param     | name=SSE_HR_CONTACT; value=SSE_HR_CONTACT{":"}SSE_HR_CONTACT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 113 | m4:move      |                                                                                                                                                            |
| 113 | m4:param     | name=SSE_HR_CONTACT; value=M4T_HR_CONTACT{":"}M4T_HR_CONTACT{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos"){"]"}                     |
| 114 | m4:item      | var=; item=STD_OR_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                         |
| 115 | m4:item      | var=; item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                          |
| 116 | m4:item      | var=; item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                 |
| 117 | m4:item      | var=; item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                  |
| 118 | m4:item      | var=; item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                  |
| 119 | m4:item      | var=; item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                     |
| 120 | m4:item      | var=; item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                                                                                                |
| 145 | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 151 | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 154 | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 157 | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 162 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 165 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 184 | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 185 | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 186 | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 187 | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 188 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 189 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 192 | m4:dataloop  | outputdef=SSE_HR_CONTACT                                                                                                                                   |
| 193 | m4:current   | m4varname=current; outputdef=SSE_HR_CONTACT                                                                                                                |
| 200 | m4:item      | item=N_ACCION; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                     |
| 201 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                |
| 202 | m4:item      | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                       |
| 203 | m4:item      | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 204 | m4:item      | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                        |
| 205 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                           |
| 206 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=SSE_HR_CONTACT                                                                                                      |
| 216 | m4:endpage   |                                                                                                                                                            |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 86  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 99  | getCount         | znodo,zsubsesion,znodo                    |
| 100 | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 22  | comprobar  |            |
| 50  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 23  | var ncontac = new m4objvalidacion('_alfanum','1','62','','',false);                                                                      |
| 24  | var oalfanum = new m4objvalidacion('_alfanum','1','11','',false);                                                                        |
| 25  | var num = new m4objvalidacion('_num','1','99','',false);                                                                                 |
| 31  | if (ncontac.resultado == false){                                                                                                         |
| 35  | if (oalfanum.resultado == false){                                                                                                        |
| 39  | if (num.resultado == false){                                                                                                             |
| 43  | if (error == 1){                                                                                                                         |
| 44  | alert(texto);                                                                                                                            |
| 46  | }else {                                                                                                                                  |
| 110 | if ((zPos==null)&#124;&#124;(zPos.equals(""))){zPos = "NA";}else{                                                                        |
| 173 | if (zcounti &gt; 0){                                                                                                                     |
| 198 | &lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                                                  |
| 32  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_1")+"\n";                                                   |
| 36  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_2")+"\n";                                                   |
| 40  | expresión de cálculo/transformación: texto = texto + m4getmessage("_sl_co_g1_3")+"\n";                                                   |
| 73  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 75  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 76  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 77  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                             |
| 78  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 79  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 111 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" +znodo1 + "[" + zPos + "]";                                            |
| 175 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_g1/sse_g1_trans.jsp                      |
| 58  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 59  | ../../sse_generico/espanol/generico_links.jsp      |
| 211 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 213 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 8   | /libreria/funciones_sse.js                                      |
| 10  | /libreria/clase_val_entradas.js                                 |
| 125 | /iconos/noname_telefono_ess_107_100.gif                         |
| 129 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       |
| 134 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 142 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       |
| 142 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 169 | javascript:comprobar();                                         |
| 169 | /iconos/icono_enviar_ess_36_36.gif                              |
| 207 | javascript:pendientes(                                          |
| 207 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 11  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 53  | sse_generico/generico_actualizar.jsp                            |
| 58  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 59  | ../../sse_generico/espanol/generico_links.jsp                   |
| 69  | sse_g1/sse_g1_p4_mod.jsp                                        |
| 211 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 213 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 6   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 8   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 10  | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| COLL   | 134 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 157 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 188 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 226 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 263 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| COLL   | 282 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 58  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 74  | sse_g1/sse_g1_p4_mod.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| COLL   | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 6   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 8   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 10  | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| CYC    | 134 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 157 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 188 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 226 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 263 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| CYC    | 282 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 58  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 74  | sse_g1/sse_g1_p4_mod.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| CYC    | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 6   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 8   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 10  | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| IBER   | 134 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 149 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 157 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 188 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 226 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 263 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| IBER   | 282 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 58  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 63  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 64  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 74  | sse_g1/sse_g1_p4_mod.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| IBER   | 230 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 232 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 295 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 11  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 58  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 211 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 213 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 8   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 10  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 129 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 134 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 142 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 169 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 207 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 11  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 53  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 58  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 69  | sse_g1/sse_g1_p4_mod.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| BASE   | 211 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 213 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p4_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
