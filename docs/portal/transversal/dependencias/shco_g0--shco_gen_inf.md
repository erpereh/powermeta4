# shco_gen_inf

Identificador: `shco_g0/shco_gen_inf.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_inf.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_inf.jsp) | `d53f3fca5b29ae9384fbda56baab91ee5c63d6c3aac6a29a6741b9f0a11b68d1` |     91 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_inf.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_inf.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 76  | " /&gt; " /&gt; " /&gt;  |
| 88  | "/&gt;                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 68  | form    | action= ; method=post; name=NombreFormulario; id=NombreFormulario                                                            |
| 77  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                      |
| 80  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                      |
| 83  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                      |
| 88  | input   | id=Back; name=back; tabindex=1; type=button; class=boton; onclick=window.close();; value=&lt;m4:label m4name=; htmlsafe=true |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal            |
| --- | --------------- | ------------------------- |
| 23  | _M4TAGLET       | getParameter("_M4TAGLET") |
| 24  | _M4OBJECT       | getParameter("_M4OBJECT") |
| 25  | ERROR           | getParameter("ERROR")     |

| L   | Variable          | Expresión fuente                                                      | Resolución estática parcial                                                                               |
| --- | ----------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 23  | zsubsesion        | request.getParameter("_M4TAGLET")                                     | request.getParameter("_M4TAGLET")                                                                         |
| 24  | zmeta4object      | request.getParameter("_M4OBJECT")                                     | request.getParameter("_M4OBJECT")                                                                         |
| 27  | znodo2            | "SHCO_GN_COMUNICATION"                                                | SHCO_GN_COMUNICATION                                                                                      |
| 28  | zoutputdef        | zmeta4object + "!" + znodo2 + "[*]"                                   | request.getParameter("_M4OBJECT"){"!"}SHCO_GN_COMUNICATION{"[*]"}                                         |
| 29  | zraiz             | zmeta4object + "!" + znodo2 + "."                                     | request.getParameter("_M4OBJECT"){"!"}SHCO_GN_COMUNICATION{"."}                                           |
| 30  | zshco_TEXT        | znodo2 + ":" + zraiz + "SHCO_TEXT"                                    | SHCO_GN_COMUNICATION{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_COMUNICATION{"."}{"SHCO_TEXT"}     |
| 31  | znodo3            | "SHCO_GN_LOGS"                                                        | SHCO_GN_LOGS                                                                                              |
| 32  | zoutputdef3       | zmeta4object + "!" + znodo3 + "[*]"                                   | request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[*]"}                                                 |
| 33  | zmove3            | znodo3 + ":" +znodo3 + "[FIRST]"                                      | SHCO_GN_LOGS{":"}SHCO_GN_LOGS{"[FIRST]"}                                                                  |
| 34  | zraiz3            | znodo3 + ":" + zmeta4object + "!" + znodo3 + "."                      | SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"."}                                  |
| 35  | zcomun3           | znodo3 + ":" + zmeta4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + "." | SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[&amp;VAR.m4lix]"}{"."}              |
| 37  | znodolabel        | "SHCO_GN_LABEL"                                                       | SHCO_GN_LABEL                                                                                             |
| 38  | zoutputdeflabel   | zmeta4object + "!" + znodolabel + "[*]"                               | request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LABEL{"[*]"}                                                |
| 39  | zmovelabel        | znodolabel + ":" + znodolabel + "[FIRST]"                             | SHCO_GN_LABEL{":"}SHCO_GN_LABEL{"[FIRST]"}                                                                |
| 40  | zraizlabel        | znodolabel + ":" + zmeta4object + "!" + znodolabel + "."              | SHCO_GN_LABEL{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LABEL{"."}                                |
| 42  | zcampoID          | "SHCO_LOG_TYPE"                                                       | SHCO_LOG_TYPE                                                                                             |
| 43  | zcampoNombre      | "SHCO_LOG_TEXT"                                                       | SHCO_LOG_TEXT                                                                                             |
| 44  | zIdPk             | zcomun3 + zcampoID                                                    | SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[&amp;VAR.m4lix]"}{"."}SHCO_LOG_TYPE |
| 45  | zNPk              | zcomun3 + zcampoNombre                                                | SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[&amp;VAR.m4lix]"}{"."}SHCO_LOG_TEXT |
| 47  | zSHCOLBCLOSEERROR | zraizlabel + "SHCO_LB_CLOSE_ERROR"                                    | SHCO_GN_LABEL{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLOSE_ERROR"}         |
| 60  | zcount3           | 0                                                                     | 0                                                                                                         |
| 65  | zcountv3          | String.valueOf(zcount3)                                               | String.valueOf(zcount3)                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 49  | m4:startpage | m4task=request.getParameter("_M4TAGLET")                                                                                                           |
| 49  | m4:beginjob  |                                                                                                                                                    |
| 51  | m4:datadef   | m4o=request.getParameter("_M4OBJECT"); m4name=request.getParameter("_M4OBJECT"); m4find=true                                                       |
| 53  | m4:datadef   | m4o=request.getParameter("_M4OBJECT"); m4name=request.getParameter("_M4OBJECT")                                                                    |
| 55  | m4:outputdef | m4alias=SHCO_GN_COMUNICATION                                                                                                                       |
| 55  | m4:param     | name=m4name0; value=request.getParameter("_M4OBJECT"){"!"}SHCO_GN_COMUNICATION{"[*]"}                                                              |
| 56  | m4:outputdef | m4alias=SHCO_GN_LOGS                                                                                                                               |
| 56  | m4:param     | name=m4name0; value=request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[*]"}                                                                      |
| 57  | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                                                                              |
| 57  | m4:param     | name=m4name0; value=request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LABEL{"[*]"}                                                                     |
| 58  | m4:endjob    |                                                                                                                                                    |
| 59  | m4:move      |                                                                                                                                                    |
| 59  | m4:param     | name=request.getParameter("_M4OBJECT"); value=SHCO_GN_LOGS{":"}SHCO_GN_LOGS{"[FIRST]"}                                                             |
| 67  | m4:label     | m4name=zSHCOLBTITERROR; jsafe=true                                                                                                                 |
| 72  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                              |
| 73  | m4:item      | m4varname=zTipErr; m4name=SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[&amp;VAR.m4lix]"}{"."}SHCO_LOG_TYPE; htmlsafe=true |
| 85  | m4:item      | m4name=SHCO_GN_LOGS{":"}request.getParameter("_M4OBJECT"){"!"}SHCO_GN_LOGS{"[&amp;VAR.m4lix]"}{"."}SHCO_LOG_TEXT; htmlsafe=true                    |
| 91  | m4:endpage   |                                                                                                                                                    |

| L   | Operación | Argumentos literales       |
| --- | --------- | -------------------------- |
| 63  | getCount  | znodo3,zmeta4object,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función             | Argumentos |
| --- | ------------------- | ---------- |
| 15  | m4getFocusFirstTime |            |

| L   | Condición / acción / mensaje literal                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------- |
| 16  | if (zNumber == 0 &amp;&amp; self.screenTop&gt;0) { zNumber++;window.focus();}                                                |
| 50  | &lt;%if (zerrornivel2.equals("1")){%&gt;                                                                                     |
| 52  | &lt;%}else{%&gt;                                                                                                             |
| 75  | &lt;%if (zTipErr.equals("-1")){%&gt;                                                                                         |
| 78  | &lt;%}else if (zTipErr.equals("1")){%&gt;                                                                                    |
| 81  | &lt;%}else{%&gt;                                                                                                             |
| 28  | expresión de cálculo/transformación: String zoutputdef = zmeta4object + "!" + znodo2 + "[*]";                                |
| 29  | expresión de cálculo/transformación: String zraiz = zmeta4object + "!" + znodo2 + ".";                                       |
| 30  | expresión de cálculo/transformación: String zshco_TEXT = znodo2 + ":" + zraiz + "SHCO_TEXT";                                 |
| 32  | expresión de cálculo/transformación: String zoutputdef3 = zmeta4object + "!" + znodo3 + "[*]";                               |
| 33  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                       |
| 34  | expresión de cálculo/transformación: String zraiz3 = znodo3 + ":" + zmeta4object + "!" + znodo3 + ".";                       |
| 35  | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zmeta4object + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."; |
| 38  | expresión de cálculo/transformación: String zoutputdeflabel = zmeta4object + "!" + znodolabel + "[*]";                       |
| 39  | expresión de cálculo/transformación: String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";                          |
| 40  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zmeta4object + "!" + znodolabel + ".";           |
| 44  | expresión de cálculo/transformación: String zIdPk = zcomun3 + zcampoID;                                                      |
| 45  | expresión de cálculo/transformación: String zNPk = zcomun3 + zcampoNombre;                                                   |
| 47  | expresión de cálculo/transformación: String zSHCOLBCLOSEERROR = zraizlabel + "SHCO_LB_CLOSE_ERROR";                          |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 9   | ../shco_g0/shco_gen_taglib.jsp |
| 11  | ../shco_g0/shco_gen_bag.jsp    |
| 11  | ../shco_g0/shco_gen_css.jsp    |
| 48  | shco_gen_label.jsp             |
| 77  | ../files_gif/ic_err.jsp        |
| 80  | ../files_gif/ic_warnig.jsp     |
| 83  | ../files_gif/ic_info.jsp       |

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 68  |                                |
| 9   | ../shco_g0/shco_gen_taglib.jsp |
| 11  | ../shco_g0/shco_gen_bag.jsp    |
| 11  | ../shco_g0/shco_gen_css.jsp    |
| 48  | shco_gen_label.jsp             |
| 77  | ../files_gif/ic_err.jsp        |
| 80  | ../files_gif/ic_warnig.jsp     |
| 83  | ../files_gif/ic_info.jsp       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                          |
| ------ | --- | ------------------------------ | ---------- | ---------------------------------------------------------- |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md) |
| BASE   | 11  | ../shco_g0/shco_gen_bag.jsp    | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)       |
| BASE   | 11  | ../shco_g0/shco_gen_css.jsp    | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)       |
| BASE   | 48  | shco_gen_label.jsp             | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)   |
| BASE   | 77  | ../files_gif/ic_err.jsp        | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)               |
| BASE   | 80  | ../files_gif/ic_warnig.jsp     | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md)         |
| BASE   | 83  | ../files_gif/ic_info.jsp       | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)             |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md) |
| BASE   | 11  | ../shco_g0/shco_gen_bag.jsp    | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)       |
| BASE   | 11  | ../shco_g0/shco_gen_css.jsp    | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)       |
| BASE   | 48  | shco_gen_label.jsp             | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)   |
| BASE   | 77  | ../files_gif/ic_err.jsp        | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)               |
| BASE   | 80  | ../files_gif/ic_warnig.jsp     | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md)         |
| BASE   | 83  | ../files_gif/ic_info.jsp       | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_inf.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
