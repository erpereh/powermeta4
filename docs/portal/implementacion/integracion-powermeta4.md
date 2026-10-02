# Integración con powermeta4

## Ubicación y sesión

Propuesta: páginas privadas bajo `src/app/(app)/portal/`, con URL pública `/portal`. Reutilizar el layout y la sidebar; incorporar una entrada «Portal» sin controles duplicados. Las rutas enumeradas en el [mapa](mapa-destino.md) son propuestas para próximas tareas, no archivos creados por esta entrega.

La sesión se valida con [`requireAuthContext`](../../../src/lib/auth/session.ts). El contexto Meta4 se obtiene mediante [`getMeta4OperationalContext`](../../../src/lib/meta4/operational-context.ts): comprueba modo Meta4, perfil, sociedades disponibles y reconciliación con el workspace; devuelve sociedad, usuario, empresa local y sesión operativa **solo en servidor**. El modo debug no es una conexión operativa al portal.

El workspace autenticado es una entidad local. No convertir sus empresas en sociedades ERP nuevas. La sociedad no viene de un filtro del navegador. En cambio de contexto, peticiones concurrentes o respuestas tardías, preservar el contexto capturado y evitar mostrar datos de otra sociedad.

Faltan dos autorizaciones distintas: vincular la cuenta al empleado propio y determinar alcance del responsable/delegado. La disponibilidad de sociedad y `canUseMeta4` no acreditan esos permisos (P03). Tampoco lo hacen `M4Menu.hasMss`, una matrícula en la URL o el nombre de la carpeta de personalización.

## Capacidades que ya existen

| Capacidad                                  | Fuente actual                                                                                                                      | Reutilización y limitación                                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Autenticación, cookie opaca y sesión Meta4 | [Auth](../../../src/lib/auth/session.ts) y [contexto operativo](../../../src/lib/meta4/operational-context.ts)                     | Usar server-side; no copiar JSESSIONID al navegador                                                                             |
| Sociedad operativa y workspace             | [Contexto](../../../src/lib/meta4/operational-context.ts) y [reconciliación](../../../src/lib/meta4/workspace-scope.ts)            | No sustituye vínculo empleado ni seguridad jerárquica                                                                           |
| Lista de personas de una sociedad          | [Servicio Meta4](../../../src/lib/meta4/users/service.ts) y [SELECT PeopleNet](../../../src/lib/peoplenet/employees.ts)            | Puede apoyar directorio; revisar campos y visibilidad, no autoriza cualquier operación sobre la lista                           |
| Dossier de persona                         | [Acción de detalle](../../../src/app/actions/meta4-employee-detail.ts) y [consulta](../../../src/lib/peoplenet/employee-detail.ts) | Comprueba pertenencia a empresa; ajustar al permiso de cada apartado de autoservicio                                            |
| Recibos de nómina                          | [Acción](../../../src/app/actions/payroll-receipt.ts) y [servicio](../../../src/lib/peoplenet/payroll-receipt.ts)                  | Valida matrícula, fechas y moneda; admite pagas actuales. Retroactivas no disponibles; necesita autorización de empleado propio |
| Conexión SQL Server                        | [Cliente PeopleNet](../../../src/lib/peoplenet/client.ts)                                                                          | Server-only, configuración del entorno, consultas parametrizadas `SELECT`                                                       |
| Alta de personas                           | [Documentación actual](../../alta-obligatorios-y-diagnostico.md)                                                                   | Única excepción ERP de escritura aprobada; no usar importador de alta para solicitudes del portal                               |
| Catálogos y validaciones del alta          | [Área de alta](../../../src/lib/meta4/hire/)                                                                                       | Reutilizar una regla solo tras confirmar mismo significado, fecha de vigencia y sociedad                                        |
| Controles UI                               | [Fachada de sistema](../../../src/components/system/index.ts)                                                                      | Preferir componentes existentes; respetar los límites y tokens de DESIGN.md                                                     |
| Navegación de módulos operativos           | [Registro tipado](../../../src/lib/tools/registry.ts)                                                                              | Evitar un segundo registro de acciones ERP. Definir la relación del Portal con el registro sin mezclar sus favoritos con chats  |

No se afirma que estas capacidades reproduzcan las tablas, objetos ni todos los campos del portal original. Comparar la ficha correspondiente antes de reutilizarlas.

## Presentación y comportamiento

Usar `PageHeader`, `Tabs`, `Table`, `Input`, `Combobox`, `Checkbox`, `Button`, `Modal`/`Drawer`, `EmptyState` y los componentes que realmente exporta la fachada. Mantener Inter, tokens semánticos, branding `PowermetaLogo`, foco visible, nombres accesibles y diseño adaptable. Separar navegación y expansión. Reemplazar frames/popups por navegación o diálogo conservando la función y retorno.

Un formulario debe conservar campos condicionales, catálogos, solo lectura, errores por campo y el borrador tras un fallo. El estado de carga/error/vacío no se simula con datos ERP inventados. Las selecciones de aprobación tienen resultado claro por petición; las fases multinivel no se presentan como una aprobación definitiva sin confirmación.

## Servicios, persistencia y seguridad de datos

Mantener secretos, refreshSessionId y JSESSIONID en servidor y cifrado existente con DPAPI CurrentUser. No almacenar datos sensibles o sesión en Zustand/localStorage/sessionStorage. No ejecutar SOAP, DPAPI o SQLite desde proxy/middleware. Los Route Handlers futuros que los necesiten usan Node.js y autorización server-side.

La fuente de verdad del portal es el sistema ERP/Meta4 que soporte cada flujo, cuando se verifique. No introducir un CRUD SQLite de usuarios ERP ni replicar automáticamente peticiones, nóminas, currículo o documentos. Si se acuerda una capacidad local nueva, definir su modelo y retención de manera específica.

El chat sigue enviando exclusivamente la rama textual de conversación a la configuración OpenAI-compatible global. No importar datos del portal, funciones SOAP ni resultados del usuario como contexto del modelo.

## Condición para dar un apartado por implementado

Completar el recorrido definido en su guía y todas sus piezas dependientes, probar las variantes aplicables y cerrar los pendientes de identidad, reglas y contratos necesarios. No llamar «completo» a un formulario que siempre responde éxito o que solo reproduce la tabla de un JSP sin sus estados. Véase [aceptación](aceptacion.md).
