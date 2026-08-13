# Registro de Errores y Auditorías - Programación proyecto personal

## Auditoría - 13/08/2026

### Sección A — Hallazgos

| Tipo | Descripción | Archivo / Línea | Severidad |
|---|---|---|---|
| `[VULNERABILIDAD]` | XSS (Cross-Site Scripting): El nombre ingresado en el formulario se devuelve directamente en el HTML de respuesta sin sanitizar. Un script malicioso podría ejecutarse en el navegador. | `Backend/server.js` (línea 40) | Alta |
| `[ERROR]` | Falta de control de excepciones (Regla 2.4): La lectura y parseo de `mensajes.json` no está en un bloque `try/catch`. Si el JSON es inválido, el servidor completo colapsará. | `Backend/server.js` (línea 25-28) | Media |
| `[RENDIMIENTO]` | El iframe del video de YouTube no utiliza carga diferida, lo que puede ralentizar la carga inicial de la página web. | `index.html` (línea 169) | Baja |
| `[INCONSISTENCIA]` | La tabla HTML tiene el atributo obsoleto `border="1"`. Los bordes ya están siendo manejados correctamente en `styles.css`. | `index.html` (línea 89) | Baja |

### Sección B — Correcciones Aplicadas

- **`[VULNERABILIDAD]` XSS en `server.js`:** Se implementó una sanitización básica del campo `nombre` utilizando una expresión regular para escapar los caracteres `<` y `>`.
- **`[ERROR]` try/catch en `server.js`:** Se envolvió toda la lógica de lectura y escritura del JSON en un bloque `try...catch` retornando un error HTTP 500 elegante en caso de fallo, protegiendo al servidor.
- **`[RENDIMIENTO]` Iframe en `index.html`:** Se agregó el atributo `loading="lazy"` a la etiqueta `<iframe>` para mejorar el rendimiento.
- **`[INCONSISTENCIA]` Tabla en `index.html`:** Se eliminó el atributo `border="1"` obsoleto, centralizando los estilos en CSS.