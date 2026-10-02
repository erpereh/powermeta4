# Plan de carrera

Identificador: `mss_g3/sse_g3_p9.jsp`. Perfil: **responsable**. Dominio: **talento**.

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
| Label.ssco_g3_p11_pet | Ir a solicitar una entrevista                                                                                                        | BASE   | [translations/sse_g3_es.properties:L67](../../referencias/literales/sse_g3_es.md) |
| Link.ssco_g3_p11_pet  | Solicitar una entrevista                                                                                                             | BASE   | [translations/sse_g3_es.properties:L66](../../referencias/literales/sse_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/sse_g3_p9.jsp](../../../../clon_portal/portal/mss_g3/espanol/sse_g3_p9.jsp) | `cf837a3f52860c7cc2eb5a98db9512b239496bbf58adcec3f39bb2cf34bb0317` |    223 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/sse_g3_p9.jsp](../../../../clon_portal/portal/mss_g3/espanol/sse_g3_p9.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                               |
| --- | ---------------------------------------------------------------------- |
| 7   | Plan de carrera                                                        |
| 148 | Plan de carrera:                                                       |
| 151 | [valor dinámico][valor dinámico] Mi puesto de trabajo [valor dinámico] |
| 164 | Mentor:                                                                |
| 187 | Desde :                                                                |
| 188 | ');" &gt; (aprox.: )                                                   |
| 189 | : ','[valor dinámico]');"&gt;                                          |
| 195 | Desde :                                                                |
| 196 | ');" &gt;                                                              |
| 197 | : ','[valor dinámico]');"&gt;                                          |
| 203 | &#124;                                                                 |
| 212 | No hay ningún puesto en el plan de carrera del empleado                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 150 | img     | alt=Plan de carrera; src=/iconos/noname_plan_carrera_133_100.gif; width=100; height=100                                                                                                          |
| 154 | a       | class=enlacefuncional; tabindex=1; title=Ir a mi puesto de trabajo; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                                                              |
| 155 | a       | class=enlacefuncional; tabindex=2; title=JSP_EXPR_sse_g3Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31estado=3                                           |
| 169 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9_desc.jsp?estado=31; method=post; name=puesto; id=puesto                                                                                       |
| 170 | input   | type=hidden; id=zSJOB; name=zSJOB; value=                                                                                                                                                        |
| 172 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                               |
| 173 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                                  |
| 174 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                           |
| 188 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:ver_puesto('&lt;m4:item m4name=                                                                                                 |
| 189 | a       | title=JSP_EXPR_sse_g3Ess.getProperty(; href=javascript:verGrafico('&lt;m4:item m4name=; jsafe=true                                                                                               |
| 189 | img     | alt=JSP_EXPR_sse_g3Ess.getProperty(; title=JSP_EXPR_sse_g3Ess.getProperty(; src=/iconos/ic_compvar_16_16_0.gif; width=16; height=16; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this) |
| 196 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:ver_puesto('&lt;m4:item m4name=                                                                                                 |
| 197 | a       | title=JSP_EXPR_sse_g3Ess.getProperty(; href=javascript:verGrafico('&lt;m4:item m4name=; jsafe=true                                                                                               |
| 197 | img     | alt=JSP_EXPR_sse_g3Ess.getProperty(; title=JSP_EXPR_sse_g3Ess.getProperty(; src=/iconos/ic_compvar_16_16_0.gif; width=16; height=16; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 51  | estado          | getParameter(request,"estado")   |
| 52  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                                | Resolución estática parcial                                                                                                               |
| --- | ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | empleado          | (String)request.getAttribute("empleado")                                        | (String)request.getAttribute("empleado")                                                                                                  |
| 11  | periodo           | (String)request.getAttribute("periodo")                                         | (String)request.getAttribute("periodo")                                                                                                   |
| 12  | role              | (String)request.getAttribute("role")                                            | (String)request.getAttribute("role")                                                                                                      |
| 13  | zVis              | (String)request.getAttribute("zVis")                                            | (String)request.getAttribute("zVis")                                                                                                      |
| 15  | zSMCO_ID_HR       | ""                                                                              |                                                                                                                                           |
| 51  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                        |
| 52  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                      |
| 63  | zsubsesion        | "SSE_CAREER_PLAN"                                                               | SSE_CAREER_PLAN                                                                                                                           |
| 64  | zmeta4object      | "SSE_CAREER_PLAN"                                                               | SSE_CAREER_PLAN                                                                                                                           |
| 65  | zmetodocarga      | zsubsesion + "!SSE_CR_PLAN_HT.SMCO_MAIN_LOAD_PROCESS"                           | SSE_CAREER_PLAN{"!SSE_CR_PLAN_HT.SMCO_MAIN_LOAD_PROCESS"}                                                                                 |
| 66  | znodo             | "SSE_CR_PLAN_HT"                                                                | SSE_CR_PLAN_HT                                                                                                                            |
| 67  | znodo2            | "SSE_CR_STEP_PLAN"                                                              | SSE_CR_STEP_PLAN                                                                                                                          |
| 68  | znodo3            | "SSE_CR_MENTOR"                                                                 | SSE_CR_MENTOR                                                                                                                             |
| 70  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "."                                    | SSE_CR_PLAN_HT{":"}SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT{"."}                                                                                |
| 71  | zraiz3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "."                                  | SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"."}                                                                                  |
| 74  | zventanas         | "20"                                                                            | 20                                                                                                                                        |
| 75  | zvuelta           | 5                                                                               | 5                                                                                                                                         |
| 79  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                            | Integer.valueOf(zinicios).intValue()                                                                                                      |
| 81  | zventana          | Integer.valueOf(zventanas).intValue()                                           | Integer.valueOf(zventanas).intValue()                                                                                                     |
| 82  | zregistrofinal    | zregistroinicial + zventana - 1                                                 | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                        |
| 83  | ztipocarga        | "M4T"                                                                           | M4T                                                                                                                                       |
| 85  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                          | SSE_CR_PLAN_HT{":"}SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT                                                                                     |
| 86  | zmove             | znodo + ":" + znodo + "[zregistroinicial]"                                      | SSE_CR_PLAN_HT{":"}SSE_CR_PLAN_HT{"[zregistroinicial]"}                                                                                   |
| 87  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"  | SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 89  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 90  | zmove2            | znodo2 + "[" + zregistroinicial + "]"                                           | SSE_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                            |
| 91  | zlectura2         | zsubsesion + "!" + znodo2                                                       | SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN                                                                                                      |
| 92  | zraiz2            | zsubsesion + "!" + znodo2 + "."                                                 | SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"."}                                                                                                 |
| 93  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."             | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 95  | ziterator3        | znodo3 + ":" + zsubsesion + "!" + znodo3                                        | SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR                                                                                       |
| 96  | zmove3            | znodo3 + ":" + znodo3 + "[zregistroinicial]"                                    | SSE_CR_MENTOR{":"}SSE_CR_MENTOR{"[zregistroinicial]"}                                                                                     |
| 97  | zoutputdef3       | zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 101 | zSPLAN            | zraiz + "SCO_NM_CAREER_PLAN"                                                    | SSE_CR_PLAN_HT{":"}SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT{"."}{"SCO_NM_CAREER_PLAN"}                                                          |
| 102 | zSJOB             | zcomun2 + "STD_N_JOB_CODE"                                                      | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 103 | zIDJOB            | zcomun2 + "STD_ID_JOB_CODE"                                                     | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}                                     |
| 104 | zSTIME            | zcomun2 + "SCO_TIME"                                                            | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_TIME"}                                            |
| 105 | zSUTIME           | zcomun2 + "SCO_NM_TIME_UNIT"                                                    | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                    |
| 106 | zDATE             | zcomun2 + "SCO_DT_START_STEP"                                                   | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}                                   |
| 107 | zGAP              | zcomun2 + "GAP"                                                                 | SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}                                                 |
| 108 | zNMENTOR          | zraiz3 + "STD_N_FIRST_NAME"                                                     | SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"."}{"STD_N_FIRST_NAME"}                                                              |
| 109 | zAMENTOR          | zraiz3 + "STD_N_FAMILY_NAME_1"                                                  | SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"."}{"STD_N_FAMILY_NAME_1"}                                                           |
| 110 | zNGMENTOR         | zraiz3 + "SCO_GB_NAME"                                                          | SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"."}{"SCO_GB_NAME"}                                                                   |
| 126 | zcount            | 0                                                                               | 0                                                                                                                                         |
| 127 | zcounti           | 0                                                                               | 0                                                                                                                                         |
| 128 | zcount2           | 0                                                                               | 0                                                                                                                                         |
| 129 | zcounti2          | 0                                                                               | 0                                                                                                                                         |
| 130 | zcount3           | 0                                                                               | 0                                                                                                                                         |
| 131 | zcounti3          | 0                                                                               | 0                                                                                                                                         |
| 141 | zcountv           | String.valueOf(zcounti)                                                         | String.valueOf(zcounti)                                                                                                                   |
| 142 | zcountv2          | String.valueOf(zcounti2)                                                        | String.valueOf(zcounti2)                                                                                                                  |
| 143 | zcountv3          | String.valueOf(zcounti3)                                                        | String.valueOf(zcounti3)                                                                                                                  |
| 179 | zregistroinicials | String.valueOf(zregistroinicial)                                                | String.valueOf(zregistroinicial)                                                                                                          |
| 180 | zregistrofinals   | String.valueOf(zregistrofinal)                                                  | String.valueOf(zregistrofinal)                                                                                                            |
| 181 | zposicions        | "0"                                                                             | 0                                                                                                                                         |
| 181 | zcontrol          | 0                                                                               | 0                                                                                                                                         |
| 181 | zposicion         | 0                                                                               | 0                                                                                                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                            |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 112 | m4:startpage | m4task=SSE_CAREER_PLAN                                                                                                                                        |
| 112 | m4:beginjob  |                                                                                                                                                               |
| 113 | m4:datadef   | m4o=SSE_CAREER_PLAN; m4name=SSE_CAREER_PLAN                                                                                                                   |
| 114 | m4:exec      | m4method=SSE_CAREER_PLAN{"!SSE_CR_PLAN_HT.SMCO_MAIN_LOAD_PROCESS"}                                                                                            |
| 115 | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=                                                                                                                              |
| 116 | m4:param     | name=SMCO_ARG_TIPO_CARGA; value=M4T                                                                                                                           |
| 118 | m4:outputdef | m4alias=SSE_CR_PLAN_HT                                                                                                                                        |
| 118 | m4:param     | name=m4name0; value=SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}   |
| 119 | m4:outputdef | m4alias=SSE_CR_STEP_PLAN                                                                                                                                      |
| 119 | m4:param     | name=m4name0; value=SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 120 | m4:outputdef | m4alias=SSE_CR_MENTOR                                                                                                                                         |
| 120 | m4:param     | name=m4name0; value=SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}    |
| 121 | m4:endjob    |                                                                                                                                                               |
| 122 | m4:move      |                                                                                                                                                               |
| 122 | m4:param     | name=SSE_CAREER_PLAN; value=SSE_CR_PLAN_HT{":"}SSE_CR_PLAN_HT{"[zregistroinicial]"}                                                                           |
| 123 | m4:move      |                                                                                                                                                               |
| 123 | m4:param     | name=SSE_CAREER_PLAN; value=SSE_CR_STEP_PLAN{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 124 | m4:move      |                                                                                                                                                               |
| 124 | m4:param     | name=SSE_CAREER_PLAN; value=SSE_CR_MENTOR{":"}SSE_CR_MENTOR{"[zregistroinicial]"}                                                                             |
| 148 | m4:item      | m4name=SSE_CR_PLAN_HT{":"}SSE_CAREER_PLAN{"!"}SSE_CR_PLAN_HT{"."}{"SCO_NM_CAREER_PLAN"}                                                                       |
| 165 | m4:item      | m4name=SSE_CR_MENTOR{":"}SSE_CAREER_PLAN{"!"}SSE_CR_MENTOR{"."}{"SCO_GB_NAME"}                                                                                |
| 182 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti2).intValue()-1).toString()                                                                                         |
| 187 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}                                                |
| 188 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                                   |
| 188 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_TIME"}                                                         |
| 188 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                                 |
| 189 | m4:label     | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 189 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 195 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_STEP"}                                                |
| 196 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                                   |
| 197 | m4:label     | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 197 | m4:item      | m4name=SSE_CR_STEP_PLAN{":"}SSE_CAREER_PLAN{"!"}SSE_CR_STEP_PLAN{"[&amp;VAR.m4lix]"}{"."}{"GAP"}; htmlsafe=true                                               |
| 221 | m4:endpage   |                                                                                                                                                               |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 134 | getCount         | znodo,zsubsesion,znodo   |
| 135 | getCountInClient | znodo,zsubsesion,znodo   |
| 136 | getCount         | znodo2,zsubsesion,znodo2 |
| 137 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 138 | getCount         | znodo3,zsubsesion,znodo3 |
| 139 | getCountInClient | znodo3,zsubsesion,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 37  | ver_puesto | a          |
| 41  | verGrafico | idjob,vidp |

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 16  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                            |
| 18  | } else{                                                                                                                                    |
| 23  | if (empleado==null) {empleado = "";}                                                                                                       |
| 26  | if (zVis.equals("1")){%&gt;                                                                                                                |
| 28  | &lt;%}else{%&gt;                                                                                                                           |
| 53  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                            |
| 54  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                    |
| 58  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 147 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 162 | &lt;%if (zcounti3 &gt; 0) {%&gt;                                                                                                           |
| 167 | &lt;%}if (zcounti2 &gt; 0) {%&gt;                                                                                                          |
| 171 | &lt;%if (zVis.equals("0")){%&gt;                                                                                                           |
| 184 | &lt;% if (zposicion != (zcounti2-1)){%&gt;                                                                                                 |
| 192 | &lt;% } else{%&gt;                                                                                                                         |
| 201 | &lt;% if (zposicion != (zcounti2-1)) { %&gt;                                                                                               |
| 207 | &lt;%}else{%&gt;                                                                                                                           |
| 208 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 210 | &lt;%}else{%&gt;                                                                                                                           |
| 216 | &lt;%if (zVis.equals("1")){%&gt;                                                                                                           |
| 65  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_CR_PLAN_HT.SMCO_MAIN_LOAD_PROCESS";                          |
| 70  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                          |
| 71  | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + ".";                                       |
| 80  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                              |
| 82  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                 |
| 85  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                            |
| 86  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[zregistroinicial]";                                            |
| 87  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   |
| 89  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 90  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[" + zregistroinicial + "]";                                                |
| 91  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                         |
| 92  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                      |
| 93  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                 |
| 95  | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                                         |
| 96  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[zregistroinicial]";                                         |
| 97  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 101 | expresión de cálculo/transformación: String zSPLAN = zraiz + "SCO_NM_CAREER_PLAN";                                                         |
| 102 | expresión de cálculo/transformación: String zSJOB = zcomun2 + "STD_N_JOB_CODE";                                                            |
| 103 | expresión de cálculo/transformación: String zIDJOB = zcomun2 + "STD_ID_JOB_CODE";                                                          |
| 104 | expresión de cálculo/transformación: String zSTIME = zcomun2 + "SCO_TIME";                                                                 |
| 105 | expresión de cálculo/transformación: String zSUTIME = zcomun2 + "SCO_NM_TIME_UNIT";                                                        |
| 106 | expresión de cálculo/transformación: String zDATE = zcomun2 + "SCO_DT_START_STEP";                                                         |
| 107 | expresión de cálculo/transformación: String zGAP = zcomun2 + "GAP";                                                                        |
| 108 | expresión de cálculo/transformación: String zNMENTOR = zraiz3 + "STD_N_FIRST_NAME";                                                        |
| 109 | expresión de cálculo/transformación: String zAMENTOR = zraiz3 + "STD_N_FAMILY_NAME_1";                                                     |
| 110 | expresión de cálculo/transformación: String zNGMENTOR = zraiz3 + "SCO_GB_NAME";                                                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 33  | ../../sse_generico/espanol/menu_ess.jsp            |
| 35  | /sse_g3/sse_g3_trans.jsp                           |
| 59  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 60  | ../../sse_generico/espanol/generico_links.jsp      |
| 217 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                       |
| --- | ----------------------------------------------------------------------- |
| 27  | /css/estilo_sse.css                                                     |
| 29  | /css/estilo_mss.css                                                     |
| 32  | /libreria/funciones_sse.js                                              |
| 34  | /libreria/clase_val_entradas.js                                         |
| 150 | /iconos/noname_plan_carrera_133_100.gif                                 |
| 154 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3              |
| 155 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31estado=3 |
| 169 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9_desc.jsp?estado=31          |
| 188 | javascript:ver_puesto(                                                  |
| 189 | javascript:verGrafico(                                                  |
| 189 | /iconos/ic_compvar_16_16_0.gif                                          |
| 196 | javascript:ver_puesto(                                                  |
| 197 | javascript:verGrafico(                                                  |
| 197 | /iconos/ic_compvar_16_16_0.gif                                          |
| 33  | ../../sse_generico/espanol/menu_ess.jsp                                 |
| 35  | /sse_g3/sse_g3_trans.jsp                                                |
| 44  | /servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob=              |
| 59  | ../../sse_generico/espanol/generico_menusup.jsp                         |
| 60  | ../../sse_generico/espanol/generico_links.jsp                           |
| 217 | ../../sse_generico/espanol/generico_disclaimer.jsp                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                              | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ----------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 33  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 35  | /sse_g3/sse_g3_trans.jsp                                                | contextual | [sse_g3/sse_g3_trans.jsp](../../empleado/talento/sse_g3--sse_g3_trans.md)                                 |
| BASE   | 59  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 60  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 217 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 32  | /libreria/funciones_sse.js                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 34  | /libreria/clase_val_entradas.js                                         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 154 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3              | contextual | [sse_g3/sse_g3_menu.jsp](../../empleado/talento/sse_g3--sse_g3_menu.md)                                   |
| BASE   | 155 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31estado=3 | ausente    | P06                                                                                                       |
| BASE   | 169 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9_desc.jsp?estado=31          | ausente    | P06                                                                                                       |
| BASE   | 188 | javascript:ver_puesto(                                                  | dinámica   | P06                                                                                                       |
| BASE   | 189 | javascript:verGrafico(                                                  | dinámica   | P06                                                                                                       |
| BASE   | 196 | javascript:ver_puesto(                                                  | dinámica   | P06                                                                                                       |
| BASE   | 197 | javascript:verGrafico(                                                  | dinámica   | P06                                                                                                       |
| BASE   | 33  | ../../sse_generico/espanol/menu_ess.jsp                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 35  | /sse_g3/sse_g3_trans.jsp                                                | contextual | [sse_g3/sse_g3_trans.jsp](../../empleado/talento/sse_g3--sse_g3_trans.md)                                 |
| BASE   | 44  | /servlet/CheckSecurity/JSP/sse_g0/sgco_ek_job_hr.jsp?zJob=              | ausente    | P06                                                                                                       |
| BASE   | 59  | ../../sse_generico/espanol/generico_menusup.jsp                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 60  | ../../sse_generico/espanol/generico_links.jsp                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 217 | ../../sse_generico/espanol/generico_disclaimer.jsp                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/sse_g3_p9.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
