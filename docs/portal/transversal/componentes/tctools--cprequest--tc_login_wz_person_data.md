# tc_login_wz_person_data

Identificador: `tctools/cprequest/tc_login_wz_person_data.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                | Ámbito | Diccionario                                                                           |
| --------------- | -------------------- | ------ | ------------------------------------------------------------------------------------- |
| ChangePwd.Title | Cambio de contraseña | BASE   | [translations/tc_login_es.properties:L38](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/cprequest/tc_login_wz_person_data.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_person_data.jsp) | `c37fcd1079cf30f7f1402491251774379bf6e2c825cb80966ccc6bb860d2c1b6` |    179 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/cprequest/tc_login_wz_person_data.jsp](../../../../clon_portal/portal/tctools/cprequest/tc_login_wz_person_data.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 68  | tks             | getParameter(request, "tks")   |
| 79  | SOC_C           | getParameter(request, "SOC_C") |

| L   | Variable          | Expresión fuente                                          | Resolución estática parcial                               |
| --- | ----------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| 28  | zlang             | (String)session.getAttribute("LANG_TO_CHANGE_PASS")       | (String)session.getAttribute("LANG_TO_CHANGE_PASS")       |
| 29  | zappprod          | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE") | (String)session.getAttribute("LANG_TO_CHANGE_PASS_STYLE") |
| 30  | sUrlLoginComplete | (String)session.getAttribute("URL_COMPLETE")              | (String)session.getAttribute("URL_COMPLETE")              |
| 61  | sIdSoc            | null                                                      | null                                                      |
| 64  | email             | null                                                      | null                                                      |
| 65  | person            | null                                                      | null                                                      |
| 68  | encrypted         | M4SafeRequest.getParameter(request, "tks")                | M4SafeRequest.getParameter(request, "tks")                |
| 95  | iCodeResult       | validateClientCode(sIdSoc, oSessionManager)               | validateClientCode(sIdSoc, oSessionManager)               |
| 142 | iRet              | -1                                                        | -1                                                        |
| 147 | sM4Obj            | "SRTC_CLIENT_CODE_VALIDATOR"                              | SRTC_CLIENT_CODE_VALIDATOR                                |
| 148 | sNode             | "SRTC_CLIENT_CODE_VALIDATOR"                              | SRTC_CLIENT_CODE_VALIDATOR                                |
| 149 | sMethod           | "VALIDATE"                                                | VALIDATE                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                              |
| --- | ------------------------------------------------------------------------------------------------- |
| 32  | if (zlang == null &#124;&#124; zlang.equals("")) zlang = "2";                                     |
| 33  | if (zappprod == null &#124;&#124; zappprod.equals("")) zappprod = "/style/tc_login.css";          |
| 34  | if (sUrlLoginComplete == null &#124;&#124; sUrlLoginComplete.equals("")) sUrlLoginComplete = "/"; |
| 50  | if (oSessionManager == null) {                                                                    |
| 53  | alert(login_ErrorConnection);                                                                     |
| 71  | if (encrypted != null)                                                                            |
| 76  | else                                                                                              |
| 81  | if (sIdSoc == null)                                                                               |
| 89  | if (sIdSoc != null)                                                                               |
| 96  | if (iCodeResult == 0)                                                                             |
| 102 | if (typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile) != "undefined")                  |
| 106 | else                                                                                              |
| 108 | alert(login_NoDataM);                                                                             |
| 114 | else                                                                                              |
| 125 | if (tokenMap != null)                                                                             |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 24  | /tctools/tc_frame_options.jsp             |
| 36  | /shco_g0/shco_gen_taglib.jsp              |
| 37  | /shco_g0/shco_gen_lang.jsp                |
| 38  | /shco_g0/shco_login_box_trans.jsp         |
| 134 | /tctools/cprequest/shco_gen_bag_wz_cp.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 45  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       |
| 46  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js |
| 54  | &lt;%=sUrlLoginComplete%&gt;                         |
| 110 | &lt;%=sUrlLoginComplete%&gt;                         |
| 21  | com.meta4.jsp                                        |
| 24  | /tctools/tc_frame_options.jsp                        |
| 36  | /shco_g0/shco_gen_taglib.jsp                         |
| 37  | /shco_g0/shco_gen_lang.jsp                           |
| 38  | /shco_g0/shco_login_box_trans.jsp                    |
| 98  | /tctools/cprequest/tc_login_wz_client_code.jsp       |
| 134 | /tctools/cprequest/shco_gen_bag_wz_cp.jsp            |
| 141 | com.meta4.jsp                                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 24  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 36  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 37  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 38  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 134 | /tctools/cprequest/shco_gen_bag_wz_cp.jsp            | contextual | [tctools/cprequest/shco_gen_bag_wz_cp.jsp](tctools--cprequest--shco_gen_bag_wz_cp.md)           |
| BASE   | 45  | /translations/tc_login_&lt;%=zlanguser%&gt;.js       | dinámica   | P06                                                                                             |
| BASE   | 46  | /mobile/translation/m4mobile_&lt;%=zlanguser%&gt;.js | dinámica   | P06                                                                                             |
| BASE   | 54  | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                             |
| BASE   | 110 | &lt;%=sUrlLoginComplete%&gt;                         | dinámica   | P06                                                                                             |
| BASE   | 21  | com.meta4.jsp                                        | ausente    | P06                                                                                             |
| BASE   | 24  | /tctools/tc_frame_options.jsp                        | contextual | [tctools/tc_frame_options.jsp](tctools--tc_frame_options.md)                                    |
| BASE   | 36  | /shco_g0/shco_gen_taglib.jsp                         | contextual | [shco_g0/shco_gen_taglib.jsp](../dependencias/shco_g0--shco_gen_taglib.md)                      |
| BASE   | 37  | /shco_g0/shco_gen_lang.jsp                           | contextual | [shco_g0/shco_gen_lang.jsp](../dependencias/shco_g0--shco_gen_lang.md)                          |
| BASE   | 38  | /shco_g0/shco_login_box_trans.jsp                    | contextual | [shco_g0/shco_login_box_trans.jsp](../dependencias/shco_g0--shco_login_box_trans.md)            |
| BASE   | 98  | /tctools/cprequest/tc_login_wz_client_code.jsp       | contextual | [tctools/cprequest/tc_login_wz_client_code.jsp](tctools--cprequest--tc_login_wz_client_code.md) |
| BASE   | 134 | /tctools/cprequest/shco_gen_bag_wz_cp.jsp            | contextual | [tctools/cprequest/shco_gen_bag_wz_cp.jsp](tctools--cprequest--shco_gen_bag_wz_cp.md)           |
| BASE   | 141 | com.meta4.jsp                                        | ausente    | P06                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/cprequest/tc_login_wz_person_data.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
