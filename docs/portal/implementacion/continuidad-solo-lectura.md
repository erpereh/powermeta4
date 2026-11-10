# Continuidad de las consultas del portal

Primera sesión, 2026-11-10. Se conserva la rama actual. No se han ejecutado escrituras ERP, consultas corporativas, operaciones SOAP ni métodos LN4. La sesión DEBUG usa únicamente la autenticación SQLite existente; sus muestras no crean una sesión Meta4 ni una sociedad conectada. No se guarda información del portal.

## Matriz y estado real

La [matriz completa](matriz-solo-lectura.md) contiene las 192 funcionalidades registradas, con menú exacto, URL reproducible, persona, variante, escenario, controles, resultado esperado y estados independientes. Su segunda tabla detalla cada apartado, ítems, fuente, lector, alcance y carencia. Se regenera con `npm run portal:docs`, junto a [estado](estado.md), [dependencias](dependencias-servidor.md), [navegación](navegacion.md) y [contraste BASE/CYC/IBER/COLL](auditoria-fuentes.md).

El registro tiene 114 entradas con lector principal y 78 con dependencia principal. Hay 154 apartados tipados de consulta: 151 con lector preparado y 3 con dependencia. Estos números incluyen lectores anteriores, variantes de menú, formularios y destinos dinámicos. No equivalen a 114 integraciones nuevas ni a 151 integraciones validadas en la VM.

Se añade una capa de lectura con proveedores real y DEBUG separados. El resultado ficticio lleva `source: debug`, sin sociedad operativa. El proveedor real conserva errores y dependencias; nunca recurre a muestras. La activación exige conjuntamente sesión DEBUG válida, `NODE_ENV=development`, `POWERMETA4_DEBUG_AUTH=true` y contexto del portal explícitamente DEBUG.

El selector visible ofrece persona, variante y escenario. Solo usa `debugActor`, `debugVariant` y `debugScenario` en la URL. El aviso ficticio permanece aunque se oculten textos de desarrollo. Los enlaces del portal, pestañas, sidebar, búsqueda, árbol y selectores de ejercicio conservan esos parámetros. Los destinos dinámicos sin contrato siguen mostrando su dependencia.

Personas ficticias:

| Matrícula | Persona      | Relación                                      |
| --------- | ------------ | --------------------------------------------- |
| 90000     | Clara Martín | Responsable de Ana y Luis                     |
| 90001     | Ana López    | Equipo directo de Clara                       |
| 90002     | Luis García  | Equipo directo de Clara; responsable de Marta |
| 90003     | Marta Ruiz   | Equipo indirecto de Clara                     |
| 91001     | Eva Sánchez  | Ajena al equipo de Clara                      |

Escenarios: `full`, `partial`, `empty`, `error`. `partial` conserva apartados correctos, omite campos y provoca un fallo independiente cuando hay varios apartados. Las listas genéricas ofrecen hasta 90 registros, con ceros y fechas de distintos periodos. Un apartado sin ítems documentados no inventa una estructura para DEBUG.

## Funcionalidades de esta sesión

La tabla completa por URL está en la matriz. Estas son las ampliaciones y sus límites:

