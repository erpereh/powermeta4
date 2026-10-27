# Integración técnica con powermeta4

Estado de implementación y comandos: [IMPLEMENTATION](IMPLEMENTATION.md).
La decisión posterior de expedientes persistidos sustituye el diseño efímero.

## 1. Arquitectura existente comprobada

| Pieza                 | Código existente                                                    | Uso acreditado y límite                                                                                                                            |
| --------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Runtime web           | `package.json`, `next.config.ts`, `src/app/(app)`                   | Next.js 16.3, React 19, Node 24, TypeScript estricto. Páginas privadas dentro del shell actual.                                                    |
| Sesión                | `src/lib/auth/session.ts`, `src/lib/auth/server.ts`                 | Cookie opaca HttpOnly; SOAP de login/renovación y DPAPI CurrentUser en servidor. Debug no concede sesión Meta4.                                    |
| Alcance               | `src/lib/meta4/operational-context.ts`                              | `getMeta4OperationalContext(authSession)` devuelve sociedad/companyId desde workspace validado, además de datos secretos que no se serializan.     |
| SQL Server            | `src/lib/peoplenet/client.ts`                                       | Pool `mssql` compartido; `PEOPLENET_DB_*`, conexión 15 s y consulta 30 s. No se han inspeccionado credenciales ni privilegios reales de la cuenta. |
| Guarda SQL            | `src/lib/portal/peoplenet/query.ts`                                 | `assertReadOnlySql` y `runPortalSelect`; lecturas parametrizadas. La guarda sintáctica no sustituye los permisos reales de la BD.                  |
| Resultados de nómina  | `src/lib/peoplenet/payroll-reports.ts`                              | Lista `M4CSP_INF_RESULT`, catálogo `M4CSP_X_INFORMES`, BLOB en `M4CSP_INF_RESULT1`; paga en `M4SCO_HT_PAYS`. Todas las consultas filtran sociedad. |
| Contrato de ejecución | `src/types/payroll-report.ts`, `src/lib/payroll-reports/run-key.ts` | `PayrollReportRunKey`: reportId/runAt/accruedOn/payFrequency; validación existente. Revalidar periodo y tipo para el nuevo uso.                    |
| Decodificación        | `src/lib/payroll-reports/result-data.ts`                            | BLOB `~BLOBD\0\0`, texto Latin-1/tabuladores, cabeceras y filas originales; conserva columnas repetidas.                                           |
| Resumen actual        | `src/lib/payroll-reports/summary.ts`                                | Reproduce tabla de una plantilla, suma/cuenta campos. No es motor de conciliación ni agregador válido de porcentajes.                              |
| Descarga existente    | `src/app/api/reports/payroll-results/export/route.ts`               | Autenticación, Node.js, relectura por sociedad y Excel en memoria con `no-store`. Patrón reutilizable.                                             |
| Registro y búsqueda   | `src/lib/tools/registry.ts`                                         | Acciones ERP en Inicio; standalone en sidebar. No añadir arrays paralelos de navegación.                                                           |
| Presentación          | `src/components/system`, `DESIGN.md`                                | Fachada beUI, `ToolsPageHeader`, Table, Tabs, FileUpload, Callout, Drawer/Modal y tokens semánticos.                                               |
| Persistencia          | `src/server/database`, `src/stores/workspace-store.ts`              | SQLite de producto y snapshot global temporal. No almacenar expedientes de nómina en el chat o un nuevo store global.                              |

El lector de resultados ya resuelve una parte sustancial del trabajo: no hace
falta simular clicks, abrir PeopleNet ni reconstruir todas las fórmulas de
nómina desde tablas de acumulados para obtener el informe normal.

**Hecho:** no se encontró en los servicios de aplicación revisados un contrato
para lanzar el informe normal o generar comisiones. Las referencias de
comisiones localizadas en HTML del portal no acreditan ese servicio de
escritorio. No se han realizado consultas reales a SQL Server/SOAP en esta
entrega ni se afirma que las columnas físicas nuevas estén verificadas.

## 2. Ubicación y separación de responsabilidades propuestas

Decisión expresa del usuario: **Cuadre de nómina**, herramienta standalone
**`cuadre-nomina`**, ruta **`/tools/cuadre-nomina`**, junto a Registro
Retributivo en la sidebar. Declararla únicamente en `STANDALONE_TOOLS` y
añadir su clave de icono semántico tipado al registro. No añadirla a
`TOOL_MODULES`, actividad ERP, recomendaciones ni búsqueda de Inicio.
La herramienta ya está declarada en el registro; no se incorpora a las acciones ERP.

Las nóminas se leen mediante SQL existente, decisión confirmada por el usuario.
Ser standalone describe navegación y autonomía de la utilidad, no un permiso
para elegir sociedad en el navegador ni para duplicar autenticación.
Usar `PageHeader` de la fachada, como una herramienta, sin breadcrumb de
Acciones/Módulo de `ToolsPageHeader`. Mantener shell y sidebar existentes.

