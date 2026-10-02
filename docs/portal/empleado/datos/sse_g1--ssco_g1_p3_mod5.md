# ssco_g1_p3_mod5

Identificador: `sse_g1/ssco_g1_p3_mod5.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                  | Solo en BASE                                                                                                                                                                                                                                                                                                              |
| ------ | --------- | ------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                           | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                   |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores                           | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                   |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                           | sin diferencia en estos identificadores                                                                                                                                                                                                                                                                                   |
| COLL   | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}; m4:label:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"} |
| CYC    | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}; m4:label:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"} |
| IBER   | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA"}; m4:item:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}; m4:label:SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                | Ámbito | Diccionario                                                                                  |
| ----------------------- | ---------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Delete2          | Eliminar la petición                                 | COLL   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                 | CYC    | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                 | IBER   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                 | BASE   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                               | COLL   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                               | CYC    | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                               | IBER   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                               | BASE   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                               | BASE   | [translations/shco_g0_es.properties:L34](../../referencias/literales/shco_g0_es.md)          |
| Button.Send             | Enviar                                               | BASE   | [translations/ssco_etask_es.properties:L35](../../referencias/literales/ssco_etask_es.md)    |
| Label.LblSelect         | Selecciona                                           | COLL   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelect         | Selecciona                                           | CYC    | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelect         | Selecciona                                           | IBER   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelect         | Selecciona                                           | BASE   | [translations/ess_mss_gen_es.properties:L162](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                              | COLL   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                              | CYC    | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                              | IBER   | [translations/ess_mss_gen_es.properties:L164](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWrite          | Escribe                                              | BASE   | [translations/ess_mss_gen_es.properties:L163](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                | COLL   | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                | CYC    | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                | IBER   | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                | BASE   | [translations/ess_mss_gen_es.properties:L126](../../referencias/literales/ess_mss_gen_es.md) |
| Label.sse_g1_p3_mod5Des | En esta pantalla puedes añadir tu formación externa. | COLL   | [translations/sse_g1_es.properties:L115](../../referencias/literales/sse_g1_es.md)           |
| Label.sse_g1_p3_mod5Des | En esta pantalla puedes añadir tu formación externa. | IBER   | [translations/sse_g1_es.properties:L115](../../referencias/literales/sse_g1_es.md)           |
| Label.sse_g1_p3_mod5Des | En esta pantalla puedes añadir tus otros cursos.     | BASE   | [translations/sse_g1_es.properties:L115](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3         | Mis datos profesionales                              | COLL   | [translations/sse_g1_es.properties:L134](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3         | Mis datos profesionales                              | IBER   | [translations/sse_g1_es.properties:L134](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3         | Mis datos profesionales                              | BASE   | [translations/sse_g1_es.properties:L134](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5    | Mi formación externa                                 | COLL   | [translations/sse_g1_es.properties:L113](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5    | Mi formación externa                                 | IBER   | [translations/sse_g1_es.properties:L113](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5    | Mis otros cursos                                     | BASE   | [translations/sse_g1_es.properties:L113](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5Des | Formación externa                                    | COLL   | [translations/sse_g1_es.properties:L114](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5Des | Formación externa                                    | IBER   | [translations/sse_g1_es.properties:L114](../../referencias/literales/sse_g1_es.md)           |
| Title.sse_g1_p3_mod5Des | Otros cursos                                         | BASE   | [translations/sse_g1_es.properties:L114](../../referencias/literales/sse_g1_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p3_mod5.jsp) | `b8f031ae91521c74410e962d0b0b81fba42c6efaf0d0d851f817650591724bf3` |     32 |
| COLL / compartido | [m4custom/COLL/sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/ssco_g1_p3_mod5.jsp)                 | `98da5bb086e0dd13b3a4053d1f504549d3c1aabbf297012660eee63e63e90676` |    287 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p3_mod5.jsp)   | `e5a881506c4eee4d17aa02abc7c3227c9ccea1e9976cda7b2714e60460e46020` |     43 |
| CYC / compartido  | [m4custom/CYC/sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/ssco_g1_p3_mod5.jsp)                   | `98da5bb086e0dd13b3a4053d1f504549d3c1aabbf297012660eee63e63e90676` |    287 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/ssco_g1_p3_mod5.jsp) | `b8f031ae91521c74410e962d0b0b81fba42c6efaf0d0d851f817650591724bf3` |     32 |
| IBER / compartido | [m4custom/IBER/sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/ssco_g1_p3_mod5.jsp)                 | `98da5bb086e0dd13b3a4053d1f504549d3c1aabbf297012660eee63e63e90676` |    287 |
| BASE / español    | [sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/sse_g1/espanol/ssco_g1_p3_mod5.jsp)                             | `b8f031ae91521c74410e962d0b0b81fba42c6efaf0d0d851f817650591724bf3` |     32 |
| BASE / compartido | [sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/sse_g1/ssco_g1_p3_mod5.jsp)                                             | `d481b6d8fc9150287e36c3c0f3f50b88c68c3c54829291e428584f23e6d96545` |    285 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p3_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente                   | Resolución estática parcial        |
| --- | -------- | ---------------------------------- | ---------------------------------- |
| 16  | estado   | zobjtabla.m4paramvalor("estado")   | zobjtabla.m4paramvalor("estado")   |
| 17  | zinicios | zobjtabla.m4paramvalor("zinicios") | zobjtabla.m4paramvalor("zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 30  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                     |
| --- | ------------------------------------------------------------------------ |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}          |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){ zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../sse_generico/espanol/menu_ess.jsp               |
| 8   | ../../sse_g1/sse_g1_trans.jsp                         |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 25  | ../ssco_g1_p3_mod5.jsp                                |
| 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 28  | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 11  | /css/estilo_sse.css                                   |
| 12  | /libreria/funciones_sse.js                            |
| 13  | /libreria/clase_val_entradas.js                       |
| 7   | ../../sse_generico/espanol/menu_ess.jsp               |
| 8   | ../../sse_g1/sse_g1_trans.jsp                         |
| 23  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 24  | ../../sse_generico/espanol/generico_links.jsp         |
| 25  | ../ssco_g1_p3_mod5.jsp                                |
| 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 28  | ../../sse_generico/espanol/generico_disclaimer.jsp    |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/ssco_g1_p3_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 148 | Indica tu formación externa [valor dinámico]                                                                                          |
| 168 | *                                                                                                                                     |
| 169 | " maxlength="10" size="10" tabindex="1" /&gt; " href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))"&gt; "&gt; |
| 176 | " maxlength="10" size="10" /&gt; " href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))"&gt; "&gt;                |
| 184 | *                                                                                                                                     |
| 185 | " maxlength=62 /&gt;                                                                                                                  |
| 188 | " maxlength=4 /&gt;                                                                                                                   |
| 192 | " maxlength=62 /&gt;                                                                                                                  |
| 194 | "&gt; "&gt;                                                                                                                           |
| 212 | " maxlength=254 &gt;                                                                                                                  |
| 269 | ');"&gt;                                                                                                                              |
| 282 | ');"&gt;                                                                                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                                              |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 147 | img      | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/otros_cursos_70x100.gif; width=100; height=100                                                                                                 |
| 151 | a        | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11                                                                                                          |
| 157 | form     | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                        |
| 158 | input    | type=hidden; id=TAG; name=TAG; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 159 | input    | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                  |
| 160 | input    | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                          |
| 161 | input    | type=hidden; id=NOD; name=NOD; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 165 | a        | href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                                                                                                                         |
| 165 | img      | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 170 | input    | class=fuenteformulario; type=text; name=SCO_DT_START; id=SCO_DT_START; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                 |
| 171 | a        | title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                                                                                        |
| 172 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                             |
| 177 | input    | class=fuenteformulario; type=text; name=SCO_DT_END; id=SCO_DT_END; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                       |
| 178 | a        | title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                                                                                          |
| 179 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                               |
| 185 | input    | class=fuenteformulario; type=text; id=SCO_N_COURSE; name=SCO_N_COURSE; size=50; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONCOURSE%&gt;                                                                                        |
| 188 | input    | class=fuenteformulario; type=text; id=SCO_NUMBER_HOURS; name=SCO_NUMBER_HOURS; size=4; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONUMBERHOURS%&gt;                                                                             |
| 192 | input    | class=fuenteformulario; type=text; id=SCO_N_CENTER; name=SCO_N_CENTER; size=50; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONCENTER%&gt;                                                                                        |
| 196 | select   | id=STD_ID_COUNTRY; class=fuenteformulario; name=STD_ID_COUNTRY; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDIDCOUNTRY%&gt;                                                                                                      |
| 197 | option   | value=                                                                                                                                                                                                                                 |
| 199 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                               |
| 213 | textarea | rows=3; class=fuenteformulario; type=text; cols=30; id=SCO_COMMENT; name=SCO_COMMENT; title=; m4name=&lt;%=zSCOCOMMENT%&gt;                                                                                                            |
| 217 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:comprobar()                                                                                                                                                                          |
| 217 | img      | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                              |
| 229 | form     | action=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                            |
| 230 | input    | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                        |
| 232 | form     | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                                                                                                    |
| 233 | input    | type=hidden; id=TAG; name=TAG; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 234 | input    | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                                                                                                            |
| 235 | input    | type=hidden; id=NOD; name=NOD; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 236 | input    | type=hidden; id=REC; name=REC                                                                                                                                                                                                          |
| 269 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                               |
| 269 | img      | align=right; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                 |
| 282 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                               |
| 282 | img      | align=right; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                            |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 69  | zsubsesion        | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 70  | zmeta4object      | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 71  | znodo             | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 72  | znodo2            | "M4T_LU_COUNTRY"                                                               | M4T_LU_COUNTRY                                                                                                                                         |
| 75  | zventanas         | "6"                                                                            | 6                                                                                                                                                      |
| 76  | zvuelta           | 2                                                                              | 2                                                                                                                                                      |
| 77  | zdireccion        | "sse_g1/sse_g1_p3_mod5.jsp"                                                    | sse_g1/sse_g1_p3_mod5.jsp                                                                                                                              |
| 78  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                                   |
| 80  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                                  |
| 81  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                     |
| 83  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 84  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 85  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                                                  |
| 87  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[*]"}                                                                                                       |
| 88  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_COUNTRY{":"}M4T_LU_COUNTRY{"[FIRST]"}                                                                                                           |
| 89  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                                  |
| 94  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                              |
| 95  | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                                    |
| 99  | zSCODTSTART       | zcomun + "SCO_DT_START"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                  |
| 100 | zSCODTEND         | zcomun + "SCO_DT_END"                                                          | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                                    |
| 101 | zSCONCOURSE       | zcomun + "SCO_N_COURSE"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                  |
| 102 | zSCONUMBERHOURS   | zcomun + "SCO_NUMBER_HOURS"                                                    | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}                              |
| 103 | zSCONCENTER       | zcomun + "SCO_N_CENTER"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}                                  |
| 104 | zSTDNCOUNTRY      | zcomun + "STD_N_COUNTRY"                                                       | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                 |
| 105 | zSCOGRANTS        | zcomun + "SCO_GRANTS"                                                          | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}                                    |
| 106 | zSCOCOMMENT       | zcomun + "SCO_COMMENT"                                                         | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                   |
| 108 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                       |
| 109 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                      |
| 111 | zSTDIDCOUNTRY     | zcomun2 + "STD_ID_COUNTRY"                                                     | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                |
| 112 | zSTDNCOUNTRY2     | zcomun2 + "STD_N_COUNTRY"                                                      | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                                 |
| 132 | zcount            | 0                                                                              | 0                                                                                                                                                      |
| 133 | zcounti           | 0                                                                              | 0                                                                                                                                                      |
| 134 | zcount2i          | 0                                                                              | 0                                                                                                                                                      |
| 141 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                                |
| 142 | zcount2v          | String.valueOf(zcount2i)                                                       | String.valueOf(zcount2i)                                                                                                                               |
| 222 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                       |
| 223 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                        |
| 224 | zposicions        | "0"                                                                            | 0                                                                                                                                                      |
| 225 | zcontrol          | 0                                                                              | 0                                                                                                                                                      |
| 226 | zposicion         | 0                                                                              | 0                                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                         |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:startpage | m4task=SSE_HR_COMP_BACKGROUND                                                                                                                                              |
| 117 | m4:beginjob  |                                                                                                                                                                            |
| 118 | m4:datadef   | m4o=SSE_HR_COMP_BACKGROUND; m4name=SSE_HR_COMP_BACKGROUND                                                                                                                  |
| 125 | m4:exec      | m4method=CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                         |
| 125 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                                 |
| 126 | m4:outputdef | m4alias=SSE_HR_COMP_BACKGROUND                                                                                                                                             |
| 126 | m4:param     | name=m4name0; value=SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 127 | m4:outputdef | m4alias=M4T_LU_COUNTRY                                                                                                                                                     |
| 127 | m4:param     | name=m4name0; value=SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[*]"}                                                                                                       |
| 128 | m4:endjob    |                                                                                                                                                                            |
| 129 | m4:move      |                                                                                                                                                                            |
| 129 | m4:param     | name=SSE_HR_COMP_BACKGROUND; value=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                         |
| 130 | m4:move      |                                                                                                                                                                            |
| 130 | m4:param     | name=SSE_HR_COMP_BACKGROUND; value=M4T_LU_COUNTRY{":"}M4T_LU_COUNTRY{"[FIRST]"}                                                                                            |
| 168 | m4:label     | item=SCO_DT_START; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                         |
| 175 | m4:label     | item=SCO_DT_END; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                           |
| 184 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                               |
| 187 | m4:label     | item=SCO_NUMBER_HOURS; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                     |
| 191 | m4:label     | item=SCO_N_CENTER; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                         |
| 193 | m4:label     | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                             |
| 198 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                                      |
| 199 | m4:item      | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                               |
| 211 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                                |
| 242 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                               |
| 243 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                                                 |
| 244 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                               |
| 245 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}                                           |
| 246 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}                                               |
| 247 | m4:label     | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                             |
| 249 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                                |
| 253 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |
| 260 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                    |
| 261 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                |
| 262 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                  |
| 263 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}; htmlsafe=true                                |
| 264 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}; htmlsafe=true                            |
| 265 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}; htmlsafe=true                                |
| 266 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                               |
| 268 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                 |
| 273 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                    |
| 274 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                |
| 275 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                  |
| 276 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}; htmlsafe=true                                |
| 277 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}; htmlsafe=true                            |
| 278 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}; htmlsafe=true                                |
| 279 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                               |
| 281 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                 |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 121 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 137 | getCount         | znodo,zsubsesion,znodo                    |
| 138 | getCountInClient | znodo,zsubsesion,znodo                    |
| 139 | getCountInClient | znodo2,zsubsesion,znodo2                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 3   | comprobar |            |
| 63  | borrar    | reg        |

| L   | Condición / acción / mensaje literal                                                                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");                                                                                                        |
| 21  | dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");                                                                                                            |
| 22  | fechasok = m4compfechas(m4objeto("SCO_DT_START","NombreFormulario"),'&lt;=',m4objeto("SCO_DT_END","NombreFormulario"));                                                                 |
| 24  | var num = new m4objvalidacion('_num','1','99','',false);                                                                                                                                |
| 32  | if (dtstart == null &#124;&#124; dtstart == ""){                                                                                                                                        |
| 36  | if (ncourse == null &#124;&#124; ncourse == ""){                                                                                                                                        |
| 41  | if ((dtstart != null &amp;&amp; dtstart != "") &amp;&amp; (dtstartok == "")){                                                                                                           |
| 45  | if ((dtend != null &amp;&amp; dtend !="") &amp;&amp; (dtendok == "")){                                                                                                                  |
| 49  | if ((dtend != null &amp;&amp; dtend !="") &amp;&amp; (dtendok != "") &amp;&amp; (dtstart != null &amp;&amp; dtstart !="") &amp;&amp; (dtstartok != "") &amp;&amp; (fechasok == false)){ |
| 54  | if (error == 1){                                                                                                                                                                        |
| 55  | alert(texto);                                                                                                                                                                           |
| 57  | }else {                                                                                                                                                                                 |
| 221 | &lt;%if (zcounti &gt; 0) {                                                                                                                                                              |
| 258 | if (zcontrol==0){%&gt;                                                                                                                                                                  |
| 271 | &lt;%}else{%&gt;                                                                                                                                                                        |
| 33  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_2");                                                                                      |
| 37  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_ess_oc_0");                                                                                            |
| 42  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_3");                                                                                      |
| 46  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_8");                                                                                      |
| 50  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_9");                                                                                      |
| 79  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                           |
| 81  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                              |
| 83  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                |
| 84  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                                 |
| 85  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                 |
| 87  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                            |
| 88  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                                                 |
| 89  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                              |
| 94  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                                                                           |
| 99  | expresión de cálculo/transformación: String zSCODTSTART = zcomun + "SCO_DT_START";                                                                                                      |
| 100 | expresión de cálculo/transformación: String zSCODTEND = zcomun + "SCO_DT_END";                                                                                                          |
| 101 | expresión de cálculo/transformación: String zSCONCOURSE = zcomun + "SCO_N_COURSE";                                                                                                      |
| 102 | expresión de cálculo/transformación: String zSCONUMBERHOURS = zcomun + "SCO_NUMBER_HOURS";                                                                                              |
| 103 | expresión de cálculo/transformación: String zSCONCENTER = zcomun + "SCO_N_CENTER";                                                                                                      |
| 104 | expresión de cálculo/transformación: String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";                                                                                                    |
| 105 | expresión de cálculo/transformación: String zSCOGRANTS = zcomun + "SCO_GRANTS";                                                                                                         |
| 106 | expresión de cálculo/transformación: String zSCOCOMMENT = zcomun + "SCO_COMMENT";                                                                                                       |
| 108 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                              |
| 109 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                             |
| 111 | expresión de cálculo/transformación: String zSTDIDCOUNTRY= zcomun2 + "STD_ID_COUNTRY";                                                                                                  |
| 112 | expresión de cálculo/transformación: String zSTDNCOUNTRY2 = zcomun2 + "STD_N_COUNTRY";                                                                                                  |
| 223 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                           |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 147 | /iconos/otros_cursos_70x100.gif                                 |
| 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      |
| 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 165 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 171 | javascript:m4calendario(m4objeto(                               |
| 172 | /iconos/icono_calendario_14_18.gif                              |
| 178 | javascript:m4calendario(m4objeto(                               |
| 179 | /iconos/icono_calendario_14_18.gif                              |
| 217 | javascript:comprobar()                                          |
| 217 | /iconos/icono_enviar_ess_36_36.gif                              |
| 229 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 |
| 232 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 269 | javascript:borrar(                                              |
| 269 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 282 | javascript:borrar(                                              |
| 282 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 77  | sse_g1/sse_g1_p3_mod5.jsp                                       |

## Versión 3: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p3_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente                   | Resolución estática parcial        |
| --- | -------- | ---------------------------------- | ---------------------------------- |
| 27  | estado   | zobjtabla.m4paramvalor("estado")   | zobjtabla.m4paramvalor("estado")   |
| 28  | zinicios | zobjtabla.m4paramvalor("zinicios") | zobjtabla.m4paramvalor("zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 41  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                     |
| --- | ------------------------------------------------------------------------ |
| 29  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}          |
| 30  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){ zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 7   | ../../sse_generico/espanol/menu_ess.jsp               |
| 8   | ../../sse_g1/sse_g1_trans.jsp                         |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 35  | ../../sse_generico/espanol/generico_links.jsp         |
| 36  | ../ssco_g1_p3_mod5.jsp                                |
| 37  | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 39  | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 10  | /calendario/jquery-ui.css                             |
| 11  | /calendario/jquery-1.12.4.js                          |
| 12  | /calendario/jquery-ui.js                              |
| 22  | /css/estilo_sse.css                                   |
| 23  | /libreria/funciones_sse.js                            |
| 24  | /libreria/clase_val_entradas.js                       |
| 7   | ../../sse_generico/espanol/menu_ess.jsp               |
| 8   | ../../sse_g1/sse_g1_trans.jsp                         |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp       |
| 35  | ../../sse_generico/espanol/generico_links.jsp         |
| 36  | ../ssco_g1_p3_mod5.jsp                                |
| 37  | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 39  | ../../sse_generico/espanol/generico_disclaimer.jsp    |

## Versión 4: BASE compartida

Fuente de los localizadores `L`: [sse_g1/ssco_g1_p3_mod5.jsp](../../../../clon_portal/portal/sse_g1/ssco_g1_p3_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 148 | [valor dinámico] [valor dinámico]                                                                                                     |
| 168 | *                                                                                                                                     |
| 169 | " maxlength="10" size="10" tabindex="1" /&gt; " href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))"&gt; "&gt; |
| 176 | " maxlength="10" size="10" /&gt; " href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))"&gt; "&gt;                |
| 184 | *                                                                                                                                     |
| 185 | " maxlength=62 /&gt;                                                                                                                  |
| 187 | *                                                                                                                                     |
| 188 | " maxlength=4 /&gt;                                                                                                                   |
| 192 | " maxlength=62 /&gt;                                                                                                                  |
| 194 | "&gt; "&gt;                                                                                                                           |
| 206 | " maxlength=254 /&gt;                                                                                                                 |
| 210 | " maxlength=254 &gt;                                                                                                                  |
| 267 | ');"&gt;                                                                                                                              |
| 280 | ');"&gt;                                                                                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                                              |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 147 | img      | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/otros_cursos_70x100.gif; width=100; height=100                                                                                                 |
| 151 | a        | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11                                                                                                          |
| 157 | form     | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                        |
| 158 | input    | type=hidden; id=TAG; name=TAG; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 159 | input    | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                  |
| 160 | input    | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                          |
| 161 | input    | type=hidden; id=NOD; name=NOD; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 165 | a        | href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11                                                                                                                                                                         |
| 165 | img      | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 170 | input    | class=fuenteformulario; type=text; name=SCO_DT_START; id=SCO_DT_START; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                 |
| 171 | a        | title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                                                                                        |
| 172 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTSTART%&gt;                                                                                                             |
| 177 | input    | class=fuenteformulario; type=text; name=SCO_DT_END; id=SCO_DT_END; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                       |
| 178 | a        | title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                                                                                          |
| 179 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCODTEND%&gt;                                                                                                               |
| 185 | input    | class=fuenteformulario; type=text; id=SCO_N_COURSE; name=SCO_N_COURSE; size=50; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONCOURSE%&gt;                                                                                        |
| 188 | input    | class=fuenteformulario; type=text; id=SCO_NUMBER_HOURS; name=SCO_NUMBER_HOURS; size=4; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONUMBERHOURS%&gt;                                                                             |
| 192 | input    | class=fuenteformulario; type=text; id=SCO_N_CENTER; name=SCO_N_CENTER; size=50; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCONCENTER%&gt;                                                                                        |
| 196 | select   | id=STD_ID_COUNTRY; class=fuenteformulario; name=STD_ID_COUNTRY; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDIDCOUNTRY%&gt;                                                                                                      |
| 197 | option   | value=                                                                                                                                                                                                                                 |
| 199 | option   | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                               |
| 206 | input    | class=fuenteformulario; type=text; id=SCO_GRANTS; name=SCO_GRANTS; size=60; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSCOGRANTS%&gt;                                                                                             |
| 211 | textarea | rows=3; class=fuenteformulario; type=text; cols=30; id=SCO_COMMENT; name=SCO_COMMENT; title=; m4name=&lt;%=zSCOCOMMENT%&gt;                                                                                                            |
| 215 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:comprobar()                                                                                                                                                                          |
| 215 | img      | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                              |
| 227 | form     | action=/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                            |
| 228 | input    | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                        |
| 230 | form     | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=Formulario; id=Formulario                                                                                                                    |
| 231 | input    | type=hidden; id=TAG; name=TAG; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 232 | input    | type=hidden; id=ACC; name=ACC; value=BORRAR                                                                                                                                                                                            |
| 233 | input    | type=hidden; id=NOD; name=NOD; value=SSE_HR_COMP_BACKGROUND                                                                                                                                                                            |
| 234 | input    | type=hidden; id=REC; name=REC                                                                                                                                                                                                          |
| 267 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                               |
| 267 | img      | align=right; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                 |
| 280 | a        | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                               |
| 280 | img      | align=right; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                            |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 69  | zsubsesion        | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 70  | zmeta4object      | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 71  | znodo             | "SSE_HR_COMP_BACKGROUND"                                                       | SSE_HR_COMP_BACKGROUND                                                                                                                                 |
| 72  | znodo2            | "M4T_LU_COUNTRY"                                                               | M4T_LU_COUNTRY                                                                                                                                         |
| 75  | zventanas         | "6"                                                                            | 6                                                                                                                                                      |
| 76  | zvuelta           | 2                                                                              | 2                                                                                                                                                      |
| 77  | zdireccion        | "sse_g1/sse_g1_p3_mod5.jsp"                                                    | sse_g1/sse_g1_p3_mod5.jsp                                                                                                                              |
| 78  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                                   |
| 80  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                                  |
| 81  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                     |
| 83  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 84  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 85  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}                                                  |
| 87  | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[*]"}                                                                                                       |
| 88  | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_COUNTRY{":"}M4T_LU_COUNTRY{"[FIRST]"}                                                                                                           |
| 89  | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                                  |
| 94  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA"}                                                                                                 |
| 95  | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                                    |
| 99  | zSCODTSTART       | zcomun + "SCO_DT_START"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                  |
| 100 | zSCODTEND         | zcomun + "SCO_DT_END"                                                          | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                                    |
| 101 | zSCONCOURSE       | zcomun + "SCO_N_COURSE"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                  |
| 102 | zSCONUMBERHOURS   | zcomun + "SCO_NUMBER_HOURS"                                                    | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}                              |
| 103 | zSCONCENTER       | zcomun + "SCO_N_CENTER"                                                        | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}                                  |
| 104 | zSTDNCOUNTRY      | zcomun + "STD_N_COUNTRY"                                                       | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                 |
| 105 | zSCOGRANTS        | zcomun + "SCO_GRANTS"                                                          | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}                                    |
| 106 | zSCOCOMMENT       | zcomun + "SCO_COMMENT"                                                         | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                   |
| 108 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                       |
| 109 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                      |
| 111 | zSTDIDCOUNTRY     | zcomun2 + "STD_ID_COUNTRY"                                                     | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                |
| 112 | zSTDNCOUNTRY2     | zcomun2 + "STD_N_COUNTRY"                                                      | M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                                 |
| 132 | zcount            | 0                                                                              | 0                                                                                                                                                      |
| 133 | zcounti           | 0                                                                              | 0                                                                                                                                                      |
| 134 | zcount2i          | 0                                                                              | 0                                                                                                                                                      |
| 141 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                                |
| 142 | zcount2v          | String.valueOf(zcount2i)                                                       | String.valueOf(zcount2i)                                                                                                                               |
| 220 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                                       |
| 221 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                        |
| 222 | zposicions        | "0"                                                                            | 0                                                                                                                                                      |
| 223 | zcontrol          | 0                                                                              | 0                                                                                                                                                      |
| 224 | zposicion         | 0                                                                              | 0                                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                         |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 117 | m4:startpage | m4task=SSE_HR_COMP_BACKGROUND                                                                                                                                              |
| 117 | m4:beginjob  |                                                                                                                                                                            |
| 118 | m4:datadef   | m4o=SSE_HR_COMP_BACKGROUND; m4name=SSE_HR_COMP_BACKGROUND                                                                                                                  |
| 125 | m4:exec      | m4method=CARGA:{}SSE_HR_COMP_BACKGROUND{"!SSE_PRINCIPAL.CARGA"}                                                                                                            |
| 125 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                                 |
| 126 | m4:outputdef | m4alias=SSE_HR_COMP_BACKGROUND                                                                                                                                             |
| 126 | m4:param     | name=m4name0; value=SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 127 | m4:outputdef | m4alias=M4T_LU_COUNTRY                                                                                                                                                     |
| 127 | m4:param     | name=m4name0; value=SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[*]"}                                                                                                       |
| 128 | m4:endjob    |                                                                                                                                                                            |
| 129 | m4:move      |                                                                                                                                                                            |
| 129 | m4:param     | name=SSE_HR_COMP_BACKGROUND; value=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"["}Integer.valueOf(zinicios).intValue(){"]"}                                         |
| 130 | m4:move      |                                                                                                                                                                            |
| 130 | m4:param     | name=SSE_HR_COMP_BACKGROUND; value=M4T_LU_COUNTRY{":"}M4T_LU_COUNTRY{"[FIRST]"}                                                                                            |
| 168 | m4:label     | item=SCO_DT_START; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                         |
| 175 | m4:label     | item=SCO_DT_END; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                           |
| 184 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                               |
| 187 | m4:label     | item=SCO_NUMBER_HOURS; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                     |
| 191 | m4:label     | item=SCO_N_CENTER; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                         |
| 193 | m4:label     | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                             |
| 198 | m4:loop      | from=0; to=new_Integer(new_Integer(zcount2v).intValue()-1).toString()                                                                                                      |
| 199 | m4:item      | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                               |
| 205 | m4:label     | item=SCO_GRANTS; htmlsafe=true; outputdef=SSE_HR_COMP_BACKGROUND                                                                                                           |
| 209 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                                |
| 240 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}                                               |
| 241 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}                                                 |
| 242 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}                                               |
| 243 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}                                           |
| 244 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}                                               |
| 245 | m4:label     | m4name=M4T_LU_COUNTRY{":"}SSE_HR_COMP_BACKGROUND{"!"}M4T_LU_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                             |
| 246 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}                                                 |
| 247 | m4:label     | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}                                                |
| 251 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |
| 258 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                    |
| 259 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                |
| 260 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                  |
| 261 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}; htmlsafe=true                                |
| 262 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}; htmlsafe=true                            |
| 263 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}; htmlsafe=true                                |
| 264 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                               |
| 265 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}; htmlsafe=true                                  |
| 266 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                 |
| 271 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                    |
| 272 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true                                |
| 273 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true                                  |
| 274 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_COURSE"}; htmlsafe=true                                |
| 275 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUMBER_HOURS"}; htmlsafe=true                            |
| 276 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_CENTER"}; htmlsafe=true                                |
| 277 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                               |
| 278 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_GRANTS"}; htmlsafe=true                                  |
| 279 | m4:item      | m4name=SSE_HR_COMP_BACKGROUND{":"}SSE_HR_COMP_BACKGROUND{"!"}SSE_HR_COMP_BACKGROUND{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true                                 |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 121 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 137 | getCount         | znodo,zsubsesion,znodo                    |
| 138 | getCountInClient | znodo,zsubsesion,znodo                    |
| 139 | getCountInClient | znodo2,zsubsesion,znodo2                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 3   | comprobar |            |
| 63  | borrar    | reg        |

| L   | Condición / acción / mensaje literal                                                                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");                                                                                                        |
| 21  | dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");                                                                                                            |
| 22  | fechasok = m4compfechas(m4objeto("SCO_DT_START","NombreFormulario"),'&lt;=',m4objeto("SCO_DT_END","NombreFormulario"));                                                                 |
| 24  | var num = new m4objvalidacion('_num','1','99','',false);                                                                                                                                |
| 27  | if (num.resultado == false &#124;&#124; numhours == null &#124;&#124; numhours == ""){                                                                                                  |
| 32  | if (dtstart == null &#124;&#124; dtstart == ""){                                                                                                                                        |
| 36  | if (ncourse == null &#124;&#124; ncourse == ""){                                                                                                                                        |
| 41  | if ((dtstart != null &amp;&amp; dtstart != "") &amp;&amp; (dtstartok == "")){                                                                                                           |
| 45  | if ((dtend != null &amp;&amp; dtend !="") &amp;&amp; (dtendok == "")){                                                                                                                  |
| 49  | if ((dtend != null &amp;&amp; dtend !="") &amp;&amp; (dtendok != "") &amp;&amp; (dtstart != null &amp;&amp; dtstart !="") &amp;&amp; (dtstartok != "") &amp;&amp; (fechasok == false)){ |
| 54  | if (error == 1){                                                                                                                                                                        |
| 55  | alert(texto);                                                                                                                                                                           |
| 57  | }else {                                                                                                                                                                                 |
| 219 | &lt;%if (zcounti &gt; 0) {                                                                                                                                                              |
| 256 | if (zcontrol==0){%&gt;                                                                                                                                                                  |
| 269 | &lt;%}else{%&gt;                                                                                                                                                                        |
| 28  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_ess_oc_3");                                                                                            |
| 33  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_2");                                                                                      |
| 37  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_ess_oc_0");                                                                                            |
| 42  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_3");                                                                                      |
| 46  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_8");                                                                                      |
| 50  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_9");                                                                                      |
| 79  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                                           |
| 81  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                                              |
| 83  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";                                                |
| 84  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                                                                 |
| 85  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                 |
| 87  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                            |
| 88  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                                                 |
| 89  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                              |
| 94  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                                                              |
| 99  | expresión de cálculo/transformación: String zSCODTSTART = zcomun + "SCO_DT_START";                                                                                                      |
| 100 | expresión de cálculo/transformación: String zSCODTEND = zcomun + "SCO_DT_END";                                                                                                          |
| 101 | expresión de cálculo/transformación: String zSCONCOURSE = zcomun + "SCO_N_COURSE";                                                                                                      |
| 102 | expresión de cálculo/transformación: String zSCONUMBERHOURS = zcomun + "SCO_NUMBER_HOURS";                                                                                              |
| 103 | expresión de cálculo/transformación: String zSCONCENTER = zcomun + "SCO_N_CENTER";                                                                                                      |
| 104 | expresión de cálculo/transformación: String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";                                                                                                    |
| 105 | expresión de cálculo/transformación: String zSCOGRANTS = zcomun + "SCO_GRANTS";                                                                                                         |
| 106 | expresión de cálculo/transformación: String zSCOCOMMENT = zcomun + "SCO_COMMENT";                                                                                                       |
| 108 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                                                                              |
| 109 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                                                                             |
| 111 | expresión de cálculo/transformación: String zSTDIDCOUNTRY= zcomun2 + "STD_ID_COUNTRY";                                                                                                  |
| 112 | expresión de cálculo/transformación: String zSTDNCOUNTRY2 = zcomun2 + "STD_N_COUNTRY";                                                                                                  |
| 221 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                                           |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 147 | /iconos/otros_cursos_70x100.gif                                 |
| 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      |
| 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       |
| 165 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 171 | javascript:m4calendario(m4objeto(                               |
| 172 | /iconos/icono_calendario_14_18.gif                              |
| 178 | javascript:m4calendario(m4objeto(                               |
| 179 | /iconos/icono_calendario_14_18.gif                              |
| 215 | javascript:comprobar()                                          |
| 215 | /iconos/icono_enviar_ess_36_36.gif                              |
| 227 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 |
| 230 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 267 | javascript:borrar(                                              |
| 267 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 280 | javascript:borrar(                                              |
| 280 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 77  | sse_g1/sse_g1_p3_mod5.jsp                                       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| COLL   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 12  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| COLL   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      | ausente    | P06                                                                                                                                                                                                |
| COLL   | 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 171 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 178 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 217 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 229 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 | contextual | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md); [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                 |
| COLL   | 232 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 269 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 282 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 77  | sse_g1/sse_g1_p3_mod5.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 36  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| CYC    | 37  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 39  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 11  | /calendario/jquery-1.12.4.js                                    | contextual | &#96;calendario/jquery-1.12.4.js&#96;                                                                                                                                                              |
| CYC    | 12  | /calendario/jquery-ui.js                                        | contextual | &#96;calendario/jquery-ui.js&#96;                                                                                                                                                                  |
| CYC    | 23  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 24  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 36  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| CYC    | 37  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 39  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      | ausente    | P06                                                                                                                                                                                                |
| CYC    | 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 171 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 178 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 217 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 229 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 | contextual | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md); [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                 |
| CYC    | 232 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 269 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 282 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 77  | sse_g1/sse_g1_p3_mod5.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| IBER   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 12  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| IBER   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      | ausente    | P06                                                                                                                                                                                                |
| IBER   | 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 171 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 178 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 217 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 229 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 | contextual | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md); [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                 |
| IBER   | 232 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 269 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 282 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 77  | sse_g1/sse_g1_p3_mod5.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| BASE   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 12  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 7   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 8   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 23  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 24  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 25  | ../ssco_g1_p3_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| BASE   | 26  | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 28  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 151 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11      | ausente    | P06                                                                                                                                                                                                |
| BASE   | 157 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 165 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 171 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 178 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 215 | javascript:comprobar()                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 227 | /servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11 | contextual | [sse_g1/ssco_g1_p3_mod5.jsp](sse_g1--ssco_g1_p3_mod5.md)                                                                                                                                           |
| BASE   | 230 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 267 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 280 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 77  | sse_g1/sse_g1_p3_mod5.jsp                                       | ausente    | P06                                                                                                                                                                                                |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/ssco_g1_p3_mod5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
