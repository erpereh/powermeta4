# _change_password

Identificador: `tctools/_change_password.jsp`. Perfil: **transversal**. Dominio: **componentes**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                                            | Texto                                                                                                                                        | Ámbito | Diccionario                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| ChangePwd.CurrentPasswdTooltip                   | Escribe tu contraseña actual.                                                                                                                | BASE   | [translations/tc_login_es.properties:L14](../../referencias/literales/tc_login_es.md) |
| ChangePwd.CurrentPassword                        | Contraseña actual                                                                                                                            | BASE   | [translations/tc_login_es.properties:L15](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePassword                   | Error ejecutando cambio de contraseña. Comprueba que la contraseña actual sea correcta. Si el error persiste, contacta con tu administrador. | BASE   | [translations/tc_login_es.properties:L16](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordContainsNameTokens | La nueva contraseña incluye parte del nombre del usuario. Debe introducir una contraseña que no contenga partes del nombre del usuario.      | BASE   | [translations/tc_login_es.properties:L17](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordNotStrongEnough    | La nueva contraseña no es suficientemente segura según los criterios definidos. Debes introducir una nueva que cumpla con dichos criterios.  | BASE   | [translations/tc_login_es.properties:L19](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ChangePasswordRecentlyUsed       | La nueva contraseña ya ha sido utilizada recientemente. Debes introducir una nueva que no coincida con ninguna recientemente utilizada.      | BASE   | [translations/tc_login_es.properties:L20](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_ExceptionGettingUserSession      | Error recuperando la sessión de usuario. Debes conectarte antes de actualizar tu contraseña.                                                 | BASE   | [translations/tc_login_es.properties:L21](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Error_PasswordExpired                  | Su contraseña ha expirado. Debe actualizarla antes de cualquier otra operación.                                                              | BASE   | [translations/tc_login_es.properties:L25](../../referencias/literales/tc_login_es.md) |
| ChangePwd.NewPasswd                              | Nueva contraseña                                                                                                                             | BASE   | [translations/tc_login_es.properties:L26](../../referencias/literales/tc_login_es.md) |
| ChangePwd.NewPasswdTooltip                       | Escribe tu nueva contraseña.                                                                                                                 | BASE   | [translations/tc_login_es.properties:L27](../../referencias/literales/tc_login_es.md) |
| ChangePwd.PageDesc                               | Introduce tu contraseña actual, la nueva contraseña y confírmala de nuevo                                                                    | BASE   | [translations/tc_login_es.properties:L28](../../referencias/literales/tc_login_es.md) |
| ChangePwd.PageTitle2                             | Cambia tu contraseña                                                                                                                         | BASE   | [translations/tc_login_es.properties:L30](../../referencias/literales/tc_login_es.md) |
| ChangePwd.Password                               | Contraseña                                                                                                                                   | BASE   | [translations/tc_login_es.properties:L31](../../referencias/literales/tc_login_es.md) |
| ChangePwd.ReNewPasswd                            | Confirmación de nueva contraseña                                                                                                             | BASE   | [translations/tc_login_es.properties:L34](../../referencias/literales/tc_login_es.md) |
| ChangePwd.ReNewPasswdTooltip                     | Escribe tu nueva contraseña otra vez.                                                                                                        | BASE   | [translations/tc_login_es.properties:L35](../../referencias/literales/tc_login_es.md) |
| ChangePwd.SendButton                             | Enviar                                                                                                                                       | BASE   | [translations/tc_login_es.properties:L36](../../referencias/literales/tc_login_es.md) |
| ChangePwd.User                                   | Usuario                                                                                                                                      | BASE   | [translations/tc_login_es.properties:L39](../../referencias/literales/tc_login_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tctools/_change_password.jsp](../../../../clon_portal/portal/tctools/_change_password.jsp) | `24dd7e5ec41131a540dc52b39299d68a0e32abc6580c20218cf15fb23d9cbe49` |    186 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tctools/_change_password.jsp](../../../../clon_portal/portal/tctools/_change_password.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 172 | [valor dinámico] :       |
| 174 | [valor dinámico] :       |
| 176 | [valor dinámico] :       |
| 178 | [valor dinámico] :       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 168 | form    | method=post; name=ChangePasswordForm; action=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt;                                   |
| 175 | input   | class=fuenteformulario; type=password; id=M4_CURRENT_PASSWORD; name=M4_CURRENT_PASSWORD; size=14; maxlength=32; title=JSP_EXPR_Tran_tc_login.getProperty(; tabindex=1 |
| 177 | input   | class=fuenteformulario; type=password; id=M4_NEW_PASSWORD; name=M4_NEW_PASSWORD; size=14; maxlength=32; title=JSP_EXPR_Tran_tc_login.getProperty(; tabindex=2         |
| 179 | input   | class=fuenteformulario; type=password; id=M4_RETYPE_PASSWORD; name=M4_RETYPE_PASSWORD; size=14; maxlength=32; title=JSP_EXPR_Tran_tc_login.getProperty(; tabindex=3   |
| 181 | a       | title=JSP_EXPR_Tran_tc_login.getProperty(; href=javascript:CheckAndSubmit();; tabindex=4                                                                              |
| 182 | img     | alt=JSP_EXPR_Tran_tc_login.getProperty(; id=enviar; src=&lt;%=zSendImage%&gt;; width=36; height=36                                                                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                            |
| --- | ---------------- | ----------------------------------------- |
| 15  | M4_ERROR_MESSAGE | getParameter("M4_ERROR_MESSAGE")          |
| 16  | M4_ERROR_MESSAGE | getParameter(request, "M4_ERROR_MESSAGE") |
| 19  | M4_OPCODE        | getParameter("M4_OPCODE")                 |
| 20  | M4_OPCODE        | getParameter(request, "M4_OPCODE")        |

| L   | Variable              | Expresión fuente                                                              | Resolución estática parcial                                                         |
| --- | --------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 15  | sErrorMessage         | (String)request.getParameter("M4_ERROR_MESSAGE")                              | (String)request.getParameter("M4_ERROR_MESSAGE")                                    |
| 16  | sErrorMessage         | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_ERROR_MESSAGE")       |
| 19  | ai_sOpCode            | request.getParameter("M4_OPCODE")                                             | request.getParameter("M4_OPCODE")                                                   |
| 20  | ai_sOpCode            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE")              |
| 35  | iLanguage             | 3                                                                             | 3                                                                                   |
| 36  | zlanguser             | "es"                                                                          | es                                                                                  |
| 37  | zlangfolder           | ""                                                                            |                                                                                     |
| 52  | sNewRequestParameters | "?M4_OPCODE=" + ai_sOpCode                                                    | ?M4_OPCODE={}com.meta4.taglib.util.M4SafeRequest.getParameter(request, "M4_OPCODE") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos |
| --- | -------------- | ---------- |
| 96  | CheckAndSubmit |            |

| L   | Condición / acción / mensaje literal                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((ai_sOpCode == null) &#124;&#124; ai_sOpCode.equals(""))                                                                                        |
| 61  | if ((sErrorMessage == null &#124;&#124; sErrorMessage.equals("")) &amp;&amp; (ai_sOpCode.equals("PASSWORD_EXPIRED")))                               |
| 67  | if (sErrorMessage != null)                                                                                                                          |
| 69  | if (sErrorMessage.equals("ERROR_EXCEPTION_GETTING_USER_SESSION"))                                                                                   |
| 73  | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD"))                                                                                             |
| 77  | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_NOT_STRONG_ENOUGH"))                                                                           |
| 81  | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_RECENTLY_USED"))                                                                               |
| 85  | else if (sErrorMessage.equals("ERROR_CHANGE_PASSWORD_CONTAINS_NAME_TOKENS"))                                                                        |
| 101 | if (ChangePasswordForm.M4_CURRENT_PASSWORD.value == "")                                                                                             |
| 107 | if (ChangePasswordForm.M4_NEW_PASSWORD.value == "")                                                                                                 |
| 113 | if (ChangePasswordForm.M4_RETYPE_PASSWORD.value == "")                                                                                              |
| 119 | if (ChangePasswordForm.M4_NEW_PASSWORD.value != ChangePasswordForm.M4_RETYPE_PASSWORD.value)                                                        |
| 125 | if (ChangePasswordForm.M4_NEW_PASSWORD.value == ChangePasswordForm.M4_CURRENT_PASSWORD.value)                                                       |
| 131 | if (bIsError == true)                                                                                                                               |
| 133 | alert(sErrorMessage);                                                                                                                               |
| 136 | else                                                                                                                                                |
| 145 | if (sErrorMessage != null)                                                                                                                          |
| 52  | expresión de cálculo/transformación: String sNewRequestParameters = "?M4_OPCODE=" + ai_sOpCode;                                                     |
| 53  | expresión de cálculo/transformación: String sChangePasswordUrl = "/tctools/" + zlangfolder + "/change_password_action.jsp" + sNewRequestParameters; |

### Includes, navegación y dependencias

| L   | Include                     |
| --- | --------------------------- |
| 56  | /tctools/tc_login_trans.jsp |

| L   | Destino / recurso                                                                      |
| --- | -------------------------------------------------------------------------------------- |
| 93  | /translations/tctools/tc_login_&lt;%=zlanguser%&gt;.js                                 |
| 168 | &lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt; |
| 181 | javascript:CheckAndSubmit();                                                           |
| 182 | &lt;%=zSendImage%&gt;                                                                  |
| 53  | /change_password_action.jsp                                                            |
| 56  | /tctools/tc_login_trans.jsp                                                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                             | Resolución | Ficha / candidato                                        |
| ------ | --- | -------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------- |
| BASE   | 56  | /tctools/tc_login_trans.jsp                                                            | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md) |
| BASE   | 93  | /translations/tctools/tc_login_&lt;%=zlanguser%&gt;.js                                 | dinámica   | P06                                                      |
| BASE   | 168 | &lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sChangePasswordUrl)%&gt; | dinámica   | P06                                                      |
| BASE   | 181 | javascript:CheckAndSubmit();                                                           | dinámica   | P06                                                      |
| BASE   | 182 | &lt;%=zSendImage%&gt;                                                                  | dinámica   | P06                                                      |
| BASE   | 53  | /change_password_action.jsp                                                            | ausente    | P06                                                      |
| BASE   | 56  | /tctools/tc_login_trans.jsp                                                            | contextual | [tctools/tc_login_trans.jsp](tctools--tc_login_trans.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tctools/_change_password.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
