# Organigrama visual

El árbol de unidades conserva su entrada. Al elegir una persona, la misma ruta
abre `?persona=<matrícula>` y presenta esa persona y sus dependientes directos.
Los controles independientes permiten subir al responsable único y volver al
árbol. «Desplegar equipo» añade subordinados debajo de la persona, manteniendo
los niveles anteriores y varias ramas abiertas. Nombre y fotografía abren una
ficha pública en un panel lateral, sin navegar a «Quién es Quién».

El filtro y las unidades abiertas pertenecen a la URL (`filtro` y `ramas`).
`equipos` contiene las matrículas desplegadas, separadas por coma. Sin ese
parámetro se abre el equipo de la raíz; vacío contrae todas las ramas. La API
nativa de historial actualiza estos parámetros. Recarga e historial reconstruyen
solo las ramas alcanzables desde la raíz, consultando cada equipo necesario.
Una contracción oculta descendientes y conserva sus expansiones; al reabrirlos
se reutilizan las lecturas de la visita. Cambiar de raíz inicia su equipo directo.
Los parámetros no eligen sociedad, identidad ni alcance de consultas.

## Lienzo, ficha y ventana

Tarjetas HTML posicionadas y conectores SVG usan una distribución pura de
subárboles sin solapamientos ni ciclos. Expandir mantiene la posición visible
de esa persona. Arrastrar el fondo mueve la cámara; botones y enlaces no
inician arrastre. La rueda cancela el scroll de página solo dentro del lienzo y
amplía alrededor del puntero entre 20% y 200%. Un dedo arrastra y dos permiten
ampliar y mover. Controles visibles muestran el porcentaje, acercan, alejan,
centran la raíz y ajustan el gráfico; con foco en el lienzo, flechas, +, − y 0
ofrecen las mismas operaciones.

El `Modal` existente tiene una variante `viewport`, cierre visible, Escape y
foco contenido. Abrir y cerrar conserva equipos, cámara y ficha; al cerrar se
recupera el disparador. La ficha muestra puesto, organización, centro y contacto
del directorio público. En móvil ocupa el área del gráfico y deja el lienzo
inactivo hasta cerrarse. Cámara y panel solo viven en memoria; al recargar se
ajusta el gráfico reconstruido. Cargas, errores con reintento y equipos vacíos
se muestran explícitamente. No se añaden dependencias.

## Lectura de la jerarquía

`getPersonHierarchy` usa SELECT parametrizadas en `M4ORO_EMPLEADOS`, siempre
con sociedad del contexto y `COMPUTA = '1'`. Agrupa asignaciones repetidas de una
misma matrícula y conserva puestos distintos. `ID_RESPONSABLE` determina el
responsable y los dependientes directos. No se elige entre responsables
contradictorios; las relaciones ambiguas y autorreferencias no se dibujan.
Responsable ausente, persona fuera de sociedad y equipo vacío tienen estados
explícitos. El cliente detecta conexiones circulares entre equipos sucesivos y
omite esa conexión, sin inventar relaciones. No hay escrituras ni persistencia
local de personas.

`GET /api/portal/organization/[employeeId]/hierarchy` reutiliza `PersonHierarchy`;
`GET /api/portal/organization/[employeeId]/person` reutiliza la ficha pública
con `COMPUTA = '1'`. Ambos exigen sesión Meta4 e identidad coherente, resuelven
sociedad en servidor y usan SELECT parametrizadas. Devuelven los estados
tipados de dependencia del portal y `Cache-Control: no-store`. Se rechazan
matrículas inválidas y personas ajenas a la sociedad. Las respuestas se
validan antes de incorporarse al estado temporal. Cambiar raíz, workspace o
sociedad aborta cargas y descarta respuestas tardías; las lecturas y fichas se
limpian con ese contexto.

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
