# Descripción del puesto

Identificador: `sse_g3/sse_g3_p2_mod.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p2_mod.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2_mod.jsp) | `050229568ea8517fc00f088b3c6707acdf86ae3be23c12e78f1bc32434c5ee42` |    108 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p2_mod.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p2_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                          |
| --- | --------------------------------------------------------------------------------- |
| 8   | Descripción del puesto                                                            |
| 44  | Descripción del puesto                                                            |
| 47  | Consulta todos los detalles acerca de los puestos de trabajo. Movilidad interna " |
| 88  | Descripción del puesto: [valor dinámico]                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | img     | alt=Movilidad interna; title=Movilidad interna; src=/iconos/noname_puesto_144_100.gif; width=100; height=100                                                                                  |
| 50  | a       | class=enlacefuncional; title=Movilidad interna; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                |
| 54  | a       | class=enlacefuncional; tabindex=2; title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                  |
| 54  | a       | href=&lt;%=zDes%&gt;; target=; onclick=window.open(this.href, this.target,'width=700,height=700,resizable,scrollbars');return false;                                                          |
| 78  | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=nombreformulario; id=nombreformulario                                                               |
| 79  | input   | type=hidden; id=TAG; name=TAG; value=SSE_INT_MOVILITY                                                                                                                                         |
| 80  | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                 |
| 81  | input   | type=hidden; id=NOD; name=NOD; value=SSE_INT_MOVILITY                                                                                                                                         |
| 89  | a       | title=Movilidad interna; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                                       |
| 89  | img     | alt=Movilidad interna; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)             |
| 94  | a       | title=Solicitar movilidad; href=javascript:m4submit('nombreformulario');                                                                                                                      |
| 95  | img     | id=Enviar; alt=Solicitar movilidad; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 101 | input   | type=hidden; id=SCO_NM_RECRUITMENT; name=SCO_NM_RECRUITMENT; value=&lt;%=zSCONMRECRUITMENT%&gt;                                                                                               |
| 102 | input   | type=hidden; id=SCO_OR_RECRUIT_PR; name=SCO_OR_RECRUIT_PR; value=&lt;%=zSCOORRECRUITPR%&gt;                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 15  | estado          | getParameter(request,"estado")   |
| 16  | zinicios        | getParameter(request,"zinicios") |
| 17  | ord             | getParameter(request,"ord")      |

| L   | Variable          | Expresión fuente                                                         | Resolución estática parcial                                                                                 |
| --- | ----------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 15  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                          |
| 16  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 17  | zord              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord")                                             |
| 26  | zsubsesion        | "SSE_INT_MOVILITY"                                                       | SSE_INT_MOVILITY                                                                                            |
| 27  | zmeta4object      | "SSE_INT_MOVILITY"                                                       | SSE_INT_MOVILITY                                                                                            |
| 28  | znodo             | "M4T_RECRUIT_PRO"                                                        | M4T_RECRUIT_PRO                                                                                             |
| 29  | zregistroinicial  | Integer.valueOf(zord).intValue()                                         | Integer.valueOf(zord).intValue()                                                                            |
| 30  | zoutputdef        | zsubsesion + "!" + znodo + "["+zregistroinicial+"-"+zregistroinicial+"]" | SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zord).intValue()-Integer.valueOf(zord).intValue()] |
| 31  | zraiz             | znodo + ":" + zsubsesion + "!" + znodo + "."                             | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"."}                                               |
| 32  | zmove             | znodo + ":" + znodo + "["+zregistroinicial+"]"                           | M4T_RECRUIT_PRO{":"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zord).intValue()]                                   |
| 33  | zSTD_JOB_PATH     | zraiz + "STD_JOB_PATH"                                                   | M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"."}{"STD_JOB_PATH"}                               |
| 62  | zSCOJSDESCRIP     | ""                                                                       |                                                                                                             |
| 63  | zSCONMRECRUITMENT | ""                                                                       |                                                                                                             |
| 64  | zSCOORRECRUITPR   | ""                                                                       |                                                                                                             |
| 65  | zSTDNJOBCODE      | ""                                                                       |                                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                              |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 37  | m4:startpage | m4task=SSE_INT_MOVILITY                                                                                                         |
| 38  | m4:beginjob  |                                                                                                                                 |
| 39  | m4:datadef   | m4o=SSE_INT_MOVILITY; m4name=SSE_INT_MOVILITY                                                                                   |
| 39  | m4:outputdef | m4alias=M4T_RECRUIT_PRO                                                                                                         |
| 39  | m4:param     | name=m4name0; value=SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zord).intValue()-Integer.valueOf(zord).intValue()] |
| 40  | m4:endjob    |                                                                                                                                 |
| 41  | m4:move      |                                                                                                                                 |
| 41  | m4:param     | name=SSE_INT_MOVILITY; value=M4T_RECRUIT_PRO{":"}M4T_RECRUIT_PRO{"["}Integer.valueOf(zord).intValue()]                          |
| 42  | m4:item      | m4varname=zDes; m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"."}{"STD_JOB_PATH"}; htmlsafe=true             |
| 54  | m4:label     | m4name=M4T_RECRUIT_PRO{":"}SSE_INT_MOVILITY{"!"}M4T_RECRUIT_PRO{"."}{"STD_JOB_PATH"}; htmlsafe=true                             |
| 106 | m4:endpage   |                                                                                                                                 |

| L   | Operación | Argumentos literales                             |
| --- | --------- | ------------------------------------------------ |
| 70  | getItem   | znodo,zmeta4object,znodo,"","SCO_JS_DESCRIP"     |
| 71  | getItem   | znodo,zmeta4object,znodo,"","SCO_NM_RECRUITMENT" |
| 72  | getItem   | znodo,zmeta4object,znodo,"","SCO_OR_RECRUIT_PR"  |
| 73  | getItem   | znodo,zmeta4object,znodo,"","STD_N_JOB_CODE"     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                    |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                            |
| 51  | &lt;%if (zDes.equals("")){                                                                                                         |
| 53  | }else{%&gt;                                                                                                                        |
| 83  | &lt;%if (zSCOJSDESCRIP.equals("")){%&gt;                                                                                           |
| 86  | &lt;%}else{%&gt;                                                                                                                   |
| 30  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "["+zregistroinicial+"-"+zregistroinicial+"]"; |
| 31  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                  |
| 32  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";                                |
| 33  | expresión de cálculo/transformación: String zSTD_JOB_PATH = zraiz + "STD_JOB_PATH";                                                |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 24  | ../../sse_generico/espanol/generico_links.jsp      |
| 104 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 46  | /iconos/noname_puesto_144_100.gif                               |
| 50  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31       |
| 54  | &lt;%=zDes%&gt;                                                 |
| 78  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 89  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31       |
| 89  | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 94  | javascript:m4submit(                                            |
| 95  | /iconos/icono_enviar_ess_36_36.gif                              |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 24  | ../../sse_generico/espanol/generico_links.jsp                   |
| 104 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 104 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 50  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31       | ausente    | P06                                                                                                       |
| BASE   | 54  | &lt;%=zDes%&gt;                                                 | dinámica   | P06                                                                                                       |
| BASE   | 78  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 89  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31       | ausente    | P06                                                                                                       |
| BASE   | 94  | javascript:m4submit(                                            | dinámica   | P06                                                                                                       |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 104 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p2_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
