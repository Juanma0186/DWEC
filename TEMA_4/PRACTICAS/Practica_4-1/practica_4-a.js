const fs = require('node:fs');
const archivo = 'IA.txt';

fs.readFile(archivo, 'utf8', (err, data) => {
    if (err) {
        console.log(`Error al leer el archivo "${archivo}": ${err.message}`);
        return;
    }
    console.log(`Archivo "${archivo}" leído correctamente.`);
    console.log('\n\n' + data);
});
