# mss_g4_p2_detail

Identificador: `mss_g4/mss_g4_p2_detail.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p2_detail.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_detail.jsp) | `8fe590da71d71c4a7f8b8cbd8f668ab78cf48127687303f033947a229deea0ea` |    228 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p2_detail.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_detail.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 123 | [valor dinámico] [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------- |
| 122 | img     | alt=&lt;%=tfuncional%&gt;; src=/iconos/noname_ausencias_dch_52_100.gif; width=100; height=100             |
| 136 | a       | class=enlacefuncional; title=&lt;%=efuncional%&gt;; href=mss_g4_p2_val.jsp?estado=41                      |
| 144 | form    | action=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41; method=post; name=oculto; id=oculto |
| 145 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                  | Resolución estática parcial                                                                                   |
| --- | --------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 11  | estado          | (String) zobjtabla.m4paramvalor("estado")                         | (String) zobjtabla.m4paramvalor("estado")                                                                     |
| 12  | zparamyear      | (String) zobjtabla.m4paramvalor("zparamyear")                     | (String) zobjtabla.m4paramvalor("zparamyear")                                                                 |
| 13  | zincidence      | (String) zobjtabla.m4paramvalor("zincidence")                     | (String) zobjtabla.m4paramvalor("zincidence")                                                                 |
| 14  | zperson         | (String) zobjtabla.m4paramvalor("zperson")                        | (String) zobjtabla.m4paramvalor("zperson")                                                                    |
| 16  | znmincidence    | (String) zobjtabla.m4paramvalor("znmincidence")                   | (String) zobjtabla.m4paramvalor("znmincidence")                                                               |
| 17  | zempleado       | (String) zobjtabla.m4paramvalor("zempleado")                      | (String) zobjtabla.m4paramvalor("zempleado")                                                                  |
| 18  | zin             | zincidence                                                        | (String) zobjtabla.m4paramvalor("zincidence")                                                                 |
| 25  | ano             | ahora.get(ahora.YEAR)                                             | ahora.get(ahora.YEAR)                                                                                         |
| 26  | strano          | String.valueOf(ano)                                               | String.valueOf(ano)                                                                                           |
| 35  | titulo          | "Ausencias"                                                       | Ausencias                                                                                                     |
| 36  | tfuncional      | "Ausencias"                                                       | Ausencias                                                                                                     |
| 37  | efuncional      | "Resumen anual de las ausencias de tus empleados"                 | Resumen anual de las ausencias de tus empleados                                                               |
| 38  | dfuncional      | "Consulta las ausencias del empleado "                            | Consulta las ausencias del empleado                                                                           |
| 40  | dfuncional2     | "Consulta las ausencias de tipo "                                 | Consulta las ausencias de tipo                                                                                |
| 43  | etiqueta        | "Tipo de ausencia"                                                | Tipo de ausencia                                                                                              |
| 44  | etiqueta2       | "Inicio"                                                          | Inicio                                                                                                        |
| 45  | etiqueta3       | "Fin"                                                             | Fin                                                                                                           |
| 46  | etiqueta4       | "Duració                                                          | {"Duració}                                                                                                    |
| 47  | etiqueta5       | "No hay registradas ausencias para tus empleados."                | No hay registradas ausencias para tus empleados.                                                              |
| 59  | zsubsesion      | "SSM_ABSENCES_DYN"                                                | SSM_ABSENCES_DYN                                                                                              |
| 60  | zmeta4object    | "SSM_ABSENCES_DYN"                                                | SSM_ABSENCES_DYN                                                                                              |
| 61  | zmetodocarga    | zsubsesion + "!SSM_PRINCIPAL.CARGA"                               | SSM_ABSENCES_DYN{"!SSM_PRINCIPAL.CARGA"}                                                                      |
| 62  | znodo           | "SSM_ABSENCE_DETAIL"                                              | SSM_ABSENCE_DETAIL                                                                                            |
| 63  | zraiz           | zsubsesion + "!" + znodo + "."                                    | SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"."}                                                                  |
| 64  | zcomun          | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}                       |
| 68  | ziterator       | znodo + ":" + zsubsesion + "!" + znodo                            | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL                                                |
| 69  | zmove           | znodo + ":" + znodo + "[FIRST]"                                   | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCE_DETAIL{"[FIRST]"}                                                          |
| 70  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                  | SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[*]"}                                                                |
| 71  | ztipocarga      | "DETAIL"                                                          | DETAIL                                                                                                        |
| 76  | zSCOIDINCIDENCE | zcomun + "SCO_ID_INCIDENCE"                                       | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INCIDENCE"}   |
| 77  | zSCOIDTIMEUNIT  | zcomun + "SCO_ID_TIME_UNIT"                                       | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TIME_UNIT"}   |
| 78  | zSCOUNITS       | zcomun + "SCO_UNITS"                                              | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}          |
| 79  | zSTARTDATE      | zcomun + "START_DATE"                                             | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"START_DATE"}         |
| 80  | zENDDATE        | zcomun + "END_DATE"                                               | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"END_DATE"}           |
| 81  | zSCONMINCIDENCE | zcomun + "SCO_NM_INCIDENCE"                                       | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}   |
| 82  | zSCONMTIMEUNIT  | zcomun + "SCO_NM_TIME_UNIT"                                       | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}   |
| 83  | zSCONMTIMEUNIT1 | zcomun + "SCO_NM_TIME_UNIT_1"                                     | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT_1"} |
| 84  | zTOTAL          | zcomun + "TOTAL"                                                  | SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"TOTAL"}              |
| 102 | zcount          | 0                                                                 | 0                                                                                                             |
| 103 | zcounti         | 0                                                                 | 0                                                                                                             |
| 112 | zcountv         | String.valueOf(zcounti)                                           | String.valueOf(zcounti)                                                                                       |
| 165 | zposicions      | "0"                                                               | 0                                                                                                             |
| 166 | zcontrol        | 0                                                                 | 0                                                                                                             |
| 167 | zposicion       | 0                                                                 | 0                                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                  |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| 87  | m4:startpage | m4task=SSM_ABSENCES_DYN                                                                                                             |
| 88  | m4:beginjob  |                                                                                                                                     |
| 89  | m4:datadef   | m4o=SSM_ABSENCES_DYN; m4name=SSM_ABSENCES_DYN                                                                                       |
| 97  | m4:exec      | m4method=SSM_ABSENCES_DYN{"!SSM_PRINCIPAL.CARGA"}                                                                                   |
| 97  | m4:param     | name=TIPO_CARGA; value=DETAIL                                                                                                       |
| 98  | m4:outputdef | m4alias=SSM_ABSENCE_DETAIL                                                                                                          |
| 98  | m4:param     | name=m4name0; value=SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[*]"}                                                                  |
| 99  | m4:endjob    |                                                                                                                                     |
| 100 | m4:move      |                                                                                                                                     |
| 100 | m4:param     | name=SSM_ABSENCES_DYN; value=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCE_DETAIL{"[FIRST]"}                                                   |
| 169 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                |
| 181 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true   |
| 186 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"START_DATE"}; htmlsafe=true         |
| 187 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"END_DATE"}; htmlsafe=true           |
| 191 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}; htmlsafe=true          |
| 191 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT_1"}; htmlsafe=true |
| 201 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true   |
| 206 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"START_DATE"}; htmlsafe=true         |
| 207 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"END_DATE"}; htmlsafe=true           |
| 209 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}; htmlsafe=true          |
| 209 | m4:item      | m4name=SSM_ABSENCE_DETAIL{":"}SSM_ABSENCES_DYN{"!"}SSM_ABSENCE_DETAIL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT_1"}; htmlsafe=true |
| 225 | m4:endpage   |                                                                                                                                     |

| L   | Operación        | Argumentos literales                    |
| --- | ---------------- | --------------------------------------- |
| 92  | setItem          | zsubsesion,znodo,"","ID_INCIDENCE",zin  |
| 93  | setItem          | zsubsesion,znodo,"","ID_PERSON",zperson |
| 94  | setItem          | zsubsesion,znodo,"","YEAR",zparamyear   |
| 106 | getCount         | znodo,zsubsesion,znodo                  |
| 110 | getCountInClient | znodo,zsubsesion,znodo                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                     |
| 23  | if ((zparamyear==null)&#124;&#124;(zparamyear.equals(""))){                                                             |
| 29  | if ((zincidence=="0")&#124;&#124;(zincidence.equals("0"))){                                                             |
| 126 | if ((zincidence == "0")&#124;&#124;(zincidence.equals("0"))){                                                           |
| 129 | &lt;%}else{%&gt;                                                                                                        |
| 149 | if (zcounti &gt; 0) {                                                                                                   |
| 154 | if ((zincidence == "0")&#124;&#124;(zincidence.equals("0"))){                                                           |
| 175 | &lt;%if (zcontrol==0){%&gt;                                                                                             |
| 178 | if ((zincidence == "0")&#124;&#124;(zincidence.equals("0"))){                                                           |
| 195 | &lt;%}else{%&gt;                                                                                                        |
| 198 | if ((zincidence == "0")&#124;&#124;(zincidence.equals("0"))){                                                           |
| 216 | else{%&gt;                                                                                                              |
| 39  | expresión de cálculo/transformación: dfuncional = dfuncional + zempleado + ".";                                         |
| 41  | expresión de cálculo/transformación: dfuncional2 = dfuncional2 + znmincidence + " del empleado ";                       |
| 42  | expresión de cálculo/transformación: dfuncional2 = dfuncional2 + zempleado + ".";                                       |
| 61  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                         |
| 63  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                     |
| 64  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 68  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                         |
| 69  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 70  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 76  | expresión de cálculo/transformación: String zSCOIDINCIDENCE = zcomun + "SCO_ID_INCIDENCE";                              |
| 77  | expresión de cálculo/transformación: String zSCOIDTIMEUNIT = zcomun + "SCO_ID_TIME_UNIT";                               |
| 78  | expresión de cálculo/transformación: String zSCOUNITS = zcomun + "SCO_UNITS";                                           |
| 79  | expresión de cálculo/transformación: String zSTARTDATE = zcomun + "START_DATE";                                         |
| 80  | expresión de cálculo/transformación: String zENDDATE = zcomun + "END_DATE";                                             |
| 81  | expresión de cálculo/transformación: String zSCONMINCIDENCE = zcomun + "SCO_NM_INCIDENCE";                              |
| 82  | expresión de cálculo/transformación: String zSCONMTIMEUNIT = zcomun + "SCO_NM_TIME_UNIT";                               |
| 83  | expresión de cálculo/transformación: String zSCONMTIMEUNIT1 = zcomun + "SCO_NM_TIME_UNIT_1";                            |
| 84  | expresión de cálculo/transformación: String zTOTAL = zcomun + "TOTAL";                                                  |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 53  | ../../mss_generico/espanol/menu_mss.jsp               |
| 56  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 57  | ../../sse_generico/espanol/generico_links.jsp         |
| 222 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 51  | /css/estilo_mss.css                                           |
| 52  | /libreria/funciones_sse.js                                    |
| 122 | /iconos/noname_ausencias_dch_52_100.gif                       |
| 136 | mss_g4_p2_val.jsp?estado=41                                   |
| 144 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41 |
| 53  | ../../mss_generico/espanol/menu_mss.jsp                       |
| 56  | ../../mss_generico/espanol/mssgenerico_menusup.jsp            |
| 57  | ../../sse_generico/espanol/generico_links.jsp                 |
| 222 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 53  | ../../mss_generico/espanol/menu_mss.jsp                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 56  | ../../mss_generico/espanol/mssgenerico_menusup.jsp            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 57  | ../../sse_generico/espanol/generico_links.jsp                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 222 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 52  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 136 | mss_g4_p2_val.jsp?estado=41                                   | física     | [mss_g4/mss_g4_p2_val.jsp](mss_g4--mss_g4_p2_val.md)                                            |
| BASE   | 144 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41 | ausente    | P06                                                                                             |
| BASE   | 53  | ../../mss_generico/espanol/menu_mss.jsp                       | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 56  | ../../mss_generico/espanol/mssgenerico_menusup.jsp            | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 57  | ../../sse_generico/espanol/generico_links.jsp                 | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 222 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp         | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p2_detail.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