Estructura implementada:

```text
src/app/(app)/tools/cuadre-nomina/page.tsx    página de servidor y contexto seguro
src/features/payroll-reconciliation/          componentes y estado local de presentación
src/lib/payroll-reconciliation/               contratos, perfiles y motor puro
src/lib/peoplenet/                            lectores server-only existentes/nuevos acreditados
src/app/api/payroll/reconciliation/           preview, analyze y export, Node.js
```

El motor recibe tablas normalizadas y reglas tipadas; no importa Next.js,
SQLite, sesiones, HTTP, `mssql`, SOAP ni variables de entorno. Los lectores y
exportadores son server-only; los parsers no ejecutan código del documento.
UI y Excel consumen el mismo resultado del motor, sin repetir fórmulas.

No cambiar `PayrollReportRunDetail` ni la semántica de Resultados de nómina.
Añadir una capa que use sus `headers`/`rows` originales. No reutilizar el
resumen de presentación como fuente, no sumar sus subtotales y no modificar
las funciones compartidas para hacer coincidir un nuevo control.

## 3. Operaciones HTTP futuras

Estas rutas son locales de powermeta4; no son servicios de Meta4.
`GET/POST/PATCH/DELETE /api/payroll/reconciliation` ofrecen listado, catálogo,
creación, apertura, actualización y borrado de expedientes. Ver contratos
vigentes y control de revisión optimista en IMPLEMENTATION.

| Operación                                  | Entrada                                                                      | Salida y comportamiento                                                                                                           |
| ------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Listado inicial de página                  | Sesión; periodo en URL no autoritativo.                                      | Ejecuciones desde lector existente y contratos de perfiles disponibles, sin tokens.                                               |
| `POST /api/payroll/reconciliation/preview` | Multipart con metadatos y archivos de categorías permitidas.                 | Huellas, periodo, perfil reconocido, hojas/bloques, recuentos, vista previa mínima y errores de estructura. Sin guardar ficheros. |
| `POST /api/payroll/reconciliation/analyze` | Multipart: archivo, ID/revisión, categoría, periodo y cobertura confirmados. | Incorporar/sustituir fuente, normalizar y recalcular las instantáneas guardadas; no releer SQL silenciosamente.                   |
| `POST /api/payroll/reconciliation/export`  | ID y revisión esperada.                                                      | Recalcular fuentes guardadas, comprobar huella/revisión y generar `.xlsx`; 409 si cambia el expediente o motor.                   |

`runtime = "nodejs"`, sesión validada en cada handler y respuestas `no-store`.
401 sin sesión; 403 sin contexto operacional Meta4; 400 entrada inválida;
413 límites excedidos; 409 evidencia modificada; 422 contrato/perfil no
interpretable; 503 dependencia SQL no disponible; 500 fallo inesperado con
diagnóstico saneado. La UI presenta mensajes funcionales, no SQL ni stack.

Mantener validación de origen para estas peticiones autenticadas con cookie:
comprobar Origin contra el origen de la aplicación cuando esté presente,
rechazar origen ajeno y no habilitar CORS. Las claves de ejecución no son
autorización; deben releerse siempre con sociedad del servidor.

El límite multipart de SPEC supera los 10 MB de clonado del proxy documentados
en este proyecto. En implementación, excluir **solo estas tres rutas** del
matcher que clona el cuerpo, siguiendo el precedente de Registro Retributivo,
y autenticar/limitar en cada handler antes de procesar datos. No aumentar el
límite global ni excluir todo `/api/payroll`. Probar paso real por proxy con
multipart mayor de 10 MB y rechazo de petición anónima.

El servidor guarda expedientes en SQLite, sin trabajos en segundo plano ni
originales en disco. Preview no persiste; analyze guarda entradas normalizadas
y recalcula. Los File del navegador solo viven durante la carga. El listado
permite retomar el resultado tras cerrar/reiniciar. No hay cola ni temporales.

## 4. SQL, perfiles e historial

Reutilizar el pool actual. La lectura de cabecera y BLOB ya existe; hacerla una
vez por clave y compartir datos entre controles. Para motivos futuros, agrupar
personas/ventana en consultas acreditadas y parametrizadas; evitar una consulta
por empleado y concepto. No admitir nombres de tabla, columna o sentencias
del navegador. No ejecutar código LN4 ni procedimientos de escritura.

Puntos de partida para el descubrimiento, **no equivalencias ya aprobadas**:

- `src/lib/portal/registry/sql/tiempo.ts` conoce ausencias
  `M4SCO_REAL_TM_PRD` y catálogo de incidencias. Sus filtros de año actual y
  matrícula propia no sirven directamente para cuadre histórico de una sociedad;
  no ampliar ese lector ni reutilizar peticiones pendientes como hechos.
- `src/lib/peoplenet/quinquenal.ts` y el diccionario contienen antigüedad y
  referencias de estructura/salario. Validar vigencias históricas y campo de
  antigüedad antes de usarlos para causas o aniversarios.
