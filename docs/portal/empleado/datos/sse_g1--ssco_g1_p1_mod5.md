# ssco_g1_p1_mod5

Identificador: `sse_g1/ssco_g1_p1_mod5.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                           | Solo en BASE                                            |
| ------ | --------- | ------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                    | sin diferencia en estos identificadores                 |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores                    | sin diferencia en estos identificadores                 |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                    | sin diferencia en estos identificadores                 |
| COLL   | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA"} |
| CYC    | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA"} |
| IBER   | shared    | contenido diferente | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA"} |

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                  | Ámbito | Diccionario                                                                                  |
| ----------------------- | ------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Button.Delete2          | Eliminar la petición                                   | COLL   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                   | CYC    | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                   | IBER   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Delete2          | Eliminar la petición                                   | BASE   | [translations/ess_mss_gen_es.properties:L68](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                 | COLL   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                 | CYC    | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                 | IBER   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                 | BASE   | [translations/ess_mss_gen_es.properties:L75](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.Send             | Enviar                                                 | BASE   | [translations/shco_g0_es.properties:L34](../../referencias/literales/shco_g0_es.md)          |
| Button.Send             | Enviar                                                 | BASE   | [translations/ssco_etask_es.properties:L35](../../referencias/literales/ssco_etask_es.md)    |
| Label.LblSelectDate     | Selecciona la fecha de                                 | COLL   | [translations/ess_mss_gen_es.properties:L167](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelectDate     | Selecciona la fecha de                                 | CYC    | [translations/ess_mss_gen_es.properties:L167](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelectDate     | Selecciona la fecha de                                 | IBER   | [translations/ess_mss_gen_es.properties:L167](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblSelectDate     | Selecciona la fecha de                                 | BASE   | [translations/ess_mss_gen_es.properties:L166](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWriteDate      | Escribe la fecha de                                    | COLL   | [translations/ess_mss_gen_es.properties:L166](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWriteDate      | Escribe la fecha de                                    | CYC    | [translations/ess_mss_gen_es.properties:L166](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWriteDate      | Escribe la fecha de                                    | IBER   | [translations/ess_mss_gen_es.properties:L166](../../referencias/literales/ess_mss_gen_es.md) |
| Label.LblWriteDate      | Escribe la fecha de                                    | BASE   | [translations/ess_mss_gen_es.properties:L165](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                  | COLL   | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                  | CYC    | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                  | IBER   | [translations/ess_mss_gen_es.properties:L127](../../referencias/literales/ess_mss_gen_es.md) |
| Label.TableValPen       | Peticiones Pendientes                                  | BASE   | [translations/ess_mss_gen_es.properties:L126](../../referencias/literales/ess_mss_gen_es.md) |
| Label.sse_g1_p1_mod5Des | En esta pantalla puedes añadir tu estado civil actual. | COLL   | [translations/sse_g1_es.properties:L74](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p1_mod5Des | En esta pantalla puedes añadir tu estado civil actual. | IBER   | [translations/sse_g1_es.properties:L74](../../referencias/literales/sse_g1_es.md)            |
| Label.sse_g1_p1_mod5Des | En esta pantalla puedes añadir tu estado civil actual. | BASE   | [translations/sse_g1_es.properties:L74](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1         | Mis datos personales                                   | COLL   | [translations/sse_g1_es.properties:L68](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1         | Mis datos personales                                   | IBER   | [translations/sse_g1_es.properties:L68](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1         | Mis datos personales                                   | BASE   | [translations/sse_g1_es.properties:L68](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5    | Estado civil                                           | COLL   | [translations/sse_g1_es.properties:L72](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5    | Estado civil                                           | IBER   | [translations/sse_g1_es.properties:L72](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5    | Estado civil                                           | BASE   | [translations/sse_g1_es.properties:L72](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5Des | Estado civil                                           | COLL   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5Des | Estado civil                                           | IBER   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |
| Title.sse_g1_p1_mod5Des | Estado civil                                           | BASE   | [translations/sse_g1_es.properties:L73](../../referencias/literales/sse_g1_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p1_mod5.jsp) | `f599b36a347f2d275c8bb80311427da254b1143041d6b823a5575ba74e8a857a` |     37 |
| COLL / compartido | [m4custom/COLL/sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/ssco_g1_p1_mod5.jsp)                 | `a4ed00549df4384d20a7b219d43ac3ad69e95f02ec5e794147950938251ea976` |    273 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p1_mod5.jsp)   | `6441aaf2f953c3405d78638bc97f95637a51f82627c1c692490da0e2e5fda7f3` |     37 |
| CYC / compartido  | [m4custom/CYC/sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/ssco_g1_p1_mod5.jsp)                   | `a4ed00549df4384d20a7b219d43ac3ad69e95f02ec5e794147950938251ea976` |    273 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/ssco_g1_p1_mod5.jsp) | `f599b36a347f2d275c8bb80311427da254b1143041d6b823a5575ba74e8a857a` |     37 |
| IBER / compartido | [m4custom/IBER/sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/ssco_g1_p1_mod5.jsp)                 | `a4ed00549df4384d20a7b219d43ac3ad69e95f02ec5e794147950938251ea976` |    273 |
| BASE / español    | [sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/sse_g1/espanol/ssco_g1_p1_mod5.jsp)                             | `f599b36a347f2d275c8bb80311427da254b1143041d6b823a5575ba74e8a857a` |     37 |
| BASE / compartido | [sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/sse_g1/ssco_g1_p1_mod5.jsp)                                             | `7c018b0967930d01031e125a84ded4d8d49a4f5abaca5b8727899e0bcc5b709e` |    179 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/ssco_g1_p1_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 15  | estado          | getParameter(request,"estado")   |
| 16  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 15  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 16  | zinicios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 35  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | ../../sse_g1/sse_g1_trans.jsp                      |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 30  | ../ssco_g1_p1_mod5.jsp                             |
| 31  | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 33  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 11  | /libreria/funciones_sse.js                         |
| 12  | /libreria/clase_val_entradas.js                    |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | ../../sse_g1/sse_g1_trans.jsp                      |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 30  | ../ssco_g1_p1_mod5.jsp                             |
| 31  | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 33  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/ssco_g1_p1_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                       |
| --- | -------------------------------------------------------------- |
| 160 | [valor dinámico] [valor dinámico]                              |
| 181 | * " maxlength="10" size="10" tabindex="[valor dinámico]" /&gt; |
| 182 | * "value=" "&gt;                                               |
| 229 | ',' ');"&gt;                                                   |
| 269 | ');"&gt;                                                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 158 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/estado_civil_71x100.gif; width=100; height=100                                                                          |
| 163 | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                    |
| 169 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=get; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:return control_s();                                         |
| 171 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HT_MAR_STAT                                                                                                                                                            |
| 172 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                   |
| 173 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HT_MAR_STAT                                                                                                                                                            |
| 178 | a       | title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                           |
| 178 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                 |
| 181 | input   | class=fuenteformulario; type=text; name=STD_DT_START; id=STD_DT_START; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDDTSTART%&gt;; htmlsafe=true                                                           |
| 183 | select  | tabindex=&lt;%=zTab++%&gt;; id=STD_ID_MARITAL_STAT; class=fuenteformulario200; name=STD_ID_MARITAL_STAT; title=                                                                                                 |
| 184 | option  | value=                                                                                                                                                                                                          |
| 186 | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo3%&gt;                                                                                                                                                |
| 192 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:void comprobar();; tabindex=&lt;%=zTab++%&gt;                                                                                                                 |
| 192 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                       |
| 229 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:anadido('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;; jsafe=true                                                                            |
| 229 | img     | class=tablamenuright; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 269 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:pendientes('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true                                                                          |
| 269 | img     | class=tablamenuright; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 62  | zsubsesion         | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 63  | zmeta4object       | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 64  | znodo              | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 65  | znodo2             | "M4T_HT_MAR_STAT"                                                              | M4T_HT_MAR_STAT                                                                                                                          |
| 67  | znodo3             | "M4T_LU_MAR_STAT"                                                              | M4T_LU_MAR_STAT                                                                                                                          |
| 69  | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                                      |
| 72  | zventanas          | "10"                                                                           | 10                                                                                                                                       |
| 73  | zvuelta            | 5                                                                              | 5                                                                                                                                        |
| 74  | zdireccion         | "sse_g1/ssco_g1_p1_mod5.jsp"                                                   | sse_g1/ssco_g1_p1_mod5.jsp                                                                                                               |
| 75  | zestado            | "11"                                                                           | 11                                                                                                                                       |
| 77  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 79  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 80  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 82  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 83  | zmove              | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 84  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 86  | zSTDIDMARITALSTAT  | zcomun + "STD_ID_MARITAL_STAT"                                                 | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}                                  |
| 87  | zSTDDTSTART        | zcomun + "STD_DT_START"                                                        | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}                                         |
| 88  | zSTDDTEND          | zcomun + "STD_DT_END"                                                          | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}                                           |
| 89  | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 91  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT{"[*]"}                                                                                               |
| 92  | zmove2             | znodo2 + "[FIRST]"                                                             | M4T_HT_MAR_STAT{"[FIRST]"}                                                                                                               |
| 93  | zlectura2          | zsubsesion + "!" + znodo2                                                      | SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT                                                                                                      |
| 94  | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 96  | zSTDIDMARITALSTAT2 | zcomun2 + "STD_ID_MARITAL_STAT"                                                | M4T_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}                                  |
| 97  | zSTDNMARITALSTAT   | zcomun2 + "STD_N_MARITAL_STAT"                                                 | M4T_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}                                   |
| 99  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                       |
| 101 | zTab               | 1                                                                              | 1                                                                                                                                        |
| 105 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[*]"}                                                                                               |
| 106 | zmove3             | znodo3 + "[FIRST]"                                                             | M4T_LU_MAR_STAT{"[FIRST]"}                                                                                                               |
| 131 | zcount             | 0                                                                              | 0                                                                                                                                        |
| 132 | zcounti            | 0                                                                              | 0                                                                                                                                        |
| 133 | zcount2            | 0                                                                              | 0                                                                                                                                        |
| 135 | zcount3            | 0                                                                              | 0                                                                                                                                        |
| 146 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 147 | zcountv2           | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                                  |
| 149 | zcountv3           | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                                  |
| 219 | fech               | m.getItem(znodo2,zmeta4object,znodo2,"","STD_DT_START")                        | m.getItem(znodo2,zmeta4object,znodo2,"","STD_DT_START")                                                                                  |
| 220 | fechrc             | fech.split("\\s+")[0]                                                          | {fech.split("\\s}{")[0]}                                                                                                                 |
| 223 | fechact            | format.format(new Date())                                                      | format.format(new Date())                                                                                                                |
| 247 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 248 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 249 | zposicions         | "0"                                                                            | 0                                                                                                                                        |
| 250 | zcontrol           | 0                                                                              | 0                                                                                                                                        |
| 251 | zposicion          | 0                                                                              | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 109 | m4:startpage | m4task=SSE_HT_MAR_STAT                                                                                                                                       |
| 110 | m4:beginjob  |                                                                                                                                                              |
| 111 | m4:datadef   | m4o=SSE_HT_MAR_STAT; m4name=SSE_HT_MAR_STAT                                                                                                                  |
| 118 | m4:exec      | m4method=CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                  |
| 118 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                   |
| 119 | m4:outputdef | m4alias=SSE_HT_MAR_STAT                                                                                                                                      |
| 119 | m4:param     | name=m4name0; value=SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 120 | m4:outputdef | m4alias=M4T_HT_MAR_STAT                                                                                                                                      |
| 120 | m4:param     | name=m4name0; value=SSE_HT_MAR_STAT{"!"}M4T_HT_MAR_STAT{"[*]"}                                                                                               |
| 122 | m4:outputdef | m4alias=M4T_LU_MAR_STAT                                                                                                                                      |
| 122 | m4:param     | name=m4name0; value=SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[*]"}                                                                                               |
| 124 | m4:endjob    |                                                                                                                                                              |
| 125 | m4:move      |                                                                                                                                                              |
| 125 | m4:param     | name=SSE_HT_MAR_STAT; value=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 126 | m4:move      |                                                                                                                                                              |
| 126 | m4:param     | name=SSE_HT_MAR_STAT; value=M4T_HT_MAR_STAT{"[FIRST]"}                                                                                                       |
| 128 | m4:move      |                                                                                                                                                              |
| 128 | m4:param     | name=SSE_HT_MAR_STAT; value=M4T_LU_MAR_STAT{"[FIRST]"}                                                                                                       |
| 181 | m4:label     | m4name=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true                                       |
| 182 | m4:label     | m4name=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}; htmlsafe=true                                |
| 185 | m4:dataloop  | outputdef=M4T_LU_MAR_STAT                                                                                                                                    |
| 186 | m4:item      | item=STD_ID_MARITAL_STAT; htmlsafe=true; outputdef=M4T_LU_MAR_STAT                                                                                           |
| 186 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=M4T_LU_MAR_STAT                                                                                            |
| 204 | m4:label     | item=STD_ID_MARITAL_STAT; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                           |
| 205 | m4:label     | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                            |
| 206 | m4:label     | item=STD_DT_START; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                                  |
| 208 | m4:dataloop  | outputdef=M4T_HT_MAR_STAT                                                                                                                                    |
| 210 | m4:item      | item=STD_ID_MARITAL_STAT; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                           |
| 211 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                            |
| 212 | m4:item      | item=STD_DT_START; htmlsafe=true; outputdef=M4T_HT_MAR_STAT                                                                                                  |
| 229 | m4:item      | item=STD_DT_START; htmlsafe=true; outputdef=M4T_HT_MAR_STAT; jsafe=true                                                                                      |
| 257 | m4:label     | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                            |
| 258 | m4:label     | item=STD_DT_START; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                                  |
| 260 | m4:dataloop  | outputdef=SSE_HT_MAR_STAT                                                                                                                                    |
| 261 | m4:current   | m4varname=current; outputdef=SSE_HT_MAR_STAT                                                                                                                 |
| 267 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                            |
| 268 | m4:item      | item=STD_DT_START; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                                  |

| L   | Operación        | Argumentos literales                         |
| --- | ---------------- | -------------------------------------------- |
| 114 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0"    |
| 139 | getCount         | znodo,zsubsesion,znodo                       |
| 140 | getCountInClient | znodo,zsubsesion,znodo                       |
| 141 | getCount         | znodo2,zsubsesion,znodo2                     |
| 143 | getCount         | znodo3,zsubsesion,znodo3                     |
| 219 | getItem          | znodo2,zmeta4object,znodo2,"","STD_DT_START" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 12  | comprobar  |            |
| 16  | control_s  |            |
| 44  | pendientes | ord        |
| 50  | anadido    | ord,dt     |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | if (vccc){m4submit("NombreFormulario");}                                                                                                 |
| 22  | dtstartok = m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");                                                         |
| 24  | if (dtstart == null &#124;&#124; dtstart == ""){                                                                                         |
| 28  | if ((dtstart != null &amp;&amp; dtstart !="") &amp;&amp; (dtstartok == "")){                                                             |
| 32  | if (estadoCivil == null &#124;&#124; estadoCivil == ""){                                                                                 |
| 36  | if (error == 1){                                                                                                                         |
| 37  | alert(texto);                                                                                                                            |
| 40  | else {                                                                                                                                   |
| 201 | &lt;% if (zcount2 &gt; 0) { %&gt;                                                                                                        |
| 226 | if(date1.compareTo(date2)==1 &#124;&#124; date1.compareTo(date2)==0){                                                                    |
| 231 | &lt;% }else{ %&gt;                                                                                                                       |
| 245 | if (zcount &gt; 0) {                                                                                                                     |
| 264 | if (zcontrol==0){zposicions="";}else{zposicions="2";}%&gt;                                                                               |
| 19  | expresión de cálculo/transformación: var texto = m4getmessage("_sl_co_ess_ec_0") + "\n";                                                 |
| 25  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_1");                                            |
| 29  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_2");                                            |
| 33  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_3");                                            |
| 78  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 80  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 82  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 83  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 84  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 86  | expresión de cálculo/transformación: String zSTDIDMARITALSTAT = zcomun + "STD_ID_MARITAL_STAT";                                          |
| 87  | expresión de cálculo/transformación: String zSTDDTSTART = zcomun + "STD_DT_START";                                                       |
| 88  | expresión de cálculo/transformación: String zSTDDTEND = zcomun + "STD_DT_END";                                                           |
| 89  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 91  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 92  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[FIRST]";                                                                 |
| 93  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                       |
| 94  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 96  | expresión de cálculo/transformación: String zSTDIDMARITALSTAT2 = zcomun2 + "STD_ID_MARITAL_STAT";                                        |
| 97  | expresión de cálculo/transformación: String zSTDNMARITALSTAT = zcomun2 + "STD_N_MARITAL_STAT";                                           |
| 99  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 105 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 106 | expresión de cálculo/transformación: String zmove3 = znodo3 + "[FIRST]";                                                                 |
| 248 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 3   | /css/estilo_sse.css                                             |
| 4   | /calendario/jquery-ui.css                                       |
| 5   | /calendario/jquery-1.12.4.js                                    |
| 6   | /calendario/jquery-ui.js                                        |
| 158 | /iconos/estado_civil_71x100.gif                                 |
| 163 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 178 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 178 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 192 | javascript:void comprobar();                                    |
| 192 | /iconos/icono_enviar_ess_36_36.gif                              |
| 229 | javascript:anadido(                                             |
| 229 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 269 | javascript:pendientes(                                          |
| 269 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 48  | sse_generico/generico_actualizar.jsp                            |
| 57  | sse_generico/generico_actualizar.jsp                            |
| 74  | sse_g1/ssco_g1_p1_mod5.jsp                                      |

## Versión 3: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/ssco_g1_p1_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 15  | estado          | getParameter(request,"estado")   |
| 16  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | -------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 15  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 16  | zinicios | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 35  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                    |
| --- | ----------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}         |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";} |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | ../../sse_g1/sse_g1_trans.jsp                      |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 30  | ../ssco_g1_p1_mod5.jsp                             |
| 31  | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 33  | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                  |
| --- | -------------------------------------------------- |
| 11  | /libreria/funciones_sse.js                         |
| 12  | /libreria/clase_val_entradas.js                    |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 9   | ../../sse_g1/sse_g1_trans.jsp                      |
| 21  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 22  | ../../sse_generico/espanol/generico_links.jsp      |
| 30  | ../ssco_g1_p1_mod5.jsp                             |
| 31  | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 33  | ../../sse_generico/espanol/generico_disclaimer.jsp |

## Versión 4: BASE compartida

Fuente de los localizadores `L`: [sse_g1/ssco_g1_p1_mod5.jsp](../../../../clon_portal/portal/sse_g1/ssco_g1_p1_mod5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                     |
| --- | ---------------------------------------------------------------------------- |
| 122 | [valor dinámico] [valor dinámico]                                            |
| 139 | * " maxlength="10" size="10" tabindex="[valor dinámico]" /&gt; "&gt; " /&gt; |
| 140 | * "value=" "&gt;                                                             |
| 176 | ');"&gt;                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                       |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 121 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; title=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/estado_civil_71x100.gif; width=100; height=100                                                                          |
| 125 | a       | class=enlacefuncional; title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                    |
| 131 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=get; name=NombreFormulario; id=NombreFormulario; onsubmit=javascript:return control_s();                                         |
| 133 | input   | type=hidden; id=TAG; name=TAG; value=SSE_HT_MAR_STAT                                                                                                                                                            |
| 134 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                   |
| 135 | input   | type=hidden; id=NOD; name=NOD; value=SSE_HT_MAR_STAT                                                                                                                                                            |
| 137 | a       | title=JSP_EXPR_sse_g1Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                           |
| 137 | img     | alt=JSP_EXPR_sse_g1Ess.getProperty(; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                 |
| 139 | input   | class=fuenteformulario; type=text; name=STD_DT_START; id=STD_DT_START; title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDDTSTART%&gt;; htmlsafe=true                                                           |
| 139 | a       | href=javascript:m4calendario(m4objeto('STD_DT_START','NombreFormulario')); title=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDDTSTART%&gt;; htmlsafe=true                                                       |
| 139 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=JSP_EXPR_Tran.getProperty(; m4name=&lt;%=zSTDDTSTART%&gt;; htmlsafe=true                                                                       |
| 141 | select  | tabindex=&lt;%=zTab++%&gt;; id=STD_ID_MARITAL_STAT; class=fuenteformulario200; name=STD_ID_MARITAL_STAT; title=                                                                                                 |
| 142 | option  | value=                                                                                                                                                                                                          |
| 144 | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                                                                                                                                                |
| 149 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:void comprobar();; tabindex=&lt;%=zTab++%&gt;                                                                                                                 |
| 149 | img     | alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                       |
| 176 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:pendientes('&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;; jsafe=true                                                                          |
| 176 | img     | class=tablamenuright; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                              |
| --- | ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 51  | zsubsesion         | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 52  | zmeta4object       | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 53  | znodo              | "SSE_HT_MAR_STAT"                                                              | SSE_HT_MAR_STAT                                                                                                                          |
| 54  | znodo2             | "M4T_LU_MAR_STAT"                                                              | M4T_LU_MAR_STAT                                                                                                                          |
| 55  | ztipocarga         | "SSE"                                                                          | SSE                                                                                                                                      |
| 57  | zventanas          | "10"                                                                           | 10                                                                                                                                       |
| 58  | zvuelta            | 5                                                                              | 5                                                                                                                                        |
| 59  | zdireccion         | "sse_g1/ssco_g1_p1_mod5.jsp"                                                   | sse_g1/ssco_g1_p1_mod5.jsp                                                                                                               |
| 60  | zestado            | "11"                                                                           | 11                                                                                                                                       |
| 62  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                     |
| 64  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                    |
| 65  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                       |
| 67  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 68  | zmove              | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 69  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 71  | zSTDIDMARITALSTAT  | zcomun + "STD_ID_MARITAL_STAT"                                                 | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}                                  |
| 72  | zSTDDTSTART        | zcomun + "STD_DT_START"                                                        | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}                                         |
| 73  | zSTDDTEND          | zcomun + "STD_DT_END"                                                          | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}                                           |
| 74  | zNACCION           | zcomun + "N_ACCION"                                                            | SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                             |
| 76  | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[*]"}                                                                                               |
| 77  | zmove2             | znodo2 + "[FIRST]"                                                             | M4T_LU_MAR_STAT{"[FIRST]"}                                                                                                               |
| 78  | zlectura2          | zsubsesion + "!" + znodo2                                                      | SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT                                                                                                      |
| 79  | zcomun2            | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 81  | zSTDIDMARITALSTAT2 | zcomun2 + "STD_ID_MARITAL_STAT"                                                | M4T_LU_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}                                  |
| 82  | zSTDNMARITALSTAT   | zcomun2 + "STD_N_MARITAL_STAT"                                                 | M4T_LU_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_N_MARITAL_STAT"}                                   |
| 84  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA"}                                                                                          |
| 86  | zTab               | 1                                                                              | 1                                                                                                                                        |
| 105 | zcount             | 0                                                                              | 0                                                                                                                                        |
| 106 | zcounti            | 0                                                                              | 0                                                                                                                                        |
| 107 | zcount2            | 0                                                                              | 0                                                                                                                                        |
| 114 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                  |
| 115 | zcountv2           | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                                  |
| 155 | zregistroinicials  | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                         |
| 156 | zregistrofinals    | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                          |
| 157 | zposicions         | "0"                                                                            | 0                                                                                                                                        |
| 158 | zcontrol           | 0                                                                              | 0                                                                                                                                        |
| 159 | zposicion          | 0                                                                              | 0                                                                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                           |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 89  | m4:startpage | m4task=SSE_HT_MAR_STAT                                                                                                                                       |
| 90  | m4:beginjob  |                                                                                                                                                              |
| 91  | m4:datadef   | m4o=SSE_HT_MAR_STAT; m4name=SSE_HT_MAR_STAT                                                                                                                  |
| 98  | m4:exec      | m4method=CARGA:{}SSE_HT_MAR_STAT{"!SSE_PRINCIPAL.CARGA"}                                                                                                     |
| 98  | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                   |
| 99  | m4:outputdef | m4alias=SSE_HT_MAR_STAT                                                                                                                                      |
| 99  | m4:param     | name=m4name0; value=SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 100 | m4:outputdef | m4alias=M4T_LU_MAR_STAT                                                                                                                                      |
| 100 | m4:param     | name=m4name0; value=SSE_HT_MAR_STAT{"!"}M4T_LU_MAR_STAT{"[*]"}                                                                                               |
| 101 | m4:endjob    |                                                                                                                                                              |
| 102 | m4:move      |                                                                                                                                                              |
| 102 | m4:param     | name=SSE_HT_MAR_STAT; value=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                |
| 103 | m4:move      |                                                                                                                                                              |
| 103 | m4:param     | name=SSE_HT_MAR_STAT; value=M4T_LU_MAR_STAT{"[FIRST]"}                                                                                                       |
| 139 | m4:label     | m4name=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true                                       |
| 140 | m4:label     | m4name=SSE_HT_MAR_STAT{":"}SSE_HT_MAR_STAT{"!"}SSE_HT_MAR_STAT{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_MARITAL_STAT"}; htmlsafe=true                                |
| 143 | m4:dataloop  | outputdef=M4T_LU_MAR_STAT                                                                                                                                    |
| 144 | m4:item      | item=STD_ID_MARITAL_STAT; htmlsafe=true; outputdef=M4T_LU_MAR_STAT                                                                                           |
| 144 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=M4T_LU_MAR_STAT                                                                                            |
| 164 | m4:label     | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                            |
| 165 | m4:label     | item=STD_DT_START; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                                  |
| 167 | m4:dataloop  | outputdef=SSE_HT_MAR_STAT                                                                                                                                    |
| 168 | m4:current   | m4varname=current; outputdef=SSE_HT_MAR_STAT                                                                                                                 |
| 173 | m4:item      | item=N_ACCION; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                                      |
| 174 | m4:item      | item=STD_N_MARITAL_STAT; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                            |
| 175 | m4:item      | item=STD_DT_START; htmlsafe=true; outputdef=SSE_HT_MAR_STAT                                                                                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 94  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 110 | getCount         | znodo,zsubsesion,znodo                    |
| 111 | getCountInClient | znodo,zsubsesion,znodo                    |
| 112 | getCount         | znodo2,zsubsesion,znodo2                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 4   | comprobar  |            |
| 9   | control_s  |            |
| 43  | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | if (vccc){m4submit("NombreFormulario");}                                                                                                 |
| 16  | dtstartok = m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");                                                         |
| 18  | if (dtstart == null &#124;&#124; dtstart == "")                                                                                          |
| 23  | if ((dtstart != null &amp;&amp; dtstart !="") &amp;&amp; (dtstartok == ""))                                                              |
| 28  | if (estadoCivil == null &#124;&#124; estadoCivil == "")                                                                                  |
| 33  | if (error == 1)                                                                                                                          |
| 35  | alert(texto);                                                                                                                            |
| 38  | else                                                                                                                                     |
| 154 | if (zcount &gt; 0) {                                                                                                                     |
| 171 | if (zcontrol==0){zposicions="";}else{zposicions="2";}%&gt;                                                                               |
| 13  | expresión de cálculo/transformación: var texto = m4getmessage("_sl_co_ess_ec_0") + "\n";                                                 |
| 20  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_1");                                            |
| 25  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_2");                                            |
| 30  | expresión de cálculo/transformación: texto = texto + "\n " + m4getmessage("_sl_co_ess_ec_3");                                            |
| 63  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 65  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 67  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 68  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 69  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 71  | expresión de cálculo/transformación: String zSTDIDMARITALSTAT = zcomun + "STD_ID_MARITAL_STAT";                                          |
| 72  | expresión de cálculo/transformación: String zSTDDTSTART = zcomun + "STD_DT_START";                                                       |
| 73  | expresión de cálculo/transformación: String zSTDDTEND = zcomun + "STD_DT_END";                                                           |
| 74  | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 76  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 77  | expresión de cálculo/transformación: String zmove2 = znodo2 + "[FIRST]";                                                                 |
| 78  | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                       |
| 79  | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 81  | expresión de cálculo/transformación: String zSTDIDMARITALSTAT2 = zcomun2 + "STD_ID_MARITAL_STAT";                                        |
| 82  | expresión de cálculo/transformación: String zSTDNMARITALSTAT = zcomun2 + "STD_N_MARITAL_STAT";                                           |
| 84  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 156 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 1   | /css/estilo_sse.css                                             |
| 121 | /iconos/estado_civil_71x100.gif                                 |
| 125 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 131 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 137 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 137 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 139 | javascript:m4calendario(m4objeto(                               |
| 139 | /iconos/icono_calendario_14_18.gif                              |
| 149 | javascript:void comprobar();                                    |
| 149 | /iconos/icono_enviar_ess_36_36.gif                              |
| 176 | javascript:pendientes(                                          |
| 176 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 47  | sse_generico/generico_actualizar.jsp                            |
| 59  | sse_g1/ssco_g1_p1_mod5.jsp                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| COLL   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| COLL   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| COLL   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| COLL   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| COLL   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 5   | /calendario/jquery-1.12.4.js                                    | contextual | &#96;calendario/jquery-1.12.4.js&#96;                                                                                                                                                              |
| COLL   | 6   | /calendario/jquery-ui.js                                        | contextual | &#96;calendario/jquery-ui.js&#96;                                                                                                                                                                  |
| COLL   | 163 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 178 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 192 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 229 | javascript:anadido(                                             | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 269 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 48  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 57  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 74  | sse_g1/ssco_g1_p1_mod5.jsp                                      | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md); [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                 |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| CYC    | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| CYC    | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| CYC    | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| CYC    | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| CYC    | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| CYC    | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 5   | /calendario/jquery-1.12.4.js                                    | contextual | &#96;calendario/jquery-1.12.4.js&#96;                                                                                                                                                              |
| CYC    | 6   | /calendario/jquery-ui.js                                        | contextual | &#96;calendario/jquery-ui.js&#96;                                                                                                                                                                  |
| CYC    | 163 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 178 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 192 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 229 | javascript:anadido(                                             | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 269 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 48  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 57  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 74  | sse_g1/ssco_g1_p1_mod5.jsp                                      | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md); [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                 |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| IBER   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| IBER   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| IBER   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| IBER   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| IBER   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 5   | /calendario/jquery-1.12.4.js                                    | contextual | &#96;calendario/jquery-1.12.4.js&#96;                                                                                                                                                              |
| IBER   | 6   | /calendario/jquery-ui.js                                        | contextual | &#96;calendario/jquery-ui.js&#96;                                                                                                                                                                  |
| IBER   | 163 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 169 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 178 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 192 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 229 | javascript:anadido(                                             | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 269 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 48  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 57  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 74  | sse_g1/ssco_g1_p1_mod5.jsp                                      | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md); [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                 |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| BASE   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                      | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)                                                                                          |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                    | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)                                                                                      |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 9   | ../../sse_g1/sse_g1_trans.jsp                                   | física     | [sse_g1/sse_g1_trans.jsp](sse_g1--sse_g1_trans.md)                                                                                                                                                 |
| BASE   | 21  | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 22  | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 30  | ../ssco_g1_p1_mod5.jsp                                          | física     | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |
| BASE   | 31  | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 33  | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 125 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 131 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 137 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 139 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 149 | javascript:void comprobar();                                    | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 176 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 47  | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 59  | sse_g1/ssco_g1_p1_mod5.jsp                                      | contextual | [sse_g1/ssco_g1_p1_mod5.jsp](sse_g1--ssco_g1_p1_mod5.md)                                                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/ssco_g1_p1_mod5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
