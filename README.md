# 🍔 nutriscore.app

## Control de versiones

### v2.0

- Calculador
  - Deprecado de categorías en favor del campo tipo de producto
- Búsqueda
  - Obtención de resultados en DB local
  - Actualización periódica de la DB local a partir de OFF
  - Auto-filtrado previo basado en el nuevo campo tipo de producto
  - Click en un resultado muestra su detalle

### v1.0

- Calculador
  - Introducir parámetros nutricionales requeridos por el Nutri-Score en un formulario
  - Validación automática de parámetros
  - Soporte para las distintas cuatro categorías
  - Capacidad de modificar valores de manera iterativa
  - Capacidad para resetear valores
- Detalle de Nutri-Score
  - Obtención del resultado Nutri-Score
  - Explicación desglosada de la puntuación A y C
  - Explicación del cálculo de la puntuación final
  - Tabla resumen con los valores asociados a la puntuación final
- Sugerencias
  - Selección del valor Nutri-Score deseado
  - Recomendaciones para alcanzar el valor Nutri-Score deseado
- Búsqueda
  - Capacidad para buscar productos a través de la API de Open Food Facts (OFF)
  - Obtención de tabla de resultados con correspondiente información nutricional
  - Capacidad de filtrado y ordenación de resultados
