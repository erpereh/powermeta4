# Selección de fuentes, personalización y duplicados

## Qué significa la estructura

Las familias `sse_g0`–`sse_g5` contienen autoservicio empleado; `mss_g1`–`mss_g4` y `mss_generico`, responsable; `sse_generico`, estructura compartida. Los idiomas envuelven cuerpos compartidos o contienen pantallas completas. Un include es parte de la pantalla y su ubicación importa.

`m4custom/CYC`, `m4custom/IBER` y `m4custom/COLL` son personalizaciones. El [manual de administración, PDF 65–74](../referencias/manuales.md#personalización-por-sociedad), explica selección por nodo del árbol de ejecución, herencia desde nodos padres, tratamiento de includes y propiedades acumuladas/sobrescritas. Un nombre de carpeta no demuestra la equivalencia con el código de sociedad autorizado de powermeta4 (P09).

La copia local [web.xml](../../../clon_portal/portal/WEB-INF/web.xml) declara `M4RedirectFilter` con `enable=true` en L107–113 y mapeo `/*` en L255–257. Esto acredita configuración de personalización presente en el material, pero no exporta el NAE ni garantiza cuál variante ejecuta hoy el servidor. `CheckSecurity` participa en resolución de JSP y seguridad de tareas; el filtro también personaliza otros recursos.

`m4trans` puede contener generación por sustitución de literales, coexistiendo con personalizaciones; el manual lo explica en PDF 74. `WEB-INF` contiene runtime/configuración y Java compilado/generado. No interpretar cada copia generada como otra funcionalidad del usuario.

## Regla de selección al implementar

1. Localizar la entrada efectiva del menú filtrado y su perfil/sociedad.
2. Confirmar NAE y herencia; localizar la variante de esa misma ruta.
3. Seguir includes físicamente y comprobar redirecciones/recursos contextuales; no mezclar cuerpos estándar y personalizados por intuición.
4. Usar hashes y contenido para identificar coincidencias, diferencias y dependencias. Las fichas conservan todos los contenidos distintos.
5. Contrastar el comportamiento con manual y ejecución. Si no se conoce exposición/orden, mantener candidatos con P01/P06/P09.

La documentación no declara una versión «activa» sin evidencia del menú/contexto. La carpeta base sigue siendo fallback/candidato de producto; no invalida una personalización ni se elimina.

## Copias idénticas y variantes

El [catálogo de duplicados](duplicados.md) agrupa solo SHA-256 idénticos. Las [matrices](README.md) enumeran versiones de cada ruta y las huellas por dominio permiten contrastar todos sus archivos. La agrupación español/cuerpo común mantiene cada archivo identificado: no afirma que wrapper y cuerpo sean intercambiables.

Ejemplos comprobados: las cuatro copias españolas de `sse_g4_p2.jsp` coinciden; en `sgco_portal.jsp` y `sse_g1_p1.jsp` hay diferencias de contenido entre base y CYC/otras personalizaciones. Algunas copias IBER/COLL coinciden entre sí. No extender esa equivalencia a todos sus ficheros.

Los nombres `old`, `BACK`, `bckp`, fechas y «prueba» son indicios para clasificación. Conservan ficha, hash y exposición pendiente. Un backup puede seguir enlazado; una copia reciente puede no publicarse. No borrar, renombrar ni mover originales en esta entrega.

## Versiones del producto

`VERSION.MF`, cabeceras, librerías, mobile y pop2 muestran épocas/componentes distintos. No usar un único manifiesto para atribuir versión global ni precedencia a todo el despliegue. El catálogo completo de primer nivel está en [árbol original](arbol-original.md).
