# tc_login_wz_cp_send_data

Identificador: `tctools/cprequest/tc_login_wz_cp_send_data.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_cp_send_data.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_cp_send_data.jsp) | `3e8168a2b4683f583188efe933ccd5c9d6efee5e86182776aac99bd93b478fd0` |    258 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_cp_send_data.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_cp_send_data.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 37  | offsite         | getParameter(request, "offsite") |

| L   | Variable          | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ----------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 26  | sServerURL        | null                                                                 | null                                                                 |
| 27  | sHostName         | request.getServerName()                                              | request.getServerName()                                              |
| 28  | sPortName         | new Integer( request.getServerPort() ).toString()                    | new Integer( request.getServerPort() ).toString()                    |
| 30  | isHttpSecure      | request.isSecure()                                                   | request.isSecure()                                                   |
| 31  | sProtocol         | "http"                                                               | http                                                                 |
| 37  | offsite           | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite") |
| 50  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                  | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                  |
| 51  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")            | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")            |
| 52  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")                         | (String)session.getAttribute("URL_COMPLETE")                         |
| 59  | sRespValue        | "-1"                                                                 | -1                                                                   |
| 60  | sIdSocPass        | (String)session.getAttribute("SOC_C_PASS")                           | (String)session.getAttribute("SOC_C_PASS")                           |
| 72  | sPersonID         | null                                                                 | null                                                                 |
| 73  | sPtk              | (String)session.getAttribute("PTK")                                  | (String)session.getAttribute("PTK")                                  |
| 103 | iTotRegCount      | 0                                                                    | 0                                                                    |
| 125 | sIDChannel        | "SRTC_FORGET_PWD"                                                    | SRTC_FORGET_PWD                                                      |
| 126 | sIDNode           | "SRTC_FIND_FIELDS"                                                   | SRTC_FIND_FIELDS                                                     |
| 127 | sIDMethod         | "LOAD_FIELDS"                                                        | LOAD_FIELDS                                                          |
| 128 | sIDNodeGen        | "SRTC_FORGET_PWD"                                                    | SRTC_FORGET_PWD                                                      |
| 129 | sIDMethodGen      | "GENERATE_INFORMATION"                                               | GENERATE_INFORMATION                                                 |
| 168 | sidcampo          | ""                                                                   |                                                                      |
| 169 | sCampoValue       | ""                                                                   |                                                                      |
| 174 | i                 | 0                                                                    | 0                                                                    |
| 187 | i                 | 0                                                                    | 0                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                       |
| --- | ---------------- | ---------------------------------------------------------- |
| 171 | getCountInClient | sIDNode, sIDChannel, sIDNode                               |
| 177 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD"              |
| 190 | setItem          | sIDChannel, sIDNode, reg, "VALUE_FIELD", sArrayPosValue[i] |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 91  | cursor_clear |            |

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if ( isHttpSecure ) sProtocol = "https" ;                                                                                                          |
| 38  | if (offsite != null &amp;&amp; !offsite.equals("")) {                                                                                              |
| 43  | if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString();                                      |
| 54  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                                                                      |
| 55  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";                                                           |
| 56  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/";                                                  |
| 64  | if (sIdSocPass != null &amp;&amp; !sIdSocPass.equals(""))                                                                                          |
| 74  | if (sPtk != null &amp;&amp; !sPtk.equals(""))                                                                                                      |
| 107 | if (oSessionManager == null)                                                                                                                       |
| 112 | alert(login_ErrorConnection);                                                                                                                      |
| 119 | if (oSessionManager != null)                                                                                                                       |
| 123 | if (oSesion != null)                                                                                                                               |
| 136 | if ( sIdSocPass != null )                                                                                                                          |
| 140 | else                                                                                                                                               |
| 152 | if (sIdSocPass != null)                                                                                                                            |
| 156 | else                                                                                                                                               |
| 206 | if (sPersonID!= null) aPriorityParams.put("STD_ID_PERSON", sPersonID);                                                                             |
| 226 | if (sRespValue.equals("2"))                                                                                                                        |
| 230 | alert(login_UserHHRR);                                                                                                                             |
| 235 | else                                                                                                                                               |
| 237 | if (sRespValue.equals("1"))                                                                                                                        |
| 241 | alert(login_User);                                                                                                                                 |
| 246 | else                                                                                                                                               |
| 250 | alert(login_NoDataM);                                                                                                                              |
| 34  | expresión de cálculo/transformación: sServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;                                                |
| 42  | expresión de cálculo/transformación: sServerURL = offsiteURL.getProtocol() + "://" + sHostName;                                                    |
| 43  | expresión de cálculo/transformación: if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString(); |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 84  | /shco_g0/shco_gen_taglib.jsp      |
| 85  | /shco_g0/shco_gen_lang.jsp        |
| 86  | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 97  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       |
| 98  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js |
| 113 | &lt;%=sUrlLoginComplete%&gt;                         |
| 231 | &lt;%=sUrlLoginComplete%&gt;                         |
| 242 | &lt;%=sUrlLoginComplete%&gt;                         |
| 251 | &lt;%=sUrlLoginComplete%&gt;                         |
| 22  | com.meta4.jsp                                        |
| 84  | /shco_g0/shco_gen_taglib.jsp                         |
| 85  | /shco_g0/shco_gen_lang.jsp                           |
| 86  | /shco_g0/shco_login_box_trans.jsp                    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 84  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 85  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 86  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |
| BASE   | 97  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       | dinámica   | P06                                                                                  |
| BASE   | 98  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                  |
| BASE   | 113 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                  |
| BASE   | 231 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                  |
| BASE   | 242 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                  |
| BASE   | 251 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                  |
| BASE   | 22  | com.meta4.jsp                                        | ausente    | P06                                                                                  |
| BASE   | 84  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 85  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 86  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_cp_send_data.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
