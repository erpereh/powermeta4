# Movilidad interna

Identificador: `sse_g3/sse_g3_p2.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2.jsp) | `31fce694b153e0bb6051ed1fc41e010354ada8dd4abeae2b7c6248763c131686` |    205 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                           |
| --- | ---------------------------------------------------------------------------------- |
| 7   | Movilidad interna                                                                  |
| 118 | Movilidad interna                                                                  |
| 121 | Consulta los puestos vacantes disponibles en este momento. Peticiones de movilidad |
| 130 | Filtro                                                                             |
| 132 | Puesto: Todos "&gt;                                                                |
| 179 | ');"&gt;                                                                           |
| 186 | ',' ');"&gt;                                                                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                            |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 113 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31; method=post; name=oculto; id=oculto                                |
| 114 | input   | type=hidden; id=zfiltro; name=zfiltro; value=                                                                                        |
| 115 | input   | type=hidden; id=znombre; name=znombre; value=                                                                                        |
| 120 | img     | alt=Movilidad interna; title=Movilidad interna; src=/iconos/noname_movilidad_interna_derecha_100_100.gif; width=100; height=100      |
| 124 | a       | class=enlacefuncional; title=Peticiones de movilidad; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31 |
| 133 | form    | action=; method=post; name=selectform; id=selectform                                                                                 |
| 135 | select  | id=filtro; name=filtro; class=fuenteformulario; title=Escoge el puesto; onchange=filtrar()                                           |
| 137 | option  | value=Todos                                                                                                                          |
| 139 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                             |
| 158 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=nombreformulario; id=nombreformulario      |
| 159 | input   | type=hidden; id=TAG; name=TAG; value=SSE_INT_MOVILITY                                                                                |
| 160 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                        |
| 161 | input   | type=hidden; id=NOD; name=NOD; value=SSE_INT_MOVILITY                                                                                |
| 162 | input   | type=hidden; id=SCO_OR_RECRUIT_PR; name=SCO_OR_RECRUIT_PR; value=                                                                    |
| 163 | input   | type=hidden; id=SCO_NM_RECRUITMENT; name=SCO_NM_RECRUITMENT; value=                                                                  |
| 179 | a       | title=Detalle del puesto; href=Javascript:navegar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                    |
| 182 | a       | title=Solicitar movilidad; href=javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;);                        |
| 182 | img     | alt=Solicitar movilidad; src=/iconos/icono_seleccionar_11_12.gif; height=11; width=12                                                |
| 186 | a       | title=Detalle del puesto; href=Javascript:navegar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                    |
| 189 | a       | title=Solicitar movilidad; href=javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;);                        |
| 189 | img     | alt=Solicitar movilidad; src=/iconos/icono_seleccionar_11_12.gif; height=11; width=12                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 16  | zfiltro         | getParameter(request,"zfiltro") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                               |
| --- | ----------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                          |
| 14  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                        |
| 15  | zfiltro           | zobjtabla.m4paramvalor("zfiltro")                                              | zobjtabla.m4paramvalor("zfiltro")                                                                                                         |
| 16  | zfiltro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")                                                                       |
| 18  | znombre           | zobjtabla.m4paramvalor("znombre")                                              | zobjtabla.m4paramvalor("znombre")                                                                                                         |
| 50  | zsubsesion        | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                          |
| 51  | zmeta4object      | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                          |
| 52  | znodo2            | "M4T_JOB"                                                                      | M4T_JOB                                                                                                                                   |
| 53  | znodo             | "M4T_RECRUIT_PRO"                                                              | M4T_RECRUIT_PRO                                                                                                                           |
| 55  | ztipocarga        | "VIS"                                                                          | VIS                                                                                                                                       |
| 56  | zventanas         | "30"                                                                           | 30                                                                                                                                        |
| 57  | zvuelta           | 5                                                                              | 5                                                                                                                                         |
| 58  | zdireccion        | "sse_g3/sse_g3_p2.jsp"                                                         | sse_g3/sse_g3_p2.jsp                                                                                                                      |
| 59  | zestado           | "31"                                                                           | 31                                                                                                                                        |
| 61  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_INT_MOVILITY{"!"}M4T_JOB{"[*]"}                                                                                                       |
| 62  | zraiz2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "."                                 | M4T_JOB{":"}SSE_INT_MOVILITY{"!"}M4T_JOB{"."}                                                                                             |
| 63  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_JOB{":"}M4T_JOB{"[FIRST]"}                                                                                                            |
| 64  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_JOB{":"}SSE_INT_MOVILITY{"!"}M4T_JOB{"[&amp;VAR.m4lix]"}{"."}                                                                         |
| 65  | zSTDNJOBCODE2     | zcomun2 + "STD_N_JOB_CODE"                                                     | M4T_JOB{":"}SSE_INT_MOVILITY{"!"}M4T_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                                       |
| 66  | zSTDIDJOBCODE2    | zcomun2 + "STD_ID_JOB_CODE"                                                    | M4T_JOB{":"}SSE_INT_MOVILITY{"!"}M4T_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}                                                      |
| 68  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                      |
| 70  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                     |
| 71  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                        |
| 73  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 74  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | M4T_RECRUIT_PRO{":"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                         |
| 75  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 76  | zSTDNJOBCODE      | zcomun + "STD_N_JOB_CODE"                                                      | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                       |
| 77  | zPOSICION         | zcomun + "POSICION"                                                            | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"POSICION"}                                             |
| 78  | zSTDNWORKUNIT     | zcomun + "STD_N_WORK_UNIT"                                                     | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}                                      |
| 79  | zSSEDTLIMIT       | zcomun + "SSE_DT_LIMIT"                                                        | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SSE_DT_LIMIT"}                                         |
| 80  | zSCOORRECRUITPR   | zcomun + "SCO_OR_RECRUIT_PR"                                                   | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_RECRUIT_PR"}                                    |
| 81  | zSCONMRECRUITMENT | zcomun+"SCO_NM_RECRUITMENT"                                                    | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}SCO_NM_RECRUITMENT                                       |
| 83  | zmetodocarga      | zsubsesion + "!SSE_PRINCIPAL.CARGA"                                            | SSE_INT_MOVILITY{"!SSE_PRINCIPAL.CARGA"}                                                                                                  |
| 99  | zcount            | 0                                                                              | 0                                                                                                                                         |
| 100 | zcounti           | 0                                                                              | 0                                                                                                                                         |
| 101 | zcount2           | 0                                                                              | 0                                                                                                                                         |
| 102 | zcounti2          | 0                                                                              | 0                                                                                                                                         |
| 110 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                   |
| 111 | zcountv2          | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                  |
| 152 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                          |
| 153 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                           |
| 154 | zposicions        | "0"                                                                            | 0                                                                                                                                         |
| 155 | zcontrol          | 0                                                                              | 0                                                                                                                                         |
| 156 | zposicion         | 0                                                                              | 0                                                                                                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                            |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 85  | m4:startpage | m4task=SSE_INT_MOVILITY                                                                                                                                       |
| 85  | m4:beginjob  |                                                                                                                                                               |
| 86  | m4:datadef   | m4o=SSE_INT_MOVILITY; m4name=SSE_INT_MOVILITY                                                                                                                 |
| 92  | m4:exec      | m4method=SSE_INT_MOVILITY{"!SSE_PRINCIPAL.CARGA"}                                                                                                             |
| 92  | m4:param     | name=TIPO_CARGA; value=VIS                                                                                                                                    |
| 93  | m4:outputdef | m4alias=M4T_RECRUIT_PRO                                                                                                                                       |
| 93  | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 94  | m4:outputdef | m4alias=M4T_JOB                                                                                                                                               |
| 94  | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}M4T_JOB{"[*]"}                                                                                                       |
| 95  | m4:endjob    |                                                                                                                                                               |
| 96  | m4:move      |                                                                                                                                                               |
| 96  | m4:param     | name=SSE_INT_MOVILITY; value=M4T_RECRUIT_PRO{":"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 97  | m4:move      |                                                                                                                                                               |
| 97  | m4:param     | name=SSE_INT_MOVILITY; value=M4T_JOB{":"}M4T_JOB{"[FIRST]"}                                                                                                   |
| 138 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                         |
| 139 | m4:item      | m4name=M4T_JOB{":"}SSE_INT_MOVILITY{"!"}M4T_JOB{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                                     |
| 167 | m4:label     | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                     |
| 167 | m4:label     | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                    |
| 167 | m4:label     | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SSE_DT_LIMIT"}; htmlsafe=true                                       |
| 169 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                     |
| 174 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_RECRUIT_PR"}; jsafe=true                                     |
| 175 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}SCO_NM_RECRUITMENT; jsafe=true                                        |
| 179 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                     |
| 180 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                    |
| 181 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SSE_DT_LIMIT"}; htmlsafe=true                                       |
| 186 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; jsafe=true; htmlsafe=true                         |
| 186 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                     |
| 187 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                    |
| 188 | m4:item      | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"[&amp;VAR.m4lix]"}{"."}{"SSE_DT_LIMIT"}; htmlsafe=true                                       |
| 201 | m4:endpage   |                                                                                                                                                               |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 89  | setItem          | zsubsesion,znodo,"","ID_FILTRO_JOB",zfiltro |
| 105 | getCount         | znodo,zsubsesion,znodo                      |
| 106 | getCountInClient | znodo,zsubsesion,znodo                      |
| 107 | getCount         | znodo2,zsubsesion,znodo2                    |
| 108 | getCountInClient | znodo2,zsubsesion,znodo2                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 25  | filtrar    |            |
| 32  | actualizar | ord,nombre |
| 39  | navegar    | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 20  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 21  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){zfiltro = "Todos";}                                                                       |
| 22  | if ((znombre==null)&#124;&#124; (""==znombre)){znombre = "Todos";}                                                                       |
| 151 | if (zcount &gt; 0) {                                                                                                                     |
| 177 | &lt;% if (zcontrol==0){%&gt;                                                                                                             |
| 184 | &lt;%}else{%&gt;                                                                                                                         |
| 195 | &lt;%}else{%&gt;                                                                                                                         |
| 61  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 62  | expresión de cálculo/transformación: String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";                                     |
| 63  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 64  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 65  | expresión de cálculo/transformación: String zSTDNJOBCODE2 = zcomun2 + "STD_N_JOB_CODE";                                                  |
| 66  | expresión de cálculo/transformación: String zSTDIDJOBCODE2 = zcomun2 + "STD_ID_JOB_CODE";                                                |
| 69  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 71  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 73  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 74  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 75  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 76  | expresión de cálculo/transformación: String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE";                                                    |
| 77  | expresión de cálculo/transformación: String zPOSICION = zcomun + "POSICION";                                                             |
| 78  | expresión de cálculo/transformación: String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";                                                  |
| 79  | expresión de cálculo/transformación: String zSSEDTLIMIT = zcomun + "SSE_DT_LIMIT";                                                       |
| 80  | expresión de cálculo/transformación: String zSCOORRECRUITPR =zcomun + "SCO_OR_RECRUIT_PR";                                               |
| 83  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";                                          |
| 153 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 47  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 48  | ../../sse_generico/espanol/generico_links.jsp      |
| 194 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 199 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                             |
| --- | ----------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                           |
| 9   | /libreria/funciones_sse.js                                                    |
| 113 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                     |
| 120 | /iconos/noname_movilidad_interna_derecha_100_100.gif                          |
| 124 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31                 |
| 158 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp               |
| 179 | Javascript:navegar(                                                           |
| 182 | javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;); |
| 182 | /iconos/icono_seleccionar_11_12.gif                                           |
| 186 | Javascript:navegar(                                                           |
| 189 | javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;); |
| 189 | /iconos/icono_seleccionar_11_12.gif                                           |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                       |
| 42  | sse_g3/sse_g3_p2_mod.jsp                                                      |
| 47  | ../../sse_generico/espanol/generico_menusup.jsp                               |
| 48  | ../../sse_generico/espanol/generico_links.jsp                                 |
| 58  | sse_g3/sse_g3_p2.jsp                                                          |
| 194 | ../../sse_generico/espanol/generico_ventanas.jsp                              |
| 199 | ../../sse_generico/espanol/generico_disclaimer.jsp                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                    | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ----------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                       | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 47  | ../../sse_generico/espanol/generico_menusup.jsp                               | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 194 | ../../sse_generico/espanol/generico_ventanas.jsp                              | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 199 | ../../sse_generico/espanol/generico_disclaimer.jsp                            | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 113 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                     | ausente    | P06                                                                                                       |
| BASE   | 124 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31                 | ausente    | P06                                                                                                       |
| BASE   | 158 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp               | ausente    | P06                                                                                                       |
| BASE   | 182 | javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;); | dinámica   | P06                                                                                                       |
| BASE   | 189 | javascript:actualizar(mivar1&lt;%=zposicion%&gt;,mivar2&lt;%=zposicion%&gt;); | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                                       | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 42  | sse_g3/sse_g3_p2_mod.jsp                                                      | ausente    | P06                                                                                                       |
| BASE   | 47  | ../../sse_generico/espanol/generico_menusup.jsp                               | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 48  | ../../sse_generico/espanol/generico_links.jsp                                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 58  | sse_g3/sse_g3_p2.jsp                                                          | ausente    | P06                                                                                                       |
| BASE   | 194 | ../../sse_generico/espanol/generico_ventanas.jsp                              | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 199 | ../../sse_generico/espanol/generico_disclaimer.jsp                            | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
