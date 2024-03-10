// ? Importamos el módulo http
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
// ? Importamos el módulo fs
const fs = require("fs");

const ARCHIVO = "archivo.txt";

// ? Creamos el server
const server = http.createServer((req, res) => {
  fs.readFile(ARCHIVO, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Not Found\n");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    }
  });
});

// ? Escuchamos el server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
