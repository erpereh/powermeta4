# Inscripción en multimedia

Identificador: `sse_g3/sse_g3_p3_mod2.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_mod2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_mod2.jsp) | `7ed60f7e0fee0c1bf7abcdd2f4b4c26b2f91b08c101cd586de72a2a5a254df30` |    330 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_mod2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                      |
| --- | --------------------------------------------- |
| 7   | Inscripción en multimedia                     |
| 151 | Inscripción en multimedia                     |
| 155 | Solicita una multimedia Catálogo de formación |
| 163 | Descripción de la multimedia de formación     |
| 168 | Tipo de formación:                            |
| 173 | Producto:                                     |
| 178 | Multimedia:                                   |
| 185 | Autor:                                        |
| 187 | Fecha del cd:                                 |
| 193 | Días estimados:                               |
| 195 | Horas estimadas:                              |
| 197 | Unidades disponibles:                         |
| 203 | Objetivo formativo :                          |
| 207 | Ruta internet :                               |
| 208 | " &gt;                                        |
| 221 | Información adicional                         |
| 227 | Inicio preferido                              |
| 239 | Fin preferido                                 |
| 250 | Lenguaje                                      |
| 251 | Español "&gt;                                 |
| 289 | Sesiones programadas                          |
| 303 | Nombre:                                       |
| 304 | $M4ITEM0$                                     |
| 305 | Inicio:                                       |
| 306 | $M4ITEM2$                                     |
| 307 | Fin:                                          |
| 308 | $M4ITEM3$                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 154 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción en multimedia                                                                             |
| 157 | a       | class=enlacefuncional; title=Catálogo de formación; href=sse_g3_p3.jsp?estado=31                                                                                                      |
| 164 | a       | href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                                                        |
| 164 | img     | alt=Catálogo de formación; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 208 | a       | href=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                               |
| 210 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                       |
| 211 | input   | type=hidden; id=TAG; name=TAG; value=SSE_TRAINING_REQUEST                                                                                                                             |
| 212 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                 |
| 213 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                         |
| 214 | input   | type=hidden; id=NOD; name=NOD; value=SSE_TRAINING_REQUEST                                                                                                                             |
| 215 | input   | type=hidden; id=SCO_ID_TRTBREQ; name=SCO_ID_TRTBREQ; value=&lt;%=zidtrtb%&gt;                                                                                                         |
| 216 | input   | type=hidden; id=SCO_NM_TRAINING; name=SCO_NM_TRAINING; value=&lt;m4:item m4name=; htmlsafe=true                                                                                       |
| 217 | input   | type=hidden; id=SCO_NM_TYPE; name=SCO_NM_TYPE; value=Multimedia                                                                                                                       |
| 231 | input   | class=fuenteformulario; type=text; name=SCO_SD_PREF; id=SCO_SD_PREF; title=Escribe la fecha de inicio; maxlength=10; size=10                                                          |
| 232 | a       | href=javascript:m4calendario(m4objeto('SCO_SD_PREF','NombreFormulario'))                                                                                                              |
| 233 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de inicio                                                                                        |
| 243 | input   | class=fuenteformulario; type=text; name=SCO_ED_PREF; id=SCO_ED_PREF; title=Escribe la fecha de fin; maxlength=10; size=10                                                             |
| 244 | a       | href=javascript:m4calendario(m4objeto('SCO_ED_PREF','NombreFormulario'))                                                                                                              |
| 245 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de fin                                                                                           |
| 252 | select  | id=STD_ID_LANGUAGE; class=Fuenteformulario; name=STD_ID_LANGUAGE                                                                                                                      |
| 253 | option  | value=01                                                                                                                                                                              |
| 255 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                              |
| 266 | a       | style=cursor:hand; href=javascript:comprobar(); title=Enviar                                                                                                                          |
| 267 | img     | alt=Enviar; title=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)              |
| 279 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=FormularioSesion; id=FormularioSesion                                                       |
| 280 | input   | type=hidden; id=TAG; name=TAG; value=SSE_TRAINING_REQUEST                                                                                                                             |
| 281 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                 |
| 282 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                         |
| 283 | input   | type=hidden; id=NOD; name=NOD; value=SSE_TRAINING_REQUEST                                                                                                                             |
| 284 | input   | type=hidden; id=SCO_NM_TYPE; name=SCO_NM_TYPE; value=Sesión                                                                                                                           |
| 285 | input   | type=hidden; id=SCO_ID_TRTBREQ; name=SCO_ID_TRTBREQ                                                                                                                                   |
| 286 | input   | type=hidden; id=SCO_NM_TRAINING; name=SCO_NM_TRAINING                                                                                                                                 |
| 310 | a       | style=cursor:hand; href=javascript:solicitar_sesion('$M4ITEM0$','$M4ITEM1$'); title=Enviar                                                                                            |
| 311 | img     | alt=Enviar; title=Enviar; border=0; src=/iconos/icono_seleccionar_11_12.gif                                                                                                           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                    | Resolución estática parcial                                                                          |
| --- | ------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 40  | estado              | zobjtabla.m4paramvalor("estado")                                    | zobjtabla.m4paramvalor("estado")                                                                     |
| 41  | znombre             | zobjtabla.m4paramvalor("znombre")                                   | zobjtabla.m4paramvalor("znombre")                                                                    |
| 42  | zntipo              | zobjtabla.m4paramvalor("zntipo")                                    | zobjtabla.m4paramvalor("zntipo")                                                                     |
| 43  | znmul               | zobjtabla.m4paramvalor("znmu")                                      | zobjtabla.m4paramvalor("znmu")                                                                       |
| 44  | zid                 | zobjtabla.m4paramvalor("zid")                                       | zobjtabla.m4paramvalor("zid")                                                                        |
| 45  | zinicios            | zobjtabla.m4paramvalor("zinicios")                                  | zobjtabla.m4paramvalor("zinicios")                                                                   |
| 46  | zidtrtb             | zobjtabla.m4paramvalor("zidtrtb")                                   | zobjtabla.m4paramvalor("zidtrtb")                                                                    |
| 56  | zsubsesion          | "SSE_TRAINING_REQUEST"                                              | SSE_TRAINING_REQUEST                                                                                 |
| 57  | zMeta4Object        | "SSE_TRAINING_REQUEST"                                              | SSE_TRAINING_REQUEST                                                                                 |
| 59  | znodo2              | "M4T_DESC_MULTIMEDIA"                                               | M4T_DESC_MULTIMEDIA                                                                                  |
| 60  | znodo3              | "M4T_LENGUAJES"                                                     | M4T_LENGUAJES                                                                                        |
| 61  | znodo6              | "M4T_SESIONES"                                                      | M4T_SESIONES                                                                                         |
| 63  | ztipocarga          | "DM"                                                                | DM                                                                                                   |
| 64  | zventanas           | "20"                                                                | 20                                                                                                   |
| 66  | zregistroinicial    | 0                                                                   | 0                                                                                                    |
| 68  | zventana            | 0                                                                   | 0                                                                                                    |
| 69  | zregistrofinal      | zregistroinicial + zventana - 1                                     | 0{zventana - 1}                                                                                      |
| 73  | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                   | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"[*]"}                                                  |
| 74  | zmove2              | znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]"                | M4T_DESC_MULTIMEDIA{":"}M4T_DESC_MULTIMEDIA{"["}0{"]"}                                               |
| 75  | zlectura2           | zsubsesion + "!" + znodo2                                           | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA                                                         |
| 76  | zraiz2              | zsubsesion + "!" + znodo2 + "."                                     | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}                                                    |
| 77  | ziterator2          | znodo2 + ":" + zsubsesion + "!" + znodo2                            | M4T_DESC_MULTIMEDIA{":"}SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA                                 |
| 79  | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                   | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                        |
| 80  | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                   | M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                                           |
| 81  | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "." | M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}                    |
| 83  | zoutputdef6         | zsubsesion + "!" + znodo6 + "[*]"                                   | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"[*]"}                                                         |
| 84  | zmove6              | znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]"                | M4T_SESIONES{":"}M4T_SESIONES{"["}0{"]"}                                                             |
| 85  | zlectura6           | zsubsesion + "!" + znodo6                                           | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES                                                                |
| 86  | zraiz6              | zsubsesion + "!" + znodo6 + "."                                     | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}                                                           |
| 87  | ziterator6          | znodo6 + ":" + zsubsesion + "!" + znodo6                            | M4T_SESIONES{":"}SSE_TRAINING_REQUEST{"!"}M4T_SESIONES                                               |
| 90  | zMETODOCARGA        | zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                         |
| 94  | zAUTHOR             | zraiz2 + "SCO_AUTHOR"                                               | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_AUTHOR"}                                      |
| 95  | zCDDATE             | zraiz2 + "SCO_CD_DATE"                                              | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_CD_DATE"}                                     |
| 96  | zESTIMATEDDAYS      | zraiz2 + "SCO_ESTIMATED_DAYS"                                       | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_ESTIMATED_DAYS"}                              |
| 97  | zESTIMATEDHOURS     | zraiz2 + "SCO_ESTIMATED_HOURS"                                      | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"SCO_ESTIMATED_HOURS"}                             |
| 98  | zNUMBER             | zraiz2 + "STD_NUMBER_OF_UNITS"                                      | SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"."}{"STD_NUMBER_OF_UNITS"}                             |
| 100 | zSTDNMLENGUAGE      | zcomun3 + "STD_N_LANGUAGE"                                          | M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}  |
| 101 | zSTDIDLENGUAGE      | zcomun3 + "STD_ID_LANGUAGE"                                         | M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"} |
| 103 | zNMSESION           | zraiz6 + "SCO_NM_SESSION"                                           | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_NM_SESSION"}                                         |
| 104 | zIDTRTBEVENTO       | zraiz6 + "SCO_ID_TRTBREQ"                                           | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_ID_TRTBREQ"}                                         |
| 105 | zDATE               | zraiz6 + "SCO_DATE"                                                 | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE"}                                               |
| 106 | zDATE1              | zraiz6 + "SCO_DATE_1"                                               | SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE_1"}                                             |
| 126 | zcount3             | 0                                                                   | 0                                                                                                    |
| 127 | zcount3i            | 0                                                                   | 0                                                                                                    |
| 133 | zcount3v            | String.valueOf(zcount3i)                                            | String.valueOf(zcount3i)                                                                             |
| 136 | zcountsesiones_aux1 | 0                                                                   | 0                                                                                                    |
| 137 | zcountsesiones_aux  | 0                                                                   | 0                                                                                                    |
| 146 | zcountsesiones      | String.valueOf(zcountsesiones_aux)                                  | String.valueOf(zcountsesiones_aux)                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 109 | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                                               |
| 109 | m4:beginjob  |                                                                                                                           |
| 110 | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                                                     |
| 118 | m4:exec      | m4method=SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                                                     |
| 118 | m4:param     | name=TIPO_CARGA; value=DM                                                                                                 |
| 119 | m4:outputdef |                                                                                                                           |
| 119 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_DESC_MULTIMEDIA{"[*]"}                                                   |
| 120 | m4:outputdef | m4alias=M4T_LENGUAJES                                                                                                     |
| 120 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                                         |
| 121 | m4:outputdef | m4alias=M4T_SESIONES                                                                                                      |
| 121 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"[*]"}                                                          |
| 122 | m4:endjob    |                                                                                                                           |
| 123 | m4:move      |                                                                                                                           |
| 123 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"[FIRST]"}                                               |
| 124 | m4:move      |                                                                                                                           |
| 124 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_SESIONES{":"}M4T_SESIONES{"["}0{"]"}                                                 |
| 169 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_PRODUCT_TYPE; htmlsafe=true                                        |
| 174 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_DEV_PRODUCT; htmlsafe=true                                         |
| 179 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_MULTIMEDIA; htmlsafe=true                                          |
| 186 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_AUTHOR; htmlsafe=true                                                 |
| 188 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_CD_DATE; htmlsafe=true                                                |
| 194 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_DAYS; htmlsafe=true                                         |
| 196 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_HOURS; htmlsafe=true                                        |
| 198 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NUMBER_OF_UNITS; htmlsafe=true                                        |
| 204 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_EDUCAT_OBJ; htmlsafe=true                                             |
| 208 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH; htmlsafe=true                                              |
| 254 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount3v).intValue()-1).toString()                                                     |
| 256 | m4:item      | m4name=M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LANGUAGE"}; htmlsafe=true |
| 295 | m4:iterator  | m4rows=String.valueOf(zcountsesiones_aux); m4node=M4T_SESIONES{":"}SSE_TRAINING_REQUEST{"!"}M4T_SESIONES                  |
| 298 | m4:param     | name=m4item0; value=SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_NM_SESSION"}                                          |
| 299 | m4:param     | name=m4item1; value=SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_ID_TRTBREQ"}                                          |
| 300 | m4:param     | name=m4item2; value=SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE"}                                                |
| 301 | m4:param     | name=m4item3; value=SSE_TRAINING_REQUEST{"!"}M4T_SESIONES{"."}{"SCO_DATE_1"}                                              |
| 326 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 114 | setItem          | zsubsesion,znodo2,"","SSE_ID",zid |
| 130 | getCount         | znodo3,zsubsesion,znodo3          |
| 131 | getCountInClient | znodo3,zsubsesion,znodo3          |
| 140 | getCount         | znodo6,zsubsesion,znodo6          |
| 144 | getCountInClient | znodo6,zsubsesion,znodo6          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos    |
| --- | ---------------- | ------------- |
| 14  | solicitar_sesion | nombre,idtrtb |
| 23  | comprobar        |               |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") &amp;&amp; (m4valor("NombreFormulario","SCO_SD_PREF","","get")== ""))                                                                                                                                                |
| 28  | if ((m4valor("NombreFormulario","SCO_ED_PREF","","get")== "") &amp;&amp; (m4fechacomprobacion(m4objeto('SCO_SD_PREF','NombreFormulario'),"")))                                                                                                                                     |
| 31  | if (m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),"")&amp;&amp; (m4fechacomprobacion((m4objeto('SCO_SD_PREF','NombreFormulario')),""))&amp;&amp; (m4compfechas(m4objeto('SCO_SD_PREF','NombreFormulario'),'&lt;=',m4objeto('SCO_ED_PREF','NombreFormulario')))) |
| 34  | alert ("No se ha realizado la solicitud.Compruebe que la fecha de fin es posterior a la de inicio y que los formatos son correctos.");                                                                                                                                             |
| 47  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                                                |
| 274 | if (zcountsesiones_aux != 0 ) {                                                                                                                                                                                                                                                    |
| 69  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                                                         |
| 73  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                                                       |
| 74  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";                                                                                                                                                                         |
| 75  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                                                                                                                                                                 |
| 76  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                                                              |
| 77  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                                                                                                                                                                 |
| 79  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                                                                                                                                       |
| 80  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                                                                                                                                            |
| 81  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                         |
| 83  | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                                                                                                                                       |
| 84  | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";                                                                                                                                                                         |
| 85  | expresión de cálculo/transformación: String zlectura6 = zsubsesion + "!" + znodo6;                                                                                                                                                                                                 |
| 86  | expresión de cálculo/transformación: String zraiz6 = zsubsesion + "!" + znodo6 + ".";                                                                                                                                                                                              |
| 87  | expresión de cálculo/transformación: String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;                                                                                                                                                                                 |
| 90  | expresión de cálculo/transformación: String zMETODOCARGA = zsubsesion + "!SSE_PRINCIPAL.CARGA";                                                                                                                                                                                    |
| 94  | expresión de cálculo/transformación: String zAUTHOR = zraiz2 + "SCO_AUTHOR";                                                                                                                                                                                                       |
| 95  | expresión de cálculo/transformación: String zCDDATE = zraiz2 + "SCO_CD_DATE";                                                                                                                                                                                                      |
| 96  | expresión de cálculo/transformación: String zESTIMATEDDAYS = zraiz2 + "SCO_ESTIMATED_DAYS";                                                                                                                                                                                        |
| 97  | expresión de cálculo/transformación: String zESTIMATEDHOURS = zraiz2 + "SCO_ESTIMATED_HOURS";                                                                                                                                                                                      |
| 98  | expresión de cálculo/transformación: String zNUMBER = zraiz2 + "STD_NUMBER_OF_UNITS";                                                                                                                                                                                              |
| 100 | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";                                                                                                                                                                                           |
| 101 | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";                                                                                                                                                                                          |
| 103 | expresión de cálculo/transformación: String zNMSESION = zraiz6 + "SCO_NM_SESSION";                                                                                                                                                                                                 |
| 104 | expresión de cálculo/transformación: String zIDTRTBEVENTO = zraiz6 + "SCO_ID_TRTBREQ";                                                                                                                                                                                             |
| 105 | expresión de cálculo/transformación: String zDATE = zraiz6 + "SCO_DATE";                                                                                                                                                                                                           |
| 106 | expresión de cálculo/transformación: String zDATE1 = zraiz6 + "SCO_DATE_1";                                                                                                                                                                                                        |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 53  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 54  | ../../sse_generico/espanol/generico_links.jsp      |
| 324 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 154 | /iconos/noname_incripciones_formacion_99_100.gif                |
| 157 | sse_g3_p3.jsp?estado=31                                         |
| 164 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31       |
| 164 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 208 | &lt;m4:item m4name=                                             |
| 210 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 232 | javascript:m4calendario(m4objeto(                               |
| 233 | /iconos/icono_calendario_14_18.gif                              |
| 244 | javascript:m4calendario(m4objeto(                               |
| 245 | /iconos/icono_calendario_14_18.gif                              |
| 266 | javascript:comprobar()                                          |
| 267 | /iconos/icono_enviar_ess_36_36.gif                              |
| 279 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 310 | javascript:solicitar_sesion(                                    |
| 311 | /iconos/icono_seleccionar_11_12.gif                             |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 53  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 54  | ../../sse_generico/espanol/generico_links.jsp                   |
| 324 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 53  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 54  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 324 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 157 | sse_g3_p3.jsp?estado=31                                         | física     | [sse_g3/sse_g3_p3.jsp](sse_g3--sse_g3_p3.md)                                                              |
| BASE   | 164 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31       | ausente    | P06                                                                                                       |
| BASE   | 210 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 232 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                       |
| BASE   | 244 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                       |
| BASE   | 266 | javascript:comprobar()                                          | dinámica   | P06                                                                                                       |
| BASE   | 279 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 310 | javascript:solicitar_sesion(                                    | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 53  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 54  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 324 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_mod2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
