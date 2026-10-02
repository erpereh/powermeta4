# Descripción de la vacante

Identificador: `mss_g3/mss_g3_p1_des.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto                  | Ámbito | Diccionario                                                                       |
| -------------------------- | ---------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.mss_g3_p1_DtIncorp   | Fecha de incorporación | BASE   | [translations/mss_g3_es.properties:L65](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_wiz1Consid | Motivo de solicitud    | BASE   | [translations/mss_g3_es.properties:L55](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_des.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_des.jsp) | `39bfc205922401d8bf94678783830d2f5ffada345eb27c0e05432efeab770e28` |    350 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_des.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_des.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                        |
| --- | ------------------------------------------------------------------------------- |
| 7   | Descripción de la vacante                                                       |
| 211 | Vacante nº [valor dinámico]                                                     |
| 215 | Descripción de la información de la vacante. Detalle del proceso de selección " |
| 241 | Edad(min/max)                                                                   |
| 242 | Salario(min/max)                                                                |
| 246 | -                                                                               |
| 247 | -                                                                               |
| 254 | Puesto                                                                          |
| 255 | Sector                                                                          |
| 256 | Inicio                                                                          |
| 257 | Fin                                                                             |
| 271 | Nivel titulación                                                                |
| 272 | Tipo de formación                                                               |
| 273 | Especialidad                                                                    |
| 292 | Certificado                                                                     |
| 293 | Entidad emisora                                                                 |
| 294 | País                                                                            |
| 307 | Idioma                                                                          |
| 308 | Nivel lectura                                                                   |
| 309 | Nivel escritura                                                                 |
| 310 | Nivel oral                                                                      |
| 324 | Conocimientos                                                                   |
| 325 | Nivel                                                                           |
| 326 | Peso                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 214 | img     | alt=Detalles de la vacante; src=/iconos/noname_listado_63_80.gif; width=100; height=100; onmouseover=m4luztotal(this); onmouseout=m4oscuridad(this) |
| 218 | a       | class=enlacefuncional; title=Detalle del proceso de selección; href=javascript:Volver('&lt;%=zidproceso%&gt;','&lt;%=zactualpro%&gt;');             |
| 222 | a       | class=enlacefuncional; tabindex=2; title=&lt;m4:label m4name=; htmlsafe=true                                                                        |
| 222 | a       | href=&lt;%=zDes%&gt;; target=; onclick=window.open(this.href, this.target,'width=700,height=700,resizable,scrollbars');return false;                |
| 230 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp; method=post; name=Vacantes; id=Vacantes                                                 |
| 231 | input   | type=hidden; id=PRO; name=PRO; value=                                                                                                               |
| 232 | input   | type=hidden; id=ACT; name=ACT; value=                                                                                                               |
| 233 | input   | type=hidden; id=EST; name=EST; value=                                                                                                               |
| 234 | input   | type=hidden; id=zinicios; name=zinicios; value=&lt;%=zinicios%&gt;                                                                                  |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                              |
| --- | ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 15  | zidproceso       | Parametros.m4paramvalor ("PRO")                                         | Parametros.m4paramvalor ("PRO")                                                                                          |
| 17  | zorpuesto        | Parametros.m4paramvalor ("ORP")                                         | Parametros.m4paramvalor ("ORP")                                                                                          |
| 18  | zactualpro       | Parametros.m4paramvalor ("ACT")                                         | Parametros.m4paramvalor ("ACT")                                                                                          |
| 19  | zactual          | Parametros.m4paramvalor ("ACV")                                         | Parametros.m4paramvalor ("ACV")                                                                                          |
| 20  | estado           | Parametros.m4paramvalor ("EST")                                         | Parametros.m4paramvalor ("EST")                                                                                          |
| 21  | zinicios         | Parametros.m4paramvalor ("zinicios")                                    | Parametros.m4paramvalor ("zinicios")                                                                                     |
| 44  | zsubsesion       | "SSM_RECRUIT_PRO"                                                       | SSM_RECRUIT_PRO                                                                                                          |
| 45  | zmeta4object     | "SSM_RECRUIT_PRO"                                                       | SSM_RECRUIT_PRO                                                                                                          |
| 46  | znodo            | "SSM_JOB_POST_PRO"                                                      | SSM_JOB_POST_PRO                                                                                                         |
| 47  | znodofor         | "SSM_JOB_POST_ACAD_BACK"                                                | SSM_JOB_POST_ACAD_BACK                                                                                                   |
| 48  | znodocer         | "SSM_JOB_POST_CERT_LIC"                                                 | SSM_JOB_POST_CERT_LIC                                                                                                    |
| 49  | znodoidi         | "SSM_JOB_POST_LANG"                                                     | SSM_JOB_POST_LANG                                                                                                        |
| 50  | znodocon         | "SSM_JP_POST_COMP"                                                      | SSM_JP_POST_COMP                                                                                                         |
| 51  | znodoexp         | "SSM_JP_PREV_JOB"                                                       | SSM_JP_PREV_JOB                                                                                                          |
| 52  | znodopro         | "SSM_RECRUIT_PRO"                                                       | SSM_RECRUIT_PRO                                                                                                          |
| 56  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                        | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[*]"}                                                                              |
| 57  | zmove            | znodo + ":" + znodo + "[" + zactual + "]"                               | SSM_JOB_POST_PRO{":"}SSM_JOB_POST_PRO{"["}Parametros.m4paramvalor ("ACV"){"]"}                                           |
| 58  | zcomun           | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."       | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[&amp;VAR.m4lix]"}{"."}                                       |
| 60  | zoutputdeffor    | zsubsesion + "!" + znodofor + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[*]"}                                                                        |
| 61  | zmovefor         | znodofor + ":" + znodofor + "[FIRST]"                                   | SSM_JOB_POST_ACAD_BACK{":"}SSM_JOB_POST_ACAD_BACK{"[FIRST]"}                                                             |
| 62  | zcomunfor        | znodofor + ":" + zsubsesion + "!" + znodofor + "[&amp;VAR.m4lix]" + "." | SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}                           |
| 64  | zoutputdefcer    | zsubsesion + "!" + znodocer + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[*]"}                                                                         |
| 65  | zmovecer         | znodocer + ":" + znodocer + "[FIRST]"                                   | SSM_JOB_POST_CERT_LIC{":"}SSM_JOB_POST_CERT_LIC{"[FIRST]"}                                                               |
| 66  | zcomuncer        | znodocer + ":" + zsubsesion + "!" + znodocer + "[&amp;VAR.m4lix]" + "." | SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}                             |
| 68  | zoutputdefidi    | zsubsesion + "!" + znodoidi + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[*]"}                                                                             |
| 69  | zmoveidi         | znodoidi + ":" + znodoidi + "[FIRST]"                                   | SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                                                                       |
| 70  | zcomunidi        | znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&amp;VAR.m4lix]" + "." | SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}                                     |
| 72  | zoutputdefcon    | zsubsesion + "!" + znodocon + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[*]"}                                                                              |
| 73  | zmovecon         | znodocon + ":" + znodocon + "[FIRST]"                                   | SSM_JP_POST_COMP{":"}SSM_JP_POST_COMP{"[FIRST]"}                                                                         |
| 74  | zcomuncon        | znodocon + ":" + zsubsesion + "!" + znodocon + "[&amp;VAR.m4lix]" + "." | SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}                                       |
| 76  | zoutputdefexp    | zsubsesion + "!" + znodoexp + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[*]"}                                                                               |
| 77  | zmoveexp         | znodoexp + ":" + znodoexp + "[FIRST]"                                   | SSM_JP_PREV_JOB{":"}SSM_JP_PREV_JOB{"[FIRST]"}                                                                           |
| 78  | zcomunexp        | znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&amp;VAR.m4lix]" + "." | SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}                                         |
| 80  | zoutputdefpro    | zsubsesion + "!" + znodopro + "[*]"                                     | SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                               |
| 81  | zmovepro         | znodopro + ":" + znodopro + "[FIRST]"                                   | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"[FIRST]"}                                                                           |
| 82  | zcomunpro        | znodopro + ":" + zsubsesion + "!" + znodopro + "[&amp;VAR.m4lix]" + "." | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}                                         |
| 84  | zmetodocarga     | zsubsesion + "!SSM_RECRUIT_PRO.CARGA"                                   | SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                                |
| 85  | ztipocarga       | "DES"                                                                   | DES                                                                                                                      |
| 90  | zconsideraciones | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_CONSIDERATIONS"          | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_CONSIDERATIONS"}                                         |
| 91  | zfechaincorp     | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_DT_INCORPORATE"          | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_DT_INCORPORATE"}                                         |
| 92  | zedadmin         | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_AGE"                 | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MIN_AGE"}                                                |
| 93  | zedadmax         | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_AGE"                 | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MAX_AGE"}                                                |
| 94  | zsalariomin      | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_SALARY"              | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MIN_SALARY"}                                             |
| 95  | zsalariomax      | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_SALARY"              | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MAX_SALARY"}                                             |
| 96  | zmoneda          | znodo + ":" + zsubsesion + "!" + znodo + ".SCO_SALX_CURTYP"             | SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_SALX_CURTYP"}                                            |
| 100 | ztitulacion      | zcomunfor + "STD_N_DIPLOMA"                                             | SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}          |
| 101 | zformacion       | zcomunfor + "STD_N_EDU_TYPE"                                            | SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}         |
| 102 | zespecialidad    | zcomunfor + "STD_N_EDU_SP"                                              | SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}           |
| 105 | zcertificado     | zcomuncer + "STD_N_CERTIFICATION_TYPE"                                  | SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"} |
| 106 | zentidad         | zcomuncer + "SCO_N_ISSUE_ENTIT"                                         | SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}        |
| 107 | zpais            | zcomuncer + "STD_N_COUNTRY"                                             | SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}            |
| 110 | zidioma          | zcomunidi + "STD_N_LANGUAGE"                                            | SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                   |
| 111 | znivellee        | zcomunidi + "STD_N_LANG_LEVEL"                                          | SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                 |
| 112 | znivelhabla      | zcomunidi + "STD_N_LANG_LEVEL_1"                                        | SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}               |
| 113 | znivelescribe    | zcomunidi + "STD_N_LANG_LEVEL_2"                                        | SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}               |
| 116 | zconocimiento    | zcomuncon + "SCO_NM_EXTD_KN"                                            | SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                     |
| 117 | znivel           | zcomuncon + "SCO_MEANING"                                               | SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}                        |
| 118 | zpeso            | zcomuncon + "SCO_WEIGHT"                                                | SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}                         |
| 121 | zpuesto          | zcomunexp + "STD_N_JOB_CODE"                                            | SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                       |
| 122 | zsector          | zcomunexp + "STD_N_SECTOR"                                              | SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}                         |
| 123 | zinicio          | zcomunexp + "DT_START"                                                  | SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                             |
| 124 | zfin             | zcomunexp + "DT_END"                                                    | SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                               |
| 127 | zSTD_JOB_PATH    | znodopro + ":" + zsubsesion + "!" + znodopro + ".STD_JOB_PATH"          | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".STD_JOB_PATH"}                                                 |
| 128 | zpath            | zcomunpro + "STD_JOB_PATH"                                              | SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_JOB_PATH"}                         |
| 158 | zcountifor       | 0                                                                       | 0                                                                                                                        |
| 163 | zcountvfor       | String.valueOf(zcountifor)                                              | String.valueOf(zcountifor)                                                                                               |
| 164 | ztofor           | new Integer(new Integer(zcountvfor).intValue()-1).toString()            | new Integer(new Integer(zcountvfor).intValue()-1).toString()                                                             |
| 166 | zcounticer       | 0                                                                       | 0                                                                                                                        |
| 171 | zcountvcer       | String.valueOf(zcounticer)                                              | String.valueOf(zcounticer)                                                                                               |
| 172 | ztocer           | new Integer(new Integer(zcountvcer).intValue()-1).toString()            | new Integer(new Integer(zcountvcer).intValue()-1).toString()                                                             |
| 174 | zcountiidi       | 0                                                                       | 0                                                                                                                        |
| 179 | zcountvidi       | String.valueOf(zcountiidi)                                              | String.valueOf(zcountiidi)                                                                                               |
| 180 | ztoidi           | new Integer(new Integer(zcountvidi).intValue()-1).toString()            | new Integer(new Integer(zcountvidi).intValue()-1).toString()                                                             |
| 182 | zcounticon       | 0                                                                       | 0                                                                                                                        |
| 187 | zcountvcon       | String.valueOf(zcounticon)                                              | String.valueOf(zcounticon)                                                                                               |
| 188 | ztocon           | new Integer(new Integer(zcountvcon).intValue()-1).toString()            | new Integer(new Integer(zcountvcon).intValue()-1).toString()                                                             |
| 190 | zcountiexp       | 0                                                                       | 0                                                                                                                        |
| 195 | zcountvexp       | String.valueOf(zcountiexp)                                              | String.valueOf(zcountiexp)                                                                                               |
| 196 | ztoexp           | new Integer(new Integer(zcountvexp).intValue()-1).toString()            | new Integer(new Integer(zcountvexp).intValue()-1).toString()                                                             |
| 198 | zcountipro       | 0                                                                       | 0                                                                                                                        |
| 203 | zcountvpro       | String.valueOf(zcountipro)                                              | String.valueOf(zcountipro)                                                                                               |
| 204 | ztopro           | new Integer(new Integer(zcountvpro).intValue()-1).toString()            | new Integer(new Integer(zcountvpro).intValue()-1).toString()                                                             |
| 206 | zdatos           | 0                                                                       | 0                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 130 | m4:startpage | m4task=SSM_RECRUIT_PRO                                                                                                          |
| 131 | m4:beginjob  |                                                                                                                                 |
| 132 | m4:datadef   | m4o=SSM_RECRUIT_PRO; m4name=SSM_RECRUIT_PRO                                                                                     |
| 139 | m4:exec      | m4method=SSM_RECRUIT_PRO{"!SSM_RECRUIT_PRO.CARGA"}                                                                              |
| 139 | m4:param     | name=TIPO_CARGA; value=DES                                                                                                      |
| 140 | m4:outputdef | m4alias=SSM_JOB_POST_PRO                                                                                                        |
| 140 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{"[*]"}                                                                 |
| 141 | m4:outputdef | m4alias=SSM_JOB_POST_ACAD_BACK                                                                                                  |
| 141 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[*]"}                                                           |
| 142 | m4:outputdef | m4alias=SSM_JOB_POST_CERT_LIC                                                                                                   |
| 142 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[*]"}                                                            |
| 143 | m4:outputdef | m4alias=SSM_JOB_POST_LANG                                                                                                       |
| 143 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[*]"}                                                                |
| 144 | m4:outputdef | m4alias=SSM_JP_POST_COMP                                                                                                        |
| 144 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[*]"}                                                                 |
| 145 | m4:outputdef | m4alias=SSM_JP_PREV_JOB                                                                                                         |
| 145 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[*]"}                                                                  |
| 146 | m4:outputdef | m4alias=SSM_RECRUIT_PRO                                                                                                         |
| 146 | m4:param     | name=m4name0; value=SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{"[*]"}                                                                  |
| 147 | m4:endjob    |                                                                                                                                 |
| 148 | m4:move      |                                                                                                                                 |
| 148 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_PRO{":"}SSM_JOB_POST_PRO{"["}Parametros.m4paramvalor ("ACV"){"]"}                      |
| 149 | m4:move      |                                                                                                                                 |
| 149 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_ACAD_BACK{":"}SSM_JOB_POST_ACAD_BACK{"[FIRST]"}                                        |
| 150 | m4:move      |                                                                                                                                 |
| 150 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_CERT_LIC{":"}SSM_JOB_POST_CERT_LIC{"[FIRST]"}                                          |
| 151 | m4:move      |                                                                                                                                 |
| 151 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                                                  |
| 152 | m4:move      |                                                                                                                                 |
| 152 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JP_POST_COMP{":"}SSM_JP_POST_COMP{"[FIRST]"}                                                    |
| 153 | m4:move      |                                                                                                                                 |
| 153 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_JP_PREV_JOB{":"}SSM_JP_PREV_JOB{"[FIRST]"}                                                      |
| 154 | m4:move      |                                                                                                                                 |
| 154 | m4:param     | name=SSM_RECRUIT_PRO; value=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"[FIRST]"}                                                      |
| 156 | m4:item      | m4varname=zDes; m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".STD_JOB_PATH"}; htmlsafe=true                  |
| 222 | m4:label     | m4name=SSM_RECRUIT_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_RECRUIT_PRO{".STD_JOB_PATH"}; htmlsafe=true                                  |
| 246 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MIN_AGE"}                                                |
| 246 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MAX_AGE"}                                                |
| 247 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MIN_SALARY"}                                             |
| 247 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_MAX_SALARY"}                                             |
| 247 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_SALX_CURTYP"}                                            |
| 248 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_DT_INCORPORATE"}                                         |
| 259 | m4:loop      | from=0; to=new Integer(new Integer(zcountvexp).intValue()-1).toString()                                                         |
| 261 | m4:item      | m4name=SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                       |
| 262 | m4:item      | m4name=SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SECTOR"}                         |
| 263 | m4:item      | m4name=SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                             |
| 264 | m4:item      | m4name=SSM_JP_PREV_JOB{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_PREV_JOB{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                               |
| 275 | m4:loop      | from=0; to=new Integer(new Integer(zcountvfor).intValue()-1).toString()                                                         |
| 276 | m4:item      | m4varname=zSTDNDIPLEVEL; item=STD_N_DIP_LEVEL; htmlsafe=true; outputdef=SSM_JOB_POST_ACAD_BACK                                  |
| 278 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_DIPLOMA"}          |
| 284 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_TYPE"}         |
| 285 | m4:item      | m4name=SSM_JOB_POST_ACAD_BACK{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_ACAD_BACK{"[&amp;VAR.m4lix]"}{"."}{"STD_N_EDU_SP"}           |
| 296 | m4:loop      | from=0; to=new Integer(new Integer(zcountvcer).intValue()-1).toString()                                                         |
| 298 | m4:item      | m4name=SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_CERTIFICATION_TYPE"} |
| 299 | m4:item      | m4name=SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ISSUE_ENTIT"}        |
| 300 | m4:item      | m4name=SSM_JOB_POST_CERT_LIC{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_CERT_LIC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}            |
| 312 | m4:loop      | from=0; to=new Integer(new Integer(zcountvidi).intValue()-1).toString()                                                         |
| 314 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}                   |
| 315 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL"}                 |
| 316 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_2"}               |
| 317 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANG_LEVEL_1"}               |
| 328 | m4:loop      | from=0; to=new Integer(new Integer(zcountvcon).intValue()-1).toString()                                                         |
| 330 | m4:item      | m4name=SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                     |
| 331 | m4:item      | m4name=SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}                        |
| 332 | m4:item      | m4name=SSM_JP_POST_COMP{":"}SSM_RECRUIT_PRO{"!"}SSM_JP_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_WEIGHT"}                         |
| 342 | m4:item      | m4name=SSM_JOB_POST_PRO{":"}SSM_RECRUIT_PRO{"!"}SSM_JOB_POST_PRO{".SCO_CONSIDERATIONS"}                                         |
| 348 | m4:endpage   |                                                                                                                                 |

| L   | Operación        | Argumentos literales                                      |
| --- | ---------------- | --------------------------------------------------------- |
| 135 | setItem          | zsubsesion,znodopro,"","SCO_OR_RECRUIT_PR_ARG",zidproceso |
| 136 | setItem          | zsubsesion,znodopro,"","SCO_OR_JOB_POST_ARG",zorpuesto    |
| 161 | getCountInClient | znodofor,zsubsesion,znodofor                              |
| 169 | getCountInClient | znodocer,zsubsesion,znodocer                              |
| 177 | getCountInClient | znodoidi,zsubsesion,znodoidi                              |
| 185 | getCountInClient | znodocon,zsubsesion,znodocon                              |
| 193 | getCountInClient | znodoexp,zsubsesion,znodoexp                              |
| 201 | getCountInClient | znodopro,zsubsesion,znodopro                              |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos      |
| --- | ------- | --------------- |
| 32  | Volver  | proceso, actual |

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 23  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                              |
| 26  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                          |
| 219 | &lt;%if (zDes.equals("")){                                                                                                       |
| 221 | }else{%&gt;                                                                                                                      |
| 251 | &lt;% if (zcountiexp &gt; 0) {%&gt;                                                                                              |
| 268 | &lt;%} if (zcountifor &gt; 0) {%&gt;                                                                                             |
| 279 | &lt;%if ((zSTDNDIPLEVEL==null)&#124;&#124;(zSTDNDIPLEVEL.equals(""))){ %&gt;                                                     |
| 281 | &lt;%} else {%&gt;                                                                                                               |
| 289 | &lt;% }if (zcounticer &gt; 0) {%&gt;                                                                                             |
| 304 | &lt;%} if (zcountiidi &gt; 0) {%&gt;                                                                                             |
| 321 | &lt;%} if (zcounticon &gt; 0) {%&gt;                                                                                             |
| 56  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                       |
| 57  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zactual + "]";                                   |
| 58  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";          |
| 60  | expresión de cálculo/transformación: String zoutputdeffor = zsubsesion + "!" + znodofor + "[*]";                                 |
| 61  | expresión de cálculo/transformación: String zmovefor = znodofor + ":" + znodofor + "[FIRST]";                                    |
| 62  | expresión de cálculo/transformación: String zcomunfor = znodofor + ":" + zsubsesion + "!" + znodofor + "[&amp;VAR.m4lix]" + "."; |
| 64  | expresión de cálculo/transformación: String zoutputdefcer = zsubsesion + "!" + znodocer + "[*]";                                 |
| 65  | expresión de cálculo/transformación: String zmovecer = znodocer + ":" + znodocer + "[FIRST]";                                    |
| 66  | expresión de cálculo/transformación: String zcomuncer = znodocer + ":" + zsubsesion + "!" + znodocer + "[&amp;VAR.m4lix]" + "."; |
| 68  | expresión de cálculo/transformación: String zoutputdefidi = zsubsesion + "!" + znodoidi + "[*]";                                 |
| 69  | expresión de cálculo/transformación: String zmoveidi = znodoidi + ":" + znodoidi + "[FIRST]";                                    |
| 70  | expresión de cálculo/transformación: String zcomunidi = znodoidi + ":" + zsubsesion + "!" + znodoidi + "[&amp;VAR.m4lix]" + "."; |
| 72  | expresión de cálculo/transformación: String zoutputdefcon = zsubsesion + "!" + znodocon + "[*]";                                 |
| 73  | expresión de cálculo/transformación: String zmovecon = znodocon + ":" + znodocon + "[FIRST]";                                    |
| 74  | expresión de cálculo/transformación: String zcomuncon = znodocon + ":" + zsubsesion + "!" + znodocon + "[&amp;VAR.m4lix]" + "."; |
| 76  | expresión de cálculo/transformación: String zoutputdefexp = zsubsesion + "!" + znodoexp + "[*]";                                 |
| 77  | expresión de cálculo/transformación: String zmoveexp = znodoexp + ":" + znodoexp + "[FIRST]";                                    |
| 78  | expresión de cálculo/transformación: String zcomunexp = znodoexp + ":" + zsubsesion + "!" + znodoexp + "[&amp;VAR.m4lix]" + "."; |
| 80  | expresión de cálculo/transformación: String zoutputdefpro = zsubsesion + "!" + znodopro + "[*]";                                 |
| 81  | expresión de cálculo/transformación: String zmovepro = znodopro + ":" + znodopro + "[FIRST]";                                    |
| 82  | expresión de cálculo/transformación: String zcomunpro = znodopro + ":" + zsubsesion + "!" + znodopro + "[&amp;VAR.m4lix]" + "."; |
| 84  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_RECRUIT_PRO.CARGA";                                |
| 90  | expresión de cálculo/transformación: String zconsideraciones = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_CONSIDERATIONS";   |
| 91  | expresión de cálculo/transformación: String zfechaincorp = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_DT_INCORPORATE";       |
| 92  | expresión de cálculo/transformación: String zedadmin = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_AGE";                  |
| 93  | expresión de cálculo/transformación: String zedadmax = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_AGE";                  |
| 94  | expresión de cálculo/transformación: String zsalariomin = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MIN_SALARY";            |
| 95  | expresión de cálculo/transformación: String zsalariomax = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_MAX_SALARY";            |
| 96  | expresión de cálculo/transformación: String zmoneda = znodo + ":" + zsubsesion + "!" + znodo + ".SCO_SALX_CURTYP";               |
| 100 | expresión de cálculo/transformación: String ztitulacion = zcomunfor + "STD_N_DIPLOMA";                                           |
| 101 | expresión de cálculo/transformación: String zformacion = zcomunfor + "STD_N_EDU_TYPE";                                           |
| 102 | expresión de cálculo/transformación: String zespecialidad = zcomunfor + "STD_N_EDU_SP";                                          |
| 105 | expresión de cálculo/transformación: String zcertificado = zcomuncer + "STD_N_CERTIFICATION_TYPE";                               |
| 106 | expresión de cálculo/transformación: String zentidad = zcomuncer + "SCO_N_ISSUE_ENTIT";                                          |
| 107 | expresión de cálculo/transformación: String zpais = zcomuncer + "STD_N_COUNTRY";                                                 |
| 110 | expresión de cálculo/transformación: String zidioma = zcomunidi + "STD_N_LANGUAGE";                                              |
| 111 | expresión de cálculo/transformación: String znivellee = zcomunidi + "STD_N_LANG_LEVEL";                                          |
| 112 | expresión de cálculo/transformación: String znivelhabla = zcomunidi + "STD_N_LANG_LEVEL_1";                                      |
| 113 | expresión de cálculo/transformación: String znivelescribe = zcomunidi + "STD_N_LANG_LEVEL_2";                                    |
| 116 | expresión de cálculo/transformación: String zconocimiento = zcomuncon + "SCO_NM_EXTD_KN";                                        |
| 117 | expresión de cálculo/transformación: String znivel = zcomuncon + "SCO_MEANING";                                                  |
| 118 | expresión de cálculo/transformación: String zpeso = zcomuncon + "SCO_WEIGHT";                                                    |
| 121 | expresión de cálculo/transformación: String zpuesto = zcomunexp + "STD_N_JOB_CODE";                                              |
| 122 | expresión de cálculo/transformación: String zsector = zcomunexp + "STD_N_SECTOR";                                                |
| 123 | expresión de cálculo/transformación: String zinicio = zcomunexp + "DT_START";                                                    |
| 124 | expresión de cálculo/transformación: String zfin = zcomunexp + "DT_END";                                                         |
| 127 | expresión de cálculo/transformación: String zSTD_JOB_PATH = znodopro + ":" + zsubsesion + "!" + znodopro + ".STD_JOB_PATH";      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 11  | /mss_g3/mss_g3_trans.jsp                              |
| 41  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 42  | ../../sse_generico/espanol/generico_links.jsp         |
| 345 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 8   | /css/estilo_mss.css                                   |
| 9   | /libreria/funciones_sse.js                            |
| 214 | /iconos/noname_listado_63_80.gif                      |
| 218 | javascript:Volver(                                    |
| 222 | &lt;%=zDes%&gt;                                       |
| 230 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 11  | /mss_g3/mss_g3_trans.jsp                              |
| 41  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 42  | ../../sse_generico/espanol/generico_links.jsp         |
| 345 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ----------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                              | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                              |
| BASE   | 41  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 42  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 345 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 9   | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 218 | javascript:Volver(                                    | dinámica   | P06                                                                                             |
| BASE   | 222 | &lt;%=zDes%&gt;                                       | dinámica   | P06                                                                                             |
| BASE   | 230 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_det.jsp   | ausente    | P06                                                                                             |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 11  | /mss_g3/mss_g3_trans.jsp                              | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                              |
| BASE   | 41  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 42  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 345 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_des.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
