# Evidencias de la VM

Si sigue abierta la versión anterior del diagnóstico, interrumpirla con Ctrl+C.
Su avance en memoria no se puede recuperar si todavía no escribió los resultados.
Actualizar el repositorio por el procedimiento habitual, conservando las evidencias
existentes. No han cambiado las dependencias ni el comando npm.

Desde la raíz del repositorio en la VM, con las dependencias instaladas y las
variables habituales `PEOPLENET_DB_*` y `META4_BASE_URL`:

```powershell
npm run portal:readonly-audit
```

El primer mensaje anuncia el inicio y el presupuesto de 30 minutos. Después
aparecen fuentes, conexión SQL, esquema, diccionario, sondeos, WSDL y guardado.
Cada cinco segundos se muestran tiempo, referencias procesadas/pendientes,
consultas iniciadas/completadas/reutilizadas/activas, WSDL y errores. Una consulta
de más de cinco segundos muestra su identificador técnico y huella; no muestra
SQL, parámetros, destinos de conexión ni mensajes crudos del servidor.

| Operación                     | Límite                                         |
| ----------------------------- | ---------------------------------------------- |
| Conexión SQL                  | 15 s                                           |
| Consulta de metadatos         | 15 s                                           |
| Sondeo de consulta registrada | 30 s                                           |
| GET WSDL por servicio         | 15 s                                           |
| Diccionario / sondeos         | 20 min / 8 min, sujetos al total de 30 min     |
| Cancelación / cierre del pool | 2 s para confirmar cancelación / 5 s de cierre |

Hay dos consultas SQL de trabajo y dos GET WSDL como máximo. Las consultas lentas
pueden activar una lectura breve de esperas de las sesiones de esta ejecución;
solo registra categorías y presencia de bloqueo. Si faltan permisos, continúa
sin esa observación. La lentitud por sí sola no acredita un bloqueo. Tras dos
timeouts consecutivos de una familia se difiere su trabajo restante.

Se generan automáticamente `manifest.json`, `dictionary.json`, `contracts.json`,
`probes.json`, `errors.json` y `resumen.md` en esta carpeta desde el inicio, cada
60 segundos, al terminar fases y al finalizar/interrumpir. El manifiesto de
**formato 2** incluye estado, duración, métricas, pendientes, procedencia reutilizada,
identificador de generación y hashes de los otros cinco archivos. Se publica el
manifiesto al final de cada generación. Una publicación incompleta se recupera
automáticamente al volver a ejecutar la orden; se conservan dos generaciones
completas en el directorio local ignorado por Git.

Cada lote completo de metadatos saneados se consolida en
`data/portal-readonly-audit/batches.ndjson`. La misma orden reanuda una ejecución
incompleta de menos de 24 horas cuando coinciden código/fuentes, esquema recién
leído y contexto de conexión/permisos mediante una huella HMAC opaca. Nunca se
guardan los valores del contexto, las credenciales ni los parámetros o personas
usados por los sondeos. **Sondeos y WSDL siempre se repiten en cada proceso**.

`CHECKPOINT_REUSED` confirma la reutilización; `CHECKPOINT_*_CHANGED`,
`CHECKPOINT_EXPIRED` o `CHECKPOINT_INVALID` explican por qué se vuelve a consultar.
Una cola de diario truncada se ignora conservando los lotes completos; los lotes
incompletos y fallidos se repiten. Ctrl+C/SIGTERM detienen la planificación,
cancelan peticiones y guardan. Ante un límite o una interrupción, ejecutar la
misma orden sin borrar archivos ni hacer consultas auxiliares. No iniciar otra
auditoría mientras la anterior siga activa.

El resumen final muestra duración, consultas, reutilización, cobertura, errores,
motivo y ruta absoluta de los archivos. Un código de salida 1 indica resultados
parciales, interrupción o error; los archivos disponibles siguen siendo útiles.
Versionar los seis resultados juntos, también cuando existan fallos parciales.
No versionar `data/`, `.env.local` ni archivos temporales. El script no realiza
commits ni push y no solicita matrículas. Solo ejecuta SELECT revisadas y GET WSDL;
no ejecuta APISQL extraído, SOAP, LN4, procedimientos ni escrituras en la base.

La generación actual `f08d12cd-b90c-4291-8f34-7089a7b2c8ea`, de 2026-11-11,
terminó en 98,2 s: 2.740 consultas, 819 contratos de tablas, nueve WSDL compatibles
y 435 atribuciones de sondeos a apartados. Hay 291 combinaciones únicas de consulta
y sociedad: 276 correctas, cinco fallidas y diez diferidas. No reaparecieron
`UNSAFE_CHECKPOINT`, errores `8016` ni timeouts. Los WSDL solo acreditan GET.

Su estado es parcial: alcanzó el corte anterior de 5.000 referencias. El número
real de pendientes es desconocido por recorte, aunque el manifiesto guarde cero.
Las diez tareas diferidas figuran como errores en las atribuciones antiguas; la
revisión las interpreta mediante sus tareas, sin cambiar los archivos originales.
Los cinco hashes y los identificadores de generación son coherentes.

La corrección posterior unifica saneamiento y validación, conserva los símbolos
aprobados usados por cada lote y valida antes de publicar. Un rechazo aísla el
lote y mantiene sus referencias pendientes; los errores de almacenamiento sí
activan el cierre acotado. Se comprueban tipos y longitudes sin truncar claves ni
convertir columnas. Los candidatos heurísticos incompatibles se cuentan aparte;
las referencias contractuales incompatibles siguen pendientes. El esquema se
publica al leerlo y todos los servicios WSDL reciben estado, incluso al fallar.

Después de actualizar **hay que repetir `npm run portal:readonly-audit` en la VM**.
La huella del código cambiará: la caché anterior se rechazará automáticamente y
su diario se conservará como anterior. No borrar `data/` ni ejecutar consultas
auxiliares. Se mantienen los límites temporales, la misma orden y las dependencias.
Se elimina el descarte a 5.000 referencias: toda referencia descubierta permanece
en la cola y en la cobertura. Los contratos registrados se recorren antes que los
candidatos de las fuentes; `SSP_LG_ENT_ADDRESS` tiene prioridad explícita. Las
consultas corregidas de contratos, preferencias y objetivos necesitan nuevos
sondeos. La tabla física de direcciones del certificado sigue pendiente.

`dictionary.json` usa Git LFS y conserva la regla específica `-text` de
`.gitattributes`. Se ha comprobado el archivo completo de 111.792.981 bytes y su
SHA-256 frente al objeto LFS. Si el lector encuentra un puntero, indica que falta
descargar el contenido mediante `git lfs pull`; no lo interpreta como diccionario.
Los demás archivos se fijan a LF. El verificador acepta las salidas
anteriores tras normalizar exclusivamente CRLF a LF si coinciden sus hashes
originales; rechaza diferencias de contenido o mezclas de generaciones. La
[revisión generada](../revision-evidencias-vm.md) distingue fuentes con hash VM
de fragmentos originales locales añadidos al registro. Leer también
[continuidad](../continuidad-solo-lectura.md). Los metadatos/recuentos no acreditan
por sí solos permisos efectivos, paridad visual ni métodos nativos inaccesibles.
