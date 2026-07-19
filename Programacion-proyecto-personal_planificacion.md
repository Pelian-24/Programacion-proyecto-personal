# Proyecto: Programación proyecto personal
- **Tipo:** 1 (Web interactiva con backend básico)
- **Magnitud:** Pequeño
- **Stack principal:** HTML, CSS, JavaScript, Node.js (Express)
- **Fecha de inicio:** Anterior a Julio 2026 (Integrado al flujo el 18/07/2026)

## 1. Objetivo y Alcance
Desarrollar una página web que sirva de guía básica para un juego de rol inspirado en Dungeons & Dragons y adaptado al universo de magia (Harry Potter). Contiene mecánicas de personajes, mapa, combate y un formulario de contacto.

## 2. Stack Tecnológico Completo
- Frontend: HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- Backend: Node.js, Express
- Base de datos: Sistema de archivos locales (JSON: `mensajes.json`)

## 3. Estructura de Carpetas y Archivos
- `/` (Raíz)
  - `index.html` (Vista principal)
  - `styles.css` (Estilos)
  - `script.js` (Lógica Frontend)
  - `readme.md` (Información del proyecto)
- `/Carpeta-de-imagenes/` (Assets visuales)
- `/Backend/`
  - `server.js` (Servidor Node.js)
  - `mensajes.json` (Almacenamiento de contactos)

## 6. Fases del Proyecto
### Fase 1 — Estructura base y estilos
- ✅ [COMPLETADO] Crear estructura HTML de la página principal.
- ✅ [COMPLETADO] Diseñar CSS con variables, fuentes de Google Fonts y diseño responsive.
   > 🤖 Asistido por: Elian (Trabajo previo) | Fecha: Anterior al 18/07/2026
### Fase 2 — Backend y conectividad
- ✅ [COMPLETADO] Crear servidor con Express para servir archivos estáticos y endpoint POST /contacto.
- 🔄 [EN PROGRESO] Conectar el formulario `index.html` con la ruta local de Express (actualmente usa Formspree).
   > [Modificado: 18/07/2026 — 20:55]
### Fase 3 — Lógica Frontend
- ⬜ [PENDIENTE] Definir e implementar interactividad en `script.js`.

## 8. Notas y Observaciones
- Proyecto preexistente adaptado exitosamente al Flujo de Trabajo v2.0.
- Pendiente confirmar con el usuario si desea conectar el formulario con el backend local y qué funcionalidades añadiremos al JavaScript.
