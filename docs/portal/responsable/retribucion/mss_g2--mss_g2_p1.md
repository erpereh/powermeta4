# Datos salariales

Identificador: `mss_g2/mss_g2_p1.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/mss_g2_p1.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p1.jsp) | `a00823b51ce388aa9f8a64214a3cc38d69b705a08c8c61f95ca173ac33c8b6fc` |    105 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/mss_g2_p1.jsp](../../../../clon_portal/portal/mss_g2/espanol/mss_g2_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                     |
| --- | -------------------------------------------- |
| 7   | Datos salariales                             |
| 74  | Datos salariales                             |
| 77  | Consulta las retribuciones de tus empleados. |
| 82  | Salario bruto                                |
| 91  | $M4ITEM6$                                    |
| 92  | $M4ITEM3$ $M4ITEM4$                          |
| 93  | $M4ITEM5$                                    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                 |
| --- | ------- | ----------------------------------------------------------------------------------------- |
| 76  | img     | alt=Datos salariales; src=/iconos/noname_salariales_mss_58_100.gif; width=100; height=100 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | estado          | getParameter(request,"estado")   |
| 13  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable         | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | ---------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 12  | estado           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                             |
| 13  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                           |
| 22  | zsubsesion       | "SSM_SALARY"                                                                   | SSM_SALARY                                                                                                                     |
| 23  | zmeta4object     | "SSM_SALARY"                                                                   | SSM_SALARY                                                                                                                     |
| 24  | zmetodocarga     | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                            | SSM_SALARY{"!SSM_PRINCIPAL.CARGA"}                                                                                             |
| 25  | znodo            | "SSM_SALARY"                                                                   | SSM_SALARY                                                                                                                     |
| 27  | zventanas        | "20"                                                                           | 20                                                                                                                             |
| 28  | zvuelta          | 5                                                                              | 5                                                                                                                              |
| 29  | zdireccion       | "mss_g2/mss_g2_p1.jsp"                                                         | mss_g2/mss_g2_p1.jsp                                                                                                           |
| 30  | zestado          | "21"                                                                           | 21                                                                                                                             |
| 34  | ziterator        | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_SALARY{":"}SSM_SALARY{"!"}SSM_SALARY                                                                                       |
| 35  | zregistroinicial | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 37  | zventana         | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 38  | zregistrofinal   | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 39  | zmove            | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSM_SALARY{":"}SSM_SALARY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 40  | zoutputdef       | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_SALARY{"!"}SSM_SALARY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 41  | ztipocarga       | "M4T"                                                                          | M4T                                                                                                                            |
| 44  | zSNOMBREGLOBAL   | "SCO_GB_NAME"                                                                  | SCO_GB_NAME                                                                                                                    |
| 45  | zSNOMBRE         | "STD_N_FIRST_NAME"                                                             | STD_N_FIRST_NAME                                                                                                               |
| 46  | zSAPELLIDOS      | "STD_N_FAMILY_NAME_1"                                                          | STD_N_FAMILY_NAME_1                                                                                                            |
| 47  | zSBRUTO          | "SCO_PAY_RATE"                                                                 | SCO_PAY_RATE                                                                                                                   |
| 48  | zSFECHA          | "DT_START"                                                                     | DT_START                                                                                                                       |
| 49  | zSMONEDA         | "SCO_ID_CURRENCY"                                                              | SCO_ID_CURRENCY                                                                                                                |
| 50  | zSCOMPBASIS      | "STD_N_COMP_BASIS"                                                             | STD_N_COMP_BASIS                                                                                                               |
| 60  | zcount           | 0                                                                              | 0                                                                                                                              |
| 61  | zcounti          | 0                                                                              | 0                                                                                                                              |
| 70  | zcountv          | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53  | m4:startpage | m4task=SSM_SALARY                                                                                                                                  |
| 53  | m4:beginjob  |                                                                                                                                                    |
| 54  | m4:datadef   | m4o=SSM_SALARY; m4name=SSM_SALARY                                                                                                                  |
| 55  | m4:exec      | m4method=SSM_SALARY{"!SSM_PRINCIPAL.CARGA"}                                                                                                        |
| 55  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                                         |
| 56  | m4:outputdef | m4alias=SSM_SALARY                                                                                                                                 |
| 56  | m4:param     | name=m4name0; value=SSM_SALARY{"!"}SSM_SALARY{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 57  | m4:endjob    |                                                                                                                                                    |
| 58  | m4:move      |                                                                                                                                                    |
| 58  | m4:param     | name=SSM_SALARY; value=SSM_SALARY{":"}SSM_SALARY{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                     |
| 83  | m4:iterator  | m4rows=*; m4node=SSM_SALARY{":"}SSM_SALARY{"!"}SSM_SALARY                                                                                          |
| 84  | m4:param     | name=m4item6; value=SCO_GB_NAME                                                                                                                    |
| 85  | m4:param     | name=m4item1; value=STD_N_FIRST_NAME                                                                                                               |
| 86  | m4:param     | name=m4item2; value=STD_N_FAMILY_NAME_1                                                                                                            |
| 87  | m4:param     | name=m4item3; value=SCO_PAY_RATE                                                                                                                   |
| 88  | m4:param     | name=m4item4; value=SCO_ID_CURRENCY                                                                                                                |
| 89  | m4:param     | name=m4item5; value=STD_N_COMP_BASIS                                                                                                               |
| 105 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 64  | getCount         | znodo,zsubsesion,znodo |
| 68  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 15  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 80  | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                          |
| 99  | }else{%&gt;                                                                                                                              |
| 24  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                          |
| 34  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 36  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 38  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 39  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 40  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 20  | ../../sse_generico/espanol/generico_links.jsp         |
| 97  | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 102 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 8   | /css/estilo_mss.css                                   |
| 9   | /libreria/funciones_sse.js                            |
| 76  | /iconos/noname_salariales_mss_58_100.gif              |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 20  | ../../sse_generico/espanol/generico_links.jsp         |
| 29  | mss_g2/mss_g2_p1.jsp                                  |
| 97  | ../../sse_generico/espanol/generico_ventanas.jsp      |
| 102 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | ----------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 97  | ../../sse_generico/espanol/generico_ventanas.jsp      | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 102 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |
| BASE   | 9   | /libreria/funciones_sse.js                            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp               | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                      |
| BASE   | 19  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                |
| BASE   | 20  | ../../sse_generico/espanol/generico_links.jsp         | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 29  | mss_g2/mss_g2_p1.jsp                                  | ausente    | P06                                                                                                   |
| BASE   | 97  | ../../sse_generico/espanol/generico_ventanas.jsp      | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md) |
| BASE   | 102 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/mss_g2_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
