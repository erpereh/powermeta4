# Calendario de festivos

Ruta: `/portal/empleado/tiempo/festivos`, en «Mi tiempo de trabajo».

La vista `holidays` conserva el año actual, doce meses, domingo primero y
seis semanas por mes de `sse_g4/sse_g4_p3.jsp` y `libreria/clasecalendario.js`.
Se integra con los tokens claros/oscuros del producto: festivo con marca,
fondo y etiqueta accesible; fin de semana con fondo atenuado. Un festivo en
sábado o domingo mantiene ambas etiquetas. Los días son de consulta, sin
botones ni navegación anual. El año se resuelve en servidor en Europe/Madrid;
las fechas se construyen en UTC como fechas civiles, sin conversión del navegador.

## Estado de la lectura real

El JSP ejecuta `SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA` y recibe las listas
ENERO–DICIEMBRE. El commit `4fd97f2d`, ejecutado por el usuario en la VM,
incluye las reglas LN4 `CARGA`, `BUSQUEDA`, `GENERADIAS` y `APPLY`.
`CARGA` busca el rol principal de la persona; `BUSQUEDA` delega la asignación
en `SCO_APPLYVAL_CALEN`, con `DMD_TA`/`DMD_GROUP_TA`, y entrega a
`GENERADIAS` un calendario y sus fechas de inicio y fin. `GENERADIAS` marca
las fechas de `SCO_CALENDAR_REP` dentro de ese intervalo; no añade un filtro
por código de tipo de día.

La primera extracción solo contiene dos nodos, tres TI y las columnas de
`M4SCO_HR_ROLE`/`M4SCO_CALENDAR_REP`. No contiene los nodos de valores de rol,
centro y país ni sus históricos dentro de `SCO_APPLYVAL_CALEN`. El método
`APPLYTABLE` es una metarregla nativa sin código LN4 en la salida. Por tanto,
la salida aún no acredita las tablas, las vigencias ni la prioridad efectiva
de la asignación; el orden de llamadas no se traduce en una prioridad supuesta.

Se ha retirado la SELECT anterior de `TIEMPO_SQL.festivos`, que elegía un
calendario desde GTA (`M4SCO_HR_REAL_WORK_DAYS`) sin acreditar esas reglas.
`HOLIDAY_READ_CONTRACT` declara P02/P05. Con una sesión real, la pantalla
muestra una indisponibilidad visible, incluso con textos de desarrollo ocultos;
no interpreta la falta de contrato como «sin festivos» o «sin calendario».
La identidad incoherente conserva su propio motivo visible.

`getHolidayCalendar` recibe únicamente el contexto resuelto por el servidor.
No acepta matrículas ni sociedades del navegador y, mientras no se cierre el
contrato, no ejecuta consultas. El modelo diferencia un calendario sin días
festivos de la ausencia comprobada de asignación y de los errores de lectura.

## Extracción en la VM: exclusivamente lectura

```text
npm run portal:holidays-discover -- CYC
```

Acepta CYC, IBER o COLL como referencia del contraste; el diccionario es
compartido. Usa la conexión server-side `PEOPLENET_DB_*` existente. Todas
las consultas pasan por `assertReadOnlySql` y son SELECT parametrizadas de
`M4RCH_*`, `M4RDC_*` o `INFORMATION_SCHEMA.COLUMNS`.

La versión de formato 2 recorre `SSE_CARGA_FESTIVOS` y `SCO_APPLYVAL_CALEN`,
todos sus nodos hermanos y los objetos referenciados por el diccionario o
por identificadores `OBJETO!NODO` del código LN4. Sigue TI base y usadas,
conserva estructura, conectores, sobrescrituras, `M4RCH_RULES3.SOURCE_CODE`,
sentencias auxiliares, correspondencias de campos y columnas físicas.
Busca también los metadatos por clave de `DMD_TA`/`DMD_GROUP_TA` y enumera
las metarreglas nativas con su método. El código LN4 se guarda como texto:
nunca se ejecuta. Las consultas repetidas se reutilizan dentro de la extracción;
los ciclos no repiten nodos ni provocan bucles.
No consulta tablas con valores de empleados ni calendarios y no realiza
escrituras, cambios de esquema, procedimientos ni tablas temporales en la BD.
Los recuentos describen únicamente los metadatos extraídos.

Guarda archivos locales:

- `docs/portal/implementacion/festivos-descubrimiento.json`
- `docs/portal/implementacion/festivos-descubrimiento.md`

Los truncamientos, las TI, objetos o nodos omitidos por límite, la ausencia de
nodos requeridos de asignación, de las cuatro reglas LN4 principales, de
metadatos de dimensión/grupo o de correspondencias/columnas físicas quedan
advertidos y el comando termina con código de error. Los límites son 20 objetos,
100 TI, 200 nodos y 1000 filas por consulta del diccionario. Un fallo de
conexión no imprime credenciales ni el mensaje del driver. Revisar y devolver
ambos archivos de formato 2 para confirmar la regla de asignación y vigencias;
después implementar únicamente SELECT equivalentes, filtradas por sociedad y
matrícula propias del contexto autenticado, y contrastar las fechas con el portal.
La ausencia de advertencias del extractor no sustituye la revisión del contrato
ni ese contraste.

## Desarrollo

Con `npm run dev`, `POWERMETA4_DEBUG_AUTH=true` y una sesión debug válida,
se muestra una muestra sintética del año actual. El aviso «Muestra ficticia»
permanece visible al ocultar los textos de desarrollo. No es un calendario
laboral oficial ni representa ningún centro. Usa el mismo componente que la
lectura real, sin consultar SOAP/PeopleNet ni guardar resultados. Producción,
flag deshabilitado y sesiones Meta4 no pueden activar la muestra.

La verificación local cubre calendario civil, años bisiestos, cambio de año en
Madrid, seis semanas, festivos en fin de semana, autenticación debug, estados
y extracción de metadatos con un lector simulado. La paridad con datos reales
requiere la salida de formato 2 y el contraste en la VM.

Comprobación local del 2026-10-21: 36 pruebas dirigidas de festivos correctas;
typecheck y build correctos; revisión en navegador con sesión debug y base
SQLite temporal en claro/oscuro a 1440/1024/768/390 px, navegación desde la
sidebar y recarga, sin overflow ni errores/avisos de consola. Suite sin la
integración Excel COM ya bloqueada: 187 archivos, 1054 correctas y 2 omitidas
(`--exclude src/lib/meta4/hire/excel.test.ts --maxWorkers=2 --testTimeout=20000`).
Lint global ejecutado con avisos/formato previos; comprobación dirigida correcta.
Esa comprobación local no ejecutó el descubrimiento ni leyó datos reales en
la VM. La primera salida de la VM se recibió después, en `4fd97f2d`; su
contenido y las dependencias aún ausentes se describen arriba.

Verificación local de la ampliación del extractor: 38 pruebas dirigidas en
5 archivos correctas; typecheck, build, lint/formato dirigidos y diff correctos.
Reproducción de lectura sobre el archivo recibido: las cuatro reglas están
disponibles y se detectan los seis nodos auxiliares ausentes y los metadatos
de dimensión/grupo que faltan. Sociedad inválida rechazada antes de conectar.
Suite completa detenida sin finalizar con la integración Excel COM incluida;
sin `hire/excel.test.ts`, dos workers y timeout de 20 s: 187 archivos,
1056 pruebas correctas y 2 omitidas. Lint global ejecutado con siete avisos y
formato del repositorio pendiente. Esta ampliación no se ha ejecutado en la VM
ni ha requerido una nueva revisión de navegador.
