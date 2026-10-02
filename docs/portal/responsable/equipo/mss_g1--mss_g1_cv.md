# mss_g1_cv

Identificador: `mss_g1/mss_g1_cv.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_cv.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_cv.jsp) | `464e91129417bd574c949c596523ad08b746339511db6a0173c5f1842e77fa2f` |    568 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_cv.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_cv.jsp)   | `464e91129417bd574c949c596523ad08b746339511db6a0173c5f1842e77fa2f` |    568 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_cv.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_cv.jsp) | `464e91129417bd574c949c596523ad08b746339511db6a0173c5f1842e77fa2f` |    568 |
| BASE / español    | [mss_g1/espanol/mss_g1_cv.jsp](../../../../clon_portal/portal/mss_g1/espanol/mss_g1_cv.jsp)                             | `464e91129417bd574c949c596523ad08b746339511db6a0173c5f1842e77fa2f` |    568 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_cv.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_cv.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 309 | Puesto en la compañía    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------- |
| 531 | input   | type=hidden; id=&lt;%=sgtc_zNMInputIDDOC%&gt;; name=&lt;%=sgtc_zNMInputIDDOC%&gt;; value=&lt;%=sgtc_zIDDOC%&gt; |
| 544 | input   | type=hidden; id=&lt;%=sgtc_zNMInputIDDOC%&gt;; name=&lt;%=sgtc_zNMInputIDDOC%&gt;; value=&lt;%=sgtc_zIDDOC%&gt; |
| 560 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp; method=post; name=Vacantes; id=Vacantes             |
| 561 | input   | type=hidden; id=PRO; name=PRO; value=                                                                           |
| 562 | input   | type=hidden; id=ACT; name=ACT; value=                                                                           |
| 563 | input   | type=hidden; id=EST; name=EST; value=                                                                           |
| 564 | input   | type=hidden; id=zinicios; name=zinicios; value=&lt;%=zinicios%&gt;                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 52  | zVis            | getParameter(request,"zVis") |

| L   | Variable                | Expresión fuente                                                          | Resolución estática parcial                                                              |
| --- | ----------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 11  | sPathTempMap            | m4Session.getPathTempMapping()                                            | m4Session.getPathTempMapping()                                                           |
| 13  | titulo                  | "CV del empleado"                                                         | CV del empleado                                                                          |
| 14  | tfuncional              | "Curriculum del empleado"                                                 | Curriculum del empleado                                                                  |
| 15  | efuncional              | "Consulta otros CVs"                                                      | Consulta otros CVs                                                                       |
| 16  | efuncional2             | "Procesos de selecció                                                     | {"Procesos de selecció}                                                                  |
| 17  | ttabla                  | "Datos personales"                                                        | Datos personales                                                                         |
| 18  | etiqueta                | "Nombre"                                                                  | Nombre                                                                                   |
| 19  | etiqueta2               | "Edad"                                                                    | Edad                                                                                     |
| 20  | etiqueta3               | "Nacionalidad"                                                            | Nacionalidad                                                                             |
| 21  | etiqueta4               | "Puesto"                                                                  | Puesto                                                                                   |
| 22  | etiqueta5               | "Lugar de trabajo"                                                        | Lugar de trabajo                                                                         |
| 23  | etiqueta6               | "Unidad Organizativa"                                                     | Unidad Organizativa                                                                      |
| 24  | etiqueta7               | "Antigü                                                                   | {"Antigü}                                                                                |
| 25  | etiqueta8               | "Historial acadé                                                          | {"Historial acadé}                                                                       |
| 26  | etiqueta9               | "Fecha inicio"                                                            | Fecha inicio                                                                             |
| 27  | etiqueta10              | "Fecha prevista/fin"                                                      | Fecha prevista/fin                                                                       |
| 28  | etiqueta11              | "Tipo de diploma"                                                         | Tipo de diploma                                                                          |
| 29  | etiqueta12              | "Tí                                                                       | {"Tí}                                                                                    |
| 30  | etiqueta13              | "Centro"                                                                  | Centro                                                                                   |
| 31  | etiqueta14              | "Idiomas"                                                                 | Idiomas                                                                                  |
| 32  | etiqueta15              | "Idioma"                                                                  | Idioma                                                                                   |
| 33  | etiqueta16              | "Nivel escrito"                                                           | Nivel escrito                                                                            |
| 34  | etiqueta17              | "Nivel comprensió                                                         | {"Nivel comprensió}                                                                      |
| 35  | etiqueta18              | "Nivel oral"                                                              | Nivel oral                                                                               |
| 36  | etiqueta19              | "Experiencia profesional"                                                 | Experiencia profesional                                                                  |
| 37  | etiqueta20              | "Inicio"                                                                  | Inicio                                                                                   |
| 38  | etiqueta21              | "Fin"                                                                     | Fin                                                                                      |
| 39  | etiqueta22              | "Empresa"                                                                 | Empresa                                                                                  |
| 40  | etiqueta23              | "Sector"                                                                  | Sector                                                                                   |
| 41  | etiqueta24              | "Funciones"                                                               | Funciones                                                                                |
| 42  | etiqueta25              | "No hay informació                                                        | {"No hay informació}                                                                     |
| 43  | etiqueta26              | "Documentos"                                                              | Documentos                                                                               |
| 49  | zVis                    | ""                                                                        |                                                                                          |
| 76  | person                  | ""                                                                        |                                                                                          |
| 84  | zinicios                | zobjtabla.m4paramvalor ("zinicios")                                       | zobjtabla.m4paramvalor ("zinicios")                                                      |
| 85  | estado                  | zobjtabla.m4paramvalor("estado")                                          | zobjtabla.m4paramvalor("estado")                                                         |
| 89  | zPRO                    | zobjtabla.m4paramvalor("PRO")                                             | zobjtabla.m4paramvalor("PRO")                                                            |
| 90  | zACT                    | zobjtabla.m4paramvalor("ACT")                                             | zobjtabla.m4paramvalor("ACT")                                                            |
| 91  | zretorno                | zobjtabla.m4paramvalor("RET")                                             | zobjtabla.m4paramvalor("RET")                                                            |
| 92  | cabecera                | zobjtabla.m4paramvalor("cabecera")                                        | zobjtabla.m4paramvalor("cabecera")                                                       |
| 112 | zsubsesion              | "SSE_EMP_CV"                                                              | SSE_EMP_CV                                                                               |
| 113 | zmeta4object            | "SSE_EMP_CV"                                                              | SSE_EMP_CV                                                                               |
| 114 | znodo                   | "M4T_EMP_BACKGROUND"                                                      | M4T_EMP_BACKGROUND                                                                       |
| 115 | znodo2                  | "M4T_EMP_CV_LANGUAGES"                                                    | M4T_EMP_CV_LANGUAGES                                                                     |
| 116 | znodo3                  | "M4T_EMP_CV_PREV_JOBS"                                                    | M4T_EMP_CV_PREV_JOBS                                                                     |
| 117 | znodo4                  | "M4T_EMP_CV_PROF_DATA"                                                    | M4T_EMP_CV_PROF_DATA                                                                     |
| 118 | znodo5                  | "M4T_EMP_JOB"                                                             | M4T_EMP_JOB                                                                              |
| 119 | znodo6                  | "M4T_EMP_PERS_DATA"                                                       | M4T_EMP_PERS_DATA                                                                        |
| 120 | znodo7                  | "SSE_HR_DOC"                                                              | SSE_HR_DOC                                                                               |
| 121 | znodo8                  | "SMCO_PERSON_HEADER_CV"                                                   | SMCO_PERSON_HEADER_CV                                                                    |
| 122 | znodo9                  | "SMCO_PERSON_CERTIF_LICENSE_CV"                                           | SMCO_PERSON_CERTIF_LICENSE_CV                                                            |
| 123 | znodo10                 | "SMCO_PERSON_COMP_BACKGROUND_CV"                                          | SMCO_PERSON_COMP_BACKGROUND_CV                                                           |
| 124 | znodo11                 | "SMCO_PERSON_COM_INFORMATION_CV"                                          | SMCO_PERSON_COM_INFORMATION_CV                                                           |
| 125 | znodo12                 | "SMCO_PERSONAL_ASSOCIATION_CV"                                            | SMCO_PERSONAL_ASSOCIATION_CV                                                             |
| 126 | znodo13                 | "SMCO_PERSONAL_KNC_LEVEL_CV"                                              | SMCO_PERSONAL_KNC_LEVEL_CV                                                               |
| 132 | zoutputdef              | zsubsesion + "!" + znodo + "[*]"                                          | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[*]"}                                                 |
| 133 | zmove                   | znodo + "[FIRST]"                                                         | M4T_EMP_BACKGROUND{"[FIRST]"}                                                            |
| 134 | zlectura                | zsubsesion + "!" + znodo                                                  | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND                                                        |
| 135 | zcomun                  | zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                       | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                               |
| 136 | zvalSTDNDIPLEVEL        | ""                                                                        |                                                                                          |
| 137 | zvalSTDIDEDUCENTER      | ""                                                                        |                                                                                          |
| 139 | zoutputdef2             | zsubsesion + "!" + znodo2 + "[*]"                                         | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[*]"}                                               |
| 140 | zmove2                  | znodo2 + "[FIRST]"                                                        | M4T_EMP_CV_LANGUAGES{"[FIRST]"}                                                          |
| 141 | zlectura2               | zsubsesion + "!" + znodo2                                                 | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES                                                      |
| 142 | zcomun2                 | zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."                      | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}                             |
| 144 | zoutputdef3             | zsubsesion + "!" + znodo3 + "[*]"                                         | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[*]"}                                               |
| 145 | zmove3                  | znodo3 + "[FIRST]"                                                        | M4T_EMP_CV_PREV_JOBS{"[FIRST]"}                                                          |
| 146 | zlectura3               | zsubsesion + "!" + znodo3                                                 | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS                                                      |
| 147 | zcomun3                 | zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."                      | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}                             |
| 149 | zoutputdef4             | zsubsesion + "!" + znodo4 + "[*]"                                         | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"[*]"}                                               |
| 150 | zmove4                  | znodo4 + "[FIRST]"                                                        | M4T_EMP_CV_PROF_DATA{"[FIRST]"}                                                          |
| 151 | zlectura4               | zsubsesion + "!" + znodo4                                                 | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA                                                      |
| 152 | zraiz4                  | zsubsesion + "!" + znodo4 + "."                                           | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}                                                 |
| 154 | zoutputdef5             | zsubsesion + "!" + znodo5 + "[*]"                                         | SSE_EMP_CV{"!"}M4T_EMP_JOB{"[*]"}                                                        |
| 155 | zmove5                  | znodo5 + "[FIRST]"                                                        | M4T_EMP_JOB{"[FIRST]"}                                                                   |
| 156 | zlectura5               | zsubsesion + "!" + znodo5                                                 | SSE_EMP_CV{"!"}M4T_EMP_JOB                                                               |
| 157 | zraiz5                  | zsubsesion + "!" + znodo5 + "."                                           | SSE_EMP_CV{"!"}M4T_EMP_JOB{"."}                                                          |
| 159 | zoutputdef6             | zsubsesion + "!" + znodo6 + "[*]"                                         | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"[*]"}                                                  |
| 160 | zmove6                  | znodo6 + "[FIRST]"                                                        | M4T_EMP_PERS_DATA{"[FIRST]"}                                                             |
| 161 | zlectura6               | zsubsesion + "!" + znodo6                                                 | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA                                                         |
| 162 | zraiz6                  | zsubsesion + "!" + znodo6 + "."                                           | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"."}                                                    |
| 164 | zoutputdef7             | zsubsesion + "!" + znodo7 + "[*]"                                         | SSE_EMP_CV{"!"}SSE_HR_DOC{"[*]"}                                                         |
| 165 | zmove7                  | znodo7 + "[FIRST]"                                                        | SSE_HR_DOC{"[FIRST]"}                                                                    |
| 166 | zlectura7               | zsubsesion + "!" + znodo7                                                 | SSE_EMP_CV{"!"}SSE_HR_DOC                                                                |
| 167 | zraiz7                  | zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."                      | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}                                       |
| 169 | zoutputdef8             | zsubsesion + "!" + znodo8 + "[*]"                                         | SSE_EMP_CV{"!"}SMCO_PERSON_HEADER_CV{"[*]"}                                              |
| 170 | zoutputdef9             | zsubsesion + "!" + znodo9 + "[*]"                                         | SSE_EMP_CV{"!"}SMCO_PERSON_CERTIF_LICENSE_CV{"[*]"}                                      |
| 171 | zoutputdef10            | zsubsesion + "!" + znodo10 + "[*]"                                        | SSE_EMP_CV{"!"}SMCO_PERSON_COMP_BACKGROUND_CV{"[*]"}                                     |
| 172 | zoutputdef11            | zsubsesion + "!" + znodo11 + "[*]"                                        | SSE_EMP_CV{"!"}SMCO_PERSON_COM_INFORMATION_CV{"[*]"}                                     |
| 173 | zoutputdef12            | zsubsesion + "!" + znodo12 + "[*]"                                        | SSE_EMP_CV{"!"}SMCO_PERSONAL_ASSOCIATION_CV{"[*]"}                                       |
| 174 | zoutputdef13            | zsubsesion + "!" + znodo13 + "[*]"                                        | SSE_EMP_CV{"!"}SMCO_PERSONAL_KNC_LEVEL_CV{"[*]"}                                         |
| 178 | zmetodocarga            | zsubsesion + "!SSE_EMP_CV.CARGA"                                          | SSE_EMP_CV{"!SSE_EMP_CV.CARGA"}                                                          |
| 182 | zSTDNDIPLOMA            | zcomun + "STD_N_DIPLOMA"                                                  | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}              |
| 183 | zSTDNDIPLEVEL           | zcomun + "STD_N_DIP_LEVEL"                                                | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIP_LEVEL"}            |
| 184 | zSTDNEDUSP              | zcomun + "STD_N_EDU_SP"                                                   | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}               |
| 185 | zSTDNEDUTYPE            | zcomun + "STD_N_EDU_TYPE"                                                 | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}             |
| 186 | zSTDNEXTORG             | zcomun + "STD_N_EXT_ORG"                                                  | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}              |
| 187 | zSTDDTSTART3            | zcomun + "STD_DT_START"                                                   | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}               |
| 188 | zSTDDTENDAUX2           | zcomun + "STD_DT_END_AUX"                                                 | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}             |
| 189 | zMAINCOMMENT            | zcomun + "MAIN_COMMENT"                                                   | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"MAIN_COMMENT"}               |
| 190 | zSTDDESCEDUCENTER       | zcomun + "STD_DESC_EDU_CENTER"                                            | SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}        |
| 192 | zSTDNLANGUAGE           | zcomun2 + "STD_N_LANGUAGE"                                                | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}           |
| 193 | zSTDNLISTENLEVEL        | zcomun2 + "STD_N_LANG_LEVEL"                                              | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}         |
| 194 | zSTDNSPEAKLEVEL         | zcomun2 + "STD_N_LANG_LEVEL_1"                                            | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}       |
| 195 | zSTDNWRITELEVEL         | zcomun2 + "STD_N_LANG_LEVEL_2"                                            | SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}       |
| 197 | zSTDEMPLOYER            | zcomun3 + "STD_EMPLOYER"                                                  | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMPLOYER"}             |
| 198 | zSTDNSECTOR             | zcomun3 + "STD_N_SECTOR"                                                  | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}             |
| 199 | zSTDDEVELOPEDACTIVITIES | zcomun3 + "STD_DEVELOPED_ACTIVITIES"                                      | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DEVELOPED_ACTIVITIES"} |
| 200 | zSTDDTSTART             | zcomun3 + "STD_DT_START"                                                  | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}             |
| 201 | zSTDDTENDAUX            | zcomun3 + "STD_DT_END_AUX"                                                | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}           |
| 202 | zMAINCOMMENT2           | zcomun3 + "MAIN_COMMENT"                                                  | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"MAIN_COMMENT"}             |
| 203 | zSTDINITJOB             | zcomun3 + "STD_INITIAL_JOB"                                               | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}          |
| 204 | zSTDENDJOB              | zcomun3 + "STD_FINAL_JOB"                                                 | SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}            |
| 206 | zSTDDTSTART2            | zraiz4 + "SCO_DT_START"                                                   | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"SCO_DT_START"}                                 |
| 207 | zSTDNWORKLOCATION       | zraiz4 + "STD_N_WORK_LOCATION"                                            | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"STD_N_WORK_LOCATION"}                          |
| 208 | zSTDNWORKUNIT           | zraiz4 + "STD_N_WORK_UNIT"                                                | SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"STD_N_WORK_UNIT"}                              |
| 210 | zSTDNJOBCODE            | zraiz5 + "STD_N_JOB_CODE"                                                 | SSE_EMP_CV{"!"}M4T_EMP_JOB{"."}{"STD_N_JOB_CODE"}                                        |
| 212 | zSCOGBNAME              | zraiz6 + "SCO_GB_NAME"                                                    | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"."}{"SCO_GB_NAME"}                                     |
| 213 | zAGE                    | zraiz6 + "AGE"                                                            | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"."}{"AGE"}                                             |
| 214 | zSTDNNACIONALITY        | zraiz6 + "STD_N_NACIONALITY"                                              | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"."}{"STD_N_NACIONALITY"}                               |
| 215 | zSCOPHOTO               | zraiz6 + "SCO_PHOTO"                                                      | SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"."}{"SCO_PHOTO"}                                       |
| 217 | zSCODTEMISION           | zraiz7 + "SCO_DT_EMISSION"                                                | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_EMISSION"}                    |
| 218 | zSCOTYPEDOC             | zraiz7 + "SCO_NM_DOC_TYPE"                                                | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_TYPE"}                    |
| 219 | zSCOIDDOC               | zraiz7 + "SCO_ID_DOC"                                                     | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DOC"}                         |
| 220 | zSCOORDOC               | zraiz7 + "SCO_OR_HR_DOC"                                                  | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_DOC"}                      |
| 221 | zSCODTVALID             | zraiz7 + "SCO_DT_VALID"                                                   | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_VALID"}                       |
| 222 | zSCONMDOCSTATE          | zraiz7 + "SCO_NM_DOC_STATE"                                               | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_STATE"}                   |
| 223 | zSCOTITLEDOC            | zraiz7 + "SCO_TITLE_DOC"                                                  | SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_TITLE_DOC"}                      |
| 262 | zcounti                 | 0                                                                         | 0                                                                                        |
| 263 | zcount2i                | 0                                                                         | 0                                                                                        |
| 264 | zcount3i                | 0                                                                         | 0                                                                                        |
| 265 | zcount4i                | 0                                                                         | 0                                                                                        |
| 266 | zcount5i                | 0                                                                         | 0                                                                                        |
| 267 | zcount6i                | 0                                                                         | 0                                                                                        |
| 268 | zcount7i                | 0                                                                         | 0                                                                                        |
| 269 | zcount8i                | 0                                                                         | 0                                                                                        |
| 270 | zcount9i                | 0                                                                         | 0                                                                                        |
| 271 | zcount10i               | 0                                                                         | 0                                                                                        |
| 272 | zcount11i               | 0                                                                         | 0                                                                                        |
| 273 | zcount12i               | 0                                                                         | 0                                                                                        |
| 274 | zcount13i               | 0                                                                         | 0                                                                                        |
| 291 | zcountv                 | String.valueOf(zcounti)                                                   | String.valueOf(zcounti)                                                                  |
| 292 | zcount2v                | String.valueOf(zcount2i)                                                  | String.valueOf(zcount2i)                                                                 |
| 293 | zcount3v                | String.valueOf(zcount3i)                                                  | String.valueOf(zcount3i)                                                                 |
| 294 | zcount4v                | String.valueOf(zcount4i)                                                  | String.valueOf(zcount4i)                                                                 |
| 295 | zcount5v                | String.valueOf(zcount5i)                                                  | String.valueOf(zcount5i)                                                                 |
| 296 | zcount6v                | String.valueOf(zcount6i)                                                  | String.valueOf(zcount6i)                                                                 |
| 297 | zcount7v                | String.valueOf(zcount7i)                                                  | String.valueOf(zcount7i)                                                                 |
| 298 | zcounttot               | zcounti + zcount2i + zcount3i + zcount4i + zcount5i + zcount6i + zcount7i | 0000000                                                                                  |
| 335 | zposicions2             | "0"                                                                       | 0                                                                                        |
| 336 | zcontrol2               | 0                                                                         | 0                                                                                        |
| 337 | zposicion2              | 0                                                                         | 0                                                                                        |
| 375 | zposicions              | "0"                                                                       | 0                                                                                        |
| 376 | zcontrol                | 0                                                                         | 0                                                                                        |
| 377 | zposicion               | 0                                                                         | 0                                                                                        |
| 444 | zposicions3             | "0"                                                                       | 0                                                                                        |
| 445 | zcontrol3               | 0                                                                         | 0                                                                                        |
| 446 | zposicion3              | 0                                                                         | 0                                                                                        |
| 500 | zposicions7             | "0"                                                                       | 0                                                                                        |
| 501 | zcontrol7               | 0                                                                         | 0                                                                                        |
| 502 | zposicion7              | 0                                                                         | 0                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| 226 | m4:startpage | m4task=SSE_EMP_CV                                                                                              |
| 226 | m4:beginjob  |                                                                                                                |
| 227 | m4:datadef   | m4o=SSE_EMP_CV; m4name=SSE_EMP_CV                                                                              |
| 234 | m4:exec      | m4method=SSE_EMP_CV{"!SSE_EMP_CV.CARGA"}                                                                       |
| 234 | m4:param     | name=ARG_PATH_TEMP; value=m4Session.getPathTempMapping()                                                       |
| 235 | m4:outputdef |                                                                                                                |
| 235 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[*]"}                                                   |
| 236 | m4:outputdef |                                                                                                                |
| 236 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[*]"}                                                 |
| 237 | m4:outputdef |                                                                                                                |
| 237 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[*]"}                                                 |
| 238 | m4:outputdef |                                                                                                                |
| 238 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"[*]"}                                                 |
| 239 | m4:outputdef |                                                                                                                |
| 239 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_JOB{"[*]"}                                                          |
| 240 | m4:outputdef |                                                                                                                |
| 240 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}M4T_EMP_PERS_DATA{"[*]"}                                                    |
| 241 | m4:outputdef |                                                                                                                |
| 241 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SSE_HR_DOC{"[*]"}                                                           |
| 242 | m4:outputdef |                                                                                                                |
| 242 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSON_HEADER_CV{"[*]"}                                                |
| 243 | m4:outputdef |                                                                                                                |
| 243 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSON_CERTIF_LICENSE_CV{"[*]"}                                        |
| 244 | m4:outputdef |                                                                                                                |
| 244 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSON_COMP_BACKGROUND_CV{"[*]"}                                       |
| 245 | m4:outputdef |                                                                                                                |
| 245 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSON_COM_INFORMATION_CV{"[*]"}                                       |
| 246 | m4:outputdef |                                                                                                                |
| 246 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSONAL_ASSOCIATION_CV{"[*]"}                                         |
| 247 | m4:outputdef |                                                                                                                |
| 247 | m4:param     | name=m4name0; value=SSE_EMP_CV{"!"}SMCO_PERSONAL_KNC_LEVEL_CV{"[*]"}                                           |
| 248 | m4:endjob    |                                                                                                                |
| 249 | m4:move      |                                                                                                                |
| 249 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_BACKGROUND{"[FIRST]"}                                                           |
| 250 | m4:move      |                                                                                                                |
| 250 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_CV_LANGUAGES{"[FIRST]"}                                                         |
| 251 | m4:move      |                                                                                                                |
| 251 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_CV_PREV_JOBS{"[FIRST]"}                                                         |
| 252 | m4:move      |                                                                                                                |
| 252 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_CV_PROF_DATA{"[FIRST]"}                                                         |
| 253 | m4:move      |                                                                                                                |
| 253 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_JOB{"[FIRST]"}                                                                  |
| 254 | m4:move      |                                                                                                                |
| 254 | m4:param     | name=SSE_EMP_CV; value=M4T_EMP_PERS_DATA{"[FIRST]"}                                                            |
| 255 | m4:move      |                                                                                                                |
| 255 | m4:param     | name=SSE_EMP_CV; value=SSE_HR_DOC{"[FIRST]"}                                                                   |
| 318 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_JOB{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                        |
| 319 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true                          |
| 320 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                              |
| 321 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PROF_DATA{"."}{"SCO_DT_START"}; htmlsafe=true                                 |
| 339 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                          |
| 347 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true           |
| 348 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}; htmlsafe=true       |
| 349 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true         |
| 350 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}; htmlsafe=true       |
| 354 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true           |
| 355 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}; htmlsafe=true       |
| 356 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}; htmlsafe=true         |
| 357 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_LANGUAGES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}; htmlsafe=true       |
| 379 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                           |
| 392 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true               |
| 393 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}; htmlsafe=true             |
| 394 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true             |
| 395 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}; htmlsafe=true              |
| 399 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIP_LEVEL"}; htmlsafe=true            |
| 402 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}; htmlsafe=true        |
| 404 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}; htmlsafe=true              |
| 409 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true               |
| 410 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}; htmlsafe=true             |
| 411 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}; htmlsafe=true             |
| 412 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}; htmlsafe=true              |
| 416 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIP_LEVEL"}; htmlsafe=true            |
| 419 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_DESC_EDU_CENTER"}; htmlsafe=true        |
| 421 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EXT_ORG"}; htmlsafe=true              |
| 439 | m4:label     | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}                         |
| 440 | m4:label     | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}                           |
| 448 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                          |
| 456 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true             |
| 457 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}; htmlsafe=true           |
| 458 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMPLOYER"}; htmlsafe=true             |
| 459 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}; htmlsafe=true             |
| 460 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DEVELOPED_ACTIVITIES"}; htmlsafe=true |
| 461 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}; htmlsafe=true          |
| 462 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}; htmlsafe=true            |
| 467 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true             |
| 468 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END_AUX"}; htmlsafe=true           |
| 469 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMPLOYER"}; htmlsafe=true             |
| 470 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}; htmlsafe=true             |
| 471 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_DEVELOPED_ACTIVITIES"}; htmlsafe=true |
| 472 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_INITIAL_JOB"}; htmlsafe=true          |
| 473 | m4:item      | m4name=SSE_EMP_CV{"!"}M4T_EMP_CV_PREV_JOBS{"[&amp;VAR.m4lix]"}{"."}{"STD_FINAL_JOB"}; htmlsafe=true            |
| 493 | m4:label     | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_EMISSION"}; htmlsafe=true                    |
| 494 | m4:label     | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_VALID"}; htmlsafe=true                       |
| 495 | m4:label     | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_STATE"}; htmlsafe=true                   |
| 496 | m4:label     | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_TYPE"}; htmlsafe=true                    |
| 497 | m4:label     | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DOC"}; htmlsafe=true                         |
| 504 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount7v).intValue()-1).toString()                                          |
| 523 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_EMISSION"}; htmlsafe=true                    |
| 524 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_VALID"}; htmlsafe=true                       |
| 525 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_STATE"}; htmlsafe=true                   |
| 526 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_TYPE"}; htmlsafe=true                    |
| 527 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DOC"}; var=sgtc_zIDDOC; htmlsafe=true        |
| 529 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_TITLE_DOC"}; var=sgtc_zTITLEDOC; htmlsafe=true  |
| 536 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_EMISSION"}; htmlsafe=true                    |
| 537 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_VALID"}; htmlsafe=true                       |
| 538 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_STATE"}; htmlsafe=true                   |
| 539 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DOC_TYPE"}; htmlsafe=true                    |
| 540 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DOC"}; var=sgtc_zIDDOC; htmlsafe=true        |
| 542 | m4:item      | m4name=SSE_EMP_CV{"!"}SSE_HR_DOC{"[&amp;VAR.m4lix]"}{"."}{"SCO_TITLE_DOC"}; var=sgtc_zTITLEDOC; htmlsafe=true  |
| 567 | m4:endpage   |                                                                                                                |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 230 | setItem          | zsubsesion,"SSE_EMP_CV","","ID_PERSONA",person     |
| 277 | getCountInClient | "",zsubsesion,znodo                                |
| 278 | getCountInClient | "",zsubsesion,znodo2                               |
| 279 | getCountInClient | "",zsubsesion,znodo3                               |
| 280 | getCountInClient | "",zsubsesion,znodo4                               |
| 281 | getCountInClient | "",zsubsesion,znodo5                               |
| 282 | getCountInClient | "",zsubsesion,znodo6                               |
| 283 | getCountInClient | "",zsubsesion,znodo7                               |
| 284 | getCountInClient | "",zsubsesion,znodo8                               |
| 285 | getCountInClient | "",zsubsesion,znodo8                               |
| 286 | getCountInClient | "",zsubsesion,znodo10                              |
| 287 | getCountInClient | "",zsubsesion,znodo11                              |
| 288 | getCountInClient | "",zsubsesion,znodo12                              |
| 289 | getCountInClient | "",zsubsesion,znodo13                              |
| 386 | getItem          | "",zsubsesion,znodo,zposicions,"STD_N_DIP_LEVEL"   |
| 387 | getItem          | "",zsubsesion,znodo,zposicions,"STD_ID_EDU_CENTER" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos      |
| --- | ------------- | --------------- |
| 65  | Enviarproceso | proceso, actual |

| L   | Condición / acción / mensaje literal                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| 51  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                 |
| 54  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                 |
| 79  | if ((person==null)&#124;&#124;(person.equals(""))){                                                                             |
| 86  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                             |
| 93  | if ((cabecera==null)&#124;&#124;(cabecera.equals(""))){                                                                         |
| 97  | if ((zretorno==null)&#124;&#124;(zretorno.equals(""))){                                                                         |
| 104 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                |
| 107 | &lt;%}else{%&gt;                                                                                                                |
| 303 | &lt;%if (cabecera.equals("1")){%&gt;                                                                                            |
| 308 | &lt;%if (zcount4i &gt; 0){%&gt;                                                                                                 |
| 325 | &lt;%}if (zcount2i &gt; 0) {%&gt;                                                                                               |
| 345 | &lt;%if (zcontrol2==0){%&gt;                                                                                                    |
| 352 | &lt;%}else{%&gt;                                                                                                                |
| 364 | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                 |
| 390 | &lt;%if (zcontrol==0){%&gt;                                                                                                     |
| 396 | &lt;%if ((zvalSTDNDIPLEVEL==null)&#124;&#124;(zvalSTDNDIPLEVEL.equals(""))){ %&gt;                                              |
| 398 | &lt;%} else {%&gt;                                                                                                              |
| 401 | &lt;% if (zvalSTDIDEDUCENTER.equals("000")) { %&gt;                                                                             |
| 403 | &lt;%} else {%&gt;                                                                                                              |
| 407 | &lt;%}else{%&gt;                                                                                                                |
| 413 | &lt;%if ((zvalSTDNDIPLEVEL==null)&#124;&#124;(zvalSTDNDIPLEVEL.equals(""))){ %&gt;                                              |
| 415 | &lt;%} else {%&gt;                                                                                                              |
| 418 | &lt;% if (zvalSTDIDEDUCENTER.equals("000")) { %&gt;                                                                             |
| 420 | &lt;%} else {%&gt;                                                                                                              |
| 430 | &lt;%if (zcount3i &gt; 0) {%&gt;                                                                                                |
| 454 | &lt;%if (zcontrol3==0){%&gt;                                                                                                    |
| 465 | &lt;%}else{%&gt;                                                                                                                |
| 488 | &lt;%if (zcount7i &gt; 0) {                                                                                                     |
| 521 | &lt;%if (zcontrol7==0){%&gt;                                                                                                    |
| 534 | &lt;%}else{%&gt;                                                                                                                |
| 552 | &lt;%}if (zcounttot &gt; 0){}else{%&gt;                                                                                         |
| 556 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                |
| 132 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                      |
| 133 | expresión de cálculo/transformación: String zmove = znodo + "[FIRST]";                                                          |
| 134 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                |
| 135 | expresión de cálculo/transformación: String zcomun = zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                       |
| 139 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                    |
| 140 | expresión de cálculo/transformación: String zmove2 = znodo2 + "[FIRST]";                                                        |
| 141 | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                              |
| 142 | expresión de cálculo/transformación: String zcomun2 = zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                     |
| 144 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                    |
| 145 | expresión de cálculo/transformación: String zmove3 = znodo3 + "[FIRST]";                                                        |
| 146 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                              |
| 147 | expresión de cálculo/transformación: String zcomun3 = zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                     |
| 149 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                    |
| 150 | expresión de cálculo/transformación: String zmove4 = znodo4 + "[FIRST]";                                                        |
| 151 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                              |
| 152 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                           |
| 154 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                    |
| 155 | expresión de cálculo/transformación: String zmove5 = znodo5 + "[FIRST]";                                                        |
| 156 | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                              |
| 157 | expresión de cálculo/transformación: String zraiz5 = zsubsesion + "!" + znodo5 + ".";                                           |
| 159 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                    |
| 160 | expresión de cálculo/transformación: String zmove6 = znodo6 + "[FIRST]";                                                        |
| 161 | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                              |
| 162 | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                           |
| 164 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                    |
| 165 | expresión de cálculo/transformación: String zmove7 = znodo7 + "[FIRST]";                                                        |
| 166 | expresión de cálculo/transformación: String zlectura7 = zsubsesion + "!" + znodo7;                                              |
| 167 | expresión de cálculo/transformación: String zraiz7 = zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";                      |
| 169 | expresión de cálculo/transformación: String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";                                    |
| 170 | expresión de cálculo/transformación: String zoutputdef9 = zsubsesion + "!" + znodo9 + "[*]";                                    |
| 171 | expresión de cálculo/transformación: String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";                                  |
| 172 | expresión de cálculo/transformación: String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";                                  |
| 173 | expresión de cálculo/transformación: String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";                                  |
| 174 | expresión de cálculo/transformación: String zoutputdef13 = zsubsesion + "!" + znodo13 + "[*]";                                  |
| 178 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_EMP_CV.CARGA";                                    |
| 182 | expresión de cálculo/transformación: String zSTDNDIPLOMA = zcomun + "STD_N_DIPLOMA";                                            |
| 183 | expresión de cálculo/transformación: String zSTDNDIPLEVEL = zcomun + "STD_N_DIP_LEVEL";                                         |
| 184 | expresión de cálculo/transformación: String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";                                               |
| 185 | expresión de cálculo/transformación: String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";                                           |
| 186 | expresión de cálculo/transformación: String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";                                             |
| 187 | expresión de cálculo/transformación: String zSTDDTSTART3 = zcomun + "STD_DT_START";                                             |
| 188 | expresión de cálculo/transformación: String zSTDDTENDAUX2 = zcomun + "STD_DT_END_AUX";                                          |
| 189 | expresión de cálculo/transformación: String zMAINCOMMENT = zcomun + "MAIN_COMMENT";                                             |
| 190 | expresión de cálculo/transformación: String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";                                 |
| 192 | expresión de cálculo/transformación: String zSTDNLANGUAGE = zcomun2 + "STD_N_LANGUAGE";                                         |
| 193 | expresión de cálculo/transformación: String zSTDNLISTENLEVEL = zcomun2 + "STD_N_LANG_LEVEL";                                    |
| 194 | expresión de cálculo/transformación: String zSTDNSPEAKLEVEL = zcomun2 + "STD_N_LANG_LEVEL_1";                                   |
| 195 | expresión de cálculo/transformación: String zSTDNWRITELEVEL = zcomun2 + "STD_N_LANG_LEVEL_2";                                   |
| 197 | expresión de cálculo/transformación: String zSTDEMPLOYER = zcomun3 + "STD_EMPLOYER";                                            |
| 198 | expresión de cálculo/transformación: String zSTDNSECTOR = zcomun3 + "STD_N_SECTOR";                                             |
| 199 | expresión de cálculo/transformación: String zSTDDEVELOPEDACTIVITIES = zcomun3 + "STD_DEVELOPED_ACTIVITIES";                     |
| 200 | expresión de cálculo/transformación: String zSTDDTSTART = zcomun3 + "STD_DT_START";                                             |
| 201 | expresión de cálculo/transformación: String zSTDDTENDAUX = zcomun3 + "STD_DT_END_AUX";                                          |
| 202 | expresión de cálculo/transformación: String zMAINCOMMENT2 = zcomun3 + "MAIN_COMMENT";                                           |
| 203 | expresión de cálculo/transformación: String zSTDINITJOB = zcomun3 + "STD_INITIAL_JOB";                                          |
| 204 | expresión de cálculo/transformación: String zSTDENDJOB = zcomun3 + "STD_FINAL_JOB";                                             |
| 206 | expresión de cálculo/transformación: String zSTDDTSTART2 = zraiz4 + "SCO_DT_START";                                             |
| 207 | expresión de cálculo/transformación: String zSTDNWORKLOCATION = zraiz4 + "STD_N_WORK_LOCATION";                                 |
| 208 | expresión de cálculo/transformación: String zSTDNWORKUNIT = zraiz4 + "STD_N_WORK_UNIT";                                         |
| 210 | expresión de cálculo/transformación: String zSTDNJOBCODE = zraiz5 + "STD_N_JOB_CODE";                                           |
| 212 | expresión de cálculo/transformación: String zSCOGBNAME = zraiz6 + "SCO_GB_NAME";                                                |
| 213 | expresión de cálculo/transformación: String zAGE = zraiz6 + "AGE";                                                              |
| 214 | expresión de cálculo/transformación: String zSTDNNACIONALITY = zraiz6 + "STD_N_NACIONALITY";                                    |
| 215 | expresión de cálculo/transformación: String zSCOPHOTO = zraiz6 + "SCO_PHOTO";                                                   |
| 217 | expresión de cálculo/transformación: String zSCODTEMISION = zraiz7 + "SCO_DT_EMISSION";                                         |
| 218 | expresión de cálculo/transformación: String zSCOTYPEDOC = zraiz7 + "SCO_NM_DOC_TYPE";                                           |
| 219 | expresión de cálculo/transformación: String zSCOIDDOC = zraiz7 + "SCO_ID_DOC";                                                  |
| 220 | expresión de cálculo/transformación: String zSCOORDOC = zraiz7 + "SCO_OR_HR_DOC";                                               |
| 221 | expresión de cálculo/transformación: String zSCODTVALID = zraiz7 + "SCO_DT_VALID";                                              |
| 222 | expresión de cálculo/transformación: String zSCONMDOCSTATE = zraiz7 + "SCO_NM_DOC_STATE";                                       |
| 223 | expresión de cálculo/transformación: String zSCOTITLEDOC = zraiz7 + "SCO_TITLE_DOC";                                            |
| 298 | expresión de cálculo/transformación: int zcounttot = zcounti + zcount2i + zcount3i + zcount4i + zcount5i + zcount6i + zcount7i; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 63  | ../../mss_generico/espanol/menu_mss.jsp               |
| 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               |
| 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          |
| 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        |
| 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      |
| 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      |
| 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       |
| 511 | ../../tc_docs/tc_doc_initialize_include.jsp           |
| 532 | ../../tc_docs/tc_doc_include.jsp                      |
| 545 | ../../tc_docs/tc_doc_include.jsp                      |
| 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 60  | /css/estilo_mss.css                                   |
| 61  | /libreria/funciones_sse_val1.js                       |
| 62  | /libreria/funciones_sse.js                            |
| 560 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   |
| 63  | ../../mss_generico/espanol/menu_mss.jsp               |
| 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               |
| 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          |
| 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        |
| 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      |
| 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      |
| 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       |
| 511 | ../../tc_docs/tc_doc_initialize_include.jsp           |
| 532 | ../../tc_docs/tc_doc_include.jsp                      |
| 545 | ../../tc_docs/tc_doc_include.jsp                      |
| 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                                                                                                                      |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| COLL   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| COLL   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| COLL   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| COLL   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| COLL   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| COLL   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| COLL   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| COLL   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| COLL   | 61  | /libreria/funciones_sse_val1.js                       | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)     |
| COLL   | 62  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                         |
| COLL   | 560 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| COLL   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| COLL   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| COLL   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| COLL   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| COLL   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| COLL   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| COLL   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| COLL   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| COLL   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| CYC    | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| CYC    | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| CYC    | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| CYC    | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| CYC    | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| CYC    | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| CYC    | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| CYC    | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| CYC    | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| CYC    | 61  | /libreria/funciones_sse_val1.js                       | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                       |
| CYC    | 62  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                                 |
| CYC    | 560 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| CYC    | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| CYC    | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| CYC    | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| CYC    | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| CYC    | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| CYC    | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| CYC    | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| CYC    | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| CYC    | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| IBER   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| IBER   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| IBER   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| IBER   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| IBER   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| IBER   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| IBER   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| IBER   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| IBER   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| IBER   | 61  | /libreria/funciones_sse_val1.js                       | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md); [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)     |
| IBER   | 62  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                         |
| IBER   | 560 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| IBER   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| IBER   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md); [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                     |
| IBER   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md); [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                 |
| IBER   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md); [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)         |
| IBER   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md); [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md) |
| IBER   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md); [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md) |
| IBER   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md); [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)     |
| IBER   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 532 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 545 | ../../tc_docs/tc_doc_include.jsp                      | ausente    | P06                                                                                                                                                                                                    |
| IBER   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| BASE   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| BASE   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| BASE   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                                                                                                       |
| BASE   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                                                                                                             |
| BASE   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)                                                                                                         |
| BASE   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md)                                                                                                     |
| BASE   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md)                                                                                                     |
| BASE   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)                                                                                                       |
| BASE   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | física     | [tc_docs/tc_doc_initialize_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_initialize_include.md)                                                                                          |
| BASE   | 532 | ../../tc_docs/tc_doc_include.jsp                      | física     | [tc_docs/tc_doc_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_include.md)                                                                                                                |
| BASE   | 545 | ../../tc_docs/tc_doc_include.jsp                      | física     | [tc_docs/tc_doc_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_include.md)                                                                                                                |
| BASE   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |
| BASE   | 61  | /libreria/funciones_sse_val1.js                       | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                                                                                                       |
| BASE   | 62  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                                 |
| BASE   | 560 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   | ausente    | P06                                                                                                                                                                                                    |
| BASE   | 63  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                                       |
| BASE   | 105 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                                                 |
| BASE   | 304 | /mss_g1/smco_g1_profs_info_cabecera.jsp               | contextual | [mss_g1/smco_g1_profs_info_cabecera.jsp](mss_g1--smco_g1_profs_info_cabecera.md)                                                                                                                       |
| BASE   | 482 | /mss_g1/smco_g1_profs_info_afiliacion_cv.jsp          | contextual | [mss_g1/smco_g1_profs_info_afiliacion_cv.jsp](mss_g1--smco_g1_profs_info_afiliacion_cv.md)                                                                                                             |
| BASE   | 483 | /mss_g1/smco_g1_profs_info_certificados_cv.jsp        | contextual | [mss_g1/smco_g1_profs_info_certificados_cv.jsp](mss_g1--smco_g1_profs_info_certificados_cv.md)                                                                                                         |
| BASE   | 484 | /mss_g1/smco_g1_profs_info_complementario_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementario_cv.jsp](mss_g1--smco_g1_profs_info_complementario_cv.md)                                                                                                     |
| BASE   | 485 | /mss_g1/smco_g1_profs_info_complementaria_cv.jsp      | contextual | [mss_g1/smco_g1_profs_info_complementaria_cv.jsp](mss_g1--smco_g1_profs_info_complementaria_cv.md)                                                                                                     |
| BASE   | 486 | /mss_g1/smco_g1_profs_info_conocimientos_cv.jsp       | contextual | [mss_g1/smco_g1_profs_info_conocimientos_cv.jsp](mss_g1--smco_g1_profs_info_conocimientos_cv.md)                                                                                                       |
| BASE   | 511 | ../../tc_docs/tc_doc_initialize_include.jsp           | física     | [tc_docs/tc_doc_initialize_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_initialize_include.md)                                                                                          |
| BASE   | 532 | ../../tc_docs/tc_doc_include.jsp                      | física     | [tc_docs/tc_doc_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_include.md)                                                                                                                |
| BASE   | 545 | ../../tc_docs/tc_doc_include.jsp                      | física     | [tc_docs/tc_doc_include.jsp](../../transversal/dependencias/tc_docs--tc_doc_include.md)                                                                                                                |
| BASE   | 557 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_cv.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
