# generico_login_links

Identificador: `sse_generico/generico_login_links.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_login_links.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_links.jsp) | `f16fa0fd8d1318839d0fd82873f1fd47a5dc309e33b72b02c89714e8d1f3bef8` |    122 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_login_links.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_login_links.jsp)   | `f16fa0fd8d1318839d0fd82873f1fd47a5dc309e33b72b02c89714e8d1f3bef8` |    122 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_login_links.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_login_links.jsp) | `f16fa0fd8d1318839d0fd82873f1fd47a5dc309e33b72b02c89714e8d1f3bef8` |    122 |
| BASE / español    | [sse_generico/espanol/generico_login_links.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_login_links.jsp)                             | `f16fa0fd8d1318839d0fd82873f1fd47a5dc309e33b72b02c89714e8d1f3bef8` |    122 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_login_links.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_links.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 103 | Usuario:                 |
| 105 | Contraseña:              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99  | form    | id=login; name=login; action=/servlet/login; method=post                                                                                                                                 |
| 104 | input   | type=hidden; name=_LANG; value=3                                                                                                                                                         |
| 104 | input   | type=hidden; id=_URL; name=_URL; value=                                                                                                                                                  |
| 104 | input   | alt=Introduce tu usuario; type=text; id=_USER; name=_USER; size=14                                                                                                                       |
| 106 | input   | title=Introduce tu contraseña; size=14; type=password; id=_PASSWD; name=_PASSWD                                                                                                          |
| 107 | input   | title=Conéctate; type=image; src=/iconos/icono_enviar_ess_36_36.gif; onmouseover=m4luztotal(this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this); id=enviar; name=enviar |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal       |
| --- | --------------- | -------------------- |
| 21  | _A              | zhash.get("_A")      |
| 24  | _B              | zhash.get("_B")      |
| 26  | _C              | zhash.get("_C")      |
| 46  | zfiltro         | zhash.get("zfiltro") |
| 49  | znivel          | zhash.get("znivel")  |

| L   | Variable           | Expresión fuente                            | Resolución estática parcial                 |
| --- | ------------------ | ------------------------------------------- | ------------------------------------------- |
| 3   | znombre            | ""                                          |                                             |
| 4   | zvalor             | ""                                          |                                             |
| 5   | zraiz              | ""                                          |                                             |
| 6   | zurlcuerpo         | ""                                          |                                             |
| 7   | zredireccioncuerpo | ""                                          |                                             |
| 8   | zfiltro            | ""                                          |                                             |
| 9   | znivel             | ""                                          |                                             |
| 10  | zurl               | ""                                          |                                             |
| 11  | zredireccion       | ""                                          |                                             |
| 31  | sURLFromWKItem     | ""                                          |                                             |
| 32  | sIdWorkItem        | "ID_WORKITEM="                              | ID_WORKITEM=                                |
| 33  | iPosWkItem         | zredireccioncuerpo.lastIndexOf(sIdWorkItem) | zredireccioncuerpo.lastIndexOf(sIdWorkItem) |
| 34  | iPosAmp            | -1                                          | -1                                          |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 29  | if (zredireccioncuerpo != null){                                                                                                                       |
| 35  | if (iPosWkItem != -1){                                                                                                                                 |
| 39  | if (iPosAmp != -1){                                                                                                                                    |
| 65  | if (zkey.equals("ID_WORKITEM"))                                                                                                                        |
| 68  | }else{                                                                                                                                                 |
| 81  | if (zraiz == null) {                                                                                                                                   |
| 89  | if(straux.indexOf("login")==-1)                                                                                                                        |
| 91  | }else{                                                                                                                                                 |
| 112 | &lt;%if (zraiz == null) {%&gt;                                                                                                                         |
| 117 | &lt;%}else{%&gt;                                                                                                                                       |
| 36  | expresión de cálculo/transformación: sURLFromWKItem = zredireccioncuerpo.substring(iPosWkItem + sIdWorkItem.length());                                 |
| 40  | expresión de cálculo/transformación: zredireccioncuerpo = zredireccioncuerpo + sURLFromWKItem.substring(iPosAmp);                                      |
| 52  | expresión de cálculo/transformación: zurl = zraiz + zurlcuerpo;                                                                                        |
| 54  | expresión de cálculo/transformación: zredireccion = zraiz + zredireccioncuerpo + "&amp;zfiltro=" + zfiltro + "&amp;znivel=" + znivel + "&amp;lang=es"; |
| 79  | expresión de cálculo/transformación: zurl = zurl + "?_C=" + zredireccion;                                                                              |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                |
| --- | -------------------------------------------------------------------------------- |
| 99  | /servlet/login                                                                   |
| 107 | /iconos/icono_enviar_ess_36_36.gif                                               |
| 82  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 |
| 92  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                       | Resolución | Ficha / candidato |
| ------ | --- | -------------------------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 82  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| COLL   | 92  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| CYC    | 82  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| CYC    | 92  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| IBER   | 82  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| IBER   | 92  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| BASE   | 82  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |
| BASE   | 92  | /servlet/CheckSecurity/JSP/sse_generico/generico_portal.jsp?lang=es&amp;estado=0 | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_login_links.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
