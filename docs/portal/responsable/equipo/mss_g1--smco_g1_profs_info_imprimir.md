# smco_g1_profs_info_imprimir

Identificador: `mss_g1/smco_g1_profs_info_imprimir.jsp`. Perfil: **responsable**. Dominio: **equipo**.

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

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                     | Ámbito | Diccionario                                                                         |
| ------------------ | ----------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.LblProfData | Volver a Datos Profesionales del Empleado | BASE   | [translations/smco_iv_es.properties:L74](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp) | `3955780ee81f59e776d0dcf95ac7e444f699e61ce676a8227794c448b57f608c` |     54 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp)   | `3955780ee81f59e776d0dcf95ac7e444f699e61ce676a8227794c448b57f608c` |     54 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp) | `3955780ee81f59e776d0dcf95ac7e444f699e61ce676a8227794c448b57f608c` |     54 |
| BASE / español    | [mss_g1/espanol/smco_g1_profs_info_imprimir.jsp](../../../../clon_portal/portal/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp)                             | `3955780ee81f59e776d0dcf95ac7e444f699e61ce676a8227794c448b57f608c` |     54 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/smco_g1_profs_info_imprimir.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42  | a       | title=JSP_EXPR_tranivMSS.getProperty(; href=javascript:m4submit('volver');; tabindex=6                                                                                                         |
| 42  | img     | alt=JSP_EXPR_tranivMSS.getProperty(; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 47  | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                           |
| 48  | input   | type=hidden; id=person; name=person; value=&lt;%=person%&gt;                                                                                                                                   |
| 49  | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=person_ord%&gt;                                                                                                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 12  | codigo_HTML     | getParameter(request,"codigo_HTML") |
| 13  | empleado        | getParameter(request,"empleado")    |
| 14  | periodo         | getParameter(request,"periodo")     |

| L   | Variable          | Expresión fuente                                                        | Resolución estática parcial                                                                   |
| --- | ----------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 4   | zsubsesion        | "SMCO_EMPLOYEE_PROFESIONAL_DATA"                                        | SMCO_EMPLOYEE_PROFESIONAL_DATA                                                                |
| 5   | zestado           | "11"                                                                    | 11                                                                                            |
| 6   | znodo             | "SMCO_EMPLOYEE_PROFESIONAL_DATA"                                        | SMCO_EMPLOYEE_PROFESIONAL_DATA                                                                |
| 7   | zcomun            | zsubsesion + "!" + znodo + "."                                          | SMCO_EMPLOYEE_PROFESIONAL_DATA{"!"}SMCO_EMPLOYEE_PROFESIONAL_DATA{"."}                        |
| 8   | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                        | SMCO_EMPLOYEE_PROFESIONAL_DATA{"!"}SMCO_EMPLOYEE_PROFESIONAL_DATA{"[*]"}                      |
| 9   | zmovecontrol      | znodo + "[FIRST]"                                                       | SMCO_EMPLOYEE_PROFESIONAL_DATA{"[FIRST]"}                                                     |
| 10  | zSMCOSENDEMAILLOG | zcomun + "SMCO_SEND_EMAIL_LOG"                                          | SMCO_EMPLOYEE_PROFESIONAL_DATA{"!"}SMCO_EMPLOYEE_PROFESIONAL_DATA{"."}{"SMCO_SEND_EMAIL_LOG"} |
| 12  | codigo_HTML       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"codigo_HTML") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"codigo_HTML")                       |
| 13  | person            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                          |
| 14  | person_ord        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| 24  | m4:page      | subsessionid=SMCO_EMPLOYEE_PROFESIONAL_DATA                                                                          |
| 25  | m4:datadef   | m4o=SMCO_EMPLOYEE_PROFESIONAL_DATA; m4name=SMCO_EMPLOYEE_PROFESIONAL_DATA                                            |
| 27  | m4:job       |                                                                                                                      |
| 28  | m4:exec      | node=SMCO_EMPLOYEE_PROFESIONAL_DATA; alias=delegate; method=SMCO_PRINT_FILE; m4object=SMCO_EMPLOYEE_PROFESIONAL_DATA |
| 29  | m4:param     | name=ARG_STRING_TO_PRINT; value=(codigo_HTML)                                                                        |
| 31  | m4:outputdef |                                                                                                                      |
| 31  | m4:param     | name=m4name0; value=SMCO_EMPLOYEE_PROFESIONAL_DATA{"!"}SMCO_EMPLOYEE_PROFESIONAL_DATA{"[*]"}                         |
| 34  | m4:move      |                                                                                                                      |
| 34  | m4:param     | name=SMCO_EMPLOYEE_PROFESIONAL_DATA; value=SMCO_EMPLOYEE_PROFESIONAL_DATA{"[FIRST]"}                                 |
| 40  | m4:item      | m4name=SMCO_EMPLOYEE_PROFESIONAL_DATA{"!"}SMCO_EMPLOYEE_PROFESIONAL_DATA{"."}{"SMCO_SEND_EMAIL_LOG"}                 |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                            |
| --- | ----------------------------------------------------------------------------------------------- |
| 7   | expresión de cálculo/transformación: String zcomun = zsubsesion + "!" + znodo + ".";            |
| 8   | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";      |
| 9   | expresión de cálculo/transformación: String zmovecontrol = znodo + "[FIRST]";                   |
| 10  | expresión de cálculo/transformación: String zSMCOSENDEMAILLOG = zcomun + "SMCO_SEND_EMAIL_LOG"; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 21  | ../../mss_generico/espanol/menu_mss.jsp |
| 22  | /mss_g3/smco_iv_trans.jsp               |

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 18  | /libreria/funciones_sse.js                               |
| 19  | /libreria/funciones_filter.js                            |
| 20  | /css/estilo_mss.css                                      |
| 42  | javascript:m4submit(                                     |
| 42  | /iconos/icono_entrar_ess_36_36.gif                       |
| 47  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp |
| 21  | ../../mss_generico/espanol/menu_mss.jsp                  |
| 22  | /mss_g3/smco_iv_trans.jsp                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                                                                                          |
| ------ | --- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| COLL   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| COLL   | 18  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)             |
| COLL   | 19  | /libreria/funciones_filter.js                            | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md) |
| COLL   | 42  | javascript:m4submit(                                     | dinámica   | P06                                                                                                                                                                                        |
| COLL   | 47  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp | ausente    | P06                                                                                                                                                                                        |
| COLL   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| COLL   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| CYC    | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| CYC    | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| CYC    | 18  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                     |
| CYC    | 19  | /libreria/funciones_filter.js                            | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                                                                                               |
| CYC    | 42  | javascript:m4submit(                                     | dinámica   | P06                                                                                                                                                                                        |
| CYC    | 47  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp | ausente    | P06                                                                                                                                                                                        |
| CYC    | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| CYC    | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| IBER   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| IBER   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| IBER   | 18  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)             |
| IBER   | 19  | /libreria/funciones_filter.js                            | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md); [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md) |
| IBER   | 42  | javascript:m4submit(                                     | dinámica   | P06                                                                                                                                                                                        |
| IBER   | 47  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp | ausente    | P06                                                                                                                                                                                        |
| IBER   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| IBER   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| BASE   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| BASE   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |
| BASE   | 18  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                     |
| BASE   | 19  | /libreria/funciones_filter.js                            | contextual | [libreria/funciones_filter.js](../../transversal/dependencias/libreria--funciones_filter.md)                                                                                               |
| BASE   | 42  | javascript:m4submit(                                     | dinámica   | P06                                                                                                                                                                                        |
| BASE   | 47  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp | ausente    | P06                                                                                                                                                                                        |
| BASE   | 21  | ../../mss_generico/espanol/menu_mss.jsp                  | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                                           |
| BASE   | 22  | /mss_g3/smco_iv_trans.jsp                                | contextual | [mss_g3/smco_iv_trans.jsp](../talento/mss_g3--smco_iv_trans.md)                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/smco_g1_profs_info_imprimir.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
