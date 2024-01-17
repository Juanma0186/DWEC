const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    //Creamos el filePath que modificaremos según la url
    let filePath;

    //Comprobamos la url requerida y modificamos el filePath
    switch (req.url) {
        case '/saludo':
            filePath = path.join(__dirname, 'public', 'saludo.html');
            break;
        case '/despedida':
            filePath = path.join(__dirname, 'public', 'despedida.html');
            break;
        default:
            filePath = path.join(__dirname, 'public', 'index.html');
            break;
    }

    //Leemos el archivo y lo mostramos en el navegador
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Error interno en el servidor</h1>');
        } else {

            // Obtenemos la extensión del archivo solicitado
            const extension = path.extname(filePath);

            // Definimos tipos MIME para diferentes extensiones
            const varios = {
                '.css': 'text/css',
                '.html': 'text/html',
            };

            // Obtenemos el tipo MIME basado en la extensión de archivo
            const tipoMime = varios[extension] || 'application/octet-stream';
            console.log(data);
            res.writeHead(200, { 'Content-Type': tipoMime });
            res.end(data);
        }
    })
});

const port = 3000;

server.listen(port, () =>
    console.log(`Servidor iniciado en puerto ${port}`)
);
