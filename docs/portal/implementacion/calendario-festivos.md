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
ENERO–DICIEMBRE. `lecturas-sql.md` documenta `SSE_BUSCA_CALENDARIO` sobre
`M4SCO_HR_ROLE` y `SSE_FESTIVOS` sobre `M4SCO_CALENDAR_REP`, pero no incluye
la regla LN4 que elige la asignación y filtra los días festivos.

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

Extrae estructura, conectores, sobrescrituras, TI base, reglas heredadas,
`M4RCH_RULES3.SOURCE_CODE`, sentencias auxiliares, correspondencias de campos
y columnas físicas. El código LN4 se guarda como texto: nunca se ejecuta.
No consulta tablas con valores de empleados ni calendarios y no realiza
escrituras, cambios de esquema, procedimientos ni tablas temporales en la BD.
Los recuentos describen únicamente los metadatos extraídos.

Guarda archivos locales:

- `docs/portal/implementacion/festivos-descubrimiento.json`
- `docs/portal/implementacion/festivos-descubrimiento.md`

Los truncamientos, las TI omitidas por límite o la ausencia del objeto
quedan advertidos y el comando termina con código de error. Un fallo de
conexión no imprime credenciales ni el mensaje del driver. Revisar y devolver
ambos archivos para confirmar la regla de asignación, vigencias y tipos de día;
después implementar únicamente SELECT equivalentes, filtradas por sociedad y
matrícula propias del contexto autenticado, y contrastar las fechas con el portal.

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
requiere el volcado y el contraste en la VM.

Comprobación local del 2026-10-21: 36 pruebas dirigidas de festivos correctas;
typecheck y build correctos; revisión en navegador con sesión debug y base
SQLite temporal en claro/oscuro a 1440/1024/768/390 px, navegación desde la
sidebar y recarga, sin overflow ni errores/avisos de consola. Suite sin la
integración Excel COM ya bloqueada: 187 archivos, 1054 correctas y 2 omitidas
(`--exclude src/lib/meta4/hire/excel.test.ts --maxWorkers=2 --testTimeout=20000`).
Lint global ejecutado con avisos/formato previos; comprobación dirigida correcta.
No se ha ejecutado el descubrimiento ni leído datos reales en la VM.
