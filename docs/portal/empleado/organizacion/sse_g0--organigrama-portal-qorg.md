# Organigrama

Identificador: `sse_g0/organigrama-portal-QOrg.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g0/espanol/organigrama-portal-QOrg.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/espanol/organigrama-portal-QOrg.jsp) | `5d3347f71c682a632be78dc82f17b6052a7936b7d5f68cb3abe04116f6a54f3d` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_g0/organigrama-portal-QOrg.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/organigrama-portal-QOrg.jsp)                 | `b76e704d3cd1d23a35e26fc89b89d35c9945ef07f7bb1c052238a80343445fc9` |    141 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g0/espanol/organigrama-portal-QOrg.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/espanol/organigrama-portal-QOrg.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 1   | ../organigrama-portal-QOrg.jsp |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 1   | ../organigrama-portal-QOrg.jsp |

## Versión 2: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/sse_g0/organigrama-portal-QOrg.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/organigrama-portal-QOrg.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 25  | Organigrama              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                             |
| --- | ------- | --------------------------------------------------------------------- |
| 79  | img     | class=cargandorotate; src=/QOrg/img/carga.png                         |
| 83  | input   | class=gen-fle; id=inbusq; name=inbusq; type=text; value=; data-cont=0 |
| 84  | a       | class=gen-fle flecha-izq; id=inbusqmenos; href=#                      |
| 85  | a       | class=gen-fle flecha-dere; id=inbusqmas; href=#                       |
| 87  | a       | class=gen-fle flecha-menos; href=#; onclick=zoomea(null,'-');         |
| 88  | a       | class=gen-fle flecha-mas; href=#; onclick=zoomea(null,'+');           |
| 89  | a       | class=gen-fle flecha-guardar; href=#; onclick=window.print();         |
| 91  | a       | class=gen-fle flecha-down; href=#                                     |
| 92  | a       | class=gen-fle flecha-right; href=#                                    |
| 93  | a       | class=gen-fle flecha-up; href=#                                       |
| 94  | a       | class=gen-fle flecha-left; href=#                                     |
| 96  | a       | class=gen-fle flecha-inicio; href=#                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 13  | unidad          | getParameter(request,"unidad")       |
| 14  | nombreunidad    | getParameter(request,"nombreunidad") |
| 15  | tipo            | getParameter(request,"tipo")         |
| 16  | version         | getParameter(request,"version")      |

| L   | Variable        | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | --------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 13  | unidad          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"unidad")       |
| 14  | nombreunidad    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreunidad") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreunidad") |
| 15  | tipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")         |
| 16  | version         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"version")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"version")      |
| 31  | zsubsesion      | "CSP_ORGANIGRAMA"                                                        | CSP_ORGANIGRAMA                                                          |
| 32  | zmeta4object    | "CSP_ORGANIGRAMA"                                                        | CSP_ORGANIGRAMA                                                          |
| 33  | nodoArbol       | "CSP_ARBOL_ORGANIGRAMA"                                                  | CSP_ARBOL_ORGANIGRAMA                                                    |
| 34  | znodoResultado  | "CSP_RESULTADO"                                                          | CSP_RESULTADO                                                            |
| 36  | zoutputdefArbol | zsubsesion + "!" + nodoArbol + "[*]"                                     | CSP_ORGANIGRAMA{"!"}CSP_ARBOL_ORGANIGRAMA{"[*]"}                         |
| 37  | zmoveArbol      | nodoArbol + ":" + nodoArbol + "[FIRST]"                                  | CSP_ARBOL_ORGANIGRAMA{":"}CSP_ARBOL_ORGANIGRAMA{"[FIRST]"}               |
| 39  | ztipocarga      | "1"                                                                      | 1                                                                        |
| 40  | zmetodocarga    | zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA"                                | CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA"}                            |
| 42  | arbol           | ""                                                                       |                                                                          |
| 43  | jQuery          | ""                                                                       |                                                                          |
| 44  | divs            | ""                                                                       |                                                                          |
| 45  | imagenes        | ""                                                                       |                                                                          |
| 47  | vDATOS          | ""                                                                       |                                                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                     |
| --- | ------------ | -------------------------------------------------------------------------------------- |
| 50  | m4:startpage | m4task=CSP_ORGANIGRAMA                                                                 |
| 52  | m4:beginjob  |                                                                                        |
| 53  | m4:datadef   | m4o=CSP_ORGANIGRAMA; m4name=CSP_ORGANIGRAMA                                            |
| 63  | m4:exec      | m4method=CSP_ORGANIGRAMA{"!CSP_ORGANIGRAMA.CSP_CARGA"}                                 |
| 63  | m4:param     | name=ARG_TIPO; value=1                                                                 |
| 64  | m4:outputdef | m4alias=CSP_ARBOL_ORGANIGRAMA                                                          |
| 64  | m4:param     | name=m4name0; value=CSP_ORGANIGRAMA{"!"}CSP_ARBOL_ORGANIGRAMA{"[*]"}                   |
| 65  | m4:endjob    |                                                                                        |
| 67  | m4:move      |                                                                                        |
| 67  | m4:param     | name=CSP_ORGANIGRAMA; value=CSP_ARBOL_ORGANIGRAMA{":"}CSP_ARBOL_ORGANIGRAMA{"[FIRST]"} |

| L   | Operación | Argumentos literales                             |
| --- | --------- | ------------------------------------------------ |
| 57  | setItem   | zsubsesion,zsubsesion,"","CSP_P_UNIDAD",unidad   |
| 58  | setItem   | zsubsesion,zsubsesion,"","CSP_P_TIPO",tipo       |
| 59  | setItem   | zsubsesion,zsubsesion,"","CSP_P_VERSION",version |
| 74  | getItem   | nodoArbol,zmeta4object,nodoArbol,"","VDATOS"     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                  |
| --- | ----------------------------------------------------------------------------------------------------- |
| 36  | expresión de cálculo/transformación: String zoutputdefArbol = zsubsesion + "!" + nodoArbol + "[*]";   |
| 37  | expresión de cálculo/transformación: String zmoveArbol = nodoArbol + ":" + nodoArbol + "[FIRST]";     |
| 40  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_ORGANIGRAMA.CSP_CARGA"; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso           |
| --- | --------------------------- |
| 26  | /QOrg/css/Treant.css        |
| 27  | /QOrg/css/basic-example.css |
| 28  | /QOrg/css/QOrg.css          |
| 79  | /QOrg/img/carga.png         |
| 84  | #                           |
| 85  | #                           |
| 87  | #                           |
| 88  | #                           |
| 89  | #                           |
| 91  | #                           |
| 92  | #                           |
| 93  | #                           |
| 94  | #                           |
| 96  | #                           |
| 101 | /QOrg/js/jquery.min.js      |
| 102 | /QOrg/js/raphael.js         |
| 103 | /QOrg/js/Treant.js          |
| 129 | /QOrg/js/QOrg.js            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                                        |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------------------ |
| CYC    | 1   | ../organigrama-portal-QOrg.jsp | física     | [sse_g0/organigrama-portal-QOrg.jsp](sse_g0--organigrama-portal-qorg.md) |
| CYC    | 1   | ../organigrama-portal-QOrg.jsp | física     | [sse_g0/organigrama-portal-QOrg.jsp](sse_g0--organigrama-portal-qorg.md) |
| CYC    | 101 | /QOrg/js/jquery.min.js         | contextual | &#96;m4custom/CYC/QOrg/js/jquery.min.js&#96;                             |
| CYC    | 102 | /QOrg/js/raphael.js            | contextual | &#96;m4custom/CYC/QOrg/js/raphael.js&#96;                                |
| CYC    | 103 | /QOrg/js/Treant.js             | contextual | [QOrg/js/Treant.js](../../transversal/dependencias/qorg--js--treant.md)  |
| CYC    | 129 | /QOrg/js/QOrg.js               | contextual | [QOrg/js/QOrg.js](../../transversal/dependencias/qorg--js--qorg.md)      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/organigrama-portal-QOrg.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
