# Objetivo

Identificador: `sse_g3/sse_g3_p5_mod3.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p5_mod3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_mod3.jsp) | `390e189920d5a2a6a4071e06de933bc11af8a73239dfa0677dcabf9dfcc4690e` |    104 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p5_mod3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_mod3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                             |
| --- | ---------------------------------------------------- |
| 8   | Objetivo                                             |
| 66  | Objetivo: [valor dinámico]                           |
| 69  | Descripción del objetivo. Resultados de evaluaciones |
| 79  | Objetivo: [valor dinámico]                           |
| 88  | Unidad de medida: [valor dinámico]                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 68  | img     | alt=Resultados de evaluaciones; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100                                                                             |
| 72  | a       | class=enlacefuncional; title=Resultados de evaluaciones; href=javascript:history.back();                                                                                                   |
| 81  | a       | href=javascript:history.back();                                                                                                                                                            |
| 82  | img     | alt=Resultados de evaluaciones; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 90  | a       | href=javascript:history.back();                                                                                                                                                            |
| 91  | img     | alt=Resultados de evaluaciones; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 11  | estado          | getParameter(request,"estado") |
| 12  | id_obj          | getParameter(request,"id_obj") |
| 13  | id_mag          | getParameter(request,"id_mag") |

| L   | Variable        | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 11  | estado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |
| 12  | zidobj          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_obj") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_obj") |
| 13  | zidmag          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_mag") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_mag") |
| 24  | zsubsesion      | "SSE_H_EVALUATOR_HIST"                                             | SSE_H_EVALUATOR_HIST                                               |
| 25  | zmeta4object    | "SSE_H_EVALUATOR_HIST"                                             | SSE_H_EVALUATOR_HIST                                               |
| 26  | znodo           | "SSE_OBJETIVE"                                                     | SSE_OBJETIVE                                                       |
| 27  | ztipocarga      | "VIO"                                                              | VIO                                                                |
| 28  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                   | SSE_H_EVALUATOR_HIST{"!"}SSE_OBJETIVE{"[*]"}                       |
| 29  | zmove           | znodo + ":" + znodo + "[FIRST]"                                    | SSE_OBJETIVE{":"}SSE_OBJETIVE{"[FIRST]"}                           |
| 30  | ziterator       | znodo + ":" + zsubsesion + "!" + znodo                             | SSE_OBJETIVE{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_OBJETIVE             |
| 31  | zmetodocarga    | "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS"         | CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_VIS"}   |
| 49  | zSCOCOMMENTOBJ  | ""                                                                 |                                                                    |
| 50  | zSCOCOMMENTMAG  | ""                                                                 |                                                                    |
| 51  | zSCONMMAGNITUDE | ""                                                                 |                                                                    |
| 52  | zSCONMOBJECTIVE | ""                                                                 |                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                        |
| --- | ------------ | ------------------------------------------------------------------------- |
| 33  | m4:startpage | m4task=SSE_H_EVALUATOR_HIST                                               |
| 34  | m4:beginjob  |                                                                           |
| 35  | m4:datadef   | m4o=SSE_H_EVALUATOR_HIST; m4name=SSE_H_EVALUATOR_HIST                     |
| 42  | m4:exec      | m4method=CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_VIS"} |
| 42  | m4:param     | name=TIPO_CARGA; value=VIO                                                |
| 43  | m4:outputdef | m4alias=SSE_OBJETIVE                                                      |
| 43  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}SSE_OBJETIVE{"[*]"}          |
| 44  | m4:endjob    |                                                                           |
| 45  | m4:move      |                                                                           |
| 45  | m4:param     | name=SSE_H_EVALUATOR_HIST; value=SSE_OBJETIVE{":"}SSE_OBJETIVE{"[FIRST]"} |
| 102 | m4:endpage   |                                                                           |

| L   | Operación | Argumentos literales                           |
| --- | --------- | ---------------------------------------------- |
| 38  | setItem   | zsubsesion,znodo,"","SSE_ID_OBJECTIVE",zidobj  |
| 39  | setItem   | zsubsesion,znodo,"","SSE_ID_MAGNITUD",zidmag   |
| 53  | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE" |
| 54  | getItem   | znodo,zmeta4object,znodo,"","SCO_COMMENT_OBJ"  |
| 55  | getItem   | znodo,zmeta4object,znodo,"","SCO_COMMENT_MAG"  |
| 56  | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                        |
| 57  | if ((zSCOCOMMENTOBJ==null)&#124;&#124;(zSCOCOMMENTOBJ.equals(""))){                                                    |
| 60  | if ((zSCOCOMMENTMAG==null)&#124;&#124;(zSCOCOMMENTMAG.equals(""))){                                                    |
| 28  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                             |
| 29  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                   |
| 30  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                        |
| 31  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS"; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 18  | ../../sse_generico/espanol/menu_ess.jsp            |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 100 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 16  | /css/estilo_sse.css                                  |
| 17  | /libreria/funciones_sse.js                           |
| 68  | /iconos/noname_historial_evaluaciones_ess_93_100.gif |
| 72  | javascript:history.back();                           |
| 81  | javascript:history.back();                           |
| 82  | /iconos/icono_flecha_azul2_ess_11_9.gif              |
| 90  | javascript:history.back();                           |
| 91  | /iconos/icono_flecha_azul2_ess_11_9.gif              |
| 18  | ../../sse_generico/espanol/menu_ess.jsp              |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp      |
| 22  | ../../sse_generico/espanol/generico_links.jsp        |
| 100 | ../../sse_generico/espanol/generico_disclaimer.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 18  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 100 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 17  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 72  | javascript:history.back();                         | dinámica   | P06                                                                                                       |
| BASE   | 81  | javascript:history.back();                         | dinámica   | P06                                                                                                       |
| BASE   | 90  | javascript:history.back();                         | dinámica   | P06                                                                                                       |
| BASE   | 18  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 100 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p5_mod3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
