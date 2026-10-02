# Mis contactos

Identificador: `sse_g0/sse_g0_p1.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_g0_p1.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_p1.jsp) | `0983535640a88e255f62332fa1bb5910fb211615d57c2053d2eaf3362dc8a2d6` |    143 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_g0_p1.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                        |
| --- | ----------------------------------------------------------------------------------------------- |
| 7   | Mis contactos                                                                                   |
| 91  | Mis contactos                                                                                   |
| 94  | En esta pantalla tienes los datos personales de las personas que quieres mantener en tu agenda. |
| 107 | Nombre                                                                                          |
| 108 | E-Mail                                                                                          |
| 109 | Teléfono                                                                                        |
| 110 | Departamento                                                                                    |
| 118 | ,                                                                                               |
| 119 | " title="Enviar un E-mail"&gt;                                                                  |
| 122 | '); var URL = 'sse_g0/sse_g0_actualizar_g0_p1.jsp'; m4navegar(URL,parametros,valores);"&gt;     |
| 126 | ,                                                                                               |
| 127 | " title="Enviar un E-mail"&gt;                                                                  |
| 130 | '); var URL = 'sse_g0/sse_g0_actualizar_g0_p1.jsp'; m4navegar(URL,parametros,valores);"&gt;     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 119 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                             |
| 122 | a       | href=javascript:var parametros = new Array('REC'); var valores = new Array('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                 |
| 122 | img     | align=right; alt=Eliminar la petición; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 127 | a       | href=mailto:&lt;m4:item m4name=; htmlsafe=true                                                                                                                                             |
| 130 | a       | href=javascript:var parametros = new Array('REC'); var valores = new Array('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                 |
| 130 | img     | align=right; alt=Eliminar la petición; src=/iconos/icono_borrar_16_16.gif; height=16; width=16; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | estado          | getParameter(request,"estado")   |
| 13  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                      |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                               |
| 13  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                             |
| 27  | zsubsesion        | "SSE_INVENTARIO"                                                               | SSE_INVENTARIO                                                                                                                                   |
| 28  | zmeta4object      | "SSE_INVENTARIO"                                                               | SSE_INVENTARIO                                                                                                                                   |
| 29  | zmetodocarga      | zsubsesion + "!SSE_INVENTARIO.CARGA"                                           | SSE_INVENTARIO{"!SSE_INVENTARIO.CARGA"}                                                                                                          |
| 30  | znodo             | "SSE_INVENTARIO_FAVORITOS"                                                     | SSE_INVENTARIO_FAVORITOS                                                                                                                         |
| 31  | znodo2            | "SSE_INVENTARIO"                                                               | SSE_INVENTARIO                                                                                                                                   |
| 32  | ztipocarga        | "FAV"                                                                          | FAV                                                                                                                                              |
| 36  | zventanas         | "20"                                                                           | 20                                                                                                                                               |
| 37  | zvuelta           | 5                                                                              | 5                                                                                                                                                |
| 38  | zdireccion        | "sse_g0/sse_g0_p1.jsp"                                                         | sse_g0/sse_g0_p1.jsp                                                                                                                             |
| 39  | zestado           | "01"                                                                           | 01                                                                                                                                               |
| 43  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                             |
| 45  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                            |
| 46  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                               |
| 48  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 49  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO_FAVORITOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 50  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS                                                                         |
| 53  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}                                                |
| 55  | zSTDEMAIL         | zcomun + "STD_EMAIL"                                                           | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}                                   |
| 56  | zSTDNFAMNAME1     | zcomun + "STD_N_FAM_NAME_1"                                                    | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAM_NAME_1"}                            |
| 57  | zSTDNFIRSTNAME    | zcomun + "STD_N_FIRST_NAME"                                                    | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}                            |
| 58  | zSTDNWORKUNIT     | zcomun + "STD_N_WORK_UNIT"                                                     | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}                             |
| 59  | zSTDGBPHONE       | zcomun + "STD_GB_PHONE"                                                        | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_GB_PHONE"}                                |
| 60  | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                     |
| 61  | zSTDIDPERSON      | zcomun + "STD_ID_PERSON"                                                       | SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                               |
| 76  | zcount            | 0                                                                              | 0                                                                                                                                                |
| 77  | zcounti           | 0                                                                              | 0                                                                                                                                                |
| 86  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                          |
| 99  | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                 |
| 100 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                  |
| 101 | zposicions        | "0"                                                                            | 0                                                                                                                                                |
| 102 | zcontrol          | 0                                                                              | 0                                                                                                                                                |
| 103 | zposicion         | 0                                                                              | 0                                                                                                                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 63  | m4:startpage | m4task=SSE_INVENTARIO                                                                                                                                                |
| 63  | m4:beginjob  |                                                                                                                                                                      |
| 64  | m4:datadef   | m4o=SSE_INVENTARIO; m4name=SSE_INVENTARIO                                                                                                                            |
| 71  | m4:exec      | m4method=SSE_INVENTARIO{"!SSE_INVENTARIO.CARGA"}                                                                                                                     |
| 71  | m4:param     | name=TIPO_CARGA; value=FAV                                                                                                                                           |
| 71  | m4:param     | name=ARG_PATH_TEMP; value=                                                                                                                                           |
| 72  | m4:outputdef | m4alias=SSE_INVENTARIO_FAVORITOS                                                                                                                                     |
| 72  | m4:param     | name=m4name0; value=SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 73  | m4:endjob    |                                                                                                                                                                      |
| 74  | m4:move      |                                                                                                                                                                      |
| 74  | m4:param     | name=SSE_INVENTARIO; value=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO_FAVORITOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                       |
| 112 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                            |
| 118 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAM_NAME_1"}; htmlsafe=true                          |
| 118 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                          |
| 119 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                 |
| 120 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_GB_PHONE"}; htmlsafe=true                              |
| 121 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                           |
| 126 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FAM_NAME_1"}; htmlsafe=true                          |
| 126 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_FIRST_NAME"}; htmlsafe=true                          |
| 127 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                 |
| 128 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_GB_PHONE"}; htmlsafe=true                              |
| 129 | m4:item      | m4name=SSE_INVENTARIO_FAVORITOS{":"}SSE_INVENTARIO{"!"}SSE_INVENTARIO_FAVORITOS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                           |
| 141 | m4:endpage   |                                                                                                                                                                      |

| L   | Operación        | Argumentos literales                   |
| --- | ---------------- | -------------------------------------- |
| 68  | setItem          | zsubsesion,znodo2,"","ID_HR",zIdPerson |
| 80  | getCount         | znodo,zsubsesion,znodo                 |
| 84  | getCountInClient | znodo,zsubsesion,znodo                 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 98  | if (zcount &gt; 0) {                                                                                                                     |
| 116 | if (zcontrol==0){%&gt;                                                                                                                   |
| 124 | &lt;%}else{%&gt;                                                                                                                         |
| 135 | &lt;%}else{%&gt;                                                                                                                         |
| 29  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";                                         |
| 44  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 46  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 48  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 49  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 50  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 53  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 55  | expresión de cálculo/transformación: String zSTDEMAIL = zcomun + "STD_EMAIL";                                                            |
| 56  | expresión de cálculo/transformación: String zSTDNFAMNAME1 = zcomun + "STD_N_FAM_NAME_1";                                                 |
| 57  | expresión de cálculo/transformación: String zSTDNFIRSTNAME = zcomun + "STD_N_FIRST_NAME";                                                |
| 58  | expresión de cálculo/transformación: String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";                                                  |
| 59  | expresión de cálculo/transformación: String zSTDGBPHONE = zcomun + "STD_GB_PHONE";                                                       |
| 60  | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 61  | expresión de cálculo/transformación: String zSTDIDPERSON = zcomun + "STD_ID_PERSON";                                                     |
| 100 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp      |
| 134 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 138 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 8   | /css/estilo_sse.css                                |
| 9   | /libreria/funciones_sse.js                         |
| 119 | mailto:&lt;m4:item m4name=                         |
| 122 | javascript:var parametros = new Array(             |
| 122 | /iconos/icono_borrar_16_16.gif                     |
| 127 | mailto:&lt;m4:item m4name=                         |
| 130 | javascript:var parametros = new Array(             |
| 130 | /iconos/icono_borrar_16_16.gif                     |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp      |
| 38  | sse_g0/sse_g0_p1.jsp                               |
| 122 | sse_g0/sse_g0_actualizar_g0_p1.jsp                 |
| 130 | sse_g0/sse_g0_actualizar_g0_p1.jsp                 |
| 134 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 138 | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 134 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 138 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 122 | javascript:var parametros = new Array(             | dinámica   | P06                                                                                                       |
| BASE   | 130 | javascript:var parametros = new Array(             | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 38  | sse_g0/sse_g0_p1.jsp                               | ausente    | P06                                                                                                       |
| BASE   | 122 | sse_g0/sse_g0_actualizar_g0_p1.jsp                 | ausente    | P06                                                                                                       |
| BASE   | 130 | sse_g0/sse_g0_actualizar_g0_p1.jsp                 | ausente    | P06                                                                                                       |
| BASE   | 134 | ../../sse_generico/espanol/generico_ventanas.jsp   | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)     |
| BASE   | 138 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
