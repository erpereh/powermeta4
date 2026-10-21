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

La segunda salida, commit `4ecf5815`, incluye todos los nodos de asignación
requeridos, las cuatro reglas principales, las correspondencias de campos y
las definiciones de `DMD_TA`/`DMD_GROUP_TA`. El componente de calendario de ese
grupo es `TA001`. La extracción alcanzó los límites al recorrer otros objetos
(correo, sesiones y GTA); conserva esas advertencias. No se consideran pruebas
de ausencia de datos ni se han ocultado o modificado los archivos de la VM.

`registry/sql/holidays.ts` implementa la lectura real con SELECT parametrizadas
de las nueve tablas confirmadas: rol principal, valores del rol, histórico de
ubicaciones, ubicaciones y relaciones, valores del centro, dirección del centro,
valores del país y fechas del calendario. Usa los nombres físicos acreditados,
incluidos `SCO_ID_WORK_LOC`, `SCO_ID_WORK_CENTE` y `STD_ID_WORK_LOCAT`.
No utiliza GTA. Todas las tablas de datos filtran la sociedad autenticada.

Los intervalos del año se recortan a enero–diciembre. La fecha de corrección
es 4000-01-01, como `SCO_SETDATES_COR`; la referencia de la jerarquía es el
31 de enero siguiente, como `SETDATES` y `SSP_RELLENA_WC`. Una ubicación tipo
1 ya es un centro; las demás recorren sus padres vigentes, con detección de
ciclos y límite de profundidad. Las vigencias de ubicación, centro, dirección
y asignación se intersectan. Las fechas salen de SQL como fechas civiles ISO.

`getHolidayCalendar` recibe únicamente el contexto autenticado del servidor.
La matrícula propia no es un parámetro de la URL. No consulta SOAP, no persiste
resultados y se ejecuta solo con identidad resuelta. La carga captura un único
instante para calcular hoy y el año en Europe/Madrid. Un calendario sin fechas
festivas conserva los doce meses; la ausencia de rol/asignación, la identidad
no resuelta, la conexión pendiente y los errores tienen estados distintos.

### Límite de paridad: prioridades nativas

`APPLYTABLE` es una metarregla nativa sin fuente en el diccionario. La lectura
real admite asignaciones coincidentes o cambios sin solape que determinen un
solo calendario por fecha. Deduplica fechas y conserva las descripciones.
Si hay varios roles principales, centros sin resolver o calendarios distintos
en una misma fecha, devuelve un error visible. No toma el primer registro,
no decide por `ID_PRIORITY` ni supone que el orden de APPLY determina el ganador.
Ese caso requiere acreditar la prioridad del motor y contrastarla en la VM.
`HOLIDAY_READ_CONTRACT` es SQL con `verified: false` hasta el contraste real.

## Verificación funcional en la VM

```text
npm run portal:verify -- festivos CYC <matrícula>
```

Ejecuta el mismo lector con los parámetros indicados por la CLI y emite solo
el año y el número de festivos, ausencia de asignación o código de error.
No imprime matrícula, calendario, centro, fechas ni descripciones, no guarda
ficheros y cierra el pool al terminar. El navegador sigue sin poder elegir
persona o sociedad. Después se debe comparar el calendario de la sesión Meta4
con el portal original. `portal:verify -- sql` incluye sus columnas físicas.

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
conexión no imprime credenciales ni el mensaje del driver. La salida de formato 2
ya se recibió; el extractor queda disponible para revisar el diccionario cuando
cambie. La siguiente comprobación es funcional, con el lector y el portal real.
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
requiere el contraste en la VM y acreditar la prioridad nativa si aparecen
asignaciones incompatibles.

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
formato del repositorio pendiente. La ampliación se ejecutó después en la VM
(`4ecf5815`); sus resultados se describen arriba.

Verificación del lector real: 72 pruebas dirigidas en 9 archivos correctas,
incluida la presencia de todas las columnas usadas en el volcado de la VM,
aislamiento por sociedad/persona, cambios de calendario, conflictos y estados.
Typecheck, build, lint/formato de los archivos modificados y diff correctos.
Suite final sin la integración Excel COM ya bloqueada: 189 archivos,
1080 pruebas correctas y 2 omitidas (dos workers, límites de 20 s). Lint global
ejecutado con siete avisos previos y formato del repositorio pendiente.
Documentación generada y referencias originales conservadas en el contrato SQL.
CLI comprobada con sociedad inválida y sin configuración PeopleNet: falla
de forma controlada y no imprime credenciales.

Nueva revisión de navegador con sesión debug y SQLite temporal: navegación
desde la sidebar hasta el calendario, recarga, claro/oscuro y tamaños
1440/1024/768/390 px. Doce meses, 4/3/2/1 columnas, sin overflow horizontal ni
errores/avisos de consola. La muestra sigue identificada al ocultar textos de
desarrollo. No se ha consultado PeopleNet ni contrastado el lector en la VM
desde este entorno; el caso de prioridades incompatibles sigue pendiente.
