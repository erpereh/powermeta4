# Solicita formación

Identificador: `mss_g3/mss_g3_p6_mod2.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_mod2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_mod2.jsp) | `3ddaed426d8965d1190efb405b094fe9564c403b1026e0dc74082661f934f1b2` |    327 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_mod2.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                 |
| --- | ------------------------------------------------------------------------ |
| 5   | Solicita formación                                                       |
| 159 | Solicita necesidades de formación                                        |
| 162 | Solicita cursos de formación indicando las plazas y personas necesarias. |
| 168 | Curso:                                                                   |
| 170 | Producto tipo                                                            |
| 172 | Producto                                                                 |
| 176 | Autor                                                                    |
| 178 | Fecha actualización                                                      |
| 182 | Días                                                                     |
| 184 | Nº horas                                                                 |
| 188 | Nº unidades                                                              |
| 192 | Objetivo formativo                                                       |
| 196 | Ruta internet                                                            |
| 197 | "&gt;                                                                    |
| 201 | Información adicional                                                    |
| 203 | Inicio preferido                                                         |
| 213 | Fin preferido                                                            |
| 222 | Lenguaje                                                                 |
| 223 | Español "&gt;                                                            |
| 245 | Sesiones programadas                                                     |
| 260 | Nombre:                                                                  |
| 261 | $M4ITEM0$                                                                |
| 262 | Fec. de inicio:                                                          |
| 263 | $M4ITEM2$                                                                |
| 264 | Fec. de fin:                                                             |
| 265 | $M4ITEM3$                                                                |
| 275 | No quiero ninguna sesión programada                                      |
| 289 | Solicitud de plazas                                                      |
| 290 | Número de plazas:                                                        |
| 292 | \\ \\ $M4ITEM10$                                                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                  |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 161 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                          |
| 165 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp; method=post; name=Formulario; id=Formulario                                                                 |
| 166 | input   | id=zempleados; name=zempleados; type=hidden                                                                                                                                |
| 197 | a       | href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                    |
| 205 | input   | class=fuenteformulario; type=text; name=zfechaini; id=zfechaini; title=Escribe la fecha de inicio; maxlength=10; size=10                                                   |
| 206 | a       | href=javascript:m4calendario(m4objeto('zfechaini','Formulario'))                                                                                                           |
| 207 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de inicio                                                                             |
| 215 | input   | class=fuenteformulario; type=text; name=zfechafin; id=zfechafin; title=Escribe la fecha de fin; maxlength=10; size=10                                                      |
| 216 | a       | href=javascript:m4calendario(m4objeto('zfechafin','Formulario'))                                                                                                           |
| 217 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de fin                                                                                |
| 224 | select  | id=zidioma; class=Fuenteformulario; name=zidioma                                                                                                                           |
| 225 | option  | value=01                                                                                                                                                                   |
| 227 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                   |
| 267 | input   | id=zidtrtb; name=zidtrtb; type=radio; value=$M4ITEM1$                                                                                                                      |
| 276 | input   | id=zidtrtb; name=zidtrtb; type=radio; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%&gt;; checked=presente; confirmar condición si dinámico |
| 284 | input   | id=zidtrtb; name=zidtrtb; type=hidden; value=&lt;%=zidtrtb%&gt;                                                                                                            |
| 290 | input   | maxlength=10; class=fuenteformulario; type=text; name=znplazas; id=znplazas; title=escribe la fecha inicial; size=10                                                       |
| 293 | select  | class=Fuenteformulario; multiple=multiple; name=list1; id=list1; size=10; ondblclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)            |
| 299 | option  | value=$M4ITEM7$                                                                                                                                                            |
| 301 | option  |                                                                                                                                                                            |
| 305 | a       | title=Selecciona un registro; href=javascript:mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)                                                   |
| 305 | img     | alt=Enviar; title=; src=/iconos/icono_move_left_31_19.gif; name=b2; id=b2                                                                                                  |
| 305 | img     | alt=Enviar; title=; src=/iconos/icono_move_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false); name=b1; id=b1             |
| 306 | img     | alt=Enviar; title=; src=/iconos/icono_moveall_left_31_19.gif; onclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true); name=b4; id=b4            |
| 306 | img     | alt=Enviar; title=; src=/iconos/icono_moveall_right_31_19.gif; onclick=mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true); name=b3; id=b3           |
| 309 | select  | class=Fuenteformulario; multiple=multiple; name=list2; id=list2; size=10; ondblclick=mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)            |
| 310 | option  |                                                                                                                                                                            |
| 318 | a       | href=javascript:solicitar('&lt;%=zidtrtb%&gt;'); title=Enviar la nueva peticion                                                                                            |
| 318 | img     | alt=Enviar; src=/iconos/icono_enviar_mss_36_36.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                    | Resolución estática parcial                                                                          |
| --- | ------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 54  | estado              | zobjtabla.m4paramvalor("estado")                                    | zobjtabla.m4paramvalor("estado")                                                                     |
| 55  | zid                 | zobjtabla.m4paramvalor("zid")                                       | zobjtabla.m4paramvalor("zid")                                                                        |
| 56  | zinicios            | zobjtabla.m4paramvalor("zinicios")                                  | zobjtabla.m4paramvalor("zinicios")                                                                   |
| 57  | zidtrtb             | zobjtabla.m4paramvalor("zidtrtb")                                   | zobjtabla.m4paramvalor("zidtrtb")                                                                    |
| 66  | zsubsesion          | "SSM_TRAINING_REQUEST"                                              | SSM_TRAINING_REQUEST                                                                                 |
| 67  | zMeta4Object        | "SSM_TRAINING_REQUEST"                                              | SSM_TRAINING_REQUEST                                                                                 |
| 68  | znodo2              | "M4T_DESC_MULTIMEDIA"                                               | M4T_DESC_MULTIMEDIA                                                                                  |
| 69  | znodo3              | "M4T_LENGUAJES"                                                     | M4T_LENGUAJES                                                                                        |
| 70  | znodo4              | "SSM_EMPLEADOS"                                                     | SSM_EMPLEADOS                                                                                        |
| 71  | znodo6              | "M4T_SESIONES"                                                      | M4T_SESIONES                                                                                         |
| 72  | ztipocarga          | "DM"                                                                | DM                                                                                                   |
| 73  | zventanas           | "20"                                                                | 20                                                                                                   |
| 74  | zregistroinicial    | 0                                                                   | 0                                                                                                    |
| 76  | zventana            | 0                                                                   | 0                                                                                                    |
| 77  | zregistrofinal      | zregistroinicial + zventana - 1                                     | 0{zventana - 1}                                                                                      |
| 78  | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                   | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"[*]"}                                                  |
| 79  | zmove2              | znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]"                | M4T_DESC_MULTIMEDIA{":"}M4T_DESC_MULTIMEDIA{"["}0{"]"}                                               |
| 80  | zlectura2           | zsubsesion + "!" + znodo2                                           | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA                                                         |
| 81  | zraiz2              | zsubsesion + "!" + znodo2 + "."                                     | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}                                                    |
| 82  | ziterator2          | znodo2 + ":" + zsubsesion + "!" + znodo2                            | M4T_DESC_MULTIMEDIA{":"}SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA                                 |
| 84  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                   | SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                        |
| 85  | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                   | M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                           |
| 86  | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "." | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}                    |
| 88  | zoutputdef4         | zsubsesion + "!" + znodo4 + "[*]"                                   | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                        |
| 89  | zmove4              | znodo4 + ":" + znodo4 + "[" + zregistroinicial + "]"                | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                                           |
| 90  | zlectura4           | zsubsesion + "!" + znodo4                                           | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS                                                               |
| 91  | zraiz4              | zsubsesion + "!" + znodo4 + "."                                     | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}                                                          |
| 92  | ziterator4          | znodo4 + ":" + zsubsesion + "!" + znodo4                            | SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS                                             |
| 94  | zoutputdef6         | zsubsesion + "!" + znodo6 + "[*]"                                   | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"[*]"}                                                         |
| 95  | zmove6              | znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]"                | M4T_SESIONES{":"}M4T_SESIONES{"["}0{"]"}                                                             |
| 96  | zlectura6           | zsubsesion + "!" + znodo6                                           | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES                                                                |
| 97  | zraiz6              | zsubsesion + "!" + znodo6 + "."                                     | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}                                                           |
| 98  | ziterator6          | znodo6 + ":" + zsubsesion + "!" + znodo6                            | M4T_SESIONES{":"}SSM_TRAINING_REQUEST{"!"}M4T_SESIONES                                               |
| 100 | zMETODOCARGA        | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                         |
| 102 | zAUTHOR             | zraiz2 + "SCO_AUTHOR"                                               | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_AUTHOR"}                                      |
| 103 | zCDDATE             | zraiz2 + "SCO_CD_DATE"                                              | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_CD_DATE"}                                     |
| 104 | zESTIMATEDDAYS      | zraiz2 + "SCO_ESTIMATED_DAYS"                                       | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_ESTIMATED_DAYS"}                              |
| 105 | zESTIMATEDHOURS     | zraiz2 + "SCO_ESTIMATED_HOURS"                                      | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_ESTIMATED_HOURS"}                             |
| 106 | zNUMBER             | zraiz2 + "STD_NUMBER_OF_UNITS"                                      | SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"STD_NUMBER_OF_UNITS"}                             |
| 107 | zSTDNMLENGUAGE      | zcomun3 + "STD_N_LANGUAGE"                                          | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}  |
| 108 | zSTDIDLENGUAGE      | zcomun3 + "STD_ID_LANGUAGE"                                         | M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"} |
| 109 | zNFAMILYNAME        | zraiz4 + "STD_N_FAMILY_NAME_1"                                      | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FAMILY_NAME_1"}                                   |
| 110 | zFIRSTNAME          | zraiz4 + "STD_N_FIRST_NAME"                                         | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_N_FIRST_NAME"}                                      |
| 111 | zGLOBALNAME         | zraiz4 + "SCO_GB_NAME"                                              | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"SCO_GB_NAME"}                                           |
| 112 | zIDPERSON           | zraiz4 + "STD_ID_PERSON"                                            | SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"."}{"STD_ID_PERSON"}                                         |
| 113 | zNMSESION           | zraiz6 + "SCO_NM_SESSION"                                           | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_NM_SESSION"}                                         |
| 114 | zIDTRTBSESION       | zraiz6 + "SCO_ID_TRTBREQ"                                           | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_ID_TRTBREQ"}                                         |
| 115 | zDATE               | zraiz6 + "SCO_DATE"                                                 | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE"}                                               |
| 116 | zDATE1              | zraiz6 + "SCO_DATE_1"                                               | SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE_1"}                                             |
| 137 | zcount3             | 0                                                                   | 0                                                                                                    |
| 138 | zcount3i            | 0                                                                   | 0                                                                                                    |
| 144 | zcount3v            | String.valueOf(zcount3i)                                            | String.valueOf(zcount3i)                                                                             |
| 146 | zcountsesiones_aux1 | 0                                                                   | 0                                                                                                    |
| 147 | zcountsesiones_aux  | 0                                                                   | 0                                                                                                    |
| 156 | zcountsesiones      | String.valueOf(zcountsesiones_aux)                                  | String.valueOf(zcountsesiones_aux)                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 118 | m4:startpage | m4task=SSM_TRAINING_REQUEST                                                                                               |
| 118 | m4:beginjob  |                                                                                                                           |
| 119 | m4:datadef   | m4o=SSM_TRAINING_REQUEST; m4name=SSM_TRAINING_REQUEST                                                                     |
| 127 | m4:exec      | m4method=SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                     |
| 127 | m4:param     | name=TIPO_CARGA; value=DM                                                                                                 |
| 128 | m4:outputdef |                                                                                                                           |
| 128 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"[*]"}                                                   |
| 129 | m4:outputdef | m4alias=M4T_LENGUAJES                                                                                                     |
| 129 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                         |
| 130 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                     |
| 130 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS{"[*]"}                                                         |
| 131 | m4:outputdef | m4alias=M4T_SESIONES                                                                                                      |
| 131 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"[*]"}                                                          |
| 132 | m4:endjob    |                                                                                                                           |
| 133 | m4:move      |                                                                                                                           |
| 133 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                               |
| 134 | m4:move      |                                                                                                                           |
| 134 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_SESIONES{":"}M4T_SESIONES{"["}0{"]"}                                                 |
| 135 | m4:move      |                                                                                                                           |
| 135 | m4:param     | name=SSM_TRAINING_REQUEST; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}0{"]"}                                               |
| 168 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_MULTIMEDIA; htmlsafe=true                                          |
| 171 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_PRODUCT_TYPE; htmlsafe=true                                        |
| 173 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_DEV_PRODUCT; htmlsafe=true                                         |
| 177 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_AUTHOR; htmlsafe=true                                                 |
| 179 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_CD_DATE; htmlsafe=true                                                |
| 183 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_DAYS; htmlsafe=true                                         |
| 185 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_HOURS; htmlsafe=true                                        |
| 189 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NUMBER_OF_UNITS; htmlsafe=true                                        |
| 193 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_EDUCAT_OBJ; htmlsafe=true                                             |
| 197 | m4:item      | m4name=SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH; htmlsafe=true                                              |
| 226 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                     |
| 227 | m4:item      | m4name=M4T_LENGUAJES{":"}SSM_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true |
| 251 | m4:iterator  | m4rows=String.valueOf(zcountsesiones_aux); m4node=M4T_SESIONES{":"}SSM_TRAINING_REQUEST{"!"}M4T_SESIONES                  |
| 254 | m4:param     | name=m4item0; value=SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_NM_SESSION"}                                          |
| 255 | m4:param     | name=m4item1; value=SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_ID_TRTBREQ"}                                          |
| 256 | m4:param     | name=m4item2; value=SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE"}                                                |
| 257 | m4:param     | name=m4item3; value=SSM_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE_1"}                                              |
| 294 | m4:iterator  | m4rows=*; m4node=SSM_EMPLEADOS{":"}SSM_TRAINING_REQUEST{"!"}SSM_EMPLEADOS                                                 |
| 295 | m4:param     | name=m4item7; value=SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_ID_PERSON                                                      |
| 296 | m4:param     | name=m4item8; value=SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_N_FAMILY_NAME_1                                                |
| 297 | m4:param     | name=m4item9; value=SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_N_FIRST_NAME                                                   |
| 298 | m4:param     | name=m4item10; value=SSM_TRAINING_REQUEST!SSM_EMPLEADOS.SCO_GB_NAME                                                       |
| 324 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 123 | setItem          | zsubsesion,znodo2,"","SSE_ID",zid |
| 141 | getCount         | znodo3,zsubsesion,znodo3          |
| 142 | getCountInClient | znodo3,zsubsesion,znodo3          |
| 150 | getCount         | znodo6,zsubsesion,znodo6          |
| 154 | getCountInClient | znodo6,zsubsesion,znodo6          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 12  | solicitar | i2         |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if (plazas == 0 &amp;&amp; m== 0){alert ("Debe de introducir número de plazas o elegir algún empleado");return;}                                                                                                                                   |
| 25  | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                                                                                                                                                  |
| 27  | if (v1.resultado == false &amp;&amp; m == 0){                                                                                                                                                                                                      |
| 28  | alert ("No se ha realizado la solicitud.Compruebe que el número de plazas es correcto.");                                                                                                                                                          |
| 30  | if (a == false){return;}                                                                                                                                                                                                                           |
| 31  | if (plazas &lt; m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}                                                                                                                                                                          |
| 33  | if (i == n) {empleados += document.forms["Formulario"].elements["list2"].options [i].value;}                                                                                                                                                       |
| 34  | else {empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}                                                                                                                                                        |
| 36  | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4valor("Formulario","zfechaini","","get")== ""))                                                                                                                                |
| 40  | if ((m4valor("Formulario","zfechafin","","get")== "") &amp;&amp; (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))                                                                                                                     |
| 44  | if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&amp;&amp; (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&amp;&amp; (m4compfechas(m4objeto('zfechaini','Formulario'),'&lt;=',m4objeto('zfechafin','Formulario')))) |
| 48  | alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");                                                                                                             |
| 58  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                |
| 237 | &lt;%if (zcountsesiones_aux != 0 ) {                                                                                                                                                                                                               |
| 281 | else                                                                                                                                                                                                                                               |
| 77  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                         |
| 78  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                       |
| 79  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 80  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                                                                                                                                 |
| 81  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                              |
| 82  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                                                                                                                                 |
| 84  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                       |
| 85  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                                            |
| 86  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 88  | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                                                                                                                       |
| 89  | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 90  | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                                                                                                                                 |
| 91  | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                                                                                                                              |
| 92  | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                                                                                                                                                 |
| 94  | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                       |
| 95  | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";                                                                                                                                         |
| 96  | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                                                                                                                                                 |
| 97  | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                                                                                                                              |
| 98  | expresión de cálculo/transformación: String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;                                                                                                                                                 |
| 100 | expresión de cálculo/transformación: String zMETODOCARGA = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                                                                                                                                    |
| 102 | expresión de cálculo/transformación: String zAUTHOR = zraiz2 + "SCO_AUTHOR";                                                                                                                                                                       |
| 103 | expresión de cálculo/transformación: String zCDDATE = zraiz2 + "SCO_CD_DATE";                                                                                                                                                                      |
| 104 | expresión de cálculo/transformación: String zESTIMATEDDAYS = zraiz2 + "SCO_ESTIMATED_DAYS";                                                                                                                                                        |
| 105 | expresión de cálculo/transformación: String zESTIMATEDHOURS = zraiz2 + "SCO_ESTIMATED_HOURS";                                                                                                                                                      |
| 106 | expresión de cálculo/transformación: String zNUMBER = zraiz2 + "STD_NUMBER_OF_UNITS";                                                                                                                                                              |
| 107 | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";                                                                                                                                                           |
| 108 | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";                                                                                                                                                          |
| 109 | expresión de cálculo/transformación: String zNFAMILYNAME = zraiz4 + "STD_N_FAMILY_NAME_1";                                                                                                                                                         |
| 110 | expresión de cálculo/transformación: String zFIRSTNAME = zraiz4 + "STD_N_FIRST_NAME";                                                                                                                                                              |
| 111 | expresión de cálculo/transformación: String zGLOBALNAME = zraiz4 + "SCO_GB_NAME";                                                                                                                                                                  |
| 112 | expresión de cálculo/transformación: String zIDPERSON = zraiz4 + "STD_ID_PERSON";                                                                                                                                                                  |
| 113 | expresión de cálculo/transformación: String zNMSESION = zraiz6 + "SCO_NM_SESSION";                                                                                                                                                                 |
| 114 | expresión de cálculo/transformación: String zIDTRTBSESION = zraiz6 + "SCO_ID_TRTBREQ";                                                                                                                                                             |
| 115 | expresión de cálculo/transformación: String zDATE = zraiz6 + "SCO_DATE";                                                                                                                                                                           |
| 116 | expresión de cálculo/transformación: String zDATE1 = zraiz6 + "SCO_DATE_1";                                                                                                                                                                        |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 8   | ../../mss_generico/espanol/menu_mss.jsp               |
| 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 64  | ../../sse_generico/espanol/generico_links.jsp         |
| 322 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                      |
| --- | ------------------------------------------------------ |
| 6   | /css/estilo_mss.css                                    |
| 7   | /libreria/funciones_sse.js                             |
| 9   | /libreria/menuintercambio.js                           |
| 10  | /libreria/clase_val_entradas.js                        |
| 161 | /iconos/noname_incripciones_formacion_99_100.gif       |
| 165 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp |
| 197 | &lt;m4:item m4name=                                    |
| 206 | javascript:m4calendario(m4objeto(                      |
| 207 | /iconos/icono_calendario_14_18.gif                     |
| 216 | javascript:m4calendario(m4objeto(                      |
| 217 | /iconos/icono_calendario_14_18.gif                     |
| 305 | javascript:mover(m4objeto(                             |
| 305 | /iconos/icono_move_left_31_19.gif                      |
| 305 | /iconos/icono_move_right_31_19.gif                     |
| 306 | /iconos/icono_moveall_left_31_19.gif                   |
| 306 | /iconos/icono_moveall_right_31_19.gif                  |
| 318 | javascript:solicitar(                                  |
| 318 | /iconos/icono_enviar_mss_36_36.gif                     |
| 8   | ../../mss_generico/espanol/menu_mss.jsp                |
| 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp     |
| 64  | ../../sse_generico/espanol/generico_links.jsp          |
| 322 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                             | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 64  | ../../sse_generico/espanol/generico_links.jsp          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 322 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 7   | /libreria/funciones_sse.js                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 9   | /libreria/menuintercambio.js                           | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md)       |
| BASE   | 10  | /libreria/clase_val_entradas.js                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 165 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp | ausente    | P06                                                                                              |
| BASE   | 206 | javascript:m4calendario(m4objeto(                      | dinámica   | P06                                                                                              |
| BASE   | 216 | javascript:m4calendario(m4objeto(                      | dinámica   | P06                                                                                              |
| BASE   | 305 | javascript:mover(m4objeto(                             | dinámica   | P06                                                                                              |
| BASE   | 318 | javascript:solicitar(                                  | dinámica   | P06                                                                                              |
| BASE   | 8   | ../../mss_generico/espanol/menu_mss.jsp                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 63  | ../../mss_generico/espanol/mssgenerico_menusup.jsp     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 64  | ../../sse_generico/espanol/generico_links.jsp          | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 322 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_mod2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
