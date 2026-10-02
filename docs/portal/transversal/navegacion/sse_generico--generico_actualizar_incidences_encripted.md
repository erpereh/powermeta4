# Actualizacion

Identificador: `sse_generico/generico_actualizar_incidences_encripted.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp) | `517a80875680467cc11ef7a8f33d2f000c78f4e56129b9344ea4bab642eb9a22` |    145 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp)   | `517a80875680467cc11ef7a8f33d2f000c78f4e56129b9344ea4bab642eb9a22` |    145 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp) | `517a80875680467cc11ef7a8f33d2f000c78f4e56129b9344ea4bab642eb9a22` |    145 |
| BASE / español    | [sse_generico/espanol/generico_actualizar_incidences_encripted.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp)                             | `517a80875680467cc11ef7a8f33d2f000c78f4e56129b9344ea4bab642eb9a22` |    145 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_actualizar_incidences_encripted.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 138 | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal   |
| --- | --------------- | ---------------- |
| 78  | TAG             | zhash.get("TAG") |
| 81  | REC             | zhash.get("REC") |
| 83  | ACC             | zhash.get("ACC") |
| 85  | NOD             | zhash.get("NOD") |

| L   | Variable                   | Expresión fuente                                                                     | Resolución estática parcial                                                                           |
| --- | -------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 7   | nombre                     | ""                                                                                   |                                                                                                       |
| 8   | valor                      | ""                                                                                   |                                                                                                       |
| 9   | from_other_page            | ""                                                                                   |                                                                                                       |
| 11  | id_incidence_back          | ""                                                                                   |                                                                                                       |
| 12  | id_incidence_date_back     | ""                                                                                   |                                                                                                       |
| 13  | incidencie_population_back | ""                                                                                   |                                                                                                       |
| 14  | add_value                  | ""                                                                                   |                                                                                                       |
| 15  | bEnd                       | false                                                                                | false                                                                                                 |
| 16  | valorMassive               | ""                                                                                   |                                                                                                       |
| 17  | newValor                   | ""                                                                                   |                                                                                                       |
| 18  | sLog                       | ""                                                                                   |                                                                                                       |
| 35  | iNextSep                   | valorMassive.indexOf(",")                                                            | valorMassive.indexOf(",")                                                                             |
| 38  | iIDlength                  | Integer.parseInt(valorMassive.substring(0,iNextSep))                                 | Integer.parseInt(valorMassive.substring(0,iNextSep))                                                  |
| 39  | sID                        | valorMassive.substring(iNextSep+1,iNextSep+iIDlength+1)                              | {valorMassive.substring(iNextSep}{1,iNextSep}Integer.parseInt(valorMassive.substring(0,iNextSep)){1)} |
| 77  | zparametro                 | ""                                                                                   |                                                                                                       |
| 78  | zsubsesion                 | (String)zhash.get("TAG")                                                             | (String)zhash.get("TAG")                                                                              |
| 97  | _SERVER                    | "+"htt[ruta interna omitida]"+ request.getServerName()+":"+ request.getServerPort()" | +{htt[ruta interna omitida]"}{request.getServerName()}:{request.getServerPort()"}                     |
| 100 | zmeta4object               | zsubsesion                                                                           | (String)zhash.get("TAG")                                                                              |
| 101 | znodo                      | "SSE_PRINCIPAL"                                                                      | SSE_PRINCIPAL                                                                                         |
| 102 | znodo2                     | "SSE_COMUNICACION"                                                                   | SSE_COMUNICACION                                                                                      |
| 103 | zoutputdef                 | zsubsesion + "!" + znodo2 + "[*]"                                                    | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"}                                                  |
| 104 | zmetodo                    | zsubsesion + "!" + znodo + ".GESTION"                                                | (String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}                                                |
| 105 | zraiz                      | zsubsesion + "!" + znodo2 + "."                                                      | (String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"."}                                                    |
| 114 | zerror                     | "0"                                                                                  | 0                                                                                                     |
| 115 | zredireccion               | ""                                                                                   |                                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                       |
| --- | ------------ | ------------------------------------------------------------------------ |
| 107 | m4:startpage | m4task=(String)zhash.get("TAG")                                          |
| 107 | m4:beginjob  |                                                                          |
| 108 | m4:datadef   | m4o=(String)zhash.get("TAG"); m4name=(String)zhash.get("TAG")            |
| 109 | m4:exec      | m4method=(String)zhash.get("TAG"){"!"}SSE_PRINCIPAL{".GESTION"}          |
| 109 | m4:param     | name=GESTION_ARG; value=                                                 |
| 110 | m4:outputdef | m4alias=SSE_PRINCIPAL                                                    |
| 110 | m4:param     | name=m4name0; value=(String)zhash.get("TAG"){"!"}SSE_COMUNICACION{"[*]"} |
| 111 | m4:endjob    |                                                                          |
| 144 | m4:endpage   |                                                                          |

| L   | Operación | Argumentos literales                         |
| --- | --------- | -------------------------------------------- |
| 118 | getItem   | znodo,zsubsesion,znodo2,"","TIPO_DEBUG"      |
| 119 | getItem   | znodo,zsubsesion,znodo2,"","JSP_REDIRECCION" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 29  | if (nombre.equals("SET_OF_EMPLOYEES_SELECTED")){                                                                                                                                                                            |
| 37  | if (iNextSep!=-1){                                                                                                                                                                                                          |
| 44  | if (iNextSep+iIDlength == valorMassive.length()){                                                                                                                                                                           |
| 46  | }else{                                                                                                                                                                                                                      |
| 50  | }else{bEnd = true;}                                                                                                                                                                                                         |
| 56  | if (nombre.equals("SCO_ID_INCIDENCE")){                                                                                                                                                                                     |
| 59  | if (nombre.equals("REC")){                                                                                                                                                                                                  |
| 62  | if (nombre.equals("from_other_page")){                                                                                                                                                                                      |
| 65  | if (nombre.equals("id_incidence_back")){                                                                                                                                                                                    |
| 68  | if (nombre.equals("id_incidence_date_back")){                                                                                                                                                                               |
| 71  | if (nombre.equals("incidencie_population_back")){                                                                                                                                                                           |
| 74  | if (add_value.equals("YES")){zhash.put (nombre,valor);}                                                                                                                                                                     |
| 122 | if ((zredireccion==null)){                                                                                                                                                                                                  |
| 124 | }else{                                                                                                                                                                                                                      |
| 127 | if (from_other_page.equals("YES")){                                                                                                                                                                                         |
| 36  | expresión de cálculo/transformación: sLog = sLog + ": iNextSep=" + iNextSep;                                                                                                                                                |
| 38  | expresión de cálculo/transformación: int iIDlength = Integer.parseInt(valorMassive.substring(0,iNextSep));                                                                                                                  |
| 41  | expresión de cálculo/transformación: sLog = sLog + ": sID=" + sID;                                                                                                                                                          |
| 42  | expresión de cálculo/transformación: newValor = newValor + sID + "#";                                                                                                                                                       |
| 48  | expresión de cálculo/transformación: sLog = sLog + ": valorMassive=" + valorMassive;                                                                                                                                        |
| 103 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";                                                                                                                                 |
| 104 | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".GESTION";                                                                                                                                |
| 105 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo2 + ".";                                                                                                                                        |
| 128 | expresión de cálculo/transformación: zredireccion = zredireccion + "?id_incidence=" + id_incidence_back + "&amp;id_incidence_date=" + id_incidence_date_back + "&amp;incidencie_population=" + incidencie_population_back;} |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 143 | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 139 | /css/estilo_sse.css            |
| 140 | /libreria/funciones_sse.js     |
| 143 | generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 140 | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 140 | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 140 | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| BASE   | 140 | /libreria/funciones_sse.js     | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 143 | generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_actualizar_incidences_encripted.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
