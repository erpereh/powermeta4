# Solicita necesidades de formación

Identificador: `mss_g3/mss_g3_p6_insert.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_insert.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_insert.jsp) | `faf8616a5243081261cfb0d6183e873b5316856e5827654c12e0d1d1f220805e` |    129 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_insert.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_insert.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 32  | Solicita necesidades de formación |
| 122 | Procesando datos                  |
| 125 | Por favor, espere unos instantes. |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 13  | empleado        | getParameter(request,"empleado")     |
| 14  | periodo         | getParameter(request,"periodo")      |
| 16  | zVis            | getParameter(request,"zVis")         |
| 46  | estado          | getParameter(request,"estado")       |
| 47  | zinicios        | getParameter(request,"zinicios")     |
| 48  | zidtrtb         | getParameter(request,"zidtrtb")      |
| 49  | zempleados      | getParameter(request,"zempleados")   |
| 50  | zfechaini       | getParameter(request,"zfechaini")    |
| 51  | zfechafin       | getParameter(request,"zfechafin")    |
| 52  | zidioma         | getParameter(request,"zidioma")      |
| 53  | znplazas        | getParameter(request,"znplazas")     |
| 54  | zDev            | getParameter(request,"zDev")         |
| 55  | zTipo           | getParameter(request,"zTipo")        |
| 56  | zDescription    | getParameter(request,"zDescription") |

| L   | Variable     | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 13  | empleado     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")     |
| 14  | periodo      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")      |
| 16  | zVis         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")         |
| 23  | zurl         | ""                                                                       |                                                                          |
| 46  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       |
| 47  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     |
| 48  | zidtrtb      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")      |
| 49  | zempleados   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempleados")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zempleados")   |
| 50  | zfechaini    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechaini")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechaini")    |
| 51  | zfechafin    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechafin")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfechafin")    |
| 52  | zidioma      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidioma")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidioma")      |
| 53  | znplazas     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znplazas")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znplazas")     |
| 54  | zDev         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDev")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDev")         |
| 55  | zTipo        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTipo")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTipo")        |
| 56  | zDescription | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescription") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescription") |
| 72  | zsubsesion   | "SSM_TRAINING_REQUEST"                                                   | SSM_TRAINING_REQUEST                                                     |
| 73  | zMeta4Object | "SSM_TRAINING_REQUEST"                                                   | SSM_TRAINING_REQUEST                                                     |
| 74  | znodo1       | "M4T_TRAINING_REQUEST"                                                   | M4T_TRAINING_REQUEST                                                     |
| 75  | zventanas    | "20"                                                                     | 20                                                                       |
| 76  | zMETODOCARGA | "CARGA:" + zsubsesion + "!M4T_TRAINING_REQUEST.INSERT_REQUEST"           | CARGA:{}SSM_TRAINING_REQUEST{"!M4T_TRAINING_REQUEST.INSERT_REQUEST"}     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                            |
| --- | ------------ | ----------------------------------------------------------------------------- |
| 81  | m4:startpage | m4task=SSM_TRAINING_REQUEST                                                   |
| 82  | m4:beginjob  |                                                                               |
| 83  | m4:datadef   | m4o=SSM_TRAINING_REQUEST; m4name=SSM_TRAINING_REQUEST                         |
| 116 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_REQUEST{"!M4T_TRAINING_REQUEST.INSERT_REQUEST"} |
| 117 | m4:endjob    |                                                                               |
| 129 | m4:endpage   |                                                                               |

| L   | Operación | Argumentos literales                            |
| --- | --------- | ----------------------------------------------- |
| 87  | setItem   | zsubsesion,znodo1,"","IDTRTB",zidtrtb           |
| 88  | setItem   | zsubsesion,znodo1,"","SSM_EMPLEADOS",zempleados |
| 89  | setItem   | zsubsesion,znodo1,"","NPLAZAS",znplazas         |
| 90  | setItem   | zsubsesion,znodo1,"","ID_LANGUAGE",zidioma      |
| 91  | setItem   | zsubsesion,znodo1,"","SD_PREF",zfechaini        |
| 92  | setItem   | zsubsesion,znodo1,"","ED_PREF",zfechafin        |
| 93  | setItem   | zsubsesion,znodo1,"","ID_DEV",zDev              |
| 94  | setItem   | zsubsesion,znodo1,"","TIPO",zTipo               |
| 95  | setItem   | zsubsesion,znodo1,"","DESCRIPTION",zDescription |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                                                       |
| 24  | if (zVis.equals("1")){                                                                                                                                                |
| 26  | }else{                                                                                                                                                                |
| 60  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado = "0";                                                                                                      |
| 61  | if ((zTipo==null)&#124;&#124;(zTipo.equals(""))){ zTipo = "1";}                                                                                                       |
| 27  | expresión de cálculo/transformación: zurl="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person=" + empleado + "&amp;person_ord=" + periodo; |
| 76  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!M4T_TRAINING_REQUEST.INSERT_REQUEST";                                            |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 37  | ../../mss_generico/espanol/menu_mss.jsp |

| L   | Destino / recurso                                                              |
| --- | ------------------------------------------------------------------------------ |
| 34  | /css/estilo_mss.css                                                            |
| 36  | /libreria/funciones_sse.js                                                     |
| 38  | /libreria/menuintercambio.js                                                   |
| 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                      |
| 27  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person= |
| 37  | ../../mss_generico/espanol/menu_mss.jsp                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                     | Resolución | Ficha / candidato                                                                          |
| ------ | --- | ------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------ |
| BASE   | 37  | ../../mss_generico/espanol/menu_mss.jsp                                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                           |
| BASE   | 36  | /libreria/funciones_sse.js                                                     | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)     |
| BASE   | 38  | /libreria/menuintercambio.js                                                   | contextual | [libreria/menuintercambio.js](../../transversal/dependencias/libreria--menuintercambio.md) |
| BASE   | 25  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                      | ausente    | P06                                                                                        |
| BASE   | 27  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&amp;person= | ausente    | P06                                                                                        |
| BASE   | 37  | ../../mss_generico/espanol/menu_mss.jsp                                        | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_insert.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
