# shco_gen_label_val

Identificador: `shco_g0/shco_gen_label_val.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave            | Texto                        | Ámbito | Diccionario                                                                         |
| ---------------- | ---------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Label.lbBack     | Anterior                     | BASE   | [translations/shco_g0_es.properties:L41](../../referencias/literales/shco_g0_es.md) |
| Label.lbCab      | Cabecera                     | BASE   | [translations/shco_g0_es.properties:L42](../../referencias/literales/shco_g0_es.md) |
| Label.lbClean    | Limpiar                      | BASE   | [translations/shco_g0_es.properties:L43](../../referencias/literales/shco_g0_es.md) |
| Label.lbDel      | Borrar                       | BASE   | [translations/shco_g0_es.properties:L44](../../referencias/literales/shco_g0_es.md) |
| Label.lbEdit     | Editar                       | BASE   | [translations/shco_g0_es.properties:L45](../../referencias/literales/shco_g0_es.md) |
| Label.lbHelp     | Ayuda                        | BASE   | [translations/shco_g0_es.properties:L46](../../referencias/literales/shco_g0_es.md) |
| Label.lbInsert   | Guardar                      | BASE   | [translations/shco_g0_es.properties:L47](../../referencias/literales/shco_g0_es.md) |
| Label.lbList     | Seleccionar                  | BASE   | [translations/shco_g0_es.properties:L48](../../referencias/literales/shco_g0_es.md) |
| Label.lbNext     | Siguiente                    | BASE   | [translations/shco_g0_es.properties:L49](../../referencias/literales/shco_g0_es.md) |
| Label.lbNoHelp   | Ayuda no disponible          | BASE   | [translations/shco_g0_es.properties:L50](../../referencias/literales/shco_g0_es.md) |
| Label.lbOrd      | Ordena                       | BASE   | [translations/shco_g0_es.properties:L51](../../referencias/literales/shco_g0_es.md) |
| Label.lbPrev     | Anterior                     | BASE   | [translations/shco_g0_es.properties:L52](../../referencias/literales/shco_g0_es.md) |
| Label.lbRefresh  | Actualizar                   | BASE   | [translations/shco_g0_es.properties:L53](../../referencias/literales/shco_g0_es.md) |
| Label.lbRem      | Ir a                         | BASE   | [translations/shco_g0_es.properties:L54](../../referencias/literales/shco_g0_es.md) |
| Label.lbSend     | Enviar                       | BASE   | [translations/shco_g0_es.properties:L55](../../referencias/literales/shco_g0_es.md) |
| Label.lbTitError | Información sobre el proceso | BASE   | [translations/shco_g0_es.properties:L56](../../referencias/literales/shco_g0_es.md) |
| Label.lbWrite    | Introducir                   | BASE   | [translations/shco_g0_es.properties:L57](../../referencias/literales/shco_g0_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_label_val.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_label_val.jsp) | `8a5fd219ad73550061ed940acdf302e60a97d5db8d37ec25574e4b5617e9b8ed` |     37 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_label_val.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_label_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                         | Resolución estática parcial                              |
| --- | ------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| 18  | zSHCOLBCLEAN_val    | new String(Tran_shco_g0.getProperty("Label.lbClean"))    | new String(Tran_shco_g0.getProperty("Label.lbClean"))    |
| 19  | zSHCOLBDEL_val      | new String(Tran_shco_g0.getProperty("Label.lbDel"))      | new String(Tran_shco_g0.getProperty("Label.lbDel"))      |
| 20  | zSHCOLBEDIT_val     | new String(Tran_shco_g0.getProperty("Label.lbEdit"))     | new String(Tran_shco_g0.getProperty("Label.lbEdit"))     |
| 21  | zSHCOLBINSERT_val   | new String(Tran_shco_g0.getProperty("Label.lbInsert"))   | new String(Tran_shco_g0.getProperty("Label.lbInsert"))   |
| 22  | zSHCOLBLIST_val     | new String(Tran_shco_g0.getProperty("Label.lbList"))     | new String(Tran_shco_g0.getProperty("Label.lbList"))     |
| 23  | zSHCOLBNEXT_val     | new String(Tran_shco_g0.getProperty("Label.lbNext"))     | new String(Tran_shco_g0.getProperty("Label.lbNext"))     |
| 24  | zSHCOLBORD_val      | new String(Tran_shco_g0.getProperty("Label.lbOrd"))      | new String(Tran_shco_g0.getProperty("Label.lbOrd"))      |
| 25  | zSHCOLBPREV_val     | new String(Tran_shco_g0.getProperty("Label.lbPrev"))     | new String(Tran_shco_g0.getProperty("Label.lbPrev"))     |
| 26  | zSHCOLBREFRESH_val  | new String(Tran_shco_g0.getProperty("Label.lbRefresh"))  | new String(Tran_shco_g0.getProperty("Label.lbRefresh"))  |
| 27  | zSHCOLBSEND_val     | new String(Tran_shco_g0.getProperty("Label.lbSend"))     | new String(Tran_shco_g0.getProperty("Label.lbSend"))     |
| 28  | zSHCOLBWRITE_val    | new String(Tran_shco_g0.getProperty("Label.lbWrite"))    | new String(Tran_shco_g0.getProperty("Label.lbWrite"))    |
| 29  | zSHCOLBNOHELP_val   | new String(Tran_shco_g0.getProperty("Label.lbNoHelp"))   | new String(Tran_shco_g0.getProperty("Label.lbNoHelp"))   |
| 30  | zSHCOLBHELP_val     | new String(Tran_shco_g0.getProperty("Label.lbHelp"))     | new String(Tran_shco_g0.getProperty("Label.lbHelp"))     |
| 31  | zSHCOLBCAB_val      | new String(Tran_shco_g0.getProperty("Label.lbCab"))      | new String(Tran_shco_g0.getProperty("Label.lbCab"))      |
| 32  | zSHCOLBTITERROR_val | new String(Tran_shco_g0.getProperty("Label.lbTitError")) | new String(Tran_shco_g0.getProperty("Label.lbTitError")) |
| 33  | zSHCOLBBACK_val     | new String(Tran_shco_g0.getProperty("Label.lbBack"))     | new String(Tran_shco_g0.getProperty("Label.lbBack"))     |
| 34  | zSHCO_LB_REM_val    | new String(Tran_shco_g0.getProperty("Label.lbRem"))      | new String(Tran_shco_g0.getProperty("Label.lbRem"))      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 10  | if (Tran_shco_g0 == null){           |
| 14  | if ( Tran_shco_g0.isEmpty() ){       |

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

- Confirmar exposición y permisos de `shco_g0/shco_gen_label_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
