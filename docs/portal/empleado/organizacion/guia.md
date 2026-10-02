# Directorio y organización

## Propósito, entradas y fuentes

Consultar la organización, localizar personas y unidades, ver datos de contacto y navegar por organigramas. Las fuentes principales son `sse_g0/ssco_g0_who_is_who.jsp`, `ssco_g0_who_is_who_empl.jsp`, motores `ssco_engine_who.jsp`/`ssco_engine_org_chart_dyn.jsp`, `ssco_g0_org_chart_dyn.jsp` y `sse_g0_organigramas.jsp`, localizables en el [índice](README.md). Las piezas de `tcorgchart` están en el [índice transversal](../../transversal/organizacion/README.md).

La entrada puede proceder del menú, de una búsqueda o de una UO seleccionada. El destino propuesto es `/portal/organizacion`. No se confirma en la copia qué organigrama está publicado para cada sociedad (P01). Las rutas `old` y fechadas tienen ficha distinta; no se selecciona una por su antigüedad.

## Pantalla y recorrido

El estándar del [manual de usuario, PDF 13–14](../../referencias/manuales.md#organización-e-inicio) presenta árbol de UO, búsqueda de empleado/unidad y dossier. Permite navegar desde raíz o una UO, consultar responsables y empleados, ordenar alfabéticamente, enfocar una unidad como raíz, abrir el dossier de la persona, contactar por correo y añadir contactos. Los responsables recuperados en ese estándar son de tipo 01; la configuración local necesita confirmación.

Las fuentes locales añaden motores, páginas de directorio y distintos organigramas. Para implementar, seguir sus includes y scripts: el árbol, la lista y el dossier no son tres bases de datos independientes. La selección de UO/persona es parte del contexto del recorrido y debe conservarse al volver del detalle.

| Grupo de datos                     | Tipo de UI                     | Origen y dependencia                                          |
| ---------------------------------- | ------------------------------ | ------------------------------------------------------------- |
| Criterio de persona/unidad         | Texto y selector de resultados | Catálogo/población autorizada; filtros técnicos en las fichas |
| Unidad y jerarquía                 | Árbol/lista navegable          | ID, padre, hijos y modo de organigrama del servidor           |
| Persona y responsable              | Enlace a dossier               | Identidad ERP, tipo de responsabilidad y relación con UO      |
| Teléfono, correo y otros contactos | Texto/acción de contacto       | Campo publicado por el dossier; ocultar ausentes              |
| Contactos propios                  | Acción original del directorio | Persistencia y permisos P04; distinta de favoritos de chat    |

Los nombres técnicos, solicitudes al motor y campos recuperados figuran en cada ficha. No completar datos que no devuelve el servidor ni extrapolar los campos del dossier CYC al directorio de todas las sociedades.

## Adaptación, estados y aceptación

Presentar búsqueda y resultados adaptables, árbol con navegación por teclado y dossier con retorno al resultado. Tratar búsqueda sin coincidencias, UO sin empleados/hijos, foto/contacto ausente, sesión expirada y población no autorizada. Expansión y enlace de navegación deben ser controles separados.

Aceptar cuando se pueda localizar una UO/persona, abrir y volver al dossier, navegar por el árbol y mostrar campos autorizados sin ampliar la población. La reutilización del listado actual de personas es posible tras confirmar el permiso de directorio; no confiere acceso a nóminas ni currículo completo (P03). Verificar diferencias BASE/CYC/IBER/COLL y cerrar P01/P02/P03/P05/P06 del organigrama elegido.
