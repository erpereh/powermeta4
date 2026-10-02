# shco_gen_topmenu

Identificador: `shco_g0/shco_gen_topmenu.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto       | Ámbito | Diccionario                                                                         |
| ------------------ | ----------- | ------ | ----------------------------------------------------------------------------------- |
| Literal.Disconnect | Desconexión | BASE   | [translations/shco_g0_es.properties:L81](../../referencias/literales/shco_g0_es.md) |
| Literal.Filter     | Filtro      | BASE   | [translations/shco_g0_es.properties:L82](../../referencias/literales/shco_g0_es.md) |
| Literal.Inform     | Consultas   | BASE   | [translations/shco_g0_es.properties:L83](../../referencias/literales/shco_g0_es.md) |
| Literal.Search     | Búsqueda    | BASE   | [translations/shco_g0_es.properties:L88](../../referencias/literales/shco_g0_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_topmenu.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_topmenu.jsp) | `06f47c1e94a738ec417ef65254ad04279092feae8feccbe6ea17f0a9a9f4b732` |     71 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_topmenu.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_topmenu.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                            |
| --- | ------- | -------------------------------------------------------------------- |
| 21  | img     | file=../files_gif/ic_lis_des.jsp                                     |
| 23  | a       | href=&lt;%=zcarril%&gt;                                              |
| 23  | img     | file=../files_gif/ic_lis.jsp                                         |
| 27  | a       | href=/servlet/CheckSecurity/JSP/shco_se/shco_se_gen_cri_basic.jsp    |
| 27  | img     | file=../files_gif/ic_bus_all.jsp                                     |
| 29  | img     | file=../files_gif/ic_bus_all_des.jsp                                 |
| 31  | a       | href=/servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp |
| 31  | img     | file=../files_gif/ic_executed_items.jsp                              |
| 54  | a       | href=javascript:logout()                                             |
| 54  | img     | file=../files_gif/ic_des2.jsp                                        |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable   | Expresión fuente                                           | Resolución estática parcial                                |
| --- | ---------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| 11  | zappprod   | M4Context.getSession(request).getProductID().toLowerCase() | M4Context.getSession(request).getProductID().toLowerCase() |
| 12  | zsLoginURL | (String)request.getAttribute("LOGIN_URL")                  | (String)request.getAttribute("LOGIN_URL")                  |
| 14  | zbarbot1   | zbarbot.substring(0,1)                                     | zbarbot.substring(0,1)                                     |
| 15  | zbarbot2   | zbarbot.substring(1,2)                                     | zbarbot.substring(1,2)                                     |
| 16  | zbarbot3   | zbarbot.substring(2,3)                                     | zbarbot.substring(2,3)                                     |
| 17  | zbarbot4   | zbarbot.substring(3,4)                                     | zbarbot.substring(3,4)                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 63  | logout  |            |

| L   | Condición / acción / mensaje literal                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | if (zappprod.equals("")){                                                                                                                           |
| 20  | &lt;%if ((zcarril==null)&#124;&#124;(zcarril.equals(""))){%&gt;                                                                                     |
| 22  | &lt;%}else{%&gt;                                                                                                                                    |
| 25  | &lt;%if (zNavrc.equals("0")){%&gt;                                                                                                                  |
| 26  | &lt;%if (zbarbot1.equals("1")){%&gt;                                                                                                                |
| 28  | &lt;%}else{%&gt;                                                                                                                                    |
| 35  | &lt;%}else{                                                                                                                                         |
| 45  | &lt;% if (showLastConnection.equals("1")){ %&gt;                                                                                                    |
| 52  | &lt;%if (zNavrc.equals("0")){%&gt;                                                                                                                  |
| 66  | &lt;%if (zNavrc.equals("0")){%&gt;                                                                                                                  |
| 67  | &lt;%if (M4FileURIChecker.exists("/shco_g0_" + zappprod + "/shco_gen_menusup.jsp",pageContext)== false){%&gt;                                       |
| 42  | expresión de cálculo/transformación: &lt;jsp:include page='&lt;%="/shco_g0_" + zappprod + "/shco_gen_topmenu.jsp" %&gt;' flush="false" /&gt;        |
| 63  | expresión de cálculo/transformación: function logout(){ location.href = "/shco_g0/shco_gen_logout.jsp?loginURL=" + escape("&lt;%=zsLoginURL%&gt;"); |

### Includes, navegación y dependencias

| L   | Include                            |
| --- | ---------------------------------- |
| 21  | ../files_gif/ic_lis_des.jsp        |
| 23  | ../files_gif/ic_lis.jsp            |
| 27  | ../files_gif/ic_bus_all.jsp        |
| 29  | ../files_gif/ic_bus_all_des.jsp    |
| 31  | ../files_gif/ic_executed_items.jsp |
| 42  | &lt;%=                             |
| 44  | ../tctools/tc_last_connection.jsp  |
| 54  | ../files_gif/ic_des2.jsp           |
| 68  | shco_menu.jsp                      |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 23  | &lt;%=zcarril%&gt;                                              |
| 27  | /servlet/CheckSecurity/JSP/shco_se/shco_se_gen_cri_basic.jsp    |
| 31  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp |
| 54  | javascript:logout()                                             |
| 63  | /shco_g0/shco_gen_logout.jsp?loginURL=                          |
| 21  | ../files_gif/ic_lis_des.jsp                                     |
| 23  | ../files_gif/ic_lis.jsp                                         |
| 27  | ../files_gif/ic_bus_all.jsp                                     |
| 29  | ../files_gif/ic_bus_all_des.jsp                                 |
| 31  | ../files_gif/ic_executed_items.jsp                              |
| 42  | /shco_gen_topmenu.jsp                                           |
| 44  | ../tctools/tc_last_connection.jsp                               |
| 54  | ../files_gif/ic_des2.jsp                                        |
| 67  | /shco_gen_menusup.jsp                                           |
| 68  | shco_menu.jsp                                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                               |
| ------ | --- | --------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------- |
| BASE   | 21  | ../files_gif/ic_lis_des.jsp                                     | física     | [files_gif/ic_lis_des.jsp](files_gif--ic_lis_des.md)                            |
| BASE   | 23  | ../files_gif/ic_lis.jsp                                         | física     | [files_gif/ic_lis.jsp](files_gif--ic_lis.md)                                    |
| BASE   | 27  | ../files_gif/ic_bus_all.jsp                                     | física     | [files_gif/ic_bus_all.jsp](files_gif--ic_bus_all.md)                            |
| BASE   | 29  | ../files_gif/ic_bus_all_des.jsp                                 | física     | [files_gif/ic_bus_all_des.jsp](files_gif--ic_bus_all_des.md)                    |
| BASE   | 31  | ../files_gif/ic_executed_items.jsp                              | física     | [files_gif/ic_executed_items.jsp](files_gif--ic_executed_items.md)              |
| BASE   | 42  | &lt;%=                                                          | dinámica   | P06                                                                             |
| BASE   | 44  | ../tctools/tc_last_connection.jsp                               | física     | [tctools/tc_last_connection.jsp](../componentes/tctools--tc_last_connection.md) |
| BASE   | 54  | ../files_gif/ic_des2.jsp                                        | física     | [files_gif/ic_des2.jsp](files_gif--ic_des2.md)                                  |
| BASE   | 68  | shco_menu.jsp                                                   | física     | [shco_g0/shco_menu.jsp](shco_g0--shco_menu.md)                                  |
| BASE   | 23  | &lt;%=zcarril%&gt;                                              | dinámica   | P06                                                                             |
| BASE   | 27  | /servlet/CheckSecurity/JSP/shco_se/shco_se_gen_cri_basic.jsp    | ausente    | P06                                                                             |
| BASE   | 31  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp | ausente    | P06                                                                             |
| BASE   | 54  | javascript:logout()                                             | dinámica   | P06                                                                             |
| BASE   | 63  | /shco_g0/shco_gen_logout.jsp?loginURL=                          | contextual | [shco_g0/shco_gen_logout.jsp](shco_g0--shco_gen_logout.md)                      |
| BASE   | 21  | ../files_gif/ic_lis_des.jsp                                     | física     | [files_gif/ic_lis_des.jsp](files_gif--ic_lis_des.md)                            |
| BASE   | 23  | ../files_gif/ic_lis.jsp                                         | física     | [files_gif/ic_lis.jsp](files_gif--ic_lis.md)                                    |
| BASE   | 27  | ../files_gif/ic_bus_all.jsp                                     | física     | [files_gif/ic_bus_all.jsp](files_gif--ic_bus_all.md)                            |
| BASE   | 29  | ../files_gif/ic_bus_all_des.jsp                                 | física     | [files_gif/ic_bus_all_des.jsp](files_gif--ic_bus_all_des.md)                    |
| BASE   | 31  | ../files_gif/ic_executed_items.jsp                              | física     | [files_gif/ic_executed_items.jsp](files_gif--ic_executed_items.md)              |
| BASE   | 42  | /shco_gen_topmenu.jsp                                           | ausente    | P06                                                                             |
| BASE   | 44  | ../tctools/tc_last_connection.jsp                               | física     | [tctools/tc_last_connection.jsp](../componentes/tctools--tc_last_connection.md) |
| BASE   | 54  | ../files_gif/ic_des2.jsp                                        | física     | [files_gif/ic_des2.jsp](files_gif--ic_des2.md)                                  |
| BASE   | 67  | /shco_gen_menusup.jsp                                           | ausente    | P06                                                                             |
| BASE   | 68  | shco_menu.jsp                                                   | física     | [shco_g0/shco_menu.jsp](shco_g0--shco_menu.md)                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_topmenu.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
