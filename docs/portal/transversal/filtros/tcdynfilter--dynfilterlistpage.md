# dynfilterlistpage

Identificador: `tcdynfilter/dynfilterlistpage.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tcdynfilter/dynfilterlistpage.jsp](../../../../clon_portal/portal/tcdynfilter/dynfilterlistpage.jsp) | `5bdf2f22e7d415cd1018b22a32feaa0412e48d8269383ea82fce93f8486707e5` |    211 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tcdynfilter/dynfilterlistpage.jsp](../../../../clon_portal/portal/tcdynfilter/dynfilterlistpage.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                              |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 81  | form    | name=frmcallfilter; id=frmcallfilter; action=/servlet/CheckSecurity/JSP/tcdynfilter/dynfilteredit.jsp; method=post                                                                     |
| 82  | input   | type=hidden; id=zidoperation; name=zidoperation; value=                                                                                                                                |
| 83  | input   | type=hidden; id=zidsentence; name=zidsentence; value=                                                                                                                                  |
| 84  | input   | type=hidden; id=zidescenario; name=zidescenario; value=                                                                                                                                |
| 85  | input   | type=hidden; id=zidtable; name=zidtable; value=                                                                                                                                        |
| 86  | input   | type=hidden; id=zforwardpage; name=zforwardpage; value=                                                                                                                                |
| 87  | input   | type=hidden; id=zreturnpage; name=zreturnpage; value=                                                                                                                                  |
| 88  | input   | type=hidden; id=zidrelationtype; name=zidrelationtype; value=                                                                                                                          |
| 89  | input   | type=hidden; id=zidnode; name=zidnode; value=                                                                                                                                          |
| 90  | input   | type=hidden; id=zdynfilteralias; name=zdynfilteralias; value=&lt;%=sDYN_FILTER_ALIAS%&gt;                                                                                              |
| 91  | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                               |
| 94  | form    | method=post; name=frmcallreturnpage; id=="frmcallreturnpage"; action=                                                                                                                  |
| 95  | input   | type=hidden; id=zdynfiltersinfo; name=zdynfiltersinfo; value=                                                                                                                          |
| 96  | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                               |
| 102 | form    | name=frmdynfilterlist; id=frmdynfilterlist; action=/servlet/CheckSecurity/JSP/tcdynfilter/dynapplyfilter.jsp; method=post                                                              |
| 103 | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                               |
| 156 | a       | href=javascript:filterOperation('&lt;%=sIdObject%&gt;','&lt;%=sIdNode%&gt;','&lt;%=sIdSentence%&gt;')                                                                                  |
| 170 | a       | href=javascript:RemoveFilter('&lt;%=sIdSentence%&gt;','&lt;%=sIdNode%&gt;')                                                                                                            |
| 171 | img     | border=0; hspace=4; align=top; src=/images/tcreports/delete_28x28_out.gif                                                                                                              |
| 199 | input   | id=btnAceptar; name=btnAceptar; type=button; value=&lt;%=Tran.getProperty("Button.Aceptar")%&gt;; onclick=ApplyFilter();                                                               |
| 200 | input   | id=btnCancelar; name=btnCancelar; type=button; value=&lt;%=Tran.getProperty("Button.Cancelar")%&gt;; onclick=callReturnPage('&lt;%=sParReturnPage%&gt;','&lt;%=sDynFiltersInfo%&gt;'); |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                         |
| --- | ----------- | -------------------------------------------------------------------------- |
| 142 | m4:dataloop | outputdef=DynFilterNodeList                                                |
| 149 | m4:item     | outputdef=DynFilterNodeList; item=ID_NODE; m4varname=sIdNode               |
| 150 | m4:item     | outputdef=DynFilterNodeList; item=N_NODE; m4varname=sNNode                 |
| 151 | m4:item     | outputdef=DynFilterNodeList; item=ID_READ_OBJECT; m4varname=sIdObject      |
| 152 | m4:item     | outputdef=DynFilterNodeList; item=ID_T3; m4varname=sIdT3                   |
| 153 | m4:item     | outputdef=DynFilterNodeList; item=ARG_ID_SENTENCE; m4varname=sIdSentence   |
| 164 | m4:item     | outputdef=DynFilterNodeList; item=ARG_LANGUAGE; m4varname=sLang_Natural    |
| 197 | m4:item     | outputdef=ApiDynFilterNode; item=PAR_RETURN_PAGE; m4varname=sParReturnPage |
| 198 | m4:item     | outputdef=ApiDynFilterNode; item=DYN_INFO; m4varname=sDynFiltersInfo       |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos                    |
| --- | --------------- | ----------------------------- |
| 28  | filterOperation | sIdObject,sIdNode,sIdSentence |
| 44  | RemoveFilter    | sIdSentence,sIdNode           |
| 64  | ApplyFilter     |                               |
| 69  | callReturnPage  | sIdPage,sDynFiltersInfo       |

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 46  | if (sIdSentence != "")               |

### Includes, navegación y dependencias

| L   | Include              |
| --- | -------------------- |
| 9   | dynfilterlistjob.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 19  | /style/tcreports_0.css                                        |
| 81  | /servlet/CheckSecurity/JSP/tcdynfilter/dynfilteredit.jsp      |
| 102 | /servlet/CheckSecurity/JSP/tcdynfilter/dynapplyfilter.jsp     |
| 156 | javascript:filterOperation(                                   |
| 170 | javascript:RemoveFilter(                                      |
| 171 | /images/tcreports/delete_28x28_out.gif                        |
| 9   | dynfilterlistjob.jsp                                          |
| 36  | /servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilter.jsp        |
| 37  | /servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp      |
| 55  | /servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilterservice.jsp |
| 56  | /servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                    |
| ------ | --- | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------------- |
| BASE   | 9   | dynfilterlistjob.jsp                                          | física     | [tcdynfilter/dynfilterlistjob.jsp](tcdynfilter--dynfilterlistjob.md) |
| BASE   | 81  | /servlet/CheckSecurity/JSP/tcdynfilter/dynfilteredit.jsp      | ausente    | P06                                                                  |
| BASE   | 102 | /servlet/CheckSecurity/JSP/tcdynfilter/dynapplyfilter.jsp     | ausente    | P06                                                                  |
| BASE   | 156 | javascript:filterOperation(                                   | dinámica   | P06                                                                  |
| BASE   | 170 | javascript:RemoveFilter(                                      | dinámica   | P06                                                                  |
| BASE   | 9   | dynfilterlistjob.jsp                                          | física     | [tcdynfilter/dynfilterlistjob.jsp](tcdynfilter--dynfilterlistjob.md) |
| BASE   | 36  | /servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilter.jsp        | ausente    | P06                                                                  |
| BASE   | 37  | /servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp      | ausente    | P06                                                                  |
| BASE   | 55  | /servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilterservice.jsp | ausente    | P06                                                                  |
| BASE   | 56  | /servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp      | ausente    | P06                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tcdynfilter/dynfilterlistpage.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
