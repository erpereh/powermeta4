# O meu posto de trabalho

Identificador: `sse_g3/sse_g3_menu.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave            | Texto                                      | Ámbito | Diccionario                                                                       |
| ---------------- | ------------------------------------------ | ------ | --------------------------------------------------------------------------------- |
| ev_ess.EvSeg     | Evaluaciones de seguimiento                | BASE   | [translations/ess_ev_es.properties:L9](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.EvSeg     | Evaluaciones de seguimiento                | BASE   | [translations/sse_g_es.properties:L9](../../referencias/literales/sse_g_es.md)    |
| ev_ess.TitValObj | Valoración de objetivos                    | BASE   | [translations/ess_ev_es.properties:L3](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.TitValObj | Valoración de objetivos                    | BASE   | [translations/sse_g_es.properties:L3](../../referencias/literales/sse_g_es.md)    |
| ev_ess.TitleProc | Proceso de evaluación                      | BASE   | [translations/ess_ev_es.properties:L7](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.TitleProc | Proceso de evaluación                      | BASE   | [translations/sse_g_es.properties:L7](../../referencias/literales/sse_g_es.md)    |
| ev_ess.Val       | Valoración de la evaluación                | BASE   | [translations/ess_ev_es.properties:L17](../../referencias/literales/ess_ev_es.md) |
| ev_ess.Val       | Valoración de la evaluación                | BASE   | [translations/sse_g_es.properties:L17](../../referencias/literales/sse_g_es.md)   |
| ev_ess.ValEvSeg  | Valoración de la evaluación de seguimiento | BASE   | [translations/ess_ev_es.properties:L10](../../referencias/literales/ess_ev_es.md) |
| ev_ess.ValEvSeg  | Valoración de la evaluación de seguimiento | BASE   | [translations/sse_g_es.properties:L10](../../referencias/literales/sse_g_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_menu.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_menu.jsp) | `8893babb2ddac0a2fb93b9e150db7fe186a748d7ab42c65a3c6ce156c1b61e65` |      1 |
| BASE / compartido | [sse_g3/sse_g3_menu.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_menu.jsp)                 | `8cee73224bc5d774505b12a0141afb4c1a29597fcb6f7ab0c7862c9bca33cc1c` |    185 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_menu.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_menu.jsp). Líneas físicas, contando desde 1.

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

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                                     |
| --- | ------------------------------------------------------------------------------------- |
| 1   | /servlet/CheckSecurity/JSP/sse_generico/sgco_subportal.jsp?bESS=1&amp;sMenuId=SSCO_G3 |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g3/sse_g3_menu.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_menu.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6   | O meu posto de trabalho                                                                                                                                                                                                                                          |
| 30  | O meu posto de trabalho                                                                                                                                                                                                                                          |
| 47  | Nesta secção pode consultar os postos que desempenhou na empresa. Historial de postos                                                                                                                                                                            |
| 61  | Mobilidade interna                                                                                                                                                                                                                                               |
| 68  | Nesta secção pode consultar os postos vagos existentes na empresa e solicitar os que mais lhe interessam, assim como verificar o estado dos pedidos já realizados e quais foram as ofertas recebidas. Mobilidade interna                                         |
| 86  | Nesta secção pode consultar os processos de avaliação onde participou como avaliador e avaliado, assim como os resultados destes últimos. [valor dinámico] [valor dinámico] Historial de avaliação Objectivos [valor dinámico] [valor dinámico] [valor dinámico] |
| 108 | Plano de formação                                                                                                                                                                                                                                                |
| 144 | Nesta secção pode consultar todas as informações relacionadas com o seu plano de carreira, assim como as descrições dos postos que surgem no plano. Plano de carreira                                                                                            |
| 161 | Comunicação interna                                                                                                                                                                                                                                              |
| 169 | Nesta secção pode consultar as notícias e a política da empresa através da comunicação interna. '&gt;Comunicação interna                                                                                                                                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                               |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46  | img     | src=/iconos/noname_organizacion_ess_115_100.gif; width=115; height=100; alt=Historial de postos; title=Historial de postos; border=0                                                                                                    |
| 50  | a       | class=enlacefuncional; tabindex=1; title=Historial de postos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31                                                                                                            |
| 71  | a       | class=enlacefuncional; tabindex=2; title=Mobilidade interna; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                                             |
| 74  | img     | src=/iconos/noname_movilidad_interna_izquierda_100_100.gif; width=100; height=100; alt=Mobilidade interna; title=Mobilidade interna; border=0                                                                                           |
| 85  | img     | src=/iconos/noname_planes_evaluacion_88_100.gif; width=88; height=100; alt=Planos de avaliação; title=Planos de avaliação; border=0                                                                                                     |
| 89  | a       | class=enlacefuncional; tabindex=3; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31                                                                                                  |
| 90  | a       | class=enlacefuncional; tabindex=4; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31                                                                                                  |
| 91  | a       | class=enlacefuncional; tabindex=5; title=Historial de evaluación; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31                                                                                                        |
| 92  | a       | class=enlacefuncional; tabindex=6; title=Objectivos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31                                                                                                                     |
| 93  | a       | class=enlacefuncional; tabindex=7; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31                                                                                                 |
| 94  | a       | class=enlacefuncional; tabindex=8; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31                                                                                                 |
| 95  | a       | class=enlacefuncional; tabindex=9; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p20.jsp?estado=31                                                                                                 |
| 122 | a       | class=enlacefuncional; tabindex=7; title=Catálogo de formação; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                                           |
| 123 | a       | class=enlacefuncional; tabindex=8; title=Inscrição em cursos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31                                                                                                            |
| 124 | a       | class=enlacefuncional; tabindex=9; title=Avaliação de cursos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                                                                            |
| 126 | a       | class=enlacefuncional; tabindex=&lt;%=(zTab+1)%&gt;; title=Fórum; href=/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES                |
| 127 | a       | class=enlacefuncional; tabindex=&lt;%=(zTab+1)%&gt;; title=Documentação de formação; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1; idprovider=&lt;%=aux_provider%&gt; |
| 128 | a       | class=enlacefuncional; tabindex=&lt;%=(zTab+1)%&gt;; title=Expertos; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp; idprovider=&lt;%=aux_provider%&gt;                          |
| 132 | img     | src=/iconos/noname_plan_formacion_43_100.gif; width=43; height=100; alt=Plano de formação; title=Plano de formação                                                                                                                      |
| 143 | img     | src=/iconos/noname_plan_carrera_133_100.gif; width=133; height=100; alt=Plano de carreira; title=Plano de carreira                                                                                                                      |
| 147 | a       | class=enlacefuncional; tabindex=&lt;%=(zTab+1)%&gt;; title=Plano de carreira; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31                                                                                            |
| 172 | a       | class=enlacefuncional; tabindex=&lt;%=(zTab+1)%&gt;; title=Comunicação interna; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2; idprovider=&lt;%=aux_provider%&gt;      |
| 175 | img     | src=/iconos/noname_comunicacion_interna_105_100.gif; width=105; height=100; alt=Comunicação interna; title=Comunicação interna                                                                                                          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 16  | estado          | getParameter(request,"estado") |
| 21  | IsKnownet       | getBagEntries("IsKnownet")     |
| 22  | aux_provider    | getBagEntries("aux_provider")  |

| L   | Variable     | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 16  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |
| 21  | Knownet      | zsesion1.getBagEntries("IsKnownet")                                | zsesion1.getBagEntries("IsKnownet")                                |
| 22  | aux_provider | zsesion1.getBagEntries("aux_provider")                             | zsesion1.getBagEntries("aux_provider")                             |
| 23  | zTab         | 9                                                                  | 9                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                            |
| --- | --------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";} |
| 32  | &lt;%if(Knownet.equals("0")){%&gt;                              |
| 34  | &lt;% } else { %&gt;                                            |
| 116 | &lt;td&gt; &lt;%if(Knownet.equals("0")){%&gt;                   |
| 118 | &lt;% } else { %&gt;                                            |
| 125 | &lt;%if(Knownet.equals("0")){%&gt;                              |
| 155 | &lt;%if(Knownet.equals("0")){%&gt;                              |

### Includes, navegación y dependencias

| L   | Include                                              |
| --- | ---------------------------------------------------- |
| 9   | ../../sse_generico/portugues/menu_ess.jsp            |
| 10  | /sse_g3/sse_ev_trans.jsp                             |
| 27  | ../../sse_generico/portugues/generico_menusup.jsp    |
| 28  | ../../sse_generico/portugues/generico_links.jsp      |
| 182 | ../../sse_generico/portugues/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                                                                                                               |
| 8   | /libreria/funciones_sse.js                                                                                                                        |
| 46  | /iconos/noname_organizacion_ess_115_100.gif                                                                                                       |
| 50  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31                                                                                         |
| 71  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                         |
| 74  | /iconos/noname_movilidad_interna_izquierda_100_100.gif                                                                                            |
| 85  | /iconos/noname_planes_evaluacion_88_100.gif                                                                                                       |
| 89  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31                                                                                         |
| 90  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31                                                                                         |
| 91  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31                                                                                         |
| 92  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31                                                                                         |
| 93  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31                                                                                        |
| 94  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31                                                                                        |
| 95  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p20.jsp?estado=31                                                                                        |
| 122 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                         |
| 123 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31                                                                                         |
| 124 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                                                         |
| 126 | /servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES |
| 127 | &lt;m4:crosslink uri=                                                                                                                             |
| 128 | &lt;m4:crosslink uri=                                                                                                                             |
| 132 | /iconos/noname_plan_formacion_43_100.gif                                                                                                          |
| 143 | /iconos/noname_plan_carrera_133_100.gif                                                                                                           |
| 147 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31                                                                                         |
| 172 | &lt;m4:crosslink uri=                                                                                                                             |
| 175 | /iconos/noname_comunicacion_interna_105_100.gif                                                                                                   |
| 9   | ../../sse_generico/portugues/menu_ess.jsp                                                                                                         |
| 10  | /sse_g3/sse_ev_trans.jsp                                                                                                                          |
| 27  | ../../sse_generico/portugues/generico_menusup.jsp                                                                                                 |
| 28  | ../../sse_generico/portugues/generico_links.jsp                                                                                                   |
| 127 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1                                                                |
| 128 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp                                                                         |
| 172 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2                                                                |
| 182 | ../../sse_generico/portugues/generico_disclaimer.jsp                                                                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                                        | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 1   | /servlet/CheckSecurity/JSP/sse_generico/sgco_subportal.jsp?bESS=1&amp;sMenuId=SSCO_G3                                                             | contextual | [sse_generico/sgco_subportal.jsp](../../transversal/navegacion/sse_generico--sgco_subportal.md) |
| BASE   | 9   | ../../sse_generico/portugues/menu_ess.jsp                                                                                                         | ausente    | P06                                                                                             |
| BASE   | 10  | /sse_g3/sse_ev_trans.jsp                                                                                                                          | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                              |
| BASE   | 27  | ../../sse_generico/portugues/generico_menusup.jsp                                                                                                 | ausente    | P06                                                                                             |
| BASE   | 28  | ../../sse_generico/portugues/generico_links.jsp                                                                                                   | ausente    | P06                                                                                             |
| BASE   | 182 | ../../sse_generico/portugues/generico_disclaimer.jsp                                                                                              | ausente    | P06                                                                                             |
| BASE   | 8   | /libreria/funciones_sse.js                                                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 50  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 71  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 89  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 90  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 91  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 92  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 93  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31                                                                                        | ausente    | P06                                                                                             |
| BASE   | 94  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31                                                                                        | ausente    | P06                                                                                             |
| BASE   | 95  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p20.jsp?estado=31                                                                                        | ausente    | P06                                                                                             |
| BASE   | 122 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 123 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 124 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 126 | /servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES | ausente    | P06                                                                                             |
| BASE   | 147 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31                                                                                         | ausente    | P06                                                                                             |
| BASE   | 9   | ../../sse_generico/portugues/menu_ess.jsp                                                                                                         | ausente    | P06                                                                                             |
| BASE   | 10  | /sse_g3/sse_ev_trans.jsp                                                                                                                          | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                              |
| BASE   | 27  | ../../sse_generico/portugues/generico_menusup.jsp                                                                                                 | ausente    | P06                                                                                             |
| BASE   | 28  | ../../sse_generico/portugues/generico_links.jsp                                                                                                   | ausente    | P06                                                                                             |
| BASE   | 127 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1                                                                | ausente    | P06                                                                                             |
| BASE   | 128 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp                                                                         | ausente    | P06                                                                                             |
| BASE   | 172 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2                                                                | ausente    | P06                                                                                             |
| BASE   | 182 | ../../sse_generico/portugues/generico_disclaimer.jsp                                                                                              | ausente    | P06                                                                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_menu.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
