import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import funcionariosRoutes from "./src/routes/funcionariosRoutes.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "public", "index.html"));
});

app.use(express.static(path.join(__dirname, "src", "public")));

app.use("/funcionarios", funcionariosRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});