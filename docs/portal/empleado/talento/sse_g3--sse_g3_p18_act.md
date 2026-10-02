# Actualizacion

Identificador: `sse_g3/sse_g3_p18_act.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p18_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p18_act.jsp) | `b2a97083cd0b11c091a090939d262b7c3ca2192c5f9e7b2ceb2d65d844694bc6` |     91 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p18_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p18_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 83  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal          |
| --- | --------------- | ----------------------- |
| 20  | TAG             | zhash.get("TAG")        |
| 24  | REC             | zhash.get("REC")        |
| 26  | ACC             | zhash.get("ACC")        |
| 28  | NOD             | zhash.get("NOD")        |
| 31  | mss             | zhash.get("mss")        |
| 32  | id              | zhash.get("id")         |
| 33  | ordinal1        | zhash.get("ordinal1")   |
| 34  | inicioev        | zhash.get("inicioev")   |
| 35  | tecnica         | zhash.get("tecnica")    |
| 36  | nombreper       | zhash.get("nombreper")  |
| 37  | nombreproc      | zhash.get("nombreproc") |
| 38  | id_re           | zhash.get("id_re")      |

| L   | Variable     | Expresión fuente                      | Resolución estática parcial                            |
| --- | ------------ | ------------------------------------- | ------------------------------------------------------ |
| 8   | nombre       | ""                                    |                                                        |
| 9   | valor        | ""                                    |                                                        |
| 19  | zparametro   | ""                                    |                                                        |
| 20  | zsubsesion   | (String)zhash.get("TAG")              | (String)zhash.get("TAG")                               |
| 31  | mss          | (String) zhash.get("mss")             | (String) zhash.get("mss")                              |
| 32  | id           | (String) zhash.get("id")              | (String) zhash.get("id")                               |
| 33  | ordinal1     | (String) zhash.get("ordinal1")        | (String) zhash.get("ordinal1")                         |
| 34  | inicioev     | (String) zhash.get("inicioev")        | (String) zhash.get("inicioev")                         |
| 35  | tecnica      | (String) zhash.get("tecnica")         | (String) zhash.get("tecnica")                          |
| 36  | nombreper    | (String) zhash.get("nombreper")       | (String) zhash.get("nombreper")                        |
| 37  | nombreproc   | (String) zhash.get("nombreproc")      | (String) zhash.get("nombreproc")                       |
| 38  | id_re        | (String) zhash.get("id_re")           | (String) zhash.get("id_re")                            |
| 50  | zmeta4object | zsubsesion                            | (String)zhash.get("TAG")                               |
| 51  | znodo        | "SSE_PRINCIPAL"                       | SSE_PRINCIPAL                                          |
| 52  | znodo2       | "SSE_COMUNICACION"                    | SSE_COMUNICACION                                       |
| 53  | zoutputdef   | zsubsesion + "!" + znodo2 + "[*]"     | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}   |
| 54  | zmetodo      | zsubsesion + "!" + znodo + ".GESTION" | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"} |
| 55  | zraiz        | zsubsesion + "!" + znodo2 + "."       | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}     |
| 63  | zerror       | "0"                                   | 0                                                      |
| 64  | zredireccion | ""                                    |                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 57  | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 57  | m4:beginjob  |                                                                          |
| 58  | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 59  | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 59  | m4:param     | name=GESTION_ARG; value=                                                 |
| 60  | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 60  | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 61  | m4:endjob    |                                                                          |
| 89  | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 67  | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 68  | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44  | if (key.equals("id") &#124;&#124; key.equals("ordinal1") &#124;&#124; key.equals("inicioev")) {value                                                                                                                                                              |
| 72  | if ((zredireccion==null)){                                                                                                                                                                                                                                        |
| 74  | }else{                                                                                                                                                                                                                                                            |
| 54  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                                                       |
| 55  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION";                                                                                                                                                                      |
| 56  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                                                                                                                                                                              |
| 76  | expresión de cálculo/transformación: zredireccion =zredireccion +"&amp;mss="+mss+"&amp;id="+id+"&amp;ordinal1="+ordinal1+"&amp;inicioev="+inicioev+"&amp;tecnica="+tecnica+"&amp;nombreper="+nombreper+"&amp;NombreProceso="+nombreproc + "&amp;id_re=" + id_re ; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 88  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 84  | /css/estilo_sse.css                                       |
| 85  | /libreria/funciones_sse.js                                |
| 88  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 88  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 85  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 88  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p18_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
