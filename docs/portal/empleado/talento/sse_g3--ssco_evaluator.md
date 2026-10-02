# ssco_evaluator

Identificador: `sse_g3/ssco_evaluator.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave       | Texto      | Ámbito | Diccionario                                                                      |
| ----------- | ---------- | ------ | -------------------------------------------------------------------------------- |
| ev_ess.Eval | Evaluación | BASE   | [translations/ess_ev_es.properties:L5](../../referencias/literales/ess_ev_es.md) |
| ev_ess.Eval | Evaluación | BASE   | [translations/sse_g_es.properties:L5](../../referencias/literales/sse_g_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluator.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator.jsp) | `e8dbe6b860743ed7d14920d26211f635df6c7eed2b662ac8b853c318e1612f03` |    148 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluator.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                |
| --- | ------------------------------------------------------------------------------------------------------- |
| 83  | Esta seguro que quiere realizar el guardado definitivo, no se podra volver a realizar los cuestionarios |
| 84  | Aceptar                                                                                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                         |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| 84  | a       | style=color: white;; href=javascript:comprobar1(&lt;%=zcount30%&gt;,&lt;%=zcount10%&gt;,&lt;%=zcount40%&gt;,0,0); |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 24  | estado          | getParameter(request,"estado")   |
| 25  | guardar         | getParameter(request,"guardar")  |
| 26  | zcount30        | getParameter(request,"zcount30") |
| 28  | zcount10        | getParameter(request,"zcount10") |
| 30  | zcount40        | getParameter(request,"zcount40") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 24  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 25  | guardar            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"guardar")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"guardar")  |
| 26  | zcount30           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount30") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount30") |
| 28  | zcount10           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount10") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount10") |
| 30  | zcount40           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount40") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zcount40") |
| 33  | ztitle             | TranEss.getProperty("ev_ess.Eval")                                   | TranEss.getProperty("ev_ess.Eval")                                   |
| 34  | zpathVerComentario | "/sse_g3/espanol/ssco_viewcomment.jsp?comment="                      | /sse_g3/espanol/ssco_viewcomment.jsp?comment=                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 145 | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos              |
| --- | ---------- | ----------------------- |
| 42  | m4select   | select,idform,modo      |
| 62  | comprobar  | t,j,x,temporal,zCkNotes |
| 96  | comprobar1 | a,b,c,d,e               |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if(zcount30==null){zcount30 ="";}                                                                                                                                                                                                                             |
| 29  | if(zcount10==null){zcount10 ="";}                                                                                                                                                                                                                             |
| 31  | if(zcount40==null){zcount40 ="";}                                                                                                                                                                                                                             |
| 32  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";}                                                                                                                                                                                              |
| 39  | &lt;%if(guardar!=null){                                                                                                                                                                                                                                       |
| 43  | if (m4select.arguments.length == 3){                                                                                                                                                                                                                          |
| 46  | else {                                                                                                                                                                                                                                                        |
| 51  | if (typeof(oselect) == "object"){                                                                                                                                                                                                                             |
| 52  | switch(modo)                                                                                                                                                                                                                                                  |
| 54  | case "value" :                                                                                                                                                                                                                                                |
| 57  | alert("Modo no valido en m4select");                                                                                                                                                                                                                          |
| 98  | if(document.getElementById("CSP_MENSAJES").value!="completa;completa;completa;completa;completa;completa;completa;"){                                                                                                                                         |
| 106 | if(nombres[i]=="completa"){                                                                                                                                                                                                                                   |
| 109 | }else{                                                                                                                                                                                                                                                        |
| 111 | if(document.getElementById("ocultos"+j).value == nombres[i]){                                                                                                                                                                                                 |
| 120 | if(aux=="completa"){                                                                                                                                                                                                                                          |
| 122 | if(cuestionariosTerminados.search(cad[j])==-1){                                                                                                                                                                                                               |
| 124 | if(document.getElementById("ocultos"+x).value == cad[j]){                                                                                                                                                                                                     |
| 132 | if (mensaje=="") {                                                                                                                                                                                                                                            |
| 135 | alert(mensaje);                                                                                                                                                                                                                                               |
| 137 | }else{                                                                                                                                                                                                                                                        |
| 65  | expresión de cálculo/transformación: cono = cono + "Efectividad del Equipo&#124;$&#124;EST_DIR_3&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;";               |
| 66  | expresión de cálculo/transformación: cono = cono + "Estilos de Dirección&#124;$&#124;EST_DIR_2&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;";                 |
| 67  | expresión de cálculo/transformación: cono = cono + "Gestión del Orden y la Planificación&#124;$&#124;EST_DIR10&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;"; |
| 68  | expresión de cálculo/transformación: cono = cono + "Gestión del Tiempo&#124;$&#124;EST_DIR_5&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;";                   |
| 69  | expresión de cálculo/transformación: cono = cono + "Influencia en la Negociación&#124;$&#124;EST_DIR&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;";           |
| 70  | expresión de cálculo/transformación: cono = cono + "Nivel de Estrés&#124;$&#124;EST_DIR_4&#124;$&#124;undefined&#124;$&#124;undefined&#124;$&#124;&#124;$&#124;Objeto no definido Objeto.value no definido&#124;$&#124;01&#124;$&#124;";                      |
| 112 | expresión de cálculo/transformación: mensaje = mensaje + "El cuestionario " + document.getElementById("ocu"+j).value + " esta incompleto.\n";                                                                                                                 |
| 125 | expresión de cálculo/transformación: mensaje = mensaje + "El cuestionario " + document.getElementById("ocu"+x).value + " esta incompleto.\n";                                                                                                                 |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 21  | ../../sse_generico/espanol/menu_ess.jsp            |
| 22  | /sse_g3/sse_ev_trans.jsp                           |
| 90  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 91  | ../../sse_generico/espanol/generico_links.jsp      |
| 92  | ../ssco_evaluator_body.jsp                         |
| 93  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                       |
| --- | --------------------------------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                                                     |
| 10  | /libreria/funciones_filter.js                                                           |
| 11  | /libreria/funciones_sse_val.js                                                          |
| 12  | /libreria/funciones_sse.js                                                              |
| 13  | /libreria/func_eval.js                                                                  |
| 14  | /libreria/mootools.js                                                                   |
| 15  | /libreria/functions_eval.js                                                             |
| 16  | /libreria/meta4ajax.js                                                                  |
| 18  | /css/style_eval.css                                                                     |
| 19  | /css/bootstrap/css/bootstrap.min.css                                                    |
| 84  | javascript:comprobar1(&lt;%=zcount30%&gt;,&lt;%=zcount10%&gt;,&lt;%=zcount40%&gt;,0,0); |
| 136 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp                                    |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                              |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                            |
| 21  | ../../sse_generico/espanol/menu_ess.jsp                                                 |
| 22  | /sse_g3/sse_ev_trans.jsp                                                                |
| 34  | /sse_g3/espanol/ssco_viewcomment.jsp?comment=                                           |
| 90  | ../../sse_generico/espanol/generico_menusup.jsp                                         |
| 91  | ../../sse_generico/espanol/generico_links.jsp                                           |
| 92  | ../ssco_evaluator_body.jsp                                                              |
| 93  | ../../sse_generico/espanol/generico_disclaimer.jsp                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                              | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | --------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                              | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                            | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 21  | ../../sse_generico/espanol/menu_ess.jsp                                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 22  | /sse_g3/sse_ev_trans.jsp                                                                | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 90  | ../../sse_generico/espanol/generico_menusup.jsp                                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 92  | ../ssco_evaluator_body.jsp                                                              | física     | [sse_g3/ssco_evaluator_body.jsp](sse_g3--ssco_evaluator_body.md)                                              |
| BASE   | 93  | ../../sse_generico/espanol/generico_disclaimer.jsp                                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |
| BASE   | 10  | /libreria/funciones_filter.js                                                           | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                  |
| BASE   | 11  | /libreria/funciones_sse_val.js                                                          | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 12  | /libreria/funciones_sse.js                                                              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 13  | /libreria/func_eval.js                                                                  | contextual | [libreria/func_eval.js](../../transversal/dependencias/libreria--func_eval.md)                                |
| BASE   | 14  | /libreria/mootools.js                                                                   | contextual | &#96;libreria/mootools.js&#96;                                                                                |
| BASE   | 15  | /libreria/functions_eval.js                                                             | contextual | [libreria/functions_eval.js](../../transversal/dependencias/libreria--functions_eval.md)                      |
| BASE   | 16  | /libreria/meta4ajax.js                                                                  | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)                                |
| BASE   | 84  | javascript:comprobar1(&lt;%=zcount30%&gt;,&lt;%=zcount10%&gt;,&lt;%=zcount40%&gt;,0,0); | dinámica   | P06                                                                                                           |
| BASE   | 136 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp                                    | ausente    | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                              | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                            | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 21  | ../../sse_generico/espanol/menu_ess.jsp                                                 | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 22  | /sse_g3/sse_ev_trans.jsp                                                                | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 34  | /sse_g3/espanol/ssco_viewcomment.jsp?comment=                                           | contextual | [sse_g3/ssco_viewcomment.jsp](sse_g3--ssco_viewcomment.md)                                                    |
| BASE   | 90  | ../../sse_generico/espanol/generico_menusup.jsp                                         | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 91  | ../../sse_generico/espanol/generico_links.jsp                                           | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 92  | ../ssco_evaluator_body.jsp                                                              | física     | [sse_g3/ssco_evaluator_body.jsp](sse_g3--ssco_evaluator_body.md)                                              |
| BASE   | 93  | ../../sse_generico/espanol/generico_disclaimer.jsp                                      | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
