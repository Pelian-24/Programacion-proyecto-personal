const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..")));
app.use(express.urlencoded({ extended: true }));

app.post("/contacto", (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const nuevoMensaje = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        fecha: new Date().toLocaleString("es-AR")
    };

    const archivoMensajes = path.join(__dirname, "mensajes.json");

    let mensajes = [];

    // MANEJO DE ERRORES: Prevenimos caídas del servidor si el JSON se corrompe (Regla 2.4)
    try {
        if (fs.existsSync(archivoMensajes)) {
            const contenido = fs.readFileSync(archivoMensajes, "utf8");
            mensajes = JSON.parse(contenido || "[]");
        }

        mensajes.push(nuevoMensaje);

        fs.writeFileSync(
            archivoMensajes,
            JSON.stringify(mensajes, null, 4),
            "utf8"
        );
    } catch (error) {
        console.error("Error al gestionar el archivo de mensajes:", error);
        return res.status(500).send("<h1>Error interno</h1><p>Ocurrió un error al guardar el mensaje. Inténtalo más tarde.</p><a href='/index.html'>Volver al inicio</a>");
    }

    // SANITIZACIÓN BÁSICA: Prevenimos XSS escapando los caracteres peligrosos del nombre antes de inyectarlo en HTML
    const nombreSeguro = (nombre || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    res.send(`
        <h1>Mensaje enviado correctamente</h1>
        <p>Gracias por contactarte, ${nombreSeguro}.</p>
        <a href="/index.html">Volver al inicio</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
