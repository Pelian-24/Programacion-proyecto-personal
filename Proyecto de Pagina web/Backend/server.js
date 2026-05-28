const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

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

    res.send(`
        <h1>Mensaje enviado correctamente</h1>
        <p>Gracias por contactarte, ${nombre}.</p>
        <a href="/">Volver al inicio</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});