| Funcionalidad                         | Código preparado                                                                                                          | Prueba DEBUG                                                                    | Validación VM / límite                                                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Consultas genéricas                   | Texto sin acentos, mes, campo/valor exacto y persona autorizada; filtros combinados; enlaces de filas conservados         | Proveedor probado para los cuatro escenarios y autorización de equipo indirecto | Contrastar cada contrato; el mes usa fechas visibles y las ventanas SQL documentadas de GTA                                                          |
| Conocimientos                         | Niveles vigentes desde su sentencia y correspondencia del diccionario                                                     | Lista y casos parciales; presentación revisada                                  | Experiencias `SSE_H_HR_KNC_EXP` es virtual, sin SQL; no se infiere una tabla                                                                         |
| Preferencias                          | Peticiones pendientes separadas de preferencias registradas del contrato vigente                                          | Muestras y filtros por apartado                                                 | Verificar campos físicos, catálogos y restricciones del original                                                                                     |
| Objetivos del empleado                | Objetivos registrados vigentes y peticiones pendientes por separado; valores almacenados, rol ordinal y nivel como código | Muestras con ceros, fechas y ausentes                                           | No recalcula notas ni inventa escalas; criterios, asignaciones y seguimiento virtuales siguen pendientes                                             |
| Hoja de presencia                     | Días calculados, horas y códigos de estado/severidad almacenados                                                          | Tabla revisada en cuatro anchuras                                               | Falta representación mensual original, texto de alertas, contadores y reglas de nodos virtuales; no se recalcúla GTA                                 |
| Nómina propia                         | Actual, retroactiva y combinada; rango; descarga PDF/Excel con lector común                                               | Modos y muestra completamente inventada                                         | Validación de sus tres modos con recibos reales pendiente; identidad siempre del servidor                                                            |
| Beneficios                            | Opciones elegidas, cobertura, precio y aportación ya guardados; histórico existente conservado                            | Muestras por campos documentados                                                | Reglas de elegibilidad, coste calculado y familiares necesitan LN4; simulación bloqueada                                                             |
| Préstamos                             | Lector existente y controles de simulación conservados como consulta separada de escrituras                               | Validación local de campos; cálculo bloqueado                                   | No hay fórmula documentada suficiente; el diagnóstico incluye su objeto y reglas                                                                     |
| Directorio y organización             | Búsqueda, ficha pública, árbol y expansión con el mismo conjunto de personas                                              | Muestras sin SQL; escenario error y vacío                                       | No amplía el acceso a datos privados de otras personas; contratos originales conservados                                                             |
| Tareas e inicios                      | Muestras coherentes y navegación a funciones del registro                                                                 | Sin métodos ni aprobaciones                                                     | Solo lectura; los destinos de tareas que dependen de configuración siguen pendientes                                                                 |
| Equipo del responsable                | Selección y búsqueda del equipo; enlaces a ficha reautorizada                                                             | Incluye directos, indirectos y rechazo de Eva                                   | Jerarquía ORO acordada, `COMPUTA='1'`, hasta 10 niveles; identidad/sociedad del servidor                                                             |
| Dossier del equipo                    | Situación actual, contratos, puestos, formación, evaluaciones recibidas, salario, presencia y ausencias                   | Apartados independientes; filtros y selección                                   | Lectores nuevos por contrastar; no confunde evaluaciones recibidas con asignaciones como evaluador                                                   |
| Formación del equipo                  | Cursos realizados y sesiones/inscripciones existentes, con separación explícita de las convocatorias                      | Muestras y filtros                                                              | `M4T_EVENTOS` y sus asistentes/valoraciones/presupuesto necesitan contrato; una inscripción aceptada no acredita una convocatoria                    |
| Presupuesto y competencias/GAP        | Se corrigen referencias del original e incorporan al diagnóstico                                                          | Dependencia honesta                                                             | `SSCO_OR_RP_BUDGET_SAL_WU`, `SSM_R_JOB_COMP!SMCO_DATA_FINAL`, `SSM_X_GROUP`, `SSM_KNOW_MAP`; no se sustituyen por salarios ni evaluaciones genéricas |
| Revisión salarial                     | Lectura cerrada cuando falta la responsabilidad específica; propuestas/estados virtuales quedan inventariados             | Muestra de presentación donde hay campos conocidos                              | El equipo ORO por sí solo no autoriza revisión salarial. Falta contrato de responsabilidades, planes y fases                                         |
| Proyecciones, certificados y festivos | Se reutilizan sus lectores/exportadores y se incorporan escenarios DEBUG                                                  | Integración de muestras; conservadas sus pruebas anteriores                     | No se reescriben las reglas reales ya confirmadas ni sus excepciones de sociedad                                                                     |
| Informes genéricos                    | `POST /api/portal/reports/export`: ID registrado, filtros y formato; vuelve a leer/autorizar, genera en memoria           | Excel y PDF descargados; paginación y 90 filas probadas                         | Exporta apartados disponibles y declara fallos independientes; no afirma reproducir plantillas de informes aún desconocidas                          |

