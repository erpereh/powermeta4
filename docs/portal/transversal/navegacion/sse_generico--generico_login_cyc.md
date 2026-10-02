# generico_login_cyc

Identificador: `sse_generico/generico_login_cyc.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_cyc.jsp) | `8823aff72467de87633d2b91681369dd96cfd0184642674853d85b9bb4eca5ce` |     15 |
| COLL / compartido | [m4custom/COLL/sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/generico_login_cyc.jsp)                 | `a7f23bb780ce8d5ccaca12962b3a3386cc0ac610a7314b56252c523b2adcbaee` |    267 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_login_cyc.jsp)   | `8823aff72467de87633d2b91681369dd96cfd0184642674853d85b9bb4eca5ce` |     15 |
| CYC / compartido  | [m4custom/CYC/sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/generico_login_cyc.jsp)                   | `a7f23bb780ce8d5ccaca12962b3a3386cc0ac610a7314b56252c523b2adcbaee` |    267 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_login_cyc.jsp) | `8823aff72467de87633d2b91681369dd96cfd0184642674853d85b9bb4eca5ce` |     15 |
| IBER / compartido | [m4custom/IBER/sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/generico_login_cyc.jsp)                 | `a7f23bb780ce8d5ccaca12962b3a3386cc0ac610a7314b56252c523b2adcbaee` |    267 |
| BASE / español    | [sse_generico/espanol/generico_login_cyc.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_login_cyc.jsp)                             | `8823aff72467de87633d2b91681369dd96cfd0184642674853d85b9bb4eca5ce` |     15 |
| BASE / compartido | [sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/sse_generico/generico_login_cyc.jsp)                                             | `3d18e8798083e985b3c11ea561efbbf5e4663294cfaccee0aafd61adec1e7792` |    277 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_login_cyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                               |
| --- | ------- | ----------------------------------------------------------------------- |
| 7   | form    | name=ESSlogin; action=/sse_generico/generico_login_cyc.jsp; method=post |
| 8   | input   | type=hidden; name=lang; value=es                                        |
| 9   | input   | type=hidden; name=params; value=&lt;%=sParams%&gt;                      |
| 10  | form    |                                                                         |

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

| L   | Include                  |
| --- | ------------------------ |
| 1   | ../sgco_params_login.jsp |

| L   | Destino / recurso                    |
| --- | ------------------------------------ |
| 7   | /sse_generico/generico_login_cyc.jsp |
| 1   | ../sgco_params_login.jsp             |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/generico_login_cyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 262 | Meta4 Spain S.A.         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 185 | form    | autocomplete=off; id=loginEMSS; name=login; action=/servlet/login; method=post                                                                                                      |
| 191 | input   | class=inputnofocus; id=userlogin; name=_USER; type=text; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this);      |
| 194 | input   | class=inputnofocus; id=pwdlogin; name=_PASSWD; type=password; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this); |
| 198 | select  | id=selectlang; class=selectfocus; onchange=loadXMLDoc(this);; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this);         |
| 199 | option  | value=en                                                                                                                                                                            |
| 200 | option  | value=es                                                                                                                                                                            |
| 201 | option  | value=fr                                                                                                                                                                            |
| 202 | option  | value=pt                                                                                                                                                                            |
| 204 | input   | id=urllogin; name=_URL; type=hidden; value=&lt;%=sParams%&gt;                                                                                                                       |
| 205 | input   | id=langlogin; name=_LANG; type=hidden                                                                                                                                               |
| 206 | input   | id=initlang; type=hidden; value=                                                                                                                                                    |
| 209 | input   | id=titleRequireCaptcha; type=hidden; value=                                                                                                                                         |
| 210 | input   | id=titleRetypeCaptcha; type=hidden; value=                                                                                                                                          |
| 211 | input   | id=lastUserType; type=hidden; value=&lt;%=sLastUserType%&gt;                                                                                                                        |
| 214 | img     | src=/images/kaptcha.jpg                                                                                                                                                             |
| 216 | input   | id=kaptcha; type=text; size=20; name=kaptcha; value=; title=; onmouseover=ChangeLanguage();                                                                                         |
| 221 | img     | src=/images/kaptcha.jpg                                                                                                                                                             |
| 223 | input   | id=kaptcha; type=text; size=20; name=kaptcha; value=; title=; onmouseover=ChangeLanguage();                                                                                         |
| 229 | input   | name=button; type=button; class=enterlogin; id=buttonenter; style=background-color: #DC0028;                                                                                        |

```
					background-repeat: no-repeat;
					border: 1px solid #DC0028;
					border-radius: 4px;
					color: #FFFFFF;
					margin: 10px;
					max-width: 150px;
					min-height: 30px;
					min-width: 110px;; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this); |
