# Filtro : Informe Puestos Unidad

Identificador: `mss_g1/mss_g1_rp_puestos.jsp`. Perfil: **responsable**. Dominio: **equipo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/mss_g1/espanol/mss_g1_rp_puestos.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_puestos.jsp) | `6b8809595f777a11b39d36d611cf71cf6a8acf466da3d9b47a76a89a6c39b225` |    215 |
| CYC / español     | [m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos.jsp)   | `44db3d5cd2c25d8dca305e16ab003e37216d8d1a3987c00ebdae57f288f988e4` |    314 |
| IBER / español    | [m4custom/IBER/mss_g1/espanol/mss_g1_rp_puestos.jsp](../../../../clon_portal/portal/m4custom/IBER/mss_g1/espanol/mss_g1_rp_puestos.jsp) | `6b8809595f777a11b39d36d611cf71cf6a8acf466da3d9b47a76a89a6c39b225` |    215 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/mss_g1/espanol/mss_g1_rp_puestos.jsp](../../../../clon_portal/portal/m4custom/COLL/mss_g1/espanol/mss_g1_rp_puestos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 22  | Filtro : Informe Puestos Unidad |
| 133 | Seleccione un Direccion         |
| 155 | Seleccione un Área              |
| 178 | Seleccione un Puesto            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 135 | select  | style=margin-left: 20px;; id=direcciones; onchange=cargar()                                                                  |
| 136 | option  | value=                                                                                                                       |
| 147 | option  | value=&lt;%=idDireccion%&gt;                                                                                                 |
| 157 | select  | style=margin-left: 20px;; id=areas; onchange=cargarA()                                                                       |
| 158 | option  | value=                                                                                                                       |
| 169 | option  | value=&lt;%=idArea%&gt;                                                                                                      |
| 180 | select  | style=margin-left: 20px;; id=puestos                                                                                         |
| 181 | option  | value=; selected=presente; confirmar condición si dinámico                                                                   |
| 192 | option  | value=&lt;%=idPuesto%&gt;                                                                                                    |
| 197 | form    | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 198 | input   | type=hidden; id=informe; name=informe; value=PUESTOS                                                                         |
| 199 | input   | type=hidden; id=puesto; name=puesto; value=                                                                                  |
| 200 | input   | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_puestos.jsp                                                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 14  | direccion       | getParameter(request,"direccion") |
| 15  | area            | getParameter(request,"area")      |

| L   | Variable            | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 14  | direccion           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") |
| 15  | area                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")      |
| 30  | zsubsesion          | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                        |
| 31  | zmeta4object        | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                        |
| 32  | znodePuestos        | "CSP_PUESTOS_DIRECCION"                                               | CSP_PUESTOS_DIRECCION                                                 |
| 33  | znodeDireccion      | "CSP_LISTA_DIR"                                                       | CSP_LISTA_DIR                                                         |
| 34  | znodeArea           | "CSP_LISTAR_ARE"                                                      | CSP_LISTAR_ARE                                                        |
| 36  | zmetodocarga        | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO"                        | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO                        |
| 39  | zoutputdefPuestos   | zsubsesion + "!" + znodePuestos + "[*]"                               | CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}                       |
| 40  | zmovePuestos        | znodePuestos + ":" + znodePuestos + "[FIRST]"                         | CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"}            |
| 43  | zoutputdefDireccion | zsubsesion + "!" + znodeDireccion + "[*]"                             | CSP_RP_ORO_MSS{"!"}CSP_LISTA_DIR{"[*]"}                               |
| 44  | zmoveDireccion      | znodeDireccion + ":" + znodeDireccion + "[FIRST]"                     | CSP_LISTA_DIR{":"}CSP_LISTA_DIR{"[FIRST]"}                            |
| 47  | zoutputdefArea      | zsubsesion + "!" + znodeArea + "[*]"                                  | CSP_RP_ORO_MSS{"!"}CSP_LISTAR_ARE{"[*]"}                              |
| 48  | zmoveArea           | znodeArea + ":" + znodeArea + "[FIRST]"                               | CSP_LISTAR_ARE{":"}CSP_LISTAR_ARE{"[FIRST]"}                          |
| 51  | idPuesto            | ""                                                                    |                                                                       |
| 52  | nPuesto             | ""                                                                    |                                                                       |
| 53  | idDireccion         | ""                                                                    |                                                                       |
| 54  | nDireccion          | ""                                                                    |                                                                       |
| 55  | idArea              | ""                                                                    |                                                                       |
| 56  | nArea               | ""                                                                    |                                                                       |
| 90  | i                   | 0                                                                     | 0                                                                     |
| 91  | zposicionPuestos    | 0                                                                     | 0                                                                     |
| 92  | zposicionDireccion  | 0                                                                     | 0                                                                     |
| 93  | zposicionArea       | 0                                                                     | 0                                                                     |
| 104 | id                  | ""                                                                    |                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 69  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                           |
| 71  | m4:beginjob  |                                                                                                 |
| 72  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                                       |
| 74  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO                                         |
| 74  | m4:param     | name=ARG_DIRECCION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") |
| 74  | m4:param     | name=ARG_AREA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")           |
| 76  | m4:outputdef | m4alias=CSP_PUESTOS_DIRECCION                                                                   |
| 76  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}                             |
| 77  | m4:outputdef | m4alias=CSP_LISTA_DIR                                                                           |
| 77  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_LISTA_DIR{"[*]"}                                     |
| 78  | m4:outputdef | m4alias=CSP_LISTAR_ARE                                                                          |
| 78  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_LISTAR_ARE{"[*]"}                                    |
| 79  | m4:endjob    |                                                                                                 |
| 80  | m4:move      |                                                                                                 |
| 80  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"}           |
| 81  | m4:move      |                                                                                                 |
| 81  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_LISTA_DIR{":"}CSP_LISTA_DIR{"[FIRST]"}                           |
| 82  | m4:move      |                                                                                                 |
| 82  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_LISTAR_ARE{":"}CSP_LISTAR_ARE{"[FIRST]"}                         |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 97  | getCountInClient | znodePuestos,zsubsesion,znodePuestos                         |
| 98  | getCountInClient | znodeDireccion,zsubsesion,znodeDireccion                     |
| 99  | getCountInClient | znodeArea,zsubsesion,znodeArea                               |
| 142 | getItem          | znodeDireccion,zmeta4object,znodeDireccion,"","ID_DIRECCION" |
| 143 | getItem          | znodeDireccion,zmeta4object,znodeDireccion,"","N_DIRECCION"  |
| 164 | getItem          | znodeArea,zmeta4object,znodeArea,"","ID_AREA"                |
| 165 | getItem          | znodeArea,zmeta4object,znodeArea,"","N_AREA"                 |
| 187 | getItem          | znodePuestos,zmeta4object,znodePuestos,"","ID_PUESTO"        |
| 188 | getItem          | znodePuestos,zmeta4object,znodePuestos,"","N_PUESTO"         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos        |
| --- | ----------------- | ----------------- |
| 108 | cargar            |                   |
| 112 | cargarA           |                   |
| 117 | seleccionarOpcion | valor,desplegable |

