# Inventario y cobertura

El inventario de 2026-10-02 cuenta 33.518 archivos de la copia tras comprobar las rutas largas durante su incorporación a Git. El recuento inicial omitía un HTML de caché; véase [fuentes locales](../referencias/fuentes-locales.md). La cobertura principal identifica 771 rutas lógicas en 2.090 JSP españoles o compartidos de autoservicio y plataforma. Se añaden 343 rutas de dependencias alcanzadas por referencias estáticas. Una ruta lógica puede ser una pantalla, wrapper, cuerpo, controlador o copia histórica. No son 771 pantallas públicas.

| Perfil      | Dominio      | Rutas documentadas | Matriz                                                  | Huellas                                       |
| ----------- | ------------ | ------------------ | ------------------------------------------------------- | --------------------------------------------- |
| empleado    | conocimiento | 1                  | [empleado/conocimiento](empleado-conocimiento.md)       | [SHA-256](hashes-empleado-conocimiento.md)    |
| empleado    | datos        | 45                 | [empleado/datos](empleado-datos.md)                     | [SHA-256](hashes-empleado-datos.md)           |
| empleado    | organizacion | 50                 | [empleado/organizacion](empleado-organizacion.md)       | [SHA-256](hashes-empleado-organizacion.md)    |
| empleado    | retribucion  | 96                 | [empleado/retribucion](empleado-retribucion.md)         | [SHA-256](hashes-empleado-retribucion.md)     |
| empleado    | talento      | 99                 | [empleado/talento](empleado-talento.md)                 | [SHA-256](hashes-empleado-talento.md)         |
| empleado    | tiempo       | 32                 | [empleado/tiempo](empleado-tiempo.md)                   | [SHA-256](hashes-empleado-tiempo.md)          |
| responsable | equipo       | 78                 | [responsable/equipo](responsable-equipo.md)             | [SHA-256](hashes-responsable-equipo.md)       |
| responsable | retribucion  | 47                 | [responsable/retribucion](responsable-retribucion.md)   | [SHA-256](hashes-responsable-retribucion.md)  |
| responsable | talento      | 135                | [responsable/talento](responsable-talento.md)           | [SHA-256](hashes-responsable-talento.md)      |
| responsable | tareas       | 38                 | [responsable/tareas](responsable-tareas.md)             | [SHA-256](hashes-responsable-tareas.md)       |
| responsable | tiempo       | 24                 | [responsable/tiempo](responsable-tiempo.md)             | [SHA-256](hashes-responsable-tiempo.md)       |
| transversal | componentes  | 46                 | [transversal/componentes](transversal-componentes.md)   | [SHA-256](hashes-transversal-componentes.md)  |
| transversal | dependencias | 302                | [transversal/dependencias](transversal-dependencias.md) | [SHA-256](hashes-transversal-dependencias.md) |
| transversal | filtros      | 17                 | [transversal/filtros](transversal-filtros.md)           | [SHA-256](hashes-transversal-filtros.md)      |
| transversal | navegacion   | 103                | [transversal/navegacion](transversal-navegacion.md)     | [SHA-256](hashes-transversal-navegacion.md)   |
| transversal | organizacion | 1                  | [transversal/organizacion](transversal-organizacion.md) | [SHA-256](hashes-transversal-organizacion.md) |

Cada fila enumera fuentes BASE/CYC/IBER/COLL, número de versiones SHA-256, dependencias y ficha. `Estática; P01–P06` exige verificar publicación, autorización, reglas, contratos, estados en ejecución y dependencias antes de declarar una implementación completa.

| Clasificación de archivos originales | Cantidad |
| ------------------------------------ | -------- |
| recurso-o-soporte                    | 2866     |
| runtime-java-y-configuracion         | 3176     |
| dependencia-o-generacion-alternativa | 18533    |
| localizacion-secundaria              | 6285     |
| ayuda-sdk-administracion             | 568      |
| fuente-funcional                     | 2090     |

Consultar [fuentes y duplicados](fuentes-y-duplicados.md), [otros recursos](otros-recursos.md), [dependencias](dependencias.md) y [pendientes](../implementacion/pendientes.md). Las clasificaciones por nombre/estructura orientan la lectura y no sustituyen la comprobación de exposición.
