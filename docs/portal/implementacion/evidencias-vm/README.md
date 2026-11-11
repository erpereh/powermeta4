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

No se han generado evidencias corporativas en la primera sesión. La ausencia actual de esos seis archivos es intencionada. Leer [continuidad](../continuidad-solo-lectura.md) antes de interpretar sus resultados. Los metadatos/recuentos no acreditan por sí solos permisos efectivos, paridad visual ni métodos nativos inaccesibles.
