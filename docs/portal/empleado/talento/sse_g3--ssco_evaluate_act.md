# ssco_evaluate_act

Identificador: `sse_g3/ssco_evaluate_act.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                             | Ámbito | Diccionario                                                                                  |
| --------------- | --------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.ssco_pro  | Procesando datos                  | COLL   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | CYC    | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | IBER   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_pro  | Procesando datos                  | BASE   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | COLL   | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | CYC    | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | IBER   | [translations/ess_mss_gen_es.properties:L200](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_wait | Por favor, espere unos instantes. | BASE   | [translations/ess_mss_gen_es.properties:L199](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | COLL   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | CYC    | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | IBER   | [translations/ess_mss_gen_es.properties:L198](../../referencias/literales/ess_mss_gen_es.md) |
| Title.ssco_act  | Actualización                     | BASE   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluate_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluate_act.jsp) | `87d5a69eb5cb5d6b9d8808305905ff15b438f35f76449879558e38ae10c94353` |     55 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluate_act.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluate_act.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave    | Acceso literal                             |
| --- | ------------------ | ------------------------------------------ |
| 13  | estado             | getParameter(request,"estado")             |
| 14  | zinicios           | getParameter(request,"zinicios")           |
| 17  | ordinal            | getParameter(request,"ordinal")            |
| 18  | pos                | getParameter(request,"pos")                |
| 20  | ordinal            | getParameter(request,"ordinal")            |
| 21  | SCO_EMPLOYEE_COMM  | getParameter(request,"SCO_EMPLOYEE_COMM")  |
| 22  | SCO_EMPLOYEE_AGREE | getParameter(request,"SCO_EMPLOYEE_AGREE") |

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                    |
| --- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 13  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             |
| 14  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           |
| 17  | zordinal            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")            |
| 18  | pos                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pos")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pos")                |
| 20  | ordinal             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")            |
| 21  | zSCO_EMPLOYEE_COMM  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_COMM")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_COMM")  |
| 22  | zSCO_EMPLOYEE_AGREE | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_AGREE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_AGREE") |
| 24  | zsubsesion          | "SSCO_H_EVALUTE"                                                               | SSCO_H_EVALUTE                                                                 |
| 25  | zmeta4object        | zsubsesion                                                                     | SSCO_H_EVALUTE                                                                 |
| 26  | znodo               | "SSCO_EVALUATOR_TEMP"                                                          | SSCO_EVALUATOR_TEMP                                                            |
| 27  | zmetodo             | zsubsesion + "!" + znodo + ".SSCO_ACT_EVALUATE"                                | SSCO_H_EVALUTE{"!"}SSCO_EVALUATOR_TEMP{".SSCO_ACT_EVALUATE"}                   |
| 39  | zredireccion        | "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp"                          | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                    |
| --- | ------------ | ----------------------------------------------------------------------------------------------------- |
| 29  | m4:startpage | m4task=SSCO_H_EVALUTE                                                                                 |
| 29  | m4:beginjob  |                                                                                                       |
| 30  | m4:datadef   | m4o=SSCO_H_EVALUTE; m4name=SSCO_H_EVALUTE                                                             |
| 31  | m4:exec      | m4method=SSCO_H_EVALUTE{"!"}SSCO_EVALUATOR_TEMP{".SSCO_ACT_EVALUATE"}                                 |
| 32  | m4:param     | name=ARG_ORDINAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal")           |
| 33  | m4:param     | name=ARG_EMP_AG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_AGREE") |
| 34  | m4:param     | name=ARG_EMP_CO; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_COMM")  |
| 37  | m4:endjob    |                                                                                                       |
| 50  | m4:endpage   |                                                                                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                   |
| --- | ------------------------------------------------------------------------------------------------------ |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";}                                       |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                |
| 27  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ACT_EVALUATE"; |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 7   | ../../sse_generico/sgco_gen_inc.jsp          |
| 8   | ../../sse_generico/sse_generico_trans.jsp    |

| L   | Destino / recurso                                   |
| --- | --------------------------------------------------- |
| 9   | /css/estilo_sse.css                                 |
| 10  | /libreria/funciones_sse.js                          |
| 11  | /libreria/func_eval.js                              |
| 1   | ../../sse_generico/sse_generico_taglib.jsp          |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp        |
| 7   | ../../sse_generico/sgco_gen_inc.jsp                 |
| 8   | ../../sse_generico/sse_generico_trans.jsp           |
| 39  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                          | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | --------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp          | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp        | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                 | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp           | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 10  | /libreria/funciones_sse.js                          | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 11  | /libreria/func_eval.js                              | contextual | [libreria/func_eval.js](../../transversal/dependencias/libreria--func_eval.md)                                |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp          | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp        | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 7   | ../../sse_generico/sgco_gen_inc.jsp                 | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 8   | ../../sse_generico/sse_generico_trans.jsp           | física     | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 39  | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp | ausente    | P06                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluate_act.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
