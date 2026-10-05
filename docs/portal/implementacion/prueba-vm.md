# Prueba del portal en la VM

El código local no acredita la integración real. Se conservan `davidev`, las
escrituras ERP deshabilitadas y `MANAGER_SCOPE_VERIFIED = false`.

1. Instalar con `npm ci` y conservar la configuración server-side existente de
   Meta4 y PeopleNet. No copiar credenciales a incidencias, capturas ni chats.
2. Ejecutar `npm run portal:verify -- todo`. Ahora SQL y SOAP se comprueban de
   forma independiente. La salida contiene columnas, recuentos agregados por
   sociedad, matrículas repetidas/usuarios contradictorios y diferencias WSDL
   (operaciones, estilo, namespace y orden de argumentos). No muestra valores
   de empleados. Un código de salida 1 exige revisar los avisos.
3. Para aislar fallos: `npm run portal:verify -- sql` y
   `npm run portal:verify -- soap`. Un WSDL protegido o con esquemas externos
   requiere revisión en la VM; no se considera un contrato compatible solo por
   responder HTTP 200.
4. Iniciar la aplicación con `npm run dev`, entrar con la sesión Meta4 habitual
   y repetir la lista siguiente en CYC, IBER y COLL cuando estén disponibles.

- Directorio: buscar una matrícula repetida, comprobar que aparece una persona
  y que el resumen conserva los distintos puestos/unidades. Cambiar rápidamente
  la búsqueda y la sociedad; los resultados anteriores deben descartarse.
- Organigrama: comparar personas únicas con el original. Una persona con varias
  asignaciones puede aparecer en distintos destinos; el total del ancestro no
  debe duplicarla.
- Mi ficha: confirmar matrícula textual, ceros iniciales y usuario. Duplicados
  equivalentes se aceptan; fichas distintas muestran ambigüedad. Si PeopleNet
  está configurado y falla, no deben mostrarse datos propios.
- Correos y cuentas de cobro: cotejar los registros y su vigencia. La lectura de
  cuentas reutiliza PAYMENT_DATA/PERSON_BANK del recibo, con origen `01` y
  `SCO_EMP_CHECK = 1`; aún debe contrastarse con la selección principal del JSP.
  Conserva todas las asignaciones, sin elegir arbitrariamente una cuenta.
- Estado civil: comprobar el código actual de ORO. El historial requiere otro
  contrato y se mantiene identificado como pendiente.
- Nóminas: comprobar el calendario y abrir un recibo propio existente. Las pagas
  retroactivas y documentos blob mantienen sus dependencias anteriores.
- Tareas: comprobar tareas, validaciones y valoraciones por separado. Un grupo
  rechazado no oculta los grupos correctos.
- Población: comparar unidades y matrículas con el SSM real. No habilitar datos
  sensibles del equipo durante esta prueba ni modificar la puerta de alcance.
- Interfaz: recorrer las pantallas y apartados del inventario, probar teclado,
  foco y navegación, y revisar a 375, 800 y 1440 px que no haya desbordamiento.
  Los campos ausentes de lecturas cargadas indican «No informado»; una consulta
  vacía tiene su propio estado.
- Desconectar temporalmente una dependencia en una VM de pruebas y confirmar
  resultados parciales. Una sesión caducada debe pedir nuevo inicio de sesión.

Para los apartados aún pendientes, ejecutar `npm run portal:discover` en la VM.
Produce metadatos en `data/portal-discovery/descubrimiento.json`; revisar ese
archivo antes de incorporarlo al repositorio. Se necesitan tablas, campos,
filtros por sociedad/persona, vigencias y reglas de negocio, o un servicio
publicado cuyo método sea de lectura. Un nombre de nodo no basta para crear SQL.

Registrar diferencias mediante pantalla, variante, lector/operación, etapa y
código, sin adjuntar fichas, cuentas, tokens, respuestas SOAP ni otros valores
personales. El inventario por apartado está en [estado.md](estado.md) y el
contraste de originales en [auditoria-fuentes.md](auditoria-fuentes.md).
