# smco_g3_p32

Identificador: `mss_g3/smco_g3_p32.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                     | Texto                                                                                                                                                                                                                                             | Ámbito | Diccionario                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| Cab.mss_g3_p32            | Parámetros                                                                                                                                                                                                                                        | BASE   | [translations/mss_g3_es.properties:L103](../../referencias/literales/mss_g3_es.md) |
| Desc.mss_g3_p32           | En esta página puedes generar un informe en el que podrás comparar el presupuesto de formación de tus unidades organizativas con el coste de la formación realizada, pendiente de realizar o solicitada de los empleados asignados a cada unidad. | BASE   | [translations/mss_g3_es.properties:L102](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p32_agrp     | Agrupación                                                                                                                                                                                                                                        | BASE   | [translations/mss_g3_es.properties:L108](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p32_agrp_c   | Curso                                                                                                                                                                                                                                             | BASE   | [translations/mss_g3_es.properties:L109](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p32_agrp_c2  | Agrupar por curso                                                                                                                                                                                                                                 | BASE   | [translations/mss_g3_es.properties:L110](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p32_agrp_pf  | Producto formativo                                                                                                                                                                                                                                | BASE   | [translations/mss_g3_es.properties:L111](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p32_agrp_pf2 | Agrupar por producto formativo                                                                                                                                                                                                                    | BASE   | [translations/mss_g3_es.properties:L112](../../referencias/literales/mss_g3_es.md) |
| Title.mss_g3_p32          | Analiza el presupuesto para formación de tu unidad organizativa                                                                                                                                                                                   | BASE   | [translations/mss_g3_es.properties:L101](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p32.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p32.jsp) | `176087dc4dbfa80c3c4fb77ea912618447633f7361528ab2289bcbdc48884e69` |    164 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p32.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p32.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 115 | "&gt; " [valor dinámico] /&gt;                            |
| 129 | *                                                         |
| 130 | " maxlength="10" size="10" /&gt; " /&gt;                  |
| 141 | " [valor dinámico] /&gt;                                  |
| 148 | [valor dinámico] [valor dinámico] [valor dinámico]        |
| 156 | " title=" " src="/iconos/icono_crear_mss_36_36.gif" /&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99  | img     | alt=JSP_EXPR_mss_g3.getProperty(; title=JSP_EXPR_mss_g3.getProperty(; src=/iconos/noname_puesto_144_100.gif; width=100; height=100                                                 |
| 107 | input   | type=hidden; id=SHCO_P_EXEC_PROCESS; name=SHCO_P_EXEC_PROCESS; value=&lt;%=sSHCO_P_EXEC_PROCESS%&gt;                                                                               |
| 115 | select  | tabindex=1; id=STD_P_ID_WORK_UNIT; class=fuenteformulario; name=STD_P_ID_WORK_UNIT; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                       |
| 116 | option  | value=                                                                                                                                                                             |
| 120 | option  | value=&lt;%=sSCO_ID_WORK_UNIT_Encr%&gt;                                                                                                                                            |
| 123 | input   | tabindex=2; type=checkbox; id=SCO_FLT_CK_WU_LVL1; name=SCO_FLT_CK_WU_LVL1; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                                |
| 124 | input   | type=hidden; id=SCO_FLT_CK_WU_LVL; name=SCO_FLT_CK_WU_LVL; value=                                                                                                                  |
| 130 | input   | tabindex=4; class=fuenteformulario; value=; type=text; name=SCO_P_CUT_DATE; id=SCO_P_CUT_DATE; title=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;             |
| 130 | a       | tabindex=4; href=javascript:m4calendario(m4objeto('SCO_P_CUT_DATE','NombreFormulario'))                                                                                            |
| 130 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                                                |
| 142 | input   | tabindex=3; type=checkbox; id=SCO_P_PRINT_SOLIC1; name=SCO_P_PRINT_SOLIC1; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                                |
| 143 | input   | type=hidden; id=SCO_P_PRINT_SOLIC; name=SCO_P_PRINT_SOLIC; value=                                                                                                                  |
| 148 | a       |                                                                                                                                                                                    |
| 149 | a       | class=fuentevalor                                                                                                                                                                  |
| 149 | input   | tabindex=5; id=SCO_AGRUP_CURSO1; name=SCO_AGRUP_CURSO1; class=fuentevalor1; type=radio; value=1; onclick=javascript:agrpcur(); checked=checked; title=JSP_EXPR_mss_g3.getProperty( |
| 150 | a       | class=fuentevalor                                                                                                                                                                  |
| 150 | input   | id=SCO_AGRUP_CURSO1; name=SCO_AGRUP_CURSO1; class=fuentevalor1; type=radio; value=0; onclick=javascript:agrppf(); title=JSP_EXPR_mss_g3.getProperty(                               |
| 151 | input   | type=hidden; id=SCO_AGRUP_CURSO; name=SCO_AGRUP_CURSO; value=1                                                                                                                     |
| 156 | a       | href=javascript:val();; tabindex=5                                                                                                                                                 |
| 156 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                            |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ---------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 4   | estado                 | "21"                                                                          | 21                                                                            |
| 5   | zredireccion           | "mss_g3/smco_g3_p32.jsp"                                                      | mss_g3/smco_g3_p32.jsp                                                        |
| 7   | zm4object              | "SSCO_RP_TRAINC_WU_BUDG"                                                      | SSCO_RP_TRAINC_WU_BUDG                                                        |
| 9   | znodoview              | "SSCO_RP_TRAINC_WU_BUDG"                                                      | SSCO_RP_TRAINC_WU_BUDG                                                        |
| 10  | znodoL                 | "SSCO_WORK_UNITS"                                                             | SSCO_WORK_UNITS                                                               |
| 12  | zSCO_FLT_CK_WU_LVL     | ""                                                                            |                                                                               |
| 13  | zxwu                   | ""                                                                            |                                                                               |
| 14  | zSCO_P_PRINT_SOLIC     | "1"                                                                           | 1                                                                             |
| 15  | zxps                   | ""                                                                            |                                                                               |
| 105 | sSHCO_P_EXEC_PROCESS   | "STD_P_ID_WORK_UNIT"                                                          | STD_P_ID_WORK_UNIT                                                            |
| 119 | sSCO_ID_WORK_UNIT_Encr | M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT) | M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                           |
| --- | ------------ | -------------------------------------------------------------------------------------------- |
| 25  | m4:outputdef | m4alias=SSCO_WORK_UNITS; m4object=SSCO_RP_TRAINC_WU_BUDG; node=SSCO_WORK_UNITS; records=*    |
| 114 | m4:label     | item=STD_P_ID_WORK_UNIT; htmlsafe=true; outputdef=SSCO_RP_TRAINC_WU_BUDG                     |
| 117 | m4:dataloop  | outputdef=SSCO_WORK_UNITS                                                                    |
| 118 | m4:item      | m4varname=sSCO_ID_WORK_UNIT; item=SCO_ID_WORK_UNIT; htmlsafe=true; outputdef=SSCO_WORK_UNITS |
| 120 | m4:item      | item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=SSCO_WORK_UNITS                               |
| 123 | m4:label     | item=SCO_FLT_CK_WU_LVL; htmlsafe=true; outputdef=SSCO_RP_TRAINC_WU_BUDG                      |
| 129 | m4:label     | item=SCO_P_CUT_DATE; htmlsafe=true; outputdef=SSCO_RP_TRAINC_WU_BUDG                         |
| 142 | m4:label     | item=SCO_P_PRINT_SOLIC; htmlsafe=true; outputdef=SSCO_RP_TRAINC_WU_BUDG                      |
| 156 | m4:label     | m4name=zSHCOLBEXEC; htmlsafe=true                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 32  | val     |            |
| 74  | agrpcur |            |
| 81  | agrppf  |            |
| 86  | Today   |            |

| L   | Condición / acción / mensaje literal                                                               |
| --- | -------------------------------------------------------------------------------------------------- |
| 20  | &lt;%if (zSCO_P_PRINT_SOLIC.equals("1")){zxps="checked=\"checked\"";}%&gt;                         |
| 21  | &lt;%if (zSCO_FLT_CK_WU_LVL.equals("1")){zxwu="checked=\"checked\"";}%&gt;                         |
| 37  | if (dcut == null &#124;&#124; dcut == ""){                                                         |
| 40  | }else{                                                                                             |
| 41  | var dcutok = m4fechacomprobacion(m4objeto('SCO_P_CUT_DATE','NombreFormulario'),"");                |
| 42  | if (dcutok == ""){                                                                                 |
| 50  | if (sckwu.checked == true){                                                                        |
| 52  | }else{                                                                                             |
| 58  | if (sckps.checked == true){                                                                        |
| 60  | }else{                                                                                             |
| 65  | if (error == 1){                                                                                   |
| 66  | alert(texto);                                                                                      |
| 68  | }else {                                                                                            |
| 88  | if (dcutdate == null &#124;&#124; dcutdate ==""){                                                  |
| 38  | expresión de cálculo/transformación: texto = texto + "\n" + m4getmessage("_sl_co_payment_data_2"); |

### Includes, navegación y dependencias

| L   | Include                                       |
| --- | --------------------------------------------- |
| 1   | ../../sse_generico/ssco_report_cab.jsp        |
| 2   | ../../mss_g3/mss_g3_trans.jsp                 |
| 23  | ../../sse_generico/ssco_report_exec.jsp       |
| 27  | ../../sse_generico/ssco_report_exec2.jsp      |
| 28  | ../../sse_generico/espanol/generico_links.jsp |
| 29  | ../../sse_generico/ssco_report_error.jsp      |
| 104 | ../../sse_generico/ssco_report_form.jsp       |
| 163 | ../../sse_generico/ssco_report_end.jsp        |

| L   | Destino / recurso                             |
| --- | --------------------------------------------- |
| 99  | /iconos/noname_puesto_144_100.gif             |
| 130 | javascript:m4calendario(m4objeto(             |
| 130 | /iconos/icono_calendario_14_18.gif            |
| 156 | javascript:val();                             |
| 156 | /iconos/icono_crear_mss_36_36.gif             |
| 1   | ../../sse_generico/ssco_report_cab.jsp        |
| 2   | ../../mss_g3/mss_g3_trans.jsp                 |
| 5   | mss_g3/smco_g3_p32.jsp                        |
| 23  | ../../sse_generico/ssco_report_exec.jsp       |
| 27  | ../../sse_generico/ssco_report_exec2.jsp      |
| 28  | ../../sse_generico/espanol/generico_links.jsp |
| 29  | ../../sse_generico/ssco_report_error.jsp      |
| 104 | ../../sse_generico/ssco_report_form.jsp       |
| 163 | ../../sse_generico/ssco_report_end.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                    | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | --------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/ssco_report_cab.jsp        | física     | [sse_generico/ssco_report_cab.jsp](../../transversal/navegacion/sse_generico--ssco_report_cab.md)     |
| BASE   | 2   | ../../mss_g3/mss_g3_trans.jsp                 | física     | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                    |
| BASE   | 23  | ../../sse_generico/ssco_report_exec.jsp       | física     | [sse_generico/ssco_report_exec.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec.md)   |
| BASE   | 27  | ../../sse_generico/ssco_report_exec2.jsp      | física     | [sse_generico/ssco_report_exec2.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec2.md) |
| BASE   | 28  | ../../sse_generico/espanol/generico_links.jsp | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 29  | ../../sse_generico/ssco_report_error.jsp      | física     | [sse_generico/ssco_report_error.jsp](../../transversal/navegacion/sse_generico--ssco_report_error.md) |
| BASE   | 104 | ../../sse_generico/ssco_report_form.jsp       | física     | [sse_generico/ssco_report_form.jsp](../../transversal/navegacion/sse_generico--ssco_report_form.md)   |
| BASE   | 163 | ../../sse_generico/ssco_report_end.jsp        | física     | [sse_generico/ssco_report_end.jsp](../../transversal/navegacion/sse_generico--ssco_report_end.md)     |
| BASE   | 130 | javascript:m4calendario(m4objeto(             | dinámica   | P06                                                                                                   |
| BASE   | 156 | javascript:val();                             | dinámica   | P06                                                                                                   |
| BASE   | 1   | ../../sse_generico/ssco_report_cab.jsp        | física     | [sse_generico/ssco_report_cab.jsp](../../transversal/navegacion/sse_generico--ssco_report_cab.md)     |
| BASE   | 2   | ../../mss_g3/mss_g3_trans.jsp                 | física     | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                                    |
| BASE   | 5   | mss_g3/smco_g3_p32.jsp                        | ausente    | P06                                                                                                   |
| BASE   | 23  | ../../sse_generico/ssco_report_exec.jsp       | física     | [sse_generico/ssco_report_exec.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec.md)   |
| BASE   | 27  | ../../sse_generico/ssco_report_exec2.jsp      | física     | [sse_generico/ssco_report_exec2.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec2.md) |
| BASE   | 28  | ../../sse_generico/espanol/generico_links.jsp | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 29  | ../../sse_generico/ssco_report_error.jsp      | física     | [sse_generico/ssco_report_error.jsp](../../transversal/navegacion/sse_generico--ssco_report_error.md) |
| BASE   | 104 | ../../sse_generico/ssco_report_form.jsp       | física     | [sse_generico/ssco_report_form.jsp](../../transversal/navegacion/sse_generico--ssco_report_form.md)   |
| BASE   | 163 | ../../sse_generico/ssco_report_end.jsp        | física     | [sse_generico/ssco_report_end.jsp](../../transversal/navegacion/sse_generico--ssco_report_end.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p32.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
