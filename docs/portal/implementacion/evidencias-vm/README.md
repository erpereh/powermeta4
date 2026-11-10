# Evidencias de la VM

Desde la raíz del repositorio en la VM, con las dependencias instaladas y su entorno habitual:

```powershell
npm run portal:readonly-audit
```

Se generan automáticamente `manifest.json`, `dictionary.json`, `contracts.json`, `probes.json`, `errors.json` y `resumen.md` en esta carpeta. Versionar los seis resultados, también cuando existan fallos parciales. El script no realiza commits ni push y no solicita matrículas.

No se han generado evidencias corporativas en la primera sesión. La ausencia actual de esos seis archivos es intencionada. Leer [continuidad](../continuidad-solo-lectura.md) antes de interpretar sus resultados. Los metadatos/recuentos no acreditan por sí solos permisos efectivos, paridad visual ni métodos nativos inaccesibles.
