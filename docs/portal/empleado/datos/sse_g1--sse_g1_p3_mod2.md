# sse_g1_p3_mod2

Identificador: `sse_g1/sse_g1_p3_mod2.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                             | Solo en BASE                                                                                                                                                                                                                                                                                         |
| ------ | --------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"} | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"} | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"} | m4:exec:CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}; m4:item:SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p3_mod2.jsp) | `0f02c533a957c5da091336a45cbdb09356b7df0eb3858d9c070c59c9a640b3cb` |    385 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p3_mod2.jsp)   | `9cc9fc55ee2708f13176c8a52fa4546c783c78d1b833da3d4ad36bb35694af1f` |    391 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p3_mod2.jsp) | `0f02c533a957c5da091336a45cbdb09356b7df0eb3858d9c070c59c9a640b3cb` |    385 |
| BASE / español    | [sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p3_mod2.jsp)                             | `50e06bd6d9e34a73d51d6a43b6730a6ec57d0fa0eeb2d918d90bfaeeed95ee3e` |    282 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p3_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                   |
| --- | ------------------------------------------------------------------------------------------ |
| 192 | [valor dinámico] [valor dinámico]                                                          |
| 211 | Idiomas                                                                                    |
| 215 | * [valor dinámico]                                                                         |
| 216 | "&gt;                                                                                      |
| 242 | "&gt;                                                                                      |
| 267 | " href="javascript:m4calendario(m4objeto('CSP_FECHA_TOEIC','NombreFormulario'))"&gt; "&gt; |
| 351 | ');"&gt;                                                                                   |
| 371 | ');"&gt;                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 191 | img     | alt=&lt;%=tfuncional%&gt;; title=&lt;%=tfuncional%&gt;; src=/iconos/noname_idiomas_ess_100_100.gif; width=100; height=100                                                                        |
| 194 | a       | class=enlacefuncional; title=&lt;%=efuncional%&gt;; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                               |
| 198 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                  |
| 199 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 200 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                            |
| 201 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                    |
| 202 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 203 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 204 | input   | type=hidden; id=STD_ID_LISTEN_LEVEL; name=STD_ID_LISTEN_LEVEL; value=                                                                                                                            |
| 205 | input   | type=hidden; id=STD_ID_WRITE_LEVEL; name=STD_ID_WRITE_LEVEL; value=                                                                                                                              |
| 212 | a       | title=Mis datos profesionales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                                                    |
| 212 | img     | alt=Mis datos profesionales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)          |
| 217 | select  | id=STD_ID_LANGUAGE; class=fuenteformulario; name=STD_ID_LANGUAGE; tabindex=1; title=Escoge el idioma; onchange=javascript:muestrapaneles(this);                                                  |
| 218 | option  | value=                                                                                                                                                                                           |
| 220 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 243 | select  | id=STD_ID_SPEAK_LEVEL; class=fuenteformulario; name=STD_ID_SPEAK_LEVEL; title=Escoge el nivel                                                                                                    |
| 247 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 261 | input   | class=fuenteformulario; type=text; id=CSP_TOEIC; name=CSP_TOEIC; size=4; maxlength=4; title=Escriba el TOEIC                                                                                     |
| 268 | input   | class=fuenteformulario; type=text; name=CSP_FECHA_TOEIC; id=CSP_FECHA_TOEIC; title=Escriba fecha TOEIC; maxlength=10; size=10                                                                    |
| 269 | a       | title=&lt;m4:label m4name=                                                                                                                                                                       |
| 270 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=&lt;m4:label m4name=                                                                                                            |
| 292 | a       | title=&lt;%=etiqueta5%&gt;; href=javascript:comprobar()                                                                                                                                          |
| 293 | img     | alt=&lt;%=etiqueta5%&gt;; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)              |
| 313 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                       |
| 314 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                  |
| 316 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                                                              |
| 317 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 318 | input   | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                                                                      |
| 319 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 320 | input   | type=hidden; id=REC; name=REC                                                                                                                                                                    |
| 351 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 351 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 371 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 371 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | titulo             | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 11  | tfuncional         | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 12  | dfuncional         | "Indica cuá                                                                    | {"Indica cuá}                                                                                                                                |
| 13  | efuncional         | "Mis datos profesionales"                                                      | Mis datos profesionales                                                                                                                      |
| 14  | etiqueta           | "Idioma"                                                                       | Idioma                                                                                                                                       |
| 15  | etiqueta2          | "Nivel de comprensió                                                           | {"Nivel de comprensió}                                                                                                                       |
| 16  | etiqueta3          | "Nivel de conversació                                                          | {"Nivel de conversació}                                                                                                                      |
| 17  | etiqueta4          | "Nivel escrito"                                                                | Nivel escrito                                                                                                                                |
| 18  | etiqueta5          | "Enviar"                                                                       | Enviar                                                                                                                                       |
| 19  | etiqueta6          | "Petició                                                                       | {"Petició}                                                                                                                                   |
| 20  | etiqueta7          | "Eliminar la petició                                                           | {"Eliminar la petició}                                                                                                                       |
| 23  | etiquetaNivel      | "Nivel"                                                                        | Nivel                                                                                                                                        |
| 24  | etiquetaTOEIC      | "TOEIC"                                                                        | TOEIC                                                                                                                                        |
| 25  | etiquetaFechaTOEIC | "Fecha TOEIC"                                                                  | Fecha TOEIC                                                                                                                                  |
| 88  | estado             | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 89  | zinicios           | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 98  | zsubsesion         | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 99  | zmeta4object       | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 100 | znodo              | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 101 | znodo2             | "M4T_LU_LANGUAGES"                                                             | M4T_LU_LANGUAGES                                                                                                                             |
| 102 | znodo3             | "M4T_LU_LANG_LEVEL"                                                            | M4T_LU_LANG_LEVEL                                                                                                                            |
| 104 | zventanas          | "6"                                                                            | 6                                                                                                                                            |
| 105 | zvuelta            | 2                                                                              | 2                                                                                                                                            |
| 106 | zdireccion         | "sse_g1/sse_g1_p3_mod2.jsp"                                                    | sse_g1/sse_g1_p3_mod2.jsp                                                                                                                    |
| 107 | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 109 | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 110 | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 112 | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 113 | zmove              | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 114 | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 116 | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 117 | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                             |
| 118 | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 120 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 121 | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                           |
| 122 | zcomun3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 126 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                         |
| 127 | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                                          |
| 132 | zSTDNLANGUAGE      | zcomun + "STD_N_LANGUAGE"                                                      | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                     |
| 133 | zSTDNLISTENLEVEL   | zcomun + "STD_N_LISTEN_LEVEL"                                                  | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}                                 |
| 134 | zSTDNSPEAKLEVEL    | zcomun + "STD_N_SPEAK_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}                                  |
| 135 | zSTDNWRITELEVEL    | zcomun + "STD_N_WRITE_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}                                  |
| 136 | zORDINAL           | zcomun + "ORDINAL"                                                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 137 | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 139 | zCSPTOEIC          | zcomun + "CSP_TOEIC"                                                           | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}                                          |
| 140 | zCSPFECHATOEIC     | zcomun + "CSP_FECHA_TOEIC"                                                     | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}                                    |
| 143 | zSTDIDLANGUAGE     | zcomun2 + "STD_ID_LANGUAGE"                                                    | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}                                      |
| 144 | zSTDNLANGUAGE2     | zcomun2 + "STD_N_LANGUAGE"                                                     | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                       |
| 146 | zSTDIDLISTENLEVEL  | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 147 | zSTDNLISTENLEVEL2  | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 149 | zSTDIDSPEAKLEVEL   | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 150 | zSTDNSPEAKLEVEL2   | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 152 | zSTDIDWRITELEVEL   | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 153 | zSTDNWRITELEVEL2   | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 173 | zcount             | 0                                                                              | 0                                                                                                                                            |
| 174 | zcounti            | 0                                                                              | 0                                                                                                                                            |
| 175 | zcount2i           | 0                                                                              | 0                                                                                                                                            |
| 176 | zcount3i           | 0                                                                              | 0                                                                                                                                            |
| 184 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 185 | zcount2v           | String.valueOf(zcount2i)                                                       | String.valueOf(zcount2i)                                                                                                                     |
| 186 | zcount3v           | String.valueOf(zcount3i)                                                       | String.valueOf(zcount3i)                                                                                                                     |
| 307 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 308 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 309 | zposicions         | "0"                                                                            | 0                                                                                                                                            |
| 310 | zcontrol           | 0                                                                              | 0                                                                                                                                            |
| 311 | zposicion          | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 156 | m4:startpage | m4task=SSE_EMP_LANGUAGES                                                                                                                                         |
| 156 | m4:beginjob  |                                                                                                                                                                  |
| 157 | m4:datadef   | m4o=SSE_EMP_LANGUAGES; m4name=SSE_EMP_LANGUAGES                                                                                                                  |
| 164 | m4:exec      | m4method=CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                    |
| 164 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 165 | m4:outputdef | m4alias=SSE_EMP_LANGUAGES                                                                                                                                        |
| 165 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 166 | m4:outputdef | m4alias=M4T_LU_LANGUAGES                                                                                                                                         |
| 166 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 167 | m4:outputdef | m4alias=M4T_LU_LANG_LEVEL                                                                                                                                        |
| 167 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 168 | m4:endjob    |                                                                                                                                                                  |
| 169 | m4:move      |                                                                                                                                                                  |
| 169 | m4:param     | name=SSE_EMP_LANGUAGES; value=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 170 | m4:move      |                                                                                                                                                                  |
| 170 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                   |
| 171 | m4:move      |                                                                                                                                                                  |
| 171 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                 |
| 219 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                            |
| 220 | m4:item      | m4name=M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                     |
| 244 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                                            |
| 245 | m4:param     | name=m4item0; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 246 | m4:param     | name=m4item1; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 249 | m4:item      | m4name=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                 |
| 332 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 346 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 347 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 348 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 349 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}; htmlsafe=true                                        |
| 350 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; htmlsafe=true                                  |
| 366 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 367 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 368 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 369 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}; htmlsafe=true                                        |
| 370 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; htmlsafe=true                                  |
| 382 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 160 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 179 | getCount         | znodo,zsubsesion,znodo                    |
| 180 | getCountInClient | znodo,zsubsesion,znodo                    |
| 181 | getCountInClient | znodo2,zsubsesion,znodo2                  |
| 182 | getCountInClient | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 34  | comprobar      |            |
| 63  | borrar         | reg        |
| 68  | muestrapaneles | obj        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 52  | if (idlanguage == null &#124;&#124; idlanguage == ""){                                                                                   |
| 56  | if (error == 1){                                                                                                                         |
| 57  | alert(texto);                                                                                                                            |
| 59  | }else {                                                                                                                                  |
| 75  | if (valorSeleccionado == '02'){                                                                                                          |
| 78  | }else{                                                                                                                                   |
| 90  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 91  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 306 | &lt;% if (zcounti &gt; 0) {                                                                                                              |
| 337 | if (zcontrol==0){%&gt;                                                                                                                   |
| 357 | &lt;%}else{%&gt;                                                                                                                         |
| 53  | expresión de cálculo/transformación: texto = texto + mensaje_idioma;                                                                     |
| 108 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 110 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 112 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 113 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 114 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 116 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 117 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 118 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 120 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 121 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 122 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 126 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 132 | expresión de cálculo/transformación: String zSTDNLANGUAGE = zcomun + "STD_N_LANGUAGE";                                                   |
| 133 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";                                            |
| 134 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";                                              |
| 135 | expresión de cálculo/transformación: String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";                                              |
| 136 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 137 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 139 | expresión de cálculo/transformación: String zCSPTOEIC = zcomun + "CSP_TOEIC";                                                            |
| 140 | expresión de cálculo/transformación: String zCSPFECHATOEIC = zcomun + "CSP_FECHA_TOEIC";                                                 |
| 143 | expresión de cálculo/transformación: String zSTDIDLANGUAGE = zcomun2 + "STD_ID_LANGUAGE";                                                |
| 144 | expresión de cálculo/transformación: String zSTDNLANGUAGE2 = zcomun2 + "STD_N_LANGUAGE";                                                 |
| 146 | expresión de cálculo/transformación: String zSTDIDLISTENLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                           |
| 147 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                            |
| 149 | expresión de cálculo/transformación: String zSTDIDSPEAKLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 150 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 152 | expresión de cálculo/transformación: String zSTDIDWRITELEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 153 | expresión de cálculo/transformación: String zSTDNWRITELEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 308 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 31  | ../../sse_generico/espanol/menu_ess.jsp               |
| 95  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 96  | ../../sse_generico/espanol/generico_links.jsp         |
| 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 379 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 29  | /css/estilo_sse.css                                             |
| 30  | /libreria/funciones_sse.js                                      |
| 32  | /libreria/clase_val_entradas.js                                 |
| 191 | /iconos/noname_idiomas_ess_100_100.gif                          |
| 194 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 198 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 212 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 212 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 269 | javascript:m4calendario(m4objeto(                               |
| 270 | /iconos/icono_calendario_14_18.gif                              |
| 292 | javascript:comprobar()                                          |
| 293 | /iconos/icono_enviar_ess_36_36.gif                              |
| 313 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  |
| 316 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 351 | javascript:borrar(                                              |
| 351 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 371 | javascript:borrar(                                              |
| 371 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 31  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 95  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 96  | ../../sse_generico/espanol/generico_links.jsp                   |
| 106 | sse_g1/sse_g1_p3_mod2.jsp                                       |
| 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 379 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p3_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                   |
| --- | ------------------------------------------------------------------------------------------ |
| 199 | [valor dinámico] [valor dinámico]                                                          |
| 218 | Idiomas                                                                                    |
| 222 | * [valor dinámico]                                                                         |
| 223 | "&gt;                                                                                      |
| 249 | "&gt;                                                                                      |
| 273 | " href="javascript:m4calendario(m4objeto('CSP_FECHA_TOEIC','NombreFormulario'))"&gt; "&gt; |
| 357 | ');"&gt;                                                                                   |
| 377 | ');"&gt;                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 198 | img     | alt=&lt;%=tfuncional%&gt;; title=&lt;%=tfuncional%&gt;; src=/iconos/noname_idiomas_ess_100_100.gif; width=100; height=100                                                                        |
| 201 | a       | class=enlacefuncional; title=&lt;%=efuncional%&gt;; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                               |
| 205 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                  |
| 206 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 207 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                            |
| 208 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                    |
| 209 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 210 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 211 | input   | type=hidden; id=STD_ID_LISTEN_LEVEL; name=STD_ID_LISTEN_LEVEL; value=                                                                                                                            |
| 212 | input   | type=hidden; id=STD_ID_WRITE_LEVEL; name=STD_ID_WRITE_LEVEL; value=                                                                                                                              |
| 219 | a       | title=Mis datos profesionales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                                                    |
| 219 | img     | alt=Mis datos profesionales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)          |
| 224 | select  | id=STD_ID_LANGUAGE; class=fuenteformulario; name=STD_ID_LANGUAGE; tabindex=1; title=Escoge el idioma; onchange=javascript:muestrapaneles(this);                                                  |
| 225 | option  | value=                                                                                                                                                                                           |
| 227 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 250 | select  | id=STD_ID_SPEAK_LEVEL; class=fuenteformulario; name=STD_ID_SPEAK_LEVEL; title=Escoge el nivel                                                                                                    |
| 254 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 267 | input   | class=fuenteformulario; type=text; id=CSP_TOEIC; name=CSP_TOEIC; size=4; maxlength=4; title=Escriba el TOEIC                                                                                     |
| 274 | input   | class=fuenteformulario; type=text; name=CSP_FECHA_TOEIC; id=CSP_FECHA_TOEIC; title=Escriba fecha TOEIC; maxlength=10; size=10                                                                    |
| 275 | a       | title=&lt;m4:label m4name=                                                                                                                                                                       |
| 276 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=&lt;m4:label m4name=                                                                                                            |
| 298 | a       | title=&lt;%=etiqueta5%&gt;; href=javascript:comprobar()                                                                                                                                          |
| 299 | img     | alt=&lt;%=etiqueta5%&gt;; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)              |
| 319 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                       |
| 320 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                  |
| 322 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                                                              |
| 323 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 324 | input   | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                                                                      |
| 325 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 326 | input   | type=hidden; id=REC; name=REC                                                                                                                                                                    |
| 357 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 357 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 377 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 377 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | titulo             | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 14  | tfuncional         | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 15  | dfuncional         | "Indica cuá                                                                    | {"Indica cuá}                                                                                                                                |
| 16  | efuncional         | "Mis datos profesionales"                                                      | Mis datos profesionales                                                                                                                      |
| 17  | etiqueta           | "Idioma"                                                                       | Idioma                                                                                                                                       |
| 18  | etiqueta2          | "Nivel de comprensió                                                           | {"Nivel de comprensió}                                                                                                                       |
| 19  | etiqueta3          | "Nivel de conversació                                                          | {"Nivel de conversació}                                                                                                                      |
| 20  | etiqueta4          | "Nivel escrito"                                                                | Nivel escrito                                                                                                                                |
| 21  | etiqueta5          | "Enviar"                                                                       | Enviar                                                                                                                                       |
| 22  | etiqueta6          | "Petició                                                                       | {"Petició}                                                                                                                                   |
| 23  | etiqueta7          | "Eliminar la petició                                                           | {"Eliminar la petició}                                                                                                                       |
| 26  | etiquetaNivel      | "Nivel"                                                                        | Nivel                                                                                                                                        |
| 27  | etiquetaTOEIC      | "TOEIC"                                                                        | TOEIC                                                                                                                                        |
| 28  | etiquetaFechaTOEIC | "Fecha TOEIC"                                                                  | Fecha TOEIC                                                                                                                                  |
| 95  | estado             | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 96  | zinicios           | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 105 | zsubsesion         | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 106 | zmeta4object       | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 107 | znodo              | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 108 | znodo2             | "M4T_LU_LANGUAGES"                                                             | M4T_LU_LANGUAGES                                                                                                                             |
| 109 | znodo3             | "M4T_LU_LANG_LEVEL"                                                            | M4T_LU_LANG_LEVEL                                                                                                                            |
| 111 | zventanas          | "6"                                                                            | 6                                                                                                                                            |
| 112 | zvuelta            | 2                                                                              | 2                                                                                                                                            |
| 113 | zdireccion         | "sse_g1/sse_g1_p3_mod2.jsp"                                                    | sse_g1/sse_g1_p3_mod2.jsp                                                                                                                    |
| 114 | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 116 | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 117 | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 119 | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 120 | zmove              | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 121 | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 123 | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 124 | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                             |
| 125 | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 127 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 128 | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                           |
| 129 | zcomun3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 133 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                         |
| 134 | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                                          |
| 139 | zSTDNLANGUAGE      | zcomun + "STD_N_LANGUAGE"                                                      | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                     |
| 140 | zSTDNLISTENLEVEL   | zcomun + "STD_N_LISTEN_LEVEL"                                                  | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}                                 |
| 141 | zSTDNSPEAKLEVEL    | zcomun + "STD_N_SPEAK_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}                                  |
| 142 | zSTDNWRITELEVEL    | zcomun + "STD_N_WRITE_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}                                  |
| 143 | zORDINAL           | zcomun + "ORDINAL"                                                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 144 | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 146 | zCSPTOEIC          | zcomun + "CSP_TOEIC"                                                           | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}                                          |
| 147 | zCSPFECHATOEIC     | zcomun + "CSP_FECHA_TOEIC"                                                     | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}                                    |
| 150 | zSTDIDLANGUAGE     | zcomun2 + "STD_ID_LANGUAGE"                                                    | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}                                      |
| 151 | zSTDNLANGUAGE2     | zcomun2 + "STD_N_LANGUAGE"                                                     | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                       |
| 153 | zSTDIDLISTENLEVEL  | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 154 | zSTDNLISTENLEVEL2  | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 156 | zSTDIDSPEAKLEVEL   | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 157 | zSTDNSPEAKLEVEL2   | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 159 | zSTDIDWRITELEVEL   | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 160 | zSTDNWRITELEVEL2   | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 180 | zcount             | 0                                                                              | 0                                                                                                                                            |
| 181 | zcounti            | 0                                                                              | 0                                                                                                                                            |
| 182 | zcount2i           | 0                                                                              | 0                                                                                                                                            |
| 183 | zcount3i           | 0                                                                              | 0                                                                                                                                            |
| 191 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 192 | zcount2v           | String.valueOf(zcount2i)                                                       | String.valueOf(zcount2i)                                                                                                                     |
| 193 | zcount3v           | String.valueOf(zcount3i)                                                       | String.valueOf(zcount3i)                                                                                                                     |
| 313 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 314 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 315 | zposicions         | "0"                                                                            | 0                                                                                                                                            |
| 316 | zcontrol           | 0                                                                              | 0                                                                                                                                            |
| 317 | zposicion          | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 163 | m4:startpage | m4task=SSE_EMP_LANGUAGES                                                                                                                                         |
| 163 | m4:beginjob  |                                                                                                                                                                  |
| 164 | m4:datadef   | m4o=SSE_EMP_LANGUAGES; m4name=SSE_EMP_LANGUAGES                                                                                                                  |
| 171 | m4:exec      | m4method=CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                    |
| 171 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 172 | m4:outputdef | m4alias=SSE_EMP_LANGUAGES                                                                                                                                        |
| 172 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 173 | m4:outputdef | m4alias=M4T_LU_LANGUAGES                                                                                                                                         |
| 173 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 174 | m4:outputdef | m4alias=M4T_LU_LANG_LEVEL                                                                                                                                        |
| 174 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 175 | m4:endjob    |                                                                                                                                                                  |
| 176 | m4:move      |                                                                                                                                                                  |
| 176 | m4:param     | name=SSE_EMP_LANGUAGES; value=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 177 | m4:move      |                                                                                                                                                                  |
| 177 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                   |
| 178 | m4:move      |                                                                                                                                                                  |
| 178 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                 |
| 226 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                            |
| 227 | m4:item      | m4name=M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                     |
| 251 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                                            |
| 252 | m4:param     | name=m4item0; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 253 | m4:param     | name=m4item1; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 256 | m4:item      | m4name=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                 |
| 338 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 352 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 353 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 354 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 355 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}; htmlsafe=true                                        |
| 356 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; htmlsafe=true                                  |
| 372 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 373 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 374 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 375 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_TOEIC"}; htmlsafe=true                                        |
| 376 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"CSP_FECHA_TOEIC"}; htmlsafe=true                                  |
| 388 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 167 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 186 | getCount         | znodo,zsubsesion,znodo                    |
| 187 | getCountInClient | znodo,zsubsesion,znodo                    |
| 188 | getCountInClient | znodo2,zsubsesion,znodo2                  |
| 189 | getCountInClient | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 37  | comprobar      |            |
| 66  | borrar         | reg        |
| 71  | muestrapaneles | obj        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 55  | if (idlanguage == null &#124;&#124; idlanguage == ""){                                                                                   |
| 59  | if (error == 1){                                                                                                                         |
| 60  | alert(texto);                                                                                                                            |
| 62  | }else {                                                                                                                                  |
| 78  | if (valorSeleccionado == '02'){                                                                                                          |
| 81  | }else{                                                                                                                                   |
| 97  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 98  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 312 | &lt;% if (zcounti &gt; 0) {                                                                                                              |
| 343 | if (zcontrol==0){%&gt;                                                                                                                   |
| 363 | &lt;%}else{%&gt;                                                                                                                         |
| 56  | expresión de cálculo/transformación: texto = texto + mensaje_idioma;                                                                     |
| 115 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 117 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 119 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 120 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 121 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 123 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 124 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 125 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 127 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 128 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 129 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 133 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 139 | expresión de cálculo/transformación: String zSTDNLANGUAGE = zcomun + "STD_N_LANGUAGE";                                                   |
| 140 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";                                            |
| 141 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";                                              |
| 142 | expresión de cálculo/transformación: String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";                                              |
| 143 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 144 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 146 | expresión de cálculo/transformación: String zCSPTOEIC = zcomun + "CSP_TOEIC";                                                            |
| 147 | expresión de cálculo/transformación: String zCSPFECHATOEIC = zcomun + "CSP_FECHA_TOEIC";                                                 |
| 150 | expresión de cálculo/transformación: String zSTDIDLANGUAGE = zcomun2 + "STD_ID_LANGUAGE";                                                |
| 151 | expresión de cálculo/transformación: String zSTDNLANGUAGE2 = zcomun2 + "STD_N_LANGUAGE";                                                 |
| 153 | expresión de cálculo/transformación: String zSTDIDLISTENLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                           |
| 154 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                            |
| 156 | expresión de cálculo/transformación: String zSTDIDSPEAKLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 157 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 159 | expresión de cálculo/transformación: String zSTDIDWRITELEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 160 | expresión de cálculo/transformación: String zSTDNWRITELEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 314 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 34  | ../../sse_generico/espanol/menu_ess.jsp               |
| 102 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 103 | ../../sse_generico/espanol/generico_links.jsp         |
| 383 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 385 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /calendario/jquery-ui.css                                       |
| 8   | /calendario/jquery-1.12.4.js                                    |
| 9   | /calendario/jquery-ui.js                                        |
| 32  | /css/estilo_sse.css                                             |
| 33  | /libreria/funciones_sse.js                                      |
| 35  | /libreria/clase_val_entradas.js                                 |
| 198 | /iconos/noname_idiomas_ess_100_100.gif                          |
| 201 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 205 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 219 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 219 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 275 | javascript:m4calendario(m4objeto(                               |
| 276 | /iconos/icono_calendario_14_18.gif                              |
| 298 | javascript:comprobar()                                          |
| 299 | /iconos/icono_enviar_ess_36_36.gif                              |
| 319 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  |
| 322 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 357 | javascript:borrar(                                              |
| 357 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 377 | javascript:borrar(                                              |
| 377 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 34  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 102 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 103 | ../../sse_generico/espanol/generico_links.jsp                   |
| 113 | sse_g1/sse_g1_p3_mod2.jsp                                       |
| 383 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 385 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p3_mod2.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p3_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 153 | [valor dinámico] [valor dinámico] |
| 166 | Idiomas                           |
| 170 | * [valor dinámico]                |
| 171 | "&gt;                             |
| 182 | "&gt;                             |
| 192 | "&gt;                             |
| 206 | "&gt;                             |
| 260 | ');"&gt;                          |
| 269 | ');"&gt;                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 152 | img     | alt=&lt;%=tfuncional%&gt;; title=&lt;%=tfuncional%&gt;; src=/iconos/noname_idiomas_ess_100_100.gif; width=100; height=100                                                                        |
| 155 | a       | class=enlacefuncional; title=&lt;%=efuncional%&gt;; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                               |
| 159 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                  |
| 160 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 161 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                            |
| 162 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                    |
| 163 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 167 | a       | title=Mis datos profesionales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                                                    |
| 167 | img     | alt=Mis datos profesionales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)          |
| 172 | select  | id=STD_ID_LANGUAGE; class=fuenteformulario; name=STD_ID_LANGUAGE; tabindex=1; title=Escoge el idioma                                                                                             |
| 173 | option  | value=                                                                                                                                                                                           |
| 175 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 183 | select  | id=STD_ID_LISTEN_LEVEL; class=fuenteformulario; name=STD_ID_LISTEN_LEVEL; title=Escoge el nivel de comprensión                                                                                   |
| 185 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 193 | select  | id=STD_ID_SPEAK_LEVEL; class=fuenteformulario; name=STD_ID_SPEAK_LEVEL; title=Escoge el nivel de conversación                                                                                    |
| 197 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 207 | select  | id=STD_ID_WRITE_LEVEL; class=fuenteformulario; name=STD_ID_WRITE_LEVEL; title=Escoge el nivel escrito                                                                                            |
| 209 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                         |
| 216 | a       | title=&lt;%=etiqueta5%&gt;; href=javascript:comprobar()                                                                                                                                          |
| 217 | img     | alt=&lt;%=etiqueta5%&gt;; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)              |
| 230 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                       |
| 231 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                  |
| 233 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                                                              |
| 234 | input   | type=hidden; id=TAG; name=TAG; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 235 | input   | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                                                                      |
| 236 | input   | type=hidden; id=NOD; name=NOD; value=SSE_EMP_LANGUAGES                                                                                                                                           |
| 237 | input   | type=hidden; id=REC; name=REC                                                                                                                                                                    |
| 260 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 260 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 269 | a       | title=&lt;%=etiqueta7%&gt;; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                               |
| 269 | img     | align=right; alt=&lt;%=etiqueta7%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=12; width=11; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | titulo            | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 11  | tfuncional        | "Idiomas"                                                                      | Idiomas                                                                                                                                      |
| 12  | dfuncional        | "Indica cuá                                                                    | {"Indica cuá}                                                                                                                                |
| 13  | efuncional        | "Mis datos profesionales"                                                      | Mis datos profesionales                                                                                                                      |
| 14  | etiqueta          | "Idioma"                                                                       | Idioma                                                                                                                                       |
| 15  | etiqueta2         | "Nivel de comprensió                                                           | {"Nivel de comprensió}                                                                                                                       |
| 16  | etiqueta3         | "Nivel de conversació                                                          | {"Nivel de conversació}                                                                                                                      |
| 17  | etiqueta4         | "Nivel escrito"                                                                | Nivel escrito                                                                                                                                |
| 18  | etiqueta5         | "Enviar"                                                                       | Enviar                                                                                                                                       |
| 19  | etiqueta6         | "Petició                                                                       | {"Petició}                                                                                                                                   |
| 20  | etiqueta7         | "Eliminar la petició                                                           | {"Eliminar la petició}                                                                                                                       |
| 53  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 54  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 63  | zsubsesion        | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 64  | zmeta4object      | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 65  | znodo             | "SSE_EMP_LANGUAGES"                                                            | SSE_EMP_LANGUAGES                                                                                                                            |
| 66  | znodo2            | "M4T_LU_LANGUAGES"                                                             | M4T_LU_LANGUAGES                                                                                                                             |
| 67  | znodo3            | "M4T_LU_LANG_LEVEL"                                                            | M4T_LU_LANG_LEVEL                                                                                                                            |
| 69  | zventanas         | "6"                                                                            | 6                                                                                                                                            |
| 70  | zvuelta           | 2                                                                              | 2                                                                                                                                            |
| 71  | zdireccion        | "sse_g1/sse_g1_p3_mod2.jsp"                                                    | sse_g1/sse_g1_p3_mod2.jsp                                                                                                                    |
| 72  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 74  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 75  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 77  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 78  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 79  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 81  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 82  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                             |
| 83  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 85  | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 86  | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                           |
| 87  | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 91  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA"}                                                                                            |
| 92  | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                          |
| 97  | zSTDNLANGUAGE     | zcomun + "STD_N_LANGUAGE"                                                      | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                     |
| 98  | zSTDNLISTENLEVEL  | zcomun + "STD_N_LISTEN_LEVEL"                                                  | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}                                 |
| 99  | zSTDNSPEAKLEVEL   | zcomun + "STD_N_SPEAK_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}                                  |
| 100 | zSTDNWRITELEVEL   | zcomun + "STD_N_WRITE_LEVEL"                                                   | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}                                  |
| 101 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 102 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 104 | zSTDIDLANGUAGE    | zcomun2 + "STD_ID_LANGUAGE"                                                    | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}                                      |
| 105 | zSTDNLANGUAGE2    | zcomun2 + "STD_N_LANGUAGE"                                                     | M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                       |
| 107 | zSTDIDLISTENLEVEL | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 108 | zSTDNLISTENLEVEL2 | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 110 | zSTDIDSPEAKLEVEL  | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 111 | zSTDNSPEAKLEVEL2  | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 113 | zSTDIDWRITELEVEL  | zcomun3 + "STD_ID_LANG_LEVEL"                                                  | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 114 | zSTDNWRITELEVEL2  | zcomun3 + "STD_N_LANG_LEVEL"                                                   | M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 134 | zcount            | 0                                                                              | 0                                                                                                                                            |
| 135 | zcounti           | 0                                                                              | 0                                                                                                                                            |
| 136 | zcount2i          | 0                                                                              | 0                                                                                                                                            |
| 137 | zcount3i          | 0                                                                              | 0                                                                                                                                            |
| 145 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 146 | zcount2v          | String.valueOf(zcount2i)                                                       | String.valueOf(zcount2i)                                                                                                                     |
| 147 | zcount3v          | String.valueOf(zcount3i)                                                       | String.valueOf(zcount3i)                                                                                                                     |
| 224 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 225 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |
| 226 | zposicions        | "0"                                                                            | 0                                                                                                                                            |
| 227 | zcontrol          | 0                                                                              | 0                                                                                                                                            |
| 228 | zposicion         | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:startpage | m4task=SSE_EMP_LANGUAGES                                                                                                                                         |
| 117 | m4:beginjob  |                                                                                                                                                                  |
| 118 | m4:datadef   | m4o=SSE_EMP_LANGUAGES; m4name=SSE_EMP_LANGUAGES                                                                                                                  |
| 125 | m4:exec      | m4method=CARGA:{}SSE_EMP_LANGUAGES{"!SSE_PRINCIPAL.CARGA"}                                                                                                       |
| 125 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 126 | m4:outputdef | m4alias=SSE_EMP_LANGUAGES                                                                                                                                        |
| 126 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 127 | m4:outputdef | m4alias=M4T_LU_LANGUAGES                                                                                                                                         |
| 127 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[*]"}                                                                                                |
| 128 | m4:outputdef | m4alias=M4T_LU_LANG_LEVEL                                                                                                                                        |
| 128 | m4:param     | name=m4name0; value=SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[*]"}                                                                                               |
| 129 | m4:endjob    |                                                                                                                                                                  |
| 130 | m4:move      |                                                                                                                                                                  |
| 130 | m4:param     | name=SSE_EMP_LANGUAGES; value=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 131 | m4:move      |                                                                                                                                                                  |
| 131 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANGUAGES{":"}M4T_LU_LANGUAGES{"[FIRST]"}                                                                                   |
| 132 | m4:move      |                                                                                                                                                                  |
| 132 | m4:param     | name=SSE_EMP_LANGUAGES; value=M4T_LU_LANG_LEVEL{":"}M4T_LU_LANG_LEVEL{"[FIRST]"}                                                                                 |
| 174 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                            |
| 175 | m4:item      | m4name=M4T_LU_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                     |
| 184 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                                            |
| 185 | m4:item      | m4name=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                 |
| 194 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                                            |
| 195 | m4:param     | name=m4item0; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                   |
| 196 | m4:param     | name=m4item1; value=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANG_LEVEL"}                                  |
| 198 | m4:item      | m4name=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                 |
| 208 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                                                            |
| 209 | m4:item      | m4name=M4T_LU_LANG_LEVEL{":"}SSE_EMP_LANGUAGES{"!"}M4T_LU_LANG_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                 |
| 248 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 255 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 256 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 257 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}; htmlsafe=true                               |
| 258 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 259 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}; htmlsafe=true                                |
| 264 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 265 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                   |
| 266 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LISTEN_LEVEL"}; htmlsafe=true                               |
| 267 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SPEAK_LEVEL"}; htmlsafe=true                                |
| 268 | m4:item      | m4name=SSE_EMP_LANGUAGES{":"}SSE_EMP_LANGUAGES{"!"}SSE_EMP_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WRITE_LEVEL"}; htmlsafe=true                                |
| 279 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 121 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 140 | getCount         | znodo,zsubsesion,znodo                    |
| 141 | getCountInClient | znodo,zsubsesion,znodo                    |
| 142 | getCountInClient | znodo2,zsubsesion,znodo2                  |
| 143 | getCountInClient | znodo3,zsubsesion,znodo3                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 28  | comprobar |            |
| 46  | borrar    | reg        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if (idlanguage == null &#124;&#124; idlanguage == ""){                                                                                   |
| 39  | if (error == 1){                                                                                                                         |
| 40  | alert(texto);                                                                                                                            |
| 42  | }else {                                                                                                                                  |
| 55  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 56  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 223 | &lt;% if (zcounti &gt; 0) {                                                                                                              |
| 253 | if (zcontrol==0){%&gt;                                                                                                                   |
| 262 | &lt;%}else{%&gt;                                                                                                                         |
| 36  | expresión de cálculo/transformación: texto = texto + mensaje_idioma;                                                                     |
| 73  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 75  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 77  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 78  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 79  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 81  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 82  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 83  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 85  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 86  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 87  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 91  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 97  | expresión de cálculo/transformación: String zSTDNLANGUAGE = zcomun + "STD_N_LANGUAGE";                                                   |
| 98  | expresión de cálculo/transformación: String zSTDNLISTENLEVEL = zcomun + "STD_N_LISTEN_LEVEL";                                            |
| 99  | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL = zcomun + "STD_N_SPEAK_LEVEL";                                              |
| 100 | expresión de cálculo/transformación: String zSTDNWRITELEVEL = zcomun + "STD_N_WRITE_LEVEL";                                              |
| 101 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 102 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 104 | expresión de cálculo/transformación: String zSTDIDLANGUAGE = zcomun2 + "STD_ID_LANGUAGE";                                                |
| 105 | expresión de cálculo/transformación: String zSTDNLANGUAGE2 = zcomun2 + "STD_N_LANGUAGE";                                                 |
| 107 | expresión de cálculo/transformación: String zSTDIDLISTENLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                           |
| 108 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                            |
| 110 | expresión de cálculo/transformación: String zSTDIDSPEAKLEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 111 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 113 | expresión de cálculo/transformación: String zSTDIDWRITELEVEL = zcomun3 + "STD_ID_LANG_LEVEL";                                            |
| 114 | expresión de cálculo/transformación: String zSTDNWRITELEVEL2 = zcomun3 + "STD_N_LANG_LEVEL";                                             |
| 225 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 25  | ../../sse_generico/espanol/menu_ess.jsp               |
| 60  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 61  | ../../sse_generico/espanol/generico_links.jsp         |
| 274 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 276 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 23  | /css/estilo_sse.css                                             |
| 24  | /libreria/funciones_sse.js                                      |
| 26  | /libreria/clase_val_entradas.js                                 |
| 152 | /iconos/noname_idiomas_ess_100_100.gif                          |
| 155 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 159 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 167 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 167 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 216 | javascript:comprobar()                                          |
| 217 | /iconos/icono_enviar_ess_36_36.gif                              |
| 230 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  |
| 233 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 260 | javascript:borrar(                                              |
| 260 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 269 | javascript:borrar(                                              |
| 269 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 25  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 60  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 61  | ../../sse_generico/espanol/generico_links.jsp                   |
| 71  | sse_g1/sse_g1_p3_mod2.jsp                                       |
| 274 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 31  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 95  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 96  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 379 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 30  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 32  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 194 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 198 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 212 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 269 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 292 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 313 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 316 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 351 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 371 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 31  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 95  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 96  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 106 | sse_g1/sse_g1_p3_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 379 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 34  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 102 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 103 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 383 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 385 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 8   | /calendario/jquery-1.12.4.js                                    | contextual | &#96;calendario/jquery-1.12.4.js&#96;                                                                                                                                                              |
| CYC    | 9   | /calendario/jquery-ui.js                                        | contextual | &#96;calendario/jquery-ui.js&#96;                                                                                                                                                                  |
| CYC    | 33  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 35  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 201 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 205 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 219 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 275 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 298 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 319 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 322 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 357 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 377 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 34  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 102 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 103 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 113 | sse_g1/sse_g1_p3_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 383 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 385 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 31  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 95  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 96  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 379 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 30  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 32  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 194 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 198 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 212 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 269 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 292 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 313 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 316 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 351 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 371 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 31  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 95  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 96  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 106 | sse_g1/sse_g1_p3_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 377 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 379 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 60  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 61  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 274 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 24  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 26  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 155 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 159 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 167 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 216 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 230 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| BASE   | 233 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 260 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 269 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 60  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 61  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 71  | sse_g1/sse_g1_p3_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 274 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 276 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p3_mod2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
