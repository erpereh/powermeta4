# tc_login_wz_cp_send_data

Identificador: `tctools/cpaction/tc_login_wz_cp_send_data.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cpaction/tc_login_wz_cp_send_data.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_login_wz_cp_send_data.jsp) | `a1c011e898cc699a326c4e8618c2ccdc0fac34faa4309c97cbd4c5d8d613f2f8` |    260 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cpaction/tc_login_wz_cp_send_data.jsp](../../../../clon_portal/portal/tctools/cpaction/tc_login_wz_cp_send_data.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 38  | offsite         | getParameter(request, "offsite") |
| 78  | tks             | getParameter(request, "tks")     |

| L   | Variable          | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ----------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 27  | sServerURL        | null                                                                 | null                                                                 |
| 28  | sHostName         | request.getServerName()                                              | request.getServerName()                                              |
| 29  | sPortName         | new Integer( request.getServerPort() ).toString()                    | new Integer( request.getServerPort() ).toString()                    |
| 31  | isHttpSecure      | request.isSecure()                                                   | request.isSecure()                                                   |
| 32  | sProtocol         | "http"                                                               | http                                                                 |
| 38  | offsite           | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "offsite") |
| 51  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                  | (String)session.getAttribute("LANG_TO_CHANGE_PASS")                  |
| 52  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")            | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE")            |
| 53  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")                         | (String)session.getAttribute("URL_COMPLETE")                         |
| 65  | sRespValue        | "-1"                                                                 | -1                                                                   |
| 66  | sIdSocPass        | (String)session.getAttribute("SOC_C_PASS")                           | (String)session.getAttribute("SOC_C_PASS")                           |
| 77  | email             | ""                                                                   |                                                                      |
| 78  | tks               | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "tks")     |
| 109 | iTotRegCount      | 0                                                                    | 0                                                                    |
| 131 | sIDChannel        | "SRTC_FORGET_PWD"                                                    | SRTC_FORGET_PWD                                                      |
| 132 | sIDNode           | "SRTC_FIND_FIELDS"                                                   | SRTC_FIND_FIELDS                                                     |
| 133 | sIDMethod         | "LOAD_FIELDS"                                                        | LOAD_FIELDS                                                          |
| 134 | sIDNodeGen        | "SRTC_FORGET_PWD"                                                    | SRTC_FORGET_PWD                                                      |
| 135 | sIDMethodGen      | "GENERATE_INFORMATION"                                               | GENERATE_INFORMATION                                                 |
| 174 | sidcampo          | ""                                                                   |                                                                      |
| 175 | sCampoValue       | ""                                                                   |                                                                      |
| 181 | i                 | 0                                                                    | 0                                                                    |
| 194 | i                 | 0                                                                    | 0                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación        | Argumentos literales                                       |
| --- | ---------------- | ---------------------------------------------------------- |
| 177 | getCountInClient | sIDNode, sIDChannel, sIDNode                               |
| 184 | getItem          | sIDNode, sIDChannel, sIDNode, reg, "ID_FIELD"              |
| 197 | setItem          | sIDChannel, sIDNode, reg, "VALUE_FIELD", sArrayPosValue[i] |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 98  | cursor_clear |            |

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if ( isHttpSecure ) sProtocol = "https" ;                                                                                                          |
| 39  | if (offsite != null &amp;&amp; !offsite.equals("")) {                                                                                              |
| 44  | if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString();                                      |
| 55  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                                                                      |
| 56  | if (zappprod == null &#124;&#124; zappprod.equals("") &#124;&#124; zappprod.equals("ess"))                                                         |
| 60  | if (zappprod == null) zappprod = "ess";                                                                                                            |
| 62  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/";                                                  |
| 70  | if (sIdSocPass != null &amp;&amp; !sIdSocPass.equals(""))                                                                                          |
| 79  | if (tks != null &amp;&amp; !tks.equals(""))                                                                                                        |
| 113 | if (oSessionManager == null)                                                                                                                       |
| 118 | alert(login_ErrorConnection);                                                                                                                      |
| 125 | if (oSessionManager != null)                                                                                                                       |
| 129 | if (oSesion != null)                                                                                                                               |
| 142 | if ( sIdSocPass != null )                                                                                                                          |
| 146 | else                                                                                                                                               |
| 158 | if (sIdSocPass != null)                                                                                                                            |
| 162 | else                                                                                                                                               |
| 233 | if (sRespValue.equals("2"))                                                                                                                        |
| 235 | %&gt;&lt;script type="text/javascript"&gt;alert(login_UserHHRR);                                                                                   |
| 239 | else if (sRespValue.equals("1"))                                                                                                                   |
| 241 | %&gt;&lt;script type="text/javascript"&gt;alert(login_User);                                                                                       |
| 245 | else if (sRespValue.equals("-2"))                                                                                                                  |
| 247 | %&gt;&lt;script type="text/javascript"&gt;alert(login_AmbiDataM);                                                                                  |
| 251 | else                                                                                                                                               |
| 253 | %&gt;&lt;script type="text/javascript"&gt;alert(login_NoDataM);                                                                                    |
| 35  | expresión de cálculo/transformación: sServerURL = sProtocol + "://" + sHostName + ":" + sPortName ;                                                |
| 43  | expresión de cálculo/transformación: sServerURL = offsiteURL.getProtocol() + "://" + sHostName;                                                    |
| 44  | expresión de cálculo/transformación: if (offsiteURL.getPort() != -1) sServerURL = sServerURL + ":" + new Integer(offsiteURL.getPort()).toString(); |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 24  | /tctools/tc_frame_options.jsp     |
| 91  | /shco_g0/shco_gen_taglib.jsp      |
| 92  | /shco_g0/shco_gen_lang.jsp        |
| 93  | /shco_g0/shco_login_box_trans.jsp |

| L   | Destino / recurso                              |
| --- | ---------------------------------------------- |
| 104 | /translations/tc_login_&lt;%=zlanguser%&gt;.js |
| 119 | &lt;%=sUrlLoginComplete%&gt;                   |
| 236 | &lt;%=sUrlLoginComplete%&gt;                   |
| 242 | &lt;%=sUrlLoginComplete%&gt;                   |
| 248 | &lt;%=sUrlLoginComplete%&gt;                   |
| 254 | &lt;%=sUrlLoginComplete%&gt;                   |
| 21  | com.meta4.jsp                                  |
| 24  | /tctools/tc_frame_options.jsp                  |
| 91  | /shco_g0/shco_gen_taglib.jsp                   |
| 92  | /shco_g0/shco_gen_lang.jsp                     |
| 93  | /shco_g0/shco_login_box_trans.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                     | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ---------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 24  | /tctools/tc_frame_options.jsp                  | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                         |
| BASE   | 91  | /shco_g0/shco_gen_taglib.jsp                   | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 92  | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 93  | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |
| BASE   | 104 | /translations/tc_login_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                  |
| BASE   | 119 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                  |
| BASE   | 236 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                  |
| BASE   | 242 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                  |
| BASE   | 248 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                  |
| BASE   | 254 | &lt;%=sUrlLoginComplete%&gt;                   | dinámica   | P06                                                                                  |
| BASE   | 21  | com.meta4.jsp                                  | ausente    | P06                                                                                  |
| BASE   | 24  | /tctools/tc_frame_options.jsp                  | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                         |
| BASE   | 91  | /shco_g0/shco_gen_taglib.jsp                   | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)           |
| BASE   | 92  | /shco_g0/shco_gen_lang.jsp                     | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)               |
| BASE   | 93  | /shco_g0/shco_login_box_trans.jsp              | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cpaction/tc_login_wz_cp_send_data.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
