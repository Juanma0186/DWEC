const express = require("express");
const app = express();
const path = require("node:path");
const cors = require('cors');
const fs = require('node:fs').promises;
const PORT = 8080;

app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
