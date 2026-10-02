# mss_g2_p10

Identificador: `mss_g2/mss_g2_p10.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                        | Ámbito | Diccionario                                                                         |
| ----------------------- | -------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| bft_mss.BenefitsSal     | Datos salariales                             | BASE   | [translations/mss_bft_es.properties:L9](../../referencias/literales/mss_bft_es.md)  |
| bft_mss.DescBenefitsSal | Consulta las retribuciones de tus empleados. | BASE   | [translations/mss_bft_es.properties:L21](../../referencias/literales/mss_bft_es.md) |
| bft_mss.DescNoDataFound | No hay ningún dato disponible.               | BASE   | [translations/mss_bft_es.properties:L22](../../referencias/literales/mss_bft_es.md) |
| bft_mss.Real            | Real                                         | BASE   | [translations/mss_bft_es.properties:L10](../../referencias/literales/mss_bft_es.md) |
| bft_mss.Teorico         | Teórico                                      | BASE   | [translations/mss_bft_es.properties:L11](../../referencias/literales/mss_bft_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p10.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p10.jsp) | `c2b88e7de2fbb086a4c013f2bbcc46e986fc6083cd94040b926450f683e24c09` |    156 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p10.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p10.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 121 | [valor dinámico]: [valor dinámico]: |
| 127 | [valor dinámico]: [valor dinámico]: |
| 133 | ( %)                                |
| 135 | -                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                        |
| --- | ------- | -------------------------------------------------------------------------------- |
| 86  | img     | alt=Datos salariales; src=/iconos/noname_banco_79_100.gif; width=100; height=100 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 15  | estado          | getParameter(request,"estado")   |
| 16  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                            |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                     |
| 16  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                   |
| 25  | zsubsesion        | "SSM_H_SAL_DATA"                                                               | SSM_H_SAL_DATA                                                                                                                         |
| 26  | zmeta4object      | "SSM_H_SAL_DATA"                                                               | SSM_H_SAL_DATA                                                                                                                         |
| 27  | zmetodocarga      | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                            | SSM_H_SAL_DATA{"!SSM_PRINCIPAL.CARGA"}                                                                                                 |
| 28  | znodo             | "SSM_H_SAL_DATA"                                                               | SSM_H_SAL_DATA                                                                                                                         |
| 30  | zventanas         | "20"                                                                           | 20                                                                                                                                     |
| 31  | zvuelta           | 5                                                                              | 5                                                                                                                                      |
| 32  | zdireccion        | "mss_g2/mss_g2_p10.jsp"                                                        | mss_g2/mss_g2_p10.jsp                                                                                                                  |
| 33  | zestado           | "21"                                                                           | 21                                                                                                                                     |
| 35  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                   |
| 37  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                  |
| 38  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                     |
| 39  | ztipocarga        | "M4T"                                                                          | M4T                                                                                                                                    |
| 41  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 42  | zmove             | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 43  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}                                                          |
| 46  | zSCOGBNAME        | zcomun + "SCO_GB_NAME"                                                         | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                           |
| 47  | zSCOFIXSALARY     | zcomun + "SCO_FIX_SALARY"                                                      | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY"}                                        |
| 48  | zSCOVARSALARY     | zcomun + "SCO_VAR_SALARY"                                                      | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY"}                                        |
| 49  | zSCOVARSALARYPER  | zcomun + "SCO_VAR_SALARY_PER"                                                  | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY_PER"}                                    |
| 50  | zSCOBNFTLEGENT    | zcomun + "SCO_BNFT_LEG_ENT"                                                    | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BNFT_LEG_ENT"}                                      |
| 51  | zSALTOTAL         | zcomun + "SCO_SAL_TOTAL"                                                       | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_SAL_TOTAL"}                                         |
| 52  | zMONEDA           | zcomun + "ID_CURRENCY"                                                         | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                           |
| 53  | zFULL             | zcomun + "SMCO_FULL_TIME"                                                      | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_FULL_TIME"}                                        |
| 54  | zISFULL           | zcomun + "SMCO_IS_FULLTIME"                                                    | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_IS_FULLTIME"}                                      |
| 55  | zHOURS            | zcomun + "SMCO_WORKING_HOURS"                                                  | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_WORKING_HOURS"}                                    |
| 56  | zSCOFIXSALARYREAL | zcomun + "SCO_FIX_SALARY_REAL"                                                 | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY_REAL"}                                   |
| 57  | zSCOVARSALARYREAL | zcomun + "SCO_VAR_SALARY_REAL"                                                 | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY_REAL"}                                   |
| 58  | zSALTOTALREAL     | zcomun + "SCO_SAL_TOTAL_REAL"                                                  | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_SAL_TOTAL_REAL"}                                    |
| 59  | zPERCENTAGE       | zcomun + "SMCO_PERCENT_PERIOD"                                                 | SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PERCENT_PERIOD"}                                   |
| 70  | zcount            | 0                                                                              | 0                                                                                                                                      |
| 71  | zcounti           | 0                                                                              | 0                                                                                                                                      |
| 80  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                |
| 92  | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                       |
| 93  | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                        |
| 94  | zposicions        | "0"                                                                            | 0                                                                                                                                      |
| 95  | zcontrol          | 0                                                                              | 0                                                                                                                                      |
| 96  | zposicion         | 0                                                                              | 0                                                                                                                                      |
| 97  | zPaint            | "0"                                                                            | 0                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 63  | m4:startpage | m4task=SSM_H_SAL_DATA                                                                                                                                      |
| 63  | m4:beginjob  |                                                                                                                                                            |
| 64  | m4:datadef   | m4o=SSM_H_SAL_DATA; m4name=SSM_H_SAL_DATA                                                                                                                  |
| 65  | m4:exec      | m4method=SSM_H_SAL_DATA{"!SSM_PRINCIPAL.CARGA"}                                                                                                            |
| 65  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                                 |
| 66  | m4:outputdef | m4alias=SSM_H_SAL_DATA                                                                                                                                     |
| 66  | m4:param     | name=m4name0; value=SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 67  | m4:endjob    |                                                                                                                                                            |
| 68  | m4:move      |                                                                                                                                                            |
| 68  | m4:param     | name=SSM_H_SAL_DATA; value=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                 |
| 102 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                         |
| 103 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY"}; htmlsafe=true                                      |
| 104 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY"}; htmlsafe=true                                      |
| 105 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_FULL_TIME"}; htmlsafe=true                                      |
| 106 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_WORKING_HOURS"}; htmlsafe=true                                  |
| 107 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BNFT_LEG_ENT"}; htmlsafe=true                                    |
| 108 | m4:label     | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_SAL_TOTAL"}; htmlsafe=true                                       |
| 110 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                  |
| 112 | m4:item      | m4varname=FULL_TIME; m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_IS_FULLTIME"}                              |
| 119 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                         |
| 121 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY"}; htmlsafe=true                                      |
| 121 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 122 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY_REAL"}                                                |
| 122 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 124 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_FIX_SALARY"}; htmlsafe=true                                      |
| 124 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 127 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY"}; htmlsafe=true                                      |
| 127 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 127 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY_REAL"}                                                |
| 127 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 129 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_VAR_SALARY"}; htmlsafe=true                                      |
| 129 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 132 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_FULL_TIME"}                                                     |
| 133 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_WORKING_HOURS"}                                                 |
| 133 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SMCO_PERCENT_PERIOD"}; htmlsafe=true                                 |
| 134 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BNFT_LEG_ENT"}; htmlsafe=true                                    |
| 134 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 135 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_SAL_TOTAL"}                                                      |
| 137 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"SCO_SAL_TOTAL_REAL"}                                                 |
| 139 | m4:item      | m4name=SSM_H_SAL_DATA{":"}SSM_H_SAL_DATA{"!"}SSM_H_SAL_DATA{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}; htmlsafe=true                                         |
| 153 | m4:endpage   |                                                                                                                                                            |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 74  | getCount         | znodo,zsubsesion,znodo |
| 78  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 91  | &lt;% if (zcounti&gt;0) {                                                                                                                |
| 116 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                                            |
| 120 | &lt;% if(FULL_TIME.equals("0")) { %&gt;                                                                                                  |
| 123 | &lt;%}else{%&gt;                                                                                                                         |
| 126 | &lt;% if(FULL_TIME.equals("0")) { %&gt;                                                                                                  |
| 128 | &lt;%}else{%&gt;                                                                                                                         |
| 136 | &lt;% if(FULL_TIME.equals("0")) { %&gt;                                                                                                  |
| 147 | }else{%&gt;                                                                                                                              |
| 27  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                          |
| 36  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 38  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 41  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 42  | expresión de cálculo/transformación: String zmove =znodo + ":" +znodo + "[" + zregistroinicial + "]";                                    |
| 43  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 46  | expresión de cálculo/transformación: String zSCOGBNAME= zcomun + "SCO_GB_NAME";                                                          |
| 47  | expresión de cálculo/transformación: String zSCOFIXSALARY = zcomun + "SCO_FIX_SALARY";                                                   |
| 48  | expresión de cálculo/transformación: String zSCOVARSALARY = zcomun + "SCO_VAR_SALARY";                                                   |
| 49  | expresión de cálculo/transformación: String zSCOVARSALARYPER = zcomun + "SCO_VAR_SALARY_PER";                                            |
| 50  | expresión de cálculo/transformación: String zSCOBNFTLEGENT = zcomun + "SCO_BNFT_LEG_ENT";                                                |
| 51  | expresión de cálculo/transformación: String zSALTOTAL = zcomun + "SCO_SAL_TOTAL";                                                        |
| 52  | expresión de cálculo/transformación: String zMONEDA = zcomun + "ID_CURRENCY";                                                            |
| 53  | expresión de cálculo/transformación: String zFULL = zcomun + "SMCO_FULL_TIME";                                                           |
| 54  | expresión de cálculo/transformación: String zISFULL = zcomun + "SMCO_IS_FULLTIME";                                                       |
| 55  | expresión de cálculo/transformación: String zHOURS = zcomun + "SMCO_WORKING_HOURS";                                                      |
| 56  | expresión de cálculo/transformación: String zSCOFIXSALARYREAL = zcomun + "SCO_FIX_SALARY_REAL";                                          |
| 57  | expresión de cálculo/transformación: String zSCOVARSALARYREAL = zcomun + "SCO_VAR_SALARY_REAL";                                          |
| 58  | expresión de cálculo/transformación: String zSALTOTALREAL = zcomun + "SCO_SAL_TOTAL_REAL";                                               |
| 59  | expresión de cálculo/transformación: String zPERCENTAGE = zcomun + "SMCO_PERCENT_PERIOD";                                                |
| 93  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../mss_generico/espanol/menu_mss.jsp               |
| 8   | /mss_g2/mss_bft_trans.jsp                             |
| 22  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 23  | ../../sse_generico/espanol/generico_links.jsp         |
| 145 | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 11  | /css/estilo_mss.css                                   |
| 12  | /libreria/funciones_sse.js                            |
| 86  | /iconos/noname_banco_79_100.gif                       |
| 7   | ../../mss_generico/espanol/menu_mss.jsp               |
| 8   | /mss_g2/mss_bft_trans.jsp                             |
| 22  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 23  | ../../sse_generico/espanol/generico_links.jsp         |
| 32  | mss_g2/mss_g2_p10.jsp                                 |
| 145 | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | ----------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 7   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 8   | /mss_g2/mss_bft_trans.jsp                             | contextual | [mss_g2/mss_bft_trans.jsp](mss_g2--mss_bft_trans.md)                                                  |
| BASE   | 22  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 145 | ../../sse_generico/espanol/generico_ventanas.jsp      | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |
| BASE   | 12  | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                |
| BASE   | 7   | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 8   | /mss_g2/mss_bft_trans.jsp                             | contextual | [mss_g2/mss_bft_trans.jsp](mss_g2--mss_bft_trans.md)                                                  |
| BASE   | 22  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 32  | mss_g2/mss_g2_p10.jsp                                 | ausente    | P06                                                                                                   |
| BASE   | 145 | ../../sse_generico/espanol/generico_ventanas.jsp      | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 150 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p10.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
