# Lista de selección

Identificador: `sse_generico/generico_lista.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_lista.jsp) | `45647320d002efd565e5341f34b64b7935d5d6aa611f46be96c9ee8e24031cd3` |    112 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_lista.jsp)   | `45647320d002efd565e5341f34b64b7935d5d6aa611f46be96c9ee8e24031cd3` |    112 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_lista.jsp) | `45647320d002efd565e5341f34b64b7935d5d6aa611f46be96c9ee8e24031cd3` |    112 |
| BASE / español    | [sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_lista.jsp)                             | `cb65421ae7f7e91befb2e0c47dcb838d4f5b33f955ee9cd187edb9e0434cbfc3` |    112 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_lista.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Lista de selección       |
| 89  | $M4ITEM0$                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                     |
| --- | ------- | ----------------------------------------------------------------------------- |
| 73  | form    | id=lista; onsubmit=m4seleccionlista();                                        |
| 77  | img     | src=/iconos/noname_listado_63_80.gif; width=63; height=80                     |
| 85  | input   | type=text; name=filtro; id=filtro; size=20; onkeyup=m4listafiltrado()         |
| 90  | select  | id=itemlist; size=10; ondblclick=m4listaseleccion()                           |
| 97  | option  | value=$M4ITEM1$                                                               |
| 104 | img     | alt=Aceptar; src=/iconos/espanol/boton_aceptar_85_20.gif; height=20; width=85 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 18  | estado          | getParameter(request,"estado")    |
| 19  | subsesion       | getParameter(request,"subsesion") |
| 20  | idm4o           | getParameter(request,"idm4o")     |
| 21  | nodo            | getParameter(request,"nodo")      |
| 22  | nfilas          | getParameter(request,"nfilas")    |
| 23  | itemvalor       | getParameter(request,"itemvalor") |
| 24  | itemid          | getParameter(request,"itemid")    |
| 25  | titulo          | getParameter(request,"titulo")    |

| L   | Variable     | Expresión fuente                                                       | Resolución estática parcial                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | estado       | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                 |
| 19  | zsubsesion   | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion") | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion")                                                                              |
| 20  | zmeta4object | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")     | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")                                                                                  |
| 21  | znodo        | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")                                                                                   |
| 22  | znfilas      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")                                                                                 |
| 23  | zitemvalor   | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemvalor") | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemvalor")                                                                              |
| 24  | zitemid      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemid")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemid")                                                                                 |
| 25  | ztitulo      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")                                                                                 |
| 37  | ztipocarga   | "ALL"                                                                  | ALL                                                                                                                                                 |
| 47  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                       | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!"}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[*]"} |
| 48  | zraiz        | zsubsesion + "!" + znodo + "."                                         | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!"}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}   |
| 53  | zmetodo      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                         | CARGA:{}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!SSE_PRINCIPAL.CARGA"}                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                  |
| --- | ----------------------------------------------------------------------------------------------------- |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                   |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";            |
| 48  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                   |
| 49  | expresión de cálculo/transformación: znodo = zmeta4object + "!" + znodo;                              |
| 53  | expresión de cálculo/transformación: String zmetodo = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"; |
| 57  | expresión de cálculo/transformación: zitemvalor = zraiz + zitemvalor;                                 |
| 58  | expresión de cálculo/transformación: zitemid = zraiz + zitemid;                                       |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 8   | /css/estilo_sse.css                     |
| 10  | /libreria/funciones_sse.js              |
| 11  | /libreria/menu.js                       |
| 77  | /iconos/noname_listado_63_80.gif        |
| 104 | /iconos/espanol/boton_aceptar_85_20.gif |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_lista.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_lista.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Lista de selección       |
| 89  | $M4ITEM0$                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                     |
| --- | ------- | ----------------------------------------------------------------------------- |
| 73  | form    | id=lista; onsubmit=m4seleccionlista();                                        |
| 77  | img     | src=/iconos/noname_listado_63_80.gif; width=63; height=80                     |
| 85  | input   | type=text; name=filtro; id=filtro; size=20; onkeyup=m4listafiltrado()         |
| 90  | select  | id=itemlist; size=10; ondblclick=m4listaseleccion()                           |
| 97  | option  | value=$M4ITEM1$                                                               |
| 104 | img     | alt=Aceptar; src=/iconos/espanol/boton_aceptar_85_20.gif; height=20; width=85 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 18  | estado          | getParameter(request,"estado")    |
| 19  | subsesion       | getParameter(request,"subsesion") |
| 20  | idm4o           | getParameter(request,"idm4o")     |
| 21  | nodo            | getParameter(request,"nodo")      |
| 22  | nfilas          | getParameter(request,"nfilas")    |
| 23  | itemvalor       | getParameter(request,"itemvalor") |
| 24  | itemid          | getParameter(request,"itemid")    |
| 25  | titulo          | getParameter(request,"titulo")    |

| L   | Variable     | Expresión fuente                                                       | Resolución estática parcial                                                                                                                         |
| --- | ------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | estado       | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                 |
| 19  | zsubsesion   | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion") | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion")                                                                              |
| 20  | zmeta4object | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")     | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")                                                                                  |
| 21  | znodo        | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")                                                                                   |
| 22  | znfilas      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")                                                                                 |
| 23  | zitemvalor   | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemvalor") | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemvalor")                                                                              |
| 24  | zitemid      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemid")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemid")                                                                                 |
| 25  | ztitulo      | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")    | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")                                                                                 |
| 37  | ztipocarga   | "ALL"                                                                  | ALL                                                                                                                                                 |
| 47  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                       | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!"}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[*]"} |
| 48  | zraiz        | zsubsesion + "!" + znodo + "."                                         | tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!"}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}   |
| 53  | zmetodo      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                         | CARGA:{}tcom.meta4.taglib.util.M4SafeRequest.getParameter(request,"subsesion"){"!SSE_PRINCIPAL.CARGA"}                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                  |
| --- | ----------------------------------------------------------------------------------------------------- |
| 26  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                   |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";            |
| 48  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                   |
| 49  | expresión de cálculo/transformación: znodo = zmeta4object + "!" + znodo;                              |
| 53  | expresión de cálculo/transformación: String zmetodo = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"; |
| 57  | expresión de cálculo/transformación: zitemvalor = zraiz + zitemvalor;                                 |
| 58  | expresión de cálculo/transformación: zitemid = zraiz + zitemid;                                       |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 8   | /css/estilo_sse.css                     |
| 10  | /libreria/funciones_sse.js              |
| 11  | /libreria/menu.js                       |
| 77  | /iconos/noname_listado_63_80.gif        |
| 104 | /iconos/espanol/boton_aceptar_85_20.gif |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 11  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| CYC    | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 11  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| IBER   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 11  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |
| BASE   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| BASE   | 11  | /libreria/menu.js          | ausente    | P06                                                                                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_lista.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
