import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // Permitir conexión con el frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hola desde el backend!" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});