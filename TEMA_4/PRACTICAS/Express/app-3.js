const express = require('express');
const app = express();
const port = 3000;

app.get('/tarea/:nombreTarea', (req, res, next) => {
    if (req.params.nombreTarea !== '') {
        // Parámetros de ruta
        const nombreTarea = req.params.nombreTarea;

        let resultado = `Tarea: ${nombreTarea}`;

        // Parámetros de consulta
        const { autor } = req.query;

        if (autor) {
            resultado += ` - Autor: ${autor}`;
            resultado += `\nHola ${autor}!`;
        }

        res.send(resultado);
    } else {
        next();
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en ${port}`);
});
