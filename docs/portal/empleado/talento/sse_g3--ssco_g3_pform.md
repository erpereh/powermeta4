# Documentación Publicada

Identificador: `sse_g3/ssco_g3_pform.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                    | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_PUBLICACIONES_ESS; m4:exec:CSP_PUBLICACIONES_ESS{"!CSP_PUBLICACIONES_ESS.CSP_CARGA"} | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_PUBLICACIONES_ESS; m4:exec:CSP_PUBLICACIONES_ESS{"!CSP_PUBLICACIONES_ESS.CSP_CARGA"} | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_PUBLICACIONES_ESS; m4:exec:CSP_PUBLICACIONES_ESS{"!CSP_PUBLICACIONES_ESS.CSP_CARGA"} | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/ssco_g3_pform.jsp) | `be7e0eb8c7d2b8589b9f561dec1ff0d5609d776e4e382a861556d6ac02580a30` |    111 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/ssco_g3_pform.jsp)   | `be7e0eb8c7d2b8589b9f561dec1ff0d5609d776e4e382a861556d6ac02580a30` |    111 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/ssco_g3_pform.jsp) | `be7e0eb8c7d2b8589b9f561dec1ff0d5609d776e4e382a861556d6ac02580a30` |    111 |
| BASE / español    | [sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_pform.jsp)                             | `ba1300005474851f298228c99f53ad41a8c55d4dfe7677a0a50c087c77230843` |     58 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/ssco_g3_pform.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 13  | Documentación Publicada  |
| 70  | Documentación Publicada: |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68  | img     | src=/iconos/contract_write_128.png; height=44; width=52; onmouseover=m4sombra(this); onmouseout=m4oscuridad(this)                                        |
| 79  | a       | href=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_PUBLICACIONES_ESS!CSP_PUBLICACIONES_ESS[&lt;%=m4lix%&gt;].DOC_CONTENT; target=_blank |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                  | Resolución estática parcial                                                                                       |
| --- | --------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 21  | zsubsesion      | "CSP_PUBLICACIONES_ESS"                                           | CSP_PUBLICACIONES_ESS                                                                                             |
| 22  | zmeta4object    | "CSP_PUBLICACIONES_ESS"                                           | CSP_PUBLICACIONES_ESS                                                                                             |
| 23  | zmetodocarga    | zsubsesion + "!CSP_PUBLICACIONES_ESS.CSP_CARGA"                   | CSP_PUBLICACIONES_ESS{"!CSP_PUBLICACIONES_ESS.CSP_CARGA"}                                                         |
| 24  | znodo           | "CSP_PUBLICACIONES_ESS"                                           | CSP_PUBLICACIONES_ESS                                                                                             |
| 27  | zraiz           | znodo + ":" + zsubsesion + "!" + znodo + "."                      | CSP_PUBLICACIONES_ESS{":"}CSP_PUBLICACIONES_ESS{"!"}CSP_PUBLICACIONES_ESS{"."}                                    |
| 28  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                  | CSP_PUBLICACIONES_ESS{"!"}CSP_PUBLICACIONES_ESS{"[*]"}                                                            |
| 29  | zcomun          | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | CSP_PUBLICACIONES_ESS{":"}CSP_PUBLICACIONES_ESS{"!"}CSP_PUBLICACIONES_ESS{"[&amp;VAR.m4lix]"}{"."}                |
| 32  | zN_FILE         | ""                                                                |                                                                                                                   |
| 33  | zDOC_CONTENT    | zcomun + "DOC_CONTENT"                                            | CSP_PUBLICACIONES_ESS{":"}CSP_PUBLICACIONES_ESS{"!"}CSP_PUBLICACIONES_ESS{"[&amp;VAR.m4lix]"}{"."}{"DOC_CONTENT"} |
| 45  | zcount          | 0                                                                 | 0                                                                                                                 |
| 46  | zcounti         | 0                                                                 | 0                                                                                                                 |
| 55  | zcountv         | String.valueOf(zcounti)                                           | String.valueOf(zcounti)                                                                                           |
| 59  | zregistrofinals | String.valueOf(zcounti - 1)                                       | String.valueOf(zcounti - 1)                                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                         |
| --- | ------------ | -------------------------------------------------------------------------- |
| 37  | m4:startpage | m4task=CSP_PUBLICACIONES_ESS                                               |
| 38  | m4:beginjob  |                                                                            |
| 39  | m4:datadef   | m4o=CSP_PUBLICACIONES_ESS; m4name=CSP_PUBLICACIONES_ESS                    |
| 40  | m4:exec      | m4method=CSP_PUBLICACIONES_ESS{"!CSP_PUBLICACIONES_ESS.CSP_CARGA"}         |
| 41  | m4:outputdef | m4alias=CSP_PUBLICACIONES_ESS                                              |
| 41  | m4:param     | name=m4name0; value=CSP_PUBLICACIONES_ESS{"!"}CSP_PUBLICACIONES_ESS{"[*]"} |
| 42  | m4:endjob    |                                                                            |
| 77  | m4:loop      | from=0; to=String.valueOf(zcounti - 1)                                     |
| 104 | m4:endpage   |                                                                            |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 50  | getCount         | znodo,zsubsesion,znodo               |
| 51  | getCountInClient | znodo,zsubsesion,znodo               |
| 84  | getItem          | znodo,zmeta4object,znodo,"","N_FILE" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 58  | if ((zcounti &gt; 0)) {                                                                                                 |
| 101 | &lt;% }else{%&gt;                                                                                                       |
| 23  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_PUBLICACIONES_ESS.CSP_CARGA";             |
| 27  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                       |
| 28  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 29  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 33  | expresión de cálculo/transformación: String zDOC_CONTENT = zcomun + "DOC_CONTENT";                                      |
| 59  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zcounti - 1);                              |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 103 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 14  | /css/estilo_sse.css                                                                                                                  |
| 17  | /libreria/funciones_sse.js                                                                                                           |
| 68  | /iconos/contract_write_128.png                                                                                                       |
| 79  | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_PUBLICACIONES_ESS!CSP_PUBLICACIONES_ESS[&lt;%=m4lix%&gt;].DOC_CONTENT |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                                                                           |
| 103 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                                   |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_g3_pform.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_pform.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta            |
| --- | ----------------------------------- |
| 27  | DOCUMENTOS DEL PLAN DE FORMACION:   |
| 31  | Documento 1 Documento 2 Documento 3 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                         |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| 26  | img     | src=/iconos/contract_write_128.png; height=44; width=52; onmouseover=m4sombra(this); onmouseout=m4oscuridad(this) |
| 33  | a       | href=GESS_Planificacion.pdf                                                                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 16  | estado          | getParameter(request,"estado")   |
| 17  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 16  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 17  | zinicios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 52  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | /sse_g3/sse_g3_trans.jsp                           |
| 45  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 46  | ../../sse_generico/espanol/generico_links.jsp      |
| 50  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 11  | /css/estilo_sse.css                                |
| 14  | /libreria/funciones_sse.js                         |
| 26  | /iconos/contract_write_128.png                     |
| 33  | GESS_Planificacion.pdf                             |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | /sse_g3/sse_g3_trans.jsp                           |
| 45  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 46  | ../../sse_generico/espanol/generico_links.jsp      |
| 50  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | -------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 17  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| COLL   | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 17  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| CYC    | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 17  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| IBER   | 103 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 9   | /sse_g3/sse_g3_trans.jsp                           | contextual | [sse_g3/sse_g3_trans.jsp](sse_g3--sse_g3_trans.md)                                                                                                                             |
| BASE   | 45  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 50  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 14  | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                      |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                  |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                            |
| BASE   | 9   | /sse_g3/sse_g3_trans.jsp                           | contextual | [sse_g3/sse_g3_trans.jsp](sse_g3--sse_g3_trans.md)                                                                                                                             |
| BASE   | 45  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 50  | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_g3_pform.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
