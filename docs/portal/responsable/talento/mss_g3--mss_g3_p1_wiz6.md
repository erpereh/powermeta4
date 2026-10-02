# Idiomas

Identificador: `mss_g3/mss_g3_p1_wiz6.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz6.jsp) | `fe0bd96d6338ddd51b571d0eab598341f9ab934f10bc8b3974069b84582b1d6d` |    280 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz6.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz6.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------- |
| 7   | Idiomas                                                                                                   |
| 152 | Idiomas                                                                                                   |
| 156 | Añade los idiomas requeridos para esta vacante. Asegúrate de añadir los datos al finalizar el formulario. |
| 163 | Idioma                                                                                                    |
| 166 | * Idioma                                                                                                  |
| 167 | $M4ITEM1$                                                                                                 |
| 177 | Requerido                                                                                                 |
| 181 | Nivel lectura                                                                                             |
| 182 | $M4ITEM1$                                                                                                 |
| 194 | Nivel escritura                                                                                           |
| 195 | $M4ITEM1$                                                                                                 |
| 207 | Nivel conversación                                                                                        |
| 208 | $M4ITEM1$                                                                                                 |
| 231 | Idioma                                                                                                    |
| 232 | Nivel lectura                                                                                             |
| 233 | Nivel escritura                                                                                           |
| 234 | Nivel conversación                                                                                        |
| 235 | Requerido                                                                                                 |
| 256 | "&gt;                                                                                                     |
| 266 | "&gt;                                                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                  |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 155 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                                         |
| 160 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                                      |
| 168 | select  | id=STD_ID_LANGUAGE; name=STD_ID_LANGUAGE; title=Seleccionar idioma; class=fuenteformulario100                                                                                                                              |
| 169 | option  | value=                                                                                                                                                                                                                     |
| 173 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 177 | input   | id=SCO_CHECK; type=checkbox; name=SCO_CHECK                                                                                                                                                                                |
| 183 | select  | id=STD_ID_READ_LEVEL; name=STD_ID_READ_LEVEL; title=Seleccionar nivel de lectura; class=fuenteformulario200                                                                                                                |
| 187 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 196 | select  | id=STD_ID_WRITE_LEVEL; name=STD_ID_WRITE_LEVEL; title=Seleccionar nivel de escritura; class=fuenteformulario200                                                                                                            |
| 200 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 209 | select  | id=STD_ID_SPEAK_LEVEL; name=STD_ID_SPEAK_LEVEL; title=Seleccionar nivel de conversación; class=fuenteformulario200                                                                                                         |
| 213 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 220 | a       | href=javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');                                                                                                                                                                    |
| 220 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                       |
| 221 | a       | href=javascript:comprobar(6,'mss_g3/mss_g3_p1_wiz6.jsp');                                                                                                                                                                  |
| 221 | img     | alt=Añadir idioma a la vacante; title=Añadir idioma a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                |
| 222 | a       | href=javascript:navegar(7,'mss_g3/mss_g3_p1_wiz7.jsp');                                                                                                                                                                    |
| 222 | img     | alt=Siguiente; title=Siguiente; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                    |
| 256 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 256 | img     | align=right; alt=Eliminar registro; title=Eliminar registro; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 266 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 266 | img     | align=right; alt=Eliminar registro; title=Eliminar registro; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 51  | estado          | getParameter(request,"estado")   |
| 52  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                                                           |
| --- | ------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 51  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                    |
| 52  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                  |
| 61  | OpcionActiva       | 6                                                                    | 6                                                                                                     |
| 71  | zsubsesion         | "SSM_VACANT"                                                         | SSM_VACANT                                                                                            |
| 72  | zmeta4object       | "SSM_VACANT"                                                         | SSM_VACANT                                                                                            |
| 73  | znodo1             | "SSM_LU_LANGUAGE"                                                    | SSM_LU_LANGUAGE                                                                                       |
| 74  | znodo2             | "SSM_LU_LANG_LEVEL"                                                  | SSM_LU_LANG_LEVEL                                                                                     |
| 75  | znodo3             | "SSM_JOB_POST_LANG"                                                  | SSM_JOB_POST_LANG                                                                                     |
| 76  | ztipocarga         | "wiz6"                                                               | wiz6                                                                                                  |
| 80  | zventanas          | "10"                                                                 | 10                                                                                                    |
| 81  | zvuelta            | 5                                                                    | 5                                                                                                     |
| 85  | zoutputdef1        | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_LANGUAGE{"[*]"}                                                                 |
| 86  | zlectura1          | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_LU_LANGUAGE                                                                        |
| 87  | zraiz1             | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_LU_LANGUAGE{"."}                                                                   |
| 88  | zmove1             | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_LU_LANGUAGE{":"}SSM_LU_LANGUAGE{"[FIRST]"}                                                        |
| 89  | ziterator1         | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_LU_LANGUAGE{":"}SSM_VACANT{"!"}SSM_LU_LANGUAGE                                                    |
| 91  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"[*]"}                                                               |
| 92  | zlectura2          | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_LU_LANG_LEVEL                                                                      |
| 93  | zraiz2             | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}                                                                 |
| 94  | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_LU_LANG_LEVEL{":"}SSM_LU_LANG_LEVEL{"[FIRST]"}                                                    |
| 95  | ziterator2         | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_LU_LANG_LEVEL{":"}SSM_VACANT{"!"}SSM_LU_LANG_LEVEL                                                |
| 97  | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[*]"}                                                               |
| 98  | zlectura3          | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_JOB_POST_LANG                                                                      |
| 99  | zraiz3a            | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_JOB_POST_LANG{"."}                                                                 |
| 100 | zraiz3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."  | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}                       |
| 101 | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                                                    |
| 102 | ziterator3         | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG                                                |
| 106 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA"                          | CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                               |
| 107 | zmetodopersist     | "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR"                        | GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                             |
| 111 | zSTDIDLANGUAGE     | zraiz1 + "STD_ID_LANGUAGE"                                           | SSM_VACANT{"!"}SSM_LU_LANGUAGE{"."}{"STD_ID_LANGUAGE"}                                                |
| 112 | zSTDNLANGUAGE      | zraiz1 + "STD_N_LANGUAGE"                                            | SSM_VACANT{"!"}SSM_LU_LANGUAGE{"."}{"STD_N_LANGUAGE"}                                                 |
| 114 | zSTDIDLANGLEVEL    | zraiz2 + "STD_ID_LANG_LEVEL"                                         | SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_ID_LANG_LEVEL"}                                            |
| 115 | zSTDNLANGLEVEL     | zraiz2 + "STD_N_LANG_LEVEL"                                          | SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_N_LANG_LEVEL"}                                             |
| 117 | zREQUERIDO         | zraiz3 + "REQUERIDO"                                                 | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}          |
| 118 | zNOMBREIDIOMA      | zraiz3 + "NOMBRE_IDIOMA"                                             | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_IDIOMA"}      |
| 119 | zNIVELLECTURA      | zraiz3 + "NIVEL_LECTURA"                                             | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_LECTURA"}      |
| 120 | zNIVELESCRITURA    | zraiz3 + "NIVEL_ESCRITURA"                                           | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ESCRITURA"}    |
| 121 | zNIVELCONVERSACION | zraiz3 + "NIVEL_CONVERSACION"                                        | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_CONVERSACION"} |
| 122 | zSTDIDLANGUAGE2    | zraiz3 + "STD_ID_LANGUAGE"                                           | SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LANGUAGE"}    |
| 139 | zcount3            | 0                                                                    | 0                                                                                                     |
| 140 | zcounti3           | 0                                                                    | 0                                                                                                     |
| 146 | zcountv3           | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                                              |
| 239 | zposicions         | "0"                                                                  | 0                                                                                                     |
| 240 | zcontrol           | 0                                                                    | 0                                                                                                     |
| 241 | zposicion          | 0                                                                    | 0                                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                          |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 125 | m4:startpage | m4task=SSM_VACANT                                                                                                           |
| 125 | m4:beginjob  |                                                                                                                             |
| 126 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                           |
| 128 | m4:exec      | m4method=GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                          |
| 128 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                        |
| 129 | m4:exec      | m4method=CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                            |
| 129 | m4:param     | name=TIPO_CARGA; value=wiz6                                                                                                 |
| 130 | m4:outputdef | m4alias=SSM_LU_LANGUAGE                                                                                                     |
| 130 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_LANGUAGE{"[*]"}                                                                   |
| 131 | m4:outputdef | m4alias=SSM_LU_LANG_LEVEL                                                                                                   |
| 131 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"[*]"}                                                                 |
| 132 | m4:outputdef | m4alias=SSM_JOB_POST_LANG                                                                                                   |
| 132 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[*]"}                                                                 |
| 133 | m4:endjob    |                                                                                                                             |
| 134 | m4:move      |                                                                                                                             |
| 134 | m4:param     | name=SSM_VACANT; value=SSM_LU_LANGUAGE{":"}SSM_LU_LANGUAGE{"[FIRST]"}                                                       |
| 135 | m4:move      |                                                                                                                             |
| 135 | m4:param     | name=SSM_VACANT; value=SSM_LU_LANG_LEVEL{":"}SSM_LU_LANG_LEVEL{"[FIRST]"}                                                   |
| 136 | m4:move      |                                                                                                                             |
| 136 | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST_LANG{":"}SSM_JOB_POST_LANG{"[FIRST]"}                                                   |
| 170 | m4:iterator  | m4rows=*; m4node=SSM_LU_LANGUAGE{":"}SSM_VACANT{"!"}SSM_LU_LANGUAGE                                                         |
| 171 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_LANGUAGE{"."}{"STD_ID_LANGUAGE"}                                                  |
| 172 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_LANGUAGE{"."}{"STD_N_LANGUAGE"}                                                   |
| 179 | m4:move      |                                                                                                                             |
| 179 | m4:param     | name=SSM_VACANT; value=SSM_LU_LANG_LEVEL{":"}SSM_LU_LANG_LEVEL{"[FIRST]"}                                                   |
| 184 | m4:iterator  | m4rows=*; m4node=SSM_LU_LANG_LEVEL{":"}SSM_VACANT{"!"}SSM_LU_LANG_LEVEL                                                     |
| 185 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_ID_LANG_LEVEL"}                                              |
| 186 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_N_LANG_LEVEL"}                                               |
| 192 | m4:move      |                                                                                                                             |
| 192 | m4:param     | name=SSM_VACANT; value=SSM_LU_LANG_LEVEL{":"}SSM_LU_LANG_LEVEL{"[FIRST]"}                                                   |
| 197 | m4:iterator  | m4rows=*; m4node=SSM_LU_LANG_LEVEL{":"}SSM_VACANT{"!"}SSM_LU_LANG_LEVEL                                                     |
| 198 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_ID_LANG_LEVEL"}                                              |
| 199 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_N_LANG_LEVEL"}                                               |
| 205 | m4:move      |                                                                                                                             |
| 205 | m4:param     | name=SSM_VACANT; value=SSM_LU_LANG_LEVEL{":"}SSM_LU_LANG_LEVEL{"[FIRST]"}                                                   |
| 210 | m4:iterator  | m4rows=*; m4node=SSM_LU_LANG_LEVEL{":"}SSM_VACANT{"!"}SSM_LU_LANG_LEVEL                                                     |
| 211 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_ID_LANG_LEVEL"}                                              |
| 212 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_LU_LANG_LEVEL{"."}{"STD_N_LANG_LEVEL"}                                               |
| 244 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti3).intValue()-1).toString()                                                       |
| 251 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_IDIOMA"}; htmlsafe=true      |
| 252 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_LECTURA"}; htmlsafe=true      |
| 253 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ESCRITURA"}; htmlsafe=true    |
| 254 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_CONVERSACION"}; htmlsafe=true |
| 255 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true          |
| 261 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_IDIOMA"}; htmlsafe=true      |
| 262 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_LECTURA"}; htmlsafe=true      |
| 263 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_ESCRITURA"}; htmlsafe=true    |
| 264 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"NIVEL_CONVERSACION"}; htmlsafe=true |
| 265 | m4:item      | m4name=SSM_JOB_POST_LANG{":"}SSM_VACANT{"!"}SSM_JOB_POST_LANG{"[&amp;VAR.m4lix]"}{"."}{"REQUERIDO"}; htmlsafe=true          |
| 278 | m4:endpage   |                                                                                                                             |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 143 | getCount         | znodo3,zsubsesion,znodo3 |
| 144 | getCountInClient | znodo3,zsubsesion,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos  |
| --- | --------- | ----------- |
| 16  | navegar   | _valor,_url |
| 21  | comprobar | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 24  | if (val_check.checked){zRequerido="1"}                                                                                    |
| 30  | if ((null==val_lang) &#124;&#124; (''==val_lang)){                                                                        |
| 35  | if (1==falta_valor){alert(mensaje)}                                                                                       |
| 36  | if (0==falta_valor){                                                                                                      |
| 53  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 56  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 227 | if (zcount3 &gt; 0) {                                                                                                     |
| 249 | &lt;%if (zcontrol==0){%&gt;                                                                                               |
| 259 | &lt;%}else{%&gt;                                                                                                          |
| 27  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n";                   |
| 85  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 86  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 87  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 88  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 89  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 91  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 92  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 93  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 94  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 95  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 97  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 98  | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 99  | expresión de cálculo/transformación: String zraiz3a = zsubsesion + "!" + znodo3 + ".";                                    |
| 100 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 101 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 102 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 106 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";                   |
| 107 | expresión de cálculo/transformación: String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";               |
| 111 | expresión de cálculo/transformación: String zSTDIDLANGUAGE = zraiz1 + "STD_ID_LANGUAGE";                                  |
| 112 | expresión de cálculo/transformación: String zSTDNLANGUAGE = zraiz1 + "STD_N_LANGUAGE";                                    |
| 114 | expresión de cálculo/transformación: String zSTDIDLANGLEVEL= zraiz2 + "STD_ID_LANG_LEVEL";                                |
| 115 | expresión de cálculo/transformación: String zSTDNLANGLEVEL = zraiz2 + "STD_N_LANG_LEVEL";                                 |
| 117 | expresión de cálculo/transformación: String zREQUERIDO = zraiz3 + "REQUERIDO";                                            |
| 118 | expresión de cálculo/transformación: String zNOMBREIDIOMA = zraiz3 + "NOMBRE_IDIOMA";                                     |
| 119 | expresión de cálculo/transformación: String zNIVELLECTURA = zraiz3 + "NIVEL_LECTURA";                                     |
| 120 | expresión de cálculo/transformación: String zNIVELESCRITURA = zraiz3 + "NIVEL_ESCRITURA";                                 |
| 121 | expresión de cálculo/transformación: String zNIVELCONVERSACION = zraiz3 + "NIVEL_CONVERSACION";                           |
| 122 | expresión de cálculo/transformación: String zSTDIDLANGUAGE2 = zraiz3 + "STD_ID_LANGUAGE";                                 |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 66  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 127 | ../../mss_g3/espanol/persist.jsp                      |
| 275 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                   |
| 9   | /libreria/funciones_sse.js                                                            |
| 11  | /libreria/clase_val_entradas.js                                                       |
| 155 | /iconos/noname_solicitar_vacantes_210_100.gif                                         |
| 160 | javascript:comprobar()                                                                |
| 220 | javascript:navegar(5,                                                                 |
| 220 | /iconos/icono_anterior_36_36.gif                                                      |
| 221 | javascript:comprobar(6,                                                               |
| 221 | /iconos/icono_aceptar_mss_36_36.gif                                                   |
| 222 | javascript:navegar(7,                                                                 |
| 222 | /iconos/icono_siguiente_36_36.gif                                                     |
| 256 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name= |
| 256 | /iconos/icono_borrar_16_16.gif                                                        |
| 266 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name= |
| 266 | /iconos/icono_borrar_16_16.gif                                                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                                               |
| 66  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         |
| 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    |
| 127 | ../../mss_g3/espanol/persist.jsp                                                      |
| 220 | mss_g3/mss_g3_p1_wiz5.jsp                                                             |
| 221 | mss_g3/mss_g3_p1_wiz6.jsp                                                             |
| 222 | mss_g3/mss_g3_p1_wiz7.jsp                                                             |
| 275 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 66  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 127 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 275 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 160 | javascript:comprobar()                                                                | dinámica   | P06                                                                                              |
| BASE   | 220 | javascript:navegar(5,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 221 | javascript:comprobar(6,                                                               | dinámica   | P06                                                                                              |
| BASE   | 222 | javascript:navegar(7,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 256 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 266 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz6.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 66  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 68  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 127 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 220 | mss_g3/mss_g3_p1_wiz5.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 221 | mss_g3/mss_g3_p1_wiz6.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 222 | mss_g3/mss_g3_p1_wiz7.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 275 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz6.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
