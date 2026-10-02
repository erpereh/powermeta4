# Obligaciones vacante

Identificador: `mss_g3/mss_g3_p1_wiz5.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz5.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz5.jsp) | `c201e2dca53ac358981b87a6340a2415b69c0488f10fee3fdc40f8c61aa564ba` |    256 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz5.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------- |
| 7   | Obligaciones vacante                                                                                           |
| 158 | Obligaciones vacante                                                                                           |
| 162 | Añade las obligaciones requeridas para esta vacante. Asegúrate de añadir los datos al finalizar el formulario. |
| 169 | Obligaciones vacante                                                                                           |
| 172 | * Obligación                                                                                                   |
| 173 | $M4ITEM1$                                                                                                      |
| 185 | Tiempo dedicado                                                                                                |
| 189 | Frecuencia                                                                                                     |
| 190 | $M4ITEM1$                                                                                                      |
| 215 | Obligación                                                                                                     |
| 216 | Tiempo dedicado                                                                                                |
| 217 | Frecuencia                                                                                                     |
| 233 | %                                                                                                              |
| 235 | "&gt;                                                                                                          |
| 240 | %                                                                                                              |
| 242 | "&gt;                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                        |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 161 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                               |
| 166 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                            |
| 174 | select  | id=SCO_ID_DUTY; name=SCO_ID_DUTY; title=Seleccionar obligación; class=fuenteformulario                                                                                                                           |
| 175 | option  | value=                                                                                                                                                                                                           |
| 179 | option  | value=$M4ITEM0$                                                                                                                                                                                                  |
| 186 | input   | class=fuenteformulario; type=text; id=SCO_TIME_NEEDED; name=SCO_TIME_NEEDED; size=3; maxlength=3; title=Escribe tiempo dedicado a la obligación; value=                                                          |
| 191 | select  | id=SCO_ID_JOB_FREQUENCY; name=SCO_ID_JOB_FREQUENCY; title=Seleccionar frecuencia; class=fuenteformulario                                                                                                         |
| 192 | option  | value=                                                                                                                                                                                                           |
| 196 | option  | value=$M4ITEM0$                                                                                                                                                                                                  |
| 203 | a       | href=javascript:navegar(4,'mss_g3/mss_g3_p1_wiz4.jsp');                                                                                                                                                          |
| 203 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                             |
| 204 | a       | href=javascript:comprobar(5,'mss_g3/mss_g3_p1_wiz5.jsp');                                                                                                                                                        |
| 204 | img     | alt=Añadir obligación a la vacante; title=Añadir obligación a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)              |
| 205 | a       | href=javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');                                                                                                                                                          |
| 205 | img     | alt=Siguiente; title=Siguiente; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                          |
| 235 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 235 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 242 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                        |
| 242 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 56  | estado          | getParameter(request,"estado")   |
| 57  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                                                       |
| --- | ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 56  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                |
| 57  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                              |
| 66  | OpcionActiva       | 5                                                                    | 5                                                                                                 |
| 77  | zsubsesion         | "SSM_VACANT"                                                         | SSM_VACANT                                                                                        |
| 78  | zmeta4object       | "SSM_VACANT"                                                         | SSM_VACANT                                                                                        |
| 79  | znodo1             | "SSM_DUTIES"                                                         | SSM_DUTIES                                                                                        |
| 80  | znodo2             | "SSM_X_FRECUENCY"                                                    | SSM_X_FRECUENCY                                                                                   |
| 81  | znodo3             | "SSM_R_JOB_POST_DUT"                                                 | SSM_R_JOB_POST_DUT                                                                                |
| 82  | ztipocarga         | "wiz5"                                                               | wiz5                                                                                              |
| 86  | zventanas          | "10"                                                                 | 10                                                                                                |
| 87  | zvuelta            | 5                                                                    | 5                                                                                                 |
| 91  | zoutputdef1        | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_DUTIES{"[*]"}                                                                  |
| 92  | zlectura1          | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_DUTIES                                                                         |
| 93  | zraiz1             | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_DUTIES{"."}                                                                    |
| 94  | zmove1             | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_DUTIES{":"}SSM_DUTIES{"[FIRST]"}                                                              |
| 95  | ziterator1         | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_DUTIES{":"}SSM_VACANT{"!"}SSM_DUTIES                                                          |
| 97  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_X_FRECUENCY{"[*]"}                                                             |
| 98  | zlectura2          | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_X_FRECUENCY                                                                    |
| 99  | zraiz2             | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_X_FRECUENCY{"."}                                                               |
| 100 | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_X_FRECUENCY{":"}SSM_X_FRECUENCY{"[FIRST]"}                                                    |
| 101 | ziterator2         | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_X_FRECUENCY{":"}SSM_VACANT{"!"}SSM_X_FRECUENCY                                                |
| 103 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[*]"}                                                          |
| 104 | zlectura3          | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_R_JOB_POST_DUT                                                                 |
| 105 | zraiz3a            | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"."}                                                            |
| 106 | zraiz3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."  | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}                 |
| 107 | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_R_JOB_POST_DUT{":"}SSM_R_JOB_POST_DUT{"[FIRST]"}                                              |
| 108 | ziterator3         | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT                                          |
| 112 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA"                          | CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                           |
| 113 | zmetodopersist     | "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR"                        | GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                         |
| 117 | zSCOIDDUTY         | zraiz1 + "SCO_ID_DUTY"                                               | SSM_VACANT{"!"}SSM_DUTIES{"."}{"SCO_ID_DUTY"}                                                     |
| 118 | zSCONMDUTY         | zraiz1 + "SCO_NM_DUTY"                                               | SSM_VACANT{"!"}SSM_DUTIES{"."}{"SCO_NM_DUTY"}                                                     |
| 120 | zSCOIDJOBFREQUENCY | zraiz2 + "SCO_ID_JOB_FREQUENCY"                                      | SSM_VACANT{"!"}SSM_X_FRECUENCY{"."}{"SCO_ID_JOB_FREQUENCY"}                                       |
| 121 | zSCONFREQUENCY     | zraiz2 + "SCO_N_FREQUENCY"                                           | SSM_VACANT{"!"}SSM_X_FRECUENCY{"."}{"SCO_N_FREQUENCY"}                                            |
| 123 | zFRECUENCIA        | zraiz3 + "FRECUENCIA"                                                | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"FRECUENCIA"}   |
| 124 | zOBLIGACION        | zraiz3 + "OBLIGACION"                                                | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"OBLIGACION"}   |
| 125 | zTIEMPOHORAS       | zraiz3 + "TIEMPO_HORAS"                                              | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"TIEMPO_HORAS"} |
| 126 | zSTDIDDUTY         | zraiz3 + "STD_ID_DUTY"                                               | SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_DUTY"}  |
| 143 | zcount3            | 0                                                                    | 0                                                                                                 |
| 144 | zcounti3           | 0                                                                    | 0                                                                                                 |
| 153 | zcountv3           | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                                          |
| 220 | zposicions         | "0"                                                                  | 0                                                                                                 |
| 221 | zcontrol           | 0                                                                    | 0                                                                                                 |
| 222 | zposicion          | 0                                                                    | 0                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                      |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| 129 | m4:startpage | m4task=SSM_VACANT                                                                                                       |
| 129 | m4:beginjob  |                                                                                                                         |
| 130 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                       |
| 132 | m4:exec      | m4method=GRABAR:{}SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                      |
| 132 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                    |
| 133 | m4:exec      | m4method=CARGA:{}SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                        |
| 133 | m4:param     | name=TIPO_CARGA; value=wiz5                                                                                             |
| 134 | m4:outputdef | m4alias=SSM_DUTIES                                                                                                      |
| 134 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_DUTIES{"[*]"}                                                                    |
| 135 | m4:outputdef | m4alias=SSM_X_FRECUENCY                                                                                                 |
| 135 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_X_FRECUENCY{"[*]"}                                                               |
| 136 | m4:outputdef | m4alias=SSM_R_JOB_POST_DUT                                                                                              |
| 136 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[*]"}                                                            |
| 137 | m4:endjob    |                                                                                                                         |
| 138 | m4:move      |                                                                                                                         |
| 138 | m4:param     | name=SSM_VACANT; value=SSM_DUTIES{":"}SSM_DUTIES{"[FIRST]"}                                                             |
| 139 | m4:move      |                                                                                                                         |
| 139 | m4:param     | name=SSM_VACANT; value=SSM_X_FRECUENCY{":"}SSM_X_FRECUENCY{"[FIRST]"}                                                   |
| 140 | m4:move      |                                                                                                                         |
| 140 | m4:param     | name=SSM_VACANT; value=SSM_R_JOB_POST_DUT{":"}SSM_R_JOB_POST_DUT{"[FIRST]"}                                             |
| 176 | m4:iterator  | m4rows=*; m4node=SSM_DUTIES{":"}SSM_VACANT{"!"}SSM_DUTIES                                                               |
| 177 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_DUTIES{"."}{"SCO_ID_DUTY"}                                                       |
| 178 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_DUTIES{"."}{"SCO_NM_DUTY"}                                                       |
| 193 | m4:iterator  | m4rows=*; m4node=SSM_X_FRECUENCY{":"}SSM_VACANT{"!"}SSM_X_FRECUENCY                                                     |
| 194 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_X_FRECUENCY{"."}{"SCO_ID_JOB_FREQUENCY"}                                         |
| 195 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_X_FRECUENCY{"."}{"SCO_N_FREQUENCY"}                                              |
| 225 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti3).intValue()-1).toString()                                                   |
| 232 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"OBLIGACION"}; htmlsafe=true   |
| 233 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"TIEMPO_HORAS"}; htmlsafe=true |
| 234 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"FRECUENCIA"}; htmlsafe=true   |
| 239 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"OBLIGACION"}; htmlsafe=true   |
| 240 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"TIEMPO_HORAS"}; htmlsafe=true |
| 241 | m4:item      | m4name=SSM_R_JOB_POST_DUT{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_DUT{"[&amp;VAR.m4lix]"}{"."}{"FRECUENCIA"}; htmlsafe=true   |
| 254 | m4:endpage   |                                                                                                                         |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 147 | getCount         | znodo3,zsubsesion,znodo3 |
| 151 | getCountInClient | znodo3,zsubsesion,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos  |
| --- | --------- | ----------- |
| 14  | navegar   | _valor,_url |
| 19  | comprobar | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 26  | if (parseInt(tiempo.value)&gt;100){                                                                                       |
| 30  | if ((null==val_duty) &#124;&#124; (''==val_duty)){                                                                        |
| 34  | if (falta_valor==1){                                                                                                      |
| 35  | alert(mensaje);                                                                                                           |
| 38  | if (0==falta_valor){                                                                                                      |
| 58  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 61  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 211 | if (zcount3 &gt; 0){                                                                                                      |
| 230 | if (zcontrol==0){%&gt;                                                                                                    |
| 237 | &lt;%}else{%&gt;                                                                                                          |
| 21  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                    |
| 91  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 92  | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 93  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 94  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 95  | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 97  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 98  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 99  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 100 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 101 | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 103 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 104 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 105 | expresión de cálculo/transformación: String zraiz3a = zsubsesion + "!" + znodo3 + ".";                                    |
| 106 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 107 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 108 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 112 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";                   |
| 113 | expresión de cálculo/transformación: String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";               |
| 117 | expresión de cálculo/transformación: String zSCOIDDUTY = zraiz1 + "SCO_ID_DUTY";                                          |
| 118 | expresión de cálculo/transformación: String zSCONMDUTY = zraiz1 + "SCO_NM_DUTY";                                          |
| 120 | expresión de cálculo/transformación: String zSCOIDJOBFREQUENCY = zraiz2 + "SCO_ID_JOB_FREQUENCY";                         |
| 121 | expresión de cálculo/transformación: String zSCONFREQUENCY = zraiz2 + "SCO_N_FREQUENCY";                                  |
| 123 | expresión de cálculo/transformación: String zFRECUENCIA = zraiz3 + "FRECUENCIA";                                          |
| 124 | expresión de cálculo/transformación: String zOBLIGACION = zraiz3 + "OBLIGACION";                                          |
| 125 | expresión de cálculo/transformación: String zTIEMPOHORAS = zraiz3 + "TIEMPO_HORAS";                                       |
| 126 | expresión de cálculo/transformación: String zSTDIDDUTY = zraiz3 + "STD_ID_DUTY";                                          |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 72  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 131 | ../../mss_g3/espanol/persist.jsp                      |
| 251 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 8   | /css/estilo_mss.css                                                                   |
| 9   | /libreria/funciones_sse.js                                                            |
| 11  | /libreria/clase_val_entradas.js                                                       |
| 161 | /iconos/noname_solicitar_vacantes_210_100.gif                                         |
| 166 | javascript:comprobar()                                                                |
| 203 | javascript:navegar(4,                                                                 |
| 203 | /iconos/icono_anterior_36_36.gif                                                      |
| 204 | javascript:comprobar(5,                                                               |
| 204 | /iconos/icono_aceptar_mss_36_36.gif                                                   |
| 205 | javascript:navegar(6,                                                                 |
| 205 | /iconos/icono_siguiente_36_36.gif                                                     |
| 235 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name= |
| 235 | /iconos/icono_borrar_16_16.gif                                                        |
| 242 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name= |
| 242 | /iconos/icono_borrar_16_16.gif                                                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                                               |
| 72  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         |
| 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    |
| 131 | ../../mss_g3/espanol/persist.jsp                                                      |
| 203 | mss_g3/mss_g3_p1_wiz4.jsp                                                             |
| 204 | mss_g3/mss_g3_p1_wiz5.jsp                                                             |
| 205 | mss_g3/mss_g3_p1_wiz6.jsp                                                             |
| 251 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 72  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 131 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 251 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 9   | /libreria/funciones_sse.js                                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 11  | /libreria/clase_val_entradas.js                                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 166 | javascript:comprobar()                                                                | dinámica   | P06                                                                                              |
| BASE   | 203 | javascript:navegar(4,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 204 | javascript:comprobar(5,                                                               | dinámica   | P06                                                                                              |
| BASE   | 205 | javascript:navegar(6,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 235 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 242 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz5.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 72  | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 74  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 131 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 203 | mss_g3/mss_g3_p1_wiz4.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 204 | mss_g3/mss_g3_p1_wiz5.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 205 | mss_g3/mss_g3_p1_wiz6.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 251 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
