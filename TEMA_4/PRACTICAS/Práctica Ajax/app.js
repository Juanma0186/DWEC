import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import morgan from "morgan";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARCHIVO = "data.json";
const ciudades = require("./public/data.json");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.get("/ciudades", (req, res) => {
  res.json(ciudades);
});

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(join(__dirname, "public", ARCHIVO), "utf8");
    const datos = JSON.parse(data);
    const ciudades = datos;
    res.status(200).json(ciudades);
  } catch (error) {
    res.render("Ciudades", { ciudades: [] });
  }
});

app.post("/", async (req, res) => {
  try {
    const newCiudad = {
      nombre: req.body.nombre,
      web: req.body.web,
    };
    ciudades.push(newCiudad);

    await fs.writeFile(path.join(__dirname, 'public', ARCHIVO), JSON.stringify(ciudades), 'utf-8')


    res.status(201).json(ciudades)
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => console.log("Listening on http://localhost:3000/"));
