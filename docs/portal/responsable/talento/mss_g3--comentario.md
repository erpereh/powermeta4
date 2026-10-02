# comentario

Identificador: `mss_g3/comentario.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto      | Ámbito | Diccionario                                                                                  |
| ------------- | ---------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Ok     | Aceptar    | COLL   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Ok     | Aceptar    | CYC    | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Ok     | Aceptar    | IBER   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Ok     | Aceptar    | BASE   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Ok     | Aceptar    | BASE   | [translations/shco_g0_es.properties:L28](../../referencias/literales/shco_g0_es.md)          |
| Label.Comment | Comentario | COLL   | [translations/ess_mss_gen_es.properties:L108](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Comment | Comentario | CYC    | [translations/ess_mss_gen_es.properties:L108](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Comment | Comentario | IBER   | [translations/ess_mss_gen_es.properties:L108](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Comment | Comentario | BASE   | [translations/ess_mss_gen_es.properties:L108](../../referencias/literales/ess_mss_gen_es.md) |
| Label.Comment | Comentario | BASE   | [translations/ssco_etask_es.properties:L16](../../referencias/literales/ssco_etask_es.md)    |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/comentario.jsp](../../../../clon_portal/portal/mss_g3/espanol/comentario.jsp) | `e978c6c7479a7ad1bd4fcdc80c51237f9e46e00e2f6490d329a69de812707848` |     42 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/comentario.jsp](../../../../clon_portal/portal/mss_g3/espanol/comentario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                      |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 23  | form     | id=miform; name=miform; action=                                                                                                |
| 27  | textarea | rows=6; cols=40; id=SCO_DESCRIPTION; name=SCO_DESCRIPTION; title=Comentario; tabindex=1                                        |
| 34  | a        | onclick=javascript:AddComment();                                                                                               |
| 34  | img      | alt=JSP_EXPR_Tran.getProperty(; title=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_aceptar_mss_36_36.gif; height=36; width=36 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 7   | comment         | getParameter(request,"comment") |

| L   | Variable | Expresión fuente                                                    | Resolución estática parcial                                         |
| --- | -------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 7   | sComment | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"comment") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"comment") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 15  | AddComment |            |

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 5   | ../../mss_generico/espanol/menu_mss.jsp |
| 6   | /mss_g3/mss_ev_trans.jsp                |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 3   | /css/estilo_mss.css                     |
| 4   | /libreria/funciones_sse.js              |
| 10  | /css/estilo_sse.css                     |
| 11  | /libreria/funciones_sse.js              |
| 12  | /libreria/dom1.js                       |
| 34  | /iconos/icono_aceptar_mss_36_36.gif     |
| 5   | ../../mss_generico/espanol/menu_mss.jsp |
| 6   | /mss_g3/mss_ev_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                      |
| ------ | --- | --------------------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| BASE   | 5   | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 6   | /mss_g3/mss_ev_trans.jsp                | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                     |
| BASE   | 4   | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 11  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| BASE   | 12  | /libreria/dom1.js                       | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                   |
| BASE   | 5   | ../../mss_generico/espanol/menu_mss.jsp | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                       |
| BASE   | 6   | /mss_g3/mss_ev_trans.jsp                | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/comentario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