- `src/lib/portal/registry/sql/retribucion.ts` conoce préstamos y beneficios,
  pero no prueba que sean el mismo anticipo o fichero de Mercer de la reunión.
- `scripts/portal/meta4-dictionary.ts` y `resolver-tablas.ts` muestran cómo
  acreditar TI, campos, tablas y sentencias sin leer datos personales. No
  ejecutar sus extractores contra producción para este trabajo documental.

Los perfiles de importación son código tipado y versionado. Una firma de
cabeceras repetidas identifica además su ocurrencia/índice. Preservar celdas
fuente, formatos de matrícula, signos, unidades, meses y errores. ExcelJS
escribe el resultado; `xlsx` ya instalado permite leer BIFF `.xls`. No añadir
Excel COM al análisis ni modificar el writer del alta.

La migración 011 añade una tabla propia por empresa/sociedad con instantáneas
mínimas, fuentes normalizadas, parámetros, hallazgos y anotaciones. El esquema
pasa a 11. Los expedientes entran en backups y se conservan hasta borrado
explícito; las copias anteriores los mantienen. La actualización de nóminas es
explícita y las revisiones concurrentes obsoletas se rechazan con 409. Q15 queda
sustituida por esta decisión aprobada del usuario.

## 5. Seguridad, contexto y diseño

- Capturar `companyId` y sociedad al iniciar cada petición; compararlos con
  el contexto válido antes de entregar resultados. Descartar en cliente
  respuestas tardías tras cambio de workspace. No aceptar sociedad del fichero
  como autorización; filtrar entidades solo mediante correspondencias del servidor.
- No serializar `jSessionId`, refresh, perfiles DPAPI ni credenciales SQL.
  No persistir fuentes, resultados o notas en localStorage/sessionStorage,
  chat, telemetría o logs. Logs solo con etapa, código y recuentos no personales.
- Validar contenido/tamaño además de extensión; libros cifrados o corruptos
  fallan de forma controlada. No seguir enlaces del documento ni abrir rutas
  UNC suministradas por el navegador. Archivos y ZIP internos se leen con
  límites, sin extraer a rutas proporcionadas por el documento.
- No importar servicios de conciliación desde `/api/chat/run` ni enviar sus
  datos al endpoint `AI_*`. Ningún modelo ni proveedor externo participa en v1.
- Usar `PageHeader` y componentes de `@/components/system`, Inter y tokens
  actuales, estados con texto e icono, foco visible, controles separados y
  tablas con scroll contenido. Conservar shell, Sheet y trigger de sidebar.
- `workspaceStore` continúa siendo el único snapshot global. El estado efímero
  de formulario/resultados es local de esta feature, no un store global paralelo.

## 6. Comprobación de compatibilidad

La guía instalada `node_modules/next/dist/docs/01-app/02-guides/data-security.md`
respalda DAL server-only, DTO mínimos y comprobación de autorización en cada
operación. Antes de implementar, leer también las guías instaladas de Route
Handlers/Server Functions que correspondan a la versión del checkout.

Pruebas de regresión: Resultados de nómina y sus exportaciones conservan
valores y contrato; alta Excel COM, portal, sesión, workspace, backups y chat
mantienen su comportamiento. La nueva herramienta solo debe hacerse navegable
cuando exista una pantalla operativa con estados honestos y pase su aceptación.

## 7. Perfiles acreditados y alcance de los archivos

Los anexos SOURCES y CONTROL_CONTRACTS definen fuentes/bloques y selectores
por cabecera/ocurrencia. Preservar `PayrollReportRunDetail.headers/rows` y
añadir adaptadores propios; no cambiar la regla de cabeceras repetidas del
resumen actual para resolver el nuevo control de IRPF.

Los parsers separan fuente, snapshot ERP, cálculo y nota. `SourceManifest`
incluye versión de perfil, hoja/bloque, periodo efectivo, procedencia,
referencias de filas, diagnósticos y confirmación de cobertura. Perfiles
iniciales: Mercer, colectivo teletrabajo, carga comisiones, cuotas comité,
ausencias comidas, recarga, Eurest, aniversarios, PPSE embebido y gimnasio;
plantillas normalizadas separadas de excesos, anticipos y excepciones.

Los parámetros se guardan mediante PATCH; las excepciones se incorporan con
su plantilla y confirmación. Validarlas en servidor y añadirlas a la huella: una
anotación de revisión nunca sustituye un operando. Mismas entradas y versión
producen las mismas cifras. Los perfiles no ejecutan las fórmulas del libro.

Se propone 16 MiB por archivo y 32 MiB por petición para admitir S09 como
contenedor PPSE, leyendo solo esa hoja para ese control. El informe operativo
sigue siendo SQL; no mezclar sus copias Datos/2/3 con la ejecución elegida.
No incorporar Excel COM, Poppler ni scripts privados al runtime del producto:
se usaron solo para inspección documental. Conservar límites de celdas y ZIP,
la excepción específica del proxy y el reanálisis antes de exportar.
