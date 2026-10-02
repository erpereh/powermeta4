# ssco_g3_p11_det

Identificador: `sse_g3/ssco_g3_p11_det.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                  | Texto                                                | Ámbito | Diccionario                                                                         |
| ---------------------- | ---------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_ess.DetInterview    | Detalle de la entrevista                             | BASE   | [translations/ssco_iv_es.properties:L17](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Det_View        | Consulta todos los detalles acerca de tu entrevista. | BASE   | [translations/ssco_iv_es.properties:L21](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Goto            | Ir a                                                 | BASE   | [translations/ssco_iv_es.properties:L13](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.Interview       | Mis entrevistas                                      | BASE   | [translations/ssco_iv_es.properties:L3](../../referencias/literales/ssco_iv_es.md)  |
| iv_ess.Title_Solicitud | Solicitar una entrevista                             | BASE   | [translations/ssco_iv_es.properties:L26](../../referencias/literales/ssco_iv_es.md) |
| iv_ess.View_Doc        | Ver documento                                        | BASE   | [translations/ssco_iv_es.properties:L22](../../referencias/literales/ssco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_g3_p11_det.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11_det.jsp) | `1dc06d6cd94b4a643b34846e8c99520471d37dd85ec1388a4d479d625cc047ba` |    221 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_g3_p11_det.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_g3_p11_det.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 81  | [valor dinámico] [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                       |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79  | img     | alt=&lt;%=zTitle%&gt;; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100                                                                                                      |
| 90  | a       | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31                                                                                     |
| 94  | a       | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31                                                                                         |
| 113 | a       | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31                                                                                     |
| 114 | img     | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 121 | a       | title=JSP_EXPR_tranivESS.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31                                                                                         |
| 122 | img     | alt=JSP_EXPR_tranivESS.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 150 | form    | action=; name=frmivtype; id=frmivtype                                                                                                                                                           |
| 151 | input   | type=hidden; name=SCO_ID_DOC; id=SCO_ID_DOC; value=&lt;%=zIdDoc%&gt;                                                                                                                            |
| 153 | a       | title=JSP_EXPR_tranivESS.getProperty(; href=javascript:ssco_manage_document('view','frmivtype','SCO_ID_DOC');                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 20  | zNODE           | getParameter(request,"zNODE")         |
| 21  | zPOSINTERVIEW   | getParameter(request,"zPOSINTERVIEW") |
| 23  | estado          | getParameter(request,"estado")        |
| 24  | zinicios        | getParameter(request,"zinicios")      |

| L   | Variable                | Expresión fuente                                                          | Resolución estática parcial                                                                                                                                                                                                                                                       |
| --- | ----------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | zTitle                  | tranivESS.getProperty("iv_ess.DetInterview")                              | tranivESS.getProperty("iv_ess.DetInterview")                                                                                                                                                                                                                                      |
| 20  | znode                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE")                                                                                                                                                                                                                 |
| 21  | zposinterview           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW")                                                                                                                                                                                                         |
| 23  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                                                                                                                                                |
| 24  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                                                                                                                                                              |
| 37  | zsubsesion              | "SSE_GN_INTERVIEW"                                                        | SSE_GN_INTERVIEW                                                                                                                                                                                                                                                                  |
| 38  | zmeta4object            | "SSE_GN_INTERVIEW"                                                        | SSE_GN_INTERVIEW                                                                                                                                                                                                                                                                  |
| 42  | zoutputdef              | zsubsesion + "!" + znode + "[*]"                                          | SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"[*]"}                                                                                                                                                                                     |
| 43  | zmove                   | znode + ":" + znode + "["+ zposinterview + "]"                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}                                                        |
| 44  | zcomun                  | znode + ":" + zsubsesion + "!" + znode + "[" + zposinterview + "]" + "."  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}                              |
| 50  | zSCODTFINISH            | zcomun + "SCO_DT_FINISH"                                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_FINISH"}             |
| 51  | zSCODTNEXTINTERVIEW     | zcomun + "SCO_DT_NEXT_INTERVIEW"                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_NEXT_INTERVIEW"}     |
| 52  | zSCODTREQUEST           | zcomun + "SCO_DT_REQUEST"                                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_REQUEST"}            |
| 53  | zSCOGBNAME              | zcomun + "SCO_GB_NAME"                                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_GB_NAME"}               |
| 54  | zSCOIDINTERVIEWDOC      | zcomun + "SCO_ID_INTERVIEW_DOC"                                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_ID_INTERVIEW_DOC"}      |
| 55  | zSCOINTERVIEWNAME       | zcomun + "SCO_INTERVIEW_NAME"                                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_NAME"}        |
| 56  | zSCOINTERVIEWREASON     | zcomun + "SCO_INTERVIEW_REASON"                                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_REASON"}      |
| 57  | zSCOINTERVIEWRESULT     | zcomun + "SCO_INTERVIEW_RESULT"                                           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_RESULT"}      |
| 58  | zSCONMINTERVIEWPRIORITY | zcomun + "SCO_NM_INTERVIEW_PRIORITY"                                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"} |
| 59  | zSCONMINTERVIEWRESULT   | zcomun + "SCO_NM_INTERVIEW_RESULT"                                        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_RESULT"}   |
| 60  | zSCONMINTERVIEWTYPE     | zcomun + "SCO_NM_INTERVIEW_TYPE"                                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                                                                                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64  | m4:startpage | m4task=SSE_GN_INTERVIEW                                                                                                                                                                                                                                                                                              |
| 64  | m4:beginjob  |                                                                                                                                                                                                                                                                                                                      |
| 65  | m4:datadef   | m4o=SSE_GN_INTERVIEW; m4name=SSE_GN_INTERVIEW                                                                                                                                                                                                                                                                        |
| 66  | m4:outputdef | m4alias=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE")                                                                                                                                                                                                                                            |
| 66  | m4:param     | name=m4name0; value=SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"[*]"}                                                                                                                                                                                                    |
| 67  | m4:endjob    |                                                                                                                                                                                                                                                                                                                      |
| 68  | m4:move      |                                                                                                                                                                                                                                                                                                                      |
| 68  | m4:param     | name=SSE_GN_INTERVIEW; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}                                                              |
| 69  | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_ID_INTERVIEW_DOC"}; m4varname=zIdDoc; htmlsafe=true |
| 74  | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                     |
| 131 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                         |
| 134 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                         |
| 139 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                            |
| 142 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                            |
| 147 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                  |
| 153 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                  |
| 155 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                  |
| 162 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true              |
| 165 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_PRIORITY"}; htmlsafe=true              |
| 170 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_REASON"}; htmlsafe=true                   |
| 173 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_REASON"}; htmlsafe=true                   |
| 182 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_FINISH"}; htmlsafe=true                          |
| 185 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_FINISH"}; htmlsafe=true                          |
| 190 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_NEXT_INTERVIEW"}; htmlsafe=true                  |
| 193 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_DT_NEXT_INTERVIEW"}; htmlsafe=true                  |
| 198 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_RESULT"}; htmlsafe=true                |
| 201 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_NM_INTERVIEW_RESULT"}; htmlsafe=true                |
| 206 | m4:label     | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_RESULT"}; htmlsafe=true                   |
| 209 | m4:item      | m4name=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){":"}SSE_GN_INTERVIEW{"!"}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE"){"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW"){"]"}{"."}{"SCO_INTERVIEW_RESULT"}; htmlsafe=true                   |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                           |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                |
| 26  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                        |
| 70  | &lt;%if (!zIdDoc.equals("")) {zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", zIdDoc);}%&gt; |
| 87  | &lt;% if (znode.equals("SSE_PENDING_INTERVIEW"))                                                                                               |
| 92  | } else {                                                                                                                                       |
| 110 | &lt;% if (znode.equals("SSE_PENDING_INTERVIEW"))                                                                                               |
| 118 | else                                                                                                                                           |
| 152 | &lt;% if (!zIdDoc.equals("")) {%&gt;                                                                                                           |
| 154 | &lt;%} else {%&gt;                                                                                                                             |
| 177 | if (znode.equals("M4T_FINISHED_INTERVIEW")) {                                                                                                  |
| 42  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znode + "[*]";                                                     |
| 43  | expresión de cálculo/transformación: String zmove = znode + ":" + znode + "["+ zposinterview + "]";                                            |
| 44  | expresión de cálculo/transformación: String zcomun = znode + ":" + zsubsesion + "!" + znode + "[" + zposinterview + "]" + ".";                 |
| 50  | expresión de cálculo/transformación: String zSCODTFINISH = zcomun + "SCO_DT_FINISH";                                                           |
| 51  | expresión de cálculo/transformación: String zSCODTNEXTINTERVIEW = zcomun + "SCO_DT_NEXT_INTERVIEW";                                            |
| 52  | expresión de cálculo/transformación: String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";                                                         |
| 53  | expresión de cálculo/transformación: String zSCOGBNAME = zcomun + "SCO_GB_NAME";                                                               |
| 54  | expresión de cálculo/transformación: String zSCOIDINTERVIEWDOC = zcomun + "SCO_ID_INTERVIEW_DOC";                                              |
| 55  | expresión de cálculo/transformación: String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";                                                 |
| 56  | expresión de cálculo/transformación: String zSCOINTERVIEWREASON = zcomun + "SCO_INTERVIEW_REASON";                                             |
| 57  | expresión de cálculo/transformación: String zSCOINTERVIEWRESULT = zcomun + "SCO_INTERVIEW_RESULT";                                             |
| 58  | expresión de cálculo/transformación: String zSCONMINTERVIEWPRIORITY = zcomun + "SCO_NM_INTERVIEW_PRIORITY";                                    |
| 59  | expresión de cálculo/transformación: String zSCONMINTERVIEWRESULT = zcomun + "SCO_NM_INTERVIEW_RESULT";                                        |
| 60  | expresión de cálculo/transformación: String zSCONMINTERVIEWTYPE = zcomun + "SCO_NM_INTERVIEW_TYPE";                                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 13  | /sse_g3/ssco_iv_trans.jsp                          |
| 33  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 34  | ../../sse_generico/espanol/generico_links.jsp      |
| 218 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 10  | /libreria/funciones_doc.js                                      |
| 79  | /iconos/noname_objetivos_ess_103_100.gif                        |
| 90  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 |
| 94  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     |
| 113 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 |
| 114 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 121 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     |
| 122 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 153 | javascript:ssco_manage_document(                                |
| 12  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 13  | /sse_g3/ssco_iv_trans.jsp                                       |
| 33  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 34  | ../../sse_generico/espanol/generico_links.jsp                   |
| 218 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | --------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 13  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                      |
| BASE   | 33  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 218 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 10  | /libreria/funciones_doc.js                                      | contextual | [libreria/funciones_doc.js](../../transversal/dependencias/libreria--funciones_doc.md)                    |
| BASE   | 90  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 94  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     | ausente    | P06                                                                                                       |
| BASE   | 113 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31 | ausente    | P06                                                                                                       |
| BASE   | 121 | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31     | ausente    | P06                                                                                                       |
| BASE   | 153 | javascript:ssco_manage_document(                                | dinámica   | P06                                                                                                       |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 13  | /sse_g3/ssco_iv_trans.jsp                                       | contextual | [sse_g3/ssco_iv_trans.jsp](sse_g3--ssco_iv_trans.md)                                                      |
| BASE   | 33  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 218 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_g3_p11_det.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
