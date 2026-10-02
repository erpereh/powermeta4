# mss_g3_p16_comp

Identificador: `mss_g3/mss_g3_p16_comp.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                             | Ámbito | Diccionario                                                                                  |
| ------------------ | --------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Send        | Enviar                            | COLL   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send        | Enviar                            | CYC    | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send        | Enviar                            | IBER   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send        | Enviar                            | BASE   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send        | Enviar                            | BASE   | [translations/shco_g0_es.properties:L34](../../referencias/literales/shco_g0_es.md)          |
| Button.Send        | Enviar                            | BASE   | [translations/ssco_etask_es.properties:L35](../../referencias/literales/ssco_etask_es.md)    |
| Labelmss.ProfsData | Datos Profesionales del Empleado  | COLL   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado  | CYC    | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado  | IBER   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado  | BASE   | [translations/ess_mss_gen_es.properties:L192](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.Criterio    | Criterios de evaluación           | BASE   | [translations/mss_ev_es.properties:L13](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.DefCono     | Definir conocimientos             | BASE   | [translations/mss_ev_es.properties:L16](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.LinkDatos   | Datos personales de mis empleados | BASE   | [translations/mss_ev_es.properties:L85](../../referencias/literales/mss_ev_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p16_comp.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p16_comp.jsp) | `9850bdef51db75123300b7688e1cc302d60c825c4f07cb1598ec1d6525ff39c2` |    444 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p16_comp.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p16_comp.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                              |
| --- | ----------------------------------------------------- |
| 288 | [valor dinámico]: [valor dinámico] - [valor dinámico] |
| 325 | *                                                     |
| 326 | "&gt;                                                 |
| 360 | "&gt; "&gt;                                           |
| 375 | *                                                     |
| 376 | " tabindex="6" /&gt;                                  |
| 379 | *                                                     |
| 380 | "&gt; "&gt;                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                         |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 289 | a       | class=titulofuncional; title=&lt;%=profData%&gt;; href=javascript:load('&lt;%=sIdHr_Encr%&gt;')                                                                                   |
| 292 | img     | alt=&lt;%=Volver%&gt;; title=&lt;%=Volver%&gt;; src=/iconos/noname_procesos_evaluacion_ess_114_100.gif; width=114; height=100                                                     |
| 295 | a       | class=enlacefuncional; title=&lt;%=Volver%&gt;; href=&lt;%=JSP_REDIRECCION%&gt;                                                                                                   |
| 301 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                   |
| 302 | input   | type=hidden; id=TAG; name=TAG; value=SSM_DEFINE_CRITERIA                                                                                                                          |
| 303 | input   | type=hidden; id=REC; name=REC; value=&lt;%=zOrdinal%&gt;                                                                                                                          |
| 304 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                     |
| 305 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EVAL_CAPAB                                                                                                                               |
| 306 | input   | type=hidden; id=SCO_ID_HR; name=SCO_ID_HR; value=&lt;%=sIdHr_Encr%&gt;                                                                                                            |
| 307 | input   | type=hidden; id=SCO_OR_HR_ROLE; name=SCO_OR_HR_ROLE; value=&lt;%=sOrRole_Encr%&gt;                                                                                                |
| 308 | input   | type=hidden; id=SCO_DT_START_EVAL; name=SCO_DT_START_EVAL; value=&lt;%=sDtStarEval_Encr%&gt;                                                                                      |
| 309 | input   | type=hidden; id=JSP_REDIRECCION; name=JSP_REDIRECCION; value=&lt;%=JSP_REDIRECCION%&gt;                                                                                           |
| 315 | a       | title=&lt;%=Volver%&gt;; href=&lt;%=JSP_REDIRECCION%&gt;                                                                                                                          |
| 317 | img     | alt=&lt;%=Volver%&gt;; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 319 | img     | alt=&lt;%=Volver%&gt;; src=/iconos/icono_flecha2_ocre_mss_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 327 | select  | id=SCO_ID_CAPABILITY; class=fuenteformulario; name=SCO_ID_CAPABILITY; tabindex=1; title=; onchange=javascript:deshabilitarNombre();                                               |
| 328 | option  | value=                                                                                                                                                                            |
| 351 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                          |
| 361 | select  | tabindex=2; id=SCO_ID_CRITERIA_TYPE; class=fuenteformulario; name=SCO_ID_CRITERIA_TYPE; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=zconodo13%&gt;                  |
| 362 | option  | value=                                                                                                                                                                            |
| 364 | option  | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=zconodo13%&gt;                                                                                                            |
| 376 | input   | class=fuenteformulario; type=text; id=SCO_WEIGHT; name=SCO_WEIGHT; value=&lt;%=dPeso%&gt;; size=15; maxlength=10; title=&lt;m4:label m4name=; htmlsafe=true                       |
| 380 | select  | id=SCO_ID_CAP_REQ_LVL; class=fuenteformulario150; name=SCO_ID_CAP_REQ_LVL; tabindex=9; title=&lt;m4:label m4name=; htmlsafe=true                                                  |
| 381 | option  | value=                                                                                                                                                                            |
| 399 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                          |
| 411 | a       | title=&lt;%=Enviar%&gt;; href=javascript:comprobar()                                                                                                                              |
| 412 | img     | alt=&lt;%=Enviar%&gt;; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)  |
| 419 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_comp.jsp?estado=31; method=post; name=oculto; id=oculto                                                                       |
| 420 | input   | type=hidden; id=zSCO_ID_CAPABILITY; name=zSCO_ID_CAPABILITY                                                                                                                       |
| 421 | input   | type=hidden; id=zSCOWEIGHT; name=zSCOWEIGHT                                                                                                                                       |
| 422 | input   | type=hidden; id=zORDINAL; name=zORDINAL; value=&lt;%=zOrdinal%&gt;                                                                                                                |
| 423 | input   | type=hidden; id=mss; name=mss; value=&lt;%=mss%&gt;                                                                                                                               |
| 424 | input   | type=hidden; id=ACC; name=ACC; value=RELOAD                                                                                                                                       |
| 425 | input   | type=hidden; id=JSP_REDIRECCION; name=JSP_REDIRECCION; value=&lt;%=JSP_REDIRECCION%&gt;                                                                                           |
| 427 | input   | type=hidden; id=zSCOIDHR; name=IDRH; value=&lt;%=IDRH%&gt;                                                                                                                        |
| 429 | input   | type=hidden; id=zSCOORHRPERIOD; name=RHRole; value=&lt;%=RHRole%&gt;                                                                                                              |
| 431 | input   | type=hidden; id=zSCODTSTARTEVAL; name=DTStartEval; value=&lt;%=DTStartEval%&gt;                                                                                                   |
| 432 | input   | type=hidden; id=NombreProceso; name=NombreProceso; value=&lt;%=NombreProceso%&gt;                                                                                                 |
| 433 | input   | type=hidden; id=NombreEmpleado; name=NombreEmpleado; value=&lt;%=NombreEmpleado%&gt;                                                                                              |
| 434 | input   | type=hidden; id=zSCOIDCRITERIATYPE; name=zSCOIDCRITERIATYPE; value=                                                                                                               |

### Contexto, entradas y valores construidos

| L   | Entrada / clave    | Acceso literal                             |
| --- | ------------------ | ------------------------------------------ |
| 11  | estado             | getParameter(request,"estado")             |
| 12  | zinicios           | getParameter(request,"zinicios")           |
| 13  | contador           | getParameter(request,"contador")           |
| 14  | mss                | getParameter(request,"mss")                |
| 15  | zORDINAL           | getParameter(request,"zORDINAL")           |
| 16  | ACC                | getParameter(request,"ACC")                |
| 17  | zSCO_ID_CAPABILITY | getParameter(request,"zSCO_ID_CAPABILITY") |
| 18  | zSCOWEIGHT         | getParameter(request,"zSCOWEIGHT")         |
| 20  | JSP_REDIRECCION    | getParameter(request,"JSP_REDIRECCION")    |
| 21  | IDRH               | getParameter(request,"IDRH")               |
| 25  | RHRole             | getParameter(request,"RHRole")             |
| 29  | DTStartEval        | getParameter(request,"DTStartEval")        |
| 33  | NombreEmpleado     | getParameter(request,"NombreEmpleado")     |
| 34  | NombreProceso      | getParameter(request,"NombreProceso")      |
| 38  | zSCOIDCRITERIATYPE | getParameter(request,"zSCOIDCRITERIATYPE") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                                 |
| --- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                          |
| 12  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                        |
| 13  | zcon                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador")                                                                        |
| 14  | mss                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                                             |
| 15  | zOrdinal            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL")                                                                        |
| 16  | zACC                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC")                                                                             |
| 17  | zIDCAPABILITY       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCO_ID_CAPABILITY") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCO_ID_CAPABILITY")                                                              |
| 18  | zWEIGHT             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOWEIGHT")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOWEIGHT")                                                                      |
| 19  | zID_CAP_REQ_LVL     | ""                                                                             |                                                                                                                                             |
| 20  | JSP_REDIRECCION     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JSP_REDIRECCION")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JSP_REDIRECCION")                                                                 |
| 21  | sIdHr_Encr          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                                                                            |
| 22  | IDRH                | ""                                                                             |                                                                                                                                             |
| 25  | sOrRole_Encr        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                                                                          |
| 26  | RHRole              | ""                                                                             |                                                                                                                                             |
| 29  | sDtStarEval_Encr    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")                                                                     |
| 30  | DTStartEval         | ""                                                                             |                                                                                                                                             |
| 33  | NombreEmpleado      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado")                                                                  |
| 34  | NombreProceso       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")                                                                   |
| 38  | zSCOIDCRITERIATYPE  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDCRITERIATYPE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zSCOIDCRITERIATYPE")                                                              |
| 47  | ztitle              | ""                                                                             |                                                                                                                                             |
| 48  | Datos               | ""                                                                             |                                                                                                                                             |
| 49  | Enviar              | ""                                                                             |                                                                                                                                             |
| 50  | Volver              | ""                                                                             |                                                                                                                                             |
| 52  | profData            | ""                                                                             |                                                                                                                                             |
| 54  | zmss                | "'"+mss+"'"                                                                    | 'com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")'                                                                           |
| 98  | zsubsesion          | "SSM_DEFINE_CRITERIA"                                                          | SSM_DEFINE_CRITERIA                                                                                                                         |
| 99  | zmeta4object        | "SSM_DEFINE_CRITERIA"                                                          | SSM_DEFINE_CRITERIA                                                                                                                         |
| 100 | znodo               | "M4T_H_EVALUATE"                                                               | M4T_H_EVALUATE                                                                                                                              |
| 101 | znodo3              | "M4T_EVAL_CAPAB"                                                               | M4T_EVAL_CAPAB                                                                                                                              |
| 102 | znodo10             | "M4T_KNOW_MAP"                                                                 | M4T_KNOW_MAP                                                                                                                                |
| 103 | znodo12             | "M4T_KNOW_LEVEL"                                                               | M4T_KNOW_LEVEL                                                                                                                              |
| 104 | zconodo13           | "SSCO_EV_CRI_TYPE"                                                             | SSCO_EV_CRI_TYPE                                                                                                                            |
| 105 | zcooutputdef13      | zsubsesion + "!" + zconodo13 + "[*]"                                           | SSM_DEFINE_CRITERIA{"!"}SSCO_EV_CRI_TYPE{"[*]"}                                                                                             |
| 107 | zdireccion          | "sse_g3/mss_g3_p16_comp.jsp"                                                   | sse_g3/mss_g3_p16_comp.jsp                                                                                                                  |
| 108 | zventanas           | "6"                                                                            | 6                                                                                                                                           |
| 109 | zvuelta             | 3                                                                              | 3                                                                                                                                           |
| 110 | zestado             | "31"                                                                           | 31                                                                                                                                          |
| 112 | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                        |
| 114 | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                       |
| 115 | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                          |
| 117 | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_DEFINE_CRITERIA{"!"}M4T_H_EVALUATE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 118 | zmove               | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | M4T_H_EVALUATE{":"}M4T_H_EVALUATE{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                             |
| 119 | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_H_EVALUATE{":"}SSM_DEFINE_CRITERIA{"!"}M4T_H_EVALUATE{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 121 | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[*]"}                                                                                               |
| 122 | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_EVAL_CAPAB{":"}M4T_EVAL_CAPAB{"[FIRST]"}                                                                                                |
| 123 | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 125 | zoutputdef10        | zsubsesion + "!" + znodo10 + "[*]"                                             | SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[*]"}                                                                                                 |
| 126 | zmove10             | znodo10 + ":" + znodo10 + "[FIRST]"                                            | M4T_KNOW_MAP{":"}M4T_KNOW_MAP{"[FIRST]"}                                                                                                    |
| 127 | zcomun10            | znodo10 + ":" + zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + "."          | M4T_KNOW_MAP{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 129 | zoutputdef12        | zsubsesion + "!" + znodo12 + "[*]"                                             | SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[*]"}                                                                                               |
| 130 | zmove12             | znodo12 + ":" + znodo12 + "[FIRST]"                                            | M4T_KNOW_LEVEL{":"}M4T_KNOW_LEVEL{"[FIRST]"}                                                                                                |
| 131 | zcomun12            | znodo12 + ":" + zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + "."          | M4T_KNOW_LEVEL{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 133 | zSCO_NM_EXTD_KN     | zcomun3 + "SCO_NM_EXTD_KN"                                                     | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                                        |
| 134 | zSCO_ID_CAPABILITY  | zcomun3 + "SCO_ID_CAPABILITY"                                                  | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CAPABILITY"}                                     |
| 135 | zSCO_WEIGHT         | zcomun3 + "SCO_WEIGHT"                                                         | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}                                            |
| 136 | zSCO_ID_CAP_REQ_LVL | zcomun3 + "SCO_ID_CAP_REQ_LVL"                                                 | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CAP_REQ_LVL"}                                    |
| 137 | zSSE_NIVEL_CONO     | zcomun3 + "SSE_NIVEL_CONO"                                                     | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SSE_NIVEL_CONO"}                                        |
| 138 | zSCO_DT_START_REQ   | zcomun3 + "SCO_DT_START_REQ"                                                   | M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_REQ"}                                      |
| 140 | zSCOIDEXTDKN        | zcomun10 + "SCO_ID_EXTD_KN"                                                    | M4T_KNOW_MAP{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_EXTD_KN"}                                            |
| 141 | zSCONMEXTDKN        | zcomun10 + "SCO_NM_EXTD_KN"                                                    | M4T_KNOW_MAP{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                                            |
| 142 | zChkNoVisKn         | "0"                                                                            | 0                                                                                                                                           |
| 144 | zSCOIDLEVEL         | zcomun12 + "SCO_ID_LEVEL"                                                      | M4T_KNOW_LEVEL{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LEVEL"}                                          |
| 145 | zSCONMLEVEL         | zcomun12 + "SCO_NM_LEVEL"                                                      | M4T_KNOW_LEVEL{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}                                          |
| 148 | zmetodocarga        | ""                                                                             |                                                                                                                                             |
| 149 | disabled            | ""                                                                             |                                                                                                                                             |
| 172 | zcount              | 0                                                                              | 0                                                                                                                                           |
| 173 | zcounti             | 0                                                                              | 0                                                                                                                                           |
| 174 | zcount3             | 0                                                                              | 0                                                                                                                                           |
| 175 | zcounti3            | 0                                                                              | 0                                                                                                                                           |
| 176 | zcount10            | 0                                                                              | 0                                                                                                                                           |
| 177 | zcounti10           | 0                                                                              | 0                                                                                                                                           |
| 178 | zcount12            | 0                                                                              | 0                                                                                                                                           |
| 179 | zcounti12           | 0                                                                              | 0                                                                                                                                           |
| 192 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                     |
| 193 | zcountv3            | String.valueOf(zcounti3-1)                                                     | String.valueOf(zcounti3-1)                                                                                                                  |
| 194 | zcountv10           | String.valueOf(zcounti10-1)                                                    | String.valueOf(zcounti10-1)                                                                                                                 |
| 195 | zcountv12           | String.valueOf(zcounti12-1)                                                    | String.valueOf(zcounti12-1)                                                                                                                 |
| 199 | dPeso               | 0                                                                              | 0                                                                                                                                           |
| 330 | zselected1          | ""                                                                             |                                                                                                                                             |
| 331 | i1                  | 0                                                                              | 0                                                                                                                                           |
| 337 | id1                 | String.valueOf(i1)                                                             | String.valueOf(i1)                                                                                                                          |
| 389 | id1                 | String.valueOf(i1)                                                             | String.valueOf(i1)                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                              |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 160 | m4:startpage | m4task=SSM_DEFINE_CRITERIA                                                                                                                                      |
| 161 | m4:beginjob  |                                                                                                                                                                 |
| 161 | m4:datadef   | m4o=SSM_DEFINE_CRITERIA; m4name=SSM_DEFINE_CRITERIA                                                                                                             |
| 162 | m4:exec      | m4method=                                                                                                                                                       |
| 162 | m4:param     | name=ARG_POS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL")                                                                        |
| 163 | m4:outputdef | m4alias=M4T_H_EVALUATE                                                                                                                                          |
| 163 | m4:param     | name=m4name0; value=SSM_DEFINE_CRITERIA{"!"}M4T_H_EVALUATE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 164 | m4:outputdef | m4alias=M4T_EVAL_CAPAB                                                                                                                                          |
| 164 | m4:param     | name=m4name0; value=SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[*]"}                                                                                               |
| 165 | m4:outputdef | m4alias=M4T_KNOW_MAP                                                                                                                                            |
| 165 | m4:param     | name=m4name0; value=SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[*]"}                                                                                                 |
| 166 | m4:outputdef | m4alias=M4T_KNOW_LEVEL                                                                                                                                          |
| 166 | m4:param     | name=m4name0; value=SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[*]"}                                                                                               |
| 167 | m4:outputdef | m4alias=SSCO_EV_CRI_TYPE                                                                                                                                        |
| 167 | m4:param     | name=m4name0; value=SSM_DEFINE_CRITERIA{"!"}SSCO_EV_CRI_TYPE{"[*]"}                                                                                             |
| 168 | m4:endjob    |                                                                                                                                                                 |
| 169 | m4:move      |                                                                                                                                                                 |
| 169 | m4:param     | name=SSM_DEFINE_CRITERIA; value=M4T_KNOW_MAP{":"}M4T_KNOW_MAP{"[FIRST]"}                                                                                        |
| 170 | m4:move      |                                                                                                                                                                 |
| 170 | m4:param     | name=SSM_DEFINE_CRITERIA; value=M4T_KNOW_LEVEL{":"}M4T_KNOW_LEVEL{"[FIRST]"}                                                                                    |
| 243 | m4:label     | m4name=M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; jsafe=true                                         |
| 249 | m4:label     | m4name=M4T_KNOW_LEVEL{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; jsafe=true                                           |
| 255 | m4:label     | m4name=M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}; jsafe=true                                             |
| 325 | m4:label     | m4name=M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                      |
| 334 | m4:loop      | from=0; to=String.valueOf(zcounti10-1)                                                                                                                          |
| 348 | m4:item      | outputdef=M4T_KNOW_MAP; item=SCO_CHK_NO_VIS_MSS; var=0; htmlsafe=true                                                                                           |
| 351 | m4:item      | m4name=M4T_KNOW_MAP{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_MAP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                          |
| 359 | m4:label     | item=SCO_NM_CRITERIA_TYPE; htmlsafe=true; outputdef=SSCO_EV_CRI_TYPE                                                                                            |
| 363 | m4:dataloop  | outputdef=SSCO_EV_CRI_TYPE                                                                                                                                      |
| 364 | m4:item      | item=SCO_NM_CRITERIA_TYPE; htmlsafe=true; outputdef=SSCO_EV_CRI_TYPE                                                                                            |
| 375 | m4:label     | m4name=M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}; htmlsafe=true                                          |
| 379 | m4:label     | m4name=M4T_EVAL_CAPAB{":"}SSM_DEFINE_CRITERIA{"!"}M4T_EVAL_CAPAB{"[&amp;VAR.m4lix]"}{"."}{"SSE_NIVEL_CONO"}; htmlsafe=true                                      |
| 386 | m4:loop      | from=0; to=String.valueOf(zcounti12-1)                                                                                                                          |
| 399 | m4:item      | m4name=M4T_KNOW_LEVEL{":"}SSM_DEFINE_CRITERIA{"!"}M4T_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                                        |
| 443 | m4:endpage   |                                                                                                                                                                 |

| L   | Operación        | Argumentos literales                                                               |
| --- | ---------------- | ---------------------------------------------------------------------------------- |
| 182 | getCount         | znodo,zsubsesion,znodo                                                             |
| 183 | getCountInClient | znodo,zsubsesion,znodo                                                             |
| 184 | getCount         | znodo3,zsubsesion,znodo3                                                           |
| 185 | getCountInClient | znodo3,zsubsesion,znodo3                                                           |
| 186 | getCount         | znodo10,zsubsesion,znodo10                                                         |
| 187 | getCountInClient | znodo10,zsubsesion,znodo10                                                         |
| 188 | getCount         | znodo12,zsubsesion,znodo12                                                         |
| 189 | getCountInClient | znodo12,zsubsesion,znodo12                                                         |
| 204 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_CAPABILITY"                                    |
| 205 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_WEIGHT"                                           |
| 206 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_CAP_REQ_LVL"                                   |
| 207 | getItem          | znodo3,zsubsesion,znodo3,"","SCO_ID_CRITERIA_TYPE"                                 |
| 340 | getItem          | znodo10,zmeta4object,znodo10,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY) |
| 392 | getItem          | znodo12,zmeta4object,znodo12,"","SCO_ID_LEVEL").toString().equals(zID_CAP_REQ_LVL) |
| 396 | getItem          | znodo12,zmeta4object,znodo12,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY) |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos               |
| --- | ------------------ | ------------------------ |
| 218 | load               | empleado                 |
| 223 | searchoption       | sform,sidinput,sidoption |
| 233 | comprobar          |                          |
| 275 | deshabilitarNombre |                          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23  | if (sIdHr_Encr == null &#124;&#124; sIdHr_Encr.equals("")) {IDRH="";}                                                                                                                                                        |
| 24  | else {IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", sIdHr_Encr);}                                                                                                          |
| 27  | if (sOrRole_Encr == null &#124;&#124; sOrRole_Encr.equals("")) {RHRole="";}                                                                                                                                                  |
| 28  | else {RHRole = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", sOrRole_Encr);}                                                                                                      |
| 31  | if (sDtStarEval_Encr == null &#124;&#124; sDtStarEval_Encr.equals("")) {DTStartEval="";}                                                                                                                                     |
| 32  | else {DTStartEval = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", sDtStarEval_Encr);}                                                                                             |
| 40  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                              |
| 41  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                      |
| 42  | if ((mss==null)&#124;&#124;(mss.equals(""))){ mss = "0";}                                                                                                                                                                    |
| 43  | if ((zIDCAPABILITY==null)&#124;&#124;(zIDCAPABILITY.equals(""))){zIDCAPABILITY="";}                                                                                                                                          |
| 44  | if ((zWEIGHT==null)&#124;&#124;(zWEIGHT.equals(""))){zWEIGHT="";}                                                                                                                                                            |
| 45  | if ((zOrdinal==null)&#124;&#124;(zOrdinal.equals(""))){zOrdinal="";}                                                                                                                                                         |
| 55  | if (mss.equals("0")==true){                                                                                                                                                                                                  |
| 69  | &lt;%}else{%&gt;                                                                                                                                                                                                             |
| 89  | &lt;%if (mss.equals("0")==true){%&gt;                                                                                                                                                                                        |
| 92  | &lt;%}else{%&gt;                                                                                                                                                                                                             |
| 151 | if (zACC.equals("NEW")==true){                                                                                                                                                                                               |
| 154 | } else if (zACC.equals("MOD")) {                                                                                                                                                                                             |
| 200 | if (zACC.equals("MOD")) {                                                                                                                                                                                                    |
| 226 | if (oselect.options[ni].value == sidoption){                                                                                                                                                                                 |
| 241 | if (IdComp == "") {                                                                                                                                                                                                          |
| 247 | if (level == "") {                                                                                                                                                                                                           |
| 253 | if (weight == "") {                                                                                                                                                                                                          |
| 257 | } else {                                                                                                                                                                                                                     |
| 258 | if ((weight &lt; 0) &#124;&#124; (weight &gt; 100)) {                                                                                                                                                                        |
| 264 | if (error == 1){                                                                                                                                                                                                             |
| 267 | }else {                                                                                                                                                                                                                      |
| 316 | &lt;%if (mss.equals("0")==true){%&gt;                                                                                                                                                                                        |
| 318 | &lt;%}else{%&gt;                                                                                                                                                                                                             |
| 340 | if (m.getItem(znodo10,zmeta4object,znodo10,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY)) {                                                                                                                          |
| 342 | } else { zselected1 = "" ;}                                                                                                                                                                                                  |
| 350 | &lt;%if (zChkNoVisKn.equals("0")==true){%&gt;                                                                                                                                                                                |
| 392 | if (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_LEVEL").toString().equals(zID_CAP_REQ_LVL)) {                                                                                                                          |
| 394 | } else { zselected1 = "" ;}                                                                                                                                                                                                  |
| 396 | if (m.getItem(znodo12,zmeta4object,znodo12,"","SCO_ID_EXTD_KN").toString().equals(zIDCAPABILITY)) {                                                                                                                          |
| 436 | &lt;%if (mss=="0"){%&gt;                                                                                                                                                                                                     |
| 438 | &lt;%}else{%&gt;                                                                                                                                                                                                             |
| 105 | expresión de cálculo/transformación: String zcooutputdef13= zsubsesion + "!" + zconodo13 + "[*]";                                                                                                                            |
| 113 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                |
| 115 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                   |
| 117 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                     |
| 118 | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                                                                                                       |
| 119 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                                      |
| 121 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                 |
| 122 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                      |
| 123 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                   |
| 125 | expresión de cálculo/transformación: String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";                                                                                                                               |
| 126 | expresión de cálculo/transformación: String zmove10 = znodo10 + ":" + znodo10 + "[FIRST]";                                                                                                                                   |
| 127 | expresión de cálculo/transformación: String zcomun10 = znodo10 + ":" + zsubsesion + "!" + znodo10 + "[&amp;VAR.m4lix]" + ".";                                                                                                |
| 129 | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";                                                                                                                               |
| 130 | expresión de cálculo/transformación: String zmove12 = znodo12 + ":" + znodo12 + "[FIRST]";                                                                                                                                   |
| 131 | expresión de cálculo/transformación: String zcomun12 = znodo12 + ":" + zsubsesion + "!" + znodo12 + "[&amp;VAR.m4lix]" + ".";                                                                                                |
| 133 | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN = zcomun3 + "SCO_NM_EXTD_KN";                                                                                                                                    |
| 134 | expresión de cálculo/transformación: String zSCO_ID_CAPABILITY = zcomun3 + "SCO_ID_CAPABILITY";                                                                                                                              |
| 135 | expresión de cálculo/transformación: String zSCO_WEIGHT = zcomun3 + "SCO_WEIGHT";                                                                                                                                            |
| 136 | expresión de cálculo/transformación: String zSCO_ID_CAP_REQ_LVL = zcomun3 + "SCO_ID_CAP_REQ_LVL";                                                                                                                            |
| 137 | expresión de cálculo/transformación: String zSSE_NIVEL_CONO = zcomun3 + "SSE_NIVEL_CONO";                                                                                                                                    |
| 138 | expresión de cálculo/transformación: String zSCO_DT_START_REQ = zcomun3 + "SCO_DT_START_REQ";                                                                                                                                |
| 140 | expresión de cálculo/transformación: String zSCOIDEXTDKN = zcomun10 + "SCO_ID_EXTD_KN";                                                                                                                                      |
| 141 | expresión de cálculo/transformación: String zSCONMEXTDKN = zcomun10 + "SCO_NM_EXTD_KN";                                                                                                                                      |
| 144 | expresión de cálculo/transformación: String zSCOIDLEVEL = zcomun12 + "SCO_ID_LEVEL";                                                                                                                                         |
| 145 | expresión de cálculo/transformación: String zSCONMLEVEL = zcomun12 + "SCO_NM_LEVEL";                                                                                                                                         |
| 152 | expresión de cálculo/transformación: zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo3 + "." + "SSM_NEW";                                                                                                                  |
| 155 | expresión de cálculo/transformación: zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo3 + "." + "SSM_MOVE";                                                                                                                 |
| 220 | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado;                                                                        |
| 289 | expresión de cálculo/transformación: &lt;a class="titulofuncional" title="&lt;%=profData%&gt;" href="javascript:load('&lt;%=sIdHr_Encr%&gt;')"&gt;&lt;%=NombreEmpleado%&gt;&lt;/a&gt; - &lt;%=NombreProceso%&gt; &lt;/td&gt; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 59  | ../../sse_generico/espanol/menu_ess.jsp               |
| 60  | /sse_g3/sse_ev_trans.jsp                              |
| 73  | ../../mss_generico/espanol/menu_mss.jsp               |
| 75  | /mss_g3/mss_ev_trans.jsp                              |
| 90  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 91  | ../../sse_generico/espanol/generico_links.jsp         |
| 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 94  | ../../sse_generico/espanol/generico_links.jsp         |
| 437 | ../../sse_generico/espanol/generico_disclaimer.jsp    |
| 439 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                          |
| --- | ------------------------------------------------------------------------------------------ |
| 7   | /css/estilo_sse.css                                                                        |
| 57  | /css/estilo_sse.css                                                                        |
| 58  | /libreria/funciones_sse.js                                                                 |
| 61  | /libreria/clase_val_entradas.js                                                            |
| 70  | /css/estilo_mss.css                                                                        |
| 71  | /libreria/funciones_sse_val.js                                                             |
| 72  | /libreria/funciones_sse.js                                                                 |
| 74  | /libreria/clase_val_entradas.js                                                            |
| 84  | /library/m4gen_excep.js                                                                    |
| 289 | javascript:load(                                                                           |
| 292 | /iconos/noname_procesos_evaluacion_ess_114_100.gif                                         |
| 295 | &lt;%=JSP_REDIRECCION%&gt;                                                                 |
| 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                            |
| 315 | &lt;%=JSP_REDIRECCION%&gt;                                                                 |
| 317 | /iconos/icono_flecha_azul2_ess_11_9.gif                                                    |
| 319 | /iconos/icono_flecha2_ocre_mss_11_9.gif                                                    |
| 411 | javascript:comprobar()                                                                     |
| 412 | /iconos/icono_enviar_ess_36_36.gif                                                         |
| 419 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_comp.jsp?estado=31                            |
| 59  | ../../sse_generico/espanol/menu_ess.jsp                                                    |
| 60  | /sse_g3/sse_ev_trans.jsp                                                                   |
| 73  | ../../mss_generico/espanol/menu_mss.jsp                                                    |
| 75  | /mss_g3/mss_ev_trans.jsp                                                                   |
| 90  | ../../sse_generico/espanol/generico_menusup.jsp                                            |
| 91  | ../../sse_generico/espanol/generico_links.jsp                                              |
| 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         |
| 94  | ../../sse_generico/espanol/generico_links.jsp                                              |
| 107 | sse_g3/mss_g3_p16_comp.jsp                                                                 |
| 220 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= |
| 437 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         |
| 439 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                 | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 59  | ../../sse_generico/espanol/menu_ess.jsp                                                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 60  | /sse_g3/sse_ev_trans.jsp                                                                   | contextual | [sse_g3/sse_ev_trans.jsp](../../empleado/talento/sse_g3--sse_ev_trans.md)                                 |
| BASE   | 73  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 75  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                        |
| BASE   | 90  | ../../sse_generico/espanol/generico_menusup.jsp                                            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 94  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 437 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 439 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)              |
| BASE   | 58  | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 61  | /libreria/clase_val_entradas.js                                                            | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 71  | /libreria/funciones_sse_val.js                                                             | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)            |
| BASE   | 72  | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 74  | /libreria/clase_val_entradas.js                                                            | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 84  | /library/m4gen_excep.js                                                                    | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md)                          |
| BASE   | 289 | javascript:load(                                                                           | dinámica   | P06                                                                                                       |
| BASE   | 295 | &lt;%=JSP_REDIRECCION%&gt;                                                                 | dinámica   | P06                                                                                                       |
| BASE   | 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                       |
| BASE   | 315 | &lt;%=JSP_REDIRECCION%&gt;                                                                 | dinámica   | P06                                                                                                       |
| BASE   | 411 | javascript:comprobar()                                                                     | dinámica   | P06                                                                                                       |
| BASE   | 419 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_comp.jsp?estado=31                            | ausente    | P06                                                                                                       |
| BASE   | 59  | ../../sse_generico/espanol/menu_ess.jsp                                                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 60  | /sse_g3/sse_ev_trans.jsp                                                                   | contextual | [sse_g3/sse_ev_trans.jsp](../../empleado/talento/sse_g3--sse_ev_trans.md)                                 |
| BASE   | 73  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 75  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                        |
| BASE   | 90  | ../../sse_generico/espanol/generico_menusup.jsp                                            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 93  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 94  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 107 | sse_g3/mss_g3_p16_comp.jsp                                                                 | ausente    | P06                                                                                                       |
| BASE   | 220 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                       |
| BASE   | 437 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 439 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                      | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p16_comp.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
