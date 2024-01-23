import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARCHIVO = "data.json";
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let ciudades = [];

leerCiudades();
async function leerCiudades() {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "public", ARCHIVO),
      "utf-8"
    );
    ciudades = JSON.parse(data);
  } catch (error) {
    console.error(error);
    ciudades = [];
  }
}

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
    res.render("tareas", { ciudades: [] });
  }
});

app.listen(3000, () => console.log("Listening on http://localhost:3000/"));
