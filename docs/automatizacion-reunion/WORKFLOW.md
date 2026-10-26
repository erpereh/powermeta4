# Flujos del cuadre de nómina

Los diagramas actuales sintetizan hechos E02–E24 de [AS_IS](AS_IS.md).
Los diagramas futuros son propuestas; no representan rutas ya implementadas.

## Proceso manual observado

```mermaid
flowchart TD
  A[Recibir incidencias y fuentes externas] --> B[Informar valores e incidencias en PeopleNet]
  B --> C[Acumular y calcular nómina con IRPF]
  C --> D[Obtener informe normal del periodo]
  E[Libro del mes anterior guardado en red] --> F[Preparar hojas y tablas dinámicas]
  D --> F
  G[Mercer, colectivo, cuotas, comidas y otros originales] --> F
  F --> H[Cruzar matrículas y comparar conceptos]
  H --> I{¿Hay diferencias?}
  I -->|No| J[Continuar revisión]
  I -->|Sí| K[Buscar causa y anotar comentario]
  K --> L{¿Diferencia justificada?}
  L -->|Sí| J
  L -->|No| M[Resolver por procedimiento habitual]
  M --> C
  J --> N[Conservar libro de cuadre]
```

La carga de datos y el cálculo ERP son prerrequisitos observados. La nueva
herramienta no ejecutará B, C ni M en su primera versión.

## Flujo propuesto de usuario

```mermaid
flowchart TD
  A[Sidebar - Herramientas - Cuadre de nómina] --> B[Validar sesión y sociedad en servidor]
  B --> C[Elegir periodo y ejecuciones]
  C --> D{¿Hay actual válido?}
  D -->|No| E[Explicar que falta informe guardado]
  D -->|Sí| F[Confirmar población y aportar fuentes]
  F --> G[Vista previa de estructura, periodo y cobertura]
  G --> H[Analizar con reglas acreditadas]
  H --> I[Mostrar resultados y pendientes por control]
  I --> J[Revisar diferencias y añadir notas]
  J --> K{¿Requiere actuación ERP?}
  K -->|Sí| L[Corrección manual fuera de la herramienta]
  L --> C
  K -->|No| M[Solicitar expediente Excel]
  M --> N{¿Coinciden huellas y contexto?}
  N -->|No| O[Invalidar resultado y pedir nueva revisión]
  O --> H
  N -->|Sí| P[Descargar resultados, cobertura y revisión]
```

## Flujo técnico propuesto

```mermaid
sequenceDiagram
  actor U as Usuario RRHH
  participant UI as Pantalla de cuadre
  participant API as Handlers Node.js
  participant CTX as Sesión y contexto operativo
  participant SQL as Lectores PeopleNet
  participant PAR as Perfiles de archivos
  participant ENG as Motor puro
  U->>UI: Seleccionar ejecuciones y ficheros
  UI->>API: Preview con fuentes y metadatos
  API->>CTX: Validar sesión, contexto y origen
  API->>PAR: Validar límites, estructura y periodo
  PAR-->>API: Contratos reconocidos o pendientes
  API-->>UI: Vista previa mínima
  U->>UI: Confirmar población y analizar
  UI->>API: Claves, fuentes y reglas permitidas
  API->>CTX: Resolver sociedad en servidor
  API->>SQL: Releer ejecuciones con sociedad parametrizada
  SQL-->>API: Cabeceras y filas originales
  API->>PAR: Normalizar fuentes sin ejecutar contenido
  PAR-->>API: Valores y evidencia de origen
  API->>ENG: Comparar entradas acreditadas
  ENG-->>API: Hallazgos y cobertura
  API->>CTX: Comprobar vigencia del contexto
  API-->>UI: Resultado seguro y huellas
  U->>UI: Anotar revisión y exportar
  UI->>API: Entradas, huella y anotaciones
  API->>SQL: Releer con contexto válido
  API->>ENG: Recalcular y verificar huella
  alt Datos o contexto cambiados
    API-->>UI: Resultado obsoleto; revisar de nuevo
  else Evidencia idéntica
    API-->>UI: Excel en memoria, no-store
  end
```

