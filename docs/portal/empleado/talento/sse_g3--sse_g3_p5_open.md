# sse_g3_p5_open

Identificador: `sse_g3/sse_g3_p5_open.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                               | Ámbito | Diccionario                                                                       |
| --------------------- | ----------------------------------- | ------ | --------------------------------------------------------------------------------- |
| ev_ess.LinkHistEvOpen | Mis procesos de evaluación actuales | BASE   | [translations/ess_ev_es.properties:L87](../../referencias/literales/ess_ev_es.md) |
| ev_ess.LinkHistEvOpen | Mis procesos de evaluación actuales | BASE   | [translations/sse_g_es.properties:L69](../../referencias/literales/sse_g_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p5_open.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_open.jsp) | `f0cae30f2de40d0359d2d0aa74bdd471f2e72f0ea93dddfcd7435e9ba6ac05ec` |     34 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p5_open.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_open.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 15  | estado          | getParameter(request,"estado")   |
| 16  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 15  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 16  | zinicios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 29  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | /sse_g3/sse_ev_trans.jsp                           |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 26  | ../sse_g3_p5_open_body.jsp                         |
| 27  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 11  | /css/estilo_sse.css                                |
| 12  | /libreria/funciones_sse.js                         |
| 13  | /libreria/funciones_doc.js                         |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | /sse_g3/sse_ev_trans.jsp                           |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 26  | ../sse_g3_p5_open_body.jsp                         |
| 27  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 26  | ../sse_g3_p5_open_body.jsp                         | física     | [sse_g3/sse_g3_p5_open_body.jsp](sse_g3--sse_g3_p5_open_body.md)                                              |
| BASE   | 27  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |
| BASE   | 12  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 13  | /libreria/funciones_doc.js                         | contextual | [libreria/funciones_doc.js](../../transversal/dependencias/libreria--funciones_doc.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 26  | ../sse_g3_p5_open_body.jsp                         | física     | [sse_g3/sse_g3_p5_open_body.jsp](sse_g3--sse_g3_p5_open_body.md)                                              |
| BASE   | 27  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p5_open.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