| L   | Condición / acción / mensaje literal                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------- |
| 60  | if (direccion==null){                                                                                           |
| 63  | if(area == null){                                                                                               |
| 121 | if (options[i].value == valor) {                                                                                |
| 131 | &lt;% if (zposicionDireccion!=0){%&gt;                                                                          |
| 150 | &lt;% if (direccion != null) {%&gt;                                                                             |
| 172 | &lt;% if (area != null) {%&gt;                                                                                  |
| 39  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodePuestos + "[*]";        |
| 40  | expresión de cálculo/transformación: String zmovePuestos = znodePuestos + ":" + znodePuestos + "[FIRST]";       |
| 43  | expresión de cálculo/transformación: String zoutputdefDireccion = zsubsesion + "!" + znodeDireccion + "[*]";    |
| 44  | expresión de cálculo/transformación: String zmoveDireccion = znodeDireccion + ":" + znodeDireccion + "[FIRST]"; |
| 47  | expresión de cálculo/transformación: String zoutputdefArea = zsubsesion + "!" + znodeArea + "[*]";              |
| 48  | expresión de cálculo/transformación: String zmoveArea = znodeArea + ":" + znodeArea + "[FIRST]";                |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 23  | /css/estilo_sse.css                                                |
| 24  | /css/bootstrap/css/bootstrap.min.css                               |
| 25  | /library/jquery.js                                                 |
| 26  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js               |
| 110 | ./mss_g1_rp_puestos.jsp?direccion=                                 |
| 115 | ./mss_g1_rp_puestos.jsp?direccion=                                 |
| 197 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 200 | mss_g1_rp_puestos.jsp                                              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos.jsp](../../../../clon_portal/portal/m4custom/CYC/mss_g1/espanol/mss_g1_rp_puestos.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta              |
| --- | ------------------------------------- |
| 23  | Filtro : Informe Puestos Unidad       |
| 142 | Estructura / Búsqueda                 |
| 146 | Sociedad                              |
| 147 | CYC IBER                              |
| 159 | Limpiar filtros                       |
| 175 | Dirección / D. Territorial            |
| 176 | Seleccione Direccion [valor dinámico] |
| 201 | Área                                  |
| 202 | Seleccione Area [valor dinámico]      |
| 239 | Puesto                                |
| 240 | Seleccione Puesto [valor dinámico]    |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                            |
| --- | ------- | ---------------------------------------------------------------------------------------------------- |
| 148 | select  | name=sociedades; id=sociedades; style=width: 450px; onchange=cargarS()                               |
| 149 | option  | value=CYC                                                                                            |
| 150 | option  | value=IBER                                                                                           |
| 160 | button  | onclick=location.href='./mss_g1_rp_puestos.jsp'; class=enterlogin; style= background-color: #DC0028; |

```
										background-repeat: no-repeat;
										border: 1px solid #DC0028;
										border-radius: 4px;
										color: #FFFFFF;
										margin: 10px;
										max-width: 150px;
										min-height: 20px;
										min-width: 110px; |
```

| 177 | select | name=direcciones; id=direcciones; style=width: 450px; onchange=cargar() |
| 178 | option | value= |
| 189 | option | value=&lt;%=idDireccion%&gt; |
| 203 | select | name=areas; id=areas; style=width: 450px; onchange=cargarA() |
| 204 | option | value= |
| 215 | option | value=&lt;%=idArea%&gt; |
| 241 | select | name=puestos; id=puestos; style=width: 450px |
| 242 | option | value=; selected=presente; confirmar condición si dinámico |
| 251 | option | value=&lt;%=idPuesto%&gt; |
| 261 | input | name=button; type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;
background-repeat: no-repeat;
border: 1px solid #DC0028;
border-radius: 4px;
color: #FFFFFF;
margin: 10px;
max-width: 150px;
min-height: 30px;
min-width: 110px;; value=Búsqueda; onclick=buscar() |
| 303 | form | id=filtroInforme; name=filtroInforme; method=post; action=/servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 304 | input | type=hidden; id=informe; name=informe; value=PUESTOS |
| 305 | input | type=hidden; id=puesto; name=puesto; value= |
| 306 | input | type=hidden; id=direccion; name=direccion; value= |
| 307 | input | type=hidden; id=area; name=area; value= |
| 308 | input | type=hidden; id=pagina; name=pagina; value=mss_g1_rp_puestos.jsp |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 14  | direccion       | getParameter(request,"direccion") |
| 15  | area            | getParameter(request,"area")      |
| 16  | sociedad        | getParameter(request,"sociedad")  |

| L   | Variable            | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 14  | direccion           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") |
| 15  | area                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")      |
| 16  | sociedad            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")  |
| 31  | zsubsesion          | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                        |
| 32  | zmeta4object        | "CSP_RP_ORO_MSS"                                                      | CSP_RP_ORO_MSS                                                        |
| 33  | znodePuestos        | "CSP_PUESTOS_DIRECCION"                                               | CSP_PUESTOS_DIRECCION                                                 |
| 34  | znodeDireccion      | "CSP_LISTA_DIR"                                                       | CSP_LISTA_DIR                                                         |
| 35  | znodeArea           | "CSP_LISTAR_ARE"                                                      | CSP_LISTAR_ARE                                                        |
| 37  | zmetodocarga        | zsubsesion +"!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO"                        | CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO                        |
| 40  | zoutputdefPuestos   | zsubsesion + "!" + znodePuestos + "[*]"                               | CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}                       |
| 41  | zmovePuestos        | znodePuestos + ":" + znodePuestos + "[FIRST]"                         | CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"}            |
| 44  | zoutputdefDireccion | zsubsesion + "!" + znodeDireccion + "[*]"                             | CSP_RP_ORO_MSS{"!"}CSP_LISTA_DIR{"[*]"}                               |
| 45  | zmoveDireccion      | znodeDireccion + ":" + znodeDireccion + "[FIRST]"                     | CSP_LISTA_DIR{":"}CSP_LISTA_DIR{"[FIRST]"}                            |
| 48  | zoutputdefArea      | zsubsesion + "!" + znodeArea + "[*]"                                  | CSP_RP_ORO_MSS{"!"}CSP_LISTAR_ARE{"[*]"}                              |
| 49  | zmoveArea           | znodeArea + ":" + znodeArea + "[FIRST]"                               | CSP_LISTAR_ARE{":"}CSP_LISTAR_ARE{"[FIRST]"}                          |
| 52  | idPuesto            | ""                                                                    |                                                                       |
| 53  | nPuesto             | ""                                                                    |                                                                       |
| 54  | idDireccion         | ""                                                                    |                                                                       |
| 55  | nDireccion          | ""                                                                    |                                                                       |
| 56  | idArea              | ""                                                                    |                                                                       |
| 57  | nArea               | ""                                                                    |                                                                       |
| 92  | i                   | 0                                                                     | 0                                                                     |
| 93  | zposicionPuestos    | 0                                                                     | 0                                                                     |
| 94  | zposicionDireccion  | 0                                                                     | 0                                                                     |
| 95  | zposicionArea       | 0                                                                     | 0                                                                     |
| 106 | id                  | ""                                                                    |                                                                       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 71  | m4:startpage | m4task=CSP_RP_ORO_MSS                                                                           |
| 73  | m4:beginjob  |                                                                                                 |
| 74  | m4:datadef   | m4o=CSP_RP_ORO_MSS; m4name=CSP_RP_ORO_MSS                                                       |
| 76  | m4:exec      | m4method=CSP_RP_ORO_MSS!CSP_RP_ORO_MSS.CSP_CARGA_FILTRO                                         |
| 76  | m4:param     | name=ARG_DIRECCION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"direccion") |
| 76  | m4:param     | name=ARG_AREA; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"area")           |
| 76  | m4:param     | name=ARG_SOCIEDAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad")   |
| 78  | m4:outputdef | m4alias=CSP_PUESTOS_DIRECCION                                                                   |
| 78  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_PUESTOS_DIRECCION{"[*]"}                             |
| 79  | m4:outputdef | m4alias=CSP_LISTA_DIR                                                                           |
| 79  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_LISTA_DIR{"[*]"}                                     |
| 80  | m4:outputdef | m4alias=CSP_LISTAR_ARE                                                                          |
| 80  | m4:param     | name=m4name0; value=CSP_RP_ORO_MSS{"!"}CSP_LISTAR_ARE{"[*]"}                                    |
| 81  | m4:endjob    |                                                                                                 |
| 82  | m4:move      |                                                                                                 |
| 82  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_PUESTOS_DIRECCION{":"}CSP_PUESTOS_DIRECCION{"[FIRST]"}           |
| 83  | m4:move      |                                                                                                 |
| 83  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_LISTA_DIR{":"}CSP_LISTA_DIR{"[FIRST]"}                           |
| 84  | m4:move      |                                                                                                 |
| 84  | m4:param     | name=CSP_RP_ORO_MSS; value=CSP_LISTAR_ARE{":"}CSP_LISTAR_ARE{"[FIRST]"}                         |

| L   | Operación        | Argumentos literales                                         |
| --- | ---------------- | ------------------------------------------------------------ |
| 99  | getCountInClient | znodePuestos,zsubsesion,znodePuestos                         |
| 100 | getCountInClient | znodeDireccion,zsubsesion,znodeDireccion                     |
| 101 | getCountInClient | znodeArea,zsubsesion,znodeArea                               |
| 184 | getItem          | znodeDireccion,zmeta4object,znodeDireccion,"","ID_DIRECCION" |
| 185 | getItem          | znodeDireccion,zmeta4object,znodeDireccion,"","N_DIRECCION"  |
| 210 | getItem          | znodeArea,zmeta4object,znodeArea,"","ID_AREA"                |
| 211 | getItem          | znodeArea,zmeta4object,znodeArea,"","N_AREA"                 |
| 248 | getItem          | znodePuestos,zmeta4object,znodePuestos,"","ID_PUESTO"        |
| 249 | getItem          | znodePuestos,zmeta4object,znodePuestos,"","N_PUESTO"         |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función           | Argumentos        |
| --- | ----------------- | ----------------- |
| 110 | cargarS           |                   |
| 114 | cargar            |                   |
| 119 | cargarA           |                   |
| 125 | seleccionarOpcion | valor,desplegable |
| 284 | buscar            |                   |

| L   | Condición / acción / mensaje literal                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 17  | if(sociedad == null &#124;&#124; sociedad == ""){sociedad = "CYC";}                                                         |
| 61  | if (direccion==null){                                                                                                       |
| 64  | if(area == null){                                                                                                           |
| 129 | if (options[i].value == valor) {                                                                                            |
| 144 | &lt;% if (zposicionDireccion!=0){%&gt;                                                                                      |
| 152 | &lt;% if (sociedad != null) {%&gt;                                                                                          |
| 192 | &lt;% if (direccion != null) {%&gt;                                                                                         |
| 219 | &lt;% if (area != null) {%&gt;                                                                                              |
| 223 | &lt;%} if(direccion=="0"){%&gt;                                                                                             |
| 225 | if ("&lt;%=area%&gt;"== "0"){                                                                                               |
| 288 | if (seleccionado==""){                                                                                                      |
| 289 | alert("Seleccione un puesto")                                                                                               |
| 290 | }else{                                                                                                                      |
| 40  | expresión de cálculo/transformación: String zoutputdefPuestos = zsubsesion + "!" + znodePuestos + "[*]";                    |
| 41  | expresión de cálculo/transformación: String zmovePuestos = znodePuestos + ":" + znodePuestos + "[FIRST]";                   |
| 44  | expresión de cálculo/transformación: String zoutputdefDireccion = zsubsesion + "!" + znodeDireccion + "[*]";                |
| 45  | expresión de cálculo/transformación: String zmoveDireccion = znodeDireccion + ":" + znodeDireccion + "[FIRST]";             |
| 48  | expresión de cálculo/transformación: String zoutputdefArea = zsubsesion + "!" + znodeArea + "[*]";                          |
| 49  | expresión de cálculo/transformación: String zmoveArea = znodeArea + ":" + znodeArea + "[FIRST]";                            |
| 142 | expresión de cálculo/transformación: &lt;td colspan="3" &gt;&lt;strong&gt; Estructura / Búsqueda &lt;/strong&gt;&lt;/td&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 24  | /css/estilo_sse.css                                                |
| 26  | /library/jquery.js                                                 |
| 27  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js               |
| 112 | ./mss_g1_rp_puestos.jsp?sociedad=                                  |
| 117 | ./mss_g1_rp_puestos.jsp?sociedad=                                  |
| 123 | ./mss_g1_rp_puestos.jsp?sociedad=                                  |
| 160 | ./mss_g1_rp_puestos.jsp                                            |
| 303 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp |
| 308 | mss_g1_rp_puestos.jsp                                              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                      |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------- |
| COLL   | 25  | /library/jquery.js                                                 | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| COLL   | 26  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js               | externa    | destino externo                                                        |
| COLL   | 110 | ./mss_g1_rp_puestos.jsp?direccion=                                 | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| COLL   | 115 | ./mss_g1_rp_puestos.jsp?direccion=                                 | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| COLL   | 197 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                    |
| COLL   | 200 | mss_g1_rp_puestos.jsp                                              | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| CYC    | 26  | /library/jquery.js                                                 | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;  |
| CYC    | 27  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js               | externa    | destino externo                                                        |
| CYC    | 112 | ./mss_g1_rp_puestos.jsp?sociedad=                                  | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| CYC    | 117 | ./mss_g1_rp_puestos.jsp?sociedad=                                  | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| CYC    | 123 | ./mss_g1_rp_puestos.jsp?sociedad=                                  | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| CYC    | 160 | ./mss_g1_rp_puestos.jsp                                            | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| CYC    | 303 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                    |
| CYC    | 308 | mss_g1_rp_puestos.jsp                                              | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| IBER   | 25  | /library/jquery.js                                                 | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96; |
| IBER   | 26  | [host externo]/ajax/libs/jquery/1.11.0/jquery.min.js               | externa    | destino externo                                                        |
| IBER   | 110 | ./mss_g1_rp_puestos.jsp?direccion=                                 | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| IBER   | 115 | ./mss_g1_rp_puestos.jsp?direccion=                                 | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |
| IBER   | 197 | /servlet/CheckSecurity/JSP/sse_generico/actualizar_informe_oro.jsp | ausente    | P06                                                                    |
| IBER   | 200 | mss_g1_rp_puestos.jsp                                              | física     | [mss_g1/mss_g1_rp_puestos.jsp](mss_g1--mss_g1_rp_puestos.md)           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g1/mss_g1_rp_puestos.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
