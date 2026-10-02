# Descripción del puesto

Identificador: `mss_g3/mss_g3_p8_desc.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                                    | Ámbito | Diccionario                                                                       |
| ------------------------- | -------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.mss_g3_p8Des_Puesto | Consulta todos los detalles acerca del puesto de trabajo | BASE   | [translations/mss_g3_es.properties:L25](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p8_desc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8_desc.jsp) | `6ed2851fdf9991e36631b345c0d0f5e51c38773a928897f6d38509819c2ab217` |    417 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p8_desc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 7   | Descripción del puesto                                                                                        |
| 226 | Consulta todos los detalles acerca de los puestos del plan de carrera. [valor dinámico] Planes de carrera " " |
| 284 | Movilidad nacional                                                                                            |
| 285 | Movilidad internacional                                                                                       |
| 296 | Responsabilidades                                                                                             |
| 309 | Conocimientos                                                                                                 |
| 310 | Nivel                                                                                                         |
| 311 | Peso                                                                                                          |
| 320 | ',' ');" title="Formación disponible"&gt;                                                                     |
| 332 | Formación                                                                                                     |
| 333 | Especialidad                                                                                                  |
| 334 | Titulación                                                                                                    |
| 352 | Idioma                                                                                                        |
| 353 | Nivel oral                                                                                                    |
| 354 | Nivel lectura                                                                                                 |
| 355 | Nivel escritura                                                                                               |
| 374 | Puestos previos requeridos                                                                                    |
| 375 | Período mínimo                                                                                                |
| 392 | Certificados y licencias                                                                                      |
| 393 | Entidad emisora                                                                                               |
| 394 | País emisor                                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 224 | img     | src=/iconos/noname_puesto_181_125.gif; width=100; height=100; alt=Mi puesto de trabajo                                              |
| 226 | a       | class=fuentedescripcion                                                                                                             |
| 229 | a       | class=fuentedescripcion                                                                                                             |
| 233 | a       | class=enlacefuncional; title=Volver a planes de carrera; tabindex=1; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31 |
| 238 | a       | class=enlacefuncional; tabindex=2; title=&lt;m4:label m4name=; htmlsafe=true                                                        |
| 238 | a       | href=javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)                                                                            |
| 249 | a       | class=enlacefuncional; tabindex=2; title=&lt;m4:label m4name=; htmlsafe=true                                                        |
| 249 | a       | href=javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)                                                                            |
| 320 | a       | href=javascript:formacion('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                           |
| 325 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31; method=post; name=oculto; id=oculto                         |
| 326 | input   | type=hidden; id=zextd; name=zextd                                                                                                   |
| 327 | input   | type=hidden; id=zlevel; name=zlevel                                                                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 26  | zVis            | getParameter(request,"zVis") |

| L   | Variable          | Expresión fuente                                                                | Resolución estática parcial                                                                                                         |
| --- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 22  | estado            | zobjtabla.m4paramvalor("estado")                                                | zobjtabla.m4paramvalor("estado")                                                                                                    |
| 23  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                              | zobjtabla.m4paramvalor("zinicios")                                                                                                  |
| 24  | zjob              | zobjtabla.m4paramvalor("zSJOB")                                                 | zobjtabla.m4paramvalor("zSJOB")                                                                                                     |
| 26  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                    |
| 40  | zsubsesion        | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 41  | zmeta4object      | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 42  | znodo             | "SSE_JOB_PRINCIPAL"                                                             | SSE_JOB_PRINCIPAL                                                                                                                   |
| 43  | znodo1            | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 44  | znodo2            | "SSE_JOB_DUTY"                                                                  | SSE_JOB_DUTY                                                                                                                        |
| 45  | znodo3            | "SSE_JOB_COMPETENCY"                                                            | SSE_JOB_COMPETENCY                                                                                                                  |
| 46  | znodo4            | "SSE_JOB_ACAD_BACK"                                                             | SSE_JOB_ACAD_BACK                                                                                                                   |
| 47  | znodo5            | "SSE_JOB_LANGUAGE"                                                              | SSE_JOB_LANGUAGE                                                                                                                    |
| 48  | znodo6            | "SSE_JOB_PREV_JOBS"                                                             | SSE_JOB_PREV_JOBS                                                                                                                   |
| 49  | znodo7            | "SSE_JOB_CERT_LICEN"                                                            | SSE_JOB_CERT_LICEN                                                                                                                  |
| 53  | zventanas         | "20"                                                                            | 20                                                                                                                                  |
| 57  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                |
| 59  | zventana          | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                               |
| 60  | zregistrofinal    | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                  |
| 63  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}            |
| 64  | zmove1            | znodo1 + "[" + zregistroinicial + "]"                                           | SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                               |
| 65  | zlectura1         | zsubsesion + "!" + znodo1                                                       | SSE_JOB{"!"}SSE_JOB                                                                                                                 |
| 66  | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                 | SSE_JOB{"!"}SSE_JOB{"."}                                                                                                            |
| 67  | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{"[&amp;VAR.m4lix]"}{"."}                                                                            |
| 69  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 70  | zmove2            | znodo2 + "[" + zregistroinicial + "]"                                           | SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                          |
| 71  | zlectura2         | zsubsesion + "!" + znodo2                                                       | SSE_JOB{"!"}SSE_JOB_DUTY                                                                                                            |
| 72  | zraiz2            | zsubsesion + "!" + znodo2 + "."                                                 | SSE_JOB{"!"}SSE_JOB_DUTY{"."}                                                                                                       |
| 73  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}                                                                  |
| 75  | zoutputdef3       | zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 76  | zmove3            | znodo3 + "[" + zregistroinicial + "]"                                           | SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 77  | zlectura3         | zsubsesion + "!" + znodo3                                                       | SSE_JOB{"!"}SSE_JOB_COMPETENCY                                                                                                      |
| 78  | zraiz3            | zsubsesion + "!" + znodo3 + "."                                                 | SSE_JOB{"!"}SSE_JOB_COMPETENCY{"."}                                                                                                 |
| 79  | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 81  | zoutputdef4       | zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 82  | zmove4            | znodo4 + "[" + zregistroinicial + "]"                                           | SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 83  | zlectura4         | zsubsesion + "!" + znodo4                                                       | SSE_JOB{"!"}SSE_JOB_ACAD_BACK                                                                                                       |
| 84  | zraiz4            | zsubsesion + "!" + znodo4 + "."                                                 | SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"."}                                                                                                  |
| 85  | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 87  | zoutputdef5       | zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 88  | zmove5            | znodo5 + "[" + zregistroinicial + "]"                                           | SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                      |
| 89  | zlectura5         | zsubsesion + "!" + znodo5                                                       | SSE_JOB{"!"}SSE_JOB_LANGUAGE                                                                                                        |
| 90  | zraiz5            | zsubsesion + "!" + znodo5 + "."                                                 | SSE_JOB{"!"}SSE_JOB_LANGUAGE{"."}                                                                                                   |
| 91  | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 93  | zoutputdef6       | zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 94  | zmove6            | znodo6 + "[" + zregistroinicial + "]"                                           | SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 95  | zlectura6         | zsubsesion + "!" + znodo6                                                       | SSE_JOB{"!"}SSE_JOB_PREV_JOBS                                                                                                       |
| 96  | zraiz6            | zsubsesion + "!" + znodo6 + "."                                                 | SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"."}                                                                                                  |
| 97  | zcomun6           | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 99  | zoutputdef7       | zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 100 | zmove7            | znodo6 + "[" + zregistroinicial + "]"                                           | SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 101 | zlectura7         | zsubsesion + "!" + znodo7                                                       | SSE_JOB{"!"}SSE_JOB_CERT_LICEN                                                                                                      |
| 102 | zraiz7            | zsubsesion + "!" + znodo7 + "."                                                 | SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"."}                                                                                                 |
| 103 | zcomun7           | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 107 | zmetodocarga      | zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA"                                         | SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                                                 |
| 111 | zpuesto           | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE"                   | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_ID_JOB_CODE"}                                                                                 |
| 112 | znombrepuesto     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE"                    | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}                                                                                  |
| 113 | zmision           | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}                                                                                   |
| 114 | zresumen          | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_SUMMARY"                       | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_SUMMARY"}                                                                                     |
| 115 | zsinonimos        | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_NM_OTHERS"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_NM_OTHERS"}                                                                                   |
| 116 | zdescjobdoc       | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC"                  | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}                                                                                |
| 118 | zmovilidadnac     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}                                                                                   |
| 119 | zmovilidadint     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}                                                                                   |
| 121 | zresponsabilidad  | zcomun2 + "SCO_NM_DUTY"                                                         | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}                                                   |
| 123 | zconocimiento     | zcomun3 + "SCO_NM_EXTD_KN"                                                      | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                                    |
| 124 | znivel            | zcomun3 + "SCO_MEANING"                                                         | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}                                       |
| 125 | zpeso             | zcomun3 + "SCO_WEIGHT"                                                          | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}                                        |
| 126 | zextd             | zcomun3 + "SCO_ID_EXTD_KN"                                                      | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_EXTD_KN"}                                    |
| 127 | zlevel            | zcomun3 + "SCO_ID_LEVEL"                                                        | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LEVEL"}                                      |
| 129 | ztipoformacion    | zcomun4 + "STD_N_EDU_TYPE"                                                      | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}                                      |
| 130 | zespecialidad     | zcomun4 + "STD_N_EDU_SP"                                                        | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}                                        |
| 131 | ztitulacion       | zcomun4 + "STD_N_DIPLOMA"                                                       | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}                                       |
| 133 | zidioma           | zcomun5 + "STD_N_LANGUAGE"                                                      | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                        |
| 134 | znivelhabla       | zcomun5 + "STD_N_LANG_LEVEL_1"                                                  | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}                                    |
| 135 | znivellee         | zcomun5 + "STD_N_LANG_LEVEL"                                                    | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                      |
| 136 | znivelescribe     | zcomun5 + "STD_N_LANG_LEVEL_2"                                                  | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}                                    |
| 138 | zpuestoprevio     | zcomun6 + "STD_N_JOB_CODE"                                                      | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 139 | zperiodo          | zcomun6 + "SCO_MIN_PERIOD"                                                      | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}                                      |
| 140 | zunidadtiempo     | zcomun6 + "SCO_NM_TIME_UNIT"                                                    | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                    |
| 142 | zcertificado      | zcomun7 + "STD_N_CERTIFICATION_TYPE"                                            | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"}                          |
| 143 | zentidad          | zcomun7 + "SCO_N_ISSUE_ENTIT"                                                   | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}                                 |
| 144 | zpais             | zcomun7 + "STD_N_COUNTRY"                                                       | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                     |
| 166 | zcountijob        | 0                                                                               | 0                                                                                                                                   |
| 171 | zcountvjob        | String.valueOf(zcountijob)                                                      | String.valueOf(zcountijob)                                                                                                          |
| 173 | zcountires        | 0                                                                               | 0                                                                                                                                   |
| 178 | zcountvres        | String.valueOf(zcountires)                                                      | String.valueOf(zcountires)                                                                                                          |
| 180 | zcounticon        | 0                                                                               | 0                                                                                                                                   |
| 185 | zcountvcon        | String.valueOf(zcounticon)                                                      | String.valueOf(zcounticon)                                                                                                          |
| 187 | zcountihis        | 0                                                                               | 0                                                                                                                                   |
| 192 | zcountvhis        | String.valueOf(zcountihis)                                                      | String.valueOf(zcountihis)                                                                                                          |
| 194 | zcountiidi        | 0                                                                               | 0                                                                                                                                   |
| 199 | zcountvidi        | String.valueOf(zcountiidi)                                                      | String.valueOf(zcountiidi)                                                                                                          |
| 201 | zcountiexp        | 0                                                                               | 0                                                                                                                                   |
| 206 | zcountvexp        | String.valueOf(zcountiexp)                                                      | String.valueOf(zcountiexp)                                                                                                          |
| 208 | zcounticer        | 0                                                                               | 0                                                                                                                                   |
| 213 | zcountvcer        | String.valueOf(zcounticer)                                                      | String.valueOf(zcounticer)                                                                                                          |
| 261 | zvalormision      | ""                                                                              |                                                                                                                                     |
| 262 | zvalorsinonimos   | ""                                                                              |                                                                                                                                     |
| 263 | zvalorresumen     | ""                                                                              |                                                                                                                                     |
| 298 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 299 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 300 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 300 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 314 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 315 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 316 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 316 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 316 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 337 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 338 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 339 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 339 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 339 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 358 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 359 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 360 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 360 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 360 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 378 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 379 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 380 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 380 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 380 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 397 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 398 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 399 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 399 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 399 | zposicion         | 0                                                                               | 0                                                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 147 | m4:startpage | m4task=SSE_JOB                                                                                                                                          |
| 147 | m4:beginjob  |                                                                                                                                                         |
| 148 | m4:datadef   | m4o=SSE_JOB; m4name=SSE_JOB                                                                                                                             |
| 149 | m4:exec      | m4method=SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                                                            |
| 149 | m4:param     | name=JOB_ARG; value=zobjtabla.m4paramvalor("zSJOB")                                                                                                     |
| 150 | m4:outputdef | m4alias=SSE_JOB                                                                                                                                         |
| 150 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}            |
| 151 | m4:outputdef | m4alias=SSE_JOB_DUTY                                                                                                                                    |
| 151 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 152 | m4:outputdef | m4alias=SSE_JOB_COMPETENCY                                                                                                                              |
| 152 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 153 | m4:outputdef | m4alias=SSE_JOB_ACAD_BACK                                                                                                                               |
| 153 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 154 | m4:outputdef | m4alias=SSE_JOB_LANGUAGE                                                                                                                                |
| 154 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 155 | m4:outputdef | m4alias=SSE_JOB_PREV_JOBS                                                                                                                               |
| 155 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 156 | m4:outputdef | m4alias=SSE_JOB_CERT_LICEN                                                                                                                              |
| 156 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 157 | m4:endjob    |                                                                                                                                                         |
| 158 | m4:move      |                                                                                                                                                         |
| 158 | m4:param     | name=SSE_JOB; value=SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                               |
| 159 | m4:move      |                                                                                                                                                         |
| 159 | m4:param     | name=SSE_JOB; value=SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                          |
| 160 | m4:move      |                                                                                                                                                         |
| 160 | m4:param     | name=SSE_JOB; value=SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 161 | m4:move      |                                                                                                                                                         |
| 161 | m4:param     | name=SSE_JOB; value=SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 162 | m4:move      |                                                                                                                                                         |
| 162 | m4:param     | name=SSE_JOB; value=SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                      |
| 163 | m4:move      |                                                                                                                                                         |
| 163 | m4:param     | name=SSE_JOB; value=SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 164 | m4:move      |                                                                                                                                                         |
| 164 | m4:param     | name=SSE_JOB; value=SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 216 | m4:item      | m4varname=zDescJob; m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}; htmlsafe=true                                                          |
| 219 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}; htmlsafe=true                                                                                |
| 238 | m4:label     | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}; htmlsafe=true                                                                              |
| 249 | m4:label     | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}; htmlsafe=true                                                                              |
| 265 | m4:item      | var=; item=STD_JOB_DESCR; htmlsafe=true; outputdef=SSE_JOB                                                                                              |
| 266 | m4:item      | var=; item=SCO_NM_OTHERS; htmlsafe=true; outputdef=SSE_JOB                                                                                              |
| 267 | m4:item      | var=; item=STD_SUMMARY; htmlsafe=true; outputdef=SSE_JOB                                                                                                |
| 271 | m4:label     | item=STD_JOB_DESCR; outputdef=SSE_JOB                                                                                                                   |
| 272 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}; htmlsafe=true                                                                                 |
| 275 | m4:label     | item=SCO_NM_OTHERS; outputdef=SSE_JOB                                                                                                                   |
| 276 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_NM_OTHERS"}; htmlsafe=true                                                                                 |
| 279 | m4:label     | item=STD_SUMMARY; outputdef=SSE_JOB                                                                                                                     |
| 280 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_SUMMARY"}; htmlsafe=true                                                                                   |
| 287 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}; htmlsafe=true                                                                                 |
| 288 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}; htmlsafe=true                                                                                 |
| 301 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountires).intValue()-1).toString()                                                                                 |
| 303 | m4:item      | m4name=SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}; htmlsafe=true                                                 |
| 317 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounticon).intValue()-1).toString()                                                                                 |
| 320 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LEVEL"}; jsafe=true; htmlsafe=true                        |
| 320 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                  |
| 321 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}; htmlsafe=true                                     |
| 322 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}; htmlsafe=true                                      |
| 340 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountihis).intValue()-1).toString()                                                                                 |
| 343 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true                                    |
| 344 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}; htmlsafe=true                                      |
| 345 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}; htmlsafe=true                                     |
| 361 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiidi).intValue()-1).toString()                                                                                 |
| 364 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                      |
| 365 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}; htmlsafe=true                                  |
| 366 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                    |
| 367 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}; htmlsafe=true                                  |
| 381 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiexp).intValue()-1).toString()                                                                                 |
| 384 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 385 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}; htmlsafe=true                                    |
| 385 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true                                  |
| 400 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounticer).intValue()-1).toString()                                                                                 |
| 403 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"}; htmlsafe=true                        |
| 404 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}; htmlsafe=true                               |
| 405 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                   |
| 415 | m4:endpage   |                                                                                                                                                         |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 169 | getCountInClient | znodo1,zsubsesion,znodo1 |
| 176 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 183 | getCountInClient | znodo3,zsubsesion,znodo3 |
| 190 | getCountInClient | znodo4,zsubsesion,znodo4 |
| 197 | getCountInClient | znodo5,zsubsesion,znodo5 |
| 204 | getCountInClient | znodo6,zsubsesion,znodo6 |
| 211 | getCountInClient | znodo7,zsubsesion,znodo7 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 15  | formacion | extd,lev   |

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 27  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){zVis = "1";}                                                                                |
| 28  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                            |
| 29  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                    |
| 34  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 214 | if (zcountijob &gt; 0) {                                                                                                                   |
| 222 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 228 | &lt;%}else{%&gt;                                                                                                                           |
| 231 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 234 | &lt;%if (zDescJob.equals("")){%&gt;                                                                                                        |
| 236 | &lt;%}else{                                                                                                                                |
| 241 | &lt;%}else{%&gt;                                                                                                                           |
| 245 | &lt;%if (zDescJob.equals("")){%&gt;                                                                                                        |
| 247 | &lt;%}else{%&gt;                                                                                                                           |
| 269 | &lt;%if (zvalormision != "" &amp;&amp; zvalormision != null &amp;&amp; zvalormision != " ") {%&gt;                                         |
| 274 | &lt;%if (zvalorsinonimos != "" &amp;&amp; zvalorsinonimos != null &amp;&amp; zvalorsinonimos != " ") {%&gt;                                |
| 278 | &lt;%if (zvalorresumen != "" &amp;&amp; zvalorresumen != null &amp;&amp; zvalorresumen != " ") {%&gt;                                      |
| 292 | &lt;%}else{%&gt;                                                                                                                           |
| 294 | &lt;%}if (zcountires &gt; 0) {%&gt;                                                                                                        |
| 306 | &lt;%}if (zcounticon &gt; 0) {%&gt;                                                                                                        |
| 329 | &lt;%}if (zcountihis &gt; 0) {%&gt;                                                                                                        |
| 349 | &lt;%}if (zcountiidi &gt; 0) {%&gt;                                                                                                        |
| 371 | &lt;%}if (zcountiexp &gt; 0) {%&gt;                                                                                                        |
| 389 | &lt;%}if (zcounticer &gt; 0) {%&gt;                                                                                                        |
| 410 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 58  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                              |
| 60  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                 |
| 63  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 64  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[" + zregistroinicial + "]";                                                |
| 65  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                         |
| 66  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                      |
| 67  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                 |
| 69  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 70  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                |
| 71  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                         |
| 72  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                      |
| 73  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                 |
| 75  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 76  | expresión de cálculo/transformación: String zmove3 = znodo3 + "[" + zregistroinicial + "]";                                                |
| 77  | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                         |
| 78  | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                      |
| 79  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                 |
| 81  | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 82  | expresión de cálculo/transformación: String zmove4 = znodo4 + "[" + zregistroinicial + "]";                                                |
| 83  | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                         |
| 84  | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                      |
| 85  | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";                 |
| 87  | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 88  | expresión de cálculo/transformación: String zmove5 = znodo5 + "[" + zregistroinicial + "]";                                                |
| 89  | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                                         |
| 90  | expresión de cálculo/transformación: String zraiz5 = zsubsesion + "!" + znodo5 + ".";                                                      |
| 91  | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";                 |
| 93  | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 94  | expresión de cálculo/transformación: String zmove6 = znodo6 + "[" + zregistroinicial + "]";                                                |
| 95  | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                                         |
| 96  | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                      |
| 97  | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";                 |
| 99  | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 100 | expresión de cálculo/transformación: String zmove7 = znodo6 + "[" + zregistroinicial + "]";                                                |
| 101 | expresión de cálculo/transformación: String zlectura7 = zsubsesion + "!" + znodo7;                                                         |
| 102 | expresión de cálculo/transformación: String zraiz7 = zsubsesion + "!" + znodo7 + ".";                                                      |
| 103 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";                 |
| 107 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";                                        |
| 111 | expresión de cálculo/transformación: String zpuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE";                       |
| 112 | expresión de cálculo/transformación: String znombrepuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE";                  |
| 113 | expresión de cálculo/transformación: String zmision = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR";                         |
| 114 | expresión de cálculo/transformación: String zresumen = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_SUMMARY";                          |
| 115 | expresión de cálculo/transformación: String zsinonimos = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_NM_OTHERS";                      |
| 116 | expresión de cálculo/transformación: String zdescjobdoc = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC";                  |
| 118 | expresión de cálculo/transformación: String zmovilidadnac = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC";                   |
| 119 | expresión de cálculo/transformación: String zmovilidadint = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT";                   |
| 121 | expresión de cálculo/transformación: String zresponsabilidad = zcomun2 + "SCO_NM_DUTY";                                                    |
| 123 | expresión de cálculo/transformación: String zconocimiento = zcomun3 + "SCO_NM_EXTD_KN";                                                    |
| 124 | expresión de cálculo/transformación: String znivel = zcomun3 + "SCO_MEANING";                                                              |
| 125 | expresión de cálculo/transformación: String zpeso = zcomun3 + "SCO_WEIGHT";                                                                |
| 126 | expresión de cálculo/transformación: String zextd = zcomun3 + "SCO_ID_EXTD_KN";                                                            |
| 127 | expresión de cálculo/transformación: String zlevel = zcomun3 + "SCO_ID_LEVEL";                                                             |
| 129 | expresión de cálculo/transformación: String ztipoformacion = zcomun4 + "STD_N_EDU_TYPE";                                                   |
| 130 | expresión de cálculo/transformación: String zespecialidad = zcomun4 + "STD_N_EDU_SP";                                                      |
| 131 | expresión de cálculo/transformación: String ztitulacion = zcomun4 + "STD_N_DIPLOMA";                                                       |
| 133 | expresión de cálculo/transformación: String zidioma = zcomun5 + "STD_N_LANGUAGE";                                                          |
| 134 | expresión de cálculo/transformación: String znivelhabla = zcomun5 + "STD_N_LANG_LEVEL_1";                                                  |
| 135 | expresión de cálculo/transformación: String znivellee = zcomun5 + "STD_N_LANG_LEVEL";                                                      |
| 136 | expresión de cálculo/transformación: String znivelescribe = zcomun5 + "STD_N_LANG_LEVEL_2";                                                |
| 138 | expresión de cálculo/transformación: String zpuestoprevio = zcomun6 + "STD_N_JOB_CODE";                                                    |
| 139 | expresión de cálculo/transformación: String zperiodo = zcomun6 + "SCO_MIN_PERIOD";                                                         |
| 140 | expresión de cálculo/transformación: String zunidadtiempo = zcomun6 + "SCO_NM_TIME_UNIT";                                                  |
| 142 | expresión de cálculo/transformación: String zcertificado = zcomun7 + "STD_N_CERTIFICATION_TYPE";                                           |
| 143 | expresión de cálculo/transformación: String zentidad = zcomun7 + "SCO_N_ISSUE_ENTIT";                                                      |
| 144 | expresión de cálculo/transformación: String zpais = zcomun7 + "STD_N_COUNTRY";                                                             |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 11  | /mss_g3/mss_g3_trans.jsp                              |
| 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 37  | ../../sse_generico/espanol/generico_links.jsp         |
| 411 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 13  | /library/m4doc_include.js                                       |
| 224 | /iconos/noname_puesto_181_125.gif                               |
| 233 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31       |
| 238 | javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)             |
| 249 | javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)             |
| 320 | javascript:formacion(                                           |
| 325 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31 |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                         |
| 11  | /mss_g3/mss_g3_trans.jsp                                        |
| 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              |
| 37  | ../../sse_generico/espanol/generico_links.jsp                   |
| 411 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                               |
| BASE   | 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 411 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 13  | /library/m4doc_include.js                                       | contextual | [library/m4doc_include.js](../../transversal/dependencias/library--m4doc_include.md)             |
| BASE   | 233 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31       | ausente    | P06                                                                                              |
| BASE   | 238 | javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)             | dinámica   | P06                                                                                              |
| BASE   | 249 | javascript:m4opendocument_tech(&lt;%=zDescJob%&gt;)             | dinámica   | P06                                                                                              |
| BASE   | 320 | javascript:formacion(                                           | dinámica   | P06                                                                                              |
| BASE   | 325 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31 | ausente    | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                         | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                                        | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                               |
| BASE   | 36  | ../../mss_generico/espanol/mssgenerico_menusup.jsp              | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 411 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp           | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p8_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
