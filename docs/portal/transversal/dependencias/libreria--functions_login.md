# functions_login

Identificador: `libreria/functions_login.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/functions_login.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_login.js) | `20d53d6a35fd81448a0e775121cbf9f79e4d6c8f82ffcc44006d0dd55945cfbd` |    322 |
| BASE / compartido | [libreria/functions_login.js](../../../../clon_portal/portal/libreria/functions_login.js)                             | `20d53d6a35fd81448a0e775121cbf9f79e4d6c8f82ffcc44006d0dd55945cfbd` |    322 |
| IBER / compartido | [m4custom/IBER/libreria/functions_login.js](../../../../clon_portal/portal/m4custom/IBER/libreria/functions_login.js) | `20d53d6a35fd81448a0e775121cbf9f79e4d6c8f82ffcc44006d0dd55945cfbd` |    322 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/functions_login.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_login.js). Líneas físicas, contando desde 1.

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

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 125 | loadbody      |            |
| 149 | loadXMLDoc    | elem       |
| 161 | loadHTMLDoc   | elem       |
| 166 | activate      | e          |
| 184 | deactivate    | e          |
| 202 | keyenter      | e          |
| 211 | m4xmlsubmit   |            |
| 233 | putLanguage   |            |
| 267 | sendLanguage  |            |
| 272 | forgetUserPwd |            |
| 276 | changeOpacity | iOpc       |
| 312 | setText       | e,vvalue   |

| L   | Condición / acción / mensaje literal                                                             |
| --- | ------------------------------------------------------------------------------------------------ |
| 30  | if (m4Login.userWrong.style.height != '12px' )                                                   |
| 35  | if (m4Login.pwdWrong.style.height != '12px')                                                     |
| 39  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile.login) != "undefined"){           |
| 58  | if (evtobj.keyCode!=32 &amp;&amp; this.value.length&gt;0)                                        |
| 71  | if (evtobj.keyCode!=32 &amp;&amp; this.value.length&gt;0)                                        |
| 112 | if (!m4Login.lang) {m4Login.lang = 'en';loadHTMLDoc(m4Login.lang);}                              |
| 115 | if (m4Login.params) {$('urllogin').value = m4Login.params;}                                      |
| 134 | if (oSelect.options[i].value == m4Login.lang) {                                                  |
| 151 | if (elem.selectedIndex &gt; -1) {                                                                |
| 153 | if (!m4Login.bInitLoad) {                                                                        |
| 168 | if (!m4Login.labelUser &#124;&#124; !m4Login.labelPwd &#124;&#124; !m4Login.labelLang) {return;} |
| 172 | if (e.id=="buttonenter") {classfocus='#enterdiv .enterloginfocus';}                              |
| 173 | else if (e.id=="selectlang") {classfocus='';}                                                    |
| 174 | else {classfocus='#frmlogin .inputfocus';}                                                       |
| 176 | if (classfocus != '') {$(e.id).morph(classfocus);}                                               |
| 178 | if (e.id=="userlogin") {m4Login.labelUser.morph('#frmlogin .labelfocus');}                       |
| 179 | else if (e.id=="pwdlogin") {m4Login.labelPwd.morph('#frmlogin .labelfocus');}                    |
| 180 | else if (e.id=="selectlang") {m4Login.labelLang.morph('#frmlogin .labelfocus');}                 |
| 186 | if (!m4Login.labelUser &#124;&#124; !m4Login.labelPwd &#124;&#124; !m4Login.labelLang) {return;} |
| 190 | if (e.id == "buttonenter") {classnofocus='#enterdiv .enterloginnofocus';}                        |
| 191 | else if (e.id=="selectlang") {classnofocus='';}                                                  |
| 192 | else {classnofocus='#frmlogin .inputnofocus';}                                                   |
| 194 | if (classnofocus != '') { $(e.id).morph(classnofocus);}                                          |
| 196 | if (e.id=="userlogin") {m4Login.labelUser.morph('#frmlogin .labelnofocus');}                     |
| 197 | else if (e.id=="pwdlogin") {m4Login.labelPwd.morph('#frmlogin .labelnofocus');}                  |
| 198 | else if (e.id=="selectlang") {m4Login.labelLang.morph('#frmlogin .labelnofocus');}               |
| 204 | if (e.key == 'enter') {                                                                          |
| 213 | if (m4Login.userLogin.value == "")                                                               |
| 219 | if (m4Login.pwdLogin.value == "")                                                                |
| 225 | if (berror==true)                                                                                |
| 235 | switch (m4Login.selectLang.value)                                                                |
| 237 | case 'en':                                                                                       |
| 242 | case 'es':                                                                                       |
| 247 | case 'fr':                                                                                       |
| 252 | case 'pt':                                                                                       |
| 278 | if (iOpc == 0)                                                                                   |
| 294 | else                                                                                             |
| 314 | if (m4Login.IE)                                                                                  |
| 318 | else                                                                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                           |
| --- | ------------------------------------------- |
| 162 | /translations/condition_                    |
| 163 | /translations/security_                     |
| 164 | /translations/privacy_                      |
| 273 | /tctools/cpaction/tc_login_wz_cp_action.jsp |
| 162 | .html                                       |
| 163 | .html                                       |
| 164 | .html                                       |
| 263 | ../sse_generico/sgco_putsession.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                  | Resolución | Ficha / candidato                                                                                        |
| ------ | --- | ------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| COLL   | 273 | /tctools/cpaction/tc_login_wz_cp_action.jsp | contextual | [tctools/cpaction/tc_login_wz_cp_action.jsp](../componentes/tctools--cpaction--tc_login_wz_cp_action.md) |
| COLL   | 263 | ../sse_generico/sgco_putsession.jsp         | física     | [sse_generico/sgco_putsession.jsp](../navegacion/sse_generico--sgco_putsession.md)                       |
| BASE   | 273 | /tctools/cpaction/tc_login_wz_cp_action.jsp | contextual | [tctools/cpaction/tc_login_wz_cp_action.jsp](../componentes/tctools--cpaction--tc_login_wz_cp_action.md) |
| BASE   | 263 | ../sse_generico/sgco_putsession.jsp         | física     | [sse_generico/sgco_putsession.jsp](../navegacion/sse_generico--sgco_putsession.md)                       |
| IBER   | 273 | /tctools/cpaction/tc_login_wz_cp_action.jsp | contextual | [tctools/cpaction/tc_login_wz_cp_action.jsp](../componentes/tctools--cpaction--tc_login_wz_cp_action.md) |
| IBER   | 263 | ../sse_generico/sgco_putsession.jsp         | física     | [sse_generico/sgco_putsession.jsp](../navegacion/sse_generico--sgco_putsession.md)                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/functions_login.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
