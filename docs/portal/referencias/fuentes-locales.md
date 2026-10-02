# Fuentes locales y localizadores

## Copia original

Raíz: [clon_portal/portal](../../../clon_portal/portal/). La carpeta está ignorada por Git. Los enlaces a esta copia permiten volver al código en este workspace; las fichas incorporan identificadores, contratos y localizadores para que la especificación sea útil cuando la copia no esté distribuida.

| Fuente                                                                                             | Uso                                                                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [index.html](../../../clon_portal/portal/index.html)                                               | Entrada y redirección de login                                         |
| [sgco_portal.jsp](../../../clon_portal/portal/sse_generico/sgco_portal.jsp)                        | Contexto, menú y favoritos; métodos/variables en L69–93                |
| [web.xml](../../../clon_portal/portal/WEB-INF/web.xml)                                             | Configuración de filtros/servlets; personalización L107–113 y L255–257 |
| [m4custom](../../../clon_portal/portal/m4custom/)                                                  | Variantes CYC/IBER/COLL                                                |
| [Menú empleado español](../../../clon_portal/portal/libreria/menu_sse_esp.js)                      | Nombres/rutas de menú estático auxiliar                                |
| [Menú responsable español](../../../clon_portal/portal/libreria/menu_mss_esp.js)                   | Nombres/rutas auxiliares; no publicación efectiva                      |
| [Actualización genérica](../../../clon_portal/portal/sse_generico/espanol/generico_actualizar.jsp) | Parámetros, `GESTION_ARG` y retorno; ficha de todas sus variantes      |
| [Tiempo clásico](../../../clon_portal/portal/sse_g4/espanol/sse_g4_p2.jsp)                         | Solicitud, bolsa, validación visible y estados                         |
| [Tiempo móvil](../../../clon_portal/portal/mobile_func/js/meta4.mobile.my_work_time.js)            | Modos y llamadas `M4Request`                                           |

## Catálogos documentales

- [Matriz por perfil/dominio](../inventario/README.md): entrada a todas las fichas.
- [Duplicados idénticos](../inventario/duplicados.md): SHA-256 y archivos equivalentes.
- [Árbol original](../inventario/arbol-original.md): todos los conjuntos contabilizados.
- [Dependencias](../inventario/dependencias.md): método de resolución y referencias por ficha.
- [Literales españoles](literales/README.md): claves, valores y variantes con líneas originales.
- [Manuales consultados](manuales.md): páginas físicas de referencias funcionales/técnicas.

Las huellas por dominio enlazadas desde el inventario registran hash y número de líneas de cada fuente analizada. Si cambia un original, sus localizadores deben volver a comprobarse y su ficha actualizarse; el hash permite detectarlo.