No se consideran cerradas por esta entrega las funcionalidades que necesitan reglas virtuales, autorizaciones específicas, documentos sin contrato o menús dinámicos. Permanecen en la matriz y en el diagnóstico. Todas las solicitudes, guardados, fichajes, validaciones, propuestas, aprobaciones, importaciones y delegaciones siguen bloqueados.

## Una orden en la VM

Después de incorporar esta entrega en la VM, con las dependencias npm instaladas y las variables `PEOPLENET_DB_*` y `META4_BASE_URL` habituales, abrir PowerShell en:

```text
C:\Users\david\Archivos\aQuality SolutIon\CyC\powermeta4
```

Ejecutar una sola orden, sin matrícula ni parámetros interactivos:

```powershell
npm run portal:readonly-audit
```

El script `scripts/portal/readonly-audit.ts` escribe automáticamente estos seis archivos en `docs/portal/implementacion/evidencias-vm/`:

| Archivo         | Contenido permitido                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| manifest.json   | Versión del formato, revisión Git, fuentes y hashes, registro analizado, cobertura y tareas correctas/fallidas/incompletas |
| dictionary.json | Metadatos del diccionario, herencia TI, nodos, conectores, parámetros, sentencias y reglas saneadas                        |
| contracts.json  | Presencia/tipos de columnas y comparación de WSDL publicados mediante GET                                                  |
| probes.json     | Compatibilidad y recuentos agregados de consultas revisadas por sociedad; sin identidades                                  |
| errors.json     | Identificadores técnicos de tarea, estado y código permitido; sin mensajes de servidor                                     |
| resumen.md      | Resumen legible, límites y tareas pendientes                                                                               |

Se leen referencias del registro y de las fuentes originales, los siete pendientes explícitos, menús, informes y objetos relacionados. Se recorren herencia, objetos lógicos y referencias verificadas en reglas. Las páginas de metadatos tienen límite explícito de 2000 filas, 100 páginas por tarea y 5000 referencias: alcanzar un límite produce estado incompleto, nunca un truncamiento silencioso. Las fuentes binarias sin extractor conocido se declaran inaccesibles.

Solo se ejecutan SELECT revisadas/parametrizadas del código y GET de WSDL. Nunca se ejecuta APISQL recibido, procedimientos, reglas LN4, autenticación u operaciones SOAP. `assertReadOnlySql` se comparte con los scripts y rechaza SELECT INTO, DML/DDL, lotes, procedimientos, comentarios y nombres de bases/servidores externos. Los identificadores utilizados para comprobar consultas quedan en memoria. Comentarios, literales libres, correos, direcciones y campos no permitidos se omiten; no se escriben filas de personas, cuentas, importes individuales, blobs o credenciales.

Un fallo parcial conserva los demás resultados. El código de salida es 1 si hay errores o límites: **no significa que deban descartarse los archivos**. Versionar los seis archivos generados, incluso si alguno contiene únicamente estados de error. El script no hace commit ni push. No versionar `.env.local`, `data/`, SQLite, capturas ni archivos personales.

## Comprobaciones realizadas

El motor de auditoría se ha probado con conexiones simuladas: continuación tras errores, seguimiento de herencia/referencias, bloqueo de SELECT INTO, ausencia de identificadores/mensajes secretos en su resultado y saneamiento de cadenas con URL, comentarios, cuentas y correos.

Las pruebas de lectura cubren activación DEBUG restringida, ausencia de SQL/lector real en los cuatro escenarios, conservación del fallo real, persona fuera del equipo, persona indirecta, sociedad/identidad del servidor, filtros combinados, fechas de fichajes con hora y reutilización de enlaces. Las descargas prueban relectura, denegación de alcance, petición manipulada, ceros, filas completas y paginación PDF.

