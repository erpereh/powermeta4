# Quién es Quién - Datos Empleado

Identificador: `sse_g0/ssco_engine_who.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                            |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                 |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                 |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                                                                                                 |
| COLL   | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".SCO_MTD_FILTER"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{".SCO_MTD_SEARCH"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{".SCO_MTD_SEARCH"}; m4:removefilter:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}; m4:sortitems:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"} |
| CYC    | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".SCO_MTD_FILTER"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{".SCO_MTD_SEARCH"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{".SCO_MTD_SEARCH"}; m4:removefilter:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}; m4:sortitems:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"} |
| IBER   | shared    | contenido diferente | m4:datadef:CSP_QUIEN_ES_QUIEN; m4:exec:CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; m4:item:CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"} | m4:datadef:SGCO_WHO_IS_WHO; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".SCO_MTD_FILTER"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{".SCO_MTD_SEARCH"}; m4:exec:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{".SCO_MTD_SEARCH"}; m4:removefilter:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}; m4:sortitems:SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g0/espanol/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_engine_who.jsp) | `f239e0005f048edefddef5c7c476476186177891097e71aeb0df6fc3f94582fa` |      1 |
| COLL / compartido | [m4custom/COLL/sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_engine_who.jsp)                 | `2ecc3f73eee3f6d16c798e5419632fa5895aec29553b4eed3f4fe528e6444274` |    210 |
| CYC / español     | [m4custom/CYC/sse_g0/espanol/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/espanol/ssco_engine_who.jsp)   | `f239e0005f048edefddef5c7c476476186177891097e71aeb0df6fc3f94582fa` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g0/ssco_engine_who.jsp)                   | `2ecc3f73eee3f6d16c798e5419632fa5895aec29553b4eed3f4fe528e6444274` |    210 |
| IBER / español    | [m4custom/IBER/sse_g0/espanol/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/espanol/ssco_engine_who.jsp) | `f239e0005f048edefddef5c7c476476186177891097e71aeb0df6fc3f94582fa` |      1 |
| IBER / compartido | [m4custom/IBER/sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g0/ssco_engine_who.jsp)                 | `2ecc3f73eee3f6d16c798e5419632fa5895aec29553b4eed3f4fe528e6444274` |    210 |
| BASE / español    | [sse_g0/espanol/ssco_engine_who.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_engine_who.jsp)                             | `f239e0005f048edefddef5c7c476476186177891097e71aeb0df6fc3f94582fa` |      1 |
| BASE / compartido | [sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_who.jsp)                                             | `0ac16408e52c2ca788bb98bf101d60de29bb2b2af657d02683b3c270ec03283e` |    269 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/espanol/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/espanol/ssco_engine_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                |
| --- | ---------------------- |
| 1   | ../ssco_engine_who.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 1   | ../ssco_engine_who.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g0/ssco_engine_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta             |
| --- | ------------------------------------ |
| 17  | Quién es Quién - Datos Empleado      |
| 146 | Fecha de Antigüedad:                 |
| 147 | Centro de Trabajo:                   |
| 148 | Dirección del Centro de Trabajo:     |
| 149 | eMail:                               |
| 150 | Teléfono / Móvil de Empresa:         |
| 150 | 9999999999                           |
| 151 | Acceso datos CV:                     |
| 151 | " target="_blank" &gt; Informe       |
| 157 | Localización                         |
| 164 | Área / Sucursal                      |
| 165 | Nombre de la Unidad                  |
| 166 | Responsable directo                  |
| 166 | Responsable                          |
| 170 | eMail Responsable                    |
| 171 | Tfno. / Móvil de Empresa responsable |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 140 | img     | src=/servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_ORO[&lt;%=m4lix%&gt;].SCO_BLOB_PHOTO; height=141; width=94; alt=foto_bbdd       |
| 151 | a       | href=[host externo]/CurriculumVitaeWeb/DescargaCV&lt;m4:item m4name=; htmlsafe=true                                                                                   |
| 166 | a       | href=javascript:m4submit('fichaempleado&lt;%=m4lix%&gt;')                                                                                                             |
| 167 | form    | id=fichaempleado&lt;%=m4lix%&gt;; name=fichaempleado&lt;%=m4lix%&gt;; method=post; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp; accept-charset=UTF-8 |
| 168 | input   | type=hidden; id=empleado; name=empleado; value=&lt;m4:item m4name=; htmlsafe=true                                                                                     |
| 169 | form    |                                                                                                                                                                       |
| 177 | form    | id=filtroBusqueda&lt;%=m4lix%&gt;; name=filtroBusqueda&lt;%=m4lix%&gt;; method=post; action=ssco_g0_who_is_who.jsp; accept-charset=UTF-8                              |
| 178 | input   | type=hidden; id=direccion; name=direccion; value=&lt;%=dirbusqueda%&gt;                                                                                               |
| 179 | input   | type=hidden; id=nombreCompleto; name=nombreCompleto; value=&lt;%=nombreCompleto%&gt;                                                                                  |
| 180 | input   | type=hidden; id=area; name=area; value=&lt;%=area%&gt;                                                                                                                |
| 181 | input   | type=hidden; id=puesto; name=puesto; value=&lt;%=puesto%&gt;                                                                                                          |
| 182 | input   | type=hidden; id=idcentro; name=idcentro; value=&lt;%=idcentro%&gt;                                                                                                    |
| 183 | input   | type=hidden; id=centro; name=centro; value=&lt;%=centro%&gt;                                                                                                          |
| 184 | input   | type=hidden; id=busqueda; name=busqueda; value=1                                                                                                                      |
| 188 | a       | id=volver&lt;%=m4lix%&gt;; alt=Volver a los resultados de la búsqueda; href=javascript:m4submit('filtroBusqueda&lt;%=m4lix%&gt;')                                     |
| 188 | img     | src=/iconos/icono_deshacer_mss_36_36.gif                                                                                                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 26  | empleado        | getParameter(request,"empleado")     |
| 27  | direcsele       | getParameter(request,"direcsele")    |
| 28  | nombresele      | getParameter(request,"nombresele")   |
| 29  | areasele        | getParameter(request,"areasele")     |
| 30  | puestosele      | getParameter(request,"puestosele")   |
| 31  | idcentrosele    | getParameter(request,"idcentrosele") |
| 32  | centrosele      | getParameter(request,"centrosele")   |

| L   | Variable         | Expresión fuente                                                         | Resolución estática parcial                                                                   |
| --- | ---------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 26  | empleado         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                          |
| 27  | dirbusqueda      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direcsele")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direcsele")                         |
| 29  | area             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"areasele")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"areasele")                          |
| 30  | puesto           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puestosele")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puestosele")                        |
| 31  | idcentro         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentrosele") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idcentrosele")                      |
| 32  | centro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centrosele")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"centrosele")                        |
| 46  | zsubsesion       | "CSP_QUIEN_ES_QUIEN"                                                     | CSP_QUIEN_ES_QUIEN                                                                            |
| 47  | zmeta4object     | "CSP_QUIEN_ES_QUIEN"                                                     | CSP_QUIEN_ES_QUIEN                                                                            |
| 48  | znodoORO         | "CSP_FICHA"                                                              | CSP_FICHA                                                                                     |
| 50  | zoutputdefORO    | zsubsesion + "!" + znodoORO + "[*]"                                      | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                       |
| 51  | zmoveORO         | znodoORO + ":" + znodoORO + "[FIRST]"                                    | CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                            |
| 52  | ziteratorORO     | znodoORO + ":" + zsubsesion + "!" + znodoORO                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                |
| 53  | zlecturaORO      | zsubsesion + "!" + znodoORO                                              | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA                                                              |
| 54  | zraizORO         | zsubsesion + "!" + znodoORO + "."                                        | CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"."}                                                         |
| 56  | zmetodocarga     | zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"                    | CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                  |
| 58  | zcomunORO        | znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + "."  | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}                       |
| 61  | zNommbreCompleto | zcomunORO + "NOMBRE_COMPLETO"                                            | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}    |
| 62  | zIdEmpleado      | zcomunORO + "ID_EMPLEADO"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_EMPLEADO"}        |
| 63  | zNomCentTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}   |
| 64  | zDirCentTrabajo  | zcomunORO + "DIR_CENTRO_TRABAJO"                                         | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"} |
| 65  | zNomDireccion    | zcomunORO + "N_DIRECCION"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}        |
| 66  | zNomPuesto       | zcomunORO + "N_PUESTO"                                                   | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}           |
| 67  | zIdCentroTrab    | zcomunORO + "ID_CENTRO_TRABAJO"                                          | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_CENTRO_TRABAJO"}  |
| 68  | zFotoEmpleado    | zcomunORO + "SCO_BLOB_PHOTO"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"SCO_BLOB_PHOTO"}     |
| 69  | zMail            | zcomunORO + "CORREO"                                                     | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}             |
| 70  | zFAntiguedad     | zcomunORO + "FEC_ANTIGUEDAD"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}     |
| 71  | zNArea           | zcomunORO + "N_AREA"                                                     | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}             |
| 72  | zNCentroTrabajo  | zcomunORO + "N_CENTRO_TRABAJO"                                           | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}   |
| 73  | zNDireccion      | zcomunORO + "N_DIRECCION"                                                | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}        |
| 74  | zNPuesto         | zcomunORO + "N_PUESTO"                                                   | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}           |
| 75  | zNServicio       | zcomunORO + "N_SERVICIO"                                                 | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_SERVICIO"}         |
| 76  | zNTipoPuesto     | zcomunORO + "N_TIPO_PUESTO"                                              | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_TIPO_PUESTO"}      |
| 77  | zNUnidad         | zcomunORO + "N_UNIDAD"                                                   | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}           |
| 78  | zNUnidadRaiz     | zcomunORO + "N_UNIDAD_RAIZ"                                              | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD_RAIZ"}      |
| 79  | zIdResponsable   | zcomunORO + "ID_RESPONSABLE"                                             | CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"ID_RESPONSABLE"}     |
| 106 | zcountiORO       | 0                                                                        | 0                                                                                             |
| 114 | zcountvORO       | String.valueOf(zcountiORO)                                               | String.valueOf(zcountiORO)                                                                    |
| 121 | zposicions2      | "0"                                                                      | 0                                                                                             |
| 122 | zposicion2       | 0                                                                        | 0                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 83  | m4:startpage | m4task=CSP_QUIEN_ES_QUIEN                                                                                           |
| 85  | m4:beginjob  |                                                                                                                     |
| 86  | m4:datadef   | m4o=CSP_QUIEN_ES_QUIEN; m4name=CSP_QUIEN_ES_QUIEN                                                                   |
| 95  | m4:exec      | m4method=CSP_QUIEN_ES_QUIEN{"!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO"}                                               |
| 97  | m4:outputdef | m4alias=CSP_FICHA                                                                                                   |
| 97  | m4:param     | name=m4name0; value=CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[*]"}                                                         |
| 99  | m4:endjob    |                                                                                                                     |
| 101 | m4:move      |                                                                                                                     |
| 101 | m4:param     | name=CSP_QUIEN_ES_QUIEN; value=CSP_FICHA{":"}CSP_FICHA{"[FIRST]"}                                                   |
| 124 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvORO).intValue()-1).toString()                                             |
| 134 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"NOMBRE_COMPLETO"}; htmlsafe=true    |
| 145 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_PUESTO"}; htmlsafe=true           |
| 146 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"FEC_ANTIGUEDAD"}; htmlsafe=true     |
| 147 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_CENTRO_TRABAJO"}; htmlsafe=true   |
| 148 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"DIR_CENTRO_TRABAJO"}; htmlsafe=true |
| 149 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"CORREO"}; htmlsafe=true             |
| 163 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_DIRECCION"}; htmlsafe=true        |
| 164 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_AREA"}; htmlsafe=true             |
| 165 | m4:item      | m4name=CSP_FICHA{":"}CSP_QUIEN_ES_QUIEN{"!"}CSP_FICHA{"[&amp;VAR.m4lix]"}{"."}{"N_UNIDAD"}; htmlsafe=true           |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 92  | setItem          | zsubsesion,zsubsesion,"","P_EMPLEADO",empleado |
| 110 | getCountInClient | znodoORO,zsubsesion,znodoORO                   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if (dirbusqueda.equals(" ") ) {dirbusqueda = "";}                                                                                                                                 |
| 35  | if (nombreCompleto.equals(" ") ) {nombreCompleto = "";}                                                                                                                           |
| 36  | if (area.equals(" ") ) {area = "";}                                                                                                                                               |
| 37  | if (puesto.equals(" ") ) {puesto = "";}                                                                                                                                           |
| 38  | if (idcentro.equals(" ") ) {idcentro = "";}                                                                                                                                       |
| 39  | if (centro.equals(" ") ) {centro = "";}                                                                                                                                           |
| 91  | if(empleado != null){                                                                                                                                                             |
| 120 | if (zcountiORO &gt; 0) {                                                                                                                                                          |
| 50  | expresión de cálculo/transformación: String zoutputdefORO = zsubsesion + "!" + znodoORO + "[*]";                                                                                  |
| 51  | expresión de cálculo/transformación: String zmoveORO = znodoORO + ":" + znodoORO + "[FIRST]";                                                                                     |
| 52  | expresión de cálculo/transformación: String ziteratorORO = znodoORO + ":" + zsubsesion + "!" + znodoORO;                                                                          |
| 53  | expresión de cálculo/transformación: String zlecturaORO = zsubsesion + "!" + znodoORO;                                                                                            |
| 54  | expresión de cálculo/transformación: String zraizORO = zsubsesion + "!" + znodoORO + ".";                                                                                         |
| 56  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";                                                                 |
| 58  | expresión de cálculo/transformación: String zcomunORO = znodoORO + ":" + zsubsesion + "!" + znodoORO + "[&amp;VAR.m4lix]" + ".";                                                  |
| 61  | expresión de cálculo/transformación: String zNommbreCompleto = zcomunORO + "NOMBRE_COMPLETO";                                                                                     |
| 62  | expresión de cálculo/transformación: String zIdEmpleado = zcomunORO + "ID_EMPLEADO";                                                                                              |
| 63  | expresión de cálculo/transformación: String zNomCentTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                     |
| 64  | expresión de cálculo/transformación: String zDirCentTrabajo = zcomunORO + "DIR_CENTRO_TRABAJO";                                                                                   |
| 65  | expresión de cálculo/transformación: String zNomDireccion = zcomunORO + "N_DIRECCION";                                                                                            |
| 66  | expresión de cálculo/transformación: String zNomPuesto = zcomunORO + "N_PUESTO";                                                                                                  |
| 67  | expresión de cálculo/transformación: String zIdCentroTrab = zcomunORO + "ID_CENTRO_TRABAJO";                                                                                      |
| 68  | expresión de cálculo/transformación: String zFotoEmpleado = zcomunORO + "SCO_BLOB_PHOTO";                                                                                         |
| 69  | expresión de cálculo/transformación: String zMail = zcomunORO + "CORREO";                                                                                                         |
| 70  | expresión de cálculo/transformación: String zFAntiguedad = zcomunORO + "FEC_ANTIGUEDAD";                                                                                          |
| 71  | expresión de cálculo/transformación: String zNArea = zcomunORO + "N_AREA";                                                                                                        |
| 72  | expresión de cálculo/transformación: String zNCentroTrabajo = zcomunORO + "N_CENTRO_TRABAJO";                                                                                     |
| 73  | expresión de cálculo/transformación: String zNDireccion = zcomunORO + "N_DIRECCION";                                                                                              |
| 74  | expresión de cálculo/transformación: String zNPuesto = zcomunORO + "N_PUESTO";                                                                                                    |
| 75  | expresión de cálculo/transformación: String zNServicio = zcomunORO + "N_SERVICIO";                                                                                                |
| 76  | expresión de cálculo/transformación: String zNTipoPuesto = zcomunORO + "N_TIPO_PUESTO";                                                                                           |
| 77  | expresión de cálculo/transformación: String zNUnidad = zcomunORO + "N_UNIDAD";                                                                                                    |
| 78  | expresión de cálculo/transformación: String zNUnidadRaiz = zcomunORO + "N_UNIDAD_RAIZ";                                                                                           |
| 79  | expresión de cálculo/transformación: String zIdResponsable = zcomunORO + "ID_RESPONSABLE";                                                                                        |
| 171 | expresión de cálculo/transformación: &lt;tr&gt;&lt;td class="fuentecampo"&gt;Tfno. / Móvil de Empresa responsable &lt;/td&gt;&lt;td class="fuentevalor"&gt;&lt;/td&gt;&lt;/tr&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                                                      |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| 19  | /css/estilo_sse.css                                                                                                    |
| 20  | /css/style_persdata.css                                                                                                |
| 21  | /library/jquery.js                                                                                                     |
| 22  | /libreria/funciones_sse.js                                                                                             |
| 140 | /servlet/download_blob?task=&lt;%=zsubsesion%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_ORO[&lt;%=m4lix%&gt;].SCO_BLOB_PHOTO |
| 151 | [host externo]/CurriculumVitaeWeb/DescargaCV&lt;m4:item m4name=                                                        |
| 166 | javascript:m4submit(                                                                                                   |
| 167 | /servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp                                                                  |
| 177 | ssco_g0_who_is_who.jsp                                                                                                 |
| 188 | javascript:m4submit(                                                                                                   |
| 188 | /iconos/icono_deshacer_mss_36_36.gif                                                                                   |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_engine_who.jsp](../../../../clon_portal/portal/sse_g0/ssco_engine_who.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | Action          | getParameter(request,"Action") |
| 18  | Name            | getParameter(request,"Name")   |
| 24  | WUnit           | getParameter(request,"WUnit")  |
| 30  | WLoc            | getParameter(request,"WLoc")   |
| 70  | Column          | getParameter(request,"Column") |
| 85  | Order           | getParameter(request,"Order")  |

| L   | Variable              | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | --------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 14  | sAction               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Action") |
| 18  | sName                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")   |
| 24  | sWUnit                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")  |
| 30  | sWLoc                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WLoc")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WLoc")   |
| 36  | sSubSession           | "SGCO_WHO_IS_WHO"                                                  | SGCO_WHO_IS_WHO                                                    |
| 37  | sMeta4Object          | "SGCO_WHO_IS_WHO"                                                  | SGCO_WHO_IS_WHO                                                    |
| 39  | sNodeMain             | "SGCO_WHO_IS_WHO_EMPLOYEES"                                        | SGCO_WHO_IS_WHO_EMPLOYEES                                          |
| 40  | sDataDefMain          | sMeta4Object + "!" + sNodeMain                                     | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES                      |
| 41  | sOutputDefMain        | sDataDefMain + "[*]"                                               | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{"[*]"}               |
| 42  | sMethodFilterMain     | sDataDefMain + ".SCO_MTD_FILTER"                                   | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".SCO_MTD_FILTER"}   |
| 44  | sIdHR                 | "", sGbName = "", sPhone = "", sEmail = ""                         | {, sGbName = "", sPhone = "", sEmail = ""}                         |
| 47  | sNodeLabel            | "SGCO_WHO_IS_WHO_LABEL"                                            | SGCO_WHO_IS_WHO_LABEL                                              |
| 48  | sDataDefLabel         | sMeta4Object + "!" + sNodeLabel                                    | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL                          |
| 49  | sOutputDefLabel       | sDataDefLabel + "[*]"                                              | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                   |
| 51  | sNodeLabelTable       | "SGCO_WHO_IS_WHO_LABEL_TABLE"                                      | SGCO_WHO_IS_WHO_LABEL_TABLE                                        |
| 52  | sDataDefLabelTable    | sMeta4Object + "!" + sNodeLabelTable                               | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE                    |
| 53  | sOutputDefLabelTable  | sDataDefLabelTable + "[*]"                                         | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}             |
| 55  | sNodeSearchWUnit      | "SGCO_WHO_IS_WHO_SEARCH_WU"                                        | SGCO_WHO_IS_WHO_SEARCH_WU                                          |
| 56  | sDataDefSearchWUnit   | sMeta4Object + "!" + sNodeSearchWUnit                              | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU                      |
| 57  | sOutputDefSearchWUnit | sDataDefSearchWUnit + "[*]"                                        | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{"[*]"}               |
| 58  | sMethodSearchWUnit    | sDataDefSearchWUnit + ".SCO_MTD_SEARCH"                            | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{".SCO_MTD_SEARCH"}   |
| 60  | sIdWorkUnit           | "", sNameWorkUnit = ""                                             | {, sNameWorkUnit = ""}                                             |
| 62  | sNodeSearchWLoc       | "SGCO_WHO_IS_WHO_SEARCH_WLOC"                                      | SGCO_WHO_IS_WHO_SEARCH_WLOC                                        |
| 63  | sDataDefSearchWLoc    | sMeta4Object + "!" + sNodeSearchWLoc                               | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC                    |
| 64  | sOutputDefSearchWLoc  | sDataDefSearchWLoc + "[*]"                                         | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{"[*]"}             |
| 65  | sMethodSearchWLoc     | sDataDefSearchWLoc + ".SCO_MTD_SEARCH"                             | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{".SCO_MTD_SEARCH"} |
| 67  | sIdWorkLoc            | "", sNameWorkLoc = ""                                              | {, sNameWorkLoc = ""}                                              |
| 69  | sSortNode             | sMeta4Object + "!" + sNodeMain + ".Sort"                           | SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}             |
| 70  | sColumn               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column") |
| 85  | sOrder                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order")  |
| 91  | sAuxLabel             | ""                                                                 |                                                                    |
| 92  | sCol1                 | "", sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = ""     | {, sCol2 = "", sCol3 = "", sCol4 = "", sCol5 = "", sCol6 = ""}     |
| 93  | saWho                 | ""                                                                 |                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                                                               |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 97  | m4:page         | subsessionid=SGCO_WHO_IS_WHO                                                                                                                     |
| 98  | m4:job          |                                                                                                                                                  |
| 99  | m4:datadef      | m4name=SGCO_WHO_IS_WHO; m4o=SGCO_WHO_IS_WHO                                                                                                      |
| 104 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                                                                    |
| 104 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                                                                             |
| 105 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL_TABLE                                                                                                              |
| 105 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}                                                                       |
| 109 | m4:exec         | m4method=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".SCO_MTD_FILTER"}                                                                        |
| 110 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                            |
| 111 | m4:param        | name=ARG_ID_WORK_UNIT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUnit")                                                   |
| 112 | m4:param        | name=ARG_ID_WORK_LOC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WLoc")                                                     |
| 115 | m4:sortitems    | m4name=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}                                                                                    |
| 116 | m4:param        | name=SCO_GB_NAME; value=ASC                                                                                                                      |
| 119 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_EMPLOYEES                                                                                                                |
| 119 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{"[*]"}                                                                         |
| 120 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL_TABLE                                                                                                              |
| 120 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}                                                                       |
| 121 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                                                                    |
| 121 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                                                                             |
| 122 | m4:removefilter | m4name=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}                                                                                    |
| 126 | m4:sortitems    | m4name=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{".Sort"}                                                                                    |
| 127 | m4:param        | name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Column"); value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Order") |
| 130 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_EMPLOYEES                                                                                                                |
| 130 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_EMPLOYEES{"[*]"}                                                                         |
| 131 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL_TABLE                                                                                                              |
| 131 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL_TABLE{"[*]"}                                                                       |
| 132 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                                                                    |
| 132 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                                                                             |
| 136 | m4:exec         | m4method=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{".SCO_MTD_SEARCH"}                                                                        |
| 137 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                            |
| 140 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_SEARCH_WU                                                                                                                |
| 140 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WU{"[*]"}                                                                         |
| 141 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                                                                    |
| 141 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                                                                             |
| 145 | m4:exec         | m4method=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{".SCO_MTD_SEARCH"}                                                                      |
| 146 | m4:param        | name=ARG_NAME; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Name")                                                            |
| 149 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_SEARCH_WLOC                                                                                                              |
| 149 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_SEARCH_WLOC{"[*]"}                                                                       |
| 150 | m4:outputdef    | m4alias=SGCO_WHO_IS_WHO_LABEL                                                                                                                    |
| 150 | m4:param        | name=M4NAME0; value=SGCO_WHO_IS_WHO{"!"}SGCO_WHO_IS_WHO_LABEL{"[*]"}                                                                             |
| 161 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FOUNDED_WLOC; var=; htmlsafe=true                                                    |
| 163 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FOUNDED_WLOCS; var=; htmlsafe=true                                                   |
| 165 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FOUNDED_WU; var=; htmlsafe=true                                                      |
| 167 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_FOUNDED_WUS; var=; htmlsafe=true                                                     |
| 169 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_NO_FOUNDED; var=; htmlsafe=true                                                      |
| 171 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_ASC; var=; htmlsafe=true                                                 |
| 173 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ORDER_DESC; var=; htmlsafe=true                                                |
| 175 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_NO_ORDER; var=; htmlsafe=true                                                  |
| 177 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_LOADING_EMP; var=; htmlsafe=true                                                     |
| 179 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ORDERING; var=; htmlsafe=true                                                  |
| 181 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_OK; var=                                                           |
| 183 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT_KO; var=                                                           |
| 190 | m4:dataloop     | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES                                                                                                              |
| 191 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=STD_ID_PERSON; var={, sGbName = "", sPhone = "", sEmail = ""}; htmlsafe=true                           |
| 192 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=SCO_GB_NAME; var=sGbName; htmlsafe=true                                                                |
| 193 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=SCO_ID_WORK_UNIT; var={, sNameWorkUnit = ""}; htmlsafe=true                                            |
| 194 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                      |
| 195 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=STD_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                   |
| 196 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=SCO_PRP_PHONE; var=sPhone; htmlsafe=true                                                               |
| 197 | m4:item         | outputdef=SGCO_WHO_IS_WHO_EMPLOYEES; item=SCO_PRP_EMAIL; var=sEmail; htmlsafe=true                                                               |
| 198 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_INFO_EMP; var=; htmlsafe=true                                                        |
| 202 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_ORG_CHART; var=; htmlsafe=true                                                       |
| 222 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_SEND_EMAIL; var=; htmlsafe=true                                                |
| 227 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL_TABLE; item=SCO_PRP_LBL_ADD_CONTACT; var=; htmlsafe=true                                               |
| 244 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_CLICK_WU; var=; htmlsafe=true                                                        |
| 245 | m4:dataloop     | outputdef=SGCO_WHO_IS_WHO_SEARCH_WU                                                                                                              |
| 246 | m4:item         | outputdef=SGCO_WHO_IS_WHO_SEARCH_WU; item=STD_N_WORK_UNIT; var=sNameWorkUnit; htmlsafe=true                                                      |
| 247 | m4:item         | outputdef=SGCO_WHO_IS_WHO_SEARCH_WU; item=STD_ID_WORK_UNIT; var={, sNameWorkUnit = ""}; htmlsafe=true                                            |
| 255 | m4:label        | get=item; outputdef=SGCO_WHO_IS_WHO_LABEL; item=SCO_PRP_LBL_CLICK_WLOC; var=; htmlsafe=true                                                      |
| 256 | m4:dataloop     | outputdef=SGCO_WHO_IS_WHO_SEARCH_WLOC                                                                                                            |
| 257 | m4:item         | outputdef=SGCO_WHO_IS_WHO_SEARCH_WLOC; item=STD_N_WORK_LOCATION; var=sNameWorkLoc; htmlsafe=true                                                 |
| 258 | m4:item         | outputdef=SGCO_WHO_IS_WHO_SEARCH_WLOC; item=STD_ID_WORK_LOCATION; var={, sNameWorkLoc = ""}; htmlsafe=true                                       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                           |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | if (sName == null) {sName="";}                                                                                                                                 |
| 20  | if (!sName.equals("")) {                                                                                                                                       |
| 25  | if (sWUnit == null) {sWUnit="";}                                                                                                                               |
| 26  | if (!sWUnit.equals("")) {                                                                                                                                      |
| 31  | if (sWLoc == null) {sWLoc="";}                                                                                                                                 |
| 32  | if (!sWLoc.equals("")) {                                                                                                                                       |
| 71  | if (sColumn == null) {sColumn="";}                                                                                                                             |
| 72  | if (!sColumn.equals("")) {                                                                                                                                     |
| 74  | if (sColumn.equals("Name")) {                                                                                                                                  |
| 77  | if (sColumn.equals("WUnit")) {                                                                                                                                 |
| 80  | if (sColumn.equals("WLoc")) {                                                                                                                                  |
| 86  | if (sOrder == null) {sOrder="";}                                                                                                                               |
| 87  | if (!sOrder.equals("")) {                                                                                                                                      |
| 102 | if (sAction.equals("Init")) {                                                                                                                                  |
| 107 | } else if (sAction.equals("SearchEmp")) {                                                                                                                      |
| 124 | } else if (sAction.equals("Sort")) {                                                                                                                           |
| 134 | } else if (sAction.equals("SearchWU")) {                                                                                                                       |
| 143 | } else if (sAction.equals("SearchWLoc")) {                                                                                                                     |
| 158 | if (sAction.equals("Init")) {                                                                                                                                  |
| 188 | } else if (sAction.equals("SearchEmp") &#124;&#124; sAction.equals("Sort")) {                                                                                  |
| 207 | if (saPhone.length == 3) {                                                                                                                                     |
| 208 | if (saPhone[1].equals("001")) {                                                                                                                                |
| 210 | } else if (saPhone[1].equals("002")) {                                                                                                                         |
| 212 | } else if (saPhone[1].equals("003")) {                                                                                                                         |
| 214 | } else {                                                                                                                                                       |
| 218 | } else {                                                                                                                                                       |
| 234 | if (saWho.length() &gt; 0) {                                                                                                                                   |
| 242 | } else if (sAction.equals("SearchWU")) {                                                                                                                       |
| 253 | } else if (sAction.equals("SearchWLoc")) {                                                                                                                     |
| 40  | expresión de cálculo/transformación: String sDataDefMain = sMeta4Object + "!" + sNodeMain;                                                                     |
| 41  | expresión de cálculo/transformación: String sOutputDefMain = sDataDefMain + "[*]";                                                                             |
| 42  | expresión de cálculo/transformación: String sMethodFilterMain = sDataDefMain + ".SCO_MTD_FILTER";                                                              |
| 48  | expresión de cálculo/transformación: String sDataDefLabel = sMeta4Object + "!" + sNodeLabel;                                                                   |
| 49  | expresión de cálculo/transformación: String sOutputDefLabel = sDataDefLabel + "[*]";                                                                           |
| 52  | expresión de cálculo/transformación: String sDataDefLabelTable = sMeta4Object + "!" + sNodeLabelTable;                                                         |
| 53  | expresión de cálculo/transformación: String sOutputDefLabelTable = sDataDefLabelTable + "[*]";                                                                 |
| 56  | expresión de cálculo/transformación: String sDataDefSearchWUnit = sMeta4Object + "!" + sNodeSearchWUnit;                                                       |
| 57  | expresión de cálculo/transformación: String sOutputDefSearchWUnit = sDataDefSearchWUnit + "[*]";                                                               |
| 58  | expresión de cálculo/transformación: String sMethodSearchWUnit = sDataDefSearchWUnit + ".SCO_MTD_SEARCH";                                                      |
| 63  | expresión de cálculo/transformación: String sDataDefSearchWLoc = sMeta4Object + "!" + sNodeSearchWLoc;                                                         |
| 64  | expresión de cálculo/transformación: String sOutputDefSearchWLoc = sDataDefSearchWLoc + "[*]";                                                                 |
| 65  | expresión de cálculo/transformación: String sMethodSearchWLoc = sDataDefSearchWLoc + ".SCO_MTD_SEARCH";                                                        |
| 69  | expresión de cálculo/transformación: String sSortNode = sMeta4Object + "!" + sNodeMain + ".Sort";                                                              |
| 200 | expresión de cálculo/transformación: sCol1 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sGbName.trim() + "\"" +"]";              |
| 204 | expresión de cálculo/transformación: sCol2 = "[" + "\"" + sIdWorkUnit + "\"" + "," + "\"" + sAuxLabel + "\"" + "," + "\"" + sNameWorkUnit.trim() + "\"" + "]"; |
| 217 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + saPhone[0] + "\"" + "," + "\"" + saPhone[2] + "\"" + "," + "\"" + saPhone[1] + "\"" + "]";           |
| 219 | expresión de cálculo/transformación: sCol3 = "[" + "\"" + "\"" + "]";                                                                                          |
| 224 | expresión de cálculo/transformación: sCol4 = "[" + "\"" + sEmail.trim() + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                          |
| 225 | expresión de cálculo/transformación: sCol5 = "[" + "\"" + sNameWorkLoc.trim() + "\"" + "]";                                                                    |
| 229 | expresión de cálculo/transformación: sCol6 = "[" + "\"" + sIdHR + "\"" + "," + "\"" + sAuxLabel + "\"" + "]";                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 11  | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | --------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| COLL   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| COLL   | 21  | /library/jquery.js                                              | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| COLL   | 22  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 151 | [host externo]/CurriculumVitaeWeb/DescargaCV&lt;m4:item m4name= | externa    | destino externo                                                                                                                                                                |
| COLL   | 166 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| COLL   | 167 | /servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp           | contextual | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md); [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                             |
| COLL   | 177 | ssco_g0_who_is_who.jsp                                          | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| COLL   | 188 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| CYC    | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| CYC    | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| CYC    | 21  | /library/jquery.js                                              | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                          |
| CYC    | 22  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 151 | [host externo]/CurriculumVitaeWeb/DescargaCV&lt;m4:item m4name= | externa    | destino externo                                                                                                                                                                |
| CYC    | 166 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| CYC    | 167 | /servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp           | contextual | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md); [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                             |
| CYC    | 177 | ssco_g0_who_is_who.jsp                                          | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| CYC    | 188 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| IBER   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| IBER   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| IBER   | 21  | /library/jquery.js                                              | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                         |
| IBER   | 22  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 151 | [host externo]/CurriculumVitaeWeb/DescargaCV&lt;m4:item m4name= | externa    | destino externo                                                                                                                                                                |
| IBER   | 166 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| IBER   | 167 | /servlet/CheckSecurity/JSP/sse_g0/ssco_engine_who.jsp           | contextual | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md); [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                             |
| IBER   | 177 | ssco_g0_who_is_who.jsp                                          | física     | [sse_g0/ssco_g0_who_is_who.jsp](sse_g0--ssco_g0_who_is_who.md)                                                                                                                 |
| IBER   | 188 | javascript:m4submit(                                            | dinámica   | P06                                                                                                                                                                            |
| BASE   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| BASE   | 1   | ../ssco_engine_who.jsp                                          | física     | [sse_g0/ssco_engine_who.jsp](sse_g0--ssco_engine_who.md)                                                                                                                       |
| BASE   | 11  | com.meta4.jsp                                                   | ausente    | P06                                                                                                                                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_engine_who.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
