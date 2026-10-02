# shco_gen_currency

Identificador: `shco_g0/shco_gen_currency.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                      | Texto           | Ámbito | Diccionario                                                                                 |
| -------------------------- | --------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Close               | Cerrar          | COLL   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close               | Cerrar          | CYC    | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close               | Cerrar          | IBER   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close               | Cerrar          | BASE   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close               | Cerrar          | BASE   | [translations/shco_g0_es.properties:L22](../../referencias/literales/shco_g0_es.md)         |
| Button.Close               | Cerrar          | BASE   | [translations/ssco_etask_es.properties:L37](../../referencias/literales/ssco_etask_es.md)   |
| Button.Ok                  | Aceptar         | COLL   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok                  | Aceptar         | CYC    | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok                  | Aceptar         | IBER   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok                  | Aceptar         | BASE   | [translations/ess_mss_gen_es.properties:L72](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Ok                  | Aceptar         | BASE   | [translations/shco_g0_es.properties:L28](../../referencias/literales/shco_g0_es.md)         |
| Literal.Currency           | Moneda          | BASE   | [translations/shco_g0_es.properties:L75](../../referencias/literales/shco_g0_es.md)         |
| Literal.CurrencyChangeDate | Fecha de cambio | BASE   | [translations/shco_g0_es.properties:L76](../../referencias/literales/shco_g0_es.md)         |
| Literal.CurrencyChangeType | Tipo de cambio  | BASE   | [translations/shco_g0_es.properties:L77](../../referencias/literales/shco_g0_es.md)         |
| Literal.CurrencyQuatity    | Cantidad        | BASE   | [translations/shco_g0_es.properties:L78](../../referencias/literales/shco_g0_es.md)         |
| Literal.CurrencyTitle      | Monedas         | BASE   | [translations/shco_g0_es.properties:L79](../../referencias/literales/shco_g0_es.md)         |
| Literal.CurrencyValue      | Valor           | BASE   | [translations/shco_g0_es.properties:L80](../../referencias/literales/shco_g0_es.md)         |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_currency.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_currency.jsp) | `39b78f48ae99bcb50d70a763835ed8111e66cd3635929be82f3e36b338486eec` |    162 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_currency.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_currency.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 129 | * [valor dinámico]       |
| 132 | * [valor dinámico]       |
| 135 | * [valor dinámico]       |
| 139 | * [valor dinámico]       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 76  | select  | class=selectform75; id= + zsidselect + ; tabindex= + zstabindex + ; name= + zsidselect +                                                         |
| 93  | option  | id= + zsid + ; value= + zsvalue +                                                                                                                |
| 122 | form    | action=; method=post; name=NombreFormulario; id=NombreFormulario                                                                                 |
| 130 | input   | tabindex=1; class=form; type=text; id=cantidad; name=cantidad; size=32; maxlength=28; title=JSP_EXPR_Tran_shco_g0.getProperty(; value=           |
| 141 | input   | tabindex=6; class=form; type=text; id=fechadecambio; name=fechadecambio; size=15; maxlength=12; title=JSP_EXPR_Tran_shco_g0.getProperty(; value= |
| 142 | a       | tabindex=7; href=javascript:m4calendar(m4objeto('NombreFormulario','fechadecambio'))                                                             |
| 143 | img     | file=../files_gif/ic_cal.jsp                                                                                                                     |
| 150 | a       | title=JSP_EXPR_Tran_shco_g0.getProperty(; href=javascript:m4match(); tabindex=8                                                                  |
| 150 | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_ace.jsp                                                                             |
| 151 | a       | title=JSP_EXPR_Tran_shco_g0.getProperty(; href=javascript:window.close();                                                                        |
| 151 | img     | alt=JSP_EXPR_Tran_shco_g0.getProperty(; file=../files_gif/ic_cer.jsp                                                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal         |
| --- | --------------- | ---------------------- |
| 17  | IDCUR           | getParameter("IDCUR")  |
| 18  | CANT            | getParameter("CANT")   |
| 19  | EXTYPE          | getParameter("EXTYPE") |
| 20  | EXDATE          | getParameter("EXDATE") |

| L   | Variable      | Expresión fuente               | Resolución estática parcial    |
| --- | ------------- | ------------------------------ | ------------------------------ |
| 17  | zsselidcurr   | request.getParameter("IDCUR")  | request.getParameter("IDCUR")  |
| 18  | zsselcant     | request.getParameter("CANT")   | request.getParameter("CANT")   |
| 19  | zsselidextype | request.getParameter("EXTYPE") | request.getParameter("EXTYPE") |
| 20  | zsselexdate   | request.getParameter("EXDATE") | request.getParameter("EXDATE") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales |
| --- | --------- | -------------------- |
| 58  | exec      | zsselectinfo         |
| 77  | exec      | zslistinfo           |
| 84  | exec      | zstupla              |
| 95  | exec      | zssResto             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos                                     |
| --- | -------------------- | ---------------------------------------------- |
| 27  | establishinputvalues |                                                |
| 47  | writeselect          | zsidselect,zstabindex                          |
| 72  | createselect         | zslistinfo,zsidselect,zstabindex,zotuplaregexp |
| 101 | m4match              |                                                |
| 108 | m4return             |                                                |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30  | if (sselexdate == ""){                                                                                                                                                                                               |
| 32  | }else{                                                                                                                                                                                                               |
| 63  | if (zsidselect == "idmoneda"){                                                                                                                                                                                       |
| 66  | else{                                                                                                                                                                                                                |
| 86  | if (zarrtuplainfo != null){                                                                                                                                                                                          |
| 89  | if (zarrtuplainfo.length &gt; 3){                                                                                                                                                                                    |
| 92  | else{zsvalue = zsid;}                                                                                                                                                                                                |
| 105 | if (verr == 1){m4return();}                                                                                                                                                                                          |
| 110 | if (oobject.tagName == "INPUT"){                                                                                                                                                                                     |
| 112 | }else{                                                                                                                                                                                                               |
| 113 | if (oobject.childNodes.length != 0) oobject.childNodes[0].nodeValue = m4select('NombreFormulario','idmoneda','text');                                                                                                |
| 43  | expresión de cálculo/transformación: var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";                                                                                                                            |
| 44  | expresión de cálculo/transformación: var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",&#124;,;" + "]" ; //Contiene la barra vertical y el punto y com                                                   |
| 45  | expresión de cálculo/transformación: var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]";                                                                                                              |
| 51  | expresión de cálculo/transformación: var zoalllistregexp = new RegExp("(" + sAlfNumRegExpPlusBarraSemicolon +"_)" + "[\$][\$](" + sAlfNumRegExpPlusBarraSemicolon +"_)");                                            |
| 52  | expresión de cálculo/transformación: var zocurrencytuplaregexp = new RegExp("(" + sAlfanumRegExpString + "_)[;][;](" + sAlfanumRegExpString +"_)[;][;](" + sAlfanumRegExpString +"*)");                              |
| 53  | expresión de cálculo/transformación: var zotipocambioregexp = new RegExp("(" + sAlfanumRegExpString + "_)[;][;](" + sAlfanumRegExpString +"_)"); //IdTipoCambio;;NombreTipoCambio                                    |
| 74  | expresión de cálculo/transformación: var zolistregexp = new RegExp("(" +sAlfNumRegExpPlusSemicolon + "_)[&#124;][&#124;](" +sAlfNumRegExpPlusBarraSemicolon+"_)");                                                   |
| 76  | expresión de cálculo/transformación: zsselect = "&lt;SELECT class='selectform75' id= " + zsidselect + " tabIndex = " + zstabindex + " name= " + zsidselect + " &gt; ";                                               |
| 93  | expresión de cálculo/transformación: zsselect = zsselect + "&lt;OPTION id= " + zsid + " value= " + zsvalue + "&gt;" + zsname + "&lt;/OPTION&gt; ";                                                                   |
| 98  | expresión de cálculo/transformación: zsselect = zsselect + "&lt;/SELECT&gt;";                                                                                                                                        |
| 103 | expresión de cálculo/transformación: sfunciones = sfunciones + "*m4valinput('_date_oblig','NombreFormulario','fechadecambio',0,'&lt;%=Tran_shco_g0.getProperty("Literal.CurrencyChangeDate")%&gt;',sformatofechas)"; |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 9   | ../shco_g0/shco_gen_taglib.jsp    |
| 13  | ../shco_g0/shco_gen_bag.jsp       |
| 13  | ../shco_g0/shco_gen_css.jsp       |
| 13  | ../shco_g0/shco_gen_css.jsp       |
| 13  | ../shco_g0/shco_gen_normal_js.jsp |
| 23  | ../shco_g0/shco_gen_m4val_js.jsp  |
| 143 | ../files_gif/ic_cal.jsp           |
| 150 | ../files_gif/ic_ace.jsp           |
| 151 | ../files_gif/ic_cer.jsp           |

| L   | Destino / recurso                 |
| --- | --------------------------------- |
| 142 | javascript:m4calendar(m4objeto(   |
| 150 | javascript:m4match()              |
| 151 | javascript:window.close();        |
| 9   | ../shco_g0/shco_gen_taglib.jsp    |
| 13  | ../shco_g0/shco_gen_bag.jsp       |
| 13  | ../shco_g0/shco_gen_css.jsp       |
| 13  | ../shco_g0/shco_gen_normal_js.jsp |
| 23  | ../shco_g0/shco_gen_m4val_js.jsp  |
| 143 | ../files_gif/ic_cal.jsp           |
| 150 | ../files_gif/ic_ace.jsp           |
| 151 | ../files_gif/ic_cer.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                        | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp    | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 13  | ../shco_g0/shco_gen_bag.jsp       | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp       | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)             |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp       | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)             |
| BASE   | 13  | ../shco_g0/shco_gen_normal_js.jsp | física     | [shco_g0/shco_gen_normal_js.jsp](shco_g0--shco_gen_normal_js.md) |
| BASE   | 23  | ../shco_g0/shco_gen_m4val_js.jsp  | física     | [shco_g0/shco_gen_m4val_js.jsp](shco_g0--shco_gen_m4val_js.md)   |
| BASE   | 143 | ../files_gif/ic_cal.jsp           | física     | [files_gif/ic_cal.jsp](files_gif--ic_cal.md)                     |
| BASE   | 150 | ../files_gif/ic_ace.jsp           | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                     |
| BASE   | 151 | ../files_gif/ic_cer.jsp           | física     | [files_gif/ic_cer.jsp](files_gif--ic_cer.md)                     |
| BASE   | 142 | javascript:m4calendar(m4objeto(   | dinámica   | P06                                                              |
| BASE   | 150 | javascript:m4match()              | dinámica   | P06                                                              |
| BASE   | 151 | javascript:window.close();        | dinámica   | P06                                                              |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp    | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)       |
| BASE   | 13  | ../shco_g0/shco_gen_bag.jsp       | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)             |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp       | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)             |
| BASE   | 13  | ../shco_g0/shco_gen_normal_js.jsp | física     | [shco_g0/shco_gen_normal_js.jsp](shco_g0--shco_gen_normal_js.md) |
| BASE   | 23  | ../shco_g0/shco_gen_m4val_js.jsp  | física     | [shco_g0/shco_gen_m4val_js.jsp](shco_g0--shco_gen_m4val_js.md)   |
| BASE   | 143 | ../files_gif/ic_cal.jsp           | física     | [files_gif/ic_cal.jsp](files_gif--ic_cal.md)                     |
| BASE   | 150 | ../files_gif/ic_ace.jsp           | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                     |
| BASE   | 151 | ../files_gif/ic_cer.jsp           | física     | [files_gif/ic_cer.jsp](files_gif--ic_cer.md)                     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_currency.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
