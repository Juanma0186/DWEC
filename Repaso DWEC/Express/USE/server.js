import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
