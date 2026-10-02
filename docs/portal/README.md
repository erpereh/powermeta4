# Portal de empleado y responsable: entrada para implementar

## Objetivo que debe conservar la IA

Clonar **las funcionalidades del portal corporativo disponibles para CYC, IBER y COLL**, tanto para empleado como para responsable, dentro de powermeta4. El destino es una nueva sección **`/portal`**, integrada en la sesión existente y la sociedad activa resuelta por el servidor. La interfaz se adapta al diseño de powermeta4 y a sus componentes beUI; los JSP, frames y estilos antiguos sirven como evidencia funcional.

Esta entrega es una especificación documental. No crea `/portal`, servicios, permisos, persistencia ni operaciones ERP nuevas. El alcance verificable es la funcionalidad identificable en la copia local y los manuales; las reglas del servidor y la exposición real tienen pendientes trazables. La existencia de un archivo no garantiza que esté publicado para una sociedad o perfil.

## Orden de lectura para cada implementación

1. Leer las fuentes de verdad del proyecto en el orden de [AGENTS.md](../../AGENTS.md), [DESIGN.md](../../DESIGN.md), [todo](../../spec/todo.md), [changelog](../../spec/changelog.md), [README del proyecto](../../README.md), [package.json](../../package.json) y [components.json](../../components.json).
2. Leer esta entrada, la [metodología](referencias/metodologia.md), la [integración](implementacion/integracion-powermeta4.md) y el [mapa de destinos](implementacion/mapa-destino.md).
3. Elegir el flujo en las guías de [empleado](empleado/flujos.md), [responsable](responsable/flujos.md) o [transversal](transversal/flujos.md). Consultar su índice de dominio y las fichas de pantalla, formulario, controlador, cuerpo y scripts enlazadas.
4. Contrastar en la [matriz](inventario/README.md) las versiones BASE/CYC/IBER/COLL, hashes y dependencias. Leer las diferencias en cada ficha y la [política de selección de fuentes](inventario/fuentes-y-duplicados.md).
5. Revisar [pendientes](implementacion/pendientes.md), [secuencia de trabajo](implementacion/secuencia.md), [manuales](referencias/manuales.md) y [criterios de aceptación](implementacion/aceptacion.md). Un pendiente no se resuelve inventando una regla, catálogo o endpoint.

## Árbol y responsabilidades

```text
docs/portal/
├── README.md                 ← entregar esta entrada a la IA
├── inventario/               ← cobertura, matrices, fuentes, hashes, dependencias
├── transversal/
│   ├── flujos.md             ← sesión, menús, búsqueda, favoritos, tareas, informes
│   ├── contratos.md          ← runtime Meta4 y estados de solicitud
│   ├── navegacion/           ← fichas de acceso y estructura del portal
│   ├── componentes/          ← controles y herramientas de plataforma
│   ├── organizacion/         ← piezas compartidas de organigrama
│   ├── filtros/              ← filtros reutilizados
│   └── dependencias/         ← scripts/includes alcanzados por los flujos
├── empleado/
│   ├── flujos.md
│   ├── organizacion/
│   ├── datos/
│   ├── retribucion/
│   ├── talento/
│   ├── tiempo/
│   └── conocimiento/
├── responsable/
│   ├── flujos.md
│   ├── tareas/
│   ├── equipo/
│   ├── retribucion/
│   ├── talento/
│   └── tiempo/
├── implementacion/           ← destinos, integración, fases, aceptación, pendientes
└── referencias/              ← manuales, metodología, fuentes y literales españoles
```

Cada dominio tiene `README.md` como índice de todas sus piezas. Una ficha técnica por ruta lógica reúne las variantes españolas y compartidas, con una sección por contenido diferente. Las guías funcionales explican el recorrido común una sola vez; las diferencias concretas viven junto a sus evidencias. Los controladores y fragmentos no implican rutas públicas nuevas.

## Dónde buscar cada funcionalidad

