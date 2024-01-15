const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('node:fs').promises;
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/', async (req, res) => {
    const { nombre, email } = req.body;
    const fichero = path.join(__dirname, 'usuarios.json');

    try {
        let usuarios = [];

        // Verificar si el archivo existe antes de intentar leerlo
        const existe = await fs.access(fichero)
            .then(() => true)
            .catch(() => false);

        // Si existe, leer el archivo y parsear su contenido si no está vacío
        if (existe) {
            const data = await fs.readFile(fichero, 'utf-8');

            // Verificar si el contenido del archivo no está vacío
            if (typeof data === 'string' && data.trim() !== '') {
                usuarios = JSON.parse(data);
            }
        }

        // Agregar el nuevo usuario a la lista existente
        usuarios.push({ nombre, email });

        // Escribir la lista actualizada en el archivo JSON
        await fs.writeFile(fichero, JSON.stringify(usuarios));

        res.send(`<p>Gracias por registrarte ${nombre} con email ${email}</p>`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});
