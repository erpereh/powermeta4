# mss_g3_p6_desc

Identificador: `mss_g3/mss_g3_p6_desc.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_SSM_TRAINING_REQUEST; m4:exec:CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"} | m4:datadef:SSM_TRAINING_REQUEST; m4:exec:CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; m4:item:M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave         | Texto                                              | Ámbito | Diccionario                                                                                  |
| ------------- | -------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | COLL   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | CYC    | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | IBER   | [translations/ess_mss_gen_es.properties:L194](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Volver | Cargando datos. Por favor, espere unos segundos... | BASE   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6_desc.jsp) | `edac12bd58ab300a33e5140c639580348ab89a8e3118823806bda4644800e7cc` |    261 |
| CYC / español     | [m4custom/CYC/mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6_desc.jsp)   | `49769289b844c4eeec198d6ad32c3d67dd688924c45120269badc4031521e395` |    270 |
| IBER / español    | [m4custom/IBER/mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g3/espanol/mss_g3_p6_desc.jsp) | `edac12bd58ab300a33e5140c639580348ab89a8e3118823806bda4644800e7cc` |    261 |
| BASE / español    | [mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc.jsp)                             | `fd7f8860efea26a453bbb77210f112aa71daa1d4a6318ab800b12ac3498dfc75` |    261 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g3/espanol/mss_g3_p6_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                   |
| --- | ------------------------------------------ |
| 166 | [valor dinámico] [valor dinámico]          |
| 215 | ',' ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 165 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                                                                   |
| 168 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31                                                                                                                           |
| 170 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 192 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                                                       |
| 192 | img     | alt=&lt;%=label_13%&gt;; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                        |
| 212 | a       | title=&lt;%=label_10%&gt;; href=javascript:view_message();                                                                                                                                                           |
| 212 | img     | alt=&lt;%=label_10%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                                                            |
| 215 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                      |
| 223 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                                           |
| 224 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                                                                |
| 225 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                                                                |
| 226 | input   | type=hidden; id=zntipo; name=zntipo                                                                                                                                                                                  |
| 227 | input   | type=hidden; id=zncu; name=zncu                                                                                                                                                                                      |
| 228 | input   | type=hidden; id=zid; name=zid                                                                                                                                                                                        |
| 229 | input   | type=hidden; id=zinfosubp; name=zinfosubp                                                                                                                                                                            |
| 232 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                                                   |
| 233 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                                                      |
| 234 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 235 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                                               |
| 241 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                                                 |
| 242 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                                                       |
| 243 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                                                |
| 245 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 246 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                                                |
| 246 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                   |
| 251 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 22  | empleado        | getParameter(request,"empleado")        |
| 23  | periodo         | getParameter(request,"periodo")         |
| 24  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 25  | zVis            | getParameter(request,"zVis")            |
| 56  | estado          | getParameter(request,"estado")          |
| 57  | zinicios        | getParameter(request,"zinicios")        |
| 58  | zidproducto     | getParameter(request,"zidproducto")     |
| 59  | znproducto      | getParameter(request,"znproducto")      |
| 60  | znmpt           | getParameter(request,"znmpt")           |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Detalle del producto"                                                         | Detalle del producto                                                                                                                         |
| 9   | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                                |
| 11  | label_04          | "Curso"                                                                        | Curso                                                                                                                                        |
| 12  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                        |
| 13  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                                    |
| 14  | label_07          | "Tipo"                                                                         | Tipo                                                                                                                                         |
| 15  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                            |
| 16  | label_09          | "Este producto no dispone de ningú                                             | {"Este producto no dispone de ningú}                                                                                                         |
| 17  | label_10          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                  |
| 18  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                    |
| 19  | label_13          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                          |
| 22  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                         |
| 23  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                          |
| 24  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                                  |
| 25  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                             |
| 56  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                           |
| 57  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                         |
| 58  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")                                                                      |
| 59  | znombre           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")                                                                       |
| 60  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")                                                                            |
| 89  | zsubsesion        | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                     |
| 90  | zMeta4Object      | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                     |
| 91  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                                   |
| 92  | znodo1            | "M4T_MULTIMEDIAS"                                                              | M4T_MULTIMEDIAS                                                                                                                              |
| 94  | ztipocarga        | "CM"                                                                           | CM                                                                                                                                           |
| 98  | zventanas         | "50"                                                                           | 50                                                                                                                                           |
| 102 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 104 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 105 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 107 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 108 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 109 | zlectura          | zsubsesion + "!" + znodo                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS                                                                                                      |
| 110 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"."}                                                                                                 |
| 111 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 115 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                     |
| 119 | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 120 | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 121 | zNnmtipo          | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 122 | zIDtipo           | zcomun + "SCO_ID_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 123 | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 124 | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 125 | zdiasestimated    | zcomun + "SCO_ESTIMATED_DAYS"                                                  | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                        |
| 126 | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 127 | zinfosubprod      | zcomun + "INFO_SUBPROD"                                                        | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}                                              |
| 130 | zpos              | ""                                                                             |                                                                                                                                              |
| 150 | zcount            | 0                                                                              | 0                                                                                                                                            |
| 151 | zcounti           | 0                                                                              | 0                                                                                                                                            |
| 158 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 197 | zDiasVIS          | ""                                                                             |                                                                                                                                              |
| 199 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 200 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                               |
| 201 | zposicions        | "0"                                                                            | 0                                                                                                                                            |
| 201 | zcontrol          | 0                                                                              | 0                                                                                                                                            |
| 201 | zposicion         | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | m4:startpage | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                                                  |
| 136 | m4:beginjob  |                                                                                                                                                                  |
| 137 | m4:datadef   | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                                                    |
| 145 | m4:exec      | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 145 | m4:param     | name=TIPO_CARGA; value=CM                                                                                                                                        |
| 146 | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                               |
| 146 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 147 | m4:endjob    |                                                                                                                                                                  |
| 148 | m4:move      |                                                                                                                                                                  |
| 148 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 202 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                             |
| 204 | m4:item      | m4varname=zIdTypeC; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                |
| 205 | m4:item      | m4varname=zDiasP; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                             |
| 206 | m4:item      | m4varname=zDiasM; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                   |
| 208 | m4:item      | m4varname=infosubprod; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; htmlsafe=true                     |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; jsafe=true; htmlsafe=true                                |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 216 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 260 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 140 | setItem          | zsubsesion,znodo,"","SSE_PRODUCTO",zproducto |
| 154 | getCount         | znodo,zsubsesion,znodo                       |
| 155 | getCountInClient | znodo,zsubsesion,znodo                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos            |
| --- | --------------- | --------------------- |
| 38  | solicitar_curso | idtrtb,id,infosprod   |
| 44  | volver_prof     |                       |
| 70  | navegar         | ord,fecha,idhr,oreval |
| 75  | view_message    |                       |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 62  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 65  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                     |
| 84  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 167 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 169 | &lt;%}else{%&gt;                                                                                                                            |
| 175 | if (zcounti == 0 ) {                                                                                                                        |
| 180 | if (zcounti != 0) {                                                                                                                         |
| 191 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 203 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 207 | &lt;%if (zIdTypeC.equals("01")){zDiasVIS=zDiasP;}else{zDiasVIS=zDiasM;}%&gt;                                                                |
| 211 | &lt;% if(infosubprod.equals("1")) { %&gt;                                                                                                   |
| 231 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 240 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 255 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 103 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 105 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 107 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 108 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 109 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 110 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 111 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 115 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 119 | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                   |
| 120 | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                    |
| 121 | expresión de cálculo/transformación: String zNnmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                      |
| 122 | expresión de cálculo/transformación: String zIDtipo = zcomun + "SCO_ID_DEV_PRO_TYPE";                                                       |
| 123 | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 124 | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                    |
| 125 | expresión de cálculo/transformación: String zdiasestimated = zcomun + "SCO_ESTIMATED_DAYS";                                                 |
| 126 | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                   |
| 127 | expresión de cálculo/transformación: String zinfosubprod = zcomun + "INFO_SUBPROD";                                                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 36  | ../../mss_generico/espanol/menu_mss.jsp               |
| 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 86  | ../../sse_generico/espanol/generico_links.jsp         |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | /css/estilo_mss.css                                                                                                                               |
| 35  | /libreria/funciones_sse.js                                                                                                                        |
| 165 | /iconos/noname_puesto_144_100.gif                                                                                                                 |
| 168 | mss_g3_p6.jsp?estado=31                                                                                                                           |
| 170 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 192 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         |
| 192 | /iconos/flecha_azul2_ess_11_9.gif                                                                                                                 |
| 212 | javascript:view_message();                                                                                                                        |
| 212 | /iconos/advertencia_rojo.gif                                                                                                                      |
| 215 | javascript:solicitar_curso(                                                                                                                       |
| 223 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    |
| 241 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          |
| 246 | javascript:volver_prof();                                                                                                                         |
| 246 | /iconos/icono_entrar_ess_36_36.gif                                                                                                                |
| 251 | /iconos/cargando.gif                                                                                                                              |
| 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           |
| 73  | mss_g3/mss_g3_p6.jsp                                                                                                                              |
| 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                |
| 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g3/espanol/mss_g3_p6_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                   |
| --- | ------------------------------------------ |
| 175 | [valor dinámico] [valor dinámico]          |
| 224 | ',' ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 174 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                                                                   |
| 177 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31                                                                                                                           |
| 179 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 201 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                                                       |
| 201 | img     | alt=&lt;%=label_13%&gt;; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                        |
| 221 | a       | title=&lt;%=label_10%&gt;; href=javascript:view_message();                                                                                                                                                           |
| 221 | img     | alt=&lt;%=label_10%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                                                            |
| 224 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                      |
| 232 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                                           |
| 233 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                                                                |
| 234 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                                                                |
| 235 | input   | type=hidden; id=zntipo; name=zntipo                                                                                                                                                                                  |
| 236 | input   | type=hidden; id=zncu; name=zncu                                                                                                                                                                                      |
| 237 | input   | type=hidden; id=zid; name=zid                                                                                                                                                                                        |
| 238 | input   | type=hidden; id=zinfosubp; name=zinfosubp                                                                                                                                                                            |
| 241 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                                                   |
| 242 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                                                      |
| 243 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 244 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                                               |
| 250 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                                                 |
| 251 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                                                       |
| 252 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                                                |
| 254 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 255 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                                                |
| 255 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                   |
| 260 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 22  | empleado        | getParameter(request,"empleado")        |
| 23  | periodo         | getParameter(request,"periodo")         |
| 24  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 25  | zVis            | getParameter(request,"zVis")            |
| 56  | estado          | getParameter(request,"estado")          |
| 57  | zinicios        | getParameter(request,"zinicios")        |
| 58  | zidproducto     | getParameter(request,"zidproducto")     |
| 59  | znproducto      | getParameter(request,"znproducto")      |
| 60  | znmpt           | getParameter(request,"znmpt")           |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Detalle del producto"                                                         | Detalle del producto                                                                                                                         |
| 9   | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                                |
| 11  | label_04          | "Curso"                                                                        | Curso                                                                                                                                        |
| 12  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                        |
| 13  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                                    |
| 14  | label_07          | "Tipo"                                                                         | Tipo                                                                                                                                         |
| 15  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                            |
| 16  | label_09          | "Este producto no dispone de ningú                                             | {"Este producto no dispone de ningú}                                                                                                         |
| 17  | label_10          | "Ver detalle"                                                                  | Ver detalle                                                                                                                                  |
| 18  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                    |
| 19  | label_13          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                          |
| 22  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                         |
| 23  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                          |
| 24  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                                  |
| 25  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                             |
| 56  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                           |
| 57  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                         |
| 58  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")                                                                      |
| 59  | znombre           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")                                                                       |
| 60  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")                                                                            |
| 98  | zsubsesion        | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                     |
| 99  | zMeta4Object      | "CSP_SSM_TRAINING_REQUEST"                                                     | CSP_SSM_TRAINING_REQUEST                                                                                                                     |
| 100 | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                                   |
| 101 | znodo1            | "M4T_MULTIMEDIAS"                                                              | M4T_MULTIMEDIAS                                                                                                                              |
| 103 | ztipocarga        | "CM"                                                                           | CM                                                                                                                                           |
| 107 | zventanas         | "50"                                                                           | 50                                                                                                                                           |
| 111 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 113 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 114 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 116 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 117 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                     |
| 118 | zlectura          | zsubsesion + "!" + znodo                                                       | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS                                                                                                      |
| 119 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"."}                                                                                                 |
| 120 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 124 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                     |
| 128 | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 129 | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 130 | zNnmtipo          | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 131 | zIDtipo           | zcomun + "SCO_ID_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 132 | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 133 | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 134 | zdiasestimated    | zcomun + "SCO_ESTIMATED_DAYS"                                                  | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                        |
| 135 | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 136 | zinfosubprod      | zcomun + "INFO_SUBPROD"                                                        | M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}                                              |
| 139 | zpos              | ""                                                                             |                                                                                                                                              |
| 159 | zcount            | 0                                                                              | 0                                                                                                                                            |
| 160 | zcounti           | 0                                                                              | 0                                                                                                                                            |
| 167 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 206 | zDiasVIS          | ""                                                                             |                                                                                                                                              |
| 208 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 209 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                               |
| 210 | zposicions        | "0"                                                                            | 0                                                                                                                                            |
| 210 | zcontrol          | 0                                                                              | 0                                                                                                                                            |
| 210 | zposicion         | 0                                                                              | 0                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 145 | m4:startpage | m4task=CSP_SSM_TRAINING_REQUEST                                                                                                                                  |
| 145 | m4:beginjob  |                                                                                                                                                                  |
| 146 | m4:datadef   | m4o=CSP_SSM_TRAINING_REQUEST; m4name=CSP_SSM_TRAINING_REQUEST                                                                                                    |
| 154 | m4:exec      | m4method=CARGA:{}CSP_SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 154 | m4:param     | name=TIPO_CARGA; value=CM                                                                                                                                        |
| 155 | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                               |
| 155 | m4:param     | name=m4name0; value=CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 156 | m4:endjob    |                                                                                                                                                                  |
| 157 | m4:move      |                                                                                                                                                                  |
| 157 | m4:param     | name=CSP_SSM_TRAINING_REQUEST; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 211 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                             |
| 213 | m4:item      | m4varname=zIdTypeC; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                |
| 214 | m4:item      | m4varname=zDiasP; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                             |
| 215 | m4:item      | m4varname=zDiasM; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                   |
| 217 | m4:item      | m4varname=infosubprod; m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; htmlsafe=true                     |
| 224 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 224 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; jsafe=true; htmlsafe=true                                |
| 224 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 225 | m4:item      | m4name=M4T_CURSOS{":"}CSP_SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 269 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 149 | setItem          | zsubsesion,znodo,"","SSE_PRODUCTO",zproducto |
| 163 | getCount         | znodo,zsubsesion,znodo                       |
| 164 | getCountInClient | znodo,zsubsesion,znodo                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos            |
| --- | --------------- | --------------------- |
| 38  | solicitar_curso | idtrtb,id,infosprod   |
| 44  | volver_prof     |                       |
| 79  | navegar         | ord,fecha,idhr,oreval |
| 84  | view_message    |                       |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 62  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 65  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                     |
| 93  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 176 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 178 | &lt;%}else{%&gt;                                                                                                                            |
| 184 | if (zcounti == 0 ) {                                                                                                                        |
| 189 | if (zcounti != 0) {                                                                                                                         |
| 200 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 212 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 216 | &lt;%if (zIdTypeC.equals("01")){zDiasVIS=zDiasP;}else{zDiasVIS=zDiasM;}%&gt;                                                                |
| 220 | &lt;% if(infosubprod.equals("1")) { %&gt;                                                                                                   |
| 240 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 249 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 264 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 112 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 114 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 116 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 117 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 118 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 119 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 120 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 124 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 128 | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                   |
| 129 | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                    |
| 130 | expresión de cálculo/transformación: String zNnmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                      |
| 131 | expresión de cálculo/transformación: String zIDtipo = zcomun + "SCO_ID_DEV_PRO_TYPE";                                                       |
| 132 | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 133 | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                    |
| 134 | expresión de cálculo/transformación: String zdiasestimated = zcomun + "SCO_ESTIMATED_DAYS";                                                 |
| 135 | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                   |
| 136 | expresión de cálculo/transformación: String zinfosubprod = zcomun + "INFO_SUBPROD";                                                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 36  | ../../mss_generico/espanol/menu_mss.jsp               |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 95  | ../../sse_generico/espanol/generico_links.jsp         |
| 265 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | /css/estilo_mss.css                                                                                                                               |
| 35  | /libreria/funciones_sse.js                                                                                                                        |
| 174 | /iconos/noname_puesto_144_100.gif                                                                                                                 |
| 177 | mss_g3_p6.jsp?estado=31                                                                                                                           |
| 179 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 201 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         |
| 201 | /iconos/flecha_azul2_ess_11_9.gif                                                                                                                 |
| 221 | javascript:view_message();                                                                                                                        |
| 221 | /iconos/advertencia_rojo.gif                                                                                                                      |
| 224 | javascript:solicitar_curso(                                                                                                                       |
| 232 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    |
| 250 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          |
| 255 | javascript:volver_prof();                                                                                                                         |
| 255 | /iconos/icono_entrar_ess_36_36.gif                                                                                                                |
| 260 | /iconos/cargando.gif                                                                                                                              |
| 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           |
| 82  | mss_g3/mss_g3_p6.jsp                                                                                                                              |
| 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                |
| 95  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     |
| 265 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p6_desc.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p6_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                   |
| --- | ------------------------------------------ |
| 166 | [valor dinámico] [valor dinámico]          |
| 215 | ',' ',' ');" title="Detalle del curso"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 165 | img     | src=/iconos/noname_puesto_144_100.gif; width=99; height=100; alt=Solicita necesidades de formación                                                                                                                   |
| 168 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31                                                                                                                           |
| 170 | a       | class=enlacefuncional; title=&lt;%=label_13%&gt;; tabindex=1; href=mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 192 | a       | href=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                                                                                       |
| 192 | img     | alt=&lt;%=label_13%&gt;; src=/iconos/flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                        |
| 212 | a       | title=&lt;%=label_10%&gt;; href=javascript:view_message();                                                                                                                                                           |
| 212 | img     | alt=&lt;%=label_10%&gt;; src=/iconos/advertencia_rojo.gif                                                                                                                                                            |
| 215 | a       | href=javascript:solicitar_curso('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                      |
| 223 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31; method=post; name=oculto; id=oculto                                                                                                           |
| 224 | input   | type=hidden; id=znombre; name=znombre                                                                                                                                                                                |
| 225 | input   | type=hidden; id=zidtrtb; name=zidtrtb                                                                                                                                                                                |
| 226 | input   | type=hidden; id=zntipo; name=zntipo                                                                                                                                                                                  |
| 227 | input   | type=hidden; id=zncu; name=zncu                                                                                                                                                                                      |
| 228 | input   | type=hidden; id=zid; name=zid                                                                                                                                                                                        |
| 229 | input   | type=hidden; id=zinfosubp; name=zinfosubp                                                                                                                                                                            |
| 232 | input   | type=hidden; id=empleado; name=empleado; value=&lt;%=empleado%&gt;                                                                                                                                                   |
| 233 | input   | type=hidden; id=periodo; name=periodo; value=&lt;%=periodo%&gt;                                                                                                                                                      |
| 234 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 235 | input   | type=hidden; id=zVis; name=zVis; value=&lt;%=zVis%&gt;                                                                                                                                                               |
| 241 | form    | action=/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp; method=post; name=volver; id=volver                                                                                                                 |
| 242 | input   | type=hidden; id=person; name=person; value=&lt;%=empleado%&gt;                                                                                                                                                       |
| 243 | input   | type=hidden; id=person_ord; name=person_ord; value=&lt;%=periodo%&gt;                                                                                                                                                |
| 245 | input   | type=hidden; id=nombre_empleado; name=nombre_empleado; value=&lt;%=nombre_empleado%&gt;                                                                                                                              |
| 246 | a       | title=&lt;%=label_11%&gt;; href=javascript:volver_prof();; tabindex=6                                                                                                                                                |
| 246 | img     | alt=&lt;%=label_11%&gt;; src=/iconos/icono_entrar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                   |
| 251 | img     | src=/iconos/cargando.gif; alt=&lt;%=Tran.getProperty("Button.Volver")%&gt;; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 22  | empleado        | getParameter(request,"empleado")        |
| 23  | periodo         | getParameter(request,"periodo")         |
| 24  | nombre_empleado | getParameter(request,"nombre_empleado") |
| 25  | zVis            | getParameter(request,"zVis")            |
| 56  | estado          | getParameter(request,"estado")          |
| 57  | zinicios        | getParameter(request,"zinicios")        |
| 58  | zidproducto     | getParameter(request,"zidproducto")     |
| 59  | znproducto      | getParameter(request,"znproducto")      |
| 60  | znmpt           | getParameter(request,"znmpt")           |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ----------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | label_01          | "Detalle del producto"                                                         | Detalle del producto                                                                                                                     |
| 9   | label_02          | "Descripció                                                                    | {"Descripció}                                                                                                                            |
| 11  | label_04          | "Curso"                                                                        | Curso                                                                                                                                    |
| 12  | label_05          | "Dí                                                                            | {"Dí}                                                                                                                                    |
| 13  | label_06          | "Proveedor"                                                                    | Proveedor                                                                                                                                |
| 14  | label_07          | "Tipo"                                                                         | Tipo                                                                                                                                     |
| 15  | label_08          | "Detalle del curso"                                                            | Detalle del curso                                                                                                                        |
| 16  | label_09          | "Este producto no dispone de ningú                                             | {"Este producto no dispone de ningú}                                                                                                     |
| 17  | label_10          | "Ver detalle"                                                                  | Ver detalle                                                                                                                              |
| 18  | label_11          | "Volver a Datos Profesionales del Empleado"                                    | Volver a Datos Profesionales del Empleado                                                                                                |
| 19  | label_13          | "Solicita necesidades de formació                                              | {"Solicita necesidades de formació}                                                                                                      |
| 22  | empleado          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                     |
| 23  | periodo           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo")                                                                      |
| 24  | nombre_empleado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado")                                                              |
| 25  | zVis              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis")                                                                         |
| 56  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                       |
| 57  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                     |
| 58  | zproducto         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto")                                                                  |
| 59  | znombre           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto")                                                                   |
| 60  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt")                                                                        |
| 89  | zsubsesion        | "SSM_TRAINING_REQUEST"                                                         | SSM_TRAINING_REQUEST                                                                                                                     |
| 90  | zMeta4Object      | "SSM_TRAINING_REQUEST"                                                         | SSM_TRAINING_REQUEST                                                                                                                     |
| 91  | znodo             | "M4T_CURSOS"                                                                   | M4T_CURSOS                                                                                                                               |
| 92  | znodo1            | "M4T_MULTIMEDIAS"                                                              | M4T_MULTIMEDIAS                                                                                                                          |
| 94  | ztipocarga        | "CM"                                                                           | CM                                                                                                                                       |
| 98  | zventanas         | "50"                                                                           | 50                                                                                                                                       |
| 102 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 104 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 105 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 107 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 108 | zmove             | znodo + "[" + zregistroinicial + "]"                                           | M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                                 |
| 109 | zlectura          | zsubsesion + "!" + znodo                                                       | SSM_TRAINING_REQUEST{"!"}M4T_CURSOS                                                                                                      |
| 110 | zraiz             | zsubsesion + "!" + znodo + "."                                                 | SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"."}                                                                                                 |
| 111 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}                                                              |
| 115 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA"                                 | CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                     |
| 119 | znmcursos         | zcomun + "SCO_NM_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}                                     |
| 120 | zidcurso          | zcomun + "SCO_ID_DEV_SUBPRODUCT"                                               | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}                                     |
| 121 | zNnmtipo          | zcomun + "SCO_NM_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}                                       |
| 122 | zIDtipo           | zcomun + "SCO_ID_DEV_PRO_TYPE"                                                 | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                       |
| 123 | zidtrtb1          | zcomun + "SCO_ID_TRTBREQ"                                                      | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_TRTBREQ"}                                            |
| 124 | zdias             | zcomun + "SCO_DAYS"                                                            | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                                  |
| 125 | zdiasestimated    | zcomun + "SCO_ESTIMATED_DAYS"                                                  | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                        |
| 126 | zproveedor        | zcomun + "SCO_NM_TRAINING_PROV"                                                | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}                                      |
| 127 | zinfosubprod      | zcomun + "INFO_SUBPROD"                                                        | M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}                                              |
| 130 | zpos              | ""                                                                             |                                                                                                                                          |
| 150 | zcount            | 0                                                                              | 0                                                                                                                                        |
| 151 | zcounti           | 0                                                                              | 0                                                                                                                                        |
| 158 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 197 | zDiasVIS          | ""                                                                             |                                                                                                                                          |
| 199 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 200 | zregistrofinals   | String.valueOf(zregistrofinal)                                                 | String.valueOf(zregistrofinal)                                                                                                           |
| 201 | zposicions        | "0"                                                                            | 0                                                                                                                                        |
| 201 | zcontrol          | 0                                                                              | 0                                                                                                                                        |
| 201 | zposicion         | 0                                                                              | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 136 | m4:startpage | m4task=SSM_TRAINING_REQUEST                                                                                                                                  |
| 136 | m4:beginjob  |                                                                                                                                                              |
| 137 | m4:datadef   | m4o=SSM_TRAINING_REQUEST; m4name=SSM_TRAINING_REQUEST                                                                                                        |
| 145 | m4:exec      | m4method=CARGA:{}SSM_TRAINING_REQUEST{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 145 | m4:param     | name=TIPO_CARGA; value=CM                                                                                                                                    |
| 146 | m4:outputdef | m4alias=M4T_CURSOS                                                                                                                                           |
| 146 | m4:param     | name=m4name0; value=SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 147 | m4:endjob    |                                                                                                                                                              |
| 148 | m4:move      |                                                                                                                                                              |
| 148 | m4:param     | name=SSM_TRAINING_REQUEST; value=M4T_CURSOS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                                    |
| 202 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                         |
| 204 | m4:item      | m4varname=zIdTypeC; m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_PRO_TYPE"}                                |
| 205 | m4:item      | m4varname=zDiasP; m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DAYS"}                                             |
| 206 | m4:item      | m4varname=zDiasM; m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ESTIMATED_DAYS"}                                   |
| 208 | m4:item      | m4varname=infosubprod; m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; htmlsafe=true                     |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DEV_SUBPRODUCT"}; jsafe=true; htmlsafe=true                       |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"INFO_SUBPROD"}; jsafe=true; htmlsafe=true                                |
| 215 | m4:item      | m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_SUBPRODUCT"}; htmlsafe=true                                   |
| 216 | m4:item      | m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DEV_PRO_TYPE"}; htmlsafe=true                                     |
| 218 | m4:item      | m4name=M4T_CURSOS{":"}SSM_TRAINING_REQUEST{"!"}M4T_CURSOS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TRAINING_PROV"}; htmlsafe=true                                    |
| 260 | m4:endpage   |                                                                                                                                                              |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 140 | setItem          | zsubsesion,znodo,"","SSE_PRODUCTO",zproducto |
| 154 | getCount         | znodo,zsubsesion,znodo                       |
| 155 | getCountInClient | znodo,zsubsesion,znodo                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos            |
| --- | --------------- | --------------------- |
| 38  | solicitar_curso | idtrtb,id,infosprod   |
| 44  | volver_prof     |                       |
| 70  | navegar         | ord,fecha,idhr,oreval |
| 75  | view_message    |                       |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 62  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                         |
| 65  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                     |
| 84  | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 167 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 169 | &lt;%}else{%&gt;                                                                                                                            |
| 175 | if (zcounti == 0 ) {                                                                                                                        |
| 180 | if (zcounti != 0) {                                                                                                                         |
| 191 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 203 | &lt;%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%&gt; |
| 207 | &lt;%if (zIdTypeC.equals("01")){zDiasVIS=zDiasP;}else{zDiasVIS=zDiasM;}%&gt;                                                                |
| 211 | &lt;% if(infosubprod.equals("1")) { %&gt;                                                                                                   |
| 231 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 240 | &lt;% if (zVis.equals("0")){%&gt;                                                                                                           |
| 255 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 103 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 105 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 107 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 108 | expresión de cálculo/transformación: String zmove = znodo + "[" + zregistroinicial + "]";                                                   |
| 109 | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                            |
| 110 | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                         |
| 111 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                     |
| 115 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";                                  |
| 119 | expresión de cálculo/transformación: String znmcursos = zcomun + "SCO_NM_DEV_SUBPRODUCT";                                                   |
| 120 | expresión de cálculo/transformación: String zidcurso = zcomun + "SCO_ID_DEV_SUBPRODUCT";                                                    |
| 121 | expresión de cálculo/transformación: String zNnmtipo = zcomun + "SCO_NM_DEV_PRO_TYPE";                                                      |
| 122 | expresión de cálculo/transformación: String zIDtipo = zcomun + "SCO_ID_DEV_PRO_TYPE";                                                       |
| 123 | expresión de cálculo/transformación: String zidtrtb1 = zcomun + "SCO_ID_TRTBREQ";                                                           |
| 124 | expresión de cálculo/transformación: String zdias = zcomun + "SCO_DAYS";                                                                    |
| 125 | expresión de cálculo/transformación: String zdiasestimated = zcomun + "SCO_ESTIMATED_DAYS";                                                 |
| 126 | expresión de cálculo/transformación: String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";                                                   |
| 127 | expresión de cálculo/transformación: String zinfosubprod = zcomun + "INFO_SUBPROD";                                                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 36  | ../../mss_generico/espanol/menu_mss.jsp               |
| 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 86  | ../../sse_generico/espanol/generico_links.jsp         |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | /css/estilo_mss.css                                                                                                                               |
| 35  | /libreria/funciones_sse.js                                                                                                                        |
| 165 | /iconos/noname_puesto_144_100.gif                                                                                                                 |
| 168 | mss_g3_p6.jsp?estado=31                                                                                                                           |
| 170 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 |
| 192 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         |
| 192 | /iconos/flecha_azul2_ess_11_9.gif                                                                                                                 |
| 212 | javascript:view_message();                                                                                                                        |
| 212 | /iconos/advertencia_rojo.gif                                                                                                                      |
| 215 | javascript:solicitar_curso(                                                                                                                       |
| 223 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    |
| 241 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          |
| 246 | javascript:volver_prof();                                                                                                                         |
| 246 | /iconos/icono_entrar_ess_36_36.gif                                                                                                                |
| 251 | /iconos/cargando.gif                                                                                                                              |
| 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           |
| 73  | mss_g3/mss_g3_p6.jsp                                                                                                                              |
| 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                |
| 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     |
| 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                                        | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| COLL   | 35  | /libreria/funciones_sse.js                                                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 168 | mss_g3_p6.jsp?estado=31                                                                                                                           | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| COLL   | 170 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| COLL   | 192 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         | ausente    | P06                                                                                                                                                                            |
| COLL   | 212 | javascript:view_message();                                                                                                                        | dinámica   | P06                                                                                                                                                                            |
| COLL   | 215 | javascript:solicitar_curso(                                                                                                                       | dinámica   | P06                                                                                                                                                                            |
| COLL   | 223 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    | ausente    | P06                                                                                                                                                                            |
| COLL   | 241 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          | ausente    | P06                                                                                                                                                                            |
| COLL   | 246 | javascript:volver_prof();                                                                                                                         | dinámica   | P06                                                                                                                                                                            |
| COLL   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| COLL   | 73  | mss_g3/mss_g3_p6.jsp                                                                                                                              | ausente    | P06                                                                                                                                                                            |
| COLL   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| COLL   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| CYC    | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| CYC    | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| CYC    | 95  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 265 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| CYC    | 35  | /libreria/funciones_sse.js                                                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 177 | mss_g3_p6.jsp?estado=31                                                                                                                           | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| CYC    | 179 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| CYC    | 201 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         | ausente    | P06                                                                                                                                                                            |
| CYC    | 221 | javascript:view_message();                                                                                                                        | dinámica   | P06                                                                                                                                                                            |
| CYC    | 224 | javascript:solicitar_curso(                                                                                                                       | dinámica   | P06                                                                                                                                                                            |
| CYC    | 232 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    | ausente    | P06                                                                                                                                                                            |
| CYC    | 250 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          | ausente    | P06                                                                                                                                                                            |
| CYC    | 255 | javascript:volver_prof();                                                                                                                         | dinámica   | P06                                                                                                                                                                            |
| CYC    | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| CYC    | 82  | mss_g3/mss_g3_p6.jsp                                                                                                                              | ausente    | P06                                                                                                                                                                            |
| CYC    | 94  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| CYC    | 95  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 265 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| IBER   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| IBER   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| IBER   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| IBER   | 35  | /libreria/funciones_sse.js                                                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 168 | mss_g3_p6.jsp?estado=31                                                                                                                           | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| IBER   | 170 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| IBER   | 192 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         | ausente    | P06                                                                                                                                                                            |
| IBER   | 212 | javascript:view_message();                                                                                                                        | dinámica   | P06                                                                                                                                                                            |
| IBER   | 215 | javascript:solicitar_curso(                                                                                                                       | dinámica   | P06                                                                                                                                                                            |
| IBER   | 223 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    | ausente    | P06                                                                                                                                                                            |
| IBER   | 241 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          | ausente    | P06                                                                                                                                                                            |
| IBER   | 246 | javascript:volver_prof();                                                                                                                         | dinámica   | P06                                                                                                                                                                            |
| IBER   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| IBER   | 73  | mss_g3/mss_g3_p6.jsp                                                                                                                              | ausente    | P06                                                                                                                                                                            |
| IBER   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| IBER   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| BASE   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| BASE   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| BASE   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |
| BASE   | 35  | /libreria/funciones_sse.js                                                                                                                        | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 168 | mss_g3_p6.jsp?estado=31                                                                                                                           | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| BASE   | 170 | mss_g3_p6.jsp?estado=31&amp;empleado=&lt;%=empleado%&gt;&amp;periodo=&lt;%=periodo%&gt;&amp;nombre_empleado=&lt;%=nombre_empleado%&gt;&amp;zVis=0 | física     | [mss_g3/mss_g3_p6.jsp](mss_g3--mss_g3_p6.md)                                                                                                                                   |
| BASE   | 192 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                                                                                         | ausente    | P06                                                                                                                                                                            |
| BASE   | 212 | javascript:view_message();                                                                                                                        | dinámica   | P06                                                                                                                                                                            |
| BASE   | 215 | javascript:solicitar_curso(                                                                                                                       | dinámica   | P06                                                                                                                                                                            |
| BASE   | 223 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31                                                                                    | ausente    | P06                                                                                                                                                                            |
| BASE   | 241 | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp                                                                                          | ausente    | P06                                                                                                                                                                            |
| BASE   | 246 | javascript:volver_prof();                                                                                                                         | dinámica   | P06                                                                                                                                                                            |
| BASE   | 36  | ../../mss_generico/espanol/menu_mss.jsp                                                                                                           | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                                                                               |
| BASE   | 73  | mss_g3/mss_g3_p6.jsp                                                                                                                              | ausente    | P06                                                                                                                                                                            |
| BASE   | 85  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                                                                                | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                                                                                         |
| BASE   | 86  | ../../sse_generico/espanol/generico_links.jsp                                                                                                     | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 256 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                                                                                             | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                                                                                   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p6_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
