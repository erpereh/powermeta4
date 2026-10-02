# sse_g1_p4

Identificador: `sse_g1/sse_g1_p4.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                          | Solo en BASE                                           |
| ------ | --------- | ------------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                                                                    | Ámbito | Diccionario                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Delete         | Eliminar                                                                                 | COLL   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete         | Eliminar                                                                                 | CYC    | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete         | Eliminar                                                                                 | IBER   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete         | Eliminar                                                                                 | BASE   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Modify         | Modificar                                                                                | COLL   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Modify         | Modificar                                                                                | CYC    | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Modify         | Modificar                                                                                | IBER   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Modify         | Modificar                                                                                | BASE   | [translations/ess_mss_gen_es.properties:L69](../../referencias/literales/ess_mss_gen_es.md) |
| Label.sse_g1_p4Des    | En esta pantalla puedes consultar, modificar o borrar tus contactos de emergencia (ICE). | COLL   | [translations/sse_g1_es.properties:L5](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4Des    | En esta pantalla puedes consultar, modificar o borrar tus contactos de emergencia (ICE). | IBER   | [translations/sse_g1_es.properties:L5](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4Des    | En esta pantalla puedes consultar, modificar o borrar tus contactos de emergencia (ICE). | BASE   | [translations/sse_g1_es.properties:L5](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4NoData | Actualmente no tienes ningún contacto de emergencia (ICE)                                | COLL   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4NoData | Actualmente no tienes ningún contacto de emergencia (ICE)                                | IBER   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p4NoData | Actualmente no tienes ningún contacto de emergencia (ICE)                                | BASE   | [translations/sse_g1_es.properties:L7](../../referencias/literales/sse_g1_es.md)            |
| Link.sse_g1_p4new     | Nuevo contacto de emergencia (ICE)                                                       | COLL   | [translations/sse_g1_es.properties:L6](../../referencias/literales/sse_g1_es.md)            |
| Link.sse_g1_p4new     | Nuevo contacto de emergencia (ICE)                                                       | IBER   | [translations/sse_g1_es.properties:L6](../../referencias/literales/sse_g1_es.md)            |
| Link.sse_g1_p4new     | Nuevo contacto de emergencia (ICE)                                                       | BASE   | [translations/sse_g1_es.properties:L6](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4       | Mis contactos de emergencia (ICE)                                                        | COLL   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4       | Mis contactos de emergencia (ICE)                                                        | IBER   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4       | Mis contactos de emergencia (ICE)                                                        | BASE   | [translations/sse_g1_es.properties:L3](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4Des    | Mis contactos de emergencia (ICE)                                                        | COLL   | [translations/sse_g1_es.properties:L4](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4Des    | Mis contactos de emergencia (ICE)                                                        | IBER   | [translations/sse_g1_es.properties:L4](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p4Des    | Mis contactos de emergencia (ICE)                                                        | BASE   | [translations/sse_g1_es.properties:L4](../../referencias/literales/sse_g1_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p4.jsp) | `68bbeaafbc70a96e6b3e3bd0549ee583291a1b632c51e0e88b6ec06d931b6dab` |    153 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p4.jsp)   | `68bbeaafbc70a96e6b3e3bd0549ee583291a1b632c51e0e88b6ec06d931b6dab` |    153 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p4.jsp) | `68bbeaafbc70a96e6b3e3bd0549ee583291a1b632c51e0e88b6ec06d931b6dab` |    153 |
| BASE / español    | [sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p4.jsp)                             | `02f649308f43ee7228d5ff0814efa3f7268c23c4e8151b4deb5956ed7d874b12` |    129 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                 |
| --- | -------------------------------------------------------- |
| 67  | [valor dinámico] (In Case of Emergency) [valor dinámico] |
| 114 | ',' ',' ',' ');"&gt;                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 66  | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/noname_mujer_53_100.gif; width=100; height=100       |
| 70  | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11 |
| 75  | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=oculto; id=oculto                                  |
| 76  | input   | type=hidden; id=TAG; name=TAG; value=SSE_HR_CONTACT                                                                                          |
| 77  | input   | type=hidden; id=REC; name=REC; value=                                                                                                        |
| 78  | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                  |
| 79  | input   | type=hidden; id=NOD; name=NOD; value=SSE_HR_CONTACT                                                                                          |
| 80  | input   | type=hidden; id=STD_OR_CONTACT; name=STD_OR_CONTACT; value=                                                                                  |
| 81  | input   | type=hidden; id=STD_N_CONTACT; name=STD_N_CONTACT; value=                                                                                    |
| 82  | input   | type=hidden; id=STD_INT_COUNTRY_CODE_1; name=STD_INT_COUNTRY_CODE_1; value=                                                                  |
| 83  | input   | type=hidden; id=STD_INT_REGION_CODE_1; name=STD_INT_REGION_CODE_1; value=                                                                    |
| 84  | input   | type=hidden; id=STD_NAT_REGION_CODE_1; name=STD_NAT_REGION_CODE_1; value=                                                                    |
| 85  | input   | type=hidden; id=STD_PHONE_NUMBER_1; name=STD_PHONE_NUMBER_1; value=                                                                          |
| 86  | input   | type=hidden; id=SCO_ICE; name=SCO_ICE; value=                                                                                                |
| 88  | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp; method=post; name=ocult; id=ocult                                                |
| 89  | input   | type=hidden; name=estado; id=estado; value=11                                                                                                |
| 90  | input   | type=hidden; name=zPos; id=zPos; value=                                                                                                      |
| 108 | a       | title=JSP_EXPR_Tran.getProperty(; alt=JSP_EXPR_Tran.getProperty(; href=javascript:mod('&lt;%=current%&gt;');                                 |
| 114 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true           |
| 114 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 13  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 14  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 37  | zsubsesion   | "SSE_HR_CONTACT"                                                     | SSE_HR_CONTACT                                                       |
| 38  | zmeta4object | "SSE_HR_CONTACT"                                                     | SSE_HR_CONTACT                                                       |
| 39  | znodo        | "M4T_HR_CONTACT"                                                     | M4T_HR_CONTACT                                                       |
| 40  | ztipocarga   | "M4T"                                                                | M4T                                                                  |
| 41  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                     | SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                             |
| 42  | zmetodocarga | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                    | CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                    |
| 55  | zcount       | 0                                                                    | 0                                                                    |
| 55  | zcounti      | 0                                                                    | 0                                                                    |
| 61  | zcountv      | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                              |
| 92  | zposicions   | "0"                                                                  | 0                                                                    |
| 92  | zcontrol     | 0                                                                    | 0                                                                    |
| 92  | zPaint       | ""                                                                   |                                                                      |
| 92  | zposicion    | 0                                                                    | 0                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                           |
| --- | ------------ | ---------------------------------------------------------------------------- |
| 44  | m4:startpage | m4task=SSE_HR_CONTACT                                                        |
| 44  | m4:beginjob  |                                                                              |
| 45  | m4:datadef   | m4o=SSE_HR_CONTACT; m4name=SSE_HR_CONTACT                                    |
| 51  | m4:exec      | m4method=CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA_CV"}                   |
| 51  | m4:param     | name=TIPO_CARGA; value=M4T                                                   |
| 52  | m4:outputdef | m4alias=M4T_HR_CONTACT                                                       |
| 52  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                 |
| 53  | m4:endjob    |                                                                              |
| 95  | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                  |
| 96  | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT         |
| 97  | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 98  | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 99  | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT             |
| 100 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                        |
| 103 | m4:dataloop  | outputdef=M4T_HR_CONTACT                                                     |
| 104 | m4:current   | m4varname=current; outputdef=M4T_HR_CONTACT                                  |
| 108 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                  |
| 109 | m4:item      | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT         |
| 110 | m4:item      | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 111 | m4:item      | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 112 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT             |
| 113 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                        |
| 114 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true      |
| 114 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true |
| 114 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true            |
| 124 | m4:endpage   |                                                                              |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 48  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 58  | getCount         | znodo,zsubsesion,znodo                    |
| 59  | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos         |
| --- | --------- | ------------------ |
| 19  | mod       | ord                |
| 24  | borrar    | ord,name,phone,ice |
| 128 | cambiaono |                    |
| 138 | cambato   |                    |

| L   | Condición / acción / mensaje literal                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                               |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                       |
| 92  | &lt;% if (zcounti &gt; 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %&gt;  |
| 106 | &lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                       |
| 119 | &lt;%} else {%&gt;                                                                                            |
| 131 | if($(this).find('td').get(5).innerHTML==0){                                                                   |
| 145 | if( cambiaono() ) { cambato(); }                                                                              |
| 41  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                    |
| 42  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | ../../sse_g1/sse_g1_trans.jsp                      |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 35  | ../../sse_generico/espanol/generico_links.jsp      |
| 122 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 5   | /css/estilo_sse.css                                             |
| 6   | ../../../../library/jquery-2.1.3.min.js                         |
| 7   | /libreria/funciones_sse.js                                      |
| 9   | /libreria/clase_val_entradas.js                                 |
| 66  | /iconos/noname_mujer_53_100.gif                                 |
| 70  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   |
| 75  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 88  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             |
| 108 | javascript:mod(                                                 |
| 114 | javascript:borrar(                                              |
| 114 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 8   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 10  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 34  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 35  | ../../sse_generico/espanol/generico_links.jsp                   |
| 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p4.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 68  | [valor dinámico] [valor dinámico] |
| 115 | ',' ',' ',' ');"&gt;              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 67  | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/noname_mujer_53_100.gif; width=100; height=100       |
| 71  | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11 |
| 76  | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=oculto; id=oculto                                  |
| 77  | input   | type=hidden; id=TAG; name=TAG; value=SSE_HR_CONTACT                                                                                          |
| 78  | input   | type=hidden; id=REC; name=REC; value=                                                                                                        |
| 79  | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                  |
| 80  | input   | type=hidden; id=NOD; name=NOD; value=SSE_HR_CONTACT                                                                                          |
| 81  | input   | type=hidden; id=STD_OR_CONTACT; name=STD_OR_CONTACT; value=                                                                                  |
| 82  | input   | type=hidden; id=STD_N_CONTACT; name=STD_N_CONTACT; value=                                                                                    |
| 83  | input   | type=hidden; id=STD_INT_COUNTRY_CODE_1; name=STD_INT_COUNTRY_CODE_1; value=                                                                  |
| 84  | input   | type=hidden; id=STD_INT_REGION_CODE_1; name=STD_INT_REGION_CODE_1; value=                                                                    |
| 85  | input   | type=hidden; id=STD_NAT_REGION_CODE_1; name=STD_NAT_REGION_CODE_1; value=                                                                    |
| 86  | input   | type=hidden; id=STD_PHONE_NUMBER_1; name=STD_PHONE_NUMBER_1; value=                                                                          |
| 87  | input   | type=hidden; id=SCO_ICE; name=SCO_ICE; value=                                                                                                |
| 89  | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp; method=post; name=ocult; id=ocult                                                |
| 90  | input   | type=hidden; name=estado; id=estado; value=11                                                                                                |
| 91  | input   | type=hidden; name=zPos; id=zPos; value=                                                                                                      |
| 109 | a       | title=JSP_EXPR_Tran.getProperty(; alt=JSP_EXPR_Tran.getProperty(; href=javascript:mod('&lt;%=current%&gt;');                                 |
| 115 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:borrar('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true           |
| 115 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 14  | estado          | getParameter(request,"estado")   |
| 15  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable     | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 14  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 15  | zinicios     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 38  | zsubsesion   | "SSE_HR_CONTACT"                                                     | SSE_HR_CONTACT                                                       |
| 39  | zmeta4object | "SSE_HR_CONTACT"                                                     | SSE_HR_CONTACT                                                       |
| 40  | znodo        | "M4T_HR_CONTACT"                                                     | M4T_HR_CONTACT                                                       |
| 41  | ztipocarga   | "M4T"                                                                | M4T                                                                  |
| 42  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                     | SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                             |
| 43  | zmetodocarga | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"}                       |
| 56  | zcount       | 0                                                                    | 0                                                                    |
| 56  | zcounti      | 0                                                                    | 0                                                                    |
| 62  | zcountv      | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                              |
| 93  | zposicions   | "0"                                                                  | 0                                                                    |
| 93  | zcontrol     | 0                                                                    | 0                                                                    |
| 93  | zPaint       | ""                                                                   |                                                                      |
| 93  | zposicion    | 0                                                                    | 0                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                           |
| --- | ------------ | ---------------------------------------------------------------------------- |
| 45  | m4:startpage | m4task=SSE_HR_CONTACT                                                        |
| 45  | m4:beginjob  |                                                                              |
| 46  | m4:datadef   | m4o=SSE_HR_CONTACT; m4name=SSE_HR_CONTACT                                    |
| 52  | m4:exec      | m4method=CARGA:{}SSE_HR_CONTACT{"!SSE_PRINCIPAL.CARGA"}                      |
| 52  | m4:param     | name=TIPO_CARGA; value=M4T                                                   |
| 53  | m4:outputdef | m4alias=M4T_HR_CONTACT                                                       |
| 53  | m4:param     | name=m4name0; value=SSE_HR_CONTACT{"!"}M4T_HR_CONTACT{"[*]"}                 |
| 54  | m4:endjob    |                                                                              |
| 96  | m4:label     | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                  |
| 97  | m4:label     | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT         |
| 98  | m4:label     | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 99  | m4:label     | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 100 | m4:label     | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT             |
| 101 | m4:label     | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                        |
| 104 | m4:dataloop  | outputdef=M4T_HR_CONTACT                                                     |
| 105 | m4:current   | m4varname=current; outputdef=M4T_HR_CONTACT                                  |
| 109 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT                  |
| 110 | m4:item      | item=STD_INT_COUNTRY_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT         |
| 111 | m4:item      | item=STD_INT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 112 | m4:item      | item=STD_NAT_REGION_CODE_1; htmlsafe=true; outputdef=M4T_HR_CONTACT          |
| 113 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT             |
| 114 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT                        |
| 115 | m4:item      | item=STD_N_CONTACT; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true      |
| 115 | m4:item      | item=STD_PHONE_NUMBER_1; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true |
| 115 | m4:item      | item=SCO_ICE; htmlsafe=true; outputdef=M4T_HR_CONTACT; jsafe=true            |
| 125 | m4:endpage   |                                                                              |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 49  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 59  | getCount         | znodo,zsubsesion,znodo                    |
| 60  | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos         |
| --- | ------- | ------------------ |
| 20  | mod     | ord                |
| 25  | borrar  | ord,name,phone,ice |

| L   | Condición / acción / mensaje literal                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 16  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                              |
| 17  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                      |
| 93  | &lt;% if (zcounti &gt; 0){String zposicions = "0";int zcontrol = 0; String zPaint="";int zposicion =0; %&gt; |
| 107 | &lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                      |
| 120 | &lt;%} else {%&gt;                                                                                           |
| 42  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                   |
| 43  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";   |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 11  | ../../sse_g1/sse_g1_trans.jsp                      |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 36  | ../../sse_generico/espanol/generico_links.jsp      |
| 123 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 8   | /libreria/funciones_sse.js                                      |
| 10  | /libreria/clase_val_entradas.js                                 |
| 67  | /iconos/noname_mujer_53_100.gif                                 |
| 71  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   |
| 76  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 89  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             |
| 109 | javascript:mod(                                                 |
| 115 | javascript:borrar(                                              |
| 115 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                      |
| 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    |
| 9   | ../../sse_generico/espanol/menu_ess.jsp                         |
| 11  | ../../sse_g1/sse_g1_trans.jsp                                   |
| 35  | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 36  | ../../sse_generico/espanol/generico_links.jsp                   |
| 123 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 6   | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| COLL   | 7   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 9   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 70  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 75  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 88  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| COLL   | 108 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 114 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 6   | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| CYC    | 7   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 9   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 70  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| CYC    | 75  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 88  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| CYC    | 108 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 114 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 6   | ../../../../library/jquery-2.1.3.min.js                         | ausente    | P06                                                                                                                                                                                                |
| IBER   | 7   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 9   | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 70  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 75  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 88  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| IBER   | 108 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 114 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 4   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 10  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 34  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 35  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 122 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 11  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 8   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 10  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 71  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 76  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 89  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4_mod.jsp             | ausente    | P06                                                                                                                                                                                                |
| BASE   | 109 | javascript:mod(                                                 | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 115 | javascript:borrar(                                              | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 6   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 11  | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 35  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 36  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
