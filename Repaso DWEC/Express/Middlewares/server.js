import express from "express";
const app = express();
const port = 3000;

// Middleware
const autenticar = (req, res, next) => {
  console.log("Autenticando...");

  if (req.headers.token == "1234") {
    next();
  } else {
    res.status(401).send("Usuario no autenticado");
  }
};

app.get("/ruta", autenticar, (req, res) => {
  res.send("Welcome!");
});

app.get("/ruta_publica", (req, res) => {
  res.send("Ruta pública y sin autenticación");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
