# persist

Identificador: `mss_g3/persist.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/persist.jsp](../../../../clon_portal/portal/mss_g3/espanol/persist.jsp) | `ed74279f7876ef084e01fa9c09e74955217788f351a7a5a6ba6e82b186c31375` |    167 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/persist.jsp](../../../../clon_portal/portal/mss_g3/espanol/persist.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 8   | ztipopersist    | zhash.get("ztipopersist")            |
| 11  | ztipopersist    | getParameter(request,"ztipopersist") |
| 20  | znumvac         | zhash.get("znumvac")                 |
| 21  | znompuesto      | zhash.get("znompuesto")              |
| 22  | zpuesto         | zhash.get("zpuesto")                 |
| 23  | zmovnac         | zhash.get("zmovnac")                 |
| 24  | zmovint         | zhash.get("zmovint")                 |
| 25  | zfechaincorp    | zhash.get("zfechaincorp")            |
| 26  | zfechalimite    | zhash.get("zfechalimite")            |
| 27  | zedadmin        | zhash.get("zedadmin")                |
| 28  | zedadmax        | zhash.get("zedadmax")                |
| 29  | zworkunit       | zhash.get("zworkunit")               |
| 30  | znomworkunit    | zhash.get("znomworkunit")            |
| 31  | zlocation       | zhash.get("zlocation")               |
| 32  | znomlocation    | zhash.get("znomlocation")            |
| 33  | zsalmin         | zhash.get("zsalmin")                 |
| 34  | zsalmax         | zhash.get("zsalmax")                 |
| 35  | ztiposal        | zhash.get("ztiposal")                |
| 36  | znomtiposal     | zhash.get("znomtiposal")             |
| 37  | zconsiderations | zhash.get("zconsiderations")         |
| 40  | zIdPerson       | getBagEntries("zIdPerson")           |
| 65  | Job             | getParameter(request,"Job")          |
| 66  | Fam             | getParameter(request,"Fam")          |
| 70  | Sec             | getParameter(request,"Sec")          |
| 71  | UTime           | getParameter(request,"UTime")        |
| 72  | PMTime          | getParameter(request,"PMTime")       |
| 73  | Req             | getParameter(request,"Req")          |
| 74  | Pais            | getParameter(request,"Pais")         |
| 90  | TipoCert        | getParameter(request,"TipoCert")     |
| 91  | Entidad         | getParameter(request,"Entidad")      |
| 92  | Pais            | getParameter(request,"Pais")         |
| 93  | Req             | getParameter(request,"Req")          |
| 105 | Titulacion      | getParameter(request,"Titulacion")   |
| 106 | Especialidad    | getParameter(request,"Especialidad") |
| 107 | TipoEst         | getParameter(request,"TipoEst")      |
| 108 | Req             | getParameter(request,"Req")          |
| 120 | Obligacion      | getParameter(request,"Obligacion")   |
| 121 | TimeNeed        | getParameter(request,"TimeNeed")     |
| 122 | Freq            | getParameter(request,"Freq")         |
| 133 | Idioma          | getParameter(request,"Idioma")       |
| 134 | nRead           | getParameter(request,"nRead")        |
| 135 | nWrite          | getParameter(request,"nWrite")       |
| 136 | nSpeak          | getParameter(request,"nSpeak")       |
| 137 | Req             | getParameter(request,"Req")          |
| 152 | Nivel           | getParameter(request,"Nivel")        |
| 153 | Comp            | getParameter(request,"Comp")         |
| 154 | Peso            | getParameter(request,"Peso")         |

| L   | Variable        | Expresión fuente                                                         | Resolución estática parcial                                              |
| --- | --------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 8   | ztipopersist    | (String) zhash.get("ztipopersist")                                       | (String) zhash.get("ztipopersist")                                       |
| 15  | znodo           | "SSM_VACANT"                                                             | SSM_VACANT                                                               |
| 16  | znodo_2         | "SSM_JOB_POST"                                                           | SSM_JOB_POST                                                             |
| 20  | znumvac         | (String) zhash.get("znumvac")                                            | (String) zhash.get("znumvac")                                            |
| 21  | znompuesto      | (String) zhash.get("znompuesto")                                         | (String) zhash.get("znompuesto")                                         |
| 22  | zpuesto         | (String) zhash.get("zpuesto")                                            | (String) zhash.get("zpuesto")                                            |
| 23  | zmovnac         | (String) zhash.get("zmovnac")                                            | (String) zhash.get("zmovnac")                                            |
| 24  | zmovint         | (String) zhash.get("zmovint")                                            | (String) zhash.get("zmovint")                                            |
| 25  | zfechaincorp    | (String) zhash.get("zfechaincorp")                                       | (String) zhash.get("zfechaincorp")                                       |
| 26  | zfechalimite    | (String) zhash.get("zfechalimite")                                       | (String) zhash.get("zfechalimite")                                       |
| 27  | zedadmin        | (String) zhash.get("zedadmin")                                           | (String) zhash.get("zedadmin")                                           |
| 28  | zedadmax        | (String) zhash.get("zedadmax")                                           | (String) zhash.get("zedadmax")                                           |
| 29  | zworkunit       | (String) zhash.get("zworkunit")                                          | (String) zhash.get("zworkunit")                                          |
| 30  | znomworkunit    | (String) zhash.get("znomworkunit")                                       | (String) zhash.get("znomworkunit")                                       |
| 31  | zlocation       | (String) zhash.get("zlocation")                                          | (String) zhash.get("zlocation")                                          |
| 32  | znomlocation    | (String) zhash.get("znomlocation")                                       | (String) zhash.get("znomlocation")                                       |
| 33  | zsalmin         | (String) zhash.get("zsalmin")                                            | (String) zhash.get("zsalmin")                                            |
| 34  | zsalmax         | (String) zhash.get("zsalmax")                                            | (String) zhash.get("zsalmax")                                            |
| 35  | ztiposal        | (String) zhash.get("ztiposal")                                           | (String) zhash.get("ztiposal")                                           |
| 36  | znomtiposal     | (String) zhash.get("znomtiposal")                                        | (String) zhash.get("znomtiposal")                                        |
| 37  | zconsiderations | (String) zhash.get("zconsiderations")                                    | (String) zhash.get("zconsiderations")                                    |
| 40  | zIdPerson2      | zsesion.getBagEntries("zIdPerson")                                       | zsesion.getBagEntries("zIdPerson")                                       |
| 65  | puesto          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Job")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Job")          |
| 66  | familia         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fam")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Fam")          |
| 70  | sector          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Sec")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Sec")          |
| 71  | utime           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"UTime")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"UTime")        |
| 72  | pmtime          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PMTime")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PMTime")       |
| 73  | requerido       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          |
| 74  | pais            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais")         |
| 90  | tipocert        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoCert")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoCert")     |
| 91  | entidad         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Entidad")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Entidad")      |
| 92  | pais            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Pais")         |
| 93  | requerido       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          |
| 105 | titulacion      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Titulacion")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Titulacion")   |
| 106 | especialidad    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Especialidad") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Especialidad") |
| 107 | tipoest         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoEst")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TipoEst")      |
| 108 | requerido       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          |
| 120 | obligacion      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Obligacion")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Obligacion")   |
| 121 | timeneed        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TimeNeed")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TimeNeed")     |
| 122 | freq            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Freq")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Freq")         |
| 133 | idioma          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Idioma")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Idioma")       |
| 134 | nread           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nRead")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nRead")        |
| 135 | nwrite          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nWrite")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nWrite")       |
| 136 | nspeak          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nSpeak")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nSpeak")       |
| 137 | requerido       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Req")          |
| 152 | niv             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Nivel")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Nivel")        |
| 153 | conoc           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Comp")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Comp")         |
| 154 | peso            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Peso")         |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                                 |
| --- | --------- | ---------------------------------------------------- |
| 44  | setItem   | zsubsesion,znodo,"","ID_PERSON",zIdPerson2           |
| 46  | setItem   | zsubsesion,znodo,"","NUM_VACANTES",znumvac           |
| 47  | setItem   | zsubsesion,znodo,"","PUESTO",zpuesto                 |
| 48  | setItem   | zsubsesion,znodo,"","WORKUNIT",zworkunit             |
| 49  | setItem   | zsubsesion,znodo,"","LOCATION",zlocation             |
| 50  | setItem   | zsubsesion,znodo,"","MOVINT",zmovint                 |
| 51  | setItem   | zsubsesion,znodo,"","MOVNAC",zmovnac                 |
| 52  | setItem   | zsubsesion,znodo,"","FECHA_INCORP",zfechaincorp      |
| 53  | setItem   | zsubsesion,znodo,"","FECHA_LIMITE",zfechalimite      |
| 54  | setItem   | zsubsesion,znodo,"","SUELDO_MAXIMO",zsalmax          |
| 55  | setItem   | zsubsesion,znodo,"","SUELDO_MINIMO",zsalmin          |
| 56  | setItem   | zsubsesion,znodo,"","EDAD_MAXIMA",zedadmax           |
| 57  | setItem   | zsubsesion,znodo,"","EDAD_MINIMA",zedadmin           |
| 58  | setItem   | zsubsesion,znodo,"","TIPO_SALARIO",ztiposal          |
| 59  | setItem   | zsubsesion,znodo,"","CONSIDERATIONS",zconsiderations |
| 78  | setItem   | zsubsesion,znodo,"","PUESTO",puesto                  |
| 79  | setItem   | zsubsesion,znodo,"","FAMILIA",familia                |
| 80  | setItem   | zsubsesion,znodo,"","SECTOR",sector                  |
| 81  | setItem   | zsubsesion,znodo,"","UNITTIME",utime                 |
| 82  | setItem   | zsubsesion,znodo,"","PERIODOMINIMO",pmtime           |
| 83  | setItem   | zsubsesion,znodo,"","PAIS",pais                      |
| 84  | setItem   | zsubsesion,znodo,"","REQUERIDO",requerido            |
| 97  | setItem   | zsubsesion,znodo,"","TIPO_CERTIFICADO",tipocert      |
| 98  | setItem   | zsubsesion,znodo,"","ENTIDAD_EMISORA",entidad        |
| 99  | setItem   | zsubsesion,znodo,"","PAIS",pais                      |
| 100 | setItem   | zsubsesion,znodo,"","REQUERIDO",requerido            |
| 112 | setItem   | zsubsesion,znodo,"","TITULACION",titulacion          |
| 113 | setItem   | zsubsesion,znodo,"","ESPECIALIDAD",especialidad      |
| 114 | setItem   | zsubsesion,znodo,"","TIPO_ESTUDIOS",tipoest          |
| 115 | setItem   | zsubsesion,znodo,"","REQUERIDO",requerido            |
| 126 | setItem   | zsubsesion,znodo,"","OBLIGACION",obligacion          |
| 127 | setItem   | zsubsesion,znodo,"","TIEMPO_NECESITADO",timeneed     |
| 128 | setItem   | zsubsesion,znodo,"","FRECUENCIA",freq                |
| 141 | setItem   | zsubsesion,znodo,"","IDIOMA",idioma                  |
| 142 | setItem   | zsubsesion,znodo,"","NLECTURA",nread                 |
| 143 | setItem   | zsubsesion,znodo,"","NESCRITURA",nwrite              |
| 144 | setItem   | zsubsesion,znodo,"","NCONVERSACION",nspeak           |
| 145 | setItem   | zsubsesion,znodo,"","REQUERIDO",requerido            |
| 160 | setItem   | zsubsesion,znodo,"","CONOCIMIENTO",conoc             |
| 161 | setItem   | zsubsesion,znodo,"","NIVEL",niv                      |
| 162 | setItem   | zsubsesion,znodo,"","PESOW",peso                     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                           |
| --- | -------------------------------------------------------------- |
| 9   | if ((ztipopersist==null)&#124;&#124;(ztipopersist.equals(""))) |
| 18  | if (ztipopersist.equals("wiz1"))                               |
| 63  | else if (ztipopersist.equals("wiz2"))                          |
| 67  | if (familia=="ALL" &#124;&#124; familia.equals("ALL"))         |
| 88  | else if (ztipopersist.equals("wiz3"))                          |
| 103 | else if (ztipopersist.equals("wiz4"))                          |
| 118 | else if (ztipopersist.equals("wiz5"))                          |
| 131 | else if (ztipopersist.equals("wiz6"))                          |
| 149 | else if (ztipopersist.equals("wiz7"))                          |
| 155 | if ((peso==null)&#124;&#124;(peso.equals(""))) peso="100";     |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/persist.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
