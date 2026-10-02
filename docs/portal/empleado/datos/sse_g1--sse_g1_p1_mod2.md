# E-mail

Identificador: `sse_g1/sse_g1_p1_mod2.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                       | Solo en BASE                                                                                                                                                             |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL.CARGA | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL.CARGA | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL.CARGA | m4:exec:CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod2.jsp) | `6cc8dbab1465878d50b9df5e1a2d0424f5fde48a37dbf1ce0bee55b02710e9a8` |    252 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod2.jsp)   | `6cc8dbab1465878d50b9df5e1a2d0424f5fde48a37dbf1ce0bee55b02710e9a8` |    252 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod2.jsp) | `6cc8dbab1465878d50b9df5e1a2d0424f5fde48a37dbf1ce0bee55b02710e9a8` |    252 |
| BASE / español    | [sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod2.jsp)                             | `aca0244ae6f3c5ae733b7b8c6008a835a4bed12136ef440d541a67c6fc867d42` |    232 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                   |
| --- | ------------------------------------------------------------------------------------------ |
| 7   | E-mail                                                                                     |
| 158 | E-mail                                                                                     |
| 161 | Da de alta o modifica tus direcciones de correo electrónico personal. Mis datos personales |
| 177 | E-mail                                                                                     |
| 185 | E-mail personal actual: [valor dinámico]                                                   |
| 188 | * Nuevo E-mail personal                                                                    |
| 212 | E-mail                                                                                     |
| 212 | Lugar                                                                                      |
| 224 | ');"&gt;                                                                                   |
| 235 | ');"&gt;                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 160 | img     | alt=e-mail; title=e-mail; src=/iconos/noname_email_ess_89_100.gif; width=89; height=100                                                                                                                   |
| 164 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                         |
| 169 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=return comprobar()                                              |
| 170 | input   | type=hidden; id=TAG; name=TAG; value=SSE_E_MAIL                                                                                                                                                           |
| 171 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                     |
| 172 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                             |
| 173 | input   | type=hidden; id=NOD; name=NOD; value=SSE_E_MAIL                                                                                                                                                           |
| 174 | input   | type=hidden; name=STD_ID_LOCATION_TYPE; id=STD_ID_LOCATION_TYPE; value=1                                                                                                                                  |
| 179 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                |
| 180 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 190 | input   | class=fuenteformulario; type=text; id=STD_EMAIL; name=STD_EMAIL; size=50; maxlength=40; title=Escribe tu correo electrónico; tabindex=1                                                                   |
| 195 | a       | title=Enviar; href=javascript:void comprobar();; tabindex=2                                                                                                                                               |
| 196 | img     | alt=Enviar; id=enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                          |
| 225 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 226 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 236 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 237 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 61  | estado          | getParameter(request,"estado")   |
| 62  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | ------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 61  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                             |
| 62  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                           |
| 71  | zsubsesion         | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 72  | zmeta4object       | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 73  | znodo              | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 74  | znodo2             | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                           |
| 75  | znodo3             | "SEE_EMAIL_PERSONAL"                                                           | SEE_EMAIL_PERSONAL                                                                                                             |
| 77  | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                            |
| 78  | zventanas          | "6"                                                                            | 6                                                                                                                              |
| 79  | zvuelta            | 2                                                                              | 2                                                                                                                              |
| 80  | zdireccion         | "sse_g1/sse_g1_p1_mod2.jsp"                                                    | sse_g1/sse_g1_p1_mod2.jsp                                                                                                      |
| 81  | zestado            | "11"                                                                           | 11                                                                                                                             |
| 83  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 85  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 86  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 88  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 89  | zmove              | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 90  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 91  | zSTDEMAIL          | zcomun + "STD_EMAIL"                                                           | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}                                                 |
| 92  | zSTDNLOCATIONTYPE  | zcomun + "STD_N_LOCATION_TYPE"                                                 | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                       |
| 93  | zORDINAL           | zcomun + "ORDINAL"                                                             | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                   |
| 94  | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                  |
| 97  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                     |
| 98  | zmove2             | znodo2 + ":"+ znodo2 + "[FIRST]"                                               | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                       |
| 99  | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                          |
| 100 | zSTDNLOCATIONTYPE2 | zcomun2 + "STD_N_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                   |
| 101 | zSTDIDLOCATIONTYPE | zcomun2 + "STD_ID_LOCATION_TYPE"                                               | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                  |
| 103 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL{"[*]"}                                                                                       |
| 104 | zmove3             | znodo3 + ":"+ znodo3 + "[FIRST]"                                               | SEE_EMAIL_PERSONAL{":"}SEE_EMAIL_PERSONAL{"[FIRST]"}                                                                           |
| 105 | zcomun3            | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | SEE_EMAIL_PERSONAL{":"}SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL{"[&amp;VAR.m4lix]"}{"."}                                              |
| 108 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                  |
| 109 | zmetodocarga3      | zsubsesion + "!"+znodo3+".CARGA"                                               | SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL.CARGA                                                                                        |
| 120 | email              | ""                                                                             |                                                                                                                                |
| 145 | zcount             | 0                                                                              | 0                                                                                                                              |
| 146 | zcounti            | 0                                                                              | 0                                                                                                                              |
| 147 | zcount2            | 0                                                                              | 0                                                                                                                              |
| 154 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |
| 155 | zcountv2           | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                        |
| 204 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 205 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 206 | zposicions         | "0"                                                                            | 0                                                                                                                              |
| 207 | zcontrol           | 0                                                                              | 0                                                                                                                              |
| 208 | zposicion          | 0                                                                              | 0                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 112 | m4:startpage | m4task=SSE_E_MAIL                                                                                                                                  |
| 113 | m4:beginjob  |                                                                                                                                                    |
| 114 | m4:datadef   | m4o=SSE_E_MAIL; m4name=SSE_E_MAIL                                                                                                                  |
| 115 | m4:exec      | m4method=SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL.CARGA                                                                                                   |
| 116 | m4:outputdef | m4alias=SEE_EMAIL_PERSONAL                                                                                                                         |
| 116 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SEE_EMAIL_PERSONAL{"[*]"}                                                                                       |
| 117 | m4:endjob    |                                                                                                                                                    |
| 130 | m4:beginjob  |                                                                                                                                                    |
| 131 | m4:datadef   | m4o=SSE_E_MAIL; m4name=SSE_E_MAIL                                                                                                                  |
| 138 | m4:exec      | m4method=CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                             |
| 138 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                         |
| 139 | m4:outputdef | m4alias=SSE_E_MAIL                                                                                                                                 |
| 139 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 140 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                       |
| 140 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                     |
| 141 | m4:endjob    |                                                                                                                                                    |
| 142 | m4:move      |                                                                                                                                                    |
| 142 | m4:param     | name=SSE_E_MAIL; value=SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                     |
| 143 | m4:move      |                                                                                                                                                    |
| 143 | m4:param     | name=SSE_E_MAIL; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                    |
| 214 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                          |
| 221 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                |
| 222 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                               |
| 223 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                     |
| 232 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                |
| 233 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                               |
| 234 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                     |
| 248 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 124 | getItem          | znodo3,zmeta4object,znodo3,"","STD_EMAIL" |
| 134 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 150 | getCount         | znodo,zsubsesion,znodo                    |
| 151 | getCountInClient | znodo,zsubsesion,znodo                    |
| 152 | getCount         | znodo2,zsubsesion,znodo2                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 14  | comprobar  |            |
| 53  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | oemail = new m4objvalidacion('_email','','','La dirección de correo electrónico no puede ser nulo',false);                               |
| 22  | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 25  | alert(texto);                                                                                                                            |
| 28  | if (tp_location!="S")                                                                                                                    |
| 33  | if (oemail.resultado == false)                                                                                                           |
| 38  | if (error == 1)                                                                                                                          |
| 40  | alert(texto);                                                                                                                            |
| 43  | else                                                                                                                                     |
| 48  | else                                                                                                                                     |
| 63  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 64  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 203 | &lt;% if (zcount&gt;0) {                                                                                                                 |
| 219 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 230 | &lt;%}else{%&gt;                                                                                                                         |
| 23  | expresión de cálculo/transformación: texto = texto + "\n El Correo electronico es obligatorio.";                                         |
| 35  | expresión de cálculo/transformación: texto = texto + "\n El formato del correo electrónico es incorrecto.";                              |
| 84  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 86  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 88  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 89  | expresión de cálculo/transformación: String zmove =znodo + ":" +znodo + "[" + zregistroinicial + "]";                                    |
| 90  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 91  | expresión de cálculo/transformación: String zSTDEMAIL = zcomun + "STD_EMAIL";                                                            |
| 92  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";                                          |
| 93  | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 94  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 97  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 98  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":"+ znodo2 + "[FIRST]";                                                   |
| 99  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 100 | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";                                        |
| 101 | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE = zcomun2 + "STD_ID_LOCATION_TYPE";                                       |
| 103 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 104 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":"+ znodo3 + "[FIRST]";                                                   |
| 105 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 108 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 109 | expresión de cálculo/transformación: String zmetodocarga3 = zsubsesion + "!"+znodo3+".CARGA";                                            |
| 205 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 68  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 69  | ../../sse_generico/espanol/generico_links.jsp      |
| 244 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 246 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 160 | /iconos/noname_email_ess_89_100.gif                             |
| 164 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 179 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 180 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 195 | javascript:void comprobar();                                    |
| 196 | /iconos/icono_enviar_ess_36_36.gif                              |
| 225 | javascript:pendientes(                                          |
| 226 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 236 | javascript:pendientes(                                          |
| 237 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 56  | sse_generico/generico_actualizar.jsp                            |
| 68  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 69  | ../../sse_generico/espanol/generico_links.jsp                   |
| 80  | sse_g1/sse_g1_p1_mod2.jsp                                       |
| 244 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p1_mod2.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                          |
| --- | --------------------------------------------------------------------------------- |
| 7   | E-mail                                                                            |
| 134 | E-mail                                                                            |
| 137 | Da de alta o modifica tus direcciones de correo electrónico. Mis datos personales |
| 152 | E-mail                                                                            |
| 160 | * E-mail                                                                          |
| 164 | Lugar                                                                             |
| 165 | "&gt;                                                                             |
| 192 | E-mail                                                                            |
| 192 | Lugar                                                                             |
| 204 | ');"&gt;                                                                          |
| 215 | ');"&gt;                                                                          |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                 |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | img     | alt=e-mail; title=e-mail; src=/iconos/noname_email_ess_89_100.gif; width=89; height=100                                                                                                                   |
| 140 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                         |
| 145 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario; onsubmit=return comprobar()                                              |
| 146 | input   | type=hidden; id=TAG; name=TAG; value=SSE_E_MAIL                                                                                                                                                           |
| 147 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                     |
| 148 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                             |
| 149 | input   | type=hidden; id=NOD; name=NOD; value=SSE_E_MAIL                                                                                                                                                           |
| 154 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                |
| 155 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                      |
| 162 | input   | class=fuenteformulario; type=text; id=STD_EMAIL; name=STD_EMAIL; size=50; maxlength=40; title=Escribe tu correo electrónico; tabindex=1                                                                   |
| 166 | select  | id=STD_ID_LOCATION_TYPE; class=fuenteformulario150; name=STD_ID_LOCATION_TYPE; title=Escoge la ubicación                                                                                                  |
| 168 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                  |
| 175 | a       | title=Enviar; href=javascript:void comprobar();; tabindex=2                                                                                                                                               |
| 176 | img     | alt=Enviar; id=enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                          |
| 205 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 206 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 216 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                    |
| 217 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 61  | estado          | getParameter(request,"estado")   |
| 62  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                    |
| --- | ------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 61  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                             |
| 62  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                           |
| 71  | zsubsesion         | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 72  | zmeta4object       | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 73  | znodo              | "SSE_E_MAIL"                                                                   | SSE_E_MAIL                                                                                                                     |
| 74  | znodo2             | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                           |
| 76  | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                            |
| 77  | zventanas          | "6"                                                                            | 6                                                                                                                              |
| 78  | zvuelta            | 2                                                                              | 2                                                                                                                              |
| 79  | zdireccion         | "sse_g1/sse_g1_p1_mod2.jsp"                                                    | sse_g1/sse_g1_p1_mod2.jsp                                                                                                      |
| 80  | zestado            | "11"                                                                           | 11                                                                                                                             |
| 82  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                           |
| 84  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                          |
| 85  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                             |
| 87  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 88  | zmove              | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 89  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 90  | zSTDEMAIL          | zcomun + "STD_EMAIL"                                                           | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}                                                 |
| 91  | zSTDNLOCATIONTYPE  | zcomun + "STD_N_LOCATION_TYPE"                                                 | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                       |
| 92  | zORDINAL           | zcomun + "ORDINAL"                                                             | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                   |
| 93  | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                  |
| 96  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                     |
| 97  | zmove2             | znodo2 + ":"+ znodo2 + "[FIRST]"                                               | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                       |
| 98  | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                          |
| 99  | zSTDNLOCATIONTYPE2 | zcomun2 + "STD_N_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                   |
| 100 | zSTDIDLOCATIONTYPE | zcomun2 + "STD_ID_LOCATION_TYPE"                                               | M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                  |
| 102 | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA"}                                                                                     |
| 121 | zcount             | 0                                                                              | 0                                                                                                                              |
| 122 | zcounti            | 0                                                                              | 0                                                                                                                              |
| 123 | zcount2            | 0                                                                              | 0                                                                                                                              |
| 130 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                        |
| 131 | zcountv2           | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                        |
| 184 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                               |
| 185 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                |
| 186 | zposicions         | "0"                                                                            | 0                                                                                                                              |
| 187 | zcontrol           | 0                                                                              | 0                                                                                                                              |
| 188 | zposicion          | 0                                                                              | 0                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                 |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 105 | m4:startpage | m4task=SSE_E_MAIL                                                                                                                                  |
| 106 | m4:beginjob  |                                                                                                                                                    |
| 107 | m4:datadef   | m4o=SSE_E_MAIL; m4name=SSE_E_MAIL                                                                                                                  |
| 114 | m4:exec      | m4method=CARGA:{}SSE_E_MAIL{"!SSE_PRINCIPAL.CARGA"}                                                                                                |
| 114 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                         |
| 115 | m4:outputdef | m4alias=SSE_E_MAIL                                                                                                                                 |
| 115 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 116 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                       |
| 116 | m4:param     | name=m4name0; value=SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                     |
| 117 | m4:endjob    |                                                                                                                                                    |
| 118 | m4:move      |                                                                                                                                                    |
| 118 | m4:param     | name=SSE_E_MAIL; value=SSE_E_MAIL{":"}SSE_E_MAIL{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                     |
| 119 | m4:move      |                                                                                                                                                    |
| 119 | m4:param     | name=SSE_E_MAIL; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                    |
| 167 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                              |
| 168 | m4:item      | m4name=M4T_LU_LOCATION_TYPE{":"}SSE_E_MAIL{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                 |
| 194 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                          |
| 201 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                |
| 202 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                               |
| 203 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                     |
| 212 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                                |
| 213 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_EMAIL"}; htmlsafe=true                                               |
| 214 | m4:item      | m4name=SSE_E_MAIL{":"}SSE_E_MAIL{"!"}SSE_E_MAIL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                                     |
| 228 | m4:endpage   |                                                                                                                                                    |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 110 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 126 | getCount         | znodo,zsubsesion,znodo                    |
| 127 | getCountInClient | znodo,zsubsesion,znodo                    |
| 128 | getCount         | znodo2,zsubsesion,znodo2                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 14  | comprobar  |            |
| 53  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | oemail = new m4objvalidacion('_email','','','La dirección de correo electrónico no puede ser nulo',false);                               |
| 22  | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 25  | alert(texto);                                                                                                                            |
| 28  | if (tp_location!="S")                                                                                                                    |
| 33  | if (oemail.resultado == false)                                                                                                           |
| 38  | if (error == 1)                                                                                                                          |
| 40  | alert(texto);                                                                                                                            |
| 43  | else                                                                                                                                     |
| 48  | else                                                                                                                                     |
| 63  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 64  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 183 | &lt;% if (zcount&gt;0) {                                                                                                                 |
| 199 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 210 | &lt;%}else{%&gt;                                                                                                                         |
| 23  | expresión de cálculo/transformación: texto = texto + "\n El Correo electronico es obligatorio.";                                         |
| 35  | expresión de cálculo/transformación: texto = texto + "\n El formato del correo electrónico es incorrecto.";                              |
| 83  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 85  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 87  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 88  | expresión de cálculo/transformación: String zmove =znodo + ":" +znodo + "[" + zregistroinicial + "]";                                    |
| 89  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 90  | expresión de cálculo/transformación: String zSTDEMAIL = zcomun + "STD_EMAIL";                                                            |
| 91  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";                                          |
| 92  | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 93  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 96  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 97  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":"+ znodo2 + "[FIRST]";                                                   |
| 98  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 99  | expresión de cálculo/transformación: String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";                                        |
| 100 | expresión de cálculo/transformación: String zSTDIDLOCATIONTYPE = zcomun2 + "STD_ID_LOCATION_TYPE";                                       |
| 102 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 185 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 68  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 69  | ../../sse_generico/espanol/generico_links.jsp      |
| 224 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 226 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 136 | /iconos/noname_email_ess_89_100.gif                             |
| 140 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 145 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 154 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 155 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 175 | javascript:void comprobar();                                    |
| 176 | /iconos/icono_enviar_ess_36_36.gif                              |
| 205 | javascript:pendientes(                                          |
| 206 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 216 | javascript:pendientes(                                          |
| 217 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 56  | sse_generico/generico_actualizar.jsp                            |
| 68  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 69  | ../../sse_generico/espanol/generico_links.jsp                   |
| 79  | sse_g1/sse_g1_p1_mod2.jsp                                       |
| 224 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 226 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 164 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 179 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 195 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 236 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 56  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 80  | sse_g1/sse_g1_p1_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 164 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 179 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 195 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 236 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 56  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 80  | sse_g1/sse_g1_p1_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 164 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 179 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 195 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 225 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 236 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 56  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 80  | sse_g1/sse_g1_p1_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 244 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 246 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 224 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 226 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 140 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 145 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 154 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 175 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 205 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 216 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 56  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 68  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 69  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 79  | sse_g1/sse_g1_p1_mod2.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 224 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 226 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_mod2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
