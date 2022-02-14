# 🍔 nutriscore.app

## Control de versiones

### v1.2

- Búsqueda
  - Actualización periódica de la DB local a partir de OFF
  - Click en un resultado muestra su detalle

### v1.1

- Calculador
  - Deprecado de `categoría` en favor del campo `grupo` de producto
  - Nueva sección que muestra productos relacionados al calculado
- Sugerencias
  - Los mensajes ahora incorporan información de productos relacionados
- Búsqueda
  - Obtención de resultados en DB local
  - Auto-filtrado previo basado en el nuevo campo `grupo` de producto

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
