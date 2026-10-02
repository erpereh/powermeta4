# Últimos recibos de salarios

Identificador: `sse_g2/sse_g2_p4.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p4.jsp) | `f7305252eef4fd6cead3f7effaf185ef8c795a177f931f8d10ef1d95832da4ce` |    126 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p4.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p4.jsp) | `f7305252eef4fd6cead3f7effaf185ef8c795a177f931f8d10ef1d95832da4ce` |    126 |
| BASE / español    | [sse_g2/espanol/sse_g2_p4.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p4.jsp)                             | `f7305252eef4fd6cead3f7effaf185ef8c795a177f931f8d10ef1d95832da4ce` |    126 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                 |
| --- | ------------------------------------------------------------------------ |
| 3   | Últimos recibos de salarios                                              |
| 72  | Últimos recibos de salarios                                              |
| 75  | &lt;img src="/iconos/noname_recibos_57_100.gif" width="100" height="100" |
| 76  | Consulta tus últimas pagas                                               |
| 100 | Período de liquidación                                                   |
| 101 | Núm periodo                                                              |
| 102 | Neto abonado                                                             |
| 103 | Retroactividad                                                           |
| 115 | ','1',' ',' ',' '); "&gt;                                                |
| 122 | ','2',' ',' ',' ');"&gt; revisiones                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 75  | img     | src=/iconos/noname_recibos_57_100.gif; width=100; height=100                                                                       |
| 80  | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp; method=post; name=oculto; id=oculto                                       |
| 81  | input   | type=hidden; id=SCO_DT_ACCRUED_P; name=SCO_DT_ACCRUED_P                                                                            |
| 82  | input   | type=hidden; id=SCO_SEL_PAY_P; name=SCO_SEL_PAY_P                                                                                  |
| 83  | input   | type=hidden; id=SCO_ID_PAY_FREQ_AC_P; name=SCO_ID_PAY_FREQ_AC_P                                                                    |
| 84  | input   | type=hidden; id=SCO_OR_HR_PERIOD; name=SCO_OR_HR_PERIOD                                                                            |
| 85  | input   | type=hidden; id=SCO_NM_PAY; name=SCO_NM_PAY                                                                                        |
| 86  | input   | type=hidden; id=NUM_REG; name=NUM_REG; value=1                                                                                     |
| 87  | input   | type=hidden; id=TYPELOAD; name=TYPELOAD; value=0                                                                                   |
| 116 | a       | class=enlacefuncional&lt;%=zparidad%&gt;; title=Ver recibo; href=javascript:recibo('&lt;m4:item m4name=; jsafe=true; htmlsafe=true |
| 123 | a       | class=enlacefuncional; title=Ver recibo; href=javascript:recibo('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 6   | estado          | getParameter(request,"estado")   |
| 7   | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 6   | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                   |
| 7   | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                 |
| 11  | zsubsesion        | "SSE_LAST_PAYS"                                                                | SSE_LAST_PAYS                                                                                                                        |
| 12  | zmeta4object      | "SSE_LAST_PAYS"                                                                | SSE_LAST_PAYS                                                                                                                        |
| 13  | zmetodocarga      | zsubsesion + "!SSE_LAST_PAYS.CARGA"                                            | SSE_LAST_PAYS{"!SSE_LAST_PAYS.CARGA"}                                                                                                |
| 14  | znodo             | "SSE_LAST_PAYS"                                                                | SSE_LAST_PAYS                                                                                                                        |
| 16  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"."}                                                                               |
| 18  | zventanas         | "20"                                                                           | 20                                                                                                                                   |
| 19  | zvuelta           | 5                                                                              | 5                                                                                                                                    |
| 20  | zdireccion        | "sse_g2/sse_g2_p4.jsp"                                                         | sse_g2/sse_g2_p4.jsp                                                                                                                 |
| 21  | zestado           | "21"                                                                           | 21                                                                                                                                   |
| 25  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 27  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 28  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 29  | ztipocarga        | "M4T"                                                                          | M4T                                                                                                                                  |
| 31  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS                                                                                    |
| 32  | zmove             | znodo + ":" + znodo + "[zregistroinicial]"                                     | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"[zregistroinicial]"}                                                                                |
| 33  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 36  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 37  | zPAGA             | zcomun + "SCO_DT_PAYMENT"                                                      | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_PAYMENT"}                                         |
| 38  | zNMFREQ           | zcomun + "SCO_NM_PAY_FREQUENCY"                                                | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY_FREQUENCY"}                                   |
| 39  | zNMPAY            | zcomun + "SCO_NM_PAY"                                                          | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY"}                                             |
| 40  | zNETO             | zcomun + "SCO_NET"                                                             | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NET"}                                                |
| 41  | zMONEDA           | zcomun + "ID_CURRENCY"                                                         | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                            |
| 42  | zPAYFREQ          | zcomun + "SCO_PAY_FREQ_PAYM"                                                   | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_PAY_FREQ_PAYM"}                                      |
| 43  | zORPERIOD         | zcomun + "SCO_OR_HR_PERIOD"                                                    | SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}                                       |
| 48  | zcount            | 0                                                                              | 0                                                                                                                                    |
| 49  | zcounti           | 0                                                                              | 0                                                                                                                                    |
| 55  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 92  | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 93  | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 94  | zposicions        | "0"                                                                            | 0                                                                                                                                    |
| 95  | zcontrol          | 0                                                                              | 0                                                                                                                                    |
| 96  | zposicion         | 0                                                                              | 0                                                                                                                                    |
| 97  | zSSEEXISTENCE     | "0"                                                                            | 0                                                                                                                                    |
| 98  | zparidad          | "2"                                                                            | 2                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | m4:startpage | m4task=SSE_LAST_PAYS                                                                                                                                     |
| 46  | m4:beginjob  |                                                                                                                                                          |
| 46  | m4:datadef   | m4o=SSE_LAST_PAYS; m4name=SSE_LAST_PAYS                                                                                                                  |
| 46  | m4:exec      | m4method=SSE_LAST_PAYS{"!SSE_LAST_PAYS.CARGA"}                                                                                                           |
| 46  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                               |
| 46  | m4:outputdef | m4alias=SSE_LAST_PAYS                                                                                                                                    |
| 46  | m4:param     | name=m4name0; value=SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 46  | m4:endjob    |                                                                                                                                                          |
| 46  | m4:move      |                                                                                                                                                          |
| 46  | m4:param     | name=SSE_LAST_PAYS; value=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"[zregistroinicial]"}                                                                          |
| 104 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 116 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_PAY_FREQ_PAYM"}; jsafe=true; htmlsafe=true                        |
| 116 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY"}; jsafe=true; htmlsafe=true                               |
| 116 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}; jsafe=true; htmlsafe=true                         |
| 116 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_PAYMENT"}; htmlsafe=true                                       |
| 116 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY_FREQUENCY"}; htmlsafe=true                                 |
| 118 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}; htmlsafe=true                                     |
| 120 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NET"}; htmlsafe=true                                              |
| 120 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                          |
| 123 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_PAY_FREQ_PAYM"}; jsafe=true; htmlsafe=true                        |
| 123 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY"}; jsafe=true; htmlsafe=true                               |
| 123 | m4:item      | m4name=SSE_LAST_PAYS{":"}SSE_LAST_PAYS{"!"}SSE_LAST_PAYS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_PERIOD"}; jsafe=true; htmlsafe=true                         |
| 126 | m4:endpage   |                                                                                                                                                          |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 52  | getCount         | znodo,zsubsesion,znodo                         |
| 53  | getCountInClient | znodo,zsubsesion,znodo                         |
| 111 | getItem          | znodo,zmeta4object,znodo,m4lix,"SSE_EXISTENCE" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos                                  |
| --- | ------- | ------------------------------------------- |
| 57  | recibo  | dIdPaga,sRevision,dPayFreq,sNmPay,sOrPeriod |
| 67  | recibo1 | parametros,valores                          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                                                                                                                                                                                                     |
| 9   | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                                                                                                                                                                             |
| 91  | if (zcounti &gt; 0) {                                                                                                                                                                                                                                                                                                                               |
| 113 | if (zcontrol==0){zparidad = "";}else{zparidad = "2";}%&gt;                                                                                                                                                                                                                                                                                          |
| 122 | &lt;td&gt; &lt;%if (zSSEEXISTENCE.equals("1") == true){%&gt;                                                                                                                                                                                                                                                                                        |
| 126 | &lt;/table&gt;&lt;%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%&gt;&lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;Actualmente no tienes ninguna paga calculada&lt;/div&gt;&lt;%}%&gt;&lt;%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %&gt;&lt;/div&gt;&lt;/body&gt;&lt;m4:endpage/&gt;&lt;/html&gt; |
| 13  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_LAST_PAYS.CARGA";                                                                                                                                                                                                                                                     |
| 16  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                                                                                                                                                                                                                                   |
| 26  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                                                                                                                                                                                       |
| 28  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                                                                                                                                                                                          |
| 31  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                                                                                                                                                                                                                     |
| 32  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[zregistroinicial]";                                                                                                                                                                                                                                                     |
| 33  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                                                                                                                                                                            |
| 36  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                                                                             |
| 37  | expresión de cálculo/transformación: String zPAGA = zcomun + "SCO_DT_PAYMENT";                                                                                                                                                                                                                                                                      |
| 38  | expresión de cálculo/transformación: String zNMFREQ = zcomun + "SCO_NM_PAY_FREQUENCY";                                                                                                                                                                                                                                                              |
| 39  | expresión de cálculo/transformación: String zNMPAY = zcomun + "SCO_NM_PAY";                                                                                                                                                                                                                                                                         |
| 40  | expresión de cálculo/transformación: String zNETO = zcomun + "SCO_NET";                                                                                                                                                                                                                                                                             |
| 41  | expresión de cálculo/transformación: String zMONEDA = zcomun + "ID_CURRENCY";                                                                                                                                                                                                                                                                       |
| 42  | expresión de cálculo/transformación: String zPAYFREQ = zcomun + "SCO_PAY_FREQ_PAYM";                                                                                                                                                                                                                                                                |
| 43  | expresión de cálculo/transformación: String zORPERIOD = zcomun + "SCO_OR_HR_PERIOD";                                                                                                                                                                                                                                                                |
| 93  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                                                                                                                                                                                       |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 126 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 126 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 3   | /css/estilo_sse.css                                |
| 3   | /libreria/funciones_sse.js                         |
| 75  | /iconos/noname_recibos_57_100.gif                  |
| 80  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp   |
| 116 | javascript:recibo(                                 |
| 123 | javascript:recibo(                                 |
| 20  | sse_g2/sse_g2_p4.jsp                               |
| 68  | sse_g2/sse_g2_rec.jsp                              |
| 126 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 126 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 3   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 80  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp   | ausente    | P06                                                                                                                                                                            |
| COLL   | 116 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| COLL   | 123 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| COLL   | 20  | sse_g2/sse_g2_p4.jsp                               | ausente    | P06                                                                                                                                                                            |
| COLL   | 68  | sse_g2/sse_g2_rec.jsp                              | ausente    | P06                                                                                                                                                                            |
| COLL   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 3   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 80  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp   | ausente    | P06                                                                                                                                                                            |
| IBER   | 116 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| IBER   | 123 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| IBER   | 20  | sse_g2/sse_g2_p4.jsp                               | ausente    | P06                                                                                                                                                                            |
| IBER   | 68  | sse_g2/sse_g2_rec.jsp                              | ausente    | P06                                                                                                                                                                            |
| IBER   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 3   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 80  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp   | ausente    | P06                                                                                                                                                                            |
| BASE   | 116 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| BASE   | 123 | javascript:recibo(                                 | dinámica   | P06                                                                                                                                                                            |
| BASE   | 20  | sse_g2/sse_g2_p4.jsp                               | ausente    | P06                                                                                                                                                                            |
| BASE   | 68  | sse_g2/sse_g2_rec.jsp                              | ausente    | P06                                                                                                                                                                            |
| BASE   | 126 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 126 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
