# Descripción del producto de formación

Identificador: `sse_g3/sse_g3_p3_mod3.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p3_mod3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_mod3.jsp) | `d6c6c40940436f57563da0722046b4ee75e84c794baf5393808fc574faccc0a6` |    233 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p3_mod3.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p3_mod3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                    |
| --- | ----------------------------------------------------------- |
| 8   | Descripción del producto de formación                       |
| 34  | [valor dinámico][valor dinámico]                            |
| 120 | Selección del producto de formación                         |
| 127 | Desde esta página puede solicitar el producto seleccionado. |
| 145 | Descripción del producto de formación                       |
| 149 | Producto tipo de formación:                                 |
| 153 | Producto de formación:                                      |
| 159 | Certificado:                                                |
| 161 | Pagina WEB:                                                 |
| 169 | Información adicional                                       |
| 175 | Inicio preferido                                            |
| 190 | Fin preferido                                               |
| 200 | Lenguaje                                                    |
| 203 | $M4ITEM2$                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 124 | img     | src=/iconos/noname_inscripciones_124_125.gif; width=100; height=100; alt=Descripción del curso; border=0                              |
| 134 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario       |
| 135 | input   | type=hidden; id=TAG; name=TAG; value=SSE_TRAINING_REQUEST                                                                             |
| 136 | input   | type=hidden; id=REC; name=REC; value=                                                                                                 |
| 137 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                         |
| 138 | input   | type=hidden; id=NOD; name=NOD; value=SSE_TRAINING_REQUEST                                                                             |
| 139 | input   | type=hidden; id=SCO_ID_TRTBREQ; name=SCO_ID_TRTBREQ; value=&lt;%=zidtrtb%&gt;                                                         |
| 140 | input   | type=hidden; id=SCO_NM_TRAINING; name=SCO_NM_TRAINING; value=&lt;m4:item m4name=; htmlsafe=true                                       |
| 141 | input   | type=hidden; id=SCO_NM_TYPE; name=SCO_NM_TYPE; value=Producto                                                                         |
| 179 | input   | class=fuenteformulario; type=text; name=SCO_SD_PREF; id=SCO_SD_PREF; title=Escribe la fecha inicial; maxlength=10; size=10            |
| 180 | a       | href=javascript:m4calendario(m4objeto('SCO_SD_PREF','NombreFormulario'))                                                              |
| 181 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de incio                                         |
| 194 | input   | class=fuenteformulario; type=text; name=SCO_ED_PREF; id=SCO_ED_PREF; title=Escribe la fecha inicial; maxlength=10; size=10            |
| 195 | a       | href=javascript:m4calendario(m4objeto('SCO_ED_PREF','NombreFormulario'))                                                              |
| 196 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de incio                                         |
| 204 | select  | id=STD_ID_LANGUAGE; class=Fuenteformulario; name=STD_ID_LANGUAGE                                                                      |
| 208 | option  | value=$M4ITEM3$                                                                                                                       |
| 223 | a       | style=cursor:hand; href=javascript:NombreFormulario.submit(); title=Enviar                                                            |
| 224 | img     | alt=Enviar; title=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; onmouseover= m4sombra(this); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 17  | estado          | getParameter(request,"estado")      |
| 18  | znmproducto     | getParameter(request,"znmproducto") |
| 19  | znmpt           | getParameter(request,"znmpt")       |
| 20  | zpath           | getParameter(request,"zpath")       |
| 21  | zinicios        | getParameter(request,"zinicios")    |
| 22  | zidtrtb         | getParameter(request,"zidtrtb")     |
| 23  | zid             | getParameter(request,"zid")         |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                 |
| --- | ---------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 17  | estado           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")          |
| 18  | znmproducto      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto")     |
| 19  | znmpt            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")           |
| 20  | zpath            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpath")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zpath")           |
| 21  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")        |
| 22  | zidtrtb          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb")         |
| 23  | zid              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zid")             |
| 41  | zsubsesion       | "SSE_TRAINING_REQUEST"                                                  | SSE_TRAINING_REQUEST                                                        |
| 42  | zMeta4Object     | "SSE_TRAINING_REQUEST"                                                  | SSE_TRAINING_REQUEST                                                        |
| 44  | znodo3           | "M4T_LENGUAJES"                                                         | M4T_LENGUAJES                                                               |
| 45  | znodo5           | "M4T_DESC_PRODUCTO"                                                     | M4T_DESC_PRODUCTO                                                           |
| 47  | ztipocarga       | "DP"                                                                    | DP                                                                          |
| 48  | zventanas        | "20"                                                                    | 20                                                                          |
| 49  | zregistroinicial | 0                                                                       | 0                                                                           |
| 51  | zventana         | 0                                                                       | 0                                                                           |
| 52  | zregistrofinal   | zregistroinicial + zventana - 1                                         | 0{zventana - 1}                                                             |
| 57  | zoutputdef3      | zsubsesion + "!" + znodo3 + "[*]"                                       | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                               |
| 58  | zmove3           | znodo3 + ":" + znodo3 + "[" + zregistroinicial + "]"                    | M4T_LENGUAJES{":"}M4T_LENGUAJES{"["}0{"]"}                                  |
| 59  | zlectura3        | zsubsesion + "!" + znodo3                                               | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES                                      |
| 60  | zraiz3           | zsubsesion + "!" + znodo3 + "."                                         | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"."}                                 |
| 61  | ziterator3       | znodo3 + ":" + zsubsesion + "!" + znodo3                                | M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES                    |
| 63  | zoutputdef5      | zsubsesion + "!" + znodo5 + "[*]"                                       | SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO{"[*]"}                           |
| 64  | zmove5           | znodo5 + ":" + znodo5 + "[" + zregistroinicial + "]"                    | M4T_DESC_PRODUCTO{":"}M4T_DESC_PRODUCTO{"["}0{"]"}                          |
| 65  | zlectura5        | zsubsesion + "!" + znodo5                                               | SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO                                  |
| 66  | zraiz5           | zsubsesion + "!" + znodo5 + "."                                         | SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO{"."}                             |
| 67  | ziterator5       | znodo5 + ":" + zsubsesion + "!" + znodo5                                | M4T_DESC_PRODUCTO{":"}SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO            |
| 71  | zMETODOCARGA     | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                          | CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                        |
| 75  | zSTDNMLENGUAGE   | zraiz3 + "STD_N_LANGUAGE"                                               | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"."}{"STD_N_LANGUAGE"}               |
| 76  | zSTDIDLENGUAGE   | zraiz3 + "STD_ID_LENGUAGE"                                              | SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"."}{"STD_ID_LENGUAGE"}              |
| 78  | zNCERTIFICATION  | zraiz5 + "STD_N_CERTIFICATION_TYPE"                                     | SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO{"."}{"STD_N_CERTIFICATION_TYPE"} |
| 79  | zHTTP            | zraiz5 + "SCO_HTTP_PATH"                                                | SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO{"."}{"SCO_HTTP_PATH"}            |
| 104 | zcount3          | 0                                                                       | 0                                                                           |
| 105 | zcount3i         | 0                                                                       | 0                                                                           |
| 114 | zcount3v         | String.valueOf(zcount3i)                                                | String.valueOf(zcount3i)                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------ |
| 85  | m4:startpage | m4task=SSE_TRAINING_REQUEST                                                                      |
| 87  | m4:beginjob  |                                                                                                  |
| 88  | m4:datadef   | m4o=SSE_TRAINING_REQUEST; m4name=SSE_TRAINING_REQUEST                                            |
| 97  | m4:exec      | m4method=CARGA:{}SSE_TRAINING_REQUEST{"!SSE_PRINCIPAL.CARGA"}                                    |
| 98  | m4:param     | name=TIPO_CARGA; value=DP                                                                        |
| 99  | m4:outputdef | m4alias=M4T_LENGUAJES                                                                            |
| 99  | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES{"[*]"}                                |
| 100 | m4:outputdef |                                                                                                  |
| 100 | m4:param     | name=m4name0; value=SSE_TRAINING_REQUEST{"!"}M4T_DESC_PRODUCTO{"[*]"}                            |
| 101 | m4:endjob    |                                                                                                  |
| 117 | m4:move      |                                                                                                  |
| 117 | m4:param     | name=SSE_TRAINING_REQUEST; value=M4T_LENGUAJES{":"}M4T_LENGUAJES{"["}0{"]"}                      |
| 160 | m4:item      | m4name=SSE_TRAINING_REQUEST!M4T_DESC_PRODUCTO.SCO_N_CERTIFICATION; htmlsafe=true                 |
| 205 | m4:iterator  | m4rows=String.valueOf(zcount3i); m4node=M4T_LENGUAJES{":"}SSE_TRAINING_REQUEST{"!"}M4T_LENGUAJES |
| 206 | m4:param     | name=m4item2; value=SSE_TRAINING_REQUEST!M4T_LENGUAJES.STD_N_LANGUAGE                            |
| 207 | m4:param     | name=m4item3; value=SSE_TRAINING_REQUEST!M4T_LENGUAJES.STD_ID_LANGUAGE                           |
| 231 | m4:endpage   |                                                                                                  |

| L   | Operación        | Argumentos literales              |
| --- | ---------------- | --------------------------------- |
| 92  | setItem          | zsubsesion,znodo5,"","SSE_ID",zid |
| 108 | getCount         | znodo3,zsubsesion,znodo3          |
| 112 | getCountInClient | znodo3,zsubsesion,znodo3          |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                       |
| --- | ---------------------------------------------------------------------------------------------------------- |
| 25  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                        |
| 52  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                 |
| 57  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";               |
| 58  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[" + zregistroinicial + "]"; |
| 59  | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                         |
| 60  | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                      |
| 61  | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;         |
| 63  | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";               |
| 64  | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5 + "[" + zregistroinicial + "]"; |
| 65  | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                         |
| 66  | expresión de cálculo/transformación: String zraiz5 = zsubsesion + "!" + znodo5 + ".";                      |
| 67  | expresión de cálculo/transformación: String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;         |
| 71  | expresión de cálculo/transformación: String zMETODOCARGA = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"; |
| 75  | expresión de cálculo/transformación: String zSTDNMLENGUAGE = zraiz3 + "STD_N_LANGUAGE";                    |
| 76  | expresión de cálculo/transformación: String zSTDIDLENGUAGE = zraiz3 + "STD_ID_LENGUAGE";                   |
| 78  | expresión de cálculo/transformación: String zNCERTIFICATION = zraiz5 + "STD_N_CERTIFICATION_TYPE";         |
| 79  | expresión de cálculo/transformación: String zHTTP = zraiz5 + "SCO_HTTP_PATH";                              |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp            |
| 31  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 32  | ../../sse_generico/espanol/generico_links.jsp      |
| 229 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 124 | /iconos/noname_inscripciones_124_125.gif                        |
| 134 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 180 | javascript:m4calendario(m4objeto(                               |
| 181 | /iconos/icono_calendario_14_18.gif                              |
| 195 | javascript:m4calendario(m4objeto(                               |
| 196 | /iconos/icono_calendario_14_18.gif                              |
| 223 | javascript:NombreFormulario.submit()                            |
| 224 | /iconos/icono_enviar_ess_36_36.gif                              |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 31  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 32  | ../../sse_generico/espanol/generico_links.jsp                   |
| 229 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 31  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 32  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 229 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 134 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                       |
| BASE   | 180 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                       |
| BASE   | 195 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                       |
| BASE   | 223 | javascript:NombreFormulario.submit()                            | dinámica   | P06                                                                                                       |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 31  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 32  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 229 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p3_mod3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
