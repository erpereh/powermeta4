# Conocimiento

Identificador: `sse_g3/sse_g3_p5_mod2.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p5_mod2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_mod2.jsp) | `e416c199d644967062628f3899bd45f2c8279185c4e5557f3fea14d687ea9f53` |    115 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p5_mod2.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p5_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 8   | Conocimiento                                              |
| 64  | Valores del conocimiento:                                 |
| 67  | Significados del conocimiento. Resultados de evaluaciones |
| 82  | Nivel                                                     |
| 83  | Significado                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 66  | img     | alt=Historial de evaluaciones; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100                                                                              |
| 70  | a       | class=enlacefuncional; title=Resultados de evaluaciones; href=javascript:history.back();                                                                                                   |
| 85  | a       | href=javascript:history.back();                                                                                                                                                            |
| 86  | img     | alt=Resultados de evaluaciones; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 11  | estado          | getParameter(request,"estado")  |
| 12  | id_cono         | getParameter(request,"id_cono") |
| 13  | id_re           | getParameter(request,"id_re")   |

| L   | Variable     | Expresión fuente                                                    | Resolución estática parcial                                                                         |
| --- | ------------ | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 11  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                  |
| 12  | znivel       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cono") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cono")                                 |
| 13  | zidre        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re")                                   |
| 25  | zsubsesion   | "SSE_H_EVALUATOR_HIST"                                              | SSE_H_EVALUATOR_HIST                                                                                |
| 26  | zmeta4object | "SSE_H_EVALUATOR_HIST"                                              | SSE_H_EVALUATOR_HIST                                                                                |
| 28  | znodo        | "SSE_KNOW_LEVEL"                                                    | SSE_KNOW_LEVEL                                                                                      |
| 29  | ztipocarga   | "VIS"                                                               | VIS                                                                                                 |
| 30  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                    | SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[*]"}                                                      |
| 31  | zmove        | znodo + ":" + znodo + "[FIRST]"                                     | SSE_KNOW_LEVEL{":"}SSE_KNOW_LEVEL{"[FIRST]"}                                                        |
| 32  | ziterator    | znodo + ":" + zsubsesion + "!" + znodo                              | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL                                          |
| 33  | zcomun       | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."   | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}                 |
| 34  | zraiz        | znodo + ":" + zsubsesion + "!"+ znodo+"."                           | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL.                                         |
| 35  | zSCONMLEVEL  | zcomun + "SCO_NM_LEVEL"                                             | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"} |
| 36  | zSCOMEANING  | zcomun + "SCO_MEANING"                                              | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}  |
| 37  | zSCONMEXTDKN | zraiz + "SCO_NM_EXTD_KN"                                            | SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL.{"SCO_NM_EXTD_KN"}                       |
| 39  | zmetodocarga | "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS"          | CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_VIS"}                                    |
| 54  | zcount       | 0                                                                   | 0                                                                                                   |
| 55  | zcounti      | 0                                                                   | 0                                                                                                   |
| 61  | zcountv      | String.valueOf(zcounti)                                             | String.valueOf(zcounti)                                                                             |
| 77  | zposicions   | "0"                                                                 | 0                                                                                                   |
| 78  | zcontrol     | 0                                                                   | 0                                                                                                   |
| 79  | zposicion    | 0                                                                   | 0                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 41  | m4:startpage | m4task=SSE_H_EVALUATOR_HIST                                                                                               |
| 42  | m4:beginjob  |                                                                                                                           |
| 43  | m4:datadef   | m4o=SSE_H_EVALUATOR_HIST; m4name=SSE_H_EVALUATOR_HIST                                                                     |
| 49  | m4:exec      | m4method=CARGA:{}SSE_H_EVALUATOR_HIST{"!M4T_H_EVALUATE_NORMAL.CARGA_VIS"}                                                 |
| 49  | m4:param     | name=TIPO_CARGA; value=VIS                                                                                                |
| 50  | m4:outputdef | m4alias=SSE_KNOW_LEVEL                                                                                                    |
| 50  | m4:param     | name=m4name0; value=SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[*]"}                                                        |
| 51  | m4:endjob    |                                                                                                                           |
| 52  | m4:move      |                                                                                                                           |
| 52  | m4:param     | name=SSE_H_EVALUATOR_HIST; value=SSE_KNOW_LEVEL{":"}SSE_KNOW_LEVEL{"[FIRST]"}                                             |
| 64  | m4:item      | m4name=SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL.{"SCO_NM_EXTD_KN"}; htmlsafe=true                       |
| 90  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                      |
| 97  | m4:item      | m4name=SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true |
| 98  | m4:item      | m4name=SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}; htmlsafe=true  |
| 102 | m4:item      | m4name=SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true |
| 103 | m4:item      | m4name=SSE_KNOW_LEVEL{":"}SSE_H_EVALUATOR_HIST{"!"}SSE_KNOW_LEVEL{"[&amp;VAR.m4lix]"}{"."}{"SCO_MEANING"}; htmlsafe=true  |
| 111 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 46  | setItem          | zsubsesion,znodo,"","SSE_ID_EXTD_KN",znivel |
| 58  | getCount         | znodo,zsubsesion,znodo                      |
| 59  | getCountInClient | znodo,zsubsesion,znodo                      |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 14  | if ((zidre==null)&#124;&#124;(zidre.equals(""))){ zidre = "0";}                                                         |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 76  | &lt;%if (zcount &gt; 0) {                                                                                               |
| 95  | &lt;%if (zcontrol==0){%&gt;                                                                                             |
| 100 | &lt;%}else{%&gt;                                                                                                        |
| 30  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 31  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 32  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                         |
| 33  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 34  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                         |
| 35  | expresión de cálculo/transformación: String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL";                                      |
| 36  | expresión de cálculo/transformación: String zSCOMEANING = zcomun + "SCO_MEANING";                                       |
| 37  | expresión de cálculo/transformación: String zSCONMEXTDKN = zraiz + "SCO_NM_EXTD_KN";                                    |
| 39  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS";  |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 19  | ../../sse_generico/espanol/menu_ess.jsp            |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 23  | ../../sse_generico/espanol/generico_links.jsp      |
| 109 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 17  | /css/estilo_sse.css                                  |
| 18  | /libreria/funciones_sse.js                           |
| 66  | /iconos/noname_historial_evaluaciones_ess_93_100.gif |
| 70  | javascript:history.back();                           |
| 85  | javascript:history.back();                           |
| 86  | /iconos/icono_flecha_azul2_ess_11_9.gif              |
| 19  | ../../sse_generico/espanol/menu_ess.jsp              |
| 22  | ../../sse_generico/espanol/generico_menusup.jsp      |
| 23  | ../../sse_generico/espanol/generico_links.jsp        |
| 109 | ../../sse_generico/espanol/generico_disclaimer.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 19  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 109 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 18  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 70  | javascript:history.back();                         | dinámica   | P06                                                                                                       |
| BASE   | 85  | javascript:history.back();                         | dinámica   | P06                                                                                                       |
| BASE   | 19  | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 22  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 23  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 109 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p5_mod2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
