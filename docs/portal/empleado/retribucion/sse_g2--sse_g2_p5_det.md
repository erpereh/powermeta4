# Detalle del puesto

Identificador: `sse_g2/sse_g2_p5_det.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p5_det.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_det.jsp) | `e317c24fe8159d8b0df0dbb3d73bd2cbfd5f8f0021d0af6847449e8b2e83b1c3` |    293 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p5_det.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p5_det.jsp) | `e317c24fe8159d8b0df0dbb3d73bd2cbfd5f8f0021d0af6847449e8b2e83b1c3` |    293 |
| BASE / español    | [sse_g2/espanol/sse_g2_p5_det.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p5_det.jsp)                             | `e317c24fe8159d8b0df0dbb3d73bd2cbfd5f8f0021d0af6847449e8b2e83b1c3` |    293 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p5_det.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_det.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                           |
| --- | ---------------------------------------------------------------------------------- |
| 7   | Detalle del puesto                                                                 |
| 188 | Consulta todos los detalles acerca de tus puestos de trabajo. Historial de puestos |
| 194 | Misión                                                                             |
| 194 | Movilidad(nac/int)                                                                 |
| 195 | -                                                                                  |
| 201 | Responsabilidades                                                                  |
| 215 | Conocimientos                                                                      |
| 216 | Nivel                                                                              |
| 217 | Peso                                                                               |
| 230 | Formación                                                                          |
| 231 | Especialidad                                                                       |
| 232 | Titulación                                                                         |
| 245 | Idioma                                                                             |
| 246 | Nivel lectura                                                                      |
| 247 | Nivel escritura                                                                    |
| 248 | Nivel oral                                                                         |
| 262 | Puestos previos requeridos                                                         |
| 263 | Periodo mínimo                                                                     |
| 275 | Certificados y licencias                                                           |
| 276 | Entidad emisora                                                                    |
| 277 | País emisor                                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                            |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 187 | img     | src=/iconos/noname_puesto_144_100.gif; width=100; height=100; alt=Puesto de trabajo; title=Puesto de trabajo                         |
| 189 | a       | class=enlacefuncional; title=Historial de puestos; style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |
| 15  | id_job          | getParameter(request,"id_job")   |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                |
| --- | ---------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 13  | estado           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                         |
| 14  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                       |
| 15  | zjob             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job")                                         |
| 24  | zsubsesion       | "SSE_JOB"                                                               | SSE_JOB                                                                                                    |
| 25  | zmeta4object     | "SSE_JOB"                                                               | SSE_JOB                                                                                                    |
| 26  | znodo            | "SSE_JOB_PRINCIPAL"                                                     | SSE_JOB_PRINCIPAL                                                                                          |
| 27  | znodojob         | "SSE_JOB"                                                               | SSE_JOB                                                                                                    |
| 28  | znodores         | "SSE_JOB_DUTY"                                                          | SSE_JOB_DUTY                                                                                               |
| 29  | znodocon         | "SSE_JOB_COMPETENCY"                                                    | SSE_JOB_COMPETENCY                                                                                         |
| 30  | znodohis         | "SSE_JOB_ACAD_BACK"                                                     | SSE_JOB_ACAD_BACK                                                                                          |
| 31  | znodoidi         | "SSE_JOB_LANGUAGE"                                                      | SSE_JOB_LANGUAGE                                                                                           |
| 32  | znodoexp         | "SSE_JOB_PREV_JOBS"                                                     | SSE_JOB_PREV_JOBS                                                                                          |
| 33  | znodocer         | "SSE_JOB_CERT_LICEN"                                                    | SSE_JOB_CERT_LICEN                                                                                         |
| 37  | zventanas        | "20"                                                                    | 20                                                                                                         |
| 41  | zregistroinicial | Integer.valueOf(zinicios).intValue()                                    | Integer.valueOf(zinicios).intValue()                                                                       |
| 43  | zventana         | Integer.valueOf(zventanas).intValue()                                   | Integer.valueOf(zventanas).intValue()                                                                      |
| 44  | zregistrofinal   | zregistroinicial + zventana - 1                                         | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                         |
| 46  | zoutputdefjob    | zsubsesion + "!" + znodojob + "[*]"                                     | SSE_JOB{"!"}SSE_JOB{"[*]"}                                                                                 |
| 47  | zmovejob         | znodojob + ":" + znodojob + "[FIRST]"                                   | SSE_JOB{":"}SSE_JOB{"[FIRST]"}                                                                             |
| 48  | zcomunjob        | znodojob + ":" + zsubsesion + "!" + znodojob + "[&amp;VAR.m4lix]" + "." | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 50  | zoutputdefres    | zsubsesion + "!" + znodores + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_DUTY{"[*]"}                                                                            |
| 51  | zmoveres         | znodores + ":" + znodores + "[FIRST]"                                   | SSE_JOB_DUTY{":"}SSE_JOB_DUTY{"[FIRST]"}                                                                   |
| 52  | zcomunres        | znodores + ":" + zsubsesion + "!" + znodores + "[&amp;VAR.m4lix]" + "." | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}                                         |
| 54  | zoutputdefcon    | zsubsesion + "!" + znodocon + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[*]"}                                                                      |
| 55  | zmovecon         | znodocon + ":" + znodocon + "[FIRST]"                                   | SSE_JOB_COMPETENCY{":"}SSE_JOB_COMPETENCY{"[FIRST]"}                                                       |
| 56  | zcomuncon        | znodocon + ":" + zsubsesion + "!" + znodocon + "[&amp;VAR.m4lix]" + "." | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}                             |
| 58  | zoutputdefhis    | zsubsesion + "!" + znodohis + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[*]"}                                                                       |
| 59  | zmovehis         | znodohis + ":" + znodohis + "[FIRST]"                                   | SSE_JOB_ACAD_BACK{":"}SSE_JOB_ACAD_BACK{"[FIRST]"}                                                         |
| 60  | zcomunhis        | znodohis + ":" + zsubsesion + "!" + znodohis + "[&amp;VAR.m4lix]" + "." | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}                               |
| 62  | zoutputdefidi    | zsubsesion + "!" + znodoidi + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[*]"}                                                                        |
| 63  | zmoveidi         | znodoidi + ":" + znodoidi + "[FIRST]"                                   | SSE_JOB_LANGUAGE{":"}SSE_JOB_LANGUAGE{"[FIRST]"}                                                           |
| 64  | zcomunidi        | znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&amp;VAR.m4lix]" + "." | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}                                 |
| 66  | zoutputdefexp    | zsubsesion + "!" + znodoexp + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[*]"}                                                                       |
| 67  | zmoveexp         | znodoexp + ":" + znodoexp + "[FIRST]"                                   | SSE_JOB_PREV_JOBS{":"}SSE_JOB_PREV_JOBS{"[FIRST]"}                                                         |
| 68  | zcomunexp        | znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&amp;VAR.m4lix]" + "." | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                               |
| 70  | zoutputdefcer    | zsubsesion + "!" + znodocer + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[*]"}                                                                      |
| 71  | zmovecer         | znodocer + ":" + znodocer + "[FIRST]"                                   | SSE_JOB_CERT_LICEN{":"}SSE_JOB_CERT_LICEN{"[FIRST]"}                                                       |
| 72  | zcomuncer        | znodocer + ":" + zsubsesion + "!" + znodocer + "[&amp;VAR.m4lix]" + "." | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}                             |
| 76  | zmetodocarga     | zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA"                                 | SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                        |
| 80  | zpuesto          | znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_ID_JOB_CODE"       | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_ID_JOB_CODE"}                                                        |
| 81  | znombrepuesto    | znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_N_JOB_CODE"        | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}                                                         |
| 82  | zmision          | znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_JOB_DESCR"         | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}                                                          |
| 83  | zmovilidadnac    | znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_NAC"         | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}                                                          |
| 84  | zmovilidadint    | znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_INT"         | SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}                                                          |
| 86  | zresponsabilidad | zcomunres + "SCO_NM_DUTY"                                               | SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}                          |
| 88  | zconocimiento    | zcomuncon + "SCO_NM_EXTD_KN"                                            | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}           |
| 89  | znivel           | zcomuncon + "SCO_NM_LEVEL"                                              | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}             |
| 90  | zpeso            | zcomuncon + "SCO_WEIGHT"                                                | SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}               |
| 92  | ztipoformacion   | zcomunhis + "STD_N_EDU_TYPE"                                            | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}             |
| 93  | zespecialidad    | zcomunhis + "STD_N_EDU_SP"                                              | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}               |
| 94  | ztitulacion      | zcomunhis + "STD_N_DIPLOMA"                                             | SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}              |
| 96  | zidioma          | zcomunidi + "STD_N_LANGUAGE"                                            | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}               |
| 97  | znivelhabla      | zcomunidi + "STD_N_LANG_LEVEL_1"                                        | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}           |
| 98  | znivellee        | zcomunidi + "STD_N_LANG_LEVEL"                                          | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}             |
| 99  | znivelescribe    | zcomunidi + "STD_N_LANG_LEVEL_2"                                        | SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}           |
| 101 | zpuestoprevio    | zcomunexp + "STD_N_JOB_CODE"                                            | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}             |
| 102 | zperiodo         | zcomunexp + "SCO_MIN_PERIOD"                                            | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}             |
| 103 | zunidadtiempo    | zcomunexp + "SCO_NM_TIME_UNIT"                                          | SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}           |
| 105 | zcertificado     | zcomuncer + "STD_N_CERTIFICATION_TYPE"                                  | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"} |
| 106 | zentidad         | zcomuncer + "SCO_N_ISSUE_ENTIT"                                         | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}        |
| 107 | zpais            | zcomuncer + "STD_N_COUNTRY"                                             | SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}            |
| 128 | zcountijob       | 0                                                                       | 0                                                                                                          |
| 133 | zcountvjob       | String.valueOf(zcountijob)                                              | String.valueOf(zcountijob)                                                                                 |
| 134 | ztojob           | new Integer(new Integer(zcountvjob).intValue()-1).toString()            | new Integer(new Integer(zcountvjob).intValue()-1).toString()                                               |
| 136 | zcountires       | 0                                                                       | 0                                                                                                          |
| 141 | zcountvres       | String.valueOf(zcountires)                                              | String.valueOf(zcountires)                                                                                 |
| 142 | ztores           | new Integer(new Integer(zcountvres).intValue()-1).toString()            | new Integer(new Integer(zcountvres).intValue()-1).toString()                                               |
| 144 | zcounticon       | 0                                                                       | 0                                                                                                          |
| 149 | zcountvcon       | String.valueOf(zcounticon)                                              | String.valueOf(zcounticon)                                                                                 |
| 150 | ztocon           | new Integer(new Integer(zcountvcon).intValue()-1).toString()            | new Integer(new Integer(zcountvcon).intValue()-1).toString()                                               |
| 152 | zcountihis       | 0                                                                       | 0                                                                                                          |
| 157 | zcountvhis       | String.valueOf(zcountihis)                                              | String.valueOf(zcountihis)                                                                                 |
| 158 | ztohis           | new Integer(new Integer(zcountvhis).intValue()-1).toString()            | new Integer(new Integer(zcountvhis).intValue()-1).toString()                                               |
| 160 | zcountiidi       | 0                                                                       | 0                                                                                                          |
| 165 | zcountvidi       | String.valueOf(zcountiidi)                                              | String.valueOf(zcountiidi)                                                                                 |
| 166 | ztoidi           | new Integer(new Integer(zcountvidi).intValue()-1).toString()            | new Integer(new Integer(zcountvidi).intValue()-1).toString()                                               |
| 168 | zcountiexp       | 0                                                                       | 0                                                                                                          |
| 173 | zcountvexp       | String.valueOf(zcountiexp)                                              | String.valueOf(zcountiexp)                                                                                 |
| 174 | ztoexp           | new Integer(new Integer(zcountvexp).intValue()-1).toString()            | new Integer(new Integer(zcountvexp).intValue()-1).toString()                                               |
| 176 | zcounticer       | 0                                                                       | 0                                                                                                          |
| 181 | zcountvcer       | String.valueOf(zcounticer)                                              | String.valueOf(zcounticer)                                                                                 |
| 182 | ztocer           | new Integer(new Integer(zcountvcer).intValue()-1).toString()            | new Integer(new Integer(zcountvcer).intValue()-1).toString()                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                               |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 109 | m4:startpage | m4task=SSE_JOB                                                                                                                   |
| 109 | m4:beginjob  |                                                                                                                                  |
| 110 | m4:datadef   | m4o=SSE_JOB; m4name=SSE_JOB                                                                                                      |
| 111 | m4:exec      | m4method=SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                                     |
| 111 | m4:param     | name=JOB_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job")                                           |
| 112 | m4:outputdef | m4alias=SSE_JOB                                                                                                                  |
| 112 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB{"[*]"}                                                                                   |
| 113 | m4:outputdef | m4alias=SSE_JOB_DUTY                                                                                                             |
| 113 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_DUTY{"[*]"}                                                                              |
| 114 | m4:outputdef | m4alias=SSE_JOB_COMPETENCY                                                                                                       |
| 114 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[*]"}                                                                        |
| 115 | m4:outputdef | m4alias=SSE_JOB_ACAD_BACK                                                                                                        |
| 115 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[*]"}                                                                         |
| 116 | m4:outputdef | m4alias=SSE_JOB_LANGUAGE                                                                                                         |
| 116 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[*]"}                                                                          |
| 117 | m4:outputdef | m4alias=SSE_JOB_PREV_JOBS                                                                                                        |
| 117 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[*]"}                                                                         |
| 118 | m4:outputdef | m4alias=SSE_JOB_CERT_LICEN                                                                                                       |
| 118 | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[*]"}                                                                        |
| 119 | m4:endjob    |                                                                                                                                  |
| 120 | m4:move      |                                                                                                                                  |
| 120 | m4:param     | name=SSE_JOB; value=SSE_JOB{":"}SSE_JOB{"[FIRST]"}                                                                               |
| 121 | m4:move      |                                                                                                                                  |
| 121 | m4:param     | name=SSE_JOB; value=SSE_JOB_DUTY{":"}SSE_JOB_DUTY{"[FIRST]"}                                                                     |
| 122 | m4:move      |                                                                                                                                  |
| 122 | m4:param     | name=SSE_JOB; value=SSE_JOB_COMPETENCY{":"}SSE_JOB_COMPETENCY{"[FIRST]"}                                                         |
| 123 | m4:move      |                                                                                                                                  |
| 123 | m4:param     | name=SSE_JOB; value=SSE_JOB_ACAD_BACK{":"}SSE_JOB_ACAD_BACK{"[FIRST]"}                                                           |
| 124 | m4:move      |                                                                                                                                  |
| 124 | m4:param     | name=SSE_JOB; value=SSE_JOB_LANGUAGE{":"}SSE_JOB_LANGUAGE{"[FIRST]"}                                                             |
| 125 | m4:move      |                                                                                                                                  |
| 125 | m4:param     | name=SSE_JOB; value=SSE_JOB_PREV_JOBS{":"}SSE_JOB_PREV_JOBS{"[FIRST]"}                                                           |
| 126 | m4:move      |                                                                                                                                  |
| 126 | m4:param     | name=SSE_JOB; value=SSE_JOB_CERT_LICEN{":"}SSE_JOB_CERT_LICEN{"[FIRST]"}                                                         |
| 185 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_N_JOB_CODE"}; htmlsafe=true                                                         |
| 195 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".STD_JOB_DESCR"}; htmlsafe=true                                                          |
| 195 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_NAC"}; htmlsafe=true                                                          |
| 195 | m4:item      | m4name=SSE_JOB{":"}SSE_JOB{"!"}SSE_JOB{".MOVILIDAD_INT"}; htmlsafe=true                                                          |
| 205 | m4:loop      | from=0; to=new Integer(new Integer(zcountvres).intValue()-1).toString()                                                          |
| 206 | m4:item      | m4name=SSE_JOB_DUTY{":"}SSE_JOB{"!"}SSE_JOB_DUTY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DUTY"}; htmlsafe=true                          |
| 219 | m4:loop      | from=0; to=new Integer(new Integer(zcountvcon).intValue()-1).toString()                                                          |
| 221 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true           |
| 222 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true             |
| 223 | m4:item      | m4name=SSE_JOB_COMPETENCY{":"}SSE_JOB{"!"}SSE_JOB_COMPETENCY{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}; htmlsafe=true               |
| 234 | m4:loop      | from=0; to=new Integer(new Integer(zcountvhis).intValue()-1).toString()                                                          |
| 236 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true             |
| 237 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}; htmlsafe=true               |
| 238 | m4:item      | m4name=SSE_JOB_ACAD_BACK{":"}SSE_JOB{"!"}SSE_JOB_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}; htmlsafe=true              |
| 250 | m4:loop      | from=0; to=new Integer(new Integer(zcountvidi).intValue()-1).toString()                                                          |
| 252 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true               |
| 253 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true             |
| 254 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}; htmlsafe=true           |
| 255 | m4:item      | m4name=SSE_JOB_LANGUAGE{":"}SSE_JOB{"!"}SSE_JOB_LANGUAGE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}; htmlsafe=true           |
| 265 | m4:loop      | from=0; to=new Integer(new Integer(zcountvexp).intValue()-1).toString()                                                          |
| 267 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true             |
| 268 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_PERIOD"}; htmlsafe=true             |
| 268 | m4:item      | m4name=SSE_JOB_PREV_JOBS{":"}SSE_JOB{"!"}SSE_JOB_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true           |
| 279 | m4:loop      | from=0; to=new Integer(new Integer(zcountvcer).intValue()-1).toString()                                                          |
| 281 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"}; htmlsafe=true |
| 282 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}; htmlsafe=true        |
| 283 | m4:item      | m4name=SSE_JOB_CERT_LICEN{":"}SSE_JOB{"!"}SSE_JOB_CERT_LICEN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true            |
| 291 | m4:endpage   |                                                                                                                                  |

| L   | Operación        | Argumentos literales         |
| --- | ---------------- | ---------------------------- |
| 131 | getCountInClient | znodojob,zsubsesion,znodojob |
| 139 | getCountInClient | znodores,zsubsesion,znodores |
| 147 | getCountInClient | znodocon,zsubsesion,znodocon |
| 155 | getCountInClient | znodohis,zsubsesion,znodohis |
| 163 | getCountInClient | znodoidi,zsubsesion,znodoidi |
| 171 | getCountInClient | znodoexp,zsubsesion,znodoexp |
| 179 | getCountInClient | znodocer,zsubsesion,znodocer |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 16  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                  |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                          |
| 183 | if (zcountijob &gt; 0) {%&gt;                                                                                                    |
| 197 | &lt;%}else{%&gt;                                                                                                                 |
| 199 | &lt;%}if (zcountires &gt; 0) {%&gt;                                                                                              |
| 212 | &lt;%}if (zcounticon &gt; 0) {%&gt;                                                                                              |
| 227 | &lt;%}if (zcountihis &gt; 0) {%&gt;                                                                                              |
| 242 | &lt;%}if (zcountiidi &gt; 0) {%&gt;                                                                                              |
| 259 | &lt;%}if (zcountiexp &gt; 0) {%&gt;                                                                                              |
| 272 | &lt;%}if (zcounticer &gt; 0) {%&gt;                                                                                              |
| 42  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                    |
| 44  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                       |
| 46  | expresión de cálculo/transformación: String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";                                 |
| 47  | expresión de cálculo/transformación: String zmovejob = znodojob + ":" + znodojob + "[FIRST]";                                    |
| 48  | expresión de cálculo/transformación: String zcomunjob = znodojob + ":" + zsubsesion + "!" + znodojob + "[&amp;VAR.m4lix]" + "."; |
| 50  | expresión de cálculo/transformación: String zoutputdefres = zsubsesion + "!" + znodores + "[*]";                                 |
| 51  | expresión de cálculo/transformación: String zmoveres = znodores + ":" + znodores + "[FIRST]";                                    |
| 52  | expresión de cálculo/transformación: String zcomunres = znodores + ":" + zsubsesion + "!" + znodores + "[&amp;VAR.m4lix]" + "."; |
| 54  | expresión de cálculo/transformación: String zoutputdefcon = zsubsesion + "!" + znodocon + "[*]";                                 |
| 55  | expresión de cálculo/transformación: String zmovecon = znodocon + ":" + znodocon + "[FIRST]";                                    |
| 56  | expresión de cálculo/transformación: String zcomuncon = znodocon + ":" + zsubsesion + "!" + znodocon + "[&amp;VAR.m4lix]" + "."; |
| 58  | expresión de cálculo/transformación: String zoutputdefhis = zsubsesion + "!" + znodohis + "[*]";                                 |
| 59  | expresión de cálculo/transformación: String zmovehis = znodohis + ":" + znodohis + "[FIRST]";                                    |
| 60  | expresión de cálculo/transformación: String zcomunhis = znodohis + ":" + zsubsesion + "!" + znodohis + "[&amp;VAR.m4lix]" + "."; |
| 62  | expresión de cálculo/transformación: String zoutputdefidi = zsubsesion + "!" + znodoidi + "[*]";                                 |
| 63  | expresión de cálculo/transformación: String zmoveidi = znodoidi + ":" + znodoidi + "[FIRST]";                                    |
| 64  | expresión de cálculo/transformación: String zcomunidi = znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&amp;VAR.m4lix]" + "."; |
| 66  | expresión de cálculo/transformación: String zoutputdefexp = zsubsesion + "!" + znodoexp + "[*]";                                 |
| 67  | expresión de cálculo/transformación: String zmoveexp = znodoexp + ":" + znodoexp + "[FIRST]";                                    |
| 68  | expresión de cálculo/transformación: String zcomunexp = znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&amp;VAR.m4lix]" + "."; |
| 70  | expresión de cálculo/transformación: String zoutputdefcer = zsubsesion + "!" + znodocer + "[*]";                                 |
| 71  | expresión de cálculo/transformación: String zmovecer = znodocer + ":" + znodocer + "[FIRST]";                                    |
| 72  | expresión de cálculo/transformación: String zcomuncer = znodocer + ":" + zsubsesion + "!" + znodocer + "[&amp;VAR.m4lix]" + "."; |
| 76  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";                              |
| 80  | expresión de cálculo/transformación: String zpuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_ID_JOB_CODE";         |
| 81  | expresión de cálculo/transformación: String znombrepuesto = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_N_JOB_CODE";    |
| 82  | expresión de cálculo/transformación: String zmision = znodojob + ":" + zsubsesion + "!" + znodojob + ".STD_JOB_DESCR";           |
| 83  | expresión de cálculo/transformación: String zmovilidadnac = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_NAC";     |
| 84  | expresión de cálculo/transformación: String zmovilidadint = znodojob + ":" + zsubsesion + "!" + znodojob + ".MOVILIDAD_INT";     |
| 86  | expresión de cálculo/transformación: String zresponsabilidad = zcomunres + "SCO_NM_DUTY";                                        |
| 88  | expresión de cálculo/transformación: String zconocimiento = zcomuncon + "SCO_NM_EXTD_KN";                                        |
| 89  | expresión de cálculo/transformación: String znivel = zcomuncon + "SCO_NM_LEVEL";                                                 |
| 90  | expresión de cálculo/transformación: String zpeso = zcomuncon + "SCO_WEIGHT";                                                    |
| 92  | expresión de cálculo/transformación: String ztipoformacion = zcomunhis + "STD_N_EDU_TYPE";                                       |
| 93  | expresión de cálculo/transformación: String zespecialidad = zcomunhis + "STD_N_EDU_SP";                                          |
| 94  | expresión de cálculo/transformación: String ztitulacion = zcomunhis + "STD_N_DIPLOMA";                                           |
| 96  | expresión de cálculo/transformación: String zidioma = zcomunidi + "STD_N_LANGUAGE";                                              |
| 97  | expresión de cálculo/transformación: String znivelhabla = zcomunidi + "STD_N_LANG_LEVEL_1";                                      |
| 98  | expresión de cálculo/transformación: String znivellee = zcomunidi + "STD_N_LANG_LEVEL";                                          |
| 99  | expresión de cálculo/transformación: String znivelescribe = zcomunidi + "STD_N_LANG_LEVEL_2";                                    |
| 101 | expresión de cálculo/transformación: String zpuestoprevio = zcomunexp + "STD_N_JOB_CODE";                                        |
| 102 | expresión de cálculo/transformación: String zperiodo = zcomunexp + "SCO_MIN_PERIOD";                                             |
| 103 | expresión de cálculo/transformación: String zunidadtiempo = zcomunexp + "SCO_NM_TIME_UNIT";                                      |
| 105 | expresión de cálculo/transformación: String zcertificado = zcomuncer + "STD_N_CERTIFICATION_TYPE";                               |
| 106 | expresión de cálculo/transformación: String zentidad = zcomuncer + "SCO_N_ISSUE_ENTIT";                                          |
| 107 | expresión de cálculo/transformación: String zpais = zcomuncer + "STD_N_COUNTRY";                                                 |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 288 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 11  | /libreria/clase_val_entradas.js                           |
| 187 | /iconos/noname_puesto_144_100.gif                         |
| 189 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30 |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp           |
| 22  | ../../sse_generico/espanol/generico_links.jsp             |
| 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 189 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 189 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 189 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=30 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 288 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p5_det.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
