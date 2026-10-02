# Vacaciones

Identificador: `sse_g4/sse_g4_p2_2.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_p2_2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p2_2.jsp) | `aa4c9b44eb640b6f4005fa336e43ee79ce951c1c8b74aa3a757b3cfaf658fa37` |    346 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_p2_2.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_p2_2.jsp)   | `aa4c9b44eb640b6f4005fa336e43ee79ce951c1c8b74aa3a757b3cfaf658fa37` |    346 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_p2_2.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_p2_2.jsp) | `aa4c9b44eb640b6f4005fa336e43ee79ce951c1c8b74aa3a757b3cfaf658fa37` |    346 |
| BASE / español    | [sse_g4/espanol/sse_g4_p2_2.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_p2_2.jsp)                             | `aa4c9b44eb640b6f4005fa336e43ee79ce951c1c8b74aa3a757b3cfaf658fa37` |    346 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_p2_2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p2_2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                            |
| --- | ----------------------------------------------------------------------------------- |
| 7   | Vacaciones                                                                          |
| 314 | Leyenda:                                                                            |
| 316 | Días aceptados Días pendientes de aceptar Días pendientes de cancelar Días festivos |
| 326 | Tipo de vacaciones Todos "&gt;                                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 312 | form    | action=/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                               |
| 327 | select  | id=SCO_ID_INCIDENCE; class=fuenteformulario150; name=SCO_ID_INCIDENCE; title=Selecciona el tipo de vacaciones; onchange=javacript:m4submit('NombreFormulario'); |
| 328 | option  | value=ALL                                                                                                                                                       |
| 331 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                           |
| --- | ---------------- | ---------------------------------------- |
| 31  | estado           | getParameter(request,"estado")           |
| 35  | SCO_ID_INCIDENCE | getParameter(request,"SCO_ID_INCIDENCE") |

| L   | Variable          | Expresión fuente                                                             | Resolución estática parcial                                                                   |
| --- | ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 31  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                            |
| 35  | zSCO_ID_INCIDENCE | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE")                  |
| 44  | zsubsesion        | "SSE_HOLYDAYS"                                                               | SSE_HOLYDAYS                                                                                  |
| 45  | zmeta4object      | "SSE_HOLYDAYS"                                                               | SSE_HOLYDAYS                                                                                  |
| 46  | znodo             | "SSE_CARGA_FESTIVOS"                                                         | SSE_CARGA_FESTIVOS                                                                            |
| 47  | zlectura          | zsubsesion + "!" + znodo                                                     | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS                                                           |
| 48  | zraiz             | zsubsesion + "!" + znodo + "."                                               | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"."}                                                      |
| 49  | zmetodocarga1     | zsubsesion + "!SSE_CARGA_FESTIVOS.CARGA"                                     | SSE_HOLYDAYS{"!SSE_CARGA_FESTIVOS.CARGA"}                                                     |
| 50  | zmetodocarga2     | zsubsesion + "!SSE_PRINCIPAL.CARGA"                                          | SSE_HOLYDAYS{"!SSE_PRINCIPAL.CARGA"}                                                          |
| 51  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                             | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"[*]"}                                                    |
| 52  | znodo3            | "SSE_INCIDENCE"                                                              | SSE_INCIDENCE                                                                                 |
| 54  | zoutputdef3       | zsubsesion + "!" + znodo3 +"[*]"                                             | SSE_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                             |
| 55  | zmove3            | znodo3 + ":" +znodo3 + "[FIRST]"                                             | SSE_INCIDENCE{":"}SSE_INCIDENCE{"[FIRST]"}                                                    |
| 56  | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."          | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}                     |
| 57  | zSCOIDINCIDENCE   | zcomun3 + "SCO_ID_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INCIDENCE"} |
| 58  | zSCONMINCIDENCE   | zcomun3 + "SCO_NM_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 60  | ztipocarga        | "ALL"                                                                        | ALL                                                                                           |
| 61  | zf0               | ""                                                                           |                                                                                               |
| 62  | zpa0              | ""                                                                           |                                                                                               |
| 63  | zpc0              | ""                                                                           |                                                                                               |
| 64  | za0               | ""                                                                           |                                                                                               |
| 65  | zf1               | ""                                                                           |                                                                                               |
| 66  | zpa1              | ""                                                                           |                                                                                               |
| 67  | zpc1              | ""                                                                           |                                                                                               |
| 68  | za1               | ""                                                                           |                                                                                               |
| 69  | zf2               | ""                                                                           |                                                                                               |
| 70  | zpa2              | ""                                                                           |                                                                                               |
| 71  | zpc2              | ""                                                                           |                                                                                               |
| 72  | za2               | ""                                                                           |                                                                                               |
| 73  | zf3               | ""                                                                           |                                                                                               |
| 74  | zpa3              | ""                                                                           |                                                                                               |
| 75  | zpc3              | ""                                                                           |                                                                                               |
| 76  | za3               | ""                                                                           |                                                                                               |
| 77  | zf4               | ""                                                                           |                                                                                               |
| 78  | zpa4              | ""                                                                           |                                                                                               |
| 79  | zpc4              | ""                                                                           |                                                                                               |
| 80  | za4               | ""                                                                           |                                                                                               |
| 81  | zf5               | ""                                                                           |                                                                                               |
| 82  | zpa5              | ""                                                                           |                                                                                               |
| 83  | zpc5              | ""                                                                           |                                                                                               |
| 84  | za5               | ""                                                                           |                                                                                               |
| 85  | zf6               | ""                                                                           |                                                                                               |
| 86  | zpa6              | ""                                                                           |                                                                                               |
| 87  | zpc6              | ""                                                                           |                                                                                               |
| 88  | za6               | ""                                                                           |                                                                                               |
| 89  | zf7               | ""                                                                           |                                                                                               |
| 90  | zpa7              | ""                                                                           |                                                                                               |
| 91  | zpc7              | ""                                                                           |                                                                                               |
| 92  | za7               | ""                                                                           |                                                                                               |
| 93  | zf8               | ""                                                                           |                                                                                               |
| 94  | zpa8              | ""                                                                           |                                                                                               |
| 95  | zpc8              | ""                                                                           |                                                                                               |
| 96  | za8               | ""                                                                           |                                                                                               |
| 97  | zf9               | ""                                                                           |                                                                                               |
| 98  | zpa9              | ""                                                                           |                                                                                               |
| 99  | zpc9              | ""                                                                           |                                                                                               |
| 100 | za9               | ""                                                                           |                                                                                               |
| 101 | zf10              | ""                                                                           |                                                                                               |
| 102 | zpa10             | ""                                                                           |                                                                                               |
| 103 | zpc10             | ""                                                                           |                                                                                               |
| 104 | za10              | ""                                                                           |                                                                                               |
| 105 | zf11              | ""                                                                           |                                                                                               |
| 106 | zpa11             | ""                                                                           |                                                                                               |
| 107 | zpc11             | ""                                                                           |                                                                                               |
| 108 | za11              | ""                                                                           |                                                                                               |
| 109 | zf12              | ""                                                                           |                                                                                               |
| 110 | zpa12             | ""                                                                           |                                                                                               |
| 111 | zpc12             | ""                                                                           |                                                                                               |
| 112 | za12              | ""                                                                           |                                                                                               |
| 128 | zcount3           | 0                                                                            | 0                                                                                             |
| 134 | zcountv3          | String.valueOf(zcount3)                                                      | String.valueOf(zcount3)                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 114 | m4:startpage | m4task=SSE_HOLYDAYS                                                                                                 |
| 114 | m4:beginjob  |                                                                                                                     |
| 115 | m4:datadef   | m4o=SSE_HOLYDAYS; m4name=SSE_HOLYDAYS                                                                               |
| 122 | m4:exec      | m4method=SSE_HOLYDAYS{"!SSE_CARGA_FESTIVOS.CARGA"}                                                                  |
| 123 | m4:outputdef | m4alias=SSE_CARGA_FESTIVOS                                                                                          |
| 123 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"[*]"}                                                      |
| 124 | m4:outputdef | m4alias=SSE_INCIDENCE                                                                                               |
| 124 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                               |
| 125 | m4:endjob    |                                                                                                                     |
| 126 | m4:move      |                                                                                                                     |
| 126 | m4:param     | name=SSE_HOLYDAYS; value=SSE_INCIDENCE{":"}SSE_INCIDENCE{"[FIRST]"}                                                 |
| 330 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                               |
| 331 | m4:item      | m4name=SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true |
| 345 | m4:endpage   |                                                                                                                     |

| L   | Operación | Argumentos literales                                  |
| --- | --------- | ----------------------------------------------------- |
| 118 | setItem   | zsubsesion,znodo,"","SSE_INCIDENCE",zSCO_ID_INCIDENCE |
| 131 | getCount  | znodo3,zsubsesion,znodo3                              |
| 141 | getItem   | znodo,zmeta4object,znodo,"","ENERO"                   |
| 142 | getItem   | znodo,zmeta4object,znodo,"","ENERO_PA"                |
| 143 | getItem   | znodo,zmeta4object,znodo,"","ENERO_PC"                |
| 144 | getItem   | znodo,zmeta4object,znodo,"","ENERO_A"                 |
| 145 | getItem   | znodo,zmeta4object,znodo,"","FEBRERO"                 |
| 146 | getItem   | znodo,zmeta4object,znodo,"","FEBRERO_PA"              |
| 147 | getItem   | znodo,zmeta4object,znodo,"","FEBRERO_PC"              |
| 148 | getItem   | znodo,zmeta4object,znodo,"","FEBRERO_A"               |
| 149 | getItem   | znodo,zmeta4object,znodo,"","MARZO"                   |
| 150 | getItem   | znodo,zmeta4object,znodo,"","MARZO_PA"                |
| 151 | getItem   | znodo,zmeta4object,znodo,"","MARZO_PC"                |
| 152 | getItem   | znodo,zmeta4object,znodo,"","MARZO_A"                 |
| 153 | getItem   | znodo,zmeta4object,znodo,"","ABRIL"                   |
| 154 | getItem   | znodo,zmeta4object,znodo,"","ABRIL_PA"                |
| 155 | getItem   | znodo,zmeta4object,znodo,"","ABRIL_PC"                |
| 156 | getItem   | znodo,zmeta4object,znodo,"","ABRIL_A"                 |
| 157 | getItem   | znodo,zmeta4object,znodo,"","MAYO"                    |
| 158 | getItem   | znodo,zmeta4object,znodo,"","MAYO_PA"                 |
| 159 | getItem   | znodo,zmeta4object,znodo,"","MAYO_PC"                 |
| 160 | getItem   | znodo,zmeta4object,znodo,"","MAYO_A"                  |
| 161 | getItem   | znodo,zmeta4object,znodo,"","JUNIO"                   |
| 162 | getItem   | znodo,zmeta4object,znodo,"","JUNIO_PA"                |
| 163 | getItem   | znodo,zmeta4object,znodo,"","JUNIO_PC"                |
| 164 | getItem   | znodo,zmeta4object,znodo,"","JUNIO_A"                 |
| 165 | getItem   | znodo,zmeta4object,znodo,"","JULIO"                   |
| 166 | getItem   | znodo,zmeta4object,znodo,"","JULIO_PA"                |
| 167 | getItem   | znodo,zmeta4object,znodo,"","JULIO_PC"                |
| 168 | getItem   | znodo,zmeta4object,znodo,"","JULIO_A"                 |
| 169 | getItem   | znodo,zmeta4object,znodo,"","AGOSTO"                  |
| 170 | getItem   | znodo,zmeta4object,znodo,"","AGOSTO_PA"               |
| 171 | getItem   | znodo,zmeta4object,znodo,"","AGOSTO_PC"               |
| 172 | getItem   | znodo,zmeta4object,znodo,"","AGOSTO_A"                |
| 173 | getItem   | znodo,zmeta4object,znodo,"","SEPTIEMBRE"              |
| 174 | getItem   | znodo,zmeta4object,znodo,"","SEPTIEMBRE_PA"           |
| 175 | getItem   | znodo,zmeta4object,znodo,"","SEPTIEMBRE_PC"           |
| 176 | getItem   | znodo,zmeta4object,znodo,"","SEPTIEMBRE_A"            |
| 177 | getItem   | znodo,zmeta4object,znodo,"","OCTUBRE"                 |
| 178 | getItem   | znodo,zmeta4object,znodo,"","OCTUBRE_PA"              |
| 179 | getItem   | znodo,zmeta4object,znodo,"","OCTUBRE_PC"              |
| 180 | getItem   | znodo,zmeta4object,znodo,"","OCTUBRE_A"               |
| 181 | getItem   | znodo,zmeta4object,znodo,"","NOVIEMBRE"               |
| 182 | getItem   | znodo,zmeta4object,znodo,"","NOVIEMBRE_PA"            |
| 183 | getItem   | znodo,zmeta4object,znodo,"","NOVIEMBRE_PC"            |
| 184 | getItem   | znodo,zmeta4object,znodo,"","NOVIEMBRE_A"             |
| 185 | getItem   | znodo,zmeta4object,znodo,"","DICIEMBRE"               |
| 186 | getItem   | znodo,zmeta4object,znodo,"","DICIEMBRE_PA"            |
| 187 | getItem   | znodo,zmeta4object,znodo,"","DICIEMBRE_PC"            |
| 188 | getItem   | znodo,zmeta4object,znodo,"","DICIEMBRE_A"             |
| 189 | getItem   | znodo,zmeta4object,znodo,"","NAVIDAD"                 |
| 190 | getItem   | znodo,zmeta4object,znodo,"","NAVIDAD_PA"              |
| 191 | getItem   | znodo,zmeta4object,znodo,"","NAVIDAD_PC"              |
| 192 | getItem   | znodo,zmeta4object,znodo,"","NAVIDAD_A"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función            | Argumentos                           |
| --- | ------------------ | ------------------------------------ |
| 277 | buscar             | cadena                               |
| 283 | mostrarcalendarios | paso,mes,pos,coleccionobj,posiciones |
| 301 | m4buscaroption     | oselect,sidoption                    |

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 32  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                        |
| 37  | if ((zSCO_ID_INCIDENCE==null)&#124;&#124;(zSCO_ID_INCIDENCE.equals(""))){                                                  |
| 285 | if ((paso == 0) &#124;&#124; (mes == 13)){                                                                                 |
| 288 | else{                                                                                                                      |
| 304 | if (oselect.options[ni].value == sidoption){                                                                               |
| 47  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                           |
| 48  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                        |
| 49  | expresión de cálculo/transformación: String zmetodocarga1 =zsubsesion + "!SSE_CARGA_FESTIVOS.CARGA";                       |
| 50  | expresión de cálculo/transformación: String zmetodocarga2 =zsubsesion + "!SSE_PRINCIPAL.CARGA";                            |
| 51  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 54  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 +"[*]";                                |
| 55  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                     |
| 56  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 57  | expresión de cálculo/transformación: String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";                                |
| 58  | expresión de cálculo/transformación: String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";                                |
| 291 | expresión de cálculo/transformación: numcalen = numcalen + 1;                                                              |

### Includes, navegación y dependencias

| L   | Include                                    |
| --- | ------------------------------------------ |
| 10  | ../../sse_generico/espanol/sse_lang_in.jsp |

| L   | Destino / recurso                                 |
| --- | ------------------------------------------------- |
| 8   | /css/estilo_sse.css                               |
| 9   | /libreria/funciones_sse.js                        |
| 11  | /libreria/clasecalendario.js                      |
| 12  | /libreria/dom1.js                                 |
| 312 | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp |
| 10  | ../../sse_generico/espanol/sse_lang_in.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                        | Resolución | Ficha / candidato                                                                                                                                                                      |
| ------ | --- | ------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| COLL   | 9   | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)         |
| COLL   | 11  | /libreria/clasecalendario.js                      | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md) |
| COLL   | 12  | /libreria/dom1.js                                 | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md); [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                             |
| COLL   | 312 | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp | ausente    | P06                                                                                                                                                                                    |
| COLL   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| CYC    | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| CYC    | 9   | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                 |
| CYC    | 11  | /libreria/clasecalendario.js                      | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md)                                                                                             |
| CYC    | 12  | /libreria/dom1.js                                 | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                                                                                                   |
| CYC    | 312 | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp | ausente    | P06                                                                                                                                                                                    |
| CYC    | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| IBER   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| IBER   | 9   | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)         |
| IBER   | 11  | /libreria/clasecalendario.js                      | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md) |
| IBER   | 12  | /libreria/dom1.js                                 | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md); [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                             |
| IBER   | 312 | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp | ausente    | P06                                                                                                                                                                                    |
| IBER   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| BASE   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |
| BASE   | 9   | /libreria/funciones_sse.js                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                 |
| BASE   | 11  | /libreria/clasecalendario.js                      | contextual | [libreria/clasecalendario.js](../../transversal/dependencias/libreria--clasecalendario.md)                                                                                             |
| BASE   | 12  | /libreria/dom1.js                                 | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                                                                                                                   |
| BASE   | 312 | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2_2.jsp | ausente    | P06                                                                                                                                                                                    |
| BASE   | 10  | ../../sse_generico/espanol/sse_lang_in.jsp        | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)                                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_p2_2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
