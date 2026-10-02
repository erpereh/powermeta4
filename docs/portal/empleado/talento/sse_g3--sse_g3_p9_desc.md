# Descripción del puesto

Identificador: `sse_g3/sse_g3_p9_desc.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto                                              | Ámbito | Diccionario                                                                                  |
| ------------- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | COLL   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | CYC    | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | IBER   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | BASE   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p9_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p9_desc.jsp) | `54b7c1408cd12375ad4b4879736743c161a03efdf911e8e34ec161823bd726e3` |    423 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p9_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p9_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                 |
| --- | ---------------------------------------------------------------------------------------- |
| 7   | Descripción del puesto                                                                   |
| 244 | Consulta todos los detalles acerca de los puestos del plan de carrera. Plan de carrera " |
| 261 | Misión                                                                                   |
| 262 | Movilidad nacional                                                                       |
| 263 | Movilidad internacional                                                                  |
| 275 | Responsabilidades                                                                        |
| 288 | Conocimientos                                                                            |
| 289 | Nivel                                                                                    |
| 290 | Peso                                                                                     |
| 299 | ',' ');" title="Formación disponible"&gt;                                                |
| 319 | Formación                                                                                |
| 320 | Especialidad                                                                             |
| 321 | Titulación                                                                               |
| 339 | Idioma                                                                                   |
| 340 | Nivel oral                                                                               |
| 341 | Nivel lectura                                                                            |
| 342 | Nivel escritura                                                                          |
| 361 | Puestos previos requeridos                                                               |
| 362 | Período mínimo                                                                           |
| 379 | Certificados y licencias                                                                 |
| 380 | Entidad emisora                                                                          |
| 381 | País emisor                                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 243 | img     | src=/iconos/noname_puesto_144_100.gif; width=100; height=100; alt=Puesto de trabajo                                                                                                                      |
| 244 | a       | class=fuentedescripcion                                                                                                                                                                                  |
| 245 | a       | class=enlacefuncional; title=Plan de carrera; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=30                                                                          |
| 247 | a       | class=enlacefuncional; tabindex=2; title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                             |
| 247 | a       | href=javascript:m4opendocument_tech('&lt;%=zDescJob%&gt;')                                                                                                                                               |
| 301 | a       | href=javascript:formacion('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                |
| 310 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc4.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                              |
| 311 | input   | type=hidden; id=zextd; name=zextd                                                                                                                                                                        |
| 312 | input   | type=hidden; id=zlevel; name=zlevel                                                                                                                                                                      |
| 313 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                                                    |
| 314 | input   | type=hidden; id=znivel; name=znivel                                                                                                                                                                      |
| 399 | a       | title=Volver a Datos Profesionales del Empleado; href=javascript:volver_prof();; tabindex=6                                                                                                              |
| 399 | img     | alt=Volver a Datos Profesionales del Empleado; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 401 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                                     |
| 402 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                                           |
| 403 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                                    |
| 408 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | empleado        | getParameter(request,"empleado") |
| 13  | periodo         | getParameter(request,"periodo")  |
| 14  | zVis            | getParameter(request,"zVis")     |

| L   | Variable          | Expresión fuente                                                                | Resolución estática parcial                                                                                                         |
| --- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 12  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                |
| 13  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                 |
| 14  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                    |
| 43  | estado            | zobjtabla.m4paramvalor("estado")                                                | zobjtabla.m4paramvalor("estado")                                                                                                    |
| 44  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                              | zobjtabla.m4paramvalor("zinicios")                                                                                                  |
| 45  | zjob              | zobjtabla.m4paramvalor("zSJOB")                                                 | zobjtabla.m4paramvalor("zSJOB")                                                                                                     |
| 56  | zsubsesion        | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 57  | zmeta4object      | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 58  | znodo             | "SSE_JOB_PRINCIPAL"                                                             | SSE_JOB_PRINCIPAL                                                                                                                   |
| 59  | znodo1            | "SSE_JOB"                                                                       | SSE_JOB                                                                                                                             |
| 60  | znodo2            | "SSE_JOB_DUTY"                                                                  | SSE_JOB_DUTY                                                                                                                        |
| 61  | znodo3            | "SSE_JOB_COMPETENCY"                                                            | SSE_JOB_COMPETENCY                                                                                                                  |
| 62  | znodo4            | "SSE_JOB_ACAD_BACK"                                                             | SSE_JOB_ACAD_BACK                                                                                                                   |
| 63  | znodo5            | "SSE_JOB_LANGUAGE"                                                              | SSE_JOB_LANGUAGE                                                                                                                    |
| 64  | znodo6            | "SSE_JOB_PREV_JOBS"                                                             | SSE_JOB_PREV_JOBS                                                                                                                   |
| 65  | znodo7            | "SSE_JOB_CERT_LICEN"                                                            | SSE_JOB_CERT_LICEN                                                                                                                  |
| 69  | zventanas         | ""                                                                              |                                                                                                                                     |
| 79  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                |
| 81  | zventana          | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                               |
| 82  | zregistrofinal    | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                  |
| 85  | zoutputdef1       | zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}            |
| 86  | zmove1            | znodo1 + "[" + zregistroinicial + "]"                                           | SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                               |
| 87  | zlectura1         | zsubsesion + "!" + znodo1                                                       | SSE_JOB{"!"}SSE_JOB                                                                                                                 |
| 88  | zraiz1            | zsubsesion + "!" + znodo1 + "."                                                 | SSE_JOB{"!"}SSE_JOB{"."}                                                                                                            |
| 89  | zcomun1           | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{"[&amp;VAR.m4lix]"}{"."}                                                                            |
| 91  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 92  | zmove2            | znodo2 + "[" + zregistroinicial + "]"                                           | SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                          |
| 93  | zlectura2         | zsubsesion + "!" + znodo2                                                       | SSE_JOB{"!"}SSE_JOB_DUTY                                                                                                            |
| 94  | zraiz2            | zsubsesion + "!" + znodo2 + "."                                                 | SSE_JOB{"!"}SSE_JOB_DUTY{"."}                                                                                                       |
| 95  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}                                                                  |
| 97  | zoutputdef3       | zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 98  | zmove3            | znodo3 + "[" + zregistroinicial + "]"                                           | SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 99  | zlectura3         | zsubsesion + "!" + znodo3                                                       | SSE_JOB{"!"}SSE_JOB_COMPETENCY                                                                                                      |
| 100 | zraiz3            | zsubsesion + "!" + znodo3 + "."                                                 | SSE_JOB{"!"}SSE_JOB_COMPETENCY{"."}                                                                                                 |
| 101 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 103 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 104 | zmove4            | znodo4 + "[" + zregistroinicial + "]"                                           | SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 105 | zlectura4         | zsubsesion + "!" + znodo4                                                       | SSE_JOB{"!"}SSE_JOB_ACAD_BACK                                                                                                       |
| 106 | zraiz4            | zsubsesion + "!" + znodo4 + "."                                                 | SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"."}                                                                                                  |
| 107 | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 109 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 110 | zmove5            | znodo5 + "[" + zregistroinicial + "]"                                           | SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                      |
| 111 | zlectura5         | zsubsesion + "!" + znodo5                                                       | SSE_JOB{"!"}SSE_JOB_LANGUAGE                                                                                                        |
| 112 | zraiz5            | zsubsesion + "!" + znodo5 + "."                                                 | SSE_JOB{"!"}SSE_JOB_LANGUAGE{"."}                                                                                                   |
| 113 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 115 | zoutputdef6       | zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 116 | zmove6            | znodo6 + "[" + zregistroinicial + "]"                                           | SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 117 | zlectura6         | zsubsesion + "!" + znodo6                                                       | SSE_JOB{"!"}SSE_JOB_PREV_JOBS                                                                                                       |
| 118 | zraiz6            | zsubsesion + "!" + znodo6 + "."                                                 | SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"."}                                                                                                  |
| 119 | zcomun6           | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 121 | zoutputdef7       | zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 122 | zmove7            | znodo6 + "[" + zregistroinicial + "]"                                           | SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 123 | zlectura7         | zsubsesion + "!" + znodo7                                                       | SSE_JOB{"!"}SSE_JOB_CERT_LICEN                                                                                                      |
| 124 | zraiz7            | zsubsesion + "!" + znodo7 + "."                                                 | SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"."}                                                                                                 |
| 125 | zcomun7           | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."             | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 129 | zmetodocarga      | zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA"                                         | SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                                                 |
| 133 | zpuesto           | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE"                   | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_ID_JOB_CODE"}                                                                                 |
| 134 | znombrepuesto     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE"                    | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}                                                                                  |
| 135 | zmision           | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}                                                                                   |
| 136 | zmovilidadnac     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}                                                                                   |
| 137 | zmovilidadint     | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT"                     | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}                                                                                   |
| 138 | zdescjobdoc       | znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC"                  | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}                                                                                |
| 140 | zresponsabilidad  | zcomun2 + "SCO_NM_DUTY"                                                         | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}                                                   |
| 142 | zconocimiento     | zcomun3 + "SCO_NM_EXTD_KN"                                                      | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                                    |
| 143 | znivel            | zcomun3 + "SCO_MEANING"                                                         | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}                                       |
| 144 | zpeso             | zcomun3 + "SCO_WEIGHT"                                                          | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}                                        |
| 145 | zextd             | zcomun3 + "SCO_ID_EXTD_KN"                                                      | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_EXTD_KN"}                                    |
| 146 | zlevel            | zcomun3 + "SCO_ID_LEVEL"                                                        | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LEVEL"}                                      |
| 148 | ztipoformacion    | zcomun4 + "STD_N_EDU_TYPE"                                                      | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}                                      |
| 149 | zespecialidad     | zcomun4 + "STD_N_EDU_SP"                                                        | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}                                        |
| 150 | ztitulacion       | zcomun4 + "STD_N_DIPLOMA"                                                       | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}                                       |
| 152 | zidioma           | zcomun5 + "STD_N_LANGUAGE"                                                      | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                                        |
| 153 | znivelhabla       | zcomun5 + "STD_N_LANG_LEVEL_1"                                                  | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}                                    |
| 154 | znivellee         | zcomun5 + "STD_N_LANG_LEVEL"                                                    | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                                      |
| 155 | znivelescribe     | zcomun5 + "STD_N_LANG_LEVEL_2"                                                  | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}                                    |
| 157 | zpuestoprevio     | zcomun6 + "STD_N_JOB_CODE"                                                      | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 158 | zperiodo          | zcomun6 + "SCO_MIN_PERIOD"                                                      | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}                                      |
| 159 | zunidadtiempo     | zcomun6 + "SCO_NM_TIME_UNIT"                                                    | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                    |
| 161 | zcertificado      | zcomun7 + "STD_N_CERTIFICATION_TYPE"                                            | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"}                          |
| 162 | zentidad          | zcomun7 + "SCO_N_ISSUE_ENTIT"                                                   | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}                                 |
| 163 | zpais             | zcomun7 + "STD_N_COUNTRY"                                                       | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                     |
| 185 | zcountijob        | 0                                                                               | 0                                                                                                                                   |
| 190 | zcountvjob        | String.valueOf(zcountijob)                                                      | String.valueOf(zcountijob)                                                                                                          |
| 192 | zcountires        | 0                                                                               | 0                                                                                                                                   |
| 197 | zcountvres        | String.valueOf(zcountires)                                                      | String.valueOf(zcountires)                                                                                                          |
| 199 | zcounticon        | 0                                                                               | 0                                                                                                                                   |
| 204 | zcountvcon        | String.valueOf(zcounticon)                                                      | String.valueOf(zcounticon)                                                                                                          |
| 206 | zcountihis        | 0                                                                               | 0                                                                                                                                   |
| 211 | zcountvhis        | String.valueOf(zcountihis)                                                      | String.valueOf(zcountihis)                                                                                                          |
| 213 | zcountiidi        | 0                                                                               | 0                                                                                                                                   |
| 218 | zcountvidi        | String.valueOf(zcountiidi)                                                      | String.valueOf(zcountiidi)                                                                                                          |
| 220 | zcountiexp        | 0                                                                               | 0                                                                                                                                   |
| 225 | zcountvexp        | String.valueOf(zcountiexp)                                                      | String.valueOf(zcountiexp)                                                                                                          |
| 227 | zcounticer        | 0                                                                               | 0                                                                                                                                   |
| 232 | zcountvcer        | String.valueOf(zcounticer)                                                      | String.valueOf(zcounticer)                                                                                                          |
| 277 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 278 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 279 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 279 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 293 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 294 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 295 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 295 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 295 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 324 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 325 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 326 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 326 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 326 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 345 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 346 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 347 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 347 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 347 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 365 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 366 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 367 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 367 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 367 | zposicion         | 0                                                                               | 0                                                                                                                                   |
| 384 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                    |
| 385 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                      |
| 386 | zposicions        | "0"                                                                             | 0                                                                                                                                   |
| 386 | zcontrol          | 0                                                                               | 0                                                                                                                                   |
| 386 | zposicion         | 0                                                                               | 0                                                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 166 | m4:startpage | m4task=SSE_JOB                                                                                                                                          |
| 166 | m4:beginjob  |                                                                                                                                                         |
| 167 | m4:datadef   | m4o=SSE_JOB; m4name=SSE_JOB                                                                                                                             |
| 168 | m4:exec      | m4method=SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                                                            |
| 168 | m4:param     | name=JOB_ARG; value=zobjtabla.m4paramvalor("zSJOB")                                                                                                     |
| 169 | m4:outputdef | m4alias=SSE_JOB                                                                                                                                         |
| 169 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}            |
| 170 | m4:outputdef | m4alias=SSE_JOB_DUTY                                                                                                                                    |
| 170 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 171 | m4:outputdef | m4alias=SSE_JOB_COMPETENCY                                                                                                                              |
| 171 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 172 | m4:outputdef | m4alias=SSE_JOB_ACAD_BACK                                                                                                                               |
| 172 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 173 | m4:outputdef | m4alias=SSE_JOB_LANGUAGE                                                                                                                                |
| 173 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 174 | m4:outputdef | m4alias=SSE_JOB_PREV_JOBS                                                                                                                               |
| 174 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 175 | m4:outputdef | m4alias=SSE_JOB_CERT_LICEN                                                                                                                              |
| 175 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 176 | m4:endjob    |                                                                                                                                                         |
| 177 | m4:move      |                                                                                                                                                         |
| 177 | m4:param     | name=SSE_JOB; value=SSE_JOB{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                               |
| 178 | m4:move      |                                                                                                                                                         |
| 178 | m4:param     | name=SSE_JOB; value=SSE_JOB_DUTY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                          |
| 179 | m4:move      |                                                                                                                                                         |
| 179 | m4:param     | name=SSE_JOB; value=SSE_JOB_COMPETENCY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 180 | m4:move      |                                                                                                                                                         |
| 180 | m4:param     | name=SSE_JOB; value=SSE_JOB_ACAD_BACK{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 181 | m4:move      |                                                                                                                                                         |
| 181 | m4:param     | name=SSE_JOB; value=SSE_JOB_LANGUAGE{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                      |
| 182 | m4:move      |                                                                                                                                                         |
| 182 | m4:param     | name=SSE_JOB; value=SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 183 | m4:move      |                                                                                                                                                         |
| 183 | m4:param     | name=SSE_JOB; value=SSE_JOB_PREV_JOBS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                     |
| 236 | m4:item      | m4varname=zDescJob; m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}; htmlsafe=true                                                          |
| 240 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}; htmlsafe=true                                                                                |
| 247 | m4:label     | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".SCO_JOB_DESC_DOC"}; htmlsafe=true                                                                              |
| 266 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}; htmlsafe=true                                                                                 |
| 267 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}; htmlsafe=true                                                                                 |
| 268 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}; htmlsafe=true                                                                                 |
| 280 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountires).intValue()-1).toString()                                                                                 |
| 282 | m4:item      | m4name=SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}; htmlsafe=true                                                 |
| 296 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounticon).intValue()-1).toString()                                                                                 |
| 301 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LEVEL"}; jsafe=true; htmlsafe=true                        |
| 301 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                  |
| 303 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                                  |
| 306 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}; htmlsafe=true                                     |
| 307 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}; htmlsafe=true                                      |
| 327 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountihis).intValue()-1).toString()                                                                                 |
| 330 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true                                    |
| 331 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}; htmlsafe=true                                      |
| 332 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}; htmlsafe=true                                     |
| 348 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiidi).intValue()-1).toString()                                                                                 |
| 351 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true                                      |
| 352 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}; htmlsafe=true                                  |
| 353 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true                                    |
| 354 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}; htmlsafe=true                                  |
| 368 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountiexp).intValue()-1).toString()                                                                                 |
| 371 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 372 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}; htmlsafe=true                                    |
| 372 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true                                  |
| 387 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounticer).intValue()-1).toString()                                                                                 |
| 390 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"}; htmlsafe=true                        |
| 391 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}; htmlsafe=true                               |
| 392 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                   |
| 421 | m4:endpage   |                                                                                                                                                         |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 188 | getCountInClient | znodo1,zsubsesion,znodo1 |
| 195 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 202 | getCountInClient | znodo3,zsubsesion,znodo3 |
| 209 | getCountInClient | znodo4,zsubsesion,znodo4 |
| 216 | getCountInClient | znodo5,zsubsesion,znodo5 |
| 223 | getCountInClient | znodo6,zsubsesion,znodo6 |
| 230 | getCountInClient | znodo7,zsubsesion,znodo7 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos |
| --- | ----------- | ---------- |
| 31  | volver_prof |            |
| 36  | formacion   | extd,lev   |

| L   | Condición / acción / mensaje literal                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                              |
| 19  | if (zVis.equals("1")){%&gt;                                                                                                                  |
| 21  | &lt;%}else{%&gt;                                                                                                                             |
| 46  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                              |
| 47  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                      |
| 51  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                             |
| 70  | if (zVis.equals("1")){                                                                                                                       |
| 72  | }else{                                                                                                                                       |
| 233 | if (zcountijob &gt; 0) {                                                                                                                     |
| 235 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                             |
| 237 | &lt;%if (!zDescJob.equals("")) {zDescJob = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", zDescJob);}%&gt; |
| 246 | &lt;%if (!zDescJob.equals("")) {%&gt;                                                                                                        |
| 254 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                             |
| 256 | &lt;%}else{%&gt;                                                                                                                             |
| 271 | &lt;%}else{%&gt;                                                                                                                             |
| 273 | &lt;%}if (zcountires &gt; 0) {%&gt;                                                                                                          |
| 285 | &lt;%}if (zcounticon &gt; 0) {%&gt;                                                                                                          |
| 300 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                             |
| 302 | &lt;%}else{%&gt;                                                                                                                             |
| 316 | &lt;%}if (zcountihis &gt; 0) {%&gt;                                                                                                          |
| 336 | &lt;%}if (zcountiidi &gt; 0) {%&gt;                                                                                                          |
| 358 | &lt;%}if (zcountiexp &gt; 0) {%&gt;                                                                                                          |
| 376 | &lt;%}if (zcounticer &gt; 0) {%&gt;                                                                                                          |
| 398 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                            |
| 415 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                             |
| 80  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                |
| 82  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                   |
| 85  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 86  | expresión de cálculo/transformación: String zmove1 = znodo1 + "[" + zregistroinicial + "]";                                                  |
| 87  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                           |
| 88  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                        |
| 89  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                   |
| 91  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 92  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                  |
| 93  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                           |
| 94  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                        |
| 95  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                   |
| 97  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 98  | expresión de cálculo/transformación: String zmove3 = znodo3 + "[" + zregistroinicial + "]";                                                  |
| 99  | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                           |
| 100 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                        |
| 101 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                   |
| 103 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 104 | expresión de cálculo/transformación: String zmove4 = znodo4 + "[" + zregistroinicial + "]";                                                  |
| 105 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                           |
| 106 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                        |
| 107 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";                   |
| 109 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 110 | expresión de cálculo/transformación: String zmove5 = znodo5 + "[" + zregistroinicial + "]";                                                  |
| 111 | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                                           |
| 112 | expresión de cálculo/transformación: String zraiz5 = zsubsesion + "!" + znodo5 + ".";                                                        |
| 113 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";                   |
| 115 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 116 | expresión de cálculo/transformación: String zmove6 = znodo6 + "[" + zregistroinicial + "]";                                                  |
| 117 | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                                           |
| 118 | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                        |
| 119 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";                   |
| 121 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 122 | expresión de cálculo/transformación: String zmove7 = znodo6 + "[" + zregistroinicial + "]";                                                  |
| 123 | expresión de cálculo/transformación: String zlectura7 = zsubsesion + "!" + znodo7;                                                           |
| 124 | expresión de cálculo/transformación: String zraiz7 = zsubsesion + "!" + znodo7 + ".";                                                        |
| 125 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";                   |
| 129 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";                                          |
| 133 | expresión de cálculo/transformación: String zpuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_ID_JOB_CODE";                         |
| 134 | expresión de cálculo/transformación: String znombrepuesto = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_N_JOB_CODE";                    |
| 135 | expresión de cálculo/transformación: String zmision = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".STD_JOB_DESCR";                           |
| 136 | expresión de cálculo/transformación: String zmovilidadnac = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_NAC";                     |
| 137 | expresión de cálculo/transformación: String zmovilidadint = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".MOVILIDAD_INT";                     |
| 138 | expresión de cálculo/transformación: String zdescjobdoc = znodo1 + ":" + zsubsesion + "!" + znodo1 + ".SCO_JOB_DESC_DOC";                    |
| 140 | expresión de cálculo/transformación: String zresponsabilidad = zcomun2 + "SCO_NM_DUTY";                                                      |
| 142 | expresión de cálculo/transformación: String zconocimiento = zcomun3 + "SCO_NM_EXTD_KN";                                                      |
| 143 | expresión de cálculo/transformación: String znivel = zcomun3 + "SCO_MEANING";                                                                |
| 144 | expresión de cálculo/transformación: String zpeso = zcomun3 + "SCO_WEIGHT";                                                                  |
| 145 | expresión de cálculo/transformación: String zextd = zcomun3 + "SCO_ID_EXTD_KN";                                                              |
| 146 | expresión de cálculo/transformación: String zlevel = zcomun3 + "SCO_ID_LEVEL";                                                               |
| 148 | expresión de cálculo/transformación: String ztipoformacion = zcomun4 + "STD_N_EDU_TYPE";                                                     |
| 149 | expresión de cálculo/transformación: String zespecialidad = zcomun4 + "STD_N_EDU_SP";                                                        |
| 150 | expresión de cálculo/transformación: String ztitulacion = zcomun4 + "STD_N_DIPLOMA";                                                         |
| 152 | expresión de cálculo/transformación: String zidioma = zcomun5 + "STD_N_LANGUAGE";                                                            |
| 153 | expresión de cálculo/transformación: String znivelhabla = zcomun5 + "STD_N_LANG_LEVEL_1";                                                    |
| 154 | expresión de cálculo/transformación: String znivellee = zcomun5 + "STD_N_LANG_LEVEL";                                                        |
| 155 | expresión de cálculo/transformación: String znivelescribe = zcomun5 + "STD_N_LANG_LEVEL_2";                                                  |
| 157 | expresión de cálculo/transformación: String zpuestoprevio = zcomun6 + "STD_N_JOB_CODE";                                                      |
| 158 | expresión de cálculo/transformación: String zperiodo = zcomun6 + "SCO_MIN_PERIOD";                                                           |
| 159 | expresión de cálculo/transformación: String zunidadtiempo = zcomun6 + "SCO_NM_TIME_UNIT";                                                    |
| 161 | expresión de cálculo/transformación: String zcertificado = zcomun7 + "STD_N_CERTIFICATION_TYPE";                                             |
| 162 | expresión de cálculo/transformación: String zentidad = zcomun7 + "SCO_N_ISSUE_ENTIT";                                                        |
| 163 | expresión de cálculo/transformación: String zpais = zcomun7 + "STD_N_COUNTRY";                                                               |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 27  | ../../sse_generico/espanol/menu_ess.jsp            |
| 52  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 53  | ../../sse_generico/espanol/generico_links.jsp      |
| 416 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 20  | /css/estilo_sse.css                                             |
| 22  | /css/estilo_mss.css                                             |
| 26  | /libreria/funciones_sse.js                                      |
| 28  | /libreria/clase_val_entradas.js                                 |
| 29  | /library/m4doc_include.js                                       |
| 243 | /iconos/noname_puesto_144_100.gif                               |
| 245 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=30       |
| 247 | javascript:m4opendocument_tech(                                 |
| 301 | javascript:formacion(                                           |
| 310 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc4.jsp?estado=31 |
| 399 | javascript:volver_prof();                                       |
| 399 | /iconos/icono_entrar_ess_36_36.gif                              |
| 401 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp        |
| 408 | /iconos/cargando.gif                                            |
| 27  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 52  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 53  | ../../sse_generico/espanol/generico_links.jsp                   |
| 416 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 27  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 52  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 53  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 416 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 26  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 28  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 29  | /library/m4doc_include.js                                       | contextual | [library/m4doc_include.js](../../transversal/dependencias/library--m4doc_include.md)                      |
| BASE   | 245 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=30       | ausente    | P06                                                                                                       |
| BASE   | 247 | javascript:m4opendocument_tech(                                 | dinámica   | P06                                                                                                       |
| BASE   | 301 | javascript:formacion(                                           | dinámica   | P06                                                                                                       |
| BASE   | 310 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc4.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 399 | javascript:volver_prof();                                       | dinámica   | P06                                                                                                       |
| BASE   | 401 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp        | ausente    | P06                                                                                                       |
| BASE   | 27  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 52  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 53  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 416 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p9_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