No hay flecha hacia el chat, un modelo de lenguaje, escrituras SQL, servicios
de cálculo ERP ni portales externos.

## Decisión por hallazgo

```mermaid
flowchart TD
  A[Persona y métrica del control] --> B{¿Contrato y fuentes disponibles?}
  B -->|No| C[Falta fuente o no comparable]
  B -->|Sí| D{¿Identidad y unidad inequívocas?}
  D -->|No| E[Pendiente de resolver identidad o magnitud]
  D -->|Sí| F{¿Ambos valores son válidos?}
  F -->|No| G[Ausencia explícita o error de datos]
  F -->|Sí| H[Calcular delta a precisión conservada]
  H --> I{¿Dentro de tolerancia?}
  I -->|Sí| J[Coincide; conservar evidencia]
  I -->|No| K[Con diferencia]
  K --> L{¿Hay evidencia contextual acreditada?}
  L -->|Sí| M[Mostrar evidencia sin afirmar causalidad automática]
  L -->|No| N[Motivo desconocido - pendiente]
  M --> O[Revisión humana]
  N --> O
```

Una ausencia explícita de persona en una ejecución es un resultado de
cobertura. No implica, por sí sola, una baja laboral ni un importe cero.

## Dependencias e invalidación

| Cambia                                  | Recalcular / invalidar                                      |
| --------------------------------------- | ----------------------------------------------------------- |
| Ejecución actual o su contenido         | Todos los controles y revisiones cuyo operando cambie.      |
| Ejecución anterior                      | C01, C02, C08 y C15.                                        |
| Fuente Mercer                           | C03 y sus subcontroles.                                     |
| Colectivo/tarifa/calendario teletrabajo | C05.                                                        |
| Comisiones y ventana                    | C06.                                                        |
| Archivos/cuotas apartamentos            | C07, conservando distintas estancias.                       |
| Ausencias/valoración comida             | C09.                                                        |
| Pedido/descargas/reparto tarjeta        | C10.                                                        |
| Registro de excesos                     | C11.                                                        |
| Calendario anticipos                    | C12.                                                        |
| Lista anual/referencia de aniversarios  | C13.                                                        |
| Calendario personal de pensiones        | C14.                                                        |
| Altas/cuota mensual de gimnasio         | C16.                                                        |
| Regla, perfil o tolerancia              | Controles dependientes; revisar su huella de evidencia.     |
| Sociedad o sesión                       | Vaciar la visita y descartar todas las respuestas en curso. |

Los cambios de fuente no hacen que un resultado antiguo cambie de forma
invisible. Una anotación se reutiliza únicamente si su hallazgo y la evidencia
siguen siendo idénticos.

## Validación de originales propuesta

```mermaid
flowchart TD
  A[Fuente original con perfil y hash] --> B{¿Bloque y periodo reconocidos?}
  B -->|No| C[Contrato pendiente o formato cambiado]
  B -->|Sí| D[Leer entradas primitivas y todas las filas del bloque]
  D --> E{¿Identidad autorizada y regla completa?}
  E -->|No| F[Conservar fila sin vincular o regla pendiente]
  E -->|Sí| G[Calcular esperado con signo y unidad del perfil]
  G --> H[Comparar con ejecución SQL seleccionada]
  H --> I[Mostrar delta y diferencia con el snapshot manual si existe]
  F --> J[Resultado parcial con cobertura explícita]
  C --> J
  I --> J
```

Ni el color, ni una celda «OK», ni la coincidencia con una copia de nómina
convierten una fuente derivada en independiente. Las excepciones de
[VALIDATION](VALIDATION.md) deben mantenerse visibles hasta resolverlas.
