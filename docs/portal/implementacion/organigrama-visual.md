# Organigrama visual

El árbol de unidades conserva su entrada. Al elegir una persona, la misma ruta
abre `?persona=<matrícula>` y presenta esa persona y sus dependientes directos.
Los controles independientes permiten subir al responsable único, abrir el
equipo de un dependiente o volver al árbol. No se abre la ficha de directorio.

El filtro y la expansión pertenecen a la URL (`filtro` y `ramas`). La API nativa
de historial actualiza esos parámetros sin volver a consultar el servidor en
cada pulsación; los enlaces a personas sí cargan su jerarquía en servidor.
Recarga e historial reconstruyen la vista. Los parámetros no eligen sociedad,
identidad ni alcance de consultas. El gráfico tiene scroll horizontal contenido,
tarjetas con nombres y puestos, líneas decorativas y región accesible por teclado.

## Lectura de la jerarquía

`getPersonHierarchy` usa SELECT parametrizadas en `M4ORO_EMPLEADOS`, siempre
con sociedad del contexto y `COMPUTA = '1'`. Agrupa asignaciones repetidas de una
misma matrícula y conserva puestos distintos. `ID_RESPONSABLE` determina el
responsable y los dependientes directos. No se elige entre responsables
contradictorios; las relaciones ambiguas y autorreferencias no se dibujan.
Responsable ausente, persona fuera de sociedad y equipo vacío tienen estados
explícitos. No hay escrituras, recursión ni persistencia local de personas.

## Fotografías

El diccionario original resuelto en `lecturas-sql.md` declara
`CSP_QUIEN_ES_QUIEN!CSP_FOTO_ORO`: `STD_PERSON.SCO_BLOB_PHOTO`, filtrado por
`STD_ID_PERSON = P_ID_HR`. La foto se solicita a
`GET /api/portal/photos/[employeeId]`, con sesión e identidad resueltas en
servidor. La matrícula debe pertenecer a ORO en la sociedad activa y computar.

Antes de leer el BLOB se comprueba el esquema físico. Se admite una única
ubicación binaria en `dbo.STD_PERSON` o en su tabla secundaria de campos largos
`dbo.STD_PERSON1`, ambas con `ID_ORGANIZATION` y `STD_ID_PERSON`. La secundaria
se enlaza por ambas claves; la persona y la foto deben pertenecer a la sociedad
activa. Varias filas o ubicaciones, tipos no binarios y claves incompletas se
rechazan. No se prueban sociedades alternativas ni tablas ajenas al objeto.

Se reutiliza la extracción de `~BLOB<tipo>\0<extensión>\0`. Se aceptan PNG y
JPEG reconocidos por contenido y estructura, hasta 5 MiB; PNG exige CRC de los
chunks. SVG, GIF, WebP, documentos y datos truncados se rechazan. La extensión
del BLOB no decide el MIME. Todas las respuestas usan `no-store` y `nosniff`,
sin ficheros locales ni caché persistente. El avatar usa iniciales mientras
carga y ante ausencia, error o formato rechazado.

La conexión PeopleNet no está configurada en este entorno. Falta comprobar en
la VM la ubicación física efectiva y la correspondencia de las claves con las
fotografías reales (P08). La comprobación de esquema se ejecuta antes de cada
lectura; si el contrato no coincide, la API devuelve 503 y se conserva el
fallback. Las pruebas locales usan imágenes PNG/JPEG de prueba y filas sintéticas.
