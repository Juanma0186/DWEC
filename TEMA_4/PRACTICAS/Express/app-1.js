const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hola Mundo!');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en ${port}`)
})
