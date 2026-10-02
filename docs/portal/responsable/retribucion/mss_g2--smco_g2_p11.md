# smco_g2_p11

Identificador: `mss_g2/smco_g2_p11.jsp`. Perfil: **responsable**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto                                                                                                                                                            | Ámbito | Diccionario                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| Cab.smco_g2_p11   | Parámetros                                                                                                                                                       | BASE   | [translations/smco_g2_es.properties:L8](../../referencias/literales/smco_g2_es.md) |
| Desc.smco_g2_p11  | En esta pantalla puedes analizar el presupuesto de tu unidad organizativa comparando con el coste salarial de los empleados asignados a esa unidad organizativa. | BASE   | [translations/smco_g2_es.properties:L7](../../referencias/literales/smco_g2_es.md) |
| Title.smco_g2_p11 | Analiza el presupuesto salarial de tu unidad organizativa                                                                                                        | BASE   | [translations/smco_g2_es.properties:L6](../../referencias/literales/smco_g2_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g2/espanol/smco_g2_p11.jsp](../../../../clon_portal/portal/mss_g2/espanol/smco_g2_p11.jsp) | `e41242ec695ed35e57889e5dfcc0ada04da5adca64b667ba781297f9aebd42f2` |    115 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g2/espanol/smco_g2_p11.jsp](../../../../clon_portal/portal/mss_g2/espanol/smco_g2_p11.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                  |
| --- | --------------------------------------------------------- |
| 87  | *                                                         |
| 88  | "&gt; " [valor dinámico] /&gt;                            |
| 103 | " maxlength="10" size="10" /&gt; " /&gt;                  |
| 108 | " title=" " src="/iconos/icono_crear_mss_36_36.gif" /&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72  | img     | alt=JSP_EXPR_Transg2.getProperty(; title=JSP_EXPR_Transg2.getProperty(; src=/iconos/noname_banco_79_100.gif; width=100; height=100                                   |
| 80  | input   | type=hidden; id=SHCO_P_EXEC_PROCESS; name=SHCO_P_EXEC_PROCESS; value=&lt;%=sSHCO_P_EXEC_PROCESS%&gt;                                                                 |
| 89  | select  | tabindex=1; id=STD_ID_WORK_UNIT_PARAM; class=fuenteformulario; name=STD_ID_WORK_UNIT_PARAM; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt; |
| 90  | option  | value=                                                                                                                                                               |
| 94  | option  | value=&lt;%=sSCO_ID_WORK_UNIT_Encr%&gt;                                                                                                                              |
| 97  | input   | tabindex=2; type=checkbox; id=SCO_FLT_CK_WU_LVL1; name=SCO_FLT_CK_WU_LVL1; title= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                  |
| 98  | input   | type=hidden; id=SCO_FLT_CK_WU_LVL; name=SCO_FLT_CK_WU_LVL; value=                                                                                                    |
| 103 | input   | tabindex=3; class=fuenteformulario; value=; type=text; name=SCO_CUT_DATE; id=SCO_CUT_DATE; title=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;   |
| 103 | a       | tabindex=3; href=javascript:m4calendario(m4objeto('SCO_CUT_DATE','NombreFormulario'))                                                                                |
| 103 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt= &lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodoview%&gt;                                  |
| 108 | a       | href=javascript:val();; tabindex=4                                                                                                                                   |
| 108 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                              |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                              | Resolución estática parcial                                                   |
| --- | ---------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 4   | estado                 | "21"                                                                          | 21                                                                            |
| 5   | zredireccion           | "mss_g2/smco_g2_p11.jsp"                                                      | mss_g2/smco_g2_p11.jsp                                                        |
| 7   | zm4object              | "SSCO_OR_RP_BUDGET_SAL_WU"                                                    | SSCO_OR_RP_BUDGET_SAL_WU                                                      |
| 9   | znodoview              | "SSCO_OR_RP_BUDGET_SAL_WU"                                                    | SSCO_OR_RP_BUDGET_SAL_WU                                                      |
| 10  | znodoL                 | "SSCO_WORK_UNITS"                                                             | SSCO_WORK_UNITS                                                               |
| 11  | zSCO_FLT_CK_WU_LVL     | ""                                                                            |                                                                               |
| 12  | zxwu                   | ""                                                                            |                                                                               |
| 78  | sSHCO_P_EXEC_PROCESS   | "STD_ID_WORK_UNIT_PARAM"                                                      | STD_ID_WORK_UNIT_PARAM                                                        |
| 93  | sSCO_ID_WORK_UNIT_Encr | M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT) | M4PresentationUtilTaglib.secureEncrypt(request, "shco_rp", sSCO_ID_WORK_UNIT) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                           |
| --- | ------------ | -------------------------------------------------------------------------------------------- |
| 17  | m4:outputdef | m4alias=SSCO_WORK_UNITS; m4object=SSCO_OR_RP_BUDGET_SAL_WU; node=SSCO_WORK_UNITS; records=*  |
| 87  | m4:label     | item=STD_ID_WORK_UNIT_PARAM; htmlsafe=true; outputdef=SSCO_OR_RP_BUDGET_SAL_WU               |
| 91  | m4:dataloop  | outputdef=SSCO_WORK_UNITS                                                                    |
| 92  | m4:item      | m4varname=sSCO_ID_WORK_UNIT; item=SCO_ID_WORK_UNIT; htmlsafe=true; outputdef=SSCO_WORK_UNITS |
| 94  | m4:item      | item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=SSCO_WORK_UNITS                               |
| 97  | m4:label     | item=SCO_FLT_CK_WU_LVL; htmlsafe=true; outputdef=SSCO_OR_RP_BUDGET_SAL_WU                    |
| 102 | m4:label     | item=SCO_CUT_DATE; htmlsafe=true; outputdef=SSCO_OR_RP_BUDGET_SAL_WU                         |
| 108 | m4:label     | m4name=zSHCOLBEXEC; htmlsafe=true                                                            |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 22  | val     |            |
| 60  | Today   |            |