```

| 243 | a | id=lnklost; href=javascript:forgetUserPwd() |
| 255 | a | id=lnkPrivacyLang; href=; style=cursor: pointer; |
| 262 | a | title=Meta4 Spain S.A.; href=[host externo]/ |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 9   | lang            | getParameter(request,"lang")   |
| 10  | lang            | getParameter(request,"lang")   |
| 17  | params          | getParameter(request,"params") |
| 18  | params          | getParameter(request,"params") |

| L   | Variable                 | Expresión fuente                                                                                  | Resolución estática parcial                                                                       |
| --- | ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 9   | sLang                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  |
| 10  | sLang                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  |
| 17  | sParams                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                |
| 18  | sParams                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                |
| 28  | sRequireCaptcha          | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA) | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA) |
| 29  | sRetypeCaptcha           | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA)  | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA)  |
| 30  | sLastUserInLockingDanger | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    |
| 31  | bRequireCaptcha          | "false"                                                                                           | false                                                                                             |
| 32  | bRetypeCaptcha           | "false"                                                                                           | false                                                                                             |
| 33  | sLastUserType            | sLastUserInLockingDanger                                                                          | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag       | Contrato declarado |
| --- | --------- | ------------------ |
| 3   | m4:logout |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                | Argumentos                     |
| --- | ---------------------- | ------------------------------ |
| 103 | CheckCaptchaVisibility | bRequireCaptcha,bRetypeCaptcha |
| 137 | InitializeObj          |                                |
| 150 | ChangeLanguage         |                                |

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 11  | if (sLang == null) {sLang = "";}                                                                        |
| 13  | if (sLang.length() &gt; 2) {                                                                            |
| 19  | if (sParams == null) {sParams = "";}                                                                    |
| 39  | if (sRequireCaptcha != null){ // todo: on user change this should be recalculated                       |
| 41  | }else if (sRetypeCaptcha != null){                                                                      |
| 44  | }else{}                                                                                                 |
| 46  | if (sLastUserType == null) {sLastUserType = "";}                                                        |
| 62  | if (window.parent != window) {                                                                          |
| 63  | if (!window.parent.m4frameContent &#124;&#124; (window.parent.location.host != window.location.host)) { |
| 65  | } else {                                                                                                |
| 70  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile.login) != "undefined"){                  |
| 72  | }else{                                                                                                  |
| 73  | if (m4Login.IE6) {                                                                                      |
| 75  | }else{                                                                                                  |
| 89  | if (bRequireCaptcha){                                                                                   |
| 90  | if (sNewUser.length &gt; 2){                                                                            |
| 91  | if (sNewUser.toUpperCase() != sOldUser.toUpperCase()){                                                  |
| 112 | if (bRequireCaptcha){                                                                                   |
| 113 | if (bRetypeCaptcha){ //Retype Captcha                                                                   |
| 118 | }else{ //Type Captcha                                                                                   |
| 124 | }else{ //No requiere Captcha                                                                            |
| 140 | if (bRequireCaptcha){                                                                                   |
| 142 | if (bRetypeCaptcha){ //Retype Captcha                                                                   |
| 144 | }else{ //Type Captcha                                                                                   |
| 215 | &lt;%if(bRequireCaptcha == "true" &amp;&amp; bRetypeCaptcha == "false"){%&gt;                           |
| 222 | &lt;%if(bRequireCaptcha == "true" &amp;&amp; bRetypeCaptcha == "true"){%&gt;                            |

### Includes, navegación y dependencias

| L   | Include                    |
| --- | -------------------------- |
| 59  | /mobile/include_mobile.jsp |

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 56  | /libreria/mootools.js         |
| 57  | /libreria/functions_m4ajax.js |
| 58  | /libreria/functions_login.js  |
| 71  | /css/style_login_mobile.css   |
| 74  | /css/style_loginIE6.css       |
| 76  | /css/style_login_cyc.css      |
| 185 | /servlet/login                |
| 214 | /images/kaptcha.jpg           |
| 221 | /images/kaptcha.jpg           |
| 243 | javascript:forgetUserPwd()    |
| 262 | [host externo]/               |
| 7   | com.meta4.jsp                 |
| 59  | /mobile/include_mobile.jsp    |

## Versión 3: BASE compartida

Fuente de los localizadores `L`: [sse_generico/generico_login_cyc.jsp](../../../../clon_portal/portal/sse_generico/generico_login_cyc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 272 | Meta4 Spain S.A.         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 195 | form    | autocomplete=off; id=loginEMSS; name=login; action=/servlet/login; method=post                                                                                                      |
| 201 | input   | class=inputnofocus; id=userlogin; name=_USER; type=text; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this);      |
| 204 | input   | class=inputnofocus; id=pwdlogin; name=_PASSWD; type=password; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this); |
| 208 | select  | id=selectlang; class=selectfocus; onchange=loadXMLDoc(this);; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this);         |
| 210 | option  | value=es                                                                                                                                                                            |
| 214 | input   | id=urllogin; name=_URL; type=hidden; value=&lt;%=sParams%&gt;                                                                                                                       |
| 215 | input   | id=langlogin; name=_LANG; type=hidden                                                                                                                                               |
| 216 | input   | id=initlang; type=hidden; value=                                                                                                                                                    |
| 219 | input   | id=titleRequireCaptcha; type=hidden; value=                                                                                                                                         |
| 220 | input   | id=titleRetypeCaptcha; type=hidden; value=                                                                                                                                          |
| 221 | input   | id=lastUserType; type=hidden; value=&lt;%=sLastUserType%&gt;                                                                                                                        |
| 224 | img     | src=/images/kaptcha.jpg                                                                                                                                                             |
| 226 | input   | id=kaptcha; type=text; size=20; name=kaptcha; value=; title=; onmouseover=ChangeLanguage();                                                                                         |
| 231 | img     | src=/images/kaptcha.jpg                                                                                                                                                             |
| 233 | input   | id=kaptcha; type=text; size=20; name=kaptcha; value=; title=; onmouseover=ChangeLanguage();                                                                                         |
| 239 | input   | name=button; type=button; class=enterlogin; id=buttonenter; style=background-color: #DC0028;                                                                                        |

```
					background-repeat: no-repeat;
					border: 1px solid #DC0028;
					border-radius: 4px;
					color: #FFFFFF;
					margin: 10px;
					max-width: 150px;
					min-height: 30px;
					min-width: 110px;; value=; onactivate=activate(this);; onfocus=activate(this);; ondeactivate=deactivate(this);; onblur=deactivate(this); |
