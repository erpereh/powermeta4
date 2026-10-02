# Titulo

Identificador: `sse_generico/generico_validaciones.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_validaciones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_validaciones.jsp) | `71e00a666878695b7ca6bb4d6416ee30304c480381c542298cf1ea6589bf7d78` |    311 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_validaciones.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_validaciones.jsp)   | `71e00a666878695b7ca6bb4d6416ee30304c480381c542298cf1ea6589bf7d78` |    311 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_validaciones.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_validaciones.jsp) | `71e00a666878695b7ca6bb4d6416ee30304c480381c542298cf1ea6589bf7d78` |    311 |
| BASE / español    | [sse_generico/espanol/generico_validaciones.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_validaciones.jsp)                             | `71e00a666878695b7ca6bb4d6416ee30304c480381c542298cf1ea6589bf7d78` |    311 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_validaciones.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_validaciones.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 28  | Titulo                                      |
| 194 | Titulo                                      |
| 209 | Descripcion funcional de la pagina. Opcion1 |
| 234 | uno dos tres cuatro cinco                   |
| 246 | 4                                           |
| 249 | 32                                          |
| 252 | 1                                           |
| 255 | hola caracola!                              |
| 279 | hola                                        |
| 282 | hola1                                       |
| 285 | hola2                                       |
| 290 | hola3                                       |
| 293 | hola4                                       |
| 296 | hola5                                       |
| 299 | hola6                                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                      |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 199 | a       | href=; onclick=history.back();                                                                                                                 |
| 200 | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover=m4sombra(this); onmouseout=m4oscuridad(this)                 |
| 207 | img     | alt=Nombre; src=/iconos/noname_listado_puestos_110_125.gif; width=110; height=125; onmouseover=m4luznoname(this); onmouseout=m4oscuridad(this) |
| 216 | a       | style=CURSOR: hand; href=                                                                                                                      |
| 221 | form    | id=miform; name=miform; action=                                                                                                                |
| 222 | input   | type=text; id=entrada1; size=20; value=                                                                                                        |
| 223 | input   | type=text; id=entrada2; value=&lt;%=ano%&gt;; size=20                                                                                          |
| 224 | input   | type=text; id=entrada3; value=&lt;%=mes%&gt;; size=20                                                                                          |
| 225 | input   | type=button; id=probar1; value=validar; size=20; onclick=hola.m4validar(m4objeto('entrada1','miform'));alert(hola.resultado);                  |
| 226 | input   | type=button; id=probar2; value=acceder; size=20; onclick=javascript:acceder();                                                                 |
| 227 | input   | type=button; id=probar3; value=calen; size=20; onclick=micalendario(m4objeto('entrada1','miform'));                                            |
| 228 | input   | type=button; id=probar4; value=m4valorset; size=20; onclick=javascript:m4valor('miform','entrada1','hola','hg');                               |
| 229 | input   | type=button; id=probar5; value=m4focus; size=20; onclick=javascript:m4focus('miform','entrada2');                                              |
| 235 | select  | id=miselect; class=fuentevalor; name=miselect                                                                                                  |
| 236 | option  | value=                                                                                                                                         |
| 237 | option  | value=1; selected=selected                                                                                                                     |
| 238 | option  | value=2                                                                                                                                        |
| 239 | option  | value=3                                                                                                                                        |
| 240 | option  | value=4                                                                                                                                        |
| 241 | option  | value=5                                                                                                                                        |
| 256 | a       | onmouseover=visible(false); onmouseout=visible(true)                                                                                           |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 19  | estado          | getParameter(request,"estado") |

| L   | Variable | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 12  | mes      | ahora.get(ahora.MONTH)                                             | ahora.get(ahora.MONTH)                                             |
| 13  | ano      | ahora.get(ahora.YEAR)                                              | ahora.get(ahora.YEAR)                                              |
| 16  | codigo   | p1.generarcodigo()                                                 | p1.generarcodigo()                                                 |
| 19  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos         |
| --- | ------------ | ------------------ |
| 41  | adios        |                    |
| 46  | entrada      | func,numparametros |
| 77  | acceder      |                    |
| 91  | visible      | si                 |
| 99  | evento       | e                  |
| 102 | pruebaid     |                    |
| 112 | cambiar      |                    |
| 129 | m4y2k        | number             |
| 131 | m4dialogwin  | objname,objeto     |
| 149 | m4opendialog | url, width, height |
| 168 | micalendario | objeto             |
| 177 | m4returnfunc |                    |

| L   | Condición / acción / mensaje literal                                                                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                               |
| 43  | alert("adios");                                                                                                                                                                   |
| 48  | if (entrada.arguments.length &gt; 1)                                                                                                                                              |
| 50  | if (numparametros &gt;= 1 )                                                                                                                                                       |
| 64  | alert(cadenatotal);                                                                                                                                                               |
| 67  | hola = new m4objvalidacion('_email','','','Entrada incorrecta',false);                                                                                                            |
| 86  | alert(m4elemento("listadias").rows[1].cells.length);                                                                                                                              |
| 92  | if (si == true){                                                                                                                                                                  |
| 95  | else{                                                                                                                                                                             |
| 100 | alert("adios");                                                                                                                                                                   |
| 104 | alert(elemento.className);                                                                                                                                                        |
| 114 | alert(document.tags.length);                                                                                                                                                      |
| 171 | if (typeof(ventana) != "object"){                                                                                                                                                 |
| 225 | &lt;input type="button" id="probar1" value="validar" size="20" onclick="hola.m4validar(m4objeto('entrada1','miform'));alert(hola.resultado);" /&gt;                               |
| 282 | &lt;td id="hol1" name="hol1" onclick="alert(m4elemento('hol1').id)" class="hola"&gt;                                                                                              |
| 47  | expresión de cálculo/transformación: var cadenatotal = func + "()";                                                                                                               |
| 56  | expresión de cálculo/transformación: parametros[i] = window.prompt("Parametro" + i,"");                                                                                           |
| 61  | expresión de cálculo/transformación: cadenatotal = func + "(" + cadena + ")";                                                                                                     |
| 158 | expresión de cálculo/transformación: this.left = window.scrX + ((window.outerWidth - this.width) / 2);                                                                            |
| 159 | expresión de cálculo/transformación: this.top = window.screenY + ((window.outerHeight - this.height) / 2);                                                                        |
| 160 | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=" + this.width + ",height=" + this.height; |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 33  | ../../sse_generico/espanol/menu_ess.jsp |
| 186 | generico_menusup.jsp                    |
| 187 | generico_links.jsp                      |
| 308 | generico_disclaimer.jsp                 |

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 30  | /css/estilo_sse.css                                      |
| 32  | /libreria/funciones_sse.js                               |
| 34  | /libreria/clase_val_entradas.js                          |
| 35  | /libreria/dom1.js                                        |
| 36  | /libreria/clasecalendario.js                             |
| 37  | /libreria/clasecalendariomss.js                          |
| 200 | /iconos/noname_volver_52_44.gif                          |
| 207 | /iconos/noname_listado_puestos_110_125.gif               |
| 33  | ../../sse_generico/espanol/menu_ess.jsp                  |
| 169 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp |
| 174 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp |
| 186 | generico_menusup.jsp                                     |
| 187 | generico_links.jsp                                       |
| 308 | generico_disclaimer.jsp                                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato                                                                                                                                                    |
| ------ | --- | -------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| COLL   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| COLL   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| COLL   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| COLL   | 32  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                     |
| COLL   | 34  | /libreria/clase_val_entradas.js                          | contextual | [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md) |
| COLL   | 35  | /libreria/dom1.js                                        | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                         |
| COLL   | 36  | /libreria/clasecalendario.js                             | contextual | [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md)             |
| COLL   | 37  | /libreria/clasecalendariomss.js                          | contextual | [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md); [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md) |
| COLL   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| COLL   | 169 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| COLL   | 174 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| COLL   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| COLL   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| COLL   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| CYC    | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| CYC    | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| CYC    | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| CYC    | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| CYC    | 32  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                              |
| CYC    | 34  | /libreria/clase_val_entradas.js                          | contextual | [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md)                                                                                    |
| CYC    | 35  | /libreria/dom1.js                                        | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                                                                |
| CYC    | 36  | /libreria/clasecalendario.js                             | contextual | [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md)                                                                                          |
| CYC    | 37  | /libreria/clasecalendariomss.js                          | contextual | [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md)                                                                                    |
| CYC    | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| CYC    | 169 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| CYC    | 174 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| CYC    | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| CYC    | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| CYC    | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| IBER   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| IBER   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| IBER   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| IBER   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| IBER   | 32  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                     |
| IBER   | 34  | /libreria/clase_val_entradas.js                          | contextual | [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md) |
| IBER   | 35  | /libreria/dom1.js                                        | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md); [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                         |
| IBER   | 36  | /libreria/clasecalendario.js                             | contextual | [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md); [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md)             |
| IBER   | 37  | /libreria/clasecalendariomss.js                          | contextual | [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md); [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md) |
| IBER   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| IBER   | 169 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| IBER   | 174 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| IBER   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| IBER   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| IBER   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| BASE   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| BASE   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| BASE   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| BASE   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |
| BASE   | 32  | /libreria/funciones_sse.js                               | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                                              |
| BASE   | 34  | /libreria/clase_val_entradas.js                          | contextual | [libreria/clase_val_entradas.js](../dependencias/libreria--clase_val_entradas.md)                                                                                    |
| BASE   | 35  | /libreria/dom1.js                                        | contextual | [libreria/dom1.js](../dependencias/libreria--dom1.md)                                                                                                                |
| BASE   | 36  | /libreria/clasecalendario.js                             | contextual | [libreria/clasecalendario.js](../dependencias/libreria--clasecalendario.md)                                                                                          |
| BASE   | 37  | /libreria/clasecalendariomss.js                          | contextual | [libreria/clasecalendariomss.js](../dependencias/libreria--clasecalendariomss.md)                                                                                    |
| BASE   | 33  | ../../sse_generico/espanol/menu_ess.jsp                  | física     | [sse_generico/menu_ess.jsp](sse_generico--menu_ess.md)                                                                                                               |
| BASE   | 169 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| BASE   | 174 | /servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp | ausente    | P06                                                                                                                                                                  |
| BASE   | 186 | generico_menusup.jsp                                     | física     | [sse_generico/generico_menusup.jsp](sse_generico--generico_menusup.md)                                                                                               |
| BASE   | 187 | generico_links.jsp                                       | física     | [sse_generico/generico_links.jsp](sse_generico--generico_links.md)                                                                                                   |
| BASE   | 308 | generico_disclaimer.jsp                                  | física     | [sse_generico/generico_disclaimer.jsp](sse_generico--generico_disclaimer.md)                                                                                         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_validaciones.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
