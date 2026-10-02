# shco_gen_cab

Identificador: `shco_g0/shco_gen_cab.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave          | Texto  | Ámbito | Diccionario                                                                         |
| -------------- | ------ | ------ | ----------------------------------------------------------------------------------- |
| Literal.Filter | Filtro | BASE   | [translations/shco_g0_es.properties:L82](../../referencias/literales/shco_g0_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_cab.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_cab.jsp) | `462edeb127a9157d214754de9fb1e58b44023f25c371d760bae76164a91fc449` |     23 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_cab.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_cab.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 10  | " /&gt;                  |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                               |
| --- | ------- | --------------------------------------- |
| 10  | img     | alt=&lt;m4:label m4name=; htmlsafe=true |
| 14  | img     | file=../files_gif/ic_lis_des.jsp        |
| 16  | a       | href=&lt;%=zcarril%&gt;                 |
| 16  | img     | file=../files_gif/ic_lis.jsp            |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag      | Contrato declarado                     |
| --- | -------- | -------------------------------------- |
| 10  | m4:label | m4name=zSHCOLBTITLEROOT; htmlsafe=true |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 11  | &lt;%if (zNavrc.equals("1")){%&gt;                                                                                                         |
| 13  | &lt;%if ((zcarril==null)&#124;&#124;(zcarril.equals(""))){%&gt;                                                                            |
| 15  | &lt;%}else{%&gt;                                                                                                                           |
| 22  | &lt;/td&gt;&lt;/tr&gt;&lt;%if (zNavrc.equals("0")){%&gt;&lt;tr&gt;&lt;td colspan="8" class="border"&gt; &lt;/td&gt;&lt;/tr&gt; &lt;%}%&gt; |

### Includes, navegación y dependencias

| L   | Include                     |
| --- | --------------------------- |
| 10  | ../files_gif/ic_cabec.jsp   |
| 14  | ../files_gif/ic_lis_des.jsp |
| 16  | ../files_gif/ic_lis.jsp     |
| 21  | shco_gen_help.jsp           |

| L   | Destino / recurso           |
| --- | --------------------------- |
| 16  | &lt;%=zcarril%&gt;          |
| 10  | ../files_gif/ic_cabec.jsp   |
| 14  | ../files_gif/ic_lis_des.jsp |
| 16  | ../files_gif/ic_lis.jsp     |
| 21  | shco_gen_help.jsp           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                  | Resolución | Ficha / candidato                                      |
| ------ | --- | --------------------------- | ---------- | ------------------------------------------------------ |
| BASE   | 10  | ../files_gif/ic_cabec.jsp   | física     | [files_gif/ic_cabec.jsp](files_gif--ic_cabec.md)       |
| BASE   | 14  | ../files_gif/ic_lis_des.jsp | física     | [files_gif/ic_lis_des.jsp](files_gif--ic_lis_des.md)   |
| BASE   | 16  | ../files_gif/ic_lis.jsp     | física     | [files_gif/ic_lis.jsp](files_gif--ic_lis.md)           |
| BASE   | 21  | shco_gen_help.jsp           | física     | [shco_g0/shco_gen_help.jsp](shco_g0--shco_gen_help.md) |
| BASE   | 16  | &lt;%=zcarril%&gt;          | dinámica   | P06                                                    |
| BASE   | 10  | ../files_gif/ic_cabec.jsp   | física     | [files_gif/ic_cabec.jsp](files_gif--ic_cabec.md)       |
| BASE   | 14  | ../files_gif/ic_lis_des.jsp | física     | [files_gif/ic_lis_des.jsp](files_gif--ic_lis_des.md)   |
| BASE   | 16  | ../files_gif/ic_lis.jsp     | física     | [files_gif/ic_lis.jsp](files_gif--ic_lis.md)           |
| BASE   | 21  | shco_gen_help.jsp           | física     | [shco_g0/shco_gen_help.jsp](shco_g0--shco_gen_help.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_cab.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
