# Préstamos

Identificador: `sse_g2/sse_g2_p5_p.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p5_p.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_p.jsp) | `4b1c9174a1f780b92f462338e46fa4135028e42e9bac7573174da681b0367ed8` |    200 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p5_p.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p5_p.jsp) | `4b1c9174a1f780b92f462338e46fa4135028e42e9bac7573174da681b0367ed8` |    200 |
| BASE / español    | [sse_g2/espanol/sse_g2_p5_p.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p5_p.jsp)                             | `4b1c9174a1f780b92f462338e46fa4135028e42e9bac7573174da681b0367ed8` |    200 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p5_p.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_p.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 8   | Préstamos                                                                                                                                  |
| 110 | Préstamos                                                                                                                                  |
| 113 | Consulta tu historial de préstamos, para ver la descripción de cada préstamo sitúate sobre el nombre del mismo. Solicita un nuevo préstamo |
| 133 | Tipo Préstamo                                                                                                                              |
| 134 | Interés                                                                                                                                    |
| 135 | Capital                                                                                                                                    |
| 137 | Fec.Solic.1ºPago                                                                                                                           |
| 138 | Importe Cuota                                                                                                                              |
| 154 | ',' ',' ');"&gt;                                                                                                                           |
| 155 | %                                                                                                                                          |
| 166 | ',' ',' ');"&gt;                                                                                                                           |
| 167 | %                                                                                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 112 | img     | src=/iconos/Solicitud_prestamos_51x100.gif; width=100; height=100; alt=Historial de préstamos; title=Historial de préstamos                                                                                                  |
| 116 | a       | class=enlacefuncional; tabindex=1; title=Desde aquí puedes solicitar un nuevo préstamo; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21                                                                       |
| 141 | a       | style=cursor:hand; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&amp;estado=21                                                                                                                                       |
| 142 | img     | alt=Solicita un nuevo préstamo; title=Solicita un nuevo préstamo; src=/iconos/icono_flecha_azul1_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 154 | a       | class=enlacefuncional; title=Detalle del préstamo; href=javascript:detalle ('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                  |
| 166 | a       | class=enlacefuncional; title=Detalle del préstamo; href=javascript:detalle ('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                  |
| 178 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21; method=post; name=oculto; id=oculto                                                                                                                   |
| 179 | input   | type=hidden; id=id_loan; name=id_loan; value=                                                                                                                                                                                |
| 180 | input   | type=hidden; id=ord_loan; name=ord_loan; value=                                                                                                                                                                              |
| 181 | input   | type=hidden; id=nm_loan; name=nm_loan; value=                                                                                                                                                                                |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                           |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                      |
| 27  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                    |
| 39  | zsubsesion        | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                             |
| 40  | zmeta4object      | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                             |
| 41  | znodo             | "M4T_LN_HT_HR_LOANS"                                                           | M4T_LN_HT_HR_LOANS                                                                                                                    |
| 42  | ztipocarga        | "M4T"                                                                          | M4T                                                                                                                                   |
| 43  | zloan             | null                                                                           | null                                                                                                                                  |
| 44  | zordloan          | null                                                                           | null                                                                                                                                  |
| 45  | znmloan           | null                                                                           | null                                                                                                                                  |
| 47  | zventanas         | "10"                                                                           | 10                                                                                                                                    |
| 48  | zvuelta           | 5                                                                              | 5                                                                                                                                     |
| 49  | zdireccion        | "sse_g2/sse_g2_p5_P.jsp"                                                       | sse_g2/sse_g2_p5_P.jsp                                                                                                                |
| 50  | zestado           | "21"                                                                           | 21                                                                                                                                    |
| 52  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                  |
| 54  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                 |
| 55  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                    |
| 60  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 61  | zmove             | znodo + ":" + znodo + "[FIRST]"                                                | M4T_LN_HT_HR_LOANS{":"}M4T_LN_HT_HR_LOANS{"[FIRST]"}                                                                                  |
| 62  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                      |
| 67  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                             |
| 72  | zSCOIDLOAN        | zcomun + "SCO_ID_LOAN"                                                         | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LOAN"}                                       |
| 73  | zSCONMLOAN        | zcomun + "SCO_NM_LOAN"                                                         | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}                                       |
| 74  | zSCOORLOAN        | zcomun + "SCO_OR_LOAN"                                                         | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_LOAN"}                                       |
| 75  | zSCOAMTLOAN       | zcomun + "SCO_AMT_LOAN"                                                        | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}                                      |
| 76  | zSCODTREQPAYMENT  | zcomun + "SCO_DT_REQ_PAYMENT"                                                  | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}                                |
| 77  | zSCOAMTQUOTAS     | zcomun + "SCO_AMT_QUOTAS"                                                      | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}                                    |
| 78  | zSCORATE          | zcomun + "SCO_RATE"                                                            | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}                                          |
| 79  | zNMCURRENCY       | zcomun + "ID_CURRENCY"                                                         | M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                       |
| 99  | zcount            | 0                                                                              | 0                                                                                                                                     |
| 100 | zcounti           | 0                                                                              | 0                                                                                                                                     |
| 106 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                               |
| 124 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                      |
| 125 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                       |
| 126 | zposicions        | "0"                                                                            | 0                                                                                                                                     |
| 127 | zcontrol          | 0                                                                              | 0                                                                                                                                     |
| 128 | zposicion         | 0                                                                              | 0                                                                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                        |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83  | m4:startpage | m4task=SSE_LOANS                                                                                                                                          |
| 83  | m4:beginjob  |                                                                                                                                                           |
| 84  | m4:datadef   | m4o=SSE_LOANS; m4name=SSE_LOANS                                                                                                                           |
| 92  | m4:exec      | m4method=CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                                        |
| 92  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                |
| 93  | m4:outputdef | m4alias=M4T_LN_HT_HR_LOANS                                                                                                                                |
| 93  | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 94  | m4:endjob    |                                                                                                                                                           |
| 95  | m4:move      |                                                                                                                                                           |
| 95  | m4:param     | name=SSE_LOANS; value=M4T_LN_HT_HR_LOANS{":"}M4T_LN_HT_HR_LOANS{"[FIRST]"}                                                                                |
| 148 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                 |
| 154 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_LOAN"}; jsafe=true; htmlsafe=true                         |
| 154 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; jsafe=true; htmlsafe=true                         |
| 154 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; htmlsafe=true                                     |
| 155 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}; htmlsafe=true                                        |
| 156 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}; htmlsafe=true                                    |
| 157 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                     |
| 158 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}; htmlsafe=true                              |
| 159 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}; htmlsafe=true                                  |
| 166 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_LOAN"}; jsafe=true; htmlsafe=true                         |
| 166 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; jsafe=true; htmlsafe=true                         |
| 166 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; htmlsafe=true                                     |
| 167 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}; htmlsafe=true                                        |
| 168 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}; htmlsafe=true                                    |
| 169 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                     |
| 170 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}; htmlsafe=true                              |
| 171 | m4:item      | m4name=M4T_LN_HT_HR_LOANS{":"}SSE_LOANS{"!"}M4T_LN_HT_HR_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}; htmlsafe=true                                  |
| 195 | m4:endpage   |                                                                                                                                                           |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 88  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 103 | getCount         | znodo,zsubsesion,znodo                    |
| 104 | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos          |
| --- | ------- | ------------------- |
| 15  | detalle | loan,ordloan,nmloan |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 29  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 30  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 123 | if (zcount &gt; 0) {                                                                                                                     |
| 152 | if (zcontrol==0){%&gt;                                                                                                                   |
| 164 | &lt;%}else{%&gt;                                                                                                                         |
| 187 | &lt;%} else {%&gt;                                                                                                                       |
| 53  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 55  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 60  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 61  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                     |
| 62  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 67  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 72  | expresión de cálculo/transformación: String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";                                                         |
| 73  | expresión de cálculo/transformación: String zSCONMLOAN = zcomun + "SCO_NM_LOAN";                                                         |
| 74  | expresión de cálculo/transformación: String zSCOORLOAN = zcomun + "SCO_OR_LOAN";                                                         |
| 75  | expresión de cálculo/transformación: String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";                                                       |
| 76  | expresión de cálculo/transformación: String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";                                            |
| 77  | expresión de cálculo/transformación: String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";                                                   |
| 78  | expresión de cálculo/transformación: String zSCORATE = zcomun + "SCO_RATE";                                                              |
| 79  | expresión de cálculo/transformación: String zNMCURRENCY = zcomun + "ID_CURRENCY";                                                        |
| 125 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 36  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 37  | ../../sse_generico/espanol/generico_links.jsp      |
| 184 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 192 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                            |
| 10  | /libreria/funciones_sse.js                                     |
| 12  | /libreria/clase_val_entradas.js                                |
| 112 | /iconos/Solicitud_prestamos_51x100.gif                         |
| 116 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21      |
| 141 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&amp;estado=21 |
| 142 | /iconos/icono_flecha_azul1_ess_11_9.gif                        |
| 154 | javascript:detalle (                                           |
| 166 | javascript:detalle (                                           |
| 178 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21 |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                        |
| 36  | ../../sse_generico/espanol/generico_menusup.jsp                |
| 37  | ../../sse_generico/espanol/generico_links.jsp                  |
| 49  | sse_g2/sse_g2_p5_P.jsp                                         |
| 184 | ../../sse_generico/espanol/generico_ventanas.jsp               |
| 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | -------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 10  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 116 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 141 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 154 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 166 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 178 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 49  | sse_g2/sse_g2_p5_P.jsp                                         | ausente    | P06                                                                                                                                                                                                |
| COLL   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 116 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 141 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 154 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 166 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 178 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 49  | sse_g2/sse_g2_p5_P.jsp                                         | ausente    | P06                                                                                                                                                                                                |
| IBER   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | /libreria/funciones_sse.js                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 12  | /libreria/clase_val_entradas.js                                | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 116 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 141 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&amp;estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 154 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 166 | javascript:detalle (                                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 178 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                        | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_menusup.jsp                | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 37  | ../../sse_generico/espanol/generico_links.jsp                  | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 49  | sse_g2/sse_g2_p5_P.jsp                                         | ausente    | P06                                                                                                                                                                                                |
| BASE   | 184 | ../../sse_generico/espanol/generico_ventanas.jsp               | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 192 | ../../sse_generico/espanol/generico_disclaimer.jsp             | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p5_p.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
