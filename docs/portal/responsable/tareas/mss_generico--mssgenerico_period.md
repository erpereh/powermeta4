# Lista de selección

Identificador: `mss_generico/mssgenerico_period.jsp`. Perfil: **responsable**. Dominio: **tareas**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_generico/espanol/mssgenerico_period.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_period.jsp) | `cf024f364d7e6efe925d540b83da8812bf52631e7bdd81d061fb6d01855d0790` |     95 |
| IBER / español    | [m4custom/IBER/mss_generico/espanol/mssgenerico_period.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_generico/espanol/mssgenerico_period.jsp) | `cf024f364d7e6efe925d540b83da8812bf52631e7bdd81d061fb6d01855d0790` |     95 |
| BASE / español    | [mss_generico/espanol/mssgenerico_period.jsp](../../../../clon_portal/portal/mss_generico/espanol/mssgenerico_period.jsp)                             | `cf024f364d7e6efe925d540b83da8812bf52631e7bdd81d061fb6d01855d0790` |     95 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_generico/espanol/mssgenerico_period.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_generico/espanol/mssgenerico_period.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Lista de selección       |
| 76  | $M4ITEM1$                |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                           |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58  | img     | src=/iconos/noname_listado.gif; width=63; height=80                                                                                                                                                                                                 |
| 64  | form    | name=menuform; onsubmit=seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value);                                       |
| 67  | input   | type=text; name=entry; size=25; onkeyup=javascript:obj1.bldUpdate();                                                                                                                                                                                |
| 77  | select  | name=itemlist; size=10; ondblclick=seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value);                            |
| 81  | option  | value=$M4ITEM1$                                                                                                                                                                                                                                     |
| 88  | input   | type=button; name=Aceptar; id=Aceptar; value=Aceptar; onclick=seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value); |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 18  | zidPeriod       | getParameter(request,"zidPeriod") |
| 25  | nodo            | getParameter(request,"nodo")      |
| 26  | itemValor       | getParameter(request,"itemValor") |
| 27  | itemId          | getParameter(request,"itemId")    |
| 28  | idm4o           | getParameter(request,"idm4o")     |
| 29  | nfilas          | getParameter(request,"nfilas")    |
| 30  | tarea           | getParameter(request,"tarea")     |
| 31  | titulo          | getParameter(request,"titulo")    |

| L   | Variable      | Expresión fuente                                                      | Resolución estática parcial                                                                                                                                                                                      |
| --- | ------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | zidPeriod     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidPeriod") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidPeriod")                                                                                                                                            |
| 25  | znodo         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")                                                                                                                                                 |
| 26  | zitemValor    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemValor") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemValor")                                                                                                                                            |
| 27  | zitemId       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemId")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemId")                                                                                                                                               |
| 28  | zMeta4Object  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o")                                                                                                                                                |
| 29  | znfilas       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")                                                                                                                                               |
| 30  | ztarea        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tarea")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tarea")                                                                                                                                                |
| 31  | ztitulo       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo")                                                                                                                                               |
| 32  | zznodo        | zMeta4Object + "!" + znodo                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo")                                                                           |
| 33  | zraiz         | zMeta4Object + "!" + znodo + "."                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}                                                                      |
| 34  | zoutputdef    | zMeta4Object + "!" + znodo + "[*]"                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[*]"}                                                                    |
| 35  | zitembisValor | zraiz + zitemValor                                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemValor") |
| 36  | zitembisId    | zraiz + zitemId                                                       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemId")    |
| 37  | zitem         | zitemValor                                                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemValor")                                                                                                                                            |
| 38  | zmove         | znodo + "[FIRST]"                                                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[FIRST]"}                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                                                                |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41  | m4:startpage | m4task=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tarea")                                                                                                                                                          |
| 42  | m4:beginjob  |                                                                                                                                                                                                                                   |
| 43  | m4:datadef   | m4o=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"); m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tarea")                                                                                   |
| 44  | m4:exec      | m4method=CARGA:SSE_EVALUATOR!M4T_LIST_HR_PERIOD.CARGA_DATOS                                                                                                                                                                       |
| 45  | m4:param     | name=ARG_ID_PERIOD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidPeriod")                                                                                                                                   |
| 47  | m4:outputdef |                                                                                                                                                                                                                                   |
| 48  | m4:param     | name=M4NAME0; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[*]"}                                                                 |
| 50  | m4:endjob    |                                                                                                                                                                                                                                   |
| 51  | m4:move      |                                                                                                                                                                                                                                   |
| 52  | m4:param     | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"[FIRST]"}                                                                         |
| 78  | m4:iterator  | m4rows=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas")                                                                                                                                                         |
| 79  | m4:param     | name=M4ITEM0; value=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(_zitembisValor_)                                                                                                                                      |
| 80  | m4:param     | name=M4ITEM1; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o"){"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo"){"."}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemId") |
| 93  | m4:endpage   |                                                                                                                                                                                                                                   |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 19  | if ((zidPeriod == null))                                                                     |
| 32  | expresión de cálculo/transformación: String zznodo = zMeta4Object + "!" + znodo;             |
| 33  | expresión de cálculo/transformación: String zraiz = zMeta4Object + "!" + znodo + ".";        |
| 34  | expresión de cálculo/transformación: String zoutputdef = zMeta4Object + "!" + znodo + "[*]"; |
| 35  | expresión de cálculo/transformación: String zitembisValor = zraiz + zitemValor;              |
| 36  | expresión de cálculo/transformación: String zitembisId = zraiz + zitemId;                    |
| 38  | expresión de cálculo/transformación: String zmove = znodo + "[FIRST]";                       |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                |
| --- | -------------------------------- |
| 8   | /estilo/estilo_sse.css           |
| 10  | /libreria/funciones_sse.js       |
| 11  | /libreria/funciones_sselistas.js |
| 58  | /iconos/noname_listado.gif       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                       | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 10  | /libreria/funciones_sse.js       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 11  | /libreria/funciones_sselistas.js | ausente    | P06                                                                                                                                                                            |
| IBER   | 10  | /libreria/funciones_sse.js       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 11  | /libreria/funciones_sselistas.js | ausente    | P06                                                                                                                                                                            |
| BASE   | 10  | /libreria/funciones_sse.js       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 11  | /libreria/funciones_sselistas.js | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_generico/mssgenerico_period.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
