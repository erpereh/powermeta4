# Recibo

Identificador: `sse_g2/sse_g2_rec.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_rec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_rec.jsp) | `f767452cc67dd5b3a294c9b39c5ebb3f29eb784c2be0ca5f7db2d403be90deb9` |     89 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_rec.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_rec.jsp) | `f767452cc67dd5b3a294c9b39c5ebb3f29eb784c2be0ca5f7db2d403be90deb9` |     89 |
| BASE / español    | [sse_g2/espanol/sse_g2_rec.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_rec.jsp)                             | `18ceda52d9a9f81115090289b73baa2ae05e56e9456102a418b91f98d8fde0c9` |     91 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_rec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_rec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 8   | Recibo                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 14  | estado          | getParameter(request,"estado")    |
| 18  | z_paga          | getParameter(request,"z_paga")    |
| 19  | zmoneda         | getParameter(request,"zmoneda")   |
| 20  | zrevision       | getParameter(request,"zrevision") |
| 21  | znmpay          | getParameter(request,"znmpay")    |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 14  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    |
| 18  | zpaga        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")    |
| 19  | zmoneda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda")   |
| 20  | zrevision    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrevision") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrevision") |
| 21  | znmpay       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpay")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpay")    |
| 26  | zsubsesion   | "SSP_RECIBO_NOMINA"                                                   | SSP_RECIBO_NOMINA                                                     |
| 27  | zmeta4object | "SSP_RECIBO_NOMINA"                                                   | SSP_RECIBO_NOMINA                                                     |
| 28  | znodo        | "SSE_RECIBO"                                                          | SSE_RECIBO                                                            |
| 29  | znodo2       | "SSP_REC_PERIOD"                                                      | SSP_REC_PERIOD                                                        |
| 34  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"[*]"}                               |
| 35  | zraiz        | zsubsesion + "!" + znodo + "."                                        | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}                                 |
| 36  | zmove        | znodo + ":" + znodo + "[FIRST]"                                       | SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"}                                  |
| 40  | zmetodocarga | zsubsesion + "!" + znodo2 + ".SSE_M4THROW"                            | SSP_RECIBO_NOMINA{"!"}SSP_REC_PERIOD{".SSE_M4THROW"}                  |
| 44  | zOUTPUT      | zraiz + "OUTPUT"                                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"OUTPUT"}                       |
| 45  | zRESULT      | zraiz + "RESULT"                                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"RESULT"}                       |
| 46  | zHTML        | zraiz + "HTTP_DATA_SOURCE"                                            | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"HTTP_DATA_SOURCE"}             |
| 68  | stResult     | ""                                                                    |                                                                       |
| 69  | iResult      | -1                                                                    | -1                                                                    |
| 70  | stResult2    | ""                                                                    |                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                 |
| --- | ------------ | ------------------------------------------------------------------ |
| 48  | m4:startpage | m4task=SSP_RECIBO_NOMINA                                           |
| 49  | m4:beginjob  |                                                                    |
| 50  | m4:datadef   | m4o=SSP_RECIBO_NOMINA; m4name=SSP_RECIBO_NOMINA                    |
| 60  | m4:exec      | m4method=SSP_RECIBO_NOMINA{"!"}SSP_REC_PERIOD{".SSE_M4THROW"}      |
| 61  | m4:outputdef |                                                                    |
| 61  | m4:param     | name=m4name0; value=SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"[*]"}        |
| 63  | m4:endjob    |                                                                    |
| 65  | m4:move      |                                                                    |
| 65  | m4:param     | name=SSP_RECIBO_NOMINA; value=SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"} |
| 83  | m4:item      | m4name=SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"HTTP_DATA_SOURCE"}   |
| 86  | m4:endpage   |                                                                    |

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 53  | setItem   | zsubsesion,znodo2,"","SSE_DT_ACCRUED_P",zpaga  |
| 54  | setItem   | zsubsesion,znodo2,"","SSE_RECIBO_HTML","1"     |
| 55  | setItem   | zsubsesion,znodo2,"","ID_CURRENCY_PAR",zmoneda |
| 56  | setItem   | zsubsesion,znodo2,"","SSP_PATH",pathReports    |
| 57  | setItem   | zsubsesion,znodo2,"","SCO_SEL_PAY_P",zrevision |
| 73  | getItem   | "",zsubsesion,znodo,"","RESULT"                |
| 74  | getItem   | "",zsubsesion,znodo,"","OUTPUT"                |
| 75  | getItem   | "",zsubsesion,znodo,"","HTTP_DATA_SOURCE"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                   |
| --- | ------------------------------------------------------------------------------------------------------ |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                    |
| 81  | &lt;% if (iResult == -1){%&gt;                                                                         |
| 82  | &lt;%}else{%&gt;                                                                                       |
| 34  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";             |
| 35  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                    |
| 36  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                   |
| 40  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!" + znodo2 + ".SSE_M4THROW"; |
| 45  | expresión de cálculo/transformación: String zRESULT = zraiz + "RESULT";                                |
| 46  | expresión de cálculo/transformación: String zHTML = zraiz + "HTTP_DATA_SOURCE";                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 9   | /css/estilo_sse.css             |
| 10  | /libreria/funciones_sse.js      |
| 11  | /libreria/clase_val_entradas.js |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g2/espanol/sse_g2_rec.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_rec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 8   | Recibo                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 14  | estado          | getParameter(request,"estado")    |
| 18  | z_paga          | getParameter(request,"z_paga")    |
| 20  | zmoneda         | getParameter(request,"zmoneda")   |
| 21  | zrevision       | getParameter(request,"zrevision") |
| 22  | znmpay          | getParameter(request,"znmpay")    |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 14  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    |
| 18  | zpaga        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga")    |
| 20  | zmoneda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda")   |
| 21  | zrevision    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrevision") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrevision") |
| 22  | znmpay       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpay")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpay")    |
| 27  | zsubsesion   | "SSP_RECIBO_NOMINA"                                                   | SSP_RECIBO_NOMINA                                                     |
| 28  | zmeta4object | "SSP_RECIBO_NOMINA"                                                   | SSP_RECIBO_NOMINA                                                     |
| 29  | znodo        | "SSE_RECIBO"                                                          | SSE_RECIBO                                                            |
| 30  | znodo2       | "SSP_REC_PERIOD"                                                      | SSP_REC_PERIOD                                                        |
| 35  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"[*]"}                               |
| 36  | zraiz        | zsubsesion + "!" + znodo + "."                                        | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}                                 |
| 37  | zmove        | znodo + ":" + znodo + "[FIRST]"                                       | SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"}                                  |
| 41  | zmetodocarga | zsubsesion + "!" + znodo2 + ".SSE_M4THROW"                            | SSP_RECIBO_NOMINA{"!"}SSP_REC_PERIOD{".SSE_M4THROW"}                  |
| 45  | zOUTPUT      | zraiz + "OUTPUT"                                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"OUTPUT"}                       |
| 46  | zRESULT      | zraiz + "RESULT"                                                      | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"RESULT"}                       |
| 47  | zHTML        | zraiz + "HTTP_DATA_SOURCE"                                            | SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"HTTP_DATA_SOURCE"}             |
| 70  | stResult     | ""                                                                    |                                                                       |
| 71  | iResult      | -1                                                                    | -1                                                                    |
| 72  | stResult2    | ""                                                                    |                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                 |
| --- | ------------ | ------------------------------------------------------------------ |
| 49  | m4:startpage | m4task=SSP_RECIBO_NOMINA                                           |
| 50  | m4:beginjob  |                                                                    |
| 51  | m4:datadef   | m4o=SSP_RECIBO_NOMINA; m4name=SSP_RECIBO_NOMINA                    |
| 62  | m4:exec      | m4method=SSP_RECIBO_NOMINA{"!"}SSP_REC_PERIOD{".SSE_M4THROW"}      |
| 63  | m4:outputdef |                                                                    |
| 63  | m4:param     | name=m4name0; value=SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"[*]"}        |
| 65  | m4:endjob    |                                                                    |
| 67  | m4:move      |                                                                    |
| 67  | m4:param     | name=SSP_RECIBO_NOMINA; value=SSE_RECIBO{":"}SSE_RECIBO{"[FIRST]"} |
| 85  | m4:item      | m4name=SSP_RECIBO_NOMINA{"!"}SSE_RECIBO{"."}{"HTTP_DATA_SOURCE"}   |
| 88  | m4:endpage   |                                                                    |

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 54  | setItem   | zsubsesion,znodo2,"","SSE_DT_ACCRUED_P",zpaga  |
| 55  | setItem   | zsubsesion,znodo2,"","SCO_DT_ACCRUED_P",zpaga  |
| 56  | setItem   | zsubsesion,znodo2,"","SSE_RECIBO_HTML","1"     |
| 57  | setItem   | zsubsesion,znodo2,"","ID_CURRENCY_PAR",zmoneda |
| 58  | setItem   | zsubsesion,znodo2,"","SSP_PATH",pathReports    |
| 59  | setItem   | zsubsesion,znodo2,"","SCO_SEL_PAY_P",zrevision |
| 75  | getItem   | "",zsubsesion,znodo,"","RESULT"                |
| 76  | getItem   | "",zsubsesion,znodo,"","OUTPUT"                |
| 77  | getItem   | "",zsubsesion,znodo,"","HTTP_DATA_SOURCE"      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                   |
| --- | ------------------------------------------------------------------------------------------------------ |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                    |
| 83  | &lt;% if (iResult == -1){%&gt;                                                                         |
| 84  | &lt;%}else{%&gt;                                                                                       |
| 35  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";             |
| 36  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                    |
| 37  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                   |
| 41  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!" + znodo2 + ".SSE_M4THROW"; |
| 46  | expresión de cálculo/transformación: String zRESULT = zraiz + "RESULT";                                |
| 47  | expresión de cálculo/transformación: String zHTML = zraiz + "HTTP_DATA_SOURCE";                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 9   | /css/estilo_sse.css             |
| 10  | /libreria/funciones_sse.js      |
| 11  | /libreria/clase_val_entradas.js |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | /libreria/funciones_sse.js      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 10  | /libreria/funciones_sse.js      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 10  | /libreria/funciones_sse.js      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_rec.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
