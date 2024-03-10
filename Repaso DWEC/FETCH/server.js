import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(express.static("src"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.post("/", (req, res) => {
  const tarea = {
    descripcion: req.body.descripcion,
    estado: req.body.estado,
  };

  // Lógica para guardar la tarea en el JSON
  res.json(tarea);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
