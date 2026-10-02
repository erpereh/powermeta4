# Verificación de la entrega

Fecha: 2026-10-02. Rama conservada: `davidev`. La entrega añade documentación y enlaces/estado en README, todo y changelog; no cambia código de aplicación, originales del portal ni autorizaciones ERP.

## Cobertura comprobada

- Copia inventariada: 33.518 archivos, clasificados por familia y naturaleza; recuento corregido tras comprobar rutas largas al incorporarla a Git.
- Cobertura principal: 771 rutas lógicas, con 2.090 JSP españoles/compartidos de autoservicio y plataforma.
- Dependencias adicionales documentadas: 343 rutas; total 1.114 fichas técnicas sobre 2.571 archivos fuente.
- Diccionarios españoles: 40 familias de propiedades con sus variantes, claves y líneas.
- Duplicados: 547 grupos SHA-256 idénticos dentro de las fuentes documentadas.
- Enlaces locales comprobados: 37.218 antes de añadir esta ficha de verificación; sin destinos ausentes ni anclas documentales inválidas. Los enlaces nuevos a esta ficha se comprobaron al cerrar la entrega.
- Cada fuente funcional seleccionada tiene evidencia documental. Los hashes de los 2.090 originales funcionales coinciden con el inventario inicial.
- Revisión automática sin coincidencias de correo real, IPv4 o la clave conocida del controlador en la documentación. Los extractos omiten hosts, rutas internas y valores sensibles identificados. No se copiaron documentos/fotos de empleados.

Las matrices separan BASE/CYC/IBER/COLL, versiones y piezas auxiliares. Los límites de generaciones móviles, modernas y de experto están en P07. La cobertura anterior es estática; no se ha accedido al portal en ejecución ni verificado objetos/reglas/permisos del servidor.

## Comprobaciones del repositorio

| Comprobación                | Resultado                                                                        |
| --------------------------- | -------------------------------------------------------------------------------- |
| `npm run typecheck`         | Correcto                                                                         |
| `npm test`                  | Correcto: 109 archivos, 603 pruebas correctas y 2 omitidas                       |
| `npm run build`             | Correcto                                                                         |
| `npm run lint`              | Falla por formato pendiente en 362 archivos; oxlint muestra siete avisos previos |
| `oxfmt --check docs/portal` | Correcto; documentos nuevos formateados                                          |
| `git diff --check`          | Correcto                                                                         |
| `git status --short`        | README, todo y changelog modificados; `docs/portal/` nuevo                       |

Los avisos de oxlint corresponden a archivos de código sin cambios en esta entrega. De los archivos con formato pendiente, solo se han editado todo/changelog para añadir el estado; su contenido en `HEAD` también falla la comparación con oxfmt. El resto permanece sin modificaciones. No se hizo una reforma de formato ajena al alcance.

## Pendientes que esta verificación no cierra

Consultar [P01–P09](../implementacion/pendientes.md): publicación y variantes efectivas, metadatos/reglas, identidad y alcance, contratos/escrituras, ejecución, dependencias dinámicas, otras generaciones, documentos y relación sociedad/NAE. Los tests del repositorio no son pruebas de un `/portal` ya implementado.

## Incorporación de los originales a Git

El mismo 2026-10-02, el usuario solicitó publicar `clon_portal/` íntegra y confirmó expresamente conservarla tal como estaba, incluidas las fotografías, en el repositorio público. La verificación documental anterior no incluía esa publicación.

Se compararon los 33.518 archivos y 528.948.252 bytes locales con el índice Git: cero omisiones y cero diferencias de contenido. La comparación usa los hashes Git sin filtros y contempla rutas largas de Windows. No se modificaron los originales; `.gitattributes` conserva bytes y espacios, y TypeScript, oxlint y oxfmt excluyen esta referencia.

Tras esos ajustes se ejecutaron typecheck, tests (109 archivos, 603 correctas y 2 omitidas), build y las comprobaciones de diferencias de Git, con resultado correcto. Lint mantuvo los siete avisos y los 362 archivos con formato pendiente preexistentes. Se revisó el estado Git y el formato dirigido de los documentos modificados y `tsconfig.json`. La configuración de rutas largas para recuperar la copia se explica en [fuentes locales](fuentes-locales.md).