| L   | Condición / acción / mensaje literal                                              |
| --- | --------------------------------------------------------------------------------- |
| 15  | &lt;%if (zSCO_FLT_CK_WU_LVL.equals("1")){zxwu="checked=\"checked\"";}%&gt;        |
| 27  | if (dcut == null &#124;&#124; dcut == ""){                                        |
| 30  | }else{                                                                            |
| 31  | var dcutok = m4fechacomprobacion(m4objeto('SCO_CUT_DATE','NombreFormulario'),""); |
| 32  | if (dcutok == ""){                                                                |
| 38  | if (sworkunit == null &#124;&#124; sworkunit == ""){                              |
| 44  | if (sckwu.checked == true){                                                       |
| 46  | }else{                                                                            |
| 51  | if (error == 1){                                                                  |
| 52  | alert(texto);                                                                     |
| 54  | }else {                                                                           |
| 62  | if (dcutdate == null &#124;&#124; dcutdate ==""){                                 |

### Includes, navegación y dependencias

| L   | Include                                       |
| --- | --------------------------------------------- |
| 1   | ../../sse_generico/ssco_report_cab.jsp        |
| 2   | ../../mss_g2/smco_g2_trans.jsp                |
| 16  | ../../sse_generico/ssco_report_exec.jsp       |
| 18  | ../../sse_generico/ssco_report_exec2.jsp      |
| 19  | ../../sse_generico/espanol/generico_links.jsp |
| 20  | ../../sse_generico/ssco_report_error.jsp      |
| 77  | ../../sse_generico/ssco_report_form.jsp       |
| 113 | ../../sse_generico/ssco_report_end.jsp        |

| L   | Destino / recurso                             |
| --- | --------------------------------------------- |
| 72  | /iconos/noname_banco_79_100.gif               |
| 103 | javascript:m4calendario(m4objeto(             |
| 103 | /iconos/icono_calendario_14_18.gif            |
| 108 | javascript:val();                             |
| 108 | /iconos/icono_crear_mss_36_36.gif             |
| 1   | ../../sse_generico/ssco_report_cab.jsp        |
| 2   | ../../mss_g2/smco_g2_trans.jsp                |
| 5   | mss_g2/smco_g2_p11.jsp                        |
| 16  | ../../sse_generico/ssco_report_exec.jsp       |
| 18  | ../../sse_generico/ssco_report_exec2.jsp      |
| 19  | ../../sse_generico/espanol/generico_links.jsp |
| 20  | ../../sse_generico/ssco_report_error.jsp      |
| 77  | ../../sse_generico/ssco_report_form.jsp       |
| 113 | ../../sse_generico/ssco_report_end.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                    | Resolución | Ficha / candidato                                                                                     |
| ------ | --- | --------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/ssco_report_cab.jsp        | física     | [sse_generico/ssco_report_cab.jsp](../../transversal/navegacion/sse_generico--ssco_report_cab.md)     |
| BASE   | 2   | ../../mss_g2/smco_g2_trans.jsp                | física     | [mss_g2/smco_g2_trans.jsp](mss_g2--smco_g2_trans.md)                                                  |
| BASE   | 16  | ../../sse_generico/ssco_report_exec.jsp       | física     | [sse_generico/ssco_report_exec.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec.md)   |
| BASE   | 18  | ../../sse_generico/ssco_report_exec2.jsp      | física     | [sse_generico/ssco_report_exec2.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec2.md) |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 20  | ../../sse_generico/ssco_report_error.jsp      | física     | [sse_generico/ssco_report_error.jsp](../../transversal/navegacion/sse_generico--ssco_report_error.md) |
| BASE   | 77  | ../../sse_generico/ssco_report_form.jsp       | física     | [sse_generico/ssco_report_form.jsp](../../transversal/navegacion/sse_generico--ssco_report_form.md)   |
| BASE   | 113 | ../../sse_generico/ssco_report_end.jsp        | física     | [sse_generico/ssco_report_end.jsp](../../transversal/navegacion/sse_generico--ssco_report_end.md)     |
| BASE   | 103 | javascript:m4calendario(m4objeto(             | dinámica   | P06                                                                                                   |
| BASE   | 108 | javascript:val();                             | dinámica   | P06                                                                                                   |
| BASE   | 1   | ../../sse_generico/ssco_report_cab.jsp        | física     | [sse_generico/ssco_report_cab.jsp](../../transversal/navegacion/sse_generico--ssco_report_cab.md)     |
| BASE   | 2   | ../../mss_g2/smco_g2_trans.jsp                | física     | [mss_g2/smco_g2_trans.jsp](mss_g2--smco_g2_trans.md)                                                  |
| BASE   | 5   | mss_g2/smco_g2_p11.jsp                        | ausente    | P06                                                                                                   |
| BASE   | 16  | ../../sse_generico/ssco_report_exec.jsp       | física     | [sse_generico/ssco_report_exec.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec.md)   |
| BASE   | 18  | ../../sse_generico/ssco_report_exec2.jsp      | física     | [sse_generico/ssco_report_exec2.jsp](../../transversal/navegacion/sse_generico--ssco_report_exec2.md) |
| BASE   | 19  | ../../sse_generico/espanol/generico_links.jsp | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)       |
| BASE   | 20  | ../../sse_generico/ssco_report_error.jsp      | física     | [sse_generico/ssco_report_error.jsp](../../transversal/navegacion/sse_generico--ssco_report_error.md) |
| BASE   | 77  | ../../sse_generico/ssco_report_form.jsp       | física     | [sse_generico/ssco_report_form.jsp](../../transversal/navegacion/sse_generico--ssco_report_form.md)   |
| BASE   | 113 | ../../sse_generico/ssco_report_end.jsp        | física     | [sse_generico/ssco_report_end.jsp](../../transversal/navegacion/sse_generico--ssco_report_end.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g2/smco_g2_p11.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
