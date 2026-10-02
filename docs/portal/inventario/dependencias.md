# Dependencias y límites de resolución

Se analizaron 20736 referencias locales y externas en las fuentes documentadas.

| Resultado  | Referencias |
| ---------- | ----------- |
| física     | 9561        |
| contextual | 4032        |
| ausente    | 4332        |
| dinámica   | 2728        |
| externa    | 83          |

Las fichas muestran, para cada referencia, la sociedad, línea, expresión original saneada y candidatos. El algoritmo comprueba primero el camino físico relativo; para caminos públicos enumera candidatos personalizados y base. No simula `CheckSecurity`, herencia del árbol ni resolución de expresiones Java.

Una referencia inexistente no confirma un enlace roto: puede ser un recurso virtual del servlet. Los recursos de imagen/CSS y bibliotecas de terceros se clasifican en el inventario general; no se transforman en pantallas. Las referencias dinámicas y ausentes se trazan individualmente en las fichas (P06).

| Matriz                                                  | Rutas con detalle de dependencias |
| ------------------------------------------------------- | --------------------------------- |
| [empleado/conocimiento](empleado-conocimiento.md)       | 1                                 |
| [empleado/datos](empleado-datos.md)                     | 45                                |
| [empleado/organizacion](empleado-organizacion.md)       | 50                                |
| [empleado/retribucion](empleado-retribucion.md)         | 96                                |
| [empleado/talento](empleado-talento.md)                 | 99                                |
| [empleado/tiempo](empleado-tiempo.md)                   | 32                                |
| [responsable/equipo](responsable-equipo.md)             | 78                                |
| [responsable/retribucion](responsable-retribucion.md)   | 47                                |
| [responsable/talento](responsable-talento.md)           | 135                               |
| [responsable/tareas](responsable-tareas.md)             | 38                                |
| [responsable/tiempo](responsable-tiempo.md)             | 24                                |
| [transversal/componentes](transversal-componentes.md)   | 46                                |
| [transversal/dependencias](transversal-dependencias.md) | 302                               |
| [transversal/filtros](transversal-filtros.md)           | 17                                |
| [transversal/navegacion](transversal-navegacion.md)     | 103                               |
| [transversal/organizacion](transversal-organizacion.md) | 1                                 |