Chrome headless/Playwright en servidor local aislado: conocimientos, dossier de responsable, presencia y nóminas a 1440, 1024, 768 y 390 px, sin overflow horizontal. Filtros de formación, descargas Excel/PDF, denegación de Eva, escenarios completo/vacío/error y selector por teclado: correctos, sin excepciones JavaScript. También se comprobaron los modos retroactivo/combinado, descargas de nómina en ambos formatos, ficha pública de Ana y API de jerarquía ficticia. Se bloqueó el tráfico externo y se usó SQLite de pruebas bajo `data/portal-readonly-qa`, ignorado por Git. Las capturas no son evidencia visual del portal corporativo.

Comprobaciones de cierre ejecutadas:

| Comprobación                                                | Resultado real                                                                                                                                                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run typecheck`                                         | Correcto                                                                                                                                                                         |
| `npm run build`                                             | Correcto; 44 páginas generadas, incluidos los nuevos endpoints de lectura/exportación                                                                                            |
| `npm test -- --maxWorkers=2 --testTimeout=20000`            | Ejecutado; mantiene el timeout previo de 180 s en Excel COM del alta. Dos expectativas de interfaces nuevas se corrigieron y repitieron correctamente                            |
| Suite sin `src/lib/meta4/hire/excel.test.ts`                | 205 archivos, 1.222 pruebas correctas, 2 omitidas. Pase general de 15:50, después de la migración de consultas                                                                   |
| Pruebas posteriores de coherencia de informes y proveedores | 69 pruebas en siete archivos correctas; 19 pruebas de auditoría/proveedor correctas tras los últimos ajustes. Incluye una prueba nueva de persona coherente sin parámetros DEBUG |
| `npm run lint`                                              | Falla por formato global pendiente en los mismos 618 archivos; siete avisos previos de oxlint, sin avisos nuevos. Los nuevos TypeScript están formateados                        |
| `git diff --check`, `git status --short`                    | Ejecutados; diff sin errores de espacios y estado limitado a los archivos de esta entrega                                                                                        |

No se ha ejecutado el diagnóstico contra la VM desde este ordenador. Las muestras, pruebas locales y build no acreditan esa integración.

## Archivos de esta entrega

Versionar los siguientes 83 archivos de esta entrega (código, pruebas y documentación). El diagnóstico añadirá después sus seis resultados; no se incluyen ficheros de datos locales ni credenciales.

```text
README.md
docs/portal/README.md
docs/portal/implementacion/auditoria-fuentes.md
docs/portal/implementacion/continuidad-solo-lectura.md
docs/portal/implementacion/dependencias-servidor.md
docs/portal/implementacion/estado.md
docs/portal/implementacion/evidencias-vm/README.md
docs/portal/implementacion/matriz-solo-lectura.md
package.json
scripts/portal/dependencias.ts
scripts/portal/readonly-audit-core.ts
scripts/portal/readonly-audit.ts
scripts/portal/readonly-matrix.ts
spec/changelog.md
spec/todo.md
src/app/(app)/portal/[...slug]/page.tsx
src/app/(app)/portal/layout.tsx
src/app/(app)/portal/organizacion/personas/[employeeId]/page.tsx
src/app/(app)/portal/page.tsx
src/app/actions/portal.ts
src/app/api/portal/certificates/pdf/route.ts
src/app/api/portal/organization/[employeeId]/hierarchy/route.ts
src/app/api/portal/organization/[employeeId]/person/route.ts
src/app/api/portal/payslips/export/route.ts
src/app/api/portal/projections/export/route.ts
src/app/api/portal/reports/export/route.test.ts
src/app/api/portal/reports/export/route.ts
src/components/portal/debug-panel.tsx
src/components/portal/feature-header.tsx
src/components/portal/feature-sections.tsx
src/components/portal/portal-data.tsx
src/components/portal/portal-form.tsx
src/components/portal/portal-home-sections.tsx
src/components/portal/portal-link.tsx
src/components/portal/portal-shell.test.tsx
src/components/portal/portal-shell.tsx
src/components/portal/read-query.tsx
src/components/portal/use-portal-command-items.ts
src/components/portal/views/certificates/certificate-report.tsx
src/components/portal/views/directory-search.tsx
src/components/portal/views/feature-dispatch.tsx
src/components/portal/views/feature-view.tsx
src/components/portal/views/holidays-view.test.tsx
src/components/portal/views/holidays-view.tsx
src/components/portal/views/home-view.tsx
src/components/portal/views/manager-view.tsx
src/components/portal/views/org-tree.tsx
src/components/portal/views/own-payslips.tsx
src/components/portal/views/payslips-view.tsx
src/components/portal/views/person-org-chart.tsx
src/components/portal/views/projections/report-export.tsx
src/components/portal/views/projections/report-view.tsx
src/components/portal/views/tasks-view.tsx
src/components/sidebar/app-sidebar.tsx
src/lib/portal/certificates/load.ts
src/lib/portal/data/catalogs.ts
src/lib/portal/data/consults.ts
src/lib/portal/debug.fixture.ts
src/lib/portal/forms/validate.ts
src/lib/portal/holidays/load.ts
src/lib/portal/meta4-refs.ts
src/lib/portal/organization-api.ts
src/lib/portal/organization-client.ts
src/lib/portal/organization-debug.fixture.ts
src/lib/portal/payroll-debug.fixture.ts
src/lib/portal/peoplenet/query.test.ts
src/lib/portal/peoplenet/query.ts
src/lib/portal/projections/load.ts
src/lib/portal/read-filters-sql.test.ts
src/lib/portal/read-model.ts
src/lib/portal/read-provider.test.ts
src/lib/portal/read-provider.ts
src/lib/portal/readonly-audit.test.ts
src/lib/portal/registry/empleado-retribucion.ts
src/lib/portal/registry/index.ts
src/lib/portal/registry/menu.test.ts
src/lib/portal/registry/menu.ts
src/lib/portal/registry/read-extensions.ts
src/lib/portal/registry/sql/readonly.ts
src/lib/portal/registry/sql/tiempo.ts
src/lib/portal/report-export.test.ts
src/lib/portal/report-export.ts
src/lib/portal/types.ts
```

## Segunda sesión después del pull

1. Leer AGENTS, DESIGN, todo, changelog, README, package y components en el orden del proyecto; después esta guía y la matriz.
2. Leer primero `evidencias-vm/manifest.json` y `errors.json`. Confirmar revisión, formato, cobertura y límites antes de usar recuentos como evidencia. No atribuir a una consulta el resultado de otra sociedad/versión.
3. Revisar únicamente contratos afectados en `dictionary.json`, `contracts.json` y `probes.json`. Contrastar nodo, TI heredada, sentencia, conectores, filtros, columnas y parámetros. Mantener las integraciones previamente confirmadas.
4. Aplicar los permisos específicos antes de habilitar evaluación/revisión. Un recuento correcto no acredita las responsabilidades efectivas del usuario. Si las reglas binarias o permisos no son accesibles, registrar la evidencia aún necesaria por funcionalidad.
5. Completar únicamente comportamientos respaldados por esa evidencia. No deducir tablas por nombres, no inventar escalas, no ejecutar LN4 ni operaciones SOAP y no añadir persistencia del portal.
6. Repetir las pruebas afectadas, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `git diff --check` y `git status --short`. Regenerar documentación y actualizar implementación, DEBUG y VM por separado.

Mensaje de continuación:

> Continúa la segunda sesión de solo lectura siguiendo docs/portal/implementacion/continuidad-solo-lectura.md. Tras el orden de lectura de AGENTS.md, lee primero evidencias-vm/manifest.json y errors.json y revisa su cobertura y límites. Corrige solo los contratos afectados y completa los comportamientos acreditados, sin reescribir integraciones confirmadas, ejecutar escrituras/operaciones SOAP/LN4 ni guardar datos del portal. Actualiza la matriz y los estados separados de implementación, prueba DEBUG y validación VM con comprobaciones realmente ejecutadas.