| Necesidad                                                                           | Punto de entrada                                                                                                             |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Sesión, sociedad, cambio empleado/responsable, menú e inicio                        | [Transversal](transversal/flujos.md) y [navegación](transversal/navegacion/README.md)                                        |
| Directorio, quién es quién y organigramas                                           | [Organización del empleado](empleado/organizacion/README.md) y [componentes compartidos](transversal/organizacion/README.md) |
| Datos personales, contacto, teletrabajo, currículo, IRPF, dependientes y documentos | [Datos del empleado](empleado/datos/README.md)                                                                               |
| Bancos, nóminas, certificados, préstamos, beneficios y proyecciones                 | [Retribución del empleado](empleado/retribucion/README.md)                                                                   |
| Puesto, formación, evaluación, carrera, entrevistas y movilidad                     | [Talento del empleado](empleado/talento/README.md)                                                                           |
| Vacaciones, festivos, ausencias, GTA y reloj virtual                                | [Tiempo del empleado](empleado/tiempo/README.md)                                                                             |
| Conocimiento y enlaces KnowNet                                                      | [Conocimiento](empleado/conocimiento/README.md)                                                                              |
| Tareas, delegaciones y población del responsable                                    | [Tareas del responsable](responsable/tareas/README.md)                                                                       |
| Consulta de equipo y validaciones personales/profesionales                          | [Equipo](responsable/equipo/README.md)                                                                                       |
| Salarios, presupuesto, aprobaciones y revisión salarial                             | [Retribución del responsable](responsable/retribucion/README.md)                                                             |
| Evaluación, objetivos, formación, carrera, vacantes y modificaciones profesionales  | [Talento del responsable](responsable/talento/README.md)                                                                     |
| Aprobación de vacaciones, bolsas, ausencias y planificación                         | [Tiempo del responsable](responsable/tiempo/README.md)                                                                       |
| Formularios genéricos, métodos internos e informes                                  | [Contratos comunes](transversal/contratos.md) y [filtros](transversal/filtros/README.md)                                     |
| Copias históricas, traducciones, recursos y otras generaciones                      | [Inventario](inventario/README.md) y [otros recursos](inventario/otros-recursos.md)                                          |

## Reglas de integración que no deben perderse

- Resolver sesión, sociedad, identidad del empleado y alcance del responsable en servidor. El `activeCompanyId` es el workspace local; su correspondencia operativa con Meta4 se verifica mediante el contexto existente. Un selector del navegador no autoriza acceso a otra persona o sociedad.
- Mantener el chat separado: el modelo no recibe datos ni resultados del portal/Meta4. No añadir herramientas al chat para implementar estos flujos.
- Reutilizar los servicios de consulta y componentes existentes cuando sus contratos y permisos sean compatibles. No reutilizar sin más una herramienta administrativa para dar acceso de autoservicio a nóminas o datos personales.
- Las escrituras originales se documentan como capacidades a resolver. Los límites actuales de AGENTS.md solo autorizan la escritura ERP del alta de personas ya implementada. Las nuevas solicitudes, aprobaciones, delegaciones y modificaciones requieren contrato y alcance aprobados antes de ejecutarse; PeopleNet permanece con consultas `SELECT`.
- No traducir `m4:exec`, objetos o métodos internos a endpoints SOAP imaginarios. No convertir tablas temporales Meta4 en tablas SQLite sin una decisión específica.
- Conservar las fuentes originales y los cambios existentes. `clon_portal/` está ignorado por Git; por eso las fichas incorporan evidencia textual y hashes, además de enlaces locales. No copiar fotos, nóminas, datos personales, hosts privados, contraseñas o claves a esta documentación.

## Plantilla para pedir una implementación

```text
Lee docs/portal/README.md y las fuentes de verdad que indica.
Implementa el flujo [nombre] para [empleado/responsable] en [destino /portal/...].
Sociedades que debe cubrir: [CYC, IBER, COLL].
Lee la guía funcional, el índice del dominio, la fila de matriz y las fichas
de pantallas, formularios, controladores y dependencias de ese flujo.
Usa la sesión existente y el contexto operativo resuelto en servidor.
Adapta los controles al diseño powermeta4/beUI preservando comportamiento.
Distingue hechos comprobados, propuestas y pendientes del servidor.
Consulta antes de cerrar una ambigüedad de identidad, permisos, reglas o contrato
que afecte al resultado; continúa el trabajo independiente ya autorizado.
No inventes datos, APIs ni operaciones ERP. Respeta los límites de AGENTS.md.
Entrega el recorrido completo y los criterios de aceptación del flujo elegido,
con validaciones ejecutadas y pendientes precisos. Actualiza todo y changelog.
```

Para valorar cuánto puede implementarse sin consultar el portal real, comenzar por [pendientes](implementacion/pendientes.md). La cobertura completa de fuentes disponibles no equivale a verificación del comportamiento del servidor.

La [verificación de esta entrega](referencias/verificacion.md) registra cobertura, enlaces, conservación de fuentes y resultados reales de los checks del repositorio.
