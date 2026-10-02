# Peticiones de movilidad

Identificador: `sse_g3/sse_g3_p2_vis.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p2_vis.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2_vis.jsp) | `d08196bbb786f05c3f04e865de23e397da57ad5be4c3c5358315c19f07404e1b` |    189 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p2_vis.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2_vis.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7   | Peticiones de movilidad                                                                                                                                      |
| 85  | Peticiones de movilidad                                                                                                                                      |
| 88  | Consulta tus peticiones de movilidad. Movilidad interna                                                                                                      |
| 103 | Peticiones aceptadas de movilidad interna ya incluidas o por incluir en un proceso de selección. El Departamento de Selección se pondrá en contacto contigo. |
| 105 | Puesto                                                                                                                                                       |
| 106 | Fecha de solicitud                                                                                                                                           |
| 140 | Peticiones pendientes de movilidad interna.                                                                                                                  |
| 143 | Puesto                                                                                                                                                       |
| 144 | Fecha de solicitud                                                                                                                                           |
| 160 | ');"&gt;                                                                                                                                                     |
| 169 | ');"&gt;                                                                                                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 87  | img     | alt=Movilidad interna; title=Movilidad interna; src=/iconos/noname_movilidad_interna_derecha_100_100.gif; width=100; height=100                                                     |
| 91  | a       | class=enlacefuncional; title=Movilidad interna; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                          |
| 108 | a       | title=Movilidad interna; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                             |
| 109 | img     | alt=Movilidad interna; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)   |
| 146 | a       | title=Movilidad interna; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                             |
| 147 | img     | alt=Movilidad interna; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)   |
| 161 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                              |
| 161 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 170 | a       | href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                          |
| 170 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | estado          | getParameter(request,"estado")   |
| 13  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 12  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 13  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 29  | zsubsesion        | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 30  | zmeta4object      | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 31  | znodo             | "SSE_INT_MOVILITY"                                                             | SSE_INT_MOVILITY                                                                                                                           |
| 32  | znodo2            | "M4T_INT_MOVILITY"                                                             | M4T_INT_MOVILITY                                                                                                                           |
| 34  | ztipocarga        | "ALL"                                                                          | ALL                                                                                                                                        |
| 35  | zventanas         | "10"                                                                           | 10                                                                                                                                         |
| 36  | zvuelta           | 5                                                                              | 5                                                                                                                                          |
| 37  | zdireccion        | "sse_g3/sse_g3_p2_vis.jsp"                                                     | sse_g3/sse_g3_p2_vis.jsp                                                                                                                   |
| 38  | zestado           | "31"                                                                           | 31                                                                                                                                         |
| 40  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 42  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 43  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 45  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 46  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 47  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 48  | zSTDNJOBCODE      | zcomun+"STD_N_JOB_CODE"                                                        | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE                                          |
| 49  | zSSESOLICDATE     | zcomun+"SSE_SOLIC_DATE"                                                        | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE                                          |
| 50  | zORDINAL          | zcomun+"ORDINAL"                                                               | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}ORDINAL                                                 |
| 51  | zNACCION          | zcomun+"N_ACCION"                                                              | SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}N_ACCION                                                |
| 53  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[*]"}                                                                                               |
| 54  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_INT_MOVILITY{":"}M4T_INT_MOVILITY{"[FIRST]"}                                                                                           |
| 55  | ziterator2        | znodo2 + ":" + zsubsesion + "!" + znodo2                                       | M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY                                                                                 |
| 56  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 57  | zSTDNJOBCODE2     | zcomun2+"STD_N_JOB_CODE"                                                       | M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE                                          |
| 58  | zSSESOLICDATE2    | zcomun2+"SSE_SOLIC_DATE"                                                       | M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE                                          |
| 60  | zmetodocarga      | zsubsesion + "!SSE_PRINCIPAL.CARGA"                                            | SSE_INT_MOVILITY{"!SSE_PRINCIPAL.CARGA"}                                                                                                   |
| 71  | zcount            | 0                                                                              | 0                                                                                                                                          |
| 72  | zcounti           | 0                                                                              | 0                                                                                                                                          |
| 73  | zcount2           | 0                                                                              | 0                                                                                                                                          |
| 74  | zcounti2          | 0                                                                              | 0                                                                                                                                          |
| 82  | zcountv2          | String.valueOf(zcounti2)                                                       | String.valueOf(zcounti2)                                                                                                                   |
| 98  | zposicions2       | "0"                                                                            | 0                                                                                                                                          |
| 99  | zcontrol2         | 0                                                                              | 0                                                                                                                                          |
| 100 | zposicion2        | 0                                                                              | 0                                                                                                                                          |
| 132 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 133 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 134 | zposicions        | "0"                                                                            | 0                                                                                                                                          |
| 135 | zcontrol          | 0                                                                              | 0                                                                                                                                          |
| 136 | zposicion         | 0                                                                              | 0                                                                                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 62  | m4:startpage | m4task=SSE_INT_MOVILITY                                                                                                                                        |
| 62  | m4:beginjob  |                                                                                                                                                                |
| 63  | m4:datadef   | m4o=SSE_INT_MOVILITY; m4name=SSE_INT_MOVILITY                                                                                                                  |
| 64  | m4:exec      | m4method=SSE_INT_MOVILITY{"!SSE_PRINCIPAL.CARGA"}                                                                                                              |
| 64  | m4:param     | name=TIPO_CARGA; value=ALL                                                                                                                                     |
| 65  | m4:outputdef | m4alias=SSE_INT_MOVILITY                                                                                                                                       |
| 65  | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 66  | m4:outputdef | m4alias=M4T_INT_MOVILITY                                                                                                                                       |
| 66  | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[*]"}                                                                                               |
| 67  | m4:endjob    |                                                                                                                                                                |
| 68  | m4:move      |                                                                                                                                                                |
| 68  | m4:param     | name=SSE_INT_MOVILITY; value=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                               |
| 69  | m4:move      |                                                                                                                                                                |
| 69  | m4:param     | name=SSE_INT_MOVILITY; value=M4T_INT_MOVILITY{":"}M4T_INT_MOVILITY{"[FIRST]"}                                                                                  |
| 113 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                          |
| 120 | m4:item      | m4name=M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE; htmlsafe=true                                        |
| 121 | m4:item      | m4name=M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE; htmlsafe=true                                        |
| 125 | m4:item      | m4name=M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE; htmlsafe=true                                        |
| 126 | m4:item      | m4name=M4T_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}M4T_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE; htmlsafe=true                                        |
| 151 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 157 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}N_ACCION; htmlsafe=true                                              |
| 158 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE; htmlsafe=true                                        |
| 159 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE; htmlsafe=true                                        |
| 166 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}N_ACCION; htmlsafe=true                                              |
| 167 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}STD_N_JOB_CODE; htmlsafe=true                                        |
| 168 | m4:item      | m4name=SSE_INT_MOVILITY{":"}SSE_INT_MOVILITY{"!"}SSE_INT_MOVILITY{"[&amp;VAR.m4lix]"}{"."}SSE_SOLIC_DATE; htmlsafe=true                                        |
| 185 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 77  | getCount         | znodo,zsubsesion,znodo   |
| 78  | getCountInClient | znodo,zsubsesion,znodo   |
| 79  | getCount         | znodo2,zsubsesion,znodo2 |
| 80  | getCountInClient | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 22  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 15  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 97  | if (zcount2 &gt; 0) {                                                                                                                    |
| 118 | &lt;%if (zcontrol2==0){%&gt;                                                                                                             |
| 123 | &lt;%}else{%&gt;                                                                                                                         |
| 131 | &lt;%}if (zcount&gt;0){                                                                                                                  |
| 155 | if (zcontrol==0){%&gt;                                                                                                                   |
| 164 | &lt;%}else{%&gt;                                                                                                                         |
| 177 | &lt;%}if ((zcount == 0)&amp;&amp; (zcount2 == 0)){%&gt;                                                                                  |
| 41  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 43  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 45  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 46  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 47  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 53  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 54  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                  |
| 55  | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                       |
| 56  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 60  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";                                          |
| 133 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 19  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 20  | ../../sse_generico/espanol/generico_links.jsp      |
| 176 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 183 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 87  | /iconos/noname_movilidad_interna_derecha_100_100.gif      |
| 91  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 |
| 108 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 |
| 109 | /iconos/icono_flecha_azul2_ess_11_9.gif                   |
| 146 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 |
| 147 | /iconos/icono_flecha_azul2_ess_11_9.gif                   |
| 161 | javascript:pendientes(                                    |
| 161 | /iconos/icono_eliminar_ess_11_12.gif                      |
| 170 | javascript:pendientes(                                    |
| 170 | /iconos/icono_eliminar_ess_11_12.gif                      |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 19  | ../../sse_generico/espanol/generico_menusup.jsp           |
| 20  | ../../sse_generico/espanol/generico_links.jsp             |
| 25  | sse_generico/generico_actualizar.jsp                      |
| 37  | sse_g3/sse_g3_p2_vis.jsp                                  |
| 176 | ../../sse_generico/espanol/generico_ventanas.jsp          |
| 183 | ../../sse_generico/espanol/generico_disclaimer.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 19  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 176 | ../../sse_generico/espanol/generico_ventanas.jsp          | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 183 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 91  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 108 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 146 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 161 | javascript:pendientes(                                    | dinámica   | P06                                                                                                       |
| BASE   | 170 | javascript:pendientes(                                    | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 19  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 25  | sse_generico/generico_actualizar.jsp                      | ausente    | P06                                                                                                       |
| BASE   | 37  | sse_g3/sse_g3_p2_vis.jsp                                  | ausente    | P06                                                                                                       |
| BASE   | 176 | ../../sse_generico/espanol/generico_ventanas.jsp          | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 183 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p2_vis.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
