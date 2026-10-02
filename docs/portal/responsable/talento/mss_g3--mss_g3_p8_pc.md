# Plan de carrera

Identificador: `mss_g3/mss_g3_p8_pc.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                                                                                                                | Ámbito | Diccionario                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------- |
| Label.Linkgap         | Información detallada                                                                                                                | BASE   | [translations/mss_g3_es.properties:L34](../../referencias/literales/mss_g3_es.md) |
| Label.Linkgap         | Información detallada                                                                                                                | BASE   | [translations/sse_g3_es.properties:L70](../../referencias/literales/sse_g3_es.md) |
| Label.Plan            | Este es el plan de carrera de tu empleado, y su gap con cada puesto.Para conocer la descripción de cada puesto situate en el nombre. | BASE   | [translations/mss_g3_es.properties:L32](../../referencias/literales/mss_g3_es.md) |
| Label.Plan            | Consulta tu plan de carrera, y tu gap con cada puesto.Para conocer la descripción de cada puesto situate en el nombre.               | BASE   | [translations/sse_g3_es.properties:L68](../../referencias/literales/sse_g3_es.md) |
| Label.Plangap         | El gap es la distancia que hay entre los niveles de tus conocimientos con respecto a los necesarios para desempeñar un puesto.       | BASE   | [translations/mss_g3_es.properties:L33](../../referencias/literales/mss_g3_es.md) |
| Label.Plangap         | El gap es la distancia que hay entre los niveles de tus conocimientos con respecto a los necesarios para desempeñar un puesto.       | BASE   | [translations/sse_g3_es.properties:L69](../../referencias/literales/sse_g3_es.md) |
| Label.mss_g3_p8_pc    | Plan de carrera del empleado                                                                                                         | BASE   | [translations/mss_g3_es.properties:L30](../../referencias/literales/mss_g3_es.md) |
| Label.smco_g3_p30_pet | Ir a solicita una entrevista                                                                                                         | BASE   | [translations/mss_g3_es.properties:L38](../../referencias/literales/mss_g3_es.md) |
| Link.smco_g3_p30_pet  | Solicita una entrevista                                                                                                              | BASE   | [translations/mss_g3_es.properties:L37](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p8_pc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8_pc.jsp) | `9cdd6458f524b1f4fece9b635838d5584f51120101f7beffae2e9f9f5c0ea8d2` |    206 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p8_pc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p8_pc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                            |
| --- | ------------------------------------------------------------------- |
| 7   | Plan de carrera                                                     |
| 147 | [valor dinámico] :                                                  |
| 150 | [valor dinámico][valor dinámico] Planes de carrera [valor dinámico] |
| 162 | Mentor:                                                             |
| 179 | Desde : ');" &gt; (aprox.: )                                        |
| 181 | : ','[valor dinámico]');"&gt;                                       |
| 187 | Desde : ');" &gt;                                                   |
| 189 | : ','[valor dinámico]');"&gt;                                       |
| 195 | &#124;                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 149 | img     | alt=Mi plan de carrera; src=/iconos/noname_plan_carrera_133_100.gif; width=100; height=100                                                                                                 |
| 153 | a       | class=enlacefuncional; title=Volver a planes de carrera; tabindex=1; href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31                                                        |
| 154 | a       | class=enlacefuncional; tabindex=2; title=JSP_EXPR_mss_g3.getProperty(; href=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp                                                          |
| 167 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31; method=post; name=puesto; id=puesto                                                                                 |
| 168 | input   | type=hidden; id=zSJOB; name=zSJOB; value=                                                                                                                                                  |
| 180 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:ver_puesto('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                |
| 181 | a       | title=JSP_EXPR_mss_g3.getProperty(; href=javascript:verGrafico('&lt;m4:item m4name=; jsafe=true                                                                                            |
| 181 | img     | alt=JSP_EXPR_mss_g3.getProperty(; title=JSP_EXPR_mss_g3.getProperty(; src=/iconos/ic_compvar_16_16_0.gif; width=16; height=16; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this) |
| 188 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:ver_puesto('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                |
| 189 | a       | title=JSP_EXPR_mss_g3.getProperty(; href=javascript:verGrafico('&lt;m4:item m4name=; jsafe=true                                                                                            |
| 189 | img     | alt=JSP_EXPR_mss_g3.getProperty(; title=JSP_EXPR_mss_g3.getProperty(; src=/iconos/ic_compvar_16_16_0.gif; width=16; height=16; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                                | Resolución estática parcial                                                                                                               |
| --- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | estado            | zobjtabla.m4paramvalor("estado")                                                | zobjtabla.m4paramvalor("estado")                                                                                                          |
| 29  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                              | zobjtabla.m4paramvalor("zinicios")                                                                                                        |
| 31  | zpk0              | zobjtabla.m4paramvalor("pk0")                                                   | zobjtabla.m4paramvalor("pk0")                                                                                                             |
| 32  | sIdHR             | ""                                                                              |                                                                                                                                           |
| 36  | zpk1              | zobjtabla.m4paramvalor("pk1")                                                   | zobjtabla.m4paramvalor("pk1")                                                                                                             |
| 37  | sOrPrHR           | ""                                                                              |                                                                                                                                           |
| 41  | zpk2              | zobjtabla.m4paramvalor("pk2")                                                   | zobjtabla.m4paramvalor("pk2")                                                                                                             |
| 42  | sDtStart          | ""                                                                              |                                                                                                                                           |
| 51  | zsubsesion        | "SSM_CAREER_PLAN"                                                               | SSM_CAREER_PLAN                                                                                                                           |
| 52  | zmeta4object      | "SSM_CAREER_PLAN"                                                               | SSM_CAREER_PLAN                                                                                                                           |
| 53  | zmetodocarga      | zsubsesion + "!SSM_CAREER_PLAN.CARGA"                                           | SSM_CAREER_PLAN{"!SSM_CAREER_PLAN.CARGA"}                                                                                                 |
| 54  | znodo             | "SSM_CAREER_PLAN"                                                               | SSM_CAREER_PLAN                                                                                                                           |
| 55  | znodo2            | "SSM_CR_STEP_PLAN"                                                              | SSM_CR_STEP_PLAN                                                                                                                          |
| 56  | znodo3            | "SSM_MENTOR"                                                                    | SSM_MENTOR                                                                                                                                |
| 58  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "."                                    | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}                                                                              |
| 59  | zraiz3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                  | SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR{"."}                                                                                        |
| 61  | zventanas         | "20"                                                                            | 20                                                                                                                                        |
| 62  | zvuelta           | 5                                                                               | 5                                                                                                                                         |
| 64  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                      |
| 66  | zventana          | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                                     |
| 67  | zregistrofinal    | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                        |
| 68  | ztipocarga        | "DET"                                                                           | DET                                                                                                                                       |
| 70  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                          | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN                                                                                   |
| 71  | zmove             | znodo + ":" + znodo + "[zregistroinicial]"                                      | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"[zregistroinicial]"}                                                                                 |
| 72  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"  | SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 74  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 75  | zmove2            | znodo2 + "[" + zregistroinicial + "]"                                           | SSM_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                            |
| 76  | zlectura2         | zsubsesion + "!" + znodo2                                                       | SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN                                                                                                      |
| 77  | zraiz2            | zsubsesion + "!" + znodo2 + "."                                                 | SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"."}                                                                                                 |
| 78  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 80  | ziterator3        | znodo3 + ":" + zsubsesion + "!" + znodo3                                        | SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR                                                                                             |
| 81  | zmove3            | znodo3 + ":" + znodo3 + "[zregistroinicial]"                                    | SSM_MENTOR{":"}SSM_MENTOR{"[zregistroinicial]"}                                                                                           |
| 82  | zoutputdef3       | zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_CAREER_PLAN{"!"}SSM_MENTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 84  | zSPLAN            | zraiz + "SCO_NM_CAREER_PLAN"                                                    | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}{"SCO_NM_CAREER_PLAN"}                                                        |
| 85  | zemple            | zraiz + "SCO_GB_NAME"                                                           | SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}{"SCO_GB_NAME"}                                                               |
| 86  | zSJOB             | zcomun2 + "STD_N_JOB_CODE"                                                      | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 87  | zIDJOB            | zcomun2 + "STD_ID_JOB_CODE"                                                     | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}                                     |
| 88  | zSTIME            | zcomun2 + "SCO_TIME"                                                            | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_TIME"}                                            |
| 89  | zSUTIME           | zcomun2 + "SCO_NM_TIME_UNIT"                                                    | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                    |
| 90  | zDATE             | zcomun2 + "SCO_DT_START_STEP"                                                   | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}                                   |
| 91  | zGAP              | zcomun2 + "GAP"                                                                 | SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}                                                 |
| 92  | zNMENTOR          | zraiz3 + "STD_N_FIRST_NAME"                                                     | SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR{"."}{"STD_N_FIRST_NAME"}                                                                    |
| 93  | zAMENTOR          | zraiz3 + "STD_N_FAMILY_NAME_1"                                                  | SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR{"."}{"STD_N_FAMILY_NAME_1"}                                                                 |
| 94  | zNGMENTOR         | zraiz3 + "SCO_GB_NAME"                                                          | SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR{"."}{"SCO_GB_NAME"}                                                                         |
| 112 | z1                | ""                                                                              |                                                                                                                                           |
| 113 | z2                | ""                                                                              |                                                                                                                                           |
| 114 | z3                | ""                                                                              |                                                                                                                                           |
| 127 | zcount            | 0                                                                               | 0                                                                                                                                         |
| 128 | zcounti           | 0                                                                               | 0                                                                                                                                         |
| 129 | zcount2           | 0                                                                               | 0                                                                                                                                         |
| 130 | zcounti2          | 0                                                                               | 0                                                                                                                                         |
| 131 | zcount3           | 0                                                                               | 0                                                                                                                                         |
| 132 | zcounti3          | 0                                                                               | 0                                                                                                                                         |
| 142 | zcountv           | String.valueOf(zcounti)                                                         | String.valueOf(zcounti)                                                                                                                   |
| 143 | zcountv2          | String.valueOf(zcounti2)                                                        | String.valueOf(zcounti2)                                                                                                                  |
| 144 | zcountv3          | String.valueOf(zcounti3)                                                        | String.valueOf(zcounti3)                                                                                                                  |
| 171 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                          |
| 172 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                            |
| 173 | zposicions        | "0"                                                                             | 0                                                                                                                                         |
| 173 | zcontrol          | 0                                                                               | 0                                                                                                                                         |
| 173 | zposicion         | 0                                                                               | 0                                                                                                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                            |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 96  | m4:startpage | m4task=SSM_CAREER_PLAN                                                                                                                                        |
| 96  | m4:beginjob  |                                                                                                                                                               |
| 97  | m4:datadef   | m4o=SSM_CAREER_PLAN; m4name=SSM_CAREER_PLAN                                                                                                                   |
| 106 | m4:exec      | m4method=SSM_CAREER_PLAN{"!SSM_CAREER_PLAN.CARGA"}                                                                                                            |
| 106 | m4:param     | name=TIPO_CARGA; value=DET                                                                                                                                    |
| 107 | m4:outputdef | m4alias=SSM_CAREER_PLAN                                                                                                                                       |
| 107 | m4:param     | name=m4name0; value=SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 108 | m4:outputdef | m4alias=SSM_CR_STEP_PLAN                                                                                                                                      |
| 108 | m4:param     | name=m4name0; value=SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 109 | m4:outputdef | m4alias=SSM_MENTOR                                                                                                                                            |
| 109 | m4:param     | name=m4name0; value=SSM_CAREER_PLAN{"!"}SSM_MENTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}       |
| 110 | m4:endjob    |                                                                                                                                                               |
| 123 | m4:move      |                                                                                                                                                               |
| 123 | m4:param     | name=SSM_CAREER_PLAN; value=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"[zregistroinicial]"}                                                                         |
| 124 | m4:move      |                                                                                                                                                               |
| 124 | m4:param     | name=SSM_CAREER_PLAN; value=SSM_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 125 | m4:move      |                                                                                                                                                               |
| 125 | m4:param     | name=SSM_CAREER_PLAN; value=SSM_MENTOR{":"}SSM_MENTOR{"[zregistroinicial]"}                                                                                   |
| 147 | m4:item      | m4name=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}{"SCO_GB_NAME"}; htmlsafe=true                                                             |
| 147 | m4:item      | m4name=SSM_CAREER_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CAREER_PLAN{"."}{"SCO_NM_CAREER_PLAN"}; htmlsafe=true                                                      |
| 163 | m4:item      | m4name=SSM_MENTOR{":"}SSM_CAREER_PLAN{"!"}SSM_MENTOR{"."}{"SCO_GB_NAME"}; htmlsafe=true                                                                       |
| 174 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti2).intValue()-1).toString()                                                                                         |
| 179 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}; htmlsafe=true                                 |
| 180 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 180 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_TIME"}; htmlsafe=true                                          |
| 180 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true                                  |
| 181 | m4:label     | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 181 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 187 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}; htmlsafe=true                                 |
| 188 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 189 | m4:label     | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 189 | m4:item      | m4name=SSM_CR_STEP_PLAN{":"}SSM_CAREER_PLAN{"!"}SSM_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 205 | m4:endpage   |                                                                                                                                                               |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 101 | setItem          | zsubsesion,znodo,"","SCO_ID_HR_ARG",sIdHR          |
| 102 | setItem          | zsubsesion,znodo,"","SCO_OR_HR_PERIOD_ARG",sOrPrHR |
| 103 | setItem          | zsubsesion,znodo,"","DT_START_ARG",sDtStart        |
| 117 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_HR_ARG"        |
| 118 | getItem          | znodo,zmeta4object,znodo,"","SCO_OR_HR_PERIOD_ARG" |
| 119 | getItem          | znodo,zmeta4object,znodo,"","DT_START_ARG"         |
| 135 | getCount         | znodo,zsubsesion,znodo                             |
| 136 | getCountInClient | znodo,zsubsesion,znodo                             |
| 137 | getCount         | znodo2,zsubsesion,znodo2                           |
| 138 | getCountInClient | znodo2,zsubsesion,znodo2                           |
| 139 | getCount         | znodo3,zsubsesion,znodo3                           |
| 140 | getCountInClient | znodo3,zsubsesion,znodo3                           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 14  | ver_puesto | a          |
| 18  | verGrafico | idjob,IdHR |

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 28  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                            |
| 30  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                    |
| 33  | if (zpk0 == null &#124;&#124; zpk0.equals("")) {zpk0="";}                                                                                  |
| 34  | else {sIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zpk0);}                             |
| 38  | if (zpk1 == null &#124;&#124; zpk1.equals("")) {zpk1="";}                                                                                  |
| 39  | else {sOrPrHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zpk1);}                           |
| 43  | if (zpk2 == null &#124;&#124; zpk2.equals("")) {zpk2="";}                                                                                  |
| 44  | else {sDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "[clave omitida]", zpk2);}                          |
| 160 | &lt;%if (zcounti3 &gt; 0) {%&gt;                                                                                                           |
| 165 | &lt;%}if (zcounti2 &gt; 0) {%&gt;                                                                                                          |
| 176 | &lt;% if (zposicion != (zcounti2-1)){%&gt;                                                                                                 |
| 184 | &lt;% } else{%&gt;                                                                                                                         |
| 193 | &lt;% if (zposicion != (zcounti2-1)) { %&gt;                                                                                               |
| 199 | &lt;%}else{%&gt;                                                                                                                           |
| 53  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_CAREER_PLAN.CARGA";                                          |
| 58  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                          |
| 59  | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                       |
| 65  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                              |
| 67  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                 |
| 70  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                            |
| 71  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[zregistroinicial]";                                            |
| 72  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 74  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 75  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                |
| 76  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                         |
| 77  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                      |
| 78  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                 |
| 80  | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                                         |
| 81  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[zregistroinicial]";                                         |
| 82  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 84  | expresión de cálculo/transformación: String zSPLAN = zraiz + "SCO_NM_CAREER_PLAN";                                                         |
| 85  | expresión de cálculo/transformación: String zemple = zraiz + "SCO_GB_NAME";                                                                |
| 86  | expresión de cálculo/transformación: String zSJOB = zcomun2 + "STD_N_JOB_CODE";                                                            |
| 87  | expresión de cálculo/transformación: String zIDJOB = zcomun2 + "STD_ID_JOB_CODE";                                                          |
| 88  | expresión de cálculo/transformación: String zSTIME = zcomun2 + "SCO_TIME";                                                                 |
| 89  | expresión de cálculo/transformación: String zSUTIME = zcomun2 + "SCO_NM_TIME_UNIT";                                                        |
| 90  | expresión de cálculo/transformación: String zDATE = zcomun2 + "SCO_DT_START_STEP";                                                         |
| 91  | expresión de cálculo/transformación: String zGAP = zcomun2 + "GAP";                                                                        |
| 92  | expresión de cálculo/transformación: String zNMENTOR = zraiz3 + "STD_N_FIRST_NAME";                                                        |
| 93  | expresión de cálculo/transformación: String zAMENTOR = zraiz3 + "STD_N_FAMILY_NAME_1";                                                     |
| 94  | expresión de cálculo/transformación: String zNGMENTOR = zraiz3 + "SCO_GB_NAME";                                                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 12  | /mss_g3/mss_g3_trans.jsp                              |
| 48  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 49  | ../../sse_generico/espanol/generico_links.jsp         |
| 202 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                            |
| 9   | /libreria/funciones_sse.js                                     |
| 149 | /iconos/noname_plan_carrera_133_100.gif                        |
| 153 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31      |
| 154 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp          |
| 167 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31 |
| 180 | javascript:ver_puesto(                                         |
| 181 | javascript:verGrafico(                                         |
| 181 | /iconos/ic_compvar_16_16_0.gif                                 |
| 188 | javascript:ver_puesto(                                         |
| 189 | javascript:verGrafico(                                         |
| 189 | /iconos/ic_compvar_16_16_0.gif                                 |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                        |
| 12  | /mss_g3/mss_g3_trans.jsp                                       |
| 21  | /servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob=     |
| 48  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             |
| 49  | ../../sse_generico/espanol/generico_links.jsp                  |
| 202 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                               |
| ------ | --- | -------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                       | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                              |
| BASE   | 48  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 49  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 202 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 9   | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 153 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31      | ausente    | P06                                                                                             |
| BASE   | 154 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp          | ausente    | P06                                                                                             |
| BASE   | 167 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31 | ausente    | P06                                                                                             |
| BASE   | 180 | javascript:ver_puesto(                                         | dinámica   | P06                                                                                             |
| BASE   | 181 | javascript:verGrafico(                                         | dinámica   | P06                                                                                             |
| BASE   | 188 | javascript:ver_puesto(                                         | dinámica   | P06                                                                                             |
| BASE   | 189 | javascript:verGrafico(                                         | dinámica   | P06                                                                                             |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                       | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                              |
| BASE   | 21  | /servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob=     | ausente    | P06                                                                                             |
| BASE   | 48  | ../../mss_generico/espanol/mssgenerico_menusup.jsp             | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 49  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 202 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp          | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p8_pc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
