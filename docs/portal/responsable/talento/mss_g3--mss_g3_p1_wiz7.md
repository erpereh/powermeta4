# Competencias vacante

Identificador: `mss_g3/mss_g3_p1_wiz7.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz7.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz7.jsp) | `85e2e153642886f69bb5addfbe86c7e5f2d131de0f346ead2b0c7962c3f31525` |    370 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz7.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz7.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                             |
| --- | ---------------------------------------------------- |
| 8   | Competencias vacante                                 |
| 257 | Competencias vacante                                 |
| 263 | Añade las competencias requeridas para esta vacante. |
| 272 | Competencias vacante                                 |
| 277 | * Competencia                                        |
| 278 | [valor dinámico] $M4ITEM1$                           |
| 293 | * Nivel                                              |
| 294 | $M4ITEM1$                                            |
| 310 | Peso                                                 |
| 311 | %                                                    |
| 327 | Competencia                                          |
| 329 | Nivel                                                |
| 331 | Peso                                                 |
| 349 | %                                                    |
| 350 | "&gt;                                                |
| 357 | "&gt;                                                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                  |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 262 | img     | alt=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                                         |
| 269 | form    | action=javascript:comprobar(); method=get; name=NombreFormulario; id=NombreFormulario                                                                                                                                      |
| 279 | select  | id=SCO_ID_EXTD_KN; class=fuenteformulario200; name=SCO_ID_EXTD_KN; title=Seleccionar competencia; onchange=javascript:cargarEscala()                                                                                       |
| 280 | option  | value=&lt;%=competencia%&gt;                                                                                                                                                                                               |
| 284 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 295 | select  | id=SCO_ID_LEVEL; class=fuenteformulario200; name=SCO_ID_LEVEL; title=Seleccionar nivel                                                                                                                                     |
| 297 | option  |                                                                                                                                                                                                                            |
| 302 | option  | value=$M4ITEM0$                                                                                                                                                                                                            |
| 311 | input   | class=fuenteformulario; type=text; id=SCO_WEIGHT; name=SCO_TIME_NEEDED; size=3; maxlength=3; title=Escribe tiempo dedicado a la obligación; value=                                                                         |
| 316 | a       | href=javascript:navegar(6,'mss_g3/mss_g3_p1_wiz6.jsp');                                                                                                                                                                    |
| 316 | img     | alt=Anterior; title=Anterior; src=/iconos/icono_anterior_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                       |
| 317 | a       | href=javascript:comprobar(7,'mss_g3/mss_g3_p1_wiz7.jsp');                                                                                                                                                                  |
| 317 | img     | alt=Añade la competencia a la vacante; title=Añadir competencia a la vacante; src=/iconos/icono_aceptar_mss_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                    |
| 318 | a       | href=javascript:navegar(1,'mss_g3/mss_g3_persist_wiz1.jsp');                                                                                                                                                               |
| 318 | img     | alt=Aceptar vacante; title=Aceptar vacante; src=/iconos/icono_guardar_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                          |
| 350 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 350 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 357 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name=; htmlsafe=true                                                                                                                  |
| 357 | img     | align=right; title=Eliminar registro; alt=Eliminar registro; border=0; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 88  | NM_Comp         | getParameter(request,"NM_Comp")  |
| 96  | estado          | getParameter(request,"estado")   |
| 97  | zinicios        | getParameter(request,"zinicios") |
| 193 | Peso            | getParameter(request,"Peso")     |
| 195 | Compet          | getParameter(request,"Compet")   |

| L   | Variable        | Expresión fuente                                                     | Resolución estática parcial                                                                              |
| --- | --------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 88  | ncomp           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NM_Comp")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NM_Comp")                                      |
| 96  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                       |
| 97  | zinicios        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                     |
| 109 | OpcionActiva    | 7                                                                    | 7                                                                                                        |
| 126 | zsubsesion      | "SSM_VACANT"                                                         | SSM_VACANT                                                                                               |
| 127 | zmeta4object    | "SSM_VACANT"                                                         | SSM_VACANT                                                                                               |
| 128 | znodo1          | "SSM_NOW_LEVEL_V"                                                    | SSM_NOW_LEVEL_V                                                                                          |
| 129 | znodo2          | "SSM_SCALE_LEVEL_V"                                                  | SSM_SCALE_LEVEL_V                                                                                        |
| 130 | znodo3          | "SSM_R_JOB_POST_COMP"                                                | SSM_R_JOB_POST_COMP                                                                                      |
| 131 | ztipocarga      | "wiz7"                                                               | wiz7                                                                                                     |
| 135 | zventanas       | "10"                                                                 | 10                                                                                                       |
| 136 | zvuelta         | 5                                                                    | 5                                                                                                        |
| 140 | zoutputdef1     | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"[*]"}                                                                    |
| 141 | zlectura1       | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_NOW_LEVEL_V                                                                           |
| 142 | zraiz1          | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"."}                                                                      |
| 143 | zmove1          | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_NOW_LEVEL_V{":"}SSM_NOW_LEVEL_V{"[FIRST]"}                                                           |
| 144 | ziterator1      | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_NOW_LEVEL_V{":"}SSM_VACANT{"!"}SSM_NOW_LEVEL_V                                                       |
| 146 | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"[*]"}                                                                  |
| 147 | zlectura2       | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_SCALE_LEVEL_V                                                                         |
| 148 | zraiz2          | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"."}                                                                    |
| 149 | zmove2          | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_SCALE_LEVEL_V{":"}SSM_SCALE_LEVEL_V{"[FIRST]"}                                                       |
| 150 | ziterator2      | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_SCALE_LEVEL_V{":"}SSM_VACANT{"!"}SSM_SCALE_LEVEL_V                                                   |
| 152 | zoutputdef3     | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[*]"}                                                                |
| 153 | zlectura3       | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_R_JOB_POST_COMP                                                                       |
| 154 | zraiz3a         | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"."}                                                                  |
| 155 | zraiz3          | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."  | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}                      |
| 156 | zmove3          | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_R_JOB_POST_COMP{":"}SSM_R_JOB_POST_COMP{"[FIRST]"}                                                   |
| 157 | ziterator3      | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP                                               |
| 161 | zmetodocarga    | zsubsesion + "!SSM_VACANT.CARGA"                                     | SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                          |
| 162 | zmetodopersist  | zsubsesion + "!SSM_VACANT.GRABAR"                                    | SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                         |
| 166 | zSCOIDEXTDKN    | zraiz1 + "SCO_ID_EXTD_KN"                                            | SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"."}{"SCO_ID_EXTD_KN"}                                                    |
| 167 | zSCONMEXTDKN    | zraiz1 + "SCO_NM_EXTD_KN"                                            | SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"."}{"SCO_NM_EXTD_KN"}                                                    |
| 169 | zSCOIDLEVEL     | zraiz2 + "SCO_ID_LEVEL"                                              | SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"."}{"SCO_ID_LEVEL"}                                                    |
| 170 | zSCONMLEVEL     | zraiz2 + "SCO_NM_LEVEL"                                              | SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"."}{"SCO_NM_LEVEL"}                                                    |
| 172 | zCONOCIMIENTO   | zraiz3 + "CONOCIMIENTO"                                              | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"CONOCIMIENTO"}      |
| 173 | zIDCONOCIMIENTO | zraiz3 + "SCO_ID_COMPETENCY"                                         | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_COMPETENCY"} |
| 174 | zNIVEL          | zraiz3 + "NIVEL"                                                     | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"NIVEL"}             |
| 175 | zPESO           | zraiz3 + "PESO"                                                      | SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"PESO"}              |
| 193 | wpeso           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso")                                         |
| 195 | competencia     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Compet")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Compet")                                       |
| 213 | zFilterKnEss    | "If SCO_CHK_NO_VIS_MSS = 0 then return(1)"                           | If SCO_CHK_NO_VIS_MSS = 0 then return(1)                                                                 |
| 228 | zcount3         | 0                                                                    | 0                                                                                                        |
| 229 | zcounti3        | 0                                                                    | 0                                                                                                        |
| 238 | zcountv3        | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                                                                 |
| 240 | zcount2         | 0                                                                    | 0                                                                                                        |
| 241 | zcounti2        | 0                                                                    | 0                                                                                                        |
| 250 | zcountv2        | String.valueOf(zcounti2)                                             | String.valueOf(zcounti2)                                                                                 |
| 335 | zposicions      | "0"                                                                  | 0                                                                                                        |
| 336 | zcontrol        | 0                                                                    | 0                                                                                                        |
| 337 | zposicion       | 0                                                                    | 0                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 183 | m4:startpage | m4task=SSM_VACANT                                                                                                         |
| 185 | m4:beginjob  |                                                                                                                           |
| 186 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                                                         |
| 189 | m4:exec      | m4method=SSM_VACANT{"!SSM_VACANT.GRABAR"}                                                                                 |
| 189 | m4:param     | name=TIPO_GRABAR; value=ztipopersist                                                                                      |
| 207 | m4:exec      | m4method=SSM_VACANT{"!SSM_VACANT.CARGA"}                                                                                  |
| 207 | m4:param     | name=TIPO_CARGA; value=wiz7                                                                                               |
| 210 | m4:outputdef | m4alias=SSM_SCALE_LEVEL_V                                                                                                 |
| 210 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"[*]"}                                                               |
| 211 | m4:outputdef | m4alias=SSM_R_JOB_POST_COMP                                                                                               |
| 211 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[*]"}                                                             |
| 215 | m4:filter    | m4name=SSM_VACANT!SSM_NOW_LEVEL_V.Filter1; m4filter=If SCO_CHK_NO_VIS_MSS = 0 then return(1)                              |
| 217 | m4:outputdef | m4alias=SSM_NOW_LEVEL_V                                                                                                   |
| 217 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"[*]"}                                                                 |
| 218 | m4:endjob    |                                                                                                                           |
| 220 | m4:move      |                                                                                                                           |
| 220 | m4:param     | name=SSM_VACANT; value=SSM_NOW_LEVEL_V{":"}SSM_NOW_LEVEL_V{"[FIRST]"}                                                     |
| 221 | m4:move      |                                                                                                                           |
| 221 | m4:param     | name=SSM_VACANT; value=SSM_SCALE_LEVEL_V{":"}SSM_SCALE_LEVEL_V{"[FIRST]"}                                                 |
| 222 | m4:move      |                                                                                                                           |
| 222 | m4:param     | name=SSM_VACANT; value=SSM_R_JOB_POST_COMP{":"}SSM_R_JOB_POST_COMP{"[FIRST]"}                                             |
| 281 | m4:iterator  | m4rows=*; m4node=SSM_NOW_LEVEL_V{":"}SSM_VACANT{"!"}SSM_NOW_LEVEL_V                                                       |
| 282 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"."}{"SCO_ID_EXTD_KN"}                                                 |
| 283 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_NOW_LEVEL_V{"."}{"SCO_NM_EXTD_KN"}                                                 |
| 299 | m4:iterator  | m4rows=*; m4node=SSM_SCALE_LEVEL_V{":"}SSM_VACANT{"!"}SSM_SCALE_LEVEL_V                                                   |
| 300 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"."}{"SCO_ID_LEVEL"}                                                 |
| 301 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_SCALE_LEVEL_V{"."}{"SCO_NM_LEVEL"}                                                 |
| 340 | m4:loop      | from=0; to=new_Integer(new_Integer(zcounti3).intValue()-1).toString()                                                     |
| 347 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"CONOCIMIENTO"}; htmlsafe=true |
| 348 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"NIVEL"}; htmlsafe=true        |
| 349 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"PESO"}; htmlsafe=true         |
| 354 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"CONOCIMIENTO"}; htmlsafe=true |
| 355 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"NIVEL"}; htmlsafe=true        |
| 356 | m4:item      | m4name=SSM_R_JOB_POST_COMP{":"}SSM_VACANT{"!"}SSM_R_JOB_POST_COMP{"[&amp;VAR.m4lix]"}{"."}{"PESO"}; htmlsafe=true         |
| 367 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 201 | setItem          | zsubsesion,znodo2,"","COMPETENCIA",competencia |
| 232 | getCount         | znodo3,zsubsesion,znodo3                       |
| 236 | getCountInClient | znodo3,zsubsesion,znodo3                       |
| 244 | getCount         | znodo2,zsubsesion,znodo2                       |
| 248 | getCountInClient | znodo2,zsubsesion,znodo2                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos  |
| --- | ------------ | ----------- |
| 21  | navegar      | _valor,_url |
| 26  | cargarEscala |             |
| 39  | comprobar    | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------- |
| 30  | if ((null==val_extdkn) &#124;&#124; (''==val_extdkn)) return;                                                             |
| 47  | v1 = new m4objvalidacion('_num',1,3,'','',false);                                                                         |
| 49  | if ((null==val_extdkn) &#124;&#124; ('0'==val_extdkn)){                                                                   |
| 53  | if ((null==val_idlevel) &#124;&#124; (''==val_idlevel)){                                                                  |
| 57  | if (peso.value!="" )                                                                                                      |
| 59  | if (v1.resultado == false){                                                                                               |
| 63  | if (parseInt(peso.value)&gt;100){                                                                                         |
| 68  | if (1==falta_valor) alert(mensaje);                                                                                       |
| 69  | if (0==falta_valor)                                                                                                       |
| 89  | if ((ncomp==null)&#124;&#124;(ncomp.equals(""))) ncomp=" ";                                                               |
| 98  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                       |
| 101 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                   |
| 194 | if ((wpeso==null)&#124;&#124;(wpeso.equals(""))) wpeso="";                                                                |
| 196 | if ((competencia==null)&#124;&#124;(competencia.equals(""))) competencia="0";                                             |
| 296 | &lt;% if (zcount2==0) {%&gt;                                                                                              |
| 323 | if (zcount3 &gt; 0) {                                                                                                     |
| 345 | if (zcontrol==0){%&gt;                                                                                                    |
| 352 | &lt;%}else{%&gt;                                                                                                          |
| 44  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n";                   |
| 140 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                              |
| 141 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                        |
| 142 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                     |
| 143 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                   |
| 144 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                        |
| 146 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                              |
| 147 | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                        |
| 148 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                     |
| 149 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                   |
| 150 | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                        |
| 152 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                              |
| 153 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                        |
| 154 | expresión de cálculo/transformación: String zraiz3a = zsubsesion + "!" + znodo3 + ".";                                    |
| 155 | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 156 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                   |
| 157 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                        |
| 161 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_VACANT.CARGA";                              |
| 162 | expresión de cálculo/transformación: String zmetodopersist = zsubsesion + "!SSM_VACANT.GRABAR";                           |
| 166 | expresión de cálculo/transformación: String zSCOIDEXTDKN = zraiz1 + "SCO_ID_EXTD_KN";                                     |
| 167 | expresión de cálculo/transformación: String zSCONMEXTDKN = zraiz1 + "SCO_NM_EXTD_KN";                                     |
| 169 | expresión de cálculo/transformación: String zSCOIDLEVEL = zraiz2 + "SCO_ID_LEVEL";                                        |
| 170 | expresión de cálculo/transformación: String zSCONMLEVEL = zraiz2 + "SCO_NM_LEVEL";                                        |
| 172 | expresión de cálculo/transformación: String zCONOCIMIENTO = zraiz3 + "CONOCIMIENTO";                                      |
| 173 | expresión de cálculo/transformación: String zIDCONOCIMIENTO = zraiz3 + "SCO_ID_COMPETENCY";                               |
| 174 | expresión de cálculo/transformación: String zNIVEL = zraiz3 + "NIVEL";                                                    |
| 175 | expresión de cálculo/transformación: String zPESO = zraiz3 + "PESO";                                                      |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 13  | ../../mss_generico/espanol/menu_mss.jsp               |
| 116 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 118 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 187 | ../../mss_g3/espanol/persist.jsp                      |
| 364 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 10  | /css/estilo_mss.css                                                                   |
| 12  | /libreria/funciones_sse.js                                                            |
| 14  | /libreria/clase_val_entradas.js                                                       |
| 262 | /iconos/noname_solicitar_vacantes_210_100.gif                                         |
| 269 | javascript:comprobar()                                                                |
| 316 | javascript:navegar(6,                                                                 |
| 316 | /iconos/icono_anterior_36_36.gif                                                      |
| 317 | javascript:comprobar(7,                                                               |
| 317 | /iconos/icono_aceptar_mss_36_36.gif                                                   |
| 318 | javascript:navegar(1,                                                                 |
| 318 | /iconos/icono_guardar_36_36.gif                                                       |
| 350 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name= |
| 350 | /iconos/icono_borrar_16_16.gif                                                        |
| 357 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name= |
| 357 | /iconos/icono_borrar_16_16.gif                                                        |
| 13  | ../../mss_generico/espanol/menu_mss.jsp                                               |
| 33  | mss_g3/mss_g3_p1_wiz7.jsp                                                             |
| 116 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         |
| 118 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    |
| 187 | ../../mss_g3/espanol/persist.jsp                                                      |
| 316 | mss_g3/mss_g3_p1_wiz6.jsp                                                             |
| 317 | mss_g3/mss_g3_p1_wiz7.jsp                                                             |
| 318 | mss_g3/mss_g3_persist_wiz1.jsp                                                        |
| 364 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                            | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 13  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 116 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 118 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 187 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 364 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 12  | /libreria/funciones_sse.js                                                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 14  | /libreria/clase_val_entradas.js                                                       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 269 | javascript:comprobar()                                                                | dinámica   | P06                                                                                              |
| BASE   | 316 | javascript:navegar(6,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 317 | javascript:comprobar(7,                                                               | dinámica   | P06                                                                                              |
| BASE   | 318 | javascript:navegar(1,                                                                 | dinámica   | P06                                                                                              |
| BASE   | 350 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 357 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_eliminar_wiz7.jsp?id_enl=&lt;m4:item m4name= | ausente    | P06                                                                                              |
| BASE   | 13  | ../../mss_generico/espanol/menu_mss.jsp                                               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 33  | mss_g3/mss_g3_p1_wiz7.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 116 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                                         | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 118 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 187 | ../../mss_g3/espanol/persist.jsp                                                      | física     | [mss_g3/persist.jsp](mss_g3--persist.md)                                                         |
| BASE   | 316 | mss_g3/mss_g3_p1_wiz6.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 317 | mss_g3/mss_g3_p1_wiz7.jsp                                                             | ausente    | P06                                                                                              |
| BASE   | 318 | mss_g3/mss_g3_persist_wiz1.jsp                                                        | ausente    | P06                                                                                              |
| BASE   | 364 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                 | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz7.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