```

| 253 | a | id=lnklost; href=javascript:forgetUserPwd() |
| 265 | a | id=lnkPrivacyLang; href=; style=cursor: pointer; |
| 272 | a | title=Meta4 Spain S.A.; href=[host externo]/ |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 9   | lang            | getParameter(request,"lang")   |
| 10  | lang            | getParameter(request,"lang")   |
| 17  | params          | getParameter(request,"params") |
| 18  | params          | getParameter(request,"params") |

| L   | Variable                 | Expresión fuente                                                                                  | Resolución estática parcial                                                                       |
| --- | ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 9   | sLang                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  |
| 10  | sLang                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"lang")                                  |
| 17  | sParams                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                |
| 18  | sParams                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"params")                                |
| 28  | sRequireCaptcha          | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA) | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_REQUIRE_CAPTCHA) |
| 29  | sRetypeCaptcha           | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA)  | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.PARAM_RETYPE_CAPTCHA)  |
| 30  | sLastUserInLockingDanger | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    |
| 31  | bRequireCaptcha          | "false"                                                                                           | false                                                                                             |
| 32  | bRetypeCaptcha           | "false"                                                                                           | false                                                                                             |
| 33  | sLastUserType            | sLastUserInLockingDanger                                                                          | (String) session.getAttribute(com.meta4.security.SecurityAutomationControl.ATT_LOCKING_DANGER)    |
| 52  | nombre                   | "URLANT"                                                                                          | URLANT                                                                                            |
| 53  | valor                    | request.getHeader("referer")                                                                      | request.getHeader("referer")                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag       | Contrato declarado |
| --- | --------- | ------------------ |
| 3   | m4:logout |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                | Argumentos                     |
| --- | ---------------------- | ------------------------------ |
| 110 | CheckCaptchaVisibility | bRequireCaptcha,bRetypeCaptcha |
| 144 | InitializeObj          |                                |
| 157 | ChangeLanguage         |                                |

| L   | Condición / acción / mensaje literal                                                                    |
| --- | ------------------------------------------------------------------------------------------------------- |
| 11  | if (sLang == null) {sLang = "";}                                                                        |
| 13  | if (sLang.length() &gt; 2) {                                                                            |
| 19  | if (sParams == null) {sParams = "";}                                                                    |
| 39  | if (sRequireCaptcha != null){ // todo: on user change this should be recalculated                       |
| 41  | }else if (sRetypeCaptcha != null){                                                                      |
| 44  | }else{}                                                                                                 |
| 46  | if (sLastUserType == null) {sLastUserType = "";}                                                        |
| 69  | if (window.parent != window) {                                                                          |
| 70  | if (!window.parent.m4frameContent &#124;&#124; (window.parent.location.host != window.location.host)) { |
| 72  | } else {                                                                                                |
| 77  | if(typeof(meta4) != "undefined" &amp;&amp; typeof(meta4.mobile.login) != "undefined"){                  |
| 79  | }else{                                                                                                  |
| 80  | if (m4Login.IE6) {                                                                                      |
| 82  | }else{                                                                                                  |
| 96  | if (bRequireCaptcha){                                                                                   |
| 97  | if (sNewUser.length &gt; 2){                                                                            |
| 98  | if (sNewUser.toUpperCase() != sOldUser.toUpperCase()){                                                  |
| 119 | if (bRequireCaptcha){                                                                                   |
| 120 | if (bRetypeCaptcha){ //Retype Captcha                                                                   |
| 125 | }else{ //Type Captcha                                                                                   |
| 131 | }else{ //No requiere Captcha                                                                            |
| 147 | if (bRequireCaptcha){                                                                                   |
| 149 | if (bRetypeCaptcha){ //Retype Captcha                                                                   |
| 151 | }else{ //Type Captcha                                                                                   |
| 225 | &lt;%if(bRequireCaptcha == "true" &amp;&amp; bRetypeCaptcha == "false"){%&gt;                           |
| 232 | &lt;%if(bRequireCaptcha == "true" &amp;&amp; bRetypeCaptcha == "true"){%&gt;                            |

### Includes, navegación y dependencias

| L   | Include                    |
| --- | -------------------------- |
| 66  | /mobile/include_mobile.jsp |

| L   | Destino / recurso             |
| --- | ----------------------------- |
| 63  | /libreria/mootools.js         |
| 64  | /libreria/functions_m4ajax.js |
| 65  | /libreria/functions_login.js  |
| 78  | /css/style_login_mobile.css   |
| 81  | /css/style_loginIE6.css       |
| 83  | /css/style_login_cyc.css      |
| 195 | /servlet/login                |
| 224 | /images/kaptcha.jpg           |
| 231 | /images/kaptcha.jpg           |
| 253 | javascript:forgetUserPwd()    |
| 272 | [host externo]/               |
| 7   | com.meta4.jsp                 |
| 66  | /mobile/include_mobile.jsp    |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                           | Resolución | Ficha / candidato                                                                                                                                            |
| ------ | --- | ------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| COLL   | 7   | /sse_generico/generico_login_cyc.jsp | contextual | [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md); [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md)       |
| COLL   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| COLL   | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| COLL   | 56  | /libreria/mootools.js                | contextual | &#96;m4custom/COLL/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                 |
| COLL   | 57  | /libreria/functions_m4ajax.js        | contextual | [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md); [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md) |
| COLL   | 58  | /libreria/functions_login.js         | contextual | [libreria/functions_login.js](../dependencias/libreria--functions_login.md); [libreria/functions_login.js](../dependencias/libreria--functions_login.md)     |
| COLL   | 243 | javascript:forgetUserPwd()           | dinámica   | P06                                                                                                                                                          |
| COLL   | 262 | [host externo]/                      | externa    | destino externo                                                                                                                                              |
| COLL   | 7   | com.meta4.jsp                        | ausente    | P06                                                                                                                                                          |
| COLL   | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| CYC    | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| CYC    | 7   | /sse_generico/generico_login_cyc.jsp | contextual | [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md); [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md)       |
| CYC    | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| CYC    | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| CYC    | 56  | /libreria/mootools.js                | contextual | &#96;libreria/mootools.js&#96;                                                                                                                               |
| CYC    | 57  | /libreria/functions_m4ajax.js        | contextual | [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md)                                                                                |
| CYC    | 58  | /libreria/functions_login.js         | contextual | [libreria/functions_login.js](../dependencias/libreria--functions_login.md)                                                                                  |
| CYC    | 243 | javascript:forgetUserPwd()           | dinámica   | P06                                                                                                                                                          |
| CYC    | 262 | [host externo]/                      | externa    | destino externo                                                                                                                                              |
| CYC    | 7   | com.meta4.jsp                        | ausente    | P06                                                                                                                                                          |
| CYC    | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| IBER   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| IBER   | 7   | /sse_generico/generico_login_cyc.jsp | contextual | [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md); [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md)       |
| IBER   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| IBER   | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| IBER   | 56  | /libreria/mootools.js                | contextual | &#96;m4custom/IBER/libreria/mootools.js&#96;; &#96;libreria/mootools.js&#96;                                                                                 |
| IBER   | 57  | /libreria/functions_m4ajax.js        | contextual | [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md); [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md) |
| IBER   | 58  | /libreria/functions_login.js         | contextual | [libreria/functions_login.js](../dependencias/libreria--functions_login.md); [libreria/functions_login.js](../dependencias/libreria--functions_login.md)     |
| IBER   | 243 | javascript:forgetUserPwd()           | dinámica   | P06                                                                                                                                                          |
| IBER   | 262 | [host externo]/                      | externa    | destino externo                                                                                                                                              |
| IBER   | 7   | com.meta4.jsp                        | ausente    | P06                                                                                                                                                          |
| IBER   | 59  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| BASE   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| BASE   | 7   | /sse_generico/generico_login_cyc.jsp | contextual | [sse_generico/generico_login_cyc.jsp](sse_generico--generico_login_cyc.md)                                                                                   |
| BASE   | 1   | ../sgco_params_login.jsp             | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                                                     |
| BASE   | 66  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |
| BASE   | 63  | /libreria/mootools.js                | contextual | &#96;libreria/mootools.js&#96;                                                                                                                               |
| BASE   | 64  | /libreria/functions_m4ajax.js        | contextual | [libreria/functions_m4ajax.js](../dependencias/libreria--functions_m4ajax.md)                                                                                |
| BASE   | 65  | /libreria/functions_login.js         | contextual | [libreria/functions_login.js](../dependencias/libreria--functions_login.md)                                                                                  |
| BASE   | 253 | javascript:forgetUserPwd()           | dinámica   | P06                                                                                                                                                          |
| BASE   | 272 | [host externo]/                      | externa    | destino externo                                                                                                                                              |
| BASE   | 7   | com.meta4.jsp                        | ausente    | P06                                                                                                                                                          |
| BASE   | 66  | /mobile/include_mobile.jsp           | contextual | [mobile/include_mobile.jsp](../dependencias/mobile--include_mobile.md)                                                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_login_cyc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
