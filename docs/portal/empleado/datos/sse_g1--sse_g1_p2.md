# Life events

Identificador: `sse_g1/sse_g1_p2.jsp`. Perfil: **empleado**. Dominio: **datos**.

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

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p2.jsp) | `fa8e5256759ab37da85b9c8b2c80046b31c524a15cb77cb5649e938848c6b109` |     95 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p2.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p2.jsp)   | `fa8e5256759ab37da85b9c8b2c80046b31c524a15cb77cb5649e938848c6b109` |     95 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p2.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p2.jsp) | `fa8e5256759ab37da85b9c8b2c80046b31c524a15cb77cb5649e938848c6b109` |     95 |
| BASE / español    | [sse_g1/espanol/sse_g1_p2.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p2.jsp)                             | `fa8e5256759ab37da85b9c8b2c80046b31c524a15cb77cb5649e938848c6b109` |     95 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Life events                                                                                                                                                          |
| 41  | Life events                                                                                                                                                          |
| 54  | ¿ Has cmabiado de piso? Se te También ponemos a tu disposición un completo asistente que te ayudará por todas las páginas que pueden estar afectadas por ese cambio. |
| 73  | En esta sección puedes guiarte ...                                                                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47  | a       | href=; onclick=history.back();                                                                                                                                                              |
| 48  | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; width=52; height=44; onmouseover=m4sombra(this); onmouseout=m4oscuridad(this); align=right                                                 |
| 69  | a       | tabindex=1; style=cursor:hand; href=sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1                                                                                                               |
| 70  | img     | alt=Datos personales; src=/iconos/noname_familia_157_125.gif; width=100; height=100; onmouseover=m4luztotal (this); onmouseout=m4oscuridad(this); style=cursor:hand; href=sse_g1_p1_mod.jsp |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 19  | estado          | getParameter(request,"estado") |

| L   | Variable | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 19  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                |
| --- | --------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){ |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 28  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp      |
| 92  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 9   | /css/estilo_sse.css                                |
| 11  | /libreria/funciones_sse.js                         |
| 48  | /iconos/noname_volver_52_44.gif                    |
| 69  | sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1          |
| 70  | /iconos/noname_familia_157_125.gif                 |
| 70  | sse_g1_p1_mod.jsp                                  |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 28  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 31  | ../../sse_generico/espanol/generico_links.jsp      |
| 92  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 69  | sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1          | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| COLL   | 70  | sse_g1_p1_mod.jsp                                  | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| COLL   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 69  | sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1          | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| CYC    | 70  | sse_g1_p1_mod.jsp                                  | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| CYC    | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| CYC    | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 69  | sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1          | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| IBER   | 70  | sse_g1_p1_mod.jsp                                  | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| IBER   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 11  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 69  | sse_g1_p1_mod.jsp?estado=11&amp;WizMode=1          | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| BASE   | 70  | sse_g1_p1_mod.jsp                                  | física     | [sse_g1/sse_g1_p1_mod.jsp](sse_g1--sse_g1_p1_mod.md)                                                                                                                           |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 28  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 31  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 92  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
