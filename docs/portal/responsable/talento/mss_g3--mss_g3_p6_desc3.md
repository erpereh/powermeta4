# Inscripción en curso

Identificador: `mss_g3/mss_g3_p6_desc3.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_desc3.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc3.jsp) | `7c7b8e1b697f70dba67af2b334caf3ba5fc1e52a557aafd34ebb809b37de377a` |    320 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_desc3.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                            |
| --- | ------------------------------------------------------------------- |
| 8   | Inscripción en curso                                                |
| 183 | Descripción del curso de formación                                  |
| 189 | Nombre del curso: [valor dinámico] Asistencias a formación          |
| 203 | Descripción del curso de formación                                  |
| 207 | Producto tipo de formación:                                         |
| 211 | Producto de formación:                                              |
| 217 | Días:                                                               |
| 219 | Número de horas:                                                    |
| 221 | Número de horas extras:                                             |
| 227 | Número mínimo de asistentes:                                        |
| 229 | Número máximo de asistentes:                                        |
| 235 | Objetivo formativo :                                                |
| 239 | Ruta internet :                                                     |
| 254 | Descripción de la multimedia                                        |
| 260 | Nombre de la multimedia: [valor dinámico] Inscripciones a formación |
| 273 | Descripción de la multimedia de formación                           |
| 277 | Producto tipo de formación:                                         |
| 281 | Producto de formación:                                              |
| 287 | Autor:                                                              |
| 289 | Fecha del cd:                                                       |
| 295 | Días estimados:                                                     |
| 297 | Horas estimadas:                                                    |
| 299 | Unidades disponibles:                                               |
| 305 | Objetivo formativo :                                                |
| 309 | Ruta internet :                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                      |
| --- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 187 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción en curso; border=0 |
| 193 | a       | class=enlacefuncional; title=Asistencias a formación; href=mss_g3_p10_2.jsp?estado=31                          |
| 240 | a       | href=&lt;%=HTTPPATH1%&gt;                                                                                      |
| 258 | img     | src=/iconos/noname_incripciones_formacion_99_100.gif; width=99; height=100; alt=Inscripción en curso; border=0 |
| 264 | a       | class=enlacefuncional; title=Inscripciones a formación; href=sse_g3_p7.jsp?estado=31                           |
| 310 | a       | href=&lt;%=HTTPPATH2%&gt;                                                                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable         | Expresión fuente                               | Resolución estática parcial                             |
| --- | ---------------- | ---------------------------------------------- | ------------------------------------------------------- |
| 21  | estado           | zobjtabla.m4paramvalor("estado")               | zobjtabla.m4paramvalor("estado")                        |
| 22  | zidtrtb          | zobjtabla.m4paramvalor("zidtrtb")              | zobjtabla.m4paramvalor("zidtrtb")                       |
| 40  | zsubsesion       | "SSM_ENROLLMENT_OVERVIEW"                      | SSM_ENROLLMENT_OVERVIEW                                 |
| 41  | zMeta4Object     | "SSM_ENROLLMENT_OVERVIEW"                      | SSM_ENROLLMENT_OVERVIEW                                 |
| 43  | znodo            | "M4T_IDTRTB"                                   | M4T_IDTRTB                                              |
| 44  | znodo1           | "M4T_DC"                                       | M4T_DC                                                  |
| 45  | znodo2           | "M4T_DM"                                       | M4T_DM                                                  |
| 47  | ztipocarga       | "M4T"                                          | M4T                                                     |
| 49  | zregistroinicial | 0                                              | 0                                                       |
| 51  | zventana         | 0                                              | 0                                                       |
| 52  | zregistrofinal   | zregistroinicial + zventana - 1                | 0{zventana - 1}                                         |
| 55  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"               | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_IDTRTB{"[*]"}           |
| 56  | zraiz            | zsubsesion + "!" + znodo + "."                 | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_IDTRTB{"."}             |
| 58  | zoutputdef1      | zsubsesion + "!" + znodo1 + "[*]"              | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC{"[*]"}               |
| 59  | zraiz1           | zsubsesion + "!" + znodo1 + "."                | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC{"."}                 |
| 61  | zoutputdef2      | zsubsesion + "!" + znodo2 + "[*]"              | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DM{"[*]"}               |
| 62  | zraiz2           | zsubsesion + "!" + znodo2 + "."                | SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DM{"."}                 |
| 66  | zMETODOCARGA     | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA" | CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"} |
| 88  | zcount1          | 0                                              | 0                                                       |
| 89  | zcount1i         | 0                                              | 0                                                       |
| 90  | zcount2          | 0                                              | 0                                                       |
| 91  | zcount2i         | 0                                              | 0                                                       |
| 93  | zDAYS            | ""                                             |                                                         |
| 94  | zHOURS           | ""                                             |                                                         |
| 95  | zHOURSOTW        | ""                                             |                                                         |
| 96  | zNBMAX           | ""                                             |                                                         |
| 97  | zNBMIN           | ""                                             |                                                         |
| 98  | zNMCOURSE        | ""                                             |                                                         |
| 99  | HTTPPATH1        | ""                                             |                                                         |
| 100 | EDUCATOBJ1       | ""                                             |                                                         |
| 101 | NMPT1            | ""                                             |                                                         |
| 102 | NMDEV1           | ""                                             |                                                         |
| 105 | zNMMULTIMEDIA    | ""                                             |                                                         |
| 106 | zAUTHOR          | ""                                             |                                                         |
| 107 | zCDDATE          | ""                                             |                                                         |
| 108 | zESTIMATEDDAYS   | ""                                             |                                                         |
| 109 | zESTIMATEDHOURS  | ""                                             |                                                         |
| 110 | zNUMBER          | ""                                             |                                                         |
| 111 | EDUCATOBJ2       | ""                                             |                                                         |
| 112 | NMPT2            | ""                                             |                                                         |
| 113 | NMDEV2           | ""                                             |                                                         |
| 114 | HTTPPATH2        | ""                                             |                                                         |
| 115 | z1               | ""                                             |                                                         |
| 116 | z2               | ""                                             |                                                         |
| 117 | z3               | ""                                             |                                                         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                |
| --- | ------------ | ----------------------------------------------------------------- |
| 71  | m4:startpage | m4task=SSM_ENROLLMENT_OVERVIEW                                    |
| 72  | m4:beginjob  |                                                                   |
| 73  | m4:datadef   | m4o=SSM_ENROLLMENT_OVERVIEW; m4name=SSM_ENROLLMENT_OVERVIEW       |
| 80  | m4:exec      | m4method=CARGA:{}SSM_ENROLLMENT_OVERVIEW{"!SSM_PRINCIPAL.CARGA"}  |
| 81  | m4:param     | name=TIPO_CARGA; value=M4T                                        |
| 82  | m4:outputdef | m4alias=M4T_IDTRTB                                                |
| 82  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_IDTRTB{"[*]"} |
| 83  | m4:outputdef | m4alias=M4T_DC                                                    |
| 83  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DC{"[*]"}     |
| 84  | m4:outputdef | m4alias=M4T_DM                                                    |
| 84  | m4:param     | name=m4name0; value=SSM_ENROLLMENT_OVERVIEW{"!"}M4T_DM{"[*]"}     |
| 85  | m4:endjob    |                                                                   |
| 318 | m4:endpage   |                                                                   |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 77  | setItem          | zsubsesion,znodo,"","IDTRTB",zidtrtb                |
| 121 | getCount         | znodo1,zsubsesion,znodo1                            |
| 122 | getCountInClient | znodo1,zsubsesion,znodo1                            |
| 123 | getCount         | znodo2,zsubsesion,znodo2                            |
| 124 | getCountInClient | znodo2,zsubsesion,znodo2                            |
| 127 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_DAYS"            |
| 130 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_HOURS"           |
| 133 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_HOURS_OTW"       |
| 136 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_NB_MAX"          |
| 139 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_NB_MIN"          |
| 142 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_NM_COURSE"       |
| 143 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_HTTP_PATH"       |
| 144 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_EDUCAT_OBJ"      |
| 145 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_NM_PRODUCT_TYPE" |
| 146 | getItem          | znodo1,zMeta4Object,znodo1,"","SCO_NM_DEV_PRODUCT"  |
| 152 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_NM_MULTIMEDIA"   |
| 153 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_AUTHOR"          |
| 154 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_CD_DATE"         |
| 160 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_EDUCAT_OBJ"      |
| 161 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_NM_PRODUCT_TYPE" |
| 162 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_NM_DEV_PRODUCT"  |
| 163 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_HTTP_PATH"       |
| 165 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_NUMBER_OF_UNITS" |
| 168 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_ESTIMATED_DAYS"  |
| 171 | getItem          | znodo2,zMeta4Object,znodo2,"","SCO_ESTIMATED_HOURS" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 23  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                        |
| 178 | if (zcount1i != 0 ) {                                                                                      |
| 249 | if (zcount2i!= 0 ) {                                                                                       |
| 52  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                 |
| 55  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                 |
| 56  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                        |
| 58  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";               |
| 59  | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                      |
| 61  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";               |
| 62  | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                      |
| 66  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"; |
| 158 | expresión de cálculo/transformación: zCDDATE = z3 + "-" + z2 + "-" + z1;                                   |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp            |
| 29  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 30  | ../../sse_generico/espanol/generico_links.jsp      |
| 316 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_mss.css                                |
| 10  | /libreria/funciones_sse.js                         |
| 187 | /iconos/noname_incripciones_formacion_99_100.gif   |
| 193 | mss_g3_p10_2.jsp?estado=31                         |
| 240 | &lt;%=HTTPPATH1%&gt;                               |
| 258 | /iconos/noname_incripciones_formacion_99_100.gif   |
| 264 | sse_g3_p7.jsp?estado=31                            |
| 310 | &lt;%=HTTPPATH2%&gt;                               |
| 11  | ../../mss_generico/espanol/menu_mss.jsp            |
| 29  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 30  | ../../sse_generico/espanol/generico_links.jsp      |
| 316 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 29  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 30  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 316 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 10  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 193 | mss_g3_p10_2.jsp?estado=31                         | física     | [mss_g3/mss_g3_p10_2.jsp](mss_g3--mss_g3_p10_2.md)                                                        |
| BASE   | 240 | &lt;%=HTTPPATH1%&gt;                               | dinámica   | P06                                                                                                       |
| BASE   | 264 | sse_g3_p7.jsp?estado=31                            | ausente    | P06                                                                                                       |
| BASE   | 310 | &lt;%=HTTPPATH2%&gt;                               | dinámica   | P06                                                                                                       |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp            | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 29  | ../../mss_generico/espanol/mssgenerico_menusup.jsp | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 30  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 316 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_desc3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
