import express from "express";
// ? Importamos el modulo para crear requires en ES6
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const app = express();
const port = 3000;
// ? Importamos el archivo JSON con el require
const ARCHIVO = require("./tareas.json");

app.get("/", (req, res) => {
  res.json(ARCHIVO);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
