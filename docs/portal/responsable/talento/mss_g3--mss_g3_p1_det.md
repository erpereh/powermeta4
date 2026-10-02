# Detalle de procesos de selección

Identificador: `mss_g3/mss_g3_p1_det.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_det.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_det.jsp) | `1083ab617d3ab8b0697b4e31c979162cec3aa7d6a136fe5a5d7b3f7eeda90aaf` |    257 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_det.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_det.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Detalle de procesos de selección                                                                                                                                 |
| 156 | Estas son las vacantes del proceso de selección y sus candidatos. Accede a la descripción de la vacante y al C.V. de los candidatos. Sigue los procesos abiertos |
| 165 | Puesto vacante                                                                                                                                                   |
| 166 | Responsable                                                                                                                                                      |
| 167 | Área                                                                                                                                                             |
| 183 | Datos de las vacantes                                                                                                                                            |
| 185 | Lugar de trabajo                                                                                                                                                 |
| 186 | Movilidad(nac/int)                                                                                                                                               |
| 194 | ','[valor dinámico]','[valor dinámico]');"&gt; Vacante nº                                                                                                        |
| 197 | -                                                                                                                                                                |
| 211 | Candidatos                                                                                                                                                       |
| 212 | Estado                                                                                                                                                           |
| 213 | Tipo                                                                                                                                                             |
| 214 | Fecha de inicio                                                                                                                                                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 155 | img     | alt=Descripción; src=/iconos/noname_listado_63_80.gif; width=100; height=100                                                           |
| 158 | a       | class=enlacefuncional; title=Sigue los procesos abiertos; href=mss_g3_p1.jsp?estado=31                                                 |
| 194 | a       | title=Descripción de la vacante; href=javascript:Enviarvacante('&lt;%=zidproceso%&gt;','&lt;m4:item m4name=; jsafe=true; htmlsafe=true |
| 223 | a       | title=Ver su C.V.; href=javascript:load_cv('&lt;%=person%&gt;');                                                                       |
| 246 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_des.jsp; method=post; name=Vacante; id=Vacante                                      |
| 247 | input   | type=hidden; id=PRO; name=PRO; value=                                                                                                  |
| 248 | input   | type=hidden; id=ORP; name=ORP; value=                                                                                                  |
| 249 | input   | type=hidden; id=ACT; name=ACT; value=                                                                                                  |
| 250 | input   | type=hidden; id=ACV; name=ACV; value=                                                                                                  |
| 251 | input   | type=hidden; id=EST; name=EST; value=                                                                                                  |
| 252 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                        |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                                  | Resolución estática parcial                                                                                                                  |
| --- | ---------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | zidproceso             | Parametros.m4paramvalor ("PRO")                                                   | Parametros.m4paramvalor ("PRO")                                                                                                              |
| 15  | zactual                | Parametros.m4paramvalor ("ACT")                                                   | Parametros.m4paramvalor ("ACT")                                                                                                              |
| 16  | estado                 | Parametros.m4paramvalor ("EST")                                                   | Parametros.m4paramvalor ("EST")                                                                                                              |
| 17  | zinicios               | Parametros.m4paramvalor ("zinicios")                                              | Parametros.m4paramvalor ("zinicios")                                                                                                         |
| 49  | zsubsesion             | "SSM_RECRUIT_PRO"                                                                 | SSM_RECRUIT_PRO                                                                                                                              |
| 50  | zmeta4object           | "SSM_RECRUIT_PRO"                                                                 | SSM_RECRUIT_PRO                                                                                                                              |
| 51  | znodo                  | "SSM_RECRUIT_PRO"                                                                 | SSM_RECRUIT_PRO                                                                                                                              |
| 52  | znodovac               | "SSM_JOB_POST_PRO"                                                                | SSM_JOB_POST_PRO                                                                                                                             |
| 53  | znodocan               | "SSM_APP_RECRUIT_PRO"                                                             | SSM_APP_RECRUIT_PRO                                                                                                                          |
| 55  | zventanas              | "10"                                                                              | 10                                                                                                                                           |
| 56  | zvuelta                | 5                                                                                 | 5                                                                                                                                            |
| 57  | zdireccion             | "mss_g3/mss_g3_p1_det.jsp"                                                        | mss_g3/mss_g3_p1_det.jsp                                                                                                                     |
| 58  | zestado                | "31"                                                                              | 31                                                                                                                                           |
| 62  | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                              | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 64  | zventana               | Integer.valueOf(zventanas).intValue()                                             | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 65  | zregistrofinal         | zregistroinicial + zventana - 1                                                   | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 67  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                                  | SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                                                   |
| 68  | zmove                  | znodo + ":" + znodo + "[" + zactual + "]"                                         | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"["}Parametros.m4paramvalor ("ACT"){"]"}                                                                 |
| 70  | zoutputdefvac          | zsubsesion + "!" + znodovac + "[*]"                                               | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[*]"}                                                                                                  |
| 71  | zmovevac               | znodovac + ":" + znodovac + "[FIRST]"                                             | SSM_JOB_POST_PRO{":"}SSM_JOB_POST_PRO{"[FIRST]"}                                                                                             |
| 72  | zcomunvac              | znodovac + ":" + zsubsesion + "!" + znodovac + "[&amp;VAR.m4lix]" + "."           | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 74  | zoutputdefcan          | zsubsesion + "!" + znodocan + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 75  | zmovecan               | znodocan + ":" + znodocan + "[" + zregistroinicial + "]"                          | SSM_APP_RECRUIT_PRO{":"}SSM_APP_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 76  | zcomuncan              | znodocan + ":" + zsubsesion + "!" + znodocan + "[&amp;VAR.m4lix]" + "."           | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 78  | zmetodocarga           | zsubsesion + "!SSM_RECRUIT_PRO.CARGA"                                             | SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                                                    |
| 79  | ztipocarga             | "DET"                                                                             | DET                                                                                                                                          |
| 83  | zproceso               | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_RECRUITMENT"                    | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_NM_RECRUITMENT"}                                                               |
| 84  | zarea                  | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_N_AREA"                            | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_N_AREA"}                                                                       |
| 85  | znombre                | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_GB_NAME"                           | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_GB_NAME"}                                                                      |
| 88  | zpuesto                | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_JOB_POSITION"                   | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_NM_JOB_POSITION"}                                                              |
| 90  | zorpuesto              | zcomunvac + "SCO_OR_JOB_POST"                                                     | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_JOB_POST"}                                        |
| 91  | zlugartrabajo          | zcomunvac + "STD_N_WORK_LOCATION"                                                 | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}                                    |
| 92  | zunidadorganiz         | zcomunvac + "STD_N_WORK_UNIT"                                                     | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}                                        |
| 93  | zmovilidadnac          | zcomunvac + "MOVILIDAD_NAC"                                                       | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}                                          |
| 94  | zmovilidadint          | zcomunvac + "MOVILIDAD_INT"                                                       | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}                                          |
| 95  | zsalariomax            | zcomunvac + "SCO_MAX_SALARY"                                                      | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_MAX_SALARY"}                                         |
| 96  | zsalariomin            | zcomunvac + "SCO_MIN_SALARY"                                                      | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_SALARY"}                                         |
| 97  | zedadmax               | zcomunvac + "SCO_MAX_AGE"                                                         | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_MAX_AGE"}                                            |
| 98  | zedadmin               | zcomunvac + "SCO_MIN_AGE"                                                         | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_MIN_AGE"}                                            |
| 100 | zidcandidato           | zcomuncan + "SCO_ID_APP"                                                          | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_APP"}                                       |
| 101 | znombreglobalcandidato | zcomuncan + "SCO_GB_NAME"                                                         | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                      |
| 102 | zapellidoscandidato    | zcomuncan + "STD_N_FAMILY_NAME_1"                                                 | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAMILY_NAME_1"}                              |
| 103 | znmestado              | zcomuncan + "SCO_NM_APP_STATUS"                                                   | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_APP_STATUS"}                                |
| 104 | ztipo                  | zcomuncan + "SCO_NM_APP_TYPE"                                                     | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_APP_TYPE"}                                  |
| 105 | zfechainicio           | zcomuncan + "SCO_DT_START_APP"                                                    | SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_APP"}                                 |
| 125 | zcountivac             | 0                                                                                 | 0                                                                                                                                            |
| 130 | zcountvvac             | String.valueOf(zcountivac)                                                        | String.valueOf(zcountivac)                                                                                                                   |
| 131 | ztovac                 | new Integer(new Integer(zcountvvac).intValue()-1).toString()                      | new Integer(new Integer(zcountvvac).intValue()-1).toString()                                                                                 |
| 133 | zcountcan              | 0                                                                                 | 0                                                                                                                                            |
| 134 | zcountican             | 0                                                                                 | 0                                                                                                                                            |
| 144 | zcountvcan             | String.valueOf(zcountican)                                                        | String.valueOf(zcountican)                                                                                                                   |
| 145 | ztocan                 | new Integer(new Integer(zcountvcan).intValue()-1).toString()                      | new Integer(new Integer(zcountvcan).intValue()-1).toString()                                                                                 |
| 146 | zcount                 | zcountcan                                                                         | 0                                                                                                                                            |
| 178 | zpos                   | "0"                                                                               | 0                                                                                                                                            |
| 179 | zindice                | 0                                                                                 | 0                                                                                                                                            |
| 205 | zregistroinicials      | String.valueOf(zregistroinicial)                                                  | String.valueOf(zregistroinicial)                                                                                                             |
| 206 | zregistrofinals        | String.valueOf(zregistroinicial + zcountican - 1)                                 | {String.valueOf(zregistroinicial}{zcountican - 1)}                                                                                           |
| 207 | person                 | ""                                                                                |                                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 108 | m4:startpage | m4task=SSM_RECRUIT_PRO                                                                                                                                           |
| 108 | m4:beginjob  |                                                                                                                                                                  |
| 109 | m4:datadef   | m4o=SSM_RECRUIT_PRO; m4name=SSM_RECRUIT_PRO                                                                                                                      |
| 115 | m4:exec      | m4method=SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                                                               |
| 115 | m4:param     | name=TIPO_CARGA; value=DET                                                                                                                                       |
| 116 | m4:outputdef | m4alias=SSM_RECRUIT_PRO                                                                                                                                          |
| 116 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                                                   |
| 117 | m4:outputdef | m4alias=SSM_JOB_POST_PRO                                                                                                                                         |
| 117 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[*]"}                                                                                                  |
| 118 | m4:outputdef | m4alias=SSM_APP_RECRUIT_PRO                                                                                                                                      |
| 118 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 119 | m4:endjob    |                                                                                                                                                                  |
| 120 | m4:move      |                                                                                                                                                                  |
| 120 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"["}Parametros.m4paramvalor ("ACT"){"]"}                                                         |
| 121 | m4:move      |                                                                                                                                                                  |
| 121 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_PRO{":"}SSM_JOB_POST_PRO{"[FIRST]"}                                                                                     |
| 122 | m4:move      |                                                                                                                                                                  |
| 122 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_APP_RECRUIT_PRO{":"}SSM_APP_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"]"}                                            |
| 152 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_NM_RECRUITMENT"}; htmlsafe=true                                                             |
| 170 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_NM_JOB_POSITION"}; htmlsafe=true                                                            |
| 171 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_GB_NAME"}; htmlsafe=true                                                                    |
| 172 | m4:item      | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".SCO_N_AREA"}; htmlsafe=true                                                                     |
| 184 | m4:label     | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                      |
| 188 | m4:loop      | from=0; to=new Integer(new Integer(zcountvvac).intValue()-1).toString()                                                                                          |
| 194 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_JOB_POST"}; htmlsafe=true                                      |
| 195 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                      |
| 196 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_LOCATION"}; htmlsafe=true                                  |
| 197 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_NAC"}; htmlsafe=true                                        |
| 197 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}{"MOVILIDAD_INT"}; htmlsafe=true                                        |
| 217 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcountican - 1)}                                                                     |
| 219 | m4:item      | m4name=SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_APP"}; htmlsafe=true; var=                               |
| 223 | m4:item      | m4name=SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                    |
| 224 | m4:item      | m4name=SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_APP_STATUS"}; htmlsafe=true                              |
| 225 | m4:item      | m4name=SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_APP_TYPE"}; htmlsafe=true                                |
| 226 | m4:item      | m4name=SSM_APP_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_APP_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_APP"}; htmlsafe=true                               |
| 256 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 112 | setItem          | zsubsesion,znodo,"","SCO_OR_RECRUIT_PR_ARG",zidproceso |
| 128 | getCountInClient | znodovac,zsubsesion,znodovac                           |
| 137 | getCount         | znodocan,zsubsesion,znodocan                           |
| 142 | getCountInClient | znodocan,zsubsesion,znodocan                           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos                           |
| --- | ------------- | ------------------------------------ |
| 28  | Enviarvacante | proceso, orpuesto, actual, actualvac |
| 37  | load_cv       | empleado                             |

| L   | Condición / acción / mensaje literal                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                 |
| 22  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                                                                             |
| 177 | if (zcountivac &gt; 0) {                                                                                                                                                                            |
| 204 | if (zcountican &gt; 0) {                                                                                                                                                                            |
| 233 | }else{%&gt;                                                                                                                                                                                         |
| 237 | }else {                                                                                                                                                                                             |
| 38  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person=" + empleado + "&amp;RET=DAT"; |
| 63  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                       |
| 65  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                          |
| 67  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                          |
| 68  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zactual + "]";                                                                                                      |
| 70  | expresión de cálculo/transformación: String zoutputdefvac = zsubsesion + "!" + znodovac + "[*]";                                                                                                    |
| 71  | expresión de cálculo/transformación: String zmovevac = znodovac + ":" + znodovac + "[FIRST]";                                                                                                       |
| 72  | expresión de cálculo/transformación: String zcomunvac = znodovac + ":" + zsubsesion + "!" + znodovac + "[&amp;VAR.m4lix]" + ".";                                                                    |
| 74  | expresión de cálculo/transformación: String zoutputdefcan = zsubsesion + "!" + znodocan + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                      |
| 75  | expresión de cálculo/transformación: String zmovecan = znodocan + ":" + znodocan + "[" + zregistroinicial + "]";                                                                                    |
| 76  | expresión de cálculo/transformación: String zcomuncan = znodocan + ":" + zsubsesion + "!" + znodocan + "[&amp;VAR.m4lix]" + ".";                                                                    |
| 78  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";                                                                                                   |
| 83  | expresión de cálculo/transformación: String zproceso = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_RECRUITMENT";                                                                              |
| 84  | expresión de cálculo/transformación: String zarea = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_N_AREA";                                                                                         |
| 85  | expresión de cálculo/transformación: String znombre = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_GB_NAME";                                                                                      |
| 88  | expresión de cálculo/transformación: String zpuesto = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_NM_JOB_POSITION";                                                                              |
| 90  | expresión de cálculo/transformación: String zorpuesto = zcomunvac + "SCO_OR_JOB_POST";                                                                                                              |
| 91  | expresión de cálculo/transformación: String zlugartrabajo = zcomunvac + "STD_N_WORK_LOCATION";                                                                                                      |
| 92  | expresión de cálculo/transformación: String zunidadorganiz = zcomunvac + "STD_N_WORK_UNIT";                                                                                                         |
| 93  | expresión de cálculo/transformación: String zmovilidadnac = zcomunvac + "MOVILIDAD_NAC";                                                                                                            |
| 94  | expresión de cálculo/transformación: String zmovilidadint = zcomunvac + "MOVILIDAD_INT";                                                                                                            |
| 95  | expresión de cálculo/transformación: String zsalariomax = zcomunvac + "SCO_MAX_SALARY";                                                                                                             |
| 96  | expresión de cálculo/transformación: String zsalariomin = zcomunvac + "SCO_MIN_SALARY";                                                                                                             |
| 97  | expresión de cálculo/transformación: String zedadmax = zcomunvac + "SCO_MAX_AGE";                                                                                                                   |
| 98  | expresión de cálculo/transformación: String zedadmin = zcomunvac + "SCO_MIN_AGE";                                                                                                                   |
| 100 | expresión de cálculo/transformación: String zidcandidato = zcomuncan + "SCO_ID_APP";                                                                                                                |
| 101 | expresión de cálculo/transformación: String znombreglobalcandidato = zcomuncan + "SCO_GB_NAME";                                                                                                     |
| 103 | expresión de cálculo/transformación: String znmestado = zcomuncan + "SCO_NM_APP_STATUS";                                                                                                            |
| 104 | expresión de cálculo/transformación: String ztipo = zcomuncan + "SCO_NM_APP_TYPE";                                                                                                                  |
| 105 | expresión de cálculo/transformación: String zfechainicio = zcomuncan + "SCO_DT_START_APP";                                                                                                          |
| 206 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcountican - 1);                                                                                    |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 46  | ../../sse_generico/espanol/generico_links.jsp         |
| 231 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 244 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                                                     |
| 9   | /libreria/funciones_sse.js                                                                                              |
| 155 | /iconos/noname_listado_63_80.gif                                                                                        |
| 158 | mss_g3_p1.jsp?estado=31                                                                                                 |
| 194 | javascript:Enviarvacante(                                                                                               |
| 223 | javascript:load_cv(                                                                                                     |
| 246 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_des.jsp                                                                     |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                                                                                 |
| 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= |
| 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                      |
| 46  | ../../sse_generico/espanol/generico_links.jsp                                                                           |
| 57  | mss_g3/mss_g3_p1_det.jsp                                                                                                |
| 231 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                   |
| 244 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                              | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ----------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                                                                 | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                      | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp                                                                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 231 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                   | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 244 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                   | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 9   | /libreria/funciones_sse.js                                                                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 158 | mss_g3_p1.jsp?estado=31                                                                                                 | física     | [mss_g3/mss_g3_p1.jsp](mss_g3--mss_g3_p1.md)                                                                    |
| BASE   | 194 | javascript:Enviarvacante(                                                                                               | dinámica   | P06                                                                                                             |
| BASE   | 223 | javascript:load_cv(                                                                                                     | dinámica   | P06                                                                                                             |
| BASE   | 246 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_des.jsp                                                                     | ausente    | P06                                                                                                             |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                                                                 | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&amp;cabecera=1&amp;zVis=0&amp;person= | ausente    | P06                                                                                                             |
| BASE   | 45  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                      | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp                                                                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 57  | mss_g3/mss_g3_p1_det.jsp                                                                                                | ausente    | P06                                                                                                             |
| BASE   | 231 | ../../sse_generico/espanol/generico_ventanas_post.jsp                                                                   | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 244 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                   | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_det.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
